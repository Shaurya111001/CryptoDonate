import React, { useEffect, useState } from 'react'
import Web3 from "web3";
import { loadContract } from '../../utils/load_contract';
import detectEthereumProvider from '@metamask/detect-provider';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, CardGroup, Container, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
function App() {
  const [web3Api, setweb3Api] = useState({provider:null, web3:null, contract:null });
  const [account, setAccount] = useState(null);
  const [balance, setBalance] = useState(null);
  const [reload, setReload] = useState(false);
  const [price, setPrice] = useState(0);

  const reloadEffect = () => setReload(!reload);
  useEffect(()=>{
    const loadProvider = async()=>{
      const provider = await detectEthereumProvider();
      const contract = await loadContract("Mycontract",provider);
      if(provider){
        provider.request({method:'eth_requestAccounts'});
        setweb3Api({web3: new Web3(provider),provider,contract,})
      }
      else{
        console.error('Please install');
      }
 
    

  
  };
    loadProvider();
  },[]);

  useEffect(()=>{
    const loadBalance = async()=>{
      const {contract, web3} = web3Api;
      const balance = await web3.eth.getBalance(contract.address);
      setBalance(web3.utils.fromWei(balance,"ether"));
    };
    web3Api.contract && loadBalance();
  },[web3Api,reload]);

  useEffect(()=>{
    const getAccount = async()=>{
      const accounts = await web3Api.web3.eth.getAccounts();
      setAccount(accounts[0])
    }
    web3Api.web3 && getAccount()
  },[web3Api.web3])

  const transferFunds = async()=>{
    const {web3,contract}=web3Api;
    // let text = price.toString();
    await contract.transfer({
      from:account,
      value: web3.utils.toWei("2","ether"),
    });
    reloadEffect();
  }
  const withdrawFunds = async()=>{
    const {web3,contract}=web3Api;
    const withdrawAmounts = web3.utils.toWei("2","ether");
    await contract.withdraw(withdrawAmounts,{from:account})
    reloadEffect();
  }
  console.log(web3Api.web3);
  return (
    <div className="App">
  <Navbar>
  <Container>
    <Navbar.Brand href="#home">CRYPTODONATE</Navbar.Brand>
    <Navbar.Toggle />
    <Navbar.Collapse className="justify-content-end">
      <Navbar.Text>
        WELCOME TO DASHBOARD <Link to="/">SIGN OUT</Link>
      </Navbar.Text>
    </Navbar.Collapse>
  </Container>
</Navbar>
<br/>
<br/>
  <CardGroup style={{"width":"50%","margin-left":"25%"}}>
  <Card>
    <Card.Img variant="top" src="/NGO1.jpg" />
    <Card.Body>
      <Card.Title>NGO 1</Card.Title>
      <Card.Text>
        Fundraiser for hunger
      </Card.Text>
      <h5>BALANCE: {balance} ETH </h5>
      {/* <p>Enter Amount : </p><input type="number" value={price} onChange={(e)=>setPrice(e.target.price)}/> */}
      <button onClick={transferFunds}>
        TRANSFER COINS
      </button>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top" src="/NGO2.png" />
    <Card.Body>
      <Card.Title>NGO 2</Card.Title>
      <Card.Text>
        Fundraiser for flood{' '}
      </Card.Text>
      <h5>BALANCE: {balance} ETH </h5>
      <p>Enter Amount : </p><input type="number" value={price} onChange={(e)=>setPrice(e.target.price)}/>
      <button onClick={transferFunds}>
        TRANSFER TO COINS
      </button>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top" src="/NGO3.jpg" />
    <Card.Body>
      <Card.Title>NGO 3</Card.Title>
      <Card.Text>
        Fundraiser for Orphans
      </Card.Text>
      <h5>BALANCE: {balance} ETH </h5>
      <p>Enter Amount : </p><input type="number" value={price} onChange={(e)=>setPrice(e.target.price)}/>
      <button onClick={transferFunds}>
        TRANSFER COINS
      </button>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
</CardGroup>



      <p>Your Wallet Account: {account ? account: "Not Connected"}</p>

      {/* <button onClick={transferFunds}>
        TRANSFER TO CONTRACT FROM WALLET
      </button> */}
      {/* <button onClick={withdrawFunds}>
        WITHDRAW COINS FROM CONTRACT TO WALLET
      </button> */}
       {/* <button onClick={async () => {
         const accounts = await window.ethereum.request({method:"eth_requestAccounts",});
        console.log(accounts) 
       }}>
        CLICK ME
        </button> */}
    </div>
  );
}

export default App;
