import React from 'react';
import Header from '../components/templates/header/headerComponent';
import Footer from '../components/templates/footer/footer';
import { Switch, Route } from 'react-router-dom'
import Feed  from '../components/feeds/feeds';
import Login from '../components/auth/login/loginComponent';
import Signup from '../components/auth/register/signupComponent';
import Contact from '../components/contactus/contactcomponent';
import './main.css';

const Main=()=> {
 
    return (

     <div className="Pagecontent">
          <Header/>
              <div className="Content">
              <Switch>

              <Route path="/feeds" component={Feed} />
              <Route exact path='/auth/login' component={Login} />
              <Route exact path="/auth/signup" component={Signup} />
              <Route exact path="/contactus" component={Contact} />
              </Switch>
          </div>
          <Footer/>
      </div>
      
    
    
    )
}
export default Main;
