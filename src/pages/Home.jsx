import "./css/Home.css";

import Header from "./components/Header";
import Footer from "./components/Footer";

const Home = () => {
  return (
    <div className="krch">
      <Header />
      <div className="krch-content">
        <h1 className="logo">KRCH.IO</h1>
        <p className="desc">Make links grate again</p>
        
        {/* Блок с пошаговой инструкцией */}
        <div className="steps">
          
          {/* Поле ввода с цепями по бокам */}
          {/* <div className="input-with-chains">
            <div className="input-container">
            <input 
            type="url" 
            placeholder="Тут могла быть ваша длинная, угрюмая и скучная ссылка..."
            />
            </div>
            <img src={Chain} alt="right chain" className="chain-right" />
            </div> */}
          <div className="input-with-chains">
            <div className="chain-bg" />
            <div className="input-link">
              <input type="text" />
            </div>
          </div>
        </div>
        
        <button className="krch-link">Короче!</button>
      </div>
      <Footer />
    </div>  
  );
};

export default Home;