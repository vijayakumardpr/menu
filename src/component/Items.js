import React from "react"

export default function Items(props) {
  const { id, title, category, price, img, desc } = props
  return (
    <div className="items">
      <div className="item">
        <img className="product-image" src={img} alt={title} />
        <div className="product-name-price">
          {title} {price}
        </div>
        {desc}
      </div>
    </div>
  )
}
