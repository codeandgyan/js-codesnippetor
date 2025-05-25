import React from "react";
import type { Block } from "../../types/block";
import CodeBlock from "./CodeBlock";
import Separator from "./Separator";
import CodeExecutor from "../../providers/CodeExecutor";

type Props = {
  items: Block[];
  onAddBlock: (currentCellId: string, type: string) => void;
};

function BodyPanel({ items, onAddBlock }: Readonly<Props>) {
  return (
    <CodeExecutor>
      <div className="bg-bg5 w-full text-fg3 overflow-y-auto">
        <div className="flex flex-col gap-4 h-full p-5">
          {items.map((item) => (
            <React.Fragment key={item.id}>
              <div className="relative mb-5">
                {item.type === "code" && <CodeBlock item={item} />}
                <Separator id={item.id} onAddBlock={onAddBlock} />
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>
    </CodeExecutor>
  );
}

export default BodyPanel;
