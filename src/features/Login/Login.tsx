import { useForm } from "react-hook-form";
import { useState } from "react";
import { useNavigate } from "react-router";
import { getFirstLoginData } from "./hooks";
import { setAuthHeader } from "../../api/axios";
import { useUser } from "../../context/UserContext";
import { LoginFormTypes } from "../../types/types";

const regexEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
const regexPassword = /^(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;

const Login = () => {
    //STATES
    const [loading, setLoading] = useState(false);

    //HOOKS

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const navigate = useNavigate();

    const { setState } = useUser();

    //FUNCTIONS

    const onSubmit = () => {
        getFirstLoginData().then((res) => {
            setAuthHeader(res.access_token);
            setState(res);
            localStorage.setItem("user", JSON.stringify(res));
            navigate("/dashboard");
        });
    };

    return (
        <div className="w-screen h-screen flex justify-center items-center flex-col">
            <div className="text-[25px] my-[10px]">Login</div>
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col">
                <div className="my-[10px] flex flex-col">
                    <input
                        placeholder="Username"
                        {...register("email", {
                            required: {
                                value: true,
                                message: "Campo requerido...",
                            },
                            validate: (value) =>
                                regexEmail.test(value) ||
                                "Usuario no válido...",
                        })}
                        disabled={loading}
                        className="border-[1px] rounded-lg p-[10px] outline-none"
                        autoComplete="off"
                    />

                    {errors.email && (
                        <span className="text-red-600">
                            {errors.email.message as string}
                        </span>
                    )}
                </div>

                <div className="my-[10px] flex flex-col">
                    <input
                        placeholder="Password"
                        type={"password"}
                        {...register("password", {
                            required: {
                                value: true,
                                message: "Campo requerido...",
                            },
                            validate: (value) =>
                                regexPassword.test(value) ||
                                "Contraseña no válida...",
                        })}
                        disabled={loading}
                        className="border-[1px] rounded-lg p-[10px] outline-none"
                        autoComplete="off"
                    />

                    {errors.password && (
                        <span className="alert error text-red-600">
                            {errors.password.message as string}
                        </span>
                    )}
                </div>

                <button
                    className="bg-red-500 p-[10px] rounded-lg text-white my-[10px]"
                    disabled={loading}
                >
                    Ingresar
                </button>
            </form>
        </div>
    );
};

export default Login;
