import { createContext, useContext, useState } from "react";
// first step is to create context
export const FormDataContext = createContext();

// third step is to export a components that accepts children and pass them to
// <Context.Provider
// value={{}} > { children }</Context.Provider >
export function FormDataContextProvider({ children }) {
      const [formData, setFormData] = useState("");
      const [itemsName, setItemsName] = useState([]);
      const [itemName, setItemName] = useState([]);
      const [itemsAmount, setItemsAmount] = useState([]);
      const [itemAmount, setItemAmount] = useState([]);
      const [income, setIncome] = useState(0);
      const [balance, setBalance] = useState(0);
      const [expense, setExpense] = useState(0);


      console.log(itemName);
      console.log(itemAmount);

  return (
    <FormDataContext.Provider value={{ itemsName, setItemsName, itemAmount, setItemAmount, income, setIncome, balance, setBalance, expense, setExpense, formData, setFormData, itemName, setItemName, itemsAmount, setItemsAmount }}>
      {children}
    </FormDataContext.Provider>
  );
}
// second step is to use the context by exporting a hook from this file
// that uses and returns the value from useContext()
export const useFormDataContext = () => {
  return useContext(FormDataContext);
};
