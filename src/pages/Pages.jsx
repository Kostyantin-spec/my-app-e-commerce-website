import React from "react";
import Home from "../components/mainpage/Home";
import FlashDeals from "../components/flashDeals/FlashDeals";
import TopCate from "../components/top/TopCate";
import NewArrivals from "../components/newarrivals/NewArrivals";
import Discount from "../components/discount/Discount";
import Shop from "../components/shop/Shop";
import Annu from "../components/annocuments/Annu";
import Wrapper from "../components/wrapper/Wrapper";

const Pages = ({ productItems, cartItem, addToCart, shopItems }) => {
  return (
    <>
      <Home cartItem={cartItem} />
      <FlashDeals productItems={productItems} addToCart={addToCart} />
      <TopCate />
      <NewArrivals />
      <Discount />
      <Shop addToCart={addToCart} shopItems={shopItems} />
      <Annu />
      <Wrapper />
    </>
  );
};

export default Pages;
