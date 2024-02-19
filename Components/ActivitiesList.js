import { createContext, useContext, useState } from "react";

const Context = createContext();
const Update = createContext();

export function useContextHook() {
  return useContext(Context);
}

export function useUpdateHook() {
  return useContext(Update);
}

export default function ContextProvider({ children }) {

  const [array, setArray] = useState([])
  

  function addArray( data ) {
    

    const newAct = { data: data, id: Math.random()};
    setAct((currentActs) => {
      return [...currentActs, newAct];
    })
  }


  return (
    <Context.Provider value={array}>
      <Update.Provider value={addArray}>
        {children}
      </Update.Provider>
    </Context.Provider>
  );
}