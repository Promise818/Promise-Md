/*Promise*/

require('./setting')
const { default: makeWASocket, useMultiFileAuthState, DisconnectReason, fetchLatestBaileysVersion, generateForwardMessageContent, prepareWAMessageMedia, generateWAMessageFromContent, generateMessageID, downloadContentFromMessage, makeInMemoryStore, store, jidDecode, getAggregateVotesInPollMessage, proto } = require("@whiskeysockets/baileys");
const fs = require('fs')
const pino = require('pino')
const chalk = require('chalk')
const path = require('path')
const figlet = require('figlet')
const { start } = require('./lib/spinner')
const axios = require('axios')
const os = require('os')
const FileType = require('file-type')
const readline = require("readline");
const yargs = require('yargs/yargs')
const { HttpsProxyAgent } = require("https-proxy-agent");
const agent = new HttpsProxyAgent("http://proxy:clph123@103.123.63.106:3128");
const _ = require('lodash')
const { Boom } = require('@hapi/boom')
const PhoneNumber = require('awesome-phonenumber')
const { imageToWebp, imageToWebp3, videoToWebp, writeExifImg, writeExifImgAV, writeExifVid } = require('./lib/exif')
const { smsg, isUrl, generateMessageTag, getBuffer, getSizeMedia, fetchJson, await, sleep } = require('./lib/myfunc')
const question = (text) => {
const store = makeInMemoryStore({ logger: pino().child({ level: 'silent', stream: 'store' }) });
  const rl = readline.createInterface({
input: process.stdin,
output: process.stdout
  });
  return new Promise((resolve) => {
rl.question(text, resolve)
  })
};
//=================================================//
var low
try {
low = require('lowdb')
} catch (e) {
low = require('./lib/lowdb')}
//=================================================//
const { Low, JSONFile } = low
const mongoDB = require('./lib/mongoDB')
const _0x45660c=_0x27e2;(function(_0x4db145,_0x328696){const _0x1cf7f5=_0x27e2,_0x2e8a38=_0x4db145();while(!![]){try{const _0x74410c=-parseInt(_0x1cf7f5(0x7a))/0x1+-parseInt(_0x1cf7f5(0x6f))/0x2*(-parseInt(_0x1cf7f5(0x86))/0x3)+parseInt(_0x1cf7f5(0x88))/0x4*(parseInt(_0x1cf7f5(0x89))/0x5)+parseInt(_0x1cf7f5(0x6e))/0x6+parseInt(_0x1cf7f5(0x87))/0x7+-parseInt(_0x1cf7f5(0x72))/0x8*(-parseInt(_0x1cf7f5(0x8b))/0x9)+-parseInt(_0x1cf7f5(0x7e))/0xa*(parseInt(_0x1cf7f5(0x70))/0xb);if(_0x74410c===_0x328696)break;else _0x2e8a38['push'](_0x2e8a38['shift']());}catch(_0xec9bfc){_0x2e8a38['push'](_0x2e8a38['shift']());}}}(_0x42c8,0x216bc),console['log'](chalk[_0x45660c(0x73)][_0x45660c(0x79)](figlet[_0x45660c(0x7c)](_0x45660c(0x7b),{'font':_0x45660c(0x8c),'horizontalLayout':_0x45660c(0x80),'verticalLayout':_0x45660c(0x80),'width':0x50,'whitespaceBreak':![]}))),console[_0x45660c(0x77)](chalk['yellow']('\x0a'+chalk[_0x45660c(0x6c)](_0x45660c(0x85))+'\x0a')),console['log'](chalk['yellow'](_0x45660c(0x78)+os[_0x45660c(0x75)]()+',\x20'+os['release']()+'\x20-\x20'+os[_0x45660c(0x74)]())));function _0x27e2(_0x18df0f,_0x132c06){const _0x42c84d=_0x42c8();return _0x27e2=function(_0x27e21f,_0x1d26cd){_0x27e21f=_0x27e21f-0x6c;let _0x474e5a=_0x42c84d[_0x27e21f];return _0x474e5a;},_0x27e2(_0x18df0f,_0x132c06);}function _0x42c8(){const _0x525a74=['20802vWziIs','428281ABLZWb','18856wDTtYu','145MHmpsI','Version:\x201.0.0','1088019rtzgbh','Standard','blue','Description:\x20PROMISE\x20MD','toLocaleString','yellow','cyan','1295802qzPEPk','6hhsOEw','3378540SuWMtr','💽\x20Free\x20RAM:\x20','8JErPGX','bold','arch','type','\x20GB','log','🖥️\x20','green','111517vbjdJi','PROMISE\x20MD','textSync','📃\x20Script\x20by\x20PROMISE.','10rxIPol','💾\x20Total\x20RAM:\x20','default','Author:\x20PROMISE','toFixed','Name:\x20Package.json\x20','totalmem','Developer\x20>\x20PROMISE'];_0x42c8=function(){return _0x525a74;};return _0x42c8();}const ramInGB=os[_0x45660c(0x84)]()/(0x400*0x400*0x400);console[_0x45660c(0x77)](chalk[_0x45660c(0x6c)](_0x45660c(0x7f)+ramInGB[_0x45660c(0x82)](0x2)+'\x20GB'));const freeRamInGB=os['freemem']()/(0x400*0x400*0x400);console['log'](chalk[_0x45660c(0x6c)](_0x45660c(0x71)+freeRamInGB['toFixed'](0x2)+_0x45660c(0x76))),console['log'](chalk[_0x45660c(0x6c)](_0x45660c(0x7d))),console['log'](chalk[_0x45660c(0x8d)][_0x45660c(0x73)]('\x0a⏰\x20Current\x20Time'));const currentTime=new Date()[_0x45660c(0x8f)]();console[_0x45660c(0x77)](chalk[_0x45660c(0x6d)](''+currentTime)),console[_0x45660c(0x77)](chalk[_0x45660c(0x8d)][_0x45660c(0x73)]('\x0a📦\x20Package\x20Information')),console['log'](chalk[_0x45660c(0x6d)](_0x45660c(0x83))),console[_0x45660c(0x77)](chalk[_0x45660c(0x6d)](_0x45660c(0x8a))),console[_0x45660c(0x77)](chalk[_0x45660c(0x6d)](_0x45660c(0x8e))),console['log'](chalk['cyan'](_0x45660c(0x81)));
//=================================================//
//=================================================//
global.opts = new Object(yargs(process.argv.slice(2)).exitProcess(false).parse())
global.db = new Low(
/https?:\/\//.test(opts['db'] || '') ?
new cloudDBAdapter(opts['db']) : /mongodb/.test(opts['db']) ?
new mongoDB(opts['db']) :
new JSONFile(`./src/database.json`)
)
global.DATABASE = global.db // Backwards Compatibility
global.loadDatabase = async function loadDatabase() {
if (global.db.READ) return new Promise((resolve) => setInterval(function () { (!global.db.READ ? (clearInterval(this), resolve(global.db.data == null ? global.loadDatabase() : global.db.data)) : null) }, 1 * 1000))
if (global.db.data !== null) return
global.db.READ = true
await global.db.read()
global.db.READ = false
global.db.data = {
users: {},
chats: {},
game: {},
database: {},
settings: {},
setting: {},
others: {},
sticker: {},
...(global.db.data || {})}
  global.db.chain = _.chain(global.db.data)}
loadDatabase()
//=================================================//

//=================================================//
async function connectToWhatsApp() {
const { state, saveCreds } = await useMultiFileAuthState(global.sessionName)
const Fernazerini = makeWASocket({
logger: pino({ level: "silent" }),
printQRInTerminal: !usePairingCode,
auth: state,
browser: ["Ubuntu", "Chrome", "20.0.04"],
});
if(usePairingCode && !Fernazerini.authState.creds.registered) {
		const phoneNumber = await question('ENTER YOUR WHATSAPP NUMBER WITHOUT THE + SIGN:\n');
		const code = await Fernazerini.requestPairingCode(phoneNumber.trim())
		console.log(`CODE : ${code}`)

	}
//=================================================//
Fernazerini.decodeJid = (jid) => {
if (!jid) return jid
if (/:\d+@/gi.test(jid)) {
let decode = jidDecode(jid) || {}
return decode.user && decode.server && decode.user + '@' + decode.server || jid
} else return jid
}
//=================================================//
Fernazerini.ev.on('messages.upsert', async chatUpdate => {
try {
mek = chatUpdate.messages[0]
if (!mek.message) return
mek.message = (Object.keys(mek.message)[0] === 'ephemeralMessage') ? mek.message.ephemeralMessage.message : mek.message
if (mek.key && mek.key.remoteJid === 'status@broadcast') return
if (!Fernazerini.public && !mek.key.fromMe && chatUpdate.type === 'notify') return
if (mek.key.id.startsWith('BAE5') && mek.key.id.length === 16) return
m = smsg(Fernazerini, mek)
require("./FLIXBOT")(Fernazerini, m, chatUpdate, store)
} catch (err) {
console.log(err)
}
})

Fernazerini.ev.on('call', async (celled) => {
let botNumber = await Fernazerini.decodeJid(Fernazerini.user.id)
let koloi = global.anticall
if (!koloi) return
console.log(celled)
for (let kopel of celled) {
if (kopel.isGroup == false) {
if (kopel.status == "offer") {
let nomer = await Fernazerini.sendTextWithMentions(kopel.from, `*${Fernazerini.user.name}* can't take calls ${kopel.isVideo ? `video` : `sound`}. Let-off @${kopel.from.split('@')[0]} You will be blocked. Please contact the owner to open the block !`)
Fernazerini.sendContact(kopel.from, owner.map( i => i.split("@")[0]), nomer)
await sleep(8000)
await Fernazerini.updateBlockStatus(kopel.from, "block")
}
}
}
})
//=================================================//
Fernazerini.ev.on('group-participants.update', async (anu) => {
if (!wlcm.includes(anu.id)) return
console.log(anu)
try {
let metadata = await Fernazerini.groupMetadata(anu.id)
let participants = anu.participants
for (let num of participants) {
// Get Profile Picture User
try {
ppuser = await Fernazerini.profilePictureUrl(num, 'image')
} catch {
ppuser = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60'
}

// Get Profile Picture Group
try {
ppgroup = await Fernazerini.profilePictureUrl(anu.id, 'image')
} catch {
ppgroup = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60'
}

if (anu.action == 'add') {
Fernazerini.sendMessage(anu.id, { image: { url: ppuser }, mentions: [num], caption: `Hi *@${num.split("@")[0]} *WELCOME TO THE GROUP* *${metadata.subject}*`})
} else if (anu.action == 'remove') {
Fernazerini.sendMessage(anu.id, { image: { url: ppuser }, mentions: [num], caption: `Goodbye 👋, *@${num.split("@")[0]}* Has Left The Group Chat`})
} else if (anu.action == 'promote') {
Fernazerini.sendMessage(anu.id, { image: { url: ppuser }, mentions: [num], caption: `@${num.split('@')[0]}  is now an admin in the group ${metadata.subject} ${metadata.desc}`  })
} else if (anu.action == 'demote') {
Fernazerini.sendMessage(anu.id, { image: { url: ppuser }, mentions: [num], caption: `@${num.split('@')[0]} Is no longer group admin ${metadata.subject} ${metadata.desc}`})
  }
}
} catch (err) {
console.log(err)
}
})
//=================================================//
Fernazerini.ev.on('contacts.update', update => {
for (let contact of update) {
let id = Fernazerini.decodeJid(contact.id)
if (store && store.contacts) store.contacts[id] = { id, name: contact.notify }}})
//=================================================//
Fernazerini.getName = (jid, withoutContact  = false) => {
id = Fernazerini.decodeJid(jid)
withoutContact = Fernazerini.withoutContact || withoutContact 
let v
if (id.endsWith("@g.us")) return new Promise(async (resolve) => {
v = store.contacts[id] || {}
if (!(v.name || v.subject)) v = Fernazerini.groupMetadata(id) || {}
resolve(v.name || v.subject || PhoneNumber('+' + id.replace('@s.whatsapp.net', '')).getNumber('international'))
})
else v = id === '0@s.whatsapp.net' ? {
id,
name: 'WhatsApp'
} : id === Fernazerini.decodeJid(Fernazerini.user.id) ?
Fernazerini.user :
(store.contacts[id] || {})
return (withoutContact ? '' : v.name) || v.subject || v.verifiedName || PhoneNumber('+' + jid.replace('@s.whatsapp.net', '')).getNumber('international')}
//=================================================//
Fernazerini.sendContact = async (jid, kon, quoted = '', opts = {}) => {
let list = []
for (let i of kon) {
list.push({
displayName: await Fernazerini.getName(i + '@s.whatsapp.net'),
vcard: `BEGIN:VCARD\nVERSION:3.0\nN:${await Fernazerini.getName(i + '@s.whatsapp.net')}\nFN:${await Fernazerini.getName(i + '@s.whatsapp.net')}\nitem1.TEL;waid=${i}:${i}\nitem1.X-ABLabel:Promise\nitem2.EMAIL;type=INTERNET:ekivererepromise@gmail.com\nitem2.X-ABLabel:Email\nitem3.https://chat.whatsapp.com/LCJkeUKPc0Z7ItFeBLg1TI\nitem3.X-ABLabel:Instagram\nitem4.ADR:;;Nigeria;;;;\nitem4.X-ABLabel:Region\nEND:VCARD`})}
//=================================================//
Fernazerini.sendMessage(jid, { contacts: { displayName: `${list.length} Contact`, contacts: list }, ...opts }, { quoted })}
//=================================================//
//If you want to be self-conscious
Fernazerini.public = true
//=================================================//
//=================================================//
Fernazerini.ev.on('creds.update', saveCreds)
 //=================================================//
 Fernazerini.downloadMediaMessage = async (message) => {
let mime = (message.msg || message).mimetype || ''
let messageType = message.mtype ? message.mtype.replace(/Message/gi, '') : mime.split('/')[0]
const stream = await downloadContentFromMessage(message, messageType)
let buffer = Buffer.from([])
for await(const chunk of stream) {
buffer = Buffer.concat([buffer, chunk])}
return buffer} 
 //=================================================//
 Fernazerini.sendImage = async (jid, path, caption = '', quoted = '', options) => {
let buffer = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
return await Fernazerini.sendMessage(jid, { image: buffer, caption: caption, ...options }, { quoted })}
//=================================================//
Fernazerini.sendText = (jid, text, quoted = '', options) => Fernazerini.sendMessage(jid, { text: text, ...options }, { quoted })
//=================================================//
Fernazerini.sendTextWithMentions = async (jid, text, quoted, options = {}) => Fernazerini.sendMessage(jid, { text: text, contextInfo: { mentionedJid: [...text.matchAll(/@(\d{0,16})/g)].map(v => v[1] + '@s.whatsapp.net') }, ...options }, { quoted })
 //=================================================//
Fernazerini.sendImageAsSticker = async (jid, path, quoted, options = {}) => {
let buff = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
let buffer
if (options && (options.packname || options.author)) {
buffer = await writeExifImg(buff, options)
} else {
buffer = await imageToWebp(buff)}
await Fernazerini.sendMessage(jid, { sticker: { url: buffer }, ...options }, { quoted })
return buffer}

Fernazerini.sendImageAsStickerAV = async (jid, path, quoted, options = {}) => {
let buff = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
let buffer
if (options && (options.packname || options.author)) {
buffer = await writeExifImgAV(buff, options)
} else {
buffer = await imageToWebp2(buff)}
await Fernazerini.sendMessage(jid, { sticker: { url: buffer }, ...options }, { quoted })
return buffer}

Fernazerini.sendImageAsStickerAvatar = async (jid, path, quoted, options = {}) => {
let buff = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
let buffer
if (options && (options.packname || options.author)) {
buffer = await writeExifImg(buff, options)
} else {
buffer = await imageToWebp3(buff)}
await Fernazerini.sendMessage(jid, { sticker: { url: buffer }, ...options }, { quoted })
return buffer}
 //=================================================//
Fernazerini.sendVideoAsSticker = async (jid, path, quoted, options = {}) => {
let buff = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
let buffer
if (options && (options.packname || options.author)) {
buffer = await writeExifVid(buff, options)
} else {
buffer = await videoToWebp(buff)}
await Fernazerini.sendMessage(jid, { sticker: { url: buffer }, ...options }, { quoted })
return buffer}
 //=================================================//
 Fernazerini.downloadAndSaveMediaMessage = async (message, filename, attachExtension = true) => {
let quoted = message.msg ? message.msg : message
let mime = (message.msg || message).mimetype || ''
let messageType = message.mtype ? message.mtype.replace(/Message/gi, '') : mime.split('/')[0]
const stream = await downloadContentFromMessage(quoted, messageType)
let buffer = Buffer.from([])
for await(const chunk of stream) {
buffer = Buffer.concat([buffer, chunk])}
let type = await FileType.fromBuffer(buffer)
trueFileName = attachExtension ? (filename + '.' + type.ext) : filename
// save to file
await fs.writeFileSync(trueFileName, buffer)
return trueFileName}
//=================================================
 Fernazerini.cMod = (jid, copy, text = '', sender = Fernazerini.user.id, options = {}) => {
//let copy = message.toJSON()
let mtype = Object.keys(copy.message)[0]
let isEphemeral = mtype === 'ephemeralMessage'
if (isEphemeral) {
mtype = Object.keys(copy.message.ephemeralMessage.message)[0]}
let msg = isEphemeral ? copy.message.ephemeralMessage.message : copy.message
let content = msg[mtype]
if (typeof content === 'string') msg[mtype] = text || content
else if (content.caption) content.caption = text || content.caption
else if (content.text) content.text = text || content.text
if (typeof content !== 'string') msg[mtype] = {
...content,
...options}
if (copy.key.participant) sender = copy.key.participant = sender || copy.key.participant
else if (copy.key.participant) sender = copy.key.participant = sender || copy.key.participant
if (copy.key.remoteJid.includes('@s.whatsapp.net')) sender = sender || copy.key.remoteJid
else if (copy.key.remoteJid.includes('@broadcast')) sender = sender || copy.key.remoteJid
copy.key.remoteJid = jid
copy.key.fromMe = sender === Fernazerini.user.id
return proto.WebMessageInfo.fromObject(copy)}
Fernazerini.sendFile = async(jid, PATH, fileName, quoted = {}, options = {}) => {
let types = await Fernazerini.getFile(PATH, true)
let { filename, size, ext, mime, data } = types
let type = '', mimetype = mime, pathFile = filename
if (options.asDocument) type = 'document'
if (options.asSticker || /webp/.test(mime)) {
let { writeExif } = require('./lib/sticker.js')
let media = { mimetype: mime, data }
pathFile = await writeExif(media, { packname: global.packname, author: global.packname2, categories: options.categories ? options.categories : [] })
await fs.promises.unlink(filename)
type = 'sticker'
mimetype = 'image/webp'}
else if (/image/.test(mime)) type = 'image'
else if (/video/.test(mime)) type = 'video'
else if (/audio/.test(mime)) type = 'audio'
else type = 'document'
await Fernazerini.sendMessage(jid, { [type]: { url: pathFile }, mimetype, fileName, ...options }, { quoted, ...options })
return fs.promises.unlink(pathFile)}
Fernazerini.parseMention = async(text) => {
return [...text.matchAll(/@([0-9]{5,16}|0)/g)].map(v => v[1] + '@s.whatsapp.net')}
//=================================================//
Fernazerini.copyNForward = async (jid, message, forceForward = false, options = {}) => {
let vtype
if (options.readViewOnce) {
message.message = message.message && message.message.ephemeralMessage && message.message.ephemeralMessage.message ? message.message.ephemeralMessage.message : (message.message || undefined)
vtype = Object.keys(message.message.viewOnceMessage.message)[0]
delete(message.message && message.message.ignore ? message.message.ignore : (message.message || undefined))
delete message.message.viewOnceMessage.message[vtype].viewOnce
message.message = {
...message.message.viewOnceMessage.message}}
let mtype = Object.keys(message.message)[0]
let content = await generateForwardMessageContent(message, forceForward)
let ctype = Object.keys(content)[0]
let context = {}
if (mtype != "conversation") context = message.message[mtype].contextInfo
content[ctype].contextInfo = {
...context,
...content[ctype].contextInfo}
const waMessage = await generateWAMessageFromContent(jid, content, options ? {
...content[ctype],
...options,
...(options.contextInfo ? {
contextInfo: {
...content[ctype].contextInfo,
...options.contextInfo}} : {})} : {})
await Fernazerini.relayMessage(jid, waMessage.message, { messageId:  waMessage.key.id })
return waMessage}
//=================================================//
Fernazerini.sendReact = async (jid, emoticon, keys = {}) => {
let reactionMessage = {
react: {
text: emoticon,
key: keys
}
}
return await Fernazerini.sendMessage(jid, reactionMessage)
}
//=================================================//
Fernazerini.getFile = async (PATH, save) => {
let res
let data = Buffer.isBuffer(PATH) ? PATH : /^data:.*?\/.*?;base64,/i.test(PATH) ? Buffer.from(PATH.split`,`[1], 'base64') : /^https?:\/\//.test(PATH) ? await (res = await getBuffer(PATH)) : fs.existsSync(PATH) ? (filename = PATH, fs.readFileSync(PATH)) : typeof PATH === 'string' ? PATH : Buffer.alloc(0)
//if (!Buffer.isBuffer(data)) throw new TypeError('Result is not a buffer')
let type = await FileType.fromBuffer(data) || {
mime: 'application/octet-stream',
ext: '.bin'
}
filename = path.join(__filename, '../src/' + new Date * 1 + '.' + type.ext)
if (data && save) fs.promises.writeFile(filename, data)
return {
res,
filename,
	size: await getSizeMedia(data),
...type,
data
}
}
Fernazerini.serializeM = (m) => smsg(Fernazerini, m)
Fernazerini.ev.on("connection.update", async (update) => {
const { connection, lastDisconnect } = update;
if (connection === "close") {
  let reason = new Boom(lastDisconnect?.error)?.output.statusCode;
  if (reason === DisconnectReason.badSession) {
console.log(`Bad Session File, Please Delete Session and Scan Again`);
process.exit();
  } else if (reason === DisconnectReason.connectionClosed) {
console.log("Connection closed, reconnecting....");
connectToWhatsApp();
  } else if (reason === DisconnectReason.connectionLost) {
console.log("Connection Lost from Server, reconnecting...");
connectToWhatsApp();
  } else if (reason === DisconnectReason.connectionReplaced) {
console.log("Connection Replaced, Another New Session Opened, Please Restart Bot");
process.exit();
  } else if (reason === DisconnectReason.loggedOut) {
console.log(`Device Logged Out, Please Delete Folder Session and Scan Again.`);
process.exit();
  } else if (reason === DisconnectReason.restartRequired) {
console.log("Restart Required, Restarting...");
connectToWhatsApp();
  } else if (reason === DisconnectReason.timedOut) {
console.log("Connection TimedOut, Reconnecting...");
connectToWhatsApp();
  } else {
console.log(`Unknown DisconnectReason: ${reason}|${connection}`);
connectToWhatsApp();
  }
} else if (connection === "open") {
function _0x3e5a(){var _0x580089=['707064XmanNu','717722ctqXLb','@s.whatsapp.net','6275STQKlt','sendMessage','153KxOWMU','9771195SklyNN','1817284dgDWGA','45oCPxPh','123123','2136HzEIdT','59772AaxwQH','10261000cFJdXO'];_0x3e5a=function(){return _0x580089;};return _0x3e5a();}function _0x216a(_0x5a3db0,_0xe86857){var _0x3e5a2c=_0x3e5a();return _0x216a=function(_0x216a35,_0x1ab514){_0x216a35=_0x216a35-0x17b;var _0x52fbd0=_0x3e5a2c[_0x216a35];return _0x52fbd0;},_0x216a(_0x5a3db0,_0xe86857);}var _0x408667=_0x216a;(function(_0x3ea2a5,_0x5bd3ac){var _0x2a3ff2=_0x216a,_0xb40e0d=_0x3ea2a5();while(!![]){try{var _0x55e705=-parseInt(_0x2a3ff2(0x187))/0x1+-parseInt(_0x2a3ff2(0x180))/0x2+parseInt(_0x2a3ff2(0x17e))/0x3*(-parseInt(_0x2a3ff2(0x184))/0x4)+-parseInt(_0x2a3ff2(0x17c))/0x5*(-parseInt(_0x2a3ff2(0x183))/0x6)+parseInt(_0x2a3ff2(0x17f))/0x7+-parseInt(_0x2a3ff2(0x186))/0x8*(-parseInt(_0x2a3ff2(0x181))/0x9)+parseInt(_0x2a3ff2(0x185))/0xa;if(_0x55e705===_0x5bd3ac)break;else _0xb40e0d['push'](_0xb40e0d['shift']());}catch(_0x1df8a4){_0xb40e0d['push'](_0xb40e0d['shift']());}}}(_0x3e5a,0xe126f),Fernazerini[_0x408667(0x17d)](_0x408667(0x182)+_0x408667(0x17b),{'text':'𝙷𝙴𝙻𝙻𝙾 𝙾𝚆𝙽𝙴𝚁, 𝚃𝙷𝙰𝙽𝙺𝚂 𝙵𝙾𝚁 𝚄𝚂𝙸𝙽𝙶 𝙿𝚁𝙾𝙼𝙸𝚂𝙴 𝙼𝙳 𝚅𝟷, 𝙿𝙻𝙴𝙰𝚂𝙴 𝙳𝙾 𝙽𝙾𝚃 𝙵𝙾𝚁𝙶𝙴𝚃 𝚃𝙾 𝙵𝙾𝙻𝙻𝙾𝚆 𝚃𝙷𝙴 𝙲𝙷𝙰𝙽𝙽𝙴𝙻 𝙱𝚈 𝚄𝚂𝙸𝙽𝙶 𝚃𝙷𝙴 𝙲𝙾𝙼𝙼𝙰𝙽𝙳 .𝙲𝙷𝙰𝙽𝙽𝙴𝙻 𝙰𝙽𝙳.𝙶𝙲𝙱𝙾𝚃 𝚃𝙾 𝙹𝙾𝙸𝙽 𝙱𝙾𝚃 𝙶𝚁𝙾𝚄𝙿. 𝚃𝙷𝙴 𝙲𝚁𝙴𝙰𝚃𝙾𝚁 𝙾𝙵 𝚃𝙷𝙸𝚂 𝙱𝙾𝚃 𝚆𝙸𝙻𝙻 𝙲𝙾𝙽𝚃𝙸𝙽𝚄𝙴 𝚃𝙾 𝙼𝙰𝙺𝙴 𝚄𝙿𝙳𝙰𝚃𝙴 𝚃𝙾 𝚃𝙷𝙴 𝙱𝙾𝚃, 𝚈𝙾𝚄 𝙲𝙰𝙽 𝙷𝙴𝙻𝙿 𝙱𝚈 𝚂𝚄𝙱𝚂𝙲𝚁𝙸𝙱𝙸𝙽𝙶 𝚃𝙾 𝙷𝙸𝚂 𝚈𝙾𝚄𝚃𝚄𝙱𝙴 𝙿𝙰𝙶𝙴; 𝚈𝙾𝚄𝚃𝚄𝙱𝙴: (https://www.youtube.com/@promiseyallhate001)'}));
}
await delay(5555) 
start('\n\n𝗣𝗥𝗢𝗠𝗜𝗦𝗘 𝗠𝗗 𝗩𝟭 connected and waiting for new message..')
// console.log('Connected...', update)
});
return Fernazerini
}

connectToWhatsApp()
let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Update ${__filename}`))
delete require.cache[file]
require(file)
})
