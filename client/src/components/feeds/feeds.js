import React from 'react'
import Feedposts  from './feedposts/feedposts';
import {useSelector} from 'react-redux';
import Createpost from './createfeedpost/createPostComponent';
const Feed=()=> {
  const posts = useSelector((state) => state.feedposts);
  console.log(posts);
  return (
    <div  className="row container ">
    <div  className="col-md-5">
      <Createpost/>
    </div>
    <div className=" col-md-6">
      <h2>Feeds</h2>
      
      <div className="post-container"> 
      <Feedposts/>
      </div>
    </div>
    </div>
  )
}
export default Feed;
