import { useEffect, useRef, useState } from "react";
import ApexCharts from "apexcharts";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";

const CardDB = ({ kelas }) => {
    // Amount
    const [amount, setAmount] = useState(7);
    const amount7Ref = useRef(null);
    const amount14Ref = useRef(null);
    const amount21Ref = useRef(null);

    //Card-diagram
    useEffect(() => {
        // Counts
        const handleTargetCounts = (e) => {
            if (amount7Ref.current && amount7Ref.current.contains(e.target)) {
                setAmount(7);
            } else if (
                amount14Ref.current &&
                amount14Ref.current.contains(e.target)
            ) {
                setAmount(14);
            } else if (
                amount21Ref.current &&
                amount21Ref.current.contains(e.target)
            ) {
                setAmount(21);
            }
        };
        document.addEventListener("click", handleTargetCounts);

        const options = {
            colors: ["#1A56DB", "#FDBA8C"],
            series: [
                {
                    name: "Id Dosen",
                    color: "#1A56DB",
                    data: kelas.slice(0, amount).map((kelasItem) => ({
                        x: kelasItem.name,
                        y: kelasItem.dosen_id,
                    })),
                },
                {
                    name: "Daya tampung",
                    color: "#FDBA8C",
                    data: kelas.slice(0, amount).map((kelasItem) => ({
                        x: kelasItem.name,
                        y: kelasItem.data_tampung,
                    })),
                },
            ],
            chart: {
                type: "bar",
                height: "320px",
                fontFamily: "Inter, sans-serif",
                toolbar: {
                    show: false,
                },
            },
            plotOptions: {
                bar: {
                    horizontal: false,
                    columnWidth: "70%",
                    borderRadiusApplication: "end",
                    borderRadius: 8,
                },
            },
            tooltip: {
                shared: true,
                intersect: false,
                style: {
                    fontFamily: "Inter, sans-serif",
                },
            },
            states: {
                hover: {
                    filter: {
                        type: "darken",
                        value: 1,
                    },
                },
            },
            stroke: {
                show: true,
                width: 0,
                colors: ["transparent"],
            },
            grid: {
                show: false,
                strokeDashArray: 4,
                padding: {
                    left: 2,
                    right: 2,
                    top: -14,
                },
            },
            dataLabels: {
                enabled: false,
            },
            legend: {
                show: false,
            },
            xaxis: {
                floating: false,
                labels: {
                    show: true,
                    style: {
                        fontFamily: "Inter, sans-serif",
                        cssClass:
                            "text-xs font-normal fill-gray-500 dark:fill-gray-400",
                    },
                },
                axisBorder: {
                    show: false,
                },
                axisTicks: {
                    show: false,
                },
            },
            yaxis: {
                show: false,
            },
            fill: {
                opacity: 1,
            },
        };

        if (
            document.getElementById("column-chart") &&
            typeof ApexCharts !== "undefined"
        ) {
            const chart = new ApexCharts(
                document.getElementById("column-chart"),
                options
            );
            chart.render();

            return () => {
                chart.destroy();
                document.removeEventListener("click", handleTargetCounts);
            };
        }
    }, [amount]);

    return (
        <>
            <div className="w-full h-full bg-white rounded-lg shadow-sm dark:bg-gray-800 p-4 md:p-6">
                {" "}
                <div className="flex justify-between pb-4 mb-4 border-b border-gray-200 dark:border-gray-700">
                    {" "}
                    <div className="flex items-center">
                        {" "}
                        <div className="w-12 h-12 rounded-lg bg-gray-100 dark:bg-gray-700 flex items-center justify-center me-3">
                            {" "}
                            <svg
                                className="w-6 h-6 text-gray-500 dark:text-gray-400"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 20 19"
                            >
                                {" "}
                                <path d="M14.5 0A3.987 3.987 0 0 0 11 2.1a4.977 4.977 0 0 1 3.9 5.858A3.989 3.989 0 0 0 14.5 0ZM9 13h2a4 4 0 0 1 4 4v2H5v-2a4 4 0 0 1 4-4Z" />{" "}
                                <path d="M5 19h10v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2ZM5 7a5.008 5.008 0 0 1 4-4.9 3.988 3.988 0 1 0-3.9 5.859A4.974 4.974 0 0 1 5 7Zm5 3a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm5-1h-.424a5.016 5.016 0 0 1-1.942 2.232A6.007 6.007 0 0 1 17 17h2a1 1 0 0 0 1-1v-2a5.006 5.006 0 0 0-5-5ZM5.424 9H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h2a6.007 6.007 0 0 1 4.366-5.768A5.016 5.016 0 0 1 5.424 9Z" />{" "}
                            </svg>{" "}
                        </div>{" "}
                        <div>
                            {" "}
                            <h5 className="leading-none text-2xl font-bold text-gray-900 dark:text-white pb-1">
                                {" "}
                                Class{" "}
                            </h5>{" "}
                            <p className="text-sm font-normal text-gray-500 dark:text-gray-400">
                                {" "}
                                All{" "}
                            </p>{" "}
                        </div>{" "}
                    </div>{" "}
                    <div>
                        {/* Menu-drop-down */}
                        <Menu
                            as="div"
                            className="relative inline-block text-left"
                        >
                            <div>
                                <MenuButton className="inline-flex items-center ada justify-center text-gray-500 w-8 h-8 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm">
                                    <svg
                                        className="w-3.5 h-3.5 text-gray-800 dark:text-white"
                                        aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="currentColor"
                                        viewBox="0 0 16 3"
                                    >
                                        <path d="M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z" />
                                    </svg>
                                    <span className="sr-only">
                                        Open dropdown
                                    </span>
                                </MenuButton>
                            </div>

                            <MenuItems
                                transition
                                className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black/5 transition focus:outline-hidden data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
                            >
                                <div className="py-1">
                                    <MenuItem>
                                        <button
                                            ref={amount7Ref}
                                            type="button"
                                            className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden"
                                        >
                                            7 Counts
                                        </button>
                                    </MenuItem>
                                    <MenuItem>
                                        <button
                                            ref={amount14Ref}
                                            type="button"
                                            className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden"
                                        >
                                            14 Counts
                                        </button>
                                    </MenuItem>
                                    <MenuItem>
                                        <button
                                            ref={amount21Ref}
                                            type="button"
                                            className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden"
                                        >
                                            21 Counts
                                        </button>
                                    </MenuItem>
                                </div>
                            </MenuItems>
                        </Menu>
                        {/* End-menu-drop-down */}
                    </div>{" "}
                </div>{" "}
                <div className="grid grid-cols-2">
                    {" "}
                    <dl className="flex items-center">
                        {" "}
                        <dt className="text-gray-500 dark:text-gray-400 text-sm font-normal me-1">
                            {" "}
                            {kelas.length} Data In Total
                        </dt>{" "}
                    </dl>{" "}
                </div>{" "}
                <div id="column-chart"></div>{" "}
                <div className="flex border-gray-200 border-t dark:border-gray-700 justify-end">
                    {" "}
                    {/* Menu-drop-down-day */}
                    <a
                        href="#"
                        className="uppercase mt-5 text-sm font-semibold inline-flex items-center rounded-lg text-blue-600 hover:text-blue-700 dark:hover:text-blue-500  hover:bg-gray-100 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 px-3 py-2"
                    >
                        Leads Report
                        <svg
                            className="w-2.5 h-2.5 ms-1.5 rtl:rotate-180"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 6 10"
                        >
                            <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="m1 9 4-4-4-4"
                            />
                        </svg>
                    </a>
                    {/* End-menu-drop-down-day */}
                </div>{" "}
            </div>
        </>
    );
};

export default CardDB;
