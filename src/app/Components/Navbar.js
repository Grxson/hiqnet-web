"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className="fixed top-0 left-0 w-full bg-blue-600 text-white p-4 shadow-md z-50">
            <div className="container mx-auto flex justify-between items-center">
                {/* Logo */}
                <Link href="/" className="text-2xl font-bold cursor-pointer">
                    HiQNet
                </Link>

                {/* Menú de Escritorio */}
                <div className="hidden md:flex space-x-6">
                    <NavLink href="/">Inicio</NavLink>
                    <NavLink href="/about">Sobre Nosotros</NavLink>
                    <NavLink href="/portfolio">Portafolio</NavLink>
                    <NavLink href="/contact">Contacto</NavLink>
                </div>

             {/*hola uwu, solo estoy probando */}

                {/* Botón Menú Hamburguesa */}
                <button
                    className="md:hidden"
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Toggle menu"
                >
                    {menuOpen ? <X size={30} /> : <Menu size={30} />}
                </button>
            </div>

            {/* Menú Móvil (Animado con Framer Motion) */}
            <AnimatePresence>
                {menuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="absolute top-full left-0 w-full bg-blue-700 text-white py-4 flex flex-col space-y-4 items-center shadow-md"
                    >
                        <NavLink href="/" onClick={() => setMenuOpen(false)}>
                            Inicio
                        </NavLink>
                        <NavLink href="/about" onClick={() => setMenuOpen(false)}>
                            Sobre Nosotros
                        </NavLink>
                        <NavLink href="/portfolio" onClick={() => setMenuOpen(false)}>
                            Portafolio
                        </NavLink>
                        <NavLink href="/contact" onClick={() => setMenuOpen(false)}>
                            Contacto
                        </NavLink>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

// Componente para los links del menú
const NavLink = ({ href, children, onClick }) => (
    <Link
        href={href}
        className="text-lg hover:text-gray-300 transition-colors"
        onClick={onClick}
    >
        {children}
    </Link>
);

export default Navbar;
