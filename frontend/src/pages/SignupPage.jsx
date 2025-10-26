import Button from "../components/Button";
import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import InputBox from "../components/InputBox";
import MessageBox from "../components/MessageBox";

const SignupPage = () => {
  const [Username, setUsername] = useState("");
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [Msg, setMsg] = useState("");
  const [MsgType, setMsgType] = useState("");

  const BASE_URL = "http://127.0.0.1:8000";

  const HandleSignup = async (e) => {
    e.preventDefault();
    console.log("form submitted!");
    console.log(Password);
    console.log(Username);
    console.log(Msg);

    if (Password.length < 8) {
      setMsgType("warn");
      setMsg("Password must contain at least 8 letters.");
    } else {
      try {
        const response = await fetch(`${BASE_URL}/auth/signup/`, {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify({
            username: Username,
            email: Email,
            password: Password,
          }),
        });

        if (!response) {
          throw new Error("No response from the server!");
        } else {
          const data = await response.json();
          response.status >= 400 ? setMsgType("failed") : setMsgType("success");
          setMsg(data.message);
        }
      } catch (err) {
        console.error("Unable to fetch! MSG:", err);
      }
    }
  }; 

  return (
    <div className="w-full h-full flex justify-center items-center bg-black ">
      {Msg ? <MessageBox text={Msg} type={MsgType} onUsed={() => setMsg("")} /> : null}
      <main className="bg-black w-[90%] h-[85%] flex justify-between items-center">
        <motion.div
          initial={{ x: 235 }}
          animate={{ x: 470 }}
          exit={{ x: 235 }}
          transition={{ type: "tween" }}
          className="bg-white w-[49%] h-[97%] flex flex-col justify-items-start items-center border-0 rounded-2xl"
        >
          <div className="h-[20%] w-full flex justify-center items-center">
            <div className="w-35 h-15 shadow">
              <img
                src="/Semov.png"
                alt="semov Logo"
                className="w-full h-full object-cover rounded-lg shadow-2xl"
              />
            </div>
          </div>
          <div className="h-[65%] w-full flex items-center flex-col mt-2">
            <h1 className="text-4xl text-center h-[20%]">SignUp</h1>
            <form
              onSubmit={HandleSignup}
              className="flex flex-col justify-between items-center w-1/2 h-[82%]"
            >
              <InputBox
                label="Username: "
                type="text"
                name="username"
                value={Username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <InputBox
                label="Email: "
                type="email"
                name="email"
                value={Email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <InputBox
                label="Password: "
                type="password"
                name="password"
                value={Password}
                onChange={(e) => setPassword(e.target.value)}
              />

              <p className="text-1xl">
                Already have an account?{" "}
                <Link
                  to="/auth/login"
                  className="text-[#ff3131] cursor-pointer hover:text-[#ffd200]"
                >
                  Login!
                </Link>
              </p>
              <Button text="Signup" type="submit" />
            </form>
          </div>
        </motion.div>

        <motion.div
          initial={{ x: -230 }}
          animate={{ x: -461 }}
          exit={{ x: -230 }}
          transition={{ type: "tween" }}
          className="w-1/2 h-full bg-white border-0 rounded-2xl"
        >
          <img
            src="/back-cover.png"
            alt=""
            className="h-full w-full object-cover border-0 rounded-2xl"
          />
        </motion.div>
      </main>
    </div>
  );
};

export default SignupPage;

