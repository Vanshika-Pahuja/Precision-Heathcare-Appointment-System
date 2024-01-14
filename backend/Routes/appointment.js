// // // In your backend route file (e.g., routes/appointments.js)
// // const express = require('express');
// // const router = express.Router();
// // const Appointment = require('../models/Appointment'); // Import your MongoDB model

// // router.post('http://localhost:5000/api/v1/bookings', async (req, res) => {
// //   try {
// //     const { slot, patientName, otherFormData } = req.body;

// //     // Create a new appointment instance using your MongoDB model
// //     const newAppointment = new Appointment({
// //       slot,
// //       patientName,
// //       otherFormData,
// //     });

// //     // Save the appointment to MongoDB
// //     await newAppointment.save();

// //     res.status(201).json({ message: 'Appointment booked successfully' });
// //   } catch (error) {
// //     console.error(error);
// //     res.status(500).json({ message: 'Internal Server Error' });
// //   }
// // });

// // module.exports = router;

// // appointment.js

// // import express from 'express';
// // import { bookDoctorAppointment } from '../Controllers/appointmentController.js'; // Create this controller function

// // const router = express.Router();

// // router.post('/appointments', authenticate, restrict(['patient']), bookDoctorAppointment);

// // export default router;

// // Routes/appointment.js
// // routes/appointment.js
// import express from 'express';
// import { bookDoctorAppointment } from '../Controllers/bookingController.js';

// const router = express.Router();

// router.post('/appointments', authenticate, restrict(['patient']), bookDoctorAppointment);

// export default router;
import express from "express";
import { saveBooking } from "../Controllers/bookingController.js";
import { authenticate, restrict } from "../auth/verifyToken.js";

const router = express.Router();

// Define the route for saving bookings
router.post("/", authenticate, restrict(["patient"]), saveBooking);

export default router;
