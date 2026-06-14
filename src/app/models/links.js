import mongoose, { mongo } from "mongoose"

const linkSchema = mongoose.Schema(
  {
    title: String,
    link: String,
    visited: {
      type: Boolean,
      default: false,
    },
  },
  { timeStamps: true },
);

export const Link = mongoose.models.link || mongoose.model("link", linkSchema)