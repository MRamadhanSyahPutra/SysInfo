import Sidebar from "@/Layout/Sidebar";
import { usePage } from "@inertiajs/react";
import Card from "@/components/ui/Card";
import { route } from "Ziggy-js";

const UsersIndex = () => {
    const { flash, dosen, admin, auth } = usePage().props;

    const user = dosen || admin || "user not found";

    return (
        <>
            <Sidebar flash={flash} status={user}>
                <div className="grid grid-cols-4 grid-rows-12 xl:grid-rows-4 gap-4 mt-[65px]">
                    {/* Mahasiswa */}
                    <div className="col-span-4 row-span-1 lg:col-span-2 xl:col-span-2 xl:row-span-3 flex justify-center items-center ">
                        <Card
                            title={"Mahasiswa"}
                            href={route("mahasiswas")}
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
                                Lihat data lengkap mahasiswa termasuk NIM,
                                email, alamat, jenis kelamin, kelas, dan
                                lainnya.
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
                    {auth.can.viewAnyDosen && (
                        <div className="col-span-4 row-span-1 lg:col-span-2 xl:col-span-2 xl:row-span-3 xl:col-start-3 flex justify-center items-center ">
                            <Card
                                title={"Dosen"}
                                href={route("dosens")}
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
                                    Tampilkan informasi dosen meliputi NID,
                                    email, alamat, nomor telepon, prodi, dan
                                    lainnya.
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

export default UsersIndex;
