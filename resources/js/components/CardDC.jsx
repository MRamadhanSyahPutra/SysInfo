import ApexCharts from "apexcharts";
import { useEffect, useRef, useLayoutEffect } from "react";
import { route } from "Ziggy-js";

const CardDC = ({ prodi }) => {
    const chartRef = useRef(null);
    const svgRef = useRef(null);

    const TI = prodi.filter((item) => item.jurusan_id === 1);
    const MdB = prodi.filter((item) => item.jurusan_id === 2);
    const TE = prodi.filter((item) => item.jurusan_id === 3);
    const TM = prodi.filter((item) => item.jurusan_id === 4);

    useLayoutEffect(() => {
        const getChartOptions = () => ({
            series: [TI.length, MdB.length, TE.length, TM.length],
            colors: ["#58B292", "#5083C0", "#FC5152", "#AF7AFC"],
            chart: {
                height: 420,
                width: "100%",
                type: "pie",
            },
            stroke: {
                colors: ["white"],
            },
            plotOptions: {
                pie: {
                    size: "100%",
                    dataLabels: {
                        offset: -25,
                    },
                },
            },
            labels: [
                TI[1].jurusan.name,
                MdB[1].jurusan.name,
                TE[1].jurusan.name,
                TM[1].jurusan.name,
            ],
            dataLabels: {
                enabled: true,
                style: {
                    fontFamily: "Inter, sans-serif",
                },
            },
            legend: {
                position: "bottom",
                fontFamily: "Inter, sans-serif",
            },
            yaxis: {
                labels: {
                    formatter: (value) => value + "%",
                },
            },
            xaxis: {
                labels: {
                    formatter: (value) => value + "%",
                },
                axisTicks: {
                    show: false,
                },
                axisBorder: {
                    show: false,
                },
            },
        });

        const chartContainer = chartRef.current;

        if (chartContainer && typeof ApexCharts !== "undefined") {
            const chart = new ApexCharts(chartContainer, getChartOptions());
            chart.render();

            return () => {
                chart.destroy();
            };
        }
    }, []);

    useEffect(() => {
        import("flowbite").then(({ Popover }) => {
            const targetEl = document.getElementById("chart-info");
            const triggerEl = svgRef.current;

            if (targetEl && triggerEl) {
                new Popover(targetEl, triggerEl, {
                    placement: "bottom",
                    triggerType: "click",
                });
            }
        });
    }, []);

    return (
        <>
            <div className="w-full bg-white rounded-lg shadow-sm dark:bg-gray-800 p-4 md:p-6">
                <div className="flex justify-between items-start w-full">
                    <div className="flex-col items-center">
                        <div className="flex items-center mb-1">
                            <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white me-1">
                                Prodi
                            </h5>
                            <svg
                                ref={svgRef}
                                data-popover-target="chart-info"
                                data-popover-placement="bottom"
                                className="w-3.5 h-3.5 text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white cursor-pointer ms-1"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                            >
                                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm0 16a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm1-5.034V12a1 1 0 0 1-2 0v-1.418a1 1 0 0 1 1.038-.999 1.436 1.436 0 0 0 1.488-1.441 1.501 1.501 0 1 0-3-.116.986.986 0 0 1-1.037.961 1 1 0 0 1-.96-1.037A3.5 3.5 0 1 1 11 11.466Z" />
                            </svg>
                            <div
                                data-popover
                                id="chart-info"
                                role="tooltip"
                                className="absolute z-10 invisible inline-block text-sm text-gray-500 transition-opacity duration-300 bg-white border border-gray-200 rounded-lg shadow-xs opacity-0 w-72 dark:bg-gray-800 dark:border-gray-600 dark:text-gray-400"
                            >
                                <div className="p-3 space-y-2">
                                    <h3 className="font-semibold text-gray-900 dark:text-white">
                                        Prodi - Program Studi
                                    </h3>
                                    <p>
                                        Report membantu menavigasi daftar
                                        Program Studi (Prodi) yang tersedia
                                        dalam sistem. Setiap Prodi terhubung
                                        dengan data kepala program studi serta
                                        jurusan induknya. Idealnya, struktur ini
                                        memudahkan dalam memantau pertumbuhan,
                                        pengelolaan, dan penyusunan administrasi
                                        akademik berdasarkan bidang studi
                                        masing-masing.
                                    </p>
                                    <h3 className="font-semibold text-gray-900 dark:text-white">
                                        Calculation
                                    </h3>
                                    <p>
                                        Untuk setiap entri Prodi, informasi
                                        berikut dihimpun:
                                    </p>
                                    <ul>
                                        <li>
                                            <b>Name: </b>Nama program studi.
                                        </li>
                                        <li>
                                            <b>Kepala Prodi: </b>Nama kepala
                                            program studi yang bertanggung
                                            jawab.
                                        </li>
                                        <li>
                                            <b>Jurusan ID: </b>Identifier
                                            numerik yang menghubungkan Prodi
                                            dengan Jurusan.
                                        </li>
                                    </ul>
                                    <a
                                        href={route("prodi")}
                                        className="flex items-center font-medium text-blue-600 dark:text-blue-500 dark:hover:text-blue-600 hover:text-blue-700 hover:underline"
                                    >
                                        Read more{" "}
                                        <svg
                                            className="w-2 h-2 ms-1.5 rtl:rotate-180"
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
                                </div>
                                <div data-popper-arrow></div>
                            </div>
                        </div>
                    </div>
                </div>

                <div ref={chartRef} className="py-6" id="pie-chart"></div>

                <div className="grid grid-cols-1 items-center border-gray-200 border-t dark:border-gray-700 justify-between">
                    <div className="flex justify-end items-center pt-5">
                        {" "}
                        {/* Menu-drop-down-day */}
                        {/* End-menu-drop-down-day */}
                        <a
                            href={route("prodi")}
                            className="uppercase text-sm font-semibold inline-flex items-center rounded-lg text-blue-600 hover:text-blue-700 dark:hover:text-blue-500  hover:bg-gray-100 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 px-3 py-2"
                        >
                            Prodi Report
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
                    </div>
                </div>
            </div>
        </>
    );
};

export default CardDC;
