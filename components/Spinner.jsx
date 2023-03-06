// import Image from 'next/image';
import React from 'react';
import Bubble from '../public/Bubble.gif';
import Image from 'next/image';


const Spinner = () => {
  return (
    <>
        <Image src={Bubble} className="w-[200px] m-auto block" alt="loading" />
    </>
  )
}

export default Spinner