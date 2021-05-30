import React,{useEffect} from 'react';
import { useDispatch } from "react-redux";
import {BrowserRouter} from 'react-router-dom'
import { getPosts } from './actions/feedposts';
import Main from './screens/mainComponent';
import  './app.css';
function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]); 
  return (
    <BrowserRouter>
          <div className="App">
            <Main />
          </div>
    </BrowserRouter>
  );
}

export default App;
