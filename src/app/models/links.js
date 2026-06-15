import mongoose, { mongo } from "mongoose"
import { unique } from "next/dist/build/utils";

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
  { timeStamps: true },
);

export const Link = mongoose.models.link || mongoose.model("link", linkSchema)