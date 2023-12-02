import Navbar from "../components/layout/Navbar.jsx";
import Footer from "../components/layout/Footer.jsx";
import Services from "../components/Services.jsx";
import HeaderStyle from "../components/HeaderStyle.jsx";
import i18next from "i18next";

function service() {

  return (
    <>
        <div className=" position-relative p-0">
            <Navbar />
            <HeaderStyle PageName={i18next.t('Service')}/>
        </div>
        <Services/>
        <Footer/>
    </>
  )
}

export default service;
