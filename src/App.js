import React from "react";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Main from "./components/Main";
import Footer from "./components/Footer";
import "./App.css";
import BookingForm from "./components/BookingForm";
import Menu from "./components/Menu";

function App() {
  return (
    <>
      <Nav />
      <Main />
      <Menu />
      <Footer />
    </>
  );
}

export default App;
