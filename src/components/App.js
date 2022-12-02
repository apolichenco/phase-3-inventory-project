import React, {useState, useEffect} from 'react';
import { Route, Switch } from "react-router-dom"
import Form from './Form';
import Header from './Header';
import List from './List';

function App() {
  const [allData, setAllData] = useState([])
  // const [category, setCategory] = useState([])
  // const [products, setProducts] = useState([])
  // const [prices, setPrices] = useState([])

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
        return category.products.push(newProduct)       
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
            const gain = newPrice.price * 0.3
            product.sell_for_value = gain + newPrice.price
            return product.prices.push(newPrice)
          }
        })
        return category
      }
    })
    setAllData(updatedPrices)
  }

  function handleDelete(id) {
    const updatedProducts = allData.map((category) => {
      category.filter((product) => product.id !== id)
    })
    setAllData(updatedProducts)
  }

  function handleEdit(id) {
    console.log(id)
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
