import { useState } from "react";
import Header from "./components/Header/Header.jsx";
import ProfileWhite from "./components/ProfileWhite.jsx";
import ProfileBlack from "./components/ProfilesBlack.jsx";
// import { blackData } from "./utills/black.js";
// import { whiteData } from "./utills/white.js";

function App() {
  // whiteData.chef.forEach((item) => {
  //   console.log(item);
  // });

  const [isChat, setISChat] = useState(false);
  // 현재 상태를 반대로 만들어기 f -> T , T -> F

  const ChatClickHandler = () => {
    console.log("zmfflr");
    setISChat(!isChat);
  };
  return (
    <>
      <Header />
      <div>
        <ProfileWhite />
        <ProfileBlack />

        <div style={{ position: "absolute", right: 0, bottom: 120 }}>
          {isChat && (
            <div>
              <input type="text" /> <button>입력</button>
            </div>
          )}
          <div onClick={ChatClickHandler}>채팅 열고 닫기</div>
        </div>
      </div>
      {/* <div>
        <h1>{blackData.chef[0].name}</h1>
        <img src={blackData.chef[0].image} alt={blackData.chef[0].name} />
        <div>{blackData.chef[0].detail}</div>
        <a
          href={blackData.chef[0].restaurant}
          target="_blank"
          rel="noopener noreferrer"
        >
          식당 링크
        </a>
      </div>

      {whiteData.chef.map((item) => (
        <>
          <h1>{item.name}</h1>
          <img src={item.image} alt="" />
          <div>{item.detail}</div>
          <a href={item.restaurant} target="_blank" rel="noopener noreferrer">
            식당 링크
          </a>
        </>
      ))} */}
    </>
  );
}

export default App;
