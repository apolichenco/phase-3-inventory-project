import React from "react";
import Product from "./Product"


function List({allData}) {



  return (
      <div>
        {allData.map((category, index) => {
          return (
            <div key={index}>
              <h1>{category.name}</h1>
              {category.products.map((product, index) => <Product productInfo={product}/>)}
            </div>
        )})}
      </div>
  );
}

export default List;
