import React from 'react'
import Image from 'next/image'
import {CgShoppingCart} from 'react-icons/cg'
import headerImg from '../src/assets/header.png'

import Link from 'next/link';

const HeroBanner = () => {
  return (
    <header className='header'>
        <div className='header-left-side'>
            <div className='header-content'>
               
                <h1>Style is a way to say who you are without having to speak</h1>
                 
                <Link href='/products'>
                     <button className='btn' type='button'><CgShoppingCart size={26} />  Start Shopping</button>
                </Link>
            </div>

            
        </div>

        <div className='header-right-side'>
            <div className='header-circle'>
                <Image className='header-img' src={headerImg} width={650} height={650} alt='header image' />
            </div>
        </div>
    </header>
  )
}

export default HeroBanner