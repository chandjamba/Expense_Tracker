import { createContext, useContext, useState } from "react";
// first step is to create context
export const FormDataContext = createContext();

// third step is to export a components that accepts children and pass them to
// <Context.Provider
// value={{}} > { children }</Context.Provider >
export function FormDataContextProvider({ children }) {
  const [formData, setFormData] = useState("");
  const [items, setItems] = useState([]);
  const [income, setIncome] = useState(0);

  const expense = items?.reduce((acc, currentValue) => {
    // acc is initial value no matter which value we are passing //
    acc = acc + parseInt(currentValue?.amount);
    return acc;
  }, 0);

  return (
    <FormDataContext.Provider
      value={{
        income,
        setIncome,
        expense,
        formData,
        setFormData,
        items,
        setItems,
      }}
    >
      {children}
    </FormDataContext.Provider>
  );
}
// second step is to use the context by exporting a hook from this file
// that uses and returns the value from useContext()
export const useFormDataContext = () => {
  return useContext(FormDataContext);
};
