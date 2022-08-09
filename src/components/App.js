import React, { Component } from 'react';
//import Web3 from 'web3';
import './App.css';
import Meme from '../abis/Meme.json';
import { binary } from './binary.js';

const ipfsClient = require('ipfs-http-client')
const ipfs = ipfsClient({ host: 'ipfs.infura.io', port: 5001, protocol: 'https' }) // leaving out the arguments will default to these values

const Web3 = require('web3');
const HDWalletProvider = require('@truffle/hdwallet-provider');
const MyContract = require('../abis/Meme.json');

const address = '0xF86933a8CDbEFb3e3298928cE92E5CA42cab822E';
const privateKey = '5211bcbd48b32392848da650d41765f372682f715360566ea816efa6f962caf6';
const infuraUrl = 'https://ropsten.infura.io/v3/4d96bbec49de452a8962728d2ea31aff'; 

class App extends Component {


  async walletIntialize() {

    const description = binary;  // <---------------- Static Value
    console.log(description);   // REMOVE THIS AND CODE WILL WORK
    // base64 to string
    let base64ToString = Buffer.from(description, "base64");
    console.log(base64ToString)
    const data = await ipfs.add(base64ToString);
    const url = await `${data[0].path}`;
    console.log("IPFS hash: ", url)
    this.setState({ url: url })


    // NEW CODE START ------------> DEBUG Version 1.0
    
    const web3 = new Web3(infuraUrl);
    const networkId = await web3.eth.net.getId();
    const myContract = new web3.eth.Contract(
      MyContract.abi,
      MyContract.networks[networkId].address
    );



    const tx = myContract.methods.set(url);
    // console.log(tx)
    const gas = await tx.estimateGas({ from: address });
    const gasPrice = await web3.eth.getGasPrice();
    const dataNew = tx.encodeABI();
    const nonce = await web3.eth.getTransactionCount(address);
    console.log(" MY CUSTIM OUTPUT", myContract.options.address)

    const signedTx = await web3.eth.accounts.signTransaction(
    
      {

        to: myContract.options.address,
        from : address,
        dataNew,
        gas,
        gasPrice,
        nonce,
        chainId: networkId
      },
      
      privateKey
    );
    console.log(signedTx)
   // console.log(`Old data value: ${await myContract.methods.get().call()}`);
    const receipt = await web3.eth.sendSignedTransaction(signedTx.rawTransaction, async (err, data) => {
            if (err) {
              console.error("sendSignedTransaction error", err);
            }
          });
    console.log(`Transaction hash: ${receipt.transactionHash}`);
    console.log(`New data value: ${await myContract.methods.get().call()}`);
  }

    // DEBUG CODE END ------------> DEBUG Version 1.0


  
  constructor(props) {
    super(props)

    this.state = {
      url: '',
      contract: null,
      web3: null,
      buffer: null,
      account: null,
      reponse: '',

    }
  }


  async componentWillMount() {
    await this.walletIntialize()
  }

  render() {
    return (
      <div>
        <div className="container-fluid mt-5">
          <div className="row">
            <main role="main" className="col-lg-12 d-flex text-center">
              <center>
                <h4>Sign a document and upload it to blockchain :   </h4>
                <h4><a href={"https://ipfs.infura.io/ipfs/" + this.state.url}>Click here to view the document</a></h4>
              </center>
              <center>
                <form >
                </form>
              </center>

            </main>

          </div>
        </div>
      </div>
    );
  }
}

export default App;