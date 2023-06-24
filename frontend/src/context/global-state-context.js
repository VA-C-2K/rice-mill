import React, { createContext, useContext, useState } from "react";

const GlobalStateContext = createContext();

const GlobalProvider = ({ children }) => {
  const [searchTerm, setSearchTerm] = useState();

  return (
    <GlobalStateContext.Provider value={{ searchTerm, setSearchTerm }}>
      <>{children}</>
    </GlobalStateContext.Provider>
  );
};

export const GlobalState = () => {
  return useContext(GlobalStateContext);
};

export default GlobalProvider;
