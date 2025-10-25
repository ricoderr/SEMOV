import LoginPage from "./pages/LoginPage"
import SignupPage from "./pages/SignupPage"
import { AnimatePresence } from "framer-motion"
import { Route, Routes, useLocation } from "react-router-dom"

const AnimatedRoutes = ()=>{
    const location = useLocation()
    return (
        <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
                <Route path="/auth/login" element={<LoginPage/>}/>
                <Route path="/auth/signup" element={<SignupPage/>}/>
            </Routes>
        </AnimatePresence>
    
)}

export default AnimatedRoutes