import Sidebar from "@/Layout/Sidebar";
import { usePage, Link } from "@inertiajs/react";
import Table from "@/Layout/Table";
import { route } from "Ziggy-js";

const Index = () => {
    const { dosen, admin, flash, matakuliahs } = usePage().props;
    const user = dosen || admin || "user not found";
    let i = matakuliahs.from;

    return (
        <>
            <Sidebar status={user} flash={flash}>
                <div className="mt-[65px]">
                    <Table
                        thead={
                            <tr>
                                <th scope="col" className="px-6 py-3">
                                    Nomor
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Kode Mata kuliah
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Nama Mata kuliah
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Prodi
                                </th>
                            </tr>
                        }
                        searchRoute={"index.matakuliahs"}
                        paginate={matakuliahs}
                    >
                        {matakuliahs.data.map((mk) => (
                            <tr
                                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600"
                                key={mk.id}
                            >
                                <th
                                    scope="row"
                                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                                >
                                    {i++}
                                </th>
                                <td className="px-6 py-4">{mk.kode}</td>
                                <td className="px-6 py-4">
                                    <Link
                                        href={route("show.matakuliah", mk.id)}
                                        className="hover:underline"
                                    >
                                        {mk.name}
                                    </Link>
                                </td>
                                <td className="px-6 py-4">{mk.prodi.name}</td>
                            </tr>
                        ))}
                    </Table>
                </div>
            </Sidebar>
        </>
    );
};

export default Index;
