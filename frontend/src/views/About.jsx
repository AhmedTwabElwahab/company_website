import Navbar from "../components/layout/Navbar.jsx";
import Footer from "../components/layout/Footer.jsx";
import AboutUsStyle from "../components/aboutUsStyle/AboutUsStyle.jsx";
import HeaderStyle from "../components/HeaderStyle.jsx";
import Newsletter from "../components/Newsletter.jsx";
import Team from "../components/Team.jsx";
import {useTranslation} from "react-i18next";
function About() {
    const { t, i18n } = useTranslation();


    return (
    <>
        <div className=" position-relative p-0">
            <Navbar/>
            <HeaderStyle PageName={t('about_us')}/>
        </div>
        <AboutUsStyle/>
        <Newsletter/>
        <Team/>
        <Footer/>
    </>
  )
}

export default About;
