import Sidebar from "@/Layout/Sidebar";
import { usePage } from "@inertiajs/react";
import { route } from "Ziggy-js";
import { useEffect } from "react";
import Swal from "sweetalert2";
import CardBio from "@/components/CardBio";

const Show = () => {
    const { dosen, admin, flash, mahasiswa } = usePage().props;
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
            <Sidebar status={user} flash={flash}>
                <div className="mt-[65px]">
                    <CardBio
                        firstPlace={
                            <div className="mx-4">
                                <img
                                    className="h-auto w-[350px] transition-all duration-300 rounded-lg cursor-pointer filter grayscale hover:grayscale-0"
                                    src={
                                        mahasiswa.jenis_kelamin == "pria"
                                            ? "/images/boy.png"
                                            : "/images/woman.png"
                                    }
                                    alt="image description"
                                />
                            </div>
                        }
                        secondPlace={
                            <>
                                <div className="text-slate-400 text-2xl font-semibold">
                                    {mahasiswa.kelas.prodi.name}
                                </div>
                                <div className="text-black text-7xl font-semibold mt-1">
                                    {mahasiswa.nama_lengkap}
                                </div>
                                <div className="text-black text-xl font-semibold mt-3">
                                    {mahasiswa.nim}
                                </div>
                            </>
                        }
                        subTitle={
                            " Daftar Mata Kuliah yang Diambil oleh Mahasiswa:"
                        }
                        listData={mahasiswa}
                        addLink={route("create.mahasiswa", mahasiswa.id)}
                        textLink={"Add Matakuliah"}
                    />
                </div>
            </Sidebar>
        </>
    );
};

export default Show;
