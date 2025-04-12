import { Calendar, Clock } from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select"
import "./filter-bar.css"

export default function FilterBar() {
  return (
    <div className="filter-bar">
      <div className="filter-item">
        <Calendar className="filter-icon" />
        <span className="filter-text">Date</span>
      </div>

      <div className="filter-item">
        <Clock className="filter-icon" />
        <span className="filter-text">Duration</span>
      </div>

      <div className="filter-item">
        <Select>
          <SelectTrigger className="select-trigger">
            <SelectValue placeholder="Class" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Classes</SelectItem>
            <SelectItem value="110">Class 110</SelectItem>
            <SelectItem value="j">J</SelectItem>
            <SelectItem value="132">Class 132</SelectItem>
            <SelectItem value="451">Class 451</SelectItem>
            <SelectItem value="c5">C5</SelectItem>
            <SelectItem value="119t">Class 119T</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  )
}
