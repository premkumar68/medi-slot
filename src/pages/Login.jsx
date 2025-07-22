import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [state, setState] = useState('Sign Up');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const navigate = useNavigate();

  const onSubmitHandler = async (event) => {
    event.preventDefault();

    // Simulated success
    if ((state === 'Login' && email && password) || (state === 'Sign Up' && name && email && password)) {
      console.log(`${state} Success`);
      navigate('/'); // 👈 Go to Home after login/signup
    }
  };

  return (
    <form onSubmit={onSubmitHandler} className='min-h-[80vh] flex items-center justify-center'>
      <div className='p-6 rounded shadow-md w-80'>
        <p className='text-xl font-semibold mb-4'>
          {state === 'Sign Up' ? 'Create Account' : 'Login'}
        </p>

        {state === 'Sign Up' && (
          <input
            type='text'
            placeholder='Name'
            value={name}
            onChange={(e) => setName(e.target.value)}
            className='w-full mb-3 p-2 border rounded'
            required
          />
        )}

        <input
          type='email'
          placeholder='Email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className='w-full mb-3 p-2 border rounded'
          required
        />

        <input
          type='password'
          placeholder='Password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className='w-full mb-4 p-2 border rounded'
          required
        />

        <button type='submit' className='w-full bg-blue-500 text-white py-2 rounded'>
          {state === 'Sign Up' ? 'Sign Up' : 'Login'}
        </button>

        <p className='text-sm mt-4 text-center'>
          {state === 'Sign Up'
            ? 'Already have an account?'
            : "Don't have an account?"}
          <span
            className='text-blue-500 cursor-pointer ml-1'
            onClick={() => setState(state === 'Sign Up' ? 'Login' : 'Sign Up')}
          >
            {state === 'Sign Up' ? 'Login here' : 'Sign up'}
          </span>
        </p>
      </div>
    </form>
  );
};

export default Login;
