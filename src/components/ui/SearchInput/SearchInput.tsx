import { IoIosSearch } from "react-icons/io";
import "./SearchInput.styles.scss";

export default function SearchInput({
  value,
  onChange,
  placeholder = "Search for products",
}: {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
}) {
  return (
    <div className={`search-input`}>
      <IoIosSearch />
      <input
        type="text"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="search-input__input"
      />
    </div>
  );
}
