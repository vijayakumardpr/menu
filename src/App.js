import React from "react"
import Category from "./component/Category"
import Items from "./component/Items"
import menu from "./data"

export default function App() {
  const [items, setItems] = React.useState(menu)

  const filterItem = items.map((item) => {
    return <Items key={item.id} {...item} />
  })
  return (
    <div>
      <Category />
      {filterItem}
    </div>
  )
}
