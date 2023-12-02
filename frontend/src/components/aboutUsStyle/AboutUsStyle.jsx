import img from '../../assets/images/about-right.png'
import img2 from '../../assets/images/line-dec.png'
import './about_style.scss'
import {useTranslation} from "react-i18next";
function AboutUsStyle() {
    const { t, i18n } = useTranslation();

  return (
    <>
        <div id="about" className="about-us section overflow-hidden mt-5">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 align-self-center">
                        <div className="section-heading">
                            <h4>{ t('about2_header1')}<em>{ t('about2_header2')}</em> &amp; { t('about2_header3')}</h4>
                            <img src={img2} alt={ t('company_name')} />
                                <p>{ t('about2_paragraph')}</p>
                        </div>
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="box-item">
                                    <h4><a href="#">{ t('about2_h4_sc1')}</a></h4>
                                    <p>{ t('about2_paragraph')}</p>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="box-item">
                                    <h4><a href="#">{ t('about2_h4_sc3')}</a></h4>
                                    <p>{ t('about2_paragraph')}</p>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="box-item">
                                    <h4><a href="#">{ t('about2_h4_sc2')}</a></h4>
                                    <p>{ t('about2_paragraph')}</p>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="box-item">
                                    <h4><a href="#">{ t('about2_h4_sc4')}</a></h4>
                                    <p></p>
                                </div>
                            </div>
                            <div className="col-lg-12">
                                <p>{ t('about2_paragraph2')}</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="right-image">
                            <img src={img} alt={ t('company_name')}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default AboutUsStyle;
