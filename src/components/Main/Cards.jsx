import React from 'react';
import "../../App.css";
import { useState } from 'react';




const Card = ({ challenge, owner, link }) => (
  
  <div style={{height:"100px",width:"400px",margin:"20px",border:"1px solid #ccc",borderRadius:"10px",boxShadow:"0 0 10px rgba(0,0,0,0)",transition:"all 0.2s ease-in-out"}}>
    <a style={{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column",textDecoration:"none"}} href={link}>
      <h3 style={{color:"green",fontWeight:"bolder",fontSize:"20px",textDecoration:"none"}}>{challenge}</h3>
      <p style={{color:"black",fontWeight:"bold"}}>{owner}</p>
    </a>
  </div>
);

const Cards = ({ data }) => (
  <div style={{marginTop:"100px"}}>
    <div style={{display:"flex",justifyContent:"space-around",alignItems:"center",flexWrap:"wrap"}}>
      {data.map((item, index) => (
        <Card key={index} challenge={item.challenge} owner={item.owner} link={item.link} />
      ))}
    </div>
  </div>
);

export default Cards;



// const Cards = () => {


  
//   return (
//     <div style={{marginTop:"100px"}}>
      
//       <div style={{display:"flex",justifyContent:"space-around",alignItems:"center",}}>
//         <div style={{height:"100px",width:"400px",margin:"20px",border:"1px solid #ccc",borderRadius:"10px",boxShadow:"0 0 10px rgba(0,0,0,0)",transition:"all 0.2s ease-in-out"}}> 
//           <a  style={{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column",textDecoration:"none"}} href="https://sadanandpai.github.io/frontend-mini-challenges/react/#/counter">
//             <h3 style={{color:"green",fontWeight:"bolder",fontSize:"20px",textDecoration:"none"}}>Counter</h3>
//             <p style={{color:"black",fontWeight:"bold"}}>Sadanand Pai</p>
//           </a>
//         </div>
//         <div style={{height:"100px",width:"400px",margin:"20px",border:"1px solid #ccc",borderRadius:"10px",boxShadow:"0 0 10px rgba(0,0,0,0)",transition:"all 0.3s ease-in-out"}}>
//         <a style={{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column",textDecoration:"none"}} href="https://sadanandpai.github.io/frontend-mini-challenges/react/#/programming-languages-multiverse">
//             <h3 style={{color:"green",fontWeight:"bolder",fontSize:"20px",textDecoration:"none"}}>Programming Multiverse</h3>
//             <p style={{color:"black",fontWeight:"bold"}}>Cool Dude 69</p>
//           </a>

//         </div>
//         <div style={{height:"100px",width:"400px",margin:"20px",border:"1px solid #ccc",borderRadius:"10px",boxShadow:"0 0 10px rgba(0,0,0,0)",transition:"all 0.3s ease-in-out"}}>
//         <a style={{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column",textDecoration:"none"}} href="https://sadanandpai.github.io/frontend-mini-challenges/react/#/anagram-checker">
//             <h3 style={{color:"green",fontWeight:"bolder",fontSize:"20px",textDecoration:"none"}}>Anagram Checker</h3>
//             <p style={{color:"black",fontWeight:"bold"}}>Manmit Tiwade</p>
//           </a>
//         </div>
//       </div>

//     {/* 2nd  */}

//       <div style={{display:"flex",justifyContent:"space-around",alignItems:"center"}}>
//         <div style={{height:"100px",width:"400px",margin:"20px",border:"1px solid #ccc",borderRadius:"10px",boxShadow:"0 0 10px rgba(0,0,0,0)",transition:"all 0.3s ease-in-out"}}>
//           <a style={{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column",textDecoration:"none"}} href="https://sadanandpai.github.io/frontend-mini-challenges/react/#/quote-generator">
//             <h3 style={{color:"green",fontWeight:"bolder",fontSize:"20px",textDecoration:"none"}}>Quote Generator</h3>
//             <p style={{color:"black",fontWeight:"bold"}}>Vidita Agrawal</p>
//           </a>
//         </div>
//         <div style={{height:"100px",width:"400px",margin:"20px",border:"1px solid #ccc",borderRadius:"10px",boxShadow:"0 0 10px rgba(0,0,0,0)",transition:"all 0.3s ease-in-out"}}>
//         <a style={{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column",textDecoration:"none"}} href="https://sadanandpai.github.io/frontend-mini-challenges/react/#/image-gallery">
//             <h3 style={{color:"green",fontWeight:"bolder",fontSize:"20px",textDecoration:"none"}}>Image Gallery</h3>
//             <p style={{color:"black",fontWeight:"bold"}}>Bhusan Patil</p>
//           </a>
//           </div>
//         <div style={{height:"100px",width:"400px",margin:"20px",border:"1px solid #ccc",borderRadius:"10px",boxShadow:"0 0 10px rgba(0,0,0,0)",transition:"all 0.3s ease-in-out"}}>
//         <a style={{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column",textDecoration:"none"}} href="https://sadanandpai.github.io/frontend-mini-challenges/react/#/accordion">
//             <h3 style={{color:"green",fontWeight:"bolder",fontSize:"20px",textDecoration:"none"}}>Accoridan</h3>
//             <p style={{color:"black",fontWeight:"bold"}}>Nikhil Jha</p>
//           </a>
//         </div>
//       </div>

//       {/* 3rd */}

//       <div style={{display:"flex",justifyContent:"space-around",alignItems:"center"}}>
//         <div style={{height:"100px",width:"400px",margin:"20px",border:"1px solid #ccc",borderRadius:"10px",boxShadow:"0 0 10px rgba(0,0,0,0)",transition:"all 0.3s ease-in-out"}}>
//           <a style={{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column",textDecoration:"none"}} href="https://sadanandpai.github.io/frontend-mini-challenges/react/#/background-changer">
//             <h3 style={{color:"green",fontWeight:"bolder",fontSize:"20px",textDecoration:"none"}}>Background Generator</h3>
//             <p style={{color:"black",fontWeight:"bold"}}>Aditya Suryawanshi</p>
//           </a>
//         </div>
//         <div style={{height:"100px",width:"400px",margin:"20px",border:"1px solid #ccc",borderRadius:"10px",boxShadow:"0 0 10px rgba(0,0,0,0)",transition:"all 0.3s ease-in-out"}}>
//         <a style={{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column",textDecoration:"none"}} href="https://sadanandpai.github.io/frontend-mini-challenges/react/#/light-dark-mode">
//             <h3 style={{color:"green",fontWeight:"bolder",fontSize:"20px",textDecoration:"none"}}>Light Dark Mode</h3>
//             <p style={{color:"black",fontWeight:"bold"}}>Nikhil Jha</p>
//           </a>

//         </div>
//         <div style={{height:"100px",width:"400px",margin:"20px",border:"1px solid #ccc",borderRadius:"10px",boxShadow:"0 0 10px rgba(0,0,0,0)",transition:"all 0.3s ease-in-out"}}>
//         <a style={{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column",textDecoration:"none"}} href="https://sadanandpai.github.io/frontend-mini-challenges/react/#/qr-code-generator">
//             <h3 style={{color:"green",fontWeight:"bolder",fontSize:"20px",textDecoration:"none"}}>QR Generator</h3>
//             <p style={{color:"black",fontWeight:"bold"}}>Krishna Kalanani</p>
//           </a>
//         </div>
//       </div>

//       {/* 4th */}

//       <div style={{display:"flex",justifyContent:"space-around",alignItems:"center"}}>
//         <div style={{height:"100px",width:"400px",margin:"20px",border:"1px solid #ccc",borderRadius:"10px",boxShadow:"0 0 10px rgba(0,0,0,0)",transition:"all 0.3s ease-in-out"}}>
//           <a style={{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column",textDecoration:"none"}} href="https://sadanandpai.github.io/frontend-mini-challenges/react/#/your-sport">
//             <h3 style={{color:"green",fontWeight:"bolder",fontSize:"20px",textDecoration:"none"}}>Your Sports</h3>
//             <p style={{color:"black",fontWeight:"bold"}}>Cool dude 69</p>
//           </a>
//         </div>
//         <div style={{height:"100px",width:"400px",margin:"20px",border:"1px solid #ccc",borderRadius:"10px",boxShadow:"0 0 10px rgba(0,0,0,0)",transition:"all 0.3s ease-in-out"}}>
//         <a style={{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column",textDecoration:"none"}} href="https://sadanandpai.github.io/frontend-mini-challenges/react/#/table-colorizer">
//             <h3 style={{color:"green",fontWeight:"bolder",fontSize:"20px",textDecoration:"none"}}>Table Colonizer</h3>
//             <p style={{color:"black",fontWeight:"bold"}}>Ravi Kumar Panchal</p>
//           </a>

//         </div>
//         <div style={{height:"100px",width:"400px",margin:"20px",border:"1px solid #ccc",borderRadius:"10px",boxShadow:"0 0 10px rgba(0,0,0,0)",transition:"all 0.3s ease-in-out"}}>
//         <a style={{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column",textDecoration:"none"}} href="https://sadanandpai.github.io/frontend-mini-challenges/react/#/Guess-the-number">
//             <h3 style={{color:"green",fontWeight:"bolder",fontSize:"20px",textDecoration:"none"}}>Guess The Number</h3>
//             <p style={{color:"black",fontWeight:"bold"}}>Deepak Raj</p>
//           </a>
//         </div>
//       </div>
      
//     </div>
//   )
// }

// export default Cards
