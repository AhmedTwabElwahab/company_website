import {Link} from "react-router-dom";
import {useContext, useEffect, useState} from "react";
import lang_icon from '../../assets/images/global.png';
// import i18next from "i18next";
import {MainContext} from "../../context/MainContext.jsx";
import {useTranslation} from "react-i18next";

function Navbar() {
   const [Active,setActive] = useState(location.pathname);
   const [Lang,setLang] = useState('en');
   const [ dir, setDir ] = useContext(MainContext);
   const { t, i18n } = useTranslation();
   document.body.dir = i18n.dir();


    const handelClick = (path) =>
    {
        if (Active !== path)
        {
            setActive(path);
        }
    }
    const changeLang = (lang) =>
    {
        i18n.changeLanguage(lang).then(r => r);
        setLang(lang);

        if (lang === 'ar')
        {
            document.documentElement.dir = "rtl";
            setDir("rtl");
        }else
        {
            document.documentElement.dir = "ltr";
            setDir("ltr");
        }
    }

    useEffect(() =>
    {
        let currently_lang = localStorage.getItem('i18nextLng') || "en";

        if (currently_lang === 'ar')
        {
            document.documentElement.dir = "rtl";
            document.documentElement.lang = "ar";
            setDir("rtl");
        }else
        {
            document.documentElement.dir = "ltr";
            document.documentElement.lang = "en";
            setDir("ltr");
        }
    },[dir]);


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
                <Link to={`/`} className={(Active === '/' ? 'active ' : '' ) + 'nav-item nav-link'} onClick={()=> handelClick('/')}>{t('home')}</Link>
                <Link to={`/about`} className={(Active === '/about' ? 'active ' : '' ) + 'nav-item nav-link'} onClick={()=> handelClick('/about')} >{t('about')}</Link>
                <Link to={`/service`} className={(Active === '/service' ? 'active ' : '' ) + 'nav-item nav-link'} onClick={()=> handelClick('/service')} >{t('Service')}</Link>
                <Link to={`/project`} className={(Active === '/project' ? 'active ' : '' ) + 'nav-item nav-link'} onClick={()=> handelClick('/project')}>{t('project')}</Link>
                <Link to={`/team`}    className={(Active === '/team' ? 'active ' : '' ) + 'nav-item nav-link'} onClick={()=> handelClick('/team')}>{t('team')}</Link>
                <Link to={`/contact`} className={(Active === '/contact' ? 'active ' : '' ) + 'nav-item nav-link'} onClick={()=> handelClick('/contact')} >{t('Contact')}</Link>
                <div className={'nav-item nav-link'}>
                    <div className="dropdown">
                        <Link to={''} className="text-white dropdown-toggle" role="button" id="dropdownMenuLink"
                              data-bs-toggle="dropdown" aria-expanded="false">
                            <img alt={'lang'} src={lang_icon} style={{width:'25px',height:'25px'}}/>
                        </Link>

                        <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                            <li ><Link to={''} className="dropdown-item" onClick={()=>{changeLang('en')}}> en </Link></li>
                            <li><Link to={''} className="dropdown-item" onClick={()=>{changeLang('ar')}}> ar </Link></li>
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
