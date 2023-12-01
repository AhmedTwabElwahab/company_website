import Navbar from "../components/layout/Navbar.jsx";
import HeaderStyle from "../components/HeaderStyle.jsx";
import Footer from "../components/layout/Footer.jsx";
import NotFound from "../components/NotFound.jsx";

export default function ErrorPage() {
  return (
      <>
          <div className=" position-relative p-0">
              <Navbar/>
              <HeaderStyle PageName={'Not Found'}/>
          </div>
          <NotFound/>
          <Footer/>
      </>
  );
}
