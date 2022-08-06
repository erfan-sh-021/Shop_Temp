import React from "react";
import { Product } from './product';

export function ProductList(props) {
  return props.products.map((item,index) => (
    <div className="col-lg-3 col-md-4 col-sm-6" key={index}>
      <Product data={item} />
    </div>
  ));
}
