import React from 'react';
import Image from 'next/future/image';
import ImageEgger from '../ImageNext';
import styles from './Fund.module.css'

const PostLink = (props) => {
  const {fund_data = {}, postId} = props;
  const {image} = fund_data;
  return (
    <ImageEgger 
      src={image}
      alt={postId}
      width={650}
      height={400}
      priority
      layout="raw"
      className={styles.postImage}
    />
  )
}

export default PostLink;