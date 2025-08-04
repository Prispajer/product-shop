import Header from "../components/ui/Header/Header";
import "./AppLayout.styles.scss";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <main>{children}</main>
    </>
  );
}
