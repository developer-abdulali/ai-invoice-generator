import express from "express";
import { clerkMiddleware } from "@clerk/express";


const invoiceRouter = express.Router();

invoiceRouter.use(clerkMiddleware()); // Apply clerkMiddleware to all routes in this router

// invoiceRouter.get("/", getInvoices);
// invoiceRouter.get("/:id", getInvoice);

// invoiceRouter.post("/", createInvoice);
// invoiceRouter.put("/:id", updateInvoice);
// invoiceRouter.delete("/:id", deleteInvoice);

export default invoiceRouter;
J