

export const menuAnimation = {
    initial: {
        opacity: 0,
        y: -20
    },
    animate: {
        opacity: 1,
        y: 0
    },
    exit: {
        opacity: 0,
        y: -20
    },
    transition: {
        duration: 0.2
    }
};


export const useFadeAnimation = (fadeType = 'fadeIn') => {
    const animations = {
        title:{
            initial: { opacity: 0, y: 20 },
            animate: { opacity: 1, y: 0 },
            transition: { duration: 0.8, delay: 0.2 }},
        fadeIn: {
            initial: { opacity: 0 },
            animate: { opacity: 1 },
            exit: { opacity: 0 },
            transition: { duration: 1 }
        },
        fadeOut: {
            initial: { opacity: 1 },
            animate: { opacity: 0 },
            exit: { opacity: 1 },
            transition: { duration: 1 }
        },
        slideInLeft: {
            initial: { x: -100, opacity: 0 },
            animate: { x: 0, opacity: 1 },
            exit: { x: -100, opacity: 0 },
            transition: { duration: 1 }
        },
        slideOutRight: {
            initial: { x: 0, opacity: 1 },
            animate: { x: 100, opacity: 0 },
            exit: { x: 0, opacity: 1 },
            transition: { duration: 1 }
        }
    };

    return animations[fadeType] || animations.fadeIn;
};


export const useButtonAnimation = (moveType = 'bounce') => {
    const animations = {
        bounce: {
            whileHover: { scale: 1.1 },
            whileTap: { scale: 0.9 },
            transition: { type: "spring", stiffness: 400, damping: 17 }
        },
        bounce2:{
            whileHover: { scale: 1.05 },
            whileTap: { scale: 0.95 },
            transition: { type: "spring", stiffness: 200, damping: 25 }
        },
        slide: {
            whileHover: { x: 10 },
            whileTap: { x: -10 },
            transition: { duration: 0.2 }
        },
        fade: {
            whileHover: { opacity: 0.8 },
            whileTap: { opacity: 0.5 },
            transition: { duration: 0.2 }
        },
        float: {
            animate: {
                y: [0, -8, 0],
                transition: {
                    duration: 2,
                    repeat: Infinity,
                    repeatType: "reverse",
                    ease: "easeInOut"
                }
            },
            whileHover: { 
                scale: 1.05,
                y: -10 
            },
            whileTap: { 
                scale: 0.95,
                y: -5 
            }
        }
    };

    return animations[moveType] || animations.bounce;
};