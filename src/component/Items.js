import React from "react"

export default function Items(props) {
  const { title, price, img, desc } = props
  return (
    <div className="item">
      <img className="product-image" src={img} alt={title} />
      <div className="product-name-price">
        <div>{title}</div>
        <div>{price}</div>
      </div>
      {desc}
    </div>
  )
}
