"use client";

import React, { useEffect, useState } from "react";
import Links from "@/components/Links";
import axios from "axios";

function History() {
  const [history, setHistory] = useState([]);

  async function getHistoryData() {
    const response = await axios.get("api/history");
    setHistory(response.data);
  }

  useEffect(() => {
    getHistoryData();
  }, []);

  console.log(history);

  return (
    <div style={{ maxWidth: 600, margin: "0 auto", padding: 16 }}>
      <p className="text-2xl font-bold text-black text-center mb-3">Le History</p>
      {history.map((item, i) => (
        <Links key={i} {...item} />
      ))}
    </div>
  );
}

export default History;
