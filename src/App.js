import React from "react"
import Category from "./component/Category"
import Items from "./component/Items"
import menu from "./data"

export default function App() {
  const [items, setItems] = React.useState(menu)

  const filterItem = items.map((item) => {
    return <Items key={item.id} {...item} />
  })

  const category = ["all", ...new Set(menu.map((item) => item.category))]

  function filterCategory(category) {
    if (category === "all") return setItems(menu)

    const filterItem = menu.filter((item) => item.category === category)
    setItems(filterItem)
  }

  return (
    <div>
      <header>
        <h1>Menu</h1>
      </header>
      <Category handle={filterCategory} category={category} />
      <div className="items">{filterItem}</div>
    </div>
  )
}
