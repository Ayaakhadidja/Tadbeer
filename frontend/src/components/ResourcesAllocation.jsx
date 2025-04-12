import "./ResourcesAllocation.css"

const ResourcesAllocation = () => {
  const resources = [
    { id: 1, name: "product", percentage: 40, color: "#5C5FEF" },
    { id: 2, name: "degrowth", percentage: 32, color: "#54C8E8" },
    { id: 3, name: "growth", percentage: 28, color: "#FF7A59" },
  ]

  // Calculate the stroke-dasharray and stroke-dashoffset for each segment
  const calculateDonutSegment = (percentage, index) => {
    const radius = 80
    const circumference = 2 * Math.PI * radius

    // Calculate the arc length
    const arcLength = (percentage / 100) * circumference

    // Calculate the starting point (offset)
    let startOffset = 0
    for (let i = 0; i < index; i++) {
      startOffset += (resources[i].percentage / 100) * circumference
    }

    return {
      strokeDasharray: `${arcLength} ${circumference - arcLength}`,
      strokeDashoffset: -startOffset,
    }
  }

  return (
    <section className="card resources-allocation">
      <div className="resources-header">
        <h2 className="card-title">Resources allocation</h2>
        <div className="resources-period">from 1-8 january,2025</div>
      </div>

      <div className="resources-content">
        <div className="donut-chart-container">
          <svg
            width="200"
            height="200"
            viewBox="0 0 200 200"
            className="donut-chart"
            aria-label="Resource allocation donut chart"
          >
            {resources.map((resource, index) => {
              const { strokeDasharray, strokeDashoffset } = calculateDonutSegment(resource.percentage, index)
              return (
                <circle
                  key={resource.id}
                  cx="100"
                  cy="100"
                  r="80"
                  fill="transparent"
                  stroke={resource.color}
                  strokeWidth="30"
                  strokeDasharray={strokeDasharray}
                  strokeDashoffset={strokeDashoffset}
                  transform="rotate(-90 100 100)"
                  aria-label={`${resource.name}: ${resource.percentage}%`}
                />
              )
            })}
            <circle cx="100" cy="100" r="65" fill="white" />
          </svg>
        </div>

        <div className="resources-legend">
          {resources.map((resource) => (
            <div className="legend-item" key={resource.id}>
              <div className="legend-color" style={{ backgroundColor: resource.color }} aria-hidden="true" />
              <div className="legend-name">{resource.name}</div>
              <div className="legend-percentage">{resource.percentage}%</div>
            </div>
          ))}
        </div>
      </div>

      <div className="resources-footer">
        <button className="view-details-button">View Details</button>
      </div>
    </section>
  )
}

export default ResourcesAllocation
