import { Button } from "./ui/button"
import "./classroom-grid.css"

export default function ClassroomGrid() {
  const classrooms = [
    { id: 1, name: "Class 110", info: "100 Even", disabled: false },
    { id: 2, name: "J", info: "Amphitheater", disabled: false },
    { id: 3, name: "Class 132", info: "Computer Science Faculty", disabled: true },
    { id: 4, name: "Class 451", info: "400 Odd", disabled: false },
    { id: 5, name: "C5", info: "Main Building", disabled: true },
    { id: 6, name: "Class 119T", info: "100 Odd", disabled: false },
  ]

  return (
    <div className="classroom-grid">
      {classrooms.map((classroom) => (
        <ClassroomCard key={classroom.id} name={classroom.name} info={classroom.info} disabled={classroom.disabled} />
      ))}
    </div>
  )
}

function ClassroomCard({ name, info, disabled = false }) {
  return (
    <div className={`classroom-card ${disabled ? "disabled" : ""}`}>
      <div className="card-content">
        <h3 className="card-title">{name}</h3>
        <p className="card-info">{info}</p>
      </div>
      <Button className="book-button" disabled={disabled}>
        Book Now!
      </Button>
    </div>
  )
}
