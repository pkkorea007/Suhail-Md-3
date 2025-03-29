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

global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_04_49_03_29_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjMyLFxuICAgICAgICAzMSxcbiAgICAgICAgNzMsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTE1LFxuICAgICAgICAyMSxcbiAgICAgICAgMTg4LFxuICAgICAgICA2MCxcbiAgICAgICAgMTYwLFxuICAgICAgICA0NCxcbiAgICAgICAgMSxcbiAgICAgICAgMjUzLFxuICAgICAgICA2NSxcbiAgICAgICAgMTgxLFxuICAgICAgICAyNDEsXG4gICAgICAgIDEwLFxuICAgICAgICAyNTEsXG4gICAgICAgIDM5LFxuICAgICAgICAyMzksXG4gICAgICAgIDU0LFxuICAgICAgICAxNjcsXG4gICAgICAgIDE1NixcbiAgICAgICAgMjUyLFxuICAgICAgICA3NixcbiAgICAgICAgMTgyLFxuICAgICAgICAyMCxcbiAgICAgICAgMTc1LFxuICAgICAgICAxNDEsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTEzLFxuICAgICAgICAxODEsXG4gICAgICAgIDkzXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIzNixcbiAgICAgICAgMTgwLFxuICAgICAgICA2MSxcbiAgICAgICAgMTYxLFxuICAgICAgICAxNjMsXG4gICAgICAgIDE4OSxcbiAgICAgICAgOTUsXG4gICAgICAgIDMxLFxuICAgICAgICAyNCxcbiAgICAgICAgMTQ1LFxuICAgICAgICAzMSxcbiAgICAgICAgMTAzLFxuICAgICAgICAxNDQsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTgyLFxuICAgICAgICAyNTUsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTE3LFxuICAgICAgICAxMzgsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMzMsXG4gICAgICAgIDIxMixcbiAgICAgICAgOTcsXG4gICAgICAgIDgwLFxuICAgICAgICA4MCxcbiAgICAgICAgMTYyLFxuICAgICAgICAxNTgsXG4gICAgICAgIDcwLFxuICAgICAgICA4MyxcbiAgICAgICAgMTUxLFxuICAgICAgICAyMDIsXG4gICAgICAgIDIyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMDQsXG4gICAgICAgIDEwNCxcbiAgICAgICAgNjUsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTY3LFxuICAgICAgICA1MSxcbiAgICAgICAgMjIxLFxuICAgICAgICA3NyxcbiAgICAgICAgMjM1LFxuICAgICAgICAxMDMsXG4gICAgICAgIDE4MSxcbiAgICAgICAgNTQsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTc2LFxuICAgICAgICAxNDUsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMjM3LFxuICAgICAgICAyNCxcbiAgICAgICAgMjExLFxuICAgICAgICAyMjYsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMjUwLFxuICAgICAgICAyNixcbiAgICAgICAgMTM1LFxuICAgICAgICAxNDcsXG4gICAgICAgIDQ0LFxuICAgICAgICAxNjYsXG4gICAgICAgIDU0LFxuICAgICAgICA2NyxcbiAgICAgICAgMTYyLFxuICAgICAgICAyMjQsXG4gICAgICAgIDg4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEwLFxuICAgICAgICAxMyxcbiAgICAgICAgMjQ2LFxuICAgICAgICAyMDMsXG4gICAgICAgIDUsXG4gICAgICAgIDcsXG4gICAgICAgIDI1MCxcbiAgICAgICAgODAsXG4gICAgICAgIDk3LFxuICAgICAgICAxMTMsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTc4LFxuICAgICAgICAxNDAsXG4gICAgICAgIDE5LFxuICAgICAgICAxMTEsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTYzLFxuICAgICAgICAyMTIsXG4gICAgICAgIDYwLFxuICAgICAgICA2MixcbiAgICAgICAgMjcsXG4gICAgICAgIDkwLFxuICAgICAgICAyMjYsXG4gICAgICAgIDkwLFxuICAgICAgICAxOTksXG4gICAgICAgIDE0MyxcbiAgICAgICAgOTAsXG4gICAgICAgIDE3NixcbiAgICAgICAgMjQwLFxuICAgICAgICAyNTMsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTIwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDAsXG4gICAgICAgIDI0MSxcbiAgICAgICAgOTEsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTkzLFxuICAgICAgICAxMTgsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTksXG4gICAgICAgIDI2LFxuICAgICAgICAyMDgsXG4gICAgICAgIDEyMyxcbiAgICAgICAgNTIsXG4gICAgICAgIDE4NCxcbiAgICAgICAgODYsXG4gICAgICAgIDIxMCxcbiAgICAgICAgNTEsXG4gICAgICAgIDc2LFxuICAgICAgICAxNzYsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTY5LFxuICAgICAgICAxMDgsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjUzLFxuICAgICAgICAyMTMsXG4gICAgICAgIDY5LFxuICAgICAgICAxNjEsXG4gICAgICAgIDY1LFxuICAgICAgICAxLFxuICAgICAgICAxNDgsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTI4LFxuICAgICAgICA2N1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAzLFxuICAgICAgICAzMyxcbiAgICAgICAgNTIsXG4gICAgICAgIDIsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTQ4LFxuICAgICAgICAyNDAsXG4gICAgICAgIDkzLFxuICAgICAgICAyNTEsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTQxLFxuICAgICAgICAyMjMsXG4gICAgICAgIDE4MyxcbiAgICAgICAgNjksXG4gICAgICAgIDU4LFxuICAgICAgICAyMTksXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTgzLFxuICAgICAgICA1NSxcbiAgICAgICAgMTcwLFxuICAgICAgICAyMDcsXG4gICAgICAgIDM1LFxuICAgICAgICAxMDMsXG4gICAgICAgIDExMyxcbiAgICAgICAgMjA0LFxuICAgICAgICAyNTEsXG4gICAgICAgIDkzLFxuICAgICAgICAyMTAsXG4gICAgICAgIDgzLFxuICAgICAgICAxOTgsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTE2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIwOCxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICAyNixcbiAgICAgICAgICAyLFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAxNCxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICA5NFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgNDksXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgODlcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA1LFxuICAgICAgICA2OCxcbiAgICAgICAgMjM2LFxuICAgICAgICAxMjgsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTQwLFxuICAgICAgICA4MixcbiAgICAgICAgNCxcbiAgICAgICAgMzQsXG4gICAgICAgIDIwLFxuICAgICAgICAxNjQsXG4gICAgICAgIDIzOCxcbiAgICAgICAgNzcsXG4gICAgICAgIDQ0LFxuICAgICAgICAyMDEsXG4gICAgICAgIDcyLFxuICAgICAgICA0MCxcbiAgICAgICAgOCxcbiAgICAgICAgMTYxLFxuICAgICAgICAxNjMsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTcwLFxuICAgICAgICA3MyxcbiAgICAgICAgMTUwLFxuICAgICAgICAyLFxuICAgICAgICAxMDYsXG4gICAgICAgIDYyLFxuICAgICAgICAyMTUsXG4gICAgICAgIDYwLFxuICAgICAgICA0NSxcbiAgICAgICAgMTcyLFxuICAgICAgICA3NyxcbiAgICAgICAgNTksXG4gICAgICAgIDIzNyxcbiAgICAgICAgMjExLFxuICAgICAgICAxMjQsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTA5LFxuICAgICAgICAyMzEsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTExLFxuICAgICAgICAxMzgsXG4gICAgICAgIDE0OCxcbiAgICAgICAgNDYsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTQwLFxuICAgICAgICAxNTMsXG4gICAgICAgIDQsXG4gICAgICAgIDM1LFxuICAgICAgICA4MSxcbiAgICAgICAgMTUxLFxuICAgICAgICAxMzcsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTQyLFxuICAgICAgICAxMDYsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTI0LFxuICAgICAgICA5LFxuICAgICAgICAxNTIsXG4gICAgICAgIDc0LFxuICAgICAgICAxOTcsXG4gICAgICAgIDIyMSxcbiAgICAgICAgNTQsXG4gICAgICAgIDE0M1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTU2LFxuICBcImFkdlNlY3JldEtleVwiOiBcIkJPYkFMMDM2dVJFOElvWU9FUXkzYXRuVWh5VGJEWkdNNm5tdG5mNzdWTzQ9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIlluMGQ3VmVsUWZxYWJmZlN0X3hmS3dcIixcbiAgXCJwaG9uZUlkXCI6IFwiYTc1YTNlYjktN2E0Ny00YzE4LWJiNTQtMWYwNGEwNGJmZjE2XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIzNyxcbiAgICAgIDI0MSxcbiAgICAgIDIyOSxcbiAgICAgIDE5NyxcbiAgICAgIDExMyxcbiAgICAgIDEyNSxcbiAgICAgIDE3NixcbiAgICAgIDE2NyxcbiAgICAgIDMxLFxuICAgICAgMTIyLFxuICAgICAgMTQ2LFxuICAgICAgNjAsXG4gICAgICA5NixcbiAgICAgIDIxMCxcbiAgICAgIDE1OSxcbiAgICAgIDEzOCxcbiAgICAgIDIzMyxcbiAgICAgIDEwLFxuICAgICAgMjE3LFxuICAgICAgMjI4XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDI0NixcbiAgICAgIDM2LFxuICAgICAgMjUzLFxuICAgICAgMTMxLFxuICAgICAgMTc5LFxuICAgICAgMjU0LFxuICAgICAgMTQ2LFxuICAgICAgNixcbiAgICAgIDE0MCxcbiAgICAgIDEzNSxcbiAgICAgIDI0MixcbiAgICAgIDk4LFxuICAgICAgMTIzLFxuICAgICAgMjUyLFxuICAgICAgMTUwLFxuICAgICAgMjAxLFxuICAgICAgMjQwLFxuICAgICAgMjA2LFxuICAgICAgMTIsXG4gICAgICA3NlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJDUFJLOEdMQ1wiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTIzMDE3NjE2MTg2Ojk4QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwi4o6v6q+tzL3ZvtmA2YDZkdix2YjZgduM2YDZgNmR2YDZgM2s2YDZgOK3ttmA2YDNqtmA2YDht5rZgNmA4bek2YDZgOK3ttmA2YDZgNmAzaXZgNmA4bed2YDZgOG3p9mA2YDZgNmA2YDYs9mA2YDZgNiU2LHijq/qr63MvSA6KVxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcbtmVXCIsXG4gICAgXCJsaWRcIjogXCIzNTI0MDIyMzQ2NTcxNDo5OEBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNPdkIxZ3NRdi9lZHZ3WVlBaUFBS0FBPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcImVxaWlFalh3bUdOanp3KytzYUp6S2tDL1N3VGE3MVhXK0dIRXh1OTRlRUE9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiVmNMeC9UMHR6cGREWFJFbWd0TVBZQk1UTG9NcENPeTVIbGFtTjhqay8wM0M5OTJ2WlhLQllOUFc0OVNZVDh1SVRmeC9SUFUvdE85b0ZZY0xyaHdlQWc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwieG9pcjdsYXdDQm5OYjhJU2hITlRSeTh0ZFVUVVkyWVU1WXNNUW4yWFlaREp2akhJZjAxTTByOG1wMmF5V00rTE1HRkhYekhHaW5vbTJydzRtSVhuaVE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTIzMDE3NjE2MTg2Ojk4QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICA5OSxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDY0XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3NDMyMjM3NDgsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFKeVlcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUp5WS5qc29uIjogIntcImtleURhdGFcIjpcInphVUR3dEI4V1d1Y3Q4UmhjY3pxclo0aGU1YWRMZ3A5NkFhS0FJdy84RzQ9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MjQ0ODYxMjAsXCJjdXJyZW50SW5kZXhcIjoyLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIKfQ=="  // PUT your SESSION_ID 


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
