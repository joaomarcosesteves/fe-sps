import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import api from '../../services/api';
import { AiOutlineLogin } from "react-icons/ai";

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await api.post('/login', { email, password });

      Cookies.set('token', response.data.token, { expires: 1 }); 
      navigate('/home'); 
    } catch (err) {
      console.log(err)
      setError('Invalid credentials. Please try again.');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">

      

      <form onSubmit={handleLogin} className="bg-white rounded-md shadow-md w-96 flex flex-col gap-2">

        <div className='flex bg-[#0C0068] items-center justify-center rounded-t-md p-4'>
          <img src="https://spsgroup.com.br/wp-content/uploads/2024/03/SPSConstultoria_007.png" alt="Logo" className="w-auto h-16 object-contain rounded-t-md" />
        </div>

          <div className='p-6 flex flex-col gap-6'>

              <div className='flex flex-col gap-2 '>
                <h2 className="text-xl font-bold mb-4 text-center">Bem vindo!</h2>


                <div className='flex flex-col gap-2'>
                  <span className='font-semibold text-sm'>Email</span>
                  <input
                    type="email"
                    placeholder="your@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="block w-full p-2 border rounded-md"
                  />
                </div>

                <div className='flex flex-col gap-2 '>
                  <span className='font-semibold text-sm'>Password</span>
                  <input
                    type="password"
                    placeholder="****"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="block w-full p-2 border rounded-md"
                  />
                </div>
              </div>

              {error && <p className="text-red-500 text-sm text-center">{error}</p>}

              <button type="submit" className=" flex items-center justify-center gap-2 w-full p-2 rounded-md bg-gradient-to-tr from-[#0C0068] to-[#369895] text-white hover:bg-[#0C0068] transition-all duration-200">
                Login

                <AiOutlineLogin size={16}/>
              </button>

          </div>
      </form>
    </div>
  );
};

export default Login;
