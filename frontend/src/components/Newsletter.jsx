import img from '../assets/images/newsletter.png'
import {MainContext} from "../context/MainContext.jsx";
import {useContext} from "react";
import i18next from "i18next";

function Newsletter() {
    const [ dir, setDir ] = useContext(MainContext);
  return (
    <>
        <div className=" primary-bg newsletter my-5 wow fadeInUp" data-wow-delay="0.1s">
            <div className="container px-lg-5">
                <div className="row align-items-center" style={{height:'250px'}}>
                    <div className="col-12 col-md-6">
                        <h3 className="text-white">{i18next.t('newsletter_header')}</h3>
                        <small className="text-white">{i18next.t('newsletter_paragraph')}</small>
                        <div className="position-relative w-100 mt-3">
                            <input className="form-control border-0 rounded-pill w-100 ps-4 pe-5" type="text"
                                   placeholder={i18next.t('enter_email')} style={{height:'48px'}} />
                                <button type="button"
                                        className={(dir !== "rtl" ? 'end-0 ' : 'start-0 ') + "btn shadow-none position-absolute top-0 mt-1 me-2"}><i
                                    className="fa fa-paper-plane text-primary fs-4"></i></button>
                        </div>
                    </div>
                    <div className="col-md-6 text-center mb-n5 d-none d-md-block">
                        <img className="img-fluid mt-5" style={{height:'250px'}} src={img} alt={i18next.t('company_name')} />
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Newsletter;
