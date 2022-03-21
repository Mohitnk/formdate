import React from 'react'
import "./Form.css"
 function Form() {
    return (
        <div className="form">
                <div className="fn">
                <div><label>Title</label> <br/>
                <select >
                        <option >Mr</option>
                        <option >Miss</option>
                        <option> Master</option>
                 </select></div>
                <div> <label>First Name</label><br/><input type='text'></input></div>
               <div> <label>Last Name</label><br/><input type='text'></input></div>
            </div>
            <div className="da">
            <div><label>Date</label><br/><input type='date'></input></div>
            <div><label>E-Mail</label><br/><input type='email'></input></div>
            </div>
            <div className="pa">
            <div><label>Password</label><br/><input type='password'></input></div>
                <div><label>Confirm Password</label><br/><input type='password'></input></div>
            </div>
             <div className="ch">
            <input type='checkbox'></input>  <checkbox>Accept Terms and conditions</checkbox>
            </div>
            <div className="hy">
                <button >REGISTER</button> 
                <button>RESET</button>
            </div>
        </div>
    )
}

export default Form;