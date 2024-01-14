

import UserSchema from "../models/UserSchema.js";
import BookingSchema from '../models/BookingSchema.js'; 
import DoctorSchema from "../models/DoctorSchema.js";

//deleteuser 
export const updateUser = async(req , res) => {
    const id = req.params.id


    try 
    {

        const updatedUser = await UserSchema.findByIdAndUpdate(id , {$set: req.body} , {new:true})

        res.status(200).json({success: true , message: "Successfully updated" , data:updatedUser})


    }
    catch (err) {
        res.status(500).json({success: false , message: "failed to update" })

    }
}

//deleteUser 
export const deleteUser = async(req , res) => {
    const id = req.params.id


    try 
    {

       await UserSchema.findByIdAndDelete(id , );

        res
        .status(200)
        .json({
        success: true , 
        message: "Successfully deleted" , data:null})


    }
    catch (err) {
        res.status(500).json({success: false , message: "failed to delete " })

    }
}

//singleuser 

export const getSingleUser = async(req , res) => {
    const id = req.params.id


    try 
    {

        const user  = await UserSchema.findById(id).select("-password");

        res
        .status(200)
        .json({
        success: true , 
        message: "User found " , data: user })


    }
    catch (err) {
        res.status(404).json({success: false , message: "No user found " })

    }
}
//

export const getAllUser = async(req , res) => {
    // const id = req.params.id


    try 
    {

        const users  = await UserSchema.find({} ).select("-password");

        res
        .status(200)
        .json({
        success: true , 
        message: "Users found " , data: users })


    }
    catch (err) {
        res.status(404).json({success: false , message: "Not found " })

    }
}

export const getUserProfile = async(req , res) => {
    const userId = req.userId
    console.log('UserID:', userId); // Add this log

    try {
        const user = await UserSchema.findById(userId)
        console.log('User:', user);

        if(!user)
        {
            return res.status(404).json({success: false, message: 'user not found ' })
        }

        const {password, ... rest} = user._doc

        res.status(200).json({success:true , message: 'profile info is getting ' , data: {... rest}})

    }catch(err)
    {
        console.error(err);
        res.status(500).json({success: false , message: "something went wrong  found , cannot got anything  " })
    }
};


export const getMyAppointments = async(req , res) => {
    try {
        // step1 =  retreive appointments from booking 
        const bookings = await Booking.find({user: req.userId})






        // step2 extract doctor ids from appointments 

        const doctorIds = bookings.map(el => el.doctor.id)




        // step3 retreive doctor using doctor id

        const doctors = await Doctor.find({ _id: {$in: doctorIds}}).select('-password')

        res.status(200).json({success:true , message: 'appointment are getting ' , data:doctors})





    }catch(err)
    {
        res.status(500).json({success: false , message: "Not found" })

    }
}