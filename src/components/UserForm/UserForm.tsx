import React from "react";
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
    <form onSubmit={handleSubmit} className="flex flex-col py-4">
      <label className="p-2">
        Nombre:
        <input name="name" onChange={handleChange} value={user?.name} className="border-b-[1px] w-full"/>
      </label>
      <label className="p-2">
        Email:
        <input name="email" value={user?.email} onChange={handleChange} className="border-b-[1px] w-full"/>
        <div className="flex justify-center p-3">
          <Button
          type="submit"
          disable={user?.email === "" && user?.name === ""}
          intent="primary"
          label="ENVIAR"
        /></div>
      </label>
    </form>
  );
};

export default UserForm;
