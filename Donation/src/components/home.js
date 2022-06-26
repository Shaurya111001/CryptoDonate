import React from "react"
import "./index.css"
import { useState } from "react"
import axios from "axios"
import { Link, useNavigate } from "react-router-dom"


const Login=()=> {
    const navigate = useNavigate();
    const [Email, setEmail] = useState("")
    const [Pass, setPass] = useState("")
    const [check, setCheck] = useState(false)
  
    function insertArticle(){
      var myParams = {
        Email:Email,
        Pass:Pass
      }
      if (myParams != "") {
        axios.post('http://localhost:5000/login', myParams)
            .then(function(response){
                console.log(response.data);
        if(response.data == true){
            setCheck(true);
            navigate('/app');
        }
        else{
            alert("USER NOT REGISTERED")
        }
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
      setEmail('')
      setPass('')
    //   console.log(check)
      if(check == true){
        navigate('/app');
      }
    }
    return (
    <div className="login"> 
    <div className="container">
        <div className="row">
            <div className="col-2">
                <img src="/blue1.png" />
                        <img src="/blue2.png" className="blue_bubble_with_dots_tail"  />
            </div>
            <div className="col-8">
                <div className="container-1">
                    {/* <img src="/ShowCase logo (1).png" className="showcase_logo1" width="125px" height="125px" /> */}
                    <form onSubmit={handleSubmit}  className="container form1">
                        <h6>Login</h6><br />
                        <p className="plogin">Please login using account detail bellow</p>
                        <div className="form-group">
                            <input type="text" placeholder="Enter email address" name="email" value = {Email}  onChange={(e)=>setEmail(e.target.value)} id="email" required />
                        </div>
                        <div className="form-group">
                            <input type="password" placeholder="Enter password" name=" email-password" value={Pass}  onChange={(e)=>setPass(e.target.value)} id="email-password" required />
                        </div>
                        <p className="ppassword">Forget your password?</p>
                        <div className="form-group">
                            <button type="submit" className="signbtn">Sign In</button>
                        </div>
                        <br />
                         <p className="paccount">Don't have an Account?<Link to="/register">Create An Account</Link></p>
                    </form>    
                        
                </div>
            </div>
            <div className="col-2">
                <img src="/man1.png" className="image1178" style={{marginTop: "80px", marginLeft: "-140px"}} />
                        <img src="/blue round speech bubble.png" className="blue_round_speech_bubble" />
            </div>
        </div>
    </div>
        </div>
    )
}

export default Login