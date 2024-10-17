import AddNewTransaction from "./Components/AddNewTransaction";
import Balance from "./Components/Balance";
import History from "./Components/History";
import "./index.css";
import { inputsDataContext } from "./Context/context";
import { createContext } from "react";

export const inputsDataContext = createContext();

function App() {
  return (
    <>
    <inputsDataContext.Provider value={formData}>
      <Balance />
      <AddNewTransaction />
      <History />
      </inputsDataContext.Provider>
    </>
  );
}

export default App;
