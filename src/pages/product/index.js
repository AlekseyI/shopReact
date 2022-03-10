import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getProductById, stateProduct } from "../../store/productReducer";
import Loader from "../../components/Loader";
import ErrorPage from "../error";
import { useCart } from "../../hooks/useCart";
import ProductItem from "../../components/ProductItem";
import { CartOperation } from "../../utils/cart";
import { Box, Grid } from "@mui/material";

const ProductPage = () => {
  const params = useParams();
  const productState = useSelector(stateProduct);
  const dispatch = useDispatch();
  const cart = useCart();

  const addToCart = (id) => {
    CartOperation.AddToCart(cart, id);

    alert("product added to cart");
  };

  useEffect(() => {
    dispatch(getProductById(params.id));
  }, []);

  return (
    <Loader state={productState}>
      <Box display="flex" flexDirection="column" alignItems="center">
        <Grid container item xl={4} lg={8} md={8} xs={12}>
          {productState.products && productState.products.length > 0 ? (
            <ProductItem
              product={productState.products[0]}
              buttonName={"Add to cart"}
              buttonCallbacks={{ main: addToCart }}
              isShowCost={true}
            />
          ) : (
            <ErrorPage error={`Product with id ${params.id} not found`} />
          )}
        </Grid>
      </Box>
    </Loader>
  );
};

export default ProductPage;
