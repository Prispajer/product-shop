import "./Header.styles.scss";

import Logo from "../../components/ui/Logo/Logo";
import SearchBar from "../../features/products/components/SearchBar/SearchBar";

export default function Header() {
  return (
    <header className="header">
      <div className="header__container">
        <Logo />
        <SearchBar />
      </div>
    </header>
  );
}
