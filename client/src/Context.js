import React, { useContext, useState, useEffect } from "react";

export const InventoryContext = React.createContext();

export const ContextProvider = ({ children }) => {

    const [themeMode, setThemeMode] = useState(() => {
      const savedTheme = localStorage.getItem("themeMode");
      return savedTheme ? JSON.parse(savedTheme) : [];
    });

    const contextValue = { themeMode, setThemeMode };


    useEffect(() => {
      localStorage.setItem("themeMode", JSON.stringify(themeMode));
    }, [themeMode]);
  
    return (
      <InventoryContext.Provider
        value={contextValue}
      >
        {children}
      </InventoryContext.Provider>
    );
  };
  
  export const useInventoryContext = () => {
    return useContext(InventoryContext);
  };