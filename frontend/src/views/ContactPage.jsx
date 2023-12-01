import Navbar from "../components/layout/Navbar.jsx";
import HeaderStyle from "../components/HeaderStyle.jsx";
import Footer from "../components/layout/Footer.jsx";
import Contact from "../components/contact/Contact.jsx";

function ContactPage() {

  return (
      <>
          <div className=" position-relative p-0">
              <Navbar/>
              <HeaderStyle PageName={'Contact'}/>
          </div>
          <Contact/>
          <Footer/>
      </>
  )
}

export default ContactPage;
