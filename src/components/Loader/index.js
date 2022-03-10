import React from "react";
import { useSelector } from "react-redux";
import { stateProduct } from "../../store/productReducer";
import {Box, Typography} from "@mui/material";

const Loader = ({ state, children }) => {
  const productState = useSelector(stateProduct);

  return (
    <Box>
      {state.error ? (
        <Typography variant="h3" textAlign="center">{state.error}</Typography>
      ) : state.isLoading && productState.isShowLoading  ? (
          <Typography variant="h3" textAlign="center">Loading...</Typography>
      ) : (
        children
      )}
    </Box>
  );
};

export default Loader;
