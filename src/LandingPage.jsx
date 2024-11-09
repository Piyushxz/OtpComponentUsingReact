import Button from "./components/Button"
import { Input } from "./components/Input"

const LandingPage = () =>{
    return(
        <>
        <div className="h-screen">
            <div className="flex justify-center mt-20">
                <h1 className="font-bold text-4xl text-text1 font-montserrat">Webinar<span className="font-bold text-4xl text-white font-montserrat">.gg</span></h1>
            </div>

            <div className="flex justify-center mt-24">
            <Input placeholder={"Email Id"}/>
            
            </div>
            <div className="flex justify-center mt-10">
            <Button children={"Continue"} disabled={false} />

            </div>
            
        </div>
        </>
    )
}

export default LandingPage