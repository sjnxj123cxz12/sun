window.__require = function t(e, o, i) {
function n(s, a) {
if (!o[s]) {
if (!e[s]) {
var r = s.split("/");
r = r[r.length - 1];
if (!e[r]) {
var l = "function" == typeof __require && __require;
if (!a && l) return l(r, !0);
if (c) return c(r, !0);
throw new Error("Cannot find module '" + s + "'");
}
s = r;
}
var p = o[s] = {
exports: {}
};
e[s][0].call(p.exports, function(t) {
return n(e[s][1][t] || t);
}, p, p.exports, t, e, o, i);
}
return o[s].exports;
}
for (var c = "function" == typeof __require && __require, s = 0; s < i.length; s++) n(i[s]);
return n;
}({
"LabelIncrement.SicboDPQ": [ function(t, e, o) {
"use strict";
cc._RF.push(e, "71da54K7fRGObZxq1XbB7ri", "LabelIncrement.SicboDPQ");
var i, n = this && this.__extends || (i = function(t, e) {
return (i = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
i(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), c = this && this.__decorate || function(t, e, o, i) {
var n, c = arguments.length, s = c < 3 ? e : null === i ? i = Object.getOwnPropertyDescriptor(e, o) : i;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, o, i); else for (var a = t.length - 1; a >= 0; a--) (n = t[a]) && (s = (c < 3 ? n(s) : c > 3 ? n(e, o, s) : n(e, o)) || s);
return c > 3 && s && Object.defineProperty(e, o, s), s;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var s = t("./SicboDPQ.Const"), a = cc._decorator, r = a.ccclass, l = a.property, p = function(t) {
n(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.label = null;
e.surfix = "";
e.duration = 1.5;
e.fromValue = 0;
e.toValue = 0;
e.range = 0;
e.sign = 0;
e.canRun = !1;
e.delta = 0;
e.rootDuration = 0;
e.durationNormal = 1.5;
e.durationAn = 2;
e.durationDam = 4;
e.durationKhung = 6;
e.durationAnHu = 8;
return e;
}
e.prototype.onLoad = function() {
this.label = this.node.getComponent(cc.Label);
this.duration >= 2.4 ? this.rootDuration = 3 : this.rootDuration = 1;
this.duration = 1;
this.durationNormal = 1.5;
this.durationAn = 2;
this.durationDam = 4;
this.durationKhung = 6;
this.durationAnHu = 8;
};
e.prototype.update = function(t) {
if (this.canRun) {
this.delta += t;
if (this.delta > this.duration) {
this.label.string = this.formatNumber(this.toValue) + this.surfix;
this.canRun = !1;
} else this.label.string = this.formatNumber(Math.round(this.fromValue + this.delta / this.duration * this.range * this.sign)) + this.surfix;
}
};
e.prototype.formatNumber = function(t) {
return s.SicboDPQConst.formatNumberMin(t);
};
e.prototype.tweenValueto = function(t, e) {
this.duration = e || this.rootDuration;
this.tweenValue(this.toValue, t, e);
};
e.prototype.tweenValueWithTime = function(t, e, o) {
this.duration = o;
this.startTween(t, e);
};
e.prototype.tweenValue = function(t, e, o) {
this.duration = null != o ? o : this.rootDuration;
this.canRun = !1;
this.startTween(t, e);
};
e.prototype.startTween = function(t, e) {
this.fromValue = t;
this.toValue = e;
this.range = Math.abs(this.toValue - this.fromValue);
this.toValue >= this.fromValue ? this.sign = 1 : this.sign = -1;
this.delta = 0;
this.fromValue !== this.toValue ? this.canRun = !0 : this.canRun = !1;
if (!1 === this.canRun) {
null === this.label && (this.label = this.node.getComponent(cc.Label));
this.label.string = this.formatNumber(this.toValue) + this.surfix;
}
};
e.prototype.setValue = function(t) {
this.canRun = !1;
this.fromValue = t;
this.toValue = t;
null === this.label && (this.label = this.node.getComponent(cc.Label));
this.label.string = this.formatNumber(this.toValue) + this.surfix;
};
e.prototype.setValueText = function(t) {
null === this.label && (this.label = this.node.getComponent(cc.Label));
this.label.string = t;
};
c([ l(cc.Label) ], e.prototype, "label", void 0);
c([ l ], e.prototype, "surfix", void 0);
c([ l ], e.prototype, "duration", void 0);
c([ l ], e.prototype, "fromValue", void 0);
c([ l ], e.prototype, "toValue", void 0);
c([ l ], e.prototype, "range", void 0);
c([ l ], e.prototype, "sign", void 0);
c([ l ], e.prototype, "canRun", void 0);
c([ l ], e.prototype, "delta", void 0);
return c([ r ], e);
}(cc.Component);
o.default = p;
cc._RF.pop();
}, {
"./SicboDPQ.Const": "SicboDPQ.Const"
} ],
"SicboDPQ.Assets": [ function(t, e, o) {
"use strict";
cc._RF.push(e, "7fd9fIOf95JUaQ2LiEfc0rI", "SicboDPQ.Assets");
var i, n = this && this.__extends || (i = function(t, e) {
return (i = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
i(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), c = this && this.__decorate || function(t, e, o, i) {
var n, c = arguments.length, s = c < 3 ? e : null === i ? i = Object.getOwnPropertyDescriptor(e, o) : i;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, o, i); else for (var a = t.length - 1; a >= 0; a--) (n = t[a]) && (s = (c < 3 ? n(s) : c > 3 ? n(e, o, s) : n(e, o)) || s);
return c > 3 && s && Object.defineProperty(e, o, s), s;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var s = cc._decorator, a = s.ccclass, r = s.property, l = function(t) {
n(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.avatarDefault = null;
e.listAvatar = [];
e.listSprRank = [];
e.sfChips = [];
e.sfDicesV2 = [];
e.sfNans = [];
e.sfNodeDice = [];
e.sfBacks = [];
e.sfDots = [];
e.sfGateBet = [];
e.sfResult = [];
e.bmfWin = null;
e.bmfLose = null;
return e;
}
o = e;
e.prototype.onLoad = function() {
o.instance = this;
};
e.prototype.getSprAvatar = function(t) {
return t < 0 || t > 14 ? this.avatarDefault : this.listAvatar.length > 0 ? this.listAvatar[t] : void 0;
};
e.prototype.getChip = function(t) {
return this.sfChips[t];
};
e.prototype.getSprNan = function(t) {
return this.sfNans[t];
};
e.prototype.getSprDicesV2 = function(t) {
return this.sfDicesV2[t - 1];
};
e.prototype.getSprGateBet = function(t) {
return this.sfGateBet[t];
};
e.prototype.getSfResult = function(t) {
return this.sfResult[t];
};
e.prototype.getSprNodeDice = function(t) {
var e = t.Result, o = t.ChipsData.split(","), i = parseInt(o[0]), n = parseInt(o[1]), c = parseInt(o[2]);
return i == n && i == c ? this.sfNodeDice[2] : e < 11 ? this.sfNodeDice[0] : this.sfNodeDice[1];
};
e.prototype.getSprRankID = function(t) {
return this.listSprRank[t];
};
var o;
c([ r(cc.SpriteFrame) ], e.prototype, "avatarDefault", void 0);
c([ r([ cc.SpriteFrame ]) ], e.prototype, "listAvatar", void 0);
c([ r([ cc.SpriteFrame ]) ], e.prototype, "listSprRank", void 0);
c([ r([ cc.SpriteFrame ]) ], e.prototype, "sfChips", void 0);
c([ r([ cc.SpriteFrame ]) ], e.prototype, "sfDicesV2", void 0);
c([ r([ cc.SpriteFrame ]) ], e.prototype, "sfNans", void 0);
c([ r([ cc.SpriteFrame ]) ], e.prototype, "sfNodeDice", void 0);
c([ r([ cc.SpriteFrame ]) ], e.prototype, "sfBacks", void 0);
c([ r([ cc.SpriteFrame ]) ], e.prototype, "sfDots", void 0);
c([ r([ cc.SpriteFrame ]) ], e.prototype, "sfGateBet", void 0);
c([ r([ cc.SpriteFrame ]) ], e.prototype, "sfResult", void 0);
return o = c([ a ], e);
}(cc.Component);
o.default = l;
cc._RF.pop();
}, {} ],
"SicboDPQ.Chat.NetworkClient": [ function(t, e, o) {
"use strict";
cc._RF.push(e, "3caafqy9RFPuYZTvpVxTYAG", "SicboDPQ.Chat.NetworkClient");
var i, n = this && this.__extends || (i = function(t, e) {
return (i = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
i(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), c = this && this.__decorate || function(t, e, o, i) {
var n, c = arguments.length, s = c < 3 ? e : null === i ? i = Object.getOwnPropertyDescriptor(e, o) : i;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, o, i); else for (var a = t.length - 1; a >= 0; a--) (n = t[a]) && (s = (c < 3 ? n(s) : c > 3 ? n(e, o, s) : n(e, o)) || s);
return c > 3 && s && Object.defineProperty(e, o, s), s;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var s = t("./SicboDPQChat"), a = cc._decorator, r = a.ccclass, l = (a.property, 
function(t) {
n(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.mSignalr = null;
e.isConnect = !1;
return e;
}
o = e;
Object.defineProperty(e, "instance", {
get: function() {
o._instance || (o._instance = new o());
return o._instance;
},
enumerable: !1,
configurable: !0
});
e.prototype.onLoad = function() {
o._instance = this;
};
e.prototype.connect = function() {
var t = {
url: "https://chat." + lngui.ConfigManager.instance.ConfigInfo.Api + "/signalr/negotiate",
ip: "http://18.138.207.162:8092/signalr/negotiate",
hub: "chatHub",
gate: "hit.club"
};
cc.systemEvent.off("OnChatSicboDPQSocketEvent", this.onResponeData, this);
cc.systemEvent.on("OnChatSicboDPQSocketEvent", this.onResponeData, this);
this.mSignalr = new lngui.GateSignalR();
this.mSignalr.connect("OnChatSicboDPQSocketEvent", t.url, t.hub, t.gate, lngui.UserManager.instance.mainUserInfo.cookie, !1);
lngui.GateWebSocketManager.pushSignalR(this.mSignalr);
console.log("Đã connect");
};
e.prototype.onEnable = function() {
lngui.EventDispatch.instance.add(lngui.EVENT_GAMECORE.LOGIN_SUCCESS, this.connect, this);
this.connect();
};
e.prototype.onDisable = function() {
lngui.EventDispatch.instance.remove(lngui.EVENT_GAMECORE.LOGIN_SUCCESS, this.connect, this);
this.closeWS();
lngui.ZLog.log("=====================CLOSE WS NOTI===============================");
};
e.prototype.onResponeData = function(t) {
this.isEmpty(t) || t.s && "error" == t.s || this.onWebSocketCallback(t);
};
e.prototype.isEmpty = function(t) {
for (var e in t) if (t.hasOwnProperty(e)) return !1;
return JSON.stringify(t) === JSON.stringify({});
};
e.prototype.onWebSocketCallback = function(t) {
if (("open" == t.s || "reconnect" == t.s || "1" == t.s) && !this.isConnect) {
this.isConnect = !0;
this.connectSuccess();
this.registerChat();
}
t.R < 0 && lngui.UITextManager.showCenterNotification("Lỗi " + t.R);
if (t.M && Array.isArray(t.M) && 0 != t.M.length) for (var e = t.M.length, o = 0; o < e; ++o) {
var i = t.M[o];
if (i.A && null != i.A[0] && null != i.A[0]) {
var n = i.A[0];
switch (i.M) {
case "receiveMessage":
s.default.instance.receiveMessage(n);
break;

case "listLastMessages":
s.default.instance.listLastMessages(n);
}
}
}
};
e.prototype.registerChat = function() {
this.sendSignalR("RegisterChat", [ s.default.instance.chatChanel ]);
};
e.prototype.pingPong = function() {
this.sendSignalR("PingPong", []);
};
e.prototype.connectSuccess = function() {
lngui.ZLog.log("Connect Sucesss");
};
e.prototype.closeWS = function() {
cc.systemEvent.off("OnChatXocDiaSocketEvent", this.onResponeData, this);
this.mSignalr.close();
lngui.GateWebSocketManager.removeSignalR(this.mSignalr);
this.mSignalr = null;
this.isConnect = !1;
};
e.prototype.sendSignalR = function(t, e) {
lngui.ZLog.log("SendSocket=======>" + t + "==data==" + JSON.stringify(e));
e = e || [];
this.mSignalr && this.mSignalr.send(t, e);
};
var o;
e._instance = null;
return o = c([ r ], e);
}(cc.Component));
o.default = l;
cc._RF.pop();
}, {
"./SicboDPQChat": "SicboDPQChat"
} ],
"SicboDPQ.ChatController": [ function(t, e, o) {
"use strict";
cc._RF.push(e, "1afacSLZE5C9JF4yokSzNfF", "SicboDPQ.ChatController");
var i, n = this && this.__extends || (i = function(t, e) {
return (i = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
i(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), c = this && this.__decorate || function(t, e, o, i) {
var n, c = arguments.length, s = c < 3 ? e : null === i ? i = Object.getOwnPropertyDescriptor(e, o) : i;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, o, i); else for (var a = t.length - 1; a >= 0; a--) (n = t[a]) && (s = (c < 3 ? n(s) : c > 3 ? n(e, o, s) : n(e, o)) || s);
return c > 3 && s && Object.defineProperty(e, o, s), s;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var s = t("../../network/SicboDPQ.NetWorkClient"), a = t("../../SicboDPQ.Common"), r = t("../../SicboDPQ.Controller"), l = t("./SicboDPQ.ChatListView"), p = cc._decorator, u = p.ccclass, h = p.property, d = function(t) {
n(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.chatListView = null;
e.edBoxChat = null;
e.btnSendChat = null;
e.nodeDismiss = null;
e.nodeEmotion = null;
e.nodeNormalChat = null;
e.isOpenChat = !1;
return e;
}
o = e;
e.prototype.onLoad = function() {
o.instance = this;
this.listChat = [];
this.emotionStr = [ "1-waaaht", "2-misdoubt", "3-boss", "4-beauty", "5-byebye", "6-after_boom", "7-matrix", "8-sweat", "9-choler", "10-beated", "11-angry", "12-ah", "13-beat", "14-adore", "15-beat_shot", "16-extreme", "20-burn_joss_stick", "21-baffle", "22-cool", "23-dribble", "24-tire", "25-BigSmile" ];
this.chatShortcuts = [ "Nói nhiều quá đánh đi!", "Ngại gì vết bẩn?", "Chơi thì chơi ko chơi thì té", "Ahihi!", "Max nhọ !!!", "Ngon quá hehe!" ];
this.isOpenChat = !1;
};
e.prototype.onEnable = function() {
this.nodeDismiss.active = this.isOpenChat;
};
e.prototype.onShowChat = function() {
if (0 == this.isOpenChat) {
this.isOpenChat = !0;
this.node.stopAllActions();
(e = cc.moveTo(.5, cc.v2(-700, 0))).easing(cc.easeQuadraticActionInOut());
var t = cc.callFunc(this.onShowFinish.bind(this), null);
this.node.runAction(cc.sequence(e, t));
} else {
this.isOpenChat = !1;
this.node.stopAllActions();
var e;
(e = cc.moveTo(.5, cc.v2(-1500, 0))).easing(cc.easeQuadraticActionInOut());
t = cc.callFunc(this.onShowFinish.bind(this), null);
this.node.runAction(cc.sequence(e, t));
}
};
e.prototype.onShowFinish = function() {
this.nodeDismiss.active = this.isOpenChat;
};
e.prototype.checkIsEmotion = function() {};
e.prototype.getIndexEmotion = function() {};
e.prototype.addChatContent = function(t) {
this.listChat.push(t);
this.listChat.length > 25 && this.listChat.splice(0, 1);
this.chatListView.initialize(t);
};
e.prototype.editingReturn = function() {
if ("" == this.edBoxChat.string || this.edBoxChat.string.length <= 1) r.default.instance.showMsg("Nội dung chát quá ngắn!"); else if (this.edBoxChat.string.length >= 100) r.default.instance.showMsg("Nội dung chát quá dài!"); else {
var t = new a.default.ModelsSignalr();
t.M = "SendMessage";
t.A = [ this.edBoxChat.string.trim() ];
s.default.getInstance().send(t);
this.edBoxChat.string = "";
}
};
e.prototype.chatShortcutClicked = function(t, e) {
var o = parseInt(e), i = new a.default.ModelsSignalr();
i.M = "SendMessage";
i.A = [ this.chatShortcuts[o] ];
s.default.getInstance().send(i);
};
e.prototype.chatEmotionClicked = function(t, e) {
var o = parseInt(e), i = new a.default.ModelsSignalr();
i.M = "SendMessage";
i.A = [ this.emotionStr[o] ];
s.default.getInstance().send(i);
};
e.prototype.showEmotionClicked = function() {
if (this.nodeEmotion.active) {
this.nodeEmotion.active = !1;
this.nodeNormalChat.active = !0;
} else {
this.nodeEmotion.active = !0;
this.nodeNormalChat.active = !1;
}
};
var o;
e.instance = null;
c([ h(l.default) ], e.prototype, "chatListView", void 0);
c([ h(cc.EditBox) ], e.prototype, "edBoxChat", void 0);
c([ h(cc.Button) ], e.prototype, "btnSendChat", void 0);
c([ h(cc.Node) ], e.prototype, "nodeDismiss", void 0);
c([ h(cc.Node) ], e.prototype, "nodeEmotion", void 0);
c([ h(cc.Node) ], e.prototype, "nodeNormalChat", void 0);
return o = c([ u ], e);
}(cc.Component);
o.default = d;
cc._RF.pop();
}, {
"../../SicboDPQ.Common": "SicboDPQ.Common",
"../../SicboDPQ.Controller": "SicboDPQ.Controller",
"../../network/SicboDPQ.NetWorkClient": "SicboDPQ.NetWorkClient",
"./SicboDPQ.ChatListView": "SicboDPQ.ChatListView"
} ],
"SicboDPQ.ChatListView": [ function(t, e, o) {
"use strict";
cc._RF.push(e, "6b08ajfI25HXrPK/kPeWeaM", "SicboDPQ.ChatListView");
var i, n = this && this.__extends || (i = function(t, e) {
return (i = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
i(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), c = this && this.__decorate || function(t, e, o, i) {
var n, c = arguments.length, s = c < 3 ? e : null === i ? i = Object.getOwnPropertyDescriptor(e, o) : i;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, o, i); else for (var a = t.length - 1; a >= 0; a--) (n = t[a]) && (s = (c < 3 ? n(s) : c > 3 ? n(e, o, s) : n(e, o)) || s);
return c > 3 && s && Object.defineProperty(e, o, s), s;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var s = t("../../SicboDPQ.Assets"), a = t("../../SicboDPQ.InfoView"), r = cc._decorator, l = r.ccclass, p = r.property, u = function(t) {
n(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.content = null;
e.template = null;
e.srcContent = null;
return e;
}
e.prototype.onEnable = function() {
this.content.removeAllChildren();
this.template.active = !1;
};
e.prototype.initialize = function(t) {
var e = cc.instantiate(this.template);
parseInt(t[3]) == a.default.instance.getAccountIdIsMe() ? e.children[1].color = cc.Color.YELLOW : e.children[1].color = cc.Color.GREEN;
e.children[0].active = !1;
e.children[1].getComponent(cc.Label).string = t[0];
e.children[2].getComponent(cc.Sprite).spriteFrame = s.default.instance.getSprRankID(parseInt(t[5]) - 1);
e.children[3].getComponent(cc.Label).string = t[1];
e.active = !0;
e.parent = this.content;
this.srcContent.scrollToBottom();
};
c([ p(cc.Node) ], e.prototype, "content", void 0);
c([ p(cc.Node) ], e.prototype, "template", void 0);
c([ p(cc.ScrollView) ], e.prototype, "srcContent", void 0);
return c([ l ], e);
}(cc.Component);
o.default = u;
cc._RF.pop();
}, {
"../../SicboDPQ.Assets": "SicboDPQ.Assets",
"../../SicboDPQ.InfoView": "SicboDPQ.InfoView"
} ],
"SicboDPQ.ChipItem": [ function(t, e, o) {
"use strict";
cc._RF.push(e, "cff75BwsUhMvrb6M7BsHobB", "SicboDPQ.ChipItem");
var i, n = this && this.__extends || (i = function(t, e) {
return (i = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
i(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), c = this && this.__decorate || function(t, e, o, i) {
var n, c = arguments.length, s = c < 3 ? e : null === i ? i = Object.getOwnPropertyDescriptor(e, o) : i;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, o, i); else for (var a = t.length - 1; a >= 0; a--) (n = t[a]) && (s = (c < 3 ? n(s) : c > 3 ? n(e, o, s) : n(e, o)) || s);
return c > 3 && s && Object.defineProperty(e, o, s), s;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var s = t("./SicboDPQ.Assets"), a = t("./SicboDPQ.ChipPool"), r = t("./SicboDPQ.Controller"), l = t("./SicboDPQ.InputView"), p = cc._decorator, u = p.ccclass, h = p.property, d = function(t) {
n(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.spriteChip = null;
e.duration = .3;
e.betIndex = -1;
e.chipIndex = 0;
e.gate = -1;
e.playerId = 0;
e.position = null;
return e;
}
o = e;
e.prototype.onLoad = function() {
o.instance = this;
this.duration = .5;
this.betIndex = -1;
this.playerId = 0;
this.position = new cc.Vec2();
};
e.prototype.setChip = function(t) {
this.chipIndex = t;
this.spriteChip.spriteFrame = s.default.instance.getChip(t);
};
e.prototype.setPosition = function(t) {
this.node.position = t;
};
e.prototype.moveToEnd = function(t, e) {
if (this.node) {
var o = .2 + e / 10;
o > 1.2 && (o = 1.2);
var i = cc.moveTo(o, t);
i.easing(cc.easeQuadraticActionInOut());
var n = this.position.lerp(t, 1), c = this.node.parent.convertToWorldSpaceAR(this.node.position), s = (this.node.convertToNodeSpaceAR(c), 
e % 2 == 0 ? n.x - n.x / 2 : -(n.x - n.x / 2)), a = e % 2 == 0 ? n.y - n.y / 2 : -(n.y - n.y / 2), r = (cc.bezierTo(o, [ cc.v2(this.node.position.x, this.node.position.y / 2), cc.v2(s, a), t ]), 
cc.callFunc(this.moveToEndFinish, null, this.node)), l = cc.fadeOut(o);
this.node.runAction(cc.sequence(i, l, r));
}
};
e.prototype.moveToEndStop = function(t, e) {
if (this.node) {
var o = .2 + e / 10;
o > 1.2 && (o = 1.2);
var i = cc.moveTo(o, t);
i.easing(cc.easeQuadraticActionInOut());
var n = this.position.lerp(t, 1), c = this.node.parent.convertToWorldSpaceAR(this.node.position), s = (this.node.convertToNodeSpaceAR(c), 
e % 2 == 0 ? n.x - n.x / 2 : -(n.x - n.x / 2)), a = e % 2 == 0 ? n.y - n.y / 2 : -(n.y - n.y / 2), r = (cc.bezierTo(o, [ cc.v2(this.node.position.x, this.node.position.y), cc.v2(s, a), t ]), 
cc.callFunc(this.moveToEndFinish, null, this.node)), l = cc.fadeIn(o);
this.node.runAction(cc.sequence(i, l, r));
}
};
e.prototype.moveTo = function(t, e) {
void 0 === e && (e = -1);
this.node.opacity = 100;
this.gate = e;
var o = cc.moveTo(this.duration, t);
o.easing(cc.easeOut(.5));
o.easing(cc.easeQuadraticActionInOut());
var i = cc.callFunc(this.moveFinish.bind(this), null, this.node);
this.node.runAction(cc.sequence(o, i));
};
e.prototype.moveFinish = function(t) {
t.opacity = 255;
l.default.instance.onCallBackMoveToChipUserBet(this.gate);
};
e.prototype.moveToEndFinish = function(t) {
try {
setTimeout(function() {
r.default && r.default.instance.node && a.default.instance.putToPool(t);
}, 500);
} catch (t) {}
};
var o;
c([ h(cc.Sprite) ], e.prototype, "spriteChip", void 0);
return o = c([ u ], e);
}(cc.Component);
o.default = d;
cc._RF.pop();
}, {
"./SicboDPQ.Assets": "SicboDPQ.Assets",
"./SicboDPQ.ChipPool": "SicboDPQ.ChipPool",
"./SicboDPQ.Controller": "SicboDPQ.Controller",
"./SicboDPQ.InputView": "SicboDPQ.InputView"
} ],
"SicboDPQ.ChipPool": [ function(t, e, o) {
"use strict";
cc._RF.push(e, "54c25FteVxLI5MstQt4NVoz", "SicboDPQ.ChipPool");
var i, n = this && this.__extends || (i = function(t, e) {
return (i = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
i(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), c = this && this.__decorate || function(t, e, o, i) {
var n, c = arguments.length, s = c < 3 ? e : null === i ? i = Object.getOwnPropertyDescriptor(e, o) : i;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, o, i); else for (var a = t.length - 1; a >= 0; a--) (n = t[a]) && (s = (c < 3 ? n(s) : c > 3 ? n(e, o, s) : n(e, o)) || s);
return c > 3 && s && Object.defineProperty(e, o, s), s;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var s = cc._decorator, a = s.ccclass, r = s.property, l = function(t) {
n(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.chip = null;
e.nodePool = null;
return e;
}
o = e;
e.prototype.onLoad = function() {
o.instance = this;
this.createNodePool();
};
e.prototype.createNodePool = function() {
this.nodePool = new cc.NodePool();
for (var t = 0; t < 10; t++) this.nodePool.put(cc.instantiate(this.chip));
};
e.prototype.putToPool = function(t) {
try {
this.nodePool && this.nodePool.put(t);
} catch (t) {}
};
e.prototype.clearPool = function() {
this.nodePool && this.nodePool.clear();
};
e.prototype.createChip = function() {
return this.nodePool.size() > 0 ? this.nodePool.get() : cc.instantiate(this.chip);
};
var o;
c([ r(cc.Prefab) ], e.prototype, "chip", void 0);
return o = c([ a ], e);
}(cc.Component);
o.default = l;
cc._RF.pop();
}, {} ],
"SicboDPQ.Common": [ function(t, e, o) {
"use strict";
cc._RF.push(e, "2074e0BHE9DF4Cg8KM2SYe5", "SicboDPQ.Common");
Object.defineProperty(o, "__esModule", {
value: !0
});
var i;
(function(t) {
var e;
t.ModelsSignalr = function() {
this.M = null;
this.A = null;
this.H = null;
this.I = null;
};
(function(t) {
t[t.UNKNOW = -1] = "UNKNOW";
t[t.WAITING = 0] = "WAITING";
t[t.SHAKING = 1] = "SHAKING";
t[t.BETTING = 2] = "BETTING";
t[t.OPEN_PLATE = 3] = "OPEN_PLATE";
t[t.SHOW_RESULT = 4] = "SHOW_RESULT";
t[t.NEW_GAME = 5] = "NEW_GAME";
})(t.GAMESTATE || (t.GAMESTATE = {}));
(function(t) {
t[t.XIU = 0] = "XIU";
t[t.TAI = 1] = "TAI";
t[t.CHAN = 2] = "CHAN";
t[t.LE = 3] = "LE";
t[t.STORM = 4] = "STORM";
t[t.S11 = 5] = "S11";
t[t.S22 = 6] = "S22";
t[t.S33 = 7] = "S33";
t[t.S44 = 8] = "S44";
t[t.S55 = 9] = "S55";
t[t.S66 = 10] = "S66";
t[t.S111 = 11] = "S111";
t[t.S222 = 12] = "S222";
t[t.S333 = 13] = "S333";
t[t.S444 = 14] = "S444";
t[t.S555 = 15] = "S555";
t[t.S666 = 16] = "S666";
t[t.SR4 = 17] = "SR4";
t[t.SR5 = 18] = "SR5";
t[t.SR6 = 19] = "SR6";
t[t.SR7 = 20] = "SR7";
t[t.SR8 = 21] = "SR8";
t[t.SR9 = 22] = "SR9";
t[t.SR10 = 23] = "SR10";
t[t.SR11 = 24] = "SR11";
t[t.SR12 = 25] = "SR12";
t[t.SR13 = 26] = "SR13";
t[t.SR14 = 27] = "SR14";
t[t.SR15 = 28] = "SR15";
t[t.SR16 = 29] = "SR16";
t[t.SR17 = 30] = "SR17";
t[t.SI12 = 31] = "SI12";
t[t.SI13 = 32] = "SI13";
t[t.SI14 = 33] = "SI14";
t[t.SI15 = 34] = "SI15";
t[t.SI16 = 35] = "SI16";
t[t.SI23 = 36] = "SI23";
t[t.SI24 = 37] = "SI24";
t[t.SI25 = 38] = "SI25";
t[t.SI26 = 39] = "SI26";
t[t.SI34 = 40] = "SI34";
t[t.SI35 = 41] = "SI35";
t[t.SI36 = 42] = "SI36";
t[t.SI45 = 43] = "SI45";
t[t.SI46 = 44] = "SI46";
t[t.SI56 = 45] = "SI56";
t[t.SA1 = 46] = "SA1";
t[t.SA2 = 47] = "SA2";
t[t.SA3 = 48] = "SA3";
t[t.SA4 = 49] = "SA4";
t[t.SA5 = 50] = "SA5";
t[t.SA6 = 51] = "SA6";
})(e = t.GATE || (t.GATE = {}));
t.SicboDPQSoiCau = function() {
this.ChipsData = "";
this.GatesData = "";
this.Result = 0;
};
t.UserInfo = function() {
this.AccountID = -1;
this.Avatar = -1;
this.Balance = -1;
this.DeviceID = -1;
this.NickName = "";
this.ServiceID = -1;
this.Vip = -1;
};
var o = function() {
function t() {
this.Elapsed = 0;
this.Phrase = 0;
this.TotalBet = 0;
}
t.getInstance = function() {
null == this.instance && (this.instance = new t());
return this.instance;
};
t.prototype.setDefaultData = function(t) {
this.Elapsed = t.Elapsed;
this.Phrase = t.Phrase;
this.Result = t.Result;
this.SessionID = t.SessionID;
this.StringResult = t.StringResult;
this.TotalBetChan = t.TotalBetChan;
this.TotalBetLe = t.TotalBetLe;
this.TotalBetS11 = t.TotalBetS11;
this.TotalBetS22 = t.TotalBetS22;
this.TotalBetS33 = t.TotalBetS33;
this.TotalBetS44 = t.TotalBetS44;
this.TotalBetS55 = t.TotalBetS55;
this.TotalBetS66 = t.TotalBetS66;
this.TotalBetS111 = t.TotalBetS111;
this.TotalBetS222 = t.TotalBetS222;
this.TotalBetS333 = t.TotalBetS333;
this.TotalBetS444 = t.TotalBetS444;
this.TotalBetS555 = t.TotalBetS555;
this.TotalBetS666 = t.TotalBetS666;
this.TotalBetSA1 = t.TotalBetSA1;
this.TotalBetSA2 = t.TotalBetSA2;
this.TotalBetSA3 = t.TotalBetSA3;
this.TotalBetSA4 = t.TotalBetSA4;
this.TotalBetSA5 = t.TotalBetSA5;
this.TotalBetSA6 = t.TotalBetSA6;
this.TotalBetSI12 = t.TotalBetSI12;
this.TotalBetSI13 = t.TotalBetSI13;
this.TotalBetSI14 = t.TotalBetSI14;
this.TotalBetSI15 = t.TotalBetSI15;
this.TotalBetSI16 = t.TotalBetSI16;
this.TotalBetSI23 = t.TotalBetSI23;
this.TotalBetSI24 = t.TotalBetSI24;
this.TotalBetSI25 = t.TotalBetSI25;
this.TotalBetSI26 = t.TotalBetSI26;
this.TotalBetSI34 = t.TotalBetSI34;
this.TotalBetSI35 = t.TotalBetSI35;
this.TotalBetSI36 = t.TotalBetSI36;
this.TotalBetSI45 = t.TotalBetSI45;
this.TotalBetSI46 = t.TotalBetSI46;
this.TotalBetSI56 = t.TotalBetSI56;
this.TotalBetSR4 = t.TotalBetSR4;
this.TotalBetSR5 = t.TotalBetSR5;
this.TotalBetSR6 = t.TotalBetSR6;
this.TotalBetSR7 = t.TotalBetSR7;
this.TotalBetSR8 = t.TotalBetSR8;
this.TotalBetSR9 = t.TotalBetSR9;
this.TotalBetSR10 = t.TotalBetSR10;
this.TotalBetSR11 = t.TotalBetSR11;
this.TotalBetSR12 = t.TotalBetSR12;
this.TotalBetSR13 = t.TotalBetSR13;
this.TotalBetSR14 = t.TotalBetSR14;
this.TotalBetSR15 = t.TotalBetSR15;
this.TotalBetSR16 = t.TotalBetSR16;
this.TotalBetSR17 = t.TotalBetSR17;
this.TotalBetStorm = t.TotalBetStorm;
this.TotalBetTai = t.TotalBetTai;
this.TotalBetXiu = t.TotalBetXiu;
};
t.prototype.setInfoUser = function(t) {
this.UserInfo = t.Account;
};
return t;
}();
t.GameData = o;
var i = function() {
function t() {}
t.getInstance = function() {
null == this.instance && (this.instance = new t());
return this.instance;
};
t.prototype.getDeviceType = function() {
return cc.sys.os === cc.sys.OS_IOS ? 3 : cc.sys.os === cc.sys.OS_ANDROID ? 2 : 1;
};
t.prototype.formatName = function(t) {
return null == t ? "" : t.length > 7 ? t.substring(0, 7) + "..." : t;
};
t.prototype.convertGateIdToName = function(t) {
var o = "";
switch (t) {
case e.XIU:
o = "XỈU";
break;

case e.TAI:
o = "TÀI";
break;

case e.CHAN:
o = "CHẴN";
break;

case e.LE:
o = "LẺ";
break;

case e.STORM:
o = "BÃO BẤT KÌ";
break;

case e.S11:
o = "CẶP SỐ 1";
break;

case e.S22:
o = "CẶP SỐ 2";
break;

case e.S33:
o = "CẶP SỐ 3";
break;

case e.S44:
o = "CẶP SỐ 4";
break;

case e.S55:
o = "CẶP SỐ 5";
break;

case e.S66:
o = "CẶP SỐ 6";
break;

case e.S111:
o = "BÃO 1";
break;

case e.S222:
o = "BÃO 2";
break;

case e.S333:
o = "BÃO 3";
break;

case e.S444:
o = "BÃO 4";
break;

case e.S555:
o = "BÃO 5";
break;

case e.S666:
o = "BÃO 6";
break;

case e.SR4:
o = "TỔNG 4";
break;

case e.SR5:
o = "TỔNG 5";
break;

case e.SR6:
o = "TỔNG 6";
break;

case e.SR7:
o = "TỔNG 7";
break;

case e.SR8:
o = "TỔNG 8";
break;

case e.SR9:
o = "TỔNG 9";
break;

case e.SR10:
o = "TỔNG 10";
break;

case e.SR11:
o = "TỔNG 11";
break;

case e.SR12:
o = "TỔNG 12";
break;

case e.SR13:
o = "TỔNG 13";
break;

case e.SR14:
o = "TỔNG 14";
break;

case e.SR15:
o = "TỔNG 15";
break;

case e.SR16:
o = "TỔNG 16";
break;

case e.SR17:
o = "TỔNG 17";
break;

case e.SI12:
o = "CẶP SỐ 1,2";
break;

case e.SI13:
o = "CẶP SỐ 1,3";
break;

case e.SI14:
o = "CẶP SỐ 1,4";
break;

case e.SI15:
o = "CẶP SỐ 1,5";
break;

case e.SI16:
o = "CẶP SỐ 1,6";
break;

case e.SI23:
o = "CẶP SỐ 2,3";
break;

case e.SI24:
o = "CẶP SỐ 2,4";
break;

case e.SI25:
o = "CẶP SỐ 2,5";
break;

case e.SI26:
o = "CẶP SỐ 2,6";
break;

case e.SI34:
o = "CẶP SỐ 3,4";
break;

case e.SI35:
o = "CẶP SỐ 3,5";
break;

case e.SI36:
o = "CẶP SỐ 3,6";
break;

case e.SI45:
o = "CẶP SỐ 4,5";
break;

case e.SI46:
o = "CẶP SỐ 4,6";
break;

case e.SI56:
o = "CẶP SỐ 5,6";
break;

case e.SA1:
o = "1 MẶT SỐ 1";
break;

case e.SA2:
o = "1 MẶT SỐ 2";
break;

case e.SA3:
o = "1 MẶT SỐ 3";
break;

case e.SA4:
o = "1 MẶT SỐ 4";
break;

case e.SA5:
o = "1 MẶT SỐ 5";
break;

case e.SA6:
o = "1 MẶT SỐ 6";
break;

default:
o = t.toString();
}
return o;
};
t.prototype.groupItem = function(t, e) {
for (var o = new Map(), i = 0, n = t; i < n.length; i++) {
var c = n[i], s = String(c[e]);
o.has(s) || o.set(s, []);
o.get(s).push(c);
}
return Array.from(o.values());
};
t.prototype.splitArrayByIndex = function(t) {
var e = [], o = [];
t.forEach(function(t, i) {
i % 2 == 0 ? e.push(t) : o.push(t);
});
return [ e, o ];
};
return t;
}();
t.Utils = i;
})(i || (i = {}));
o.default = i;
cc._RF.pop();
}, {} ],
"SicboDPQ.Config": [ function(t, e, o) {
"use strict";
cc._RF.push(e, "270f5tGPDBKqI9imv/M8iGg", "SicboDPQ.Config");
Object.defineProperty(o, "__esModule", {
value: !0
});
var i = function() {
function t() {}
t.App = {
USE_WSS: !0,
HOST_SicboDPQ: {
host: "sicbo-bigwin." + lngui.ConfigManager.instance.ConfigInfo.Api,
hub: "gameHub"
},
ACCESS_TOKEN: "",
GATE: lngui.ConfigManager.instance.ConfigInfo.Gate,
VIP_PLAYER: 1
};
t.CPName = "";
return t;
}();
o.default = i;
cc._RF.pop();
}, {} ],
"SicboDPQ.Const": [ function(t, e, o) {
"use strict";
cc._RF.push(e, "77e52z0qFJBgodhinKPRlgl", "SicboDPQ.Const");
Object.defineProperty(o, "__esModule", {
value: !0
});
o.SicboDPQConst = void 0;
var i = function() {
function t() {}
t.formatNumber = function(t) {
return void 0 === t ? "0" : t.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
};
t.formatDateTime = function(t) {
var e = (t = t.split("T"))[0].split("-");
return e[2] + "/" + e[1] + " - " + t[1].substr(0, 5);
};
t.formatDateTime2 = function(t) {
var e = (t = t.split("T"))[0], o = t[1].split(":"), i = o[0], n = o[1], c = parseInt(i, 10), s = c >= 12 ? "PM" : "AM";
return "" + e + (c = c % 12 || 12) + ":" + n + " " + s;
};
t.formatDateTime4 = function(t) {
var e = (t = t.split("T"))[0], o = t[1].split(":"), i = o[0], n = o[1], c = o[2];
return e + " (" + i + ":" + n + ":" + Math.round(c) + ")";
};
t.formatDateTime3 = function(t) {
var e = (t = t.split("T"))[1].split(":"), o = e[0], i = e[1], n = parseInt(o, 10), c = n >= 12 ? "PM" : "AM";
return (n = n % 12 || 12) + ":" + i + " " + c;
};
t.formatUserName = function(t) {
return t.length > 10 ? t.slice(0, 9) + "..." : t;
};
t.convertToMoney = function(t) {
var e = "", o = t < 0 ? 1 : 0;
e = (t = Math.abs(t)) >= 1e3 ? t.toFixed().toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.") : t.toString();
1 == o && (e = "-" + e);
return e;
};
t.formatNumberToKMB = function(t) {
var e = t < 0 ? "-" : "";
return (t = Math.abs(t)) >= 1e9 ? e + ((t /= 1e9) % 1 == 0 ? t.toFixed(0) : t.toFixed(1)) + "B" : t >= 1e6 ? e + ((t /= 1e6) % 1 == 0 ? t.toFixed(0) : t.toFixed(1)) + "M" : t >= 1e3 ? e + ((t /= 1e3) % 1 == 0 ? t.toFixed(0) : t.toFixed(1)) + "K" : e + t.toString();
};
t.formatNumberMin = function(t) {
if (t >= 1e9) {
t = Math.ceil(t / 1e3);
return this.formatNumber(t) + "B";
}
if (t >= 1e6) {
t = Math.ceil(t / 1e3);
return this.formatNumber(t) + "M";
}
if (t >= 1e3) {
t = Math.ceil(t / 1e3);
return this.formatNumber(t) + "K";
}
return this.formatNumber(t);
};
t.formatNumberString = function(t) {
if (t >= 1e9) {
t = Math.ceil(t / 1e9);
return this.formatNumber(t) + "Tỷ";
}
if (t >= 1e6) {
t = Math.ceil(t / 1);
return this.formatNumber(t) + "M";
}
if (t >= 1e3) {
t = Math.ceil(t / 1);
return this.formatNumber(t) + "K";
}
return this.formatNumber(t);
};
t.convertToK = function(t) {
var e = "", o = t < 0 ? 1 : 0;
e = (t = Math.abs(t)) >= 1e3 ? (t / 1e3).toFixed().toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.") + "K" : t.toString();
1 == o && (e = "-" + e);
return e;
};
t.cutStringWithEllipsis = function(t, e) {
return null == t ? "" : t.length > e ? t.substring(0, e) + "..." : t;
};
t.getUrl = function(t, e) {
var o = t, i = cc.loader.getXMLHttpRequest();
i.onreadystatechange = function() {
4 === i.readyState && (200 == i.status ? e(JSON.parse(i.responseText), i.status) : i.responseText.length > 0 ? e(i.responseText, i.status) : e("error_code : " + i.status, null));
};
i.ontimeout = function() {
e("Hệ thống không phản hồi.", null);
};
i.timeout = 3e4;
i.open("GET", o, !0);
i.setRequestHeader("Content-Type", "application/json");
i.withCredentials = !0;
i.send();
};
t.post = function(t, e, o) {
var i = cc.loader.getXMLHttpRequest();
i.timeout = 3e4;
i.open("POST", t);
i.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
var n = JSON.stringify(e);
i.onreadystatechange = function() {
if (4 == i.readyState) if (i.status >= 200 && i.status < 400) {
var t = i.responseText, e = JSON.parse(t);
o && o(i.status, e);
} else o && o(i.status, null);
};
i.send(n);
};
t.getImage = function(t, e) {
cc.assetManager.loadRemote(t, {
ext: ".png"
}, function(t, o) {
if (t) console.error("Lỗi rồi đại ca ơi: ", t); else {
var i = new cc.SpriteFrame(o);
e.spriteFrame = i;
}
});
};
t.loadImageFromUrl = function(t) {
return new Promise(function(e, o) {
var i = new XMLHttpRequest();
i.open("GET", t, !0);
i.responseType = "arraybuffer";
i.onload = function() {
if (200 === this.status) {
for (var t = this.response, i = new Uint8Array(t), n = "", c = 0; c < i.byteLength; c++) n += String.fromCharCode(i[c]);
var s = "data:image/png;base64," + window.btoa(n);
e(s);
} else o(new Error("Failed to load image. Status: " + this.status));
};
i.onerror = function() {
o(new Error("Failed to load image from URL"));
};
i.send();
});
};
t.setSpriteFromBase64 = function(t, e) {
var o = new Image();
o.src = t;
o.onload = function() {
var t = new cc.Texture2D();
t.initWithElement(o);
t.handleLoadedTexture();
var i = new cc.SpriteFrame(t);
e.spriteFrame = i;
};
};
t.truncateString = function(t, e) {
void 0 === e && (e = 9);
if (null == t) return "";
var o = String(t);
return o.length > e ? o.slice(0, e) + "..." : o;
};
t.chunkArray = function(t, e) {
for (var o = [], i = 0; i < t.length; i += e) o.push(t.slice(i, i + e));
return o;
};
t.parseStringToObj = function(t) {
if (!t || "string" != typeof t) return [];
for (var e = t.split(","), o = [], i = 0; i < e.length; i++) {
var n = e[i].split("-");
n.length >= 3 && o.push({
betSide: Number(n[0]),
numDice: Number(n[1]),
rateMuliple: Number(n[2])
});
}
return o;
};
t.HacHongState = {
BETTING: 0,
RESULT: 1,
PREPARE_NEW_SESSION: 2,
END_BETTING: 3
};
t.HacHongBetSide = {
Black: 1,
Red: 2,
Spade: 3,
Clobe: 4,
Diamond: 5,
Heart: 6,
Straight: 7,
Pair: 8,
Flush: 9
};
t.HacHongAudioTypes = cc.Enum({
BACKGROUND: "BACKGROUND",
BET: "BET",
CARD_SLIDE: "CARD_SLIDE",
CARD_SLIDE_BURN: "CARD_SLIDE_BURN",
CARD_SLIDE_RONG: "CARD_SLIDE_RONG",
CARD_SLIDE_HO: "CARD_SLIDE_HO",
CARD_OPEN: "CARD_OPEN",
CARD_BURN_MOVE_TO_BOX: "CARD_BURN_MOVE_TO_BOX",
SELECT_CHIP: "SELECT_CHIP",
GET_COIN: "GET_COIN"
});
t.api = (e = "https://hachong." + lngui.ConfigManager.instance.ConfigInfo.Api, {
negotiate: (o = function(t) {
return "" + e + t;
})("/signalr/negotiate"),
hub: "gamehub",
gate: lngui.ConfigManager.instance.ConfigInfo.Gate,
GetBigWinner: o("/api/HacHong/GetBigWinner"),
AccountHistory: o("/api/HacHong/GetHistory"),
jackpotHistory: o("/api/HacHong/GetJackpotHistory"),
SoiCau: o("/api/HacHong/GetSoiCau"),
GroupUser: o("/api/HacHong/GetPlayersNotInGame"),
getSessionDetail: function(t) {
return o("/api/HacHong/GetSessionInfo?sessionId=" + t);
}
});
var e, o;
t.MethodHubOnName = {
JOIN_GAME: "joinGame",
RESULT_SPIN: "resultSpin",
RESULT_FREE_SPIN: "resultFreeSpin",
UPDATE_USER_BALANCE: "updateUserBalance",
RESULT_X2_GAME: "resultX2Game",
UPDATE_JACKPOT: "updateJackpot",
MESSAGE: "message",
BET_USER: "betUser",
REJOIN: "reJoin",
TOTAL_WIN_MONEY: "totalWinMoney",
SESSION_INFO: "sessionInfo",
GAME_HISTORY: "gameHistory",
BET_OF_ACCOUNT: "betOfAccount",
BET_SUCCESS: "betSuccess",
WIN_RESULT: "winResult",
CORD_ACCOUNT_INFO: "cordAccountInfo",
EVENT_WINNER_RESULT: "eventWinnerResult",
SUMMON_DRAGON_AWARD: "summonDragonAward",
PLAYER_LEAVE: "playerLeave",
UPDATE_CONNECTION_STATUS: "updateConnectionStatus",
PLAYER_JOIN: "playerJoin",
PLAYER_BET: "playerBet",
PLAYER_MESSAGE: "playerMessage",
OPEN_PLATE_NOW: "openPlateNow",
START_ACTION_TIMER: "startActionTimer",
UPDATE_PLAYER_STATUS: "updatePlayerStatus",
UPDATE_ROOM_TIME: "updateRoomTime",
BUY_MANUAL: "buyManual",
UPDATE_ACCOUNT: "updateAccount",
PLAYER_CHECK_AUTO: "playerCheckAuto",
NOTIFY_CHANGE_PHRASE: "notifyChangePhrase",
NOTIFY_START_ACTIONS: "notifyStartActions",
NOTIFY_FINISH_ACTIONS: "notifyFinishActions",
PLAYER_FLIP_CARDS: "playerFlipCards",
REFUND: "refund",
BET_SESSION: "betSession",
VIP_PLAYERS: "vipPlayers",
WIN_RESULT_VIP: "winResultVip",
SUMMARY_PLAYER: "summaryPlayer",
LIST_LAST_MESSAGES: "listLastMessages",
RECEIVE_MESSAGE: "receiveMessage",
SYSTEM_MESSAGE: "systemMessage",
OTHER_DEVICE: "otherDevice",
X_BOOM: "xBoom"
};
t.MethodHubName = {
ENTER_LOBBY: "EnterLobby",
EXIT_LOBBY: "ExitLobby",
PLAY_NOW: "PlayNow",
SPIN: "Spin",
FREE_SPIN: "FreeSpin",
PLAY_BONUS: "PlayBonusGame",
PLAY_X2_GAME: "PlayX2Game",
FINISH_X2_GAME: "FinishX2Game",
PLAY_TRY: "PlayTry",
SPIN_TRY: "SpinTry",
REGISTER_LEAVE_ROOM: "RegisterLeaveRoom",
UNREGISTER_LEAVE_ROOM: "UnregisterLeaveRoom",
CASH_OUT: "Cashout",
BET: "Bet",
CORD_INFO: "CordInfo",
REGISTER_CHAT: "RegisterChat",
UNREGISTER_CHAT: "UnregisterChat",
SEND_MESSAGE: "SendMessage",
PING_PONG: "PingPong"
};
t.ON_HacHong_SOCKET = "OnHacHongWebSocKet";
t.CHAT_HacHong_SOCKET_EVENT = "OnChatHacHongWebSocKet";
return t;
}();
o.SicboDPQConst = i;
cc._RF.pop();
}, {} ],
"SicboDPQ.Controller": [ function(t, e, o) {
"use strict";
cc._RF.push(e, "077f5x5+nJNw5Z37bHCdZRF", "SicboDPQ.Controller");
var i, n = this && this.__extends || (i = function(t, e) {
return (i = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
i(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), c = this && this.__decorate || function(t, e, o, i) {
var n, c = arguments.length, s = c < 3 ? e : null === i ? i = Object.getOwnPropertyDescriptor(e, o) : i;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, o, i); else for (var a = t.length - 1; a >= 0; a--) (n = t[a]) && (s = (c < 3 ? n(s) : c > 3 ? n(e, o, s) : n(e, o)) || s);
return c > 3 && s && Object.defineProperty(e, o, s), s;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var s = t("../../framework/common/ConfirmDialog"), a = t("../../framework/common/Dialog"), r = t("./network/SicboDPQ.NetWorkClient"), l = t("./popup/chat/SicboDPQ.ChatController"), p = t("./popup/SicboDPQ.GraphView"), u = t("./popup/SicboDPQ.History"), h = t("./popup/SicboDPQ.MaxBet"), d = t("./popup/SicboDPQ.PlayersNotInGame"), f = t("./popup/SicboDPQ.TopRank"), S = t("./SicboDPQ.Common"), y = t("./SicboDPQ.Config"), g = t("./SicboDPQ.InfoView"), b = t("./SicboDPQ.InputView"), m = t("./SicboDPQ.ResultView"), v = t("./chatSicboDPQ/SicboDPQChat"), P = cc._decorator, C = P.ccclass, D = P.property, T = function(t) {
n(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.spriteSound = null;
e.sfSounds = [];
e.spriteBack = null;
e.nodeChat = null;
e.MsgSystem = null;
e.NodeTooltip = null;
e.lbMsg = null;
e.popupSoiCau = null;
e.popupConfirm = null;
e.popupRules = null;
e.popupHistory = null;
e.popupTopRank = null;
e.popoupPlayersNotInGame = null;
e.popupMaxBet = null;
e.popupSetting = null;
e.timer = null;
e.worker = null;
return e;
}
o = e;
e.prototype.onLoad = function() {
var t = this;
o.instance = this;
this.NodeTooltip.active = !1;
y.default.App.ACCESS_TOKEN = lngui.UserManager.instance.mainUserInfo.GameToken;
cc.game.setFrameRate(60);
cc.game.on(cc.game.EVENT_HIDE, function() {
t.utilWorkerStart();
});
cc.game.on(cc.game.EVENT_SHOW, function() {
t.utilWorkerEnd();
});
};
e.prototype.getAccessToken = function() {
y.default.App.ACCESS_TOKEN = lngui.UserManager.instance.mainUserInfo.GameToken;
return y.default.App.ACCESS_TOKEN;
};
e.prototype.utilWorkerStart = function() {
if (null == this.worker) try {
this.worker = new Worker(URL.createObjectURL(new Blob([ "var onmessage=function(g){var a,b,c,d=Date.now(),e=g.data[0],f=function(){clearTimeout(a);b=Date.now();c=b-d;d=b;postMessage(c);a=setTimeout(f,e)};a=setTimeout(f,e)};" ], {
type: "text/javascript"
})));
this.worker.onmessage = function() {
cc.director.mainLoop();
};
this.worker.postMessage([ 30 ]);
} catch (t) {}
};
e.prototype.utilWorkerEnd = function() {
if (null != this.worker) try {
this.worker.terminate();
this.worker = null;
} catch (t) {}
};
e.prototype.reConnect = function() {
console.log("reConnect!");
r.default.getInstance().reConnect();
};
e.prototype.onEnable = function() {
var t = this;
null != y.default.App.ACCESS_TOKEN ? r.default.getInstance().checkConnect(function(e) {
console.log("Check connection webserver: " + e);
if (e) {
r.default.getInstance().addOnClose(function() {
console.log("SicboDPQ addOnClose");
r.default.getInstance().isReconnect ? setTimeout(function() {
t.node && (r.default.getInstance().isReconnect = !1);
}, 2e3) : t.node.active && t.actBackGame();
}, t, null);
r.default.getInstance().addListener(function(e, o) {
var i, n;
switch (e) {
case "sessionInfo":
g.default.instance.updateInfo(o[0], o[0].Phrase, null);
b.default.instance.updateInput(o[0].Phrase);
break;

case "gameHistory":
g.default.instance.setListSoiCau(o[0]);
break;

case "startActionTimer":
g.default.instance.updateInfo(o[0], o[2], o[1]);
m.default.instance.updateResult(null, o[0].Result, o[0].ChipsData, o[2], null, null === (i = o[0]) || void 0 === i ? void 0 : i.BigWinString);
b.default.instance.updateInput(o[2]);
break;

case "playerLeave":
if (o && o.length > 0) {
g.default.instance.playerLeave(o);
t.playerLeave(o);
}
break;

case "joinGame":
g.default.instance.updateInfoCurrPlayer(o[0].Account);
break;

case "betSession":
b.default.instance.showLastInput(o[0]);
break;

case "playerBet":
b.default.instance.playerBet(o);
break;

case "betSuccess":
b.default.instance.ShowMyBets(o);
break;

case "winResultVip":
try {
setTimeout(function() {
t.node && g.default.instance.winResultVip(o[0]);
}, 2500);
} catch (t) {
console.error(t);
}
break;

case "winResult":
try {
setTimeout(function() {
t.node && g.default.instance.winResult(o[0]);
}, 2500);
} catch (t) {
console.error(t);
}
break;

case "totalWinMoney":
parseInt(o[0]) > 0 && setTimeout(function() {
t.node && g.default.instance.totalUserWin(o[0]);
}, 2500);
break;

case "playerMessage":
break;

case "openPlateNow":
m.default.instance.updateResult(null, o[0], o[1], S.default.GAMESTATE.OPEN_PLATE, !0, null === (n = o[0]) || void 0 === n ? void 0 : n.BigWinString);
b.default.instance.updateInput(S.default.GAMESTATE.OPEN_PLATE);
break;

case "receiveMessage":
l.default.instance.addChatContent(o);
g.default.instance.playerShowBubbleChat(o);
break;

case "summaryPlayer":
g.default.instance.summaryPlayer(o[0]);
break;

case "vipPlayers":
var c = o[0];
c.length > 0 && g.default.instance.vipPlayer(c);
break;

case "updateRoomTime":
t.timer = o[0];
g.default.instance.updateTimer(t.timer);
break;

case "message":
t.showMsg(o[0]);
}
}, t, function() {});
} else t.actBackGame();
}) : this.actBackGame();
};
e.prototype.showChat = function() {
v.default.instance.onShowChat();
};
e.prototype.playerLeave = function(t) {
t[0] === g.default.instance.getAccountIdIsMe() && this.actBackGame();
};
e.prototype.showMsg = function(t) {
this.lbMsg.string = t;
this.MsgSystem.showMsgSystem();
};
e.prototype.actBackGame = function() {
var t = new S.default.ModelsSignalr();
t.M = "ExitLobby";
t.A = [];
r.default.getInstance().send(t);
r.default.getInstance().close();
S.default.GameData.getInstance().setDefaultData({});
lngui.UIScreenManager.instance.popToRootScreen2();
};
e.prototype.onDestroy = function() {
y.default.App.ACCESS_TOKEN = null;
};
var o;
e.instance = null;
c([ D(cc.Sprite) ], e.prototype, "spriteSound", void 0);
c([ D([ cc.SpriteFrame ]) ], e.prototype, "sfSounds", void 0);
c([ D(cc.Sprite) ], e.prototype, "spriteBack", void 0);
c([ D(l.default) ], e.prototype, "nodeChat", void 0);
c([ D(a.default) ], e.prototype, "MsgSystem", void 0);
c([ D(cc.Node) ], e.prototype, "NodeTooltip", void 0);
c([ D(cc.Label) ], e.prototype, "lbMsg", void 0);
c([ D(p.default) ], e.prototype, "popupSoiCau", void 0);
c([ D(s.default) ], e.prototype, "popupConfirm", void 0);
c([ D(a.default) ], e.prototype, "popupRules", void 0);
c([ D(u.default) ], e.prototype, "popupHistory", void 0);
c([ D(f.default) ], e.prototype, "popupTopRank", void 0);
c([ D(d.default) ], e.prototype, "popoupPlayersNotInGame", void 0);
c([ D(h.default) ], e.prototype, "popupMaxBet", void 0);
c([ D(a.default) ], e.prototype, "popupSetting", void 0);
return o = c([ C ], e);
}(cc.Component);
o.default = T;
cc._RF.pop();
}, {
"../../framework/common/ConfirmDialog": void 0,
"../../framework/common/Dialog": void 0,
"./SicboDPQ.Common": "SicboDPQ.Common",
"./SicboDPQ.Config": "SicboDPQ.Config",
"./SicboDPQ.InfoView": "SicboDPQ.InfoView",
"./SicboDPQ.InputView": "SicboDPQ.InputView",
"./SicboDPQ.ResultView": "SicboDPQ.ResultView",
"./chatSicboDPQ/SicboDPQChat": "SicboDPQChat",
"./network/SicboDPQ.NetWorkClient": "SicboDPQ.NetWorkClient",
"./popup/SicboDPQ.GraphView": "SicboDPQ.GraphView",
"./popup/SicboDPQ.History": "SicboDPQ.History",
"./popup/SicboDPQ.MaxBet": "SicboDPQ.MaxBet",
"./popup/SicboDPQ.PlayersNotInGame": "SicboDPQ.PlayersNotInGame",
"./popup/SicboDPQ.TopRank": "SicboDPQ.TopRank",
"./popup/chat/SicboDPQ.ChatController": "SicboDPQ.ChatController"
} ],
"SicboDPQ.GrahpDiceSumView": [ function(t, e, o) {
"use strict";
cc._RF.push(e, "f98d8YDTsBGSLODo/NbFQgw", "SicboDPQ.GrahpDiceSumView");
var i, n = this && this.__extends || (i = function(t, e) {
return (i = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
i(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), c = this && this.__decorate || function(t, e, o, i) {
var n, c = arguments.length, s = c < 3 ? e : null === i ? i = Object.getOwnPropertyDescriptor(e, o) : i;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, o, i); else for (var a = t.length - 1; a >= 0; a--) (n = t[a]) && (s = (c < 3 ? n(s) : c > 3 ? n(e, o, s) : n(e, o)) || s);
return c > 3 && s && Object.defineProperty(e, o, s), s;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var s = cc._decorator, a = s.ccclass, r = s.property, l = function(t) {
n(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.nodeGraphics = null;
e.nodeParent = null;
e.nodeTaiTemp = null;
e.nodeXiuTemp = null;
e.nodeBaoTemp = null;
e.toggleDiceSum = null;
e.lbSessionID = null;
e.lbResult = null;
e.sfTaiXiu = [];
e.rootPosX = 0;
e.rootPosY = 0;
e.spaceX = 0;
e.spaceY = 0;
e.maxItemPerCol = 0;
e.minSum = 0;
e.maxSum = 0;
e.spacePoint = 0;
e.drawing = null;
e.drawPoints = null;
e.cacheList = null;
return e;
}
o = e;
e.prototype.onLoad = function() {
o.instance = this;
this.rootPosX = 0;
this.rootPosY = -88;
this.spaceX = 47;
this.spaceY = 35;
this.maxItemPerCol = 5;
this.minSum = 3;
this.maxSum = 18;
this.spacePoint = this.spaceY * this.maxItemPerCol / (this.maxSum - this.minSum);
this.drawing = this.nodeGraphics.getComponent(cc.Graphics);
this.drawing.lineWidth = 2;
this.drawing.strokeColor = cc.Color.YELLOW;
};
e.prototype.onDisable = function() {
this.resetDraw();
};
e.prototype.draw = function(t) {
var e, o = t[0], i = o.ChipsData.split(",");
e = i[0] == i[1] && i[0] == i[2] ? "BÃO" : o.Result < 11 ? "XỈU" : "TÀI";
this.lbSessionID.string = "#" + o.SessionID;
this.lbResult.string = e + " " + o.Result + " (" + i[0] + "-" + i[1] + "-" + i[2] + ")";
this.cacheList = t;
this.drawPoints = [];
var n = this, c = 0;
t.forEach(function(t) {
n.createNode(t, c);
c++;
});
this.strokeLine();
};
e.prototype.createNode = function(t, e) {
var o = this.rootPosX - e * this.spaceX, i = this.rootPosY + (t.Result - this.minSum) * this.spacePoint, n = t.ChipsData.split(",");
0 === e && this.drawing.moveTo(o, i);
var c = null;
(c = n[0] == n[1] && n[0] == n[2] ? cc.instantiate(this.nodeBaoTemp) : t.Result < 11 ? cc.instantiate(this.nodeXiuTemp) : cc.instantiate(this.nodeTaiTemp)).parent = this.nodeParent;
c.position = cc.v2(o, i);
this.drawPoints.push(cc.v2(o, i));
c.children[0].getComponent(cc.Label).string = t.Result.toString();
};
e.prototype.strokeLine = function() {
var t = this;
this.drawPoints.forEach(function(e) {
t.drawing.lineTo(e.x, e.y);
t.drawing.stroke();
t.drawing.moveTo(e.x, e.y);
});
};
e.prototype.resetDraw = function() {
for (var t = this.nodeParent.children, e = t.length - 1; e >= 0; e--) this.nodeParent.removeChild(t[e]);
this.drawing.clear();
};
e.prototype.toggleDrawDiceSumClicked = function() {
this.toggleDiceSum.isChecked ? this.draw(this.cacheList) : this.resetDraw();
};
var o;
e.instance = null;
c([ r(cc.Node) ], e.prototype, "nodeGraphics", void 0);
c([ r(cc.Node) ], e.prototype, "nodeParent", void 0);
c([ r(cc.Node) ], e.prototype, "nodeTaiTemp", void 0);
c([ r(cc.Node) ], e.prototype, "nodeXiuTemp", void 0);
c([ r(cc.Node) ], e.prototype, "nodeBaoTemp", void 0);
c([ r(cc.Toggle) ], e.prototype, "toggleDiceSum", void 0);
c([ r(cc.Label) ], e.prototype, "lbSessionID", void 0);
c([ r(cc.Label) ], e.prototype, "lbResult", void 0);
c([ r([ cc.SpriteFrame ]) ], e.prototype, "sfTaiXiu", void 0);
return o = c([ a ], e);
}(cc.Component);
o.default = l;
cc._RF.pop();
}, {} ],
"SicboDPQ.GraphCatCauView": [ function(t, e, o) {
"use strict";
cc._RF.push(e, "1c3a5BdzeNDwqMy3Z0FvaHF", "SicboDPQ.GraphCatCauView");
var i, n = this && this.__extends || (i = function(t, e) {
return (i = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
i(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), c = this && this.__decorate || function(t, e, o, i) {
var n, c = arguments.length, s = c < 3 ? e : null === i ? i = Object.getOwnPropertyDescriptor(e, o) : i;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, o, i); else for (var a = t.length - 1; a >= 0; a--) (n = t[a]) && (s = (c < 3 ? n(s) : c > 3 ? n(e, o, s) : n(e, o)) || s);
return c > 3 && s && Object.defineProperty(e, o, s), s;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var s = t("../../SicboDPQ.InfoView"), a = cc._decorator, r = a.ccclass, l = a.property, p = function(t) {
n(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.nodeParent = null;
e.nodeTaiTemp = null;
e.nodeXiuTemp = null;
e.nodeBaoTemp = null;
e.rootPosX = -22;
e.rootPosY = -68;
e.spaceX = 44;
e.spaceY = 34;
e.maxItemPerCol = 5;
e.maxPerCol = 20;
e.countTai = 0;
e.countXiu = 0;
e.countBao = 0;
return e;
}
o = e;
e.prototype.onLoad = function() {
o.instance = this;
this.countTai = 0;
this.countXiu = 0;
this.countBao = 0;
};
e.prototype.onEnable = function() {};
e.prototype.onDisable = function() {
this.resetDraw();
};
e.prototype.convertToMatrix = function() {
var t = this, e = this, o = s.default.instance.getListSoiCau()[0].ChipsData.toString().split(","), i = -1;
i = o[0] == o[1] && o[0] == o[2] ? 2 : s.default.instance.getListSoiCau()[0].Result < 11 ? 0 : 1;
var n = [], c = [];
s.default.instance.getListSoiCau().forEach(function(o) {
if (n.length <= t.maxPerCol - 1) {
var s = o.ChipsData.toString().split(","), a = -1;
if (s[0] == s[1] && s[0] == s[2]) {
a = 2;
t.countBao++;
} else 0 == (a = o.Result < 11 ? 0 : 1) ? t.countXiu++ : t.countTai++;
if (c.length == e.maxItemPerCol) {
n.push(c);
(c = []).push(o);
i = a;
} else if (a == i) c.push(o); else {
n.push(c);
i = a;
(c = []).push(o);
}
}
});
n.push(c);
return n;
};
e.prototype.draw = function() {
this.countTai = 0;
this.countXiu = 0;
this.countBao = 0;
for (var t = this.convertToMatrix(), e = 0; e < t.length; e++) this.drawCol(t[e], e);
};
e.prototype.drawCol = function(t, e) {
for (var o = this.rootPosX - e * this.spaceX, i = this.rootPosY + (this.maxItemPerCol - t.length) * this.spaceY, n = 0; n < t.length; n++) this.createNode(t[n], cc.v2(o, i + this.spaceY * n));
};
e.prototype.createNode = function(t, e) {
var o = t.ChipsData.split(","), i = null;
(i = o[0] == o[1] && o[0] == o[2] ? cc.instantiate(this.nodeBaoTemp) : t.Result < 11 ? cc.instantiate(this.nodeXiuTemp) : cc.instantiate(this.nodeTaiTemp)).parent = this.nodeParent;
i.position = e;
i.children[0].getComponent(cc.Label).string = t.Result.toString();
i.setContentSize(cc.size(22, 22));
};
e.prototype.resetDraw = function() {
for (var t = this.nodeParent.children, e = t.length - 1; e >= 0; e--) this.nodeParent.removeChild(t[e]);
};
var o;
e.instance = null;
c([ l(cc.Node) ], e.prototype, "nodeParent", void 0);
c([ l(cc.Node) ], e.prototype, "nodeTaiTemp", void 0);
c([ l(cc.Node) ], e.prototype, "nodeXiuTemp", void 0);
c([ l(cc.Node) ], e.prototype, "nodeBaoTemp", void 0);
return o = c([ r ], e);
}(cc.Component);
o.default = p;
cc._RF.pop();
}, {
"../../SicboDPQ.InfoView": "SicboDPQ.InfoView"
} ],
"SicboDPQ.GraphDice3View": [ function(t, e, o) {
"use strict";
cc._RF.push(e, "3512fS41cVD1K2Iafi8IszG", "SicboDPQ.GraphDice3View");
var i, n = this && this.__extends || (i = function(t, e) {
return (i = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
i(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), c = this && this.__decorate || function(t, e, o, i) {
var n, c = arguments.length, s = c < 3 ? e : null === i ? i = Object.getOwnPropertyDescriptor(e, o) : i;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, o, i); else for (var a = t.length - 1; a >= 0; a--) (n = t[a]) && (s = (c < 3 ? n(s) : c > 3 ? n(e, o, s) : n(e, o)) || s);
return c > 3 && s && Object.defineProperty(e, o, s), s;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var s = cc._decorator, a = s.ccclass, r = s.property, l = function(t) {
n(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.nodeGraphics1 = null;
e.nodeGraphics2 = null;
e.nodeGraphics3 = null;
e.nodeDice1Temp = null;
e.nodeDice2Temp = null;
e.nodeDice3Temp = null;
e.toggleDice1 = null;
e.toggleDice2 = null;
e.toggleDice3 = null;
e.colorDice1 = null;
e.colorDice2 = null;
e.colorDice3 = null;
e.spriteDice = [];
e.rootPosX = 0;
e.rootPosY = 0;
e.spaceX = 0;
e.spaceY = 0;
e.maxItemPerCol = 0;
e.minSum = 0;
e.maxSum = 0;
e.spacePoint = 0;
e.drawing1 = null;
e.drawing2 = null;
e.drawing3 = null;
e.cacheList = null;
e.drawPoints = null;
e.createdNodeDice1 = [];
e.createdNodeDice2 = [];
e.createdNodeDice3 = [];
return e;
}
o = e;
e.prototype.onLoad = function() {
o.instance = this;
this.rootPosX = 0;
this.rootPosY = -90;
this.spaceX = 47;
this.spaceY = 37;
this.maxItemPerCol = 5;
this.minSum = 1;
this.maxSum = 6;
this.spacePoint = this.spaceY * this.maxItemPerCol / (this.maxSum - this.minSum);
this.drawing1 = this.nodeGraphics1.getComponent(cc.Graphics);
this.drawing1.lineWidth = 2;
this.drawing1.strokeColor = this.colorDice1;
this.drawing1.lineCap = cc.Graphics.LineCap.BUTT;
this.drawing1.lineJoin = cc.Graphics.LineJoin.MITER;
this.drawing2 = this.nodeGraphics2.getComponent(cc.Graphics);
this.drawing2.lineWidth = 2;
this.drawing2.strokeColor = this.colorDice2;
this.drawing2.lineCap = cc.Graphics.LineCap.BUTT;
this.drawing2.lineJoin = cc.Graphics.LineJoin.MITER;
this.drawing3 = this.nodeGraphics3.getComponent(cc.Graphics);
this.drawing3.lineWidth = 2;
this.drawing3.strokeColor = this.colorDice3;
this.drawing3.lineCap = cc.Graphics.LineCap.BUTT;
this.drawing3.lineJoin = cc.Graphics.LineJoin.MITER;
};
e.prototype.onDisable = function() {
this.resetDraw();
};
e.prototype.draw = function(t) {
this.cacheList = t;
this.drawDice1(t);
this.drawDice2(t);
this.drawDice3(t);
};
e.prototype.drawDice1 = function(t) {
var e = this;
this.clearCreatedNodes(this.createdNodeDice1);
this.drawPoints = [];
var o = 0;
t.forEach(function(t) {
var i = t.ChipsData.split(",");
e.createNode(e.drawing1, i[0], o);
o++;
});
this.strokeLine(this.drawing1, this.nodeDice1Temp, this.nodeGraphics1, this.createdNodeDice1);
};
e.prototype.drawDice2 = function(t) {
var e = this;
this.clearCreatedNodes(this.createdNodeDice2);
this.drawPoints = [];
var o = 0;
t.forEach(function(t) {
var i = t.ChipsData.split(",");
e.createNode(e.drawing2, i[1], o);
o++;
});
this.strokeLine(this.drawing2, this.nodeDice2Temp, this.nodeGraphics2, this.createdNodeDice2);
};
e.prototype.drawDice3 = function(t) {
var e = this;
this.clearCreatedNodes(this.createdNodeDice3);
this.drawPoints = [];
var o = 0;
t.forEach(function(t) {
var i = t.ChipsData.split(",");
e.createNode(e.drawing3, i[2], o);
o++;
});
this.strokeLine(this.drawing3, this.nodeDice3Temp, this.nodeGraphics3, this.createdNodeDice3);
};
e.prototype.createNode = function(t, e, o) {
var i = parseInt(e, 10), n = this.rootPosX - o * this.spaceX, c = this.rootPosY + (i - this.minSum) * this.spacePoint;
0 === o && t.moveTo(n, c);
this.drawPoints.push({
point: cc.v2(n, c),
dice: i
});
};
e.prototype.strokeLine = function(t, e, o, i) {
if (this.drawPoints.length > 0) {
t.moveTo(this.drawPoints[0].point.x, this.drawPoints[0].point.y);
for (var n = 1; n < this.drawPoints.length; n++) {
var c = this.drawPoints[n].point;
t.lineTo(c.x, c.y);
}
t.stroke();
}
e && o && this.drawPoints.forEach(function(t) {
var n = t.point, c = cc.instantiate(e);
c.setPosition(n);
c.active = !0;
o.addChild(c);
i.push(c);
});
};
e.prototype.clearCreatedNodes = function(t) {
t.forEach(function(t) {
if (t && t.isValid) {
t.removeFromParent();
t.destroy();
}
});
t.length = 0;
};
e.prototype.resetDraw = function() {
this.drawing1.clear();
this.drawing2.clear();
this.drawing3.clear();
this.clearCreatedNodes(this.createdNodeDice1);
this.clearCreatedNodes(this.createdNodeDice2);
this.clearCreatedNodes(this.createdNodeDice3);
};
e.prototype.toggleDrawDice1Clicked = function() {
if (this.toggleDice1.isChecked) this.drawDice1(this.cacheList); else {
this.drawing1.clear();
this.clearCreatedNodes(this.createdNodeDice1);
}
};
e.prototype.toggleDrawDice2Clicked = function() {
if (this.toggleDice2.isChecked) this.drawDice2(this.cacheList); else {
this.drawing2.clear();
this.clearCreatedNodes(this.createdNodeDice2);
}
};
e.prototype.toggleDrawDice3Clicked = function() {
if (this.toggleDice3.isChecked) this.drawDice3(this.cacheList); else {
this.drawing3.clear();
this.clearCreatedNodes(this.createdNodeDice3);
}
};
var o;
e.instance = null;
c([ r(cc.Node) ], e.prototype, "nodeGraphics1", void 0);
c([ r(cc.Node) ], e.prototype, "nodeGraphics2", void 0);
c([ r(cc.Node) ], e.prototype, "nodeGraphics3", void 0);
c([ r(cc.Node) ], e.prototype, "nodeDice1Temp", void 0);
c([ r(cc.Node) ], e.prototype, "nodeDice2Temp", void 0);
c([ r(cc.Node) ], e.prototype, "nodeDice3Temp", void 0);
c([ r(cc.Toggle) ], e.prototype, "toggleDice1", void 0);
c([ r(cc.Toggle) ], e.prototype, "toggleDice2", void 0);
c([ r(cc.Toggle) ], e.prototype, "toggleDice3", void 0);
c([ r(cc.Color) ], e.prototype, "colorDice1", void 0);
c([ r(cc.Color) ], e.prototype, "colorDice2", void 0);
c([ r(cc.Color) ], e.prototype, "colorDice3", void 0);
c([ r([ cc.SpriteFrame ]) ], e.prototype, "spriteDice", void 0);
return o = c([ a ], e);
}(cc.Component);
o.default = l;
cc._RF.pop();
}, {} ],
"SicboDPQ.GraphView100": [ function(t, e, o) {
"use strict";
cc._RF.push(e, "da0c2+uIOdAnJRPpStnFcSA", "SicboDPQ.GraphView100");
var i, n = this && this.__extends || (i = function(t, e) {
return (i = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
i(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), c = this && this.__decorate || function(t, e, o, i) {
var n, c = arguments.length, s = c < 3 ? e : null === i ? i = Object.getOwnPropertyDescriptor(e, o) : i;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, o, i); else for (var a = t.length - 1; a >= 0; a--) (n = t[a]) && (s = (c < 3 ? n(s) : c > 3 ? n(e, o, s) : n(e, o)) || s);
return c > 3 && s && Object.defineProperty(e, o, s), s;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var s = t("../../SicboDPQ.InfoView"), a = cc._decorator, r = a.ccclass, l = a.property, p = function(t) {
n(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.nodeParent = null;
e.listNodeTemp = [];
e.nodeTaiTemp = null;
e.nodeXiuTemp = null;
e.nodeBaoTemp = null;
e.countTai = 0;
e.countXiu = 0;
e.countBao = 0;
return e;
}
o = e;
e.prototype.onLoad = function() {
o.instance = this;
this.clearAllChildren();
};
e.prototype.onEnable = function() {};
e.prototype.onDestroy = function() {};
e.prototype.onDisable = function() {};
e.prototype.draw = function() {
var t = this;
this.clearAllChildren();
this.countBao = 0;
this.countTai = 0;
this.countXiu = 0;
s.default.instance.getListSoiCau().forEach(function(e, o) {
var i = e.Result, n = e.ChipsData.split(","), c = null;
if (n[0] == n[1] && n[0] == n[2]) {
t.countBao++;
c = t.nodeBaoTemp;
} else if (i < 11) {
t.countXiu++;
c = t.nodeXiuTemp;
} else {
t.countTai++;
c = t.nodeTaiTemp;
}
t.createNode(o, c, e.Result);
});
};
e.prototype.createNode = function(t, e, o) {
if (e) {
var i = cc.instantiate(e);
i.parent = this.nodeParent;
i.active = !0;
var n = i.children[0] && i.children[0].getComponent(cc.Label);
n && (n.string = o.toString());
}
};
e.prototype.clearAllChildren = function() {
if (this.nodeParent) for (var t = this.nodeParent.children, e = t.length - 1; e >= 0; e--) t[e].destroy();
};
e.prototype.resetDraw = function() {
this.countBao = 0;
this.countTai = 0;
this.countXiu = 0;
this.clearAllChildren();
};
var o;
e.instance = null;
c([ l(cc.Node) ], e.prototype, "nodeParent", void 0);
c([ l([ cc.Node ]) ], e.prototype, "listNodeTemp", void 0);
c([ l(cc.Node) ], e.prototype, "nodeTaiTemp", void 0);
c([ l(cc.Node) ], e.prototype, "nodeXiuTemp", void 0);
c([ l(cc.Node) ], e.prototype, "nodeBaoTemp", void 0);
return o = c([ r ], e);
}(cc.Component);
o.default = p;
cc._RF.pop();
}, {
"../../SicboDPQ.InfoView": "SicboDPQ.InfoView"
} ],
"SicboDPQ.GraphView": [ function(t, e, o) {
"use strict";
cc._RF.push(e, "c519eT3igVAgI9h7/5RKAbd", "SicboDPQ.GraphView");
var i, n = this && this.__extends || (i = function(t, e) {
return (i = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
i(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), c = this && this.__decorate || function(t, e, o, i) {
var n, c = arguments.length, s = c < 3 ? e : null === i ? i = Object.getOwnPropertyDescriptor(e, o) : i;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, o, i); else for (var a = t.length - 1; a >= 0; a--) (n = t[a]) && (s = (c < 3 ? n(s) : c > 3 ? n(e, o, s) : n(e, o)) || s);
return c > 3 && s && Object.defineProperty(e, o, s), s;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var s = t("../SicboDPQ.InfoView"), a = t("./graphView/SicboDPQ.GrahpDiceSumView"), r = t("./graphView/SicboDPQ.GraphCatCauView"), l = t("./graphView/SicboDPQ.GraphDice3View"), p = t("./graphView/SicboDPQ.GraphView100"), u = t("../../../framework/common/Dialog"), h = cc._decorator, d = h.ccclass, f = h.property, S = function(t) {
n(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.SicboDPQGraph100View = null;
e.SicboDPQGraphCatCuaView = null;
e.SicboDPQGraphDiceSumView = null;
e.SicboDPQGraphDice3View = null;
e.pageView = null;
e.btnNext = null;
e.btnBack = null;
e.lblTotalTai = null;
e.lblTotalXiu = null;
e.lblTotalBao = null;
e.lblTotalTai1 = null;
e.lblTotalXiu1 = null;
e.lblTotalBao1 = null;
e.timeSwitchPage = .3;
e.totalPages = 2;
e.currentPageIndex = 1;
return e;
}
o = e;
e.prototype.onLoad = function() {
o.instance = this;
this.timeSwitchPage = .3;
this.totalPages = 2;
this.checkStatusButton();
};
e.prototype.show = function() {
t.prototype.show.call(this);
this.onGetSoiCau();
};
e.prototype.onGetSoiCau = function() {
this.SicboDPQGraph100View.draw();
this.SicboDPQGraphCatCuaView.draw();
this.SicboDPQGraphDiceSumView.draw(s.default.instance.getListSoiCau());
this.SicboDPQGraphDice3View.draw(s.default.instance.getListSoiCau());
this.updateCountNode();
this.pageView.scrollToPage(0, this.timeSwitchPage);
this.checkStatusButton();
};
e.prototype.updateCountNode = function() {
this.lblTotalTai.string = this.SicboDPQGraph100View.countTai.toString();
this.lblTotalXiu.string = this.SicboDPQGraph100View.countXiu.toString();
this.lblTotalBao.string = this.SicboDPQGraph100View.countBao.toString();
this.lblTotalTai1.string = this.SicboDPQGraphCatCuaView.countTai.toString();
this.lblTotalXiu1.string = this.SicboDPQGraphCatCuaView.countXiu.toString();
this.lblTotalBao1.string = this.SicboDPQGraphCatCuaView.countBao.toString();
};
e.prototype.nextPageClicked = function() {
this.currentPageIndex++;
this.pageView.scrollToPage(this.currentPageIndex, this.timeSwitchPage);
this.checkStatusButton();
};
e.prototype.backPageClicked = function() {
this.currentPageIndex--;
this.pageView.scrollToPage(this.currentPageIndex, this.timeSwitchPage);
this.checkStatusButton();
};
e.prototype.checkStatusButton = function() {
this.currentPageIndex = this.pageView.getCurrentPageIndex();
this.btnNext.interactable = this.currentPageIndex < this.totalPages - 1;
this.btnBack.interactable = this.currentPageIndex > 0;
};
e.prototype.close = function() {
t.prototype.dismiss.call(this);
};
var o;
e.instance = null;
c([ f(p.default) ], e.prototype, "SicboDPQGraph100View", void 0);
c([ f(r.default) ], e.prototype, "SicboDPQGraphCatCuaView", void 0);
c([ f(a.default) ], e.prototype, "SicboDPQGraphDiceSumView", void 0);
c([ f(l.default) ], e.prototype, "SicboDPQGraphDice3View", void 0);
c([ f(cc.PageView) ], e.prototype, "pageView", void 0);
c([ f(cc.Button) ], e.prototype, "btnNext", void 0);
c([ f(cc.Button) ], e.prototype, "btnBack", void 0);
c([ f(cc.Label) ], e.prototype, "lblTotalTai", void 0);
c([ f(cc.Label) ], e.prototype, "lblTotalXiu", void 0);
c([ f(cc.Label) ], e.prototype, "lblTotalBao", void 0);
c([ f(cc.Label) ], e.prototype, "lblTotalTai1", void 0);
c([ f(cc.Label) ], e.prototype, "lblTotalXiu1", void 0);
c([ f(cc.Label) ], e.prototype, "lblTotalBao1", void 0);
return o = c([ d ], e);
}(u.default);
o.default = S;
cc._RF.pop();
}, {
"../../../framework/common/Dialog": void 0,
"../SicboDPQ.InfoView": "SicboDPQ.InfoView",
"./graphView/SicboDPQ.GrahpDiceSumView": "SicboDPQ.GrahpDiceSumView",
"./graphView/SicboDPQ.GraphCatCauView": "SicboDPQ.GraphCatCauView",
"./graphView/SicboDPQ.GraphDice3View": "SicboDPQ.GraphDice3View",
"./graphView/SicboDPQ.GraphView100": "SicboDPQ.GraphView100"
} ],
"SicboDPQ.History": [ function(t, e, o) {
"use strict";
cc._RF.push(e, "e518cmCdYFDB47Y7iGzUjQt", "SicboDPQ.History");
var i, n = this && this.__extends || (i = function(t, e) {
return (i = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
i(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), c = this && this.__decorate || function(t, e, o, i) {
var n, c = arguments.length, s = c < 3 ? e : null === i ? i = Object.getOwnPropertyDescriptor(e, o) : i;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, o, i); else for (var a = t.length - 1; a >= 0; a--) (n = t[a]) && (s = (c < 3 ? n(s) : c > 3 ? n(e, o, s) : n(e, o)) || s);
return c > 3 && s && Object.defineProperty(e, o, s), s;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var s = t("../../../framework/common/Dialog"), a = t("../../../framework/common/Utils"), r = t("../network/SicboDPQ.Http"), l = t("../SicboDPQ.Assets"), p = t("../SicboDPQ.Common"), u = t("../SicboDPQ.Config"), h = t("../SicboDPQ.Const"), d = t("../SicboDPQ.Controller"), f = cc._decorator, S = f.ccclass, y = f.property, g = function(t) {
n(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.content = [];
e.template = null;
e.lblPage = null;
e.btnNext = null;
e.btnBack = null;
e.SpriteDice = [];
e.SpriteTextResult = null;
e.SeasionID = null;
e.Time = null;
e.TotalDice = null;
e.Key = null;
e.Md5 = null;
return e;
}
e.prototype.onShow = function() {
t.prototype.show.call(this);
};
e.prototype.onEnable = function() {
this.lblPage.node.active = !0;
this.btnBack.active = !0;
this.btnNext.active = !0;
this.TotalDice.node.parent.active = !1;
this.SeasionID.node.parent.active = !1;
this.onGetDataHistory();
};
e.prototype.actNextPage = function() {
this.page++;
this.page >= this.maxPage && (this.page = this.maxPage);
this.onLoadData(this.dataHistory[this.page]);
};
e.prototype.actBackPage = function() {
this.page--;
(this.page = 0) && (this.page = 0);
this.onLoadData(this.dataHistory[this.page]);
};
e.prototype.onChangeButtonPage = function() {
this.btnBack.color = cc.Color.WHITE;
this.btnNext.color = cc.Color.WHITE;
this.btnBack.getComponent(cc.Button).interactable = !0;
this.btnNext.getComponent(cc.Button).interactable = !0;
if (0 == this.page) {
this.btnBack.color = cc.Color.GRAY;
this.btnBack.getComponent(cc.Button).interactable = !1;
console.log("vào back");
}
if (this.page + 1 >= this.maxPage) {
this.btnNext.color = cc.Color.GRAY;
this.btnNext.getComponent(cc.Button).interactable = !1;
}
this.lblPage.string = this.page + 1 + "/" + this.maxPage;
};
e.prototype.onGetDataHistory = function() {
var t = this;
lngui.UIWaitingLayout.showWaiting();
var e = this;
this.content[0].removeAllChildren();
this.content[1].removeAllChildren();
r.default.sendRequest("GET", u.default.App.HOST_SicboDPQ.host, "api/Sicbo/GetHistory?top=200", null, function(o, i) {
lngui.UIWaitingLayout.hideWaiting();
if (o) {
e.onClose();
d.default.instance.showMsg("Hệ thống đang bận, vui lòng tải lại sau!");
} else {
t.dataHistory = i;
t.page = 0;
t.maxPage = t.dataHistory.length;
if (t.dataHistory.length <= 0) {
d.default.instance.showMsg("Không có lịch sử cược!");
t.lblPage.node.active = !1;
t.btnBack.active = !1;
t.btnNext.active = !1;
} else t.onLoadData(t.dataHistory[t.page]);
}
});
};
e.prototype.onLoadData = function(t) {
var e, o, i, n;
this.content[0].parent.parent.getComponent(cc.ScrollView).scrollToTop();
this.content[1].parent.parent.getComponent(cc.ScrollView).scrollToTop();
this.content[0].removeAllChildren();
this.content[1].removeAllChildren();
this.TotalDice.node.parent.active = !0;
this.SeasionID.node.parent.active = !0;
var c = t.ChipsData.split(","), s = parseInt(c[0]) + parseInt(c[1]) + parseInt(c[2]);
this.TotalDice.string = s.toString();
this.SeasionID.string = "#" + t.SessionID;
this.Time.string = "( " + t.CreateTimeFm + " )";
this.Md5.string = h.SicboDPQConst.truncateString(null !== (e = null == t ? void 0 : t.Md5String) && void 0 !== e ? e : "", 25);
this.Key.string = h.SicboDPQConst.truncateString(null !== (o = null == t ? void 0 : t.ResultString) && void 0 !== o ? o : "", 25);
this.md5String = null !== (i = null == t ? void 0 : t.Md5String) && void 0 !== i ? i : "";
this.keyString = null !== (n = null == t ? void 0 : t.ResultString) && void 0 !== n ? n : "";
var r = p.default.Utils.getInstance().splitArrayByIndex(t.ListData), u = r[0], d = r[1];
c[0] === c[1] && c[1] === c[2] ? this.TotalDice.string = s.toString() + " / BÃO" : this.TotalDice.string = s.toString() + (s <= 10 ? " / XỈU" : " / TÀI");
this.SpriteDice[0].spriteFrame = l.default.instance.getSprDicesV2(parseInt(c[0]));
this.SpriteDice[1].spriteFrame = l.default.instance.getSprDicesV2(parseInt(c[1]));
this.SpriteDice[2].spriteFrame = l.default.instance.getSprDicesV2(parseInt(c[2]));
for (var f = 0; f < u.length; f++) {
var S = cc.instantiate(this.template), y = u[f].GateID;
f % 2 == 0 && (S.children[0].active = !0);
S.children[1].getComponent(cc.Sprite).spriteFrame = l.default.instance.getSprGateBet(y);
S.children[2].getComponent(cc.Label).string = a.default.formatNumberMin(u[f].Bet);
S.children[3].getComponent(cc.Label).string = a.default.formatNumberMin(u[f].Award);
S.active = !0;
S.parent = this.content[0];
}
for (f = 0; f < d.length; f++) {
S = cc.instantiate(this.template), y = d[f].GateID;
f % 2 == 0 && (S.children[0].active = !0);
S.children[1].getComponent(cc.Sprite).spriteFrame = l.default.instance.getSprGateBet(y);
S.children[2].getComponent(cc.Label).string = a.default.formatNumberMin(d[f].Bet);
S.children[3].getComponent(cc.Label).string = a.default.formatNumberMin(d[f].Award);
S.active = !0;
S.parent = this.content[1];
}
this.onChangeButtonPage();
};
e.prototype.onClose = function() {
t.prototype.dismiss.call(this);
};
e.prototype.onClickCopy = function(t, e) {
"md5" == e ? lngui.PlatformInterface.copy(this.md5String) : "key" == e && lngui.PlatformInterface.copy(this.keyString);
};
c([ y(cc.Node) ], e.prototype, "content", void 0);
c([ y(cc.Node) ], e.prototype, "template", void 0);
c([ y(cc.Label) ], e.prototype, "lblPage", void 0);
c([ y(cc.Node) ], e.prototype, "btnNext", void 0);
c([ y(cc.Node) ], e.prototype, "btnBack", void 0);
c([ y(cc.Sprite) ], e.prototype, "SpriteDice", void 0);
c([ y(cc.Sprite) ], e.prototype, "SpriteTextResult", void 0);
c([ y(cc.Label) ], e.prototype, "SeasionID", void 0);
c([ y(cc.Label) ], e.prototype, "Time", void 0);
c([ y(cc.Label) ], e.prototype, "TotalDice", void 0);
c([ y(cc.Label) ], e.prototype, "Key", void 0);
c([ y(cc.Label) ], e.prototype, "Md5", void 0);
return c([ S ], e);
}(s.default);
o.default = g;
cc._RF.pop();
}, {
"../../../framework/common/Dialog": void 0,
"../../../framework/common/Utils": void 0,
"../SicboDPQ.Assets": "SicboDPQ.Assets",
"../SicboDPQ.Common": "SicboDPQ.Common",
"../SicboDPQ.Config": "SicboDPQ.Config",
"../SicboDPQ.Const": "SicboDPQ.Const",
"../SicboDPQ.Controller": "SicboDPQ.Controller",
"../network/SicboDPQ.Http": "SicboDPQ.Http"
} ],
"SicboDPQ.Http": [ function(t, e, o) {
"use strict";
cc._RF.push(e, "5cc93+mRmtAYI+JLWJNyM3a", "SicboDPQ.Http");
var i = this && this.__decorate || function(t, e, o, i) {
var n, c = arguments.length, s = c < 3 ? e : null === i ? i = Object.getOwnPropertyDescriptor(e, o) : i;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, o, i); else for (var a = t.length - 1; a >= 0; a--) (n = t[a]) && (s = (c < 3 ? n(s) : c > 3 ? n(e, o, s) : n(e, o)) || s);
return c > 3 && s && Object.defineProperty(e, o, s), s;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var n = t("../SicboDPQ.Config"), c = cc._decorator, s = c.ccclass, a = (c.property, 
function() {
function t() {}
t.sendRequest = function(t, e, o, i, c) {
var s, a, r = n.default.App.USE_WSS ? "https://" : "http://", l = cc.loader.getXMLHttpRequest();
r = r + e + "/" + o;
n.default.App.ACCESS_TOKEN && (r.includes("?") ? r += "&access_token=" + encodeURIComponent(n.default.App.ACCESS_TOKEN) + "&lang=" + encodeURIComponent(lngui.I18nController.getLang()) + "&gate=" + encodeURIComponent(null === (s = lngui.ConfigManager.instance.ConfigInfo) || void 0 === s ? void 0 : s.Gate) : r += "?access_token=" + encodeURIComponent(n.default.App.ACCESS_TOKEN) + "&lang=" + encodeURIComponent(lngui.I18nController.getLang()) + "&gate=" + encodeURIComponent(null === (a = lngui.ConfigManager.instance.ConfigInfo) || void 0 === a ? void 0 : a.Gate));
l.timeout = 6e4;
l.open(t, r);
l.setRequestHeader("Content-Type", "application/json; charset=UTF-8");
cc.sys.isNative || (l.withCredentials = !0);
l.onreadystatechange = function() {
if (4 === l.readyState && 200 === l.status) {
var t = null, e = null;
try {
t = JSON.parse(l.responseText);
} catch (t) {
e = t;
}
c(e, t);
} else 200 !== l.status && c(l.status, null);
};
var p = null;
if (i) {
p = JSON.stringify(i);
l.send(p);
} else l.send();
};
return i([ s ], t);
}());
o.default = a;
cc._RF.pop();
}, {
"../SicboDPQ.Config": "SicboDPQ.Config"
} ],
"SicboDPQ.InfoView": [ function(t, e, o) {
"use strict";
cc._RF.push(e, "10feb7nydRO+4FU752r9N97", "SicboDPQ.InfoView");
var i, n = this && this.__extends || (i = function(t, e) {
return (i = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
i(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), c = this && this.__decorate || function(t, e, o, i) {
var n, c = arguments.length, s = c < 3 ? e : null === i ? i = Object.getOwnPropertyDescriptor(e, o) : i;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, o, i); else for (var a = t.length - 1; a >= 0; a--) (n = t[a]) && (s = (c < 3 ? n(s) : c > 3 ? n(e, o, s) : n(e, o)) || s);
return c > 3 && s && Object.defineProperty(e, o, s), s;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var s = t("../../framework/common/Utils"), a = t("./SicboDPQ.Assets"), r = t("./SicboDPQ.Common"), l = t("./SicboDPQ.Const"), p = t("./SicboDPQ.InputView"), u = t("./SicboDPQ.Player"), h = cc._decorator, d = h.ccclass, f = h.property, S = function(t) {
n(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.lbSID = null;
e.lbTimer = null;
e.progressTimer = null;
e.lbResult = null;
e.lbKeyorMd5 = null;
e.lbTotalUser = null;
e.lbTotalBetWin = null;
e.nodeChatGroupUser = null;
e.players = [];
e.lbResultDiceHistory = null;
e.listDiceHisoty = [];
e.nodeDiceSoiCauView = null;
e.listNodeSoiCau = [];
e.maxPlayer = 0;
e.me = null;
e.timerBet = 0;
e.timeInt = 0;
e.gameState = -1;
e.positions = new Array();
e.positionUI = new Array();
e.countPlayer = 0;
e.onwerIndex = 0;
e.sessionId = 0;
e.resultKey = "";
e.resultBetting = "";
e.listSoiCau = null;
return e;
}
o = e;
e.prototype.onLoad = function() {
o.instance = this;
this.maxPlayer = this.players.length;
this.me = this.players[0];
this.resultKey = "";
this.resultBetting = "";
this.lbResult.string = "";
this.listSoiCau = new Array();
this.nodeDiceSoiCauView.active = !1;
this.lbResultDiceHistory.node.active = !1;
};
e.prototype.updateInfoCurrPlayer = function(t) {
this.me.registerPlayer(t);
};
e.prototype.registerPlayer = function(t, e) {
this.players[t].registerPlayer(e);
};
e.prototype.unRegisterPlayer = function(t) {
this.players[t].unRegisterPlayer();
};
e.prototype.resetPlayersResultUI = function() {
this.lbTotalBetWin.node.active = !1;
for (var t = 0; t < this.maxPlayer; t++) this.players[t].resetPlayerResultUI();
};
e.prototype.playerResultUI = function(t, e, o) {
this.players[t].playerResultUI(e, o);
};
e.prototype.getAccountIdIsMe = function() {
return this.me && this.me.userInfo ? this.me.userInfo.AccountID : null;
};
e.prototype.getIndexUIBetByAccID = function(t) {
var e = -1;
try {
for (var o = 0; o < this.maxPlayer; o++) if (this.positionUI[o] == t) {
e = o;
break;
}
} catch (t) {}
return e;
};
e.prototype.joinGame = function(t) {
this.positions = t.Positions;
cc.log("joinGame Step 1");
this.countPlayer = 0;
this.positionUI = [ 0, 0, 0, 0, 0, 0, 0 ];
this.onwerIndex = 0;
this.positionUI[this.onwerIndex] = this.me.userInfo.AccountID;
this.countPlayer++;
cc.log("joinGame Step 2");
for (var e = 0; e < this.maxPlayer; e++) if ((i = this.positions[e]) > 0 && i !== this.getAccountIdIsMe()) {
this.positionUI[this.countPlayer] = i;
this.countPlayer++;
}
cc.log("joinGame Step 3");
var o = t.Players;
for (e = 0; e < this.maxPlayer; e++) {
var i;
(i = this.positions[e]) > 0 && this.registerPlayer(this.getIndexUIBetByAccID(i), o[i].Account);
}
};
e.prototype.playerJoin = function(t) {
for (var e = t.Account, o = 0; o < this.maxPlayer; o++) if (0 === this.positionUI[o]) {
this.positionUI[o] = e.AccountID;
this.registerPlayer(o, e);
break;
}
};
e.prototype.playerLeave = function(t) {
if (this.positionUI) {
var e = t[0];
this.unRegisterPlayer(this.getIndexUIBetByAccID(e));
for (var o = -1, i = 0; i < this.maxPlayer; i++) if (e === this.positionUI[i]) {
o = i;
break;
}
this.positionUI[o] = 0;
}
};
e.prototype.summaryPlayer = function(t) {
this.lbTotalUser.string = t;
};
e.prototype.vipPlayer = function(t) {
var e = this, o = 0;
this.positionUI = [ 0, 0, 0, 0, 0, 0, 0 ];
this.positionUI[0] = this.getAccountIdIsMe();
o++;
t.map(function(t) {
if (t.AccountID != e.getAccountIdIsMe() && o <= 6) {
e.positionUI[o] = t.AccountID;
o++;
}
}, this);
this.positionUI.forEach(function(o, i) {
if (0 != o) try {
var n = t.filter(function(t) {
return t.AccountID == o;
});
if (n.length > 0 && 0 != i) {
e.players[i].registerPlayer(n[0].Account);
e.players[i].resetPlayerResultUI();
}
} catch (t) {
console.error(t);
} else e.players[i].unRegisterPlayer();
}, this);
};
e.prototype.totalUserWin = function(t) {
this.lbTotalBetWin.string = "+" + s.default.formatNumber(t);
this.lbTotalBetWin.node.active = !0;
this.lbTotalBetWin.node.scaleY = 0;
this.lbTotalBetWin.node.getComponent(cc.Animation).play("xxWin");
};
e.prototype.winResultVip = function(t) {
var e = this;
this.positionUI && t.length > 0 && t.map(function(t) {
var o = e.positionUI.indexOf(t.AccountID);
if (-1 != o && t.AccountID != e.getAccountIdIsMe()) {
e.players[o].playerResultUI(!0, t.Award);
e.players[o].updateChip(t.Balance);
}
});
};
e.prototype.winResult = function(t) {
if (this.me || this.me.node.active) {
this.me.playerResultUI(!0, t.Award);
this.me.updateChip(t.Balance);
lngui.EventDispatch.instance.emit(lngui.EVENT_GAMECORE.UPDATE_TOTAL_GOLD, t.Balance);
}
};
e.prototype.updateChip = function(t, e) {
-1 != this.positionUI.indexOf(t) && this.players[this.getIndexUIBetByAccID(t)].updateChip(e);
};
e.prototype.getPositions = function() {
return this.positionUI;
};
e.prototype.getIndexUIBetByPosition = function(t) {
var e = t;
e > this.onwerIndex ? (e += this.onwerIndex) >= this.maxPlayer && (e -= this.maxPlayer - 1) : e < this.onwerIndex ? (e -= this.onwerIndex) < 0 && (e = this.maxPlayer + e) : e = 0;
return e;
};
e.prototype.getListSoiCau = function() {
return this.listSoiCau;
};
e.prototype.setListSoiCau = function(t) {
this.listSoiCau = t;
this.updateLastedCau(this.listSoiCau[0]);
this.updateListNodeSoiCau();
};
e.prototype.updateLastedCau = function(t) {
var e = t.Result, o = t.ChipsData.split(","), i = o[0], n = o[1], c = o[2];
this.listDiceHisoty[0].spriteFrame = a.default.instance.getSprDicesV2(parseInt(i));
this.listDiceHisoty[1].spriteFrame = a.default.instance.getSprDicesV2(parseInt(n));
this.listDiceHisoty[2].spriteFrame = a.default.instance.getSprDicesV2(parseInt(c));
this.lbResultDiceHistory.string = e < 11 ? e + " ~ XỈU" : e + " ~ TÀI";
this.nodeDiceSoiCauView.active = !0;
this.lbResultDiceHistory.node.active = !0;
};
e.prototype.updateListNodeSoiCau = function() {
var t = this, e = this.listSoiCau.slice(0, 12);
(e = e.reverse()).forEach(function(e, o) {
t.listNodeSoiCau[o].spriteFrame = a.default.instance.getSprNodeDice(e);
});
};
e.prototype.playerShowBubbleChat = function(t) {
for (var e = this, o = 0; o < this.players.length; o++) {
if (this.players[o] && this.players[o].userInfo.NickName == t[0]) {
this.players[o].showBubbleChat(t);
break;
}
if (o == this.players.length - 1) {
this.nodeChatGroupUser.active = !0;
this.nodeChatGroupUser.children[0].getComponent(cc.Label).string = t[1];
setTimeout(function() {
e.node && (e.nodeChatGroupUser.active = !1);
}, 2500);
}
}
};
e.prototype.updateSessionId = function(t) {
this.lbSID.string = "#" + t;
};
e.prototype.disPlayStringResult = function(t) {
this.lbResult.string = l.SicboDPQConst.truncateString(t, 30);
};
e.prototype.setStringResultKey = function(t) {
this.resultKey = null != t ? t : "";
};
e.prototype.setStringResultBetting = function(t) {
this.resultBetting = null != t ? t : "";
};
e.prototype.getSessionId = function() {
return this.sessionId;
};
e.prototype.getTime = function() {
return this.timeInt;
};
e.prototype.updateInfo = function(t, e) {
switch (e) {
case r.default.GAMESTATE.BETTING:
if (this.gameState !== e) {
this.updateSessionId(t.SessionID);
this.setStringResultBetting(t.Md5String);
this.sessionId = t.SessionID;
this.lbKeyorMd5.string = "MD5:";
this.disPlayStringResult(this.resultBetting);
this.progressTimer.node.parent.active = !0;
this.resetPlayersResultUI();
}
break;

case r.default.GAMESTATE.OPEN_PLATE:
if (this.gameState !== e) {
this.updateSessionId(t.SessionID);
this.sessionId = t.SessionID;
this.setStringResultKey(t.ResultString);
this.lbKeyorMd5.string = "KEY:";
this.progressTimer.node.parent.active = !1;
}
break;

case r.default.GAMESTATE.SHOW_RESULT:
if (this.gameState !== e) {
this.updateSessionId(t.SessionID);
this.setStringResultKey(t.ResultString);
this.sessionId = t.SessionID;
this.lbKeyorMd5.string = "KEY:";
this.disPlayStringResult(this.resultKey);
}
break;

case r.default.GAMESTATE.WAITING:
if (this.gameState !== e) {
this.updateSessionId(t.SessionID);
this.setStringResultKey(t.ResultString);
this.sessionId = t.SessionID;
this.lbKeyorMd5.string = "KEY:";
this.disPlayStringResult(this.resultKey);
this.resetPlayersResultUI();
this.progressTimer.node.parent.active = !1;
}
break;

case r.default.GAMESTATE.SHAKING:
if (this.gameState !== e) {
this.updateSessionId(t.SessionID);
this.setStringResultBetting(t.Md5String);
this.lbKeyorMd5.string = "MD5:";
p.default.instance.clearAllChip();
this.resetPlayersResultUI();
this.progressTimer.node.parent.active = !1;
this.lbResult.string = "";
}
}
this.gameState = e;
};
e.prototype.updateTimer = function(t) {
if (this.lbTimer) {
var e = parseInt(t);
this.timeInt = e;
if (e > 0) {
this.lbTimer.string = e.toString();
e <= 3 && (this.gameState, r.default.GAMESTATE.BETTING);
}
}
};
var o;
c([ f(cc.Label) ], e.prototype, "lbSID", void 0);
c([ f(cc.Label) ], e.prototype, "lbTimer", void 0);
c([ f(cc.ProgressBar) ], e.prototype, "progressTimer", void 0);
c([ f(cc.Label) ], e.prototype, "lbResult", void 0);
c([ f(cc.Label) ], e.prototype, "lbKeyorMd5", void 0);
c([ f(cc.Label) ], e.prototype, "lbTotalUser", void 0);
c([ f(cc.Label) ], e.prototype, "lbTotalBetWin", void 0);
c([ f(cc.Node) ], e.prototype, "nodeChatGroupUser", void 0);
c([ f([ u.default ]) ], e.prototype, "players", void 0);
c([ f(cc.Label) ], e.prototype, "lbResultDiceHistory", void 0);
c([ f([ cc.Sprite ]) ], e.prototype, "listDiceHisoty", void 0);
c([ f(cc.Node) ], e.prototype, "nodeDiceSoiCauView", void 0);
c([ f([ cc.Sprite ]) ], e.prototype, "listNodeSoiCau", void 0);
return o = c([ d ], e);
}(cc.Component);
o.default = S;
cc._RF.pop();
}, {
"../../framework/common/Utils": void 0,
"./SicboDPQ.Assets": "SicboDPQ.Assets",
"./SicboDPQ.Common": "SicboDPQ.Common",
"./SicboDPQ.Const": "SicboDPQ.Const",
"./SicboDPQ.InputView": "SicboDPQ.InputView",
"./SicboDPQ.Player": "SicboDPQ.Player"
} ],
"SicboDPQ.InputView": [ function(t, e, o) {
"use strict";
cc._RF.push(e, "d8665b+stBFXpkD5A4GVWWr", "SicboDPQ.InputView");
var i, n = this && this.__extends || (i = function(t, e) {
return (i = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
i(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), c = this && this.__decorate || function(t, e, o, i) {
var n, c = arguments.length, s = c < 3 ? e : null === i ? i = Object.getOwnPropertyDescriptor(e, o) : i;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, o, i); else for (var a = t.length - 1; a >= 0; a--) (n = t[a]) && (s = (c < 3 ? n(s) : c > 3 ? n(e, o, s) : n(e, o)) || s);
return c > 3 && s && Object.defineProperty(e, o, s), s;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var s = t("../../framework/common/Utils"), a = t("./network/SicboDPQ.NetWorkClient"), r = t("./settings/SicboDPQ.Settings"), l = t("./SicboDPQ.Assets"), p = t("./SicboDPQ.ChipItem"), u = t("./SicboDPQ.ChipPool"), h = t("./SicboDPQ.Common"), d = t("./SicboDPQ.Controller"), f = t("./SicboDPQ.InfoView"), S = t("./SicboDPQ.PlayerData"), y = t("./SicboDPQ.ResultView"), g = cc._decorator, b = g.ccclass, m = g.property, v = function(t) {
n(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.nodeParentChip = null;
e.btnChips = [];
e.nodeGroup = null;
e.btnListChip = [];
e.listChipSelect = null;
e.btnRepeat = null;
e.btnRepeatX2 = null;
e.sprNan = null;
e.lbTotalBets = [];
e.NodeMyBet = [];
e.lbTotalUserBets = null;
e.isNan = !1;
e.nodeChipPress = null;
e.totalBets = null;
e.totalUserBets = 0;
e.rootDealerPos = null;
e.chipIndex = 1;
e.logSessionId = 0;
e.timePerBet = 0;
e.currentState = -1;
e.arrTimeoutBet = null;
e.posGroupUser = null;
e.percentListChips = .2;
e.percentVecXListChip = 0;
e.isRebet = !1;
return e;
}
o = e;
e.prototype.onLoad = function() {
o.instance = this;
this.isNan = !1;
this.nodeChipPress = new Array();
var t = this;
this.btnChips.forEach(function(e) {
t.nodeChipPress.push(e.node.getChildByName("chip_press"));
});
this.rootDealerPos = cc.v2(0, 160);
this.chipIndex = 1;
this.betValues = [ 1e3, 5e3, 1e4, 5e4, 1e5, 5e5, 1e6, 5e6, 1e7, 5e7 ];
this.processBetValUI();
this.resetTotalBetUI();
this.timePerBet = 200;
this.currentState = -1;
this.arrTimeoutBet = [];
var e = this.nodeGroup.parent.convertToWorldSpaceAR(this.nodeGroup.position), i = this.node.convertToNodeSpaceAR(e);
this.posGroupUser = cc.v2(i.x, i.y - 70);
this.initGateChip();
this.logBets = [];
this.logSessionId = 0;
this.isRebet = !1;
this.percentListChips = 0;
this.updatePercentScrollViewChips();
this.listChipSelect.node.on("scroll-ended", this.emitEventScrollEnded, this);
for (var n = 0; n < this.NodeMyBet.length; n++) this.NodeMyBet[n].active = !1;
};
e.prototype.onDisable = function() {
this.listChipSelect.node.off("scroll-ended", this.emitEventScrollEnded, this);
};
e.prototype.getIsNan = function() {
return this.isNan;
};
e.prototype.getLogBets = function() {
return this.logBets;
};
e.prototype.initGateChip = function() {
this.gateChips = [];
for (var t = 0; t <= 51; t++) this.gateChips[t] = [];
};
e.prototype.emitEventScrollEnded = function(t) {
this.percentListChips = t.getScrollOffset().x;
this.percentListChips >= -10 && (this.percentListChips = 0);
this.percentListChips <= -460 && (this.percentListChips = -470);
this.updatePercentScrollViewChips();
};
e.prototype.btnScrollBack = function() {
this.updatePercentScrollViewChips();
this.listChipSelect.scrollToOffset(cc.v2(0, 0), .5);
};
e.prototype.btnScrollNext = function() {
this.updatePercentScrollViewChips();
this.listChipSelect.scrollToOffset(this.listChipSelect.getMaxScrollOffset(), .5);
};
e.prototype.updatePercentScrollViewChips = function() {
this.btnListChip[0].getComponent(cc.Button).interactable = !0;
this.btnListChip[0].color = cc.Color.WHITE;
this.btnListChip[1].getComponent(cc.Button).interactable = !0;
this.btnListChip[1].color = cc.Color.WHITE;
if (0 == this.percentListChips) {
this.btnListChip[0].getComponent(cc.Button).interactable = !1;
this.btnListChip[0].color = cc.Color.GRAY;
} else if (this.percentListChips <= -460) {
this.btnListChip[1].getComponent(cc.Button).interactable = !1;
this.btnListChip[1].color = cc.Color.GRAY;
}
};
e.prototype.processBetValUI = function() {
for (var t = 0; t < this.betValues.length; t++) if (t != this.chipIndex) {
this.btnChips[t].interactable = !0;
this.nodeChipPress[t].active = !1;
this.btnChips[t].node.scale = .8;
}
this.btnChips[this.chipIndex].node.stopAllActions();
this.btnChips[this.chipIndex].interactable = !1;
this.nodeChipPress[this.chipIndex].active = !0;
this.btnChips[this.chipIndex].node.scale = 1;
};
e.prototype.resetTotalBetUI = function() {
this.totalBets = [ 0, 0, 0, 0 ];
this.totalUserBets = 0;
this.lbTotalBets.forEach(function(t) {
t.string = "";
});
this.lbTotalUserBets.string = "0";
};
e.prototype.playFxUserBet = function(t, e, o, i) {
r.default.instance.playAudioClip(1);
var n = e, c = u.default.instance.createChip();
c.parent = this.nodeParentChip;
var s;
s = -1 != t ? S.default[t].position : this.posGroupUser;
c.position = s;
var a = c.getComponent(p.default);
a.betIndex = n;
a.gate = e;
a.playerId = t;
a.position = s;
a.setChip(o);
this.gateChips[e].push(a);
var l = y.default.instance.getPositionFromGate(n);
l.y = l.y + this.gateChips[e].length - 1 - 70;
if (i) a.moveTo(cc.v2(l.x, l.y), e); else {
a.setPosition(cc.v2(l.x, l.y));
this.onCallBackMoveToChipUserBet(e);
}
};
e.prototype.onCallBackMoveToChipUserBet = function(t) {
if (-1 != t) {
var e = s.default.randomRangeInt(4, 8);
if (this.gateChips[t].length > 13) for (var o = 0; o < e; o++) {
this.gateChips[t][0] && this.nodeParentChip.removeChild(this.gateChips[t][0].node);
this.gateChips[t].shift();
for (var i = 0; i < this.gateChips[t].length; i++) this.gateChips[t][i] && this.gateChips[t][i].node.runAction(cc.moveTo(.2, this.gateChips[t][i].node.x, this.gateChips[t][i].node.y - 1));
}
}
};
e.prototype.playFXDealerPay = function(t) {
var e = u.default.instance.createChip();
e.parent = this.nodeParentChip;
e.position = this.rootDealerPos;
var o = e.getComponent(p.default);
o.betIndex = t.betIndex;
o.playerId = t.playerId;
o.position = t.position;
o.setChip(t.chipIndex);
this.gateChips[t.gate].push(o);
var i = y.default.instance.getPositionFromGate(t.gate);
i.y = i.y - 60;
var n = i.x - 5, c = i.x + 5, s = i.y - 7, a = i.y + 7, r = n + Math.floor(Math.random() * Math.abs(c - n)), l = s + Math.floor(Math.random() * Math.abs(a - s));
o.moveTo(cc.v2(r, l));
};
e.prototype.playFxPay = function(t, e) {
t.moveToEnd(t.position, e);
};
e.prototype.playFxLost = function(t, e) {
var o = this.rootDealerPos.x - 20, i = this.rootDealerPos.x + 20, n = this.rootDealerPos.y + 5, c = this.rootDealerPos.y + 15, s = o + Math.floor(Math.random() * Math.abs(i - o)), a = n + Math.floor(Math.random() * Math.abs(c - n));
t.moveToEndStop(cc.v2(s, a), e);
};
e.prototype.betValueClicked = function(t, e) {
r.default.instance.playAudioClip(0);
this.chipIndex = parseInt(e);
this.processBetValUI();
};
e.prototype.betClicked = function(t, e) {
if (d.default.instance.timer <= 3) d.default.instance.showMsg("Hết thời gian đặt cược..."); else {
var o = parseInt(e), i = this.betValues[this.chipIndex];
if (f.default.instance.me.userInfo.Balance < i) lngui.UIPopupManager.instance.showPopup("Số dư không đủ..."); else {
y.default.instance.nodeFxGateClick(o);
this.isRebet = !1;
var n = new h.default.ModelsSignalr();
n.M = "Bet";
n.A = [ i, o ];
a.default.getInstance().send(n);
}
}
};
e.prototype.nanClicked = function() {
this.isNan = !this.isNan;
this.isNan ? this.sprNan.spriteFrame = l.default.instance.getSprNan(0) : this.sprNan.spriteFrame = l.default.instance.getSprNan(1);
};
e.prototype.actCoppy = function() {
this.currentState == h.default.GAMESTATE.BETTING ? s.default.copyToClipboard(f.default.instance.resultBetting) : s.default.copyToClipboard(f.default.instance.resultKey);
d.default.instance.showMsg("Sao chép chuỗi thành công!");
};
e.prototype.repeatClicked = function() {
if (d.default.instance.timer <= 3) d.default.instance.showMsg("Hết thời gian đặt cược..."); else {
var t = this.logBets;
if (t && null != t && t.length > 0 && 0 != this.logSessionId) {
this.reBet();
this.btnRepeat.interactable = !1;
this.btnRepeat.node.color = cc.Color.GRAY;
var e = this;
setTimeout(function() {
e.btnRepeat.interactable = !0;
e.btnRepeat.node.color = cc.Color.WHITE;
}, 1500);
} else d.default.instance.showMsg("Không có dữ liệu phiên trước...");
}
};
e.prototype.repeatX2Clicked = function() {
if (d.default.instance.timer <= 3) d.default.instance.showMsg("Hết thời gian đặt cược..."); else {
var t = this.logBets;
if (t && null != t && t.length > 0 && 0 != this.logSessionId) {
this.reBetX2();
this.btnRepeatX2.interactable = !1;
this.btnRepeatX2.node.color = cc.Color.GRAY;
var e = this;
setTimeout(function() {
e.btnRepeatX2.interactable = !0;
e.btnRepeatX2.node.color = cc.Color.WHITE;
}, 1500);
} else d.default.instance.showMsg("Không có dữ liệu phiên trước...");
}
};
e.prototype.reBetX2 = function() {
var t = this;
if (0 != t.logSessionId) {
var e = 0;
this.logBets.forEach(function(t) {
e += 2 * t.Amount;
});
if (e > f.default.instance.me.userInfo.Balance) lngui.UITextManager.showCenterNotification("Số dư không đủ"); else {
var o = 0, i = this.logBets;
this.isRebet = !0;
i.forEach(function(e) {
t.arrTimeoutBet.push(setTimeout(function() {
if (t.node && t.node.active && t.currentState == h.default.GAMESTATE.BETTING && t.node && t.node.active) {
e.Amount = 2 * e.Amount;
t.sendRequestReBet(e);
}
}, t.timePerBet * o));
o++;
});
}
}
};
e.prototype.clearAllChip = function() {
this.nodeParentChip.removeAllChildren(!0);
};
e.prototype.getChipIndexFromValue = function(t) {
for (var e = 0, o = this.betValues.length, i = 0; i < o; i++) if (t === this.betValues[i]) {
e = i;
break;
}
return e;
};
e.prototype.activeAllButtonBet = function(t) {
this.btnRepeat.node.color = t ? cc.Color.WHITE : cc.Color.GRAY;
this.btnRepeat.interactable = t;
this.btnRepeatX2.node.color = t ? cc.Color.WHITE : cc.Color.GRAY;
this.btnRepeatX2.interactable = t;
y.default.instance.nodeGateDisabeClick(t);
};
e.prototype.clearAllTimeOut = function() {
this.arrTimeoutBet.forEach(function(t) {
clearTimeout(t);
});
this.arrTimeoutBet = [];
};
e.prototype.getGateChips = function() {
return this.gateChips;
};
e.prototype.playerBet = function(t) {
if (f.default.instance.getPositions()) {
var e = t[0], o = t[1], i = t[2], n = t[3];
f.default.instance.updateChip(e, n);
this.playFxUserBet(f.default.instance.getIndexUIBetByAccID(e), i, this.getChipIndexFromValue(o), !0);
if (i == h.default.GATE.TAI || i == h.default.GATE.XIU || i == h.default.GATE.CHAN || i == h.default.GATE.LE) {
this.totalBets[i] += o;
this.lbTotalBets[i].string = s.default.nFormatter(this.totalBets[i]);
}
if (e == f.default.instance.getAccountIdIsMe()) {
this.logSessionId < f.default.instance.getSessionId() && (this.logBets = []);
this.logBets.push({
AccountID: e,
Amount: o,
Gate: i
});
this.totalUserBets += o;
this.lbTotalUserBets.string = s.default.formatNumberMin(this.totalUserBets);
this.logSessionId = f.default.instance.getSessionId();
}
}
};
e.prototype.reBet = function() {
var t = this;
if (0 != t.logSessionId) {
var e = 0;
this.logBets.forEach(function(t) {
e += t.Amount;
});
if (e > f.default.instance.me.userInfo.Balance) cc.find("Canvas/popupView-noHide").getComponent("PopupView").showPopupShopRequire(); else {
var o = 0, i = this.logBets;
this.isRebet = !0;
i.forEach(function(e) {
t.arrTimeoutBet.push(setTimeout(function() {
if (t.node && t.node.active && t.currentState == h.default.GAMESTATE.BETTING && t.node && t.node.active) {
e.Amount = e.Amount;
t.sendRequestReBet(e);
}
}, t.timePerBet * o));
o++;
});
}
}
};
e.prototype.sendRequestReBet = function(t) {
if (f.default.instance.me.userInfo.Balance < t.Amount) cc.find("Canvas/popupView-noHide").getComponent("PopupView").showPopupShopRequire(); else {
var e = new h.default.ModelsSignalr();
e.M = "Bet";
e.A = [ t.Amount, t.Gate ];
a.default.getInstance().send(e);
}
};
e.prototype.showLastInput = function(t) {
var e = this;
t.forEach(function(t) {
t.forEach(function(t) {
e.playFxUserBet(f.default.instance.getIndexUIBetByAccID(t.AccountID), t.BetSide, e.getChipIndexFromValue(t.BetValue), !1);
if (t.BetSide == h.default.GATE.TAI || t.BetSide == h.default.GATE.XIU || t.BetSide == h.default.GATE.CHAN || t.BetSide == h.default.GATE.LE) {
e.totalBets[t.BetSide] += t.BetValue;
e.lbTotalBets[t.BetSide].string = s.default.nFormatter(e.totalBets[t.BetSide]);
}
if (t.AccountID == f.default.instance.getAccountIdIsMe()) {
(0 != e.logSessionId && e.logSessionId < f.default.instance.getSessionId() || e.isRebet) && (e.logBets = []);
e.logBets.push({
AccountID: t.AccountID,
Amount: t.BetValue,
Gate: t.BetSide
});
e.totalUserBets += parseInt(t.BetValue);
e.lbTotalUserBets.string = s.default.formatNumberMin(e.totalUserBets);
e.logSessionId = f.default.instance.getSessionId();
}
});
});
};
e.prototype.updateInput = function(t) {
switch (t) {
case h.default.GAMESTATE.BETTING:
if (this.currentState !== t) {
this.clearAllTimeOut();
this.resetTotalBetUI();
this.activeAllButtonBet(!0);
d.default.instance.showMsg("Xin mời đặt cược...");
}
this.currentState == t && 3 == d.default.instance.timer && d.default.instance.showMsg("Dừng cược nha...");
break;

case h.default.GAMESTATE.OPEN_PLATE:
if (this.currentState !== t) {
this.clearAllTimeOut();
this.activeAllButtonBet(!1);
}
break;

case h.default.GAMESTATE.SHOW_RESULT:
this.currentState !== t && this.activeAllButtonBet(!1);
break;

case h.default.GAMESTATE.WAITING:
if (this.currentState !== t) {
this.activeAllButtonBet(!1);
for (var e = 0; e < this.NodeMyBet.length; e++) this.NodeMyBet[e].active = !1;
}
break;

case h.default.GAMESTATE.SHAKING:
if (this.currentState !== t) {
this.resetTotalBetUI();
this.activeAllButtonBet(!1);
}
}
this.currentState = t;
};
e.prototype.ShowMyBets = function(t) {
if (h.default.GAMESTATE.BETTING) {
this.NodeMyBet[t[0].BetSide].active = !0;
this.NodeMyBet[t[0].BetSide].getChildByName("txtMyBets").getComponent(cc.Label).string = s.default.nFormatter(t[0].SumaryBet);
lngui.EventDispatch.instance.emit(lngui.EVENT_GAMECORE.UPDATE_TOTAL_GOLD, t[1]);
}
};
var o;
e.instance = null;
c([ m(cc.Node) ], e.prototype, "nodeParentChip", void 0);
c([ m([ cc.Button ]) ], e.prototype, "btnChips", void 0);
c([ m(cc.Node) ], e.prototype, "nodeGroup", void 0);
c([ m([ cc.Node ]) ], e.prototype, "btnListChip", void 0);
c([ m(cc.ScrollView) ], e.prototype, "listChipSelect", void 0);
c([ m(cc.Button) ], e.prototype, "btnRepeat", void 0);
c([ m(cc.Button) ], e.prototype, "btnRepeatX2", void 0);
c([ m(cc.Sprite) ], e.prototype, "sprNan", void 0);
c([ m([ cc.Label ]) ], e.prototype, "lbTotalBets", void 0);
c([ m([ cc.Node ]) ], e.prototype, "NodeMyBet", void 0);
c([ m(cc.Label) ], e.prototype, "lbTotalUserBets", void 0);
return o = c([ b ], e);
}(cc.Component);
o.default = v;
cc._RF.pop();
}, {
"../../framework/common/Utils": void 0,
"./SicboDPQ.Assets": "SicboDPQ.Assets",
"./SicboDPQ.ChipItem": "SicboDPQ.ChipItem",
"./SicboDPQ.ChipPool": "SicboDPQ.ChipPool",
"./SicboDPQ.Common": "SicboDPQ.Common",
"./SicboDPQ.Controller": "SicboDPQ.Controller",
"./SicboDPQ.InfoView": "SicboDPQ.InfoView",
"./SicboDPQ.PlayerData": "SicboDPQ.PlayerData",
"./SicboDPQ.ResultView": "SicboDPQ.ResultView",
"./network/SicboDPQ.NetWorkClient": "SicboDPQ.NetWorkClient",
"./settings/SicboDPQ.Settings": "SicboDPQ.Settings"
} ],
"SicboDPQ.Loading": [ function(t, e, o) {
"use strict";
cc._RF.push(e, "27b11h98VBF+rlycUKjb4PZ", "SicboDPQ.Loading");
var i, n = this && this.__extends || (i = function(t, e) {
return (i = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
i(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), c = this && this.__decorate || function(t, e, o, i) {
var n, c = arguments.length, s = c < 3 ? e : null === i ? i = Object.getOwnPropertyDescriptor(e, o) : i;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, o, i); else for (var a = t.length - 1; a >= 0; a--) (n = t[a]) && (s = (c < 3 ? n(s) : c > 3 ? n(e, o, s) : n(e, o)) || s);
return c > 3 && s && Object.defineProperty(e, o, s), s;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var s = cc._decorator, a = s.ccclass, r = s.property, l = function(t) {
n(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.progressBar = null;
e.NodeBG = null;
e.isJoinGame = !1;
return e;
}
e.prototype.onLoad = function() {
this.NodeBG.active = !0;
};
e.prototype.update = function() {
this.progressBar.node.parent.active && this.progressBar.progress >= 1 && (this.isJoinGame || this.onJoinRoom());
};
e.prototype.show = function(t) {
this.node.active = t;
return this.node.active;
};
e.prototype.actBack = function() {
lngui.GameCoreManager.instance.onBackToLobby();
};
e.prototype.actHonors = function() {};
e.prototype.actHistory = function() {};
e.prototype.onJoinRoom = function() {
var t = this;
this.isJoinGame = !0;
setTimeout(function() {
t.NodeBG.active = !1;
}, 1e3);
};
c([ r(cc.ProgressBar) ], e.prototype, "progressBar", void 0);
c([ r(cc.Node) ], e.prototype, "NodeBG", void 0);
return c([ a ], e);
}(cc.Component);
o.default = l;
cc._RF.pop();
}, {} ],
"SicboDPQ.MaxBet": [ function(t, e, o) {
"use strict";
cc._RF.push(e, "fe8379ajyZFiqnwydkkfd9K", "SicboDPQ.MaxBet");
var i, n = this && this.__extends || (i = function(t, e) {
return (i = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
i(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), c = this && this.__decorate || function(t, e, o, i) {
var n, c = arguments.length, s = c < 3 ? e : null === i ? i = Object.getOwnPropertyDescriptor(e, o) : i;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, o, i); else for (var a = t.length - 1; a >= 0; a--) (n = t[a]) && (s = (c < 3 ? n(s) : c > 3 ? n(e, o, s) : n(e, o)) || s);
return c > 3 && s && Object.defineProperty(e, o, s), s;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var s = cc._decorator, a = s.ccclass, r = s.property, l = function(t) {
n(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.nodeDis = null;
e.isOpenMaxBet = !1;
return e;
}
o = e;
e.prototype.onLoad = function() {
o.instance = this;
};
e.prototype.onEnable = function() {
this.isOpenMaxBet = !1;
this.nodeDis.active = this.isOpenMaxBet;
};
e.prototype.onShow = function() {
if (0 == this.isOpenMaxBet) {
this.isOpenMaxBet = !0;
this.node.stopAllActions();
(e = cc.moveTo(.5, cc.v2(-500, 0))).easing(cc.easeQuadraticActionInOut());
var t = cc.callFunc(this.onShowFinish.bind(this), null);
this.node.runAction(cc.sequence(e, t));
} else {
this.isOpenMaxBet = !1;
this.node.stopAllActions();
var e;
(e = cc.moveTo(.5, cc.v2(-1100, 0))).easing(cc.easeQuadraticActionInOut());
t = cc.callFunc(this.onShowFinish.bind(this), null);
this.node.runAction(cc.sequence(e, t));
}
};
e.prototype.onShowFinish = function() {
this.nodeDis.active = this.isOpenMaxBet;
};
var o;
e.instance = null;
c([ r(cc.Node) ], e.prototype, "nodeDis", void 0);
return o = c([ a ], e);
}(cc.Component);
o.default = l;
cc._RF.pop();
}, {} ],
"SicboDPQ.MoveBullet": [ function(t, e, o) {
"use strict";
cc._RF.push(e, "93868i/pdVPEpHlDoMnKgdt", "SicboDPQ.MoveBullet");
var i, n = this && this.__extends || (i = function(t, e) {
return (i = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
i(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), c = this && this.__decorate || function(t, e, o, i) {
var n, c = arguments.length, s = c < 3 ? e : null === i ? i = Object.getOwnPropertyDescriptor(e, o) : i;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, o, i); else for (var a = t.length - 1; a >= 0; a--) (n = t[a]) && (s = (c < 3 ? n(s) : c > 3 ? n(e, o, s) : n(e, o)) || s);
return c > 3 && s && Object.defineProperty(e, o, s), s;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var s = cc._decorator, a = s.ccclass, r = s.property, l = function(t) {
n(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.progressBar = null;
e.movingNode = null;
e.progressSpeed = .3;
return e;
}
e.prototype.onEnable = function() {
this.progressBar.progress = 0;
};
e.prototype.start = function() {
this.progressBar.progress = 0;
};
e.prototype.update = function(t) {
if (this.progressBar.progress < 1) {
this.progressBar.progress += t * this.progressSpeed;
this.progressBar.progress > 1 && (this.progressBar.progress = 1);
}
var e = this.progressBar.barSprite.node, o = e.width * e.scaleX, i = e.convertToWorldSpaceAR(cc.v2(o, 0)), n = this.movingNode.parent.convertToNodeSpaceAR(i);
this.movingNode.setPosition(n.x, this.movingNode.y);
};
c([ r(cc.ProgressBar) ], e.prototype, "progressBar", void 0);
c([ r(cc.Node) ], e.prototype, "movingNode", void 0);
c([ r ], e.prototype, "progressSpeed", void 0);
return c([ a ], e);
}(cc.Component);
o.default = l;
cc._RF.pop();
}, {} ],
"SicboDPQ.NetWorkClient": [ function(t, e, o) {
"use strict";
cc._RF.push(e, "8bc29oCyH5F6r13+ayUTAS8", "SicboDPQ.NetWorkClient");
var i, n = this && this.__extends || (i = function(t, e) {
return (i = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
i(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
});
Object.defineProperty(o, "__esModule", {
value: !0
});
var c = t("../SicboDPQ.Common"), s = t("../SicboDPQ.Config"), a = t("./SicboDPQ.Http"), r = t("./SicboDPQ.Network.Clients"), l = t("./SicboDPQ.Network.Service"), p = function() {
this.M = null;
this.A = null;
this.H = null;
this.I = null;
}, u = function(t) {
n(e, t);
function e() {
var e = t.call(this) || this;
e.services = new Array();
e.isLogin = !1;
e.onLogined = null;
e.intervalPing = -1;
e.lastID = 0;
e.ID = 0;
e.isUseWSS = s.default.App.USE_WSS;
e.lastID = 0;
e.ID = 0;
return e;
}
e.getInstance = function() {
null == this.instance && (this.instance = new e());
return this.instance;
};
e.prototype.checkConnect = function(t) {
var e = this;
void 0 === t && (t = null);
this.onLogined = t;
if (this.isConnected()) this.isLogin && null != this.onLogined && this.onLogined(!0); else {
var o = this;
a.default.sendRequest("GET", s.default.App.HOST_SicboDPQ.host, "/signalr/negotiate", null, function(t, i) {
if (null == t) {
o.connectToken = i.ConnectionToken;
o.tid = i.ConnectionId;
o.data = s.default.App.HOST_SicboDPQ.hub;
o.connect();
null != e.onLogined && e.onLogined(!0);
} else e.onLogined(!1);
});
}
};
e.prototype.onError = function(t) {
console.log("Connect server SicboDPQ error: ");
console.log(t);
};
e.prototype.connect = function() {
t.prototype.connect.call(this, s.default.App.HOST_SicboDPQ.host, null);
};
e.prototype.reConnect = function() {
this.isReconnect = !0;
t.prototype.connect.call(this, s.default.App.HOST_SicboDPQ.host, null);
};
e.prototype.onOpen = function(e) {
var o = this;
t.prototype.onOpen.call(this, e);
this.sendLogin();
this.intervalPing = setInterval(function() {
return o.sendPingPoong();
}, 5e3);
};
e.prototype.sendLogin = function() {
var t = new p();
t.M = "EnterLobby";
t.A = [ c.default.Utils.getInstance().getDeviceType(), s.default.App.VIP_PLAYER ];
this.send(t);
};
e.prototype.sendPlayNow = function() {
var t = new p();
t.M = "PlayNow";
t.A = "";
this.send(t);
};
e.prototype.sendPingPoong = function() {
var t = new p();
t.M = "PingPong";
this.send(t);
};
e.prototype.send = function(t) {
if (this.ws && this.isConnected()) {
this.lastID = this.ID;
t.H = s.default.App.HOST_SicboDPQ.hub;
t.I = this.ID;
this.ID++;
this.ws.send(JSON.stringify(t));
}
};
e.prototype.ping = function() {
null != this.ws && (this.ws.readyState, WebSocket.OPEN);
};
e.prototype.removeServices = function(t) {
for (var e = 0; e < this.services.length; e++) this.services[e].target === t && this.services.splice(e, 1);
};
e.prototype.onMessage = function(t) {
var e = JSON.parse(t.data);
if (void 0 !== e.M && e.M.length > 0) {
e.M[0].A;
for (var o = 0; o < this.services.length; o++) {
var i = this.services[o];
if (i.target && i.target instanceof Object && i.target.node) {
e.M && e.M.length > 0 && e.M.forEach(function(t) {
"" != t.M && i.callback(t.M, t.A);
});
if (!this.isLogin && null != i.cbLogin) {
this.isLogin = !0;
i.cbLogin();
}
} else {
this.services.splice(o, 1);
o--;
}
}
} else if (e.R && e.R.AccountID) {
lngui.UIWaitingLayout.showWaiting();
this.sendPlayNow();
setTimeout(function() {
lngui.UIWaitingLayout.hideWaiting();
}, 2e3);
} else if (e.R && e.I === this.lastID.toString()) {
this.lastID = 0;
lngui.UIWaitingLayout.hideWaiting();
} else e.I && (this.lastID.toString(), e.I);
};
e.prototype.onClose = function() {
console.log("SicboDPQ on Close......!");
for (var t = 0; t < this._onCloses.length; t++) {
var e = this._onCloses[t];
if (e.target && e.target instanceof Object && e.target.node) e.callback(null, null); else {
this._onCloses.splice(t, 1);
t--;
}
}
this.isLogin = !1;
this.ws.onopen = null;
this.ws.onmessage = null;
this.ws.onerror = null;
this.ws.onclose = null;
this.ws = null;
};
e.prototype.addListener = function(t, e, o) {
this.services.filter(function(t) {
return t.target === e;
}).length > 0 || this.services.push(new l.default(e, t, o));
};
return e;
}(r.default);
o.default = u;
cc._RF.pop();
}, {
"../SicboDPQ.Common": "SicboDPQ.Common",
"../SicboDPQ.Config": "SicboDPQ.Config",
"./SicboDPQ.Http": "SicboDPQ.Http",
"./SicboDPQ.Network.Clients": "SicboDPQ.Network.Clients",
"./SicboDPQ.Network.Service": "SicboDPQ.Network.Service"
} ],
"SicboDPQ.Network.Clients": [ function(t, e, o) {
"use strict";
cc._RF.push(e, "8624410wzdAOYblx3KiEleq", "SicboDPQ.Network.Clients");
Object.defineProperty(o, "__esModule", {
value: !0
});
var i = t("../SicboDPQ.Config"), n = t("./SicboDPQ.Network.Service"), c = function() {
function t() {
this.ws = null;
this.host = null;
this.port = null;
this.connectToken = null;
this.tid = null;
this.data = null;
this.url = null;
this.isForceClose = !1;
this.isAutoReconnect = !0;
this.isUseWSS = !1;
this.isReconnect = !1;
this._onOpenes = new Array();
this._onCloses = new Array();
}
t.prototype.connect = function(t, e) {
var o, n;
this.isForceClose = !1;
this.host = t;
this.port = e;
var c = JSON.stringify([ {
name: this.data
} ]);
null != this.port ? this.url = this.host + ":" + this.port + "/signalr/connect?transport=webSockets&connectionToken=" + encodeURIComponent(this.connectToken) + "&connectionData=" + encodeURIComponent(c) + "&tid=" + encodeURIComponent(this.tid) + "&access_token=" + encodeURIComponent(i.default.App.ACCESS_TOKEN) + "&lang=" + encodeURIComponent(lngui.I18nController.getLang()) + "&gate=" + encodeURIComponent(null === (o = lngui.ConfigManager.instance.ConfigInfo) || void 0 === o ? void 0 : o.Gate) : this.url = this.host + "/signalr/connect?transport=webSockets&connectionToken=" + encodeURIComponent(this.connectToken) + "&connectionData=" + encodeURIComponent(c) + "&tid=" + encodeURIComponent(this.tid) + "&access_token=" + encodeURIComponent(i.default.App.ACCESS_TOKEN) + "&lang=" + encodeURIComponent(lngui.I18nController.getLang()) + "&gate=" + encodeURIComponent(null === (n = lngui.ConfigManager.instance.ConfigInfo) || void 0 === n ? void 0 : n.Gate);
this.isReconnect && (this.url = this.url.replace("/signalr/connect?", "/signalr/reconnect?"));
if (null == this.ws) {
this.isUseWSS ? cc.sys.isNative && cc.sys.os === cc.sys.OS_ANDROID ? this.ws = new WebSocket("wss://" + this.url, [], cc.url.raw("resources/cacert.pem")) : this.ws = new WebSocket("wss://" + this.url, []) : cc.sys.isNative && cc.sys.os === cc.sys.OS_ANDROID ? this.ws = new WebSocket("ws://" + this.url, []) : this.ws = new WebSocket("ws://" + this.url);
this.ws.binaryType = "arraybuffer";
this.ws.onopen = this.onOpen.bind(this);
this.ws.onmessage = this.onMessage.bind(this);
this.ws.onerror = this.onError.bind(this);
this.ws.onclose = this.onClose.bind(this);
} else if (this.ws.readyState !== WebSocket.OPEN) {
this.ws.close();
this.ws = null;
this.connect(t, e);
}
};
t.prototype.onOpen = function() {};
t.prototype.onMessage = function() {};
t.prototype.onError = function(t) {
console.log(t);
};
t.prototype.onClose = function() {};
t.prototype.addOpen = function(t, e, o) {
this._onOpenes.filter(function(t) {
return t.target === e;
}).length > 0 || this._onOpenes.push(new n.default(e, t, o));
};
t.prototype.addOnClose = function(t, e, o) {
this._onCloses.filter(function(t) {
return t.target === e;
}).length > 0 || this._onCloses.push(new n.default(e, t, o));
};
t.prototype.close = function() {
this.isForceClose = !0;
this.ws && this.ws.close();
};
t.prototype.isConnected = function() {
return !!this.ws && this.ws.readyState === WebSocket.OPEN;
};
return t;
}();
o.default = c;
cc._RF.pop();
}, {
"../SicboDPQ.Config": "SicboDPQ.Config",
"./SicboDPQ.Network.Service": "SicboDPQ.Network.Service"
} ],
"SicboDPQ.Network.Service": [ function(t, e, o) {
"use strict";
cc._RF.push(e, "56655wAmqZAZZB+7SghsZq2", "SicboDPQ.Network.Service");
Object.defineProperty(o, "__esModule", {
value: !0
});
o.default = function(t, e, o) {
this.target = t;
this.callback = e;
this.cbLogin = o;
};
cc._RF.pop();
}, {} ],
"SicboDPQ.PlayerData": [ function(t, e, o) {
"use strict";
cc._RF.push(e, "171e96ZeOZChaGK7ZtcpfKx", "SicboDPQ.PlayerData");
Object.defineProperty(o, "__esModule", {
value: !0
});
var i = [ {
accID: 0,
balance: 0,
avatarId: 1,
indexBet: 0,
position: cc.v2(-562, -361),
chips: []
}, {
accID: 0,
balance: 500,
avatarId: 3,
indexBet: 0,
position: cc.v2(-610, -208),
chips: []
}, {
accID: 0,
balance: 1500,
avatarId: 2,
indexBet: 0,
position: cc.v2(-611, -30),
chips: []
}, {
accID: 0,
balance: 2e3,
avatarId: 1,
indexBet: 0,
position: cc.v2(-611, 141),
chips: []
}, {
accID: 0,
balance: 1e4,
avatarId: 6,
indexBet: 0,
position: cc.v2(608, 141),
chips: []
}, {
accID: 0,
balance: 5e3,
avatarId: 5,
indexBet: 0,
position: cc.v2(608, -30),
chips: []
}, {
accID: 0,
balance: 9e3,
avatarId: 4,
indexBet: 0,
position: cc.v2(608, -208),
chips: []
} ];
o.default = i;
cc._RF.pop();
}, {} ],
"SicboDPQ.PlayersNotInGame": [ function(t, e, o) {
"use strict";
cc._RF.push(e, "0aa2bHs4bJOa6TM40pvWdXa", "SicboDPQ.PlayersNotInGame");
var i, n = this && this.__extends || (i = function(t, e) {
return (i = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
i(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), c = this && this.__decorate || function(t, e, o, i) {
var n, c = arguments.length, s = c < 3 ? e : null === i ? i = Object.getOwnPropertyDescriptor(e, o) : i;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, o, i); else for (var a = t.length - 1; a >= 0; a--) (n = t[a]) && (s = (c < 3 ? n(s) : c > 3 ? n(e, o, s) : n(e, o)) || s);
return c > 3 && s && Object.defineProperty(e, o, s), s;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var s = t("../../../framework/common/Utils"), a = t("../network/SicboDPQ.Http"), r = t("../SicboDPQ.Assets"), l = t("../SicboDPQ.Common"), p = t("../SicboDPQ.Config"), u = t("../SicboDPQ.Controller"), h = cc._decorator, d = h.ccclass, f = h.property, S = function(t) {
n(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.content = null;
e.template = null;
e.lblPage = null;
e.btnNext = null;
e.btnBack = null;
e.nodeDis = null;
e.pageIndex = 1;
e.maxPage = 1;
e.maxTotalRecord = 15;
e.isOpenPlayerOnGame = !1;
return e;
}
o = e;
e.prototype.onLoad = function() {
o.instance = this;
};
e.prototype.onShow = function() {
this.node.stopAllActions();
var t;
if (0 == this.isOpenPlayerOnGame) {
this.content.removeAllChildren();
this.template.active = !1;
this.listUserInRooms = [];
this.pageIndex = 1;
this.maxTotalRecord = 30;
this.onLoadData();
this.isOpenPlayerOnGame = !0;
t = cc.v2(475, 0);
} else {
this.isOpenPlayerOnGame = !1;
t = cc.v2(1100, 0);
}
var e = cc.moveTo(.5, t).easing(cc.easeQuadraticActionInOut()), o = cc.callFunc(this.onShowFinish.bind(this), this);
this.node.runAction(cc.sequence(e, o));
};
e.prototype.onEnable = function() {
this.isOpenPlayerOnGame = !1;
this.nodeDis.active = this.isOpenPlayerOnGame;
};
e.prototype.onClose = function() {
this.listUserInRooms = [];
this.pageIndex = 1;
this.onShow();
};
e.prototype.actBackPage = function() {
lngui.UIWaitingLayout.showWaiting();
this.pageIndex--;
this.pageIndex <= 1 && (this.pageIndex = 1);
this.loadDataOnList();
};
e.prototype.actNextPage = function() {
lngui.UIWaitingLayout.showWaiting();
this.pageIndex++;
this.pageIndex >= this.maxPage && (this.pageIndex = this.maxPage);
this.loadDataOnList();
};
e.prototype.loadDataOnList = function() {
var t = this.listUserInRooms;
this.maxPage = Math.round(this.listUserInRooms.length / this.maxTotalRecord) + 1;
var e = (this.pageIndex - 1) * this.maxTotalRecord, o = t.slice(e, e + this.maxTotalRecord);
this.content.removeAllChildren();
this.template.active = !1;
for (var i = 0; i < o.length; i++) if (null != o[i]) {
var n = cc.instantiate(this.template), c = n.children[0];
c.children[0].getComponent(cc.Sprite).spriteFrame = r.default.instance.getSprAvatar(o[i].Account.Avatar);
c.children[3].getComponent(cc.Label).string = l.default.Utils.getInstance().formatName(o[i].Account.NickName);
c.children[4].getComponent(cc.Label).string = s.default.formatNumber(o[i].Account.Balance);
n.active = !0;
n.parent = this.content;
}
this.onChangeButtonPage();
};
e.prototype.onChangeButtonPage = function() {
this.btnBack.color = cc.Color.WHITE;
this.btnNext.color = cc.Color.WHITE;
this.btnBack.getComponent(cc.Button).interactable = !0;
this.btnNext.getComponent(cc.Button).interactable = !0;
if (this.pageIndex <= 1) {
this.btnBack.color = cc.Color.GRAY;
this.btnBack.getComponent(cc.Button).interactable = !1;
} else if (this.pageIndex >= this.maxPage) {
this.btnNext.color = cc.Color.GRAY;
this.btnNext.getComponent(cc.Button).interactable = !1;
}
this.lblPage.string = this.pageIndex + "/" + this.maxPage;
lngui.UIWaitingLayout.hideWaiting();
};
e.prototype.onLoadData = function() {
var t = this;
this.content.removeAllChildren();
this.template.active = !1;
a.default.sendRequest("GET", p.default.App.HOST_SicboDPQ.host, "api/Sicbo/GetPlayersNotInGame", null, function(e, o) {
if (e) {
t.onClose();
u.default.instance.showMsg("Hệ thống đang bận, vui lòng tải lại sau!");
} else {
t.listUserInRooms = o;
t.loadDataOnList();
}
});
};
e.prototype.onShowFinish = function() {
this.nodeDis.active = this.isOpenPlayerOnGame;
};
var o;
e.instance = null;
c([ f(cc.Node) ], e.prototype, "content", void 0);
c([ f(cc.Node) ], e.prototype, "template", void 0);
c([ f(cc.Label) ], e.prototype, "lblPage", void 0);
c([ f(cc.Node) ], e.prototype, "btnNext", void 0);
c([ f(cc.Node) ], e.prototype, "btnBack", void 0);
c([ f(cc.Node) ], e.prototype, "nodeDis", void 0);
return o = c([ d ], e);
}(cc.Component);
o.default = S;
cc._RF.pop();
}, {
"../../../framework/common/Utils": void 0,
"../SicboDPQ.Assets": "SicboDPQ.Assets",
"../SicboDPQ.Common": "SicboDPQ.Common",
"../SicboDPQ.Config": "SicboDPQ.Config",
"../SicboDPQ.Controller": "SicboDPQ.Controller",
"../network/SicboDPQ.Http": "SicboDPQ.Http"
} ],
"SicboDPQ.Player": [ function(t, e, o) {
"use strict";
cc._RF.push(e, "b4ca1Rk8+tJMLz0coTbB/Iu", "SicboDPQ.Player");
var i, n = this && this.__extends || (i = function(t, e) {
return (i = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
i(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), c = this && this.__decorate || function(t, e, o, i) {
var n, c = arguments.length, s = c < 3 ? e : null === i ? i = Object.getOwnPropertyDescriptor(e, o) : i;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, o, i); else for (var a = t.length - 1; a >= 0; a--) (n = t[a]) && (s = (c < 3 ? n(s) : c > 3 ? n(e, o, s) : n(e, o)) || s);
return c > 3 && s && Object.defineProperty(e, o, s), s;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var s = t("../../framework/common/Utils"), a = t("./SicboDPQ.Assets"), r = t("./SicboDPQ.Common"), l = t("./SicboDPQ.InfoView"), p = cc._decorator, u = p.ccclass, h = p.property, d = function(t) {
n(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.lbSID = null;
e.lbName = null;
e.lbNickname = null;
e.lbChips = null;
e.animation = null;
e.nodeChat = null;
e.avatar = null;
e.bubble = null;
e.nodeEmotion = null;
e.skeEmotion = null;
e.lbBubbleChat = null;
e.nodeWin = null;
e.lbWin = null;
e.animLbWin = null;
e.nodeInfo = null;
e.position = null;
return e;
}
e.prototype.onLoad = function() {
this.animation = this.node.getComponent(cc.Animation);
this.nodeChat = this.node.getChildByName("chat");
this.avatar = this.node.getChildByName("Avatar");
this.nodeEmotion = this.nodeChat.getChildByName("emotion");
this.bubble = this.nodeChat.getChildByName("bubble");
this.skeEmotion = this.bubble.getComponent(sp.Skeleton);
this.lbBubbleChat = this.bubble.getComponentInChildren(cc.Label);
this.nodeWin = this.node.getChildByName("win");
this.nodeInfo = this.node.getChildByName("ava_money");
this.lbWin = this.node.getChildByName("lbWin").getComponent(cc.Label);
this.animLbWin = this.node.getComponentInChildren(cc.Animation);
this.nodeChat.active = !1;
this.nodeInfo.active = !1;
};
e.prototype.setPosition = function(t) {
this.position = t;
};
e.prototype.resetPlayerResultUI = function() {
this.nodeWin.active = !1;
this.lbWin.node.active = !1;
};
e.prototype.playerResultUI = function(t, e) {
this.nodeWin.active = !1;
if (t) {
this.nodeWin.active = !0;
this.lbWin.node.active = !0;
this.lbWin.string = "+" + s.default.formatNumber(e);
}
};
e.prototype.updateChip = function(t) {
this.userInfo.Balance = t;
this.lbChips.string = (this.userInfo.AccountID, l.default.instance.getAccountIdIsMe(), 
s.default.nFormatter(this.userInfo.Balance));
};
e.prototype.registerPlayer = function(t) {
t.Avatar > 14 && (t.Avatar = 1);
this.userInfo = t;
this.avatar.getComponent(cc.Sprite).spriteFrame = a.default.instance.getSprAvatar(this.userInfo.Avatar);
this.lbNickname.string = r.default.Utils.getInstance().formatName(this.userInfo.NickName);
this.lbChips.string = this.userInfo.AccountID == l.default.instance.getAccountIdIsMe() ? s.default.nFormatter(this.userInfo.Balance) : s.default.nFormatter(this.userInfo.Balance < 0 ? -1 * this.userInfo.Balance : this.userInfo.Balance);
this.nodeInfo.active = !0;
};
e.prototype.unRegisterPlayer = function() {
this.avatar.getComponent(cc.Sprite).spriteFrame = a.default.instance.getSprAvatar(0);
this.nodeInfo.active = !1;
};
e.prototype.updateConnectionStatus = function() {};
e.prototype.updatePlayerStatus = function(t) {
this.node.opacity = t ? 255 : 150;
};
e.prototype.showEmotion = function() {};
e.prototype.showBubbleChat = function(t) {
var e = this;
this.nodeChat.active = !0;
this.bubble.active = !0;
this.nodeEmotion.active = !1;
this.lbBubbleChat.string = t[1];
setTimeout(function() {
if (e.node) {
e.nodeChat.active = !1;
e.bubble.active = !1;
}
}, 2500);
};
c([ h(cc.Label) ], e.prototype, "lbSID", void 0);
c([ h(cc.Label) ], e.prototype, "lbName", void 0);
c([ h(cc.Label) ], e.prototype, "lbNickname", void 0);
c([ h(cc.Label) ], e.prototype, "lbChips", void 0);
return c([ u ], e);
}(cc.Component);
o.default = d;
cc._RF.pop();
}, {
"../../framework/common/Utils": void 0,
"./SicboDPQ.Assets": "SicboDPQ.Assets",
"./SicboDPQ.Common": "SicboDPQ.Common",
"./SicboDPQ.InfoView": "SicboDPQ.InfoView"
} ],
"SicboDPQ.ResultView": [ function(t, e, o) {
"use strict";
cc._RF.push(e, "08ea2gAVClLdK64/EdZ1/CU", "SicboDPQ.ResultView");
var i, n = this && this.__extends || (i = function(t, e) {
return (i = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
i(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), c = this && this.__decorate || function(t, e, o, i) {
var n, c = arguments.length, s = c < 3 ? e : null === i ? i = Object.getOwnPropertyDescriptor(e, o) : i;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, o, i); else for (var a = t.length - 1; a >= 0; a--) (n = t[a]) && (s = (c < 3 ? n(s) : c > 3 ? n(e, o, s) : n(e, o)) || s);
return c > 3 && s && Object.defineProperty(e, o, s), s;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var s = t("./SicboDPQ.Common"), a = t("./SicboDPQ.Controller"), r = t("./SicboDPQ.InfoView"), l = t("./SicboDPQ.InputView"), p = t("./SicboDPQ.TouchMove"), u = t("./SicboDPQ.Const"), h = t("./SicboDPQ.Assets"), d = cc._decorator, f = d.ccclass, S = d.property, y = function(t) {
n(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.nodeBatNan = null;
e.nodeDia = null;
e.animationBat = null;
e.nodeToastResult = null;
e.spriteVis = [];
e.sfVis = [];
e.animResult = null;
e.allNodeGate = [];
e.fontBonus = [];
e.sfNumdice = [];
e.currentState = -1;
e.nodeResult = null;
e.nodeViParent = null;
e.batNanPos = null;
e.positionDefaultPlayAnimationDia = null;
e.positionDefaultDia = null;
e.animationXocXoc = null;
e.animationMoBat = null;
e.animationDia = null;
e.animationDiaNan = null;
e.resultNormal = null;
e.dataBigWin = null;
e.lstGateWin = null;
e.currentWinBonus = [];
e.currentLoseBonus = [];
return e;
}
o = e;
e.prototype.onLoad = function() {
o.instance = this;
this.currentState = -1;
this.nodeResult = this.animResult.node;
this.nodeViParent = this.spriteVis[0].node.parent;
this.positionDefaultPlayAnimationDia = this.animationBat.position;
this.positionDefaultDia = this.nodeDia.position;
this.animationXocXoc = this.animationBat.children[0].getComponent(sp.Skeleton);
this.animationMoBat = this.animationBat.children[1].getComponent(sp.Skeleton);
this.animationDiaNan = this.animationBat.children[2];
this.animationXocXoc.node.active = !1;
this.animationMoBat.node.active = !1;
this.resetNodeBigWin();
};
e.prototype.reset = function() {};
e.prototype.resetNodeBigWin = function() {
var t = this;
this.allNodeGate.forEach(function(e) {
if (e && e.children && e.children.length > 4) {
var o = e.children[4];
if (o) {
o.active = !1;
if (o.children) {
o.children[2].getComponent(cc.Label).font = t.fontBonus[2];
var i = o.children[2].children[0];
i && (i.active = !1);
o.children.forEach(function(t) {
t && (t.active = !1);
});
}
}
}
});
};
e.prototype.showGateBigWin = function() {
var t = this;
this.currentWinBonus = [];
this.currentLoseBonus = [];
Array.isArray(this.dataBigWin) && Array.isArray(this.lstGateWin) && this.dataBigWin.forEach(function(e) {
var o, i, n, c, s, a, r = null === (n = null === (i = null === (o = t.allNodeGate) || void 0 === o ? void 0 : o[e.betSide]) || void 0 === i ? void 0 : i.children) || void 0 === n ? void 0 : n[4], l = e.numDice;
if (r) {
var p = r.children[2].children[0];
if (l > 1 && p) {
p.active = !0;
p.getComponent(cc.Sprite).spriteFrame = 2 == l ? t.sfNumdice[0] : t.sfNumdice[2];
}
t.lstGateWin.map(Number).includes(Number(e.betSide)) ? t.currentWinBonus.push(r) : t.currentLoseBonus.push(r);
r.active = !0;
var u = null === (s = null === (c = r.children) || void 0 === c ? void 0 : c[2]) || void 0 === s ? void 0 : s.getComponent(cc.Label);
u && (u.string = "x" + e.rateMuliple);
for (var h = 0; h < 3; h++) (null === (a = r.children) || void 0 === a ? void 0 : a[h]) && (r.children[h].active = !0);
}
});
};
e.prototype.showEffectWinLoseBonus = function() {
var t = this;
this.currentWinBonus.forEach(function(t) {
t.children[0].active = !1;
t.children[1].active = !1;
t.children[3].active = !0;
});
this.currentLoseBonus.forEach(function(e) {
e.children[0].active = !1;
e.children[1].active = !1;
e.children[3].active = !1;
e.children[2].getComponent(cc.Label).font = t.fontBonus[3];
var o = e.children[2].children[0];
if (o) {
var i = o.getComponent(cc.Sprite);
i.spriteFrame === t.sfNumdice[0] ? i.spriteFrame = t.sfNumdice[1] : i.spriteFrame = t.sfNumdice[3];
}
});
};
e.prototype.nodeFxDisableAll = function() {
this.allNodeGate.forEach(function(t) {
t.stopAllActions();
t.children[0].active = !1;
t.children[1].active = !1;
});
this.resetNodeBigWin();
};
e.prototype.nodeGateDisabeClick = function(t) {
this.allNodeGate.forEach(function(e) {
e.getComponent(cc.Button).interactable = t;
});
};
e.prototype.nodeFxGateClick = function(t) {
var e = this.allNodeGate[t].children[1];
e.stopAllActions();
e.active = !0;
e.opacity = 0;
var o = cc.sequence(cc.fadeIn(.2), cc.fadeOut(.2), cc.callFunc(function() {
e.active = !1;
}));
e.runAction(o);
};
e.prototype.getPositionFromGate = function(t) {
var e = this.allNodeGate[t].children[2], o = e.parent.convertToWorldSpaceAR(e.position);
return this.node.convertToNodeSpaceAR(o);
};
e.prototype.playFXMoveDia = function(t) {
switch (t) {
case s.default.GAMESTATE.BETTING:
var e = cc.moveTo(.5, this.getPositionRootDia()), o = cc.scaleTo(.5, .5);
this.animationBat.stopAllActions();
this.animationBat.runAction(cc.spawn(e, o));
break;

case s.default.GAMESTATE.OPEN_PLATE:
e = cc.moveTo(.5, this.getPositionDiaShaking()), o = cc.scaleTo(.5, 2.3);
this.animationBat.stopAllActions();
this.animationBat.runAction(cc.spawn(e, o));
break;

case s.default.GAMESTATE.SHAKING:
var i = this.getPositionRootDia();
cc.log(i);
e = cc.moveTo(.5, i), o = cc.scaleTo(.5, .5);
this.animationBat.stopAllActions();
this.animationBat.runAction(cc.spawn(e, o));
}
};
e.prototype.getPositionRootDia = function() {
var t = this.positionDefaultPlayAnimationDia.x, e = this.positionDefaultPlayAnimationDia.y;
return cc.v2(t, e);
};
e.prototype.getPositionDiaShaking = function() {
return this.positionDefaultDia;
};
e.prototype.updateResult = function(t, e, o, i, n, c) {
var h = this;
switch (parseInt(i)) {
case s.default.GAMESTATE.BETTING:
if (this.currentState != i) {
this.nodeDia.active = !1;
this.animationBat.position = this.getPositionRootDia();
this.animationMoBat.node.active = !0;
this.animationMoBat.clearTracks();
this.animationDiaNan.active = !1;
this.nodeResult.active = !1;
this.nodeViParent.active = !1;
this.nodeFxDisableAll();
}
break;

case s.default.GAMESTATE.OPEN_PLATE:
if (this.currentState != i) {
this.animationMoBat.node.active = !0;
this.playFXMoveDia(i);
this.nodeResult.active = !1;
this.nodeFxDisableAll();
this.updateDice(e);
this.lstGateWin = e.WinGates;
this.dataBigWin = u.SicboDPQConst.parseStringToObj(c);
this.showGateBigWin();
l.default.instance.isNan ? setTimeout(function() {
if (h.node && h.node.active) {
if (a.default && !a.default.instance.node) return;
h.nodeDia.active = !0;
h.nodeViParent.active = !0;
h.animationMoBat.node.active = !1;
h.animationDiaNan.active = !0;
h.resultNormal = e;
setTimeout(function() {
if (h.node && h.node.active) {
if (a.default && !a.default.instance.node) return;
if (h.animationDiaNan.active) {
h.showResult(e.Dice1, e.Dice2, e.Dice3);
p.default.instance.callbackNanSuccess();
}
}
}, 5e3);
}
}, 500) : setTimeout(function() {
if (h.node && h.node.active) {
if (a.default && !a.default.instance.node) return;
h.nodeDia.active = !0;
h.nodeViParent.active = !0;
h.animationMoBat.getComponent(sp.Skeleton);
h.animationMoBat.clearTracks();
h.animationMoBat.setAnimation(0, "Open", !1);
setTimeout(function() {
if (h.node && h.node.active) {
h.playFxResult(e, o, n);
h.showResult(e.Dice1, e.Dice2, e.Dice3);
h.showEffectWinLoseBonus();
}
}, 200);
setTimeout(function() {
h.node && h.node.active && h.nodeDia.runAction(cc.spawn(cc.scaleTo(.15, .15), cc.moveTo(.5, h.getPositionRootDia()), cc.callFunc(function() {
h.animationMoBat.setAnimation(0, "Open", !1);
h.animationBat.position = h.getPositionRootDia();
h.animationBat.scale = .5;
h.animationMoBat.node.active = !1;
r.default.instance.disPlayStringResult(r.default.instance.resultKey);
})));
}, 2500);
}
}, 1500);
}
break;

case s.default.GAMESTATE.SHOW_RESULT:
if (this.currentState != i) {
this.updateDice(e);
this.nodeDia.active = !0;
this.nodeViParent.active = !0;
this.playPayFx(t, e);
}
break;

case s.default.GAMESTATE.WAITING:
if (this.currentState != i) {
l.default.instance.initGateChip();
this.nodeFxDisableAll();
this.nodeDia.position = this.positionDefaultDia;
this.nodeDia.scale = .7;
this.nodeDia.active = !1;
this.nodeViParent.active = !1;
this.animationMoBat.node.active = !0;
this.animationMoBat.getComponent(sp.Skeleton);
this.animationMoBat.clearTracks();
this.updateDice(e);
setTimeout(function() {
a.default && !a.default.instance.node || h.playFXMoveDia(s.default.GAMESTATE.OPEN_PLATE);
}, 2e3);
}
break;

case s.default.GAMESTATE.SHAKING:
if (this.currentState != i) {
this.nodeResult.active = !1;
this.nodeViParent.active = !1;
this.nodeFxDisableAll();
this.nodeDia.active = !1;
this.animationMoBat.node.active = !1;
var d = this.getPositionDiaShaking().x, f = this.getPositionDiaShaking().y;
this.animationXocXoc.node.position = cc.v2(d, f);
this.animationXocXoc.node.active = !0;
this.animationXocXoc.clearTracks();
this.animationXocXoc.setAnimation(1, "Shake", !1);
setTimeout(function() {
if (!a.default || a.default.instance.node) {
h.animationMoBat.node.active = !0;
h.animationXocXoc.node.active = !1;
h.playFXMoveDia(i);
}
}, 2500);
}
}
this.currentState = i;
};
e.prototype.callbackNanSuccess = function() {
var t = this;
this.playFxResult(this.resultNormal, null, null);
this.showEffectWinLoseBonus();
setTimeout(function() {
a.default && !a.default.instance.node || t.nodeDia.runAction(cc.spawn(cc.scaleTo(.15, .15), cc.moveTo(.5, t.getPositionRootDia()), cc.callFunc(function() {
t.animationBat.position = t.getPositionRootDia();
t.animationBat.scale = .5;
t.animationMoBat.node.active = !1;
r.default.instance.disPlayStringResult(r.default.instance.resultKey);
})));
}, 1e3);
};
e.prototype.updateDice = function(t) {
if (t) {
var e = t.Dice1, o = t.Dice2, i = t.Dice3;
this.spriteVis[0].getComponent(cc.Sprite).spriteFrame = this.sfVis[parseInt(e) - 1];
this.spriteVis[1].getComponent(cc.Sprite).spriteFrame = this.sfVis[parseInt(o) - 1];
this.spriteVis[2].getComponent(cc.Sprite).spriteFrame = this.sfVis[parseInt(i) - 1];
}
};
e.prototype.playFxResult = function(t) {
if (t) {
var e = t.WinGates, o = t.LoseGates;
this.FxGateWinLose(e, o);
}
};
e.prototype.FxGateWinLose = function(t, e) {
var o = this;
t && t.length > 0 && t.forEach(function(t) {
o.allNodeGate[t].children[1].active = !0;
o.allNodeGate[t].children[1].opacity = 0;
o.allNodeGate[t].children[1].runAction(cc.sequence(cc.fadeIn(.3), cc.fadeOut(.3)).repeatForever());
});
e && e.length > 0 && e.forEach(function() {});
};
e.prototype.playPayFx = function(t, e) {
var o = this, i = e.WinGates, n = e.LoseGates;
this.fxMoveChip(n, 0);
setTimeout(function() {
a.default && !a.default.instance.node || o.fxMoveChip(i, 1);
}, 1500);
setTimeout(function() {
a.default && !a.default.instance.node || o.fxMoveChip(i, 2);
}, 2500);
};
e.prototype.fxMoveChip = function(t, e) {
var o = l.default.instance.getGateChips();
try {
t.map(function(t) {
o[t] && o[t].length > 0 && o[t].forEach(function(t, o) {
switch (e) {
case 0:
l.default.instance.playFxLost(t, o);
break;

case 1:
l.default.instance.playFXDealerPay(t);
break;

case 2:
l.default.instance.playFxPay(t, o);
}
});
});
} catch (t) {
console.error(t);
}
};
e.prototype.showResult = function(t, e, o) {
var i = this, n = t + e + o;
this.nodeToastResult.active = !0;
this.nodeToastResult.getChildByName("result").getComponent(cc.Label).string = n + " - ";
this.nodeToastResult.getChildByName("text").getComponent(cc.Sprite).spriteFrame = t === e && e === o ? h.default.instance.getSfResult(2) : n > 10 ? h.default.instance.getSfResult(0) : h.default.instance.getSfResult(1);
this.scheduleOnce(function() {
i.nodeToastResult.active = !1;
}, 2);
};
var o;
c([ S(cc.Node) ], e.prototype, "nodeBatNan", void 0);
c([ S(cc.Node) ], e.prototype, "nodeDia", void 0);
c([ S(cc.Node) ], e.prototype, "animationBat", void 0);
c([ S(cc.Node) ], e.prototype, "nodeToastResult", void 0);
c([ S([ cc.Sprite ]) ], e.prototype, "spriteVis", void 0);
c([ S([ cc.SpriteFrame ]) ], e.prototype, "sfVis", void 0);
c([ S(cc.Animation) ], e.prototype, "animResult", void 0);
c([ S([ cc.Node ]) ], e.prototype, "allNodeGate", void 0);
c([ S(cc.Font) ], e.prototype, "fontBonus", void 0);
c([ S(cc.SpriteFrame) ], e.prototype, "sfNumdice", void 0);
return o = c([ f ], e);
}(cc.Component);
o.default = y;
cc._RF.pop();
}, {
"./SicboDPQ.Assets": "SicboDPQ.Assets",
"./SicboDPQ.Common": "SicboDPQ.Common",
"./SicboDPQ.Const": "SicboDPQ.Const",
"./SicboDPQ.Controller": "SicboDPQ.Controller",
"./SicboDPQ.InfoView": "SicboDPQ.InfoView",
"./SicboDPQ.InputView": "SicboDPQ.InputView",
"./SicboDPQ.TouchMove": "SicboDPQ.TouchMove"
} ],
"SicboDPQ.Rule": [ function(t, e, o) {
"use strict";
cc._RF.push(e, "6448aCtlrJMEqK8qSC/JNWq", "SicboDPQ.Rule");
var i, n = this && this.__extends || (i = function(t, e) {
return (i = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
i(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), c = this && this.__decorate || function(t, e, o, i) {
var n, c = arguments.length, s = c < 3 ? e : null === i ? i = Object.getOwnPropertyDescriptor(e, o) : i;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, o, i); else for (var a = t.length - 1; a >= 0; a--) (n = t[a]) && (s = (c < 3 ? n(s) : c > 3 ? n(e, o, s) : n(e, o)) || s);
return c > 3 && s && Object.defineProperty(e, o, s), s;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var s = cc._decorator, a = s.ccclass, r = s.property, l = function(t) {
n(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.spriteTitle = null;
e.spfTitle = [];
e.nodeRule = null;
e.nodeBonus = null;
e.isRule = !0;
return e;
}
e.prototype.onLoad = function() {
this.setView(this.isRule);
};
e.prototype.onClickToggle = function() {
this.isRule = !this.isRule;
this.setView(this.isRule);
};
e.prototype.setView = function(t) {
this.nodeRule.active = t;
this.nodeBonus.active = !t;
this.spriteTitle.spriteFrame = t ? this.spfTitle[0] : this.spfTitle[1];
};
c([ r(cc.Sprite) ], e.prototype, "spriteTitle", void 0);
c([ r(cc.SpriteFrame) ], e.prototype, "spfTitle", void 0);
c([ r(cc.Node) ], e.prototype, "nodeRule", void 0);
c([ r(cc.Node) ], e.prototype, "nodeBonus", void 0);
return c([ a ], e);
}(cc.Component);
o.default = l;
cc._RF.pop();
}, {} ],
"SicboDPQ.SessionInfo": [ function(t, e, o) {
"use strict";
cc._RF.push(e, "75aa6VxtMlOp55g0obrL4cp", "SicboDPQ.SessionInfo");
var i, n = this && this.__extends || (i = function(t, e) {
return (i = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
i(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), c = this && this.__decorate || function(t, e, o, i) {
var n, c = arguments.length, s = c < 3 ? e : null === i ? i = Object.getOwnPropertyDescriptor(e, o) : i;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, o, i); else for (var a = t.length - 1; a >= 0; a--) (n = t[a]) && (s = (c < 3 ? n(s) : c > 3 ? n(e, o, s) : n(e, o)) || s);
return c > 3 && s && Object.defineProperty(e, o, s), s;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var s = t("../../../framework/common/Dialog"), a = cc._decorator, r = a.ccclass, l = (a.property, 
function(t) {
n(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
e.prototype.onShow = function() {
t.prototype.show.call(this);
};
e.prototype.onClose = function() {
t.prototype.dismiss.call(this);
};
return c([ r ], e);
}(s.default));
o.default = l;
cc._RF.pop();
}, {
"../../../framework/common/Dialog": void 0
} ],
"SicboDPQ.Settings": [ function(t, e, o) {
"use strict";
cc._RF.push(e, "cfaccuzKhFKo4yhPvQKiLga", "SicboDPQ.Settings");
var i, n = this && this.__extends || (i = function(t, e) {
return (i = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
i(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), c = this && this.__decorate || function(t, e, o, i) {
var n, c = arguments.length, s = c < 3 ? e : null === i ? i = Object.getOwnPropertyDescriptor(e, o) : i;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, o, i); else for (var a = t.length - 1; a >= 0; a--) (n = t[a]) && (s = (c < 3 ? n(s) : c > 3 ? n(e, o, s) : n(e, o)) || s);
return c > 3 && s && Object.defineProperty(e, o, s), s;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var s = t("../SicboDPQ.Controller"), a = cc._decorator, r = a.ccclass, l = a.property, p = function(t) {
n(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.sprMusic = [];
e.sprSound = [];
e.nodeSound = null;
e.nodeMusic = null;
e.nodeDismiss = null;
e.musicBackground = null;
e.chipSelect = null;
e.chipBet = null;
e.isMusicBackground = !0;
e.isAudio = !0;
e.isOpenMenu = !1;
return e;
}
o = e;
e.prototype.onLoad = function() {
o.instance = this;
};
e.prototype.onEnable = function() {
this.isMusicBackground = !0;
this.isAudio = !0;
this.isOpenMenu = !1;
this.nodeDismiss.active = this.isOpenMenu;
this.enableMusicBackground();
};
e.prototype.onSelectMenu = function() {
if (0 == this.isOpenMenu) {
this.isOpenMenu = !0;
this.node.stopAllActions();
(e = cc.moveTo(.5, cc.v2(-545, 0))).easing(cc.easeQuadraticActionInOut());
var t = cc.callFunc(this.onShowFinish.bind(this), null);
this.node.runAction(cc.sequence(e, t));
} else {
this.isOpenMenu = !1;
this.node.stopAllActions();
var e;
(e = cc.moveTo(.5, cc.v2(-1100, 0))).easing(cc.easeQuadraticActionInOut());
t = cc.callFunc(this.onShowFinish.bind(this), null);
this.node.runAction(cc.sequence(e, t));
}
};
e.prototype.onShowFinish = function() {
this.nodeDismiss.active = this.isOpenMenu;
};
e.prototype.selectSound = function() {
this.isAudio = !this.isAudio;
this.nodeSound.getComponent(cc.Sprite).spriteFrame = this.isAudio ? this.sprSound[0] : this.sprSound[1];
};
e.prototype.selectMusic = function() {
this.isMusicBackground = !this.isMusicBackground;
this.nodeMusic.getComponent(cc.Sprite).spriteFrame = this.isMusicBackground ? this.sprMusic[0] : this.sprMusic[1];
this.enableMusicBackground();
};
e.prototype.selectSoiCau = function() {
s.default.instance.popupSoiCau.show();
};
e.prototype.selectBackGame = function() {
this.onSelectMenu();
s.default.instance.actBackGame();
};
e.prototype.selectRuleGame = function() {
this.onSelectMenu();
s.default.instance.popupRules.show();
};
e.prototype.selectSetting = function() {
this.onSelectMenu();
s.default.instance.popupSetting.show();
};
e.prototype.selectHistoryGame = function() {
this.onSelectMenu();
s.default.instance.popupHistory.onShow();
};
e.prototype.selectTopRankGame = function() {
this.onSelectMenu();
s.default.instance.popupTopRank.onShow();
};
e.prototype.selectTopRankGame2 = function() {
s.default.instance.popupTopRank.onShow();
};
e.prototype.selectMaxBet = function() {
this.onSelectMenu();
s.default.instance.popupMaxBet.onShow();
};
e.prototype.selectSessionInfo = function() {
this.onSelectMenu();
s.default.instance.popupSessionInfo.onShow();
};
e.prototype.selectPlayerNotInGame = function() {
s.default.instance.popoupPlayersNotInGame.onShow();
};
e.prototype.setEnableAudioGame = function(t) {
this.isAudio = t;
};
e.prototype.playAudioClip = function(t) {
if (this.isAudio) switch (t) {
case 0:
this.chipSelect && this.chipSelect.play();
break;

case 1:
this.chipBet && this.chipBet.play();
}
};
e.prototype.enableMusicBackground = function() {
if (this.musicBackground && this.isMusicBackground) {
if (!this.musicBackground.isPlaying) {
this.musicBackground.volume = .3;
this.musicBackground.play();
}
} else this.musicBackground && this.musicBackground.stop();
};
var o;
e.instance = null;
c([ l([ cc.SpriteFrame ]) ], e.prototype, "sprMusic", void 0);
c([ l([ cc.SpriteFrame ]) ], e.prototype, "sprSound", void 0);
c([ l(cc.Node) ], e.prototype, "nodeSound", void 0);
c([ l(cc.Node) ], e.prototype, "nodeMusic", void 0);
c([ l(cc.Node) ], e.prototype, "nodeDismiss", void 0);
c([ l(cc.AudioSource) ], e.prototype, "musicBackground", void 0);
c([ l(cc.AudioSource) ], e.prototype, "chipSelect", void 0);
c([ l(cc.AudioSource) ], e.prototype, "chipBet", void 0);
return o = c([ r ], e);
}(cc.Component);
o.default = p;
cc._RF.pop();
}, {
"../SicboDPQ.Controller": "SicboDPQ.Controller"
} ],
"SicboDPQ.TopRank": [ function(t, e, o) {
"use strict";
cc._RF.push(e, "c4204WyICVHRqy9AI4F1yJu", "SicboDPQ.TopRank");
var i, n = this && this.__extends || (i = function(t, e) {
return (i = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
i(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), c = this && this.__decorate || function(t, e, o, i) {
var n, c = arguments.length, s = c < 3 ? e : null === i ? i = Object.getOwnPropertyDescriptor(e, o) : i;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, o, i); else for (var a = t.length - 1; a >= 0; a--) (n = t[a]) && (s = (c < 3 ? n(s) : c > 3 ? n(e, o, s) : n(e, o)) || s);
return c > 3 && s && Object.defineProperty(e, o, s), s;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var s = t("../../../framework/common/Dialog"), a = t("../../../framework/common/Utils"), r = t("../network/SicboDPQ.Http"), l = t("../SicboDPQ.Config"), p = t("../SicboDPQ.Controller"), u = cc._decorator, h = u.ccclass, d = u.property, f = function(t) {
n(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.content = null;
e.template = null;
e.spfRank = [];
return e;
}
e.prototype.onShow = function() {
t.prototype.show.call(this);
};
e.prototype.onEnable = function() {
this.content.removeAllChildren();
this.template.active = !1;
this.onLoadData();
};
e.prototype.onClose = function() {
t.prototype.dismiss.call(this);
};
e.prototype.onLoadData = function() {
var t = this;
lngui.UIWaitingLayout.showWaiting();
var e = this;
this.content.removeAllChildren();
this.template.active = !1;
r.default.sendRequest("GET", l.default.App.HOST_SicboDPQ.host, "api/Sicbo/GetBigWinner", null, function(o, i) {
lngui.UIWaitingLayout.hideWaiting();
if (o) {
e.onClose();
p.default.instance.showMsg("Hệ thống đang bận, vui lòng tải lại sau!");
} else for (var n = i, c = 0; c < n.length; c++) {
var s = cc.instantiate(t.template), r = c + 1;
c % 2 == 0 && (s.children[0].active = !1);
if (r <= 3) {
s.children[2].active = !0;
s.children[2].getComponent(cc.Sprite).spriteFrame = t.spfRank[c];
s.children[3].color = cc.color(255, 235, 135);
}
s.children[1].getComponent(cc.Label).string = r.toString();
s.children[3].getComponent(cc.Label).string = n[c].DisplayName;
s.children[4].getComponent(cc.Label).string = "$" + a.default.formatNumber(n[c].Award);
s.active = !0;
s.parent = e.content;
}
});
};
c([ d(cc.Node) ], e.prototype, "content", void 0);
c([ d(cc.Node) ], e.prototype, "template", void 0);
c([ d(cc.SpriteFrame) ], e.prototype, "spfRank", void 0);
return c([ h ], e);
}(s.default);
o.default = f;
cc._RF.pop();
}, {
"../../../framework/common/Dialog": void 0,
"../../../framework/common/Utils": void 0,
"../SicboDPQ.Config": "SicboDPQ.Config",
"../SicboDPQ.Controller": "SicboDPQ.Controller",
"../network/SicboDPQ.Http": "SicboDPQ.Http"
} ],
"SicboDPQ.TouchMove": [ function(t, e, o) {
"use strict";
cc._RF.push(e, "89308FZvrRPKrTWRD+37r/+", "SicboDPQ.TouchMove");
var i, n = this && this.__extends || (i = function(t, e) {
return (i = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
i(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), c = this && this.__decorate || function(t, e, o, i) {
var n, c = arguments.length, s = c < 3 ? e : null === i ? i = Object.getOwnPropertyDescriptor(e, o) : i;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, o, i); else for (var a = t.length - 1; a >= 0; a--) (n = t[a]) && (s = (c < 3 ? n(s) : c > 3 ? n(e, o, s) : n(e, o)) || s);
return c > 3 && s && Object.defineProperty(e, o, s), s;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var s = t("./SicboDPQ.ResultView"), a = cc._decorator, r = a.ccclass, l = (a.property, 
function(t) {
n(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.lastY = 0;
e.lastX = 0;
e.x = 0;
e.y = 0;
e.action = null;
return e;
}
o = e;
e.prototype.onLoad = function() {
o.instance = this;
var t = this;
this.lastX = this.node.x;
this.lastY = this.node.y;
this.x = this.lastX;
this.y = this.lastY;
this.node.on("touchstart", function() {
t.stopActions();
}, this.node);
this.node.on("touchmove", function(e) {
var o = e.touch.getDelta();
this.x += o.x;
this.y += o.y;
(this.x >= this.lastX + 5 || this.y >= this.lastY + 5 || this.x <= this.lastX - 5 || this.y <= this.lastY - 5) && t.callbackNanSuccess();
}, this.node);
this.node.on("touchend", function() {
this.lastX = this.x;
this.lastY = this.y;
}, this.node);
};
e.prototype.onEnable = function() {
var t = this.lastX, e = this.lastY + 80, o = e - 30, i = cc.moveTo(1, cc.v2(t, e)).easing(cc.easeBackIn()), n = cc.moveTo(1, cc.v2(t, o)).easing(cc.easeBackIn());
this.action = cc.sequence(i, n).repeatForever();
};
e.prototype.stopActions = function() {
this.node.stopAllActions();
};
e.prototype.setActiveNode = function() {
this.node.position = cc.v2(this.lastX, this.lastY);
};
e.prototype.callbackNanSuccess = function() {
this.x = this.lastX;
this.y = this.lastY;
this.node.active = !1;
this.node.position = cc.v2(this.lastX, this.lastY);
s.default.instance.callbackNanSuccess();
};
var o;
return o = c([ r ], e);
}(cc.Component));
o.default = l;
cc._RF.pop();
}, {
"./SicboDPQ.ResultView": "SicboDPQ.ResultView"
} ],
SicboDPQChat: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "bedb2q+jTRJiraurfns7fsp", "SicboDPQChat");
var i, n = this && this.__extends || (i = function(t, e) {
return (i = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
i(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), c = this && this.__decorate || function(t, e, o, i) {
var n, c = arguments.length, s = c < 3 ? e : null === i ? i = Object.getOwnPropertyDescriptor(e, o) : i;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, o, i); else for (var a = t.length - 1; a >= 0; a--) (n = t[a]) && (s = (c < 3 ? n(s) : c > 3 ? n(e, o, s) : n(e, o)) || s);
return c > 3 && s && Object.defineProperty(e, o, s), s;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var s = t("./SicboDPQ.Chat.NetworkClient"), a = cc._decorator, r = a.ccclass, l = a.property, p = function(t) {
n(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.templateMessage = null;
e.templateMessageTip = null;
e.spriteFramesTip = [];
e.listChat = null;
e.NodeTip = null;
e.scrollListChat = null;
e.txtInputChat = null;
e.nodeDismiss = null;
e.DealerName = null;
e.nameDealer = null;
e.isOpenChat = !1;
e.chatChanel = "sicbodpq-chat";
e.itemData = [ {
iId: 1,
iN: "Bông hồng",
v: 1e3
}, {
iId: 2,
iN: "Đồng vàng",
v: 5e3
}, {
iId: 3,
iN: "Đôla",
v: 2e4
}, {
iId: 4,
iN: "Dây chuyền ngọc trai",
v: 1e5
}, {
iId: 5,
iN: "Tim ruby",
v: 5e5
}, {
iId: 6,
iN: "Kim cương",
v: 1e6
} ];
return e;
}
o = e;
e.prototype.onLoad = function() {};
e.prototype.touchSendChat = function() {
if (this.txtInputChat.string.length) {
s.default.instance.sendSignalR("SendMessage", [ this.txtInputChat.string, this.chatChanel ]);
this.txtInputChat.string = "";
}
};
e.prototype.onShowChat = function() {
if (0 == this.isOpenChat) {
this.isOpenChat = !0;
this.node.stopAllActions();
(e = cc.moveTo(.5, cc.v2(510, 0))).easing(cc.easeQuadraticActionInOut());
var t = cc.callFunc(this.onShowFinish.bind(this), null);
this.node.runAction(cc.sequence(e, t));
} else {
this.isOpenChat = !1;
this.node.stopAllActions();
var e;
(e = cc.moveTo(.5, cc.v2(1200, 0))).easing(cc.easeQuadraticActionInOut());
t = cc.callFunc(this.onShowFinish.bind(this), null);
this.node.runAction(cc.sequence(e, t));
}
};
e.prototype.onShowFinish = function() {
this.nodeDismiss.active = this.isOpenChat;
};
e.prototype.touchShowTip = function() {
var t = this;
if (this.NodeTip.active) this.NodeTip.active = !1; else {
this.NodeTip.active = !0;
setTimeout(function() {
t.NodeTip.active = !1;
}, 3e3);
}
};
e.prototype.touchSendTip = function(t, e) {
var o = this.itemData.find(function(t) {
return t.iId === parseInt(e);
});
o && s.default.instance.sendSignalR("SendTip", [ this.chatChanel, o.iId, o.iN, this.nameDealer ]);
};
e.prototype.listLastMessages = function(t) {
if (0 != t.length) {
this.listChat.removeAllChildren();
if (t) for (var e = 0; e < t.length; e++) {
var o = t[e], i = o.n, n = o.c, c = o.Type;
if (void 0 !== i && void 0 !== n && "SYSTEM" != i && "SYSTEM" != n && "TIP" != c) {
if ("SYSTEM" != i && "SYSTEM" != n && i.length > 0 && n.length > 0) {
var s = n, a = cc.instantiate(this.templateMessage), r = o.n, l = i;
a.active = !0;
r = (r.localeCompare(lngui.UserManager.instance.mainUserInfo.NickName), l);
a.getComponent(cc.Label).string = r + ": " + s;
if (1 == t.IsVipTx) {
a.getChildByName("lb_name").getComponent(cc.Label).node.active = !1;
a.getChildByName("lb_nameVip").getComponent(cc.Label).string = r + ": ";
a.off(cc.Node.EventType.SIZE_CHANGED);
a.on(cc.Node.EventType.SIZE_CHANGED, function() {
var t = (a.getContentSize().height - a.getChildByName("lb_nameVip").getContentSize().height) / 2;
a.getChildByName("lb_nameVip").setPosition(cc.v2(0, t));
});
} else {
a.getChildByName("lb_nameVip").getComponent(cc.Label).node.active = !1;
a.getChildByName("lb_name").getComponent(cc.Label).string = r + ": ";
a.off(cc.Node.EventType.SIZE_CHANGED);
a.on(cc.Node.EventType.SIZE_CHANGED, function() {
var t = (a.getContentSize().height - a.getChildByName("lb_name").getContentSize().height) / 2;
a.getChildByName("lb_name").setPosition(cc.v2(0, t));
});
}
this.listChat.addChild(a);
}
this.scrollListChat.scrollToBottom();
}
}
}
};
e.prototype.receiveMessage = function(t) {
var e = t.n, o = t.c, i = t.Type;
if (void 0 !== e && void 0 !== o && "TIP" !== i && "SYSTEM" != e && "SYSTEM" != o && e.length > 0 && o.length > 0) {
var n = o, c = cc.instantiate(this.templateMessage), s = t.n, a = e;
c.active = !0;
s = (s.localeCompare(lngui.UserManager.instance.mainUserInfo.NickName), a);
c.getComponent(cc.Label).string = s + ": " + n;
if (1 == t.IsVipTx) {
c.getChildByName("lb_name").getComponent(cc.Label).node.active = !1;
c.getChildByName("lb_nameVip").getComponent(cc.Label).string = s + ": ";
c.off(cc.Node.EventType.SIZE_CHANGED);
c.on(cc.Node.EventType.SIZE_CHANGED, function() {
var t = (c.getContentSize().height - c.getChildByName("lb_nameVip").getContentSize().height) / 2;
c.getChildByName("lb_nameVip").setPosition(cc.v2(0, t));
});
} else {
c.getChildByName("lb_nameVip").getComponent(cc.Label).node.active = !1;
c.getChildByName("lb_name").getComponent(cc.Label).string = s + ": ";
c.off(cc.Node.EventType.SIZE_CHANGED);
c.on(cc.Node.EventType.SIZE_CHANGED, function() {
var t = (c.getContentSize().height - c.getChildByName("lb_name").getContentSize().height) / 2;
c.getChildByName("lb_name").setPosition(cc.v2(0, t));
});
}
this.listChat.addChild(c);
this.scrollListChat.scrollToBottom();
}
};
e.prototype.receiveMessageTip = function(t) {
this.nameDealer = t.dealerName;
var e = cc.instantiate(this.templateMessageTip), o = t.giftId, i = "cho " + t.msg.split(" cho ")[1], n = t.user;
e.active = !0;
e.getChildByName("lb_name").getComponent(cc.Label).node.active = !0;
e.getChildByName("lb_name").getComponent(cc.Label).string = n;
e.getChildByName("lb_name").setPosition(cc.v2(0));
e.getChildByName("lb_msg1").getComponent(cc.Label).node.active = !0;
e.getChildByName("lb_msg1").getComponent(cc.Label).string = "đã tip";
e.getChildByName("lb_msg2").getComponent(cc.Label).node.active = !0;
e.getChildByName("lb_msg2").getComponent(cc.Label).string = i;
e.getChildByName("spriteTip").getComponent(cc.Sprite).node.active = !0;
e.getChildByName("spriteTip").getComponent(cc.Sprite).spriteFrame = this.spriteFramesTip[o - 1];
this.listChat.addChild(e);
this.scrollListChat.scrollToBottom();
};
Object.defineProperty(e, "instance", {
get: function() {
o._instance || (o._instance = new o());
return o._instance;
},
enumerable: !1,
configurable: !0
});
e.prototype.onEnable = function() {
o._instance = this;
this.txtInputChat.node.on("editing-return", this.touchSendChat, this);
cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
this.nodeDismiss.active = this.isOpenChat;
};
e.prototype.onKeyDown = function(t) {
switch (t.keyCode) {
case cc.macro.KEY.enter:
this.txtInputChat.focus();
}
};
var o;
e._instance = null;
c([ l(cc.Node) ], e.prototype, "templateMessage", void 0);
c([ l(cc.Node) ], e.prototype, "templateMessageTip", void 0);
c([ l([ cc.SpriteFrame ]) ], e.prototype, "spriteFramesTip", void 0);
c([ l(cc.Node) ], e.prototype, "listChat", void 0);
c([ l(cc.Node) ], e.prototype, "NodeTip", void 0);
c([ l(cc.ScrollView) ], e.prototype, "scrollListChat", void 0);
c([ l(cc.EditBox) ], e.prototype, "txtInputChat", void 0);
c([ l(cc.Node) ], e.prototype, "nodeDismiss", void 0);
c([ l(cc.Label) ], e.prototype, "DealerName", void 0);
return o = c([ r ], e);
}(cc.Component);
o.default = p;
cc._RF.pop();
}, {
"./SicboDPQ.Chat.NetworkClient": "SicboDPQ.Chat.NetworkClient"
} ]
}, {}, [ "LabelIncrement.SicboDPQ", "SicboDPQ.Assets", "SicboDPQ.ChipItem", "SicboDPQ.ChipPool", "SicboDPQ.Common", "SicboDPQ.Config", "SicboDPQ.Const", "SicboDPQ.Controller", "SicboDPQ.InfoView", "SicboDPQ.InputView", "SicboDPQ.Loading", "SicboDPQ.MoveBullet", "SicboDPQ.Player", "SicboDPQ.PlayerData", "SicboDPQ.ResultView", "SicboDPQ.TouchMove", "SicboDPQ.Chat.NetworkClient", "SicboDPQChat", "SicboDPQ.Http", "SicboDPQ.NetWorkClient", "SicboDPQ.Network.Clients", "SicboDPQ.Network.Service", "SicboDPQ.GraphView", "SicboDPQ.History", "SicboDPQ.MaxBet", "SicboDPQ.PlayersNotInGame", "SicboDPQ.Rule", "SicboDPQ.SessionInfo", "SicboDPQ.TopRank", "SicboDPQ.ChatController", "SicboDPQ.ChatListView", "SicboDPQ.GrahpDiceSumView", "SicboDPQ.GraphCatCauView", "SicboDPQ.GraphDice3View", "SicboDPQ.GraphView100", "SicboDPQ.Settings" ]);