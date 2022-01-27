import axios from "axios";

export function fetchProducts() {
  return axios({
    url: "http://www.mocky.io/v2/5c3e15e63500006e003e9795",
  });
}
