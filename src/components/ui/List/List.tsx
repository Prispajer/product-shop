import Card from "../Card/Card";
import type { Product } from "../../../features/products/types/Product";
import "./List.styles.scss";

export default function List({
  title,
  products,
}: {
  title: string;
  products: Product[];
}) {
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
