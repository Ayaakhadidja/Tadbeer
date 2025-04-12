import { Menu } from "lucide-react"
import "./top-bar.css"

export default function TopBar() {
  return (
    <div className="top-bar">
      <button className="menu-button">
        <Menu className="menu-icon" />
        <span>Menu</span>
      </button>
    </div>
  )
}
