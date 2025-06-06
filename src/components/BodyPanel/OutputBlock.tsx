import { MessageSquareCode } from "lucide-react";
import { useEffect } from "react";
import useCodeExecutor from "../../hooks/useExecutor";

type Props = {
  id: string;
  code: string;
  changeVersion?: number;
};
function OutputBlock({ id, code }: Readonly<Props>) {
  const { executeCode, codeOutputMap } = useCodeExecutor();
  const results = codeOutputMap?.[id] || [];

  useEffect(() => {
    if (!code || !id) return;
    executeCode(code, id);
  }, [executeCode, code, id]);

  return (
    <div className="max-h-40 overflow-y-auto flex shadow-lg rounded-b-lg pb-1">
      <div className="w-12 place-items-center px-2">
        <MessageSquareCode className="" />
      </div>
      <div className="flex flex-col w-full px-[10px]">
        {results?.map((result) => {
          return (
            <p
              key={result.messageId}
              className={`font-consolas text-sm ${
                result.isError ? "text-red-500" : "text-fg5"
              } ${result.message === "undefined" ? "!text-fg0/80" : ""}`}
            >
              {result.message}
            </p>
          );
        })}
      </div>
    </div>
  );
}

export default OutputBlock;
