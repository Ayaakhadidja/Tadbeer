import Sidebar from "./components/Sidebar"
import TopBar from "./components/TopBar"
import TeachersActivities from "./components/TeachersActivities"
import TopBookers from "./components/TopBookers"
import Calendar from "./components/Calendar"
import ResourcesAllocation from "./components/ResourcesAllocation"
import "./App.css"

const App = () => (
  <div className="app">
    <Sidebar />
    <div className="main-content">
      <TopBar />
      <div className="dashboard-grid">
        <TeachersActivities />
        <Calendar />
        <TopBookers />
        <ResourcesAllocation />
      </div>
    </div>
  </div>
)

export default App
