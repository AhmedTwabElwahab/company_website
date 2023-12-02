import img from '../../assets/images/about-right.png'
import img2 from '../../assets/images/line-dec.png'
import './about_style.scss'
import i18next from "i18next";
function AboutUsStyle() {

  return (
    <>
        <div id="about" className="about-us section overflow-hidden">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 align-self-center">
                        <div className="section-heading">
                            <h4>{i18next.t('about2_header1')}<em>{i18next.t('about2_header2')}</em> &amp; {i18next.t('about2_header3')}</h4>
                            <img src={img2} alt={i18next.t('company_name')} />
                                <p>{i18next.t('about2_paragraph')}</p>
                        </div>
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="box-item">
                                    <h4><a href="#">{i18next.t('about2_h4_sc1')}</a></h4>
                                    <p>{i18next.t('about2_paragraph')}</p>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="box-item">
                                    <h4><a href="#">{i18next.t('about2_h4_sc3')}</a></h4>
                                    <p>{i18next.t('about2_paragraph')}</p>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="box-item">
                                    <h4><a href="#">{i18next.t('about2_h4_sc2')}</a></h4>
                                    <p>{i18next.t('about2_paragraph')}</p>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="box-item">
                                    <h4><a href="#">{i18next.t('about2_h4_sc4')}</a></h4>
                                    <p></p>
                                </div>
                            </div>
                            <div className="col-lg-12">
                                <p>{i18next.t('about2_paragraph2')}</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="right-image">
                            <img src={img} alt={i18next.t('company_name')}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default AboutUsStyle;
