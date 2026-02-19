import './hero.css'
import ButtonPrimary from "../../common/button/primary"
import ButtonSecondary from "../../common/button/secondary"
import img from './img/Component 1 (1).png'
// import img from './img/Component 1.svg'
const Hero = () => {
    return <div className="hero">
        <div className='hero-child'>
            <div className='hero-child1'>
                <p className='hero-child1-p'>An open source and free project</p>
                <h1>Transform Your Business with AI & Big Data</h1>
                <div className='hero-child1Content'>
                    <h3>Automate operations. Predict outcomes. Accelerate growth.</h3>
                    <p>
                        Leverage advanced AI trained on your business data to optimize workflows,
                        reduce costs, and uncover actionable insights. From real-time analytics to
                        intelligent forecasting, our platform empowers you to make data-driven decisions
                        with confidence.
                    </p>
                </div>
                <ButtonSecondary buttonSecondary={"LogIn"} />
                <ButtonPrimary buttonPrimary={"Create account"} />
                <p>Create an account it's free</p>
            </div>

        </div>
        <div className='hero-2-child' >
            <img src={img} alt="" />
        </div>
    </div>
}

export default Hero