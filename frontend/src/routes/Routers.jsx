
import Home from '../pages/Home';
import Services from '../pages/Services';
import Login from '../pages/Login';
import Signup from '../pages/Signup';
import Contact  from '../pages/Contact';
import Doctors from '../pages/Doctors/Doctors';
import DoctorDetails from '../pages/Doctors/DoctorDetails';

import MyAccount from '../Dashboard/user-account/MyAccount';

import Dashboard from '../Dashboard/doctor-account/Dashboard';

import { Routes, Route } from 'react-router-dom';import ProtectedRoute from './ProtectedRoute';
import MakeAppointment from '../pages/MakeAppointment';
const Routers = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/doctors" element={<Doctors />} />
            <Route path="/doctors/:id" element={<DoctorDetails />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Signup />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/services" element={<Services />} />


            <Route path="/users/profile/me" element={<ProtectedRoute allowedRoles={[ "patient"]}> <MyAccount/></ProtectedRoute>} />

            <Route path = "/doctors/profile/me" element = {<ProtectedRoute allowedRoles={["doctor"]} >  <Dashboard/></ProtectedRoute>} />

            <Route path="/make-appointment" element={<MakeAppointment />} />

            {/* Use the ProtectedRoute directly without nesting it inside Route */}
            
            {/* <ProtectedRoute path="/users/profile/me" element={<MyAccount />} allowedRoles={["patient"]} />
            <ProtectedRoute path="/doctors/profile/me" element={<Dashboard />} allowedRoles={["doctor"]} /> */}

{/* <Route path="/doctors" exact component={Doctors} />
      <Route path="/doctors/:doctorId/make-appointment" component={MakeAppointment} /> */}

            
            



          


            

        </Routes>
    );
};

export default Routers;
 

