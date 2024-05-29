import React, { useState } from "react";
import "./Cart.scss";
import { countPlusMinusCart, del } from "../../../feauters/ProductsSlice";
import { useDispatch, useSelector } from "react-redux";

export default function Cart() {
  const [prods, setProds] = useState(
    JSON.parse(localStorage.getItem("products") || [])
  );
  const p = useSelector((state) => state.products.p);
  console.log("p", p);
  const dispatch = useDispatch();
  const handleCountChange = (id, type) => {
    dispatch(countPlusMinusCart({ id, type }));
  };

  const delById = (id) => {
    dispatch(del({id : id}))
  }

  console.log("prods", prods);
  return (
    <div className="Cart">
      <h1>MY CART</h1>
      <div className="Cart-box">
        <h3 className="f"> Product</h3>
        <h3>Price</h3>
        <h3>Count</h3>
        <h3>Total</h3>
      </div>
      {
        p.length > 0 ? p.map((e, index) => {
          return (
            <div key={index} className="Cart-item">
              <img src={e.img1} alt="" />
              <div className="Cart-Desc">
                <h4>{e.cat}</h4>
                <p>{e.name}</p>
              </div>
              <div className="price">
                <h3>${e.price}USD</h3>
              </div>
              <div className="Cart-Count">
                <span>
                  <button onClick={() => handleCountChange(e.id, "Minus")}>
                    -
                  </button>
                  <p>{e.count}</p>
                  <button onClick={() => handleCountChange(e.id, "Plus")}>
                    +
                  </button>
                </span>
              </div>
                <h4 className="Cart-total"> ${e.count * e.price} USD</h4>
              <div className="Cart-delete">
                <button className="delete" onClick={() => delById(e.id)} > &#10006; </button>
              </div>
            </div>
          );
        }) : <h1>Your Cart Is Empty</h1>
      } 
      {}
    </div>
  );
}
