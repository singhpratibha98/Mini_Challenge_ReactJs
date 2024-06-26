import React, { useState } from 'react';
import "./Front_Page.css";
import { Link } from 'react-router-dom';





const Front_Page = () => {
    const [btn ,setbtn] = useState(true);

  return (
    <div>
        <nav className='navbar'>
                 <a href="#" className='nav-1'>
                 <img src="https://sadanandpai.github.io/frontend-mini-challenges/assets/logo-r_4QCHBg.png" height="60px" width="60px" alt="logo"/>
                 <span>Frontend Mini Challenge</span>
                </a>
         
            <div className='nav-2'>
                <div className='nav-2-1'>
                <a href="#">Why Us?</a>
                <a href="#">Testimonial</a>
                <a href="#">Contributors</a>
                <a href="#">Leaderboards</a>
                </div>
               
                <div className='nav-3'>
                    <p>Github icon</p>
                    <p>dark mode</p>
                </div>
                </div>
        </nav>

        <main>
            <div className='main-div'>
                <div className='main-div-1'>
                <h1>Prepare for UI coding interviews</h1>
                <p>by solving the collection of challenges from Frontend Mini Challenges</p>

                   <Link to="/home">
                    <button className='btn'>Get Started</button>
                    </Link>

                    {/* <button className='btn'>Get Started</button> */}

            
                
                
             <div className='main-div-2'>
                <img src="data:image/png;base64,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" height="40px" width="40px" alt="js.png"/>
                {"      "}
                <img src="https://sadanandpai.github.io/frontend-mini-challenges/assets/react-BtciLvBz.png" height="40px" width="40px"  alt="react.png"/>
                {"      "}
                <img src="https://sadanandpai.github.io/frontend-mini-challenges/assets/vue-wXUHXaQI.png" height="40px" width="40px"  alt="vue.png"/>
                {"      "}
                <img src="data:image/png;base64,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" height="40px" width="40px"  alt="" />
             </div>
             </div>
             <div>
                <figure>
                    <img src="https://sadanandpai.github.io/frontend-mini-challenges/assets/cover-transparent-Ecfv1-zo.png" height="300px" width="500px" alt="logo"/>
                    <figcaption>Collection of Frontend Challenge for learning and interview</figcaption>
                </figure>
             </div>
                
            </div>

            <hr style={{margin:"auto",padding:"auto",width:"80%"}}/>

            <h3>Why Us?</h3>

        </main>
      
    </div>
  )
}

export default Front_Page
