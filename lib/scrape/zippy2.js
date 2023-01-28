
const cheerio = require("cheerio")
const axios = require("axios")
const zs = require("zs-extract")


async function zippy(url) {
    console.log('⏳  ' + `Get Page From : ${url}`)
    let result = await zs.extract(url)
    //let mime = await require('mime-types').lookup(result.download)
        const data = await axios({ method: 'GET', url: url }).then(res => res.data).catch(err => false)
        const $ = cheerio.load(data)
        const ho = $('#lrbox').text().replace(/\n/g, '')
        let size = ho.split('Size:')[1].split('Uploaded:')[0].trim()
        let dateupload = ho.split('Uploaded:')[1].split('          ')[0].trim()
        let download = result.download
        let filename = result.filename
    let mime;
    if (filename.includes(".mp4")) mime = 'video/mp4';
    if (filename.includes(".mkv")) mime = 'video/mkv';
    if (filename.includes(".mp3")) mime = 'audio/mp3';
    if (filename.includes(".pdf")) mime = 'application/pdf';
    if (filename.includes(".zip")) mime = 'application/zip';
    if (filename.includes(".rar")) mime = 'application/vnd.rar';
    if (filename.includes(".apk")) mime = 'application/vnd.android.package-archive';
    console.log('✅  ' + 'Done')
    return { url: download, name: filename, mimetype: mime, filesize: size, upload: dateupload }
}

async function zippy2(url) { 
    console.log('⏳  ' + `Get Page From : ${url}`)
    let res = await axios(url)
      const html = res.data
      const $ = cheerio.load(html)

      const dlbutton = $("body").text().match(/href = "([^"]+)" \+ \(([^)]+)\) \+ "([^"]+)/);
      const folder = dlbutton[1]
      const filename0 = dlbutton[3]
      const filename = dlbutton[3].replace('/', '')
      const mathChall = eval(dlbutton[2])
      const ho = $('#lrbox').text().replace(/\n/g, '')
      const size = ho.split('Size:')[1].split('Uploaded:')[0].trim()
      const dateupload = ho.split('Uploaded:')[1].split('          ')[0].trim()
     const download = `${url.match(/https?:\/\/[^/]+/)[0]}${folder}${mathChall}${filename0}`
     
    let mime;
    if (filename.includes(".mp4")) mime = 'video/mp4';
    if (filename.includes(".mkv")) mime = 'video/mkv';
    if (filename.includes(".mp3")) mime = 'audio/mp3';
    if (filename.includes(".pdf")) mime = 'application/pdf';
    if (filename.includes(".zip")) mime = 'application/zip';
    if (filename.includes(".rar")) mime = 'application/vnd.rar';
    if (filename.includes(".apk")) mime = 'application/vnd.android.package-archive';
    console.log('✅  ' + 'Done')
        return { url: download, name: filename, mimetype: mime, filesize: size, upload: dateupload }
   }

module.exports = { zippy, zippy2 }