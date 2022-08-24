import { ReactNode } from "react";
import Footer from "../footer/Footer";
import NavigationBar from "../navigation/NavigationBar";
import Divider from "./Divider";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="bg-slate-100 dark:bg-primary-dark">
      <NavigationBar />
      <Divider />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
