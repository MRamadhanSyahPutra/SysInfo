import Sidebar from "@/Layout/Sidebar";
import { usePage, Link } from "@inertiajs/react";
import { route } from "Ziggy-js";

const Index = () => {
    const { dosen, admin, flash, matakuliahs } = usePage().props;

    const user = dosen || admin || "user not found";

    return (
        <>
            <Sidebar status={user} flash={flash}>
                <div className="mt-[65px]">
                    <div className="grid grid-cols-5 grid-rows-1 gap-4 xl:grid-rows-5 xl:gap-4 bg-transparent shadow p-10 rounded-3xl ">
                        <div className="col-span-5 row-span-2 xl:col-span-2 xl:row-span-5 ">
                            <div className="mx-4">
                                <img
                                    className="h-auto w-[350px] transition-all duration-300 rounded-lg cursor-pointer filter grayscale hover:grayscale-0"
                                    src="/images/profile-picture-5.jpg"
                                    alt="image description"
                                />
                            </div>
                            <p className="text-slate-400 text-2xl mt-4 font-semibold">
                                {user.no_telp}
                            </p>
                            <p className="text-black text-3xl font-semibold mr-1 mt-2">
                                {user.alamat}
                            </p>
                        </div>
                        <div className="col-span-5 row-span-2 xl:col-span-3 xl:row-span-5 xl:col-start-3 ">
                            <div className="text-slate-400 text-2xl font-semibold">
                                {user.prodi.name}
                            </div>
                            <div className="text-black text-7xl font-semibold mt-1">
                                {user.name}
                            </div>
                            <div className="text-black text-xl font-semibold mt-3">
                                {user.nid}
                            </div>
                            <hr />

                            <h2 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white mt-2">
                                Matakuliah yang diajarkan :
                            </h2>
                            <ul className="max-w-md space-y-1 text-gray-500 list-disc list-inside dark:text-gray-400">
                                {matakuliahs.length >= 1 ? (
                                    matakuliahs.map((matkul, index) => (
                                        <li key={index}>{matkul.name}</li>
                                    ))
                                ) : (
                                    <li>{matakuliahs.name}</li>
                                )}
                                {matakuliahs.length == 0 && (
                                    <p className="text-blue-500">
                                        Belum mengambil Matakuliah
                                    </p>
                                )}
                            </ul>
                            <Link
                                href={route("dosencreate.matakuliah", user.id)}
                                className="inline-block btn-greenc font-medium rounded-[6px] me-2 mb-2 px-3 py-2 mt-[30px] dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                            >
                                Add Matakuliah
                            </Link>
                        </div>
                    </div>
                </div>
            </Sidebar>
        </>
    );
};

export default Index;
