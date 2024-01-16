import React from 'react';
import styles from './Footer.module.css'

import {
  MDBFooter,
  MDBContainer,
  MDBCol,
  MDBRow,
} from 'mdb-react-ui-kit';

function Footer() {
  return (
     <>

         <MDBFooter   className='bg-success text-white text-center text-lg-left'>
      <MDBContainer className='p-4 '>
        <MDBRow>
          <MDBCol lg='6' md='12' className='mb-4 mb-md-0'>
            <h5 className='text-uppercase'>
                Doctris
            </h5>

            <p className={styles.texts}> 
            Doctris streamlines the entire process, allowing you to schedule and manage your medical appointments with just a few taps. Say goodbye to long waiting times and hello to a personalized health experience. Create your profile, browse qualified healthcare professionals, and book appointments at your convenience. Receive timely reminders, explore telemedicine options, and manage prescriptions securely. Doctris puts your well-being in your hands, offering a secure, convenient, and efficient healthcare solution.
            </p>
          </MDBCol>

          <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
            <h5 className='text-uppercase mb-4'>Company</h5>

            <ul className='list-unstyled mb-0'>
              <li className='mb-2 '>
                <a href='#!' className='text-white'>
                  Home
                </a>
              </li>
              <li className='mb-2'>
                <a href='#!' className='text-white'>
                  About Us
                </a>
              </li>
              <li className='mb-2'>
                <a href='#!' className='text-white'>
                 Our Service
                </a>
              </li>
              <li className='mb-2'>
                <a href='#!' className='text-white'>
                  Our Team
                </a>
              </li>
            </ul>
          </MDBCol>

          <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
            <h5 className='text-uppercase mb-4'>Department</h5>

            <ul className='list-unstyled'>
              <li className='mb-2'>
                <a href='#!' className='text-white'>
                 Eye Care 
                </a>
              </li>
              <li className='mb-2'>
                <a href='#!' className='text-white'>
                  Dental Care 
                </a>
              </li>
              <li className='mb-2'>
                <a href='#!' className='text-white'>
                  Cardiology
                </a>
              </li>
              <li className='mb-2'>
                <a href='#!' className='text-white'>
                 Orthopedic
                </a>
              </li>
            </ul>
          </MDBCol>
        </MDBRow>
      </MDBContainer>

      <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        &copy; {new Date().getFullYear()} Copyright:{' '}
        <a className='text-white' href='#'>
         Doctris.com
        </a>
      </div>
    </MDBFooter>

     </>
  )
}

export default Footer