import React from 'react';
import Typewriter from "typewriter-effect";
import{ Button,Jumbotron,Container} from 'reactstrap';
import {Link} from 'react-router-dom';
import './home.css';
import { max } from 'moment';
const Home=()=> {
  return (
    <div className="container">
      <Jumbotron fluid styles={{}}>
        <Container fluid className="jumbo p-5" style={{borderStyle:"solid",borderRadius:"10px", backgroundColor:"#FFF6F6"}}>
                  <h1 style={{fontFamily:"fantasy"}}>Welcome to HiT Connect</h1>  
        </Container>
      </Jumbotron>
      
  
     

      <div className="typewriter col-sm-12 col-md-4 p-5 mt-2">
          <h3 style={{fontFamily:"fantasy"}}>Here you can</h3>
                  
          <Typewriter
  
                onInit={(typewriter)=> {

                typewriter
                .typeString("<strong>*</strong> <i>Connect with your peers</i><br>").pauseFor(1000)
                .typeString("<strong>*</strong> <i>Share your ideas</i><br>").pauseFor(1000)
                .typeString("<strong>*</strong> <i>Build your team</i><br>").pauseFor(1000)
                .typeString("<strong>*</strong> <i>Find new opportunities</i><br>").pauseFor(1000)
                .typeString("<strong>*</strong> <i>Grow together<i/>")
                .start();
            }}
            />
      </div>
      <div className="links-container col-sm-12 col-md-4 p-5 mt-2" style={{backgroundColor:'#E6E6FA',borderRadius:'10px',border:'solid'}}>
                  <Link to="/notice">
                  <Button className="m-3 col-12 bg-danger button" style={{width:max}}outline hre>
                    <span className="fa fa-sign-in fa-lg " /> <div className="btn-text">Notice</div>
                  </Button>
                  </Link>
                  <Link to="/opportunities">
                  <Button className="m-3 col-12 bg-warning button" outline hre>
                    <span className="fa fa-sign-in fa-lg" /> <div className="btn-text">Opportunities</div>
                  </Button>
                  </Link>
                  <Link to="/projectexpo">
                  <Button className="m-3 col-12 bg-success button" outline hre>
                    <span className="fa fa-sign-in fa-lg  " /> <div className="btn-text"> Project Expo</div>
                  </Button>
                  </Link>
                  <Link to="/events">
                  <Button className="m-3 col-12 bg-info button" outline hre>
                    <span className="fa fa-sign-in fa-lg" /> <div className="btn-text">Events</div>
                  </Button>
                  </Link>
                  <Link to="/opportunities">
                  <Button className="m-3 col-12 bg-dark button" outline hre>
                    <span className="fa fa-sign-in fa-lg" /> <div className="btn-text">Notifications</div>
                  </Button>
                  </Link>

      </div>
      
    </div>
  )
}

export default Home;
