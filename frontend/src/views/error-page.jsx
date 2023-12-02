import Navbar from "../components/layout/Navbar.jsx";
import HeaderStyle from "../components/HeaderStyle.jsx";
import Footer from "../components/layout/Footer.jsx";
import NotFound from "../components/NotFound.jsx";
import i18next from "i18next";

export default function ErrorPage() {
  return (
      <>
          <div className=" position-relative p-0">
              <Navbar/>
              <HeaderStyle PageName={i18next.t('not_found')}/>
          </div>
          <NotFound/>
          <Footer/>
      </>
  );
}
