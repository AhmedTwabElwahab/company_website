import './contact.scss'
import i18next from "i18next";
function Contact() {
  return (
      <>
          <div className=" py-5">
              <div className="container px-lg-5">
                  <div className="row justify-content-center">
                      <div className="col-lg-7">
                          <div className="section-title sc-title position-relative text-center mb-5 pb-2 wow fadeInUp"
                               data-wow-delay="0.1s">
                              <h6 className="position-relative d-inline text-primary ps-4">{i18next.t('Contact')}</h6>
                              <h2 className="mt-2">{i18next.t('contact_p')}</h2>
                          </div>
                          <div className="wow fadeInUp" data-wow-delay="0.3s">
                              <form>
                                  <div className="row g-3">
                                      <div className="col-md-6">
                                          <div className="form-floating">
                                              <input type="text" className="form-control input-style" id="name"
                                                     placeholder={i18next.t('contact_name')} />
                                                  <label htmlFor="name">{i18next.t('contact_name')}</label>
                                          </div>
                                      </div>
                                      <div className="col-md-6">
                                          <div className="form-floating">
                                              <input type="email" className="form-control input-style" id="email"
                                                     placeholder={i18next.t('contact_Email')} />
                                                  <label htmlFor="email">{i18next.t('contact_Email')}</label>
                                          </div>
                                      </div>
                                      <div className="col-12">
                                          <div className="form-floating">
                                              <input type="text" className="form-control input-style" id="subject"
                                                     placeholder={i18next.t('contact_Subject')} />
                                                  <label htmlFor="subject">{i18next.t('contact_Subject')}</label>
                                          </div>
                                      </div>
                                      <div className="col-12">
                                          <div className="form-floating">
                                              <textarea className="form-control notes" placeholder={i18next.t('contact_Message_placeholder')}
                                                        id="message" style={{height:'150px'}}></textarea>
                                              <label htmlFor="message">{i18next.t('contact_Message')}</label>
                                          </div>
                                      </div>
                                      <div className="col-12">
                                          <button className="btn primary-btn w-100 py-3" type="submit">{i18next.t('contact_SMessage')}</button>
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
