import Sidebar from "@/Layout/Sidebar";
import Table from "@/Layout/Table";
import { usePage, Link, router } from "@inertiajs/react";
import { useEffect } from "react";
import Swal from "sweetalert2";

const Dosens = () => {
    const { flash, dosens, admin, auth } = usePage().props;

    if (!auth) return null;

    const user = admin || "user not found";

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

    const userDelete = (dosenid) => {
        Swal.fire({
            title: "Hapus data Dosen?",
            text: "Apakah anda yakin untuk menghapus data ini.",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Ya, Hapus!",
        }).then((result) => {
            if (result.isConfirmed) {
                router.delete(route("dosen.delete", dosenid));
            }
        });
    };

    return (
        <>
            <Sidebar status={user} flash={flash} auth={auth}>
                <div className="mt-[64px]">
                    <Table
                        AddLink={
                            <Link
                                href={route("createdosen")}
                                className="btn-greenc font-medium rounded-[6px] me-2 mb-2 px-3 py-2 ml-5 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                            >
                                Add Dosen
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
                                    NID
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Alamat
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    No Telp
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Prodi
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Action
                                </th>
                            </tr>
                        }
                        paginate={dosens}
                        searchRoute={"dosens"}
                    >
                        {dosens.data.map((dosen) => (
                            <tr
                                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600"
                                key={dosen.id}
                            >
                                <th
                                    scope="row"
                                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                                >
                                    {dosen.name}
                                </th>
                                <td className="px-6 py-4">{dosen.email}</td>
                                <td className="px-6 py-4">{dosen.nid}</td>
                                <td className="px-6 py-4">{dosen.alamat}</td>
                                <td className="px-6 py-4">{dosen.no_telp}</td>
                                <td className="px-6 py-4">
                                    {dosen.prodi.name}
                                </td>
                                <td className="px-6 py-4">
                                    <Link
                                        href={route("dosen.edit", dosen.id)}
                                        className="font-medium mr-5 text-blue-600 dark:text-blue-500 hover:underline"
                                    >
                                        Edit
                                    </Link>
                                    <Link
                                        preserveScroll
                                        href="#"
                                        className="font-medium text-red-600 dark:text-blue-500 hover:underline"
                                        onClick={() => userDelete(dosen.id)}
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

export default Dosens;
