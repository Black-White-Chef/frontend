import Header from './components/Header/Header.jsx';
import { blackData } from './utills/black.js';

function App() {
  return (
    <>
      <Header />
      <div>
        <h1>{blackData.chef[0].name}</h1>
        <img src={blackData.chef[0].image} alt={chefData.chef[0].name} />
      </div>
    </>
  );
}

export default App;
