import React, {useState} from "react";


function Form({handleNew, allData}) {
  // const [newCategory, setNewCategory] = useState()
  const [newProduct, setNewProduct] = useState()
  const [newPrice, setNewPrice] = useState()

  // function handleNewCategory(event) {
  //   setNewCategory(event.target.value)
  // }

  function handleNewProduct(event) {
    setNewProduct(event.target.value)
  }

  function handleNewPrice(event) {
    setNewPrice(event.target.value)
  }

   function handleSubmitProduct(e) {
    e.preventDefault()
    fetch("http://localhost:9292/products", {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        privateEvent: newProduct
      })
    })
    .then((r) => r.json())
    .then((data) => handleNew(data))
   }

   function handleSubmitPrice(e) {
    e.preventDefault()
    fetch("http://localhost:9292/prices", {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        privateEvent: newPrice
      })
    })
    .then((r) => r.json())
    .then((data) => handleNew(data))
   }

  return (
    <div>
      {/* <form onSubmit={handleSubmitCategory}>
      <label>New Category</label><br></br>
      <input type="text" id="new-category" name="new-category" onChange={handleNewCategory}></input>     
    </form> */}
    <form onSubmit={handleSubmitProduct}>
    <label>New product</label><br></br>
      <input type="text" id="new-product" name="new-product" onChange={handleNewProduct}></input>
    </form>
    <form onSubmit={handleSubmitPrice}>
    <label>New price</label><br></br>
      <input type="text" id="new-price" name="new-price" onChange={handleNewPrice}></input> 
    </form>
    </div>
  );
}

export default Form;
