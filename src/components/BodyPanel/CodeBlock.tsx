import Editor, { type OnMount } from "@monaco-editor/react";
import type { Cell } from "../../types/cell";
import { Play } from "lucide-react";
import { useRef, useState } from "react";
import OutputBlock from "./OutputBlock";

type Props = {
  item: Cell;
};

function CodeBlock({ item }: Readonly<Props>) {
  const code = useRef(item.content);
  const [inputCode, setInputCode] = useState(item.content);
  const onMount: OnMount = (monacoEditor, monaco) => {
    // editorRef.current = monacoEditor;
    console.log(monacoEditor);
    monaco.languages.typescript.typescriptDefaults.setDiagnosticsOptions({
      // noSemanticValidation: true,
      noSyntaxValidation: true,
    });
  };

  const onChange = (value: string) => {
    code.current = value;
  };

  return (
    <>
      <div className="flex w-full min-h-40 border border-bd2">
        <div className="p-2 flex bg-bg6">
          <button
            className="bg-bg2 hover:bg-bg3 hover:text-fg2 w-fit h-fit p-2 rounded-lg active:opacity-70 cursor-pointer"
            title="Run"
            onClick={() => {
              setInputCode(code.current);
            }}
          >
            <Play className="w-4 h-4 text-fg4 hover:text-fg5 cursor-pointer" />
          </button>
        </div>
        <div className="flex-1 bg-bg1 py-2">
          <Editor
            onChange={(e) => onChange(e || "")}
            onMount={onMount}
            value={code.current}
            height={"100%"}
            width={"100%"}
            language={item.language}
            theme="vs-dark"
            options={{
              wordWrap: "on",
              minimap: { enabled: false },
              showUnused: false,
              folding: false,
              fontSize: 14,
              scrollBeyondLastLine: false,
              automaticLayout: true,
              tabSize: 1,
              lineNumbers: "off",
              placeholder: `Type your ${item.language} code here...`,
            }}
          />
        </div>
      </div>
      <OutputBlock code={inputCode} id={item.id} />
    </>
  );
}

export default CodeBlock;
