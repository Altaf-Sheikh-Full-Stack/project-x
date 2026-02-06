import './why-us.css'
import ButtonPrimary from '../../common/button/primary'
const WhyUs = () =>{
    return(
        <div className="why-grid">
            <div className='why-grid-item' id='why-grid-item-top'>
                <h1>Why chose us</h1>
                <p>this is why you chose us</p>
                <ButtonPrimary buttonPrimary={"Start now"}/>
            </div>
            <div className='why-grid-item' id='why-grid-item1'>child1</div>
            <div className='why-grid-item' id='why-grid-item2'>child2</div>
            <div className='why-grid-item' id='why-grid-item3'>child3</div>
            <div className='why-grid-item' id='why-grid-item4'>child4</div>
            <div className='why-grid-item' id='why-grid-item5'>child5</div>
        </div>
    )
}


export default WhyUs