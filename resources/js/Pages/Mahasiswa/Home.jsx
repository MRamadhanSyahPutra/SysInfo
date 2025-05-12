import { useEffect } from "react";
import { usePage, Head } from "@inertiajs/react";
import Swal from "sweetalert2";
import Navbar from "@/Layout/Navbar";

const Home = () => {
    const { flash, auth } = usePage().props;

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
                icon: "success",
                title: flash.message,
            });
        }
        if (flash.message == "Akses ke halaman ini tidak tersedia.") {
            Swal.fire({
                title: "<h5 >Warning</h5>",
                icon: "warning",
                html: flash.message,
                showCloseButton: true,
            });
        }
    }, [flash]);

    return (
        <>
            <Head title="Home" />
            <Navbar auth={auth} activePage={"home"} />
            <h1 className=" text-red-500 text-center mt-52">Page Home</h1>
        </>
    );
};

export default Home;
