import React from 'react'
import {Container,Row,Col} from 'reactstrap'
const Pipeline = () => (

    <Container>
                <Row>
                    <Col lg="12" md="12" sm="12">
                    <br/>
  <h2 class="pipeline-header" id="pipeline">Drug Discovery Pipeline</h2>
  
      <h3>CY-101 (Preclinical)</h3>
      <br/>
      <p>
        CY-101 is currently in the preclinical stage of the drug discovery pipeline. 
        It's aimed to lower negative effect or R87C point mutation in CYFIP2 gene. Such a mutation leads
        EPILEPTIC ENCEPHALOPATHY, EARLY INFANTILE, 65.
        </p>
        <br/>
        <p>
        CY-101 is undergoing extensive laboratory testing and evaluation to assess its safety, efficacy, and potential side effects. Preclinical studies are conducted using cell cultures and animal models to gather data before advancing to clinical trials.
      </p>
        <br/>
      <h3>WA-203 (Discovery)</h3>
      <br/>
      <p>
        WA-203 is in the discovery phase of the drug discovery pipeline. 
        We try to normalize neurite outgrowth to make better dendrites and axons.
      </p>
      </Col>
    </Row>
     </Container>

)


export default Pipeline;