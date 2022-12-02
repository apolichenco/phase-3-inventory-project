import React from "react";
import Product from "./Product"


function List({allData, onDelete, onEdit}) {



  return (
      <div>
        {allData.map((category, index) => {
          return (
            <div key={index}>
              <h1>{category.name}</h1>
              {category.products.map((product, index) => {
                return (
                <Product productInfo={product} key={index} onDelete={onDelete} onEdit={onEdit}/>
              )})}
            </div>
        )})}
      </div>
  );
}

export default List;
