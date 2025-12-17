import mongoose from 'mongoose';

export interface ProductDocument extends mongoose.Document {
  name: string;
  imageUrl: Buffer;
}

const productSchema = new mongoose.Schema<ProductDocument>({
  name: { type: String, required: true },
  imageUrl: { type: Buffer, required: true },
});

export const Product = mongoose.model<ProductDocument>('Product', productSchema);