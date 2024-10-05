import './Header.css';
import logoImg from '../../assets/chef/bw-chef-logo.png';
import { useState } from 'react';

export default function Header() {
  const [isKorean, setIsKorean] = useState(true);

  const LanguageTbtn = () => {
    setIsKorean(!isKorean);
  };

  return (
    <>
      <header className="header">
        <img src={logoImg} alt="logo-Img" />
      </header>
      <button className="Lbtn" onClick={LanguageTbtn}>
        {isKorean ? 'English' : '한국어'}
      </button>
    </>
  );
}
