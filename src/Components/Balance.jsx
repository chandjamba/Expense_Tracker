import "./balance.scss";
import { useCheckoutContext } from "../contexts/CheckoutContext";

export default function Balance() {
  const { thing } = useCheckoutContext();
  console.log(thing, "name in balance file");
  return (
    <div className="balance">
      <div className="balance__inner-wrapper">
        <div className="balance__heading-and-amount-container">
          <div className="balance__heading-container">
            <h1 className="balance__heading"> Your Balance</h1>
          </div>
          <div className="balance__amount-container">
            <h1 className="balance__amount"> $5000 </h1>
          </div>
        </div>
        <div className="balance__income-expense-container">
          <div className="balance__income-expense-inner-container">
            <div className="balance__income-heading-amount-container">
              <div className="balance__income-heading-container">INCOME</div>
              <div className="balance__income-amount-container">$10000</div>
            </div>
            <div className="balance__expense-heading-amount-container">
              <div className="balance__expense-heading-container">EXPENSE</div>
              <div className="balance__expense-amount-container">$5000.00</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
