import Sidebar from "@/Layout/Sidebar";
import Table from "@/Layout/Table";
import { usePage, Link, router } from "@inertiajs/react";
import Swal from "sweetalert2";
import { route } from "Ziggy-js";
import { useEffect } from "react";

const IndexAdmin = () => {
    const { dosen, admin, flash, kelas, auth } = usePage().props;
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

    const classDelete = (classid) => {
        Swal.fire({
            title: "Hapus data Kelas?",
            text: "Apakah anda yakin untuk menghapus data ini.",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Ya, Hapus!",
        }).then((result) => {
            if (result.isConfirmed) {
                router.delete(route("classdelete.admin", classid));
            }
        });
    };

    return (
        <>
            <Sidebar status={user} flash={flash} auth={auth}>
                <div className="mt-[65px]">
                    <Table
                        AddLink={
                            <Link
                                href={route("createkelas.admin")}
                                className="btn-greenc font-medium rounded-[6px] me-2 mb-2 px-3 py-2 ml-5 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                            >
                                Add Class
                            </Link>
                        }
                        thead={
                            <tr>
                                <th scope="col" className="px-6 py-3">
                                    Kode Kelas
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Jenis Kelas
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Daya Tampung
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Prodi
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Walikelas
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Action
                                </th>
                            </tr>
                        }
                        searchRoute={"class.admin"}
                        paginate={kelas}
                    >
                        {kelas.data.map((kls) => (
                            <tr
                                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600"
                                key={kls.id}
                            >
                                <th
                                    scope="row"
                                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                                >
                                    {kls.name}
                                </th>
                                <td className="px-6 py-4">{kls.jenis_kelas}</td>
                                <td className="px-6 py-4">
                                    {kls.data_tampung}
                                </td>
                                <td className="px-6 py-4">{kls.prodi.name}</td>
                                <td className="px-6 py-4">{kls.dosen.name}</td>
                                <td className="px-6 py-4">
                                    <Link
                                        href={route("classedit.admin", kls.id)}
                                        className="font-medium mr-5 text-blue-600 dark:text-blue-500 hover:underline"
                                    >
                                        Edit
                                    </Link>
                                    <Link
                                        preserveScroll
                                        href="#"
                                        className="font-medium text-red-600 dark:text-blue-500 hover:underline"
                                        onClick={() => classDelete(kls.id)}
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

export default IndexAdmin;
