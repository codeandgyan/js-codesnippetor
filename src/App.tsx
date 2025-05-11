import "./App.css";
import BodyPanel from "./components/BodyPanel/BodyPanel";

import SideBar from "./components/SideBar";
import TitleMenu from "./components/TitleMenu";

function App() {
  return (
    <div className="w-full min-h-screen flex flex-col font-sans">
      <div className="flex-0">
        <TitleMenu />
      </div>
      <div className="flex-1 flex">
        <SideBar />
        <BodyPanel
          items={[
            {
              id: "yk2bcd",
              type: "code",
              content: "console.log('Hello World')",
              language: "javascript",
            },
          ]}
        />
      </div>
    </div>
  );
}

export default App;
