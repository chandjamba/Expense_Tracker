import "./history.scss";
import { useFormDataContext } from "../contexts/FormDataContext";

export default function History() {
  const { items } = useFormDataContext();

  return (
    <div className="history">
      <div className="history__inner-container">
        <div className="history__heading-box">History</div>
        <div className="history__slots-wrapper">
          {items.map((item, index) => {
            return (
              <div key={index} className="history__slot-1">
                <div className="history__slot-item-box">{item?.name}</div>
                <div className="history__slot-item-price-box">
                  {item?.amount}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
