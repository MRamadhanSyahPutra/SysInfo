const GreenCircle = ({ color, right, index }) => {
    return (
        <div
            className={`${color} shadow-lg top-[30px] ${right} w-[600px] h-[600px] absolute rounded-full ${index}`}
        ></div>
    );
};

export default GreenCircle;
