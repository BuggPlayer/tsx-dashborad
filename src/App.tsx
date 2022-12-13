import React, { useState } from "react";

import "./App.css";
import Project from "./Page/Project";

function App(): JSX.Element {
  const sum = (a: number, b: number): number => {
    return a + b;
  };
  const [state, setstate] = useState("Hello wod!");
  return (
    <>
      <Project />
    </>
  );
}

export default App;
