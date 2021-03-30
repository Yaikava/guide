(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{399:function(t,e,s){"use strict";s.r(e);var a=s(26),n=Object(a.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"creating-the-bot"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#creating-the-bot"}},[t._v("#")]),t._v(" Creating The Bot!")]),t._v(" "),s("p",[t._v("Discordeno will help make Discord bot development much easier. Don't worry, as\nyou go through this guide it will make a lot more sense.")]),t._v(" "),s("h2",{attrs:{id:"creating-the-bot-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#creating-the-bot-2"}},[t._v("#")]),t._v(" Creating The Bot!")]),t._v(" "),s("blockquote",[s("p",[t._v("This guide is going to assume you already have the basic requirements to make\na bot ready. This includes github, git, a code editor like Visual Studio Code.\nIf you don't have these yet please prepare them first before going forward.")])]),t._v(" "),s("ul",[s("li",[s("p",[t._v("First, create a Discordeno Bot using the\n"),s("a",{attrs:{href:"https://github.com/discordeno/template/generate",target:"_blank",rel:"noopener noreferrer"}},[t._v("Generator Template"),s("OutboundLink")],1),t._v(".\nGive it any name you like. For the purpose of this guide we will call it,\nStargate.")])]),t._v(" "),s("li",[s("p",[t._v("Then "),s("code",[t._v("git clone https://github.com/Skillz4Killz/Stargate.git")]),t._v(" Replace\n"),s("strong",[t._v("Stargate")]),t._v(" with the name you chose.")])]),t._v(" "),s("li",[s("p",[t._v("When that is done, go ahead and open up the folder with VSC.")])]),t._v(" "),s("li",[s("p",[t._v("Create a new file called "),s("code",[t._v("configs.ts")]),t._v(". Open the "),s("code",[t._v("configs.example.ts")]),t._v(" file and\ncopy everything over.")])])]),t._v(" "),s("p",[t._v("Let's take a minute to review all the options we have available to us.")]),t._v(" "),s("h3",{attrs:{id:"configs-file"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#configs-file"}},[t._v("#")]),t._v(" Configs File")]),t._v(" "),s("p",[t._v("The "),s("code",[t._v("configs.ts")]),t._v(" file is where you will keep all your secret info you don't want\nto share with anyone else. As long as "),s("code",[t._v(".gitignore")]),t._v(" file is ignoring configs.ts\nyour configurations will be kept private!")]),t._v(" "),s("div",{staticClass:"language-ts extra-class"},[s("pre",{pre:!0,attrs:{class:"language-ts"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Step 1: Remove the `.example` from this file name so it is called `configs.ts`")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Step 2: Add all your bot's information below. The only required one is token and prefix. NOTE: As long as `.gitignore` file is ignoring configs.ts your configurations will be kept private!")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Step 3: Remove these comments if you like.")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" configs "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Your bot token goes here")]),t._v("\n  token"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// The default prefix for your bot. Don't worry guilds can change this later.")]),t._v("\n  prefix"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"!"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// This isn't required but you can add bot list api keys here.")]),t._v("\n  botListTokens"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("DISCORD_BOT_ORG")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("BOTS_ON_DISCORD")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("DISCORD_BOT_LIST")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("BOTS_FOR_DISCORD")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("DISCORD_BOATS")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("DISCORD_BOTS_GG")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("DISCORD_BOTS_GROUP")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// This is the server id for your bot's main server where users can get help/support")]),t._v("\n  supportServerID"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// These are channel ids that will enable some functionality")]),t._v("\n  channelIDs"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// When a translation is missing this is the channel you will be alerted in.")]),t._v("\n    missingTranslation"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// When an error occurs, we will try and log it to this channel")]),t._v("\n    errorChannelID"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// These are the role ids that will enable some functionality.")]),t._v("\n  roleIDs"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// If you have a patreon set up you can add the patreon vip role id here.")]),t._v("\n    patreonVIPRoleID"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// These are the user ids that will enable some functionality.")]),t._v("\n  userIDs"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// The user ids for the support team")]),t._v("\n    botSupporters"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// The user ids for the other devs on your team")]),t._v("\n    botDevs"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// The user ids who have complete 100% access to your bot")]),t._v("\n    botOwners"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("h4",{attrs:{id:"token"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#token"}},[t._v("#")]),t._v(" Token")]),t._v(" "),s("p",[t._v("First, add your bot token. This is "),s("strong",[t._v("required")]),t._v(" for the bot to start. Review the\n"),s("a",{attrs:{href:"https://discordeno.mod.land/gettingstarted.html#creating-your-first-discord-bot-application",target:"_blank",rel:"noopener noreferrer"}},[t._v("instructions"),s("OutboundLink")],1),t._v("\nif you have not made your token yet.")]),t._v(" "),s("h4",{attrs:{id:"prefix"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#prefix"}},[t._v("#")]),t._v(" Prefix")]),t._v(" "),s("p",[t._v("The prefix is where you will set the default prefix for your bot. Don't worry,\nevery server will be able to choose their own prefix but we need a default\nprefix to start.")]),t._v(" "),s("h4",{attrs:{id:"bot-lists-tokens"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#bot-lists-tokens"}},[t._v("#")]),t._v(" Bot Lists Tokens")]),t._v(" "),s("p",[t._v("This section of the file is so you can easily have your bot's statistics updated\non all the bot lists out there to help you grow your bot. The code is already\nwritten to handle this but you will need to do 3 things for each bot list.")]),t._v(" "),s("ol",[s("li",[t._v("Go to the bot list and add your bot to their website. (Each site has it's own\ninstructions)")]),t._v(" "),s("li",[t._v("Create a token for yourself on each website and paste it in your configs.")]),t._v(" "),s("li",[t._v("Enjoy!")])]),t._v(" "),s("p",[t._v("If you wish to customize the code, you will find the bot list tasks in the tasks\nfolder. Don't worry we will discuss this when we get to the tasks section of the\nguide.")]),t._v(" "),s("p",[t._v("For now just remember, that Discordeno provides you a built in way to update\nmost discord bot lists.")]),t._v(" "),s("h4",{attrs:{id:"channel-ids"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#channel-ids"}},[t._v("#")]),t._v(" Channel IDs")]),t._v(" "),s("p",[t._v("The channelIDs section holds the channel IDs that are useful for specific\nfeatures to help give you alerts/notifications. For example, the\n"),s("code",[t._v("missingTranslation")]),t._v(" channel will be where messages are sent alerting you that\nsomewhere in your code you are trying to use a translation key that you never\ncreated.")]),t._v(" "),s("p",[t._v("When you get to around 25,000 Discord servers on your bot, you may want to\nconvert these channel IDs to webhooks.")]),t._v(" "),s("h4",{attrs:{id:"role-ids"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#role-ids"}},[t._v("#")]),t._v(" Role IDs")]),t._v(" "),s("p",[t._v("The roleIDs section holds the role IDs that are useful for specific features.\nFor example, the "),s("code",[t._v("patreonVIPRoleID")]),t._v(" role can be used easily to enable vip\nfeatures later in this guide.")]),t._v(" "),s("h4",{attrs:{id:"user-ids"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#user-ids"}},[t._v("#")]),t._v(" User IDs")]),t._v(" "),s("p",[t._v("The userIDs section holds the user IDs that are useful for specific features.\nFor example, the "),s("code",[t._v("botDevs")]),t._v(" and such are useful for permission levels as you will\nsee in the Permission Level part of the guide.")]),t._v(" "),s("h2",{attrs:{id:"it-s-alive"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#it-s-alive"}},[t._v("#")]),t._v(" It's Alive!")]),t._v(" "),s("p",[t._v("Oh my god! You now have a bot with a bunch of features already! You don't\nbelieve me? Well, seeing is believing, so start the bot.")]),t._v(" "),s("ol",[s("li",[t._v("Invite your bot to a discord server.")]),t._v(" "),s("li",[t._v("Open up the integrated terminal in VSC using "),s("strong",[t._v("CTRL + `")]),t._v(". If you use a Mac,\nreplace CTRL with CMD.")]),t._v(" "),s("li",[t._v("Run the script below:")])]),t._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[t._v("deno run -A --no-check mod.ts\n")])])]),s("blockquote",[s("p",[t._v("The "),s("code",[t._v("-A")]),t._v(" flag will grant it all permissions to run the bot. If you would like\nto specify specific ones you may do so!")])]),t._v(" "),s("blockquote",[s("p",[t._v("The "),s("code",[t._v("--no-check")]),t._v(" flag is used for module augmentation support as Deno still\ndoes not provide a clean way to have it. If you don't use custom structures,\nthis is not needed.")])]),t._v(" "),s("p",[t._v("The first time you run it, you may see a lot of files being loaded. This is\npreparing all the magic behind the scene. Once it is ready, you will see\nsomething like this:")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://i.imgur.com/TOXjLgh.png",alt:"image"}})]),t._v(" "),s("h2",{attrs:{id:"understanding-what-discordeno-did"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#understanding-what-discordeno-did"}},[t._v("#")]),t._v(" Understanding What Discordeno Did")]),t._v(" "),s("p",[t._v("Discordeno includes these commands/folders as they are essential for any discord\nbot to have in order to meet the Discord Bot Best Practices. It also adds a few\nthings that will help make some things easier to build a bot.")]),t._v(" "),s("p",[t._v("We will dive into these deeper in this guide. Let's take it step by step.")])])}),[],!1,null,null,null);e.default=n.exports}}]);