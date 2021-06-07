import React from 'react'
import Createpost from '../createfeedpost/createPostComponent';
const Createfeed=()=> {
  
  return (
    <div  className="row container justify-content-center ">
    <div className=" col-s-12 col-sm-8 col-l-8">
      <h2>Create Post</h2>
      <hr
        style={{
            color: 'black',
            backgroundColor: 'black',
            height: 5
        }}
      />
      <div className="col-12  post-container"> 
      <Createpost/>
      </div>
    </div>
    </div>
  )
}
export default Createfeed;
