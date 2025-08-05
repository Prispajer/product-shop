import "./List.styles.scss";

import Card from "../Card/Card";
import { type ListProps } from "./List.types";

export default function List({ title, products }: ListProps) {
  return (
    <section className="list">
      <h2>{title}</h2>
      <div className="list__grid">
        {products.map((product) => (
          <Card key={product.id} {...product} image={product.images[0] || ""} />
        ))}
      </div>
    </section>
  );
}
