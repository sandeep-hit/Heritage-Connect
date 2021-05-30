
import React from 'react';

import {
  Container,  Form,
  FormGroup, Label, Input,
  Button,
} from 'reactstrap';
function Login () {
  return (
    <div className="row border m-3 p-5 shadow">
    <div className="col-md-4 border m-3 p-3 ">
     <img  src={process.env.PUBLIC_URL+"/images/auth/login/loginimage.svg"} alt="Login" height="auto" width="100%"/>
     <p size="20" id="imgtxt"><i>Collaborate and Grow!</i></p>
     </div>
    <Container className="col-md-7 ">
      <h1  font="italic" className="ml-0">Login</h1>
      <hr/>
    <Form method="POST">
      <FormGroup>
        <Label for="email" size="lg">Email</Label>
        <Input type="email" name="email" id="email" bsSize="lg" placeholder="Heritage email" />
      </FormGroup>
      <FormGroup>
        <Label for="password" size="lg">Password</Label>
        <Input type="password" name="password" id="Password" bsSize="lg" placeholder="*********" />
      </FormGroup>
      <FormGroup check>
        <Label check >
          <Input type="checkbox" />{' '}
          Remember me
        </Label>
      </FormGroup>
      <Button className="btn btn-info btn-block shadow" size="lg">Login</Button>
    </Form>
    </ Container>
     
     </div>
  );
}

export default Login;