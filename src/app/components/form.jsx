"use client";

import { useState, useEffect } from "react";
import { bookTicketAPI } from "@/app/API's/api";

function BookingForm({ movieTitle }) {
  const [isOpen, setIsOpen] = useState(false);
  const [successOpen, setSuccessOpen] = useState(false);
  const [location, setLocation] = useState("");
  const [timeSlot, setTimeSlot] = useState("");
  const [ticketPrice, setTicketPrice] = useState(0);

  // Dummy locations & time slots
  const locations = ["Emporium Mall", "Packages Mall", "DHA Phase 2"];
  const timeSlots = [
    { slot: "12:00 PM", price: 500 },
    { slot: "3:00 PM", price: 600 },
    { slot: "6:00 PM", price: 700 },
    { slot: "9:00 PM", price: 800 },
  ];

  // Price update based on slot
  useEffect(() => {
    if (timeSlot) {
      const selected = timeSlots.find((t) => t.slot === timeSlot);
      setTicketPrice(selected.price);
    }
  }, [timeSlot]);

  // Handle confirm booking
  const handleConfirm = async () => {
    const ticketData = { movieTitle, location, timeSlot, ticketPrice };
    const res = await bookTicketAPI(ticketData);
    console.log(res);
    setIsOpen(false);
    if (res) {
      setSuccessOpen(true);
    } else {
      console.log(res.error);
    }
    // Auto close success after 3 sec
    setTimeout(() => {
      setSuccessOpen(false);
      setLocation("");
      setTimeSlot("");
      setTicketPrice(0);
    }, 3000);
  };

  return (
    <div className="flex justify-center mt-6">
      {/* Trigger Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="px-8 py-3 bg-gradient-to-r from-yellow-400 to-yellow-500 text-black font-semibold rounded-xl shadow-md hover:from-yellow-500 hover:to-yellow-600 transition-all duration-300"
      >
        🎟️ Book Ticket
      </button>

      {/* Booking Modal */}
      {isOpen && (
        <form action="" onSubmit={(e) => e.preventDefault()}>
          <div className="fixed inset-0  bg-opacity-50 backdrop-blur-sm  flex items-center justify-center z-50 min-h-screen p-4 transition-opacity duration-300">
            <div className="bg-[#1c2541] text-white p-6 rounded-2xl shadow-lg w-[90%] max-w-md transform scale-95 opacity-0 animate-fadeIn">
              <h2 className="text-2xl font-bold mb-4 text-center">
                {movieTitle}
              </h2>

              {/* Location Select */}
              <label className="block mb-2">Choose Location</label>
              <select
                className="w-full mb-4 p-2 rounded-lg text-black font-semibold"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              >
                <option value="">Select Location</option>
                {locations.map((loc, index) => (
                  <option key={index} value={loc}>
                    {loc}
                  </option>
                ))}
              </select>

              {/* Time Slot Select */}
              <label className="block mb-2">Choose Time Slot</label>
              <select
                className="w-full mb-4 p-2 rounded-lg text-black font-semibold"
                value={timeSlot}
                onChange={(e) => setTimeSlot(e.target.value)}
              >
                <option value="">Select Time</option>
                {timeSlots.map((slot, index) => (
                  <option key={index} value={slot.slot}>
                    {slot.slot}
                  </option>
                ))}
              </select>

              {/* Ticket Price */}
              {ticketPrice > 0 && (
                <p className="text-lg mb-4 text-center">
                  💵 Ticket Price:{" "}
                  <span className="text-yellow-400">{ticketPrice} PKR</span>
                </p>
              )}

              {/* Confirm Button */}
              <div className="flex justify-center gap-4">
                <button
                  onClick={() => setIsOpen(false)}
                  className="px-6 py-2 bg-gray-600 rounded-lg hover:bg-gray-500 transition"
                >
                  Cancel
                </button>
                <button
                  onClick={handleConfirm}
                  disabled={!location || !timeSlot}
                  className="px-6 py-2 bg-gradient-to-r from-yellow-400 to-yellow-500 font-semibold rounded-lg hover:from-yellow-500 hover:to-yellow-600 transition disabled:opacity-50"
                >
                  Confirm
                </button>
              </div>
            </div>
          </div>
        </form>
      )}

      {/* Success Modal */}
      {successOpen && (
        <div className="fixed top-1/3 left-1/2 transform -translate-x-1/2 bg-[#0b132b] text-white px-6 py-4 rounded-lg shadow-lg z-50 animate-slideDown">
          <h3 className="font-bold">Booking Confirmed 🎉</h3>
          <p>{movieTitle}</p>
          <p>{location}</p>
          <p>{timeSlot}</p>
          <p>{ticketPrice} PKR</p>
        </div>
      )}
    </div>
  );
}

export default BookingForm;
