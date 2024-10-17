import "./history.scss";

export default function History() {
  return (
    <inputsDataContext.Consumer>
    <div className="history">
      <div className="history__inner-container">
        <div className="history__heading-box">History</div>
        <div className="history__slots-wrapper">
          <div className="history__slot-1">
            <div className="history__slot-item-box">Grocery</div>
            <div className="history__slot-item-price-box">-300</div>
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
    </inputsDataContext.Consumer>
  );
}
