import Card from "@/components/ui/Card";
import Sidebar from "@/Layout/Sidebar";
import { usePage } from "@inertiajs/react";
import { route } from "Ziggy-js";

const Index = () => {
    const { dosen, admin, flash, auth } = usePage().props;
    if (!auth) return null;

    const user = dosen || admin || "user not found";

    return (
        <>
            <Sidebar status={user} flash={flash} auth={auth}>
                <div className="grid grid-cols-4 grid-rows-12 xl:grid-rows-4 gap-4 mt-[65px]">
                    {/* Class */}
                    {auth.admin && (
                        <div className="col-span-4 row-span-1 lg:col-span-2 xl:col-span-2 xl:row-span-3 flex justify-center items-center ">
                            <Card
                                title={"Class data"}
                                href={route("class.admin")}
                                className={"hover:bg-green-100"}
                                svg={
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="32"
                                        height="32"
                                        viewBox="0 0 24 24"
                                    >
                                        <g
                                            fill="none"
                                            stroke="#057A55"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                        >
                                            <path
                                                className="fill-green-600"
                                                fill="currentColor"
                                                fillOpacity="0"
                                                strokeDasharray="64"
                                                strokeDashoffset="64"
                                                d="M12 7h8c0.55 0 1 0.45 1 1v10c0 0.55 -0.45 1 -1 1h-16c-0.55 0 -1 -0.45 -1 -1v-11Z"
                                            >
                                                <animate
                                                    fill="freeze"
                                                    attributeName="fill-opacity"
                                                    begin="0.8s"
                                                    dur="0.5s"
                                                    values="0;1"
                                                />
                                                <animate
                                                    fill="freeze"
                                                    attributeName="stroke-dashoffset"
                                                    dur="0.6s"
                                                    values="64;0"
                                                />
                                            </path>
                                            <path
                                                d="M12 7h-9v0c0 0 0.45 0 1 0h6z"
                                                opacity="0"
                                            >
                                                <animate
                                                    fill="freeze"
                                                    attributeName="d"
                                                    begin="0.6s"
                                                    dur="0.2s"
                                                    values="M12 7h-9v0c0 0 0.45 0 1 0h6z;M12 7h-9v-1c0 -0.55 0.45 -1 1 -1h6z"
                                                />
                                                <set
                                                    fill="freeze"
                                                    attributeName="opacity"
                                                    begin="0.6s"
                                                    to="1"
                                                />
                                            </path>
                                        </g>
                                    </svg>
                                }
                            >
                                <p className="font-normal text-gray-700 dark:text-gray-400">
                                    Lihat dan kelola semua kelas dalam sistem.
                                </p>
                                <div className="text-green-600 text-[18px] font-semibold mt-4 ">
                                    View more
                                    <div className=" inline-block ml-1 -mb-[8px]">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="25"
                                            height="25"
                                            viewBox="0 0 24 24"
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
                                    </div>
                                </div>
                            </Card>
                        </div>
                    )}
                    {/* Dosen */}
                    {auth.dosen && (
                        <div
                            className={`col-span-4 row-span-1 lg:col-span-2 xl:col-span-2 xl:row-span-3 ${
                                auth.dosen ? "" : "xl:col-start-3"
                            } flex justify-center items-center`}
                        >
                            <Card
                                title={"Class Dosen"}
                                href={route("class.dosen", user.id)}
                                className={"hover:bg-indigo-100"}
                                svg={
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="40"
                                        height="40"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            className="fill-indigo-600"
                                            fill="currentColor"
                                            d="M16.36 12.76C18.31 13.42 20 14.5 20 16v5H4v-5c0-1.5 1.69-2.58 3.65-3.24L8.27 14l.23.5c-1.5.46-2.6 1.12-2.6 1.5v3.1h4.22l.88-5.07l-.94-1.88c.62-.07 1.27-.12 1.94-.12s1.32.05 1.94.12L13 14.03l.88 5.07h4.22V16c0-.38-1.1-1.04-2.6-1.5l.23-.5zM12 5c-1.1 0-2 .9-2 2s.9 2 2 2s2-.9 2-2s-.9-2-2-2m0 6c-2.21 0-4-1.79-4-4s1.79-4 4-4s4 1.79 4 4s-1.79 4-4 4"
                                        />
                                    </svg>
                                }
                            >
                                <p className="font-normal text-gray-700 dark:text-gray-400">
                                    Lihat daftar kelas yang diajar oleh dosen.
                                </p>
                                <div className="text-indigo-600 text-[18px] font-semibold mt-4 ">
                                    View more
                                    <div className=" inline-block ml-1 -mb-[8px]">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="25"
                                            height="25"
                                            viewBox="0 0 24 24"
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
                                    </div>
                                </div>
                            </Card>
                        </div>
                    )}
                </div>
            </Sidebar>
        </>
    );
};

export default Index;
