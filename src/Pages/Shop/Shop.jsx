import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAsyncProducts } from "../../feauters/productsSlice";
import "./Shop.scss";

export default function Shop() {
  const products = useSelector((state) => state.products);
  const dispatch = useDispatch(); 

  useEffect(() => {
    dispatch(getAsyncProducts('https://jsonplaceholder.typicode.com/photos')); 
  }, []);


  return (
    <div className="Shop">
      {
        products.data.map(e => {
          return (
            <div key={e.id} className="Shop-item">
              <p>{e.title}</p>
              <img src={e.url} alt="" />
            </div>
          )
        })
      }
    </div>
  );
}
