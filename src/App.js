import React from "react"; 
import Uploadxl from "./Uploadxl/upxl/uploadxl";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./Page/Login/login";

// import { BrowserRouter as Router, Route, Link,Switch } from "react-router-dom";
 
class App extends React.Component{
  state={
    isLog : false
  }
  handleLogin=(isLog)=>this.setState({isLog})
  render(){
    const isLog =this.state;
  return (
    <div>
      <Routes>
      <Route exact path='/' element={<Login/>}/>
      <Route render={()=>! isLog ?<Login isLog ={this.handleLogin()}/>:<Uploadxl/>}/>
      <Route exact path='/upload' element={<Uploadxl/>}/>
      </Routes>    
    </div>

  )

}
}

export default App;
