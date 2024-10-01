import Header from "./components/Header/Header.jsx";
import { blackData } from "./utills/black.js";
import { whiteData } from "./utills/white.js";

function App() {
  whiteData.chef.forEach((item) => {
    console.log(item);
  });

  return (
    <>
      <Header />
      <div>
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
      ))}
    </>
  );
}

export default App;
