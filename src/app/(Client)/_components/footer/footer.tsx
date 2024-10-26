import React from 'react'

import Image from 'next/image';
import { CiHeart } from "react-icons/ci";

import Wave from '../../_assets/images/Wave.png';
// import footer from '../../_assets/images/footer.png';
import Logo from '../../_assets/images/Logo.png';
import cam from '../../_assets/images/cam.png';

import "./footer.scss";

const Footer = () => {
  return (
    <div className='footer-container'>
      <div className='wave-footer'>
        <Image src={Wave} alt='wave' className='img-wave'/>
      </div>

      {/* <div className='base-footer'>
        <div className='left-footer'>
          <div className='left-left-footer'>
            <p className='content-left'>Get our stories delivered From us to your inbox weekly.</p>
            <div className='group-input-left'>
              <input className='input-left' placeholder='Your Email' />
              <button className='btn-left'>Get started</button>
            </div>
            <p className='text-left'>Get a response tomorrow if you submit by 9pm today. If we received after 9pm will get a reponse the following day.</p>
          </div>

          <div className='right-footer'>
            <div className='right-right-footer'>
              <Image src={footer} alt='footer' className='img-rr-f'/>
              <p className='title1-right-f'>The best aticles every week</p>
              <p className='title2-right-f'>Our insurance plans offers are priced the same everywhere else.</p>
            </div>
            <div className='sharp-f'></div>
          </div>
        </div>
      </div> */}

      <div className='footer-f'>
        <div className='f1'>
        <div className='row1-f row'>
          <Image src={Logo} alt='logo'  className='logo-f'/>
          <p className='p-footer-f'>Build a modern and creative website with moonfo</p>
          <div className='cam-5'>
            <Image src={cam} alt='cam' className='cam'/>
            <Image src={cam} alt='cam' className='cam'/>
            <Image src={cam} alt='cam' className='cam'/>
            <Image src={cam} alt='cam' className='cam'/>
            <Image src={cam} alt='cam' className='cam'/>
          </div>
        </div>

        <div className='row1' >
          <div className='row'>
            <p className='row2-p title'>Product</p>
            <p className='row2-p'>Landingpage</p>
            <p className='row2-p'>Features</p>
            <p className='row2-p'>Documentation</p>
            <p className='row2-p'>Referral Program</p>
            <p className='row2-p'>Pricing</p>
          </div>

          <div className='row'>
            <p className='row2-p title'>Services</p>
            <p className='row2-p'>Documentation</p>
            <p className='row2-p'>Design</p>
            <p className='row2-p'>Themes</p>
            <p className='row2-p'>Illustrations</p>
            <p className='row2-p'>UI Kit</p>
          </div>
        </div>

        <div className='row1'>
          <div className='row'>
            <p className='row2-p title'>Company</p>
            <p className='row2-p'>About</p>
            <p className='row2-p'>Terms</p>
            <p className='row2-p'>Privacy Policy</p>
            <p className='row2-p'>Carrers</p>
          </div>

          <div className='row'>
            <p className='row2-p title'>More</p>
            <p className='row2-p'>Documentation</p>
            <p className='row2-p'>License</p>
            <p className='row2-p'>Changelog</p>
          </div>
        </div>
      </div>
      <div className='bottom-f'>
        <div className='heart-gr'>
          <CiHeart className='icon-heart'/>
        </div>
        <p className='p-bottom-f'>Copyright © 2019. Moonfo with love.</p>
        </div>
      </div>   
    </div>
  )
}

export default Footer;