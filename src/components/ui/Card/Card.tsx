import "./Card.styles.scss";

import { type CardProps } from "./Card.types";

export default function Card({ title, price, image }: CardProps) {
  return (
    <div className="card">
      {image && <img src={image} alt={title} loading="lazy" />}
      <h3>{title}</h3>
      <p>${price}</p>
    </div>
  );
}
