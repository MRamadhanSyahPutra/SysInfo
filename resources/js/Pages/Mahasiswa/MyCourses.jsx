import { usePage, Head, Link } from "@inertiajs/react";
import Navbar from "@/Layout/Navbar";
import BoxReveal from "@/components/ui/box-reveal";

const MyCourses = () => {
    const { auth } = usePage().props;

    const matakuliah = auth?.mhs?.matakuliahs || auth?.dosen?.matakuliahs;

    return (
        <>
            <Head title="Dashboard" />
            <Navbar auth={auth} activePage={"mycourses"} />
            <div className=" container mx-auto mt-[100px]">
                <BoxReveal>
                    <h1 className="text-brown text-[25px] font-bold mb-5">
                        My Courses
                    </h1>
                </BoxReveal>
                {matakuliah && (
                    <>
                        <div className="mb-5 rounded-xl shadow px-4 xl:px-10 py-5 bg-white">
                            <BoxReveal>
                                <h3 className="text-brown text-[21px] font-bold mb-5">
                                    Course overview
                                </h3>
                            </BoxReveal>
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-2">
                                {matakuliah.map((mk, index) => (
                                    <div
                                        className="bg-card pb-7 rounded-xl shadow hover:shadow-xl overflow-hidden"
                                        key={index}
                                    >
                                        <Link href="#">
                                            <div className="relative">
                                                <img
                                                    className="w-full h-48 object-cover"
                                                    src={`${
                                                        mk.foto_sampul == null
                                                            ? "/images/bg-cover-not-available.png"
                                                            : "/storage/images/matkul/" +
                                                              mk.foto_sampul
                                                    }`}
                                                    alt="Foto sampul"
                                                />
                                                <div className=" absolute top-2 left-3 bg-blue-500 px-2 py-1 rounded-xl">
                                                    <p className="text-[12px] text-white">
                                                        {mk.prodi.name}
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="mx-5">
                                                <h3 className="text-black text-[15px] mt-2 hover:underline">
                                                    {mk.name}
                                                </h3>
                                            </div>
                                        </Link>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </>
                )}
                {!matakuliah && <p>Tidak memiliki Courses</p>}
            </div>
        </>
    );
};

export default MyCourses;
