import { motion, AnimatePresence } from "framer-motion";
import FailedIcon from "./icons/FailedIcon";
import WarnIcon from "./icons/WarnIcon";
import SuccessIcon from "./icons/SuccessIcon";

const MessageBox = ({ text = "loggedin Successfully!", type = "success", show = true }) => {
  return (
    <AnimatePresence>
      {show && (
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
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MessageBox;
