  import React from 'react';
import {  Link} from 'react-router-dom';
import {AiFillPhone,AiFillTwitterCircle,AiFillFacebook,AiFillYoutube,AiFillInstagram} from 'react-icons/ai';
import {AiOutlineMail} from 'react-icons/ai';
import './footer.css';
function Footer() {
    return(
    <div className="footer">
        <div className="container" style={{textDecoration:'none',color:"white"}}>
            <div className="row justify-content-center">
                <div className="col-4  col-sm-2">
                    <h5>Links</h5>
                    <ul className="list-unstyled">
                        <li><Link  style={{textDecoration:'none',color:"white"}} size={10} to='/home'>Home</Link></li>
                        <li><Link style={{textDecoration:'none',color:"white"}} to='/posts'>Posts</Link></li>
                        <li><Link style={{textDecoration:'none',color:"white"}} to='/notice'>Notice</Link></li>
                        <li><Link style={{textDecoration:'none',color:"white"}} to='/opportunities'>Opportunities</Link></li>
                        <li><Link style={{textDecoration:'none',color:"white"}} to='/contactus'>Contact Us</Link></li>
                    </ul>
                </div>
                <div className="col-5 offset-3 col-sm-3 m-auto">
                    <h5>Our Address</h5>
                    <address style={{textDecoration:'none',color:"white"}}>
                    Chowbaga Rd, Anandapur,<br/> 
                    Mundapara, Kolkata,<br/> 
                    West Bengal 700107<br />
		              <i><AiFillPhone size={13} /></i>: +91 7979712804<br />
		              <i><AiFillPhone size={13} /></i>: +852 8765 4321<br />
		              <i><AiOutlineMail size={13} /></i>: <a href="mailto:adminheritageconnect@gmail.com">
                         admin</a>
                    </address>
                </div>
                <div className="col-12 col-sm-4 align-self-center">
                    <>
                    <div className="text-center">Social Links</div>
                    <div className="text-center">
                    <a href="https://www.facebook.com"><i><AiFillFacebook size={25} /></i> </a>
                    
                    <a href="https://www.twitter.com"><i><AiFillTwitterCircle size={25} /></i> </a>
                    
                    <a href="https://www.youtube.com"><i><AiFillYoutube size={25} /></i> </a>
                    
                    <a href="https://www.instagram.com"><i><AiFillInstagram size={25} /></i> </a>
                    
                    </div>
                    </>
                </div>
            </div>
            <div className="row justify-content-center">
                <div className="col-auto  copyright">
                    <p>© Heritage Institute of Technology, Kolkata.</p>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Footer;