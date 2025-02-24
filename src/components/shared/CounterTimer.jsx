import { useEffect, useState } from "react";

const Countdown = () => {
    const calculateTimeLeft = () => {
        const eventDate = new Date("2025-02-19");
        const difference = eventDate - new Date();
        let timeLeft = {};

        if (difference > 0) {
        timeLeft = {
            Días: Math.floor(difference / (1000 * 60 * 60 * 24)),
            Horas: Math.floor((difference / (1000 * 60 * 60)) % 24),
            Minutos: Math.floor((difference / 1000 / 60) % 60),
        };
        }
        return timeLeft;
    };

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        const timer = setInterval(
            () => { setTimeLeft(calculateTimeLeft());
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    return (
        <div className="p-4 flex justify-center space-x-4 font-bold text-lg sm:text-xl">
            {Object.entries(timeLeft).map(([unit, value]) => (
                <div key={unit} className="flex flex-col items-center">
                <span className="bg-terracota text-white px-3 py-2 rounded-md text-lg sm:text-xl">
                    {value}
                </span>
                <span className="text-sm text-crema">{unit} </span>
                </div>
            ))}
        </div>
    );
};

export default Countdown;
