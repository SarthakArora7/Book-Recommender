import mongoose from "mongoose"

const linkSchema = mongoose.Schema(
  {
    title: String,
    link: {
      type: String,
      unique: true
    },
    visited: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true },
);

export const Link = mongoose.models.link || mongoose.model("link", linkSchema)