import { Calendar, Clock } from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function FilterBar() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
      <div className="bg-white rounded-lg shadow-md p-4 flex items-center gap-2">
        <Calendar className="h-5 w-5 text-gray-500" />
        <span className="text-gray-700">Date</span>
      </div>

      <div className="bg-white rounded-lg shadow-md p-4 flex items-center gap-2">
        <Clock className="h-5 w-5 text-gray-500" />
        <span className="text-gray-700">Duration</span>
      </div>

      <div className="bg-white rounded-lg shadow-md">
        <Select>
          <SelectTrigger className="border-0 shadow-none h-12">
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
