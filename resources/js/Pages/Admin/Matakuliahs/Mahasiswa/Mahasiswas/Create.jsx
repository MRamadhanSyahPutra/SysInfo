import Button from "@/components/Button";
import Sidebar from "@/Layout/Sidebar";
import { usePage, useForm } from "@inertiajs/react";
import { route } from "Ziggy-js";
import { useEffect } from "react";
import CardForm from "@/components/CardForm";

const Create = () => {
    const { dosen, admin, flash, mahasiswa, matakuliahs, auth } =
        usePage().props;
    if (!auth) return null;

    const user = dosen || admin || "user not found";

    useEffect(() => {
        const selectedMatkulIds = matakuliahs
            .filter((matkul) =>
                matkul.mahasiswas.some((mhs) => mhs.id === mahasiswa.id)
            )
            .map((matkul) => matkul.id);

        setData("matakuliah_id", selectedMatkulIds);
    }, []);

    const { data, setData, post, processing, errors } = useForm({
        matakuliah_id: [],
    });

    const handleCheckboxChange = (e) => {
        const id = parseInt(e.target.value);
        if (e.target.checked) {
            setData("matakuliah_id", [...data.matakuliah_id, id]);
        } else {
            setData(
                "matakuliah_id",
                data.matakuliah_id.filter((mkId) => mkId !== id)
            );
        }
    };

    const submit = (e) => {
        e.preventDefault();
        post(route("post.mahasiswa", mahasiswa.id));
    };

    return (
        <>
            <Sidebar status={user} flash={flash} auth={auth}>
                <div className="mt-[65px]">
                    <CardForm
                        addRouteBack={route("show.mahasiswa", mahasiswa.id)}
                        firstPlace={
                            <div className="mx-4">
                                <img
                                    className="h-auto w-[350px] transition-all duration-300 rounded-lg cursor-pointer filter grayscale hover:grayscale-0"
                                    src={
                                        mahasiswa.jenis_kelamin == "pria"
                                            ? "/images/boy.png"
                                            : "/images/woman.png"
                                    }
                                    alt="image description"
                                />
                            </div>
                        }
                        secondPlace={
                            <>
                                {" "}
                                <div className="text-slate-400 text-2xl font-semibold">
                                    {mahasiswa.kelas.prodi.name}
                                </div>
                                <div className="text-black text-7xl font-semibold mt-1">
                                    {mahasiswa.nama_lengkap}
                                </div>
                                <div className="text-black text-xl font-semibold mt-3">
                                    {mahasiswa.nim}
                                </div>
                            </>
                        }
                        subTitle={`Daftar Mata Kuliah ${mahasiswa.kelas.prodi.name} yang diambil oleh ${mahasiswa.nama_lengkap} :
`}
                    >
                        <form onSubmit={submit}>
                            <ul className="grid grid-cols-2 gap-x-4 gap-y-2 text-sm mb-5 font-medium text-gray-900 bg-white border border-gray-200 rounded-lg p-2 dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                                {matakuliahs.map((matkul) => {
                                    const isChecked = matkul.mahasiswas.some(
                                        (mhs) => mhs.id === mahasiswa.id
                                    );
                                    return (
                                        <li
                                            key={matkul.id}
                                            className="flex items-center space-x-2 border-b border-gray-200 pb-2 dark:border-gray-600"
                                        >
                                            <input
                                                id={`checkbox-${matkul.id}`}
                                                type="checkbox"
                                                value={matkul.id}
                                                onChange={handleCheckboxChange}
                                                defaultChecked={isChecked}
                                                name="matakuliah_id"
                                                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                                            />
                                            <label
                                                htmlFor={`checkbox-${matkul.id}`}
                                                className="text-sm font-medium text-gray-900 dark:text-gray-300"
                                            >
                                                {matkul.name}
                                            </label>
                                        </li>
                                    );
                                })}
                            </ul>
                            {errors.matakuliah_id && (
                                <p className="text-red-500 text-sm">
                                    {errors.matakuliah_id}
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
