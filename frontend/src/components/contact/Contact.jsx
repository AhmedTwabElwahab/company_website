import './contact.scss'
import {useTranslation} from "react-i18next";
function Contact() {
    const { t, i18n } = useTranslation();

    return (
      <>
          <div className=" py-5">
              <div className="container px-lg-5">
                  <div className="row justify-content-center">
                      <div className="col-lg-7">
                          <div className="section-title sc-title position-relative text-center mb-5 pb-2 wow fadeInUp"
                               data-wow-delay="0.1s">
                              <h6 className="position-relative d-inline text-primary ps-4">{ t('Contact')}</h6>
                              <h2 className="mt-2">{ t('contact_p')}</h2>
                          </div>
                          <div className="wow fadeInUp" data-wow-delay="0.3s">
                              <form>
                                  <div className="row g-3">
                                      <div className="col-md-6">
                                          <div className="form-floating">
                                              <input type="text" className="form-control input-style" id="name"
                                                     placeholder={ t('contact_name')} />
                                                  <label htmlFor="name">{ t('contact_name')}</label>
                                          </div>
                                      </div>
                                      <div className="col-md-6">
                                          <div className="form-floating">
                                              <input type="email" className="form-control input-style" id="email"
                                                     placeholder={ t('contact_Email')} />
                                                  <label htmlFor="email">{ t('contact_Email')}</label>
                                          </div>
                                      </div>
                                      <div className="col-12">
                                          <div className="form-floating">
                                              <input type="text" className="form-control input-style" id="subject"
                                                     placeholder={ t('contact_Subject')} />
                                                  <label htmlFor="subject">{ t('contact_Subject')}</label>
                                          </div>
                                      </div>
                                      <div className="col-12">
                                          <div className="form-floating">
                                              <textarea className="form-control notes" placeholder={ t('contact_Message_placeholder')}
                                                        id="message" style={{height:'150px'}}></textarea>
                                              <label htmlFor="message">{ t('contact_Message')}</label>
                                          </div>
                                      </div>
                                      <div className="col-12">
                                          <button className="btn primary-btn w-100 py-3" type="submit">{ t('contact_SMessage')}</button>
                                      </div>
                                  </div>
                              </form>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </>
  )
}

export default Contact;
