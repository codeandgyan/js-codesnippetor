import { MessageSquareCode } from "lucide-react";
import sandboxHtml from "./sandbox.html?raw";
import { useEffect, useState } from "react";

const MIN_HEIGHT = 40;
const MAX_HEIGHT = 150;

type Props = {
  id: string;
  code: string;
};
function OutputBlock({ id, code }: Readonly<Props>) {
  const [height, setHeight] = useState<number>(MIN_HEIGHT);
  const html = sandboxHtml
    .replace("{{CODE-PLACEHOLDER}}", code)
    .replace("{{CELL-ID-PLACEHOLDER}}", id);

  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      if (event.data?.type === "iframeHeight" && event.data?.cellId === id) {
        const measuredHeight = Math.max(MIN_HEIGHT, event.data.height);
        setHeight(Math.min(MAX_HEIGHT, measuredHeight));
      }
    };

    window.addEventListener("message", handleMessage);
    return () => window.removeEventListener("message", handleMessage);
  }, []);

  return (
    <div className="max-h-40 overflow-y-auto flex shadow-lg rounded-b-lg">
      <div className="w-12 place-items-center px-2">
        <MessageSquareCode className="" />
      </div>
      <iframe
        title={`output-${id}`}
        key={`output-${id}`}
        sandbox="allow-scripts"
        srcDoc={html}
        width={"100%"}
        height={`${height}px`}
        className="px-[10px] max-h-min"
      />
    </div>
  );
}

export default OutputBlock;
