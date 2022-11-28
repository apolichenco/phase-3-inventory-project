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
      category.products.map((product) => {
        if (product.id === newProduct.id) {
          return newProduct
        }
        else {
          return product
        }
      })
    })
    setAllData(updatedProducts)
  }

  function handleNewPrice(newPrice) {
    const updatedPrices = allData.map((category) => {
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
    setAllData(updatedPrices)
  }

  return (
    <div className="App">
      <Header />   
      <Switch>
        <Route path="/list">      
          <List allData={allData}/>
        </Route>
        <Route path="/form">   
          <Form handleNewProduct={handleNewProduct} handleNewPrice={handleNewPrice} allData={allData}/>
        </Route>
      </Switch>
    </div>  
  );
}

export default App;