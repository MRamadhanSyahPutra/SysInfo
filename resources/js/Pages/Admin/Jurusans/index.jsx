import Sidebar from "@/Layout/Sidebar";
import { usePage, Link, router } from "@inertiajs/react";
import Table from "@/Layout/Table";
import { route } from "Ziggy-js";
import Swal from "sweetalert2";
import { useEffect } from "react";

const Index = () => {
    const { flash, dosen, admin, jurusans, auth } = usePage().props;
    if (!auth) return null;

    const user = dosen || admin || "user not found";
    let i = jurusans.from;

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

    const jurusanDelete = (jurusanid) => {
        Swal.fire({
            title: "Hapus data Jurusan?",
            text: "Apakah anda yakin untuk menghapus data ini.",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Ya, Hapus!",
        }).then((result) => {
            if (result.isConfirmed) {
                router.delete(route("jurusan.delete", jurusanid));
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
                                    href={route("createjurusan")}
                                    className="btn-greenc font-medium rounded-[6px] me-2 mb-2 px-3 py-2 ml-5 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                                >
                                    Add Jurusan
                                </Link>
                            )
                        }
                        thead={
                            <tr>
                                <th scope="col" className="px-6 py-3">
                                    No
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Nama Jurusan
                                </th>
                                {auth.admin && (
                                    <th scope="col" className="px-6 py-3">
                                        Action
                                    </th>
                                )}
                            </tr>
                        }
                        paginate={jurusans}
                        searchRoute={"jurusan"}
                    >
                        {jurusans.data.map((jurusan) => (
                            <tr
                                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600"
                                key={jurusan.id}
                            >
                                <td className="px-6 py-4">{i++}</td>
                                <th
                                    scope="row"
                                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                                >
                                    {jurusan.name}
                                </th>
                                {auth.admin && (
                                    <td className="px-6 py-4">
                                        <Link
                                            href={route(
                                                "jurusan.edit",
                                                jurusan.id
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
                                                jurusanDelete(jurusan.id)
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
