import React from 'react'
import Feedposts  from './feedposts/feedposts';
const Feed=()=> {
  
  return (
    <div  className=" container p-5 justify-content-center align-item-center" style={{backgroundColor:'#FFF6F6',}}>

        <div className=" col-12">
          <h2>Feeds</h2>
          <hr
            style={{
                color: 'black',
                backgroundColor: 'black',
                height: 5
            }}
          />
          <div className="col-8 post-container"> 
          <Feedposts/>
          </div>
        </div>
    </div>
  )
}
export default Feed;
