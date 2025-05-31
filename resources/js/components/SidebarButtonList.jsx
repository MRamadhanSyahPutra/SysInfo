import { useState } from "react";

const SidebarButtonList = ({ svg, buttonText, children, index }) => {
    const [isSidebarList, setIsSibarList] = useState(false);

    const handleClick = () => {
        setIsSibarList((prev) => !prev);
    };

    return (
        <>
            <button
                type="button"
                onClick={handleClick}
                className="flex items-center w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                aria-controls={`dropdown-example-${index}`}
                data-collapse-toggle={`dropdown-example-${index}`}
                aria-expanded={isSidebarList}
                key={index}
            >
                {svg}
                <span className="flex-1 ms-3 text-left rtl:text-right whitespace-nowrap">
                    {buttonText}
                </span>
                <svg
                    className="w-3 h-3"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 10 6"
                >
                    <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="m1 1 4 4 4-4"
                    />
                </svg>
            </button>
            <ul
                id={`dropdown-example-${index}`}
                className={`${!isSidebarList ? "hidden" : ""} py-2 space-y-2 `}
            >
                {children}
            </ul>
        </>
    );
};

export default SidebarButtonList;
