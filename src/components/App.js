import React, {useState, useEffect} from 'react';
import { Route, Switch } from "react-router-dom"
import Form from './Form';
import Header from './Header';
import List from './List';

function App() {
  const [allData, setAllData] = useState([])
  const [sellForValue, setSellForValue] = useState()

  useEffect(() => {
    fetch("http://localhost:9292/categories")
    .then((r) => r.json())
    .then((data) => setAllData(data));
  }, []);

  function handleNewProduct(newProduct) {
    const updatedProducts = allData.map((category) => {
      if (category.id !== newProduct.category_id) {
        return category
      }
      else {
        category.products.push(newProduct) 
        return category      
      }
    })
    setAllData(updatedProducts)
  }

  function handleNewPrice(newPrice, categoryId) {    
    const updatedPrices = allData.map((category) => {
      if (category.id !== parseInt(categoryId)) {
        return category
      }
      else {
        category.products.map((product) => {
          if (product.id !== newPrice.product_id) {
            return product
          }
          else {
            const number = newPrice.price * 0.3
            const gain = Math.round(number * 100.0) / 100.0
            product.sell_for_value = gain + newPrice.price
            product.last_priced = newPrice.price
            return product
          }
        })
        return category
      }
    })
    setAllData(updatedPrices)
  }

  function handleDelete(productInfo) {
    const updatedProducts = allData.map((category) => {
      if (category.id !== productInfo.category_id) {
        return category
      }
      else {
        const updatedProductList = category.products.filter((product) => product.id !== productInfo.id) 
        category.products = updatedProductList
        return category
      }
    })
    setAllData(updatedProducts)
  }

  function handleEdit(updatedProduct) {
    const editedProducts = allData.map((category) => {
      if (category.id !== updatedProduct.category_id) {
        return category
      }
      else {
        category.products.map((product) => {
          if (product.id !== updatedProduct.id) {
            return product
          }
          else {
            product.name = updatedProduct.name
            return product
          }
        })
        return category
      }
    })
    setAllData(editedProducts)
  }

  return (
    <div className="App">
      <Header />   
      <Switch>
        <Route path="/list">      
          <List allData={allData} onDelete={handleDelete} onEdit={handleEdit}/>
        </Route>
        <Route path="/form">   
          <Form handleNewProduct={handleNewProduct} handleNewPrice={handleNewPrice} allData={allData}/>
        </Route>
      </Switch>
    </div>  
  );
}

export default App;
