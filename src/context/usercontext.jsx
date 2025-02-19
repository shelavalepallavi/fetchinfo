import axios from "axios";
import {createContext, useEffect, useState } from "react";

export const UserContext = createContext();

const UserProvider = ({children}) => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState("")

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users")
    .then((response) => {
      setUsers(response.data);
      setLoading(false)
    })
    .catch((error) => {
      console.log("Error fetching users:", error);
      setLoading(false)
    })
  }, [])
  
  return (
    <UserContext.Provider value={{users, loading, searchTerm, setSearchTerm}}>
      {children}
    </UserContext.Provider>
  )
}
export default UserProvider;