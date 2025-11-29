import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import MainPage from './components/Mainpage/Mainpage';
import NewsPage from './components/Mainpage/Newspage';
import MobileMainpage from './components/Mainpage/MobileMainpage';
import useResponsive from './assests/assests/useResponsive';

function App() {

  const smUp = useResponsive("up", "sm");

  return (
    <BrowserRouter>
    <div className='App'>
      <Routes>
         {smUp ? (
          <><Route path="/" element={<MainPage />} />
          <Route path="/news" element={<NewsPage />} /></> 
        ): (
          <Route path= "/" element = {<MobileMainpage />} />
        )}
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
