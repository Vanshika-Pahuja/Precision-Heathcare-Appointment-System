

// import express from 'express';
// import { updateDoctor, deleteDoctor, getAllDoctor, getSingleDoctor, getDoctorProfile } from '../Controllers/doctorController.js';
// import { authenticate, restrict } from '../auth/verifyToken.js';
// import reviewRouter from './review.js';

// const router = express.Router();

// router.use('/:doctorid/reviews', reviewRouter);

// router.get('/', getAllDoctor);
// router.get('/:doctorid', authenticate, getSingleDoctor);
// router.put('/:id', authenticate, restrict(["doctor"]), updateDoctor);
// router.delete('/:id', authenticate, restrict(["doctor"]), deleteDoctor);


// router.get('/profile/me' , authenticate, restrict(['doctor']) , getDoctorProfile)

// export default router;


// doctor.js

import express from 'express';
import { updateDoctor, deleteDoctor, getAllDoctor, getSingleDoctor, getDoctorProfile } from '../Controllers/doctorController.js';
import { authenticate, restrict } from '../auth/verifyToken.js';
import reviewRouter from './review.js';
// import appointmentRouter from './appointment.js'; // Import the new route

const router = express.Router();

router.use('/:doctorid/reviews', reviewRouter);
// router.use('/appointments', appointmentRouter); // Use the new route

router.get('/', getAllDoctor);
router.get('/:doctorid', authenticate, getSingleDoctor);
router.put('/:id', authenticate, restrict(["doctor"]), updateDoctor);
router.delete('/:id', authenticate, restrict(["doctor"]), deleteDoctor);

router.get('/profile/me' , authenticate, restrict(['doctor']) , getDoctorProfile);

export default router;
