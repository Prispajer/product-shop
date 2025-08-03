import logoSvg from "../../../assets/icons/logo.svg";
import "./Logo.styles.scss";

export default function Logo({ size = 24 }: { size?: number }) {
  return (
    <div className="logo">
      <img src={logoSvg} width={size} height={size} alt="Logo" />
      <h1>ShopOnline</h1>
    </div>
  );
}
