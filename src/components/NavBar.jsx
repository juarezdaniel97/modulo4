import React from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import { menuItems } from "../data/menuData";
import { menuAnimation, useButtonAnimation } from "../utils/animations";
import LogoFestival from "../assets/images/LogoFestival.png";

const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="fixed w-full bg-black/90 backdrop-blur-sm z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                        <div className="flex-shrink-0 flex items-center">
                            <img 
                                src={LogoFestival} 
                                alt="Logo Festival San Sebastián" 
                                className="h-12 w-auto"
                            />
                            <div className="ml-2">
                                <span className="font-cinzel text-white text-sm block">62° FESTIVAL NACIONAL DE</span>
                                <span className="font-cinzel text-white text-lg block">San Sebastián</span>
                            </div>
                        </div>

                    {/* DESKTOP MENU */}
                        <div className="hidden md:block">
                            <div className="ml-10 flex  items-center space-x-4">
                                {menuItems.map((item) => (
                                    <motion.a
                                        {...useButtonAnimation('bounce')}
                                        key={item.title}
                                        href={item.href}
                                        className="font-Montserrat text-white hover:text-festival-gold transition-colors duration-300"
                                        >
                                        {item.title}
                                    </motion.a>
                                ))}
                            </div>
                        </div>

                    {/* MOBILE MENU BUTTON */}
                        <div className="md:hidden">
                            <button
                                onClick={toggle}
                                className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-festival-gold"
                                >
                                {!isOpen ? (
                                    <i className="bi bi-list"></i>
                                ) : (
                                    <i className="bi bi-x-lg"></i>
                                )}
                            </button>
                        </div>
                </div>

                {/* MENU MOBILE */}
                    <motion.div 
                        className={`md:hidden  ${isOpen ? "block": "hidden"}`}
                        variants={menuAnimation}
                        initial="initial"
                        animate={isOpen ? "animate": "exit"}
                        >
                        <div className="px-2 pt-2 pb-3 space-y-1 bg-black/60 backdrop-blur-sm text-center">
                            {menuItems.map((item)=>(
                                <a 
                                    key={item.title}
                                    href={item.href}
                                    className="block px-3 py-2 rounded-md text-white font-montserrat hover:text-festival-gold hover:bg-gray-900 transition-colors duration-300"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {item.title}
                                </a>
                            ))}
                        </div>
                    </motion.div>
            </div>
        </nav>
    );
};

export default NavBar;
