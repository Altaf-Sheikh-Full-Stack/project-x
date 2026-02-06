import './service.css'
import ButtonPrimary from '../../common/button/primary'
import { useState } from 'react'
import { ServiceData } from './serviceData'
const Service = () => {
    const [service, setService] = useState(null)
    const add = (item) => {
        setService(item)
    }

    return (
        <div className="service-grid">
            <div className='sevice-grid-item' id='serice-grid-item1'>
                <h1>hy my name is altaf</h1>
                <p>you you hany singh</p>
                    {ServiceData.map((item, index) => (
                        <button className="service-btn"  key={index} onClick={() => add(item.item)}>{item.button}</button>
                    ))}
            </div>
            <div className='sevice-grid-item' id='serice-grid-item2'>
                {service && service.map((item, index) => (
                    <div key={index}>
                        <h1>{item.title}</h1>
                        <p>{item.des}</p>
                    </div>
                ))}
            </div>
            <div className='sevice-grid-item' id='serice-grid-item3'>two</div>
        </div>
    )
}


export default Service