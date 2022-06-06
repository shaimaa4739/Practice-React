import React from "react";
import { Card } from "react-bootstrap";
import { useState,useEffect } from "react";
import axios from 'axios';

export default function Users (){
    let [users,setUsers]=useState();
    let getAllUsers=()=>{
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then((response)=>{
            setUsers(response.data)
        })
        .catch((e)=>{
            console.log(e)
        })
    }
    useEffect(()=>{
        getAllUsers()
    },[])
    console.log(users);
    return(
        <>
            <div className='row alert alert-dark justify-content-md-center ' style={{width:"1532px"}}>
                {
                    users&&
                        users.map((user,index)=>{
                            return (

                                <Card key={index} bg="dark" className="text-light m-3 text-center"  style={{ width: '18rem' }}>
                                    <Card.Header>
                                        <Card.Img variant="top" src="https://i.pinimg.com/736x/18/78/5d/18785dd07c09465d01beef679baf1846.jpg" />
                                    </Card.Header>
                                    <Card.Body>
                                        <Card.Title>
                                            {user.name} 
                                        </Card.Title>
                                        <Card.Text>
                                            {user.email}
                                        </Card.Text>
                                        <div className="float-right ">
                                            <button class=" rounded btn btn-warning font-weight-bold text-dark" role="button">
                                                <h6>
                                                    Follow
                                                </h6>
                                            </button>
                                        </div>
                                    </Card.Body>
                                </Card>
                            );
                        })
                }
            </div>
        </>
    );
}