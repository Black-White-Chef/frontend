import "./app.css";
import Header from "./components/Header/Header.jsx";
import ProfileWhite from "./components/ProfileWhite.jsx";
import ProfileBlack from "./components/ProfilesBlack.jsx";

function App() {
  return (
    <>
      <Header />
      <main>
        <ProfileWhite />
        <ProfileBlack />
      </main>
      {/* <div style={{ position: "absolute", right: 0, bottom: 120 }}>
          {isChat && (
            <div>
              <input type="text" /> <button>입력</button>
            </div>
          )}
          <div onClick={ChatClickHandler}>채팅 열고 닫기</div>
        </div> */}
    </>
  );
}

export default App;
