if (process.version.startsWith("v6")) throw new Error("This Bot requires Node 7v+ because of async/await")

const Discord = require("discord.js")
const express = require("express")
const app = express()
const superagent = require("superagent")

//Config
let 
    INVITE = process.env.INVITE || "", //An Infinite Invite to your discord server.
    GUILD = process.env.GUILD || "", //The ID of the Guild for this invite ^
    OWNER = process.env.OWNER || "", //Your main account id so the bot can notify if it finds an advertiser
    TOKEN = process.env.TOKEN || "", //The user token for your alt,
    ONLYADVERT = process.env.ONLYADVERT || false, //If the bot should notify on every dm or only if it contains an invite link
    APPID = process.env.APPID || "639772113854660618", //APp ID BRO, THis must be of a bot in the guild that you are monitoring
    APPSECRET = process.env.APPSECRET || "",
    APPSCOPE = process.env.APPSCOPE || "guilds.join",
    APPREDIRECT = process.env.APPREDIRECT || ""
//End Config

const client = new Discord.Client({
    messageCacheMaxSize: 1, //Minimize RAM Load
    disabledEvents: ["TYPING_START"] // ^^
    
})

let wait10 = () => new Promise(resolve => setTimeout(resolve, 10000))

//Begin The Beef
let cachedDMS = []
let sinceLastLJ = 0

//Ready Event

client.on("ready", () => {
    client.user.setActivity("!claim to claim 35-100 invites", { type: "Watching"})
    console.log("Started")
    if (!client.user.bot) throw new Error("Auto DM Advert Checker only works on User Acounts.")

})

client.on('message', message => {
  let embed = new Discord.RichEmbed()
  .setColor('#688aeb')
  .setDescription(("You don't have enough invites!, You must have **35-50** Invites to claim!"))
  .setImage('https://media.discordapp.net/attachments/750050420910719139/762693105958256640/unknown.png\n  ')
  .setTimestamp()
  .setFooter('Paypal Rewards©', 'https://cdn.discordapp.com/icons/762684980361953291/f31a43d7633b68ada56e471f67e79569.png?size=256');    
     
  if (message.content.startsWith('!claim'))
    message.author.send(embed);
    return;
})

/*client.on('message', message => {
  if (message.content.startsWith('!claim'))
    message.author.send(" Checking..... \nChecking....... \nChecking......... \n[**Error**] You must have 35-50 Invites to claim.\n\n [**!**] Once you reach out 35-50 invites kindly fill out this form \n **Paypal Email**: [exampleemail@paypal.com] \n Wait 3-5 minutes for the money to be sent in your account!\n\nCurrent paypal balance: https://prnt.sc/umi69s");
    return;
})*/

//Message Event

client.on('message', async message => {
    let messageArray = message.content.split(" ");
    let cmd = messageArray[0];
    let args = messageArray.slice(1);
    if(message.content.startsWith('-payments')) {
    var ags = message.content.split(' ').slice(1).join(' ');
    if(!ags) return message.reply('*-bc [your msg to send]*');
    if (!message.guild.member(message.author).hasPermission("ADMINISTRATOR")) return;
    let Success = 0
    let embed = new Discord.RichEmbed()
    .setDescription(ags);

      Success++
    message.delete();
    client.channels.get('762689138540806184').send(ags);
  }
});

client.on('message', async message => {
    let messageArray = message.content.split(" ");
    let cmd = messageArray[0];
    let args = messageArray.slice(1);
    if(message.content.startsWith('-gwinner')) {
    var ags = message.content.split(' ').slice(1).join(' ');
    if(!ags) return message.reply('*-bc [your msg to send]*');
    if (!message.guild.member(message.author).hasPermission("ADMINISTRATOR")) return;
    let Success = 0
    let embed = new Discord.RichEmbed()
    .setDescription(ags);

      Success++
    message.delete();
    client.channels.get('762688399307964478').send(ags);
  }
});


client.on('message', async message => {
    let messageArray = message.content.split(" ");
    let cmd = messageArray[0];
    let args = messageArray.slice(1);
    if(message.content.startsWith('-announce')) {
    var ags = message.content.split(' ').slice(1).join(' ');
    if(!ags) return message.reply('*-bc [your msg to send]*');
    if (!message.guild.member(message.author).hasPermission("ADMINISTRATOR")) return;
    let Success = 0
    let embed = new Discord.RichEmbed()
    .setColor('#688aeb')
    .setDescription(ags)
    /*.setImage('https://images-ext-1.discordapp.net/external/bF5LNL7G3i6lTeW-jLmn1sdoNxHcnQtrTVdABF9WTNI/https/media.discordapp.net/attachments/696369834874896415/749756651145265232/sgsdfdfdfgdfdfgdffgdf_1.gif');*/

      Success++
    message.delete();
    message.channel.send(embed);
  }
});

client.on('message', async message => {
    let messageArray = message.content.split(" ");
    let cmd = messageArray[0];
    let args = messageArray.slice(1);
    if(message.content.startsWith('-announce2')) {
    var ags = message.content.split(' ').slice(1).join(' ');
    if(!ags) return message.reply('*-bc [your msg to send]*');
    if (!message.guild.member(message.author).hasPermission("ADMINISTRATOR")) return;
    let Success = 0
    let embed = new Discord.RichEmbed()
    .setColor('#688aeb')
    .setDescription(ags)
    .setImage('https://images-ext-1.discordapp.net/external/bF5LNL7G3i6lTeW-jLmn1sdoNxHcnQtrTVdABF9WTNI/https/media.discordapp.net/attachments/696369834874896415/749756651145265232/sgsdfdfdfgdfdfgdffgdf_1.gif');

      Success++
    message.delete();
    message.channel.send(ags);
  }
});

client.on('message', async message => {
    let messageArray = message.content.split(" ");
    let cmd = messageArray[0];
    let args = messageArray.slice(1);
    if(message.content.startsWith('-giveaways')) {
    var ags = message.content.split(' ').slice(1).join(' ');
    if(!ags) return message.reply('*-bc [your msg to send]*');
    if (!message.guild.member(message.author).hasPermission("ADMINISTRATOR")) return;
    let Success = 0
    let embed = new Discord.RichEmbed()
    .setColor('#688aeb')
    .setDescription(ags)
    .setTimestamp("2020-10-15T12:00:00.000Z")
	.setFooter('Paypal Rewards© Ends at', 'https://cdn.discordapp.com/icons/762684980361953291/f31a43d7633b68ada56e471f67e79569.png?size=256');    
      Success++
    message.delete();
    client.channels.get('762688399307964478').send(embed);
  }
});

client.on('message', async message => {
    let messageArray = message.content.split(" ");
    let cmd = messageArray[0];
    let args = messageArray.slice(1);
    if(message.content.startsWith('-stocks')) {
    var ags = message.content.split(' ').slice(1).join(' ');
    if(!ags) return message.reply('*-bc [your msg to send]*');
    if (!message.guild.member(message.author).hasPermission("ADMINISTRATOR")) return;
    let Success = 0
    let embed = new Discord.RichEmbed()
    .setColor('#688aeb')
    .setDescription(ags);
      Success++
    message.delete();
    client.channels.get('762689334931095573').send(embed);
  }
});

client.on('message', async message => {
    let messageArray = message.content.split(" ");
    let cmd = messageArray[0];
    let args = messageArray.slice(1);
    if(message.content.startsWith('-rewards')) {
    var ags = message.content.split(' ').slice(1).join(' ');
    if(!ags) return message.reply('*-bc [your msg to send]*');
    if (!message.guild.member(message.author).hasPermission("ADMINISTRATOR")) return;
    let Success = 0
    let embed = new Discord.RichEmbed()
    .setColor('#688aeb')
    .setDescription(ags)
    /*.setImage('https://media.discordapp.net/attachments/696369834874896415/749756651145265232/sgsdfdfdfgdfdfgdffgdf_1.gif');*/
    

    Success++
    message.delete();
    client.channels.get('762688610549366796').send(embed);
  }
});




//Login
client.login("")


//THe WebServer because Discord Is Mean
const APP = {
    ID: APPID, //This is the ID of your Application
    SECRET: APPSECRET, //This is the Secret of your application
    SCOPE: APPSCOPE,
    REDIRECT: APPREDIRECT
}

let access_token = null
let refresh_token = null

let acceptInvite = () => {
    console.log("trying")
    return new Promise((resolve, reject) => {
        if (!access_token) return console.log("Accept Auth URI First to join the guild.")
        let JOIN_URI = `https://discordapp.com/api/invites/${INVITE}`
        superagent.post(JOIN_URI).set({
            Authorization: `Bearer ${access_token}`
        }).then((response) => {
            resolve()
        }).catch(console.log)
    })
}

const AUTH_QUERY = [
    `client_id=${APP.ID}`,
    `scope=${APP.SCOPE}`,
    `redirect_uri=${APP.REDIRECT}`,
    'response_type=code',
].join('&');

const AUTH_URL = `https://discordapp.com/oauth2/authorize?${AUTH_QUERY}`;

console.log(AUTH_URL)

app.use("/callback", (req, res) => {
    if (req.query.error) return console.log(req.query.error)
    if (!req.query.code) console.log("Req.Code Errored Bad!")
    let code = req.query.code
    res.send("Success!")
    const TOKEN_PARAMS = [
        'grant_type=authorization_code',
        `code=${code}`,
        `client_id=${APP.ID}`,
        `client_secret=${APP.SECRET}`,
        `redirect_uri=${APP.REDIRECT}`,
    ].join('&');

    const TOKEN_URI = `https://discordapp.com/api/oauth2/token?${TOKEN_PARAMS}`

})

app.listen(2001, () => console.log("Listening On 2001"))