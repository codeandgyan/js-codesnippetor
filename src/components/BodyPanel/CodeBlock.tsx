import Editor, { type OnMount } from "@monaco-editor/react";
import type { Cell } from "../../types/cell";

type Props = {
  item: Cell;
};

function CodeBlock({ item }: Readonly<Props>) {
  const onMount: OnMount = (monacoEditor, monaco) => {
    // editorRef.current = monacoEditor;
    console.log(monacoEditor);
    monaco.languages.typescript.typescriptDefaults.setDiagnosticsOptions({
      // noSemanticValidation: true,
      noSyntaxValidation: true,
    });
  };

  return (
    <div className="flex border-bd3 border min-h-20 w-full">
      <div className="bg-bg6 p-2">Run</div>
      <div className="flex-1 bg-bg1 py-2">
        <Editor
          // onChange={(e) => onChange(e || "")}
          onMount={onMount}
          // value={item.content}
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
  );
}

export default CodeBlock;
