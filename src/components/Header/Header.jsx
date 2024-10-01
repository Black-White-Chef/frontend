import './Header.css';
import logoImg from '../../assets/chef/bw-chef-logo.png';

export default function Header() {
  return (
    <header className="header">
      <img src={logoImg} alt="logo-Img" />
    </header>
  );
}
