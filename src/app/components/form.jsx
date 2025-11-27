"use client";

import { useState, useEffect } from "react";
import { bookTicketAPI } from "@/app/API's/api";
import { FaTimes, FaMapMarkerAlt, FaClock, FaTicketAlt } from "react-icons/fa";

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
    try {
      await bookTicketAPI(ticketData);
      setIsOpen(false);
      setSuccessOpen(true);
    } catch (error) {
      // Fallback for demo
      setIsOpen(false);
      setSuccessOpen(true);
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
        className="flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-[#00b4d8] to-[#0096c7] text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
      >
        <FaTicketAlt className="text-lg" />
        Book Ticket
      </button>

      {/* Booking Modal */}
      {isOpen && (
        <div className="fixed inset-0 backdrop-blur-md flex items-center justify-center z-50 p-4" style={{backdropFilter: 'blur(10px) brightness(0.3) contrast(1.2)'}}>
          <div className="bg-gradient-to-br from-[#1c2541] to-[#0b132b] text-white p-8 rounded-3xl shadow-2xl w-full max-w-lg transform transition-all duration-300 scale-100">
            {/* Header */}
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-[#00b4d8]">
                Book Ticket
              </h2>
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 hover:bg-gray-700 rounded-full transition-colors"
              >
                <FaTimes className="text-gray-400 hover:text-white" />
              </button>
            </div>

            {/* Movie Title */}
            <div className="mb-6 p-4 bg-[#00b4d8]/10 rounded-xl border border-[#00b4d8]/20">
              <h3 className="text-lg font-semibold text-center text-[#00b4d8]">
                {movieTitle}
              </h3>
            </div>

            {/* Location Select */}
            <div className="mb-6">
              <label className="flex items-center gap-2 mb-3 text-gray-300 font-medium">
                <FaMapMarkerAlt className="text-[#00b4d8]" />
                Choose Location
              </label>
              <select
                className="w-full p-3 rounded-xl bg-[#232A40] border border-gray-600 text-white focus:border-[#00b4d8] focus:outline-none transition-colors"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              >
                <option value="">Select Location</option>
                {locations.map((loc, index) => (
                  <option key={index} value={loc} className="bg-[#232A40]">
                    {loc}
                  </option>
                ))}
              </select>
            </div>

            {/* Time Slot Select */}
            <div className="mb-6">
              <label className="flex items-center gap-2 mb-3 text-gray-300 font-medium">
                <FaClock className="text-[#00b4d8]" />
                Choose Time Slot
              </label>
              <select
                className="w-full p-3 rounded-xl bg-[#232A40] border border-gray-600 text-white focus:border-[#00b4d8] focus:outline-none transition-colors"
                value={timeSlot}
                onChange={(e) => setTimeSlot(e.target.value)}
              >
                <option value="">Select Time</option>
                {timeSlots.map((slot, index) => (
                  <option key={index} value={slot.slot} className="bg-[#232A40]">
                    {slot.slot} - {slot.price} PKR
                  </option>
                ))}
              </select>
            </div>

            {/* Ticket Price */}
            {ticketPrice > 0 && (
              <div className="mb-6 p-4 bg-gradient-to-r from-[#00b4d8]/20 to-[#0096c7]/20 rounded-xl border border-[#00b4d8]/30">
                <p className="text-lg text-center">
                  <span className="text-gray-300">Ticket Price: </span>
                  <span className="text-[#00b4d8] font-bold text-xl">{ticketPrice} PKR</span>
                </p>
              </div>
            )}

            {/* Action Buttons */}
            <div className="flex gap-4">
              <button
                onClick={() => setIsOpen(false)}
                className="flex-1 px-6 py-3 bg-gray-600 hover:bg-gray-500 rounded-xl font-semibold transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={handleConfirm}
                disabled={!location || !timeSlot}
                className="flex-1 px-6 py-3 bg-gradient-to-r from-[#00b4d8] to-[#0096c7] hover:from-[#0096c7] hover:to-[#0077b6] rounded-xl font-semibold transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-105"
              >
                Confirm Booking
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Success Modal */}
      {successOpen && (
        <div className="fixed inset-0 backdrop-blur-md flex items-center justify-center z-50" style={{backdropFilter: 'blur(10px) brightness(0.3) contrast(1.2)'}}>
          <div className="bg-gradient-to-br from-[#1c2541] to-[#0b132b] text-white p-8 rounded-3xl shadow-2xl max-w-md mx-4 transform transition-all duration-300">
            <div className="text-center">
              <div className="mb-4">
                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FaTicketAlt className="text-2xl text-white" />
                </div>
                <h3 className="text-2xl font-bold text-green-400 mb-2">Booking Confirmed!</h3>
              </div>
              
              <div className="space-y-3 text-left bg-[#232A40] p-4 rounded-xl">
                <div className="flex justify-between">
                  <span className="text-gray-400">Movie:</span>
                  <span className="font-semibold">{movieTitle}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Location:</span>
                  <span className="font-semibold">{location}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Time:</span>
                  <span className="font-semibold">{timeSlot}</span>
                </div>
                <div className="flex justify-between border-t border-gray-600 pt-3">
                  <span className="text-gray-400">Total:</span>
                  <span className="font-bold text-[#00b4d8] text-lg">{ticketPrice} PKR</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default BookingForm;
