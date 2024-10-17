import "./addNewTransaction.scss";

export default function AddNewTransaction() {
  return (
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
            />
          </div>
        </div>

        <div className="addNewTransaction__amount-input-2-container">
          <div className="addNewTransaction__input-2-heading">Amount</div>
          <div className="addNewTransaction__input-2-box">
            <input
              className="addNewTransaction__input-2"
              type="number"
              placeholder="Amount"
            />
          </div>
        </div>
        <button className="addNewTransaction__btn">Add transaction</button>
      </div>
    </div>
  );
}
