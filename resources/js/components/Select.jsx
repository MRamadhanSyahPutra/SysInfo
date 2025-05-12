const Select = ({ children, name, label, className, value, ...props }) => {
    return (
        <>
            <label htmlFor={name} className="sr-only">
                {label}
            </label>
            <select
                {...props}
                id={name}
                name={name}
                value={value || ""}
                className={`block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer ${children}`}
            >
                <option value="" disabled>
                    {label}
                </option>
                {children}
            </select>
        </>
    );
};

export default Select;
