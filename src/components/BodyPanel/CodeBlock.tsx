import Editor, { type OnMount } from "@monaco-editor/react";
import * as monacoEditor from "monaco-editor";
import type { Block } from "../../types/block";
import { ArrowDown, ArrowUp, Copy, Play, Trash2 } from "lucide-react";
import { useRef, useState } from "react";
import OutputBlock from "./OutputBlock";

type Props = {
  item: Block;
};

const minHeight = 40;
const lineHeight = 20;

function CodeBlock({ item }: Readonly<Props>) {
  const editorRef = useRef<monacoEditor.editor.IStandaloneCodeEditor | null>(
    null
  );

  const [editorHeight, setEditorHeight] = useState<number>(minHeight);
  const content = useRef(item.content);
  const [code, setCode] = useState(item.content);
  const [showActions, setShowActions] = useState(false);

  const onMount: OnMount = (editor, monaco) => {
    editorRef.current = editor;

    let previousLineCount = editor.getModel()?.getLineCount() || 1;

    editor.onDidChangeModelContent(() => {
      const model = editor.getModel();
      if (!model) return;

      const currentLineCount = model.getLineCount();

      if (currentLineCount > previousLineCount) {
        const diff = currentLineCount - previousLineCount;
        setEditorHeight((prev) => prev + diff * lineHeight);
      } else if (currentLineCount < previousLineCount) {
        const diff = previousLineCount - currentLineCount;
        setEditorHeight((prev) =>
          Math.max(minHeight, prev - diff * lineHeight)
        );
      }

      previousLineCount = currentLineCount;
    });

    monaco.languages.typescript.typescriptDefaults.setDiagnosticsOptions({
      // noSemanticValidation: true,
      noSyntaxValidation: true,
    });
  };

  const onChange = (value: string) => {
    content.current = value;
  };

  return (
    <div className="flex flex-col gap-2 w-full">
      <div className="flex w-full min-h-fit border border-bd2">
        <div className="p-2 flex bg-bg6">
          <button
            className="bg-bg2 hover:bg-bg3 hover:text-fg2 w-fit h-fit p-2 rounded-lg active:opacity-70 cursor-pointer"
            title="Run"
            onClick={() => {
              setCode(content.current);
            }}
          >
            <Play className="w-4 h-4 text-fg4 hover:text-fg5 cursor-pointer" />
          </button>
        </div>
        <div
          className="relative flex-1 bg-bg1 py-2"
          onMouseEnter={() => setShowActions(true)}
          onMouseLeave={() => setShowActions(false)}
        >
          {showActions && (
            <div className="z-10 absolute right-10 -top-3 flex gap-2 bg-bg6 shadow-lg rounded-sm px-2 py-0.5 text-fg2">
              <button
                className="cursor-pointer rounded-full hover:bg-bg4 p-1"
                title="Copy Code"
              >
                <Copy size={18} />
              </button>
              <button
                className="cursor-pointer rounded-full hover:bg-bg4 p-1"
                title="Move Up"
              >
                <ArrowUp size={18} />
              </button>
              <button
                className="cursor-pointer rounded-full hover:bg-bg4 p-1"
                title="Move Down"
              >
                <ArrowDown size={18} />
              </button>
              <button
                className="cursor-pointer rounded-full hover:bg-bg4 p-1"
                title="Delete Cell"
              >
                <Trash2 size={18} />
              </button>
            </div>
          )}
          <Editor
            onChange={(e) => onChange(e || "")}
            onMount={onMount}
            value={content.current}
            height={editorHeight}
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
              scrollbar: {
                vertical: "hidden",
              },
              tabSize: 1,
              lineNumbers: "off",
              placeholder: `Type your ${item.language} code here...`,
            }}
          />
        </div>
      </div>
      <OutputBlock code={code} id={item.id} />
    </div>
  );
}

export default CodeBlock;
