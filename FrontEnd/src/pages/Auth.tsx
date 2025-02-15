import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { z } from 'zod';
import Navbar from "../components/Navbar";

const schema = z.object({
  email: z.string().email({ message: "Invalid email address" }),
  password: z.string().min(6, { message: "Password must be at least 6 characters long" }),
});

function Auth() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isRegistering, setIsRegistering] = useState(false);
  const [errors, setErrors] = useState<{ email?: string; password?: string }>({});
  const navigate = useNavigate();

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      schema.parse({ email, password });
      if (isRegistering) {
        // Registro de usuario
        await axios.post('/api/register', { email, password });
      } else {
        // Inicio de sesión
        const response = await axios.post('/api/login', { email, password });
        localStorage.setItem('token', response.data.access_token);
      }
      navigate('/'); // Redirigir al inicio
    } catch (error) {
      if (error instanceof z.ZodError) {
        const fieldErrors = error.errors.reduce((acc, curr) => {
          acc[curr.path[0]] = curr.message;
          return acc;
        }, {} as { email?: string; password?: string });
        setErrors(fieldErrors);
      } else {
        console.error('Error en la autenticación:', error);
      }
    }
  };

  return (
    <>
      <Navbar />

      <section className="bg-sky-800">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <div className="w-full bg-sky-700 rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-white md:text-2xl">
                {isRegistering ? 'Create an account' : 'Sign in to your account'}
              </h1>
              <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="email" className="block mb-2 text-sm font-medium text-white">
                    Your email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="bg-sky-50 border border-sky-300 text-sky-900 rounded-lg focus:ring-sky-600 focus:border-sky-600 block w-full p-2.5"
                    placeholder="name@company.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                  {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
                </div>
                <div>
                  <label htmlFor="password" className="block mb-2 text-sm font-medium text-white">
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="••••••••"
                    className="bg-sky-50 border border-sky-300 text-sky-900 rounded-lg focus:ring-sky-600 focus:border-sky-600 block w-full p-2.5"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                  {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
                </div>
                <button
                  type="submit"
                  className="w-full text-white bg-sky-600 hover:bg-sky-700 focus:ring-4 focus:outline-none focus:ring-sky-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                >
                  {isRegistering ? 'Sign up' : 'Sign in'}
                </button>
                <p className="text-sm font-light text-sky-100">
                  {isRegistering ? 'Already have an account?' : "Don’t have an account yet?"}{' '}
                  <button
                    type="button"
                    className="font-medium text-sky-300 hover:underline"
                    onClick={() => setIsRegistering(!isRegistering)}
                  >
                    {isRegistering ? 'Sign in' : 'Sign up'}
                  </button>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Auth;