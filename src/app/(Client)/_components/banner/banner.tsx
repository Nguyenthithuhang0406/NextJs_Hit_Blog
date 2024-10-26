import React from 'react'
import Image from 'next/image';
import { FaSearch } from "react-icons/fa";

import LIveChat from '../../_assets/images/LIveChat.png';

import "./banner.scss";
const Banner = () => {
  return (
    <div className='banner-container'>
      <div className='banner-left'>
        <p className='banner-left-p1'>Read the most interesting articles</p>
        <p className='banner-left-p2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
        <div className='banner-gr-search'>
          <FaSearch className='banner-gr-icon' />
          <input type='text' placeholder='Search article' className='banner-gr-input' />
          <button type='submit' className='banner-gr-btn'>Search</button>
        </div>
        <div className='banner-gr-tag'>
          <div className='banner-gr-tag-p'>Popular Tags: </div>
          <div className='banner-gr-tag-item'>Design</div>
          <div className='banner-gr-tag-item'>User Experience</div>
          <div className='banner-gr-tag-item'>User Interfaces</div>
        </div>
      </div>
      <div className='banner-right'>
        <Image src={LIveChat} alt='banner'/>
      </div>
    </div>
  )
}

export default Banner;