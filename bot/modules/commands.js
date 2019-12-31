'use strict'
let config = require('config')
let needle = require('needle')
let Bot = config.get('bot')
let supportChannel = config.get('Channels').support

exports.commands = ['info', 'specs', 'roadmap', 'beer']

exports.info = {
  usage: ' ',
  description: 'What is a Pexa Coin?',
  process: function(bot, msg) {
    const embed = {
      color: 1741945,
      timestamp: new Date(),
      footer: {
        icon_url: Bot.iconurl,
        text: '\u00A9 ' + bot.name,
      },
      fields: [
        {
          name: 'What is a Pexa Coin?',
          value:
            '[**Pexa Coin**](https://pexaproject.com/) is a global leader for instant secure transactions backed by one of the largest worldwide community networks in digital currency.',
        },
        {
          name: 'Why choose PexaCoin?',
          value:
            '**No Pre-Mining** - We want many Pexa Coins to be available to our community to mine, grow, and benefit from.' +
            '\n**Financial Independence** - Pexa Coin encompasses a self-funding blockchain which promotes continued growth and development.' +
            '\n**Unique Hashing Algo** - Pexa Coin was the first coin to use the x16rv2 hashing algorithm which keeps mining open to GPU miners.' +
            '\n**Decentralized Governance** - Allows the users of Pexa Coin to vote on the strategic direction of the coin as well development budgeting.' +
            '\n**Personal Banking** - Pexa Coin will become your own personal bank. Easily store or spend your coins.',
        },
        {
          name: 'Join our Community',
          value:
            '[**Github**](https://github.com/pexa/core)' +
            '\n[**Discord**](https://discord.gg/TZRJ3xp)' +
            '\n[**Twitter**](https://twitter.com/pexacoin)' +
            '\n[**Reddit**](https://reddit.com/pexacoin)' +
            '\n[**Bitcoin Talk**](https://bitcointalk.org/index.php?topic=5168258.0)',
        },
        {
          name: 'Development roadmap',
          value:
            'The development roadmap is our backbone and is what will make the Pexa Project great. It’s going to require hustle and a lot of hard work, but with support from the community, we’re confident we can execute this plan and achieve our mission for the Project.' +
            '\n[**View the full roadmap**](https://pexaproject.com/roadmap/board/pexa-pool/)',
        },
        {
          name: 'Pexa Coin wallet',
          value:
            'Download your Pexa Coin wallet. \nAvailable on Windows, Linux, Mac and Docker.' +
            '\n[**Wallet download**](https://github.com/pexa/core/releases/)',
        },
      ],
    }
    msg.channel.send({
      embed,
    })
  },
}

exports.specs = {
  usage: ' ',
  description: 'Pexa Coin specification',
  process: function(bot, msg) {
    const embed = {
      color: 1741945,
      timestamp: new Date(),
      footer: {
        icon_url: Bot.iconurl,
        text: '\u00A9 ' + bot.name,
      },
      fields: [
        {
          name: 'Coin specification',
          value:
            'Name: Pexa Coin' +
            '\n' +
            'Symbol: PEXA' +
            '\n' +
            'Pre-mine: No' +
            '\n' +
            'CPU mining: Yes' +
            '\n' +
            'GPU mining: Yes' +
            '\n' +
            'Total reward: 5 coins per block.' +
            '\n' +
            'Miner reward: 5 coins per block' +
            '\n' +
            'Halving: Every 3.26 years' +
            '\n' +
            'Block time: 60 seconds' +
            '\n' +
            '**Total coins**: About **17,122,989**' +
            '\n' +
            'P2P Port: 8235' +
            '\n' +
            'RPC Port: Any' +
            '\n' +
            '[**View block explorer**](https://pexa.easyx.cc/)',
        },
      ],
    }
    msg.channel.send({
      embed,
    })
  },
}

// exports.vision = {
//   usage: ' ',
//   description: 'The vision',
//   process: function(bot, msg) {
//     const embed = {
//       color: 1741945,
//       timestamp: new Date(),
//       footer: {
//         icon_url: Bot.iconurl,
//         text: '\u00A9 ' + bot.name,
//       },
//       fields: [
//         {
//           name:
//             'Pexa Coin’s Instant Secure Transactions Sending Money Around The World.',
//           value:
//             'Pexa Coin is a global leader for instant secure transactions allowing users to transmit value around the world on one of the largest worldwide community networks in digital currency providing increased privacy and speed.' +
//             '\n\nWhat this means for you is Pexa Coin will be easier to use than a local bank. Put money in, pull money out, spend your money, and best of all Pexa Coin works for you 24/7—Send money when and where you need. All this happens outside current banking channels allowing more freedom over your funds than you have with traditional remittance service providers.',
//         },
//         {
//           name: 'Cross Blockchain Value Exchange @ PROJECT X-CHAIN',
//           value:
//             'Even though the blockchain network is decentralized, many of the services that allow its use in the real world are still centralized. With Project X-Chain we will create a decentralized ecosystem by “chaining” multiple blockchains together and providing an in-wallet exchange. Using this technology, a library of applications can then be developed to further enhance and assist the Pexa Coin community in value exchanges.',
//         },
//         {
//           name: 'Core Objective',
//           value:
//             'These six principles are to guide our future decision making:' +
//             '\n**Decentralization:** Remain true to the principles of decentralization.' +
//             '\n**Onboarding:** Ensure it is simple and easy to acquire PEXA.' +
//             '\n**Spending:** Withdraw cash from atms, spend with debit cards, or buy online – same as you can with your local bank.' +
//             '\n**Control:** Pexa Coin will be a feature-rich wallet (mobile and online) allowing you the highest control over your funds.' +
//             '\n**Community:** Always remember the community when making decisions for the long term success of Pexa Coin.',
//         },
//         {
//           name: 'Pexa Coin | Established 2014',
//           value:
//             'Pexa Coin was launched on Jan 18, 2014. Pexa Coin was the first blockchain coin launched with eleven hashing algorithms chained, one on top of the other, with intentions to free individuals from centralized banking and create a strong community to support the global movement into cryptocurrency.' +
//             '\n\nPexa Coin continues to thrive because of the dedicated community which supports its success and evolution to seize current and future opportunities.',
//         },
//       ],
//     }
//     msg.channel.send({
//       embed,
//     })
//   },
// }

exports.roadmap = {
  usage: ' ',
  description: 'Development roadmap',
  process: function(bot, msg) {
    const embed = {
      color: 1741945,
      timestamp: new Date(),
      footer: {
        icon_url: Bot.iconurl,
        text: '\u00A9 ' + bot.name,
      },
      fields: [
        {
          name: 'View public roadmap:',
          value: 'https://pexaproject.com/roadmap/board/pexa-pool/',
        },
      ],
    }
    msg.channel.send({
      embed,
    })
  },
}

exports.beer = {
  usage: ' ',
  description: 'Beer emoji',
  process: function(bot, msg) {
    const embed = {
      color: 1741945,
      timestamp: new Date(),
      footer: {
        icon_url: Bot.iconurl,
        text: '\u00A9 ' + bot.name,
      },
      description: 'Cheers! :beers:',
    }
    msg.channel.send({
      embed,
    })
  },
}
