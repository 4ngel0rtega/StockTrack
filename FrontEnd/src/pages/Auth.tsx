import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { z } from 'zod';
import Navbar from "../components/Navbar";


function Auth() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState(''); // Estado para el nombre
  const [passwordConfirmation, setPasswordConfirmation] = useState(''); // Estado para la confirmación de contraseña
  const [isRegistering, setIsRegistering] = useState(false);
  const [errors, setErrors] = useState<{ email?: string; password?: string; name?: string; passwordConfirmation?: string }>({});
  const navigate = useNavigate();

const schema = z.object({
    email: z.string().email({ message: "Invalid email address" }),
    password: z.string().min(6, { message: "Password must be at least 6 characters long" }),
    name: isRegistering ? z.string().min(1, { message: "Name is required" }) : z.string().optional(),
    passwordConfirmation: isRegistering ? z.string().min(6, { message: "Password confirmation must be at least 6 characters long" }) : z.string().optional(),
}).superRefine((data, ctx) => {
    if (isRegistering && data.password !== data.passwordConfirmation) {
        ctx.addIssue({
            path: ["passwordConfirmation"],
            code: z.ZodIssueCode.custom,
            message: "Passwords must match",
        });
    }
});

  const handleSubmit = async (event: React.FormEvent) => {
      event.preventDefault();
      try {
          schema.parse({ email, password, name, passwordConfirmation });
          
          if (isRegistering) {
              // Registro de usuario
              const response = await axios.post('http://localhost:8000/api/register', { 
                  name, 
                  email, 
                  password, 
                  password_confirmation: passwordConfirmation 
              });
              localStorage.setItem('token', response.data.access_token);
              alert('Usuario creado, inicia sesión');
              setIsRegistering(false);
              setEmail('');
              setPassword('');
              setName('');
              setPasswordConfirmation('');
          } else {
              // Inicio de sesión
              const response = await axios.post('http://localhost:8000/api/login', { email, password });
              localStorage.setItem('token', response.data.access_token);
              localStorage.setItem('user', JSON.stringify(response.data.user)); // Guardar el usuario
              setEmail('');
              setPassword('');
              navigate('/'); // Redirigir después de iniciar sesión
          }
      } catch (error) {
          if (axios.isAxiosError(error)) {
              if (error.response) {
                  setErrors({ email: error.response.data.message || 'Invalid credentials' });
              } else {
                  setErrors({ email: 'Network error, please try again' });
              }
          } else {
              console.error('Unexpected error:', error);
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
                {isRegistering ? 'Crea una cuenta' : 'Inicia sesión'}
              </h1>
              <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
                {isRegistering && (
                  <div>
                    <label htmlFor="name" className="block mb-2 text-sm font-medium text-white">Nombre:</label>
                    <input
                      type="text"
                      id="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                      className="bg-sky-50 border border-sky-300 text-sky-900 rounded-lg focus:ring-sky-600 focus:border-sky-600 block w-full p-2.5"
                    />
                    {errors.name && <span className="text-red-500">{errors.name}</span>}
                  </div>
                )}
                <div>
                  <label htmlFor="email" className="block mb-2 text-sm font-medium text-white">Correo Electrónico:</label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="bg-sky-50 border border-sky-300 text-sky-900 rounded-lg focus:ring-sky-600 focus:border-sky-600 block w-full p-2.5"
                  />
                  {errors.email && <span className="text-red-500">{errors.email}</span>}
                </div>
                <div>
                  <label htmlFor="password" className="block mb-2 text-sm font-medium text-white">Contraseña:</label>
                  <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className="bg-sky-50 border border-sky-300 text-sky-900 rounded-lg focus:ring-sky-600 focus:border-sky-600 block w-full p-2.5"
                  />
                  {errors.password && <span className="text-red-500">{errors.password}</span>}
                </div>
                {isRegistering && (
                  <div>
                    <label htmlFor="passwordConfirmation" className="block mb-2 text-sm font-medium text-white">Confirmar Contraseña:</label>
                    <input
                      type="password"
                      id="passwordConfirmation"
                      value={passwordConfirmation}
                      onChange={(e) => setPasswordConfirmation(e.target.value)}
                      required
                      className="bg-sky-50 border border-sky-300 text-sky-900 rounded-lg focus:ring-sky-600 focus:border-sky-600 block w-full p-2.5"
                    />
                    {errors.passwordConfirmation && <span className="text-red-500">{errors.passwordConfirmation}</span>}
                  </div>
                )}
                <button type="submit" className="w-full text-white bg-sky-600 hover:bg-sky-700 focus:ring-4 focus:outline-none focus:ring-sky-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
                  {isRegistering ? 'Registrar' : 'Iniciar Sesión'}
                </button>
              </form>
              <p className="text-sm font-light text-sky-100">
                {isRegistering ? '¿Ya tienes una cuenta?' : '¿No tienes una cuenta aún?'}{' '}
                <button
                  type="button"
                  className="font-medium text-sky-300 hover:underline"
                  onClick={() => setIsRegistering(!isRegistering)}
                >
                  {isRegistering ? 'Iniciar sesión' : 'Crear una cuenta'}
                </button>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Auth;