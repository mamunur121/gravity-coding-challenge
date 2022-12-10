import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Title from "./components/Title";
import Details from "./components/Details";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Title />} />
          <Route path="/details/:itemId" element={<Details />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
