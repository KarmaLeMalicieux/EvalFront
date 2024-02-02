import { createContext, useState } from "react";


export const MyContext = createContext();

export const MyContextProvider = ({ children }) => {
  const [books, setBook] = useState([
    {
      img: "0",
      description: "Après coup, Jean rigole",
      id: "1234567890",
      isNew: true,
    },
    {
      img: "1",
      description: "",
      id: "98765678",
      isNew: false,
    },
    {
      img: "2",
      description: "",
      id: "09765268989",
      isNew: false,
    }
  ])



  return (
    <MyContext.Provider value={{ books }}>
      {children}
    </MyContext.Provider>
  )
}