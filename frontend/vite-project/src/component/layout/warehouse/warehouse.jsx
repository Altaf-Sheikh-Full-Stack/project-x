import './warehouse.css'


const WarehouseCompo = (value) => {
    const [rowfilename, setRowfilename] = ("")
    fetch('/api/user/get/rowfile')
    .then((response) => response.json())
    .then((data) => console.log(data))
    return (
        <div className='wharehouseComp'>
            <div className='wharehouseCompTop'>
                <div className='wharehouseCompTopHeading'>
                    <h2>{value.heading}</h2>
                    <p>{value.description}</p>
                </div>
                <div className='wharehouseCompTopButton'>
                    <button onClick={value.onClick}>{value.buttonValue}</button>
                </div>
            </div>
            <hr />
            <div className='wharehouseCompSearch'>
                <input type="search" placeholder={value.SearchPlaceholder}/>
                <button>Search</button>
            </div>

            <div className='wharehouseDatabase'>
                <p>Database</p>
                <div className='wharehouseDatabaseTable'>
                    <div className='wharehouseDatabaseTableChild'>
                        <p>{value.data}</p> 
                        <a href="">{value.delete}</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WarehouseCompo