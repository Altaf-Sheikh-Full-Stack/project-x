import './input.css'

const Input = (type) =>{
    return(
        <>
        <input className={type.className} type={type.type} onChange={type.onChange} placeholder={type.placeholder}   name={type.name} required={type.required}/>
        </>
    )
} 

export default Input