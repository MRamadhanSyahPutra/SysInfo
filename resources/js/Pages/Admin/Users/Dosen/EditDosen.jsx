import Sidebar from "@/Layout/Sidebar";
import Form from "@/Layout/Form";
import Input from "@/components/Input";
import Label from "@/components/Label";
import Select from "@/components/Select";
import Button from "@/components/Button";
import { usePage, useForm } from "@inertiajs/react";
import { route } from "Ziggy-js";

const EditDosen = () => {
    const { admin, dosen, flash, prodi, namepart, auth } = usePage().props;

    if (!auth) return null;

    const user = admin || "user not found";

    const { data, setData, put, processing, errors } = useForm({
        id: dosen.id,
        email: dosen.email,
        password: "",
        password_confirmation: "",
        first_name: namepart.first_name,
        last_name: namepart.last_name,
        nid: dosen.nid,
        alamat: dosen.alamat,
        no_telp: dosen.no_telp,
        prodi_id: dosen.prodi_id,
    });

    const submit = (e) => {
        e.preventDefault();
        put(route("dosen.update", dosen.id));
    };
    return (
        <>
            <Sidebar status={user} flash={flash} auth={auth}>
                <div className="mt-[64px]">
                    <Form title={"Add Dosen"} hrefBack={route("dosens")}>
                        <form className="p-8" onSubmit={submit}>
                            <div className="relative z-0 w-full mb-5 group">
                                <Input
                                    type={"email"}
                                    name={"email"}
                                    value={data.email}
                                    onChange={(e) =>
                                        setData("email", e.target.value)
                                    }
                                />
                                <Label labelFor={"email"}>Email address</Label>
                                {errors.email && (
                                    <p className="text-red-500 text-sm">
                                        {errors.email}
                                    </p>
                                )}
                            </div>
                            <div className="relative z-0 w-full mb-5 group">
                                <Input
                                    type={"password"}
                                    name={"password"}
                                    value={data.password}
                                    onChange={(e) =>
                                        setData("password", e.target.value)
                                    }
                                />
                                <Label labelFor={"password"}>Password</Label>
                                <p className={"text-[10px]"}>
                                    *Kosongkan jika tidak ingin mengubah
                                    password
                                </p>
                                {errors.password && (
                                    <p className="text-red-500 text-sm">
                                        {errors.password}
                                    </p>
                                )}
                            </div>
                            <div className="relative z-0 w-full mb-5 group">
                                <Input
                                    type={"password"}
                                    name={"password_confirmation"}
                                    value={data.password_confirmation}
                                    onChange={(e) =>
                                        setData(
                                            "password_confirmation",
                                            e.target.value
                                        )
                                    }
                                />
                                <Label labelFor={"password_confirmation"}>
                                    Confirm Password
                                </Label>
                                {errors.confirm_password && (
                                    <p className="text-red-500 text-sm">
                                        {errors.confirm_password}
                                    </p>
                                )}
                            </div>
                            <div className="grid md:grid-cols-2 md:gap-6">
                                <div className="relative z-0 w-full mb-5 group">
                                    <Input
                                        type={"text"}
                                        name={"first_name"}
                                        value={data.first_name}
                                        onChange={(e) =>
                                            setData(
                                                "first_name",
                                                e.target.value
                                            )
                                        }
                                    />
                                    <Label labelFor={"first_name"}>
                                        First Name
                                    </Label>
                                    {errors.first_name && (
                                        <p className="text-red-500 text-sm">
                                            {errors.first_name}
                                        </p>
                                    )}
                                </div>
                                <div className="relative z-0 w-full mb-5 group">
                                    <Input
                                        type={"text"}
                                        name={"last_name"}
                                        value={data.last_name}
                                        onChange={(e) =>
                                            setData("last_name", e.target.value)
                                        }
                                    />
                                    <Label labelFor={"last_name"}>
                                        Last Name
                                    </Label>
                                    {errors.last_name && (
                                        <p className="text-red-500 text-sm">
                                            {errors.last_name}
                                        </p>
                                    )}
                                </div>
                            </div>
                            <div className="grid md:grid-cols-2 md:gap-6">
                                <div className="relative z-0 w-full mb-5 group">
                                    <Input
                                        type={"number"}
                                        name={"nid"}
                                        value={data.nid}
                                        onChange={(e) =>
                                            setData("nid", e.target.value)
                                        }
                                    />
                                    <Label labelFor={"nid"}>NID</Label>
                                    <p className={"text-[10px]"}>
                                        *NID harus 10 angka
                                    </p>
                                    {errors.nid && (
                                        <p className="text-red-500 text-sm">
                                            {errors.nid}
                                        </p>
                                    )}
                                </div>
                                <div className="relative z-0 w-full mb-5 group">
                                    <Input
                                        type={"text"}
                                        name={"alamat"}
                                        value={data.alamat}
                                        onChange={(e) =>
                                            setData("alamat", e.target.value)
                                        }
                                    />
                                    <Label labelFor={"alamat"}>Alamat</Label>
                                    {errors.alamat && (
                                        <p className="text-red-500 text-sm">
                                            {errors.alamat}
                                        </p>
                                    )}
                                </div>
                            </div>
                            <div className="grid md:grid-cols-2 md:gap-6">
                                <div className="relative z-0 w-full mb-5 group">
                                    <Input
                                        type={"number"}
                                        name={"no_telp"}
                                        value={data.no_telp}
                                        onChange={(e) =>
                                            setData("no_telp", e.target.value)
                                        }
                                    />
                                    <Label labelFor={"no_telp"}>No.Telp</Label>
                                    <p className={"text-[10px]"}>
                                        *No.Telp harus 10 hingga 12 angka
                                    </p>
                                    {errors.no_telp && (
                                        <p className="text-red-500 text-sm">
                                            {errors.no_telp}
                                        </p>
                                    )}
                                </div>
                                <div className="relative z-0 w-full mb-5 group">
                                    <Select
                                        label={"Prodi"}
                                        name={"prodi_id"}
                                        value={data.prodi_id}
                                        onChange={(e) =>
                                            setData("prodi_id", e.target.value)
                                        }
                                    >
                                        {Object.entries(prodi).map(
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

export default EditDosen;
