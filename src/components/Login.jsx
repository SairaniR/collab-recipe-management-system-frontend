import "../styles/index.css";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from 'yup';
import appService from "../services/AppService.js";
import Notify from "./Notify.jsx";

const loginSchema = yup.object({
  email: yup.string().email("Invalid email").required("Email is required"),
  password: yup.string().password("Invalid password").required("Password is required")
})
const { register, handleSubmit, formState: { errors } } = useForm({ resolver: yupResolver(loginSchema) })
const [type,setType]= useState("");
const [message,setMessage]= useState("")
const handleRegister = (formData) => {
    if (JSON.stringify(errors) === '{}') {
        const user = { email: formData.email, password: formData.password }
        appService.loginUser(user).then((response) => {
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
function Login() {
  return (
    <div class="md:container md:mx-auto h-screen" >
      <div class="flex flex-row">
        <div class="basis-3/5 bg-white ">
          <div class="grid place-content-center">
            <p class="mt-32 mb-12 text-center text-5xl font-bold text-teal-800">Sign in to Recipedia</p>
            <form>
              <label class="relative block">
              {type && message && <Notify type={type} message={message}></Notify>}
                <input type="email" 
                name="email" 
                class="mt-1 px-3 py-2 bg-grey border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full  sm:text-sm focus:ring-1" 
                placeholder="Email"
                id="email"
                 {...register('email')}
                 />
                  {errors.email && <span id="email-error" className="text-red-400">{errors.email.message}</span>}
              </label>
              <label class="mt-4 relative block">
              {type && message && <Notify type={type} message={message}></Notify>}
                <input type="password" 
                name="password"
                 class="mt-1 px-3 py-2 bg-grey border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full  sm:text-sm focus:ring-1" 
                 placeholder="Password" 
                 id="password"
                 {...register('password')}
                 />
                  {errors.password && <span id="password-error" className="text-red-400">{errors.password.message}</span>}
              </label>
              
            </form>
            <p class="mt-4 mb-8 text-lg text-center text-teal-800">Forgot your password?</p>
            <button class="mb-48 p-4 bg-teal-800 text-white rounded-full" onClick={handleSubmit(handleRegister)}>SIGN IN</button>
          </div>
        </div>
        <div class="basis-2/5 bg-gradient-to-r from-teal-600 to-teal-800">
          <div class="grid place-content-center">
            <p class="mt-32 mb-12 text-center text-white text-5xl font-bold">Hello, Friend!</p>
            <p class="my-2 text-xl text-center text-white">Enter your personal details</p>
            <p class="mb-12 text-xl text-center text-white">and start journey with us</p>
            <button class="mb-42 p-4 border border-white text-white rounded-full">SIGN UP</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
