import ReactCardFlip from "react-card-flip";
import { useState } from "react";

const CardGrid = () => {
    const [isFlipped, setIsFlipped] = useState(false);
    const [isFlippedSecond, setIsFlippedSecond] = useState(false);
    const [isFlippedThird, setIsFlippedThird] = useState(false);
    const [isFlippedFourth, setIsFlippedFourth] = useState(false);
    const [isFlippedFifth, setIsFlippedFifth] = useState(false);

    const card = {
        isFlipped: [
            isFlipped,
            isFlippedSecond,
            isFlippedThird,
            isFlippedFourth,
            isFlippedFifth,
        ],
        setIsFlipped: [
            setIsFlipped,
            setIsFlippedSecond,
            setIsFlippedThird,
            setIsFlippedFourth,
            setIsFlippedFifth,
        ],
        className: [
            "",
            "xl:col-start-3",
            "xl:col-start-5",
            "xl:col-start-2 xl:row-start-3",
            "xl:col-start-4 xl:row-start-3",
        ],
        svg: [
            // first
            <svg
                className="inline-block mb-2"
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                viewBox="0 0 24 24"
            >
                <g
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                >
                    <path
                        strokeDasharray="64"
                        strokeDashoffset="64"
                        d="M13.5 3l5.5 5.5v11.5c0 0.55 -0.45 1 -1 1h-12c-0.55 0 -1 -0.45 -1 -1v-16c0 -0.55 0.45 -1 1 -1Z"
                    >
                        <animate
                            fill="freeze"
                            attributeName="stroke-dashoffset"
                            dur="0.6s"
                            values="64;0"
                        />
                    </path>
                    <path d="M14.5 3.5l2.25 2.25l2.25 2.25z" opacity="0">
                        <animate
                            fill="freeze"
                            attributeName="d"
                            begin="0.6s"
                            dur="0.2s"
                            values="M14.5 3.5l2.25 2.25l2.25 2.25z;M14.5 3.5l0 4.5l4.5 0z"
                        />
                        <set
                            fill="freeze"
                            attributeName="opacity"
                            begin="0.6s"
                            to="1"
                        />
                    </path>
                    <path strokeDasharray="8" strokeDashoffset="8" d="M9 13h6">
                        <animate
                            fill="freeze"
                            attributeName="stroke-dashoffset"
                            begin="0.8s"
                            dur="0.2s"
                            values="8;0"
                        />
                    </path>
                    <path strokeDasharray="4" strokeDashoffset="4" d="M9 17h3">
                        <animate
                            fill="freeze"
                            attributeName="stroke-dashoffset"
                            begin="1s"
                            dur="0.2s"
                            values="4;0"
                        />
                    </path>
                </g>
            </svg>,
            // Second
            <svg
                className="inline-block mb-2"
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                viewBox="0 0 24 24"
            >
                <path
                    fill="currentColor"
                    d="M16.36 12.76C18.31 13.42 20 14.5 20 16v5H4v-5c0-1.5 1.69-2.58 3.65-3.24L8.27 14l.23.5c-1.5.46-2.6 1.12-2.6 1.5v3.1h4.22l.88-5.07l-.94-1.88c.62-.07 1.27-.12 1.94-.12s1.32.05 1.94.12L13 14.03l.88 5.07h4.22V16c0-.38-1.1-1.04-2.6-1.5l.23-.5zM12 5c-1.1 0-2 .9-2 2s.9 2 2 2s2-.9 2-2s-.9-2-2-2m0 6c-2.21 0-4-1.79-4-4s1.79-4 4-4s4 1.79 4 4s-1.79 4-4 4"
                />
            </svg>,
            // thirth
            <svg
                className="inline-block mb-2"
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                viewBox="0 0 24 24"
            >
                <g
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                >
                    <path
                        strokeDasharray="64"
                        strokeDashoffset="64"
                        d="M13.5 3l5.5 5.5v11.5c0 0.55 -0.45 1 -1 1h-12c-0.55 0 -1 -0.45 -1 -1v-16c0 -0.55 0.45 -1 1 -1Z"
                    >
                        <animate
                            fill="freeze"
                            attributeName="stroke-dashoffset"
                            dur="0.6s"
                            values="64;0"
                        />
                    </path>
                    <path d="M14.5 3.5l2.25 2.25l2.25 2.25z" opacity="0">
                        <animate
                            fill="freeze"
                            attributeName="d"
                            begin="0.6s"
                            dur="0.2s"
                            values="M14.5 3.5l2.25 2.25l2.25 2.25z;M14.5 3.5l0 4.5l4.5 0z"
                        />
                        <set
                            fill="freeze"
                            attributeName="opacity"
                            begin="0.6s"
                            to="1"
                        />
                    </path>
                    <path strokeDasharray="8" strokeDashoffset="8" d="M9 13h6">
                        <animate
                            fill="freeze"
                            attributeName="stroke-dashoffset"
                            begin="0.8s"
                            dur="0.2s"
                            values="8;0"
                        />
                    </path>
                    <path strokeDasharray="4" strokeDashoffset="4" d="M9 17h3">
                        <animate
                            fill="freeze"
                            attributeName="stroke-dashoffset"
                            begin="1s"
                            dur="0.2s"
                            values="4;0"
                        />
                    </path>
                </g>
            </svg>,
            // fourth
            <svg
                className="inline-block mb-2"
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                viewBox="0 0 24 24"
            >
                <path
                    fill="currentColor"
                    d="M4 20V9h4v11zM4 8V4h4v4zm6 12v-8h4v8zm0-9V7h4v4zm6 9v-5h4v5zm0-6v-4h4v4z"
                />
            </svg>,
            // fifth
            <svg
                className="inline-block mb-2"
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                viewBox="0 0 24 24"
            >
                <rect width="14" height="0" x="5" y="5" fill="currentColor">
                    <animate
                        fill="freeze"
                        attributeName="height"
                        begin="0.6s"
                        dur="0.2s"
                        values="0;3"
                    />
                </rect>
                <g
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                >
                    <path
                        strokeDasharray="64"
                        strokeDashoffset="64"
                        d="M12 4h7c0.55 0 1 0.45 1 1v14c0 0.55 -0.45 1 -1 1h-14c-0.55 0 -1 -0.45 -1 -1v-14c0 -0.55 0.45 -1 1 -1Z"
                    >
                        <animate
                            fill="freeze"
                            attributeName="stroke-dashoffset"
                            dur="0.6s"
                            values="64;0"
                        />
                    </path>
                    <path
                        strokeDasharray="4"
                        strokeDashoffset="4"
                        d="M7 4v-2M17 4v-2"
                    >
                        <animate
                            fill="freeze"
                            attributeName="stroke-dashoffset"
                            begin="0.6s"
                            dur="0.2s"
                            values="4;0"
                        />
                    </path>
                    <path
                        strokeDasharray="12"
                        strokeDashoffset="12"
                        d="M7 11h10"
                    >
                        <animate
                            fill="freeze"
                            attributeName="stroke-dashoffset"
                            begin="0.8s"
                            dur="0.2s"
                            values="12;0"
                        />
                    </path>
                    <path strokeDasharray="8" strokeDashoffset="8" d="M7 15h7">
                        <animate
                            fill="freeze"
                            attributeName="stroke-dashoffset"
                            begin="1s"
                            dur="0.2s"
                            values="8;0"
                        />
                    </path>
                </g>
            </svg>,
        ],
        title: [
            "Mahasiswa",
            "Dosen",
            "Mata Kuliah",
            "Nilai Akademik",
            "Jadwal Perkuliahan",
        ],
        deskirpsi: [
            "Kelola data mahasiswa beserta identitasan informasi kelas.",
            "Kelola data dosen beserta NIDN, prodi, dan jurusan.",
            "Menampilkan data mata kuliah lengkap dengan kode, nama, dan SKS.",
            "Kelola nilai mahasiswa per mata kuliah — segera tersedia.",
            "Fitur jadwal kuliah (hari, jam, ruang, dosen) — segera tersedia.",
        ],
        status: [
            "✅ Tersedia",
            "✅ Tersedia",
            "✅ Tersedia",
            "🔧Coming Soon",
            "🔧Coming Soon",
        ],
    };

    return (
        <>
            <div className="grid grid-cols-2 md:grid-cols-4 md:grid-rows-4 lg:grid-cols-6 grid-rows-10 xl:grid-cols-6 xl:grid-rows-4 gap-4 ">
                {card.className.map((cls, index) => (
                    <div
                        className={`col-span-2 row-span-2 mx-auto xl:col-span-2 xl:row-span-2 ${cls}`}
                        key={index}
                    >
                        <div className="block bg-card max-w-sm p-5 rounded-xl shadow-sm">
                            <ReactCardFlip
                                isFlipped={card.isFlipped[index]}
                                flipDirection="horizontal"
                            >
                                <div
                                    className="w-full h-[100px]  xl:w-[330px] xl:h-[100px]"
                                    key="front"
                                    onMouseEnter={() =>
                                        card.setIsFlipped[index](true)
                                    }
                                >
                                    <a href="#">
                                        <div className="mb-2">
                                            {card.svg[index]}
                                            <h5 className="ml-2 text-2xl font-bold tracking-tight text-welcome inline">
                                                {card.title[index]}
                                            </h5>
                                        </div>
                                        <p className="font-normal text-welcome">
                                            {card.deskirpsi[index]}
                                        </p>
                                    </a>
                                </div>

                                <div
                                    className="max-w-xm w-full h-[100px] xl:w-[330px] xl:h-[100px] text-welcome text-[17px] font-semibold p-6 rounded-xl flex items-center justify-center"
                                    key="back"
                                    onMouseLeave={() =>
                                        card.setIsFlipped[index](false)
                                    }
                                >
                                    {card.status[index]}
                                </div>
                            </ReactCardFlip>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
};

export default CardGrid;
