import "./Message.styles.scss";

export default function Message({ text }: { text: string }) {
  return <p className="message">{text}</p>;
}
