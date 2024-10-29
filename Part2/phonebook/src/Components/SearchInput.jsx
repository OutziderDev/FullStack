const SearchInput = ({search,onChangeSearch}) => {
    return(
       <div>
        <label htmlFor="filter">filter shown with: </label>
        <input type="text" name="filter" value={search} onChange={onChangeSearch} id="filter" />
      </div> 
    )
}

export default SearchInput