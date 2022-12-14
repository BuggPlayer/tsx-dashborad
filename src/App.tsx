import React, { useState } from "react";

import "./App.css";
import Project from "./Page/Project";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProjectDetailsPage from "./Page/ProjectDetailsPage";
function App(): JSX.Element {
  const sum = (a: number, b: number): number => {
    return a + b;
  };
  const [state, setstate] = useState("Hello wod!");
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Project />} />
          <Route path="/details" element={< ProjectDetailsPage/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
