import React, {useEffect, useState} from 'react'
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useNavigate } from 'react-router-dom';
import { useGlobalContext } from '../ContextApi';
const Form = () => {
  // Initializing firstname, lastname, address values in {}
  const [formOneData, setFormOneData] = useState({})

  const [selectedDate, setSelectedDate] = useState(false)
  
  // accessing methods and initial state values from contextapi
  const {addFormOneData,fOneData,addDateVal,dateVal} = useGlobalContext()
  // console.log("dob from global: ",dateVal)

  // react-router navigating
  const navigate = useNavigate()

  // Handling changes and updating formData state
  const handleChange= (e)=>{
    setFormOneData({...formOneData, [e.target.name]:e.target.value})
  }

  // This method helps to update/add to contextap initial state: foneData
  const updatingContext = ()=>{
    addFormOneData(formOneData)
  }

  // It helps to update the state data when user click previous button
  useEffect(()=>{
    if(fOneData){
      setFormOneData(fOneData)
    }
    if(dateVal){
      setSelectedDate(dateVal)
    }
    
  },[])

  return (
    <>
      <div>
      <h1>Basic Form</h1>
      <h4>Fill your details in the box </h4>
      <form className='form1'>
        <label>
          First Name:
          <input
            type="text"
            name="firstName"
            value={formOneData&& formOneData.firstName}
            onChange={handleChange}
          />
        </label>
        <br/>
        <label>
          Last Name:
          <input
          type="text"
          name="lastName"
          value={formOneData&& formOneData.lastName}
          onChange={handleChange}
         
          />
        </label>
        <br/>

        <label>
          Address:
          <input
            type="text"
            name="address"
            value={formOneData&& formOneData.address}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Date:
          <DatePicker
            selected={selectedDate?selectedDate:dateVal}
            onChange={(date) => {setSelectedDate(date)}}
            dateFormat="dd-MM-yyyy"
            closeOnScroll={true}
            showYearDropdown  
            maxDate={new Date()}
          />
        </label>
        <br />
        <button type="button"   onClick={()=> {navigate("/form2"), updatingContext(),addDateVal(selectedDate)}}>Next</button>
      </form>
    </div>
    </>
  )
}

export default Form