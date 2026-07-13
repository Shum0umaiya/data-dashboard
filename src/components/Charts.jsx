import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Legend,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

function Charts({ breweries }) {
  const typeCounts = breweries.reduce((counts, brewery) => {
    const type = brewery.brewery_type || "unknown";

    counts[type] = (counts[type] || 0) + 1;

    return counts;
  }, {});

  const breweryTypeData = Object.entries(typeCounts).map(
    ([name, value]) => ({
      name,
      value,
    })
  );

  const stateCounts = breweries.reduce((counts, brewery) => {
    const state = brewery.state || "Unknown";

    counts[state] = (counts[state] || 0) + 1;

    return counts;
  }, {});

  const topStateData = Object.entries(stateCounts)
    .map(([state, breweries]) => ({
      state,
      breweries,
    }))
    .sort((a, b) => b.breweries - a.breweries)
    .slice(0, 8);

  const pieColors = [
    "#38bdf8",
    "#818cf8",
    "#c084fc",
    "#f472b6",
    "#fb7185",
    "#facc15",
    "#4ade80",
    "#2dd4bf",
  ];

  return (
    <section className="charts-section">
      <div className="section-heading">
        <div>
          <p className="eyebrow">DATA VISUALIZATIONS</p>
          <h2>Brewery Trends</h2>
        </div>

        <p>
          Compare the most common brewery categories and the states with the
          largest representation in this dataset.
        </p>
      </div>

      <div className="charts-grid">
        <article className="chart-card">
          <h3>Breweries by Type</h3>
          <p className="chart-description">
            This chart shows how the breweries are distributed across business
            categories.
          </p>

          <div className="chart-wrapper">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={breweryTypeData}
                  dataKey="value"
                  nameKey="name"
                  innerRadius={55}
                  outerRadius={90}
                  paddingAngle={3}
                >
                  {breweryTypeData.map((entry, index) => (
                    <Cell
                      key={entry.name}
                      fill={pieColors[index % pieColors.length]}
                    />
                  ))}
                </Pie>

                <Tooltip />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </article>

        <article className="chart-card">
          <h3>Top States in the Dataset</h3>
          <p className="chart-description">
            This chart ranks the eight states containing the most breweries in
            the fetched results.
          </p>

          <div className="chart-wrapper">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={topStateData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="state" />
                <YAxis allowDecimals={false} />
                <Tooltip />
                <Bar dataKey="breweries" fill="#38bdf8" radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </article>
      </div>
    </section>
  );
}

export default Charts;