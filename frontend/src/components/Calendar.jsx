"use client"

import { useState } from "react"
import "./Calendar.css"

const Calendar = () => {
  const [currentMonth] = useState("January")
  const [currentYear] = useState(2025)

  // Generate calendar days
  const daysInMonth = 31 // January has 31 days
  const days = Array.from({ length: daysInMonth }, (_, i) => i + 1)

  const events = [
    { id: 1, day: 11, type: "Lecture", time: "11:10", duration: "08:00" },
    { id: 2, day: 23, type: "TD", time: "23:10", duration: "14:40" },
  ]

  // Get weekday names
  const weekdays = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"]

  return (
    <section className="card calendar">
      <h2 className="card-title">Calendar</h2>

      <div className="calendar-header">
        <div className="month-navigation">
          <button className="nav-button" aria-label="Previous month">
            ‹
          </button>
          <div className="month-selector">
            <span>{currentMonth} ▾</span>
          </div>
          <div className="year-selector">
            <span>{currentYear} ▾</span>
          </div>
          <button className="nav-button" aria-label="Next month">
            ›
          </button>
        </div>
      </div>

      <div className="calendar-grid">
        {weekdays.map((day) => (
          <div className="weekday" key={day}>
            {day}
          </div>
        ))}

        {days.map((day) => {
          const isHighlighted = events.some((event) => event.day === day)
          return (
            <div
              key={day}
              className={`calendar-day ${isHighlighted ? "highlighted" : ""}`}
              aria-selected={isHighlighted}
            >
              {day}
            </div>
          )
        })}
      </div>

      <div className="events-container">
        {events.map((event) => (
          <div className="event" key={event.id}>
            <div className="event-icon">
              <span className="bell-icon" role="img" aria-label="Event notification">
                🔔
              </span>
            </div>
            <div className="event-details">
              <div className="event-type">{event.type}</div>
              <div className="event-time">{event.time}</div>
            </div>
            <div className="event-duration">{event.duration}</div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Calendar
