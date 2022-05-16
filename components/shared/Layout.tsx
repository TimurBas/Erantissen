import { ReactNode } from "react";
import Footer from "../footer/Footer";
import NavigationBar from "../navigation/NavigationBar";
import Divider from "./Divider";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <NavigationBar />
      <Divider />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
