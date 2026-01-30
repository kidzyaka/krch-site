import "./css/Home.css";

const Home = () => {
  return (
    <div className="home-container">
      {/* Цепочки по краям */}
      <div className="chain chain-top"></div>
      <div className="chain chain-bottom"></div>

      {/* Основной контент */}
      <div className="content-container">
        <div className="krch">
          <h1>KRCH.IO</h1>
          <p>Make links grate again</p>
        </div>

        {/* Форма */}
        <div className="input-container">
          <input 
            type="text" 
            placeholder="Тут могла быть ваша длинная ссылка..."
          />
          <button>Generate</button>
        </div>
      </div>
    </div>
  );
};

export default Home;