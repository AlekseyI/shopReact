import React from "react";
import { Button, Grid, Paper, Typography } from "@mui/material";

const ProductItem = ({
  product,
  buttonName,
  buttonCallbacks,
  isShowCost = false,
  isShowCount = false,
}) => {
  return (
    <Paper sx={{ width: "100%", marginTop: 1, paddingTop: 1, paddingBottom: 1 }}>
      <Grid container textAlign="center">
        <Grid item xs={8}>
          <Grid container>
            <Grid item xs={12}>
              <Typography variant="h5" component="h2">{product.name}</Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography component="h3">
                {isShowCost
                  ? "Cost: " +
                    product.cost * (product.count > 0 ? product.count : 1) +
                    product.currency
                  : null}
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography component="h3">
                {isShowCount ? "Count: " + product.count : null}
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography component="h2">{product.description}</Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid
          item
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          xs={4}
        >
          <Button
            variant="contained"
            onClick={() => buttonCallbacks.main(product.id)}
          >
            {buttonName}
          </Button>
          {isShowCount ? (
            <>
              <Button
                variant="contained"
                style={{ width: "max-content", marginTop: 5 }}
                onClick={() => buttonCallbacks.main(product.id, true)}
              >
                Remove One
              </Button>
              <Button
                variant="contained"
                style={{ width: "max-content", marginTop: 5 }}
                onClick={() => buttonCallbacks.add(product.id)}
              >
                Add One
              </Button>
            </>
          ) : null}
        </Grid>
      </Grid>
    </Paper>
  );
};

export default ProductItem;

{
  /*<div*/
}
{
  /*  className={*/
}
{
  /*    appStyles.flexCenter +*/
}
{
  /*    " " +*/
}
{
  /*    appStyles.flexCenterColumn +*/
}
{
  /*    " " +*/
}
{
  /*    styles.contentBaseContainer*/
}
{
  /*  }*/
}
{
  /*>*/
}
{
  /*  <div>*/
}
{
  /*    <h2>{product.name}</h2>*/
}
{
  /*  </div>*/
}
{
  /*  <div*/
}
{
  /*    className={appStyles.flexCenter + " " + styles.contentContainer}*/
}
{
  /*  >*/
}
{
  /*    {isShowCost ? (*/
}
{
  /*      <h3>*/
}
{
  /*        Cost: {product.cost * (product.count > 0 ? product.count : 1)}*/
}
{
  /*        {product.currency}*/
}
{
  /*      </h3>*/
}
{
  /*    ) : null}*/
}
{
  /*    {isShowCount ? <h3>Count: {product.count}</h3> : null}*/
}
{
  /*  </div>*/
}
{
  /*  <div>{product.description}</div>*/
}
{
  /*</div>*/
}
{
  /*<div className={appStyles.flexCenter + " " + appStyles.flexCenterColumn}>*/
}
{
  /*  <Button onClick={() => buttonCallbacks.main(product.id)}>*/
}
{
  /*    {buttonName}*/
}
{
  /*  </Button>*/
}
{
  /*  {isShowCount ? (*/
}
{
  /*    <>*/
}
{
  /*      <Button*/
}
{
  /*        style={{ width: "max-content", marginTop: 5 }}*/
}
{
  /*        onClick={() => buttonCallbacks.main(product.id, true)}*/
}
{
  /*      >*/
}
{
  /*        Remove One*/
}
{
  /*      </Button>*/
}
{
  /*      <Button*/
}
{
  /*        style={{ width: "max-content", marginTop: 5 }}*/
}
{
  /*        onClick={() => buttonCallbacks.add(product.id)}*/
}
{
  /*      >*/
}
{
  /*        Add One*/
}
{
  /*      </Button>*/
}
{
  /*    </>*/
}
{
  /*  ) : null}*/
}
{
  /*</div>*/
}
