import React, {useState} from "react";
import Price from "./Price"

function Product ({productInfo}) {

    function handleDelete(e) {
        console.log("Deleted")
        console.log(e.target)
      }
    
      function handleEdit() {
        console.log("Edit")
      }

    return (
        <div>
            <h5>{productInfo.name}</h5>
            <button onClick={handleDelete}>
            <span>🗑️</span>
            </button>
            <button onClick={handleEdit}>
            <span>✏️</span>
            </button>
            
        </div>
    )
      }

      export default Product