"use client"

import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import Links from "@/components/Links";

export default function Home() {
  const [items, setItem] = useState([]);

  async function getData() {
    const response = await axios.get("api/links");
    setItem(response.data);
  }

  useEffect(() => {
    getData();
  }, []);

  const callToGetLinks = async () => {
    const response = await axios.get("api/getLinks");
    getData();
  };

  return (
    <>
      <div style={{ maxWidth: 600, margin: "0 auto", padding: 16 }}>
        <p className="text-2xl font-bold text-black text-center mb-3">Le Book</p>
        {items.map((item, i) => (
          <Links key={i} {...item} />
        ))}
        <div className="flex justify-center">
          <button
            onClick={callToGetLinks}
            className="px-4 py-2 rounded-xl text-black font-bold bg-red-500 border-black border-2 hover:cursor-pointer hover:bg-red-700"
          >
            Refresh ↺
          </button>
        </div>
      </div>
    </>
  );
}
