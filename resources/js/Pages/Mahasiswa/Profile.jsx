import Navbar from "@/Layout/Navbar";
import { usePage, Head } from "@inertiajs/react";

const Profile = () => {
    const { auth } = usePage().props;

    console.log(auth);

    return (
        <>
            <Head title="Profile" />
            <Navbar auth={auth} />
            <div className=" container mx-auto mt-[100px]">
                <div className="h-auto relative block">
                    <img
                        src="/images/bg-white-2.png"
                        alt=""
                        className="rounded h-[150px] sm:h-[120px] lg:h-[150px] xl:h-[200px] w-full"
                    />
                    <div className="absolute flex top-[110px] left-6 sm:top-[85px] sm:left-8 md:left-10 lg:top-[115px] lg:left-12 xl:top-[166px] xl:left-12">
                        <img
                            className="rounded-full w-[90px] h-[90px] xl:w-40 xl:h-40"
                            src={`${
                                auth.mhs
                                    ? auth.mhs.jenis_kelamin == "pria"
                                        ? "/images/boy.png"
                                        : "/images/woman.png"
                                    : "/images/profile-picture-5.jpg"
                            }`}
                            alt="image description"
                        />
                        <div className="ml-8 my-auto">
                            <p className="font-semibold text-xl xl:text-3xl text-profile">
                                {auth?.mhs?.nama_lengkap ??
                                    auth?.dosen?.name ??
                                    auth?.admin?.name}
                            </p>
                            <p className="text-slate-500">
                                {auth?.mhs?.email ??
                                    auth?.dosen?.email ??
                                    auth?.admin?.email}
                            </p>
                            {auth?.dosen && (
                                <p className="text-slate-500">
                                    {auth.dosen.nid}
                                </p>
                            )}
                            {auth?.mhs && (
                                <p className="text-slate-500">{auth.mhs.nim}</p>
                            )}
                        </div>
                    </div>
                    {/* Dosen */}
                    {auth?.dosen && (
                        <div className="grid grid-cols-4 grid-rows-2 gap-4 mt-[120px] xl:mt-[160px]">
                            <div className=" col-span-4 xl:col-span-2 xl:row-span-2 bg-profile rounded-[12px] px-5 pt-4 pb-4">
                                <h1 className="text-4xl font-semibold text-profile">
                                    {auth.dosen.prodi.jurusan.name}
                                </h1>
                                <h2 className="text-lg text-profile ml-[6px]">
                                    {auth.dosen.prodi.name}
                                </h2>
                                <div className="mt-5">
                                    <p className="text-slate-500 mb-5">
                                        <svg
                                            className="inline-block mb-1"
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="22"
                                            height="22"
                                            viewBox="0 0 24 24"
                                        >
                                            <g
                                                fill="#eae6da"
                                                fillOpacity="0"
                                                stroke="#d4a287"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                            >
                                                <path
                                                    strokeDasharray="20"
                                                    strokeDashoffset="20"
                                                    d="M12 5c1.66 0 3 1.34 3 3c0 1.66 -1.34 3 -3 3c-1.66 0 -3 -1.34 -3 -3c0 -1.66 1.34 -3 3 -3Z"
                                                >
                                                    <animate
                                                        fill="freeze"
                                                        attributeName="stroke-dashoffset"
                                                        dur="0.4s"
                                                        values="20;0"
                                                    />
                                                </path>
                                                <path
                                                    strokeDasharray="36"
                                                    strokeDashoffset="36"
                                                    d="M12 14c4 0 7 2 7 3v2h-14v-2c0 -1 3 -3 7 -3Z"
                                                >
                                                    <animate
                                                        fill="freeze"
                                                        attributeName="stroke-dashoffset"
                                                        begin="0.5s"
                                                        dur="0.5s"
                                                        values="36;0"
                                                    />
                                                </path>
                                                <animate
                                                    fill="freeze"
                                                    attributeName="fill-opacity"
                                                    begin="1.1s"
                                                    dur="0.15s"
                                                    values="0;0.3"
                                                />
                                            </g>
                                        </svg>{" "}
                                        Kepala Program Studi :{" "}
                                        {auth.dosen.prodi.kepala_prodi}
                                    </p>
                                    <h3 className="text-profile font-bold">
                                        Kelas yang dibimbing :
                                    </h3>
                                    <ul className="max-w-md space-y-1 text-gray-500 list-disc list-inside dark:text-gray-400 mb-5">
                                        {auth.dosen.kelass.length === 1 ? (
                                            <li className="text-slate-500">
                                                {auth.dosen.kelass[0].name}
                                            </li>
                                        ) : (
                                            auth.dosen.kelass.map((kls) => (
                                                <li
                                                    key={kls.id}
                                                    className="text-slate-500"
                                                >
                                                    {kls.name}
                                                </li>
                                            ))
                                        )}
                                        {auth.dosen.kelass.length === 0 && (
                                            <p className="text-slate-500 text-center">
                                                Belum ada data
                                            </p>
                                        )}
                                    </ul>
                                </div>
                            </div>
                            <div className=" col-span-4 xl:col-span-2 xl:row-span-2 xl:col-start-3 bg-profile rounded-[12px] px-5 pt-4 pb-4">
                                <h3 className="text-profile font-bold">
                                    Matakuliah yang diajarkan :
                                </h3>
                                <ul className=" grid grid-cols-2 grid-rows-2 text-gray-500 list-disc list-inside dark:text-gray-400">
                                    {auth.dosen.matakuliahs.length === 1 ? (
                                        <li className="text-slate-500">
                                            {auth.dosen.matakuliahs[0].name}
                                        </li>
                                    ) : (
                                        auth.dosen.matakuliahs.map((mk) => (
                                            <li
                                                key={mk.id}
                                                className="text-slate-500"
                                            >
                                                <small>
                                                    {mk.name} ({mk.kode})
                                                </small>
                                            </li>
                                        ))
                                    )}
                                    {auth.dosen.matakuliahs.length === 0 && (
                                        <p className="text-slate-500 text-center">
                                            Belum ada data
                                        </p>
                                    )}
                                </ul>
                            </div>
                        </div>
                    )}
                    {/* Mahasiswa */}
                    {auth.mhs && (
                        <>
                            <div className="grid grid-cols-4 grid-rows-2 gap-4 mt-[120px] xl:mt-[160px]">
                                <div className=" col-span-4 xl:col-span-2 xl:row-span-2 bg-profile rounded-[12px] px-5 pt-4 pb-4">
                                    <h1 className="text-4xl font-semibold text-profile">
                                        {auth.mhs.nama_lengkap}
                                    </h1>
                                    {auth.mhs?.kelas && (
                                        <h2 className="text-lg text-profile ml-[6px]">
                                            {auth.mhs.kelas.prodi.name}{" "}
                                            <small className="ml-1 underline">
                                                {
                                                    auth.mhs.kelas.prodi.jurusan
                                                        .name
                                                }
                                            </small>
                                        </h2>
                                    )}

                                    {auth.mhs?.kelas && (
                                        <div className="mt-5">
                                            <div className="mb-5">
                                                <p className="text-slate-500 mb-1">
                                                    <svg
                                                        className="inline-block mb-1"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width="22"
                                                        height="22"
                                                        viewBox="0 0 24 24"
                                                    >
                                                        <g
                                                            fill="#eae6da"
                                                            fillOpacity="0"
                                                            stroke="#d4a287"
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            strokeWidth="2"
                                                        >
                                                            <path
                                                                strokeDasharray="20"
                                                                strokeDashoffset="20"
                                                                d="M12 5c1.66 0 3 1.34 3 3c0 1.66 -1.34 3 -3 3c-1.66 0 -3 -1.34 -3 -3c0 -1.66 1.34 -3 3 -3Z"
                                                            >
                                                                <animate
                                                                    fill="freeze"
                                                                    attributeName="stroke-dashoffset"
                                                                    dur="0.4s"
                                                                    values="20;0"
                                                                />
                                                            </path>
                                                            <path
                                                                strokeDasharray="36"
                                                                strokeDashoffset="36"
                                                                d="M12 14c4 0 7 2 7 3v2h-14v-2c0 -1 3 -3 7 -3Z"
                                                            >
                                                                <animate
                                                                    fill="freeze"
                                                                    attributeName="stroke-dashoffset"
                                                                    begin="0.5s"
                                                                    dur="0.5s"
                                                                    values="36;0"
                                                                />
                                                            </path>
                                                            <animate
                                                                fill="freeze"
                                                                attributeName="fill-opacity"
                                                                begin="1.1s"
                                                                dur="0.15s"
                                                                values="0;0.3"
                                                            />
                                                        </g>
                                                    </svg>{" "}
                                                    Wali kelas :{" "}
                                                    {auth.mhs.kelas.dosen.name}
                                                </p>
                                                <p className="text-slate-500">
                                                    Kode class :{" "}
                                                    {auth.mhs.kelas.name}
                                                </p>
                                                <p className="text-slate-500">
                                                    Class :{" "}
                                                    {auth.mhs.kelas.jenis_kelas}
                                                </p>
                                                <p className="text-slate-500">
                                                    Daya tampung :{" "}
                                                    {
                                                        auth.mhs.kelas
                                                            .data_tampung
                                                    }
                                                </p>
                                            </div>
                                        </div>
                                    )}
                                </div>
                                <div className=" col-span-4 xl:col-span-2 xl:row-span-2 xl:col-start-3 bg-profile rounded-[12px] px-5 pt-4 pb-4">
                                    <h3 className="text-profile font-bold">
                                        Matakuliah yang telah diambil :
                                    </h3>
                                    <ul className=" grid grid-cols-2 grid-rows-2 text-gray-500 list-disc list-inside dark:text-gray-400">
                                        {auth.mhs.matakuliahs.length === 1 ? (
                                            <li className="text-slate-500">
                                                {auth.mhs.matakuliahs[0].name} (
                                                {auth.mhs.matakuliahs[0].kode})
                                            </li>
                                        ) : (
                                            auth.mhs.matakuliahs.map((mk) => (
                                                <li
                                                    key={mk.id}
                                                    className="text-slate-500"
                                                >
                                                    <small>
                                                        {mk.name} ({mk.kode})
                                                    </small>
                                                </li>
                                            ))
                                        )}
                                        {auth.mhs.matakuliahs.length === 0 && (
                                            <p className="text-slate-500 text-center">
                                                Belum ada data
                                            </p>
                                        )}
                                    </ul>
                                </div>
                            </div>
                        </>
                    )}
                </div>
            </div>
        </>
    );
};

export default Profile;
