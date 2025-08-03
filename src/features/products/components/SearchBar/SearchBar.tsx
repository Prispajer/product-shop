import React from "react";
import "./SearchBar.styles.scss";

const SearchIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height="20"
    width="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="11" cy="11" r="8" />
    <line x1="21" y1="21" x2="16.65" y2="16.65" />
  </svg>
);

export default function SearchBar({
  value,
  onChange,
  placeholder = "Search for products",
}: {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
}) {
  return (
    <div className="searchbar">
      <SearchIcon />
      <input
        type="text"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="searchbar__input"
      />
    </div>
  );
}
