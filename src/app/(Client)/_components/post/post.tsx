import Image from 'next/image';
import React from 'react'

// import postImage from "../../_assets/images/post.png";
// import info1Icon from "../../_assets/images/info1.png";

import "./post.scss";
import { IProps } from '../../types/post';

const Post = (props: IProps) => {
  return (
    <div className='post-container'>
      <Image src={props.image} alt='postImage' className='post-image'/>
      <p className='post-title'>{ props.title}</p>
      <p className='post-description'>{ props.description}</p>
      <div className='post-info'>
        <div className='user'>
          <Image src={props.user.avatar} alt='inforAccount' className='avatar'/>
        <div className='post-info-name'>
            <p className='name1'>{ props.user.name}</p>
            <p className='status'>{ props.user.status === true ? "Verified writer" : "unVerified writer"}</p>
        </div>
        </div>
        <div className='post-date'>{ props.time}</div>
      </div>
    </div>
  )
}

export default Post;