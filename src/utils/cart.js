export const currencies = {
  "USD": "$",
  "EUR": "€",
  "GBP": "£"
}

export const LocalCartOperation = {
  AddToLocalCart: (data) => {
    let localCart = localStorage.getItem("cart");
    if (localCart) {
      try {
        localCart = JSON.parse(localCart);
        localCart.push(data);
        localStorage.setItem("cart", JSON.stringify(localCart));
      } catch (e) {
        console.log("invalid cart format");
      }
    } else {
      localStorage.setItem("cart", JSON.stringify([data]));
    }
  },
  RewriteLocalCart: (data) => {
    localStorage.setItem("cart", JSON.stringify(data));
  },
  GetLocalCart: () => {
    const localCart = localStorage.getItem("cart");
    if (localCart) {
      try {
        return JSON.parse(localCart);
      } catch (e) {
        console.log("invalid cart format");
      }
    }
    return [];
  },
  RemoveFromLocalCart: (id) => {
    let localCart = localStorage.getItem("cart");
    if (localCart) {
      try {
        localCart = JSON.parse(localCart);
        localCart = localCart.filter((v) => v.id !== id);
        localStorage.setItem("cart", JSON.stringify(localCart));
      } catch (e) {
        console.log("invalid cart format");
      }
    }
  },
};

export const CartOperation = {
  AddToCart: (cart, id) => {
    let isExsistId = false;
    const products = cart.products.map((p) => {
      if (p.id === id) {
        isExsistId = true;
        p.count++;
      }
      return p;
    });

    if (isExsistId) {
      cart.setProducts(products);
      LocalCartOperation.RewriteLocalCart(products);
    } else {
      cart.setProducts([...cart.products, { id: id, count: 1 }]);
      LocalCartOperation.AddToLocalCart({ id: id, count: 1 });
    }
  },
  RemoveFromCart: (cart, id, isOneRemove = false) => {
    const filterCartProducts = (data) => {
      LocalCartOperation.RewriteLocalCart(data);
      return data;
    };
    if (isOneRemove) {
      cart.setProducts((value) =>
        filterCartProducts(
          value
            .map((p) => {
              if (p.id === id) {
                p.count = p.count > 0 ? p.count - 1 : p.count;
              }
              return p;
            })
            .filter((v) => v.count > 0)
        )
      );
    } else {
      cart.setProducts((value) =>
        filterCartProducts(value.filter((p) => p.id !== id))
      );
    }
  }
};
