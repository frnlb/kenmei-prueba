import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import Home from "./Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { UserProvider } from "hooks/userContext";
import Header from "components/Header/Header";
import About from "./About";

const LINKS = [
  { name: "home", href: "/" },
  { name: "about", href: "/about" },
];

const App: React.FC = () => {

  return (
    <BrowserRouter>
      <UserProvider>
        <Header links={LINKS}/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </UserProvider>
    </BrowserRouter>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
