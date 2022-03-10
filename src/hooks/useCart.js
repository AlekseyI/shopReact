import { useContext } from "react";
import { CartContext } from "../components/CartProvider/CartContext";

export const useCart = () => useContext(CartContext);