import "../styles/index.css";

function Register() {
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
                            <input
                                placeholder="Name"
                                className="bg-gray-100 mb-3 w-96 p-3"
                                id="name"
                            />
                            <input
                                placeholder="Email"
                                className="bg-gray-100 mb-3 w-96 p-3"
                                id="email"
                            />
                            <input
                                placeholder="Password"
                                className="bg-gray-100 mb-3 w-96 p-3"
                                id="password"
                            />
                            <button className="border rounded-full bg-teal-400 px-14 py-2 text-white mt-10">SIGN UP</button>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}

export default Register;
