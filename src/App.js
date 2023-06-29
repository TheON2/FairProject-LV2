import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Detail from "./pages/Detail/Detail";
import { Main } from "pages/Main";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/:id" element={<Detail />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
