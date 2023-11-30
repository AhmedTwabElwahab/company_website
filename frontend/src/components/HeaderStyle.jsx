import {Link} from "react-router-dom";

function HeaderStyle({PageName}) {

  return (
    <>
        <div className="container-xxl py-5 primary-bg hero-header mb-5">
            <div className="container my-5 py-5 px-lg-5">
                <div className="row g-5 py-5">
                    <div className="col-12 text-center">
                        <h1 className="text-white animated zoomIn">{PageName}</h1>
                        <hr className="bg-white mx-auto mt-0" style={{width: '90px'}} />
                        <nav>
                            <Link to={`/`} className="text-white">Home</Link>
                            <Link to={``} className="text-white px-2">/</Link>
                            <Link to={``} className="text-white">{PageName}</Link>
                        </nav>
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

export default HeaderStyle;
