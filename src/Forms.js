import React,{useState} from 'react'
import "./Forms.css"
 function Form() {
     const [userRegistration , setuserRegistration]=useState({
       fname:"",
       lname:"",
       date:"",
       email:"",
       password:"",
       confirmPassword:"",
       checkbox:"",

     });
        const [records,setRecords]= useState([]);
         
        const handleInput = (e) => {
          const name = e.target.name;
          const value =e.target.value;
          console.log(name ,value);

          setuserRegistration({...userRegistration, [name]:value})
        }

        const handleSubmit =(e)=>{
            e.preventDefault();

            const newRecord ={...userRegistration,id:new Date().getTime().toString()}
            console.log(records);
            setRecords([...records,newRecord ])
            console.log(records);

            setuserRegistration({fname:"",lname:"", date:"", email:"", password:"", ConfirmPassword:"", checkbox:""})
        }

     
    return (
        <form action=""onSubmit={handleSubmit}>
             <div className="se">
                <div className="fn">
                <div><label>Title</label> <br/>
                <select >
                    <option></option>
                        <option >Mr</option>
                        <option >Miss</option>
                        <option> Master</option>
                 </select></div>
                <div class="div-fname"> <label >First Name</label><input type='text' name="fname" 
                 value={userRegistration.fname}
                 onChange={handleInput}></input></div>
               <div class="div-lname"><label>Last Name</label><input type='text' name="lname" 
               value={userRegistration.lname}
                onChange={handleInput}></input></div>
            </div>
            <div className="da">
            <div><label>Date</label><br/><input type='date' name="date" 
            value={userRegistration.date}
            onChange={handleInput}></input></div>
            <div><label>E-Mail</label><br/><input type='email' name="email"
            value={userRegistration.email}
             onChange={handleInput}></input></div>
            </div>
            <div className="pa">
            <div><label>Password</label><br/><input type='password' name="password" 
            value={userRegistration.password}
            onChange={handleInput}></input></div>
                <div><label>Confirm Password</label><br/><input type='password' name="confirmPassword" 
                value={userRegistration.confirmPassword}
                onChange={handleInput}></input></div>
            </div>
             <div className="ch">
            <input type='checkbox' name="checkbox" 
            value={userRegistration.checkbox}
            onChange={handleInput}></input>
            <label>Accept Terms and conditions</label>
            </div>
            <div className="hy" >
                    <button class="register-button" type="submit">Register</button>
                    <button class="reset-button" type="reset">Reset</button>
            </div>
            <div>
                {
                  records.map((curElem) =>{
                      return (
                          <div className="showDataStyle">
                              <p>{curElem.fname}</p>
                              <p>{curElem.lname}</p>
                              <p>{curElem.date}</p>
                              <p>{curElem.email}</p>
                              <p>{curElem.password}</p>
                              <p>{curElem.confirmPassword}</p>
                              <p>{curElem.checkbox}</p>
                          </div>
                      )
                  }) 
                }
            </div>

        </div>
        </form>
       
    )
}

export default Form;