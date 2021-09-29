function Search(props) {
  const { logArray } = props
  return (
    <div>
      <input name="search" placeholder="Search..." />
      <button onClick={logArray}>Show</button>
    </div>
  );
}

export default Search;
