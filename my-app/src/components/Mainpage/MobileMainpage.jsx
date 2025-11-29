import { useState } from 'react';
import { MenuIcon } from '../../assests/assests/icon';
import Logo from '../../assests/Main logo.png';
import TemporaryDrawer from '../Common/Drawer';
import '../Header/Mobile.scss';
import Content from './Content';
import AboutUs from './Aboutus';
import Fotter from './Fotter';

export default function MobileMainpage() {

    const [open, setOpen] = useState(false);
    
    const handleOpen = () => {
        setOpen(true);
    };

    return(
        <div className="mobilemenu">
            <div className="mobilemenu-header">
                <div className="mobilemenu-header-left">
                    <img src={Logo} alt="Logo"/>
                </div>
                <div className="mobilemenu-header-right">
                    <span onClick={handleOpen}><MenuIcon  /></span>
                    <TemporaryDrawer open={open} setOpen={setOpen} />
                </div>
            </div>
            <div className='mobilemenu-content'>
                <Content />
                <AboutUs />
                <Fotter />
            </div>
        </div>
    )
}