import './App.css';
import "./reset.css";
import Header from './Components/Header/Header';
import StartPage from './Components/StartPage/StartPage';
import DropDown from './Components/DropDown/DropDown';
import Quote from './Components/Quote/Quote';
import MoreInfo from './Components/MoreInfo/MoreInfo';
import Newsletter from './Components/Newsletter/Newsletter';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <>
      <Header />
      <StartPage />
      <DropDown />
      <Quote/>
      <MoreInfo />
      <Newsletter/>
      <Footer/>
    </>
  );
}

export default App;
