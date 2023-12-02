import portfolio1 from '../../assets/images/portfolio-1.jpg';
import portfolio2 from '../../assets/images/portfolio-2.jpg';
import portfolio3 from '../../assets/images/portfolio-3.jpg';
import portfolio4 from '../../assets/images/portfolio-4.jpg';
import portfolio5 from '../../assets/images/portfolio-5.jpg';
import portfolio6 from '../../assets/images/portfolio-6.jpg';
import {useContext} from "react";
import {MainContext} from "../../context/MainContext.jsx";
import {Link} from "react-router-dom";
import './footer.scss';
import {useTranslation} from "react-i18next";

function Footer() {
    const [ dir, setDir ] = useContext(MainContext);
    const { t, i18n } = useTranslation();

    return (
    <>
        <div className="container-fluid primary-bg text-light footer pt-5 wow fadeIn" data-wow-delay="0.1s">
            <div className="container py-5 px-lg-5">
                <div className="row g-5">
                    <div className="col-md-6 col-lg-3">
                        <h5 className="text-white mb-4">{ t('footer_1_h5')}</h5>
                        <p><i className={(i18n.dir() === "rtl" ? 'ms-3 ' : 'me-3 ') + "fa fa-map-marker-alt"}></i>{ t('footer_1_p_address')}</p>
                        <p><i className={(i18n.dir() === "rtl" ? 'ms-3 ' : 'me-3 ') + "fa fa-phone-alt"}></i>{ t('footer_1_p_phone')}</p>
                        <p><i className={(i18n.dir() === "rtl" ? 'ms-3 ' : 'me-3 ') + "fa fa-envelope "}></i>{ t('footer_1_p_email')}</p>
                        <div className="d-flex pt-2">
                            <Link to={''} className="btn btn-outline-light btn-social">
                                <i className="fab fa-twitter"></i>
                            </Link>
                            <Link to={''} className="btn btn-outline-light btn-social" >
                                <i className="fab fa-facebook-f"></i>
                            </Link>
                            <Link to={''} className="btn btn-outline-light btn-social" >
                                <i className="fab fa-youtube"></i>
                            </Link>
                            <Link to={''} className="btn btn-outline-light btn-social" >
                                <i className="fab fa-instagram"></i>
                            </Link>
                            <Link to={''} className="btn btn-outline-light btn-social" >
                                <i className="fab fa-linkedin-in"></i>
                            </Link>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-3 links_sc2">
                        <h5 className="text-white mb-4">{ t('footer_2_h5')}</h5>
                        <Link to={'/about'} className="btn btn-link">
                            { i18n.dir() === 'rtl' ? <i className="fas fa-chevron-left"></i> : ''}
                            { t('about_us')}
                        </Link>
                        <Link to={'/contact'} className="btn btn-link">
                            { i18n.dir() === 'rtl' ? <i className="fas fa-chevron-left"></i> : ''}
                            { t('Contact')}
                        </Link>
                        <Link to={'/service'} className="btn btn-link" >
                            { i18n.dir() === 'rtl' ? <i className="fas fa-chevron-left"></i> : ''}
                            { t('Service')}
                        </Link>
                        <Link to={'/project'} className="btn btn-link" >
                            { i18n.dir() === 'rtl' ? <i className="fas fa-chevron-left"></i> : ''}
                            { t('project')}
                        </Link>
                        <Link to={'/team'} className="btn btn-link">
                            { i18n.dir() === 'rtl' ? <i className="fas fa-chevron-left"></i> : ''}
                            { t('team')}
                        </Link>
                    </div>
                    <div className="col-md-6 col-lg-3">
                        <h5 className="text-white mb-4">{ t('footer_3_h5')}</h5>
                        <div className="row g-2">
                            <div className="col-4">
                                <img className="img-fluid" src={portfolio1} alt={ t('company_name')} />
                            </div>
                            <div className="col-4">
                                <img className="img-fluid" src={portfolio2} alt={ t('company_name')} />
                            </div>
                            <div className="col-4">
                                <img className="img-fluid" src={portfolio3} alt={ t('company_name')} />
                            </div>
                            <div className="col-4">
                                <img className="img-fluid" src={portfolio4} alt={ t('company_name')} />
                            </div>
                            <div className="col-4">
                                <img className="img-fluid" src={portfolio5} alt={ t('company_name')} />
                            </div>
                            <div className="col-4">
                                <img className="img-fluid" src={portfolio6} alt={ t('company_name')} />
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-3">
                        <h5 className="text-white mb-4">{ t('footer_4_h5')}</h5>
                        <p>{ t('footer_4_p')}</p>
                        <div className="position-relative w-100 mt-3">
                            <input className="form-control border-0 rounded-pill w-100 ps-4 pe-5" type="text"
                                   placeholder={ t('enter_email')} style={{height:"48px"}} />
                                <button type="button"
                                        className={(dir !== "rtl" ? 'end-0 ' : 'start-0 ') + "btn shadow-none position-absolute top-0 mt-1 me-2"}>
                                    <i className="fa fa-paper-plane text-primary fs-4"></i></button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container px-lg-5">
                <div className="copyright">
                    <div className="row justify-content-between">
                        <div className={(dir !== "rtl" ? 'text-md-start ' : 'text-md-end ') + "col-md-6 text-center mb-3 mb-md-0"}>
                            &copy; <Link to={'/'} className="border-bottom" > { t('company_name')} </Link>, All Right Reserved.
                            Designed By <Link to={'/'} className="border-bottom"> AD Tech </Link>
                        </div>
                        <div className={(dir !== "rtl" ? 'text-md-end ' : 'text-md-start ') + 'col-md-6 text-center'}>
                            <div className="footer-menu">
                                <Link to={'/'}>Home</Link>
                                <Link to={''}>Cookies</Link>
                                <Link to={''}>Help</Link>
                                <Link to={''}>FQAs</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Footer;
