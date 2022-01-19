import React, {useState, useEffect} from 'react';
import "./userList.css";
import {Link} from "react-router-dom";
import {Card, CardBody, CardHeader, Col, Row, Table} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';


import axios from 'axios';

function UserList() {
    const [userData, setData] = useState([]);

    const getData = () => {
        axios.get('/user/all')
        .then((result) =>{
            console.log(result);
            const myData = result.data;
            setData(myData);
        });
    };
    useEffect(() => getData(), []);

    
    return (
        <div className="userList">
            <Row>
                <Col>
                    <Card>
                        <CardHeader className="fa fa-align-justify">User List</CardHeader>
                        <CardBody>
                            <Table hover bordered striped responsive size="sm">
                                <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>First Name</th>
                                        <th>Last Name</th>
                                        <th>Phone</th>
                                        <th>Email</th>
                                        <th>Username</th>
                                        <th>Password</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>


                                </tbody>
                            </Table>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
            <Link to="/newUser">
            <button className="userAddButton">Create</button>
            </Link>
        </div>
    )
}
export default UserList;