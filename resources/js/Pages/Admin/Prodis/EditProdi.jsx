import Sidebar from "@/Layout/Sidebar";
import { usePage, useForm } from "@inertiajs/react";
import Form from "@/Layout/Form";
import { route } from "Ziggy-js";
import Input from "@/components/Input";
import Label from "@/components/Label";
import Button from "@/components/Button";
import Select from "@/components/Select";

const EditProdi = () => {
    const { dosen, admin, flash, jurusan, prodi } = usePage().props;

    const user = dosen || admin || "user not found";

    const { data, setData, put, processing, errors } = useForm({
        name: prodi.name,
        kepala_prodi: prodi.kepala_prodi,
        jurusan_id: prodi.jurusan_id,
    });

    const submit = (e) => {
        e.preventDefault();
        put(route("prodi.update", prodi.id));
    };

    return (
        <>
            <Sidebar status={user} flash={flash}>
                <div className="mt-[65px]">
                    <Form title={"Update Prodi"} hrefBack={route("prodi")}>
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
                                <Label labelFor={"email"}>Nama Prodi</Label>
                                {errors.name && (
                                    <p className="text-red-500 text-sm">
                                        {errors.name}
                                    </p>
                                )}
                            </div>
                            <div className="relative z-0 w-full mb-5 group">
                                <Input
                                    type={"text"}
                                    name={"kepala_prodi"}
                                    value={data.kepala_prodi}
                                    onChange={(e) =>
                                        setData("kepala_prodi", e.target.value)
                                    }
                                />
                                <Label labelFor={"kepala_prodi"}>
                                    kepala Prodi
                                </Label>
                                {errors.kepala_prodi && (
                                    <p className="text-red-500 text-sm">
                                        {errors.kepala_prodi}
                                    </p>
                                )}
                            </div>
                            <div className="relative z-0 w-full mb-5 group">
                                <Select
                                    label={"Jurusan"}
                                    name={"jurusan_id"}
                                    value={data.jurusan_id}
                                    onChange={(e) =>
                                        setData("jurusan_id", e.target.value)
                                    }
                                >
                                    {Object.entries(jurusan).map(
                                        ([name, id]) => (
                                            <option key={id} value={id}>
                                                {name}
                                            </option>
                                        )
                                    )}
                                </Select>
                                {errors.jurusan_id && (
                                    <p className="text-red-500 text-sm">
                                        {errors.jurusan_id}
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

export default EditProdi;
