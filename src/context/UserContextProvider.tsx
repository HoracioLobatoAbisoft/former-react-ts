import { useState, useEffect } from "react";
import UserContext from "./UserContext";

interface Props {
  children: React.ReactNode;
}
interface UserData {
    id:any;
    token:any;
  }
  
function UserContextProvider(props: Props) {
  const [userData, setUserData] = useState<UserData>({ id: "", token: "" });

  useEffect(() => {
    const id = localStorage.getItem("idUtd");
    const token = localStorage.getItem("token");

    if (id !== null && token !== null) {
      setUserData({ id: id, token: token });
    }
  }, []);

  return (
    <UserContext.Provider value={userData}>
      {props.children}
    </UserContext.Provider>
  );
}

export default UserContextProvider;
