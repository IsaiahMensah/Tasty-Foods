import React, { useState } from "react";
// import makeStyles from "@mui/styles";
import Typography from "@mui/material/Typography";
// import Modal from "@mui/material";
import { Button, Modal } from "@mui/material";
import "./Demo.css";
import ham from "../../images/hamburger-494706.jpg";

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

// const useStyles = makeStyles((theme) => ({
//   paper: {
//     position: "absolute",
//     width: 800,
//     backgroundColor: theme.palette.background.paper,
//     boxShadow: theme.shadows[5],
//     padding: theme.spacing(4),
//     outline: "none",
//   },
// }));

function SimpleModal(product) {
  const [open, setOpen] = useState(false);
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = useState(getModalStyle);
  const [modalData, setData] = useState();
  // console.log(product.product);
  const productDetail = product.product;

  const data = [
    {
      title: "Overview",
      Info: "Pay me",
    },
  ];
  const CustomModal = () => {
    console.log(productDetail.img);
    return modalData ? (
      <Modal
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        open={open}
        onClose={handleClose}
      >
        <div className="modal">
          <div className="a-about">
            <div className="col">
              <img src={productDetail.img} width="100%" height="100%" alt="" />
            </div>
            <div className="col">
              <div className="modal-body">
              <h1>{productDetail.desc} </h1>
                <div className="details">
                  
                   <h2 ><strong>Food Type:</strong>{productDetail.type}</h2>
                   <h2><strong>Time Taken:</strong>{productDetail.mealtype}</h2>
                </div>
                <div className="modal-btn">
                  <button>Buy</button>
                  <button>Add to Cart</button>
                </div>
              </div>
            </div>
          </div>
          {/* <SimpleModal /> */}
        </div>
      </Modal>
    ) : null;
  };

  const handleOpen = (index) => {
    setOpen(true);
    setData(data[index]);
  };

  const handleClose = () => {
    setOpen(false);
  };
  // const classes = useStyles();

  return (
    <div>
      {data.map((d, idx) => (
        <div key={idx}>
          <Typography gutterBottom>
            Click to get the full Modal experience!
          </Typography>
          <Button
            onClick={() => {
              handleOpen(idx);
            }}
          >
            {d.title}
          </Button>
        </div>
      ))}
      <CustomModal />
    </div>
  );
}

export default SimpleModal;
