import { route } from "Ziggy-js";
import SideLinkP from "@/components/SideLinkP";
import SideLink from "@/components/SideLink";
import { Link } from "@inertiajs/react";
import { useState, useEffect } from "react";
import { createPopper } from "@popperjs/core/lib/popper-lite";
import Swal from "sweetalert2";
import SidebarButtonList from "@/components/SidebarButtonList";

const Sidebar = ({ flash, status, children, auth }) => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    useEffect(() => {
        const buttonProfile = document.querySelector(
            '[data-dropdown-toggle="dropdown-user"]'
        );
        const dropDownUser = document.getElementById("dropdown-user");

        const popperProfile = createPopper(buttonProfile, dropDownUser, {
            placement: "bottom",
        });

        buttonProfile.addEventListener("click", (e) => {
            dropDownUser.classList.toggle("hidden");
            if (!dropDownUser.classList.contains("hidden")) {
                popperProfile.update();
            }
        });

        document.addEventListener("click", (e) => {
            if (
                !dropDownUser.contains(e.target) &&
                !buttonProfile.contains(e.target)
            ) {
                dropDownUser.classList.add("hidden");
            }
        });
        return () => {
            if (buttonProfile) {
                buttonProfile.removeEventListener("click", (e) => {
                    dropDownUser.classList.toggle("hidden");
                    popperProfile.destroy();
                });
            }
        };
    }, []);

    useEffect(() => {
        const buttonSidebar = document.querySelector(
            '[data-drawer-toggle="logo-sidebar"]'
        );
        const sidebar = document.getElementById("logo-sidebar");

        if (!buttonSidebar || !sidebar) {
            console.error(
                "Element buttonSidebar atau sidebar tidak ditemukan!"
            );
            return;
        }

        const handleClick = () => {
            setIsSidebarOpen((prev) => !prev);
        };

        buttonSidebar.addEventListener("click", handleClick);

        return () => {
            buttonSidebar.removeEventListener("click", handleClick);
        };
    }, []);

    useEffect(() => {
        if (flash.message) {
            const Toast = Swal.mixin({
                toast: true,
                position: "top-end",
                showConfirmButton: false,
                timer: 3000,
                timerProgressBar: true,
                didOpen: (toast) => {
                    toast.onmouseenter = Swal.stopTimer;
                    toast.onmouseleave = Swal.resumeTimer;
                },
            });
            Toast.fire({
                icon: "success",
                title: flash.message,
            });
        }
    }, [flash]);

    const Logout = () => {
        Swal.fire({
            title: "Keluar sekarang?",
            text: "Anda dapat masuk kembali kapan saja.",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Ya, keluar!",
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire({
                    title: "Anda telah keluar!",
                    text: "Anda berhasil keluar dari akun.",
                    icon: "success",
                }).then(() => {
                    window.location.href = route("Logout");
                });
            }
        });
    };

    return (
        <>
            <nav className="fixed top-0 z-50 w-full sidebar dark:bg-gray-800 dark:border-gray-700">
                <div className="px-3 py-3 lg:px-5 lg:pl-3">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center justify-start rtl:justify-end">
                            <button
                                data-drawer-target="logo-sidebar"
                                data-drawer-toggle="logo-sidebar"
                                aria-controls="logo-sidebar"
                                type="button"
                                className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                            >
                                <span className="sr-only">Open sidebar</span>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                >
                                    <g
                                        fill="none"
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                    >
                                        <path d="M5 5L19 19M5 19L19 5">
                                            <animate
                                                fill="freeze"
                                                attributeName="d"
                                                dur="0.4s"
                                                values="M5 5L19 19M5 19L19 5;M5 5L19 5M5 19L19 19"
                                            />
                                        </path>
                                        <path d="M12 12H12" opacity="0">
                                            <animate
                                                fill="freeze"
                                                attributeName="d"
                                                begin="0.2s"
                                                dur="0.4s"
                                                values="M12 12H12;M5 12H19"
                                            />
                                            <set
                                                fill="freeze"
                                                attributeName="opacity"
                                                begin="0.2s"
                                                to="1"
                                            />
                                        </path>
                                    </g>
                                </svg>
                            </button>
                            <Link
                                href={route("dashboard")}
                                className="flex ms-2 md:me-24"
                            >
                                <img
                                    src="/images/icon-app.png"
                                    className="h-8 me-3"
                                    alt="SysInfo Logo"
                                />
                                <span className="self-center text-xl font-semibold sm:text-2xl whitespace-nowrap text-dashboard dark:text-white">
                                    SysInfo
                                </span>
                            </Link>
                        </div>
                        <div className="flex items-center">
                            <div className="flex items-center ms-3">
                                <div>
                                    <button
                                        type="button"
                                        className="flex text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
                                        aria-expanded="false"
                                        data-dropdown-toggle="dropdown-user"
                                    >
                                        <span className="sr-only">
                                            Open user menu
                                        </span>
                                        <img
                                            className="w-8 h-8 rounded-full"
                                            src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                                            alt="user photo"
                                        />
                                    </button>
                                </div>
                                <div
                                    className="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded shadow dark:bg-gray-700 dark:divide-gray-600"
                                    id="dropdown-user"
                                >
                                    <div className="px-4 py-3" role="none">
                                        <p
                                            className="text-sm text-gray-900 dark:text-white"
                                            role="none"
                                        >
                                            {status.name}
                                        </p>
                                        <p
                                            className="text-sm font-medium text-gray-900 truncate dark:text-gray-300"
                                            role="none"
                                        >
                                            {status.email}
                                        </p>
                                    </div>
                                    <ul className="py-1" role="none">
                                        <li>
                                            <SideLinkP
                                                href={route("dashboard")}
                                            >
                                                Dashboard
                                            </SideLinkP>
                                        </li>
                                        <li>
                                            <SideLinkP href={route("profile")}>
                                                Profile
                                            </SideLinkP>
                                        </li>
                                        <li>
                                            <SideLinkP
                                                href="#"
                                                onClick={Logout}
                                            >
                                                Sign out
                                            </SideLinkP>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>

            <aside
                id="logo-sidebar"
                className={`fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform -translate-x-full sidebar border-r border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700 ${
                    isSidebarOpen ? "transform-none" : "-translate-x-full"
                }`}
                aria-hidden={!isSidebarOpen}
                aria-label="Sidebar"
                role={isSidebarOpen ? "dialog" : undefined}
            >
                <div className="h-full px-3 pb-4 overflow-y-auto bg-white dark:bg-gray-800">
                    <ul className="space-y-2 font-medium">
                        <li>
                            <SideLink href={route("dashboard")}>
                                <svg
                                    className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    viewBox="0 0 22 21"
                                >
                                    <path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z" />
                                    <path d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z" />
                                </svg>
                                <span className="ms-3">Dashboard</span>
                            </SideLink>
                        </li>
                        {/* Sidebar-list */}
                        <li>
                            <SidebarButtonList
                                index={"1"}
                                svg={
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="25"
                                        height="25"
                                        viewBox="0 0 24 24"
                                    >
                                        <g
                                            fill="currentColor"
                                            fillOpacity="0"
                                            className="fill-gray-500"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                        >
                                            <path
                                                strokeDasharray="20"
                                                strokeDashoffset="20"
                                                d="M12 5c1.66 0 3 1.34 3 3c0 1.66 -1.34 3 -3 3c-1.66 0 -3 -1.34 -3 -3c0 -1.66 1.34 -3 3 -3Z"
                                            >
                                                <animate
                                                    fill="freeze"
                                                    attributeName="stroke-dashoffset"
                                                    dur="0.4s"
                                                    values="20;0"
                                                />
                                            </path>
                                            <path
                                                strokeDasharray="36"
                                                strokeDashoffset="36"
                                                d="M12 14c4 0 7 2 7 3v2h-14v-2c0 -1 3 -3 7 -3Z"
                                            >
                                                <animate
                                                    fill="freeze"
                                                    attributeName="stroke-dashoffset"
                                                    begin="0.5s"
                                                    dur="0.5s"
                                                    values="36;0"
                                                />
                                            </path>
                                            <animate
                                                fill="freeze"
                                                attributeName="fill-opacity"
                                                begin="1.1s"
                                                dur="0.5s"
                                                values="0;1"
                                            />
                                        </g>
                                    </svg>
                                }
                                buttonText={"User"}
                            >
                                <li>
                                    <Link
                                        href={route("mahasiswas")}
                                        className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                                    >
                                        Mahasiswa
                                    </Link>
                                    {auth?.admin && (
                                        <Link
                                            href={route("dosens")}
                                            className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                                        >
                                            Dosen
                                        </Link>
                                    )}
                                </li>
                            </SidebarButtonList>
                        </li>
                        {/* End-sidebar-list */}
                        {/* Jurusan */}
                        <li>
                            <SideLink href={route("jurusan")}>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="25"
                                    height="25"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        fill="#000"
                                        d="M5 17v-7h2v7zm6 0v-7h2v7zm-9 4v-2h20v2zm15-4v-7h2v7zM2 8V6l10-5l10 5v2zm4.45-2h11.1zm0 0h11.1L12 3.25z"
                                    />
                                </svg>

                                <span className="flex-1 ms-3 whitespace-nowrap">
                                    Jurusan
                                </span>
                            </SideLink>
                        </li>
                        {/* Prodi */}
                        <li>
                            <SideLink href={route("prodi")}>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="25"
                                    height="25"
                                    viewBox="0 0 16 16"
                                >
                                    <path
                                        fill="#000"
                                        fillRule="evenodd"
                                        d="M14.5 2H9l-.35.15l-.65.64l-.65-.64L7 2H1.5l-.5.5v10l.5.5h5.29l.86.85h.7l.86-.85h5.29l.5-.5v-10zm-7 10.32l-.18-.17L7 12H2V3h4.79l.74.74zM14 12H9l-.35.15l-.14.13V3.7l.7-.7H14zM6 5H3v1h3zm0 4H3v1h3zM3 7h3v1H3zm10-2h-3v1h3zm-3 2h3v1h-3zm0 2h3v1h-3z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                                <span className="flex-1 ms-3 whitespace-nowrap">
                                    Prodi
                                </span>
                            </SideLink>
                        </li>
                        {/* Matakuliah */}
                        <li>
                            <SidebarButtonList
                                index={"2"}
                                svg={
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="19"
                                        height="19"
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
                                                fill="currentColor"
                                                fillOpacity="0"
                                                strokeDasharray="64"
                                                strokeDashoffset="64"
                                                d="M14 5h8c0.55 0 1 0.45 1 1v10c0 0.55 -0.45 1 -1 1h-16c-0.55 0 -1 -0.45 -1 -1v-11Z"
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
                                                d="M14 5h-9v0c0 0 0.45 0 1 0h6z"
                                                opacity="0"
                                            >
                                                <animate
                                                    fill="freeze"
                                                    attributeName="d"
                                                    begin="0.6s"
                                                    dur="0.2s"
                                                    values="M14 5h-9v0c0 0 0.45 0 1 0h6z;M14 5h-9v-1c0 -0.55 0.45 -1 1 -1h6z"
                                                />
                                                <set
                                                    fill="freeze"
                                                    attributeName="opacity"
                                                    begin="0.6s"
                                                    to="1"
                                                />
                                            </path>
                                            <path
                                                strokeDasharray="36"
                                                strokeDashoffset="36"
                                                d="M19 21h-17c-0.55 0 -1 -0.45 -1 -1v-13"
                                            >
                                                <animate
                                                    fill="freeze"
                                                    attributeName="stroke-dashoffset"
                                                    begin="1.3s"
                                                    dur="0.5s"
                                                    values="36;0"
                                                />
                                            </path>
                                        </g>
                                    </svg>
                                }
                                buttonText={"Matakuliah"}
                            >
                                <Link
                                    href={route("matakuliah")}
                                    className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                                >
                                    Matakuliah
                                </Link>
                                <Link
                                    href={route("mahasiswa.matakuliah")}
                                    className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                                >
                                    Mahasiswa
                                </Link>
                                {auth?.dosen && (
                                    <Link
                                        href={route(
                                            "dosen.matakuliah",
                                            auth?.dosen.id
                                        )}
                                        className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                                    >
                                        Dosen
                                    </Link>
                                )}
                            </SidebarButtonList>
                        </li>
                        {/* Class */}
                        <li>
                            {auth?.admin && (
                                <SideLink href={route("class.admin")}>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="22"
                                        height="22"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            fill="currentColor"
                                            fillRule="evenodd"
                                            d="M16.67 13.13C18.04 14.06 19 15.32 19 17v3h4v-3c0-2.18-3.57-3.47-6.33-3.87"
                                        />
                                        <circle
                                            cx="9"
                                            cy="8"
                                            r="4"
                                            fill="currentColor"
                                            fillRule="evenodd"
                                        />
                                        <path
                                            fill="currentColor"
                                            fillRule="evenodd"
                                            d="M15 12c2.21 0 4-1.79 4-4s-1.79-4-4-4c-.47 0-.91.1-1.33.24a5.98 5.98 0 0 1 0 7.52c.42.14.86.24 1.33.24m-6 1c-2.67 0-8 1.34-8 4v3h16v-3c0-2.66-5.33-4-8-4"
                                        />
                                    </svg>
                                    <span className="flex-1 ms-3 whitespace-nowrap">
                                        Class
                                    </span>
                                </SideLink>
                            )}
                            {auth?.dosen && (
                                <SideLink
                                    href={route("class.dosen", auth?.dosen.id)}
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="22"
                                        height="22"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            fill="currentColor"
                                            fillRule="evenodd"
                                            d="M16.67 13.13C18.04 14.06 19 15.32 19 17v3h4v-3c0-2.18-3.57-3.47-6.33-3.87"
                                        />
                                        <circle
                                            cx="9"
                                            cy="8"
                                            r="4"
                                            fill="currentColor"
                                            fillRule="evenodd"
                                        />
                                        <path
                                            fill="currentColor"
                                            fillRule="evenodd"
                                            d="M15 12c2.21 0 4-1.79 4-4s-1.79-4-4-4c-.47 0-.91.1-1.33.24a5.98 5.98 0 0 1 0 7.52c.42.14.86.24 1.33.24m-6 1c-2.67 0-8 1.34-8 4v3h16v-3c0-2.66-5.33-4-8-4"
                                        />
                                    </svg>
                                    <span className="flex-1 ms-3 whitespace-nowrap">
                                        Class
                                    </span>
                                </SideLink>
                            )}
                        </li>
                    </ul>
                </div>
            </aside>

            <div className="p-4 sm:ml-64">
                {/* Content */}
                {children}
            </div>
        </>
    );
};
export default Sidebar;
