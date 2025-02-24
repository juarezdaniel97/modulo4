import { motion } from 'framer-motion';
import { heroData } from '../data/heroData';
import { useButtonAnimation, useFadeAnimation } from '../utils/animations';
import heroImage from '../assets/images/Poman-fondo.jpg';
import Countdown from './shared/CounterTimer';

const Hero = () => {
    
    return (
        // 
        <div className="relative min-h-screen flex items-center justify-center pt-16">
            {/* BACKGROUND IMAGE */}
            <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                    backgroundImage: `url(${heroImage})`,
                    backgroundBlendMode: "overlay",
                    top: "4rem",
                }}
            >
                {/* OVERLAY GRADIENT */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />
        
                {/* CONTENT */}
                <div className="relative z-10 text-center px-6 sm:px-8 lg:px-10 mt-6">
                    <div className="flex flex-col items-center justify-center text-center gap-4">
                        {/* Title */}
                        <motion.h1
                            className="text-2xl sm:text-4xl font-Cinzel font-bold text-festival-gold mb-2"
                            // variants={heroAnimations.title}
                            // initial="initial"
                            // animate="animate"
                            {...useFadeAnimation('title')}
                        >
                            {heroData.title}
                        </motion.h1>
            
                        {/* Subtitle */}
                        <motion.p
                            className="text-lg sm:text-xl font-Lato text-crema mb-4"
                            {...useFadeAnimation('fadeIn')}
                        >
                            {heroData.subtitle}
                        </motion.p>
            
                        {/* CTA Button */}    
                        <motion.button
                            className="bg-festival-gold text-black px-3 py-2 rounded-full font-montserrat cursor-pointer sm:text-lg hover:bg-amber-400 transition-colors duration-300"
                                {...useButtonAnimation('float')}
                            >
                                {heroData.ctaText}
                        </motion.button>

                        {/* Event Location */}
                        <motion.div
                            className="text-lg sm:text-xl text-crema font-montserrat mt-4"
                            {...useFadeAnimation('fadeIn')}
                        >
                            <p>{heroData.location}</p>
                        </motion.div>
            
                        {/* Countdown */}
                        <Countdown/>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Hero;