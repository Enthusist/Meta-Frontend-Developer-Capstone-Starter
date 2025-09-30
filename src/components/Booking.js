import React from "react";
import BookingForm from "./BookingForm";

const Booking = ({ availableTimes, dispatch, submitForm }) => {
  return (
    <section>
      <BookingForm
        availableTimes={availableTimes}
        dispatch={dispatch}
        submitForm={submitForm} // ✅ forwards correctly
      />
    </section>
  );
};

export default Booking;
