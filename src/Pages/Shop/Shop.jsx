import { useDispatch, useSelector } from "react-redux";
import React, { useEffect, useState } from "react";
import Modal from "./Modal/Modal";
import {
  fetchProducts,
  showItem,
  saddlePads,
  addToCart,
  earBonnet,
  halters,
  horseBlankets,
  horseBoots,
  legWraps,
  tops,
  ridingLeggins,
  ridingJackets,
  ridingShowJackets,
  ridingGloves,
  all,
  countPlusMinus,
} from "../../feauters/ProductsSlice";
import "./Shop.scss";

export default function Shop() {
  const [isOpen, setIsOpen] = useState(false);
  const [openDesc, setOpenDesc] = useState(false);
  const [openDet, setOpenDet] = useState(false);
  const [openHorseFilt, setOpenHorseFilt] = useState(false);
  const [openRiderFilt, setOpenRiderFilt] = useState(false);
  const products = useSelector((state) => state.products.data);
  const i = useSelector((state) => state.products.item);
  const dispatch = useDispatch();

  const handleOpenDesc = () => {
    setOpenDesc(!openDesc);
  };
  const handleOpenDet = () => {
    setOpenDet(!openDet);
  };
  const openHorseFilter = () => {
    setOpenHorseFilt(!openHorseFilt);
  };
  const openRiderFilter = () => {
    setOpenRiderFilt(!openRiderFilt);
  };
  const toogleModal = (id) => {
    setIsOpen(!isOpen);
    dispatch(showItem({ id: id }));
  };
  const addCart = (id) => {
    dispatch(addToCart({ id: id }));
  };
  const handleCountChange = (id, type) => {
    dispatch(countPlusMinus({ id, type }));
  };
  useEffect(() => {
    dispatch(fetchProducts("http://localhost:3001/media"));
  }, []);

  console.log(i);

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
          <span></span>
          <button onClick={() => dispatch(all())}>All</button>
          <button onClick={openHorseFilter}>Horses</button>
          {openHorseFilt ? (
            <div>
              <button onClick={() => dispatch(saddlePads())}>Saddle Pads</button>
              <button onClick={() => dispatch(earBonnet())}>Ear Bonnet</button>
              <button onClick={() => dispatch(halters())}>Halters</button>
              <button onClick={() => dispatch(horseBlankets())}>Horse Blankets</button>
              <button onClick={() => dispatch(horseBoots())}>Horse Boots</button>
              <button onClick={() => dispatch(legWraps())}>Leg Wraps</button>
            </div>
          ) : (
            ""
          )}
          <button onClick={openRiderFilter}>Rider</button>
          {openRiderFilt ? (
            <div>
              <button onClick={() => dispatch(tops())}>Tops</button>
              <button onClick={() => dispatch(ridingLeggins())}>Riding Leggins</button>
              <button onClick={() => dispatch(ridingJackets())}>Riding Jackets</button>
              <button onClick={() => dispatch(ridingShowJackets())}>Riding Show Jackets</button>
              <button onClick={() => dispatch(ridingGloves())}>Riding Gloves</button>
            </div>
          ) : (
            ""
          )}
        </div>
        <div className="Shop-Items">
          {products.map((e, index) => {
            return (
              <div
                onClick={() => toogleModal(e.id)}
                className="Item"
                key={index}
              >
                <img
                  src={e.img1}
                  onMouseOver={(e) =>
                    (e.currentTarget.src =
                      e.target.getAttribute("data-hover-src"))
                  }
                  onMouseOut={(e) =>
                    (e.currentTarget.src =
                      e.target.getAttribute("data-normal-src"))
                  }
                  data-normal-src={e.img1}
                  data-hover-src={e.img2}
                />
                <span>
                  <p>{e.name}</p>
                  <p>${e.price}USD</p>
                </span>
              </div>
            );
          })}
        </div>
      </div>
      {isOpen ? (
        <Modal toogleModal={toogleModal}>
          {i.map((e, index) => {
            return (
              <div className="Modal-container" key={index} >
                <div className="Modal-img">
                  <img
                    src={e.img1}
                    onMouseOver={(e) =>
                      (e.currentTarget.src =
                        e.target.getAttribute("data-hover-src"))
                    }
                    onMouseOut={(e) =>
                      (e.currentTarget.src =
                        e.target.getAttribute("data-normal-src"))
                    }
                    data-normal-src={e.img1}
                    data-hover-src={e.img2}
                  />
                </div>
                <div className="Modal-cont">
                  <h1>{e.name}</h1>
                  <h3>${e.price}USD</h3>
                  <div className="Modal-addToCart">
                    <span>
                      <button onClick={() => handleCountChange(e.id, "Minus")}>-</button>
                      <p>{e.count}</p>
                      <button onClick={() => handleCountChange(e.id, "Plus")}>+</button>
                    </span>
                    <button onClick={() => addCart(e.id)} className="btnn">
                      Add to Cart
                    </button>
                  </div>
                  <div className="icons">
                    <span>
                      <img src="../../../public\Icons\delivery-truck.png" />
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
                         {e.detail?.size && <p><h3>Size: </h3>{e.detail?.size}</p>}
                         {e.details?.color && <p><h3>Color:</h3> {e.details?.color}</p>}
                         {e.details?.detail && <p><h3>Details:</h3> {e.details?.detail}</p>}
                         {e.details?.piping && <p><h3>Piping:</h3> {e.details?.piping}</p>}
                         {e.details?.edgeborder && <p><h3>Edge border:</h3> {e.details?.edgeborder}</p>}
                         {e.details?.material && <p><h3>Material:</h3> {e.details?.material}</p>}
                         {e.details?.washing && <p><h3>Washing:</h3> {e.details?.washing}</p>}
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
