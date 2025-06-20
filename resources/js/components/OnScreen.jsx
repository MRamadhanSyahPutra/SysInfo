import { useState, useEffect } from "react";

const useOnScreen = (ref) => {
    const [isIntersecting, setIntersecting] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => setIntersecting(entry.isIntersecting),
            { threshold: 0.5 } // Aktif ketika 50% komponen terlihat
        );
        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, [ref]);

    return isIntersecting;
};

export default useOnScreen;
