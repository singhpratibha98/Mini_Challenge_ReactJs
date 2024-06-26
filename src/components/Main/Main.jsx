import React, { useState } from 'react'
import Header from '../Header/Header';
import Inputfield from './Inputfield';
import Cards from './Cards';


const Main = () => {

  const [query , setquery] = useState('');
  const [selectedOwners, setSelectedOwners] = useState([]);


  const data = [
    { challenge: 'Counter', owner: 'Sadanand Pai', link: 'https://sadanandpai.github.io/frontend-mini-challenges/react/#/counter' },
    { challenge: 'Programming Multiverse', owner: 'Cool Dude 69', link: 'https://sadanandpai.github.io/frontend-mini-challenges/react/#/programming-languages-multiverse' },
    { challenge: 'Anagram Checker', owner: 'Manmit Tiwedi', link: 'https://sadanandpai.github.io/frontend-mini-challenges/react/#/anagram-checker' },
    { challenge: 'Quote Generator', owner: 'Vidita Agrawal', link: 'https://sadanandpai.github.io/frontend-mini-challenges/react/#/quote-generator' },
    { challenge: 'Image Gallery', owner: 'Bhusan Patil', link: 'https://sadanandpai.github.io/frontend-mini-challenges/react/#/image-gallery' },
    { challenge: 'Accordion', owner: 'Nikhil Jha', link: 'https://sadanandpai.github.io/frontend-mini-challenges/react/#/accordion' },
    { challenge: 'Background Generator', owner: 'Aditya Suryawanshi', link: 'https://sadanandpai.github.io/frontend-mini-challenges/react/#/background-changer' },
    { challenge: 'Light Dark Mode', owner: 'Nikhil Jha', link: 'https://sadanandpai.github.io/frontend-mini-challenges/react/#/light-dark-mode' },
    { challenge: 'QR Generator', owner: 'Krishna Kalanani', link: 'https://sadanandpai.github.io/frontend-mini-challenges/react/#/qr-code-generator' },
    { challenge: 'Your Sports', owner: 'Cool Dude 69', link: 'https://sadanandpai.github.io/frontend-mini-challenges/react/#/your-sport' },
    { challenge: 'Table Colonizer', owner: 'Ravi Kumar Panchal', link: 'https://sadanandpai.github.io/frontend-mini-challenges/react/#/table-colorizer' },
    { challenge: 'Guess The Number', owner: 'Deepak Raj', link: 'https://sadanandpai.github.io/frontend-mini-challenges/react/#/guess-the-number' }
  ];


   

  const handleSearch=(query)=>{
    setquery(query);

  };

  const handleSelectOwners = (owners) => {
    setSelectedOwners(owners);
  };


  const filteredData = data.filter(item => {
    const matchesQuery = item.challenge.toLowerCase().includes(query.toLowerCase());
    const matchesOwner = selectedOwners.length === 0 || selectedOwners.includes(item.owner);
    return matchesQuery && matchesOwner;
  });

    return (
    <div>
       <Header/>
        <main style={{margin:"50px 50px"}}>
          
           <Inputfield onSearch={handleSearch} onSelectOwners={handleSelectOwners}/>
           <Cards data={filteredData}/>
           
        </main>
    </div>
  )
}

export default Main
