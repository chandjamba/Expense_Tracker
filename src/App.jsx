import AddNewTransaction from "./Components/AddNewTransaction";
import Balance from "./Components/Balance";
import History from "./Components/History";
import { FormDataContextProvider } from "./contexts/FormDataContext";
import "./index.css";


function App() {
  return (
    <FormDataContextProvider>
      <Balance />
      <AddNewTransaction />
      <History />
    </FormDataContextProvider>
  );
}

export default App;
