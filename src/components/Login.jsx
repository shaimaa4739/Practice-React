import React from "react";
import { Form,Button,Image } from "react-bootstrap";
import { useState } from "react";

export default function Login (){
    
    let [errors,setErrors] = useState({userName:null,password:null})
    let [userName,setUserName] = useState("Shaimaa Siraj");
    let [password,setPassword] = useState("123");

    let submitHandler = (e)=>{
        
        let result = validateFormData();
        if(!result)
            e.preventDefault()
    }

    let validateFormData = ()=>{
        let errors = {}
        if(userName.length<=3)
        {
            errors.userName="User name length must be greater than 3 characters"
        }
        if(password.length==0)
        {
            errors.password="Passowrd is required"
        }
        setErrors(errors)
        return Object.keys(errors).length !=0 ? false : true;
    }

    let getUserNameValue = (e)=>{
        setUserName(e.target.value)
    }

    let getPassword = (e)=>{
        setPassword(e.target.value)
    }

    return(
        <>
            <div className="row mt-3 mb-2 w-100">
                <div className="col-6 ">
                    <div className='bg-light p-5 w-75 float-right'>
                        <Form onSubmit={submitHandler}>
                            <h2 className="text-dark text-center font-weight-bold mb-5">Log in</h2>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Control
                                    value={userName}
                                    onChange={(event)=>getUserNameValue(event)} 
                                    type="text" 
                                    placeholder="User Name" />
                                <Form.Text className="text-danger">
                                {errors.userName}
                                </Form.Text>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Control 
                                    value={password}
                                    onChange={(event)=>getPassword(event)} 
                                    type="password" 
                                    placeholder="Password" />
                                <Form.Text className="text-danger">
                                {errors.password}
                                </Form.Text>
                            </Form.Group>
                            <Button variant="dark text-warning"  type="submit">
                                Submit
                            </Button>
                        </Form>
                    </div>
                </div>
                <div className="col-6 float-left">
                    <Image className="w-75" src={require('../Assets/Images/undraw_Login_re_4vu2.png')}/>
                    
                </div>
                
            </div>

        </>
    );
}