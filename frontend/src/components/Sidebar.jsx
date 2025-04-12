import "./Sidebar.css"

const Sidebar = () => {
  const navItems = [
    { id: 1, label: "home page", href: "#" },
    { id: 2, label: "weekly booking", href: "#" },
    { id: 3, label: "resources allocation", href: "#" },
    { id: 4, label: "Files", href: "#" },
    { id: 5, label: "log out", href: "#" },
  ]

  return (
    <aside className="sidebar">
      <div className="logo-container">
        <div className="logo">
          <svg viewBox="0 0 100 100" width="40" height="40">
            <circle cx="50" cy="50" r="45" fill="#5C5FEF" />
            <path d="M50,5 A45,45 0 0,1 95,50 L50,50 Z" fill="#FF7A59" />
            <path d="M95,50 A45,45 0 0,1 50,95 L50,50 Z" fill="#54C8E8" />
            <path d="M50,95 A45,45 0 0,1 5,50 L50,50 Z" fill="#FFC857" />
            <circle cx="50" cy="50" r="10" fill="white" />
          </svg>
        </div>
        <h1 className="logo-text">Tadbeer</h1>
      </div>

      <div className="search-container">
        <input type="text" className="search-input" placeholder="Search..." aria-label="Search" />
      </div>

      <nav className="nav-menu">
        {navItems.map((item) => (
          <a key={item.id} href={item.href} className="nav-item">
            {item.label}
          </a>
        ))}
      </nav>
    </aside>
  )
}

export default Sidebar
