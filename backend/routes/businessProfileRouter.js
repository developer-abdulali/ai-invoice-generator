import express from "express";
import multer from "multer";
import path from "path";
import { clerkMiddleware } from "@clerk/express";
import {
  createBusinessProfile,
  deleteBusinessProfile,
  getMyBusinessProfile,
  updateBusinessProfile,
} from "../controllers/businessProfileController.js";
import { getInvoices } from "../controllers/invoiceController.js";

const businessProfileRouter = express.Router();

businessProfileRouter.use(clerkMiddleware()); // Apply clerkMiddleware to all routes in this router

// multer configuration for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(process.cwd(), "uploads"));
  },
  filename: (req, file, cb) => {
    const unique = Date.now() + "-" + math.round(Math.randon() * 1e9);
    const ext = path.extname(file.originalname);
    cb(null, `business-${unique}${ext}`);
  },
});

const upload = multer({ storage });

businessProfileRouter.get("/", getInvoices);
businessProfileRouter.get("/me", getMyBusinessProfile);

businessProfileRouter.post(
  "/",
  upload.fields([
    { name: "logoName", maxCount: 1 },
    { name: "stampName", maxCount: 1 },
    { name: "signatureNameMeta", maxCount: 1 },
  ]),
  createBusinessProfile,
);
businessProfileRouter.put(
  "/:id",
  upload.fields([
    { name: "logoName", maxCount: 1 },
    { name: "stampName", maxCount: 1 },
    { name: "signatureNameMeta", maxCount: 1 },
  ]),
  updateBusinessProfile,
);
businessProfileRouter.delete("/:id", deleteBusinessProfile);

export default businessProfileRouter;
