import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import { timer } from "./utils/utils";
import Home from "./Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { UserProvider } from "hooks/userContext";
const App: React.FC = () => {
  return (
    <BrowserRouter>
      <UserProvider>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </UserProvider>
    </BrowserRouter>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
