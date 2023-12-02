import Navbar from "../components/layout/Navbar.jsx";
import Footer from "../components/layout/Footer.jsx";
import Projects from "../components/Projects.jsx";
import HeaderStyle from "../components/HeaderStyle.jsx";
import {useTranslation} from "react-i18next";

function project() {
    const { t } = useTranslation();

  return (
    <>
        <div className=" position-relative p-0">
            <Navbar/>
            <HeaderStyle PageName={t('project')}/>
        </div>
        <Projects/>
        <Footer/>
    </>
  )
}

export default project;
