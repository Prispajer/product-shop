import "./AppLayout.styles.scss";

import Header from "../Header/Header";
import { type AppLayoutProps } from "./AppLayout.types";

export default function AppLayout({ children }: AppLayoutProps) {
  return (
    <>
      <Header />
      <main>{children}</main>
    </>
  );
}
