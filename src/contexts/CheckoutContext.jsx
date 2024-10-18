import { createContext, useContext, useState } from "react";
// first step is to create context
export const CheckoutContext = createContext();

// third step is to export a components that accepts children and pass them to
// <Context.Provider
// value={{}} > { children }</Context.Provider >
export function CheckoutContextProvider({ children }) {
    const [thing, setThing] = useState("Iphone");
      const [itemName, setItemName] = useState("");

  console.log(thing, "in context file");
  return (
    <CheckoutContext.Provider value={{ itemName, setItemName }}>
      {children}
    </CheckoutContext.Provider>
  );
}
// second step is to use the context by exporting a hook from this file
// that uses and returns the value from useContext()
export const useCheckoutContext = () => {
  return useContext(CheckoutContext);
};
