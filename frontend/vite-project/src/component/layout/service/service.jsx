import './service.css'
import ButtonPrimary from '../../common/button/primary'
import { useEffect, useState } from 'react'
import { ServiceData } from './serviceData'
const Service = () => {
    const [service, setService] = useState(null)
    const add = (item) => {
        setService(item)
    }

   

    useEffect(() => {
        for (let i = 0; i < 1; i++) {
            setService(ServiceData[i].item)
        }
    }, [])



    return (
        <div className="service-grid">
            <div className='sevice-grid-item' id='serice-grid-item1'>
                <h1>hy my name is altaf</h1>
                <p>you you hany singh</p>
                <div>
                    {ServiceData.map((item, index) => (
                        <button className="service-btn" key={index} onClick={() => add(item.item)}>{item.button}</button>
                    ))}
                </div>
            </div>
            <div className='serice-grid-item-child'>
                <div className='sevice-grid-item' id='serice-grid-item2'>
                    {service && service.map((item, index) => (
                        <div key={index}>
                            <h1>{item.title}</h1>
                            <p>{item.des}</p>
                        </div>
                    ))}
                </div>
                <div className='sevice-grid-item' id='serice-grid-item3'>
                    {service && service.map((item, index) => (
                        <div key={index}>
                            <img src={item.img} alt="" />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}


export default Service