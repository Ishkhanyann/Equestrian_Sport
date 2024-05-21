import { useDispatch, useSelector } from "react-redux";
import React, { useEffect } from "react";
import { fetchProducts } from "../../feauters/ProductsSlice";
import Modal from "./Modal/Modal";
import { useState } from "react";
import { showItem } from "../../feauters/ProductsSlice";
import "./Shop.scss";

export default function Shop() {
  const [isOpen, setIsOpen] = useState(false);
  const products = useSelector((state) => state.products);
  const i = useSelector((state) => state.products.item);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts("http://localhost:3000/media"));
  }, []);

  console.log('data',products);
  console.log('i',i);

  const toogleModal = (id) => {
    setIsOpen(!isOpen);
    dispatch(showItem({ id: id }));
  };

  return (
    <div className="Shop">
      <div className="Shop-Header">
        <h1>Lorem ipsum dolor sit amet.</h1>
        <span>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit
          blanditiis dignissimos enim et aperiam quidem a ipsa cupiditate iure
          sit!
        </span>
      </div>
      <div className="Shop-Container">
        <div className="Shop-Cats"></div>
        <div className="Shop-Items">
          {products.data.map((e) => {
            return (
              <div className="Item" key={e.id}>
                <img onClick={() => toogleModal(e.id)} src={e.img1} />
                <span>
                  <p>{e.name}</p>
                  <p>{e.price}</p>
                  <button>Add to Cart</button>
                </span>
              </div>
            );
          })}
        </div>
      </div>
      {isOpen ? (
        <Modal toogleModal={toogleModal}>
          {i.map((e) => {
            return (
              <div className="Modal-container" key={e.id}>
                <div>
                  <img src={e.img1} />
                </div>
                <div className="Modal-cont">
                  <h1>Name: {e.name}</h1>
                  <h3>Price: {e.price}</h3>
                  <h4>Desc: {e.desc}</h4>
                  <button className="btnn">Add to Cart</button>
                </div>
              </div>
            );
          })}
          <button className="Modal-btn" onClick={toogleModal}>
            &#10006;
          </button>
        </Modal>
      ) : ("")}
    </div>
  );
}
