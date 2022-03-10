import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts, stateProduct } from "../../store/productReducer";
import ProductList from "../../components/ProductList";
import Loader from "../../components/Loader";
import { useNavigate } from "react-router-dom";
import { Box, Typography } from "@mui/material";

const ProductsPage = () => {
  const productState = useSelector(stateProduct);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getAllProducts());
  }, []);

  const showProduct = (id) => {
    navigate("/products/" + id);
  };

  return (
    <Loader state={productState}>
      <Box display="flex" flexDirection={"column"} alignItems={"center"}>
        <Typography variant="h3" textAlign="center">Products</Typography>
        <ProductList
          products={productState.products}
          buttonName={"Show"}
          buttonCallbacks={{ main: showProduct }}
        />
      </Box>
    </Loader>
  );
};

export default ProductsPage;
