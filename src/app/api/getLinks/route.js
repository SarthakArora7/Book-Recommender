import { connectDB } from "@/app/lib/mongodb";
import { Link } from "@/app/models/links";
import axios from "axios"
import * as cheerio from "cheerio";

export async function GET() {
  await connectDB()
  try {
    const response = await axios.get(
      "https://www.timesnownews.com/lifestyle/books",
      //   {
      //     headers: { 'User-Agent': 'Mozilla/5.0' }
      //   }
    );
    // console.log(response.data)
    const $ = cheerio.load(response.data);
    const bodyHtml = $("body").html();
    // console.log(bodyHtml)
    // fs.writeFileSync("check.txt", bodyHtml)

    const items = [];
    const regex = /\d+\sBooks/g;

    $(".CategoryListing_CategoryListing__Aq_N3 li").each((index, el) => {
      if (items.length == 10) return false;

      const title = $(el).find("h3").text().trim();

      if (regex.test(title)) {
        const link = $(el).find("a").attr("href");
        // const img = $(el).find('img').attr('src')

        items.push({ title, link });
      }
    });

    // console.log(items)

    const result = await Link.insertMany(items);
    Response.json(result);
  } catch (error) {
    console.log(error);
  }
}
