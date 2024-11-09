export const Input = ({onChange,children,placeholder}) =>{
    return(
        <>
        <span className="text-white  rounded-2xl font-montserrat text-xl font-semibold bg-secondary">
        <input type="text" placeholder={placeholder} className="text-white w-[300px] sm:w-[500px] py-4 px-2 font-montserrat  text-xl font-semibold bg-secondary"/>

        </span>
        </>
        
    )
}
