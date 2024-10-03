import "./Common.css";
import { blackData } from "../utills/black";

function ProfileBlack() {
  return (
    <div className="cardList blackChef">
      {blackData.chef.map((chef) => (
        <div key={chef.name} className="cardItem black">
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
