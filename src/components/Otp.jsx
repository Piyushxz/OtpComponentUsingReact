import { useRef, useState } from "react"
import Button from "./Button"

export const Otp = () =>{
    const ref1 = useRef()
    const ref2= useRef()
    const ref3 = useRef()
    const ref4 = useRef()
    const ref5 = useRef()
    const [disabled,setDisabled] = useState(true)
    return(
        <>

        <div className="flex flex-col ">
        <div className="mt-20 flex justify-center">
            <h1 className="font-montserrat text-text1 font-bold sm:text-5xl text-2xl">Enter the Otp</h1>
        </div>
        <div className="mt-10 flex justify-center">
        <OtpBox reference={ref1} 
        onDone={()=>ref2.current.focus()}
        handleBackClick={()=>ref1.current.focus()}
            />


        <OtpBox  reference={ref2} 
         onDone={()=>ref3.current.focus()}
         handleBackClick={()=>ref1.current.focus()}
         />

        <OtpBox reference={ref3}
        onDone={()=>ref4.current.focus()}
        handleBackClick={()=>ref2.current.focus()}/>

        <OtpBox reference={ref4}
         onDone={()=>ref5.current.focus()}

         handleBackClick={()=>ref3.current.focus()}/>
        <OtpBox reference={ref5}
        onDone={()=>setDisabled(false)}

        handleBackClick={()=>{ref4.current.focus()
            setDisabled(true)
        }
        }/>
        </div>
        <div className="mt-10 flex justify-center">
            <Button disabled={disabled}>Verify</Button>
        </div>
        </div>


        
        </>
    )
}

const OtpBox = ({reference,onDone,handleBackClick}) =>{
    function isSingleDigit(input) {
        return /^[0-9]$/.test(input);
    }

    const[inputVal,setInputVal] = useState('')
    return(
        <input onChange={(e)=>{
            
            console.log(inputVal)
            if(isSingleDigit(e.target.value)){
                setInputVal(e.target.value)
                onDone()
            }
            else{
                setInputVal("")
             }
            
        }


        }
        onKeyDown={(e)=>{
            if(e.key=="Backspace"){
                setInputVal("")
                handleBackClick()
            }
        }} 
        value={inputVal}
   
        ref={reference}
        type="text"
        className="w-[50px] h-[50px] bg-secondary rounded-2xl m-1 font-montserrat  outline-none px-5 text-white font-bold"/>
    )
}