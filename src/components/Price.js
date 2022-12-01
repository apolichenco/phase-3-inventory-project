import React, {useState} from "react";


function Price({priceInfo}) {
    return (
        <div>
     {product.prices.map((lastPrice, index) => {
          if (index === product.prices.length - 1)
            return (
              <div key={index}>
                <h6>Price Bought: ${lastPrice.price}</h6>
                <h6>Sell For: ${product.sell_for_value}</h6>
              </div>
          )
        })}
    </div>
    )
}

export default Price