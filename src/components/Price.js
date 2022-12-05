import React, {useState} from "react";


function Price({price, sellForValue}) {


    return (
        <div>
            <h6>Cost of Goods: ${price}</h6>
            <h6>Sell For: ${sellForValue}</h6>
        </div>
    )
}

export default Price