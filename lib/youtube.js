const ytdl = require('ytdl-core');
const yts = require('yt-search');
const axios = require('axios');
const ytIdRegex = /(?:youtube\.com\/\S*(?:(?:\/e(?:mbed))?\/|watch\?(?:\S*?&?v\=))|youtu\.be\/)([a-zA-Z0-9_-]{6,11})/
 
      /**
      * Checks if it is yt link
      * @param {string|URL} url youtube url
      * @returns Returns true if the given YouTube URL.
      */
     const isYTUrl = (url) => {
         return ytIdRegex.test(url)
     }
 
     /**
      * VideoID from url
      * @param {string|URL} url to get videoID
      * @returns 
      */
     const getVideoID = (url) => {
         if (!isYTUrl(url)) throw new Error('is not YouTube URL')
         return ytIdRegex.exec(url)[1]
     }

function bytesToSize(bytes) {
    return new Promise((resolve, reject) => {
        const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
        if (bytes === 0) return 'n/a';
        const i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)), 10);
        if (i === 0) resolve(`${bytes} ${sizes[i]}`);
        resolve(`${(bytes / (1024 ** i)).toFixed(1)} ${sizes[i]}`);
    });
  };

function ytMp4(url) {
    return new Promise(async(resolve, reject) => {
        ytdl.getInfo(url).then(async(getUrl) => {
            let result = [];
            for(let i = 0; i < getUrl.formats.length; i++) {
                let item = getUrl.formats[i];
                if (item.container == 'mp4' && item.hasVideo == true && item.hasAudio == false) {
                    let { qualityLabel, contentLength } = item;
                    let bytes = await bytesToSize(contentLength);
                    result[i] = {
                        video: item.url,
                        quality: qualityLabel,
                        size: bytes,
                        sizeF: contentLength
                    };
                };
            };
            let resultFix = result.filter(x => x.video != undefined && x.size != undefined && x.sizeF != undefined && x.quality != undefined) 
            let tiny = await axios.get(`https://tinyurl.com/api-create.php?url=${resultFix[0].video}`);
            let tinyUrl = tiny.data;
            let title = getUrl.videoDetails.title;
            let desc = getUrl.videoDetails.description;
            let views = getUrl.videoDetails.viewCount;
            let likes = getUrl.videoDetails.likes;
            let dislike = getUrl.videoDetails.dislikes;
            let channel = getUrl.videoDetails.ownerChannelName;
            let uploadDate = getUrl.videoDetails.uploadDate;
            let thumb = getUrl.player_response.microformat.playerMicroformatRenderer.thumbnail.thumbnails[0].url;
            resolve({
                title,
                result: tinyUrl,
                quality: resultFix[0].quality,
                size: resultFix[0].size,
                sizeF: resultFix[0].sizeF,
                thumb,
                views,
                likes,
                dislike,
                channel,
                uploadDate,
                desc
            });
        }).catch(reject);
    });
};

function ytMp4v2(url) {
    return new Promise(async(resolve, reject) => {
        ytdl.getInfo(url).then(async(getUrl) => {
            let result = [];
            for(let i = 0; i < getUrl.formats.length; i++) {
                let item = getUrl.formats[i];
                if (item.container == 'mp4' && item.hasVideo == true && item.hasAudio == false) {
                    let { qualityLabel, contentLength } = item;
                    let bytes = await bytesToSize(contentLength);
                    result[i] = {
                        video: item.url,
                        quality: qualityLabel,
                        size: bytes,
                        sizeF: contentLength
                    };
                };
            };
            let resultFix = result.filter(x => x.video != undefined && x.size != undefined && x.sizeF != undefined && x.quality != undefined) 
            let tiny = await axios.get(`https://tinyurl.com/api-create.php?url=${resultFix[0].video}`);
            let tinyUrl = tiny.data;
            let title = getUrl.videoDetails.title;
            let desc = getUrl.videoDetails.description;
            let views = getUrl.videoDetails.viewCount;
            let likes = getUrl.videoDetails.likes;
            let dislike = getUrl.videoDetails.dislikes;
            let channel = getUrl.videoDetails.ownerChannelName;
            let uploadDate = getUrl.videoDetails.uploadDate;
            let thumb = getUrl.player_response.microformat.playerMicroformatRenderer.thumbnail.thumbnails[0].url;
            resolve({ result: {
                title,
                thumb,
                views,
                likes,
                dislike,
                channel,
                uploadDate,
                desc
            },
                result_array: resultFix
            });
        }).catch(reject);
    });
};
function ytMp3(url) {
    return new Promise((resolve, reject) => {
        ytdl.getInfo(url).then(async(getUrl) => {
            let result = [];
            for(let i = 0; i < getUrl.formats.length; i++) {
                let item = getUrl.formats[i];
                if (item.mimeType == 'audio/webm; codecs=\"opus\"') {
                    let { qualityLabel, contentLength } = item;
                    let bytes = await bytesToSize(contentLength);
                    result[i] = {
                        audio: item.url,
                        size: bytes,
                        sizeF: contentLength

                    };
                };
            };
            let resultFix = result.filter(x => x.audio != undefined && x.size != undefined && x.sizeF != undefined) 
            let tiny = await axios.get(`https://tinyurl.com/api-create.php?url=${resultFix[0].audio}`);
            let tinyUrl = tiny.data;
            let title = getUrl.videoDetails.title;
            let desc = getUrl.videoDetails.description;
            let views = getUrl.videoDetails.viewCount;
            let likes = getUrl.videoDetails.likes;
            let dislike = getUrl.videoDetails.dislikes;
            let channel = getUrl.videoDetails.ownerChannelName;
            let uploadDate = getUrl.videoDetails.uploadDate;
            let thumb = getUrl.player_response.microformat.playerMicroformatRenderer.thumbnail.thumbnails[0].url;
            resolve({
                title,
                result: tinyUrl,
                size: resultFix[0].size,
                sizeF: resultFix[0].sizeF,
                thumb,
                views,
                likes,
                dislike,
                channel,
                uploadDate,
                desc
            });
        }).catch(reject);
    });
}

function ytMp3v2(url) {
    return new Promise((resolve, reject) => {
        ytdl.getInfo(url).then(async(getUrl) => {
            let result = [];
            for(let i = 0; i < getUrl.formats.length; i++) {
                let item = getUrl.formats[i];
                if (item.mimeType.includes('audio') && item.hasVideo == false && item.hasAudio == true) {
                    let { audioBitrate, contentLength } = item;
                    let bytes = await bytesToSize(contentLength);
                    result[i] = {
                        audio: item.url,
                        audioBitrate: audioBitrate,
                        size: bytes,
                        sizeF: contentLength

                    };
                };
            };
            let resultFix = result.filter(x => x.audio != undefined && x.audioBitrate != undefined && x.size != undefined && x.sizeF != undefined) 
            let tiny = await axios.get(`https://tinyurl.com/api-create.php?url=${resultFix[0].audio}`);
            let tinyUrl = tiny.data;
            let title = getUrl.videoDetails.title;
            let desc = getUrl.videoDetails.description;
            let views = getUrl.videoDetails.viewCount;
            let likes = getUrl.videoDetails.likes;
            let dislike = getUrl.videoDetails.dislikes;
            let channel = getUrl.videoDetails.ownerChannelName;
            let uploadDate = getUrl.videoDetails.uploadDate;
            let thumb = getUrl.player_response.microformat.playerMicroformatRenderer.thumbnail.thumbnails[0].url;
            resolve({ result: {
                title,
                thumb,
                views,
                likes,
                dislike,
                channel,
                uploadDate,
                desc
            },
                result_array: resultFix
            });
        }).catch(reject);
    });
}
function ytPlay(query) {
    return new Promise((resolve, reject) => {
        yts(query).then(async(getData) => {
            let result = getData.videos.slice( 0, 5 );
            let url = [];
            for (let i = 0; i < result.length; i++) {
                url.push(result[i].url);
            }
            let random = url[Math.floor(Math.random() * url.length)];
            let getAudio = await ytMp3(random);
            resolve(getAudio);
        }).catch(reject);
    });
};

module.exports = { ytMp4, ytMp4v2, ytMp3v2, ytMp3, ytPlay };
