import React, {Component} from 'react';
import { BrowserRouter } from 'react-router-dom';



import "./mycss.min.css"
import "./font-awesome.css"

import MyRouter from './Router/myRouter';


class App extends Component{

  render(){

    
   
    return(
        <>
            <BrowserRouter>
                <MyRouter />
            </BrowserRouter>
        </>    
    );
  }
}

export default App;

