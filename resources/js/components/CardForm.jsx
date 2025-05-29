import { Link } from "@inertiajs/react";
import { route } from "Ziggy-js";

const CardForm = ({
    addRouteBack,
    firstPlace,
    secondPlace,
    subTitle,
    children,
}) => {
    return (
        <>
            <div className="grid grid-cols-5 grid-rows-1 gap-4 xl:grid-rows-5 xl:gap-4 bg-transparent shadow p-10 rounded-3xl ">
                <div className="col-span-5 row-span-2 xl:col-span-2 xl:row-span-5 ">
                    <Link
                        href={addRouteBack}
                        className="font-medium mr-5 inline-block text-blue-600 dark:text-blue-500 hover:underlin"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            className="inline-block mb-[7px]"
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
                                    d="M19 12h-13.5"
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
                                    d="M5 12l5 5M5 12l5 -5"
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
                        <p className="text-[20px] inline-block">Back</p>
                    </Link>
                    {firstPlace}
                </div>
                <div className="col-span-5 row-span-2 xl:col-span-3 xl:row-span-5 xl:col-start-3 ">
                    {secondPlace}
                    <hr />

                    <h2 className="mb-5 text-lg font-semibold text-gray-900 dark:text-white mt-2">
                        {subTitle}
                    </h2>
                    {children}
                </div>
            </div>
        </>
    );
};

export default CardForm;
