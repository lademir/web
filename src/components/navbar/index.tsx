'use client';
import { ThemeToggle } from '@/app/theme/theme-toggle';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

interface NavItem {
    nome: string;
    link: string;
}

interface NavbarProps {
    itens: NavItem[];
}

export function Navbar({ itens }: NavbarProps) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <nav className="bg-background text-foreground">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex-shrink-0">
                        <span className="text-2xl font-bold">Lademir Júnior</span>
                    </div>
                    <div className="hidden md:flex items-center space-x-4">
                        <div className="flex items-baseline space-x-4">
                            {itens.map((item) => (
                                <Link
                                    key={item.nome}
                                    href={item.link}
                                    className="px-3 py-2 rounded-md text-sm font-medium relative overflow-hidden group"
                                >
                                    <span className="relative z-10">{item.nome}</span>
                                    <span className="absolute inset-0 bg-current opacity-0 group-hover:opacity-10 transition-opacity duration-300 ease-in-out"></span>
                                </Link>
                            ))}
                        </div>
                        <ThemeToggle />
                    </div>
                    <div className="md:hidden flex items-center">
                        <ThemeToggle />
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="inline-flex items-center justify-center p-2 rounded-md text-foreground hover:bg-background-200 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white ml-2"
                        >
                            <span className="sr-only">Abrir menu principal</span>
                            {isMenuOpen ? (
                                <X className="block h-6 w-6" aria-hidden="true" />
                            ) : (
                                <Menu className="block h-6 w-6" aria-hidden="true" />
                            )}
                        </button>
                    </div>
                </div>
            </div>
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        className="md:hidden"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                            {itens.map((item, index) => (
                                <motion.div
                                    key={item.nome}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                    transition={{ duration: 0.3, delay: index * 0.1 }}
                                >
                                    <Link
                                        href={item.link}
                                        className="block px-3 py-2 rounded-md text-base font-medium text-foreground hover:bg-background-200"
                                        onClick={() => setIsMenuOpen(false)}
                                    >
                                        {item.nome}
                                    </Link>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
