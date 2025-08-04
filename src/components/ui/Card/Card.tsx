import "./Card.styles.scss";

export default function Card({
  title,
  price,
  image,
}: {
  title: string;
  price: number;
  image: string;
}) {
  return (
    <div className="card">
      {image && <img src={image} alt={title} loading="lazy" />}
      <h3>{title}</h3>
      <p>${price}</p>
    </div>
  );
}
