import { useDispatch, useSelector } from "react-redux";
import React, { useEffect } from "react";
import { fetchProducts } from "../../feauters/ProductsSlice";
import Modal from "./Modal/Modal";
import { useState } from "react";
import { showItem } from "../../feauters/ProductsSlice";
import "./Shop.scss";

export default function Shop() {
  const [isOpen, setIsOpen] = useState(false);
  const [openDesc, setOpenDesc] = useState(false);
  const [openDet, setOpenDet] = useState(false);
  const products = useSelector((state) => state.products);
  const i = useSelector((state) => state.products.item);
  const dispatch = useDispatch();

  const handleOpenDesc = () => {
    setOpenDesc(!openDesc);
  };

  const handleOpenDet = () => {
    setOpenDet(!openDet);
  };

  useEffect(() => {
    dispatch(fetchProducts("http://localhost:3000/media"));
  }, []);

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
        <div className="Shop-Cats">
          <span>
            <img src={"../../../public/Icons/shopping-cart.png"} alt="" />
          </span>
        </div>
        <div className="Shop-Items">
          {products.data.map((e) => {
            return (
              <div
                onClick={() => toogleModal(e.id)}
                className="Item"
                key={e.id}
              >
                <img src={e.img1} />
                <span>
                  <p>{e.name}</p>
                  <p>{e.price}</p>
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
                  <h1>{e.name}</h1>
                  <h3>{e.price}</h3>
                  <button className="btnn">Add to Cart</button>
                  <div className="icons">
                    <span>
                      <img src="../../../public\Icons\delivery-truck.png" alt="" />
                      <p>Express delivery within 1-3 days</p>
                    </span>
                    <span>
                      <img src="../../../public\Icons\box.png" alt="" />
                      <p>Shipping within 1 business day</p>
                    </span>
                    <span>
                      <img src="../../../public\Icons\arrow.png" alt="" />
                      <p>30 days right of withdrawal</p>
                    </span>
                    <div className="desc">
                      <button onClick={handleOpenDesc} type="button">
                        <h3>Description</h3>
                      </button>
                      {openDesc ? <div className="desc">{e.desc}</div> : null}
                      <button onClick={handleOpenDet} type="button">
                        <h3>Product details and fabric care</h3>
                      </button>
                      {openDet ? (
                        <div className="det">
                            {e.detail?.size ? <p> <h3>Size: </h3> {e.detail?.size} </p> : ''}
                            {e.details?.color ?  <p><h3>Color:</h3> {e.details?.color}</p> : ''}
                            {e.details?.detail ?  <p><h3>Details:</h3> {e.details?.detail}</p> : ''}
                            {e.details?.piping ?  <p><h3>Piping:</h3> {e.details?.piping}</p> : ''}
                            {e.details?.edgeborder ?  <p><h3>Edge border:</h3> {e.details?.edgeborder}</p> : ''}
                            {e.details?.material ?  <p><h3>Material:</h3> {e.details?.material}</p> : ''}
                            {e.details?.washing ?  <p><h3>Washing:</h3> {e.details?.washing}</p> : ''}
                        </div>
                      ) : null}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
          <button className="Modal-btn" onClick={toogleModal}>
            &#10006;
          </button>
        </Modal>
      ) : (
        ""
      )}
    </div>
  );
}
