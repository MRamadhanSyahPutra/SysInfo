import { Link } from "@inertiajs/react";

const SideLink = ({ className, children, ...props }) => {
    return (
        <>
            <Link
                {...props}
                className={`flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group ${className}`}
            >
                {children}
            </Link>
        </>
    );
};

export default SideLink;
