import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import { Container,Row, Col,Image } from 'react-bootstrap'
import {Navbar,HeroBanner, Feed,Login} from './components/index'
import { useState } from 'react';
import './components/styles/Login.css'
import {motion} from 'framer-motion'
import {ImCross} from 'react-icons/im'
import {RiLoginCircleLine} from 'react-icons/ri'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function App() {
  const [isJoin, setIsJoin] = useState(true)
  const [modalShow, setModalShow] = useState(false);
  const [join, setJoin] = useState(false);


  return (
        <>
        <Navbar join={join} setJoin={setJoin}/>
        <div className="cross_me" onClick={() => setModalShow(true)}></div>

        <HeroBanner />
        
          <motion.div
         whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 2, type: 'tween' }}
        >
          <Container className="container__login">
              <Row>
                <Col>
                <div className="cross" onClick={() => setModalShow(true)}></div>
                  <Login 
                  show={modalShow}
                  onHide={() => setModalShow(false)}
                  />
                </Col>
              </Row>
          </Container>
        </motion.div>

        {/* feed   */}
        <Feed isJoin={isJoin} setIsJoin={setIsJoin}/>

        
        </>
  );
}

export default App;
