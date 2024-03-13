import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useGlobalContext } from '../ContextApi'
import greentick from "../assets/greentick.png"


const Preview = () => {

  const [submitMsg, setSubmitMsg] = useState(false)
  const [warnMsg, setWarnMsg] = useState(false)
  const {fOneData, fTwoData,dateVal,clearPreviousData} = useGlobalContext()
  const navigate = useNavigate()
    let strDate=dateVal.toString().slice(0,16)

    const handleSubmission = ()=>{
      if(dateVal){
        setSubmitMsg(true)
        clearPreviousData()
        
        setTimeout(()=>{
          navigate("/")
        },2000)
      }
      else{
        setWarnMsg(true)
      }

    }

  return (
    <>
    {
      submitMsg? 
      <div className='confirmationMsg'>
        <img src={greentick} alt="detailsSaved" />
        <h3 >User Details is Successfully Submitted</h3>
      </div>:
    <div>
    <h1>Form Preview</h1>
    <h4>User details final preview</h4>
    <div className='previewContainer'>
      {warnMsg&&<p className='wMsg'>Fill all the input field for submission</p>}
    <ul>
        <li><span>First Name: </span> {fOneData.firstName} </li>
        <li><span>Last Name: </span>{fOneData.lastName} </li>
        <li><span>Date of Birth: </span> {dateVal&&strDate} </li>
        <li><span>Phone No: </span>{fTwoData.phoneNumber}</li>
        <li><span>Mail Id: </span> {fTwoData.mailID}</li>
        <li><span>Address: </span>{fOneData.address}</li>
    </ul>
    <div className='previewbtn'>
    <button onClick={()=> navigate('/form2')}>Prev</button>
    <button onClick={()=> handleSubmission()}>Submit</button>
    </div>
    </div>
    </div>
  }
    </>
  )
}

export default Preview