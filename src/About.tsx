import React, { useContext } from "react";
import UserContext from "./hooks/userContext";

const Test = () => {
  const { user, setUser } = useContext(UserContext);

  console.log("user", user);

  return (
    <div>
      <h1>{user?.name}</h1>
      <button
        onClick={() => setUser && setUser({ name: "Pepe", email: "pepe@pepe" })}
      ></button>
    </div>
  );
};

export default Test;
