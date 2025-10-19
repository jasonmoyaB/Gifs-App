import React, { use, useEffect, useState, type KeyboardEvent } from "react";
interface SearchBarProps {
  nameplaceholder: string;
  onQuery: (query: string) => void;
}

export const SearchBar = ({ nameplaceholder, onQuery }: SearchBarProps) => {
  const [query, setQuery] = useState("");

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      onQuery(query);
    }, 700);
    return () => {
      clearTimeout(timeoutId);
    };
  }, [query, onQuery]);

  const handleSearch = () => {
    onQuery(query);
    setQuery("");
  };
  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key == "Enter") {
      handleSearch();
    }
  };
  return (
    <>
      <div className="search-container">
        <input
          type="text"
          placeholder={nameplaceholder}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <button onClick={handleSearch}>Buscar</button>
      </div>
    </>
  );
};
