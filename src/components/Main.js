import React, { useReducer } from "react";
import "../App.css";
import { Route, Routes, useNavigate } from "react-router-dom";
import Header from "./Header";
import Booking from "./Booking";
import ConfirmedBooking from "./ConfirmedBooking";

export default function Main() {
  const seeRandom = function (seed) {
    var m = 2 ** 35 - 31;
    var a = 185852;
    var s = seed % m;
    return function () {
      return (s = (s * a) % m) / m;
    };
  };

  const fetchAPI = function (date) {
    let result = [];
    let random = seeRandom(date.getDate());
    for (let i = 17; i <= 23; i++) {
      if (random() < 0.5) {
        result.push(i + ":00");
      }
      if (random() > 0.5) {
        result.push(i + ":30");
      }
    }
    return result;
  };

  function updateTimes(state, action) {
    return { availableTimes: fetchAPI(new Date(action.date)) };
  }

  const initialState = { availableTimes: fetchAPI(new Date()) };
  const [state, dispatch] = useReducer(updateTimes, initialState);

  function submitAPI(formData) {
    console.log("Submitting form:", formData);
    return true; // pretend API always succeeds
  }

  const navigate = useNavigate();

  function submitForm(formData) {
    console.log("button whas clicked");
    if (submitAPI(formData)) {
      navigate("/confirmed"); // ✅ will take you to ConfirmedBooking
    }
  }

  return (
    <main>
      <Routes>
        <Route path="/" element={<Header />} />
        <Route
          path="/booking"
          element={
            <Booking
              availableTimes={state.availableTimes}
              dispatch={dispatch}
              submitForm={submitForm}
            />
          }
        />
        <Route path="/confirmed" element={<ConfirmedBooking />} />
      </Routes>
    </main>
  );
}
