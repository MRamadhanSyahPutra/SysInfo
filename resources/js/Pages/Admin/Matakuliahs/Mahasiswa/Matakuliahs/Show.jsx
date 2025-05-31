import Sidebar from "@/Layout/Sidebar";
import { usePage } from "@inertiajs/react";
import { route } from "Ziggy-js";
import { useEffect } from "react";
import Swal from "sweetalert2";
import CardBio from "@/components/CardBio";

const Show = () => {
    const { dosen, admin, flash, matakuliah, auth } = usePage().props;
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
                icon: "success",
                title: flash.message,
            });
        }
    }, [flash]);

    return (
        <>
            <Sidebar status={user} flash={flash} auth={auth}>
                <div className="mt-[65px]">
                    <CardBio
                        firstPlace={
                            <div className="mx-4">
                                <h3 className="text-4xl font-semibold">
                                    {matakuliah.name}
                                </h3>
                                <h6 className="ml-1 text-slate-400">
                                    {matakuliah.kode}
                                </h6>
                            </div>
                        }
                        secondPlace={
                            <>
                                <p>Dosen Pengajar : {matakuliah.dosen.name}</p>
                                <p>Prodi : {matakuliah.prodi.name}</p>
                                <p>Jumlah SKS : {matakuliah.jumlah_sks}</p>
                                <p>
                                    Total Mahasiswa:{" "}
                                    {matakuliah.mahasiswas.length}
                                </p>
                            </>
                        }
                        subTitle={
                            "Nama-nama Mahasiswa yang Mengikuti Mata Kuliah Ini: "
                        }
                        listData={matakuliah}
                        addLink={route(
                            "createmahasiswato.matakuliah",
                            matakuliah.id
                        )}
                        textLink={"Add Mahasiswa"}
                    />
                </div>
            </Sidebar>
        </>
    );
};

export default Show;
