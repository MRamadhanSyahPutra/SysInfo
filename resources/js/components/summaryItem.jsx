import useOnScreen from "@/components/OnScreen";
import { useState, useEffect, useRef } from "react";

const AnimatedCounter = ({ end }) => {
    const [count, setCount] = useState(0);
    const ref = useRef();
    const isVisible = useOnScreen(ref);

    useEffect(() => {
        if (isVisible && count < end) {
            const interval = setInterval(() => {
                setCount((prev) => (prev < end ? prev + 1 : end));
            }, 20); // Waktu animasi
            return () => clearInterval(interval);
        }
    }, [isVisible, count, end]);

    return (
        <span
            className="text-paragraft bold text-[36px] md:text-[30px] xl:text-[26px]"
            ref={ref}
        >
            {count}
        </span>
    );
};

const SummaryItem = ({ children, className, count }) => {
    return (
        <>
            <div>
                <h1
                    className={`text-[36px] md:text-[30px] xl:text-[26px] text-stone-400 font-thin mb-5 ${className}`}
                >
                    {children}
                </h1>
                <AnimatedCounter end={count} />
                <hr />
            </div>
        </>
    );
};

export default SummaryItem;
