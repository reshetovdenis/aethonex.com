import React from 'react'
import {Container,Row,Col} from 'reactstrap'
const Service = () => (
    <section className="agency format service-bg" id="features">
        <Container>
            <Row>
                <Col md="4"  className="offset-lg-1">
                    <div className="center-text">
                        <div className="format-container">
                            <h6 className="borders-before text-uppercase">
                                <span>Our services</span>
                            </h6>
                            <div className="format-head-text">
                                <h2 className="about-font-header">We’re focused <span className="block-span">
                                                on education</span></h2>
                            </div>
                            <div className="format-sub-text">
                                <p className="about-para">We integrate our vision of education and methods of monitoring results in all possible target areas.</p>
                            </div>
                            <a className=" btn btn-default btn-gradient" href="https://github.com/slonigiraf/whitepaper/blob/main/slonigiraf/ENG.md">view more</a>
                        </div>
                    </div>
                </Col>
                <Col lg="7" md="8">
                    <Row>
                        <Col sm="4"  className="center-content unset-height">
                            <ul className="icon-collection" data-aos="fade-left" data-aos-duration="500">
                                <li className="about-icon">
                                    <a className="center-content" href="#">
                                        <img alt="" src="/assets/images/agency/service/6.png" />
                                        <h5>"Pay for peace" program</h5>
                                    </a>
                                </li>
                            </ul>
                        </Col>
                        <Col sm="4"  className="center-content unset-height">
                            <ul className="icon-collection" data-aos="fade-left" data-aos-duration="2000">
                                <li className="about-icon">
                                    <a className="center-content" href="#">
                                        <img alt="" src="/assets/images/agency/service/1.png" />
                                        <h5>Skill certificates</h5>
                                    </a>
                                </li>
                                <li className="about-icon">
                                    <a className="center-content" href="#">
                                        <img alt="" src="/assets/images/agency/service/3.png" />
                                        <h5>Education Finance Planning</h5>
                                    </a>
                                </li>
                            </ul>
                        </Col>
                        <Col sm="4"  className="center-content unset-height">
                            <ul className="icon-collection" data-aos="fade-left" data-aos-duration="3000">
                                <li className="about-icon">
                                    <a className="center-content" href="#">
                                        <img alt="" src="/assets/images/agency/service/4.png" />
                                        <h5>School education</h5>
                                    </a>
                                </li>
                                <li className="about-icon">
                                    <a className="center-content" href="#">
                                        <img alt="" src="/assets/images/agency/service/2.png" />
                                        <h5>Higher education</h5>
                                    </a>
                                </li>
                                <li className="about-icon">
                                    <a className="center-content" href="#">
                                        <img alt="" src="/assets/images/agency/service/5.png" />
                                        <h5>Corporate education</h5>
                                    </a>
                                </li>
                            </ul>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    </section>
)

export default Service;