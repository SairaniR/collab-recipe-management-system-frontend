

function Login() {
  return (
    <div class="md:container md:mx-auto h-screen" >
      <div class="flex flex-row">
        <div class="basis-3/5 bg-white ">
          <div class="grid place-content-center">
            <p class="mt-32 mb-12 text-center text-5xl font-bold text-teal-800">Sign in to Recipedia</p>
            <form>
              <label class="relative block">
              {/* <span class="absolute inset-y-0 left-0 flex items-center pl-2">
                  <svg class="h-5 w-5 fill-slate-300 bg-red-700" viewBox="0 0 20 20"></svg>
                </span> */}
                <input type="email" name="email" class="mt-1 px-3 py-2 bg-grey border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full  sm:text-sm focus:ring-1" placeholder="Email" />
              </label>
              <label class="mt-4 relative block">
              {/* <span class="absolute inset-y-0 left-0 flex items-center pl-2">
                  <svg class="h-5 w-5 fill-slate-300 bg-red-700" viewBox="0 0 20 20"></svg>
                </span> */}
                <input type="password" name="password" class="mt-1 px-3 py-2 bg-grey border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full  sm:text-sm focus:ring-1" placeholder="Password" />
              </label>
              
            </form>
            <p class="mt-4 mb-8 text-lg text-center text-teal-800">Forgot your password?</p>
            <button class="mb-48 p-4 bg-teal-800 text-white rounded-full">SIGN IN</button>
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
