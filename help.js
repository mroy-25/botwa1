
var monoSpace = '```'

exports.listmenu = (sender,prefix,pushname,tanggal,jam,runtime, readmore) => {
return`
━━━  ᚛ᷝ ͣ ͫㄥㄖ丂乇尺 ͭ ͪ᚜ͤ  ━━━

 ID : @${sender.split('@')[0]}
 Nama : ${pushname}

 BOT INFO
 Library : Baileys-MD
 Time : ${jam} WIB
 Date : ${tanggal}
 Uptime : ${runtime(process.uptime())}
 ${readmore}
  MAIN MENU
 • ${prefix}menu
 • ${prefix}ping
 • ${prefix}sticker
 • ${prefix}stickerwm
 • ${prefix}take
 • ${prefix}stickermeme
 • ${prefix}emoji
 • ${prefix}emojimix
 
 ANIME
 • ${prefix}anime
 • ${prefix}otakudesu
 • ${prefix}otakudesu-search
 • ${prefix}otakudesu-detail
 • ${prefix}otakudesu-download
 • ${prefix}samehadaku
 • ${prefix}samehadaku-search
 • ${prefix}samehadaku-detail
 • ${prefix}samehadaku-download
 • ${prefix}mynimeku
 • ${prefix}mynimeku-search
 • ${prefix}mynimeku-detail
 • ${prefix}mynimeku-download
 
  DOWNLOAD & MEDIA
 • ${prefix}ytsearch
 • ${prefix}ytmp3
 • ${prefix}ytmp4
 • ${prefix}play
 • ${prefix}tiktok
 • ${prefix}instagram
 • ${prefix}pinterest
 • ${prefix}google
 • ${prefix}googleimage
 • ${prefix}lirik
 • ${prefix}gdrive
 • ${prefix}mediafire
 • ${prefix}zippyshare

  TOOLS & CONVERT
 • ${prefix}tts
 • ${prefix}tourl
 • ${prefix}toimage
 • ${prefix}tovideo
 • ${prefix}toaudio
 • ${prefix}toptt
 • ${prefix}expand

  ONLY GROUP
 • ${prefix}delete
 • ${prefix}tagall
 • ${prefix}hidetag
 • ${prefix}grouplink
 • ${prefix}revokelink
 • ${prefix}group open/close
 • ${prefix}mute on/off
 • ${prefix}autosticker on/off
 • ${prefix}antilink on/off
 • ${prefix}nsfw on/off

  ONLY OWNER
 • ${prefix}self
 • ${prefix}public
 • ${prefix}setprefix
 • ${prefix}setexif
 • ${prefix}setppbot
 • ${prefix}join
 • ${prefix}leave
 • ${prefix}bc
 • ${prefix}banwa

  ANONYMOUS CHAT
 • ${prefix}anonymous
 • ${prefix}start
 • ${prefix}next
 • ${prefix}stop

  OTHER
 • ${prefix}nhentai
 • ${prefix}nhsearch
 • ${prefix}nhrandom
 `
}

exports.rulesBot = (prefix) =>{
return`*──「 RULES-BOT 」──*

1. Jangan spam bot. 
Sanksi: *WARN/SOFT BLOCK*

2. Jangan telepon bot.
Sanksi: *SOFT BLOCK*

3. Jangan mengejek bot.
Sanksi: *PERMANENT BLOCK*

Jika sudah paham rulesnya
Ketik *${prefix}menu* untuk memulai bot`
}

exports.donasiBot = (pushname,ucapanWaktu) =>{
return`──「 *THANKS FOR DONATE* 」──

Hi *${pushname}* ${ucapanWaktu} 👋🏻

*Payment pulsa*
Number: 081215524272
A/N: __

*Payment Dana*
Number: 081215524272
A/N: __

${monoSpace}Terimakasih untuk kamu yang sudah donasi untuk perkembangan bot ini ^_^${monoSpace}

──「 *THX FOR YOU* 」──`
}