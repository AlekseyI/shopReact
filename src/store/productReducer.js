import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { productsService } from "../services/api/products";

const initialState = {
  isLoading: false,
  isShowLoading: true,
  products: [],
  cartProducts: [],
  error: null,
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setIsLoadingProduct(state, action) {
      state.isLoading = action.payload;
    },
    setIsShowLoading(state, action) {
      state.isShowLoading = action.payload;
    },
    setAllProducts(state, action) {
      state.products = action.payload;
    },
    setProductById(state, action) {
      state.products = action.payload;
    },
    setErrorLoadingProducts(state, action) {
      state.error = action.payload;
    },
    setCartProducts(state, action) {
      state.cartProducts = action.payload;
    },
  },
});

export const {
  setIsLoadingProduct,
  setIsShowLoading,
  setAllProducts,
  setCartProducts,
  setProductById,
  setErrorLoadingProducts,
} = productSlice.actions;

export const stateProduct = (state) => state.product;

export const addNewProduct = createAsyncThunk(
    "product/addNewProduct",
    async (data, { dispatch }) => {
      try {
        const response = await productsService.add(data);

        if (response.status !== 201)
        {
          dispatch(setErrorLoadingProducts(response.statusText));
        }
      } catch (e) {
        dispatch(setErrorLoadingProducts(e.message));
      }
    }
);

export const getAllProducts = createAsyncThunk(
  "product/getAllProducts",
  async (_, { dispatch }) => {
    try {
      dispatch(setErrorLoadingProducts(null));
      dispatch(setIsLoadingProduct(true));
      const response = await productsService.getAll();
      dispatch(setIsLoadingProduct(false));

      dispatch(setAllProducts(response.data));
    } catch (e) {
      dispatch(setIsLoadingProduct(false));
      dispatch(setErrorLoadingProducts(e.message));
    }
  }
);

export const getProductById = createAsyncThunk(
  "product/getProductById",
  async (id, { dispatch }) => {
    try {
      dispatch(setErrorLoadingProducts(null));
      dispatch(setIsLoadingProduct(true));
      const response = await productsService.getById(id);
      dispatch(setIsLoadingProduct(false));

      dispatch(setAllProducts(response.data));
    } catch (e) {
      dispatch(setIsLoadingProduct(false));
      dispatch(setErrorLoadingProducts(e.message));
    }
  }
);

export const getProductsByIds = createAsyncThunk(
  "product/getProductsByIds",
  async (ids, { dispatch }) => {
    try {
      let response;
      dispatch(setErrorLoadingProducts(null));
      if (Array.isArray(ids) && ids.length > 0) {
        dispatch(setIsLoadingProduct(true));
        response = await productsService.getAll();
        dispatch(setIsLoadingProduct(false));

        response = response.data.filter((p) => ids.includes(p.id));
      } else {
        response = [];
      }

      dispatch(setAllProducts(response));
    } catch (e) {
      dispatch(setIsLoadingProduct(false));
      dispatch(setErrorLoadingProducts(e.message));
    }
  }
);

export const getCartProducts = createAsyncThunk(
  "product/getProductsByIds",
  async (data, { dispatch }) => {
    try {
      let response;
      dispatch(setErrorLoadingProducts(null));
      if (Array.isArray(data) && data.length > 0) {
        dispatch(setIsLoadingProduct(true));
        response = await productsService.getAll();
        dispatch(setIsLoadingProduct(false));

        response = response.data.filter(
          (p) =>
            data.filter((v) => {
              if (v.id === p.id) {
                p.count = v.count;
                return true;
              }

              return false;
            }).length > 0
        );
      } else {
        response = [];
      }

      dispatch(setCartProducts(response));
    } catch (e) {
      dispatch(setIsLoadingProduct(false));
      dispatch(setErrorLoadingProducts(e.message));
    }
  }
);

export default productSlice.reducer;
