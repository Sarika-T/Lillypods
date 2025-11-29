import Buttons from "../Common/Buttons";
import BasicTextFields from "../Common/Textfield";
import Facebook from '../../assests/Facebook.png';
import Twitter from '../../assests/Twitter.png';
import Youtube from '../../assests/Youtube.png';
import LinkedIn from '../../assests/Linkedin.png';
import Pinterest from '../../assests/Pinterest.png';
import Medium from '../../assests/Medium.png';
import Logo from '../../assests/Main logo.png';
import { mockDataFotter } from "../utilis/Mockdata";


export default function Fotter() {
    return(
        <div className="fotter">
            <div className="fotter-left">
                <div className="fotter-left-input"><BasicTextFields />
                 <Buttons 
                    name= "Subscribe"
                    variant="contained"
                    className= "button"
                    color='grey'
                    sx={{width: '50%',backgroundColor:'grey'}}
                /></div>
                <span className="fotter-left-text">Signup and start enjoying the benifts today!</span>
                <Buttons 
                    name= "Signup to Lillypods"
                    variant="contained"
                    className= "button-signup"
                    color='white'
                    sx={{width: '50%',backgroundColor:'purple'}}
                />
                <div className="fotter-left-images">
                    <img alt="Facebook" src={Facebook} />
                    <img alt="Twitter" src={Twitter} />
                    <img alt="LinkedIn" src={LinkedIn} />
                    <img alt="Youtube" src={Youtube} />
                    <img alt="Medium" src={Medium} />
                    <img alt="Pinterest" src={Pinterest} />
                </div>
            </div>
            <div className="fotter-right">
                <div className="fotter-right-details">
                    <div className="fotter-right-details-network">
                        <img alt= "Logo" src={Logo} />
                    </div>
                    <div className="fotter-right-reach">
                        <h4>Reach Us At</h4>
                        <span className="fotter-right-reach-text">6751 Columbia Gateway Dr. 3rd Floor Columbia MD 23046</span>
                    </div>
                    {mockDataFotter && mockDataFotter.map((fotter,index)=>(
                        <div key={index} className="fotter-right-details-network">
                        <div className="fotter-right-details-network-title">{fotter.category}</div>
                        <div className="fotter-right-details-network-names">
                            {fotter.items.map((item, i) => (
                                <p key={i}>{item}</p>
                            ))}
                        </div>
                    </div>))}
                </div>
            </div>
        </div>
    )
}