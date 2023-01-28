const fetch = require('node-fetch')
const _$ = require('cheerio')
const cheerio = require('cheerio');
					const _url = require('url')
					const _axios = require('axios')
					const _math = require('mathjs')
		
					async function zippy(u) {
						console.log('⏳  ' + `Get Page From : ${u}`)
						const zippy = await _axios({ method: 'GET', url: u }).then(res => res.data).catch(err => false)
						console.log('✅  ' + 'Done')
						const $ = _$.load(zippy)
						if (!$('#dlbutton').length) {
							return { error: true, message: $('#lrbox>div').first().text().trim() }
						}
						console.log('⏳  ' + 'Fetch Link Download...')
						const filename0 = $('title').text()
						const filename = filename0.replace('Zippyshare.com - ', '')
						const url = _url.parse($('.flagen').attr('href'), true)
						const urlori = _url.parse(u)
						const key = url.query['key']
						let time;
						let dlurl;
						try {
							time = /var b = ([0-9]+);$/gm.exec($('#dlbutton').next().html())[1]
							dlurl = urlori.protocol + '//' + urlori.hostname + '/d/' + key + '/' + (2 + 2 * 2 + parseInt(time)) + '3/DOWNLOAD'
						} catch (error) {
							time = _math.evaluate(/ \+ \((.*)\) \+ /gm.exec($('#dlbutton').next().html())[1])
							dlurl = urlori.protocol + '//' + urlori.hostname + '/d/' + key + '/' + (time) + '/DOWNLOAD'
						}
						let mime;
						if (filename.includes(".mp4")) mime = 'video/mp4';
						if (filename.includes(".mkv")) mime = 'video/mkv';
						if (filename.includes(".mp3")) mime = 'audio/mp3';
						if (filename.includes(".pdf")) mime = 'application/pdf';
						if (filename.includes(".zip")) mime = 'application/zip';
						if (filename.includes(".rar")) mime = 'application/vnd.rar';
						if (filename.includes(".apk")) mime = 'application/vnd.android.package-archive';
						let data = await fetch(dlurl)
  						if (data.status !== 200) throw data.statusText
						console.log('✅  ' + 'Done')
						return { error: false, url: dlurl, name: filename, mimetype: mime }
					}
					async function zippy2(url) { 
						let res = await _axios(url)
						  const html = res.data
						  const $ = cheerio.load(html)
					
					
						  const dlbutton = $("body").text().match(/href = "([^"]+)" \+ \(([^)]+)\) \+ "([^"]+)/);
					
						  const folder = dlbutton[1]
					
						  const filename0 = dlbutton[3]
						  const filename = dlbutton[3].replace('/', '')
						  const mathChall = eval(dlbutton[2])
					
						 const result = `${url.match(/https?:\/\/[^/]+/)[0]}${folder}${mathChall}${filename0}`
						 
											let mime;
											if (filename.includes(".mp4")) mime = 'video/mp4';
											if (filename.includes(".mkv")) mime = 'video/mkv';
											if (filename.includes(".mp3")) mime = 'audio/mp3';
											if (filename.includes(".pdf")) mime = 'application/pdf';
											if (filename.includes(".zip")) mime = 'application/zip';
											if (filename.includes(".rar")) mime = 'application/vnd.rar';
											if (filename.includes(".apk")) mime = 'application/vnd.android.package-archive';
					
							return { url: result, filename: filename, mimetype: mime }
					   }

					module.exports = { zippy, zippy2 }