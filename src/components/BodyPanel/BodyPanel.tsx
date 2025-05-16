import React from "react";
import type { Cell } from "../../types/cell";
import CodeBlock from "./CodeBlock";

type Props = {
  items: Cell[];
};

function BodyPanel({ items }: Readonly<Props>) {
  return (
    <div className="bg-bg3 w-full text-fg3 overflow-y-auto">
      <div className="flex flex-col gap-4 h-full p-5">
        {items.map((item) => (
          <React.Fragment key={item.id}>
            {item.type === "code" && <CodeBlock item={item} />}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}

export default BodyPanel;
