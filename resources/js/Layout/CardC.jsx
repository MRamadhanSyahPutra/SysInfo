import CardD from "@/components/CardD";

const CardC = () => {
    const cardHeader = {
        head: ["", "xl:col-start-3", "xl:col-start-5", "xl:col-start-7"],
        classname: [
            "color-bg-user",
            "color-bg-jurusan",
            "color-bg-prodi",
            "color-bg-matakuliah",
        ],
        classCircle: [
            "circle-bg-user",
            "circle-bg-jurusan",
            "circle-bg-prodi",
            "circle-bg-matakuliah",
        ],
        title: ["Users", "Jurusan", "Prodi", "Matakuliah"],
        subTitle: ["Dosen & Mahasiswa", "TI, M&B, TE,& TM", "All", "All"],
        href: ["#users", "#jurusan", "#prodi", "#matakuliah"],
        svg: [
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 24 24"
            >
                <g
                    fill="none"
                    stroke="#26a69a"
                    strokeDasharray="28"
                    strokeDashoffset="28"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                >
                    <path d="M4 21v-1c0 -3.31 2.69 -6 6 -6h4c3.31 0 6 2.69 6 6v1">
                        <animate
                            fill="freeze"
                            attributeName="stroke-dashoffset"
                            dur="0.4s"
                            values="28;0"
                        />
                    </path>
                    <path d="M12 11c-2.21 0 -4 -1.79 -4 -4c0 -2.21 1.79 -4 4 -4c2.21 0 4 1.79 4 4c0 2.21 -1.79 4 -4 4Z">
                        <animate
                            fill="freeze"
                            attributeName="stroke-dashoffset"
                            begin="0.4s"
                            dur="0.4s"
                            values="28;0"
                        />
                    </path>
                </g>
            </svg>,
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 24 24"
            >
                <path
                    fill="#9c27b0"
                    d="M5 17v-7h2v7zm6 0v-7h2v7zm-9 4v-2h20v2zm15-4v-7h2v7zM2 8V6l10-5l10 5v2zm4.45-2h11.1zm0 0h11.1L12 3.25z"
                />
            </svg>,
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 16 16"
            >
                <path
                    fill="#ffb300"
                    fillRule="evenodd"
                    d="M14.5 2H9l-.35.15l-.65.64l-.65-.64L7 2H1.5l-.5.5v10l.5.5h5.29l.86.85h.7l.86-.85h5.29l.5-.5v-10zm-7 10.32l-.18-.17L7 12H2V3h4.79l.74.74zM14 12H9l-.35.15l-.14.13V3.7l.7-.7H14zM6 5H3v1h3zm0 4H3v1h3zM3 7h3v1H3zm10-2h-3v1h3zm-3 2h3v1h-3zm0 2h3v1h-3z"
                    clipRule="evenodd"
                />
            </svg>,
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 24 24"
            >
                <mask id="lineMdFileDocumentFilled0">
                    <g
                        fill="none"
                        stroke="#6200ea"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                    >
                        <path
                            fill="#6200ea"
                            fillOpacity="0"
                            strokeDasharray="64"
                            strokeDashoffset="64"
                            d="M13.5 3l5.5 5.5v11.5c0 0.55 -0.45 1 -1 1h-12c-0.55 0 -1 -0.45 -1 -1v-16c0 -0.55 0.45 -1 1 -1Z"
                        >
                            <animate
                                fill="freeze"
                                attributeName="fill-opacity"
                                begin="0.6s"
                                dur="0.5s"
                                values="0;1"
                            />
                            <animate
                                fill="freeze"
                                attributeName="stroke-dashoffset"
                                dur="0.6s"
                                values="64;0"
                            />
                        </path>
                        <path
                            fill="#000"
                            stroke="#000"
                            d="M14.5 3.5l0 4.5l4.5 0z"
                            opacity="0"
                        >
                            <set
                                fill="freeze"
                                attributeName="opacity"
                                begin="0.6s"
                                to="1"
                            />
                        </path>
                        <path d="M13.5 3l5.5 5.5" opacity="0">
                            <set
                                fill="freeze"
                                attributeName="opacity"
                                begin="0.6s"
                                to="1"
                            />
                        </path>
                        <path
                            stroke="#000"
                            strokeDasharray="12"
                            strokeDashoffset="12"
                            d="M7 13h10"
                        >
                            <animate
                                fill="freeze"
                                attributeName="stroke-dashoffset"
                                begin="1.1s"
                                dur="0.2s"
                                values="12;0"
                            />
                        </path>
                        <path
                            stroke="#000"
                            strokeDasharray="8"
                            strokeDashoffset="8"
                            d="M7 17h7"
                        >
                            <animate
                                fill="freeze"
                                attributeName="stroke-dashoffset"
                                begin="1.3s"
                                dur="0.2s"
                                values="8;0"
                            />
                        </path>
                    </g>
                </mask>
                <rect
                    width="24"
                    height="24"
                    fill="#000"
                    mask="url(#lineMdFileDocumentFilled0)"
                />
            </svg>,
        ],
    };

    return (
        <>
            {cardHeader.head.map((card, index) => (
                <div
                    className={`col-span-7 md:col-span-1 md:row-span-1 xl:col-span-2 xl:row-span-2 ${card}`}
                    key={index}
                >
                    <CardD
                        className={`${cardHeader.classname[index]}`}
                        classCircle={`${cardHeader.classCircle[index]}`}
                        title={`${cardHeader.title[index]}`}
                        subTitle={`${cardHeader.subTitle[index]}`}
                        href={`${cardHeader.href[index]}`}
                    >
                        {cardHeader.svg[index]}
                    </CardD>
                </div>
            ))}
        </>
    );
};

export default CardC;
