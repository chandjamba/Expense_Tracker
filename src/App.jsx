import AddNewTransaction from "./Components/AddNewTransaction";
import Balance from "./Components/Balance";
import History from "./Components/History";
import {CheckoutContextProvider} from "./contexts/CheckoutContext";
import "./index.css";


function App() {
  return (
    <CheckoutContextProvider>
      <Balance />
      <AddNewTransaction />
      <History />
    </CheckoutContextProvider>
  );
}

export default App;
