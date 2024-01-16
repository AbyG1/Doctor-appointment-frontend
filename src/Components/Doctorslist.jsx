import React from 'react'
import Landing from './Landing'
import axios from 'axios'
import { useEffect } from 'react'
import { useState } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import DocCard from './DocCard'


function Doctorslist() {
  
    const base_url = 'https://doctor-app-backend-tza8.onrender.com/doctors'
  
    const [doctorsdata, setdoctorsData] = useState([])
  
  
    //Api fetch
    const fetchData = async() => {
        const result = await axios.get(base_url)
        setdoctorsData(result.data)
    }
  
    console.log(doctorsdata)

  useEffect(() => {
      fetchData()
  },[])



  return (
    <>
        <Landing></Landing>
        
        <Container className='p-5'>
          
          <Row className='my-5'>

            <Col>
              <h2 className='text-center'>Find Your Doctor</h2>
            </Col>
          </Row>
          <Row className='p-2 g-5'>

          {
            doctorsdata.map(item => (
              
            <Col sm={12} md={6} lg={4} xl={4}>
              <DocCard doctor={item}></DocCard>
            </Col>
   
            ))
          }
          </Row>
          </Container>
    
    
    </>
  )
}

export default Doctorslist