import './input.css'

const Input = (type) =>{
    return(
        <>
        <input type={type.type} placeholder={type.placeholder}  name={type.name} required={type.required}/>
        </>
    )
} 

export default Input