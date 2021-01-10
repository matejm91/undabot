import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './HomePage.css';

class HomePage extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Row className='undabot-homePage__title'>
          <Col>
            <h1>random title</h1>
          </Col>
        </Row>
        <Row>
          <Col>
            <img className='undabot-homePage__img' src='https://media.gettyimages.com/photos/actor-samuel-l-jackson-waves-as-he-arrives-to-maria-cristina-hotel-26-picture-id77037561?s=2048x2048' alt='Hi pic'/> {/* external link */}
          </Col>
        </Row>
        <Row>
          <Col>
            <p>You think water moves fast? You should see ice. It moves like it has a mind. Like it knows it killed the world once and got a taste for murder. After the avalanche, it took us a week to climb out. Now, I don't know exactly when we turned on each other, but I know that seven of us survived the slide... and only five made it out. Now we took an oath, that I'm breaking now. We said we'd say it was the snow that killed the other two, but it wasn't. Nature is lethal but it doesn't hold a candle to man. - lorem ipsum by <a href='https://slipsum.com/' target='blank'>S.L. ipsum</a></p>
          </Col>
          
        </Row>
      </React.Fragment>   
    );
  }
}

export default HomePage;