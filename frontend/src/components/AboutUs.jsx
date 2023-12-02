import img from '../assets/images/about-img.png'
import {useContext} from "react";
import {MainContext} from "../context/MainContext.jsx";
import {useTranslation} from "react-i18next";
function AboutUs() {
    const [ dir, setDir ] = useContext(MainContext);
    const { t, i18n } = useTranslation();

  return (
    <>
        <div className=" py-5">
            <div className="container px-lg-5">
                <div className="row g-5">
                    <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
                        <div className="section-title section-title-rtl position-relative mb-4 pb-2">
                            <h6 className="position-relative text-primary ps-4">{ t('about_us')}</h6>
                            <h2 className="mt-2"> { t('about_header')}</h2>
                        </div>
                        <p className="mb-4">{ t('about_paragraph')}</p>
                        <div className="row g-3">
                            <div className="col-sm-6">
                                <h6 className="mb-3"><i className="fa fa-check text-primary me-2"></i>{ t('about_h6_sc1')}</h6>
                                <h6 className="mb-0"><i className="fa fa-check text-primary me-2"></i>{ t('about_h6_sc2')}</h6>
                            </div>
                            <div className="col-sm-6">
                                <h6 className="mb-3"><i className="fa fa-check text-primary me-2"></i>{ t('about_h6_sc3')}</h6>
                                <h6 className="mb-0"><i className="fa fa-check text-primary me-2"></i>{ t('about_h6_sc4')}</h6>
                            </div>
                        </div>
                        <div className="d-flex align-items-center mt-4">
                            <a className={ ( i18n.dir() === 'ltr' ? 'me-3': 'ms-3') + " btn primary-btn rounded-pill px-4"} href="">{ t('about_button')}</a>
                            <a className={ ( i18n.dir() === 'ltr' ? 'me-3': 'ms-3') + " btn primary-btn-outline btn-square"} href=""><i
                                className="fab fa-facebook-f"></i></a>
                            <a className={ ( i18n.dir() === 'ltr' ? 'me-3': 'ms-3') + " btn primary-btn-outline btn-square"} href=""><i
                                className="fab fa-twitter"></i></a>
                            <a className={ ( i18n.dir() === 'ltr' ? 'me-3': 'ms-3') + " btn primary-btn-outline btn-square"} href=""><i
                                className="fab fa-instagram"></i></a>
                            <a className={ ( i18n.dir() === 'ltr' ? '': 'ms-3') + " btn primary-btn-outline btn-square"} href=""><i
                                className="fab fa-linkedin-in"></i></a>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <img alt={'about'} className="img-fluid wow zoomIn" data-wow-delay="0.5s" src={img} />
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default AboutUs;
