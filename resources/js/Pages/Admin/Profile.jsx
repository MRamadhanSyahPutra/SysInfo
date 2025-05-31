import Sidebar from "@/Layout/Sidebar";
import { usePage } from "@inertiajs/react";

const Profile = () => {
    const { flash, user, auth } = usePage().props;
    if (!auth) return null;

    return (
        <>
            <Sidebar status={user} flash={flash} auth={auth}>
                <div className="mt-[65px]">
                    <div className="h-auto relative block">
                        <img
                            src="/images/bg-white-2.png"
                            alt=""
                            className="rounded h-[150px] sm:h-[120px] lg:h-[150px] xl:h-[200px] w-full"
                        />
                        <div className="absolute flex top-[110px] left-6 sm:top-[85px] sm:left-8 md:left-10 lg:top-[115px] lg:left-12 xl:top-[166px] xl:left-12">
                            <img
                                className="rounded-full w-[90px] h-[90px] xl:w-40 xl:h-40"
                                src="/images/profile-picture-5.jpg"
                                alt="image description"
                            />
                            <div className="ml-8 my-auto">
                                <p className="font-semibold text-xl xl:text-3xl text-profile">
                                    {user.name}
                                </p>
                                <p className="text-slate-500">{user.email}</p>
                                {auth?.dosen && (
                                    <p className="text-slate-500">{user.nid}</p>
                                )}
                            </div>
                        </div>

                        {auth?.dosen && (
                            <div className="grid grid-cols-4 grid-rows-2 gap-4 mt-[120px] xl:mt-[160px]">
                                <div className=" col-span-4 xl:col-span-2 xl:row-span-2 bg-profile rounded-[12px] px-5 pt-4 pb-4">
                                    <h1 className="text-4xl font-semibold text-profile">
                                        {user.prodi.jurusan.name}
                                    </h1>
                                    <h2 className="text-lg text-profile ml-[6px]">
                                        {user.prodi.name}
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
                                            {user.prodi.kepala_prodi}
                                        </p>
                                        <h3 className="text-profile font-bold">
                                            Kelas yang dibimbing :
                                        </h3>
                                        <ul className="max-w-md space-y-1 text-gray-500 list-disc list-inside dark:text-gray-400 mb-5">
                                            {user.kelass.length === 1 ? (
                                                <li className="text-slate-500">
                                                    {user.kelass[0].name}
                                                </li>
                                            ) : (
                                                user.kelass.map((kls) => (
                                                    <li
                                                        key={kls.id}
                                                        className="text-slate-500"
                                                    >
                                                        {kls.name}
                                                    </li>
                                                ))
                                            )}
                                            {user.kelass.length === 0 && (
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
                                        {user.matakuliahs.length === 1 ? (
                                            <li className="text-slate-500">
                                                {user.matakuliahs[0].name}
                                            </li>
                                        ) : (
                                            user.matakuliahs.map((mk) => (
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
                                        {user.matakuliahs.length === 0 && (
                                            <p className="text-slate-500 text-center">
                                                Belum ada data
                                            </p>
                                        )}
                                    </ul>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </Sidebar>
        </>
    );
};

export default Profile;
