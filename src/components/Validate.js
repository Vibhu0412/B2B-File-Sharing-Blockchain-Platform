import { Link } from 'react-router-dom';
import React, { Component } from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';
import axios from 'axios';
import react, { useState, useEffect } from 'react';


function Validate(){

    

    const [fname, setFname] = useState('')
    const [lname, setLname] = useState('')

    const submitHandler = (e) => {
        e.preventDefault()
        
    }

    return (
        <h4>
            <h3 style={{ textAlign: 'center' }}>User Validation</h3>

            <Form action="" onSubmit={submitHandler}>

                <Form.Group controlId='fname'>
                    <Form.Label>First Name:</Form.Label>
                    <Form.Control
                        type='text'
                        placeholder='Enter First Name'
                        value={fname}
                        onChange={(e) => setFname(e.target.value)}
                    >
                    </Form.Control>
                </Form.Group>
                <br></br>
                <Form.Group controlId='lname'>
                    <Form.Label>last name</Form.Label>
                    <Form.Control
                        type='text'
                        placeholder='Enter Last Name'
                        value={lname}
                        onChange={(e) => setLname(e.target.value)}
                    >
                    </Form.Control>
                </Form.Group>
                <br></br>
                <div className='text-center'><Button type='submit' variant='primary' >Validate</Button></div>

            </Form>

           
        </h4>
    );
}
// class Validate extends Component{

//     getData = async () => {
//         const response = axios.get('');
//         console.log("Fetching Data.....", response.data);
//     }
    

//     constructor(){
//         super();
//         this.state = {
//             fname:'',
//             lname:''
//         }
//     }
//     onSubmit=(e)=>{
//         e.preventDefault();
//         console.log(this.state)
//     }


//     render(){
//         const { fname, lname } = this.state;
//         return(

//             <center>
//             <Form action="" onSubmit={this.onSubmit}>
//                     <h1>Validate Form</h1>
//                 <Form.Group controlId='fname'>
//                     <Form.Label>First Name</Form.Label>
//                     <Form.Control
//                         type='text'
//                         placeholder='Enter First Name'
//                         value={fname}
//                         onChange={(e) => this.setState( {fname:e.target.value})}
//                     >
//                     </Form.Control>
//                 </Form.Group>
//                 <br></br>
//                 <Form.Group controlId='lname'>
//                     <Form.Label>Last Name</Form.Label>
//                     <Form.Control
//                         type='text'
//                         placeholder='Enter Last Name'
//                         value={lname}
//                         onChange={(e) => this.setState({lname:e.target.value})}
//                     >
//                     </Form.Control>
//                 </Form.Group>
//                 <br></br>
//                 <div className='text-center'><Button type='submit' variant='primary' >User Validate</Button></div>

//             </Form>
//             </center>
//         );
//     }
// }

export default Validate;