

// import jwt from 'jsonwebtoken';
// import Doctor from '../models/DoctorSchema.js';
// import User from '../models/UserSchema.js';

// export const authenticate = async (req, res, next) => {
//   // Get token from headers
//   const authToken = req.headers.authorization;

//   // Check if token exists and starts with 'Bearer'
//   if (!authToken || !authToken.startsWith('Bearer')) {
//     return res.status(401).json({ success: false, message: 'No token authorization, denied.' });
//   }

//   try {
//     // Extract the token from 'Bearer <token>'
//     const token = authToken.split(" ")[1];

//     // Verify the token
//     const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY); // Replace YOUR_SECRET_KEY with your actual secret key

//     // Attach the decoded payload to the request object for further use in route handlers
//     req.user = decoded.id;
//     req.role = decoded.role

//     // Continue to the next middleware or route handler
//    // console.log(authToken);

   
//     next();
//   } catch (err) {
//     // Handle token verification failure
//     // console.log(authToken);
//     // next();

//     if(err.name === 'TokenExpiredError'){
//         return res.status(401).json( {message: 'Token is expired '})
//     }

//     return res.status(401).json({success: false , message: 'invalid token ' });













//     // return res.status(401).json({ success: false, message: 'Invalid token, authorization denied.' });
//   }
// };


// export const restrict = roles => async(req , res , next ) => {
//     const userId = req.user;

//     let user;

//     const patient = await User.findById(userId)
//     const doctor = await Doctor.findById(userId)

//     if(patient)
//     {
//         user = patient
//     }

//     if(doctor)
//     {
//         user = doctor
//     }

//     if(!roles.includes(user.role))
//     {
//         return res.status(401).json( {success: false , message: "you are not authorised "})

//     }

//     next();

// };


import jwt from 'jsonwebtoken';
import Doctor from '../models/DoctorSchema.js';
import User from '../models/UserSchema.js';

export const authenticate = async (req, res, next) => {
  const authToken = req.headers.authorization;

  if (!authToken || !authToken.startsWith('Bearer')) {
    return res.status(401).json({ success: false, message: 'No token authorization, denied.' });
  }

  try {
    const token = authToken.split(" ")[1];
    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
    
    console.log('Decoded Token:', decoded);

    // Ensure the following lines are properly applied
    req.user = decoded.id;
    req.role = decoded.role;

    console.log('UserID:', req.user);

    next();
  } catch (err) {
    // Handle token verification failure
    console.error('Token Verification Error:', err);

    if (err.name === 'TokenExpiredError') {
      return res.status(401).json({ message: 'Token is expired' });
    }

    return res.status(401).json({ success: false, message: 'Invalid token' });
  }
};

export const restrict = roles => async (req, res, next) => {
  const userId = req.user;
  let user;

  const patient = await User.findById(userId);
  const doctor = await Doctor.findById(userId);

  if (patient) {
    user = patient;
  }

  if (doctor) {
    user = doctor;
  }

  if (!roles.includes(user.role)) {
    return res.status(401).json({ success: false, message: "You are not authorized" });
  }

  next();
};
