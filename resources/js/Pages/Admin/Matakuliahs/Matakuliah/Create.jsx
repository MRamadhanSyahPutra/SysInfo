import Sidebar from "@/Layout/Sidebar";
import { usePage, useForm } from "@inertiajs/react";
import Form from "@/Layout/Form";
import Label from "@/components/Label";
import Input from "@/components/Input";
import Button from "@/components/Button";
import { route } from "Ziggy-js";
import Select from "@/components/Select";

const Create = () => {
    const { dosen, admin, flash, prodis, dosens, auth } = usePage().props;
    if (!auth) return null;

    const user = dosen || admin || "user not found";

    const { data, setData, processing, post, errors } = useForm({
        kode: "",
        name: "",
        foto_sampul: null,
        jumlah_sks: "",
        prodi_id: "",
        dosen_id: "",
    });

    const submit = (e) => {
        e.preventDefault();
        post(route("post.matakuliah"), {
            forceFormData: true,
        });
    };
    console.log("File to upload:", data.foto_sampul);

    return (
        <>
            <Sidebar status={user} flash={flash} auth={auth}>
                <div className="mt-[65px]">
                    <Form
                        title={"Add Matakuliah"}
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
                                {errors.kode && (
                                    <p className="text-red-500 text-sm">
                                        {errors.kode}
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
                                {errors.name && (
                                    <p className="text-red-500 text-sm">
                                        {errors.name}
                                    </p>
                                )}
                            </div>
                            <div className="relative z-0 w-full mb-5 group">
                                <label
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                    htmlFor="foto_sampul"
                                >
                                    Foto Sampul
                                </label>
                                <input
                                    className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
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
                                {errors.foto_sampul && (
                                    <p className="text-red-500 text-sm">
                                        {errors.foto_sampul}
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
                                {errors.jumlah_sks && (
                                    <p className="text-red-500 text-sm">
                                        {errors.jumlah_sks}
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
                                {errors.prodi_id && (
                                    <p className="text-red-500 text-sm">
                                        {errors.prodi_id}
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
                                {errors.dosen_id && (
                                    <p className="text-red-500 text-sm">
                                        {errors.dosen_id}
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
                                {processing ? "Processing.." : "Adding"}
                            </Button>
                        </form>
                    </Form>
                </div>
            </Sidebar>
        </>
    );
};

export default Create;
