import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import './registerpersonal.css' 
import { useNavigate } from 'react-router-dom';


const RegisterPersonal = () =>{
  const navigate = useNavigate();
  const [Name, setName] = useState("")
  const [Email, setEmail] = useState("")
  const [Pass, setPass] = useState("")

  function insertArticle(){
    var myParams = {
      Name: Name,
      Email:Email,
      Pass:Pass
    }
    if (myParams != "") {
      axios.post('http://localhost:5000/register', myParams)
          .then(function(response){
            console.log(response);
     //Perform action based on response
      })
      .catch(function(error){
          console.log(error);
     //Perform action based on error
      });
  } else {
      alert("The search query cannot be empty")
  }
  }

  const handleSubmit=(event)=>{ 
    event.preventDefault()
    insertArticle()
    setName('')
    setEmail('')
    setPass('')
    navigate('/login');
  }

    return (
      <div className='RP'> 
        <br />
        <br />
        <br />
        <form onSubmit={handleSubmit} className="container">
          <br />
          <br />
          <br />        
          <div className="form-group" style={{paddingLeft: '30%'}}>
            <h3><b>Register Account!</b><br /></h3>
          </div>
          <hr />
          <div className="form-group"  style={{textAlign: 'center'}}>
            <label htmlFor="name" style={{paddingRight: '28%'}}><b>Your fullname*</b></label><br />
            <input type="text" placeholder="Enter title" value={Name} name="name" onChange={(e)=>setName(e.target.value)} id="name" required /><br />
          </div>
          <div className="form-group"  style={{textAlign: 'center'}}>
            <label htmlFor="email" style={{paddingRight: '28%'}}><b>Email address*</b></label><br />
            <input type="text" placeholder="Enter email address" name="email" value={Email} onChange={(e)=>setEmail(e.target.value)} id="email" required /><br />
          </div>
          <div className="form-group" style={{textAlign: 'center', paddingRight: '19%'}}>
            <input type="checkbox" defaultChecked="checked" name="terms & conditions" /> 
            <label htmlFor="terms and conditions">I agree to terms &amp; conditions</label>
          </div>  
          <div className="form-group"  style={{textAlign: 'center'}}>
            <label htmlFor="create" style={{paddingRight: '28%'}}><b>Create password*</b></label><br />
            <input type="password" placeholder="Enter password" name="create" value={Pass} onChange={(e)=>setPass(e.target.value)} id="create" required /><br />
          </div>
          <div className="form-group"  style={{textAlign: 'center'}}>
            <button type="submit" className="registerbtn">Register Account</button>
          </div>
        </form>
        <br />
        <br />
        <br />
        <br />
        <br />
        <footer className="footer-area" style={{backgroundColor: '#f4f4f2'}}>
          <div className="footer-big">
            {/* start .container */}
            <div className="container">
              <div className="row">
                <div className="col-md-3 col-sm-12">
                  <div className="footer-widget">
                  </div>
                  {/* Ends: .footer-widget */}
                </div>
                {/* end /.col-md-4 */}
                <div className="col-md-3 col-sm-4">
                  <div className="footer-widget">
                    <div className="footer-menu footer-menu--1">
                      <h4 className="footer-widget-title">Contact</h4>
                      <p>mails@crat.in</p>
                      <p>Callus:+90023445788</p>
                    </div>
                    {/* end /.footer-menu */}
                  </div>
                  {/* Ends: .footer-widget */}
                </div>
                {/* end /.col-md-3 */}
                <div className="col-md-3 col-sm-4">
                  <div className="footer-widget">
                    <div className="footer-menu">
                      <h4 className="footer-widget-title">Visit us</h4>
                      <p>123 st.sanFranscioo</p>
                      <p>Calfornia 966773</p>
                    </div>
                    {/* end /.footer-menu */}
                  </div>
                  {/* Ends: .footer-widget */}
                </div>
                {/* end /.col-lg-3 */}
                <div className="col-md-3 col-sm-4">
                  <div className="footer-widget">
                    <div className="footer-menu no-padding">
                      <h4 className="footer-widget-title">Legal</h4>
                      <p>Copyright@2022we are Ui kit All right reserved</p>
                    </div>
                    {/* end /.footer-menu */}
                  </div>
                  {/* Ends: .footer-widget */}
                </div>
                {/* Ends: .col-lg-3 */}
              </div>
              {/* end /.row */}
            </div>
            {/* end /.container */}
          </div>
          {/* end /.footer-big */}
          {/* Footer */}
          <footer className="page-footer font-small special-color-dark pt-4">
            {/* Footer Elements */}
            <div className="container">
              {/* Social buttons */}
              <ul className="list-unstyled list-inline text-center">
                <li className="list-inline-item">
                  <a className="btn-floating btn-fb mx-1">
                  </a><a href="http://www.facebook.com"><i className="fa fa-3x fa-facebook-square" /></a>
                </li>
                <li className="list-inline-item">
                  <a href="http://www.twitter.com"><i className="fa fa-3x fa-twitter-square" /></a>
                </li>
                <li className="list-inline-item">
                  <a className="btn-floating btn-li mx-1">
                  </a><a href="http://www.fa-linkedin.com"><i className="fa fa-3x fa-linkedin-square" /></a>
                </li>
                <li className="list-inline-item">
                </li>
              </ul>
              {/* Social buttons */}
            </div>
            {/* Footer Elements */}
          </footer>
          {/* Footer */}
        </footer>
        {/* <Footer/> */}
      </div>

    );
  }


export default RegisterPersonal;