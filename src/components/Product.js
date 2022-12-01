import React, {useState} from "react";
import Price from "./Price"

function Product ({productInfo, onDelete}) {
    const [editing, setEditing] = useState(false)

    function handleDelete() {
        fetch(`http://localhost:9292/products/${id}`, {
            method: "DELETE",
        })
        onDelete(productInfo.id)
      }
    
      function handleEdit() {
        console.log("Edit")
      }

    return (
        <div>
            {editing ? <h5>{productInfo.name}</h5> : null } 
            <button onClick={handleDelete}>
            <span>🗑️</span>
            </button>
            <button onClick={handleEdit}>
            <span>✏️</span>
            </button>
            {productInfo.prices.map((lastPrice, index) => {
          if (index === productInfo.prices.length - 1)
            return (
                <Price priceInfo={lastPrice} sellForValue={productInfo.sell_for_value} key={index}/>
          )
        })}
        </div>
    )
      }

      export default Product