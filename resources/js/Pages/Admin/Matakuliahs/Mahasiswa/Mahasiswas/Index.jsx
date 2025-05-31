import Sidebar from "@/Layout/Sidebar";
import { usePage, Link } from "@inertiajs/react";
import Table from "@/Layout/Table";
import { route } from "Ziggy-js";

const Index = () => {
    const { dosen, admin, flash, mahasiswas, auth } = usePage().props;
    if (!auth) return null;

    const user = dosen || admin || "user not found";
    let i = mahasiswas.from;

    return (
        <>
            <Sidebar status={user} flash={flash} auth={auth}>
                <div className="mt-[65px]">
                    <Table
                        thead={
                            <tr>
                                <th scope="col" className="px-6 py-3">
                                    Nomor
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Nama Mahasiswa
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    NIM
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Prodi
                                </th>
                            </tr>
                        }
                        searchRoute={"index.mahasiswas"}
                        paginate={mahasiswas}
                    >
                        {mahasiswas.data.map((mhs) => (
                            <tr
                                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600"
                                key={mhs.id}
                            >
                                <th
                                    scope="row"
                                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                                >
                                    {i++}
                                </th>
                                <td className="px-6 py-4">
                                    <Link
                                        href={route("show.mahasiswa", mhs.id)}
                                        className=" hover:underline"
                                    >
                                        {mhs.nama_lengkap}
                                    </Link>
                                </td>
                                <td className="px-6 py-4">{mhs.nim}</td>
                                <td className="px-6 py-4">
                                    {mhs.kelas.prodi.name}
                                </td>
                            </tr>
                        ))}
                    </Table>
                </div>
            </Sidebar>
        </>
    );
};

export default Index;
