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

  function handleNew(data) {
    const updatedData = allData.category.map((category) => {
      category.product.map((product) => {
        
      })
    })
  }


  return (
    <div className="App">
      <Header />   
      <Switch>
        <Route path="/list">      
          <List allData={allData}/>
        </Route>
        <Route path="/form">   
          <Form handleNew={handleNew} allData={allData}/>
        </Route>
      </Switch>
    </div>  
  );
}

export default App;
