import { connectDB } from "@/app/lib/mongodb";
import { Link } from "@/app/models/links";

export async function GET(){
    await connectDB()
    const links = await Link.find({}).sort({ createdAt: -1 }).limit(10);
    return Response.json(links);
}