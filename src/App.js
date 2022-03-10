import AppRoutes from "./components/AppRoutes";
import { useEffect } from "react";
import { LocalCartOperation } from "./utils/cart";
import { useCart } from "./hooks/useCart";
import {
  AppBar,
  Box,
  Button,
  Container,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import { Home } from "@mui/icons-material";
import NavLinks from "./components/NavLinks";

function App() {
  const cart = useCart();

  useEffect(() => {
    cart.setProducts(LocalCartOperation.GetLocalCart());
  }, []);

  return (
    <div>
      <NavLinks />
      <AppRoutes />
    </div>
  );
}

export default App;
