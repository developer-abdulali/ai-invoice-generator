import mongoose from "mongoose";

const businessProfileSchema = new mongoose.Schema(
  {
    owner: { type: String, required: true, index: true },

    bussinessName: { type: String, required: true },
    email: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
      default: "",
    },
    address: { type: String, default: "" },
    phone: { type: String, default: "" },
    gst: { type: String, default: "" },

    // for images
    logoUrl: { type: String, default: null },
    stampUrl: { type: String, default: null },
    signatureUrl: { type: String, default: null },
    signatureOwnerName: { type: String, default: null },
    signatureOwnerTitle: { type: String, default: null },

    defaultTaxPercentage: { type: Number, default: 18 },
  },
  { timestamps: true },
);

const BusinessProfile =
  mongoose.models.BusinessProfile ||
  mongoose.model("BusinessProfile", businessProfileSchema);

export default BusinessProfile;
