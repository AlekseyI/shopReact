import React from "react";
import ProductItem from "../ProductItem";
import {Grid} from "@mui/material";

const ProductList = ({
  products,
  buttonName,
  buttonCallbacks,
  isShowCost = false,
  isShowCount = false,
}) => {
  return (
    <Grid container item xl={4} lg={8} md={8} xs={12}>
      {products.map((product) => (
        <ProductItem
          key={product.id}
          product={product}
          buttonName={buttonName}
          buttonCallbacks={buttonCallbacks}
          isShowCost={isShowCost}
          isShowCount={isShowCount}
        />
      ))}
    </Grid>
  );
};

export default ProductList;
