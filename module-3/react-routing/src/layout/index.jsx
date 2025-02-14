import { Header } from "./Header";
import { Footer } from "./Footer";
import { Outlet } from "react-router-dom";
function Layout() {
  return (
    <>
      {/* Create a new path "profile" that uses the layout "component" 
        link to it and display a heading with "Profile" 
      */}
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="grow">
          <Outlet />
        </main>
      </div>
      <Footer />
    </>
  );
}

export { Header, Footer, Layout };
