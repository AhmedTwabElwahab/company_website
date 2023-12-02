import img from '../assets/images/newsletter.png'
import {MainContext} from "../context/MainContext.jsx";
import {useContext} from "react";
import {useTranslation} from "react-i18next";

function Newsletter() {
    const [ dir, setDir ] = useContext(MainContext);
    const { t, i18n } = useTranslation();

    return (
    <>
        <div className=" primary-bg newsletter my-5 wow fadeInUp" data-wow-delay="0.1s">
            <div className="container px-lg-5">
                <div className="row align-items-center" style={{height:'250px'}}>
                    <div className="col-12 col-md-6">
                        <h3 className="text-white">{t('newsletter_header')}</h3>
                        <small className="text-white">{t('newsletter_paragraph')}</small>
                        <div className="position-relative w-100 mt-3">
                            <input className="form-control border-0 rounded-pill w-100 ps-4 pe-5" type="text"
                                   placeholder={t('enter_email')} style={{height:'48px'}} />
                                <button type="button"
                                        className={(i18n.dir() !== "rtl" ? 'end-0 ' : 'start-0 ') + "btn shadow-none position-absolute top-0 mt-1 me-2"}><i
                                    className="fa fa-paper-plane text-primary fs-4"></i></button>
                        </div>
                    </div>
                    <div className="col-md-6 text-center mb-n5 d-none d-md-block">
                        <img className="img-fluid mt-5" style={{height:'250px'}} src={img} alt={t('company_name')} />
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Newsletter;
