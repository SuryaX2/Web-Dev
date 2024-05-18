import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios'

function Login(props){
    const [email, setEmail]=useState()
    const [password, setPassword]=useState()
    const navigate = useNavigate()

    const handleSubmit=(e)=>{
        e.preventDefault()
            axios.post('http://localhost:3001/login',{email,password})
            .then(result=>{console.log(result)
            if(result.data === "success"){
                props.showAlert("Account login Successfully","Success")
                navigate('/home')
            }else{
              props.showAlert("User details mismatch","error")
              navigate('/logout')
            }
            
        }).catch(err=> console.log(err))
    }
    
 return(
  <div className="container">
  <div className="row justify-content-center">
  <div className="col-md-5">
   <div className="card">
     <h2 className="card-title text-center">Login <a href="http://opensnippets.com">open snippets</a></h2>
      <div className="card-body py-md-4">
       <form _lpchecked="1" onSubmit={handleSubmit}>
        <div className="form-group">
             <input type="email" className="form-control" id="email" placeholder="Email" required onChange={(e)=>setEmail(e.target.value)}/>
                            </div>
                            
                          
   <div className="form-group">
     <input type="password" className="form-control" id="password" placeholder="Password" required onChange={(e)=>setPassword(e.target.value)}/>
   </div>
   <div className="d-flex flex-row align-items-center justify-content-between">
   <Link to="/forgot">Forgot Password.</Link>
                                <button className="btn btn-primary">Login</button>
          </div>
       </form>
     </div>
  </div>
</div>
</div>
</div>

 );
}

export default Login;