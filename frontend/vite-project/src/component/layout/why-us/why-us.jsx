import './why-us.css'
import ButtonPrimary from '../../common/button/primary'
import img from './img/home-welcome.png'
import img2 from './img/d.svg'
import img3 from './img/p.svg'
import img4 from './img/How-gemba-works.jpg'
// import img4 from './img/dd.png'
const WhyUs = () => {
    return (
        <div className="why-grid">
            <div className='why-grid-item' id='why-grid-item-top'>
                <h1 className='why-grid-item-top-h1'>Your Trusted Partner in Quality, Reliability & Excellence</h1>
                <p>The Open, Secure, Transparent, Reliable, Flexible, Scalable, and Cost-Effective Alternative to Proprietary Data Platforms</p>
                <ButtonPrimary buttonPrimary={"Start now"} />
            </div>
            <div className='why-grid-item why-grid-item-child' id='why-grid-item1'>
                <img src={img} alt="" />
                <h1>Open & Flexible Architecture</h1>
                <p>Built on open standards to give you complete control and long-term freedom.</p>
            </div>
            <div className='why-grid-item why-grid-item-child' id='why-grid-item2'>
                <img src={img2} alt="" />
                <h1>Cost-Efficient by Design</h1>
                <p>Reduce infrastructure costs without sacrificing performance.</p>
            </div>
            <div className='why-grid-item why-grid-item-child' id='why-grid-item3'>
                <h1>Unified Data + AI Platform</h1>
                <p>One platform for engineering, analytics, and machine learning.</p>
                <ul>
                    <li>Seamless data pipeline management</li>
                    <li>High-performance SQL analytics</li>
                    <li>Built-in ML and AI workload support</li>
                    <li>Supports streaming and batch processing</li>
                </ul>
            </div>
            <div className='why-grid-item why-grid-item-child' id='why-grid-item4'>
                <img src={img3} alt="" />
                <h1>High Performance & Scalability</h1>
                <p>Engineered for massive workloads and growing teams.</p>
               
            </div>
            <div className='why-grid-item why-grid-item-child' id='why-grid-item5'>
               
                <h1>Enterprise-Ready Security</h1>
                <p>Designed for secure, production-grade deployments.</p>
                 <img src={img4} alt="" />
                
            </div>
        </div>
    )
}


export default WhyUs