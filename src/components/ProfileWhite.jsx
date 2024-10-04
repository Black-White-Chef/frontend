import { useEffect } from "react";
import "./Common.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { whiteData } from "../utills/white";

function ProfileWhite() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="cardList whiteChef">
      {whiteData.chef.map((chef) => (
        <div
          key={chef.name}
          className="cardItem white"
          data-aos="fade-up-right"
          data-aos-duration="1500"
        >
          <div className="front">
            <img src={chef.image} alt="프로필" />
          </div>
          <div className="back">
            <a href={chef.restaurant} target="_blank" rel="noopener noreferrer">
              아무곳이나 누르면 식당으로 이동합니다
            </a>
            <p className="name">{chef.name}</p>
            <p className="detail">{chef.detail}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProfileWhite;
