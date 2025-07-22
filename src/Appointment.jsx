import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { AppContext } from './Context/AppContext';

const Appointment = () => {
  const { docId } = useParams();
  const { doctors } = useContext(AppContext);
  const [docInfo, setDocInfo] = useState(null);

  useEffect(() => {
    const found = doctors.find((doc) => doc._id === docId);
    setDocInfo(found);
  }, [docId, doctors]);

  const handleBooking = () => {
    alert(`Your appointment with ${docInfo.name} is scheduled.`);
  };

  if (!docInfo) return <div className='p-6'>Doctor not found.</div>;

  return (
    <div className="p-6 flex flex-col gap-4">
      <img src={docInfo.image} alt={docInfo.name} className="w-60 h-60 object-cover rounded" />
      <h2 className="text-2xl font-bold text-gray-800">{docInfo.name}</h2>
      <p className="text-gray-600 text-lg">Speciality: {docInfo.speciality}</p>
      <p className="text-gray-500">Experience: {docInfo.experience} </p>
      <p className="text-gray-500">fees: {docInfo.fees}</p>
      {/* <p className="text-gray-500">Available Days: {docInfo.availableDays}</p> */}
      <p className="text-gray-500">degree: {docInfo.degree}</p>

      <button
        onClick={handleBooking}
        className='mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 w-fit'
      >
        Book Appointment
      </button>
    </div>
  );
};

export default Appointment;
