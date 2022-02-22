import React from "react";
import { AppContext } from "../context/AppContext";
import OrderItem from "../components/OrderItem";
import "@styles/MyOrder.scss";

import arrow from "@icons/flechita.svg";

const MyOrder = () => {
  const { state } = React.useContext(AppContext);
  return (
    <aside className="MyOrder">
      <div className="title-container">
        <img src={arrow} alt="arrow" />
        <p className="title">My order</p>
      </div>
      <div className="my-order-content">
        {state.cart.map((item) => {
          return <OrderItem product={item} key={`orderItem${item.id}`} />;
        })}

        <div className="order">
          <p>
            <span>Total</span>
          </p>
          <p>$560.00</p>
        </div>
        <button className="primary-button">Checkout</button>
      </div>
    </aside>
  );
};

export default MyOrder;
