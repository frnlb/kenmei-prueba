import React, { useContext } from "react";
import UserContext from "./hooks/userContext";

const About = () => {
  const { user } = useContext(UserContext);
  return (
    <div>
      <h1>This is the about page, {user?.name}</h1>
    </div>
  );
};

export default About;
