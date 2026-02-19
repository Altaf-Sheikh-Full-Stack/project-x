import { useEffect, useState } from 'react'
import './database.css'


const DatabaseCompo = (value) => {
    return (
        <div className='databaseComp'>
            <div className='databaseCompTop'>
                <div className='databaseCompTopHeading'>
                    <h2>Data warehouse</h2>
                    <p>Lorem ipsum dolor sit amet conset molestias deserunt eaque porro vel minima sint quas ex ab, quaerat alias dolor neque facere impedit voluptatum quibusdam temporibus assumenda?</p>
                </div>
                <div className='databaseCompTopButton'>
                    <button>Create table</button>
                </div>
            </div>
            <hr />
            <div className='databaseCompSearch'>
                <input type="search" placeholder={value.SearchPlaceholder} />
                <button>Search</button>
            </div>
            <div className='databaseDatabase'>
                <p>Database</p>
                <div className='databaseDatabaseTable'>
                    <div className='databaseDatabaseTableChild'>
                        <p>table</p>
                        <a href="">Delete</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DatabaseCompo