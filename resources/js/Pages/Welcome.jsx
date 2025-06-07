import Navbar from "../Layout/Navbar";
import Footer from "../Layout/Footer";
import { useEffect, useRef } from "react";
import Typed from "typed.js";
import AnimationGrades from "../../css/Animation/grades/grades-svg";
import WaveUp from "../../css/Animation/wave/WaveUp.jsx";
import Meteors from "../components/ui/meteors";
import SparklesText from "../components/ui/sparkles-text";
import { Head, usePage } from "@inertiajs/react";
import BoxReveal from "../components/ui/box-reveal";
import CardGrid from "@/Layout/CardGrid";
import CardTestimoni from "@/Layout/CardTestimoni";

const Welcome = () => {
    const typedRef = useRef(null);
    const { auth } = usePage().props;

    const testimonials = [
        {
            name: "Ira Handayani",
            img: "/images/dummy/nerd.png",
            email: "ira@gmail.com",
            role: "Dosen Pembimbing",
            quote: "SysInfo memudahkan saya melihat daftar mahasiswa dan informasi mata kuliah yang saya ampu.",
        },
        {
            name: "Mutia Lailasari",
            img: "/images/dummy/geek.png",
            email: "mutia@gmail.com",
            role: "Mahasiswa Teknologi Rekayasa Robotika",
            quote: "Saya bisa langsung mengecek data dosen dan mata kuliah yang tersedia lewat SysInfo.",
        },
        {
            name: "Bapak Darman",
            img: "/images/profile-picture-5.jpg",
            role: "Admin Fakultas",
            quote: "Proses input dan pembaruan data dosen maupun mahasiswa jadi jauh lebih cepat berkat SysInfo.",
        },
        {
            name: "Edward Maryadi",
            img: "/images/dummy/reading.png",
            email: "edward@gmail.com",
            role: "Mahasiswa Akuntansi Manajerial",
            quote: "Tampilan antarmukanya bersih dan mudah digunakan. Saya langsung paham saat pertama mencoba.",
        },
        {
            name: "Julia Purnawati",
            img: "/images/dummy/study.png",
            email: "julia@gmail.com",
            role: "Dosen Pembimbing",
            quote: "Fitur pencarian data mahasiswa dan mata kuliah sangat membantu dalam kegiatan akademik saya.",
        },
        {
            name: "Luis Marpaung",
            img: "/images/dummy/man.png",
            email: "luis@gmail.com",
            role: "Mahasiswa Baru",
            quote: "Sebagai mahasiswa baru, saya merasa terbantu karena semua data penting tersedia di satu tempat.",
        },
    ];

    useEffect(() => {
        const option = {
            strings: [
                `mempermudahkan akses informasi perkuliahan kamu!`,
                `<span class="text-orange">solusi pintar untuk perkuliahan yang lebih efisien✨</span>`,
            ],
            typeSpeed: 50,
            backSpeed: 100,
            loop: true,
        };

        const typed = new Typed(typedRef.current, option);

        return () => typed.destroy();
    }, []);

    return (
        <>
            <Head title="Welcome" />
            <Navbar auth={auth} />
            <div className="container mx-auto mt-20">
                <div className="flex flex-col sm:flex-row sm:justify-between">
                    <div className="w-full sm:w-5/12 md:w-6/12 lg:w-1/2 xl:w-7/12 mx-5 p-3 sm:p-5 mb-14 sm:mb-0 xl:mb-0">
                        <div className="text-paragraft text-[18px] sm:text-[11.5px] md:text-[14px] lg:text-[18px] xl:text-[20px] font-bold mb-3">
                            <SparklesText text="System Informasi" />
                        </div>
                        <h1 className="text-paragraft text-4xl  font-bold mb-6 sm:text-2xl sm:text-[19px] md:text-[20px] md:text-3xl lg:text-[34px] xl:text-[36px] xl:text-4xl">
                            SysInfo <span ref={typedRef}></span>
                        </h1>
                        <p className="text-paragraft text-[16.2px] sm:text-[10px] md:text-[12px] lg:text-[14px] xl:text-[18px]">
                            SysInfo merupakan sistem informasi terpadu yang
                            dirancang untuk memudahkan akses informasi
                            perkuliahan. Mulai dari data mahasiswa, jurusan,
                            program studi, hingga mata kuliah dan dosen
                            pengajar—semua dapat diakses dengan mudah dalam satu
                            platform.
                        </p>
                        <hr />
                        <button
                            type="button"
                            className="btn-grades mt-4 ml-3 rounded "
                        >
                            <img
                                className="sm:w-[28px] md:w-[32px] lg:w-[36px] xl:w-[40px]"
                                src="/images/icon-favicon.png"
                                alt=""
                                width={40}
                            />
                        </button>
                    </div>
                    <div className="w-full sm:w-7/12 md:w-6/12 lg:w-1/2 xl:w-5/12 mx-5 p-3 sm:p-5 mb-5 xl:mb-0">
                        <AnimationGrades />
                    </div>
                </div>
                <div className="-mt-6 sm:-mt-14 md:-mt-16 lg:-mt-[80px] xl:-mt-[100px] w-full">
                    <WaveUp />
                    <div className="relative flex h-[2200px] xl:h-[1750px] w-full flex-col overflow-hidden bg-meteor -mt-1 md:shadow-xl">
                        {/* <Meteors number={30} /> */}
                        <div className="mx-8 mt-20 text-welcome ">
                            <div className="mb-7">
                                <BoxReveal>
                                    <h1 className="text-2xl font-semibold">
                                        Top features
                                    </h1>
                                </BoxReveal>
                            </div>
                            <CardGrid />
                            <div className="mt-20 mb-7">
                                <BoxReveal>
                                    <h1 className="text-2xl font-semibold ">
                                        Testimonial
                                    </h1>
                                </BoxReveal>
                            </div>
                            <CardTestimoni reverse>
                                {testimonials.map((test, index) => (
                                    <a
                                        href="#"
                                        key={index}
                                        className="block max-w-sm p-6 bg-card border border-green-800 rounded-xl shadow-sm bg-card-hover dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
                                    >
                                        <div className="flex mb-3">
                                            <img
                                                className="rounded-full w-10 h-10"
                                                src="/images/dummy/man.png"
                                                alt="image description"
                                            />
                                            <div className="ml-5">
                                                <p className="text-black text-[17px]">
                                                    {test.name}
                                                </p>
                                                <p className="text-black text-[17px]">
                                                    {test.email}
                                                </p>
                                            </div>
                                        </div>
                                        <div className="">
                                            <p className="text-[14px]">
                                                {test.quote}
                                            </p>
                                        </div>
                                    </a>
                                ))}
                            </CardTestimoni>
                            <CardTestimoni>
                                {testimonials.map((test, index) => (
                                    <a
                                        href="#"
                                        key={index}
                                        className="block max-w-sm p-6 bg-card border border-green-800 rounded-xl shadow-sm bg-card-hover dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
                                    >
                                        <div className="flex mb-3">
                                            <img
                                                className="rounded-full w-10 h-10"
                                                src={`${test.img}`}
                                                alt="image description"
                                            />
                                            <div className="ml-5">
                                                <p className="text-black text-[17px]">
                                                    {test.name}
                                                </p>
                                                <p className="text-black text-[17px]">
                                                    {test.email}
                                                </p>
                                            </div>
                                        </div>
                                        <div className="">
                                            <p className="text-[14px]">
                                                {test.quote}
                                            </p>
                                        </div>
                                    </a>
                                ))}
                            </CardTestimoni>
                            <div className="mt-20 mb-10">
                                <BoxReveal>
                                    <h1 className="text-2xl font-semibold ">
                                        Learning activities
                                    </h1>
                                </BoxReveal>
                            </div>

                            <div className="grid grid-cols-4 grid-rows-4 gap-4">
                                <div className="col-span-4 row-span-4 xl:col-span-2 xl:row-span-2">
                                    <div className="relative h-64 w-full mask-gradient-t-first">
                                        <img
                                            src="/images/learning/learning-1.jpg"
                                            alt="learning"
                                            className="object-cover w-full h-full"
                                        />
                                    </div>
                                </div>
                                <div className="col-span-4 row-span-4 xl:col-span-2 xl:row-span-2 xl:col-start-3 xl:row-start-3">
                                    <div className="relative h-64 w-full mask-gradient-t-second">
                                        <img
                                            src="/images/learning/learning-2.jpg"
                                            alt="learning"
                                            className="object-cover w-full h-full"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Welcome;
