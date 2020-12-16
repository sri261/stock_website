import React from "react";
import "./Sidebar.css";
import Ticker from "../Ticker/Ticker";

function Sidebar() {
  return (
    <div
      style={{
        backgroundColor: "#414141",
        padding: "8px",
        borderRadius: "15px",
        height: "86vh",
        overflow: "hidden",
      }}
    >
      <Ticker />
      <Ticker />
      <Ticker />
      <Ticker />
      <Ticker />
      <Ticker />
      <Ticker />
      <Ticker />
    </div>
  );
}

export default Sidebar;
