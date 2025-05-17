import "./App.css";
import BodyPanel from "./components/BodyPanel/BodyPanel";

import SideBar from "./components/SideBar";
import Header from "./components/Header";
import { useState } from "react";
import type { Cell } from "./types/cell";

function App() {
  const [items, setItems] = useState<Cell[]>([
    {
      id: "yk2bcd",
      type: "code",
      content: "",
      language: "javascript",
    },
  ]);

  const onAddBlock = (currentCellId: string, type: string) => {
    // TODO: currentCellId needs to be considered for inserting the new block after the current cell
    const newId = crypto.randomUUID();
    setItems((prev) => {
      const newItems = [
        ...prev,
        { id: newId, type, content: "", language: "javascript" } as Cell,
      ];
      return newItems;
    });
  };

  return (
    <div className="w-full min-h-screen flex flex-col font-sans">
      <div className="flex-0">
        <Header />
      </div>
      <div className="flex-1 flex mt-14">
        <SideBar />
        <BodyPanel
          items={items}
          onAddBlock={(currentCellId: string, type: string) => {
            onAddBlock(currentCellId, type);
          }}
        />
      </div>
    </div>
  );
}

export default App;
