import React from "react"
import "./button.css"

const Button = React.forwardRef(function Button({ className, children, ...props }, ref) {
  return (
    <button className={`button ${className || ""}`} ref={ref} {...props}>
      {children}
    </button>
  )
})

Button.displayName = "Button"

export { Button }
