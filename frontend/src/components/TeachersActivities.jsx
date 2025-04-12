import "./TeachersActivities.css"

const TeachersActivities = () => {
  const activityData = [
    { day: "Mon", value: 20 },
    { day: "Tue", value: 25 },
    { day: "Wed", value: 15 },
    { day: "Thu", value: 22 },
    { day: "Fri", value: 28 },
    { day: "Sat", value: 12 },
    { day: "Sun", value: 18 },
  ]

  const maxValue = Math.max(...activityData.map((item) => item.value))

  return (
    <section className="card teachers-activities">
      <h2 className="card-title">Teachers activities</h2>
      <div className="chart-container">
        {activityData.map((item, index) => (
          <div className="chart-column" key={index}>
            <div className="chart-labels">
              <span className="chart-value">{item.value}</span>
            </div>
            <div
              className="chart-bar"
              style={{
                height: `${(item.value / maxValue) * 180}px`,
                // Add a slight animation delay based on index
                transitionDelay: `${index * 50}ms`,
              }}
              aria-label={`${item.day}: ${item.value} activities`}
            />
            <div className="chart-day">{item.day}</div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default TeachersActivities
