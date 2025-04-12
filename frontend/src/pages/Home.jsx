import ClassroomGrid from "../components/classroom-grid"
import Sidebar from "../components/sidebar"
import TopBar from "../components/top-bar"
import FilterBar from "../components/filter-bar"
import "./Home.css"

export default function Home() {
  return (
    <div className="home-container">
      <Sidebar />
      <div className="main-content">
        <TopBar />
        <main className="page-content">
          <FilterBar />
          <ClassroomGrid />
        </main>
      </div>
    </div>
  )
}
