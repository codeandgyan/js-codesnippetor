import React from "react";
import type { Cell } from "../../types/cell";
import CodeBlock from "./CodeBlock";
import Separator from "./Separator";

type Props = {
  items: Cell[];
};

function BodyPanel({ items }: Readonly<Props>) {
  return (
    <div className="bg-bg5 w-full text-fg3 overflow-y-auto">
      <div className="flex flex-col gap-4 h-full p-5">
        {items.map((item) => (
          <React.Fragment key={item.id}>
            <div className="relative">
              {item.type === "code" && <CodeBlock item={item} />}
              <Separator />
            </div>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}

export default BodyPanel;
