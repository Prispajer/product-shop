import "./Logo.styles.scss";

import logoSvg from "../../../assets/icons/logo.svg";
import { type LogoProps } from "./Logo.types";

export default function Logo({ size = 24 }: LogoProps) {
  return (
    <div className="logo">
      <img src={logoSvg} width={size} height={size} alt="Logo" />
      <h1>ShopOnline</h1>
    </div>
  );
}
