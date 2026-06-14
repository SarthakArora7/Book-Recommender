import { connectDB } from "@/app/lib/mongodb";
import { Link } from "@/app/models/links";

export async function GET() {
  await connectDB()
  const history = await Link.find({ visited: true });
  return Response.json(history);
}