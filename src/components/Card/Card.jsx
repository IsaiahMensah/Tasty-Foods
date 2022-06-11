import React, { useState } from "react";
// import styled from 'styled-components';
// import { Modal } from '../../modal/Modal';
// import { GlobalStyle } from '../../globalStyles';
import "./Card.css";
import Demo from "../modal/demo";

// const Container = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   height: 100vh;
// `;

// const Button = styled.button`
//   min-width: 100px;
//   padding: 16px 32px;
//   border-radius: 4px;
//   border: none;
//   background: #141414;
//   color: #fff;
//   font-size: 24px;
//   cursor: pointer;
// `;

const Card = (item) => {
  const [showModal, setShowModal] = useState(false);
  const product = item.item;
  // console.log(product);
  // console.log(item.item);
  // const openModal = () => {
  //   setShowModal(prev => !prev);
  // };
  return (
    <div className="card">
      <div className="c-card">
        <img src={product.img} className="img_props" />
        <div className="card-body">
          <h5 className="card-title">{product.title}</h5>
          <h5 className="card-text">${product.price}</h5>
          <p className="card-text"></p><br/>

          {/* <button classname="cart-btn " >Add To Cart</button> 
          <button classname="btn-buy">Buy</button> */}
          <Demo product={product} />

          {/* <Button onClick={openModal}>I'm a modal</Button>
        <Modal showModal={showModal} setShowModal={setShowModal} />
        <GlobalStyle /> */}
        </div>
      </div>
    </div>
  );
};

export default Card;
