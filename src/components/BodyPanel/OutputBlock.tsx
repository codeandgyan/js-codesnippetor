import { MessageSquareCode } from "lucide-react";
import sandboxHtml from "./sandbox.html?raw";

type Props = {
  id: string;
  code: string;
};
function OutputBlock({ id, code }: Readonly<Props>) {
  const html = sandboxHtml.replace(
    "23b80585-059d-4b4e-a4d3-b0c1a36dff0b",
    code
  );
  return (
    <div className="max-h-40 overflow-y-auto flex">
      <div className="w-12 place-items-center px-2">
        <MessageSquareCode className="" />
      </div>
      <iframe
        title={`output-${id}`}
        sandbox="allow-scripts"
        srcDoc={html}
        width={"100%"}
        height={"100%"}
        className="px-[10px]"
      />
    </div>
  );
}

export default OutputBlock;
