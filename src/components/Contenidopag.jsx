import React from 'react'
import Card from './Card'
import i1 from '../assets/i1.png';
import i2 from '../assets/i2.png';
import i3 from '../assets/i3.png';
function Contenidopag() {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-1 md:space-x-8 bg-black py-4">
      <Card src={i1} alt="Badminton Player" />
      <Card src={i2} alt="Boxer" />
      <Card src={i3} alt="Boxing Mask" />

      
    </div>
  )
}

export default Contenidopag
