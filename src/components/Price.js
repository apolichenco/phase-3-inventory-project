import React, {useState} from "react";


function Price({priceInfo, sellForValue}) {
    return (
        <div>
            <h6>Price Bought: ${priceInfo.price}</h6>
            <h6>Sell For: ${sellForValue}</h6>
        </div>
    )
}

export default Price