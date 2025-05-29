import Sidebar from "@/Layout/Sidebar";
import { usePage } from "@inertiajs/react";
import Card from "@/components/ui/Card";
import { route } from "Ziggy-js";

const Index = () => {
    const { dosen, admin, flash } = usePage().props;

    const user = dosen || admin || "user not found";

    return (
        <>
            <Sidebar status={user} flash={flash}>
                <div className="grid grid-cols-4 grid-rows-3 xl:grid-rows-8 gap-4 mt-[65px]">
                    {/* Matakuliah */}
                    <div className="col-span-4 row-span-1 lg:col-span-2 xl:col-span-2 xl:row-span-3 flex justify-center items-center ">
                        <Card
                            title={"Matakuliah"}
                            href={route("matakuliah")}
                            className={"hover:bg-cyan-100"}
                            svg={
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="32"
                                    height="32"
                                    viewBox="0 0 24 24"
                                >
                                    <mask id="lineMdFileDocumentFilled0">
                                        <g
                                            fill="none"
                                            stroke="#6200ea"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                        >
                                            <path
                                                fill="#6200ea"
                                                fillOpacity="0"
                                                strokeDasharray="64"
                                                strokeDashoffset="64"
                                                d="M13.5 3l5.5 5.5v11.5c0 0.55 -0.45 1 -1 1h-12c-0.55 0 -1 -0.45 -1 -1v-16c0 -0.55 0.45 -1 1 -1Z"
                                            >
                                                <animate
                                                    fill="freeze"
                                                    attributeName="fill-opacity"
                                                    begin="0.6s"
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
                                                fill="#000"
                                                stroke="#000"
                                                d="M14.5 3.5l0 4.5l4.5 0z"
                                                opacity="0"
                                            >
                                                <set
                                                    fill="freeze"
                                                    attributeName="opacity"
                                                    begin="0.6s"
                                                    to="1"
                                                />
                                            </path>
                                            <path
                                                d="M13.5 3l5.5 5.5"
                                                opacity="0"
                                            >
                                                <set
                                                    fill="freeze"
                                                    attributeName="opacity"
                                                    begin="0.6s"
                                                    to="1"
                                                />
                                            </path>
                                            <path
                                                stroke="#000"
                                                strokeDasharray="12"
                                                strokeDashoffset="12"
                                                d="M7 13h10"
                                            >
                                                <animate
                                                    fill="freeze"
                                                    attributeName="stroke-dashoffset"
                                                    begin="1.1s"
                                                    dur="0.2s"
                                                    values="12;0"
                                                />
                                            </path>
                                            <path
                                                stroke="#000"
                                                strokeDasharray="8"
                                                strokeDashoffset="8"
                                                d="M7 17h7"
                                            >
                                                <animate
                                                    fill="freeze"
                                                    attributeName="stroke-dashoffset"
                                                    begin="1.3s"
                                                    dur="0.2s"
                                                    values="8;0"
                                                />
                                            </path>
                                        </g>
                                    </mask>
                                    <rect
                                        className=" fill-cyan-600"
                                        width="24"
                                        height="24"
                                        fill="#000"
                                        mask="url(#lineMdFileDocumentFilled0)"
                                    />
                                </svg>
                            }
                        >
                            <p className="font-normal text-gray-700 dark:text-gray-400">
                                Lihat dan kelola semua matakuliah dalam sistem.
                            </p>
                            <div className="text-cyan-600 text-[18px] font-semibold mt-4 ">
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

                    {/* Mahasiswa */}
                    <div className="col-span-4 row-span-1 lg:col-span-2 xl:col-span-2 xl:row-span-3 flex justify-center items-center ">
                        <Card
                            title={"Mahasiswa"}
                            href={route("mahasiswa.matakuliah")}
                            className={"hover:bg-blue-100"}
                            svg={
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="40"
                                    height="40"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        className="fill-blue-600"
                                        fill="currentColor"
                                        d="M18 10.5V6l-2.11 1.06A4 4 0 0 1 12 12a4 4 0 0 1-3.89-4.94L5 5.5L12 2l7 3.5v5zM12 9l-2-1c0 1.1.9 2 2 2s2-.9 2-2zm2.75-3.58L12.16 4.1L9.47 5.47l2.6 1.32zM12 13c2.67 0 8 1.33 8 4v3H4v-3c0-2.67 5.33-4 8-4m0 1.9c-3 0-6.1 1.46-6.1 2.1v1.1h12.2V17c0-.64-3.13-2.1-6.1-2.1"
                                    />
                                </svg>
                            }
                        >
                            <p className="font-normal text-gray-700 dark:text-gray-400">
                                Lihat data mahasiswa, pilih matakuliah, dan
                                daftarkan mahasiswa ke matakuliah.
                            </p>
                            <div className="text-blue-600 text-[18px] font-semibold mt-4 ">
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

                    {/* Dosen */}
                    <div className="col-span-4 row-span-1 lg:col-span-2 xl:col-span-2 xl:row-span-3 flex justify-center items-center ">
                        <Card
                            title={"Dosen"}
                            href={route("dosen.matakuliah", user.id)}
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
                                Lihat biodata lengkap dosen, daftar matakuliah
                                yang diajarkan, dan tambahkan matakuliah baru.
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
                </div>
            </Sidebar>
        </>
    );
};

export default Index;
