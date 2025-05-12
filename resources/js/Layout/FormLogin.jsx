import Input from "@/components/Input";
import Label from "@/components/Label";
import Button from "@/components/Button";

const FormLogin = ({ data, setData, errors, processing, submit }) => {
    return (
        <>
            <form onSubmit={submit}>
                <h5 className="text-xl font-medium text-paragraft dark:text-white mb-8 xl ml-3 sm:ml-4 xl:ml-4">
                    Sign in to our platform
                </h5>
                <div className="relative z-0 w-11/12 mb-8 group mx-auto">
                    <Input
                        type={"email"}
                        name={"email"}
                        value={data.value}
                        onChange={(e) => setData("email", e.target.value)}
                    />
                    <Label labelFor={"email"}>Email address</Label>
                    {errors.email && (
                        <p className="text-red-500 text-sm">{errors.email}</p>
                    )}
                </div>
                <div className="relative z-0 w-11/12 mb-10 group mx-auto">
                    <Input
                        type={"password"}
                        name={"password"}
                        value={data.password}
                        onChange={(e) => setData("password", e.target.value)}
                    />
                    <Label labelFor={"password"}>Password</Label>
                    {errors.password && (
                        <p className="text-red-500 text-sm">
                            {errors.password}
                        </p>
                    )}
                </div>
                <div className="flex justify-center ">
                    <Button
                        type={"submit"}
                        className={
                            "text-sm px-12 py-3 xl:mb-5 xl:text-sm xl:px-20 xl:py-3"
                        }
                        disabled={processing}
                    >
                        {processing ? "Processing.." : "Login to your account"}
                    </Button>
                </div>
            </form>
        </>
    );
};
export default FormLogin;
