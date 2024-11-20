"use server";
import mongoose from "mongoose";
import { cartProductsUrl } from "@/app/lib/constants";
const Schema = mongoose.Schema;
const cartProductSchema = new Schema({
    postId: { type: String, required: true },
    title: { type: String, required: true },
    desc: { type: String, required: true },
    image: { type: String, required: true },
    category: { type: String, required: true },
    sellerUid: { type: String, required: true },
    price: { type: Number, required: true },
    discount: { type: Boolean },
    discountPercentage: { type: Number },
    rating: { type: [Number] },
    quantity: { type: Number },
  });
const checkOutProductsSchema = new Schema({
  firstName: { type: String, required: true },
  companyName: { type: String, required: true },
  streetAddress: { type: String, required: true },
  apartment: { type: String},
  town_city: { type: String, required: true },
  phoneNumber: { type: String, required: true },
  emailAddress: { type: String, required: true },
  payment: { type: String, required: true },
  totalPrice: { type: Number, required: true },
  products: {
    type: [cartProductSchema],
    required: true,
  },
});

export async function POST(req) {
  if (
    mongoose.connection.readyState === 0 ||
    mongoose.connection.readyState === 99
  ) {
    await mongoose
      .connect("mongodb://127.0.0.1:27017/e-commerce-website")
      .then(() => console.log("Connected!"));
  }

  const MyModel =
    mongoose.models.checkout ||
    mongoose.model("checkout", checkOutProductsSchema);

  //Get the billing details
  const billingDetails = await req.json();
  const response = await fetch(cartProductsUrl);
  //Get User's Cart items
  const usersCartProducts = await response.json();
  
  if(usersCartProducts.length ===0)
  {
    return new Response("No items in cart", { status: 400 })
  }

  const checkoutModel = {
    ...billingDetails,
    products:usersCartProducts,
  }
  await MyModel.create(
    checkoutModel,
  );
  //Delete All Cart items
   await fetch(cartProductsUrl,{
    method:"DELETE",
    headers:{
        "Content-Type":"application/json",
    },
    body:JSON.stringify("deleteAll"),
  });

  return Response.json({
    statusCode: 200,
    message: "Order Placed",
  });
}
