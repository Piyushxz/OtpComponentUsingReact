import Button from "./components/Button"
import { Input } from "./components/Input"
import { useNavigate } from "react-router-dom"
const LandingPage = () =>{
    const navigate = useNavigate()
    return(
        <>
        <div className="h-screen">
            <div className="flex justify-center mt-20">
                <h1 className="font-bold text-4xl text-text1 font-montserrat">OTP<span className="font-bold text-4xl text-white font-montserrat">Component</span></h1>
            </div>

            <div className="flex justify-center mt-24">
            <Input placeholder={"Email Id"}/>
            
            </div>
            <div className="flex justify-center mt-10">
            <Button children={"Continue"} onClick={()=>navigate('/verify')} disabled={false} />

            </div>
            
        </div>
        </>
    )
}

export default LandingPage