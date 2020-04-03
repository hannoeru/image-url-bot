const Telegraf = require('telegraf');
require('dotenv').config();

const bot = new Telegraf(process.env.API_TOKEN);

const savePhoto = async function (ctx) {
  const photoId = ctx.message.photo[ctx.message.photo.length - 1].file_id;
  const url = await ctx.telegram.getFileLink(photoId);
  console.log(url);
  return ctx.reply(url);
};

bot.start((ctx) => ctx.reply('Welcome! this bot will change image to url!'));
bot.help((ctx) =>
  ctx.reply('Just send a photo than you will get the url link to this photo.')
);
bot.on('photo', savePhoto);
bot.hears('hi', (ctx) => ctx.reply('Hey there'));
bot.launch();
