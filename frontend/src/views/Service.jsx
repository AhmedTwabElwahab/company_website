import Navbar from "../components/layout/Navbar.jsx";
import Footer from "../components/layout/Footer.jsx";
import Services from "../components/Services.jsx";
import HeaderStyle from "../components/HeaderStyle.jsx";

function service() {

  return (
    <>
        <div className="container-xxl position-relative p-0">
            <Navbar show={true} className={'default_none'} />
            <HeaderStyle PageName={'Services'}/>
        </div>
        <Services/>
        <Footer/>
    </>
  )
}

export default service;
