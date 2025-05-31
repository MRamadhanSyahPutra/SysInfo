import { useForm, usePage } from "@inertiajs/react";
import SideBar from "@/Layout/Sidebar";
import Label from "@/components/Label";
import Input from "@/components/Input";
import Select from "@/components/Select";
import Button from "@/components/Button";
import { route } from "Ziggy-js";
import Form from "@/Layout/Form";
import { useEffect } from "react";
import Swal from "sweetalert2";

const EditMahasiswa = () => {
    const { flash, dosen, admin, mahasiswa, kelas, name_parts, auth } =
        usePage().props;

    if (!auth) return null;

    const user = dosen || admin || "user not found";

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

    const { data, setData, put, processing, errors } = useForm({
        id: mahasiswa.id,
        email: mahasiswa.email,
        password: "",
        password_confirmation: "",
        first_name: name_parts.first_name,
        last_name: name_parts.last_name,
        nim: mahasiswa.nim,
        alamat: mahasiswa.alamat,
        agama: mahasiswa.agama,
        jenis_kelamin: mahasiswa.jenis_kelamin,
        kelas_id: mahasiswa.kelas_id,
        remember: false,
    });

    const submit = (e) => {
        e.preventDefault();
        put(route("mahasiswa.update", mahasiswa.id));
    };

    return (
        <>
            <SideBar status={user} flash={flash} auth={auth}>
                <div className="mt-[64px]">
                    <Form
                        title={"Update Mahasiswa"}
                        hrefBack={route("mahasiswas")}
                    >
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
                                        name={"nim"}
                                        value={data.nim}
                                        onChange={(e) =>
                                            setData("nim", e.target.value)
                                        }
                                    />
                                    <Label labelFor={"nim"}>Nim</Label>
                                    <p className={"text-[10px]"}>
                                        *NIM harus lebih dari 10 dan kurang dari
                                        12 kata
                                    </p>
                                    {errors.nim && (
                                        <p className="text-red-500 text-sm">
                                            {errors.nim}
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
                                    <Select
                                        label={"Agama"}
                                        name={"agama"}
                                        value={data.agama}
                                        onChange={(e) =>
                                            setData("agama", e.target.value)
                                        }
                                    >
                                        <option value="islam">Islam</option>
                                        <option value="katolik">Katolik</option>
                                        <option value="kristen">kristen</option>
                                        <option value="hindu">Hindu</option>
                                        <option value="buddha">Buddha</option>
                                        <option value="konghucu">
                                            Khonghucu
                                        </option>
                                    </Select>
                                    {errors.agama && (
                                        <p className="text-red-500 text-sm">
                                            {errors.agama}
                                        </p>
                                    )}
                                </div>
                                <div className="relative z-0 w-full mb-5 group">
                                    <Select
                                        label={"Jenis Kelamin"}
                                        name={"jenis_kelamin"}
                                        value={data.jenis_kelamin}
                                        onChange={(e) =>
                                            setData(
                                                "jenis_kelamin",
                                                e.target.value
                                            )
                                        }
                                    >
                                        <option value="pria">Pria</option>
                                        <option value="wanita">Wanita</option>
                                    </Select>
                                    {errors.jenis_kelamin && (
                                        <p className="text-red-500 text-sm">
                                            {errors.jenis_kelamin}
                                        </p>
                                    )}
                                </div>

                                <div className="relative z-0 w-full mb-5 group">
                                    <Select
                                        label={"kelas"}
                                        name={"kelas_id"}
                                        value={data.kelas_id}
                                        onChange={(e) =>
                                            setData("kelas_id", e.target.value)
                                        }
                                    >
                                        {Object.entries(kelas).map(
                                            ([name, id]) => (
                                                <option key={id} value={id}>
                                                    {name}
                                                </option>
                                            )
                                        )}
                                    </Select>
                                    <p className={"text-[10px]"}>
                                        *Jika kelas penuh, kamu tidak bisa
                                        masuk.
                                    </p>
                                    {errors.kelas_id && (
                                        <p className="text-red-500 text-sm">
                                            {errors.kelas_id}
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
            </SideBar>
        </>
    );
};

export default EditMahasiswa;
