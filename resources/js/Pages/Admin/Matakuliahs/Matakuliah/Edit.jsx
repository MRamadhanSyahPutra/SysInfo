import Sidebar from "@/Layout/Sidebar";
import { usePage, useForm } from "@inertiajs/react";
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

    const user = dosen || admin || "user not found";

    const { data, setData, processing, put, errors } = useForm({
        kode: matakuliah.kode,
        name: matakuliah.name,
        jumlah_sks: matakuliah.jumlah_sks,
        prodi_id: matakuliah.prodi_id,
        dosen_id: matakuliah.dosen_id,
    });

    const submit = (e) => {
        e.preventDefault();
        put(route("update.matakuliah", matakuliah.id));
    };

    return (
        <>
            <Sidebar status={user} flash={flash} auth={auth}>
                <div className="mt-[65px]">
                    <Form title={"Add Class"} hrefBack={route("matakuliah")}>
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

export default Edit;
