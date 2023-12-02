import {Link} from "react-router-dom";
import {useTranslation} from "react-i18next";

function NotFound() {
    const { t, i18n } = useTranslation();

  return (
      <>
          <div className=" py-5 wow fadeInUp" data-wow-delay="0.1s">
              <div className="container px-lg-5 text-center">
                  <div className="row justify-content-center">
                      <div className="col-lg-6">
                          <i className="bi bi-exclamation-triangle display-1 text-primary"></i>
                          <h1 className="display-1">404</h1>
                          <h1 className="mb-4">{ t('not_found')}</h1>
                          <p className="mb-4">{ t('not_found_p')}</p>
                          <Link to={`/`} className="btn primary-btn-outline rounded-pill py-3 px-5">{ t('not_found_button')}</Link>
                      </div>
                  </div>
              </div>
          </div>
      </>
  )
}

export default NotFound;
