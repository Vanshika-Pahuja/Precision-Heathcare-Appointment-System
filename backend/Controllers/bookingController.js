// // // // Controllers/bookingController.js
// // // import Booking from '../models/BookingSchema.js';
// // // import User from '../models/UserSchema.js';

// // // // Book an appointment
// // // export const bookAppointment = async (req, res) => {
// // //   try {
// // //     const { doctorId, ticketPrice, appointmentDate } = req.body;
// // //     const { userId } = req.user;

// // //     const newBooking = new Booking({
// // //       doctor: doctorId,
// // //       user: userId,
// // //       ticketPrice,
// // //       appointmentDate,
// // //     });

// // //     await newBooking.save();

// // //     // Update the user with the new booking
// // //     await User.findByIdAndUpdate(userId, { $push: { bookings: newBooking._id } });

// // //     res.status(201).json({ success: true, booking: newBooking });
// // //   } catch (error) {
// // //     console.error(error);
// // //     res.status(500).json({ success: false, error: 'Internal Server Error' });
// // //   }
// // // };

// // // // Get user's bookings
// // // export const getMyBookings = async (req, res) => {
// // //   try {
// // //     const { userId } = req.user;
// // //     const bookings = await Booking.find({ user: userId }).populate('doctor');

// // //     res.json({ success: true, bookings });
// // //   } catch (error) {
// // //     console.error(error);
// // //     res.status(500).json({ success: false, error: 'Internal Server Error' });
// // //   }
// // // };

// // // // Export functions individually
// // // const bookingController = {
// // //     bookAppointment,
// // //     getMyBookings,
// // //   };

// // // export default bookingController;

// // // backend/Controllers/bookingController.js
// // import Booking from '../models/BookingSchema.js';
// // import User from '../models/UserSchema.js';

// // // Book an appointment
// // export const bookAppointment = async (req, res) => {
// //   try {
// //     const { doctorId, ticketPrice, appointmentDate } = req.body;
// //     const { userId } = req.user;

// //     const newBooking = new Booking({
// //       doctor: doctorId,
// //       user: userId,
// //       ticketPrice,
// //       appointmentDate,
// //     });

// //     await newBooking.save();

// //     // Update the user with the new booking
// //     await User.findByIdAndUpdate(userId, { $push: { bookings: newBooking._id } });

// //     res.status(201).json({ success: true, booking: newBooking });
// //   } catch (error) {
// //     console.error(error);
// //     res.status(500).json({ success: false, error: 'Internal Server Error' });
// //   }
// // };

// // // Get user's bookings
// // export const getMyBookings = async (req, res) => {
// //   try {
// //     const { userId } = req.user;
// //     const bookings = await Booking.find({ user: userId }).populate('doctor');

// //     res.json({ success: true, bookings });
// //   } catch (error) {
// //     console.error(error);
// //     res.status(500).json({ success: false, error: 'Internal Server Error' });
// //   }
// // };

// // export default bookingController;

// // Controllers/bookingController.js
// import Booking from '../models/Booking.js';
// import User from '../models/UserSchema.js';

// export const bookDoctorAppointment = async (req, res) => {
//   try {
//     const { doctorId, ticketPrice, appointmentDate } = req.body;
//     const { userId } = req.user;

//     const newBooking = new Booking({
//       doctor: doctorId,
//       user: userId,
//       ticketPrice,
//       appointmentDate,
//       // Add other fields like slot, patientName, otherFormData, etc.
//     });

//     await newBooking.save();

//     // Update the user with the new booking
//     await User.findByIdAndUpdate(userId, { $push: { bookings: newBooking._id } });

//     res.status(201).json({ success: true, booking: newBooking });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ success: false, error: 'Internal Server Error' });
//   }
// };
import BookingSchema from "../models/BookingSchema.js";
import Doctor from "../models/DoctorSchema.js";

export const saveBooking = async (req, res) => {
  const { doctorId, timeSlot, patientName, contactDetails, description } = req.body;
//   const userId = req.userId; // Assuming you have a logged-in user

  console.log('Received Doctor ID:', doctorId); 

  try {
    // Check if the doctor exists
    const doctor = await Doctor.findById(doctorId);
    if (!doctor) {
      return res.status(404).json({ success: false, message: "Doctor not found" });
    }

    // Create a new booking
    const newBooking = new BookingSchema({
      doctor: doctorId,
      //user: userId,
      timeSlot,
      patientName,
      contactDetails,
      description,
    });

    // Save the booking
    await newBooking.save();

    // Optionally, you might want to update other things like doctor's appointments

    res.status(201).json({ success: true, message: "Booking saved successfully", data: newBooking });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: "Internal server error", error: err.message });
  }
};
