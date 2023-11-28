import {Link} from "react-router-dom";
import {useEffect, useRef, useState} from "react";

function Navbar() {
   const navbar = useRef(null);
   const [Active,setActive] = useState(location.pathname);

    const handelClick = (path) =>
    {
        if (Active !== path)
        {
            setActive(path);
        }
    }

    return (
    <nav ref={navbar} className={"navbar navbar-expand-lg navbar-light px-4 px-lg-5 py-3 py-lg-0 "}>
        <Link to={`/`} className="navbar-brand p-0">
            <h1 className="m-0"><i className="fa fa-search me-2"></i>SEO<span className="fs-5">Master</span></h1>
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
            <span className="fa fa-bars"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
            <div className="navbar-nav ms-auto py-0">
                <Link to={`/`} className={(Active === '/' ? 'active ' : '' ) + 'nav-item nav-link'} onClick={()=> handelClick('/')}>Home</Link>
                <Link to={`/about`} className={(Active === '/about' ? 'active ' : '' ) + 'nav-item nav-link'} onClick={()=> handelClick('/about')} >About</Link>
                <Link to={`/service`} className={(Active === '/service' ? 'active ' : '' ) + 'nav-item nav-link'} onClick={()=> handelClick('/service')} >Service</Link>
                <Link to={`/project`} className={(Active === '/project' ? 'active ' : '' ) + 'nav-item nav-link'} onClick={()=> handelClick('/project')}>Project</Link>
                <Link to={`/team`}    className={(Active === '/team' ? 'active ' : '' ) + 'nav-item nav-link'} onClick={()=> handelClick('/team')}>team</Link>
                <Link to={`/contact`} className={(Active === '/contact' ? 'active ' : '' ) + 'nav-item nav-link'} onClick={()=> handelClick('/contact')} >Contact</Link>
            </div>
            <button type="button" className="btn text-secondary ms-3" data-bs-toggle="modal"
                    data-bs-target="#searchModal">
                <i className="fa fa-search"></i>
            </button>
        </div>
    </nav>
  )
}

export default Navbar;
