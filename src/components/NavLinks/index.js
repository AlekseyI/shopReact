import React, {useState} from "react";
import { useCart } from "../../hooks/useCart";
import {
  AppBar,
  Box,
  Button,
  Container,
  IconButton, MenuItem,
  Toolbar,
  Typography
} from "@mui/material";
import Menu from '@mui/material/Menu';
import { Home, Menu as MenuIcon} from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

const NavLinks = () => {
  const cart = useCart();
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState(null);

  const showLinks = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const hideLinks = () => {
    setAnchorEl(null);
  };

  const goTo = (path, isCloseLinks=false) => {
    navigate(path);
    if (isCloseLinks)
    {
      setAnchorEl(null);
    }
  };

  return (
    <AppBar position="sticky">
      <Container sx={{ flexGrow: 1 }}>
        <Toolbar>
          <IconButton
            edge="start"
            aria-label="menu"
            color="inherit"
            onClick={() => goTo("/products")}
          >
            <Home fontSize="large" />
          </IconButton>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Shop
          </Typography>
          <Box display={{ xs: "none", sm: "block" }}>
            <Button
              color="inherit"
              variant="outlined"
              onClick={() => goTo("/products")}
            >
              Products
            </Button>
            <Button
              color="inherit"
              variant="outlined"
              onClick={() => goTo("/add-product")}
              style={{ marginLeft: 10 }}
            >
              Add product
            </Button>
            <Button
              color="secondary"
              variant="contained"
              onClick={() => goTo("/cart")}
              style={{ marginLeft: 10 }}
            >
              Cart
              {cart.products.length > 0
                ? `(${cart.products
                    .map((v) => v.count)
                    .reduce((p, n) => p + n)})`
                : null}
            </Button>
          </Box>
          <Box display={{xs: "block", sm: "none"}}>
            <IconButton
                edge="start"
                aria-label="menu"
                color="inherit"
                onClick={showLinks}
            >
              <MenuIcon fontSize="large" />
            </IconButton>
            <Menu
                anchorEl={anchorEl}
                open={anchorEl !== null}
                onClose={hideLinks}
            >
              <MenuItem onClick={() => goTo("/products", true)}>Products</MenuItem>
              <MenuItem onClick={() => goTo("/add-product", true)}>Add product</MenuItem>
              <MenuItem onClick={() => goTo("/cart", true)}>Cart</MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default NavLinks;