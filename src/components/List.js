import React from "react";
import Product from "./Product"


function List({allData, onDelete}) {



  return (
      <div>
        {allData.map((category, index) => {
          return (
            <div key={index}>
              <h1>{category.name}</h1>
              {category.products.map((product, index) => <Product productInfo={product} key={index} onDelete={onDelete}/>)}
            </div>
        )})}
      </div>
  );
}

export default List;
