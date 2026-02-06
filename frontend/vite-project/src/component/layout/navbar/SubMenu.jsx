import './subMenu.css'

const SubMenu = ({ subItem, ref }) => {
    return (
        <div ref={ref} className='subMenu'>
            {subItem.map((subItem, index) => (
                <div className='subItem' key={index}>
                    <h4>{subItem.title}</h4>
                    <p>{subItem.des}</p>
                </div>

            ))}
        </div>
    )
}


export default SubMenu