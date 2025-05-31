import Sidebar from "@/Layout/Sidebar";
import { usePage } from "@inertiajs/react";
import { useEffect } from "react";
import Swal from "sweetalert2";
import CardC from "@/Layout/CardC";
import CardDB from "@/components/CardDB";
import CardDC from "@/components/CardDC";

const Dashboard = () => {
    const { flash, admin, dosen, kelas, prodi, auth } = usePage().props;
    if (!auth) return null;

    const user = admin || dosen || "user not found";

    useEffect(() => {
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
            <Sidebar flash={flash} status={user} auth={auth}>
                <div className="grid grid-cols-2 grid-rows-2 sm:grid-rows-2 md:grid-rows-1  xl:grid-cols-8 xl:grid-rows-12 gap-5 mt-[65px]">
                    {/* Card-component-header */}
                    <CardC />
                    {/* End-card-component-header */}
                    <div className=" col-span-7 md:col-span-2 lg:col-span-1 xl:col-span-6 xl:row-span-10 xl:row-start-3">
                        {/* Content-diagram */}
                        <CardDB kelas={kelas} />
                        {/* End-content-diagram */}
                    </div>
                    <div className=" col-span-7 md:col-span-2 lg:col-span-1 xl:col-span-2 xl:row-span-10 xl:col-start-7 xl:row-start-3">
                        {/* Content-diagram */}
                        <CardDC prodi={prodi} />
                        {/* End-content-diagram */}
                    </div>
                </div>
            </Sidebar>
        </>
    );
};
export default Dashboard;
