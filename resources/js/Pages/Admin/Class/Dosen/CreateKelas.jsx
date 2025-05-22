import Button from "@/components/Button";
import Input from "@/components/Input";
import Label from "@/components/Label";
import Select from "@/components/Select";
import Form from "@/Layout/Form";
import Sidebar from "@/Layout/Sidebar";
import { usePage, useForm } from "@inertiajs/react";
import { route } from "Ziggy-js";
import { useEffect } from "react";

const CreateKelasToDosen = () => {
    const { dosen, admin, flash, prodis, dosens } = usePage().props;
    const user = dosen || admin || "user not found";

    const { data, setData, post, processing, errors } = useForm({
        name: "",
        jenis_kelas: "",
        data_tampung: "",
        prodi_id: "",
        dosen_id: dosen.id,
    });

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
                icon: "error",
                title: flash.message,
            });
        }
    }, [flash]);

    const submit = (e) => {
        e.preventDefault();
        post(route("createtodosen.post", dosen.id));
    };
    return (
        <>
            <Sidebar status={user} flash={flash}>
                <div className="mt-[65px]">
                    <Form
                        title={"Add Class"}
                        hrefBack={route("class.dosen", dosen.id)}
                    >
                        <form className="p-8" onSubmit={submit}>
                            <div className="relative z-0 w-full mb-5 group">
                                <Input
                                    type={"text"}
                                    name={"name"}
                                    value={data.name}
                                    onChange={(e) =>
                                        setData("name", e.target.value)
                                    }
                                />
                                <Label labelFor={"email"}>
                                    Kode kelas <small>contoh(IF099)*</small>
                                </Label>
                                {errors.name && (
                                    <p className="text-red-500 text-sm">
                                        {errors.name}
                                    </p>
                                )}
                            </div>
                            <div className="relative z-0 w-full mb-5 group">
                                <Select
                                    label={"Jenis kelas"}
                                    name={"jenis_kelas"}
                                    value={data.jenis_kelas}
                                    onChange={(e) =>
                                        setData("jenis_kelas", e.target.value)
                                    }
                                >
                                    <option value="Pagi">Pagi</option>
                                    <option value="Malam">Malam</option>
                                </Select>
                                {errors.jenis_kelas && (
                                    <p className="text-red-500 text-sm">
                                        {errors.jenis_kelas}
                                    </p>
                                )}
                            </div>
                            <div className="relative z-0 w-full mb-5 group">
                                <Input
                                    type={"number"}
                                    name={"data_tampung"}
                                    value={data.data_tampung}
                                    onChange={(e) =>
                                        setData("data_tampung", e.target.value)
                                    }
                                />
                                <Label labelFor={"data_tampung"}>
                                    Daya tampung
                                </Label>
                                <p className={"text-[10px]"}>
                                    *data_tampung harus 2 digit
                                </p>
                                {errors.data_tampung && (
                                    <p className="text-red-500 text-sm">
                                        {errors.data_tampung}
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
                                    disabled
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

export default CreateKelasToDosen;
