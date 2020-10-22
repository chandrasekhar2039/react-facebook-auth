import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useHistory} from "react-router-dom";
import Swal from 'sweetalert2';

function Input(){
  //creating history constant
  let history = useHistory();
  //creating log state
  const [log,setlog]=React.useState(true);
  // state for inpute username
  const [user,setuser]=React.useState("");
  const [password,setpassword]=React.useState("");

  function call_user(event){
    let e_u=event.target.value;
    setuser(e_u);
  }
function call_pass(event){
  let e_p=event.target.value;
  setpassword(e_p);
}
function submit(event){
  event.preventDefault();

  if(log){
    let get_data=JSON.parse(localStorage.getItem("users"));
    if(get_data !==null){
    get_data.map(found=>{
      if(found.username===user&& found.password===password){
        setuser("");
        setpassword("");
        history.push("/dashboard");
      }else{
        Swal.fire({
        icon: 'error',
        title: 'User not found',
        text: 'Check your email or phone number and password.',
        footer: '<a href>Create a new Account.</a>' // log value need to change to perform new account trigger
})
setuser("");
setpassword("");
      }
    })} else{
      Swal.fire({
      icon: 'error',
      title: 'User not found',
      text: 'Check your details and try again.',
      footer: "<a href='../'>Create a new Account.</a>" // log value need to change to perform new account trigger
})
setuser("");
setpassword("");
    }
  } else{
    var data={
      username:user,
      password:password
    };
    // var user_data =[JSON.parse(localStorage.getItem("users")) || ""];
    var user_data=JSON.parse(localStorage.getItem("users") || "[]");
    user_data.push(data);
    localStorage.setItem("users",JSON.stringify(user_data));
    setuser("");
    setpassword("");
    Swal.fire({
    icon: 'success',
    title: 'congratulations',
    text: 'You have successfully signed up',
  });
  history.push("/dashboard");
  }
}
  return <div className="input">
<form onSubmit={submit}>
<input type="text" name="username" placeholder="Email adress or phone number" autoComplete="off" required autoFocus="1" onChange={call_user} value={user}/>
<input type="password" name="password" placeholder="Password" autoComplete="off" required onChange={call_pass} value={password}/><br/>
<button className="btn btn-primary btn-lg butt" type="submit"><strong>{log?"log in":"Create new Account"}</strong></button>
</form>
{ log && <>
<div className="forgot_passsword"><a href="#" >Forgotten password?</a></div>
<hr/>
<div className="new_user"><button className="btn btn-success Create" onClick={()=>{setlog(false)}}><strong>Create New Account</strong></button></div>
 </> }</div>
}

export default Input;
