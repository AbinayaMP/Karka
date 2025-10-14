import { useState } from "react";

function SearchFilter() {
  const items = ["Apple", "Banana", "Cherry", "Grapes", "Mango", "Orange"];
  const [search, setSearch] = useState("");
  const filteredItems = items.filter((item) =>
    item.toLowerCase().includes(search.toLowerCase())
  );
  return (
    <>
      <div style={{ textAlign: "center", marginTop: "50px" }}>
        <h2>Fruit List</h2>
        <input
          type="text"
          placeholder="Search Fruit..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{ padding: "8px", width: "200px", marginBottom: "20px" }}
        />
        <ul style={{ listStyle: "none", padding: 0 }}>
          {filteredItems.length > 0 ? (
            filteredItems.map((item, index) => (
              <li key={index} style={{ padding: "5px" }}>
                {item}
              </li>
            ))
          ) : (
            <li style={{ color: "gray" }}>No results found</li>
          )}
        </ul>
      </div>
    </>
  );
}
export default SearchFilter;
