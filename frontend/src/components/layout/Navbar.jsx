import {Link} from "react-router-dom";
import {useContext, useEffect, useState} from "react";
import lang_icon from '../../assets/images/global.png';
import i18next from "i18next";
import {MainContext} from "../../context/MainContext.jsx";

function Navbar() {
   const [Active,setActive] = useState(location.pathname);
   const [Lang,setLang] = useState('en');
   const [ dir, setDir ] = useContext(MainContext);

    const handelClick = (path) =>
    {
        if (Active !== path)
        {
            setActive(path);
        }
    }
    const changeLang = (lang) =>
    {
        i18next.changeLanguage(lang).then((t)=>{});
        setLang(lang);

        if (lang === 'ar')
        {
            document.documentElement.dir = "rtl";
            setDir("rtl");
            localStorage.setItem('lang',"ar")
        }else
        {
            document.documentElement.dir = "ltr";
            setDir("ltr");
            localStorage.setItem('lang',"en")
        }

    }

    useEffect(()=>
    {
        let local_lang = localStorage.getItem('lang');

        if (local_lang === 'ar')
        {
            document.documentElement.dir = "rtl";
            setDir("rtl");
            localStorage.setItem('lang',"ar")
            i18next.changeLanguage('ar').then((t)=>{});
            setLang('ar');
        }else
        {
            document.documentElement.dir = "ltr";
            setDir("ltr");
            localStorage.setItem('lang',"en")
            i18next.changeLanguage('en').then((t)=>{});
            setLang('en');
        }
    },[Lang])

    return (
    <nav className={"navbar navbar-expand-lg navbar-light px-4 px-lg-5 py-3 py-lg-0 "}>
        <Link to={`/`} className="navbar-brand p-0">
            <h1 className="m-0">
                <i className="fa fa-search me-2"></i>SEO
                <span className="fs-5">Master</span>
            </h1>
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
            <span className="fa fa-bars"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
            <div className={ (dir === 'ltr' ? 'ms-auto ': 'me-auto ') + "navbar-nav py-0"}>
                <Link to={`/`} className={(Active === '/' ? 'active ' : '' ) + 'nav-item nav-link'} onClick={()=> handelClick('/')}>{i18next.t('home')}</Link>
                <Link to={`/about`} className={(Active === '/about' ? 'active ' : '' ) + 'nav-item nav-link'} onClick={()=> handelClick('/about')} >{i18next.t('about')}</Link>
                <Link to={`/service`} className={(Active === '/service' ? 'active ' : '' ) + 'nav-item nav-link'} onClick={()=> handelClick('/service')} >{i18next.t('Service')}</Link>
                <Link to={`/project`} className={(Active === '/project' ? 'active ' : '' ) + 'nav-item nav-link'} onClick={()=> handelClick('/project')}>{i18next.t('project')}</Link>
                <Link to={`/team`}    className={(Active === '/team' ? 'active ' : '' ) + 'nav-item nav-link'} onClick={()=> handelClick('/team')}>{i18next.t('team')}</Link>
                <Link to={`/contact`} className={(Active === '/contact' ? 'active ' : '' ) + 'nav-item nav-link'} onClick={()=> handelClick('/contact')} >{i18next.t('Contact')}</Link>
                <div className={'nav-item nav-link'}>
                    <div className="dropdown">
                        <Link to={''} className="text-white dropdown-toggle" role="button" id="dropdownMenuLink"
                              data-bs-toggle="dropdown" aria-expanded="false">
                            <img alt={'lang'} src={lang_icon} style={{width:'25px',height:'25px'}}/>
                        </Link>

                        <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                            <li ><Link to={''} className="dropdown-item" onClick={()=>{changeLang('en')}}>en</Link></li>
                            <li><Link to={''} className="dropdown-item" onClick={()=>{changeLang('ar')}}>ar</Link></li>
                        </ul>
                    </div>
                </div>
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
