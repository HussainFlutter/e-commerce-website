"use server";
import { checkoutUrl } from "../lib/constants";
export async function placeOrder(billingDetails, totalPrice) {
  const checkOutModel = {
    ...billingDetails,
    totalPrice,
  };

  const f = await fetch(checkoutUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(checkOutModel),
  });

  if (f.status === 400) {
    return 400;
  }
  return 200;
}
