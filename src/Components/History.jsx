import "./history.scss";
import { useFormDataContext } from "../contexts/FormDataContext";

export default function History() {
  const {itemName, setItemName} = useFormDataContext();
  const {itemAmount, setItemAmount} = useFormDataContext();


  return (
    <div className="history">
      <div className="history__inner-container">
        <div className="history__heading-box">History</div>
        <div className="history__slots-wrapper">
          <div className="history__slot-1">
            <div className="history__slot-item-box">{itemName}</div>
            <div className="history__slot-item-price-box">{itemAmount}</div>
          </div>
          <div className="history__slot-1">
            <div className="history__slot-item-box">Monitor</div>
            <div className="history__slot-item-price-box">-1000</div>
          </div>
          <div className="history__slot-1">
            <div className="history__slot-item-box">Clothing</div>
            <div className="history__slot-item-price-box">-2000</div>
          </div>
          <div className="history__slot-1">
            <div className="history__slot-item-box">Utilities</div>
            <div className="history__slot-item-price-box">-200</div>
          </div>
          <div className="history__slot-1">
            <div className="history__slot-item-box">Rent</div>
            <div className="history__slot-item-price-box">-600</div>
          </div>
        </div>
      </div>
    </div>
  );
}
