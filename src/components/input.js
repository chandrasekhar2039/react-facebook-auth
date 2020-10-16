import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

function Input(){

  return <div className="input">
<form>
<input type="text" name="username" placeholder="Email adress or phone number" autoComplete="off" required autofocus="1"/>
<input type="password" name="password" placeholder="Password" autoComplete="off" required  /><br/>
<button className="btn btn-primary btn-lg" type="submit"><strong>log in</strong></button>
</form>
<div className="forgot_passsword"><a href="#" >Forgotten password?</a></div>
<hr />
<div className="new_user"><button className="btn btn-success Create"><strong>Create New Account</strong></button></div>
</div>
}

export default Input;
