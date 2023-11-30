import './contact.scss'
function Contact() {
  return (
      <>
          <div className="container-xxl py-5">
              <div className="container px-lg-5">
                  <div className="row justify-content-center">
                      <div className="col-lg-7">
                          <div className="section-title sc-title position-relative text-center mb-5 pb-2 wow fadeInUp"
                               data-wow-delay="0.1s">
                              <h6 className="position-relative d-inline text-primary ps-4">Contact Us</h6>
                              <h2 className="mt-2">Contact For Any Query</h2>
                          </div>
                          <div className="wow fadeInUp" data-wow-delay="0.3s">
                              <form>
                                  <div className="row g-3">
                                      <div className="col-md-6">
                                          <div className="form-floating">
                                              <input type="text" className="form-control input-style" id="name"
                                                     placeholder="Your Name" />
                                                  <label htmlFor="name">Your Name</label>
                                          </div>
                                      </div>
                                      <div className="col-md-6">
                                          <div className="form-floating">
                                              <input type="email" className="form-control input-style" id="email"
                                                     placeholder="Your Email" />
                                                  <label htmlFor="email">Your Email</label>
                                          </div>
                                      </div>
                                      <div className="col-12">
                                          <div className="form-floating">
                                              <input type="text" className="form-control input-style" id="subject"
                                                     placeholder="Subject" />
                                                  <label htmlFor="subject">Subject</label>
                                          </div>
                                      </div>
                                      <div className="col-12">
                                          <div className="form-floating">
                                              <textarea className="form-control notes" placeholder="Leave a message here"
                                                        id="message" style={{height:'150px'}}></textarea>
                                              <label htmlFor="message">Message</label>
                                          </div>
                                      </div>
                                      <div className="col-12">
                                          <button className="btn primary-btn w-100 py-3" type="submit">Send Message
                                          </button>
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
