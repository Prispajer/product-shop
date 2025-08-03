import Header from "../components/ui/Header/Header";
import "./Layout.styles.scss";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="layout">
      <Header />
      <main>{children}</main>
    </div>
  );
}
