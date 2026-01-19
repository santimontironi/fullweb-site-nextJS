"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const navLinks = [
        { href: "#inicio", label: "Inicio" },
        { href: "#servicios", label: "Servicios" },
        { href: "#nosotros", label: "Nosotros" },
        { href: "#contacto", label: "Contacto" },
    ]

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-slate-900/80 backdrop-blur-lg border-b border-slate-800/50 p-5">
            <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16 lg:h-20">
                    <Link href="/" className="flex items-center gap-3 group">
                        <div className="relative w-10 h-10 lg:w-12 lg:h-12">
                            <Image
                                src="/images/logo.png"
                                alt="FullWeb Logo"
                                width={48}
                                height={48}
                                className="object-contain transition-transform duration-300 group-hover:scale-110"
                            />
                        </div>
                        <span className="text-xl lg:text-2xl font-bold bg-linear-to-r from-blue-400 to-cyan-400 text-transparent bg-clip-text">
                            FullWeb
                        </span>
                    </Link>

                    <div className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className="text-slate-300 hover:text-white transition-colors duration-300 font-medium relative group"
                            >
                                {link.label}
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-linear-to-r from-blue-400 to-cyan-400 transition-all duration-300 group-hover:w-full"></span>
                            </Link>
                        ))}
                    </div>

                    <div className="hidden md:block">
                        <Link
                            href="#contacto"
                            className="px-6 py-2.5 bg-linear-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-lg transition-all duration-300 hover:from-blue-600 hover:to-cyan-600 hover:shadow-lg hover:shadow-blue-500/50"
                        >
                            Cotizar Proyecto
                        </Link>
                    </div>

                    <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden p-2 text-slate-300 hover:text-white transition-colors"aria-label="Toggle menu">
                        {isMenuOpen ? (
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        ) : (
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        )}
                    </button>
                </div>

                <div className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}>
                    <div className="py-4 space-y-3 border-t border-slate-800/50">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                onClick={() => setIsMenuOpen(false)}
                                className="block px-4 py-2 text-slate-300 hover:text-white hover:bg-slate-800/50 rounded-lg transition-all duration-300"
                            >
                                {link.label}
                            </Link>
                        ))}
                        <Link
                            href="/#contacto"
                            onClick={() => setIsMenuOpen(false)}
                            className="block mx-4 px-6 py-2.5 bg-linear-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-lg text-center transition-all duration-300 hover:from-blue-600 hover:to-cyan-600"
                        >
                            Cotizar Proyecto
                        </Link>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Header