import { ReactNode } from "react";
import Footer from "../footer/Footer";
import NavigationBar from "../navigation/NavigationBar";
import Divider from "./Divider";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <NavigationBar />
      <Divider />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
