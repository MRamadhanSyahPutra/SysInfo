import Sidebar from "@/Layout/Sidebar";
import { usePage, Link, router } from "@inertiajs/react";
import Table from "@/Layout/Table";
import { route } from "Ziggy-js";
import { useEffect } from "react";
import Swal from "sweetalert2";

const Index = () => {
    const { dosen, admin, flash, matakuliahs, auth } = usePage().props;
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

    const matakuliahDelete = (matkulid) => {
        Swal.fire({
            title: "Hapus data Matakuliah?",
            text: "Apakah anda yakin untuk menghapus data ini.",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Ya, Hapus!",
        }).then((result) => {
            if (result.isConfirmed) {
                router.delete(route("delete.matakuliah", matkulid));
            }
        });
    };

    return (
        <>
            <Sidebar status={user} flash={flash} auth={auth}>
                <div className="mt-[65px]">
                    <Table
                        AddLink={
                            auth.admin && (
                                <Link
                                    href={route("create.matakuliah")}
                                    className="btn-greenc font-medium rounded-[6px] me-2 mb-2 px-3 py-2 ml-5 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                                >
                                    Add Matakuliah
                                </Link>
                            )
                        }
                        thead={
                            <tr>
                                <th scope="col" className="px-6 py-3">
                                    Kode Matkul
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Nama Matakuliah
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Foto Sampul
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    SKS
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Prodi
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Dosen Pengajar
                                </th>
                                {auth.admin && (
                                    <th scope="col" className="px-6 py-3">
                                        Action
                                    </th>
                                )}
                            </tr>
                        }
                        searchRoute={"matakuliah"}
                        paginate={matakuliahs}
                    >
                        {matakuliahs.data.map((matakuliah) => (
                            <tr
                                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600"
                                key={matakuliah.id}
                            >
                                <th
                                    scope="row"
                                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                                >
                                    {matakuliah.kode}
                                </th>
                                <td className="px-6 py-4">{matakuliah.name}</td>
                                <td className="px-6 py-4">
                                    {matakuliah.foto_sampul == null ? (
                                        "Gambar belum diunggah"
                                    ) : (
                                        <img
                                            className="h-auto max-w-20"
                                            src={`/storage/images/matkul/${matakuliah.foto_sampul}`}
                                            alt="Foto-sampul"
                                        />
                                    )}
                                </td>
                                <td className="px-6 py-4">
                                    {matakuliah.jumlah_sks}
                                </td>
                                <td className="px-6 py-4">
                                    {matakuliah.prodi.name}
                                </td>
                                <td className="px-6 py-4">
                                    {matakuliah.dosen.name}
                                </td>
                                {auth.admin && (
                                    <td className="px-6 py-4">
                                        <Link
                                            href={route(
                                                "edit.matakuliah",
                                                matakuliah.id
                                            )}
                                            className="font-medium mr-5 text-blue-600 dark:text-blue-500 hover:underline"
                                        >
                                            Edit
                                        </Link>
                                        <Link
                                            preserveScroll
                                            href="#"
                                            className="font-medium text-red-600 dark:text-blue-500 hover:underline"
                                            onClick={() =>
                                                matakuliahDelete(matakuliah.id)
                                            }
                                        >
                                            Delete
                                        </Link>
                                    </td>
                                )}
                            </tr>
                        ))}
                    </Table>
                </div>
            </Sidebar>
        </>
    );
};

export default Index;
