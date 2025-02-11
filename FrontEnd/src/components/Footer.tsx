import React from 'react';

const Footer: React.FC = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-gray-800 text-white py-4">
        <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm">&copy; {currentYear} Nombre del Proyecto. Todos los derechos reservados.</p>
            <nav className="mt-4 md:mt-0">
                <ul className="flex space-x-4">
                <li><a href="#" className="hover:text-blue-300 transition-colors duration-300">Inicio</a></li>
                <li><a href="#" className="hover:text-blue-300 transition-colors duration-300">Acerca de</a></li>
                <li><a href="#" className="hover:text-blue-300 transition-colors duration-300">Contacto</a></li>
                </ul>
            </nav>
            </div>
        </div>
        </footer>
    );
};

export default Footer;
