import React from 'react'
import {Container,Row,Col,FormGroup,Input} from 'reactstrap'
const Footer = () => (

    <footer className="app2 bg footer2 p-0">
        
        <section>
            <Container>
                <Row>
                    <Col lg="12" md="12" sm="12">
                        <div className="logo-sec">
                            
                            <div className="footer-content">
                                <img alt="" className="img-fluid footer-logo" src="/assets/images/logo/aethonex_logo.svg" />
                            </div>
                        </div>
                        <div className="footer-content">
                            <div>
                                <ul className="footer-lists contacts">
                                    <li>
                                        <i aria-hidden="true" className="fa fa-map-marker"></i>
                                        19904, 310 ALDER RD PO BOX 841, DOVER, DE
                                    </li>
                                    <li>
                                        <i aria-hidden="true" className="fa fa-phone m-r-15"></i>(+382) 67 887600
                                    </li>
                                    <li><i aria-hidden="true" className="fa fa-envelope m-r-15"></i>info@aethonex.com</li>

                                </ul>
                            </div>
                        </div>
                    </Col>
                
                </Row>
            </Container>
        </section>
    </footer>

)


export default Footer;