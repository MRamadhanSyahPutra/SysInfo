import { Link } from "@inertiajs/react";

const CardD = ({
    children,
    title,
    subTitle,
    className,
    classCircle,
    ...props
}) => {
    return (
        <>
            <Link
                {...props}
                className={`block ${className} border p-2  hover:shadow rounded-[21px] shadow-sm dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700`}
            >
                <div className="grid grid-cols-[2fr_1fr]">
                    <div className="">
                        <h6 className="mb-2 pl-[15px] pt-[2px] xl:pl-[10px] xl:pt-[2px] text-[26px] md:text-[20px] xl:text-[23px] font-bold tracking-tight text-dashboard dark:text-white">
                            {title}
                        </h6>
                        <p className="text-dashboard  font-sans text-[15px] md:text-[10px] ml-[17px] -mt-[10px] xl:ml-[10px] xl:-mt-[10px]">
                            <i>{subTitle}</i>
                        </p>
                    </div>
                    <div className="">
                        <div
                            className={`inline-flex items-center justify-center rounded-full ml-[38px] mt-[10px] xl:ml-[25px] xl:mt-[10px] ${classCircle} w-[65px] h-[65px] sm:w-[60px] sm:h-[60px] md:w-[60px] md:h-[60px] lg:w-[55px] lg:h-[55px] xl:w-[55px] xl:h-[55px]`}
                        >
                            <div className="relative">{children}</div>
                        </div>
                    </div>
                </div>
            </Link>
        </>
    );
};

export default CardD;
