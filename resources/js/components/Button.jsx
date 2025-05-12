const Button = ({ children, className, type, ...props }) => {
    return (
        <button
            {...props}
            type={type}
            className={`btn-greenc font-medium rounded-[6px] me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 ${className}`}
        >
            {children}
        </button>
    );
};

export default Button;
