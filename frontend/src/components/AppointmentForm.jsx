import React, { useState } from 'react';
import AppointmentForm from '../components/AppointmentForm';

const MakeAppointment = () => {
  const [selectedSlot, setSelectedSlot] = useState(null);
  const [patientName, setPatientName] = useState('');

  const handleSlotSelection = (slot) => {
    setSelectedSlot(slot);
  };

  const handlePatientNameChange = (e) => {
    setPatientName(e.target.value);
  };

  const handleBookAppointment = () => {
    // Replace the console log with your logic to handle the appointment booking
    console.log('Booking appointment...', { patientName, selectedSlot });
  };

  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-4xl font-bold mb-4">Make an Appointment</h1>
      <p className="text-lg mb-4">Select a time slot:</p>

      {/* Display available time slots */}
      <div className="flex space-x-4 mb-8">
        <button
          onClick={() => handleSlotSelection('9:00 AM - 10:00 AM')}
          className={`${
            selectedSlot === '9:00 AM - 10:00 AM' ? 'bg-green-500' : 'bg-blue-500'
          } text-white py-2 px-4 rounded`}
        >
          9:00 AM - 10:00 AM
        </button>
        <button
          onClick={() => handleSlotSelection('10:00 AM - 11:00 AM')}
          className={`${
            selectedSlot === '10:00 AM - 11:00 AM' ? 'bg-green-500' : 'bg-blue-500'
          } text-white py-2 px-4 rounded`}
        >
          10:00 AM - 11:00 AM
        </button>
        <button
          onClick={() => handleSlotSelection('11:00 AM - 12:00 PM')}
          className={`${
            selectedSlot === '11:00 AM - 12:00 PM' ? 'bg-green-500' : 'bg-blue-500'
          } text-white py-2 px-4 rounded`}
        >
          11:00 AM - 12:00 PM
        </button>
        <button
          onClick={() => handleSlotSelection('12:00 PM - 1:00 PM')}
          className={`${
            selectedSlot === '12:00 PM - 1:00 PM' ? 'bg-green-500' : 'bg-blue-500'
          } text-white py-2 px-4 rounded`}
        >
          12:00 PM - 1:00 PM
        </button>
        {/* Add more time slots as needed */}
      </div>

      {selectedSlot && (
        <div>
          {/* Styling for Patient Name input */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Patient Name:</label>
            <input
              type="text"
              value={patientName}
              onChange={handlePatientNameChange}
              className="mt-1 p-2 border border-gray-300 rounded w-full"
            />
          </div>

          {/* Styling for Book Appointment button */}
          <button
            onClick={handleBookAppointment}
            className={`${
              selectedSlot && patientName ? 'bg-green-500 hover:bg-green-600' : 'bg-gray-400 cursor-not-allowed'
            } text-white py-2 px-4 rounded`}
            disabled={!selectedSlot || !patientName}
          >
            Book Appointment
          </button>

          <AppointmentForm selectedSlot={selectedSlot} />
        </div>
      )}
    </div>
  );
};

export default MakeAppointment;
