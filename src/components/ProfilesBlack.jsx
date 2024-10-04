import { useEffect } from "react";
import "./Common.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { blackData } from "../utills/black";

function ProfileBlack() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="cardList blackChef">
      {blackData.chef.map((chef) => (
        <div
          key={chef.name}
          className="cardItem black"
          data-aos="fade-up-left"
          data-aos-duration="2000"
        >
          <div className="front">
            <img src={chef.image} alt="프로필" />
          </div>
          <div className="back">
            <a
              className="BLink"
              href={chef.restaurant}
              target="_blank"
              rel="noopener noreferrer"
            >
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

export default ProfileBlack;
