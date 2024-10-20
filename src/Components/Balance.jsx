import "./balance.scss";
import { useFormDataContext } from "../contexts/FormDataContext";

export default function Balance() {
  const { income, items, expense } = useFormDataContext();

  console.log(items);
  console.log(income, expense);

  const balanceAmount = income - expense;
  console.log(balanceAmount);

  return (
    <div className="balance">
      <div className="balance__inner-wrapper">
        <div className="balance__heading-and-amount-container">
          <div className="balance__heading-container">
            <h1 className="balance__heading"> Your Balance</h1>
          </div>
          <div className="balance__amount-container">
            <h1 className="balance__amount"> ${balanceAmount} </h1>
          </div>
        </div>
        <div className="balance__income-expense-container">
          <div className="balance__income-expense-inner-container">
            <div className="balance__income-heading-amount-container">
              <div className="balance__income-heading-container">INCOME</div>
              <div className="balance__income-amount-container">${income}</div>
            </div>
            <div className="balance__expense-heading-amount-container">
              <div className="balance__expense-heading-container">EXPENSE</div>
              <div className="balance__expense-amount-container">
                ${expense}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
