import './why-us.css'
import ButtonPrimary from '../../common/button/primary'
import img from './img/home-welcome.png'
import img2 from './img/d.svg'
import img3 from './img/p.svg'
// import img4 from './img/How-gemba-works.jpg'
import img4 from './img/dd.png'
const WhyUs = () => {
    return (
        <div className="why-grid">
            <div className='why-grid-item' id='why-grid-item-top'>
                <h1>Your Trusted Partner in Quality, Reliability & Excellence</h1>
                <p>The Open, Secure, Transparent, Reliable, Flexible, Scalable, and Cost-Effective Alternative to Proprietary Data Platforms</p>
                <ButtonPrimary buttonPrimary={"Start now"} />
            </div>
            <div className='why-grid-item' id='why-grid-item1'>
                <img src={img} alt="" />
                <h1>Open & Flexible Architecture</h1>
                <h3>Built on open standards to give you complete control and long-term freedom.</h3>
                {/* <ul>
                    <li>Open data formats ensure portability and interoperability</li>
                    <li> No proprietary lock-in or vendor restrictions</li>
                    <li>Transparent architecture with full visibility</li>
                    <li>Easily extendable and integration-friendly</li>
                </ul> */}
            </div>
            <div className='why-grid-item' id='why-grid-item2'>
                <img src={img2} alt="" />
                <h1>Cost-Efficient by Design</h1>
                <h3>Reduce infrastructure costs without sacrificing performance.</h3>
                {/* <ul>
                    <li>No expensive licensing or hidden fees</li>
                    <li>Independent scaling of storage and compute</li>
                    <li>Optimized resource allocation to prevent waste</li>
                    <li>Predictable pricing for better budgeting</li>
                </ul> */}
            </div>
            <div className='why-grid-item' id='why-grid-item3'>
                <h1>Unified Data + AI Platform</h1>
                <h3>One platform for engineering, analytics, and machine learning.</h3>
                <ul>
                    <li>Seamless data pipeline management</li>
                    <li>High-performance SQL analytics</li>
                    <li>Built-in ML and AI workload support</li>
                    <li>Supports streaming and batch processing</li>
                </ul>
            </div>
            <div className='why-grid-item' id='why-grid-item4'>
                <img src={img3} alt="" />
                <h1>High Performance & Scalability</h1>
                <h3>Engineered for massive workloads and growing teams.</h3>
                 
                {/* <ul>
                    <li>Distributed processing for large datasets</li>
                    <li>Elastic compute clusters</li>
                    <li>High-concurrency query handling</li>
                    <li>Advanced query optimization</li>
                </ul> */}
            </div>
            <div className='why-grid-item' id='why-grid-item5'>
                <img src={img4} alt="" />
                <h1>Enterprise-Ready Security</h1>
                <h3>Designed for secure, production-grade deployments.</h3>
                {/* <ul>
                    <li>Role-based access control RBAC</li>
                    <li>Encryption at rest and in transit</li>
                    <li>Multi-cloud and on-prem deployment</li>
                    <li>Monitoring, auditing, and compliance support</li>
                </ul> */}
            </div>
        </div>
    )
}


export default WhyUs