import Input from "@/components/Input";
import Label from "@/components/Label";
import Button from "@/components/Button";
import Select from "@/components/Select";

const FormSignUp = ({ action, method }) => {
    return (
        <>
            <form className="max-w-md mx-auto" onSubmit={submit}>
                <div className="relative z-0 w-full mb-5 group">
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
                <div className="relative z-0 w-full mb-5 group">
                    <Input type={"password"} name={"password"} />
                    <Label labelFor={"password"}>Password</Label>
                </div>
                <div className="relative z-0 w-full mb-5 group">
                    <Input type={"password"} name={"confirm_password"} />
                    <Label labelFor={"confirm_password"}>
                        Confirm Password
                    </Label>
                </div>
                <div className="grid md:grid-cols-2 md:gap-6">
                    <div className="relative z-0 w-full mb-5 group">
                        <Input type={"text"} name={"first_name"} />
                        <Label labelFor={"first_name"}>First Name</Label>
                    </div>
                    <div className="relative z-0 w-full mb-5 group">
                        <Input type={"text"} name={"last_name"} />
                        <Label labelFor={"last_name"}>Last Name</Label>
                    </div>
                </div>
                <div className="grid md:grid-cols-2 md:gap-6">
                    <div className="relative z-0 w-full mb-5 group">
                        <Input type={"number"} name={"nim"} />
                        <Label labelFor={"nim"}>Nim</Label>
                    </div>
                    <div className="relative z-0 w-full mb-5 group">
                        <Input type={"text"} name={"alamat"} />
                        <Label labelFor={"alamat"}>Alamat</Label>
                    </div>
                </div>
                <div className="grid md:grid-cols-2 md:gap-6">
                    <div className="relative z-0 w-full mb-5 group">
                        <Select label={"Agama"} name={"agama"}>
                            <option value="islam">Islam</option>
                            <option value="katolik">Katolik</option>
                            <option value="kristen_protestan">
                                Kristen Protestan
                            </option>
                            <option value="hindu">Hindu</option>
                            <option value="buddha">Buddha</option>
                            <option value="khonghucu">Khonghucu</option>
                        </Select>
                    </div>
                    <div className="relative z-0 w-full mb-5 group">
                        <Select label={"Jenis Kelamin"} name={"jenis_kelamin"}>
                            <option value="pria">Pria</option>
                            <option value="wanita">Wanita</option>
                        </Select>
                    </div>
                </div>
                <Button
                    type={"submit"}
                    className={
                        "text-2xl px-8 py-5 xl:mb-5 xl:text-sm xl:px-5 xl:py-2.5"
                    }
                    disabled={processing}
                >
                    {processing ? "Processing.." : "Sign in"}
                </Button>
            </form>
        </>
    );
};

export default FormSignUp;
