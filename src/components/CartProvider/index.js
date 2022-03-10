import { useState } from "react";
import { CartContext } from "./CartContext";

export const CartProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  return (
    <CartContext.Provider
      value={{
        isLoading,
        setIsLoading,
        products,
        setProducts,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
