import Button from "@/components/Button";
import Input from "@/components/Input";
import Label from "@/components/Label";
import Form from "@/Layout/Form";
import Sidebar from "@/Layout/Sidebar";
import { usePage, useForm } from "@inertiajs/react";
import { route } from "Ziggy-js";

const CreateJurusan = () => {
    const { flash, dosen, admin } = usePage().props;

    const user = dosen || admin || "user not found";

    const { data, setData, processing, post, errors } = useForm({
        name: "",
    });

    const submit = (e) => {
        e.preventDefault();
        post(route("jurusanpost"));
    };

    return (
        <>
            <Sidebar status={user} flash={flash}>
                <div className="mt-[65px]">
                    <Form title={"Add Jurusan"} hrefBack={route("jurusan")}>
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
                                <Label labelFor={"email"}>Nama Jurusan</Label>
                                {errors.name && (
                                    <p className="text-red-500 text-sm">
                                        {errors.name}
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

export default CreateJurusan;
