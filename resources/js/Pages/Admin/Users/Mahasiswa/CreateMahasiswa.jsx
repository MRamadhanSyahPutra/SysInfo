import SideBar from "@/Layout/Sidebar";
import { usePage, useForm } from "@inertiajs/react";
import Input from "@/components/Input";
import Label from "@/components/Label";
import Select from "@/components/Select";
import Button from "@/components/Button";
import { route } from "Ziggy-js";
import Form from "@/Layout/Form";

const CreateMahasiswa = () => {
    const { flash, dosen, admin, kelas } = usePage().props;

    const user = dosen || admin || "user not found";

    const { data, setData, post, processing, errors } = useForm({
        email: "",
        password: "",
        password_confirmation: "",
        first_name: "",
        last_name: "",
        nim: "",
        alamat: "",
        agama: "",
        jenis_kelamin: "",
        kelas_id: "",
        remember: false,
    });

    const submit = (e) => {
        e.preventDefault();
        post(route("mahasiswapost"));
    };

    return (
        <>
            <SideBar status={user} flash={flash}>
                <div className="mt-[64px]">
                    <Form
                        title={"Add Mahasiswa"}
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
                                    <Label labelFor={"nim"}>NIM</Label>
                                    <p className={"text-[10px]"}>
                                        *NIM harus lebih dari 10 dan kurang dari
                                        12 angka
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
                                {processing ? "Processing.." : "Adding"}
                            </Button>
                        </form>
                    </Form>
                </div>
            </SideBar>
        </>
    );
};

export default CreateMahasiswa;
