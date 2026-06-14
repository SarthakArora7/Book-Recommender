import { connectDB } from "@/app/lib/mongodb";
import { Link } from "@/app/models/links";

export async function PUT(request, { params }) {
  await connectDB()
  const { id } = await params
  try {
    const data = await Link.findById(id);

    data.visited = true;
    data.save();
    return Response.json({ data });
  } catch (error) {
    return Response.json(error);
  }
}
