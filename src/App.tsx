import "./App.css";
import BodyPanel from "./components/BodyPanel/BodyPanel";

import SideBar from "./components/SideBar";
import Header from "./components/Header";

function App() {
  return (
    <div className="w-full min-h-screen flex flex-col font-sans">
      <div className="flex-0">
        <Header />
      </div>
      <div className="flex-1 flex mt-8">
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
