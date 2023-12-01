import portfolio1 from '../assets/images/portfolio-1.jpg';
import portfolio2 from '../assets/images/portfolio-2.jpg';
import portfolio3 from '../assets/images/portfolio-3.jpg';
import portfolio4 from '../assets/images/portfolio-4.jpg';
import portfolio5 from '../assets/images/portfolio-5.jpg';
import portfolio6 from '../assets/images/portfolio-6.jpg';
import {useEffect, useRef, useState} from "react";
import i18next from "i18next";
import {Link} from "react-router-dom";



function Projects() {

    // init one ref to store the future isotope object
    const isotope = useRef();
    // store the filter keyword in a state
    const [filterKey, setFilterKey] = useState('*');

    // initialize an Isotope object with configs
    useEffect(() => {
        isotope.current = new Isotope('.portfolio-container', {
            itemSelector: '.portfolio-item',
            layoutMode: 'fitRows',
        })
        // cleanup
        return () => isotope.current.destroy()
    }, [])

    // handling filter key change
    useEffect(() => {
        filterKey === '*'
            ? isotope.current.arrange({filter: `*`})
            : isotope.current.arrange({filter: `.${filterKey}`})
    }, [filterKey]);

    const handleFilterKeyChange = (e,key) =>
    {
        setFilterKey(key);
        $("#portfolio-flters li").removeClass('active');
        e.target.classList.add('active');
    }

  return (
    <>
        <div className="bg-white py-5">
            <div className="container px-lg-5">
                <div className="section-title sc-title position-relative text-center mb-5 pb-2 wow fadeInUp"
                     data-wow-delay="0.1s">
                    <h6 className="position-relative d-inline text-primary ps-4">{i18next.t('our_project')}</h6>
                    <h2 className="mt-2">{i18next.t('project_paragraph')}</h2>
                </div>
                <div className="row mt-n2 wow fadeInUp" data-wow-delay="0.1s">
                    <div className="col-12 text-center">
                        <ul className="list-inline mb-5" id="portfolio-flters">
                            <li  onClick={(e)=>{handleFilterKeyChange(e,'*')}} className="btn px-3 pe-4 active">{i18next.t('project_All')}</li>
                            <li  onClick={(e)=>{handleFilterKeyChange(e,'first')}} className="btn px-3 pe-4" >{i18next.t('project_Design')}</li>
                            <li  onClick={(e)=>{handleFilterKeyChange(e,'second')}} className="btn px-3 pe-4" >{i18next.t('project_Development')}</li>
                        </ul>
                    </div>
                </div>
                <div className="row g-4 portfolio-container">
                    <div className="col-lg-4 col-md-6 portfolio-item first wow zoomIn" data-wow-delay="0.1s">
                        <div className="position-relative rounded overflow-hidden">
                            <img className="img-fluid w-100" src={portfolio1} alt={i18next.t('company_name')}/>
                                <div className="portfolio-overlay">
                                    <Link to={''} className="btn btn-light" href={portfolio1} data-lightbox="portfolio" >
                                        <i className="fa fa-plus fa-2x text-primary"></i></Link>
                                    <div className="mt-auto">
                                        <small className="text-white">
                                            <i className="fa fa-folder me-2"></i>
                                            {i18next.t('project_p1_type')}
                                        </small>
                                        <Link to={''} className="h5 d-block text-white mt-1 mb-0" href="">{i18next.t('project_p1_name')}</Link>
                                    </div>
                                </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 portfolio-item second wow zoomIn" data-wow-delay="0.3s">
                        <div className="position-relative rounded overflow-hidden">
                            <img className="img-fluid w-100" src={portfolio2} alt=""/>
                                <div className="portfolio-overlay">
                                    <Link to={''} className="btn btn-light" href={portfolio2} data-lightbox="portfolio" >
                                        <i className="fa fa-plus fa-2x text-primary"></i></Link>
                                    <div className="mt-auto">
                                        <small className="text-white">
                                            <i className="fa fa-folder me-2"></i>
                                            {i18next.t('project_p1_type')}
                                        </small>
                                        <Link to={''} className="h5 d-block text-white mt-1 mb-0" href="">{i18next.t('project_p1_name')}</Link>
                                    </div>
                                </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 portfolio-item first wow zoomIn" data-wow-delay="0.6s">
                        <div className="position-relative rounded overflow-hidden">
                            <img className="img-fluid w-100" src={portfolio3} alt=""/>
                                <div className="portfolio-overlay">
                                    <Link to={''} className="btn btn-light" href={portfolio3} data-lightbox="portfolio" >
                                        <i className="fa fa-plus fa-2x text-primary"></i></Link>
                                    <div className="mt-auto">
                                        <small className="text-white">
                                            <i className="fa fa-folder me-2"></i>
                                            {i18next.t('project_p1_type')}
                                        </small>
                                        <Link to={''} className="h5 d-block text-white mt-1 mb-0" href="">{i18next.t('project_p1_name')}</Link>
                                    </div>
                                </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 portfolio-item second wow zoomIn" data-wow-delay="0.1s">
                        <div className="position-relative rounded overflow-hidden">
                            <img className="img-fluid w-100" src={portfolio4} alt=""/>
                                <div className="portfolio-overlay">
                                    <Link to={''} className="btn btn-light" href={portfolio4} data-lightbox="portfolio" >
                                        <i className="fa fa-plus fa-2x text-primary"></i></Link>
                                    <div className="mt-auto">
                                        <small className="text-white">
                                            <i className="fa fa-folder me-2"></i>
                                            {i18next.t('project_p1_type')}
                                        </small>
                                        <Link to={''} className="h5 d-block text-white mt-1 mb-0" href="">{i18next.t('project_p1_name')}</Link>
                                    </div>
                                </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 portfolio-item first wow zoomIn" data-wow-delay="0.3s">
                        <div className="position-relative rounded overflow-hidden">
                            <img className="img-fluid w-100" src={portfolio5} alt=""/>
                                <div className="portfolio-overlay">
                                    <Link to={''} className="btn btn-light" href={portfolio5} data-lightbox="portfolio" >
                                        <i className="fa fa-plus fa-2x text-primary"></i></Link>
                                    <div className="mt-auto">
                                        <small className="text-white">
                                            <i className="fa fa-folder me-2"></i>
                                            {i18next.t('project_p1_type')}
                                        </small>
                                        <Link to={''} className="h5 d-block text-white mt-1 mb-0" href="">{i18next.t('project_p1_name')}</Link>
                                    </div>
                                </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 portfolio-item second wow zoomIn" data-wow-delay="0.6s">
                        <div className="position-relative rounded overflow-hidden">
                            <img className="img-fluid w-100" src={portfolio6} alt=""/>
                                <div className="portfolio-overlay">
                                    <Link to={''} className="btn btn-light" href={portfolio6} data-lightbox="portfolio" >
                                        <i className="fa fa-plus fa-2x text-primary"></i></Link>
                                    <div className="mt-auto">
                                        <small className="text-white">
                                            <i className="fa fa-folder me-2"></i>
                                            {i18next.t('project_p1_type')}
                                        </small>
                                        <Link to={''} className="h5 d-block text-white mt-1 mb-0" href="">{i18next.t('project_p1_name')}</Link>
                                    </div>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Projects;
