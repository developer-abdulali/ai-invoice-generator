import { clerkMiddleware } from "@clerk/express";
import cors from "cors";
import "dotenv/config";
import express from "express";
import path from "path";
import connectDB from "./config/connectDB.js";
import invoiceRouter from "./routes/invoiceRouter.js";

const app = express();
const PORT = process.env.PORT || 5000;

// Middlewares
app.use(cors());
app.use(clerkMiddleware());
app.use(express.json({ limit: "20mb" }));
app.use(express.urlencoded({ limit: "20mb", extended: true }));

// Database connection
connectDB();

// Routes
app.use("/uploads", express.static(path.join(process.cwd(), "uploads")));

app.use("/api/invoices", invoiceRouter);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
