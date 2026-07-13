import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router";
import Charts from "../components/Charts";
import Sidebar from "../components/Sidebar";

function Dashboard() {
  const [breweries, setBreweries] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [typeFilter, setTypeFilter] = useState("all");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchBreweries = async () => {
      try {
        setLoading(true);
        setError("");

        const response = await fetch(
          "https://api.openbrewerydb.org/v1/breweries?per_page=50"
        );

        if (!response.ok) {
          throw new Error(`Request failed with status ${response.status}`);
        }

        const data = await response.json();

        setBreweries(data);
      } catch (fetchError) {
        console.error("Could not fetch breweries:", fetchError);
        setError(
          "We could not load the brewery data. Please refresh the page and try again."
        );
      } finally {
        setLoading(false);
      }
    };

    fetchBreweries();
  }, []);

  const filteredBreweries = useMemo(() => {
    return breweries.filter((brewery) => {
      const breweryName = brewery.name?.toLowerCase() || "";
      const searchValue = searchInput.trim().toLowerCase();

      const matchesSearch = breweryName.includes(searchValue);

      const matchesType =
        typeFilter === "all" || brewery.brewery_type === typeFilter;

      return matchesSearch && matchesType;
    });
  }, [breweries, searchInput, typeFilter]);

  const uniqueTypes = useMemo(() => {
    return [
      ...new Set(
        breweries
          .map((brewery) => brewery.brewery_type)
          .filter(Boolean)
      ),
    ].sort();
  }, [breweries]);

  const statistics = useMemo(() => {
    const uniqueStates = new Set(
      filteredBreweries
        .map((brewery) => brewery.state)
        .filter(Boolean)
    ).size;

    const typeCounts = filteredBreweries.reduce((counts, brewery) => {
      const type = brewery.brewery_type || "unknown";
      counts[type] = (counts[type] || 0) + 1;

      return counts;
    }, {});

    const mostCommonType =
      Object.entries(typeCounts).sort((a, b) => b[1] - a[1])[0]?.[0] ||
      "None";

    return {
      total: filteredBreweries.length,
      states: uniqueStates,
      mostCommonType,
    };
  }, [filteredBreweries]);

  return (
    <div className="site-layout">
      <Sidebar />

      <main className="main-content">
        <section className="hero">
          <p className="eyebrow">OPEN BREWERY DATA</p>
          <h1>Brewery Explorer Dashboard</h1>

          <p className="subtitle">
            Explore American brewery locations, compare business types, and
            open any brewery to learn more about it.
          </p>
        </section>

        {loading && (
          <div className="status-message">
            <h2>Loading brewery data...</h2>
          </div>
        )}

        {error && (
          <div className="error-message">
            <h2>Unable to load data</h2>
            <p>{error}</p>
          </div>
        )}

        {!loading && !error && (
          <>
            <section className="stats-container">
              <article className="stat-card">
                <p>Displayed Breweries</p>
                <h2>{statistics.total}</h2>
              </article>

              <article className="stat-card">
                <p>States Represented</p>
                <h2>{statistics.states}</h2>
              </article>

              <article className="stat-card">
                <p>Most Common Type</p>
                <h2 className="stat-text">
                  {statistics.mostCommonType}
                </h2>
              </article>
            </section>

            <Charts breweries={filteredBreweries} />

            <section className="directory-section">
              <div className="section-heading">
                <div>
                  <p className="eyebrow">BREWERY DIRECTORY</p>
                  <h2>Explore the Results</h2>
                </div>

                <p>
                  Search by brewery name or narrow the results using brewery
                  type.
                </p>
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
                  <option value="all">All brewery types</option>

                  {uniqueTypes.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
              </div>

              <p className="results-count">
                Showing {filteredBreweries.length} result
                {filteredBreweries.length === 1 ? "" : "s"}
              </p>

              <div className="list">
                {filteredBreweries.map((brewery) => (
                  <Link
                    to={`/brewery/${brewery.id}`}
                    className="brewery-row"
                    key={brewery.id}
                  >
                    <div>
                      <h3>{brewery.name}</h3>

                      <p>
                        {brewery.city || "Unknown city"},{" "}
                        {brewery.state || "Unknown state"}
                      </p>
                    </div>

                    <div className="row-actions">
                      <span className="type-badge">
                        {brewery.brewery_type || "unknown"}
                      </span>

                      <span className="view-details">
                        View details →
                      </span>
                    </div>
                  </Link>
                ))}
              </div>

              {filteredBreweries.length === 0 && (
                <div className="empty-message">
                  <h3>No matching breweries</h3>
                  <p>Try changing the search term or brewery-type filter.</p>
                </div>
              )}
            </section>
          </>
        )}
      </main>
    </div>
  );
}

export default Dashboard;