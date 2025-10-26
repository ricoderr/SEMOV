import { motion } from "framer-motion";

const LoadingBox = ()=> {
    return(
        <div className="fixed flex gap-3 justify-center items-center h-full w-full bg-black/50 z-50">
            {[1,2,3,4,5].map((n)=>(
                <motion.div
                key={n}
                className="w-3 h-10 bg-linear-to-t from-[#ff3131] to-[#ffd200] shadow-2xl shadow-white rounded-md"
                animate = {{scaleY: [1,1.8,1]}}
                transition={{duration : 0.8, delay: n*0.1, repeat: Infinity}}
                >
                    
                </motion.div>
            ))}
        </div>
    )
}

export default LoadingBox; 