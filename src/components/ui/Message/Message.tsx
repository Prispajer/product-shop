import "./Message.styles.scss";

import { type MessageProps } from "./Message.types";

export default function Message({ text }: MessageProps) {
  return <p className="message">{text}</p>;
}
