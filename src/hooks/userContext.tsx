import React, {
  Dispatch,
  SetStateAction,
  createContext,
  useState,
} from "react";

export interface UserContextProps {
  user: { name: string; email: string } | null;
  setUser: Dispatch<SetStateAction<{ name: string; email: string }>>;
}

export interface TimerProviderProps {
  children: React.ReactNode | React.ReactNode[];
}
const userHandler: UserContextProps = {
  user: { email: "", name: "" },
  setUser: () => {},
};
const UserContext = createContext(userHandler);

export const UserProvider = ({ children }: TimerProviderProps) => {
  const [user, setUser] = useState<{ name: string; email: string }>({
    name: "",
    email: "",
  });
  console.log("in context", user);
  console.log("in context");
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;
