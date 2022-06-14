import React from "react"

export default function Category(props) {
  return (
    <div className="category-container">
      {props.category.map((item, i) => (
        <button onClick={() => props.handle(item)} key={i}>
          {item}
        </button>
      ))}
    </div>
  )
}
