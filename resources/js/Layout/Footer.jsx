const Footer = () => {
    return (
        <footer className="bg-transparent rounded-lg shadow-lg m-4 dark:bg-gray-800 fixed bottom-0 z-40 w-10/12 sm:w-8/12 md:w-7/12 left-0 right-0 mx-auto">
            <div className="w-full mx-auto max-w-screen-xl p-4 flex justify-between items-center">
                <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
                    © 2024{" "}
                    <a
                        href="https://www.linkedin.com/in/muhammad-ramadhan-syah-putra/"
                        className="hover:underline"
                    >
                        Madan
                    </a>
                </span>
                <ul className="flex flex-wrap items-center  gap-3 mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
                    <li>
                        <a
                            href="https://www.facebook.com/muhammad.r.putra.1253/"
                            className="text-gray-500 hover:text-blue-500 dark:hover:text-white"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="22"
                                height="22"
                                viewBox="0 0 24 24"
                            >
                                <g
                                    fill="none"
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="3"
                                >
                                    <path
                                        strokeDasharray="24"
                                        strokeDashoffset="24"
                                        d="M17 4l-2 0c-2.5 0 -4 1.5 -4 4v12"
                                    >
                                        <animate
                                            fill="freeze"
                                            attributeName="stroke-dashoffset"
                                            dur="0.4s"
                                            values="24;0"
                                        />
                                    </path>
                                    <path
                                        strokeDasharray="8"
                                        strokeDashoffset="8"
                                        d="M8 12h7"
                                    >
                                        <animate
                                            fill="freeze"
                                            attributeName="stroke-dashoffset"
                                            begin="0.5s"
                                            dur="0.2s"
                                            values="8;0"
                                        />
                                    </path>
                                </g>
                            </svg>
                            <span className="sr-only">Facebook page</span>
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://github.com/MRamadhanSyahPutra"
                            className="text-gray-500 hover:text-indigo-700 dark:hover:text-white "
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="22"
                                height="22"
                                viewBox="0 0 24 24"
                            >
                                <mask
                                    id="lineMdGithubLoop0"
                                    width="24"
                                    height="24"
                                    x="0"
                                    y="0"
                                >
                                    <g fill="#fff">
                                        <ellipse
                                            cx="9.5"
                                            cy="9"
                                            rx="1.5"
                                            ry="1"
                                        />
                                        <ellipse
                                            cx="14.5"
                                            cy="9"
                                            rx="1.5"
                                            ry="1"
                                        />
                                    </g>
                                </mask>
                                <g
                                    fill="none"
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                >
                                    <path
                                        strokeDasharray="32"
                                        strokeDashoffset="32"
                                        d="M12 4c1.67 0 2.61 0.4 3 0.5c0.53 -0.43 1.94 -1.5 3.5 -1.5c0.34 1 0.29 2.22 0 3c0.75 1 1 2 1 3.5c0 2.19 -0.48 3.58 -1.5 4.5c-1.02 0.92 -2.11 1.37 -3.5 1.5c0.65 0.54 0.5 1.87 0.5 2.5c0 0.73 0 3 0 3M12 4c-1.67 0 -2.61 0.4 -3 0.5c-0.53 -0.43 -1.94 -1.5 -3.5 -1.5c-0.34 1 -0.29 2.22 0 3c-0.75 1 -1 2 -1 3.5c0 2.19 0.48 3.58 1.5 4.5c1.02 0.92 2.11 1.37 3.5 1.5c-0.65 0.54 -0.5 1.87 -0.5 2.5c0 0.73 0 3 0 3"
                                    >
                                        <animate
                                            fill="freeze"
                                            attributeName="stroke-dashoffset"
                                            dur="0.7s"
                                            values="32;0"
                                        />
                                    </path>
                                    <path
                                        strokeDasharray="10"
                                        strokeDashoffset="10"
                                        d="M9 19c-1.406 0-2.844-.563-3.688-1.188C4.47 17.188 4.22 16.157 3 15.5"
                                    >
                                        <animate
                                            attributeName="d"
                                            dur="3s"
                                            repeatCount="indefinite"
                                            values="M9 19c-1.406 0-2.844-.563-3.688-1.188C4.47 17.188 4.22 16.157 3 15.5;M9 19c-1.406 0-3-.5-4-.5-.532 0-1 0-2-.5;M9 19c-1.406 0-2.844-.563-3.688-1.188C4.47 17.188 4.22 16.157 3 15.5"
                                        />
                                        <animate
                                            fill="freeze"
                                            attributeName="stroke-dashoffset"
                                            begin="0.8s"
                                            dur="0.2s"
                                            values="10;0"
                                        />
                                    </path>
                                </g>
                                <rect
                                    width="8"
                                    height="4"
                                    x="8"
                                    y="11"
                                    fill="currentColor"
                                    mask="url(#lineMdGithubLoop0)"
                                >
                                    <animate
                                        attributeName="y"
                                        dur="10s"
                                        keyTimes="0;0.45;0.46;0.54;0.55;1"
                                        repeatCount="indefinite"
                                        values="11;11;7;7;11;11"
                                    />
                                </rect>
                            </svg>
                            <span className="sr-only">GitHub account</span>
                        </a>
                    </li>
                </ul>
            </div>
        </footer>
    );
};

export default Footer;
