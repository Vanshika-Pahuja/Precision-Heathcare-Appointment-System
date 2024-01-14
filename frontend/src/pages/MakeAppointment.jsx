import React, { useState } from 'react';
// import AppointmentForm from '../components/AppointmentForm';
import { authToken } from '../config';



// import { Elements } from '@stripe/react-stripe-js';
// import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
// import stripePromise from '../stripe';





const MakeAppointment = () => {
  const [selectedSlot, setSelectedSlot] = useState(null);
  const [patientName, setPatientName] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [description, setDescription] = useState('');




  // const stripe = useStripe();
  // const elements = useElements();



  const [otherFormData, setOtherFormData] = useState(''); // Define otherFormData state

  const handleSlotSelection = (slot) => {
    setSelectedSlot(slot);
  };

  const handlePatientNameChange = (e) => {
    setPatientName(e.target.value);
  };

  const handleContactNumberChange = (e) => {
    setContactNumber(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  // const handleBookAppointment = () => {
  //   // Validation
  //   if (!selectedSlot || !patientName || !contactNumber || !description) {
  //     alert('Please fill in all required fields.');
  //     return;
  //   }

  //   // Replace the alert with your logic to handle the appointment booking
  //   alert(`Appointment booked for ${patientName} on ${selectedSlot}.`);

  //   // Reset form after booking
  //   setSelectedSlot(null);
  //   setPatientName('');
  //   setContactNumber('');
  //   setDescription('');
  // };


 







  const handleBookAppointment = async () => {
    try {
      // Fetch the JWT token from wherever you store it (e.g., localStorage)
      const authToken = localStorage.getItem('token'); // Replace with your actual token key
  
      const response = await fetch('http://localhost:5000/api/v1/bookings', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${authToken}`, // Include the JWT token in the Authorization header
        },
        body: JSON.stringify({
          doctorId: '65a38f1ea16e9d5059098a3a', // Replace with the actual doctorId
          timeSlot: selectedSlot,
          patientName,
          contactDetails: contactNumber, // Use contactNumber for contactDetails
          description,
        }),
      });
  
      if (response.ok) {
        alert('Appointment booked successfully');
      } else {
        alert('Failed to book appointment');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };
  

  const timeSlots = [
    '9:00 AM - 10:00 AM',
    '10:00 AM - 11:00 AM',
    '11:00 AM - 12:00 PM',
    '12:00 PM - 1:00 PM',
    // Add more time slots as needed
  ];









  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-4xl font-bold mb-4">Make an Appointment</h1>
      <p className="text-lg mb-4">Select a time slot:</p>

      {/* Display available time slots */}
      <div className="flex space-x-4 mb-8">
        {timeSlots.map((slot) => (
          <button
            key={slot}
            onClick={() => handleSlotSelection(slot)}
            className={`${
              selectedSlot === slot ? 'bg-green-500' : 'bg-blue-500'
            } text-white py-2 px-4 rounded`}
          >
            {slot}
          </button>
        ))}
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

          {/* Styling for Contact Number input */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Contact Number:</label>
            <input
              type="text"
              value={contactNumber}
              onChange={handleContactNumberChange}
              className="mt-1 p-2 border border-gray-300 rounded w-full"
            />
          </div>

          {/* Styling for Description input */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Description:</label>
            <textarea
              value={description}
              onChange={handleDescriptionChange}
              className="mt-1 p-2 border border-gray-300 rounded w-full"
            />
          </div>

          {/* Styling for Submit button */}
          <button
            onClick={handleBookAppointment}
            className={`${
              selectedSlot && patientName && contactNumber && description
                ? 'bg-green-500 hover:bg-green-600'
                : 'bg-gray-400 cursor-not-allowed'
            } text-white py-2 px-4 rounded`}
            disabled={!selectedSlot || !patientName || !contactNumber || !description}
          >
            Book Appointment
          </button>

          {/* <AppointmentForm selectedSlot={selectedSlot} /> */}
        </div>
      )}
    </div>
  );
};

export default MakeAppointment;

