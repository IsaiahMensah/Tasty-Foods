import "./Menu.css";
import React from "react";
import Data from "../../data/Data";
import Card from "../../Card/Card";

const Menu = () => {
  return (
    <div className="food-menu">
      <section className="menu-section">
        <div className="text">
          FOOD MENU
          <div className="sub-menu">
            {Data.productData.map((item, index) => {
              return <Card item={item} key={index} />;
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Menu;
