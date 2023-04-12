import React from 'react';
import CurrencyFormat from 'react-currency-format';
import '../CSS/Subtotal.css';
function Subtotal() {
  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              {/*To do */}
              Subtotal (0 items):
              <strong>0</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" />
              This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={0} //  {/*To do */}
        displayType={'text'}
        thousandSeparator={true}
        prefix="$"
      />
      <button>Proceed to Checkout</button>
    </div>
  );
}

export default Subtotal;