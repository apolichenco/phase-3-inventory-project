import React, {useState} from "react";


function Price({price, sellForValue}) {

    // const gain = priceInfo.price * 0.3
    // const number = gain + priceInfo.price
    // const sellForValue = Math.round(number * 100.0) / 100.0


    return (
        <div>
            <h6>Cost of Goods: ${price}</h6>
            <h6>Sell For: ${sellForValue}</h6>
        </div>
    )
}

export default Price