import hero_image from '../assets/images/hero.png';
function Header() {

  return (
    <>
        <div className="container-xxl py-5 primary-bg hero-header mb-5">
            <div className="container my-5 py-5 px-lg-5">
                <div className="row g-5 py-5">
                    <div className="col-lg-6 text-center text-lg-start">
                        <h1 className="text-white mb-4 animated zoomIn">All in one SEO tool need to grow your business
                            rapidly</h1>
                        <p className="text-white pb-3 animated zoomIn">Tempor rebum no at dolore lorem clita rebum rebum
                            ipsum rebum stet dolor sed justo kasd. Ut dolor sed magna dolor sea diam. Sit diam sit justo
                            amet ipsum vero ipsum clita lorem</p>
                        <a href="" className="btn btn-outline-light py-sm-3 px-sm-5 rounded-pill animated slideInRight">Contact
                            Us</a>
                    </div>
                    <div className="col-lg-6 text-center text-lg-start">
                        <img className="img-fluid" src={hero_image} alt={"hero"}/>
                    </div>
                </div>
            </div>
        </div>
        {/* Screen Search Start */}
        <div className="modal fade" id="searchModal" tabIndex="-1">
            <div className="modal-dialog modal-fullscreen">
                <div className="modal-content" style={{background: 'rgba(29, 29, 39, 0.7)'}}>
                    <div className="modal-header border-0">
                        <button type="button" className="btn bg-white btn-close" data-bs-dismiss="modal"
                                aria-label="Close"></button>
                    </div>
                    <div className="modal-body d-flex align-items-center justify-content-center">
                        <div className="input-group" style={{maxWidth: '600px'}}>
                            <input type="text" className="form-control bg-transparent border-light p-3"
                                   placeholder="Type search keyword"/>
                                <button className="btn btn-light px-4">
                                    <i className="bi bi-search"></i>
                                </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* Full Screen Search End */}
    </>
  )
}

export default Header;