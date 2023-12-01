import team1 from '../assets/images/team-1.jpg';
import team2 from '../assets/images/team-2.jpg';
import team3 from '../assets/images/team-3.jpg';
import i18next from "i18next";

function Team() {

  return (
    <>
        <div className="bg-white py-5">
            <div className="container px-lg-5">
                <div className="section-title sc-title position-relative text-center mb-5 pb-2 wow fadeInUp"
                     data-wow-delay="0.1s">
                    <h6 className="position-relative d-inline text-primary ps-4">{i18next.t('our_team')}</h6>
                    <h2 className="mt-2">{i18next.t('our_team_meet')}</h2>
                </div>
                <div className="row g-4">
                    <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                        <div className="team-item">
                            <div className="d-flex">
                                <div className="flex-shrink-0 d-flex flex-column align-items-center mt-4 pt-5"
                                     style={{width:'75px'}}>
                                    <a className="btn btn-square text-primary bg-white my-1" href=""><i
                                        className="fab fa-facebook-f"></i></a>
                                    <a className="btn btn-square text-primary bg-white my-1" href=""><i
                                        className="fab fa-twitter"></i></a>
                                    <a className="btn btn-square text-primary bg-white my-1" href=""><i
                                        className="fab fa-instagram"></i></a>
                                    <a className="btn btn-square text-primary bg-white my-1" href=""><i
                                        className="fab fa-linkedin-in"></i></a>
                                </div>
                                <img className="img-fluid rounded w-100" src={team1} alt="" />
                            </div>
                            <div className="px-4 py-3">
                                <h5 className="fw-bold m-0">{i18next.t('programmer1')}</h5>
                                <small>{i18next.t('programmer1_job')}</small>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                        <div className="team-item">
                            <div className="d-flex">
                                <div className="flex-shrink-0 d-flex flex-column align-items-center mt-4 pt-5"
                                     style={{width:'75px'}}>
                                    <a className="btn btn-square text-primary bg-white my-1" href=""><i
                                        className="fab fa-facebook-f"></i></a>
                                    <a className="btn btn-square text-primary bg-white my-1" href=""><i
                                        className="fab fa-twitter"></i></a>
                                    <a className="btn btn-square text-primary bg-white my-1" href=""><i
                                        className="fab fa-instagram"></i></a>
                                    <a className="btn btn-square text-primary bg-white my-1" href=""><i
                                        className="fab fa-linkedin-in"></i></a>
                                </div>
                                <img className="img-fluid rounded w-100" src={team2} alt="" />
                            </div>
                            <div className="px-4 py-3">
                                <h5 className="fw-bold m-0">{i18next.t('programmer2')}</h5>
                                <small>{i18next.t('programmer2_job')}</small>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.6s">
                        <div className="team-item">
                            <div className="d-flex">
                                <div className="flex-shrink-0 d-flex flex-column align-items-center mt-4 pt-5"
                                     style={{width:'75px'}}>
                                    <a className="btn btn-square text-primary bg-white my-1" href=""><i
                                        className="fab fa-facebook-f"></i></a>
                                    <a className="btn btn-square text-primary bg-white my-1" href=""><i
                                        className="fab fa-twitter"></i></a>
                                    <a className="btn btn-square text-primary bg-white my-1" href=""><i
                                        className="fab fa-instagram"></i></a>
                                    <a className="btn btn-square text-primary bg-white my-1" href=""><i
                                        className="fab fa-linkedin-in"></i></a>
                                </div>
                                <img className="img-fluid rounded w-100" src={team3} alt="" />
                            </div>
                            <div className="px-4 py-3">
                                <h5 className="fw-bold m-0">{i18next.t('programmer3')}</h5>
                                <small>{i18next.t('programmer3_job')}</small>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Team;
