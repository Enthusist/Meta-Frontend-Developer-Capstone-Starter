import React from "react";
import "../App.css";
import logo from "../images/Logo .svg";
export default function Footer() {
  return (
    <footer>
      <section>
        <div className="company-info">
          <img src={logo} alt="" />
          <p>
            We are a family owned restaurant, focuse on traditional recipes
            served with a modern twist.
          </p>
        </div>
        <h3>Important Links</h3>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/">About</a>
          </li>
          <li>
            <a href="/">Menu</a>
          </li>
          <li>
            <a href="/">reservations</a>
          </li>
          <li>
            <a href="/">Order Online</a>
          </li>
          <li>
            <a href="/">Login</a>
          </li>
        </ul>
        <h3>Contact</h3>
        <ul>
          <li>
            <a href="/">adress: .....................</a>
          </li>
          <li>
            <a href="/">phone: °°°°°°°°°°°°°°°°°°°°°°</a>
          </li>
          <li>
            <a href="/">email: ----------------------</a>
          </li>
        </ul>
      </section>
    </footer>
  );
}
