import { connectDB } from "@/app/lib/mongodb";
import { Link } from "@/app/models/links";
import axios from "axios"
import * as cheerio from "cheerio";

export async function GET() {
  await connectDB()
  try {
    const response = await axios.get(
      "https://www.timesnownews.com/lifestyle/books",
        {
          headers: { 'User-Agent': 'Mozilla/5.0' }
        }
    );
    // console.log(response.data)
    const $ = cheerio.load(response.data);
    const bodyHtml = $("body").html();
    // console.log(bodyHtml)
    // fs.writeFileSync("check.txt", bodyHtml)

    const items = [];
    const regex = /\d+\sBooks/;

    $("ul li").each((index, el) => {
      if (items.length == 10) return false;

      const title = $(el).find("h3").text().trim();

      if (regex.test(title)) {
        const link = $(el).find("a").attr("href");
        // const img = $(el).find('img').attr('src')

        items.push({ title, link });
      }
    });

    // console.log(items)

    // check which links already exists in the DB
    const links = items.map((item) => item.link)
    const existing = await Link.find({ link: { $in: links } }).select("link").lean()

    const existingLinks = new Set(existing.map((d) => d.link))

    const newItems = items.filter((item) => !existingLinks.has(item.link))

    if (newItems.length > 0){
      const result = await Link.insertMany(newItems)
      return Response.json(result);
    }else{
      return Response.json({fetch: "failed", newItems, existingLinks, existing, items})
    }

  } catch (error) {
    console.log(error);
  }
}
