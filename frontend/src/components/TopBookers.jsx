import "./TopBookers.css"

const TopBookers = () => {
  const bookers = [
    {
      id: 1,
      name: "Robert",
      rank: "2nd",
      points: 1200,
      avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
      id: 2,
      name: "Brook",
      rank: "1st",
      points: 1500,
      avatar: "https://randomuser.me/api/portraits/men/33.jpg",
    },
    {
      id: 3,
      name: "Darrell",
      rank: "3rd",
      points: 500,
      avatar: "https://randomuser.me/api/portraits/men/34.jpg",
    },
  ]

  // Sort bookers by rank for display
  const sortedBookers = [...bookers].sort((a, b) => {
    const rankOrder = { "1st": 1, "2nd": 2, "3rd": 3 }
    return rankOrder[a.rank] - rankOrder[b.rank]
  })

  return (
    <section className="card top-bookers">
      <h2 className="card-title">Top bookers</h2>
      <div className="bookers-container">
        {sortedBookers.map((booker) => (
          <div className="booker" key={booker.id}>
            <div className="avatar-container">
              <img
                src={booker.avatar || "/placeholder.svg"}
                alt={`${booker.name}'s avatar`}
                className="avatar"
                onError={(e) => {
                  e.target.onerror = null
                  e.target.src = "/placeholder.svg"
                }}
              />
              <span className="booker-name">{booker.name}</span>
            </div>
            <div
              className={`rank-bar rank-${booker.rank.replace(/[^a-z]/gi, "").toLowerCase()}`}
              aria-label={`Rank: ${booker.rank}`}
            >
              <span className="rank">{booker.rank}</span>
            </div>
            <div className="points-badge">
              <span>{booker.points} Pts</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default TopBookers
