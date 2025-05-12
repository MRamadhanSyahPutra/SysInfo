import { Link } from "@inertiajs/react";

const Form = ({ title, hrefBack, children }) => {
    return (
        <>
            <div className="relative overflow-x-auto">
                <table className="w-full text-sm text-left mx-auto rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th
                                scope="col"
                                className="px-6 py-3 flex justify-between"
                            >
                                {title}
                                <br />
                                <Link
                                    href={hrefBack}
                                    className="font-medium mr-5 block text-blue-600 dark:text-blue-500 hover:underline"
                                >
                                    Back
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="16"
                                        height="16"
                                        viewBox="0 0 24 24"
                                        className={"inline-block mb-[2px]"}
                                    >
                                        <g
                                            fill="none"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                        >
                                            <path
                                                strokeDasharray="16"
                                                strokeDashoffset="16"
                                                d="M5 12h13.5"
                                            >
                                                <animate
                                                    fill="freeze"
                                                    attributeName="stroke-dashoffset"
                                                    dur="0.2s"
                                                    values="16;0"
                                                />
                                            </path>
                                            <path
                                                strokeDasharray="10"
                                                strokeDashoffset="10"
                                                d="M19 12l-5 5M19 12l-5 -5"
                                            >
                                                <animate
                                                    fill="freeze"
                                                    attributeName="stroke-dashoffset"
                                                    begin="0.2s"
                                                    dur="0.2s"
                                                    values="10;0"
                                                />
                                            </path>
                                        </g>
                                    </svg>
                                </Link>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
                            <td>{children}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    );
};

export default Form;
