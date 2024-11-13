"use server";

import { cartProductsUrl } from "../lib/constants";
export const addToCart = async (quantity, product) => {
  const cartItem = {
    ...product,
    quantity: quantity,
  };

  await fetch(cartProductsUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(cartItem),
  });
};

export const getCartProducts = async () => {
  const response = await fetch(cartProductsUrl);
  console.log("====================================");
  const cartProducts = Array.from(await response.json());
  if (cartProducts.length == 0) {
    return null;
  }
  return cartProducts;
};

export const delelteCartProduct = async (postId) => {
  await fetch(cartProductsUrl, {
    method: "DELETE",
    body: postId,
    headers: {
      "Content-Type": "application/json",
    },
  }); 
};
