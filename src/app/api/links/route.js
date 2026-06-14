import { connectDB } from "@/app/lib/mongodb";
import { Link } from "@/app/models/links";

export async function GET(){
    await connectDB()
    const links = await Link.find({}).limit(10);
    return Response.json(links);
}