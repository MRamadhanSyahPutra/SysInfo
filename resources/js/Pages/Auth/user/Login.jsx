import { Head } from "@inertiajs/react";
import Navbar from "@/Layout/Navbar";
import FormLogin from "@/Layout/FormLogin";
import { useForm, usePage } from "@inertiajs/react";
import { route } from "Ziggy-js";
import { useEffect } from "react";
import Swal from "sweetalert2";

const Login = () => {
    const { data, setData, errors, processing, post } = useForm({
        email: "",
        password: "",
        remember: false,
    });

    const submit = (e) => {
        e.preventDefault();
        post(route("postlogin"));
    };

    const { flash } = usePage().props;
    useEffect(() => {
        if (errors.emailpassword) {
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
                title: errors.emailpassword,
            });
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
            <Head title="Login" />
            <Navbar activePage={"login"} />
            <div className="mt-[100px] container mx-auto">
                <div className="bg-white py-12 px-6 border rounded-xl max-w-md mx-auto shadow-xl">
                    <FormLogin
                        submit={submit}
                        data={data}
                        setData={setData}
                        errors={errors}
                        processing={processing}
                    />
                </div>
            </div>
        </>
    );
};

export default Login;
