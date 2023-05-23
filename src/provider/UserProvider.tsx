import React, {useState} from 'react';

const userContext = React.createContext({});

const userToggleContext = React.createContext(()=>{});




export function UserProvider() {

  const [user, setUser] = useState<any>()

  const cambiarLogin = () => {
    if (user) {
      setUser(null)
    } else {
      setUser({
        name: "Luis",
        email: "luis@email.com"
      })
    }
  }


  return (
    <userContext.Provider value={user}>
      <userToggleContext.Provider value={cambiarLogin}>

      </userToggleContext.Provider>
    </userContext.Provider>


  )

}