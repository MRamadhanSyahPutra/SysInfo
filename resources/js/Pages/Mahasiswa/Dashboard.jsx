import { useEffect } from "react";
import { usePage, Head } from "@inertiajs/react";
import Swal from "sweetalert2";
import Navbar from "@/Layout/Navbar";
import Calendar from "@/components/Calender";
import ColumnRow from "@/components/ColumnRow";
import BoxReveal from "@/components/ui/box-reveal";

const Dashboard = () => {
    const { flash, auth } = usePage().props;

    const matakuliah = auth?.mhs?.matakuliahs || auth?.dosen?.matakuliahs;

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
            <Head title="Dashboard" />
            <Navbar auth={auth} activePage={"dashboard"} />
            <div className=" container mx-auto mt-[100px]">
                <BoxReveal>
                    <h1 className="text-brown text-[26px] font-bold mb-5">
                        Dashboard
                    </h1>
                </BoxReveal>
                <div className="mb-5 rounded-xl shadow px-4 xl:px-10 py-5 bg-white">
                    {matakuliah && (
                        <>
                            <BoxReveal>
                                <h3 className="text-brown text-[21px] font-bold mb-5">
                                    Recently accessed courses
                                </h3>
                            </BoxReveal>
                            <ColumnRow matkul={matakuliah} />
                        </>
                    )}
                    <BoxReveal>
                        <h3 className="text-brown text-[21px] font-bold mb-5">
                            Calender
                        </h3>
                    </BoxReveal>
                    <Calendar />
                </div>
            </div>
        </>
    );
};

export default Dashboard;
