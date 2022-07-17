import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import {Main} from '@/templates/Main';
import {Meta} from '@/layouts/Meta';
import CardFeed from '@/components/CardFeed';
import Card from '@/components/Card';
import InfiniteScroll from 'react-infinite-scroll-component';
import Axios from 'axios'
import React, {useEffect, useState, useRef} from 'react'


const Home = (props) => {
  const [lstPost, setLstPost] = useState([]);
  const [ globalCardWidth, setGlobalCardWidth] = useState(100);
  const wrapRef = useRef(null);
  const {getPost} = props;
  useEffect(() => {
    const fetchData = async () => {
      const dataBody = new FormData();
      dataBody.append('server_key', '83f0fa958d10392fd10bc8bb377a044c');
      dataBody.append('type', 'get_news_feed');
      // dataBody.append('limit', '0');
      dataBody.append('limit', '10');
      // dataBody.append('after_post_id', 98);

    
      const response = await Axios.post(
        'https://ulatroi.net/api/posts?access_token=848dcbdc3953ec076f7ad68515388e6572aa2c80020ea9ce56c762037fe8e11eba98958b38768046a883bbca3f8bc8814ff676cb0e91829a',
        dataBody
      );
      const data = response?.data?.data
      setLstPost(data)
    }
    fetchData();
  }, [])

  useEffect(() => {
    const currentWidth = wrapRef?.current ? wrapRef.current.offsetWidth : 0;
    setGlobalCardWidth(currentWidth)
  }, [wrapRef]);

  const fetchMoreData = async () => {
    const lastPost = lstPost[lstPost.length - 1]
    const dataBody = new FormData();
    dataBody.append('server_key', '83f0fa958d10392fd10bc8bb377a044c');
    dataBody.append('type', 'get_news_feed');
    dataBody.append('limit', '10');
    dataBody.append('after_post_id', lastPost.post_id);
    const response = await Axios.post(
      'https://ulatroi.net/api/posts?access_token=848dcbdc3953ec076f7ad68515388e6572aa2c80020ea9ce56c762037fe8e11eba98958b38768046a883bbca3f8bc8814ff676cb0e91829a',
      dataBody
    );
    const data = response?.data?.data;
    setLstPost([...lstPost,...data])
  }
  
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
        <div className="grow col-7 w" ref={wrapRef}>
          <InfiniteScroll
            dataLength={lstPost.length}
            next={fetchMoreData}
            hasMore={true}
            loader={<h4>Loading...</h4>}
          >
            {lstPost?.map((item) => (
              <div key={item.post_id} className="flex justify-center">
                <Card
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
                  postFileName={item.postFileName}
                  fund_data={item.fund_data}
                  post_share={item.post_share}
                  photo_multi={item.photo_multi}
                  globalWidth={globalCardWidth}
                />
              </div>
            ))}
          </InfiniteScroll>
          
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