const chalk = require("chalk")
const fs = require("fs")

//owmner v card
global.owner = ['6283803489747'] //ur owner number
global.ownernomer = "62858928324766" //ur owner number2
global.ownername = "Jawa" //ur owner name
global.ytname = "YT: " //ur yt chanel name
global.socialm = "GitHub: " //ur github or insta name
global.location = "Indonesia" //ur location

//new
global.ownergc = "-"
global.botname = "Created By "
global.ownerNumber = ["@s.whatsapp.net"]
global.ownerweb = "https://www.youtube.com/@"
global.themeemoji = '🪀'
global.wm = ""
global.packname = "Sticker By"
global.author = "l\n\n"
global.prefa = ['','!','.','#','&']
global.sessionName = 'session'
global.tekspushkon = ''
global.keyopenai ='iigf'

global.limitawal = {
    premium: "Infinity",
    free: 5
}

//media target
global.thumb = { url: 'https://telegra.ph/file/79a665fa1ec570e1c74c7.jpg' }//ur thumb pic
global.defaultpp = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60' //default pp wa

//messages
global.mess = {
    selesai: 'Done !!', 
    owner: 'Khusus Owner',
    private: 'Khusus Private',
    group: 'Khusus Group',
    wait: 'Sebentar..',
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
