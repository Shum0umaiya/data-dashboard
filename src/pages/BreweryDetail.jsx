import { useEffect, useState } from "react";
import { Link, useParams } from "react-router";
import Sidebar from "../components/Sidebar";

function BreweryDetail() {
  const { id } = useParams();

  const [brewery, setBrewery] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchBrewery = async () => {
      try {
        setLoading(true);
        setError("");

        const response = await fetch(
          `https://api.openbrewerydb.org/v1/breweries/${id}`
        );

        if (!response.ok) {
          throw new Error(`Request failed with status ${response.status}`);
        }

        const data = await response.json();
        setBrewery(data);
      } catch (fetchError) {
        console.error("Could not fetch brewery details:", fetchError);

        setError(
          "This brewery could not be loaded. It may no longer be available."
        );
      } finally {
        setLoading(false);
      }
    };

    fetchBrewery();
  }, [id]);

  return (
    <div className="site-layout">
      <Sidebar />

      <main className="main-content detail-main">
        <Link to="/" className="back-link">
          ← Back to dashboard
        </Link>

        {loading && (
          <div className="status-message">
            <h2>Loading brewery details...</h2>
          </div>
        )}

        {error && (
          <div className="error-message">
            <h2>Unable to load this brewery</h2>
            <p>{error}</p>
          </div>
        )}

        {!loading && !error && brewery && (
          <>
            <section className="detail-hero">
              <div>
                <p className="eyebrow">BREWERY PROFILE</p>
                <h1>{brewery.name}</h1>

                <p className="subtitle">
                  {brewery.city || "Unknown city"},{" "}
                  {brewery.state || "Unknown state"}
                </p>
              </div>

              <span className="large-type-badge">
                {brewery.brewery_type || "unknown"}
              </span>
            </section>

            <section className="detail-grid">
              <article className="detail-card">
                <p className="detail-label">Street Address</p>
                <h3>
                  {brewery.address_1 ||
                    brewery.street ||
                    "Address not available"}
                </h3>
              </article>

              <article className="detail-card">
                <p className="detail-label">City</p>
                <h3>{brewery.city || "Not available"}</h3>
              </article>

              <article className="detail-card">
                <p className="detail-label">State</p>
                <h3>{brewery.state || "Not available"}</h3>
              </article>

              <article className="detail-card">
                <p className="detail-label">Postal Code</p>
                <h3>{brewery.postal_code || "Not available"}</h3>
              </article>

              <article className="detail-card">
                <p className="detail-label">Country</p>
                <h3>{brewery.country || "Not available"}</h3>
              </article>

              <article className="detail-card">
                <p className="detail-label">Phone</p>
                <h3>{brewery.phone || "Not available"}</h3>
              </article>
            </section>

            <section className="contact-card">
              <div>
                <p className="eyebrow">MORE INFORMATION</p>
                <h2>Visit This Brewery Online</h2>

                <p>
                  The detail page includes additional contact and address
                  information that was not displayed in the dashboard list.
                </p>
              </div>

              {brewery.website_url ? (
                <a
                  href={brewery.website_url}
                  target="_blank"
                  rel="noreferrer"
                  className="primary-button"
                >
                  Open brewery website
                </a>
              ) : (
                <span className="unavailable-button">
                  Website unavailable
                </span>
              )}
            </section>
          </>
        )}
      </main>
    </div>
  );
}

export default BreweryDetail;