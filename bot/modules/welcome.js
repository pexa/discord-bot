'use strict'
let config = require('config')
let Bot = config.get('bot')
let genneralChannelId = config.get('Channels').general
let supportChannelId = config.get('Channels').support
let miningIssues = config.get('Channels').miningIssues
let JoinID = config.get('Channels').joinchannels
let hasPermsPexan = require('../helpers.js').hasPermsPexan
let inPrivate = require('../helpers.js').inPrivate
exports.custom = ['onUserJoin']

exports.commands = ['welcome', 'join']

exports.onUserJoin = function(bot) {
  bot.on('guildMemberAdd', member => {
    let embed = {
      color: 1741945,
      timestamp: new Date(),
      footer: {
        icon_url: Bot.iconurl,
        text: '\u00A9 ' + Bot.name,
      },
      author: {
        name: 'Welcome to PexaCoin Discord Community',
      },
      description:
        'Welcome to the PexaCoin Community. This is the "Home For Pexans" from around the world. A place where we come together and collaborate, chat, work, contribute and frankly, cut up and have a great time. ' +
        "We don't always agree but we do respect diverse views and work for a greater outcome for all parties involved in PexaCoin and taking this journey with us. Take a few minutes to browse through the channels and see the work happening here. We are always open to new talent joining and contributing your best to the PexaCoin Vision and helping us bring it into reality.   As a new member you can simply enter-->>  **!help**, to get more information and help from our handy PexaBot. Thanks For Dropping By, We Are Glad You Are Here.",
      image: {
        url: Bot.iconurl,
      },
    }
    member.send({
      embed,
    })

    embed = {
      color: 1741945,
      timestamp: new Date(),
      footer: {
        icon_url: Bot.iconurl,
        text: '\u00A9 ' + Bot.name,
      },

      fields: [
        {
          name:
            'ATTENTION: Please Take A Moment To Read This Important Message.',
          value:
            'We are grateful you have come to learn more about PexaCoin and our community. We set this message to be Direct Messaged to each new member of our community in a concerted effort to make each of you aware of the above issue. [website](https://pexaproject.com).',
        },
      ],
    }
    member.send({
      embed,
    })
  })
}

exports.welcome = {
  usage: '**[@username]**',
  description:
    'Send welcome message to specified user.\n This command only can be use in <#' +
    genneralChannelId +
    '> and user has Pexan / Community Leader role',
  process: function(bot, msg, suffix) {
    let embed
    if (!genneralChannelId.includes(msg.channel.id) || inPrivate(msg)) {
      if (inPrivate(msg)) {
        embed = {
          color: 1741945,
          timestamp: new Date(),
          footer: {
            icon_url: Bot.iconurl,
            text: '\u00A9 ' + Bot.name,
          },
          author: {
            name: 'Woops...',
          },
          description:
            'Command cannot be used in a DM.\nPlease use <#' + genneralChannelId + '>.',
        }
        msg.channel.send({
          embed,
        })
        return
      } else if (!genneralChannelId.includes(msg.channel.id)) {
        embed = {
          color: 1741945,
          timestamp: new Date(),
          footer: {
            icon_url: Bot.iconurl,
            text: '\u00A9 ' + Bot.name,
          },
          author: {
            name: 'Woops, Wrong Channel...',
          },
          description: 'Please use <#' + genneralChannelId + '>.',
        }
        msg.channel.send({
          embed,
        })
        return
      }
    }

    if (suffix == '') {
      /*
            embed = {
                color: 1741945,
                timestamp: new Date(),
                footer: {
                    icon_url: Bot.iconurl,
                    text: "\u00A9 " + Bot.name
                },
                author: {
                    name: "Woops..."
                },
                description: "No user defined."
            };
            msg.channel.send({
                embed
            }); */
      return
    }
    if (!hasPermsPexan(msg)) {
      /*
            embed = {
                color: 1741945,
                timestamp: new Date(),
                footer: {
                    icon_url: Bot.iconurl,
                    text: "\u00A9 " + Bot.name
                },
                author: {
                    name: "Woops..."
                },
                description: "You Don't Have Permission To Use This Command!"
            };
            msg.channel.send({
                embed
            }); */
      return
    }
    embed = {
      color: 1741945,
      timestamp: new Date(),
      footer: {
        icon_url: Bot.iconurl,
        text: '\u00A9 ' + Bot.name,
      },
      author: {
        name: 'Welcome to the Official PexaCoin Discord.',
      },
      description:
        '<@' +
        msg.mentions.members.first().id +
        ">, Welcome to PexaCoin's Discord. You are in our Pexa Tip Bot Chat, Please see <#" +
        supportChannelId +
        '> or <#' +
        miningIssues +
        '> if you need technical support.',
      image: {
        url:
          'https://github.com/pexa/assets/blob/master/logos/pexa300x300.png',
      },
    }
    msg.channel.send({
      embed,
    })
    return
  },
}

exports.join = {
  usage: '',
  description: 'Send join channel message',
  process: function(bot, msg, suffix) {
    const embed = {
      color: 1741945,
      timestamp: new Date(),
      footer: {
        icon_url: Bot.iconurl,
        text: '\u00A9 ' + Bot.name,
      },
      description: 'You Can Join EVEN MORE Channels in <#' + JoinID + '>',
      image: {
        url:
          'https://github.com/pexa/assets/blob/master/logos/pexa300x300.png',
      },
    }
    msg.channel.send({
      embed,
    })
    return
  },
}
