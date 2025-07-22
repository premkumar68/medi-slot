import React from 'react';

const Footer = () => {
    return (
        <div className='md:mx-10'>
            <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>

                {/* left side */}
                <div>
                    <h1 
                        className="text-3xl font-extrabold text-blue-600 mb-4"
                        style={{ fontFamily: 'Segoe UI, sans-serif' }}
                    >
                        MediSlot
                    </h1>
                    <p className='w-full md:w-2/3 text-gray-600 leading-6'>
                        MediSlot is a trusted platform designed to simplify the way patients book appointments with doctors. We bring together experienced and certified medical professionals to offer quick and reliable healthcare services. Your health, our priority.
                    </p>
                </div>

                {/* center section */}
                <div>
                    <p className='text-xl font-medium mb-5'>COMPANY</p>
                    <ul className='flex flex-col gap-2 text-gray-600'>
                        <li>Home</li>
                        <li>About us</li>
                        <li>Contact us</li>
                        <li>Privacy policy</li>
                    </ul>
                </div>

                {/* right side */}
                <div>
                    <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
                    <ul className='flex flex-col gap-2 text-gray-600'>
                        <li>+91 8220341567</li>
                        <li>medislot@gmail.com</li>
                    </ul>
                </div>
            </div>

            <div>
                <hr />
                <p className='py-5 text-sm text-center'>
                    CopyRights 2025 @MediSlot - ALL RIGHTS RESERVED
                </p>
            </div>
        </div>
    );
};

export default Footer;
