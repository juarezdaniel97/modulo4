import React from 'react'
import { artistas } from "../data/artistas";
import { motion } from "framer-motion";
import { useButtonAnimation, useFadeAnimation } from '../utils/animations';

const LineUp = () => {
    return (
        <section id="lineup" className="py-16 bg-crema text-black">
            <div className="max-w-4xl mx-auto px-4 text-center">
                
                {/* title */}
                <motion.h2 className="text-2xl sm:text-4xl font-Cinzel font-bold mb-12"
                    {...useFadeAnimation('slideInLeft')}
                >
                    Artistas del Festival
                </motion.h2>

                {/* Content */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    {artistas.map((artista, index) => (
                        <motion.div
                            key={index}
                            {...useButtonAnimation('bounce2')}
                            className="bg-white rounded-lg shadow-lg overflow-hidden"
                        >
                            <img
                            src={artista.imagen}
                            alt={artista.nombre}
                            className="w-full h-60 object-cover"
                            />
                            <div className="p-4">
                                <h3 className="text-2xl font-Lato font-bold">{artista.nombre}</h3>
                                <p className="mt-2 text-madera">{artista.horario}</p>
                                <p className="text-calabaza">{artista.dia}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default LineUp