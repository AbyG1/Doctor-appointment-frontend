import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

import {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBCardHeader,
    MDBCardFooter,
    MDBBtn
  } from 'mdb-react-ui-kit';







function ViewDoctors() {
  const base_url=`https://doctor-app-backend-tza8.onrender.com/doctors`
  const{id}=useParams()
  const [data,setData]=useState({})
  console.log(id);
  const fetchData=async()=>{
    const result=await axios.get(`${base_url}/${id}`)
    setData(result.data)

  }
  console.log(data.available_days);
  console.log(data);
  useEffect(()=>{fetchData()},[])

  useEffect(()=>{ window.scrollTo(0,0)},[])

  return (
    <>
      <Container>
        
        <Row className=''> 
          
          <Col className='d-flex flex-column justify-content-evenly p-3 px-4 '>
          <h3  className='text-success'>{data.name} <span className='mx-2'>({data.rating}<i class="fa-solid fa-star" style={{color: '#fde90d'}}></i>)</span> </h3>
          <h4  className='text-success'>{data.specialty}</h4><br />
          <h6  className='text-success'><span className='fw-bold'>Hospital :</span> {data.hospital}</h6>
          <h6  className='text-success'><span className='fw-bold'>Address : </span>{data.address}</h6>
         
          <h6  className='text-success'><span className='fw-bold'>Available Days : </span> {data.available_days?.map(i=>(<span>{i} | </span>))}</h6>
          
          
         
          <h6  className='text-success'><span className='fw-bold'>Available Hours :</span>  {data.available_hours}</h6>
          <h6  className='text-success'><span className='me-2'><i class="fa-solid fa-envelope"></i></span>{data.email}</h6>
          <h6  className='text-success'><span className='me-2'><i class="fa-solid fa-phone"></i></span>{data.phone}</h6>
          <div className='text-center text-xl-start  text-lg-tart text-md-center text-sm-center mt-2'>
          <Button className='btn btn-success fw-bold'>Book an appointment</Button>
          </div>
          
          </Col>
        </Row>

          
        
        <Row className='my-3 row-cols-1 row-cols-sm-1 row-cols-md-1 row-cols-lg-2 row-cols-lg-2 row-cols-xl-2 row-cols-xxl-2'>
  {data.reviews &&
    data.reviews.map((i) => (
      <Col className='my-2' key={i.id}>
        <MDBCard alignment='center' className='shadow'>
          <MDBCardHeader className='fs-5'>
          {i.patient_name}
          </MDBCardHeader>
          <MDBCardBody>
         
            <MDBCardTitle className='text-info'>{i.rating} <span className='text-warning '><i className="fa-solid fa-star"></i></span></MDBCardTitle>
            <MDBCardText className='text-dark fw-medium'>"{i.comments}"</MDBCardText>
          </MDBCardBody>
          <MDBCardFooter className='text-muted'>{i.date}</MDBCardFooter>
        </MDBCard>
      </Col>
    ))
  }
</Row>
            
</Container>

</>
 


  )
}

export default ViewDoctors