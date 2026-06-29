import mongoose from "mongoose";

const detialSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      requied: true,
    },
    password: {
      type: String,
      required: true,
    },
    isActive: {
      type: Boolean,
      required: true,
      default: false, // Optional: sets default value
    },
  },
  { timestamps: true }, //createdAt, UpdatedAt
);

const Detail = mongoose.model("Detail", detialSchema);

export default Detail;
