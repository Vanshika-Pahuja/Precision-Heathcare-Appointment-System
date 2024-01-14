// import Review from '../models/ReviewSchema.js'

// import Doctor from '../models/DoctorSchema.js'

// // get all reviews 
// export const getAllReviews = async(req, res) => {
     

//     try {
//         const reviews = await Review.find({})

//         res.status(200).json({success: true , message: 'successfull ' , data: reviews});

//     }
//     catch(err)
//     {
//         res.status(404).json({success: false, message: 'not found  '});

//     }
// };


// // craete review 
// export const createReview = async(req , res) => {
//     if(!req.body.doctor) req.body.doctor = req.params.doctorId
   
//     if(!req.body.user) req.body.user = req.params.userId


//     const savedReview = new Review(req.body);

//     try {

//         await savedReview.save();

//         await Doctor.findByIdAndUpdate(req.body.doctor , {
//            $push:{reviews: savedReview._id}
            
//     })

//     res.status(200).json({success: true , message: 'review submitted ' , data:savedReview});

//     }
//     catch(err)
//     {
//         res.status(500).json({success: false , message: err.message });
//     }

// }

import Review from '../models/ReviewSchema.js';
import Doctor from '../models/DoctorSchema.js';

export const getAllReviews = async (req, res) => {
  try {
    const reviews = await Review.find({});

    res.status(200).json({
      success: true,
      message: 'Successfully fetched reviews',
      data: reviews,
    });
  } catch (err) {
    res.status(404).json({
      success: false,
      message: 'Not found',
    });
  }
};

// export const createReview = async (req, res) => {
//   const doctorid = req.params.doctorid;
//   const userid = req.params.userId;

//   //const savedReview = new Review(req.body);

//   try {
//     await savedReview.save();

//     await Doctor.findByIdAndUpdate(doctorid, {
//       $push: { reviews: savedReview._id },
//     });

//     res.status(200).json({
//       success: true,
//       message: 'Review submitted',
//       data: savedReview,
//     });
//   } catch (err) {
//     res.status(500).json({
//       success: false,
//       message: err.message,
//     });
//   }
// };


// export const createReview = async (req, res) => {
//   const doctorid = req.params.doctorid;
//   const userid = req.params.userId;

//   // Set the doctor and user fields based on the parameters
//   const reviewData = {
//     doctor: doctorid,
//     user: userid,
//     reviewText: req.body.reviewText,
//     rating: req.body.rating,
//   };

//   const savedReview = new Review(reviewData);

//   try {
//     await savedReview.save();

//     const populatedReview = await Review.findById(savedReview._id).populate('user');

//     // Update the doctor document to include the new review
//     await Doctor.findByIdAndUpdate(doctorid, {
//       $push: { reviews: savedReview._id },
//     });

//     res.status(200).json({
//       success: true,
//       message: 'Review submitted',
//       data: populatedReview,
//     });
//   } catch (err) {
//     res.status(500).json({
//       success: false,
//       message: err.message,
//     });
//   }
// };



export const createReview = async (req, res) => {
  const doctorId = req.params.doctorid;
  const userId = req.params.userId;

  // Set the doctor and user fields based on the parameters
  const reviewData = {
    doctor: doctorId,
    user: userId,
    reviewText: req.body.reviewText,
    rating: req.body.rating,
  };

  const savedReview = new Review(reviewData);

  try {
    await savedReview.save();

    // Populate the user field when fetching the review
    const populatedReview = await Review.findById(savedReview._id).populate('user');

    // Update the doctor document to include the new review
    await Doctor.findByIdAndUpdate(doctorId, {
      $push: { reviews: savedReview._id },
    });

    res.status(200).json({
      success: true,
      message: 'Review submitted',
      data: populatedReview,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};
