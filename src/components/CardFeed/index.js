import { HeartIcon } from '@heroicons/react/solid';

import { POST_TYPE } from '@/utils/constants';
import { convertUnixTimeToRelative } from '@/utils/ultils';

import VideoPlayer from '../video';
import styles from './CardFeed.module.css';

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
  } = props;

  const renderPostSource = ({ postType, postFile }) => {
    if (postType === POST_TYPE.POST) {
      if (postLink) {
        return <img src={postLinkImage} alt={postId} />;
      }
      if (postFile) {
        return (
          <VideoPlayer
            muted={false}
            setMuteVideo={() => null}
            postFile={postFile}
            postYoutube={postYoutube}
          />
        );
      }
    }
    if (postType === POST_TYPE.PROFILE_COVER_PICTURE) {
      return <img src={postFile} alt={postId} />;
    }
    if (postType === POST_TYPE.PROFILE_PICTURE) {
      return <img src={postFile} alt={postId} />;
    }
  };

  return (
    <>
      <div className="mt-5 mb-24 flex items-end justify-center gap-4">
        <div className=" rounded-lg bg-white shadow-lg">
          <div className="p-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <img
                  src={publisher?.avatar}
                  alt={`${publisher?.avatar}-avatar`}
                  className="bg-coolGray-500 border-coolGray-700 h-12 w-12 rounded-full object-cover object-center shadow-sm"
                />
                <div className="-space-y-1">
                  <h2 className="text-sm font-semibold leading-none">
                    {publisher?.name}
                  </h2>
                  <span className="text-coolGray-400 inline-block text-xs leading-none">
                    {convertUnixTimeToRelative(time)}
                  </span>
                </div>
              </div>
              <button title="Open options" type="button">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  className="h-5 w-5 fill-current"
                >
                  <path d="M256,144a64,64,0,1,0-64-64A64.072,64.072,0,0,0,256,144Zm0-96a32,32,0,1,1-32,32A32.036,32.036,0,0,1,256,48Z"></path>
                  <path d="M256,368a64,64,0,1,0,64,64A64.072,64.072,0,0,0,256,368Zm0,96a32,32,0,1,1,32-32A32.036,32.036,0,0,1,256,464Z"></path>
                  <path d="M256,192a64,64,0,1,0,64,64A64.072,64.072,0,0,0,256,192Zm0,96a32,32,0,1,1,32-32A32.036,32.036,0,0,1,256,288Z"></path>
                </svg>
              </button>
            </div>
            <p
              className="mb-4 text-base text-gray-700"
              dangerouslySetInnerHTML={{ __html: postText }}
            ></p>
          </div>
          {renderPostSource({ postType, postFile })}
          {postLinkTitle && (
            <b
              className=" mb-4 p-4 text-base text-black"
              dangerouslySetInnerHTML={{ __html: postLinkTitle }}
            ></b>
          )}
          {postLinkContent && (
            <p
              className="mb-4 p-4 text-base text-gray-600"
              dangerouslySetInnerHTML={{ __html: postLinkContent }}
            ></p>
          )}
        </div>
        <div className="flex flex-col">
          <div className={styles.wrapAction}>
            <span className={styles.wrapActionIcon}>
              <HeartIcon width={32} className=" text-black" />
            </span>
            <span className={styles.actionCount}>31</span>
          </div>
          <div className={styles.wrapAction}>
            <span className={styles.wrapActionIcon}>
              <HeartIcon width={32} className=" text-black" />
            </span>
            <span className={styles.actionCount}>31</span>
          </div>
          <div className={styles.wrapAction}>
            <span className={styles.wrapActionIcon}>
              <HeartIcon width={32} className=" text-black" />
            </span>
            <span className={styles.actionCount}>31</span>
          </div>
        </div>
      </div>
      {/* <div className="min-h-screen bg-gradient-to-br from-pink-200 via-pink-400 to-pink-600 pb-10">
        <div className="relative mx-auto mb-6 mt-16 w-full min-w-0 max-w-md break-words rounded-xl bg-white shadow-lg xl:max-w-2xl">
          <div className="card">
            <div className="card-header mx-4 -mt-6">
              <a
                href="https://www.material-tailwind.com"
                blur-shadow-image="true"
              >
                <img
                  className="w-auto rounded-lg"
                  src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
                  alt="tailwind-card-image"
                />
              </a>
            </div>
            <div className="card-body">
              <a href="#">
                <h4 className="font-semibold">Material Design 3</h4>
              </a>
              <p className="opcacity-60 mb-4">
                The time is now for it to be okay to be great. People in this
                world shun people for being great. For being a bright color. For
                standing out.
              </p>
              <button className="button button-pink" data-ripple-light="true">
                Read More
              </button>
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
};

export default CardFeed;
