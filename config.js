const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false"  
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md-3";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website =process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "Made With LOVE!" 


global.devs = "" // Developer Contacts
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "" //"https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";

global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_10_04_03_28_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOCxcbiAgICAgICAgNjAsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTUzLFxuICAgICAgICAxNDAsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMCxcbiAgICAgICAgOTYsXG4gICAgICAgIDIsXG4gICAgICAgIDQ4LFxuICAgICAgICAxNzgsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMjAzLFxuICAgICAgICAyNTIsXG4gICAgICAgIDEwNCxcbiAgICAgICAgNjYsXG4gICAgICAgIDg4LFxuICAgICAgICA0MixcbiAgICAgICAgMTcyLFxuICAgICAgICA3MyxcbiAgICAgICAgMjEwLFxuICAgICAgICAxMjksXG4gICAgICAgIDExMCxcbiAgICAgICAgODAsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTg2LFxuICAgICAgICA0NCxcbiAgICAgICAgMTQzLFxuICAgICAgICAyMTEsXG4gICAgICAgIDcyLFxuICAgICAgICAyOSxcbiAgICAgICAgMTExXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDcwLFxuICAgICAgICAxMzgsXG4gICAgICAgIDI1LFxuICAgICAgICAxNzQsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMjI2LFxuICAgICAgICAyMDIsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMjM1LFxuICAgICAgICAxNDksXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTI2LFxuICAgICAgICAxOTYsXG4gICAgICAgIDY4LFxuICAgICAgICAyMjksXG4gICAgICAgIDQ3LFxuICAgICAgICAxNTAsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMjYsXG4gICAgICAgIDM5LFxuICAgICAgICA4MixcbiAgICAgICAgMTQ5LFxuICAgICAgICAxMjIsXG4gICAgICAgIDU3LFxuICAgICAgICAxMjcsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTY5LFxuICAgICAgICA4MSxcbiAgICAgICAgMTgsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTgyLFxuICAgICAgICA5M1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTEyLFxuICAgICAgICA1OSxcbiAgICAgICAgMjU0LFxuICAgICAgICAxMixcbiAgICAgICAgMjMzLFxuICAgICAgICAxMTcsXG4gICAgICAgIDg3LFxuICAgICAgICA0OCxcbiAgICAgICAgMzgsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTAzLFxuICAgICAgICA2NixcbiAgICAgICAgNTgsXG4gICAgICAgIDIwMixcbiAgICAgICAgNjIsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjAwLFxuICAgICAgICAxMDEsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTU5LFxuICAgICAgICAxNjcsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTkxLFxuICAgICAgICAxNzksXG4gICAgICAgIDIxNCxcbiAgICAgICAgNDUsXG4gICAgICAgIDI0LFxuICAgICAgICAxMTksXG4gICAgICAgIDI5LFxuICAgICAgICAyMTAsXG4gICAgICAgIDUwLFxuICAgICAgICAxMTdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTIzLFxuICAgICAgICAxMTIsXG4gICAgICAgIDI1LFxuICAgICAgICAxNzIsXG4gICAgICAgIDExLFxuICAgICAgICAxNjMsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTgwLFxuICAgICAgICAxOTIsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMjE4LFxuICAgICAgICAxMzIsXG4gICAgICAgIDExMixcbiAgICAgICAgMTk2LFxuICAgICAgICAyNDEsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxMzMsXG4gICAgICAgIDU4LFxuICAgICAgICA5NixcbiAgICAgICAgMTUyLFxuICAgICAgICAxMjYsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMjEyLFxuICAgICAgICAxNzMsXG4gICAgICAgIDQ1LFxuICAgICAgICAyMDMsXG4gICAgICAgIDEyNSxcbiAgICAgICAgOTAsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMjQsXG4gICAgICAgIDEwNFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTg0LFxuICAgICAgICA2OSxcbiAgICAgICAgMTU4LFxuICAgICAgICAxMzQsXG4gICAgICAgIDg4LFxuICAgICAgICAxMjIsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMjMzLFxuICAgICAgICAxMzEsXG4gICAgICAgIDQ2LFxuICAgICAgICAxMzcsXG4gICAgICAgIDcxLFxuICAgICAgICAxODEsXG4gICAgICAgIDMzLFxuICAgICAgICA2NixcbiAgICAgICAgMTUsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTIxLFxuICAgICAgICA4NCxcbiAgICAgICAgMTgwLFxuICAgICAgICAxMSxcbiAgICAgICAgMjUwLFxuICAgICAgICAxODUsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMzksXG4gICAgICAgIDI0MCxcbiAgICAgICAgMzQsXG4gICAgICAgIDE2MixcbiAgICAgICAgMjQsXG4gICAgICAgIDE4MyxcbiAgICAgICAgNjgsXG4gICAgICAgIDEwM1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNDcsXG4gICAgICAgIDIxMSxcbiAgICAgICAgOTEsXG4gICAgICAgIDEzMixcbiAgICAgICAgNTQsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTksXG4gICAgICAgIDEwMixcbiAgICAgICAgODksXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTMyLFxuICAgICAgICAyMDQsXG4gICAgICAgIDc3LFxuICAgICAgICA1NSxcbiAgICAgICAgMTUxLFxuICAgICAgICA0MixcbiAgICAgICAgMTg3LFxuICAgICAgICA3MCxcbiAgICAgICAgMjMwLFxuICAgICAgICAzMSxcbiAgICAgICAgOTYsXG4gICAgICAgIDEyNixcbiAgICAgICAgMjM3LFxuICAgICAgICA2OSxcbiAgICAgICAgMjIwLFxuICAgICAgICAyMDUsXG4gICAgICAgIDQ3LFxuICAgICAgICAyNyxcbiAgICAgICAgMTAsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMjMwLFxuICAgICAgICAxMDFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAxLFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICA5NixcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICA4NlxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAzNixcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDUsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgODIsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDExMixcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgNjRcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA2MSxcbiAgICAgICAgMjEzLFxuICAgICAgICAxNzIsXG4gICAgICAgIDYwLFxuICAgICAgICAxMjksXG4gICAgICAgIDExOCxcbiAgICAgICAgMTE0LFxuICAgICAgICA3MSxcbiAgICAgICAgNzIsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMjA1LFxuICAgICAgICA3OSxcbiAgICAgICAgOTEsXG4gICAgICAgIDM0LFxuICAgICAgICAzMixcbiAgICAgICAgMTczLFxuICAgICAgICAxNjQsXG4gICAgICAgIDkxLFxuICAgICAgICAxMzgsXG4gICAgICAgIDI1LFxuICAgICAgICAxMjUsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMjksXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTMsXG4gICAgICAgIDE3NyxcbiAgICAgICAgNixcbiAgICAgICAgMjM2LFxuICAgICAgICAyMjIsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMjUwLFxuICAgICAgICAxODgsXG4gICAgICAgIDQ3LFxuICAgICAgICAxMixcbiAgICAgICAgMjI1LFxuICAgICAgICAyMzMsXG4gICAgICAgIDgwLFxuICAgICAgICAyNTAsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTY5LFxuICAgICAgICA4MSxcbiAgICAgICAgMTgwLFxuICAgICAgICAxOTgsXG4gICAgICAgIDQ4LFxuICAgICAgICAxOTMsXG4gICAgICAgIDEwLFxuICAgICAgICAyMTUsXG4gICAgICAgIDc5LFxuICAgICAgICAxNDEsXG4gICAgICAgIDIxNyxcbiAgICAgICAgOTMsXG4gICAgICAgIDE0NyxcbiAgICAgICAgOTUsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMjMzLFxuICAgICAgICAyNSxcbiAgICAgICAgMjgsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTczLFxuICAgICAgICAyMyxcbiAgICAgICAgMTkyLFxuICAgICAgICA4NSxcbiAgICAgICAgMzMsXG4gICAgICAgIDEzNlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMjM5LFxuICBcImFkdlNlY3JldEtleVwiOiBcIllWOVVQOC9ZZjAyOHc1VWthVWY0Qk5IRmVBYVI5Sjdqbyt3Nmx5K0JTNDA9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiOTIzMjIzMzgxNTc5QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCIxMUI5RTJFODcyN0EyMDI3OTk2MjdCODdGMTE3QjhGM1wiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3NDMxNTYyNjVcbiAgICB9LFxuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI5MjMyMjMzODE1NzlAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIkMxQjJBMkEyMDJBMEYwOEI4RTNCN0MwM0VDRUMyNjM3XCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTc0MzE1NjI2NVxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJWT0lxTE8tb1NvbTJHU3lXMGhMS1R3XCIsXG4gIFwicGhvbmVJZFwiOiBcImE5OTZlNjQ0LTU5NjUtNDc1ZC1hMzUzLWQ5ZDE1NDU3NTZhOVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMjgsXG4gICAgICAxOTAsXG4gICAgICA2MSxcbiAgICAgIDcsXG4gICAgICAxNjgsXG4gICAgICAyMjYsXG4gICAgICAyNDcsXG4gICAgICAxOCxcbiAgICAgIDE5NCxcbiAgICAgIDIxMyxcbiAgICAgIDExNSxcbiAgICAgIDIwNyxcbiAgICAgIDE0NyxcbiAgICAgIDE0LFxuICAgICAgMTMyLFxuICAgICAgMTg2LFxuICAgICAgMTMwLFxuICAgICAgMTE4LFxuICAgICAgMjMyLFxuICAgICAgMVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IGZhbHNlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjQ0LFxuICAgICAgMTQzLFxuICAgICAgMTI5LFxuICAgICAgMTg5LFxuICAgICAgNjYsXG4gICAgICAxMDIsXG4gICAgICAyMDEsXG4gICAgICAxMDgsXG4gICAgICAxMDEsXG4gICAgICAxMTAsXG4gICAgICA2MyxcbiAgICAgIDE0LFxuICAgICAgMTY4LFxuICAgICAgNDksXG4gICAgICAxNDQsXG4gICAgICAyNixcbiAgICAgIDE2LFxuICAgICAgMjM1LFxuICAgICAgMTU0LFxuICAgICAgMTczXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDUHlKN2ZZRUVLUG9tYjhHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCIzQnhXSisxQVRUN01HbVd1eHA3cGVhUkRGaFA3eXBRVTJGKzBFdTl1OXo4PVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcInFOc2xPM1pVRzRyUG5WRTducmc3THdYK2x3WnBxRXZseDNFWUUwWUdaSkFrQ1FDTW9lT1JGcjZrWU5QVDgyMzdvTHNpc2YydGhzRG9tQS8ydlR3SUFBPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIjBiTEE4ajFkYlZtbE51WFRJNGxlcmFxTXJBNGR4U3diWXBoY1pMZlQyZ2NwL1h4bVN4RlVySm5aU2J6ZE1wempsbURjMnJWRFVpaDRrVC82b2J2SGp3PT1cIlxuICB9LFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTIzMjIzMzgxNTc5OjJAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjEwNzUyMDY2NDMwOTg3OToyQGxpZFwiLFxuICAgIFwibmFtZVwiOiBcIvCfpbDwn6WwXCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5MjMyMjMzODE1Nzk6MkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICA4NixcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAyMixcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDYzXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3NDMxNTYyNjIsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFLMGNcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUswYy5qc29uIjogIntcImtleURhdGFcIjpcInZBZHZXNitlUURqWW4wdlZOK0RMaDJBWUJkd3ZZazc1c1NBMEZWbzhDV3M9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTMyMjk5Mjg5MixcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzQzMTU2MjYzMDEwXCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "3.0.1-developement",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-MD",
  ownername:process.env.OWNER_NAME|| "Suhail:Shy<3",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
