import security from '../../assests/security.png';
import decision from '../../assests/decision.png';
import manager from '../../assests/manager.png';
import optimize from '../../assests/optimize.png';
import subscribers from '../../assests/subscribers.png';



export default function AboutUs() {
    return(
        <div className="aboutus">
            <div className="aboutus-title"><span className='aboutus-title-line'></span>About Us</div>
            <div className="aboutus-content">
                <div className="card1">Lillypad is the only Real Estate Investment tool you need for you business</div>
                <div className="aboutus-content-cardcontent">
                    <div className="aboutus-content-heading">
                        <img src={security} alt="Security"/>
                        <span className="aboutus-content-heading-title">Become a Data-Driven Investor</span>
                    </div>
                    <span className="aboutus-content-para">Lilypads is the clloud-based real estate investement platform that helps you make data-driven investment decisions and assists while reaching your long term investment objectives.</span>
                </div>
                <div className="aboutus-content-cardcontent">
                    <div className="aboutus-content-heading">
                        <img src={decision} alt="Security"/>
                        <span className="aboutus-content-heading-title">Lilypads can help you make smarter decisions.</span>
                    </div>
                    <span className="aboutus-content-para">Lilypads is the clloud-based real estate investement platform that helps you make data-driven investment decisions and assists while reaching your long term investment objectives.</span>
                </div>
                <div className="aboutus-content-cardcontent">
                    <div className="aboutus-content-heading">
                        <img src={manager} alt="Security"/>
                        <span className="aboutus-content-heading-title">Mangaer Due Diligence</span>
                    </div>
                    <span className="aboutus-content-para">Lilypads is the clloud-based real estate investement platform that helps you make data-driven investment decisions and assists while reaching your long term investment objectives.</span>
                </div>
                <div className="aboutus-content-cardcontent">
                    <div className="aboutus-content-heading">
                        <img src={optimize} alt="Security"/>
                        <span className="aboutus-content-heading-title">Optimize Asset Allocation</span>
                    </div>
                    <span className="aboutus-content-para">Lilypads is the clloud-based real estate investement platform that helps you make data-driven investment decisions and assists while reaching your long term investment objectives.</span>
                </div>
                <div className="aboutus-content-cardcontent">
                    <div className="aboutus-content-heading">
                        <img src={subscribers} alt="Security"/>
                        <span className="aboutus-content-heading-title">Our Subscribers</span>
                    </div>
                    <span className="aboutus-content-para">Lilypads is the clloud-based real estate investement platform that helps you make data-driven investment decisions and assists while reaching your long term investment objectives.</span>
                </div>
            </div>
        </div>
    )
}