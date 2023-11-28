import client1 from '../../assets/images/team-1.jpg';
import client2 from '../../assets/images/team-2.jpg';
import client3 from '../../assets/images/team-3.jpg';
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import './customers.scss';
function Customers() {
    const options = {
        loop: true,
        margin: 20,
        dots: false,
        nav: true,
        autoplay: true,
        autoplayHoverPause: true,
        navText: [
            '<i class="fa fa-angle-left" aria-hidden="true"></i>',
            '<i class="fa fa-angle-right" aria-hidden="true"></i>'
        ],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 2
            }
        }
    };
    return (
    <>
        <section className="client_section layout_padding">
            <div className="container">
                <div className="section-title position-relative text-center mb-5 pb-2 wow fadeInUp"
                     data-wow-delay="0.1s">
                    <h6 className="position-relative d-inline text-primary ps-4">Our Customers</h6>
                    <h2 className="mt-2"> What says </h2>
                </div>
                <OwlCarousel className="owl-theme owl-carousel" loop margin={15} nav {...options}>
                    <div className="item">
                        <div className="box">
                            <div className="img-box">
                                <img src={client1} alt="" className="box-img" />
                            </div>
                            <div className="detail-box">
                                <div className="client_id">
                                    <div className="client_info">
                                        <h6>
                                            LusDen
                                        </h6>
                                        <p>
                                            magna aliqua. Ut
                                        </p>
                                    </div>
                                    <i className="fa fa-quote-left" aria-hidden="true"></i>
                                </div>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis </p>
                            </div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="box">
                            <div className="img-box">
                                <img src={client2} alt="" className="box-img" />
                            </div>
                            <div className="detail-box">
                                <div className="client_id">
                                    <div className="client_info">
                                        <h6>
                                            Zen Court
                                        </h6>
                                        <p>
                                            magna aliqua. Ut
                                        </p>
                                    </div>
                                    <i className="fa fa-quote-left" aria-hidden="true"></i>
                                </div>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis </p>
                            </div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="box">
                            <div className="img-box">
                                <img src={client3} alt="" className="box-img" />
                            </div>
                            <div className="detail-box">
                                <div className="client_id">
                                    <div className="client_info">
                                        <h6>
                                            LusDen
                                        </h6>
                                        <p>
                                            magna aliqua. Ut
                                        </p>
                                    </div>
                                    <i className="fa fa-quote-left" aria-hidden="true"></i>
                                </div>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis </p>
                            </div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="box">
                            <div className="img-box">
                                <img src={client2} alt="" className="box-img" />
                            </div>
                            <div className="detail-box">
                                <div className="client_id">
                                    <div className="client_info">
                                        <h6>
                                            Zen Court
                                        </h6>
                                        <p>
                                            magna aliqua. Ut
                                        </p>
                                    </div>
                                    <i className="fa fa-quote-left" aria-hidden="true"></i>
                                </div>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis </p>
                            </div>
                        </div>
                    </div>
                </OwlCarousel>
            </div>
        </section>
    </>
  )
}

export default Customers;
