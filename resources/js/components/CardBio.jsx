import { Link } from "@inertiajs/react";

const CardBio = ({
    firstPlace,
    secondPlace,
    subTitle,
    listData,
    addLink,
    textLink,
}) => {
    const listDataSelect =
        listData.matakuliahs || listData.mahasiswas || "List data not found";

    return (
        <>
            <div className="grid grid-cols-5 grid-rows-1 gap-4 xl:grid-rows-5 xl:gap-4 bg-transparent shadow p-10 rounded-3xl ">
                <div className="col-span-5 row-span-2 xl:col-span-2 xl:row-span-5 ">
                    {firstPlace}
                </div>
                <div className="col-span-5 row-span-2 xl:col-span-3 xl:row-span-5 xl:col-start-3 ">
                    {secondPlace}
                    <hr />

                    <h2 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white mt-2">
                        {subTitle}
                    </h2>
                    <ul className="max-w-md space-y-1 text-gray-500 list-disc list-inside dark:text-gray-400">
                        {listDataSelect.length >= 1 ? (
                            listDataSelect == listData.matakuliahs ? (
                                listDataSelect.map((matkul, index) => (
                                    <li key={index}>{matkul.name}</li>
                                ))
                            ) : (
                                listDataSelect.map((mhs, index) => (
                                    <li key={index}>{mhs.nama_lengkap}</li>
                                ))
                            )
                        ) : (
                            <p>Belum ada data</p>
                        )}
                    </ul>
                    <Link
                        href={addLink}
                        className="inline-block btn-greenc font-medium rounded-[6px] me-2 mb-2 px-3 py-2 mt-[30px] dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                    >
                        {textLink}
                    </Link>
                </div>
            </div>
        </>
    );
};

export default CardBio;
