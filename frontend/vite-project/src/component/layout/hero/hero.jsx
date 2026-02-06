import './hero.css'
import ButtonPrimary from "../../common/button/primary"
import ButtonSecondary from  "../../common/button/secondary"
const Hero = () => {
    return <div className="hero">
        <div className='hero-child'>
            <div className='hero-child1'>
            <h1>Lorem ipsum dolor sit, amet consectetur adipisicing elit. </h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae odit aspernatur quidem tenetur laboriosam aut laborum, cupiditate molestiae dolor tempora tempore explicabo aperiam eaque excepturi, distinctio exercitationem. Excepturi, voluptatum debitis.</p>
            <ButtonSecondary buttonSecondary={"LogIn"}/>
            <ButtonPrimary buttonPrimary={"Create account"} />
            <p>Create account it's free, No credit card required</p>
            </div>
            
        </div>
        <div className='hero-child' >

        </div>
    </div>
}

export default Hero