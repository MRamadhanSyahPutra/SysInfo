import { Link } from "@inertiajs/react";

const NavLinkP = ({ className = "", children, ...props }) => {
    return (
        <Link
            {...props}
            className={`block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white ${className}`}
        >
            {children}
        </Link>
    );
};

export default NavLinkP;
