import React from "react";
import "../App.css";
import { Link } from "react-router-dom";
import bannerImg from "../images/restauranfood.jpg";

export default function Header() {
  return (
    <header className="header">
      <section>
        <div className="banner">
          <h2>Little Lemon</h2>
          <h3>Chicago</h3>
          <p>
            We are a family owned Mediterraneran restauurant focused on
            tradictional recipes served with a modern twist.
          </p>
          <Link to="/booking">
            <button>Reserve Table </button>
          </Link>
        </div>

        <div className="banner-img">
          <img src={bannerImg} alt=""></img>
        </div>
      </section>
    </header>
  );
}
