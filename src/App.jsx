import Header from "./components/Header/Header.jsx";
import { blackData } from "./utills/black.js";
import { whiteData } from "./utills/white.js";
import { judgeData } from "./utills/judge.js";
import "./App.css";
import Slider from "./components/Footer/Slider.jsx";
import Modal from "./components/Modal/Modal.jsx";

function App() {
  return (
    <>
      <Header />
      <div className="judgeContainer">
        <div className="jchef">
          {judgeData.chef.map((item, index) => (
            <div className="chefList" key={index}>
              <div className="imageContainer">
                <img src={item.image} alt={item.name} />
                <div className="mouse">
                  <h1>{item.name}</h1>
                  <p>{item.detail}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="container">
        <div className="wchef">
          {whiteData.chef.map((item, index) => (
            <div className="chefList" key={index}>
              <div className="imageContainer">
                <img src={item.image} alt={item.name} />
                <div
                  className="mouse"
                  onClick={() => window.open(item.restaurant)}
                >
                  <h1>{item.name}</h1>
                  <p>{item.detail}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="bchef">
          {blackData.chef.map((item, index) => (
            <div className="chefList" key={index}>
              <div className="imageContainer">
                <img src={item.image} alt={item.name} />
                <div
                  className="mouse"
                  onClick={() => window.open(item.restaurant)}
                >
                  <h1>{item.name}</h1>
                  <p>{item.detail}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <section>
        <Modal />
      </section>
      <footer>
        <Slider />
      </footer>
    </>
  );
}

export default App;
