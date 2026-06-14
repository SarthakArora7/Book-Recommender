"use client"

import React from "react";
import axios from "axios";

function Links({ link, title, _id }) {
  const addToHistory = async (id) => {
    const response = await axios.put(
      `api/addToHistory/${id}`,
    );
  };

  return (
    <>
      <a
        href={link}
        target="_self"
        onClick={(e) => addToHistory(_id)}
        rel="noopener noreferrer"
        style={{
          display: "flex",
          alignItems: "center",
          gap: 12,
          padding: "12px 16px",
          border: "2px solid black",
          borderRadius: 10,
          textDecoration: "none",
          color: "black",
          background: "#fff",
          marginBottom: 8,
        }}
      >
        <div style={{ flex: 1 }}>
          <div style={{ fontWeight: "bold", fontSize: 14 }}>{title}</div>
        </div>
      </a>
    </>
  );
}

export default Links;
