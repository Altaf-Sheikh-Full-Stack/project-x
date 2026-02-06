import Navbar from "../../layout/navbar/navbar"
import Hero from "../../layout/hero/hero"
import WhyUs from "../../layout/why-us/why-us"
import Service from "../../layout/service/service"
import Footer from "../../layout/footer/footer"
import Scroll from "../../layout/scroll/scroll"
import Quote from "../../layout/ quote/ quote"
const Home = () =>{
    return(
        <>
        <Navbar/>
        <Hero/>
        <Scroll/>
        <WhyUs/>
        <Quote/>
        <Service/>
        <Footer/>
        </>
    )
}

export default Home