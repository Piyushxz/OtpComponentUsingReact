export const Button = ({disabled,children,onClick}) =>{
    return(
        <>
            <button onClick={onClick} className={`text-white px-[100px] sm:px-[200px] py-4 rounded-lg font-montserrat text-xl font-semibold ${disabled ? "bg-blue3" : 'bg-text1' }`}>
                {children}
            </button>
        </>
    )
}

export default Button