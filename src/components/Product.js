import React, {useState} from "react";
import Price from "./Price"
import EditProduct from "./EditProduct"

function Product ({productInfo, onDelete, onEdit}) {
    const [editing, setEditing] = useState(true)
    const [priceList, setPriceList] = useState([])
    const [showList, setShowList] = useState(true)

    function handleDelete() {
        fetch(`http://localhost:9292/products/${productInfo.id}`, {
            method: "DELETE",
        })
        onDelete(productInfo)
      }
    
      function handleEdit() {
        setEditing(!editing)
      }

      function handlePriceList() {
        setShowList(!showList)
        if (showList) {
          fetch(`http://localhost:9292/products/${productInfo.id}/prices`)
          .then((r) => r.json())
          .then((data) => setPriceList(data))
        }
        else {
          setPriceList([])
        }
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
            <button onClick={handlePriceList}>
            <span>💹</span>
            </button>
            {<Price price={productInfo.last_priced} sellForValue={productInfo.sell_for_value} key={productInfo.id}/>}
            {showList ? (null) : (
            <ul>
              {priceList.map((indPrice, index) => <li key={index}>${indPrice.price}</li>)}
              </ul>
              )}
        </div>
    )
      }

      export default Product