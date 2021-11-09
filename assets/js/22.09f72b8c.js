(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{402:function(t,n,s){"use strict";s.r(n);var a=s(26),e=Object(a.a)({},(function(){var t=this,n=t.$createElement,s=t._self._c||n;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"creating-inhibitors"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#creating-inhibitors"}},[t._v("#")]),t._v(" Creating Inhibitors!")]),t._v(" "),s("p",[t._v("Woah! You are almost half way done with understanding all of Discordeno. Amazing\nisn't it? Something you may have noticed in the last section was there were some\noptions that prevented some commands from running like "),s("code",[t._v("dmOnly")]),t._v(" or the\npermission options. We created a setting to prevent the monitor from running in\ncertain channels. What if we wanted to do prevent commands from happening? How\nwould we prevent commands from running?")]),t._v(" "),s("h2",{attrs:{id:"what-is-an-inhibitor"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#what-is-an-inhibitor"}},[t._v("#")]),t._v(" What is an Inhibitor?")]),t._v(" "),s("p",[t._v("Inhibitors are very similar to how monitors work. A monitor runs on every\nmessage but an inhibitor runs on every command. Remember all those command\noptions like cooldown, permissions, permissionLevel, nsfw, etc... each and every\none of these options has an inhibitor that checks commands for these settings.")]),t._v(" "),s("p",[t._v("Let's create our own inhibitor that would prevent commands from being used if\nthe user is not a VIP user.")]),t._v(" "),s("blockquote",[s("p",[s("strong",[t._v("Note:")]),t._v(" It is important to remember that everything below can be done with a\nsimple permission level as well. We will create our own custom permission\nlevels but for the purposes of this guide and to be able to learn about\nInhibitors, we will be using an inhibitor.")])]),t._v(" "),s("h2",{attrs:{id:"creating-the-file"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#creating-the-file"}},[t._v("#")]),t._v(" Creating the File")]),t._v(" "),s("p",[t._v("Let's start by creating a file inside the inhibitors folder called "),s("code",[t._v("boosted.ts")]),t._v("\nand paste the following snippet of code:")]),t._v(" "),s("div",{staticClass:"language-ts extra-class"},[s("pre",{pre:!0,attrs:{class:"language-ts"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" botCache "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"../../deps.ts"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nbotCache"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("inhibitors"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("set")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"inhibitorname"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("async")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("message"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" command"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" guild"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Your code goes here")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v("Inhibitors can take up to 3 arguments.")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("message")]),t._v(": The message object that triggered the command.")]),t._v(" "),s("li",[s("code",[t._v("command")]),t._v(": The command object itself that was triggered.")]),t._v(" "),s("li",[s("code",[t._v("guild")]),t._v(": The server guild object where this command was ran.")])]),t._v(" "),s("h2",{attrs:{id:"understanding-how-inhibitors-function"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#understanding-how-inhibitors-function"}},[t._v("#")]),t._v(" Understanding How Inhibitors Function")]),t._v(" "),s("p",[t._v("To block a command you have to return a truthy value.")]),t._v(" "),s("ul",[s("li",[s("strong",[t._v("return true;")]),t._v(" If you return true the inhibitor will block the execution of\nthe command. To allow a command return a falsey value.")]),t._v(" "),s("li",[s("strong",[t._v("return false;")]),t._v(" If you return false the inhibitor will not block the error.")])]),t._v(" "),s("div",{staticClass:"language-ts extra-class"},[s("pre",{pre:!0,attrs:{class:"language-ts"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// If the command is not VIP only we can allow this command to execute")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("command"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("vipOnly"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// The bot's support server")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" guild "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" cache"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("guilds"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("get")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("configs"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("supportServerID"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// If the command author is not in the server they won't have the vip role")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" member "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" message"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("member "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("||")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getMember")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("guild"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("id"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" message"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("author"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("id"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("catch")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("console")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("error"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Member doesn't exist so cancel the command")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("member"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  message"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sendResponse")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token template-string"}},[s("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("Sorry, but you can not use this command until you become VIP. **Close the IRIS!!!**")]),s("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// If the user has the vip role on the support server given by patreon allow the command")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n  member"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("guilds"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("get")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("message"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("guildID"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?.")]),t._v("roles"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("includes")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n    configs"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("roleIDs"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("patreonVIPRoleID"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Alert the user they don't have vip and can't use the command")]),t._v("\nmessage"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sendResponse")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token template-string"}},[s("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("Sorry, but you can not use this command until you become a VIP. I'm sorry, Teal'c. We'll go to Disneyland next year. I promise.")]),s("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Cancel the command since the user does not have vip")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("h2",{attrs:{id:"updating-command-typings"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#updating-command-typings"}},[t._v("#")]),t._v(" Updating Command Typings")]),t._v(" "),s("p",[t._v("Since we need a new option on our commands we need to add that. Open the\n"),s("code",[t._v("src/types/commands.ts")]),t._v(" file and add in the following")]),t._v(" "),s("div",{staticClass:"language-ts extra-class"},[s("pre",{pre:!0,attrs:{class:"language-ts"}},[s("code",[t._v("vipOnly"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("boolean")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v("Once that is added, you can go into any command and mark them as vip only\ncommands.")]),t._v(" "),s("h2",{attrs:{id:"challenges"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#challenges"}},[t._v("#")]),t._v(" Challenges")]),t._v(" "),s("p",[t._v("Hell yes! We just got through the entire inhibitor section. You have now\nmastered everything related to inhibitors.")]),t._v(" "),s("p",[t._v("You can now try and get a little more practice with inhibitors by trying to\nchallenge yourself and make your own inhibitors. Don't worry if you can't think\nof any good use cases for inhibitors.")]),t._v(" "),s("p",[t._v("Majority of Discordeno bots do not use many custom inhibitors because most of\nthe necessary/important ones already come built for you in the inhibitors\nfolder.")]),t._v(" "),s("p",[t._v("Next we will try our hands on creating tasks.")])])}),[],!1,null,null,null);n.default=e.exports}}]);