import { useEffect, useState } from 'react'
import './model.css'


const NavbarModel = (value) => {
    const [open, setOpen] = useState()

    useEffect(() => {
        setOpen(value.value)
    },[value.value])

    const closeModel = () => {
        value.State('none')
    }

    return (
        <div className="NavbarModel" style={{display: open}}>
            <div  className='closenavbarmodel'>
            <svg onClick={closeModel} xmlns="http://www.w3.org/2000/svg" width="20" height="16" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
                <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z" />
            </svg>
            </div>
            <div className='NavbarModelContent'>
                <h1>open model</h1>
            </div>
        </div>
    )
}


export default NavbarModel