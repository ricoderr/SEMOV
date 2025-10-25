import { motion, AnimatePresence } from "framer-motion";
import FailedIcon from "./icons/FailedIcon";
import WarnIcon from "./icons/WarnIcon";
import SuccessIcon from "./icons/SuccessIcon";
import RemoveIcon from "./icons/RemoveIcon";
import { useState, useEffect } from "react";

const MessageBox = ({
  text = "loggedin Successfully!",
  type = "failed",
  InitialShow,
  duration = 3000, 
  onHide, 
}) => {
  const [Show, setShow] = useState(InitialShow);

  const HandleRemove = () => {
    setShow(false);
    onHide?.(); 
    console.log("Message Removed!");
  };

  useEffect(() => {
  setShow(InitialShow);
}, [InitialShow]);

  useEffect(() => {
    if(!Show) return;
    const timer = setTimeout(() => {setShow(false); 
      onHide?.(); 
    }, duration);
    return () => clearTimeout(timer);
  }, [onHide, Show,duration]);

  return (
    <AnimatePresence>
      {Show &&
        (
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.3 }}
            className={`flex justify-center items-center fixed  top-5 z-1 left-1/2 transform -translate-x-1/2 
          p-1 rounded-md shadow-lg ${
            type === "failed"
              ? "bg-[#ff3131] text-white"
              : type === "warn"
              ? "bg-[#FFD700] text-black"
              : type === "success"
              ? "bg-[#519F51] text-white"
              : "bg-white text-black"
          }`}
          >
            {type === "failed" ? (
              <FailedIcon />
            ) : type === "warn" ? (
              <WarnIcon />
            ) : type === "success" ? (
              <SuccessIcon />
            ) : null}
            <div className="relative top-0.5 ml-5 text-2xl">{text}</div>
            <div
              className="flex flex-col justify-start ml-4 cursor-pointer hover:opacity-75 hover:scale-125 transition-all"
              onClick={HandleRemove}
            >
              <RemoveIcon />
            </div>
          </motion.div>
        )}
    </AnimatePresence>
  );
};

export default MessageBox;
