import { useRef, useState } from "react"
import Button from "./Button"

export const OtpOpitmised = ({number}) =>{
    const ref = useRef(Array(Number).fill(0))

    const [disabled,setDisabled] = useState(true)
    return(
        <>

        <div className="flex flex-col ">
        <div className="mt-20 flex justify-center">
            <h1 className="font-montserrat text-text1 font-bold sm:text-5xl text-2xl">Enter the Otp</h1>
        </div>
        <div className="mt-10 flex justify-center">

            {
                Array(number).fill(0).map((_,index)=>(
                    
                    <OtpBox reference={(el) => ref.current[index] = el} 
                    key={index}
                    onDone={()=> {
                        if(index+ 1>=number){
                            return
                        }
                        ref.current[index+1].focus
                    }}
                    handleBackClick={()=>{
                        if(index-1<=0){
                            return;
                        }
                        ref.current[el-1].focus()


                    }
                }
                        
                        
                    />
            
                ))
            }

        
        
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