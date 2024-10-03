import "./Header.css";
import logoImg from "../../assets/Logo.png";

export default function Header() {
  return (
    <header className="header">
      <img src={logoImg} alt="logo-Img" />
    </header>
  );
}
