import type { Cell } from "../../types/cell";
import CodeBlock from "./CodeBlock";

type Props = {
  items: Cell[];
};

function BodyPanel({ items }: Readonly<Props>) {
  return (
    <div className="bg-bg3 w-full text-fg3">
      <div className="flex flex-col gap-2 h-full p-5">
        {items.map((item) => (
          <>{item.type === "code" && <CodeBlock item={item} key={item.id} />}</>
        ))}
      </div>
    </div>
  );
}

export default BodyPanel;
