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

global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_08_13_03_29_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTc2LFxuICAgICAgICAyMzEsXG4gICAgICAgIDYzLFxuICAgICAgICAyOSxcbiAgICAgICAgMTQsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMjQyLFxuICAgICAgICAyMzAsXG4gICAgICAgIDIzNixcbiAgICAgICAgOCxcbiAgICAgICAgMTgyLFxuICAgICAgICAyNCxcbiAgICAgICAgNCxcbiAgICAgICAgODAsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTY5LFxuICAgICAgICAxMSxcbiAgICAgICAgMjA5LFxuICAgICAgICAxODUsXG4gICAgICAgIDI0MSxcbiAgICAgICAgOTMsXG4gICAgICAgIDIyMSxcbiAgICAgICAgODYsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxMyxcbiAgICAgICAgMTgsXG4gICAgICAgIDI1MCxcbiAgICAgICAgNjUsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMjksXG4gICAgICAgIDk0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTYzLFxuICAgICAgICA3MSxcbiAgICAgICAgNSxcbiAgICAgICAgMTMyLFxuICAgICAgICAxNTYsXG4gICAgICAgIDk1LFxuICAgICAgICAyMDgsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTc4LFxuICAgICAgICAxNzAsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTkwLFxuICAgICAgICAxNDYsXG4gICAgICAgIDY4LFxuICAgICAgICAyMjcsXG4gICAgICAgIDc0LFxuICAgICAgICA4NixcbiAgICAgICAgMTQ5LFxuICAgICAgICA2LFxuICAgICAgICAyMDgsXG4gICAgICAgIDUzLFxuICAgICAgICA0OCxcbiAgICAgICAgMTU5LFxuICAgICAgICAyNSxcbiAgICAgICAgMjE5LFxuICAgICAgICA0NSxcbiAgICAgICAgNjQsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMCxcbiAgICAgICAgMjI5LFxuICAgICAgICAyMlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTUyLFxuICAgICAgICAzOSxcbiAgICAgICAgMTYzLFxuICAgICAgICAxOTQsXG4gICAgICAgIDExLFxuICAgICAgICA4MSxcbiAgICAgICAgMjE1LFxuICAgICAgICAyMzYsXG4gICAgICAgIDkyLFxuICAgICAgICAxNjUsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTUsXG4gICAgICAgIDEyMyxcbiAgICAgICAgNCxcbiAgICAgICAgMTkwLFxuICAgICAgICAxMTgsXG4gICAgICAgIDU4LFxuICAgICAgICAxNzgsXG4gICAgICAgIDEzNixcbiAgICAgICAgNDksXG4gICAgICAgIDIxMixcbiAgICAgICAgMTMwLFxuICAgICAgICA5LFxuICAgICAgICA1OSxcbiAgICAgICAgMjQzLFxuICAgICAgICAxNTAsXG4gICAgICAgIDI2LFxuICAgICAgICAxMzEsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTE3LFxuICAgICAgICA2LFxuICAgICAgICA4OFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNyxcbiAgICAgICAgNzAsXG4gICAgICAgIDk1LFxuICAgICAgICAxMTMsXG4gICAgICAgIDcyLFxuICAgICAgICAxOTMsXG4gICAgICAgIDE3LFxuICAgICAgICAxNTAsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTg3LFxuICAgICAgICAyNTUsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTgwLFxuICAgICAgICA5MyxcbiAgICAgICAgMTEwLFxuICAgICAgICAxODYsXG4gICAgICAgIDIsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTQxLFxuICAgICAgICAxNjcsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTI5LFxuICAgICAgICAxOTUsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTM2LFxuICAgICAgICAyMzIsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTY1LFxuICAgICAgICAyNDYsXG4gICAgICAgIDMwLFxuICAgICAgICAzMSxcbiAgICAgICAgNjRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE1MixcbiAgICAgICAgNDAsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTY1LFxuICAgICAgICAxODgsXG4gICAgICAgIDY5LFxuICAgICAgICAxMzksXG4gICAgICAgIDMxLFxuICAgICAgICAxNTYsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTMwLFxuICAgICAgICAxODAsXG4gICAgICAgIDU1LFxuICAgICAgICAyNixcbiAgICAgICAgMyxcbiAgICAgICAgMCxcbiAgICAgICAgOTAsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTkzLFxuICAgICAgICAxNDcsXG4gICAgICAgIDE5MixcbiAgICAgICAgMjQzLFxuICAgICAgICAzMixcbiAgICAgICAgNzEsXG4gICAgICAgIDU3LFxuICAgICAgICAxMTksXG4gICAgICAgIDExNCxcbiAgICAgICAgNzUsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTA1LFxuICAgICAgICAxNzIsXG4gICAgICAgIDgwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTY5LFxuICAgICAgICA0NCxcbiAgICAgICAgNDIsXG4gICAgICAgIDIyLFxuICAgICAgICAxOTMsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTk1LFxuICAgICAgICAzNyxcbiAgICAgICAgMTQyLFxuICAgICAgICAyMDEsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTQwLFxuICAgICAgICAyMzUsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxMixcbiAgICAgICAgNDksXG4gICAgICAgIDE3NyxcbiAgICAgICAgODgsXG4gICAgICAgIDk1LFxuICAgICAgICAyMzcsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTYsXG4gICAgICAgIDcwLFxuICAgICAgICAyMDEsXG4gICAgICAgIDIyMCxcbiAgICAgICAgNDAsXG4gICAgICAgIDExMyxcbiAgICAgICAgMjQ3LFxuICAgICAgICA0MSxcbiAgICAgICAgMTZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICA3N1xuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICA3MixcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDgsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICA4MixcbiAgICAgICAgICAzMCxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDlcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxOTcsXG4gICAgICAgIDk3LFxuICAgICAgICAyMDAsXG4gICAgICAgIDE0LFxuICAgICAgICAxNzMsXG4gICAgICAgIDE2NSxcbiAgICAgICAgODMsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMjUsXG4gICAgICAgIDMxLFxuICAgICAgICAyOCxcbiAgICAgICAgNDYsXG4gICAgICAgIDIxLFxuICAgICAgICA5NyxcbiAgICAgICAgMjM3LFxuICAgICAgICAxMDksXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTI3LFxuICAgICAgICAyMzIsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTU2LFxuICAgICAgICAxNzIsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMjUyLFxuICAgICAgICAyOSxcbiAgICAgICAgMjAzLFxuICAgICAgICAxODcsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTQ0LFxuICAgICAgICA3NyxcbiAgICAgICAgMzYsXG4gICAgICAgIDgxLFxuICAgICAgICAxMTMsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTE5LFxuICAgICAgICAxMzMsXG4gICAgICAgIDIxMCxcbiAgICAgICAgNjQsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMjA0LFxuICAgICAgICA3NSxcbiAgICAgICAgMTA0LFxuICAgICAgICAxMDQsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTYyLFxuICAgICAgICAyMzksXG4gICAgICAgIDcxLFxuICAgICAgICAyNDAsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMjIxLFxuICAgICAgICAyNCxcbiAgICAgICAgMTQsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTk5LFxuICAgICAgICAxNjUsXG4gICAgICAgIDE5LFxuICAgICAgICA1MCxcbiAgICAgICAgMTI1LFxuICAgICAgICAxNDQsXG4gICAgICAgIDQ3LFxuICAgICAgICAyMzksXG4gICAgICAgIDI0LFxuICAgICAgICAxOTIsXG4gICAgICAgIDlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDM1LFxuICBcImFkdlNlY3JldEtleVwiOiBcInVrOFVKSlJSSG5FZVhlN1liTmhpbDkvUUl6VWQrUTcxNThpYkgvUThFTkE9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiOTIzMDE3NjE2MTg2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCIwQkUzQTU5RDg3QTM0QzY5N0VDQzUyMTkxQUNFQ0U5NFwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3NDMyMzYwMzBcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwibTAxSHIwWk9UbW1MaS0ybDBRWFdEQVwiLFxuICBcInBob25lSWRcIjogXCJkMDY0NzFmYy1mN2RhLTQ0YTYtOTllMy0zMTQ3ZDY5OTQ3YjhcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjE3LFxuICAgICAgMTIwLFxuICAgICAgMTc1LFxuICAgICAgMTc0LFxuICAgICAgMTY3LFxuICAgICAgMTQyLFxuICAgICAgMTIxLFxuICAgICAgNjUsXG4gICAgICAzOSxcbiAgICAgIDQzLFxuICAgICAgMjA4LFxuICAgICAgMTE2LFxuICAgICAgMTM4LFxuICAgICAgNjYsXG4gICAgICA2NyxcbiAgICAgIDE0MyxcbiAgICAgIDEyOCxcbiAgICAgIDExNixcbiAgICAgIDE2MixcbiAgICAgIDI1MlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyNDgsXG4gICAgICAxNTAsXG4gICAgICAyNDQsXG4gICAgICAxNzIsXG4gICAgICAxMzYsXG4gICAgICAyNTMsXG4gICAgICAxODMsXG4gICAgICA2MixcbiAgICAgIDIxMSxcbiAgICAgIDI0LFxuICAgICAgMjEwLFxuICAgICAgMzgsXG4gICAgICAyMzIsXG4gICAgICAyNyxcbiAgICAgIDE4MCxcbiAgICAgIDE3LFxuICAgICAgMTA5LFxuICAgICAgMTUyLFxuICAgICAgMTc1LFxuICAgICAgMTdcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiMzg5SlFBUTRcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjkyMzAxNzYxNjE4NjoxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwi4o6v6q+tzL3ZvtmA2YDZkdix2YjZgduM2YDZgNmR2YDZgM2s2YDZgOK3ttmA2YDNqtmA2YDht5rZgNmA4bek2YDZgOK3ttmA2YDZgNmAzaXZgNmA4bed2YDZgOG3p9mA2YDZgNmA2YDYs9mA2YDZgNiU2LHijq/qr63MvSA6KVxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcbtmVXCIsXG4gICAgXCJsaWRcIjogXCIzNTI0MDIyMzQ2NTcxNDoxQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ096QjFnc1F0OWVldndZWUFTQUFLQUE9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiZXFpaUVqWHdtR05qencrK3NhSnpLa0MvU3dUYTcxWFcrR0hFeHU5NGVFQT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJiWmMvVjNYRllISFBOVi9xZkxKWUZiSlhIdnM0UDFvUmRGUUlYQW5ZTjY0SStqWDNnZEUrRXpzQmJnSGVtaCtaWWRraUFpSzBjaXE3K3BxSXpzakRCdz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJ6ZkdpdTA4VGlKTHRYQnNzeGcrQlFDQk53b0VkT292bFZNdEZLSDk5TTJRT1ZYcjhkazA2ZHFQb211Zmc2M2lpcTBBbDhsTGRmMDQ1OEF0KzluVTlEdz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5MjMwMTc2MTYxODY6MUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgOTksXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICA0MixcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgNCxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICA2NFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzQzMjM2MDI3LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBSnlZXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFKeVkuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJ6YVVEd3RCOFdXdWN0OFJoY2N6cXJaNGhlNWFkTGdwOTZBYUtBSXcvOEc0PVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjI0NDg2MTIwLFwiY3VycmVudEluZGV4XCI6MixcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iCn0="  // PUT your SESSION_ID 


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
