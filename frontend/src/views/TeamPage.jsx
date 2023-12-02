import Navbar from "../components/layout/Navbar.jsx";
import Team from "../components/Team.jsx";
import Footer from "../components/layout/Footer.jsx";
import HeaderStyle from "../components/HeaderStyle.jsx";
import {useTranslation} from "react-i18next";



function TeamPage() {
    const { t } = useTranslation();

    return (
      <>
          <div className=" position-relative p-0">
              <Navbar/>
              <HeaderStyle PageName={t('team')}/>
          </div>
          <Team/>
          <Footer/>
      </>
  )
}

export default TeamPage;
