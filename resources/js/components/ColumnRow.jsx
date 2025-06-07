import { Link } from "@inertiajs/react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";

// import required modules
import { Grid, Pagination } from "swiper/modules";

const ColumnRow = ({ matkul }) => {
    return (
        <>
            <Swiper
                slidesPerView={1}
                grid={{
                    rows: 1,
                }}
                spaceBetween={30}
                pagination={{
                    clickable: true,
                }}
                breakpoints={{
                    640: {
                        slidesPerView: 2,
                    },
                    1024: {
                        slidesPerView: 3,
                    },
                }}
                modules={[Grid, Pagination]}
                className="mb-5"
            >
                {matkul.map((mk, index) => (
                    <SwiperSlide
                        className="bg-card pb-7 rounded-xl shadow hover:shadow-xl overflow-hidden"
                        key={index}
                    >
                        <Link href="#">
                            <div className="relative">
                                <img
                                    className="w-full h-48 object-cover"
                                    src={`${
                                        mk.foto_sampul == null
                                            ? "images/bg-cover-not-available.png"
                                            : "storage/images/matkul/".mk
                                                  .foto_sampul
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
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    );
};

export default ColumnRow;
