import { useContext } from "react";
import { CodeExecutorContext } from "../providers/CodeExecutor";

function useCodeExecutor() {
  const context = useContext(CodeExecutorContext);
  if(!context) {
    throw new Error("useCodeExecutor must be used within a CodeExecutorProvider");
  }
  return context;
}

export default useCodeExecutor;
