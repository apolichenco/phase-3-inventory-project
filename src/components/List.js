import React from "react";


function List({allData}) {

  return (
      <div>
        {allData.map((category) => {
          return (
            <div>
              <h1>{category.name}</h1>
                {category.products.map((product) => {
                  return (
                    <div>
                      <h5>{product.name}</h5>
                      {product.prices.map((lastPrice, index) => {
                        if (index === product.prices.length - 1)
                          return (
                            <h6>${lastPrice.price}</h6>
                        )
                      })}
                    </div>
                  )
                })}
            </div>
          )
        })}
      </div>
  );
}

export default List;
