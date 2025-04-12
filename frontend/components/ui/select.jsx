"use client"

import React from "react"
import { cn } from "@/lib/utils"
import { Check, ChevronDown } from "lucide-react"

// Simplified Select components without relying on @radix-ui/react-select
// This is a basic implementation to avoid the optional chaining errors

const SelectContext = React.createContext(null)

function Select({ children, value, onValueChange }) {
  const [open, setOpen] = React.useState(false)
  const [selectedValue, setSelectedValue] = React.useState(value || "")

  const handleSelect = (value) => {
    setSelectedValue(value)
    if (onValueChange) onValueChange(value)
    setOpen(false)
  }

  return (
    <SelectContext.Provider value={{ open, setOpen, value: selectedValue, onSelect: handleSelect }}>
      {children}
    </SelectContext.Provider>
  )
}

const SelectTrigger = React.forwardRef(function SelectTrigger({ className, children, ...props }, ref) {
  const { open, setOpen, value } = React.useContext(SelectContext)

  return (
    <button
      type="button"
      ref={ref}
      className={cn(
        "flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
        className,
      )}
      onClick={() => setOpen(!open)}
      {...props}
    >
      {children}
      <ChevronDown className="h-4 w-4 opacity-50" />
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
    <div
      ref={ref}
      className={cn(
        "relative z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md animate-in fade-in-80",
        className,
      )}
      {...props}
    >
      <div className="p-1">{children}</div>
    </div>
  )
})

const SelectItem = React.forwardRef(function SelectItem({ className, children, value, ...props }, ref) {
  const { onSelect } = React.useContext(SelectContext)

  return (
    <div
      ref={ref}
      className={cn(
        "relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
        className,
      )}
      onClick={() => onSelect(value)}
      {...props}
    >
      <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
        <Check className="h-4 w-4" />
      </span>
      {children}
    </div>
  )
})

export { Select, SelectTrigger, SelectValue, SelectContent, SelectItem }
