import "./css/Home.css";
import Chain from "../assets/chain.svg"; // Иконка левой цепи

const Home = () => {
  return (
    <div className="krch">
      <div className="krch-content">
        <h1>KRCH.IO</h1>
        <p>Make links grate again</p>
        
        {/* Блок с пошаговой инструкцией */}
        <div className="steps">
          
          {/* Поле ввода с цепями по бокам */}
          <div className="input-with-chains">
            <img src={Chain} alt="left chain" className="chain-left" />
            <div className="input-container">
              <input 
                type="url" 
                placeholder="Тут могла быть ваша длинная, угрюмая и скучная ссылка..."
              />
            </div>
            <img src={Chain} alt="right chain" className="chain-right" />
          </div>
          
        </div>
        
        <button className="krch-link">Короче!</button>
      </div>
    </div>  
  );
};

export default Home;