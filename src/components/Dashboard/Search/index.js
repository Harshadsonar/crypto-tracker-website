import "./style.css";
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';

function Search({ search, onSearchChange }) {
  return (
    <div className="search-flex">
        <SearchRoundedIcon />
            <input placeholder='Search Bitcoins' 
            type='text'
            value={search}
            onChange={(e) => onSearchChange(e)}
            />
    </div>
  )
}

export default Search