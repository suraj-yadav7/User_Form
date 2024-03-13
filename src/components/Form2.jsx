import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useGlobalContext } from '../ContextApi'

const Form2 = () => {
    
  // Initializing PhoneNumber, MailID values in {}
    const [formTwoData, setFormTwoData] = useState({})

  // accessing methods and initial state values from contextapi
    const{fTwoData, addFormTwoData} =useGlobalContext()


    const navigate = useNavigate()

  // Handling changes and updating formData state
    const handleChange= (e)=>{
        setFormTwoData({...formTwoData, [e.target.name]:e.target.value})
      }

  // This method helps to update/add to contextap initial state: foneData
      useEffect(()=>{
        if(fTwoData){
            setFormTwoData(fTwoData)
        }
      },[])
  return (
    <>
    <div>
      <h1>Basic Form</h1>
      <h4>Fill remaining details in the box</h4>
    <form className='form2'>
        <label>
            Phone Number: 
            <input type='number' 
            name="phoneNumber"
            value={formTwoData&& formTwoData.phoneNumber}
            onChange={handleChange}
            />
        </label>
        <br/>
        <label>
            Email:
            <input type="email" 
            name="mailID"
            value={formTwoData&& formTwoData.mailID}
            onChange={handleChange}
            required
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
            />
        </label>
        <br/>
        <div className='fTwoBtn'>
        <button type="button" onClick={()=> {navigate("/"),addFormTwoData(formTwoData)}}>Prev</button>
        <button type="button" onClick={()=> {navigate("/preview"),addFormTwoData(formTwoData)}}>Next</button>
        </div>
    </form>
  </div>
    </>
  )
}

export default Form2