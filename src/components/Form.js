import React, {useState} from "react";


function Form({handleNewProduct, handleNewPrice, allData}) {
  const [dropdownCategory, setDropdownCategory] = useState(1)
  const [newProductName, setNewProduct] = useState()
  const [newPriceNumber, setNewPrice] = useState()
  const [categoryId, setCategoryId] = useState(1)
  const [productId, setProductId] = useState(1)

  function handleNewProductValue(event) {
    setNewProduct(event.target.value)
  }

  function handleNewPriceValue(event) {
    setNewPrice(event.target.value)
  }

  function handleDropdownCategory(e) {
    setDropdownCategory(e.target.value)
  }

  function handleCategoryId(e) {
    setCategoryId(e.target.value)
  }

  function handleProductId(e) {
    setProductId(e.target.value)
  }

   function handleSubmitProduct(e) {
    e.preventDefault()
    const newProduct = {
      name: newProductName,
      category_id: parseInt(categoryId)
    }
    fetch("http://localhost:9292/products", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newProduct)
    })
    .then((r) => r.json())
    .then((data) => handleNewProduct(data))
   }

   function handleSubmitPrice(e) {
    e.preventDefault()
    const newPrice = {
      price: newPriceNumber,
      product_id: parseInt(productId)
    }
    fetch("http://localhost:9292/prices", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newPrice)
    })
    .then((r) => r.json())
    .then((data) => handleNewPrice(data, dropdownCategory))
   }

  return (
    <div>
      <form onSubmit={handleSubmitProduct}>
        <select onChange={handleCategoryId}>
          {allData.map((category, index) => <option key={index} value={index + 1}>{category.name}</option>)}
        </select><br></br>
        <label>New product</label><br></br>
          <input type="text" id="new-product" name="new-product" onChange={handleNewProductValue}></input>
          <input type="submit" value="Save"/>
      </form>
      <form onSubmit={handleSubmitPrice}>
      <select onChange={handleDropdownCategory}>
          {allData.map((category) => <option key={category.id} value={category.id}>{category.name}</option>)}
        </select><br></br>
        <select onChange={handleProductId}>
          {allData.map((category) => {
            if (category.id == dropdownCategory) {
              return (category.products.map((product) => <option key={product.id} value={product.id}>{product.name}</option>))
            }
          })}
        </select><br></br>
        <label>New price</label><br></br>
          <input type="text" id="new-price" name="new-price" onChange={handleNewPriceValue}></input> 
          <input type="submit" value="Save"/>
      </form>
    </div>
  );
}

export default Form;
