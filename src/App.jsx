import AddNewTransaction from "./Components/AddNewTransaction";
import Balance from "./Components/Balance";
import History from "./Components/History";
import "./index.css";

function App() {
  return (
    <div>
      <Balance />
      <AddNewTransaction />
      <History />
    </div>
  );
}

export default App;
