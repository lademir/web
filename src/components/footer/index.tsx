'use client';
import { Github, Linkedin } from 'lucide-react';
import { useTheme } from 'next-themes';
import Image from 'next/image';
import Link from 'next/link';
import LattesBlack from '../../../assets/lattes-black.png';
import LattesWhite from '../../../assets/lattes-white.png';

const Footer = () => {
    const { theme } = useTheme();

    return (
        <footer className="bg-background text-foreground py-8">
            <div className="container mx-auto max-w-3xl px-4">
                <div className="flex flex-col items-center space-y-4">
                    <div className="flex space-x-4">
                        <Link href="https://github.com/lademir" target="_blank" rel="noopener noreferrer">
                            <Github className="w-6 h-6" />
                        </Link>
                        <Link href="https://linkedin.com/in/lademir-junior" target="_blank" rel="noopener noreferrer">
                            <Linkedin className="w-6 h-6" />
                        </Link>
                        <Link href={"http://lattes.cnpq.br/6689216065999798"}>
                            <Image src={theme === 'light' ? LattesBlack : LattesWhite} alt="Lattes" width={24} height={24} />
                        </Link>
                    </div>
                    <p className="text-center text-sm md:text-base">lademirjunior@gmail.com</p>
                    <p className="text-center text-xs md:text-base mt-2">
                        <Link href="https://github.com/lademir/web" target="_blank" rel="noopener noreferrer" className="hover:underline transition-all duration-300">
                            See the source code of this site
                        </Link>
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
