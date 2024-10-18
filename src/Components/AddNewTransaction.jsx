import { useState } from "react";
import "./addNewTransaction.scss";
import { useCheckoutContext } from "../contexts/CheckoutContext";

export default function AddNewTransaction() {
  const { itemName, setItemName } = useCheckoutContext();
  const [itemAmount, setItemAmount] = useState(0);
  const [expenseItem, setExpenseItems] = useState();
  const [expenseAmount, setExpenseAmount] = useState();

  function submitButtonHandler(e) {
    e.preventDefault();
    const formData = {
      item: e.target.nameInput.value,
      amount: e.target.amountInput.value,
    };

    console.log(formData);

    setExpenseItems(formData.item);
    console.log(expenseItem);

    setExpenseAmount(formData.amount);
    console.log(expenseAmount);
  }

  return (
    <form onSubmit={submitButtonHandler}>
      <div className="addNewTransaction">
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
                onChange={(event) => setItemName(event.target.value)}
              />
              {console.log(itemName)}
            </div>
          </div>

          <div className="addNewTransaction__amount-input-2-container">
            <div className="addNewTransaction__input-2-heading">Amount</div>
            <div className="addNewTransaction__input-2-box">
              <input
                className="addNewTransaction__input-2"
                type="number"
                placeholder="Amount"
                name="amountInput"
                value={itemAmount || ""}
                onChange={(event) => setItemAmount(event.target.value)}
              />
              {console.log(itemAmount)}
            </div>
          </div>
          <button className="addNewTransaction__btn" type="submit">
            Add transaction
          </button>
        </div>
      </div>
    </form>
  );
}
