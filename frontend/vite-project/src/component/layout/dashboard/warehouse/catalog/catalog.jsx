import { useEffect, useState } from 'react'
import './catalog.css'


const WarehouseCompo = (value) => {
    return (
        <div className='wharehouseComp'>
            <div className='wharehouseCompTop'>
                <div className='wharehouseCompTopHeading'>
                    <h2>Data warehouse</h2>
                    <p>Lorem ipsum dolor sit amet conset molestias deserunt eaque porro vel minima sint quas ex ab, quaerat alias dolor neque facere impedit voluptatum quibusdam temporibus assumenda?</p>
                </div>
                <div className='wharehouseCompTopButton'>
                    <button>Create database</button>
                </div>
            </div>
            <hr />
            <div className='wharehouseCompSearch'>
                <input type="search" placeholder={value.SearchPlaceholder} />
                <button>Search</button>
            </div>
            <div className='wharehouseDatabase'>
                <p>Database</p>
                <div className='wharehouseDatabaseTable'>
                    <div className='wharehouseDatabaseTableChild'>
                        <p>file</p>
                        <a href="">Delete</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WarehouseCompo