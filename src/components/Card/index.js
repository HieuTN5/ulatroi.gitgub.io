// import { HeartIcon } from '@heroicons/react/solid';
import { BookmarkIcon, HeartIcon, ChatIcon } from '@heroicons/react/outline';
import Image from 'next/future/image'
import { POST_TYPE, POST_FILE_TYPE } from '@/utils/constants';
import { convertUnixTimeToRelative, getPostTypeByFile } from '@/utils/ultils';
import ImageEgger from '@/components/ImageNext';
import ShareAction from '../ShareAction'
import VideoPlayer from '../video';
import PostLink from '../PostLink';
import Fund from '../Fund';
import SharePost from '../SharePost';
import styles from './Card.module.css';

const CardFeed = (props) => {
  const {
    postType,
    postFile,
    postId,
    postText,
    publisher,
    time,
    postYoutube,
    postLink,
    postLinkImage,
    postLinkContent,
    postLinkTitle,
    postFileName,
    fund_data,
    post_share,
    photo_multi,
    globalWidth
  } = props;

  const renderPostSource = ({ postType, postFile, postLinkTitle, postLinkContent, postLink, postYoutube, postFileName, fund_data, postLinkImage, post_share, publisher, photo_multi, globalWidth }) => {
    let result;
    if (postType === POST_TYPE.POST) {
      if (postLink) {
        result = <PostLink postLinkTitle={postLinkTitle} postLinkContent={postLinkContent} postLink={postLink} postLinkImage={postLinkImage} />
      } else if (post_share === "1") {
        result = (<SharePost 
          publisher={publisher} 
          postType={postType}
          postFile={postFile}
          postId={postId}
          postText={postText}
          time={time}
          postYoutube={postYoutube}
          postLink={postLink}
          postLinkImage={postLinkImage}
          postLinkContent={postLinkContent}
          postLinkTitle={postLinkTitle}
          postFileName={postFileName}
          fund_data={fund_data}
          post_share={post_share}
          photo_multi={photo_multi}
        />)
      } else if (postFile || postYoutube) {
        const postFileType = getPostTypeByFile(postFileName);
        if (postFileType === POST_FILE_TYPE.IMAGE) {
          result = <ImageEgger 
            src={postFile}
            alt={postId}
            width={650}
            height={400}
            priority
            layout="raw"
            className={styles.postImage}
          />
        } else if (postFileType === POST_FILE_TYPE.AUDIO) {
          console.log('aasd: ', globalWidth)
          result = (
            <audio
            controls
            className='w-full'
            // style={{width: `calc( ${globalWidth}px - 2rem)`}}
            src={postFile}>
                Your browser does not support the
                <code>audio</code> element.
            </audio>
          )
        }
        else {
          result =  (
            <VideoPlayer
              muted={false}
              setMuteVideo={() => null}
              postFile={postFile}
              postYoutube={postYoutube}
            />
          );
        }       
      } else if (fund_data?.id) {
        const {image: imageFund} = fund_data
        // result = <Fund fund_data={fund_data} postId={postId} />
        result =  <ImageEgger 
          src={imageFund}
          alt={postId}
          width={650}
          height={400}
          priority
          layout="raw"
          className={styles.postImage}
        />
      }
    }
    else if (postType === POST_TYPE.PROFILE_COVER_PICTURE && postFile) {
      console.log('postFile: ', postFile)

      result = (
          <ImageEgger 
            src={postFile}
            alt={postId}
            width={650}
            height={400}
            priority
            layout="raw"
            className={styles.postImage}
          />
      )
    }
    else if (postType === POST_TYPE.PROFILE_PICTURE && postFile) {
      result = (<ImageEgger 
        src={postFile}
        alt={postId}
        width={650}
        height={400}
        priority
        layout="raw"
        className={styles.postImage}
      />)
    }

    return (<div className='' >{result}</div>)
  };


  const renderGalaryImage = (photos) => {
    console.log('photos: ', photos)
    return (
      <section className="overflow-hidden text-gray-700">
        <div className="container py-2 mx-auto">
          <div className="flex flex-wrap -m-1 md:-m-2">
            <div className="flex flex-wrap w-full">
              {photos?.map( (item) => (
                <div key={item.id} className={`${photos.length === 1 ? 'w-full' : 'w-1/2'} p-1 md:p-2`}>
                  <ImageEgger width={650}
            height={400} src={item.image} alt={item.id} className="block object-cover object-center w-full h-full rounded-lg" layout="raw"/>
                  {/* <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"
                    src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(70).webp"> */}
                </div>)
              )}
              {/* <div className="w-1/2 p-1 md:p-2">
                <ImageEgger src={postFile} layout="raw"/>
                <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"
                  src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(70).webp">
              </div>
              <div className="w-1/2 p-1 md:p-2">
                <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"
                  src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(72).webp">
              </div>
              <div className="w-full p-1 md:p-2">
                <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"
                  src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp">
              </div>
            </div> */}
            {/* <div className="flex flex-wrap w-1/2">
              <div className="w-full p-1 md:p-2">
                <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"
                  src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(74).webp">
              </div>
              <div className="w-1/2 p-1 md:p-2">
                <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"
                  src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(75).webp">
              </div>
              <div className="w-1/2 p-1 md:p-2">
                <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"
                  src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(77).webp">
              </div>
            </div> */}
            </div>
          </div>
        </div>
      </section>
    )
  }

  return (
    <>
      <div className="mt-5 mb-24 flex items-end justify-center gap-4  max-w-2xl" >
        <div className=" rounded-lg bg-white shadow-lg" >
          <div className="p-3">
            <div className="flex items-center justify-between">
              <ShareAction />
              <div className="flex items-center space-x-2">
                <Image src={publisher?.avatar}
                  alt={`${publisher?.avatar}-avatar`}
                  width={48}
                  height={48}
                  className="bg-coolGray-500 border-coolGray-700 rounded-full object-cover object-center shadow-sm" />
              </div>
              <div className='w-10'>
                <BookmarkIcon className="h-5 w-5 text-gray-400 hover:text-gray-600" />
              </div>
            </div>
          </div>
          <div className='px-4 pb-4'>
            {renderPostSource({ postType, postFile, postLinkTitle, postLinkContent, postLink, postYoutube, postFileName, fund_data, postLinkImage, post_share, publisher, photo_multi, globalWidth })}
            {renderGalaryImage(photo_multi)}
          </div>
          <div className='p-4'>
            <div className="flex items-center justify-between">
              <h2 className="text-base font-bold leading-none">
                {publisher?.name}
              </h2>
              <div className='flex tems-center justify-between gap-4'>
                <ChatIcon width={24} className="text-gray-500"/>
                <HeartIcon width={24} className="text-gray-500"/>
              </div>
            </div>
            <p
              className="my-2 text-sm text-gray-700"
              dangerouslySetInnerHTML={{ __html: postText }}
            ></p>
            <span className="inline-block text-gray-500 text-xs leading-3">
              {postType === POST_TYPE.PROFILE_COVER_PICTURE && <span>Cập nhật ảnh bìa -</span>} 
              {postType === POST_TYPE.PROFILE_PICTURE && <span>Cập nhật ảnh đại diện -</span>} 
              {postType === POST_TYPE.POST && fund_data?.id && <span>Tạo sự kiện ủng hộ -</span>} 
              {convertUnixTimeToRelative(time)}
            </span>

          </div>
           
        </div>
        
      
      </div>
     
    </>
  );
};

export default CardFeed;
