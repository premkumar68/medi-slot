import React, { useEffect, useState } from 'react';
import { assets } from '../assets/assets (2)';
import { NavLink, useNavigate } from 'react-router-dom';

const Navbar = () => {
    const navigate = useNavigate();
    const [token, setToken] = useState(null); // Start as null to indicate "checking..."

    useEffect(() => {
        const storedToken = localStorage.getItem('token');
        setToken(storedToken === 'true');
    }, []);

    return (
        <div className="flex items-center justify-between text-sm py-4 mb-5 border-b border-b-gray-400 px-4">
            <h1
                onClick={() => navigate('/')}
                className="text-3xl font-extrabold text-blue-600 cursor-pointer tracking-wide"
                style={{ fontFamily: 'Segoe UI, sans-serif' }}
            >
                MediSlot
            </h1>

            <ul className="hidden md:flex items-start gap-5 font-medium">
                {['/', '/doctors', '/about', '/contact'].map((path, index) => {
                    const labels = ['HOME', 'ALL DOCTORS', 'ABOUT', 'CONTACT'];
                    return (
                        <li key={index}>
                            <NavLink
                                to={path}
                                className={({ isActive }) =>
                                    `flex flex-col items-center group ${isActive ? 'text-blue-600' : ''}`
                                }
                            >
                                <span className="py-1">{labels[index]}</span>
                                <hr
                                    className={`h-0.5 bg-blue-600 w-3/5 mx-auto transition-all duration-300 ${window.location.pathname === path
                                        ? 'opacity-100'
                                        : 'opacity-0'} group-hover:opacity-100`}
                                />
                            </NavLink>
                        </li>
                    );
                })}
            </ul>

            <div className="flex items-center gap-4">
                {token === null ? null : token ? (
                    <div className="flex items-center gap-2 cursor-pointer group relative">
                        <img className="w-8 rounded-full" src={assets.profile_pic} alt="profile" />
                        <img className="w-2.5" src={assets.dropdown_icon} alt="dropdown" />
                        <div className="absolute top-0 right-0 pt-14 text-base font-medium text-gray-600 z-20 hidden group-hover:block">
                            <div className="min-w-48 bg-stone-100 rounded flex flex-col gap-4 p-4">
                                <p onClick={() => navigate('/myprofile')} className="hover:text-black cursor-pointer">Profile</p>
                                <p onClick={() => navigate('/myappointment')} className="hover:text-black cursor-pointer">Appointment</p>
                                <p
                                    onClick={() => {
                                        localStorage.removeItem('token');
                                        setToken(false);
                                        navigate('/');
                                    }}
                                    className="hover:text-black cursor-pointer"
                                >
                                    LogOut
                                </p>
                            </div>
                        </div>
                    </div>
                ) : (
                    <button
                        onClick={() => navigate('/login')}
                        className="bg-blue-500 text-white px-4 py-2 rounded-md"
                    >
                        Create Account
                    </button>
                )}
            </div>
        </div>
    );
};

export default Navbar;
