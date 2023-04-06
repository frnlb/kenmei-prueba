import { Layout } from "components";
import React, { useContext } from "react";
import UserContext from "./hooks/userContext";

const About = () => {
  const { user } = useContext(UserContext);
  return (
    <Layout size="large">
      <h1>This is the about page </h1>
     {user?.name ==="" ? <h1 className="flex justify-center">Deberías registrate</h1> : <h1>Hola, {user?.name}!</h1>}
    </Layout>
  );
};

export default About;
