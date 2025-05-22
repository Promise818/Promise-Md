const fs = require('fs')
const chalk = require('chalk')
const moment = require('moment-timezone')
const hariini = moment.tz('Asia/Jakarta').format('dddd, DD MMMM YYYY')	
const time = moment(Date.now()).tz('Asia/Jakarta').locale('id').format('HH:mm:ss z')
const Fichan = new require('./lib/functions')
const Styles = (text, style = 1) => {
  var xStr = 'abcdefghijklmnopqrstuvwxyz1234567890'.split('');
  var yStr = {
    1: 'ᴀʙᴄᴅᴇꜰɢʜɪᴊᴋʟᴍɴᴏᴘqʀꜱᴛᴜᴠᴡxʏᴢ1234567890'
  };
  var replacer = [];
  xStr.map((v, i) =>
    replacer.push({
      original: v,
      convert: yStr[style].split('')[i]
    })
  );
  var str = text.toLowerCase().split('');
  var output = [];
  str.map((v) => {
    const find = replacer.find((x) => x.original == v);
    find ? output.push(find.convert) : output.push(v);
  });
  return output.join('');
};

// SETTINGS IS BAILEYS \\
global.baileys = require("@whiskeysockets/baileys"); // Ae Jir
global.api = 'yn3mOtHb' 
global.logic = 'You are Ai';
global.linkapikey = 'https://api.betabotz.eu.org' // kalian ambil aja apikeynya di situ daftar gratis tar tinggal copy aja apikeynya
// abistu masukin ke yang global.api
// ====================== \\

/* SETTING IS PAIRING CODE 
True To Pairing Code
False To Scan QR
*/
global.usePairingCode = true // set to false is your want qr code
// ====================== \\

// SETTING IN SALURAN WHATSAPP \\
global.saluran = 'https://whatsapp.com/channel/0029VbAIrZ772WU5Foi3sR3E'
global.idsal = "https://whatsapp.com/channel/0029VbAIrZ772WU5Foi3sR3E"
// ====================== \\

// SETTING IN OWNER NAME AND NUMBER OWNER \\
global.ownername = 'ᏞϴᎡᎠ ᏢᎡϴᎷᏆՏᎬ' // Owner Name
global.owner = ['2348166546725'] // Nomor Owner
global.botname = '𝐏𝐑𝐎𝐌𝐈𝐒𝐄 𝐌𝐃 𝐕𝟏'// Nama Bot
// ====================== \\

// SETTING IN WM \\
global.packname = '𝐏𝐑𝐎𝐌𝐈𝐒𝐄 𝐌𝐃 𝐕𝟏'// Name Sticker
global.author = `ᏞϴᎡᎠ ᏢᎡϴᎷᏆՏᎬ` // Name Sticker 
global.hiasan = `	◦  ` // let it go, if you change, the error, you can't fix
global.prefa = ['','!','.',',','🐤','🗿'] // let it be
global.sessionName = 'inisession' // don't worry
global.sp = '⭔' // Do not
global.wlcm = []
global.wlcmm = []
global.versi = '1.0.0'
global.gris = '`'
global.wm = `𝐏𝐑𝐎𝐌𝐈𝐒𝐄 𝐌𝐃 𝐕𝟏` // Change if you like
global.namaStore = 'Promise Store' // Change if you like
global.ownerStore = 'Promise Store' // Change if you like
global.autobio = true // true if directly on false if off
global.autoread = false // True Jika Langsung On False Jika On
global.thumbnail = 'https://files.catbox.moe/tpm9o7.jpg' // Sure you cahnge if you like
// ====================== \\

// SETTING IN APIKEY CPANEL \\
global.footer2 = Styles('𝚂𝚃𝙸𝙲𝙺𝙴𝚁 𝙱𝚈 𝙻𝙾𝚁𝙳 𝙿𝚁𝙾𝙼𝙸𝚂𝙴')
global.domain = 'https://whatsapp.com/channel/0029VbAIrZ772WU5Foi3sR3E' // Fill in your domain
global.apikey2 = '_' // Fill in the Apikey of your hydropower plant
global.capikey2 = '_' // Fill in your Apikey PLTC
global.eggsnya = '15' // id eggs 
global.location = '1' // id location
// ====================== \\

// SETTING IN CREAT LINODE \\
global.apilinode = ''
global.apitokendo = ''
// ====================== \\

// SETTING AZA \\
global.bankowner = "Benjamin Ogheneovo"
global.banknumber = "8166546725"
global.bankname = "Opay"
// ================================ \\

// MESSAGE OTOMATISED \\
global.Func = Fichan
global.systemN = `*𝗣𝗥𝗢𝗠𝗜𝗦𝗘 𝗠𝗗*`
global.mess = {
    ban: Styles('𝐘𝐨𝐮 𝐡𝐚𝐯𝐞 𝐛𝐞𝐞𝐧 𝐛𝐚𝐧 𝐟𝐫𝐨𝐦 𝐮𝐬𝐢𝐧𝐠 𝐭𝐡𝐢𝐬 𝐛𝐨𝐭, 𝐢𝐟 𝐲𝐨𝐮 𝐭𝐡𝐢𝐧𝐤 𝐭𝐡𝐢𝐬 𝐢𝐬 𝐚 𝐦𝐢𝐬𝐭𝐚𝐤𝐞 𝐤𝐢𝐧𝐝𝐥𝐲 𝐜𝐨𝐧𝐭𝐚𝐜𝐭 𝐨𝐰𝐧𝐞𝐫'),
    badm: Styles('𝐁𝐨𝐭 𝐦𝐮𝐬𝐭 𝐛𝐞 𝐚𝐝𝐦𝐢𝐧 𝐭𝐨 𝐮𝐬𝐞 𝐭𝐡𝐢𝐬 𝐟𝐞𝐚𝐭𝐮𝐫𝐞'),
    regis: Styles(`𝐘𝐨𝐮 𝐚𝐫𝐞 𝐧𝐨𝐭 𝐲𝐞𝐭 𝐫𝐞𝐠𝐢𝐬𝐭𝐞𝐫𝐞𝐝 𝐭𝐨 𝐮𝐬𝐞 𝐭𝐡𝐢𝐬 𝐛𝐨𝐭, 𝐭𝐨 𝐬𝐭𝐚𝐫𝐭 𝐮𝐬𝐢𝐧𝐠 𝐛𝐨𝐭 𝐭𝐲𝐩𝐞 .𝐑𝐄𝐆𝐈𝐒𝐓𝐄𝐑`),
    premium: Styles('𝐓𝐡𝐢𝐬 𝐭𝐡𝐢𝐬 𝐟𝐞𝐚𝐭𝐮𝐫𝐞 𝐢𝐬 𝐨𝐧𝐥𝐲 𝐟𝐨𝐫 𝐏𝐫𝐞𝐦𝐢𝐮𝐦 𝐔𝐬𝐞𝐫𝐬'),
    search: Styles('𝐒𝐞𝐚𝐫𝐜𝐡𝐢𝐧𝐠....'),
    done: Styles('𝐃𝐨𝐧𝐞...'),
    success: Styles('𝐒𝐮𝐜𝐜𝐞𝐬𝐬𝐟𝐮𝐥....!!'),
    admin: Styles('𝐓𝐡𝐢𝐬 𝐟𝐞𝐚𝐭𝐮𝐫𝐞 𝐢𝐬 𝐨𝐧𝐥𝐲 𝐟𝐨𝐫 𝐆𝐫𝐨𝐮𝐩 𝐚𝐝𝐦𝐢𝐧𝐬'),
    owner: Styles('𝐎𝐰𝐧𝐞𝐫 𝐎𝐧𝐥𝐲'),
    group: Styles('𝐓𝐡𝐢𝐬 𝐜𝐨𝐦𝐦𝐚𝐧𝐝 𝐢𝐬 𝐨𝐧𝐥𝐲 𝐟𝐨𝐫 𝐆𝐫𝐨𝐮𝐩 𝐜𝐡𝐚𝐭'),
    private: Styles('𝐓𝐡𝐢𝐬 𝐜𝐨𝐦𝐦𝐚𝐧𝐝 𝐢𝐬 𝐨𝐧𝐥𝐲 𝐟𝐨𝐫 𝐏𝐫𝐢𝐯𝐚𝐭𝐞 𝐜𝐡𝐚𝐭'),
    bot: Styles('𝐁𝐨𝐭 𝐔𝐬𝐞𝐫 𝐎𝐧𝐥𝐲'),
    wait: Styles('𝐏𝐥𝐞𝐚𝐬𝐞 𝐰𝐚𝐢𝐭...'),
    getdata: Styles('𝐒𝐜𝐫𝐚𝐩𝐢𝐧𝐠 𝐌𝐞𝐭𝐚𝐝𝐚𝐭𝐚 . . .'),
    fail: Styles('𝐂𝐚𝐧𝐭 𝐆𝐞𝐭 𝐌𝐞𝐭𝐚𝐝𝐚𝐭𝐚!'),
    error: Styles('𝐓𝐡𝐞𝐫𝐞 𝐰𝐚𝐬 𝐚𝐧 𝐞𝐫𝐫𝐨𝐫'),
    errorF: Styles('𝐓𝐡𝐢𝐬 𝐅𝐞𝐚𝐭𝐮𝐫𝐞 𝐇𝐚𝐬 𝐄𝐫𝐫𝐨𝐫.'),
}
//=================================================//

// SETTING IN LIMITED \\
global.limitawal = {
    premium: "Infinity",
    free: 20
    }
//=================================================//
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})