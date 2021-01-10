import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Header.css';

function Header() {
  return (
    <Row className='undabot-Header__headerRow'>
      <Col>
        <a href='/'>Home</a>
      </Col>
      <Col>
        <a href='/contact'>Contact</a>
      </Col>
    </Row>
  );
}

export default Header;