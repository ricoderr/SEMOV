import React from "react";
import { useState } from "react";
import Button from "../components/Button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import InputBox from "../components/InputBox";

const LoginPage = () => {
  const [Email, setEmail] = useState("")
  const [Password, setPassword] = useState("")

  const HandleSubmit = (e)=>{
    e.preventDefault(); 
    console.log(Email)
    console.log(Password)
  }
  return (
    // split login page. 
    <div className="w-full h-full flex justify-center items-center bg-black ">
      <main className="bg-black w-[90%] h-[85%] flex justify-between items-center">
        <motion.div 
          initial={{x:350}}
          animate={{x:0}}
          exit={{x:350}}



        className=" bg-white w-[49%] h-[97%] flex flex-col justify-items-start items-center border-0 rounded-2xl">
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
              onSubmit={HandleSubmit}
              className="flex flex-col justify-between items-center w-1/2 h-[80%]"
            >
              
              <InputBox label="Email:" type="email" name="email" value={Email} onChange={(e) => setEmail(e.target.value)}/>
              <InputBox label="Password:" type="password" name="password" value={Password} onChange={(e) => setPassword(e.target.value)}/>
              
              <p className="text-2xl">
                Don't have an account?{" "}
                <Link  to="/auth/signup" className="underline text-[#ff3131] cursor-pointer hover:text-[#ffd200] ">
                  SignUp!
                </Link>
              </p>
              <Button text="Login" type="submit" />
            </form>
          </div>
        </motion.div>
        <motion.div 
        initial={{x:-340}}
        animate={{x:0}}
        exit={{x:-340}}
        className=" w-1/2 h-full bg-white border-0 rounded-2xl">
          <img src="/back-cover.png" alt="" className="h-full w-full object-cover border-0 rounded-2xl"/>
        </motion.div>
      </main>
    </div>
  );
};

export default LoginPage;
