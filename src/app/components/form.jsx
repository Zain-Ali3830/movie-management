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
        <div className="fixed inset-0 bg-black/70 backdrop-blur-md flex items-center justify-center z-50 p-4 animate-fadeIn">
          <div className="bg-[#0b132b] rounded-2xl shadow-2xl w-full max-w-lg transform animate-fadeIn border border-gray-600">
            {/* Header */}
            <div className="relative px-8 py-6 border-b border-gray-600">
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-4 right-4 p-2 hover:bg-gray-700 rounded-full transition-colors duration-200"
              >
                <svg className="w-5 h-5 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              <div className="text-center">
                <h2 className="text-2xl font-bold text-white mb-2">
                  Book Your Ticket
                </h2>
                <p className="text-gray-300 text-sm">{movieTitle}</p>
              </div>
            </div>

            {/* Form Content */}
            <form onSubmit={(e) => e.preventDefault()} className="px-8 py-6 space-y-6">
              {/* Location Select */}
              <div className="space-y-2">
                <label className="block text-sm font-semibold text-gray-300">
                  Choose Location
                </label>
                <select
                  className="w-full p-4 bg-gray-800 border-2 border-gray-600 rounded-xl text-white focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 transition-all duration-200 appearance-none cursor-pointer hover:border-gray-500"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                >
                  <option value="" className="bg-gray-800">Select Location</option>
                  {locations.map((loc, index) => (
                    <option key={index} value={loc} className="bg-gray-800">
                      {loc}
                    </option>
                  ))}
                </select>
              </div>

              {/* Time Slot Select */}
              <div className="space-y-2">
                <label className="block text-sm font-semibold text-gray-300">
                  Choose Time Slot
                </label>
                <select
                  className="w-full p-4 bg-gray-800 border-2 border-gray-600 rounded-xl text-white focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 transition-all duration-200 appearance-none cursor-pointer hover:border-gray-500"
                  value={timeSlot}
                  onChange={(e) => setTimeSlot(e.target.value)}
                >
                  <option value="" className="bg-gray-800">Select Time</option>
                  {timeSlots.map((slot, index) => (
                    <option key={index} value={slot.slot} className="bg-gray-800">
                      {slot.slot}
                    </option>
                  ))}
                </select>
              </div>

              {/* Ticket Price Display */}
              {ticketPrice > 0 && (
                <div className="bg-gradient-to-r from-gray-800/50 to-gray-700/50 border-2 border-gray-600 rounded-xl p-4">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-300 font-semibold">Total Price:</span>
                    <span className="text-2xl font-bold text-yellow-400">
                      ₨{ticketPrice}
                    </span>
                  </div>
                </div>
              )}

              {/* Action Buttons */}
              <div className="flex gap-4 pt-4">
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="flex-1 px-6 py-3 bg-gray-700 hover:bg-gray-600 text-gray-300 font-semibold rounded-xl transition-all duration-200 border border-gray-600"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  onClick={handleConfirm}
                  disabled={!location || !timeSlot}
                  className="flex-1 px-6 py-3 bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 disabled:from-gray-600 disabled:to-gray-600 disabled:cursor-not-allowed text-black font-semibold rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl disabled:shadow-none"
                >
                  Confirm Booking
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Success Modal */}
      {successOpen && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-md flex items-center justify-center z-50 p-4 animate-fadeIn">
          <div className="bg-[#0b132b] rounded-2xl shadow-2xl w-full max-w-md transform animate-fadeIn border border-gray-600">
            <div className="p-8 text-center">
              {/* Success Icon */}
              <div className="mb-6">
                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-2 text-green-400">Booking Confirmed!</h3>
                <p className="text-gray-300">Your ticket has been successfully booked</p>
              </div>
              
              {/* Booking Details */}
              <div className="bg-gradient-to-r from-gray-800/50 to-gray-700/50 border-2 border-gray-600 rounded-xl p-4 space-y-3 text-left">
                <div className="flex justify-between">
                  <span className="text-gray-300">Movie:</span>
                  <span className="text-white font-semibold">{movieTitle}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">Location:</span>
                  <span className="text-white font-semibold">{location}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">Time:</span>
                  <span className="text-white font-semibold">{timeSlot}</span>
                </div>
                <div className="flex justify-between border-t border-gray-600 pt-3 mt-3">
                  <span className="text-gray-300 font-semibold">Total:</span>
                  <span className="text-yellow-400 font-bold text-lg">₨{ticketPrice}</span>
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
