import React from "react";
import {ListGroup} from 'react-bootstrap'

export default function Footer (){
    return(
        <>
            <div className="w-100 bg-warning p-5 text-dark position-static">
                {/* <h2 className="font-weight-bold">S Web</h2> */}
                <div className="container p-5">
                    <div className="row">
                        <div className="col-4">
                            <h3 className="font-weight-bold">About Us</h3>
                            <p className="text-justify">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
                        </div>
                        <div className="col-4">
                        <ListGroup className="mt-1 mx-5">
                            <h3 className="font-weight-bold">Links</h3>
                            <ListGroup.Item className="bg-dark  w-75 text-center"><a className="text-warning" href="/home">Home</a></ListGroup.Item>
                            <ListGroup.Item className="bg-dark  w-75 text-center"><a className="text-warning" href="/users">Users</a></ListGroup.Item>
                            <ListGroup.Item className="bg-dark  w-75 text-center"><a className="text-warning" href="/login">Logout</a></ListGroup.Item>
                        </ListGroup>
                        </div>
                        <div className="col-4">
                            <h3 className="font-weight-bold">Contact Us</h3>
                        <input className="form-control mb-2" type="" name="" value="Full Name"/>
                            <input className="form-control mb-2" type="email" name="" value="Email"/>
                            <textarea className="form-control mb-2" placeholder="Enter your message" rows="5" cols="3"></textarea>
                            <button type="submit" className="col-12 btn btn-dark">Send</button>
                        </div>
                        
                    </div>
                    
                </div>
                
            </div>
        </>
    );
}