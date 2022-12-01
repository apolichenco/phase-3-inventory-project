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
    console.log(allData)
    const updatedProducts = allData.map((category) => {
      if (category.id !== newProduct.category_id) {
        return category
      }
      else {
        category.products.push(newProduct)       
        return category
      }
    })
    console.log(updatedProducts)
    setAllData(updatedProducts)
  }

  function handleNewPrice(newPrice) {
    const updatedPrices = allData.map((category) => {
      if (category.id === newPrice.category_id)
      category.products.map((product) => {
        product.prices.map((price) => {
          if (price.id === newPrice.id) {
            return newPrice
          }
          else {
            return product
          }          
        })
      })
    })
    console.log(updatedPrices)
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
