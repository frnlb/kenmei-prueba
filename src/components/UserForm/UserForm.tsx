import React, { Children, useState } from "react";
import Button from "components/Button/Button";
import { UserContextProps } from "../../hooks/userContext";

export interface UserFormProps {
  user: UserContextProps["user"];
  onSubmit: (param: boolean) => void;
  valid?: boolean;
  handleSubmit?: any;
  editUser: any;
}

const UserForm = ({ onSubmit, valid, editUser, user }: UserFormProps) => {
  const handleChange = (ev: any) => {
    editUser({
      ...user,
      [ev.target.name]: ev.target.value,
    });
  };
  const handleSubmit = (ev: any) => {
    ev.preventDefault();
    onSubmit(false);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Nombre:
        <input name="name" onChange={handleChange} value={user?.name} />
      </label>
      <label>
        Email:
        <input name="email" value={user?.email} onChange={handleChange} />
        <Button
          type="submit"
          disable={user?.email === "" && user?.name === ""}
          intent="primary"
          label="ENVIAR"
        />
      </label>
    </form>
  );
};

export default UserForm;
