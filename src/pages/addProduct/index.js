import React from "react";
import { Controller, useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { addNewProduct } from "../../store/productReducer";
import { currencies } from "../../utils/cart";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  Box,
  Button,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";

const AddProductPage = () => {
  const costValidate = function (errorMessage) {
    return this.test(`cost-validate`, errorMessage, function (value) {
      const { path, createError } = this;

      return (
        (value && parseInt(value) > 0) ||
        !value ||
        createError({ path, message: errorMessage })
      );
    });
  };

  yup.addMethod(yup.string, "costValidate", costValidate);

  let productSchema = yup.object().shape({
    name: yup.string().required("Field is required"),
    cost: yup
      .string()
      .costValidate("Value must be bigger then 0")
      .required("Field is required"),
    currency: yup.string().required("Field is required"),
    description: yup.string().required("Field is required"),
  });

  const {
    register,
    handleSubmit,
    reset,
    control
  } = useForm({
    mode: "onBlur",
    resolver: yupResolver(productSchema),
    shouldFocusError: true,
    criteriaMode: "all",
    reValidateMode: "onChange",
  });
  const dispatch = useDispatch();

  const addProduct = async (data) => {
    data["currency"] = currencies[data["currency"]];
    await dispatch(addNewProduct(data));
    reset();

    alert("product create");
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      mt={1}
    >
      <Typography variant="h3" component="h3" textAlign="center">
        Add new product
      </Typography>
      <form onSubmit={handleSubmit(addProduct)} style={{ marginTop: 8 }}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Controller
              render={({ field, formState }) => (
                <FormControl fullWidth>
                  <TextField
                    {...field}
                    {...register("name")}
                    label="Name"
                    error={!!formState.errors?.name}
                  />
                  <Box color="red">
                    {!!formState.errors?.name?.message
                      ? formState.errors.name.message
                      : null}
                  </Box>
                </FormControl>
              )}
              name="name"
              control={control}
              defaultValue=""
            />
          </Grid>
          <Grid item sm={9} xs={8} display="flex" alignItems="center">
            <Controller
              render={({ field, formState }) => (
                <FormControl fullWidth>
                  <TextField
                    {...field}
                    {...register("cost")}
                    label="Cost"
                    type="number"
                    error={!!formState.errors?.cost}
                  />
                  <Box color="red">
                    {!!formState.errors?.cost?.message
                      ? formState.errors.cost.message
                      : null}
                  </Box>
                </FormControl>
              )}
              name="cost"
              control={control}
              defaultValue={1}
            />
          </Grid>
          <Grid item sm={3} xs={4}>
            <Controller
              render={({ field, formState }) => (
                <FormControl fullWidth>
                  <InputLabel id="currency-label">Currency</InputLabel>
                  <Select
                    {...field}
                    {...register("currency")}
                    labelid="currency-label"
                    label="Currency"
                    defaultValue=""
                    error={!!formState.errors?.currency}
                  >
                    {Object.keys(currencies).map((key, index) => (
                      <MenuItem key={index} value={key}>
                        {currencies[key]}
                      </MenuItem>
                    ))}
                  </Select>
                  <Box color="red">
                    {!!formState.errors?.currency?.message
                      ? formState.errors.currency.message
                      : null}
                  </Box>
                </FormControl>
              )}
              name="currency"
              control={control}
              defaultValue=""
            />
          </Grid>
          <Grid item xs={12}>
            <Controller
              render={({ field, formState }) => (
                <FormControl fullWidth>
                  <TextField
                    {...field}
                    {...register("description")}
                    label="Description"
                    multiline
                    rows={4}
                    error={!!formState.errors?.description}
                  />
                  <Box color="red">
                    {!!formState.errors?.description?.message
                      ? formState.errors.description.message
                      : null}
                  </Box>
                </FormControl>
              )}
              name="description"
              control={control}
              defaultValue=""
            />
          </Grid>
          <Grid item xs={12} display="flex" justifyContent="flex-end">
            <Button type="submit" variant="contained">
              Add product
            </Button>
          </Grid>
        </Grid>
      </form>
    </Box>
  );
};

export default AddProductPage;
