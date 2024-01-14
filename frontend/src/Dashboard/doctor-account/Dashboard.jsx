// import React from 'react';

// const Dashboard = () => {
//     return (
//         <div> Dashbaord </div>
//     )
// }

// export default Dashboard;

import React, { useState, useEffect } from 'react';
// import PatientList from './PatientList'; // Import your PatientList component
// import Appointments from './Appointments'; // Import your Appointments component

const DoctorDashboard = () => {
    const [patients, setPatients] = useState([]);
    const [appointments, setAppointments] = useState([]);

    useEffect(() => {
        // Fetch patient data from an API or other data source
        // Update the state using setPatients
        // Example:
        // fetchPatients().then(data => setPatients(data));

        // Fetch appointments data from an API or other data source
        // Update the state using setAppointments
        // Example:
        // fetchAppointments().then(data => setAppointments(data));
    }, []);

    return (
        <div>
            <h1>Doctor Dashboard</h1>

            <div>
                <h2>Patient List</h2>
                <PatientList patients={patients} />
                {/* Pass the patients data to the PatientList component */}
            </div>

            <div>
                <h2>Appointments</h2>
                <Appointments appointments={appointments} />
                {/* Pass the appointments data to the Appointments component */}
            </div>

            {/* Add more sections and components as needed */}
        </div>
    );
}

export default DoctorDashboard;
