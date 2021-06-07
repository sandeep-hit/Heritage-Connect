import React from 'react';
import {
   Form,
  FormGroup, Label, Input,
  Button,
} from 'reactstrap';
function Signup()
{
  return (
    <div className="container border col-7 ml-auto mr-auto mt-5 mb-5 p-5 shadow" style={{backgroundColor:"#FFF6F6"}}>
      <h1  font="italic" className="ml-0">Signup</h1>
      <hr/>
    <Form method="POST">
      <FormGroup>
        <Label for="name" size="lg">First Name</Label>
        <Input type="name" name="name" id="name" bsSize="lg" placeholder="First Name" />
      </FormGroup>
      {/* <FormGroup>
        <Label for="lastname" size="lg">Last Name</Label>
        <Input type="lastname" name="last name" id="last name" bsSize="lg" placeholder="Last Name" />
      </FormGroup> */}
      <FormGroup>
        <Label for="phone" size="lg">Phone Number</Label>
        <Input type="phone" name="phone" id="phone" bsSize="lg" placeholder="Phone" />
      </FormGroup>
      <FormGroup>
        <Label for="batch" size="lg">Year</Label>
        <Input type="batch" name="batch" id="batch" bsSize="lg" placeholder="20XX" />
      </FormGroup>
      <FormGroup>
        <Label for="roll" size="lg"> Roll Number</Label>
        <Input type="Number" name="roll" id="roll" bsSize="lg" placeholder="roll number" />
      </FormGroup>
      <FormGroup>
        <Label for="email" size="lg">Email</Label>
        <Input type="email" name="email" id="email" bsSize="lg" placeholder="Heritage email-Id" />
      </FormGroup>
      <FormGroup>
        <Label for="password" size="lg">Password</Label>
        <Input type="password" name="password" id="Password" bsSize="lg" placeholder="*********" />
      </FormGroup>
      
      <Button className="btn btn-info btn-block shadow mt-5" size="lg">Signup</Button>
    </Form>
    </ div>
  );
}
export default Signup;