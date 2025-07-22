import React, { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { AppContext } from '../Context/AppContext';

const Doctors = () => {
  const { speciality } = useParams();
  const [filterDoc, setFilterDoc] = useState([]);
  const navigate = useNavigate();
  const { doctors } = useContext(AppContext);

  const applyFilter = () => {
    if (speciality) {
      setFilterDoc(doctors.filter(doc => doc.speciality === speciality));
    } else {
      setFilterDoc(doctors);
    }
  };

  useEffect(() => {
    applyFilter();
  }, [doctors, speciality]);

  return (
    <div>
      <p className='text-gray-600'>Browse through the Doctors specialist.</p>

      <div className='flex flex-col sm:flex-row items-start gap-5 mt-5'>

        {/* Sidebar */}
        <div className='flex flex-col gap-3 text-sm text-gray-600'>
          {['General physician', 'Gynecologist', 'Dermatologist', 'Pediatricians', 'Neurologist', 'Gastroenterologist'].map((cat) => (
            <p
              key={cat}
              onClick={() => navigate(`/doctors/${cat}`)}
              className={`pl-3 py-1.5 pr-5 border border-gray-300 rounded cursor-pointer ${speciality === cat ? 'bg-indigo-100 text-black' : ''}`}
            >
              {cat}
            </p>
          ))}
        </div>

        {/* Doctor Cards */}
        <div className='w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4'>
          {
            filterDoc.map((item, index) => (
              <div
                onClick={() => navigate(`/appointment/${item._id}`)}
                className='border border-blue-200 rounded-xl overflow-hidden cursor-pointer hover:-translate-y-2 transition-all duration-500'
                key={index}
              >
                <img className='bg-blue-50 w-full' src={item.image} alt={item.name} />
                <div className='p-4'>
                  <div className='flex items-center gap-2 text-sm text-green-500'>
                    <span className='w-2 h-2 bg-green-500 rounded-full'></span>
                    <p>Available</p>
                  </div>
                  <p className='text-gray-900 text-lg font-medium'>{item.name}</p>
                  <p className='text-gray-600 text-sm'>{item.speciality}</p>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  );
};

export default Doctors;
