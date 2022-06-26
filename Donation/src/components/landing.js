import './App.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { useEffect, useState } from 'react';
import {Navbar, Nav, Modal, Button, Carousel} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Link } from 'react-router-dom';


const Land = () => {
  return (
    <div className="App">
      <header>
          <Navbar size=""bg="dark" variant="dark" sticky="top" expand="sm">
            <Navbar.Brand>
              CryptoDonate
              </Navbar.Brand>
              <Navbar.Toggle  aria-controls="basic-navbar-nav"/>
              <Navbar.Collapse className="right_navbar">
                <Nav>
                  <Nav.Link href="#Donate">Donate</Nav.Link>
                  <Nav.Link><Link to="/register">Register</Link></Nav.Link>
                  <Nav.Link href="#aboutus">About US</Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Navbar>
        </header>
      <body>
        {/* <Modal show = {loginPage} onHide={LoginClose}>
        <Modal.Header closeButton>START A FUNDRAISER</Modal.Header>  
          <Modal.Body>
          <form action="/"
              onSubmit={handleEvent}>
              <div className="form-inner">
                <label>Enter the Name of the NGO :</label>
                <input type="text" name="name" step="1" placeholder="Name Of NGO"/>
                <label for="birthday">Goal :</label>
                <input type="number" name="price" step="1" placeholder="In Ruppees"/>
                <label for="birthday">End Date :</label>
                <input type="date" name="Enddate" step="1" placeholder="End Date"/>
                <textarea name="cause" step="1" placeholder="Any Message..." rows="5"></textarea>
                <button type="submit" className="submitBtn" value="Transfer data">Submit</button>
              </div>
            </form>
            </Modal.Body>   
          </Modal>*/}
        <div className="First">  
          <div className = "Intro">
              <h2 className="title">CryptoDonate</h2>
              <p className="para">A Donation Website Powered by BlockChain</p>
            </div>
          <div className = "slideshow">
            <Carousel>
              <Carousel.Item>
                <img
                  className="image_slide"
                  src= "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Y2hhcml0eXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80"
                  alt="Second slide"
                  />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="image_slide"
                  src= "https://www.contactspace.com/wp-content/uploads/person-making-a-donation-min-scaled.jpeg"
                  alt="Second slide"
                  />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="image_slide"
                  src= "https://www.ymca.int/wp/wp-content/uploads/donate-general-donations-600x338.jpg"
                  alt="Second slide"
                  />
              </Carousel.Item>
              </Carousel>
            </div>
          </div>
          <div class="testbox" id="Donate">
            <h3 className='l'> HERE ARE SOME NGOS</h3>
            <div class="co1">
              <div class="banner">
              </div>
              <div className="Cards">
                <h2 className="title2">ABC NGO</h2>
                <p className = "para2"> Total NEED = 123 INR</p>
                <progress value="32" max="100">32%</progress>
              </div>
              <div class="btn-block">
                {/* <button type="submit" href="/">SEND</button> */}
              </div>
            </div>
            <div class="co2">
              <div class="banner"></div>
              <div className="Cards">
                <h2 className="title2">XYZ NGO</h2>
                <p className = "para2"> Total NEED = 456 INR</p>
                <progress value="90" max="100">90%</progress>
              </div>
              <div class="btn-block">
                {/* <button type="submit" href="/">SEND</button> */}
              </div>
            </div>
            <div class="co3">
              <div class="banner">
              </div>
              <div className="Cards">
                <h2 className="title2">PQR NGO</h2>
                <p className = "para2"> Total NEED = 789 INR</p>
                <progress value="62" max="100">62%</progress>
              </div>
              <div class="btn-block">
                {/* <button type="submit" href="/">SEND</button> */}
              </div>
            </div>
          </div>
          <h3 className="l"> Easy to follow Steps</h3>
          <div class="circle-container">
            <div class="outer-circle">
              <div class="inner-circle">
                <div class="inner-circle-content">
                  <span>Step 1</span>
                  <svg width="35" height="35" viewBox="0 0 24 24">
                    <path d="M12,4A4,4 0 0,1 16,8A4,4 0 0,1 12,12A4,4 0 0,1 8,8A4,4 0 0,1 12,4M12,14C16.42,14 20,15.79 20,18V20H4V18C4,15.79 7.58,14 12,14Z"></path>
                </svg>
                </div>
              </div>
            </div>

            <div class="outer-circle">
              <div class="inner-circle">
                <div class="inner-circle-content">
                  <span>Step 2</span>
                  <svg width="35" height="35" viewBox="0 0 24 24">
                    <path d="M17,18C15.89,18 15,18.89 15,20A2,2 0 0,0 17,22A2,2 0 0,0 19,20C19,18.89 18.1,18 17,18M1,2V4H3L6.6,11.59L5.24,14.04C5.09,14.32 5,14.65 5,15A2,2 0 0,0 7,17H19V15H7.42A0.25,0.25 0 0,1 7.17,14.75C7.17,14.7 7.18,14.66 7.2,14.63L8.1,13H15.55C16.3,13 16.96,12.58 17.3,11.97L20.88,5.5C20.95,5.34 21,5.17 21,5A1,1 0 0,0 20,4H5.21L4.27,2M7,18C5.89,18 5,18.89 5,20A2,2 0 0,0 7,22A2,2 0 0,0 9,20C9,18.89 8.1,18 7,18Z"></path>
                  </svg>
                </div>
              </div>
            </div>

            <div class="outer-circle">
              <div class="inner-circle">
                <div class="inner-circle-content">
                  <span>Step 3</span>
                  <svg width="35" height="35" viewBox="0 0 24 24">
                    <path d="M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M11,16.5L18,9.5L16.59,8.09L11,13.67L7.91,10.59L6.5,12L11,16.5Z"></path>
                  </svg>
                </div>
              </div>
            </div>
          </div>
      </body>
      <footer class="site-footer">
      <div class="container" id="aboutus">
        <div class="row">
          <div class="col-sm-12 col-md-6">
            <h6>About US</h6>
            {/* <p class="text-justify">We are team of Programmers from India. We develop Full stack projects with React and Python. Our Aim is to show the world the real Power of Blockchain technology and how it has the potential to change the world</p> */}
          </div>
          <div class="col-xs-6 col-md-3">
            <h6>Name</h6>
            <ul class="footer-links">
              <li>Shaurya Aditya Singh</li>
            </ul>
          </div>

          <div class="col-xs-6 col-md-3">
            <h6>Quick Links</h6>
            <ul class="footer-links">
              <li><a href="https://github.com/shaurya111001">Github</a></li>
            </ul>
          </div>
        </div>
      </div>
</footer>
    </div>
  );
};

//<LoginModal loginPage={loginPage} />
export default Land;