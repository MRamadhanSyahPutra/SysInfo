import Button from "@/components/Button";
import Sidebar from "@/Layout/Sidebar";
import { usePage, useForm } from "@inertiajs/react";
import { route } from "Ziggy-js";
import { useEffect } from "react";
import CardForm from "@/components/CardForm";

const Create = () => {
    const { dosen, admin, flash, mahasiswas, matakuliah } = usePage().props;
    const user = dosen || admin || "user not found";

    useEffect(() => {
        const selectedMatkulIds = mahasiswas
            .filter((mhs) =>
                mhs.matakuliahs.some((mhs) => mhs.id === matakuliah.id)
            )
            .map((mhs) => mhs.id);

        setData("mahasiswa_id", selectedMatkulIds);
    }, []);

    const { data, setData, post, processing, errors } = useForm({
        mahasiswa_id: [],
    });

    const handleCheckboxChange = (e) => {
        const id = parseInt(e.target.value);
        if (e.target.checked) {
            setData("mahasiswa_id", [...data.mahasiswa_id, id]);
        } else {
            setData(
                "mahasiswa_id",
                data.mahasiswa_id.filter((mhsId) => mhsId !== id)
            );
        }
    };

    const submit = (e) => {
        e.preventDefault();
        post(route("matakuliah.tomahasiswas", matakuliah.id));
    };

    return (
        <>
            <Sidebar status={user} flash={flash}>
                <div className="mt-[65px]">
                    <CardForm
                        addRouteBack={route("show.matakuliah", matakuliah.id)}
                        firstPlace={
                            <div className="mx-4">
                                <h3 className="text-4xl font-semibold">
                                    {matakuliah.name}
                                </h3>
                                <h6 className="ml-1 text-slate-400">
                                    {matakuliah.kode}
                                </h6>
                            </div>
                        }
                        secondPlace={
                            <>
                                <p>Dosen Pengajar : {matakuliah.dosen.name}</p>
                                <p>Prodi : {matakuliah.prodi.name}</p>
                                <p>Jumlah SKS : {matakuliah.jumlah_sks}</p>
                                <p>
                                    Total Mahasiswa:{" "}
                                    {matakuliah.mahasiswas.length}
                                </p>
                            </>
                        }
                        subTitle={`Daftar Mahasiswa ${matakuliah.prodi.name} yang mengambil mata kuliah ${matakuliah.name} :
`}
                    >
                        <form onSubmit={submit}>
                            <ul className="grid grid-cols-2 gap-x-4 gap-y-2 text-sm mb-5 font-medium text-gray-900 bg-white border border-gray-200 rounded-lg p-2 dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                                {mahasiswas.map((mhs) => {
                                    const isChecked = mhs.matakuliahs.some(
                                        (mhs) => mhs.id === matakuliah.id
                                    );
                                    return (
                                        <li
                                            key={mhs.id}
                                            className="flex items-center space-x-2 border-b border-gray-200 pb-2 dark:border-gray-600"
                                        >
                                            <input
                                                id={`checkbox-${mhs.id}`}
                                                type="checkbox"
                                                value={mhs.id}
                                                onChange={handleCheckboxChange}
                                                defaultChecked={isChecked}
                                                name="matakuliah_id"
                                                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                                            />
                                            <label
                                                htmlFor={`checkbox-${mhs.id}`}
                                                className="text-sm font-medium text-gray-900 dark:text-gray-300"
                                            >
                                                {mhs.nama_lengkap}
                                            </label>
                                        </li>
                                    );
                                })}
                            </ul>
                            {errors.mahasiswa_id && (
                                <p className="text-red-500 text-sm">
                                    {errors.mahasiswa_id}
                                </p>
                            )}
                            <Button
                                type={"submit"}
                                className={
                                    "text-sm px-6 py-3 xl:mb-5 xl:text-sm xl:px-5 xl:py-2.5"
                                }
                                disabled={processing}
                            >
                                {processing ? "Processing.." : "Adding"}
                            </Button>
                        </form>
                    </CardForm>
                </div>
            </Sidebar>
        </>
    );
};

export default Create;
