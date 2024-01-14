// import mongoose from "mongoose";

// const bookingSchema = new mongoose.Schema(
//   {
//     doctor: {
//       type: mongoose.Types.ObjectId,
//       ref: "Doctor",
//       required: true,
//     },
//     user: {
//       type: mongoose.Types.ObjectId,
//       ref: "User",
//       required: true,
//     },
//     ticketPrice: { type: String, required: true },
//     appointmentDate: {
//       type: Date,
//       required: true,
//     },
//     status: {
//       type: String,
//       enum: ["pending", "approved", "cancelled"],
//       default: "pending",
//     },
//     isPaid: {
//       type: Boolean,
//       default: true,
//     },
//   },
//   { timestamps: true }
// );

// export default mongoose.model("Booking", bookingSchema);

import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema(
  {
    doctor: {
      type: mongoose.Types.ObjectId,
      ref: "Doctor",
      required: true,
    },
    user: {
      type: mongoose.Types.ObjectId,
      ref: "User",
      required: false,
    },
    timeSlot: {
      type: String, // Change the type based on your requirement
      required: true,
    },
    patientName: {
      type: String,
      required: true,
    },
    contactDetails: {
      type: String, // Change the type based on your requirement
      required: true,
    },
    description: {
      type: String,
    },
    status: {
      type: String,
      enum: ["pending", "approved", "cancelled"],
      default: "pending",
    },
    isPaid: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Booking", bookingSchema);
