"use client"

import React from "react"
import { Check, ChevronDown } from "lucide-react"
import "./select.css"

const SelectContext = React.createContext(null)

function Select({ children, value, onValueChange }) {
  const [open, setOpen] = React.useState(false)
  const [selectedValue, setSelectedValue] = React.useState(value || "")
  const ref = React.useRef(null)

  const handleSelect = (value) => {
    setSelectedValue(value)
    if (onValueChange) onValueChange(value)
    setOpen(false)
  }

  React.useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        setOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [ref])

  return (
    <SelectContext.Provider value={{ open, setOpen, value: selectedValue, onSelect: handleSelect }}>
      <div ref={ref} className="select-container">
        {children}
      </div>
    </SelectContext.Provider>
  )
}

const SelectTrigger = React.forwardRef(function SelectTrigger({ className, children, ...props }, ref) {
  const { open, setOpen } = React.useContext(SelectContext)

  return (
    <button
      type="button"
      ref={ref}
      className={`select-trigger ${className || ""}`}
      onClick={() => setOpen(!open)}
      {...props}
    >
      {children}
      <ChevronDown className="select-icon" />
    </button>
  )
})

const SelectValue = React.forwardRef(function SelectValue({ placeholder, ...props }, ref) {
  const { value } = React.useContext(SelectContext)
  return <span {...props}>{value || placeholder}</span>
})

const SelectContent = React.forwardRef(function SelectContent({ className, children, ...props }, ref) {
  const { open } = React.useContext(SelectContext)

  if (!open) return null

  return (
    <div ref={ref} className={`select-content ${className || ""}`} {...props}>
      <div className="select-viewport">{children}</div>
    </div>
  )
})

const SelectItem = React.forwardRef(function SelectItem({ className, children, value, ...props }, ref) {
  const { onSelect, value: selectedValue } = React.useContext(SelectContext)
  const isSelected = selectedValue === value

  return (
    <div
      ref={ref}
      className={`select-item ${isSelected ? "selected" : ""} ${className || ""}`}
      onClick={() => onSelect(value)}
      {...props}
    >
      <span className="select-item-indicator">{isSelected && <Check className="select-item-check-icon" />}</span>
      {children}
    </div>
  )
})

export { Select, SelectTrigger, SelectValue, SelectContent, SelectItem }
