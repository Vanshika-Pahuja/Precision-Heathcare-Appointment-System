

// import Doctor from "../models/DoctorSchema.js";


// //deleteuser 
// export const updateDoctor = async(req , res) => {
//     const id = req.params.id


//     try 
//     {

//         const updatedDoctor = await Doctor.findByIdAndUpdate(id , {$set: req.body} , {new:true})

//         res.status(200).json({success: true , message: "Successfully updated" , data:updatedDoctor})


//     }
//     catch (err) {
//         res.status(500).json({success: false , message: "failed to update" })

//     }
// }

// //deleteUser 
// export const deleteDoctor = async(req , res) => {
//     const id = req.params.id


//     try 
//     {

//        await Doctor.findByIdAndDelete(id , );

//         res
//         .status(200)
//         .json({
//         success: true , 
//         message: "Successfully deleted" , data:null})


//     }
//     catch (err) {
//         res.status(500).json({success: false , message: "failed to delete " })

//     }
// }

// //singleuser 

// export const getSingleDoctor = async(req , res) => {
//     const doctorid = req.params.doctorid


//     try 
//     {

//         const doctor  = await Doctor.findById(doctorid)
//         .populate({
//             path: 'reviews', 
//             model: 'Review',

//         })
           
//         .select("-password");

//         res
//         .status(200)
//         .json({
//         success: true , 
//         message: "doctor  found " , data: doctor })


//     }
//     catch (err) {
//         res.status(404).json({success: false , message: "No user found " })

//     }
// }
// //

// export const getAllDoctor = async(req , res) => {

    
//     try {
//     const {query} = req.query
//     let doctors; 

//     // if(query){
//     //     doctors = await Doctor.find({isApproved: 'approved' , 
//     //     $or:[ 
//     //     { name: {$regex: query ,  $options: "i" } } , 
//     //     { specialization :   {$regex: query ,  $options: "i" }}, 

//     // ],
//     // }).select("-password"); 
//     // } else {
        
//     //     doctors   = await Doctor.find({  isApproved: "approved "} ).select("-password");
//     // }

//     if (query) {
//         doctors = await Doctor.find({
//             isApproved: 'approved',
//             $or: [
//                 { name: { $regex: query, $options: 'i' } },
//                 { specialization: { $regex: query, $options: 'i' } },
//             ],
//         }).select('-password');
//     } else {
//         doctors = await Doctor.find({ isApproved: 'approved' }).select('-password');
//     }

//     // const id = req.params.id


    
    


//         res
//         .status(200)
//         .json({
//         success: true , 
//         message: "doctors  found " , data: doctors  });


//     }
//     catch (err) {
//         console.error(err);
//         res.status(404).json({success: false , message: "Not found " })

//     }
// }

import BookingSchema from "../models/BookingSchema.js";
import Doctor from "../models/DoctorSchema.js";
//import mongoose from 'mongoose';

export const updateDoctor = async (req, res) => {
  const id = req.params.id;

  try {
    const updatedDoctor = await Doctor.findByIdAndUpdate(id, req.body, { new: true });

    res.status(200).json({
      success: true,
      message: "Successfully updated",
      data: updatedDoctor,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Failed to update",
    });
  }
};

export const deleteDoctor = async (req, res) => {
  const id = req.params.id;

  try {
    await Doctor.findByIdAndDelete(id);

    res.status(200).json({
      success: true,
      message: "Successfully deleted",
      data: null,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Failed to delete",
    });
  }
};

export const getSingleDoctor = async (req, res) => {
  const doctorid = req.params.doctorid;

  try {
    const doctor = await Doctor.findById(doctorid)
      .populate({
        path: 'reviews',
        model: 'Review',
      })
      .select('-password');

      console.log(doctor);

    if (!doctor) {
      return res.status(404).json({
        success: false,
        message: 'Doctor not found',
      });
    }

    res.status(200).json({
      success: true,
      message: 'Doctor found',
      data: doctor,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: 'Internal Server Error',
    });
  }
};


// export const getSingleDoctor = async (req, res) => {
//     const doctorid = req.params.id;
  
//     try {
//       const doctor = await Doctor.findById(doctorid)
//         .populate("reviews")
//         .select("-password");


  
//     //   if (!doctor) {
//     //     return res.status(404).json({ success: false, message: 'Doctor not found.' });
//     //   }
  
//       res.status(200).json({
//         success: true,
//         message: 'Doctor found',
//         data: doctor,
//       });
//     } catch (err) {
//       console.error(err);
//       res.status(500).json({ success: false, message: 'Internal Server Error' });
//     }
//   };

// export const getSingleDoctor = async (req, res) => {
//     const doctorId = req.params.doctorId;
  
//     try {
//       console.log('Searching for doctor with ID:', doctorId);
//       const doctor = await Doctor.findById('doctorId').populate("reviews")
//       .select("-password");
//       console.log(doctor.reviews);
//       console.log('Found doctor:', doctor);
//     // const doctor = await Doctor.findById(doctorId).populate({
//     //     path: 'reviews',
//     //     select: '_id reviewText rating createdAt updatedAt', // Include fields you want in the response
//     //     populate: {
//     //         path: 'user', // Optionally populate the user field in each review
//     //         select: 'name photo',
//     //     },
//     // });




//     //   if (!doctor) {
//     //     console.log('Doctor not found.');
//     //     return res.status(404).json({
//     //       success: false,
//     //       message: "Doctor not found.",
//     //     });
//     //   }
  
//       res.status(200).json({
//         success: true,
//         message: "Doctor found",
//         data: doctor,
//       });
//     } catch (err) {
//       console.error(err);
//       res.status(500).json({
//         success: false,
//         message: "Internal Server Error",
//       });
//     }
//   };
// export const getSingleDoctor = async (req, res) => {
//     const doctorId = req.params.doctorid;

//     try {
//         // Convert the string to ObjectId
//         const objectId = mongoose.Types.ObjectId(doctorId);

//         console.log('Searching for doctor with ID:', objectId);

//         const doctor = await Doctor.findById(objectId).populate({
//             path: 'reviews',
//             select: '_id reviewText rating createdAt updatedAt',
//             populate: {
//                 path: 'user',
//                 select: 'name photo',
//             },
//         });

//         console.log('Found doctor:', doctor);

//         if (!doctor) {
//             console.log('Doctor not found.');
//             return res.status(404).json({
//                 success: false,
//                 message: 'Doctor not found.',
//             });
//         }

//         res.status(200).json({
//             success: true,
//             message: 'Doctor found',
//             data: doctor,
//         });
//     } catch (err) {
//         console.error(err);
//         res.status(500).json({
//             success: false,
//             message: 'Internal Server Error',
//         });
//     }
// };


















  

export const getAllDoctor = async (req, res) => {
  try {
    const { query } = req.query;
    let doctors;

    if (query) {
      doctors = await Doctor.find({
        isApproved: 'approved',
        $or: [
          { name: { $regex: query, $options: 'i' } },
          { specialization: { $regex: query, $options: 'i' } },
        ],
      }).select('-password');
    } else {
      doctors = await Doctor.find({ isApproved: 'approved' }).select('-password');
    }

    res.status(200).json({
      success: true,
      message: "Doctors found",
      data: doctors,
    });
  } catch (err) {
    console.error(err);
    res.status(404).json({
      success: false,
      message: "Not found",
    });
  }
};


export const getDoctorProfile = async(req , res) => {
    const doctorId = req.userid
    try {
        const doctor = await Doctor.findById(userId)

        if(!doctor)
        {
            return res.status(404).json({success: false, message: 'doctor not found ' })
        }

        const {password, ... rest} = doctor._doc;
        const appointments = await Booking.find({doctor: doctorId})

        res.status(200).json({success:true , message: 'profile info is getting ' , data: {... rest  , appointments }, 
    }); 

    }catch(err)
    {
        res.status(500).json({success: false , message: "something went wrong  found , cannot got anything  " })
    }
}