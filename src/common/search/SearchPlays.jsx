import { useCallback, useContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { SearchContext } from "./search-context";
import "./search.css";
import { BiSearch } from "react-icons/bi";

const SearchPlays = ({ reset }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const { setSearchTerm } = useContext(SearchContext);
  const [searchText, setSearchText] = useState("");

  const resetSearchField = useCallback(() => {
    setSearchTerm("");
    setSearchText("");
  },[setSearchTerm])

  useEffect(() => {
    if (location.pathname !== "/plays") {
      resetSearchField()
    }
    if (reset.search) {
      resetSearchField()
    }
  }, [location.pathname, reset.search, resetSearchField]);

  const handleSearch = (event) => {
    event.preventDefault();
    if (event.key === "Enter") {
      setSearchTerm(event.target.value);
      navigate("/plays", { replace: true, state: { filter: true, search: false } });
    }
  };

  return (
    <>
      <div className='search-input' data-testid='plays-search-box-container'>
        <BiSearch className='search-input-icon' data-testid='plays-search-box-icon' size='24px' />
        <input
          className='search-input-text'
          data-testid='plays-search-box-input-field'
          type='text'
          placeholder='Search for a play...'
          onKeyUp={handleSearch}
          value={searchText}
          // ref={inputRef}
          onChange={e => setSearchText(e.target.value)}
        />
      </div>
    </>
  );
};

export default SearchPlays;
