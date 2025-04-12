import { Button } from "@/components/ui/button"

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
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {classrooms.map((classroom) => (
        <ClassroomCard key={classroom.id} name={classroom.name} info={classroom.info} disabled={classroom.disabled} />
      ))}
    </div>
  )
}

function ClassroomCard({ name, info, disabled = false }) {
  return (
    <div className={`bg-white rounded-lg shadow-md p-6 flex flex-col ${disabled ? "opacity-60" : ""}`}>
      <div className="mb-6">
        <h3 className="text-xl font-bold">{name}</h3>
        <p className="text-sm text-gray-500">{info}</p>
      </div>
      <Button className="bg-indigo-500 hover:bg-indigo-600 text-white mt-auto" disabled={disabled}>
        Book Now!
      </Button>
    </div>
  )
}
