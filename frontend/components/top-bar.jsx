import { Menu } from "lucide-react"

export default function TopBar() {
  return (
    <div className="bg-white p-2 shadow-sm">
      <button className="flex items-center gap-2 bg-indigo-500 text-white px-4 py-2 rounded-md">
        <Menu className="h-5 w-5" />
        <span>Menu</span>
      </button>
    </div>
  )
}
