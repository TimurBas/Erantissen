import { ReactNode } from "react";
import Footer from "../footer/Footer";
import NavigationBar from "../navigation/NavigationBar";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex flex-col min-h-screen bg-primary dark:bg-primary-dark flex-start">
      <NavigationBar />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
