import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

import { FaBuilding, FaBell, FaClipboardList, FaFileAlt, FaChartLine, FaUsers } from 'react-icons/fa';
import { GrGithub } from 'react-icons/gr';

const features = [
    {
      name: 'Gestión de inventarios',
      description: 'Lleva un control de tus inventarios de manera eficiente y sencilla, asegurándote de que siempre haya suficiente stock disponible para tus necesidades.',
      icon: <FaBuilding className='w-5 h-5 text-sky-600 lg:w-6 lg:h-6'/>,
    },
    {
      name: 'Alertas de stock',
      description: 'Recibe notificaciones oportunas cuando tus productos estén por agotarse, permitiéndote tomar medidas preventivas para evitar interrupciones en el suministro.',
      icon: <FaBell className='w-5 h-5 text-sky-600 lg:w-6 lg:h-6'/>,
    },
    {
      name: 'Historial de movimientos',
      description: 'Revisa el historial completo de movimientos de tus productos, desde su ingreso al inventario hasta su salida, para mantener un registro preciso y detallado.',
      icon: <FaClipboardList className='w-5 h-5 text-sky-600 lg:w-6 lg:h-6'/>,
    },
    {
      name: 'Reportes de inventario',
      description: 'Genera reportes detallados de tus inventarios en diferentes formatos, facilitando el análisis y la toma de decisiones basada en datos precisos.',
      icon: <FaFileAlt className='w-5 h-5 text-sky-600 lg:w-6 lg:h-6'/>,
    },
    {
      name: 'Análisis de ventas',
      description: 'Analiza las tendencias de ventas de tus productos, identificando cuáles son los más populares y cuáles necesitan un impulso para mejorar su desempeño.',
      icon: <FaChartLine className='w-5 h-5 text-sky-600 lg:w-6 lg:h-6'/>,
    },
    {
      name: 'Gestión de usuarios',
      description: 'Administra a los usuarios que tienen acceso al sistema, asignando roles y permisos específicos para mantener la seguridad y eficiencia en la gestión de inventarios.',
      icon: <FaUsers className='w-5 h-5 text-sky-600 lg:w-6 lg:h-6'/>,
    },
  ];
  
const teamMembers = [
    {
        name: 'Vanessa Enríquez',
        role: 'Desarrolladora Frontend',
        about: 'Apasionada por la programación y el diseño web, con experiencia en el desarrollo de aplicaciones interactivas y amigables para el usuario.',
        github: 'https://github.com/macatops',
        img: 'https://avatars.githubusercontent.com/u/137115483?v=4'
    },
    {
        name: 'Brissa Jaramillo',
        role: 'Documentadora',
        about: 'Especialista en documentación técnica y creación de manuales de usuario, con habilidades para comunicar información compleja de manera clara y concisa.',
        github: 'https://github.com/Brissademar',
        img: 'https://avatars.githubusercontent.com/u/148615298?v=4'
    },
    {
        name: 'Jorge Valenzuela',
        role: 'Desarrollador Backend',
        about: 'Experto en el desarrollo de servidores y bases de datos, con conocimientos en la creación de APIs y sistemas escalables y seguros.',
        github: 'https://github.com/yorsh130204',
        img: 'https://avatars.githubusercontent.com/u/134531815?v=4'
    },
    {
        name: 'Angel Ortega',
        role: 'Diseñador UX/UI',
        about: 'Diseñador creativo y enfocado en la experiencia del usuario, con habilidades para crear interfaces atractivas y funcionales que satisfacen las necesidades del cliente.',
        github: 'https://github.com/4ngel0rtega',
        img: 'https://avatars.githubusercontent.com/u/124318186?v=4'
    }
]
const App: React.FC = () => {
    return (
        <div className="min-h-screen">
            <Navbar />
            
            <main>
                <section className='bg-sky-500'>
                    <div className='grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12'>
                        <div className='mr-auto place-self-center lg:col-span-7'>
                            <h1 className='max-w-2xl mb-4 text-4xl text-white font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl'>
                                Bienvenido a StockTrack
                            </h1>
                            <p className='max-w-2xl mb-6 font-light text-white lg:mb-8 md:text-lg lg:text-xl'>
                                Gestiona tus inventarios de manera eficiente y sencilla.
                            </p>
                            <a href="" className='inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-sky-600 hover:bg-sky-700 focus:ring-4 focus:ring-sky-300'>
                                Contáctanos
                            </a>
                        </div>
                        <div className='hidden lg:mt-0 lg:col-span-5 lg:flex '>
                            <img src="https://www.mrpeasy.com/blog/wp-content/uploads/2022/11/MrPeasy-Inventory-Planning.jpg" alt="" className='rounded-xl'/>
                        </div>
                    </div>
                </section>

                <section className='bg-white' id='project'>
                    <div className='py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6'>
                        <div className='max-w-screen-md mb-8 lg:mb-6'>
                            <h2 className='mb-4 text-4xl tracking-tight font-extrabold text-sky-800'>
                                ¿Qué es StockTrack?
                            </h2>
                            <p className='text-gray-500 sm:text-xl'>
                                StockTrack es una aplicación web que te permite llevar un control de tus inventarios de manera eficiente y sencilla.
                            </p>
                        </div>
                        <div className='space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0'>
                            {features.map((feature, index) => (
                                <div key={index} >
                                    <div className='flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-sky-100 lg:h-12 lg:w-12'>
                                        {feature.icon}
                                    </div>
                                    <h3 className='mb-2 text-xl font-bold'>
                                        {feature.name}
                                    </h3>
                                    <p className='text-gray-500'>
                                        {feature.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <section id='team'>
                    <div className='py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6'>
                        <div className='mx-auto max-w-screen-sm text-center mb-8 lg:mb-16'>
                            <h2 className='mb-4 text-4xl tracking-tight font-extrabold text-sky-800'>
                                Nuestro equipo
                            </h2>
                            <p className='text-gray-500 sm:text-xl lg:mb-16'>
                                Conoce al equipo detrás de StockTrack. Estamos aquí para ayudarte a gestionar tus inventarios de manera eficiente y efectiva.
                            </p>
                        </div>
                        <div className='grid gap-8 mb-6 lg:mb-16 md:grid-cols-2'>
                            {teamMembers.map((member, index) => (
                                <div key={index} className='items-center space-x-2 bg-sky-50 rounded-lg shadow sm:flex'>
                                    <a href={member.github}>
                                        <img src={member.img} alt={member.name} className='w-full rounded-lg sm:rounded-none sm:rounded-l-lg'/>
                                    </a>
                                    <div >
                                        <h3 className='text-xl font-bold tracking-tight text-sky-900'>
                                            {member.name}
                                        </h3>
                                        <span className='text-sky-500'>
                                            {member.role}
                                        </span>
                                        <p className='mt-3 mb-4 text-gray-500'>
                                            {member.about}
                                        </p>
                                        <ul className='flex space-x-4 sm:mt-0'>
                                            <li>
                                                <a href={member.github} className='text-sky-600 hover:text-sky-800'>
                                                    <GrGithub/>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            ))}
                        </div> 
                    </div>
                </section>
            </main>

            <Footer/>
        </div>
    );
};

export default App;
