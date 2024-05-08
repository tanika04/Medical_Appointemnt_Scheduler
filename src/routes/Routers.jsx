import { Routes, Route, Navigate } from 'react-router-dom';
import { useState } from 'react';
import Home from '../pages/Home';
import Services from '../pages/Services';
import Login from '../pages/Login';
import Signup from '../pages/Signup';
import Contact from '../pages/Contact';
import Doctors from '../pages/Doctors/Doctors';
import DoctorDetails from '../pages/Doctors/DoctorDetails';
import Header from '../components/Header/Header';

const Routers = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false); // Example state for user login status
    const [username, setUsername] = useState(''); // Example state for username

    return (
        <>
            <Header isLoggedIn={isLoggedIn} username={username} /> {/* Pass isLoggedIn and username props */}
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route path="/doctors" element={<Doctors />} />
                <Route path="/doctors/:id" element={<DoctorDetails />} />
                <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} setUsername={setUsername} />} /> {/* Pass setIsLoggedIn and setUsername props to Login component */}
                <Route path="/register" element={<Signup setUsername={setUsername} />} /> {/* Pass setUsername prop to Signup component */}
                <Route path="/contact" element={<Contact />} />
                <Route path="/services" element={<Services />} />
                <Route path="*" element={<Navigate to="/" />} /> {/* Fallback route */}
            </Routes>
        </>
    );
};

export default Routers;
