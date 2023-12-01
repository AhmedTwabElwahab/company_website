import Navbar from "../components/layout/Navbar.jsx";
import Team from "../components/Team.jsx";
import Footer from "../components/layout/Footer.jsx";
import HeaderStyle from "../components/HeaderStyle.jsx";



function TeamPage() {
  return (
      <>
          <div className=" position-relative p-0">
              <Navbar/>
              <HeaderStyle PageName={'Team'}/>
          </div>
          <Team/>
          <Footer/>
      </>
  )
}

export default TeamPage;
