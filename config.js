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

global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_04_57_03_28_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTYsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMjAwLFxuICAgICAgICAxNDIsXG4gICAgICAgIDg1LFxuICAgICAgICAxMTEsXG4gICAgICAgIDUwLFxuICAgICAgICAyMTEsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMjI4LFxuICAgICAgICAxNCxcbiAgICAgICAgNzcsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTEwLFxuICAgICAgICAxNzAsXG4gICAgICAgIDcsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTIwLFxuICAgICAgICAxMzAsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTY1LFxuICAgICAgICAyMzksXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTYzLFxuICAgICAgICAyMDEsXG4gICAgICAgIDE1LFxuICAgICAgICAxNDQsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMjQzLFxuICAgICAgICA0NSxcbiAgICAgICAgNTMsXG4gICAgICAgIDk4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDM3LFxuICAgICAgICAyMDksXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTcyLFxuICAgICAgICAyLFxuICAgICAgICAxNzIsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTYyLFxuICAgICAgICAxMDcsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMjMyLFxuICAgICAgICAyMzcsXG4gICAgICAgIDE3NCxcbiAgICAgICAgNixcbiAgICAgICAgMTkwLFxuICAgICAgICAxNTUsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTUxLFxuICAgICAgICA4MCxcbiAgICAgICAgMzIsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMjA0LFxuICAgICAgICAxNjAsXG4gICAgICAgIDE2NixcbiAgICAgICAgNDQsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTE3LFxuICAgICAgICAxNjEsXG4gICAgICAgIDE0MSxcbiAgICAgICAgNzQsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMzRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIzMixcbiAgICAgICAgMjIyLFxuICAgICAgICA0NSxcbiAgICAgICAgNzAsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMjUwLFxuICAgICAgICA2NyxcbiAgICAgICAgNTEsXG4gICAgICAgIDM2LFxuICAgICAgICAxMzQsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTA5LFxuICAgICAgICAyMDksXG4gICAgICAgIDIwMyxcbiAgICAgICAgMjMzLFxuICAgICAgICAxMjIsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTIzLFxuICAgICAgICA3NSxcbiAgICAgICAgOTYsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTE5LFxuICAgICAgICAyMTYsXG4gICAgICAgIDEzNixcbiAgICAgICAgNzYsXG4gICAgICAgIDQ5LFxuICAgICAgICAyNDIsXG4gICAgICAgIDYsXG4gICAgICAgIDcsXG4gICAgICAgIDQ2LFxuICAgICAgICAxMzEsXG4gICAgICAgIDEwNFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA3MyxcbiAgICAgICAgMjI0LFxuICAgICAgICA2NixcbiAgICAgICAgMTksXG4gICAgICAgIDE0NixcbiAgICAgICAgMTIzLFxuICAgICAgICA3MyxcbiAgICAgICAgMTc5LFxuICAgICAgICAxMjcsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTMxLFxuICAgICAgICA1OSxcbiAgICAgICAgMTg5LFxuICAgICAgICAyNixcbiAgICAgICAgMTM2LFxuICAgICAgICAxMjksXG4gICAgICAgIDIzNSxcbiAgICAgICAgODQsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxMDksXG4gICAgICAgIDU0LFxuICAgICAgICAyNDEsXG4gICAgICAgIDgzLFxuICAgICAgICA2OSxcbiAgICAgICAgMTUsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMjksXG4gICAgICAgIDEyMSxcbiAgICAgICAgMzEsXG4gICAgICAgIDcsXG4gICAgICAgIDQyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjAsXG4gICAgICAgIDQyLFxuICAgICAgICAyNTMsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxNTQsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTc5LFxuICAgICAgICAxODIsXG4gICAgICAgIDksXG4gICAgICAgIDEwMyxcbiAgICAgICAgMjE2LFxuICAgICAgICAyMjQsXG4gICAgICAgIDU5LFxuICAgICAgICA3MyxcbiAgICAgICAgMjI3LFxuICAgICAgICAyNixcbiAgICAgICAgNzAsXG4gICAgICAgIDk5LFxuICAgICAgICAxMTAsXG4gICAgICAgIDExNyxcbiAgICAgICAgMjM3LFxuICAgICAgICAxNDUsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTU2LFxuICAgICAgICAyNDEsXG4gICAgICAgIDE4LFxuICAgICAgICAxMzgsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTkyLFxuICAgICAgICAxNTksXG4gICAgICAgIDgwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDMsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMjM4LFxuICAgICAgICAyMTgsXG4gICAgICAgIDYsXG4gICAgICAgIDI0NSxcbiAgICAgICAgNTgsXG4gICAgICAgIDQ4LFxuICAgICAgICAxMzksXG4gICAgICAgIDE4NSxcbiAgICAgICAgODUsXG4gICAgICAgIDg5LFxuICAgICAgICA2OSxcbiAgICAgICAgMjA2LFxuICAgICAgICA3OCxcbiAgICAgICAgMjIxLFxuICAgICAgICAyNTUsXG4gICAgICAgIDEzLFxuICAgICAgICAxNTUsXG4gICAgICAgIDIzMixcbiAgICAgICAgNyxcbiAgICAgICAgMjA4LFxuICAgICAgICAzMixcbiAgICAgICAgMTIwLFxuICAgICAgICAyMDIsXG4gICAgICAgIDQyLFxuICAgICAgICA3MCxcbiAgICAgICAgMjAxLFxuICAgICAgICAyMDMsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMjAzLFxuICAgICAgICAzOFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDY4XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE3OSxcbiAgICAgICAgICA3MixcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICA5MixcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICA2MixcbiAgICAgICAgICAxOVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTkzLFxuICAgICAgICA3MCxcbiAgICAgICAgMTg4LFxuICAgICAgICA2LFxuICAgICAgICAxLFxuICAgICAgICA5MyxcbiAgICAgICAgNTAsXG4gICAgICAgIDE4MSxcbiAgICAgICAgODQsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMjQ0LFxuICAgICAgICA3MSxcbiAgICAgICAgMjEwLFxuICAgICAgICAyMTAsXG4gICAgICAgIDkzLFxuICAgICAgICAxNzQsXG4gICAgICAgIDE0LFxuICAgICAgICAyMTgsXG4gICAgICAgIDUsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTcyLFxuICAgICAgICAyMDIsXG4gICAgICAgIDEwNixcbiAgICAgICAgNzAsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTk4LFxuICAgICAgICAxODEsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxMDIsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTU3LFxuICAgICAgICAxNDQsXG4gICAgICAgIDE3LFxuICAgICAgICAxNDAsXG4gICAgICAgIDI0OSxcbiAgICAgICAgNTgsXG4gICAgICAgIDI3LFxuICAgICAgICA2MSxcbiAgICAgICAgNTAsXG4gICAgICAgIDEzLFxuICAgICAgICAxMTEsXG4gICAgICAgIDIyMCxcbiAgICAgICAgNjMsXG4gICAgICAgIDEzMCxcbiAgICAgICAgOCxcbiAgICAgICAgMTE0LFxuICAgICAgICAxNSxcbiAgICAgICAgMTgwLFxuICAgICAgICAyNDksXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTkzLFxuICAgICAgICA1MSxcbiAgICAgICAgMTkwLFxuICAgICAgICAwLFxuICAgICAgICAxNjEsXG4gICAgICAgIDksXG4gICAgICAgIDE0NSxcbiAgICAgICAgODIsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMzksXG4gICAgICAgIDQwLFxuICAgICAgICAxNDJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDE0MSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJ6NElqTlk3dE5HL29xb1pGSWp3bVRESjZRNFk4Z080Q0ExWFl4U25TaGlVPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJQck5WUzdPOVQ2bXRRYk5tQW5MSENRXCIsXG4gIFwicGhvbmVJZFwiOiBcImRjMDFmMjhmLTU5YzQtNDM4NS05ZmQyLWQyYTc4Yzg5MzYwZVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxOSxcbiAgICAgIDIwMSxcbiAgICAgIDgxLFxuICAgICAgMTA4LFxuICAgICAgMjQyLFxuICAgICAgOTEsXG4gICAgICAxMixcbiAgICAgIDkxLFxuICAgICAgMTA2LFxuICAgICAgMTc5LFxuICAgICAgODAsXG4gICAgICA2MyxcbiAgICAgIDI0NSxcbiAgICAgIDEzNSxcbiAgICAgIDIzMCxcbiAgICAgIDIxMyxcbiAgICAgIDEwLFxuICAgICAgMTczLFxuICAgICAgMjMwLFxuICAgICAgMTMwXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDM1LFxuICAgICAgNixcbiAgICAgIDksXG4gICAgICAyMTMsXG4gICAgICAyNyxcbiAgICAgIDE5MyxcbiAgICAgIDE2OCxcbiAgICAgIDMzLFxuICAgICAgMTIyLFxuICAgICAgMTIwLFxuICAgICAgMTU0LFxuICAgICAgMTQsXG4gICAgICA4OSxcbiAgICAgIDE5NCxcbiAgICAgIDU0LFxuICAgICAgNzAsXG4gICAgICA4OCxcbiAgICAgIDY2LFxuICAgICAgMTEsXG4gICAgICA5XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkJKQ05NTERWXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5MjMwMTc2MTYxODY6OTRAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCLijq/qr63Mvdm+2YDZgNmR2LHZiNmB24zZgNmA2ZHZgNmAzazZgNmA4re22YDZgM2q2YDZgOG3mtmA2YDht6TZgNmA4re22YDZgNmA2YDNpdmA2YDht53ZgNmA4ben2YDZgNmA2YDZgNiz2YDZgNmA2JTYseKOr+qvrcy9IDopXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxu2ZVcIixcbiAgICBcImxpZFwiOiBcIjM1MjQwMjIzNDY1NzE0Ojk0QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ09yQjFnc1FpOWlZdndZWUFpQUFLQUE9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiZXFpaUVqWHdtR05qencrK3NhSnpLa0MvU3dUYTcxWFcrR0hFeHU5NGVFQT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJ0TGREMndSOE1KR0hOSllYTkw2cGtJMDFJRTVLMUl4Ujl1Vm95ZkExRHRNNDlYUWhNbFduTndYdFNJWUhSRHZ4VEhRek1ydndCa0xTVS9jbzhibWhCZz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJlNkVBSVJtL3FzdWJvSnlndTFJNFlPS0xnTUFwa216QkZLc2tUWjd5bjJkUVJKbGkvVmtXZkIyKzF3L0NDRTEvVWt5V3NUckxrZXJoV2ZsNWFuc0Zpdz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5MjMwMTc2MTYxODY6OTRAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAxOCxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDQsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgNjRcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTc0MzEzNzgwOCxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUp5MFwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBSnkwLmpzb24iOiAie1wia2V5RGF0YVwiOlwiem9NYndWd1o5MStXQzdWWG81OWNGLyt1aWp5RjQ0VEg3eWFUa0NFdjZOYz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoyNDQ4NjEyMCxcImN1cnJlbnRJbmRleFwiOjMyLFwiZGV2aWNlSW5kZXhlc1wiOlszMiwwLDQsMzBdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIKfQ=="  // PUT your SESSION_ID 


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
