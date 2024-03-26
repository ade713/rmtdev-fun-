import { useSearchTextContext } from "../lib/hooks";

export function SearchForm() {
  const { searchText, handleChangeSearchText } = useSearchTextContext();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    handleChangeSearchText(e.target.value);
  };

  const handleSubmitSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };
  
  return (
    <form onSubmit={handleSubmitSearch} action="#" className="search">
      <button type="submit">
        <i className="fa-solid fa-magnifying-glass"></i>
      </button>

      <input
        onChange={handleInputChange}
        spellCheck="false"
        type="text"
        required
        placeholder="Find remote developer jobs..."
        value={searchText}
      />
    </form>
  );
}
