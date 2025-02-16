import React, { useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../assets/logo.jpeg';
import { GiHamburgerMenu } from 'react-icons/gi';

const Navbar: React.FC = () => {
    const navigate = useNavigate();
    const [isOpen, setIsOpen] = React.useState(false);
    const [isOpenUser, setIsOpenUser] = React.useState(false);
    const userMenuRef = useRef<HTMLDivElement>(null);

    // Verificar si hay un token en localStorage
    const token = localStorage.getItem('token');
    const user = token ? JSON.parse(localStorage.getItem('user') || '{}') : null;

    const handleLogout = () => {
        localStorage.removeItem('token'); // Eliminar el token al cerrar sesión
        navigate('/'); // Redirigir al inicio
    };

    const toggleMenu = () => {
        setIsOpen(!isOpen);
        if (!isOpen) {
            setIsOpenUser(false);
        }
    };

    const toggleMenuUser = () => {
        setIsOpenUser(!isOpenUser);
        if (!isOpenUser) {
            setIsOpen(false);
        }
    };

    const handleClickOutside = (event: MouseEvent) => {
        if (userMenuRef.current && !userMenuRef.current.contains(event.target as Node)) {
            setIsOpenUser(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <nav className='bg-sky-900 sticky top-0 z-40'>
            <div className='max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4'>
                <a href="" className='flex items-center space-x-3 rtl:space-x-reverse'>
                    <img src={logo} alt="StockTrack" className='h-10 rounded-full'/>
                    <span className='self-center text-2xl font-semibold whitespace-nowrap text-white'>StockTrack</span>
                </a>
                <div className='flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse relative'>
                    {token ? (
                        <>
                            <button type='button' onClick={toggleMenuUser} className='flex text-sm bg-sky-800 rounded-full md:me-0 focus:ring-4 focus:ring-sky-300'>
                                <span className='sr-only'>Open User Menu</span>
                                <img src="https://avatars.githubusercontent.com/u/137115483?v=4" alt="user photo" className='w-8 h-8 rounded-full'/>
                            </button>
                            {/* Dropdown menu */}
                            {isOpenUser && 
                                <div ref={userMenuRef} className='z-50 absolute top-full text-base list-none bg-white divide-y divide-sky-100 rounded-lg shadow-sm'>
                                    <div className='px-4 py-3'>
                                        <span className='block text-sm text-sky-900 font-bold'>{user.name}</span>
                                        <span className='block text-sm text-sky-900 truncate'>{user.email}</span>
                                    </div>
                                    <ul className='py-2' aria-labelledby='user-menu'>
                                        <li>
                                            <Link to="/dashboard" className='block px-4 py-2 text-sm text-gray-700 hover:bg-sky-100'>Dashboard</Link>
                                            <button onClick={handleLogout} className='block w-full px-4 py-2 text-sm text-red-700 hover:bg-sky-100 border-t border-t-sky-100'>Cerrar Sesión</button>
                                        </li>
                                    </ul>
                                </div>
                            }
                        </>
                    ) : (
                        <>
                            <Link to='/auth' className='hidden md:block text-sm text-white hover:text-sky-300'>Iniciar Sesión</Link>
                        </>
                    )}
                    <button type='button' onClick={toggleMenu} className='inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-sky-500 rounded-lg md:hidden hover:bg-sky-100 focus:ring-2 focus:ring-sky-200'>
                        <span className='sr-only'>Abrir menu principal</span>
                        <GiHamburgerMenu className='w-5 h-5'/>
                    </button>
                </div>
                <div className={`items-center justify-between ${isOpen ? 'flex' : 'hidden'} w-full md:flex md:w-auto md:order-1`}>
                    <ul className='flex w-full flex-col font-medium p-4 md:p-0 mt-4 border border-sky-100 rounded-lg  md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 '>
                        <li>
                            <a href='/' className='block py-2 px-3 text-white rounded-sm hover:bg-sky-100 hover:text-black md:hover:bg-transparent md:hover:text-sky-300 md:p-0'>Inicio</a>
                        </li>
                        <li>
                            <a href='#project' className='block py-2 px-3 text-white rounded-sm hover:bg-sky-100 hover:text-black md:hover:bg-transparent md:hover:text-sky-300 md:p-0'>Proyecto</a>
                        </li>
                        <li>
                            <a href='#team' className='block py-2 px-3 text-white rounded-sm hover:bg-sky-100 hover:text-black md:hover:bg-transparent md:hover:text-sky-300 md:p-0'>Equipo</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;