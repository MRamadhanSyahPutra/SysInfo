import Marquee from "@/components/ui/marquee";

const CardTestimoni = ({ children, ...rest }) => {
    return (
        <>
            <Marquee
                className="text-welcome bg-meteor py-4 rounded-md shadow-md"
                pauseOnHover
                {...rest}
                speed={40}
            >
                {children}
            </Marquee>
        </>
    );
};

export default CardTestimoni;
