import {useTranslation} from "react-i18next";

function Services() {
    const { t, i18n } = useTranslation();

  return (
    <>
        <div className=" py-5">
            <div className="container px-lg-5">
                <div className="section-title sc-title position-relative text-center mb-5 pb-2 wow fadeInUp"
                     data-wow-delay="0.1s">
                    <h6 className="position-relative d-inline text-primary ps-4">{t('Service')}</h6>
                    <h2 className="mt-2">{t('services_main_paragraph')}</h2>
                </div>
                <div className="row g-4">
                    <div className="col-lg-4 col-md-6 wow zoomIn" data-wow-delay="0.1s">
                        <div className="service-item d-flex flex-column justify-content-center text-center rounded">
                            <div className="service-icon flex-shrink-0">
                                <i className="fa fa-home fa-2x"></i>
                            </div>
                            <h5 className="mb-3">{t('services_sc1_header')}</h5>
                            <p>{t('services_sc1_p')}</p>
                            <a className="btn px-3 mt-auto mx-auto" href="">{t('about_button')}</a>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 wow zoomIn" data-wow-delay="0.3s">
                        <div className="service-item d-flex flex-column justify-content-center text-center rounded">
                            <div className="service-icon flex-shrink-0">
                                <i className="fa fa-home fa-2x"></i>
                            </div>
                            <h5 className="mb-3">{t('services_sc2_header')}</h5>
                            <p>{t('services_sc2_p')}</p>
                            <a className="btn px-3 mt-auto mx-auto" href="">{t('about_button')}</a>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 wow zoomIn" data-wow-delay="0.6s">
                        <div className="service-item d-flex flex-column justify-content-center text-center rounded">
                            <div className="service-icon flex-shrink-0">
                                <i className="fa fa-home fa-2x"></i>
                            </div>
                            <h5 className="mb-3">{t('services_sc3_header')}</h5>
                            <p>{t('services_sc3_p')}</p>
                            <a className="btn px-3 mt-auto mx-auto" href="">{t('about_button')}</a>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 wow zoomIn" data-wow-delay="0.1s">
                        <div className="service-item d-flex flex-column justify-content-center text-center rounded">
                            <div className="service-icon flex-shrink-0">
                                <i className="fa fa-home fa-2x"></i>
                            </div>
                            <h5 className="mb-3">{t('services_sc4_header')}</h5>
                            <p>{t('services_sc4_p')}</p>
                            <a className="btn px-3 mt-auto mx-auto" href="">{t('about_button')}</a>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 wow zoomIn" data-wow-delay="0.3s">
                        <div className="service-item d-flex flex-column justify-content-center text-center rounded">
                            <div className="service-icon flex-shrink-0">
                                <i className="fa fa-home fa-2x"></i>
                            </div>
                            <h5 className="mb-3">{t('services_sc5_header')}</h5>
                            <p>{t('services_sc5_p')}</p>
                            <a className="btn px-3 mt-auto mx-auto" href="">{t('about_button')}</a>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 wow zoomIn" data-wow-delay="0.6s">
                        <div className="service-item d-flex flex-column justify-content-center text-center rounded">
                            <div className="service-icon flex-shrink-0">
                                <i className="fa fa-home fa-2x"></i>
                            </div>
                            <h5 className="mb-3">{t('services_sc6_header')}</h5>
                            <p>{t('services_sc6_p')}</p>
                            <a className="btn px-3 mt-auto mx-auto" href="">{t('about_button')}</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Services;
