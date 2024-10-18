import "./addNewTransaction.scss";
import { useFormDataContext } from "../contexts/FormDataContext";

export default function AddNewTransaction() {
  const {itemName, setItemName} = useFormDataContext();
  const {itemAmount, setItemAmount} = useFormDataContext();
  const {income, setIncome} = useFormDataContext();


  function submitButtonHandler(e) {
    e.preventDefault();
    const formData = {
      item: e.target.nameInput.value,
      amount: e.target.amountInput.value,
      income: e.target.incomeInput.value,
    };

    console.log(formData);
  }

  return (
    <div className="addNewTransaction">
        <form className="addNewTransaction__form"   onSubmit={submitButtonHandler}>
        <div className="addNewTransaction__inner-container">
          <div className="addNewTransaction__heading-box">
            Add new transaction
          </div>
          <div className="addNewTransaction__item-input-1-container">
            <div className="addNewTransaction__input-1-heading">Item</div>
            <div className="addNewTransaction__input-1-box">
              <input
                className="addNewTransaction__input-1"
                type="text"
                placeholder="Enter text..."
                name="nameInput"
                value={itemName || ""}
                required
                onChange={(event) => setItemName(event.target.value)}
                maxLength="15"
              />
              {console.log(itemName)}
            </div>
          </div>

          <div className="addNewTransaction__amount-input-2-container">
            <div className="addNewTransaction__input-2-heading">Amount</div>
            <div className="addNewTransaction__input-2-box">
              <input
                className="addNewTransaction__input-2"
                type="text"
                placeholder="$"
                name="amountInput"
                value={itemAmount || ""}
                onChange={(event) => setItemAmount(event.target.value)}
                required
                maxLength="10"
              />
              {console.log(itemAmount)}
            </div>
          </div>


          <div className="addNewTransaction__income-input-3-container">
            <div className="addNewTransaction__input-3-heading">Income</div>
            <div className="addNewTransaction__input-3-box">
              <input
                className="addNewTransaction__input-3"
                type="text"
                placeholder="$"
                name="incomeInput"
                value={income || ""}
                onChange={(event) => setIncome(event.target.value)}
                required
                maxLength="10"
              />
              {console.log(income)}
            </div>
          </div>
          <button className="addNewTransaction__btn" type="submit">
            Add transaction
          </button>
        </div>
    </form>
      </div>
  );
}
