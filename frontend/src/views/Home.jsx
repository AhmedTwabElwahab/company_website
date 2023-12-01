import Spinner from "../components/Spinner.jsx";
import Navbar from "../components/layout/Navbar.jsx";
import Header from "../components/Header.jsx";
import AboutUs from "../components/AboutUs.jsx";
import Newsletter from "../components/Newsletter.jsx";
import Services from "../components/Services.jsx";
import Projects from "../components/Projects.jsx";
import Customers from "../components/customers/Customers.jsx";
import Team from "../components/Team.jsx";
import Footer from "../components/layout/Footer.jsx";
import UpTop from "../components/UpTop.jsx";



function Home() {
  return (
    <>
        <Spinner/>
        <div className=" position-relative p-0">
            <Navbar />
            <Header/>
        </div>
        <AboutUs/>
        <Newsletter/>
        <Services/>
        <Projects/>
        <Customers/>
        <Team/>
        <Footer/>
        <UpTop/>
    </>
  )
}

export default Home;
