import { Link } from "@inertiajs/react";

const Card = ({ title, svg, className, children, ...props }) => {
    return (
        <>
            <Link
                {...props}
                className={`block max-w-sm p-6 bg-white border border-gray-200 rounded-xl shadow-sm ${className} dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 ${className}`}
            >
                {svg}
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {title}
                </h5>
                {children}
            </Link>
        </>
    );
};

export default Card;
