import React from 'react'
import styles from "./Landing.module.css"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import doctorL from '../assets/doctor-landingpage.png'
function Landing() {
  return (
        <>

        
      <Container fluid >
         
          <Row className='justify-content-center'>
             <Col className='pt-5  d-flex align-items-center'  md={5}>
                <h1 className='d-1 text-center fw-bolder'>Book your next healthcare appointment</h1>
             </Col>
             <Col className='pt-3  ' md={5}>
                <img src={doctorL} className='img-fluid' alt="" />
             </Col>
           </Row>
         
           <Row>
           <Col className={`${styles.background} p-3 `}></Col>
          </Row>
           
      </Container>
            
         
        
        </>

  )
}

export default Landing