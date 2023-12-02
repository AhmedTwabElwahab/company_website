import Navbar from "../components/layout/Navbar.jsx";
import Team from "../components/Team.jsx";
import Footer from "../components/layout/Footer.jsx";
import HeaderStyle from "../components/HeaderStyle.jsx";
import i18next from "i18next";



function TeamPage() {
  return (
      <>
          <div className=" position-relative p-0">
              <Navbar/>
              <HeaderStyle PageName={i18next.t('team')}/>
          </div>
          <Team/>
          <Footer/>
      </>
  )
}

export default TeamPage;
