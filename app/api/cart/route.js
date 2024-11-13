"use server";
import mongoose from "mongoose";

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

export async function GET() {
  // If we are not connected to mongoose then we connect
  if (
    mongoose.connection.readyState === 0 ||
    mongoose.connection.readyState === 99
  ) {
    await mongoose
      .connect("mongodb://127.0.0.1:27017/e-commerce-website")
      .then(() => console.log("Connected!"));
  }

  // If model already exists then we will use it otherwise we create a new model
  const MyModel =
    mongoose.models.cartProduct ||
    mongoose.model("cartProduct", cartProductSchema);

  const products = await MyModel.find();

  return Response.json(products);
}

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
    mongoose.models.cartProduct ||
    mongoose.model("cartProduct", cartProductSchema);

  //Gets the req body
  const reqBody = await req.json();

  if ((await productExists(MyModel, reqBody.postId)) == true) {
    const product = await MyModel.updateOne(
      { postId: reqBody.postId }, // Find the document by its ID
      { $inc: { quantity: reqBody.quantity } } // Increment the quantity by 'rb'
    );
    return Response.json({
      statusCode: 200,
      message: "Updated quantity in Product",
      product,
    });
  }

  const product = await MyModel.create(reqBody);
  return Response.json({
    statusCode: 200,
    message: "Created Product",
    product,
  });
}



export async function DELETE(req) {
  if (
    mongoose.connection.readyState === 0 ||
    mongoose.connection.readyState === 99
  ) {
    await mongoose
      .connect("mongodb://127.0.0.1:27017/e-commerce-website")
      .then(() => console.log("Connected!"));
  }

  const MyModel =
    mongoose.models.cartProduct ||
    mongoose.model("cartProduct", cartProductSchema);

  //Gets the req body
  const reqBody = await req.json();
  
  const product = await MyModel.deleteOne({postId:reqBody});
  return Response.json({
    statusCode: 200,
    message: "Deleted Post",
    product,
  });
}


const productExists = async (MyModel, postId) => {
  const product = await MyModel.findOne({ postId: postId });
  if (product == null) {
    return false;
  } else {
    return true;
  }
};