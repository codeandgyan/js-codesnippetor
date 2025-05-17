import { Plus } from "lucide-react";
type Props = {
  id: string;
  onAddBlock: (currentCellId: string, type: string) => void;
};

function Separator({ id, onAddBlock }: Readonly<Props>) {
  return (
    <div className="group/separator absolute w-full py-3 h-fit flex flex-col items-center justify-center">
      <hr className="group-hover/separator:border-fg0/80 w-full border border-fg5/20 rounded-sm" />
      <div
        className={`opacity-0 group-hover/separator:opacity-100 transition-all duration-300 ease-in-out
            flex absolute w-full justify-center gap-5 text-xs font-roboto`}
      >
        <button
          className={`border-fg0/80 border rounded-2xl px-2 py-1 bg-bg4 active:bg-bg3 active:scale-95 
            flex gap-1 items-center justify-center text-base text-bright-blue hover:bg-bg5 cursor-pointer`}
          onClick={() => {
            onAddBlock(id, "code");
          }}
        >
          <Plus />
          <span>Add Code</span>
        </button>
        <button
          className={`border-fg0/80 border rounded-2xl px-2 py-1 bg-bg4 active:bg-bg3 active:scale-95 
            flex gap-1 items-center justify-center text-base text-bright-blue hover:bg-bg5 cursor-pointer`}
          onClick={() => {
            onAddBlock(id, "text");
          }}
        >
          <Plus />
          <span>Add Text</span>
        </button>
      </div>
    </div>
  );
}

export default Separator;
