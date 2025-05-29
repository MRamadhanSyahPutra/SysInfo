import { useState } from "react";
import { Link, useForm } from "@inertiajs/react";
import { route } from "Ziggy-js";

const Table = ({ children, AddLink, thead, paginate, searchRoute }) => {
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
                    <div>{AddLink}</div>
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
