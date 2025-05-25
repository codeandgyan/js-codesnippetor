import React, {
  createContext,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import sandboxHtml from "./sandbox.html?raw";
import type { CodeOutputMap } from "../types/codeOutput";

export const CodeExecutorContext = createContext<{
  executeCode: (code: string, cellId: string) => void;
  codeOutputMap?: CodeOutputMap;
  isExecuting?: boolean;
}>({
  executeCode: () => {},
  codeOutputMap: {},
  isExecuting: false,
});

type Props = {
  children: React.ReactNode;
};

function CodeExecutor({ children }: Readonly<Props>) {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [codeOutputMap, setCodeOutputMap] = useState<CodeOutputMap>();
  const [isExecuting, setIsExecuting] = useState(false);

  const executeCode = useCallback((code: string, cellId: string) => {
    setIsExecuting(true);
    // let parsedCode = code.replace(
    //   /\b(const|let|var)\s+(\w+)/g,
    //   (_, _type, name) => "scope." + name
    // );

    // parsedCode = parsedCode.replace(
    //   /function\s+([a-zA-Z_$][\w$]*)\s*\(([^)]*)\)\s*\{([\s\S]*?)\}/g,
    //   (_, name, args, body) =>
    //     "scope." + name + " = function(" + args + ") {" + body + "}"
    // );
    const iframe = iframeRef.current;
    if (iframe) {
      const message = {
        type: "run-code",
        code: code,
        cellId,
      };
      iframe.contentWindow?.postMessage(message, "*");
    }
  }, []);

  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      if (event.data?.type === "code-output") {
        // console.log("Code Output", event.data);
        const { outputs } = event.data;
        // setCodeOutputMap((prev) => {
        //   return {
        //     ...prev,
        //     ...outputs,
        //   };
        // });
        setCodeOutputMap(outputs);

        setIsExecuting(false);
      }
    };

    window.addEventListener("message", handleMessage);
    return () => {
      window.removeEventListener("message", handleMessage);
    };
  }, []);

  return (
    <CodeExecutorContext.Provider
      value={{ executeCode, codeOutputMap: codeOutputMap, isExecuting }}
    >
      <iframe
        ref={iframeRef}
        title={`code-executor`}
        sandbox="allow-scripts"
        srcDoc={sandboxHtml}
        width={0}
        height={0}
      />
      {children}
    </CodeExecutorContext.Provider>
  );
}

export default CodeExecutor;
