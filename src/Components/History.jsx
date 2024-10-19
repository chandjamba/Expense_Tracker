import "./history.scss";
import { useFormDataContext } from "../contexts/FormDataContext";

export default function History() {
  const {itemsName, itemsAmount} = useFormDataContext();

  

  return (
    <div className="history">
      <div className="history__inner-container">
        <div className="history__heading-box">History</div>
        <div className="history__slots-wrapper">
          {itemsName.map((itemName, index) => {
            return(
          <div key={index} className="history__slot-1">
            <div className="history__slot-item-box">{itemName}</div>
            <div className="history__slot-item-price-box">{itemName}</div>
          </div>
            )
          })}
            
          
        </div>
      </div>
    </div>
  );
}
