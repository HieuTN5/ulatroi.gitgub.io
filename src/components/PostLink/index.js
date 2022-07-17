import React from 'react';
import Image from 'next/future/image';
import styles from './PostLink.module.css'

const PostLink = (props) => {
  const {postLinkTitle, postLinkContent, postLink, postLinkImage} = props;
  return (
    <a className="max-w-sm w-full lg:max-w-full lg:flex" href={postLink} target="_blank" rel="noreferrer">
      <div className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden" title="Woman holding a mug">
        <Image 
          src={postLinkImage}
          alt="aaaa"
          width={650}
          height={400}
          priority
          layout="raw"
          className={styles.postImage}
        />
      </div>
      <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
        <div>
          <div className="text-gray-900 font-bold text-xl mb-2" dangerouslySetInnerHTML={{ __html: postLinkTitle }}></div>
          <p className="text-gray-700 text-base" dangerouslySetInnerHTML={{ __html: postLinkContent }}></p>
        </div>
      </div>
    </a>
  )
}

export default PostLink;