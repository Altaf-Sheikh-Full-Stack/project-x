import './primary.css'

function ButtonPrimary({buttonPrimary, type}){
    return(
        <button type={type} className="ButtonPrimary" >{buttonPrimary}</button>
    )
}

export default ButtonPrimary