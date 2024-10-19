import "./addNewTransaction.scss";
import { useFormDataContext } from "../contexts/FormDataContext";

export default function AddNewTransaction() {
  const { setItems } = useFormDataContext();

  function addButtonHandler(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const parsedFormData = Object.fromEntries(formData.entries());
    setItems((preItems) => {
      return [...preItems, parsedFormData];
    });
  }

  return (
    <div className="addNewTransaction">
      <form className="addNewTransaction__form" onSubmit={addButtonHandler}>
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
                name="name"
                required
                maxLength="15"
              />
            </div>
          </div>

          <div className="addNewTransaction__amount-input-2-container">
            <div className="addNewTransaction__input-2-heading">Amount</div>
            <div className="addNewTransaction__input-2-box">
              <input
                className="addNewTransaction__input-2"
                type="text"
                placeholder="$"
                name="amount"
                required
                maxLength="10"
              />
            </div>
          </div>

          <div className="addNewTransaction__income-input-3-container">
            <div className="addNewTransaction__input-3-heading">Income</div>
            <div className="addNewTransaction__input-3-box">
              <input
                className="addNewTransaction__input-3"
                type="text"
                placeholder="$"
                name="income"
                maxLength="10"
              />
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
