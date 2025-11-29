import express from "express";
import mongoose from "mongoose";
const app = express();
const PORT = 3000;
app.get("/", (req, res) => {
    res.send("Hello, World!");
});
async function startServer() {
    try {
        await mongoose.connect("mongodb+srv://aryanxengineer_db_user:RiEo92mBnBZa7Odj@cluster0.dhbsmtv.mongodb.net/?appName=Cluster0");
        console.log("🌿 Connected to MongoDB Successfully");
        app.listen(PORT, () => {
            console.log(`🚀 Server is running on http://localhost:${PORT}`);
        });
    }
    catch (error) {
        console.log("❌ MongoDB Connection Failed:", error);
    }
}
startServer();
//# sourceMappingURL=index.js.map