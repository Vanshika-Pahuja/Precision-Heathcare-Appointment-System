import express from "express";
import cookieParser from "cookie-parser";
import cors from 'cors';
import mongoose from "mongoose";
import dotenv from "dotenv";

import authRoute from "./Routes/auth.js";

import userRoute from "./Routes/user.js";

import doctorRoute from "./Routes/doctor.js";

import reviewRoute from "./Routes/review.js";

import bookingRoute from "./Routes/appointment.js";
// import bookingRoute from './Routes/appointment.js';


dotenv.config()

const app = express()
const port = process.env.PORT || 8000 

const corsOptions = {
    origin: true
}

app.get('/', (req, res) => {
    res.send('api is working ')
})

// database connection 
mongoose.set('strictQuery', false)
const connectDB = async() => {
    try {
        await mongoose.connect(process.env.MONGO_URL, {
            useNewUrlParser: true,
            useUnifiedTopology:true, 
        })

        console.log('MongoDB database is connected ')


    } catch(err) {
        console.log('MongoDB database connection failed ')

    }
}

//middlewares 
app.use(cors(corsOptions));
app.use(express.json());
app.use(cookieParser());
//app.use(cors(corsOptions));
app.use('/api/v1/auth', authRoute)
app.use('/api/v1/users', userRoute)
app.use('/api/v1/doctors', doctorRoute)
app.use('/api/v1/reviews', reviewRoute)
// app.use("/api/v1/bookings", bookingRoute);
// app.use('/api/v1/bookings', bookingRoute);

// app.post('/api/v1/bookings', (req, res) => {
//     // Handle appointment booking logic here
//     res.json({ success: true, message: 'Appointment booked successfully' });
//   });
app.use("/api/v1/bookings", bookingRoute);

// Add the following middleware to log incoming requests
app.use((req, res, next) => {
  console.log(`Incoming request: ${req.method} ${req.url}`);
  next();
});


app.listen(port , ()=> {
    connectDB();
    console.log('server is running on port ' + port )
})



