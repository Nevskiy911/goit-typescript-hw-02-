import { ChangeEvent, FormEvent, useState } from "react";
import toast from "react-hot-toast";
import s from "./SearchBar.module.css";

type SearchBarProps = {
  onSubmit: (query: string) => void;
};

function SearchBar({ onSubmit }: SearchBarProps) {
  const [query, setQuery] = useState<string>("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (query.trim() === "") {
      toast.error("Please enter a search term!");
      return;
    }

    onSubmit(query);
    setQuery("");
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  return (
    <header>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          value={query}
          onChange={handleChange}
          className={s.input}
        />
        <button type="submit" className={s.btn}>
          Search
        </button>
      </form>
    </header>
  );
}

export default SearchBar;
