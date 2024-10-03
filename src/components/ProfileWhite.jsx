import "./Common.css";
import { whiteData } from "../utills/white";

function ProfileWhite() {
  return (
    <div className="cardList whiteChef">
      {whiteData.chef.map((chef) => (
        <div key={chef.name} className="cardItem">
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
