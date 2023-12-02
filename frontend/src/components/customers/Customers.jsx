import client1 from '../../assets/images/team-1.jpg';
import client2 from '../../assets/images/team-2.jpg';
import client3 from '../../assets/images/team-3.jpg';
import quote from '../../assets/images/quote.png';
import headingLine from '../../assets/images/line-dec.png';
import './customers.scss';
import i18next from "i18next";
function Customers() {
    return (
    <>
        <div id="clients" className="the-clients py-3">
            <div className="container">
                <div className="row justify-content-around">
                    <div className="col-lg-8">
                        <div className="section-title sc-title position-relative text-center mb-5 pb-2 wow fadeInUp"
                             data-wow-delay="0.1s">
                            <h6 className="position-relative d-inline text-primary ps-4">{i18next.t('Our_Clients')}</h6>
                            <h2 className="mt-2">{i18next.t('Our_Clients_paragraph1')}<em>{i18next.t('Our_Clients_paragraph2')}</em> {i18next.t('Our_Clients_paragraph3')}</h2>
                        </div>
                    </div>
                    <div className="col-lg-12">
                        <div className="naccs">
                            <div className="grid">
                                <div className="row">
                                    <div className="col-lg-7 align-self-center">
                                        <div className="menu">
                                            <div className="first-thumb active">
                                                <div className="thumb">
                                                    <div className="row">
                                                        <div className="col-lg-4 col-sm-4 col-12">
                                                            <h4>{i18next.t('Our_Clients_client1')}</h4>
                                                            <span className="date">30 November 2021</span>
                                                        </div>
                                                        <div className="col-lg-4 col-sm-4 d-none d-sm-block">
                                                            <span className="category">{i18next.t('Our_Clients_client1_App_name')}</span>
                                                        </div>
                                                        <div className="col-lg-4 col-sm-4 col-12">
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <span className="rating">4.8</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div>
                                                <div className="thumb">
                                                    <div className="row">
                                                        <div className="col-lg-4 col-sm-4 col-12">
                                                            <h4>{i18next.t('Our_Clients_client2')}</h4>
                                                            <span className="date">29 November 2021</span>
                                                        </div>
                                                        <div className="col-lg-4 col-sm-4 d-none d-sm-block">
                                                            <span className="category">{i18next.t('Our_Clients_client2_App_name')}</span>
                                                        </div>
                                                        <div className="col-lg-4 col-sm-4 col-12">
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <span className="rating">4.5</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div>
                                                <div className="thumb">
                                                    <div className="row">
                                                        <div className="col-lg-4 col-sm-4 col-12">
                                                            <h4>{i18next.t('Our_Clients_client1')}</h4>
                                                            <span className="date">27 November 2021</span>
                                                        </div>
                                                        <div className="col-lg-4 col-sm-4 d-none d-sm-block">
                                                            <span className="category">{i18next.t('Our_Clients_client1_App_name')}</span>
                                                        </div>
                                                        <div className="col-lg-4 col-sm-4 col-12">
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <span className="rating">4.7</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div>
                                                <div className="thumb">
                                                    <div className="row">
                                                        <div className="col-lg-4 col-sm-4 col-12">
                                                            <h4>{i18next.t('Our_Clients_client2')}</h4>
                                                            <span className="date">24 November 2021</span>
                                                        </div>
                                                        <div className="col-lg-4 col-sm-4 d-none d-sm-block">
                                                            <span className="category"> {i18next.t('Our_Clients_client2_App_name')} </span>
                                                        </div>
                                                        <div className="col-lg-4 col-sm-4 col-12">
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <span className="rating">3.9</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="last-thumb">
                                                <div className="thumb">
                                                    <div className="row">
                                                        <div className="col-lg-4 col-sm-4 col-12">
                                                            <h4 className="category">{i18next.t('Our_Clients_client2_App_name')}</h4>
                                                            <span className="date">21 November 2021</span>
                                                        </div>
                                                        <div className="col-lg-4 col-sm-4 d-none d-sm-block">
                                                            <span className="category">{i18next.t('Our_Clients_client2_App_name')}</span>
                                                        </div>
                                                        <div className="col-lg-4 col-sm-4 col-12">
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <span className="rating">4.3</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-5">
                                        <ul className="nacc">
                                            <li className="active">
                                                <div>
                                                    <div className="thumb">
                                                        <div className="row">
                                                            <div className="col-lg-12">
                                                                <div className="client-content">
                                                                    <img src={quote} alt={i18next.t('company_name')} />
                                                                        <p>“{i18next.t('Our_Clients_op_text')}”</p>
                                                                </div>
                                                                <div className="down-content">
                                                                    <img src={client1} alt={i18next.t('company_name')} />
                                                                        <div className="right-content">
                                                                            <h4>{i18next.t('Our_Clients_client1')}</h4>
                                                                            <span>{i18next.t('Our_Clients_client1_App_name')}</span>
                                                                        </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div>
                                                    <div className="thumb">
                                                        <div className="row">
                                                            <div className="col-lg-12">
                                                                <div className="client-content">
                                                                    <img src={quote}  alt={i18next.t('company_name')} />
                                                                        <p>“{i18next.t('Our_Clients_op_text')}”</p>
                                                                </div>
                                                                <div className="down-content">
                                                                    <img src={client2}  alt={i18next.t('company_name')} />
                                                                        <div className="right-content">
                                                                            <h4>{i18next.t('Our_Clients_client2')}</h4>
                                                                            <span>{i18next.t('Our_Clients_client2_App_name')}</span>
                                                                        </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div>
                                                    <div className="thumb">
                                                        <div className="row">
                                                            <div className="col-lg-12">
                                                                <div className="client-content">
                                                                    <img src={quote}  alt={i18next.t('company_name')} />
                                                                        <p>“{i18next.t('Our_Clients_op_text')}”</p>
                                                                </div>
                                                                <div className="down-content">
                                                                    <img src={client2}  alt={i18next.t('company_name')} />
                                                                        <div className="right-content">
                                                                            <h4>{i18next.t('Our_Clients_client1')}</h4>
                                                                            <span>{i18next.t('Our_Clients_client1_App_name')}</span>
                                                                        </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div>
                                                    <div className="thumb">
                                                        <div className="row">
                                                            <div className="col-lg-12">
                                                                <div className="client-content">
                                                                    <img src={quote}  alt={i18next.t('company_name')} />
                                                                        <p>“{i18next.t('Our_Clients_op_text')}”</p>
                                                                </div>
                                                                <div className="down-content">
                                                                    <img src={client3}  alt={i18next.t('company_name')}/>
                                                                        <div className="right-content">
                                                                            <h4>{i18next.t('Our_Clients_client2')}</h4>
                                                                            <span>{i18next.t('Our_Clients_client2_App_name')}</span>
                                                                        </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div>
                                                    <div className="thumb">
                                                        <div className="row">
                                                            <div className="col-lg-12">
                                                                <div className="client-content">
                                                                    <img src={quote}  alt={i18next.t('company_name')}/>
                                                                        <p>“{i18next.t('Our_Clients_op_text')}”</p>
                                                                </div>
                                                                <div className="down-content">
                                                                    <img src={client1}  alt={i18next.t('company_name')} />
                                                                        <div className="right-content">
                                                                            <h4>{i18next.t('Our_Clients_client1')}</h4>
                                                                            <span>{i18next.t('Our_Clients_client1_App_name')}</span>
                                                                        </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
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

export default Customers;
