import mongoose from "mongoose";
import Invoice from "../models/invoiceModel.js";
import { getAuth } from "@clerk/express";

const API_BASE = "http://localhost:5000";

// Compute subtotal, tax, total
const computeTotals = (items = [], taxPercent = 0) => {
  const safe = Array.isArray(items) ? items.filter(Boolean) : [];
  const subtotals = safe.reduce(
    (s, it) => s + Number(it.qty || 0) * Number(it.unitPrice || 0),
    0,
  );

  const tax = (subtotals * Number(taxPercent || 0)) / 100;
  const total = subtotals + tax;

  return { subtotals, tax, total };
};

// Parse formdata items
const parseItems = (val) => {
  if (!val) return [];
  if (Array.isArray(val)) return val;

  if (typeof val === "string") {
    try {
      return JSON.parse(val);
    } catch (error) {
      return [];
    }
  }

  return [];
};

// Check if string is Obj ID
const isObjIdString = (val) => {
  return typeof val === "string" && /^[0-9a-fA-F]{24}$/.test(val);
};
