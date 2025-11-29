import mobileview from '../../assests/mobile-view.png';
import mobileview2 from '../../assests/mobile-view2.png';
import Buttons from '../Common/Buttons';

export default function Content() {
  return (
    <div className="content">
      <div className="content-left">
        <div className='content-left-welcome'><span className="content-left-welcome-text"></span>Welcome to the</div>

        <div className="content-left-title">
          Unprecedented Era of<span className='content-left-title-text'> Real Estate Investing </span>
        </div>

        <p className="content-left-subtext">
          Lilypads uses sophisticated technologies for data-driven decisions in investing, managing and funding commercial real estate assets.
        </p>

        <Buttons 
            name= "Start Investing Now"
            variant="contained"
            className= "content-button"
            sx={{width: '100%',backgroundColor:'#7D59C3', borderRadius: '20px', color: '#ffffff', textTransform:'Capitailize'}}
        />

        <div className="content-left-status">
          <div className='content-left-status-details'><strong className='content-left-status-details-num'>658+</strong><span className='hero-left-statue-details-value'>Properties Registered</span></div>
          <div className='content-left-status-details'><strong className='content-left-status-details-num'>685+</strong><span className='hero-left-statue-details-value'>Deals Cracked</span></div>
          <div className='content-left-status-details'><strong className='content-left-status-details-num'>255+</strong><span className='hero-left-statue-details-value'>Investors</span></div>
        </div>
      </div>

      <div className="content-right">
        <img src={mobileview2} className="card card-1" />
        <img src={mobileview} className="card card-2" />
      </div>
    </div>
  );
}
