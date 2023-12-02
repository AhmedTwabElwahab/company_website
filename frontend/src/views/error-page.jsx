import Navbar from "../components/layout/Navbar.jsx";
import HeaderStyle from "../components/HeaderStyle.jsx";
import Footer from "../components/layout/Footer.jsx";
import NotFound from "../components/NotFound.jsx";
import {useTranslation} from "react-i18next";

export default function ErrorPage() {
    const { t } = useTranslation();

    return (
      <>
          <div className=" position-relative p-0">
              <Navbar/>
              <HeaderStyle PageName={t('not_found')}/>
          </div>
          <NotFound/>
          <Footer/>
      </>
  );
}
