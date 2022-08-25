import { ReactNode } from "react";
import Footer from "../footer/Footer";
import NavigationBar from "../navigation/NavigationBar";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="bg-primary dark:bg-primary-dark">
      <NavigationBar />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
