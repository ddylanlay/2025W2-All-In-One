import React from "react"

export function Divider({
  className=""
} : {
  className?: string
}): React.JSX.Element {
  return <hr className={`border-(--divider-color) my-2 ${className}`}/>
}