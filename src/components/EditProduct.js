import React, { useState } from "react";

function EditProduct({name, id, onEdit, trueEditing}) {
    const [productName, setProductName] = useState(name) 

    function handleSubmit(e) {
        e.preventDefault()

        fetch(`http://localhost:9292/products/${id}` , {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json" ,
            },
            body: JSON.stringify({
                name: productName
            }),
        })
        .then((r) => r.json())
        .then((updatedProduct) => onEdit(updatedProduct))
        trueEditing(true)
    }
    
    return (
        <form onSubmit={handleSubmit}> 
            <input type="text" name="name" value={productName} onChange={(e) => setProductName(e.target.value)}/>
            <input type="submit" value="Save"/>
        </form>
    )
}

export default EditProduct;