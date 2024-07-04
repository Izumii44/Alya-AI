/** 
 *  Created by Irull2nd
 *  CopyRight 2024 MIT License
 *  My Github : https://github.com/izumii44
 *  My Channell : https://bit.ly/3VHEPEL
*/

import { Telegraf } from "telegraf";
import chalk from "chalk";
import fetch from "node-fetch";
import { ApiGratis } from "./system/schema.js";
import { quote } from "./system/quote.js";
const client = new ApiGratis();

const bot = new Telegraf("PASTE_YOUR_TELEGRAM_TOKEN"); // telegram token
// Start Message
bot.start((ctx) => ctx.reply("Welcome!!!"));
// Help Message
bot.help((ctx) => {
  ctx.reply(
    "This is an AI Chat bot, you can chat with Alya Kujou"
  );
});


// Chat Command
bot.on("message", async (ctx) => {
  const text = ctx.message.text?.replace("")?.trim().toLowerCase();

  if (text) {
    ctx.sendChatAction("typing");
    const req = await client.sendMessage(ctx.message.chat.id, text);
    const res = req.result.replies[0]?.text;
    if (res) {
      ctx.telegram.sendMessage(ctx.message.chat.id, res, {
        reply_to_message_id: ctx.message.message_id,
      });
    }
  } else {
    ctx.telegram.sendMessage(
      ctx.message.chat.id,
      "Failed to get data",
      {
        reply_to_message_id: ctx.message.message_id,
      }
    );
  
  }
});


//Launch Bot
bot.launch();
bot.telegram.getMe().then((getme) => {
console.log(chalk.green('Bot Is Running...'));
console.log(chalk.blue.bgWhite('This script was created by @Irull2nd.\nplease do not sell this script!'));
console.log(chalk.cyan('[ INFO ]' + '\n\n' + 'Username: ' + "@" + getme.username + '\n\n' + 'ID: ' + getme.id + '\n\n' + 'Link: ' + `https://t.me/${getme.username}`));
})

process.once('SIGINT', () => bot.stop('SIGINT'))
process.once('SIGTERM', () => bot.stop('SIGTERM'))
