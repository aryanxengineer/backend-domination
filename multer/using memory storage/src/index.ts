import express from "express";
import dotenv from "dotenv";
import path from "path";
import connectionDB from "./config/db.js";
import upload from "./config/multer.js";
import { fileURLToPath } from "url";
import { Product } from "./model/product.model.js";
import sharpService from "./services/sharp.service.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config();
connectionDB();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.get("/", (req, res) => {
  res.render("index");
});

app.post("/upload-image", upload.single("file"), async (req, res) => {
  console.log(req.file);

  console.log("size before resize: ", (req.file?.size));

  let newBuffer = await sharpService
    .resizeImage(req.file?.buffer || Buffer.from(""), 200, 200);


  console.log("size after resize: ", newBuffer.length);

  const image = await Product.create({
    name: req.file?.originalname || "No Name",
    imageUrl: newBuffer || Buffer.from(""),
  });

  // return;
  res.send("uploaded successfully");
});

app.get("/show-images", async (req, res) => {
  const images = await Product.find();
  res.render("show", { images });
});

app.listen(3000);
