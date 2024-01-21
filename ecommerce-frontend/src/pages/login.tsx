import { useState } from "react"
import { FaGoogle } from "react-icons/fa";

const login=()=>{
    const [gender,setgender]= useState("");
    const [date,setdate]= useState("");

const loginHandler=()=>{
    
}
  return (
    <div className="login">
        <main>
           <h1 className="heading">Login</h1> 
           <div>
        <label >Gender</label>
        <select value={gender} onChange={(e)=>setgender(e.target.value)}> 
        <option value="">Select Gender</option>
        <option value="male">Male</option>
        <option value="female">Female</option>

        </select>
          </div>
           <div>
        <label >Date of birth</label>
     <input type="date"  value={date} onChange={(e)=>setdate(e.target.value)}/>
        
           </div>
           <div>
          <p>Already Signed In Once</p>
          <button onClick={loginHandler}>
            <FaGoogle /> <span>Sign in with Google</span>
          </button>
        </div>
        </main>
    </div>
  )
}

export default login