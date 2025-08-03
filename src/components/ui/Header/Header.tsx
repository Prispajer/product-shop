import Logo from "../Logo/Logo";
import SearchBar from "../../../features/products/components/SearchBar/SearchBar";
import "./Header.styles.scss";

export default function Header() {
  return (
    <header className="header">
      <div className="header__inner">
        <Logo />
        <SearchBar />
      </div>
    </header>
  );
}
