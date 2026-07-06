import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [breweries, setBreweries] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [typeFilter, setTypeFilter] = useState("all");

  useEffect(() => {
    const fetchBreweries = async () => {
      const response = await fetch(
        "https://api.openbrewerydb.org/v1/breweries?per_page=50"
      );
      const data = await response.json();
      setBreweries(data);
    };

    fetchBreweries();
  }, []);

  const filteredBreweries = breweries.filter((brewery) => {
    const matchesSearch = brewery.name
      .toLowerCase()
      .includes(searchInput.toLowerCase());

    const matchesType =
      typeFilter === "all" || brewery.brewery_type === typeFilter;

    return matchesSearch && matchesType;
  });

  const uniqueStates = new Set(
    breweries.map((brewery) => brewery.state).filter(Boolean)
  ).size;

  const uniqueTypes = [
    ...new Set(breweries.map((brewery) => brewery.brewery_type)),
  ];

  const mostCommonType =
    breweries.length > 0
      ? Object.entries(
          breweries.reduce((acc, brewery) => {
            acc[brewery.brewery_type] =
              (acc[brewery.brewery_type] || 0) + 1;
            return acc;
          }, {})
        ).sort((a, b) => b[1] - a[1])[0][0]
      : "Loading...";

  return (
    <div className="app">
      <div className="navbar">
        <h2>BrewDash</h2>
          <p>Dashboard</p>
      </div>
      <div className="hero">
  <h1>Brewery Explorer Dashboard</h1>
  <p className="subtitle">
    Explore brewery data by name, location, and type.
  </p>
</div>

      <div className="stats-container">
        <div className="stat-card">
          <h2>{breweries.length}</h2>
          <p>Total Breweries</p>
        </div>

        <div className="stat-card">
          <h2>{uniqueStates}</h2>
          <p>States Represented</p>
        </div>

        <div className="stat-card">
          <h2>{mostCommonType}</h2>
          <p>Most Common Type</p>
        </div>
      </div>

      <div className="controls">
        <input
          type="text"
          placeholder="Search brewery by name..."
          value={searchInput}
          onChange={(event) => setSearchInput(event.target.value)}
        />

        <select
          value={typeFilter}
          onChange={(event) => setTypeFilter(event.target.value)}
        >
          <option value="all">All Types</option>
          {uniqueTypes.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>
      </div>

      <div className="list">
        {filteredBreweries.map((brewery) => (
  <div className="brewery-row" key={brewery.id}>
    <div>
      <h3>{brewery.name}</h3>
      <p>
        {brewery.city}, {brewery.state}
      </p>
    </div>

    <span className="type-badge">{brewery.brewery_type}</span>
  </div>
))}
      </div>
    </div>
  );
}

export default App;