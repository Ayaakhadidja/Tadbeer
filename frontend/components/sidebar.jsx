import { Search } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function Sidebar() {
  return (
    <div className="w-[210px] bg-indigo-500 text-white flex flex-col h-full">
      <div className="p-4">
        <div className="flex items-center gap-2 mb-6">
          <div className="w-10 h-10 relative">
            <Image
              src="/placeholder.svg?height=40&width=40"
              alt="Tadbeer Logo"
              width={40}
              height={40}
              className="rounded-full"
            />
          </div>
          <span className="text-xl font-bold">Tadbeer</span>
        </div>

        <div className="relative mb-6">
          <Search className="absolute left-2 top-2.5 h-4 w-4 text-gray-400" />
          <input
            type="text"
            className="w-full rounded-md bg-white pl-8 py-2 text-sm text-black focus:outline-none"
            placeholder="Search..."
          />
        </div>

        <nav className="space-y-2">
          <NavItem href="/" label="Home page" />
          <NavItem href="/class-allocation" label="Class allocation" />
          <NavItem href="/resources-allocation" label="Resources allocation" />
          <NavItem href="/profile" label="Profil" />
          <NavItem href="/logout" label="log out" />
        </nav>
      </div>
    </div>
  )
}

function NavItem({ href, label }) {
  return (
    <Link href={href} className="block py-2 hover:bg-indigo-600 transition-colors rounded px-2">
      {label}
    </Link>
  )
}
