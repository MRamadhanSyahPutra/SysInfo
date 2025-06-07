import Sidebar from "@/Layout/Sidebar";
import { usePage, Link } from "@inertiajs/react";
import { route } from "Ziggy-js";
import { useEffect } from "react";
import Swal from "sweetalert2";

const IndexMahasiswas = () => {
    const { dosen, admin, flash, prodi, kelas, auth } = usePage().props;
    if (!auth) return null;

    const user = dosen || admin || "user not found";

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

    return (
        <>
            <Sidebar status={user} flash={flash} auth={auth}>
                <div className="mt-[65px]">
                    <div className="grid grid-cols-5 grid-rows-1 gap-4 xl:grid-rows-5 xl:gap-4 bg-transparent shadow p-10 rounded-3xl ">
                        <div className="col-span-5 row-span-2 xl:col-span-2 xl:row-span-5">
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
                                {prodi.jurusan.name}
                            </div>
                            <div className="text-black text-7xl font-semibold mt-1">
                                {user.name}
                            </div>
                            <div className="text-black text-xl font-semibold mt-3">
                                {user.nid}
                            </div>
                            <hr />

                            <h2 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white mt-2">
                                Daftar Mahasiswa di Kelas {kelas.name}:
                            </h2>
                            <ul className="max-w-md space-y-1 text-gray-500 list-disc list-inside dark:text-gray-400">
                                {kelas.mahasiswas.length >= 1 ? (
                                    kelas.mahasiswas.map((kls, index) => (
                                        <li key={index}>{kls.nama_lengkap}</li>
                                    ))
                                ) : (
                                    <li className="list-none text-gray-500 italic">
                                        Belum ada mahasiswa yang terdaftar di
                                        kelas ini.
                                    </li>
                                )}
                            </ul>
                        </div>
                    </div>
                </div>
            </Sidebar>
        </>
    );
};

export default IndexMahasiswas;
