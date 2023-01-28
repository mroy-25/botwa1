const axios = require('axios');
const cheerio = require('cheerio');

const baseURL = 'https://www.mynimeku.com/'

function latestAnime(page) {
    return new Promise((resolve, reject) => {
        const pages =
    typeof page === "undefined" ? "" : page === "1" ? "" : `page/${page}`;
  const fullUrl = `${baseURL}${pages}`;
        axios.get(fullUrl).then(({ data }) => {
            let $ = cheerio.load(data)
            let result = []
            $('div.flexbox-item > a').each(function(i, e) {
                let title = $(e).attr('title')
                let link = $(e).attr('href')
                let status = $(e).find('div.flexbox-status').text()
                let thumb = $(e).find('div.flexbox-thumb > img').attr('data-src')
                let episode = $(e).find('div.flexbox-episode > span.eps').text().split(' ')[1]
                let type = $(e).find('div.flexbox-type').text()
                result.push({ title, status, episode, type, thumb, link })
            })
            resolve({page: fullUrl, result: result})
        }).catch(reject)
    })
}

function latestKomik(page) {
    return new Promise((resolve, reject) => {
        const pages =
    typeof page === "undefined" ? "" : page === "1" ? "" : `page/${page}`;
  const fullUrl = `${baseURL}${pages}`;
        axios.get(fullUrl).then(({ data }) => {
            let $ = cheerio.load(data)
            let result = []
            $('div.flexbox4-item').each(function(i, e) {
                let title = $(e).find('a').attr('title')
                let link = $(e).find('a').attr('href')
                let thumb = $(e).find('div.flexbox4-thumb > img').attr('data-src')
                let type = $(e).find('div.flexbox4-type').text()
                let status = $(e).find('div.flexbox-status').text()
                let chapter = $(e).find('ul.chapter > li').text().split(' ')[1]
                result.push({ title, status, chapter, type, thumb, link })
            })
            resolve({page: fullUrl, result: result})
        }).catch(reject)
    })
}

async function mynimeSearch2(query) {
    return new Promise((resolve, reject) => {
        axios.get('https://www.mynimeku.com/?s='+query).then(res => {
            const $ = cheerio.load(res.data)
            var hasil = []
$('div.flexbox2-item').each(function(a,b) {

link = $(b).find('a').attr('href')
title = $(b).find('a').attr('title')

hasil.push({title,link})
            })
            resolve(hasil)
        }).catch(reject)
    })
}

async function mynimeSearch(query) {
    return new Promise((resolve, reject) => {
    mynimeSearch2(query).then(async(res) => {
let result = [];
for(let i = 0; i < res.length; i++) {
    let title = res[i].title
    let urll = res[i].link
    if (urll.includes('series')) {
        result[i] = {
            title: title,
            link: urll
        };
    };
};
let resultFix = result.filter(x => x.title != undefined && x.link != undefined ) 
            resolve(resultFix)
        }).catch(reject)
    })
}
function detailAnime(url) {
    return new Promise((resolve, reject) => {
        axios.get(url).then(res => {
            const $ = cheerio.load(res.data)
            const _eps = []
            $('#episode_list > ul > li').each( function(a, b) {
                const link = $(b).find('div > div.flexeps-infoz > a').attr('href')
                const title = $(b).find('div > div.flexeps-infoz > a').attr('title')
                _eps.push({ link, title })
            })
            const result = {
                thumb: $('body > main > div > div > div.container > div.series-flex > div.series-flexleft > div.series-thumb > img').attr('src'),
                title: $('body > main > div > div > div.container > div.series-flex > div.series-flexleft > div.series-info > div.series-titlex > h2').text(),
                title_japanese: $('body > main > div > div > div.container > div.series-flex > div.series-flexleft > div.series-info > div.series-titlex > span').text(),
                rating: $('body > main > div > div > div.container > div.series-flex > div.series-flexleft > div.series-info > div.series-infoz.score > span').text(),
                musim: $('body > main > div > div > div.container > div.series-flex > div.series-flexleft > div.series-info > ul > li:nth-child(3) > span > a').text(),
                studio: $('body > main > div > div > div.container > div.series-flex > div.series-flexleft > div.series-info > ul > li:nth-child(4) > span > a').text(),
                episode: $('body > main > div > div > div.container > div.series-flex > div.series-flexleft > div.series-info > ul > li:nth-child(5) > span').text(),
                aired: $('body > main > div > div > div.container > div.series-flex > div.series-flexleft > div.series-info > ul > li:nth-child(6) > span').text(),
                genre: $('body > main > div > div > div.container > div.series-flex > div.series-flexright > div.series-genres').text(),
                synopsis: $('body > main > div > div > div.container > div.series-flex > div.series-flexright > div.series-synops > p').text(),
                episode_list: _eps
            }
            resolve(result)
        }).catch(reject)
    })
}
function downloadAnime(url) {
	return new Promise((resolve, reject) => {
		axios.get(url).then(({ data }) => {
			let $ = cheerio.load(data)
			let title = $('title').text()
			let thumb = $('meta[property="og:image"]').attr('content')
			let url = {};
$('#linklist').find('a').each(function (a,b){
let str = $(b).text().trim().split(' ');
let media = str[0]
let resolution = str[1]
if (!url[media]) url[media] = {};
url[media][resolution] = $(b).attr('href')
})
			resolve({ title, thumb, url })
		}).catch(reject)
	})
}

function downloadAnime2(url) {
	return new Promise((resolve, reject) => {
		axios.get(url).then(({ data }) => {
			let $ = cheerio.load(data)
			let title = $('title').text()
			let thumb = $('meta[property="og:image"]').attr('content')
			let url = {};
$('#linklist').find('a').each(function (a,b){
url[$(b).text().replace(' ', '_').replace('\n', '').split(' ')] = $(b).attr('href')
})
			resolve({ title, thumb, url })
		}).catch(reject)
	})
}
function downloadAnime3(url) {
	return new Promise((resolve, reject) => {
		axios.get(url).then(({ data }) => {
			let $ = cheerio.load(data)
			let title = $('title').text()
			let thumb = $('meta[property="og:image"]').attr('content')
			let url = $('#linklist').find('a').attr('href')
            resolve({ title, thumb, url })
		}).catch(reject)
	})
}

function downloadKomik(url) {
	return new Promise((resolve, reject) => {
		axios.get(url).then(({ data }) => {
			let $ = cheerio.load(data)
			let title = $('title').text()
			let result = []
			$('div.reader-area > p > img').get().map(v => result.push($(v).attr('src')))
			resolve({ title, result })
		}).catch(reject)
	})
}

module.exports = { latestAnime, latestKomik, mynimeSearch, detailAnime, downloadAnime,  downloadAnime2, downloadAnime3, downloadKomik }
