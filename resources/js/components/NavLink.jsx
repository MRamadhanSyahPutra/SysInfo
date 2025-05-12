import { Link } from "@inertiajs/react";

const NavLink = ({ children, className = "", active = false, ...props }) => {
    // const activeClass = active
    //     ? "block py-2 px-3 text-white bg-text rounded md:bg-transparent  md:text-orange  md:p-0 md:dark:text-blue-500"
    //     : "block py-2 px-3 text rounded hover:bg-transparent md:hover:text-hover md:p-0 dark:text-white md:dark:hover:text dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700";

    const activeClass = active ? "active" : "";
    return (
        <Link
            {...props}
            className={`block py-2 px-3 ${activeClass}  ${className}`}
        >
            {children}
        </Link>
    );
};

export default NavLink;
