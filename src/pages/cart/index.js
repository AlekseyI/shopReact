import React, {useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getCartProducts,
  setIsShowLoading,
  stateProduct,
} from "../../store/productReducer";
import { useCart } from "../../hooks/useCart";
import Loader from "../../components/Loader";
import { CartOperation } from "../../utils/cart";
import ProductList from "../../components/ProductList";
import ErrorPage from "../error";
import {Box, Typography} from "@mui/material";

const CartPage = () => {
  const cart = useCart();
  const productState = useSelector(stateProduct);
  const dispatch = useDispatch();
  
  const notShowLoading = () => {
    if (productState.isShowLoading)
    {
      dispatch(setIsShowLoading(false));
    }
  }

  const removeFromCart = (id, isOneRemove = false) => {
    CartOperation.RemoveFromCart(cart, id, isOneRemove);
    notShowLoading();
  };

  const addToCart = (id) => {
    CartOperation.AddToCart(cart, id);
    notShowLoading();
  };

  useEffect(async () => {
    await dispatch(getCartProducts(cart.products));
  }, [cart.products]);

  return (
    <Loader state={productState}>
      <Box display="flex" flexDirection={"column"} alignItems={"center"}>
          <Typography variant="h3" textAlign="center">Cart</Typography>
        {productState.cartProducts && productState.cartProducts.length > 0 ? (
          <ProductList
            products={productState.cartProducts}
            buttonName={"Remove"}
            buttonCallbacks={{ main: removeFromCart, add: addToCart }}
            isShowCost={true}
            isShowCount={true}
          />
        ) : (
            !productState.isLoading ?
          <ErrorPage error={"Empty"} /> : null
        )}
      </Box>
    </Loader>
  );
};

export default CartPage;
