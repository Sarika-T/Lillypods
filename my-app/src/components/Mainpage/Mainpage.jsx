import Header from '../Header/Header';
import AboutUs from './Aboutus';
import Content from './Content';
import Fotter from './Fotter';
import './Mainpage.scss';



export default function MainPage() { 
    return(
        <div className="page-wrapper">
            <div className="mainpage">
                <Header />
                <Content />
                <AboutUs />
                <Fotter />
            </div>
        </div>
    )
}