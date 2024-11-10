"use server"
import mongoose from 'mongoose';

export async function GET (req,context) {
    const { params } = context;
    const { id } = await params;
    const productId = await id;
    // If we are not connected to mongoose then we connect
    if (mongoose.connection.readyState === 0 || mongoose.connection.readyState === 99) {
        await mongoose.connect('mongodb://127.0.0.1:27017/e-commerce-website')
        .then(() => console.log('Connected!')); 
    }
  

  const Schema = mongoose.Schema;
  const productSchema = new Schema({
    postId: {type:String,required: true},
    title: {type:String,required: true},
    desc: {type:String,required: true},
    image: {type:String,required: true},
    category: {type:String,required: true},
    sellerUid:{type:String,required: true},
    rating:{type:[Number]},
  });

   // If model already exists then we will use it otherwise we create a new model
  const MyModel =   mongoose.models.product || mongoose.model('product', productSchema);

  const product = await MyModel.findOne({postId:productId})

  return Response.json(product)
}