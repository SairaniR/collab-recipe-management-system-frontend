import "../styles/index.css";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from 'yup'
import appService from "../services/AppService.js";
import Notify from "./Notify.jsx";
function Register() {

    const registrationSchema = yup.object({
        name: yup.string().required("Name is required"),
        email: yup.string().email("Invalid email address").required("Email is required"),
        password: yup.string().required("Password is required").min(8, "Password is too short")
    })
    const { register, handleSubmit, formState: { errors } } = useForm({ resolver: yupResolver(registrationSchema) })
    const [type,setType]= useState("");
    const [message,setMessage]= useState("")
    const handleRegister = (formData) => {
        if (JSON.stringify(errors) === '{}') {
            const user = { name: formData.name, email: formData.email, password: formData.password }
            appService.createUser(user).then((response) => {
                console.log(response.data.message)
                setType('success')
                setMessage(response.data.message)
            }).catch((error) => {
                setType('error')
                setMessage(error.response.data.message)
                console.log(error.response.data.message)
            }).finally(() => {

            })
        }
    }
    return (
        <>
            <div className="">
                <div className="flex flex-row">
                    <div className="basis-1/3 bg-teal-400">
                        <div className="h-screen flex flex-col items-center justify-center">
                            <h1 className="text-5xl text-white font-bold mb-16">Welcome Back!!</h1>
                            <p className="text-white">Please Sign In if u already have an account</p>
                            <button className="border border-white rounded-full px-14 py-2 text-white mt-10">SIGN IN</button>
                        </div>
                    </div>
                    <div className="basis-2/3">
                        <div className="h-screen flex flex-col items-center justify-center">
                            <h1 className="text-5xl text-teal-400 font-bold mb-16">Create Account</h1>
                            <div className="w-96">
                            {type && message && <Notify type={type} message={message}></Notify>}
                            </div>

                            <div className="flex flex-col mb-3">
                                <input
                                    type="text"
                                    placeholder="Name"
                                    className={`bg-gray-100 w-96 p-3 ${errors.name ? "border border-red-400" : ""}`}
                                    id="name"
                                    {...register('name')}
                                />
                                {errors.name && <span id="name-error" className="text-red-400">{errors.name.message}</span>}
                            </div>
                            <div className="flex flex-col mb-3">
                                <input
                                    type="email"
                                    placeholder="Email"
                                    className={`bg-gray-100 w-96 p-3 ${errors.email ? "border border-red-400" : ""}`}
                                    id="email"
                                    {...register('email')}
                                />
                                {errors.email && <span id="email-error" className="text-red-400">{errors.email.message}</span>}
                            </div>
                            <div className="flex flex-col mb-3">
                                <input
                                    type="password"
                                    placeholder="Password"
                                    className={`bg-gray-100 w-96 p-3 ${errors.password ? "border border-red-400" : ""}`}
                                    id="password"
                                    {...register('password')}
                                />
                                {errors.password && <span id="password-error" className="text-red-400">{errors.password.message}</span>}
                            </div>
                            <button className="border rounded-full bg-teal-400 px-14 py-2 text-white mt-10" onClick={handleSubmit(handleRegister)}>SIGN UP</button>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}

export default Register;
