import React from "react";
import Navbar from "react-bootstrap/Navbar";
import "./Navigation.css";
function Navigation() {
  return (
    <Navbar className="navigation">
      <Navbar.Brand href="#" style={{ color: "#ca3e47" }}>
        Stock Tracker
      </Navbar.Brand>
    </Navbar>
  );
}

export default Navigation;
