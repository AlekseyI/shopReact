import { httpClient } from "../httpClient/httpClient";

export const productsService = {
  getAll() {
    return httpClient.get("products");
  },
  getById(id) {
    return httpClient.get("products", { id });
  },
  add(data) {
    return httpClient.post("products", data, {
      "Content-Type": "application/json"
    })
  }
};