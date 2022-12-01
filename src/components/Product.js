import React, {useState} from "react";
import Price from "./Price"
import EditProduct from "./EditProduct"

function Product ({productInfo, onDelete, onEdit}) {
    const [editing, setEditing] = useState(true)

    function handleDelete() {
        fetch(`http://localhost:9292/products/${productInfo.id}`, {
            method: "DELETE",
        })
        onDelete(productInfo.id)
      }
    
      function handleEdit() {
        console.log("Edit")
        setEditing(!editing)
      }

    return (
        <div>
            {editing ? <h5>{productInfo.name}</h5> : <EditProduct name={productInfo.name} id={productInfo.id} onEdit={onEdit} trueEditing={setEditing}/> } 
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