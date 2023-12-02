import Navbar from "../components/layout/Navbar.jsx";
import Footer from "../components/layout/Footer.jsx";
import Services from "../components/Services.jsx";
import HeaderStyle from "../components/HeaderStyle.jsx";
import {useTranslation} from "react-i18next";

function service() {
    const { t } = useTranslation();

  return (
    <>
        <div className=" position-relative p-0">
            <Navbar />
            <HeaderStyle PageName={t('Service')}/>
        </div>
        <Services/>
        <Footer/>
    </>
  )
}

export default service;
