import { createContext } from "react";

const UserContext = createContext({
  name: null,
  edad: null,
});

export default UserContext;
