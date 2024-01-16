import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import {
  MDBCard,
  MDBCardHeader,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBBtn
} from 'mdb-react-ui-kit';

import { Link } from 'react-router-dom';



function DocCard({doctor}) {
  console.log(doctor);
  return (
    <div className=''>
 

    <MDBCard className='bgcolor'>
      <MDBCardHeader>{doctor.specialty}</MDBCardHeader>
      <MDBCardBody>
        <MDBCardTitle>{doctor.name}</MDBCardTitle>
        <MDBCardText></MDBCardText>
        <Link to={`/doctors/view/${doctor.id}`}><MDBBtn className='btn-success'>View Details</MDBBtn></Link>
      </MDBCardBody>
    </MDBCard>
      

    </div>
  )
}

export default DocCard