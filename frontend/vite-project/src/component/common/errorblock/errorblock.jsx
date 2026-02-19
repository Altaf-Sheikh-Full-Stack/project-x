import './errorblock.css'

const ErrorBlock = (error) => {
    return (
        <div className="errorBlock">
            <p>{error.error}</p>
        </div>
    )
}


export default ErrorBlock