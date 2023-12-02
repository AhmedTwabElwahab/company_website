import Navbar from "../components/layout/Navbar.jsx";
import Footer from "../components/layout/Footer.jsx";
import Projects from "../components/Projects.jsx";
import HeaderStyle from "../components/HeaderStyle.jsx";
import i18next from "i18next";

function project() {

  return (
    <>
        <div className=" position-relative p-0">
            <Navbar/>
            <HeaderStyle PageName={i18next.t('project')}/>
        </div>
        <Projects/>
        <Footer/>
    </>
  )
}

export default project;
