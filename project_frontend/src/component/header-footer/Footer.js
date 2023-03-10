import React from 'react';
import { MDBFooter } from 'mdb-react-ui-kit';

export default function Footer() {
  return (
    <MDBFooter bgColor='dark' className='text-center text-lg-start text-muted'>
      

     

      <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        © 2022-2023 Copyright:
        <a className='text-reset fw-bold' href='http://localhost:3000/'>
          StudentPortal.com
        </a>
      </div>
    </MDBFooter>
  );
}