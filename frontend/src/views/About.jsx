import Navbar from "../components/layout/Navbar.jsx";
import Footer from "../components/layout/Footer.jsx";
import AboutUsStyle from "../components/aboutUsStyle/AboutUsStyle.jsx";
import HeaderStyle from "../components/HeaderStyle.jsx";
import Newsletter from "../components/Newsletter.jsx";
import Team from "../components/Team.jsx";
import i18next from "i18next";
function About() {

    return (
    <>
        <div className=" position-relative p-0">
            <Navbar/>
            <HeaderStyle PageName={i18next.t('about_us')}/>
        </div>
        <AboutUsStyle/>
        <Newsletter/>
        <Team/>
        <Footer/>
    </>
  )
}

export default About;
