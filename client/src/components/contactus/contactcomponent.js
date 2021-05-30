
import React from 'react';
import { Button,Form ,Label,Input,FormGroup} from 'reactstrap';
import './styles.css';
const handleFeedback=()=>{}

const Contact=()=> {
  return (
    <div className="feedbackform container contactform">
        
      <div className="justify-content-center">
        <h1>Feedback</h1>
      </div>
      <hr
        style={{
            color: 'black',
            backgroundColor: 'black',
            height: 5
        }}
    />
      <Form className="contactform">

      <FormGroup>
        <Label for="feedbacktype">Type</Label>
        <Input type="select" name="feedback-type" id="feedbacktype">
          <option defaultChecked>Feedback/Suggestion</option>
          <option>Report an issue</option>
        </Input>
      </FormGroup>
      <FormGroup>
        <Label for="Title">Title</Label>
        <Input type="textfield" name="Title" id="feedbacktitle" />
      </FormGroup>
      <FormGroup>
        <Label for="Feedback">Query/Feedpost</Label>
        <Input type="textarea" name="Feedback" id="feedbackbody" />
      </FormGroup>
      
      <Button type="submit " className="bg-primary mt-3" onClick={handleFeedback}>Submit</Button>
    </Form>
    </div>
  );
}

export default Contact;
