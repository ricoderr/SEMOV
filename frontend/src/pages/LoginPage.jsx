import React from "react";
import Button from "../components/Button";

const LoginPage = () => {
  return (
    // split login page.
    <div className="w-full h-full flex justify-center items-center bg-black ">
      <main className="bg-white w-[90%] h-[85%] flex justify-between items-center">
        <section className="border-10 w-1/2 h-full flex flex-col justify-items-start items-center">
          <div className="h-[20%] w-full flex justify-center items-center">
            <div className="w-45 h-20 shadow">
              <img
                src="/Semov.png"
                alt="semov Logo"
                className="w-full h-full object-cover rounded-lg shadow-2xl"
              />
            </div>
          </div>
          <div className="h-[65%] w-full  flex items-center flex-col mt-10 ">
            <h1 className="text-6xl text-center h-[20%]">Login</h1>
            <form
              action=""
              method="POST"
              className="flex flex-col justify-between items-center w-1/2 h-[80%]"
            >
              <label htmlFor="email" className="text-3xl">
                Email:
                <input
                  type="text"
                  id="email"
                  name="email"
                  className="w-full
                    px-4
                    py-2
                    border
                    border-gray-300
                    rounded-md
                    focus:outline-none
                    focus:ring-2
                    focus:ring-[#ff3131]
                    focus:border-[#ff3131]
                    transition
                    duration-200
                    "
                />
              </label>
              <label htmlFor="password" className="text-3xl">
                Password:
                <input
                  type="password"
                  id="password"
                  name="password"
                  autoComplete="on"
                  className="
                    w-full
                    px-4
                    py-2
                    border
                    border-gray-300
                    rounded-md
                    focus:outline-none
                    focus:ring-2
                    focus:ring-[#ff3131]
                    focus:border-[#ff3131]
                    transition
                    duration-200
                "
                />
              </label>
              <p className="text-2xl">
                Don't have an account?{" "}
                <span className="underline text-[#ff3131] cursor-pointer  ">
                  SignUp!
                </span>
              </p>
              <Button text="Login" type="submit" />
            </form>
          </div>
        </section>
        <section className="border-2 w-1/2 h-full"></section>
      </main>
    </div>
  );
};

export default LoginPage;
