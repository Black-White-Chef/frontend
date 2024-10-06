import { useEffect } from "react";
import Header from "./components/Header/Header.jsx";
import { blackData } from "./utills/black.js";
import { whiteData } from "./utills/white.js";
import { judgeData } from "./utills/judge.js";
import "./App.css";
import Slider from "./components/Footer/Slider.jsx";
import Modal from "./components/Modal/Modal.jsx";
import AOS from "aos";
import "aos/dist/aos.css";
import FeedbackModal from "./components/FeedbackModal/FeedbackModal.jsx";

function App() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <Header />
      <FeedbackModal />
      <div className="jchef">
        {judgeData.chef.map((item, index) => (
          <div className="chefList" key={index}>
            <div
              className="imageContainer"
              data-aos="flip-left"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="2000"
            >
              <img src={item.image} alt={item.name} />
              <div className="mouse">
                <h1>{item.name}</h1>
                <p>{item.detail}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="container">
        <div className="wchef">
          {whiteData.chef.map((item, index) => (
            <div
              className="chefList white"
              key={index}
              data-aos="fade-up-right"
              data-aos-duration="2000"
            >
              <div className="imageContainer">
                <img src={item.image} alt={item.name} />
                <div
                  className="mouse"
                  onClick={() => window.open(item.restaurant)}
                >
                  <h1>{item.name}</h1>
                  <p>{item.detail}</p>
                  <p className="infoMsg">{whiteData.info}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="bchef">
          {blackData.chef.map((item, index) => (
            <div
              className="chefList black"
              key={index}
              data-aos="fade-up-left"
              data-aos-duration="2000"
            >
              <div className="imageContainer">
                <img src={item.image} alt={item.name} />
                <div
                  className="mouse"
                  onClick={() => window.open(item.restaurant)}
                >
                  <h1>{item.name}</h1>
                  <p>{item.detail}</p>
                  <p className="infoMsg">{blackData.info}</p>
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
