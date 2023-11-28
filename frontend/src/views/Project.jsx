import Navbar from "../components/layout/Navbar.jsx";
import Footer from "../components/layout/Footer.jsx";
import Projects from "../components/Projects.jsx";
import HeaderStyle from "../components/HeaderStyle.jsx";

function project() {

  return (
    <>
        <div className="container-xxl position-relative p-0">
            <Navbar/>
            <HeaderStyle PageName={'Projects'}/>
        </div>
        <Projects/>
        <Footer/>
    </>
  )
}

export default project;
