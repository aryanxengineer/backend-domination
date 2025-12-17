import mongoose from 'mongoose';

export interface ProductDocument extends mongoose.Document {
  name: string;
  imageUrl: string;
}

const productSchema = new mongoose.Schema<ProductDocument>({
  name: { type: String, required: true },
  imageUrl: { type: String, required: true },
});

export const Product = mongoose.model<ProductDocument>('Product', productSchema);