import Sidebar from "@/Layout/Sidebar";
import { usePage, useForm, router } from "@inertiajs/react";
import { useState } from "react";
import Form from "@/Layout/Form";
import Label from "@/components/Label";
import Input from "@/components/Input";
import Button from "@/components/Button";
import { route } from "Ziggy-js";
import Select from "@/components/Select";

const Edit = () => {
    const { dosen, admin, flash, prodis, dosens, matakuliah, auth } =
        usePage().props;
    if (!auth) return null;

    const [manualErrors, setManualErrors] = useState({});

    const user = dosen || admin || "user not found";

    const { data, setData, processing } = useForm({
        kode: matakuliah?.kode || "",
        name: matakuliah?.name || "",
        foto_sampul: matakuliah?.foto_sampul,
        jumlah_sks: matakuliah?.jumlah_sks || "",
        prodi_id: matakuliah?.prodi_id || "",
        dosen_id: matakuliah?.dosen_id || "",
    });

    const submit = (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append("kode", data.kode);
        formData.append("name", data.name);
        formData.append("jumlah_sks", data.jumlah_sks);
        formData.append("prodi_id", data.prodi_id);
        formData.append("dosen_id", data.dosen_id);

        if (data.foto_sampul instanceof File) {
            formData.append("foto_sampul", data.foto_sampul);
        }

        // Ini penting! Tambahkan _method ke formData agar Laravel mengenali sebagai PUT
        formData.append("_method", "put");

        // Kirim menggunakan Inertia visit
        router.post(route("update.matakuliah", matakuliah.id), formData, {
            _method: "put", // Override method karena FormData tidak mendukung PUT
            forceFormData: true,
            onError: (errors) => {
                setManualErrors(errors);
            },
        });
    };

    return (
        <>
            <Sidebar status={user} flash={flash} auth={auth}>
                <div className="mt-[65px]">
                    <Form
                        title={"Update Matakuliah"}
                        hrefBack={route("matakuliah")}
                    >
                        <form className="p-8" onSubmit={submit}>
                            <div className="relative z-0 w-full mb-5 group">
                                <Input
                                    type={"text"}
                                    name={"kode"}
                                    value={data.kode}
                                    onChange={(e) =>
                                        setData("kode", e.target.value)
                                    }
                                />
                                <Label labelFor={"kode"}>
                                    Kode Matkul <small>contoh(QDG017)*</small>
                                </Label>
                                {manualErrors.kode && (
                                    <p className="text-red-500 text-sm">
                                        {manualErrors.kode}
                                    </p>
                                )}
                            </div>
                            <div className="relative z-0 w-full mb-5 group">
                                <Input
                                    type={"text"}
                                    name={"name"}
                                    value={data.name}
                                    onChange={(e) =>
                                        setData("name", e.target.value)
                                    }
                                />
                                <Label labelFor={"name"}>
                                    Nama Matakuliah{" "}
                                    <small>
                                        contoh(Algorithm and Programming)*
                                    </small>
                                </Label>
                                {manualErrors.name && (
                                    <p className="text-red-500 text-sm">
                                        {manualErrors.name}
                                    </p>
                                )}
                            </div>
                            <div className="relative z-0 w-full mb-5 group">
                                {matakuliah.foto_sampul && (
                                    <div className="mt-4">
                                        <p className="text-sm text-gray-600">
                                            Preview Sampul Lama:
                                        </p>
                                        <img
                                            src={`/storage/images/matkul/${matakuliah.foto_sampul}`}
                                            alt="Foto Sampul"
                                            className="w-32 h-32 object-cover border rounded-full mt-2"
                                        />
                                    </div>
                                )}

                                <label
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                    htmlFor="foto_sampul"
                                >
                                    Foto Sampul
                                </label>
                                <input
                                    className="w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                                    aria-describedby="foto_sampul"
                                    id="foto_sampul"
                                    type="file"
                                    name={"foto_sampul"}
                                    onChange={(e) => {
                                        setData(
                                            "foto_sampul",
                                            e.target.files[0]
                                        );
                                    }}
                                />
                                <div
                                    className="mt-1 text-sm text-gray-500 dark:text-gray-300"
                                    id="user_avatar_help"
                                >
                                    Unggah foto sampul (maksimal ukuran 2MB)
                                </div>
                                {manualErrors.foto_sampul && (
                                    <p className="text-red-500 text-sm">
                                        {manualErrors.foto_sampul}
                                    </p>
                                )}
                            </div>
                            <div className="relative z-0 w-full mb-5 group">
                                <Input
                                    type={"number"}
                                    name={"jumlah_sks"}
                                    value={data.jumlah_sks}
                                    onChange={(e) =>
                                        setData("jumlah_sks", e.target.value)
                                    }
                                />
                                <Label labelFor={"jumlah_sks"}>
                                    Jumlah SKS
                                </Label>
                                <p className={"text-[10px]"}>
                                    *Jumlah SKS harus 1 digit
                                </p>
                                {manualErrors.jumlah_sks && (
                                    <p className="text-red-500 text-sm">
                                        {manualErrors.jumlah_sks}
                                    </p>
                                )}
                            </div>
                            <div className="relative z-0 w-full mb-5 group">
                                <Select
                                    label={"Nama Prodi"}
                                    name={"prodi_id"}
                                    value={data.prodi_id}
                                    onChange={(e) =>
                                        setData("prodi_id", e.target.value)
                                    }
                                >
                                    {Object.entries(prodis).map(
                                        ([name, id]) => (
                                            <option key={id} value={id}>
                                                {name}
                                            </option>
                                        )
                                    )}
                                </Select>
                                {manualErrors.prodi_id && (
                                    <p className="text-red-500 text-sm">
                                        {manualErrors.prodi_id}
                                    </p>
                                )}
                            </div>
                            <div className="relative z-0 w-full mb-5 group">
                                <Select
                                    label={"Wali Kelas"}
                                    name={"dosen_id"}
                                    value={data.dosen_id}
                                    onChange={(e) =>
                                        setData("dosen_id", e.target.value)
                                    }
                                >
                                    {Object.entries(dosens).map(
                                        ([name, id]) => (
                                            <option key={id} value={id}>
                                                {name}
                                            </option>
                                        )
                                    )}
                                </Select>
                                {manualErrors.dosen_id && (
                                    <p className="text-red-500 text-sm">
                                        {manualErrors.dosen_id}
                                    </p>
                                )}
                            </div>

                            <Button
                                type={"submit"}
                                className={
                                    "text-sm px-6 py-3 xl:mb-5 xl:text-sm xl:px-5 xl:py-2.5"
                                }
                                disabled={processing}
                            >
                                {processing ? "Processing.." : "Updating"}
                            </Button>
                        </form>
                    </Form>
                </div>
            </Sidebar>
        </>
    );
};

export default Edit;
