import React from "react";
import FeaturedProducts from "../FeaturedProducts/FeaturedProducts";
import CategoriesSlider from "../CategoriesSlider/CategoriesSlider";
import { Helmet } from "react-helmet";
import MainSilder from "../MainSlider/MainSlider";

export default function Home() {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Fresh Cart</title>
      </Helmet>
      <MainSilder />
      <CategoriesSlider />
      <FeaturedProducts />
    </>
  );
}