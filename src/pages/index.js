import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import {Main} from '@/templates/Main';
import {Meta} from '@/layouts/Meta';
import CardFeed from '@/components/CardFeed';
import Axios from 'axios'
import React, {useEffect, useState} from 'react'


const Home = (props) => {
  const [lstPost, setLstPost] = useState([]);
  const {getPost} = props;
  useEffect(() => {
    const fetchData = async () => {
      const dataBody = new FormData();
      dataBody.append('server_key', '83f0fa958d10392fd10bc8bb377a044c');
      dataBody.append('type', 'get_news_feed');
      dataBody.append('limit', '6');
    
      const response = await Axios.post(
        'https://ulatroi.net/api/posts?access_token=848dcbdc3953ec076f7ad68515388e6572aa2c80020ea9ce56c762037fe8e11eba98958b38768046a883bbca3f8bc8814ff676cb0e91829a',
        dataBody
      );
      const data = response?.data?.data
      setLstPost(data)
    }
    fetchData();
  }, [])
  
  console.log(lstPost)

  return (
    <Main
      meta={
        <Meta
          title="Ulatroi"
          description="Ulatroi description"
        />
      }
    >
      <div className='flex justify-center gap-6'>
        <div className='flex-none'>section</div>
        <div className="grow col-7 w">
          {lstPost?.map((item) => (
            <div key={item.post_id}>
              <CardFeed
                postType={item.postType}
                postFile={item.postFile}
                postId={item.post_id}
                postText={item.postText}
                publisher={item.publisher}
                time={item.time}
                postYoutube={item.postYoutube}
                postLink={item.postLink}
                postLinkImage={item.postLinkImage}
                postLinkContent={item.postLinkContent}
                postLinkTitle={item.postLinkTitle}
              />
            </div>
          ))}
        </div>
        <div className='flex-none'>section</div>
      </div>
    </Main>
  )
}

// export async function getServerSideProps(context) {

 
//   const getPost = async () => {
//     const dataBody = new FormData();
//     dataBody.append('server_key', '83f0fa958d10392fd10bc8bb377a044c');
//     dataBody.append('type', 'get_news_feed');
//     dataBody.append('limit', '6');
  
//     const response = await Axios.post(
//       'https://ulatroi.net/api/posts?access_token=848dcbdc3953ec076f7ad68515388e6572aa2c80020ea9ce56c762037fe8e11eba98958b38768046a883bbca3f8bc8814ff676cb0e91829a',
//       dataBody
//     );

//     return response?.data
//   }
//   return {
//     props: {
//       getPost: getPost,
//     },
//   };
// }

export default Home