import React, {useState} from "react";


function Form({handleNew, allData}) {
  const [dropdownCategory, setDropdownCategory] = useState()
  const [newProduct, setNewProduct] = useState()
  const [newPrice, setNewPrice] = useState()


  function handleNewProduct(event) {
    setNewProduct(event.target.value)
    console.log(event.target.value)
  }

  function handleNewPrice(event) {
    setNewPrice(event.target.value)
    console.log(event.target.value)
  }

   function handleSubmitProduct(e) {
    e.preventDefault()
    console.log(newProduct)
    // const newProduct = {
    //   name: newProduct,
    //   category_id:
    // }
    // fetch("http://localhost:9292/products", {
    //   method: "PATCH",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(newProduct)
    // })
    // .then((r) => r.json())
    // .then((data) => handleNew(data))
   }

   function handleSubmitPrice(e) {
    e.preventDefault()
    console.log(newPrice)
    // const newPrice = {
    //   price: newPrice,
    //   product_id: 
    // }
    // fetch("http://localhost:9292/prices", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(newPrice)
    // })
    // .then((r) => r.json())
    // .then((data) => handleNew(data))
   }

  return (
    <div>
      <form onSubmit={handleSubmitProduct}>
        <select>
          {allData.map((category) => <option key={category.id} value={category.id}>{category.name}</option>)}
        </select><br></br>
        <label>New product</label><br></br>
          <input type="text" id="new-product" name="new-product" onChange={handleNewProduct}></input>
      </form>
      <form onSubmit={handleSubmitPrice}>
      <select>
          {allData.map((category) => <option key={category.id} value={category.id} onChange={(value) => setDropdownCategory(value)}>{category.name}</option>)}
        </select><br></br>
        {/* <select>
          {allData.map((category) => <option key={category.id} value={category.id}>{category.name}</option>)}
        </select> */}
        <label>New price</label><br></br>
          <input type="text" id="new-price" name="new-price" onChange={handleNewPrice}></input> 
      </form>
    </div>
  );
}

export default Form;
