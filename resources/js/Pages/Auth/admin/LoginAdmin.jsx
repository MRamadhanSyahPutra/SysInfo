import { Head, useForm, usePage } from "@inertiajs/react";
import FormLogin from "@/Layout/FormLogin";
import { route } from "Ziggy-js";
import Swal from "sweetalert2";
import { useEffect } from "react";

const LoginAdmin = () => {
    const { data, setData, post, processing, errors } = useForm({
        email: "",
        password: "",
        remember: false,
    });

    const submit = (e) => {
        e.preventDefault();
        post(route("postlogin.admin"));
    };

    const { flash } = usePage().props;

    useEffect(() => {
        if (errors.emailPassword) {
            if (errors.emailPassword) {
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
                    title: errors.emailPassword,
                });
            }
        }
    }, [errors]);

    useEffect(() => {
        if (flash.message) {
            Swal.fire({
                title: "<h5 ><strong>Oops! Belum Login</strong></h5>",
                icon: "warning",
                html: flash.message,
                showCloseButton: true,
            });
        }
    }, [flash]);

    return (
        <>
            <Head title="Login Admin" />
            <div className="mt-[100px] container mx-auto">
                <div className="bg-white py-12 px-6 border rounded-xl max-w-md mx-auto shadow-xl">
                    <FormLogin
                        data={data}
                        setData={setData}
                        errors={errors}
                        processing={processing}
                        submit={submit}
                    />
                </div>
            </div>
        </>
    );
};

export default LoginAdmin;
