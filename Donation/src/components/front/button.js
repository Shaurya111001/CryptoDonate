import React from 'react'
import styled from 'styled-components'
import {useState} from "react";
function Button() {
    const [isOpen, setIsOpen] = useState(false);
    const togglePopup = () => {
    setIsOpen(!isOpen);
    }
    return (
        <div>
        <Div>
            {/* <img src={logo} /> */}
            <button className="N" >OVERVIEW</button>
            <button className="N" >ABOUT</button>
            <button className="N" >GITHUB</button>
            <button id="R" onClick ={togglePopup}>REGISTER</button>
        </Div>
        <div>
        {isOpen && <Popup
        content={<>
            {/* <Newform/> */}
        </>}
        handleClose={togglePopup}
        />}
        </div>
    </div>
    )
}

export default Button

const Div = styled.div`

margin:0;
padding:0;
background-color:#fff;
padding-top:1em;
padding-bottom:1em;
display: block;
overflow: auto;






img {
    width: 200px;
    height: 110px;
    float: left;
}

.N {
    position: relative;
    color: #ffffff;
    white-space: nowrap;
    text-align: center;
    float: left;
    background-color: #ffffff;
    width:100px;
    padding:10px;
    margin-top: 35px;
    margin-right: 20px;
    font-size:15px;
    color:#000000;
    font-family: poppins;
    font-weight: 400;
    border: 0;
    text-transform:uppercase;
    Letter-spacing:3px;
    cursor:pointer;
    border-radius: 100px;
    transition:1.5s;
    &:hover {
        box-shadow: 0 5px 50px 0 #15f4ee inset, 0 5px 50px 0 #15f4ee,
        0 5px 50px 0 #15f4ee inset, 0 5px 50px 0 #15f4ee;
        text-shadow: 0 0 5px #15f4ee,0 0 5px #15f4ee;
    }
}


#R {
    text-align: center;
    float: right;
    background-color:#1a73e8;
    width:200px;
    padding:15px;
    margin-right: 20px;
    font-size:20px;
    color:rgb(21, 244, 238);
    font-family: poppins;
    font-weight: 400;
    border: 5px solid;
    text-transform:uppercase;
    Letter-spacing:5px;
    cursor:pointer;
    border-radius: 100px;
    transition:1.5s;
    &:hover {
        box-shadow: 0 5px 50px 0 #15f4ee inset, 0 5px 50px 0 #15f4ee,
        0 5px 50px 0 #15f4ee inset, 0 5px 50px 0 #15f4ee;
        text-shadow: 0 0 5px #15f4ee,0 0 5px #15f4ee;
    }
}`
