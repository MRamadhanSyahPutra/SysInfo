import { useEffect } from "react";
import NavLink from "../components/NavLink";
import NavLinkP from "@/components/NavLinkP";
import { route } from "Ziggy-js";
import { Link } from "@inertiajs/react";
import { createPopper } from "@popperjs/core/lib/popper-lite";
import Swal from "sweetalert2";

const Navbar = ({ activePage, auth }) => {
    useEffect(() => {
        const navLinkColor = {
            nonScroll: [
                `text-white-nonScroll bg-text rounded-nonScrol md:bg-transparent-nonScroll md:text-orange md:p-0-nonScroll-active md:dark:text-blue-500`,
                `text rounded hover:bg-transparent md:hover:text-hover md:p-0-nonScroll dark:text-white md:dark:hover:text dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700`,
            ],
            scroll: [
                `text-white bg-text-scroll rounded md:bg-transparent-scroll md:text-scroll-active md:p-0-scroll-active md:dark:text-blue-500`,
                `text-scroll rounded hover:bg-transparent md:hover:text-scrol md:p-0-scroll dark:text-white md:dark:hover:text dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700`,
            ],
        };
        const navTitle = document.getElementById("title");
        const navLink = document.querySelectorAll("#navbar-user ul li a");

        const nav = document.getElementsByTagName("nav")[0];
        const cekButton = document.querySelector(
            '[data-collapse-toggle="navbar-user"]'
        );
        const navList = document.getElementById("navbar-user");

        navTitle.classList.add("text-gradient");

        if (!cekButton) return;

        const handleHidden = () => {
            navList.classList.toggle("hidden");
        };

        cekButton.addEventListener("click", handleHidden);

        const handleScroll = () => {
            if (window.scrollY > 0) {
                nav.classList.add("navbar");
                nav.classList.remove("bg-transparent");
                navTitle.classList.add("text-gradient-raplace");
                navTitle.classList.remove("text-gradient");
                navLink.forEach((e) => {
                    if (e.classList.contains("active")) {
                        e.classList.remove(
                            ...navLinkColor.nonScroll[0].split(" ")
                        );
                        e.classList.add(...navLinkColor.scroll[0].split(" "));
                        e.classList.remove(
                            ...navLinkColor.nonScroll[1].split(" ")
                        );
                        e.classList.remove(
                            ...navLinkColor.scroll[1].split(" ")
                        );
                    } else {
                        e.classList.remove(
                            ...navLinkColor.nonScroll[0].split(" ")
                        );
                        e.classList.remove(
                            ...navLinkColor.scroll[0].split(" ")
                        );
                        e.classList.remove(
                            ...navLinkColor.nonScroll[1].split(" ")
                        );
                        e.classList.add(...navLinkColor.scroll[1].split(" "));
                    }
                });
            } else {
                nav.classList.remove("navbar");
                nav.classList.add("bg-transparent");
                navTitle.classList.remove("text-gradient-raplace");
                navTitle.classList.add("text-gradient");
                navLink.forEach((e) => {
                    if (e.classList.contains("active")) {
                        e.classList.add(
                            ...navLinkColor.nonScroll[0].split(" ")
                        );
                        e.classList.remove(
                            ...navLinkColor.scroll[0].split(" ")
                        );
                        e.classList.remove(
                            ...navLinkColor.nonScroll[1].split(" ")
                        );
                        e.classList.remove(
                            ...navLinkColor.scroll[1].split(" ")
                        );
                    } else {
                        e.classList.remove(
                            ...navLinkColor.nonScroll[0].split(" ")
                        );
                        e.classList.remove(
                            ...navLinkColor.scroll[0].split(" ")
                        );
                        e.classList.add(
                            ...navLinkColor.nonScroll[1].split(" ")
                        );
                        e.classList.remove(
                            ...navLinkColor.scroll[1].split(" ")
                        );
                    }
                });
            }
        };

        document.addEventListener("scroll", handleScroll);

        navLink.forEach((e) => {
            if (e.classList.contains("active")) {
                e.classList.add(...navLinkColor.nonScroll[0].split(" "));
                e.classList.remove(...navLinkColor.nonScroll[1].split(" "));
            }

            if (!e.classList.contains("active")) {
                e.classList.remove(...navLinkColor.nonScroll[0].split(" "));
                e.classList.add(...navLinkColor.nonScroll[1].split(" "));
            }
        });
        return () => {
            cekButton.removeEventListener("click", handleHidden);
            document.removeEventListener("scroll", handleScroll);
        };
    }, []);

    useEffect(() => {
        const userMenuButton = document.getElementById("user-menu-button");
        const userDropDown = document.getElementById("user-dropdown");

        if (!userMenuButton || !userDropDown) return;

        const popperInstance = createPopper(userMenuButton, userDropDown, {
            placement: "bottom",
        });

        const toggleDropDown = () => {
            userDropDown.classList.toggle("hidden");
            if (!userDropDown.classList.contains("hidden")) {
                popperInstance.update();
            }
        };

        userMenuButton.addEventListener("click", toggleDropDown);

        const handleHidden = (e) => {
            if (
                !userMenuButton.contains(e.target) &&
                !userDropDown.contains(e.target)
            ) {
                userDropDown.classList.add("hidden");
            }
        };
        document.addEventListener("click", handleHidden);

        return () => {
            userMenuButton.removeEventListener("click", toggleDropDown);
            document.removeEventListener("click", handleHidden);
        };
    }, [auth]);

    const Logout = () => {
        if (auth.mhs) {
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
                        window.location.href = route("logout.mhs");
                    });
                }
            });
        }
        if (auth.admin || auth.dosen) {
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
        }
    };

    return (
        <nav className="bg-transparent border-gray-200 dark:bg-gray-900 fixed top-0 w-full z-50 shadow">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <Link
                    href={route("welcome")}
                    className="flex items-center space-x-3 rtl:space-x-reverse"
                >
                    <img
                        src="/images/icon-app.png"
                        className="h-8"
                        alt="System Information"
                    />
                    <span
                        className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white"
                        id="title"
                    >
                        SysInfo
                    </span>
                </Link>
                {auth?.mhs?.nama_lengkap ??
                auth?.dosen?.name ??
                auth?.admin?.name ? (
                    <>
                        <div className="flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                            <button
                                type="button"
                                className="flex text-sm bg-gray-800 rounded-full md:me-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
                                id="user-menu-button"
                                aria-expanded="false"
                                data-dropdown-toggle="user-dropdown"
                                data-dropdown-placement="bottom"
                            >
                                <span className="sr-only">Open user menu</span>
                                <img
                                    className="w-8 h-8 rounded-full"
                                    src={`${
                                        auth.mhs.jenis_kelamin === "pria"
                                            ? "/images/boy.png"
                                            : "/images/woman.png"
                                    }`}
                                    alt="user photo"
                                />
                            </button>

                            <div
                                className="z-50 hidden my-4 text-base list-none bg-white pop-profile divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600"
                                id="user-dropdown"
                            >
                                <div className="px-4 py-3">
                                    <span className="block text-sm text-gray-900 dark:text-white">
                                        {auth?.mhs?.nama_lengkap ??
                                            auth?.dosen?.name ??
                                            auth?.admin?.name ??
                                            "User not found"}
                                    </span>
                                    <span className="block text-sm  text-gray-500 truncate dark:text-gray-400">
                                        {auth?.mhs?.email ??
                                            auth?.dosen?.email ??
                                            auth?.admin?.email ??
                                            "User not found"}
                                    </span>
                                </div>
                                <ul
                                    className="py-2"
                                    aria-labelledby="user-menu-button"
                                >
                                    <li>
                                        <NavLinkP href="#">Dashboard</NavLinkP>
                                    </li>
                                    <li>
                                        <NavLinkP href="#">Settings</NavLinkP>
                                    </li>
                                    <li>
                                        <NavLinkP href="#">Earnings</NavLinkP>
                                    </li>
                                    <li>
                                        <NavLinkP href="#" onClick={Logout}>
                                            Sign out
                                        </NavLinkP>
                                    </li>
                                </ul>
                            </div>
                            <button
                                data-collapse-toggle="navbar-user"
                                type="button"
                                className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-transparent focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                                aria-controls="navbar-user"
                                aria-expanded="false"
                            >
                                <span className="sr-only">Open main menu</span>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="32"
                                    height="32"
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
                        </div>
                    </>
                ) : (
                    <>
                        <div className="flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                            <button
                                data-collapse-toggle="navbar-user"
                                type="button"
                                className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-transparent focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                                aria-controls="navbar-user"
                                aria-expanded="false"
                            >
                                <span className="sr-only">Open main menu</span>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="32"
                                    height="32"
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
                        </div>
                    </>
                )}

                <div
                    className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1 "
                    id="navbar-user"
                >
                    <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                        <li>
                            <NavLink
                                href={route("home")}
                                active={activePage === "home"}
                            >
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                href={route("about")}
                                active={activePage === "about"}
                            >
                                About
                            </NavLink>
                        </li>
                        {auth?.mhs || auth?.dosen || auth?.admin ? (
                            <></>
                        ) : (
                            <>
                                <li>
                                    <NavLink
                                        href={route("login")}
                                        active={activePage === "login"}
                                    >
                                        Login
                                    </NavLink>
                                </li>
                            </>
                        )}
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
