
import './notfound.css'


const Notfound = (data) => {
    return(
        <div className='NotFound'>
            <p>{data.value}</p>
        </div>
    )
}

export default Notfound