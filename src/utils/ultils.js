import {IMAGE_TYPE, POST_FILE_TYPE} from './constants';

function timeSince(timeStamp) {
  const now = new Date();
  const secondsPast = (now.getTime() - timeStamp) / 1000;
  if (secondsPast < 60) {
    return `${parseInt(secondsPast)} giây`;
  }
  if (secondsPast < 3600) {
    return `${parseInt(secondsPast / 60)} phút`;
  }
  if (secondsPast <= 86400) {
    return `${parseInt(secondsPast / 3600)} giờ`;
  }
  if (secondsPast > 86400) {
    const day = timeStamp.getDate();
    const month = timeStamp.getMonth() + 1;
    const year =
      timeStamp.getFullYear() === now.getFullYear()
        ? ''
        : `, ${timeStamp.getFullYear()}`;
    return `${day} tháng ${month}${year}`;
  }
}

function timeDifference(previous) {
  const now = new Date();
  const current = now.getTime();
  const msPerMinute = 60 * 1000;
  const msPerHour = msPerMinute * 60;
  const msPerDay = msPerHour * 24;
  const msPerMonth = msPerDay * 30;
  const msPerYear = msPerDay * 365;

  const elapsed = current - previous;

  if (elapsed < msPerMinute) {
    return `${Math.round(elapsed / 1000)} giây`;
  }

  if (elapsed < msPerHour) {
    return `${Math.round(elapsed / msPerMinute)} phút`;
  }

  if (elapsed < msPerDay) {
    return `${Math.round(elapsed / msPerHour)} giờ`;
  }

  if (elapsed < msPerMonth) {
    return `${Math.round(elapsed / msPerDay)} days ago`;
  }

  if (elapsed < msPerYear) {
    return `${Math.round(elapsed / msPerMonth)} months ago`;
  }

  return `${Math.round(elapsed / msPerYear)} years ago`;
}

export function convertUnixTimeToRelative(unixTime) {
  const date = timeSince(new Date(unixTime * 1000));
  return date;
}

export function getLinkYoutue(code) {
  return `https://www.youtube.com/watch?v=${code}`;
}

export function getPostTypeByFile(fileName) {
  if(!fileName) return POST_FILE_TYPE.VIDEO
  const split = fileName.split(".")
  const ext = split[split.length - 1];
  if (IMAGE_TYPE.includes(String(ext).toLowerCase())) {
    return POST_FILE_TYPE.IMAGE
  } else if ('mp3'.includes(String(ext).toLowerCase())) {
    return POST_FILE_TYPE.AUDIO
  }
  return POST_FILE_TYPE.VIDEO
}