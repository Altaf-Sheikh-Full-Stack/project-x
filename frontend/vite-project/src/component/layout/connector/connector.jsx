import './connector.css'
const Connector = () => {
    return (
          <div className='connectorComp'>
            <div className='connectorCompTop'>
                <div className='connectorCompTopHeading'>
                    <h2>Data wharehouse</h2>
                    <p>A place whare all your data is stored</p>
                </div>
                <div className='connectorCompTopButton'>
                    <button>Create Database</button>
                </div>
            </div>
            <hr />
            <div className='connectorCompSearch'>
                <input type="search" placeholder='Search for database'/>
                <button>Search</button>
            </div>

            <div className='connectorDatabase'>
                <p>Database</p>
                <div className='connectorDatabaseTable'>
                    <p>data1</p>
                    <p>data1</p>
                    <p>data1</p>
                    <p>data1</p>
                </div>
            </div>
        </div>
    )
}

export default Connector