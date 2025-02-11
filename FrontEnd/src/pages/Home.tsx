import React from 'react';
import Navbar from '../components/Navbar';
import { TeamMember, teamMembers } from '../data/teamMembers';
import Footer from '../components/Footer';


const App: React.FC = () => {
    return (
        <div className="min-h-screen">
            <Navbar />
            <main>
                <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
                    {/* Hero section */}
                    <div className="px-4 py-12 sm:px-6 lg:px-8shadow-xl rounded-lg">
                        <div className="text-center">
                        <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                            <span className="block">Validación integral</span>
                            <span className="block text-indigo-600">Frontend & Backend</span>
                        </h1>
                        <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
                            Asegure la integridad y la seguridad de los datos con nuestra poderosa solución de validación.
                            Integre perfectamente la validación de frontend y backend para una experiencia de usuario robusta.
                        </p>
                        <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
                            <div className="rounded-md shadow">
                                <a href="#" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10">
                                    Get started
                                </a>
                            </div>
                            <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
                                <a href="#" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-gray-50 md:py-4 md:text-lg md:px-10">
                                    Live demo
                                </a>
                            </div>
                        </div>
                        </div>
                    </div>

                    {/* Feature section */}
                    <div className="py-12 bg-white">
                        <div className="max-w-xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8">
                        <h2 className="sr-only">Una mejor manera de validar</h2>
                        <dl className="space-y-10 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-8">
                            <div>
                            <dt>
                                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                                {/* Heroicon name: outline/globe-alt */}
                                    <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                                    </svg>
                                </div>
                                <p className="mt-5 text-lg leading-6 font-medium text-gray-900">Validación frontend</p>
                            </dt>
                            <dd className="mt-2 text-base text-gray-500">
                                Validación del lado del cliente en tiempo real para comentarios inmediatos de los usuarios y UX mejorado.
                            </dd>
                            </div>

                            <div>
                            <dt>
                                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                                {/* Heroicon name: outline/scale */}
                                    <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                                    </svg>
                                </div>
                                <p className="mt-5 text-lg leading-6 font-medium text-gray-900">Validación de Backend</p>
                            </dt>
                            <dd className="mt-2 text-base text-gray-500">
                                Validación robusta del lado del servidor para garantizar la integridad y la seguridad de los datos.                        </dd>
                            </div>

                            <div>
                            <dt>
                                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                                {/* Heroicon name: outline/lightning-bolt */}
                                    <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                    </svg>
                                </div>
                                <p className="mt-5 text-lg leading-6 font-medium text-gray-900">Integración perfecta</p>
                            </dt>
                            <dd className="mt-2 text-base text-gray-500">
                                Integración fácil con sus tecnologías de frontend y backend existentes.
                            </dd>
                            </div>
                        </dl>
                        </div>
                    </div>

                    {/* Validation Technologies section */}
                    <div className="py-12">
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                            <div className="lg:text-center">
                                <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Tecnologías</h2>
                                <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                                Validación de vanguardia
                                </p>
                                <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
                                Utilizamos las mejores herramientas y prácticas para garantizar una validación robusta y eficiente.
                                </p>
                            </div>

                            <div className="mt-10">
                                <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
                                <div className="relative">
                                    <dt>
                                    <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                                        <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                        </svg>
                                    </div>
                                    <p className="ml-16 text-lg leading-6 font-medium text-gray-900">Frontend con Zod</p>
                                    </dt>
                                    <dd className="mt-2 ml-16 text-base text-gray-500">
                                    Utilizamos Zod para validaciones del lado del cliente, proporcionando una experiencia de usuario fluida y reactiva.
                                    </dd>
                                </div>

                                <div className="relative">
                                    <dt>
                                    <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                                        <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
                                        </svg>
                                    </div>
                                    <p className="ml-16 text-lg leading-6 font-medium text-gray-900">Backend con Laravel Validation</p>
                                    </dt>
                                    <dd className="mt-2 ml-16 text-base text-gray-500">
                                    En el backend, aprovechamos el potente sistema de validación de Laravel para garantizar la integridad de los datos.
                                    </dd>
                                </div>

                                <div className="relative">
                                    <dt>
                                    <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                                        <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                        </svg>
                                    </div>
                                    <p className="ml-16 text-lg leading-6 font-medium text-gray-900">Validación en tiempo real</p>
                                    </dt>
                                    <dd className="mt-2 ml-16 text-base text-gray-500">
                                    Implementamos validación en tiempo real tanto en el frontend como en el backend para una experiencia de usuario óptima.
                                    </dd>
                                </div>

                                <div className="relative">
                                    <dt>
                                    <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                                        <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
                                        </svg>
                                    </div>
                                    <p className="ml-16 text-lg leading-6 font-medium text-gray-900">Validación de datos complejos</p>
                                    </dt>
                                    <dd className="mt-2 ml-16 text-base text-gray-500">
                                    Manejamos validaciones de estructuras de datos complejas, incluyendo objetos anidados y arrays.
                                    </dd>
                                </div>
                                </dl>
                            </div>
                        </div>
                    </div>

                    {/* Team section */}
                    <section className="mt-16">
                        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Nuestro Equipo</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {teamMembers.map((member: TeamMember, index: number) => (
                            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:transform hover:scale-105">
                            <div className="p-6">
                                <h3 className="text-xl font-semibold text-gray-800 mb-2">{member.name}</h3>
                                <h4 className="text-md font-medium text-blue-600 mb-3">{member.role}</h4>
                                <p className="text-gray-600 text-sm">{member.description}</p>
                            </div>
                            </div>
                        ))}
                        </div>
                    </section>
                </div>
            </main>

            <Footer/>
        </div>
    );
};

export default App;
