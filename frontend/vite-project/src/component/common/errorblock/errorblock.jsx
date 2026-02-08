import './errorblock.css'

const ErrorBlock = (error) => {
    return (
        <div className="errorBlock">
            <h3>{error.heading}</h3>
            <p>{error.description}</p>
        </div>
    )
}


export default ErrorBlock