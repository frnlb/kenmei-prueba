import React, { useContext, useState } from "react";
import Button from "components/Button/Button";
import useCountdown from "hooks/useCountdown";
import Popup from "components/Popup/Popup";
import UserForm from "components/UserForm/UserForm";
import UserContext from "hooks/userContext";
import Layout from "components/Layout/Layout";

const Home = () => {
  const expirationTime = 15;
  const { time, setTime, setStartCountdown, startCountdown } =
    useCountdown(expirationTime);
  const { user, setUser } = useContext(UserContext);
  console.log("time", time);
  console.log({ user });
  return (
    <Layout size="large">
      <h1>Home</h1>
      {user.name && <h2>Hello, {user?.name}</h2>}

      {time < expirationTime * 1000 && (
        <Popup>
          {time}

          <Button
            onClick={() => setStartCountdown(false)}
            label={"Close window"}
            disable={false}
          />
          <UserForm
            user={user}
            editUser={setUser}
            onSubmit={setStartCountdown}
          />
        </Popup>
      )}
      <Button
        onClick={() => setStartCountdown(true)}
        label={
          time < expirationTime * 1000 ? time.toString() : "Start countdown"
        }
        disable={time > 0 && startCountdown}
      />
    </Layout>
  );
};

export default Home;
