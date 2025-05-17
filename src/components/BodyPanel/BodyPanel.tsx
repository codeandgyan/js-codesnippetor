import React from "react";
import type { Cell } from "../../types/cell";
import CodeBlock from "./CodeBlock";
import Separator from "./Separator";

type Props = {
  items: Cell[];
  onAddBlock: (currentCellId: string, type: string) => void;
};

function BodyPanel({ items, onAddBlock }: Readonly<Props>) {
  return (
    <div className="bg-bg5 w-full text-fg3 overflow-y-auto">
      <div className="flex flex-col gap-4 h-full p-5">
        {items.map((item) => (
          <React.Fragment key={item.id}>
            <div className="relative mb-5">
              {item.type === "code" && <CodeBlock item={item} />}
              <Separator
                id={item.id}
                onAddBlock={onAddBlock}
              />
            </div>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}

export default BodyPanel;
