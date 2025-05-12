import Swal from "sweetalert2";
import Navbar from "../Layout/Navbar";
import Footer from "../Layout/Footer";
import { useEffect, useRef } from "react";
import Typed from "typed.js";
import AnimationGrades from "../../css/Animation/grades/grades-svg";
import WaveUp from "../../css/Animation/wave/WaveUp.jsx";
import Meteors from "../components/ui/meteors";
import SparklesText from "../components/ui/sparkles-text";
import { Head, usePage } from "@inertiajs/react";

const Welcome = () => {
    const typedRef = useRef(null);
    const { auth } = usePage().props;

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
                    <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden bg-meteor -mt-1 md:shadow-xl">
                        <Meteors number={30} />
                        <div className="mx-10 text-white">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Ipsa, eveniet.
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Welcome;
