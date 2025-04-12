import ClassroomGrid from "@/components/classroom-grid"
import Sidebar from "@/components/sidebar"
import TopBar from "@/components/top-bar"
import FilterBar from "@/components/filter-bar"

export default function Home() {
  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <TopBar />
        <main className="flex-1 p-4">
          <FilterBar />
          <ClassroomGrid />
        </main>
      </div>
    </div>
  )
}
