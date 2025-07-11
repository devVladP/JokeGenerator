import { Outlet } from "react-router-dom";
import Navbar from "./Nav/Navbar";
import Footer from "./Footer/Footer";

export default function Layout() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
