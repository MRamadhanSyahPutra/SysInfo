import SummaryItem from "@/components/summaryItem";
import Navbar from "../Layout/Navbar";
import GreenCircle from "../components/GreenCircle";
import { Head, usePage } from "@inertiajs/react";

export default function About() {
    const { auth, mhs, prodi, jn, mk } = usePage().props;

    return (
        <>
            <Head title="About" />
            <Navbar activePage={"about"} auth={auth} />
            <div className="bold text-[20px] mt-[100px] container mx-auto">
                <div className="flex flex-col xl:justify-between mx-5">
                    <div className=" w-[900px] mt-[10px] sm:w-[900px] md:w-[900px] lg:w-[900px] xl:w-5/12 text-white p-4">
                        <div className=" text-paragraft p-2 w-11/12 ">
                            <h1 className="text-[54px] font-bold lg:text-[52px] lg:font-semibold mb-6 xl:text-[36px] xl:font-semibold xl:mb-3">
                                Solusi Digital Terintegrasi untuk Manajemen
                                Akademik
                            </h1>
                            <p className="text-[21px] mb-10 xl:mb-5 xl:text-[16px]">
                                SysInfo hadir sebagai platform sistem informasi
                                akademik yang membantu kampus mengelola data
                                mahasiswa, dosen, dan perkuliahan secara
                                efisien. Dengan fitur yang terintegrasi, SysInfo
                                mempercepat proses administrasi dan meningkatkan
                                kualitas layanan akademik.
                            </p>
                            <a
                                href={
                                    "https://www.linkedin.com/in/muhammad-ramadhan-syah-putra/"
                                }
                                className={
                                    "btn-greenc font-medium rounded-[6px] me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 text-2xl px-8 py-5  xl:mb-5 xl:text-sm xl:px-5 xl:py-2.5"
                                }
                            >
                                Contact me
                            </a>
                        </div>
                    </div>
                    <div className="w-full sm:w-full md:w-full lg:w-full xl:w-ful relative">
                        <div className="card-greendc w-[440px] h-[375px] absolute -bottom-100 left-[25px] rounded-[65px] hidden sm:hidden xl:block">
                            <div className="w-[440px] h-[375px] relative rounded-[65px] overflow-hidden">
                                <GreenCircle
                                    color={"green-circle-1"}
                                    right={"-right-[220px]"}
                                    index={"z-[1]"}
                                />
                                <GreenCircle
                                    color={"green-circle-2"}
                                    right={"-right-[280px]"}
                                    index={"z-[2]"}
                                />
                                <GreenCircle
                                    color={"green-circle-3"}
                                    right={"-right-[340px]"}
                                    index={"z-[3]"}
                                />
                                <GreenCircle
                                    color={"green-circle-4"}
                                    right={"-right-[420px]"}
                                    index={"z-[4]"}
                                />
                            </div>
                        </div>
                        <div className="card-gradient-greenc w-[834px] h-[614px] top-[50px] lg:w-[934px] lg:h-[614px] xl:w-[734px] xl:h-[514px] absolute xl:-top-[140px] xl:left-[500px] rounded-[65px]">
                            <div className="relative w-[834px] h-[614px] lg:w-[934px] lg:h-[614px] xl:w-[734px] xl:h-[514px] rounded-[65px] overflow-hidden">
                                <div className=" absolute w-[700px] h-[700px] lg:w-[800px] xl:w-[600px] xl:h-[600px] bg-white rounded-[35px] -bottom-[130px] right-[67px] shadow-xl">
                                    <div className="w-[610px] h-[350px] my-[40px] lg:w-[650px] xl:w-[550px] xl:h-[350px] mx-auto xl:my-[30px] relative">
                                        <img
                                            className="h-auto rounded-lg"
                                            src="/images/Politeknik.webp"
                                            alt="Politeknik-negeri-batam"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-[200px] xl:gap-[100px] mt-[800px] w-[800px] lg:w-[900px] xl:w-full xl:mt-[480px] mx-5 mb-5">
                        <SummaryItem count={mhs.length}>Mahasiswa</SummaryItem>
                        <SummaryItem count={prodi.length}>Prodi</SummaryItem>
                        <SummaryItem count={jn.length}>Jurusan</SummaryItem>
                        <SummaryItem count={mk.length}>Mata Kuliah</SummaryItem>
                    </div>
                    <div className="w-[860px] lg:w-[1000px] xl:w-full lg:mx-5 px-4 xl:px-10">
                        <div className="grid grid-cols-5 grid-rows-4 xl:grid-rows-4 gap-4 mt-14 mb-5">
                            <div className="col-span-5 row-span-4 xl:col-span-3 xl:row-span-4">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7978.1209260441765!2d104.04999699311472!3d1.116764679925288!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31d98921856ddfab%3A0xf9d9fc65ca00c9d!2sPoliteknik%20Negeri%20Batam!5e0!3m2!1sid!2sid!4v1748955058240!5m2!1sid!2sid"
                                    width="100%"
                                    height="450"
                                    style={{ border: 0 }}
                                    allowFullScreen=""
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                />
                            </div>
                            <div className="col-span-5 row-span-4 xl:col-span-2 xl:row-span-4 xl:col-start-4">
                                <div className="flex flex-col items-end text-paragraft">
                                    <p className="text-[16px] font-bold">
                                        Alamat :{" "}
                                        <small>
                                            Jl. Ahmad Yani Batam Kota. Kota
                                            Batam. kepulauan Riau. Indonesia
                                        </small>
                                    </p>
                                    <p className="text-[16px] font-bold">
                                        Phone : +62-778-469858 Ext.1017
                                    </p>
                                    <p className="text-[16px] font-bold">
                                        Fax : +62-778-463620
                                    </p>
                                    <p className="text-[16px] font-bold">
                                        Email : info@polibatam.ac.id
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
