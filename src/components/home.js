import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "../css/style.css"
import Input from "./input"

function Home(){
  return <div className="container adjust">
  <div className="row">
     <div className="col c1">
       <div className="logo"><img src="/img/fb_logo.svg" alt="Logo "/></div>
       <p className="head">Facebook helps you connect and share<br/> with the people in your life.</p>
     </div>
     <div className="col c2"><Input/>
      <div className="extra"><p><strong>Create a Page </strong>for a celebrity, band or business.</p></div>
     </div>
   </div>
  </div>
}

export default Home;
