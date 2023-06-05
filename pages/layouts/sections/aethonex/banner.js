import React from 'react'
import {Container,Row,Col} from 'reactstrap'
const Banner = () => (
    <section className="app2 header overflow-unset app2-animation" id="home">
        <div className="animated-bg"><i></i><i></i><i></i></div>
        <div className="app2-header bg">
            <Container>
                <Row>
                    <Col xl="12" lg="8" md="12">
                        <div className="center-text">
                            <div>
                                <div className="header-text">
                                    <h1>Developing <span className="bold-text">therapies</span> for brain</h1>
                                </div>
                                <div className="header-sub-text">
                                    <p className="text-white">Harnessing Innovative Genetic Technologies for Learning Deficit Disorders</p>
                                </div>
                                <div className="link-horizontal">
                                    <ul>
                                        <li>
                                            <a className="btn btn-default btn-white" href="mailto:info@aethonex.com">Contact us</a>
                                        </li>
                                        <li>
                                            <a className="btn btn-default primary-btn transparent" href="#pipeline">discover
                                                more</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <img alt="" className="header-image" src="/assets/images/inside_brain.png" />
                    </Col>
                    
                    <Col xl="12" lg="6" md="4">
                        
                    </Col>
                </Row>
            </Container>
            <div className="wave"></div>
        </div>
    </section>
)


export default Banner;