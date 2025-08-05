import "./SearchInput.styles.scss";

import { IoIosSearch } from "react-icons/io";

import { type SearchInputProps } from "./SearchInput.types";

export default function SearchInput({
  value,
  onChange,
  placeholder = "Search for products",
}: SearchInputProps) {
  return (
    <div className="search-input">
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
