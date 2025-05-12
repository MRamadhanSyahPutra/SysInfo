import Sidebar from "@/Layout/Sidebar";
import { usePage, Link, router } from "@inertiajs/react";
import Table from "@/Layout/Table";
import { route } from "Ziggy-js";
import Swal from "sweetalert2";
import { useEffect } from "react";

const Mahasiswas = () => {
    const { flash, dosen, admin, mahasiwa } = usePage().props;

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

    const userDelete = (mhsid) => {
        Swal.fire({
            title: "Hapus data Mahasiswa?",
            text: "Apakah anda yakin untuk menghapus data ini.",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Ya, Hapus!",
        }).then((result) => {
            if (result.isConfirmed) {
                router.delete(route("mahasiswa.delete", mhsid));
            }
        });
    };

    return (
        <>
            <Sidebar status={user} flash={flash}>
                <div className="mt-[64px]">
                    <Table
                        AddLink={
                            <Link
                                href={route("createmahasiswas")}
                                className="btn-greenc font-medium rounded-[6px] me-2 mb-2 px-3 py-2 ml-5 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                            >
                                Add Mahasiswa
                            </Link>
                        }
                        thead={
                            <tr>
                                <th scope="col" className="px-6 py-3">
                                    Nama Lengkap
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Email
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    NIM
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Jenis Kelamin
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Agama
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Alamat
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Kelas
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Action
                                </th>
                            </tr>
                        }
                        paginate={mahasiwa}
                        searchRoute={"mahasiswas"}
                    >
                        {mahasiwa.data.map((mhs) => (
                            <tr
                                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600"
                                key={mhs.id}
                            >
                                <th
                                    scope="row"
                                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                                >
                                    {mhs.nama_lengkap}
                                </th>
                                <td className="px-6 py-4">{mhs.email}</td>
                                <td className="px-6 py-4">{mhs.nim}</td>
                                <td className="px-6 py-4">
                                    {mhs.jenis_kelamin}
                                </td>
                                <td className="px-6 py-4">{mhs.agama}</td>
                                <td className="px-6 py-4">{mhs.alamat}</td>
                                <td className="px-6 py-4">{mhs.kelas.name}</td>
                                <td className="px-6 py-4">
                                    <Link
                                        href={route("mahasiswa.edit", mhs.id)}
                                        className="font-medium mr-5 text-blue-600 dark:text-blue-500 hover:underline"
                                    >
                                        Edit
                                    </Link>
                                    <Link
                                        preserveScroll
                                        href="#"
                                        className="font-medium text-red-600 dark:text-blue-500 hover:underline"
                                        onClick={() => userDelete(mhs.id)}
                                    >
                                        Delete
                                    </Link>
                                </td>
                            </tr>
                        ))}
                    </Table>
                </div>
            </Sidebar>
        </>
    );
};

export default Mahasiswas;
