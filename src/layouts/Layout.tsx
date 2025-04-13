import { PropsWithChildren } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Dots from "../components/Dots";

type Props = PropsWithChildren & {};
export default function Layout({ children }: Readonly<Props>) {
  return (
    <>
      <Dots />
      <div className={`grid grid-cols-1 h-full z-[10]`}>
        <Header />
        <div className="h-full">{children}</div>
        <Footer />
      </div>
    </>
  );
}
