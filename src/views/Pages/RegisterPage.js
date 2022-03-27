/*!

=========================================================
* Paper Kit React - v1.3.0
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-kit-react

* Copyright 2021 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/paper-kit-react/blob/main/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React, {Component} from 'react';
import axios from 'axios';
import settings from './constants';
import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";
// reactstrap components
import { Button, Card, Form, Input, Container, Row, Col } from "reactstrap";

class RegisterPage extends Component
{
  constructor(props)
  {
    super(props);

    this.state = {
      user: '',
      email: '',
      image: null
    };
  }

  handleChange = (e) => {
      this.setState({[e.target.id]: e.target.value});
  };

  handleImageChange = (e) => {
    this.setState({[e.target.id]: e.target.files[0]})
  };

  handleSubmit = (e) => {
    e.preventDefault();

    // to send a multipart form easily use JavaScript's FormData
    let form_data = new FormData();
    
    // build the information we need to send to the server, which is the
    // contents of the items in the form
    form_data.append('user', this.state.user);
    form_data.append('email', this.state.email);
    form_data.append('image', this.state.image, this.state.image.name);

    // where are we sending
    let url = `http://${settings.url}upload.php`;

    // make our axios call, but with a twist... we need to add a new header
    axios.post(url, form_data, {
      headers: {
        'content-type': 'multipart/form-data'
      }
    })
    .then(res => {
      console.log(res.data);
    })
    .catch(err => {
      console.log(err)
    })
  };



  render(){
  return (
    <>
      <ExamplesNavbar />
      <div
        className="page-header"
        style={{
          backgroundImage:
            "url(" + require("assets/img/login-image.jpg").default + ")",
        }}
      >
        <div className="filter" />
        <Container>
          <Row>
            <Col className="ml-auto mr-auto" lg="4">
              <Card className="card-register ml-auto mr-auto">
                <h3 className="title mx-auto">Welcome</h3>
                <div className="social-line text-center">
                  
                </div>
                <Form className="register-form">
                  <label>First Name</label>
                  <Input placeholder="First Name" type="text" />
                  <label>Last Name</label>
                  <Input placeholder="Last Name" />
                  <label>Email</label>
                  <Input placeholder="Email" type="text" />
                  <label>Password</label>
                  <Input placeholder="Password" type="password" />
                  <Button block className="btn-round" color="danger">
                    Register
                  </Button>
                </Form>
                
              </Card>
            </Col>
          </Row>
        </Container>
        
      </div>
    </>
  );
}
}
export default RegisterPage;
