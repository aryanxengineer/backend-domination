import { config } from "dotenv";

config({ path: `.env.${process.env.NODE_ENV || 'development'}.local` });

export const {
    GOOGLE_CLIENT_ID,
    GOOGLE_CLIENT_SECRET,
    MONGODB_URI,
    PORT,
} = process.env;