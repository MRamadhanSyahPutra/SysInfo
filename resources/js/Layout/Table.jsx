import { useState } from "react";
import { Link, useForm } from "@inertiajs/react";
import { route } from "Ziggy-js";

const Table = ({ children, AddLink, thead, paginate, searchRoute }) => {
    const [selectedFilter, setSelectedFilter] = useState("Last 30 days");

    const handleFilterChange = (filter) => {
        setSelectedFilter(filter);
    };

    const { data, setData, get, processing } = useForm({
        search: "",
    });

    const handleSearch = (e) => {
        e.preventDefault();
        get(route(`${searchRoute}`), {
            preserveState: true,
            replace: true,
        });
    };

    return (
        <>
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                <div className="flex flex-column sm:flex-row flex-wrap space-y-4 sm:space-y-0 items-center justify-between pb-4">
                    {/* Filter-Timestamps */}
                    <div>
                        <button
                            id="dropdownRadioButton"
                            data-dropdown-toggle="dropdownRadio"
                            className="inline-flex items-center text-gray-500 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-3 py-1.5 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                            type="button"
                        >
                            <svg
                                className="w-3 h-3 text-gray-500 dark:text-gray-400 me-3"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                            >
                                <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm3.982 13.982a1 1 0 0 1-1.414 0l-3.274-3.274A1.012 1.012 0 0 1 9 10V6a1 1 0 0 1 2 0v3.586l2.982 2.982a1 1 0 0 1 0 1.414Z" />
                            </svg>
                            {selectedFilter}
                            <svg
                                className="w-2.5 h-2.5 ms-2.5"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 10 6"
                            >
                                <path
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="m1 1 4 4 4-4"
                                />
                            </svg>
                        </button>
                        <div
                            id="dropdownRadio"
                            className="z-10 hidden w-48 bg-white divide-y divide-gray-100 rounded-lg shadow-sm dark:bg-gray-700 dark:divide-gray-600"
                            data-popper-reference-hidden=""
                            data-popper-escaped=""
                            data-popper-placement="top"
                            style={{
                                position: "absolute",
                                inset: "auto auto 0px 0px",
                                margin: "0px",
                                transform:
                                    "translate3d(522.5px, 3847.5px, 0px)",
                            }}
                        >
                            <ul
                                className="p-3 space-y-1 text-sm text-gray-700 dark:text-gray-200"
                                aria-labelledby="dropdownRadioButton"
                            >
                                <li>
                                    <div className="flex items-center p-2 rounded-sm hover:bg-gray-100 dark:hover:bg-gray-600">
                                        <input
                                            id="filter-radio-example-1"
                                            type="radio"
                                            value=""
                                            name="filter-radio"
                                            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                            checked={
                                                selectedFilter === "Last Day"
                                            }
                                            onChange={() =>
                                                handleFilterChange("Last Day")
                                            }
                                        />
                                        <label
                                            htmlFor="filter-radio-example-1"
                                            className="w-full ms-2 text-sm font-medium text-gray-900 rounded-sm dark:text-gray-300"
                                        >
                                            Last day
                                        </label>
                                    </div>
                                </li>
                                <li>
                                    <div className="flex items-center p-2 rounded-sm hover:bg-gray-100 dark:hover:bg-gray-600">
                                        <input
                                            id="filter-radio-example-2"
                                            type="radio"
                                            value=""
                                            name="filter-radio"
                                            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                            checked={
                                                selectedFilter === "Last 7 days"
                                            }
                                            onChange={() =>
                                                handleFilterChange(
                                                    "Last 7 days"
                                                )
                                            }
                                        />
                                        <label
                                            htmlFor="filter-radio-example-2"
                                            className="w-full ms-2 text-sm font-medium text-gray-900 rounded-sm dark:text-gray-300"
                                        >
                                            Last 7 days
                                        </label>
                                    </div>
                                </li>
                                <li>
                                    <div className="flex items-center p-2 rounded-sm hover:bg-gray-100 dark:hover:bg-gray-600">
                                        <input
                                            id="filter-radio-example-3"
                                            type="radio"
                                            value=""
                                            name="filter-radio"
                                            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                            checked={
                                                selectedFilter ===
                                                "Last 30 days"
                                            }
                                            onChange={() =>
                                                handleFilterChange(
                                                    "Last 30 days"
                                                )
                                            }
                                        />
                                        <label
                                            htmlFor="filter-radio-example-3"
                                            className="w-full ms-2 text-sm font-medium text-gray-900 rounded-sm dark:text-gray-300"
                                        >
                                            Last 30 days
                                        </label>
                                    </div>
                                </li>
                                <li>
                                    <div className="flex items-center p-2 rounded-sm hover:bg-gray-100 dark:hover:bg-gray-600">
                                        <input
                                            id="filter-radio-example-4"
                                            type="radio"
                                            value=""
                                            name="filter-radio"
                                            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                            checked={
                                                selectedFilter === "Last month"
                                            }
                                            onChange={() =>
                                                handleFilterChange("Last month")
                                            }
                                        />
                                        <label
                                            htmlFor="filter-radio-example-4"
                                            className="w-full ms-2 text-sm font-medium text-gray-900 rounded-sm dark:text-gray-300"
                                        >
                                            Last month
                                        </label>
                                    </div>
                                </li>
                                <li>
                                    <div className="flex items-center p-2 rounded-sm hover:bg-gray-100 dark:hover:bg-gray-600">
                                        <input
                                            id="filter-radio-example-5"
                                            type="radio"
                                            value=""
                                            name="filter-radio"
                                            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                            checked={
                                                selectedFilter === "Last year"
                                            }
                                            onChange={() =>
                                                handleFilterChange("Last year")
                                            }
                                        />
                                        <label
                                            htmlFor="filter-radio-example-5"
                                            className="w-full ms-2 text-sm font-medium text-gray-900 rounded-sm dark:text-gray-300"
                                        >
                                            Last year
                                        </label>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        {AddLink}
                    </div>
                    {/* End-filter-Timestamps */}

                    {/* Filter-Search */}
                    <label
                        htmlFor="default-search"
                        className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
                    >
                        Search
                    </label>

                    <div className="relative">
                        <form
                            className="w-[280px] mx-auto"
                            onSubmit={handleSearch}
                        >
                            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                <svg
                                    className="w-4 h-4 text-gray-500 dark:text-gray-400"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 20 20"
                                >
                                    <path
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                                    />
                                </svg>
                            </div>
                            <input
                                type="search"
                                id="default-search"
                                className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-xl bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="Search..."
                                name={"search"}
                                value={data.search}
                                onChange={(e) =>
                                    setData("search", e.target.value)
                                }
                            />
                            <button
                                type="submit"
                                className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-[7px] text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                disabled={processing}
                            >
                                {processing ? "Loading.." : "Search"}
                            </button>
                        </form>
                    </div>
                    {/* End-filter-Search */}
                </div>
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        {thead}
                    </thead>
                    <tbody>{children}</tbody>
                </table>
            </div>
            <div className="mt-3 flex justify-end mx-1">
                <div className="bg-white p-1 rounded-xl">
                    {paginate.links.map((link) =>
                        link.url ? (
                            <Link
                                key={link.label}
                                href={link.url}
                                dangerouslySetInnerHTML={{
                                    __html: link.label,
                                }}
                                className={`p-1 mx-1 ${
                                    link.active ? "text-blue-500 font-bold" : ""
                                }`}
                            />
                        ) : (
                            <span
                                key={link.label}
                                ref={link.url}
                                dangerouslySetInnerHTML={{
                                    __html: link.label,
                                }}
                                className="p=1 mx-1 text-slate-300"
                            ></span>
                        )
                    )}
                </div>
            </div>
        </>
    );
};

export default Table;
