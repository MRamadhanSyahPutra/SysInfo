import SummaryItem from "@/components/summaryItem";
import Navbar from "../Layout/Navbar";
import Button from "../components/Button";
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
                                Lorem ipsum dolor sit amet.
                            </h1>
                            <p className="text-[21px] mb-10 xl:mb-5 xl:text-[16px]">
                                Lorem ipsum dolor sit amet consectetur,
                                adipisicing elit. Hic, saepe quod nulla
                                inventore vitae ipsa asperiores itaque repellat
                                veritatis possimus ea eligendi cumque deserunt
                                magni rem. Harum dolor eum nulla quidem
                                molestiae debitis illum voluptas excepturi,
                                nobis ipsam facere perferendis facilis sunt
                                officiis, possimus eaque non adipisci aperiam
                                molestias mollitia.
                            </p>
                            <Button
                                type={"button"}
                                className={
                                    "text-2xl px-8 py-5  xl:mb-5 xl:text-sm xl:px-5 xl:py-2.5"
                                }
                            >
                                Contact me
                            </Button>
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
                </div>
            </div>
        </>
    );
}
