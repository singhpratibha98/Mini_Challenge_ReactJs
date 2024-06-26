import React, { useState } from 'react'
import "../../App.css";
import InputName from './InputName';

const Inputfield = ({onSearch,onSelectOwners}) => {

  const handleInputChange=(e)=>{
    onSearch(e.target.value);
    
    
  }

    return (
    <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginTop:"50px"}}>
     
      <div >
        <input style={{padding:"10px",width:"330px",borderRadius:"8px"}} type="text" placeholder="Search Challenges" onChange={handleInputChange} />

        </div>

        {/* 2nd input field */}

        <InputName onSelectOwners={onSelectOwners}/>

        {/* 3rd input field */}

        <div>
            <input style={{padding:"10px",width:"330px",borderRadius:"8px"}} type="text" placeholder='Select......' />
        </div>
      
    </div>
  )
}

export default Inputfield
