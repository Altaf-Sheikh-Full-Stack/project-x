import { ScrollData } from "./scrollData.js"
import './scroll.css'
const Scroll = () => {
    return (
        <div className="scroll-container" >
            <h1>cloud parter</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab alias incidunt voluptas cumque temporibus officia consectetur accusamus expedita ducimus nulla explicabo, atque unde quis velit sit ipsam aliquid! Debitis, quidem.</p>
            <div className="scroll-track">
                
            {ScrollData.map((item, index) => (
                <>
                <img className="scroll-img" key={index} src={item.img} alt="" />
                </>
            ))}
            </div>
        </div>

    )
}

export default Scroll