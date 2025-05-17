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
    // Write a code to generate a new guid
    const newId = crypto.randomUUID();
    // setItems((prev) => [...prev, { id: newId, type, content: "", language: "javascript" }]);
    setItems((prev) => {
      const newItems = [
        ...prev,
        { id: newId, type, content: "", language: "javascript" } as Cell,
      ];
      return newItems;
    });

    console.log("Add block", currentCellId, type);
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
