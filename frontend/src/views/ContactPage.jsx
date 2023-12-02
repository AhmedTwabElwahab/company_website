import Navbar from "../components/layout/Navbar.jsx";
import HeaderStyle from "../components/HeaderStyle.jsx";
import Footer from "../components/layout/Footer.jsx";
import Contact from "../components/contact/Contact.jsx";
import {useTranslation} from "react-i18next";

function ContactPage() {
    const { t, i18n } = useTranslation();

  return (
      <>
          <div className=" position-relative p-0">
              <Navbar/>
              <HeaderStyle PageName={t('Contact')}/>
          </div>
          <Contact/>
          <Footer/>
      </>
  )
}

export default ContactPage;
