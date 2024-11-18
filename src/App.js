import "./App.css";
import Header from "./common/header/Header";
import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Pages from "./pages/Pages";
import Data from "./components/flashDeals/Data";
import Cart from "./common/cart/Cart";
import Sdata from "./components/mainpage/Sdata";
import Footer from "./common/footer/Footer";

function App() {
  // stpe 1:  fetch data from datahase
  const { productItems } = Data;
  const { shopItems } = Sdata;
  const [cartItem, setCardItem] = useState([]);

  const addToCart = (product) => {
    const productExit = cartItem.find((item) => item.id === product.id);

    if (productExit) {
      setCardItem(
        cartItem.map((item) =>
          item.id === product.id
            ? { ...productExit, qty: productExit.qty + 1 }
            : item
        )
      );
    } else {
      setCardItem([...cartItem, { ...product, qty: 1 }]);
    }
  };

  const decreaseQty = (product) => {
    const productExit = cartItem.find((item) => item.id === product.id);
    if (productExit.qty === 1) {
      setCardItem(cartItem.filter((item) => item.id !== product.id));
    } else {
      setCardItem(
        cartItem.map((item) =>
          item.id === product.id
            ? { ...productExit, qty: productExit.qty - 1 }
            : item
        )
      );
    }
  };
  return (
    <>
      <Header cartItem={cartItem} />
      <Routes>
        <Route
          exact
          path="/"
          element={
            <Pages
              productItems={productItems}
              addToCart={addToCart}
              shopItems={shopItems}
            />
          }
        />
        <Route
          exact
          path="/cart"
          element={
            <Cart
              cartItem={cartItem}
              addToCart={addToCart}
              decreaseQty={decreaseQty}
            />
          }
        />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
