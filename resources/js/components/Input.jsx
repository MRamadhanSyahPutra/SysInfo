const Input = ({ type, name, className, ...props }) => {
    return (
        <input
            {...props}
            type={type}
            name={name}
            id={name}
            className={`input text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 peer ${className}`}
            placeholder=" "
        />
    );
};

export default Input;
