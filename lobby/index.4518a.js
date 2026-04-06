window.__require = function t(e, n, o) {
function i(c, a) {
if (!n[c]) {
if (!e[c]) {
var s = c.split("/");
s = s[s.length - 1];
if (!e[s]) {
var p = "function" == typeof __require && __require;
if (!a && p) return p(s, !0);
if (r) return r(s, !0);
throw new Error("Cannot find module '" + c + "'");
}
c = s;
}
var l = n[c] = {
exports: {}
};
e[c][0].call(l.exports, function(t) {
return i(e[c][1][t] || t);
}, l, l.exports, t, e, n, o);
}
return n[c].exports;
}
for (var r = "function" == typeof __require && __require, c = 0; c < o.length; c++) i(o[c]);
return i;
}({
AutoDetectDomainReal: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "e4eferUXg5GwoTfYXCejKl/", "AutoDetectDomainReal");
var o, i = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
})(t, e);
}, function(t, e) {
o(t, e);
function n() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n());
}), r = this && this.__decorate || function(t, e, n, o) {
var i, r = arguments.length, c = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, n, o); else for (var a = t.length - 1; a >= 0; a--) (i = t[a]) && (c = (r < 3 ? i(c) : r > 3 ? i(e, n, c) : i(e, n)) || c);
return r > 3 && c && Object.defineProperty(e, n, c), c;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var c = cc._decorator, a = c.ccclass, s = c.property, p = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.domain = null;
e.key = "DomainReal";
return e;
}
e.prototype.onLoad = function() {
this.domain.string = lngui.ConfigService.instance.getByKey(this.key);
};
e.prototype.start = function() {};
r([ s(cc.Label) ], e.prototype, "domain", void 0);
r([ s ], e.prototype, "key", void 0);
return r([ a ], e);
}(cc.Component);
n.default = p;
cc._RF.pop();
}, {} ],
AutoFadeNode: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "a52c456yOBA6KI85iGkI9Hc", "AutoFadeNode");
var o, i = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
})(t, e);
}, function(t, e) {
o(t, e);
function n() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n());
}), r = this && this.__decorate || function(t, e, n, o) {
var i, r = arguments.length, c = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, n, o); else for (var a = t.length - 1; a >= 0; a--) (i = t[a]) && (c = (r < 3 ? i(c) : r > 3 ? i(e, n, c) : i(e, n)) || c);
return r > 3 && c && Object.defineProperty(e, n, c), c;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var c = cc._decorator, a = c.ccclass, s = c.property, p = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.targetContainer = null;
e.fadeOutDuration = .3;
e.fadeInDuration = .3;
e.interval = 1;
e.startIndex = 0;
e.autoPlayOnLoad = !0;
e._targetNodes = [];
e._currentIndex = 0;
e._isRunning = !1;
return e;
}
e.prototype.onLoad = function() {
this.targetContainer || (this.targetContainer = this.node);
this._targetNodes = this.getValidChildren();
if (this._targetNodes && !(this._targetNodes.length <= 0)) {
this._currentIndex = this.startIndex;
this._currentIndex < 0 && (this._currentIndex = 0);
this._currentIndex >= this._targetNodes.length && (this._currentIndex = this._targetNodes.length - 1);
for (var t = 0; t < this._targetNodes.length; t++) {
var e = this._targetNodes[t];
e.stopAllActions();
if (t === this._currentIndex) {
e.active = !0;
e.opacity = 255;
} else {
e.active = !1;
e.opacity = 0;
}
}
}
};
e.prototype.start = function() {
this.autoPlayOnLoad && this.play();
};
e.prototype.onDisable = function() {
this.stop();
};
e.prototype.onDestroy = function() {
this.stop();
};
e.prototype.play = function() {
if (!this._isRunning && this._targetNodes && !(this._targetNodes.length <= 1)) {
this._isRunning = !0;
this.runLoop();
}
};
e.prototype.stop = function() {
this._isRunning = !1;
for (var t = 0; t < this._targetNodes.length; t++) {
var e = this._targetNodes[t];
e && cc.isValid(e) && e.stopAllActions();
}
this.unscheduleAllCallbacks();
};
e.prototype.runLoop = function() {
var t = this;
if (this._isRunning && this._targetNodes && !(this._targetNodes.length <= 1)) {
var e = this._targetNodes[this._currentIndex], n = (this._currentIndex + 1) % this._targetNodes.length, o = this._targetNodes[n];
if (e && o && cc.isValid(e) && cc.isValid(o)) {
e.stopAllActions();
o.stopAllActions();
var i = cc.sequence(cc.delayTime(this.interval), cc.fadeOut(this.fadeOutDuration), cc.callFunc(function() {
e.active = !1;
t._currentIndex = n;
o.active = !0;
o.opacity = 0;
o.runAction(cc.sequence(cc.fadeIn(t.fadeInDuration), cc.callFunc(function() {
t.runLoop();
})));
}));
e.runAction(i);
}
}
};
e.prototype.getValidChildren = function() {
if (!this.targetContainer || !cc.isValid(this.targetContainer)) return [];
for (var t = [], e = this.targetContainer.children, n = 0; n < e.length; n++) {
var o = e[n];
o && cc.isValid(o) && t.push(o);
}
return t;
};
r([ s(cc.Node) ], e.prototype, "targetContainer", void 0);
r([ s ], e.prototype, "fadeOutDuration", void 0);
r([ s ], e.prototype, "fadeInDuration", void 0);
r([ s ], e.prototype, "interval", void 0);
r([ s ], e.prototype, "startIndex", void 0);
r([ s ], e.prototype, "autoPlayOnLoad", void 0);
return r([ a ], e);
}(cc.Component);
n.default = p;
cc._RF.pop();
}, {} ],
AutoFadeSpr: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "078163X36tJ9pH8ZhU/6zv5", "AutoFadeSpr");
var o, i = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
})(t, e);
}, function(t, e) {
o(t, e);
function n() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n());
}), r = this && this.__decorate || function(t, e, n, o) {
var i, r = arguments.length, c = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, n, o); else for (var a = t.length - 1; a >= 0; a--) (i = t[a]) && (c = (r < 3 ? i(c) : r > 3 ? i(e, n, c) : i(e, n)) || c);
return r > 3 && c && Object.defineProperty(e, n, c), c;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var c = cc._decorator, a = c.ccclass, s = c.property, p = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.targetSprite = null;
e.spriteFrames = [];
e.fadeOutDuration = .3;
e.fadeInDuration = .3;
e.interval = 1;
e.startIndex = 0;
e.autoPlayOnLoad = !0;
e._currentIndex = 0;
e._isRunning = !1;
return e;
}
e.prototype.onLoad = function() {
this.targetSprite || (this.targetSprite = this.getComponent(cc.Sprite));
if (this.targetSprite && this.spriteFrames && !(this.spriteFrames.length <= 0)) {
this._currentIndex = Math.max(0, Math.min(this.startIndex, this.spriteFrames.length - 1));
this.targetSprite.spriteFrame = this.spriteFrames[this._currentIndex];
this.targetSprite.node.opacity = 255;
}
};
e.prototype.start = function() {
this.autoPlayOnLoad && this.play();
};
e.prototype.onDisable = function() {
this.stop();
};
e.prototype.onDestroy = function() {
this.stop();
};
e.prototype.play = function() {
if (!this._isRunning && this.targetSprite && this.spriteFrames && !(this.spriteFrames.length <= 1)) {
this._isRunning = !0;
this.runLoop();
}
};
e.prototype.stop = function() {
this._isRunning = !1;
this.targetSprite && this.targetSprite.node && this.targetSprite.node.stopAllActions();
this.unscheduleAllCallbacks();
};
e.prototype.runLoop = function() {
var t = this;
if (this._isRunning && this.targetSprite && !(this.spriteFrames.length <= 1)) {
var e = this.targetSprite.node;
e.stopAllActions();
var n = (this._currentIndex + 1) % this.spriteFrames.length, o = cc.sequence(cc.delayTime(this.interval), cc.fadeOut(this.fadeOutDuration), cc.callFunc(function() {
if (t.targetSprite && t.spriteFrames && !(t.spriteFrames.length <= 0)) {
t._currentIndex = n;
t.targetSprite.spriteFrame = t.spriteFrames[t._currentIndex];
}
}), cc.fadeIn(this.fadeInDuration), cc.callFunc(function() {
t.runLoop();
}));
e.runAction(o);
}
};
r([ s({
type: cc.Sprite,
tooltip: "Sprite cần đổi ảnh"
}) ], e.prototype, "targetSprite", void 0);
r([ s({
type: [ cc.SpriteFrame ],
tooltip: "Danh sách SpriteFrame"
}) ], e.prototype, "spriteFrames", void 0);
r([ s({
tooltip: "Thời gian fade out"
}) ], e.prototype, "fadeOutDuration", void 0);
r([ s({
tooltip: "Thời gian fade in"
}) ], e.prototype, "fadeInDuration", void 0);
r([ s({
tooltip: "Thời gian giữ ảnh trước khi đổi ảnh tiếp theo"
}) ], e.prototype, "interval", void 0);
r([ s({
tooltip: "Index bắt đầu"
}) ], e.prototype, "startIndex", void 0);
r([ s({
tooltip: "Có chạy tự động khi vào scene không"
}) ], e.prototype, "autoPlayOnLoad", void 0);
return r([ a ], e);
}(cc.Component);
n.default = p;
cc._RF.pop();
}, {} ],
AutoScroll: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "781548XAiZBNp1chTLEyRwr", "AutoScroll");
var o, i = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
})(t, e);
}, function(t, e) {
o(t, e);
function n() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n());
}), r = this && this.__decorate || function(t, e, n, o) {
var i, r = arguments.length, c = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, n, o); else for (var a = t.length - 1; a >= 0; a--) (i = t[a]) && (c = (r < 3 ? i(c) : r > 3 ? i(e, n, c) : i(e, n)) || c);
return r > 3 && c && Object.defineProperty(e, n, c), c;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var c = cc._decorator, a = c.ccclass, s = c.property, p = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.pageView = null;
e.autoScrollDuration = 2;
e.autoScrollSpeed = 200;
return e;
}
e.prototype.onLoad = function() {
if (this.pageView) {
this.pageView.scrollEvents = !0;
this.pageView.scrollDuration = this.autoScrollDuration;
this.pageView.autoScrollSpeed = this.autoScrollSpeed;
this.pageView.scrollToPage(0, this.autoScrollDuration);
}
};
r([ s(cc.PageView) ], e.prototype, "pageView", void 0);
r([ s ], e.prototype, "autoScrollDuration", void 0);
r([ s ], e.prototype, "autoScrollSpeed", void 0);
return r([ a ], e);
}(cc.Component);
n.default = p;
cc._RF.pop();
}, {} ],
BannerPromotion: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "6e4091lTYFCTpNS41XbeME3", "BannerPromotion");
var o, i = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
})(t, e);
}, function(t, e) {
o(t, e);
function n() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n());
}), r = this && this.__decorate || function(t, e, n, o) {
var i, r = arguments.length, c = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, n, o); else for (var a = t.length - 1; a >= 0; a--) (i = t[a]) && (c = (r < 3 ? i(c) : r > 3 ? i(e, n, c) : i(e, n)) || c);
return r > 3 && c && Object.defineProperty(e, n, c), c;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var c = cc._decorator, a = c.ccclass, s = (c.property, function(t) {
i(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
return r([ a ], e);
}(lngui.UIPopup));
n.default = s;
cc._RF.pop();
}, {} ],
BetTX: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "1cdb7vo8odKYLfIyfp3s/FI", "BetTX");
var o, i = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
})(t, e);
}, function(t, e) {
o(t, e);
function n() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n());
}), r = this && this.__decorate || function(t, e, n, o) {
var i, r = arguments.length, c = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, n, o); else for (var a = t.length - 1; a >= 0; a--) (i = t[a]) && (c = (r < 3 ? i(c) : r > 3 ? i(e, n, c) : i(e, n)) || c);
return r > 3 && c && Object.defineProperty(e, n, c), c;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var c = t("../LobbyConst"), a = t("./utils/Lobby_UINumericLabelHelper"), s = cc._decorator, p = s.ccclass, l = s.property, u = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.gameID = c.GAME_IDS.NONE;
e.lbJackpot1 = null;
e.lbJackpot2 = null;
e.lbJackpot3 = null;
return e;
}
e.prototype.onEnable = function() {
lngui.EventDispatch.instance.add(c.LobbyConst.EVENT_NAME.EVENT_UPDATE_JACKPOT, this.updateJackpot, this);
};
e.prototype.onDisable = function() {
lngui.EventDispatch.instance.remove(c.LobbyConst.EVENT_NAME.EVENT_UPDATE_JACKPOT, this.updateJackpot, this);
};
e.prototype.updateJackpot = function() {
var t, e = this;
c.LobbyConst.slotByKeys.forEach(function(n, o) {
o != e.gameID || (t = n);
});
if (t && 1236 != this.gameID) {
this.lbJackpot2 && this.lbJackpot2.scheduleProgress(t.TotalBetValue1 * lngui.ConfigManager.instance.ConfigInfo.RateMultiple, 2);
this.lbJackpot1 && this.lbJackpot1.scheduleProgress(t.TotalBetValue2 * lngui.ConfigManager.instance.ConfigInfo.RateMultiple, 2);
this.lbJackpot3 && this.lbJackpot3.scheduleProgress(t.JackpotFund * lngui.ConfigManager.instance.ConfigInfo.RateMultiple, 2);
}
if (1236 == this.gameID) {
this.lbJackpot2 && this.lbJackpot2.scheduleProgress(t.TotalBetXiu * lngui.ConfigManager.instance.ConfigInfo.RateMultiple, 2);
this.lbJackpot1 && this.lbJackpot1.scheduleProgress(t.TotalBetTai * lngui.ConfigManager.instance.ConfigInfo.RateMultiple, 2);
this.lbJackpot3 && this.lbJackpot3.scheduleProgress(t.JackpotFund * lngui.ConfigManager.instance.ConfigInfo.RateMultiple, 2);
}
};
r([ l({
type: cc.Enum(c.GAME_IDS)
}) ], e.prototype, "gameID", void 0);
r([ l(a.default) ], e.prototype, "lbJackpot1", void 0);
r([ l(a.default) ], e.prototype, "lbJackpot2", void 0);
r([ l(a.default) ], e.prototype, "lbJackpot3", void 0);
return r([ p ], e);
}(cc.Component);
n.default = u;
cc._RF.pop();
}, {
"../LobbyConst": "LobbyConst",
"./utils/Lobby_UINumericLabelHelper": "Lobby_UINumericLabelHelper"
} ],
BundleMiniGame: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "d7ae8W+pkhKN71C0SrSO2su", "BundleMiniGame");
var o, i = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
})(t, e);
}, function(t, e) {
o(t, e);
function n() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n());
}), r = this && this.__decorate || function(t, e, n, o) {
var i, r = arguments.length, c = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, n, o); else for (var a = t.length - 1; a >= 0; a--) (i = t[a]) && (c = (r < 3 ? i(c) : r > 3 ? i(e, n, c) : i(e, n)) || c);
return r > 3 && c && Object.defineProperty(e, n, c), c;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var c = t("../../LobbyConst"), a = cc._decorator, s = a.ccclass, p = a.property, l = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.bundleName = "";
e.prefabMainNameURL = "";
e.prgLoadGame = null;
e.lbMsg = null;
e.isClicked = !0;
e.gameID = c.GAME_IDS.NONE;
e.isTest = !1;
e.numOfClick = 10;
return e;
}
e.prototype.onEnable = function() {
t.prototype.onEnable.call(this);
};
e.prototype.onFuturePrefabLoadDone = function(t) {
var e = this;
if (!cc.Canvas.instance.node.getChildByName(this.prefabMainNameURL)) {
lngui.UIWindowManager.instance.showWindowFromPrefab(t, function(t) {
t.node.name = e.prefabMainNameURL;
});
lngui.EventDispatch.instance.emit(c.LobbyConst.EVENT_NAME.BUNDLEMINI_DOWNLOAD_SUCCESS);
}
};
r([ p(cc.String) ], e.prototype, "bundleName", void 0);
r([ p(cc.String) ], e.prototype, "prefabMainNameURL", void 0);
r([ p(cc.ProgressBar) ], e.prototype, "prgLoadGame", void 0);
r([ p(cc.Label) ], e.prototype, "lbMsg", void 0);
r([ p(cc.Boolean) ], e.prototype, "isClicked", void 0);
r([ p({
type: cc.Enum(c.GAME_IDS)
}) ], e.prototype, "gameID", void 0);
r([ p(cc.Boolean) ], e.prototype, "isTest", void 0);
r([ p({
visible: function() {
return this.isTest;
}
}) ], e.prototype, "numOfClick", void 0);
return r([ s ], e);
}(lngui.BundleDownLoad);
n.default = l;
cc._RF.pop();
}, {
"../../LobbyConst": "LobbyConst"
} ],
BundleSceneGame: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "19083XsaEZMx7wDy6oqmR1j", "BundleSceneGame");
var o, i = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
})(t, e);
}, function(t, e) {
o(t, e);
function n() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n());
}), r = this && this.__decorate || function(t, e, n, o) {
var i, r = arguments.length, c = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, n, o); else for (var a = t.length - 1; a >= 0; a--) (i = t[a]) && (c = (r < 3 ? i(c) : r > 3 ? i(e, n, c) : i(e, n)) || c);
return r > 3 && c && Object.defineProperty(e, n, c), c;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var c = t("../../LobbyConst"), a = cc._decorator, s = a.ccclass, p = a.property, l = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.bundleName = "";
e.prefabMainNameURL = "";
e.prgLoadGame = null;
e.lbMsg = null;
e.isClicked = !0;
e.gameID = c.GAME_IDS.NONE;
e.isTest = !1;
e.numOfClick = 10;
return e;
}
e.prototype.onEnable = function() {
t.prototype.onEnable.call(this);
};
e.prototype.onFuturePrefabLoadDone = function(t) {
lngui.UIScreenManager.instance.pushScreen(t);
};
r([ p(cc.String) ], e.prototype, "bundleName", void 0);
r([ p(cc.String) ], e.prototype, "prefabMainNameURL", void 0);
r([ p(cc.ProgressBar) ], e.prototype, "prgLoadGame", void 0);
r([ p(cc.Label) ], e.prototype, "lbMsg", void 0);
r([ p(cc.Boolean) ], e.prototype, "isClicked", void 0);
r([ p({
type: cc.Enum(c.GAME_IDS)
}) ], e.prototype, "gameID", void 0);
r([ p(cc.Boolean) ], e.prototype, "isTest", void 0);
r([ p({
visible: function() {
return this.isTest;
}
}) ], e.prototype, "numOfClick", void 0);
return r([ s ], e);
}(lngui.BundleDownLoad);
n.default = l;
cc._RF.pop();
}, {
"../../LobbyConst": "LobbyConst"
} ],
CapchaReal: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "d034dREc+xAgbxbpKp4MHg1", "CapchaReal");
var o, i = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
})(t, e);
}, function(t, e) {
o(t, e);
function n() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n());
}), r = this && this.__decorate || function(t, e, n, o) {
var i, r = arguments.length, c = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, n, o); else for (var a = t.length - 1; a >= 0; a--) (i = t[a]) && (c = (r < 3 ? i(c) : r > 3 ? i(e, n, c) : i(e, n)) || c);
return r > 3 && c && Object.defineProperty(e, n, c), c;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var c = cc._decorator, a = c.ccclass, s = c.property, p = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.capcha = null;
return e;
}
e.prototype.start = function() {
this.sendGetCaptcha("https://gc-api.tieusi.online/789captcha");
};
e.prototype.sendGetCaptcha = function(t) {
var e = this;
lngui.Https.get(t, function(t) {
var n = t.data.image;
n = n.replace(/\r\n/g, "");
e.loadImgBinary(n);
});
};
e.prototype.loadImgBinary = function(t) {
var e = "data:image/png;base64," + t, n = new Image();
n.width = 130;
n.height = 60;
var o = this;
n.onload = function() {
var t = new cc.Texture2D();
t.initWithElement(n);
t.handleLoadedTexture();
var e = new cc.SpriteFrame(t);
o.capcha.node.active = !0;
o.capcha.spriteFrame = e;
};
n.src = e;
};
r([ s(cc.Sprite) ], e.prototype, "capcha", void 0);
return r([ a ], e);
}(cc.Component);
n.default = p;
cc._RF.pop();
}, {} ],
CapchaZ: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "3ce052fYL1H45r8huNtFn/M", "CapchaZ");
var o, i = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
})(t, e);
}, function(t, e) {
o(t, e);
function n() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n());
}), r = this && this.__decorate || function(t, e, n, o) {
var i, r = arguments.length, c = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, n, o); else for (var a = t.length - 1; a >= 0; a--) (i = t[a]) && (c = (r < 3 ? i(c) : r > 3 ? i(e, n, c) : i(e, n)) || c);
return r > 3 && c && Object.defineProperty(e, n, c), c;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var c = {
Login: "https://api." + lngui.ConfigManager.instance.ConfigInfo.Api + "/Captcha/Get?length=3&width=90&height=36",
Telco: ""
}, a = cc._decorator, s = a.ccclass, p = a.property, l = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.capcha = null;
e.isTelco = !1;
e.capchaId = "";
e.mUrl = "";
return e;
}
e.prototype.start = function() {
this.refreshCapcha();
};
e.prototype.refreshCapcha = function() {
var t = c.Login;
this.isTelco && (t = c.Telco);
this.sendGetCaptcha(t);
};
e.prototype.getCapChaId = function() {
return this.capchaId;
};
e.prototype.resetCapcha = function() {
this.capcha.node.active = !1;
};
e.prototype.sendGetCaptcha = function(t) {
this.mUrl = t;
var e = this;
lngui.Https.get(t, function(t) {
var n = t;
e.capchaId = n[0];
var o = n[1];
o = o.replace(/\r\n/g, "");
e.loadImgBinary(o);
});
};
e.prototype.loadImgBinary = function(t) {
var e = "data:image/png;base64," + t, n = new Image();
n.width = 130;
n.height = 60;
var o = this;
n.onload = function() {
var t = new cc.Texture2D();
t.initWithElement(n);
t.handleLoadedTexture();
var e = new cc.SpriteFrame(t);
o.capcha.node.active = !0;
o.capcha.spriteFrame = e;
};
n.src = e;
};
r([ p(cc.Sprite) ], e.prototype, "capcha", void 0);
r([ p(cc.Boolean) ], e.prototype, "isTelco", void 0);
return r([ s ], e);
}(cc.Component);
n.default = l;
cc._RF.pop();
}, {} ],
ChangeAvatar: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "b20b1ey4YhFErf8O5cu9ldM", "ChangeAvatar");
var o, i = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
})(t, e);
}, function(t, e) {
o(t, e);
function n() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n());
}), r = this && this.__decorate || function(t, e, n, o) {
var i, r = arguments.length, c = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, n, o); else for (var a = t.length - 1; a >= 0; a--) (i = t[a]) && (c = (r < 3 ? i(c) : r > 3 ? i(e, n, c) : i(e, n)) || c);
return r > 3 && c && Object.defineProperty(e, n, c), c;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var c = t("../../LobbyConst"), a = t("./ListAvatar"), s = cc._decorator, p = s.ccclass, l = s.property, u = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.BtnSelectAvt = null;
e.SpritetAvatar = null;
return e;
}
e.prototype.onLoad = function() {
var t = this;
this.BtnSelectAvt.children.forEach(function(e, n) {
var o = e.getChildByName("Avatar");
o && (o.getComponent(cc.Sprite).spriteFrame = t.SpritetAvatar.ListSpriteAvatar[n]);
});
};
e.prototype.ClickChangeAvatar = function(t) {
for (var e = t.target; e && e.parent !== this.BtnSelectAvt; ) e = e.parent;
var n = this.BtnSelectAvt.children.indexOf(e);
cc.log(n);
if (!(n < 0)) {
lngui.UIWaitingLayout.showWaiting();
var o = "" + c.LobbyConst.API.URL + c.LobbyConst.API.UPDATE_AVATAR + "?AvatarId=" + n + "&token=" + lngui.UserManager.instance.mainUserInfo.GameToken;
lngui.Https.get(o, function(t) {
if (t) {
lngui.UIWaitingLayout.hideWaiting();
lngui.UserManager.instance.mainUserInfo.Avatar = n;
lngui.EventDispatch.instance.emit(c.LobbyConst.EVENT_NAME.AVATAR_CHANGED, lngui.UserManager.instance.mainUserInfo.Avatar);
}
});
}
};
r([ l(cc.Node) ], e.prototype, "BtnSelectAvt", void 0);
r([ l(a.default) ], e.prototype, "SpritetAvatar", void 0);
return r([ p ], e);
}(lngui.UIPopup);
n.default = u;
cc._RF.pop();
}, {
"../../LobbyConst": "LobbyConst",
"./ListAvatar": "ListAvatar"
} ],
CheckAndSaveToken: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "a19da4eEtlLk4up52r0rbOs", "CheckAndSaveToken");
Object.defineProperty(n, "__esModule", {
value: !0
});
var o = function() {
function t() {}
t.saveData = function(t) {
var e = {
value: t,
timestamp: Date.now()
};
localStorage.setItem("myGameData", JSON.stringify(e));
};
t.loadData = function() {
var t = localStorage.getItem("myGameData");
if (t) try {
var e = JSON.parse(t);
Date.now(), e.timestamp;
return e.value;
} catch (t) {}
return null;
};
t.clearData = function() {
localStorage.removeItem("myGameData");
};
return t;
}();
n.default = o;
cc._RF.pop();
}, {} ],
CheckAutoLogin: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "594a0qFuU9EEo9aYvAWMaCg", "CheckAutoLogin");
var o, i = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
})(t, e);
}, function(t, e) {
o(t, e);
function n() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n());
}), r = this && this.__decorate || function(t, e, n, o) {
var i, r = arguments.length, c = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, n, o); else for (var a = t.length - 1; a >= 0; a--) (i = t[a]) && (c = (r < 3 ? i(c) : r > 3 ? i(e, n, c) : i(e, n)) || c);
return r > 3 && c && Object.defineProperty(e, n, c), c;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var c = t("./CheckAndSaveToken"), a = t("../../LobbyConst"), s = cc._decorator, p = s.ccclass, l = s.property, u = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.PrefabLogin = null;
e.token = null;
return e;
}
e.prototype.onLoad = function() {
this.token = c.default.loadData();
if (null !== this.token) {
lngui.UserManager.instance.mainUserInfo.GameToken = this.token;
this.onAutoLogin();
}
};
e.prototype.onAutoLogin = function() {
var t = this, e = a.LobbyConst.API.URL + a.LobbyConst.API.AUTO_LOGIN;
lngui.UIWaitingLayout.showWaiting();
lngui.Https.get(e, function(e) {
if (e) {
lngui.UIWaitingLayout.hideWaiting();
t.onLoginSuccess(e, function() {
var t = a.LobbyConst.API.URL + a.LobbyConst.API.VIP_GETINFO;
lngui.Https.get(t, function(t) {
if (t) if (1 == t.ResponseCode) {
var e = t.Data;
lngui.UserManager.instance.mainUserInfo.Level = e.Level;
lngui.EventDispatch.instance.emit(lngui.EVENT_GAMECORE.UPDATE_DISPLAYNAME);
} else lngui.UIPopupManager.instance.showPopup(t.Message);
});
});
} else lngui.UIWaitingLayout.hideWaiting();
});
};
e.prototype.onLoginSuccess = function(t, e) {
lngui.UserManager.instance.mainUserInfo = t;
lngui.EventDispatch.instance.emit(lngui.EVENT_GAMECORE.UPDATE_TOTAL_GOLD, lngui.UserManager.instance.mainUserInfo.Money);
lngui.EventDispatch.instance.emit(lngui.EVENT_GAMECORE.UPDATE_TOTAL_VIPPOINT, lngui.UserManager.instance.mainUserInfo.TotalVipPoint);
lngui.EventDispatch.instance.emit(lngui.EVENT_GAMECORE.LOGIN_SUCCESS);
e && e();
};
e.prototype.requestUnreadMail = function() {
var t = a.LobbyConst.API.URL + a.LobbyConst.API.GET_UNREAD_MAIL;
lngui.Https.get(t, function(t) {
t && t.ResponseCode;
});
};
r([ l(cc.Prefab) ], e.prototype, "PrefabLogin", void 0);
return r([ p ], e);
}(cc.Component);
n.default = u;
cc._RF.pop();
}, {
"../../LobbyConst": "LobbyConst",
"./CheckAndSaveToken": "CheckAndSaveToken"
} ],
"EditBoxController ": [ function(t, e, n) {
"use strict";
cc._RF.push(e, "ed5170mGT1Fj7dzQpDv6yKz", "EditBoxController ");
var o, i = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
})(t, e);
}, function(t, e) {
o(t, e);
function n() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n());
}), r = this && this.__decorate || function(t, e, n, o) {
var i, r = arguments.length, c = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, n, o); else for (var a = t.length - 1; a >= 0; a--) (i = t[a]) && (c = (r < 3 ? i(c) : r > 3 ? i(e, n, c) : i(e, n)) || c);
return r > 3 && c && Object.defineProperty(e, n, c), c;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var c = cc._decorator, a = c.ccclass, s = c.property, p = c.menu, l = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.string = "";
e.placeholder = "";
e.textLabel = null;
e.placeholderLabel = null;
e.inputFlag = cc.EditBox.InputFlag.DEFAULT;
e.inputMode = cc.EditBox.InputMode.SINGLE_LINE;
e.keyboardReturnType = cc.EditBox.KeyboardReturnType.DONE;
e.maxLength = 0;
e.horizontalPadding = 16;
e.editingDidBegin = [];
e.textChanged = [];
e.editingDidEnded = [];
e.editingReturn = [];
e._isEditing = !1;
e._isDestroying = !1;
e._htmlInput = null;
e._nativeEditBox = null;
e._cursorVisible = !1;
e._cursorTimer = null;
e._boundSyncDom = null;
e._lastW = 0;
e._lastH = 0;
return e;
}
e.prototype.onLoad = function() {
this._isDestroying = !1;
(this.node.width <= 0 || this.node.height <= 0) && this.node.setContentSize(300, 60);
this._boundSyncDom = this.syncDomPosition.bind(this);
this.node.on(cc.Node.EventType.TOUCH_END, this._onTouchEnd, this);
if (cc.sys.isBrowser && "undefined" != typeof window) {
window.addEventListener("resize", this._boundSyncDom);
window.addEventListener("orientationchange", this._boundSyncDom);
var t = window.visualViewport;
t && t.addEventListener && t.addEventListener("resize", this._boundSyncDom);
}
this._syncInnerLayout();
this._refreshView();
};
e.prototype.onEnable = function() {
this._isDestroying = !1;
this._syncInnerLayout();
this._refreshView();
this.syncDomPosition();
};
e.prototype.onDisable = function() {
this._isEditing = !1;
this._stopCursorBlink();
this._removeHtmlInput();
this._cleanupNativeEditBox(!1);
this._isAlive() && this._refreshView();
};
e.prototype.onDestroy = function() {
this._isDestroying = !0;
this.node.off(cc.Node.EventType.TOUCH_END, this._onTouchEnd, this);
if (cc.sys.isBrowser && "undefined" != typeof window && this._boundSyncDom) {
window.removeEventListener("resize", this._boundSyncDom);
window.removeEventListener("orientationchange", this._boundSyncDom);
var t = window.visualViewport;
t && t.removeEventListener && t.removeEventListener("resize", this._boundSyncDom);
}
this._stopCursorBlink();
this._removeHtmlInput();
this._cleanupNativeEditBox(!1);
};
e.prototype.update = function() {
if (!this._isDestroying && this._isAlive()) {
this._syncInnerLayout();
cc.sys.isBrowser && this._htmlInput && "undefined" != typeof window && (this._lastW === window.innerWidth && this._lastH === window.innerHeight || this.syncDomPosition());
}
};
e.prototype.setString = function(t) {
this._setString(t || "");
};
e.prototype.getString = function() {
return this.string;
};
e.prototype.clear = function() {
this._setString("");
};
e.prototype.focus = function() {
if (!this._isDestroying && this._isAlive()) if (this._isEditing) {
if (this._htmlInput) this._htmlInput.focus(); else if (this._nativeEditBox) try {
this._nativeEditBox.focus();
} catch (t) {}
} else this._beginInput();
};
e.prototype.blur = function() {
if (this._isEditing) if (this._htmlInput) this._htmlInput.blur(); else if (this._nativeEditBox) try {
this._nativeEditBox.blur();
} catch (t) {}
};
e.prototype.setFocus = function() {
this.focus();
};
e.prototype.isFocused = function() {
return this._isEditing;
};
e.prototype.syncDomPosition = function() {
if (cc.sys.isBrowser && this._htmlInput && this._isAlive()) {
this._syncInnerLayout();
var t = cc.view.getFrameSize(), e = this.node.convertToWorldSpaceAR(cc.v2(0, 0)), n = this.node.getContentSize(), o = this.node.getAnchorPoint(), i = Math.max(1, window.innerWidth || 0), r = Math.max(1, window.innerHeight || 0);
this._lastW = i;
this._lastH = r;
var c = i / Math.max(1, t.width), a = r / Math.max(1, t.height), s = (e.x + .5 * t.width) * c - n.width * o.x * c, p = (.5 * t.height - e.y) * a - n.height * (1 - o.y) * a, l = Math.max(50, n.width * c), u = Math.max(44, n.height * a);
s = Math.max(0, Math.min(s, i - l));
p = Math.max(0, Math.min(p, r - u));
this._htmlInput.style.left = s + "px";
this._htmlInput.style.top = p + "px";
this._htmlInput.style.width = l + "px";
this._htmlInput.style.height = u + "px";
}
};
e.prototype._isAlive = function() {
return !!this.node && cc.isValid(this.node);
};
e.prototype._isLabelAlive = function(t) {
return !!t && cc.isValid(t) && !!t.node && cc.isValid(t.node);
};
e.prototype._onTouchEnd = function(t) {
if (!this._isDestroying && this._isAlive()) {
t && t.stopPropagation();
this.focus();
}
};
e.prototype._beginInput = function() {
if (!this._isEditing && !this._isDestroying && this._isAlive()) {
this._isEditing = !0;
this._startCursorBlink();
this._refreshView();
this._emit(this.editingDidBegin);
cc.sys.isBrowser ? this._createHtmlInput() : this._createNativeInput();
}
};
e.prototype._endInput = function() {
if (this._isEditing && !this._isDestroying && this._isAlive()) {
this._isEditing = !1;
this._stopCursorBlink();
this._refreshView();
this._emit(this.editingDidEnded);
}
};
e.prototype._createHtmlInput = function() {
var t, e = this;
this._removeHtmlInput();
if (this.inputMode === cc.EditBox.InputMode.ANY) {
var n = document.createElement("textarea");
n.style.resize = "none";
n.style.overflow = "hidden";
t = n;
} else {
(o = document.createElement("input")).type = this.inputFlag === cc.EditBox.InputFlag.PASSWORD ? "password" : "text";
t = o;
}
this.maxLength > 0 && (t.maxLength = this.maxLength);
t.value = this.string;
t.style.position = "fixed";
t.style.opacity = "0";
t.style.pointerEvents = "auto";
t.style.zIndex = "99999";
t.style.border = "none";
t.style.outline = "none";
t.style.background = "transparent";
t.style.padding = "0";
t.style.margin = "0";
t.style.color = "transparent";
t.style.caretColor = "transparent";
t.style.fontSize = "16px";
document.body.appendChild(t);
this._htmlInput = t;
this.syncDomPosition();
try {
t.focus();
var o;
"function" == typeof (o = t).setSelectionRange && o.setSelectionRange(t.value.length, t.value.length);
} catch (t) {}
t.oninput = function() {
!e._isDestroying && e._isAlive() && e._setString(t.value);
};
t.onblur = function() {
e._removeHtmlInput();
!e._isDestroying && e._isAlive() && e._endInput();
};
t.onkeydown = function(n) {
if (!e._isDestroying && e._isAlive()) if ("Enter" !== n.key || e.inputMode !== cc.EditBox.InputMode.SINGLE_LINE) {
if ("Enter" === n.key && e.keyboardReturnType === cc.EditBox.KeyboardReturnType.DONE && e.inputMode === cc.EditBox.InputMode.ANY) {
e._emit(e.editingReturn);
t.blur();
}
} else {
n.preventDefault();
e._emit(e.editingReturn);
t.blur();
}
};
};
e.prototype._createNativeInput = function() {
var t = this;
this._cleanupNativeEditBox(!0);
var e = this.node.getContentSize(), n = new cc.EditBox(e), o = n;
n.string = this.string;
n.maxLength = this.maxLength;
n.inputFlag = this.inputFlag;
n.inputMode = this.inputMode;
o.returnType = this.keyboardReturnType;
n.node.opacity = 1;
n.node.setAnchorPoint(.5, .5);
n.node.setPosition(0, 0);
n.node.setContentSize(e.width, e.height);
n.node.scaleX = .01;
n.node.scaleY = .01;
this.node.addChild(n.node);
this._nativeEditBox = n;
o.textChanged = function(e) {
!t._isDestroying && t._isAlive() && t._setString(e);
};
o.editingDidBegin = function() {
!t._isDestroying && t._isAlive() && t._emit(t.editingDidBegin);
};
o.editingDidEnded = function() {
if (!t._isDestroying && t._isAlive()) {
t._setString(n.string);
t._endInput();
}
t._nativeEditBox === n && t._cleanupNativeEditBox(!0);
};
o.editingReturn = function() {
!t._isDestroying && t._isAlive() && t._emit(t.editingReturn);
};
this.scheduleOnce(function() {
if (!t._isDestroying && t._isAlive() && t._nativeEditBox === n && n.node && cc.isValid(n.node)) try {
n.focus();
} catch (t) {}
}, 0);
};
e.prototype._cleanupNativeEditBox = function(t) {
if (this._nativeEditBox) {
var e = this._nativeEditBox, n = this._nativeEditBox.node;
try {
e.textChanged = null;
e.editingDidBegin = null;
e.editingDidEnded = null;
e.editingReturn = null;
this._nativeEditBox.blur();
} catch (t) {}
if (t && n && cc.isValid(n)) {
var o = n;
o._destroyed || o._onPreDestroyCalled || n.destroy();
}
this._nativeEditBox = null;
}
};
e.prototype._removeHtmlInput = function() {
if (this._htmlInput) {
try {
this._htmlInput.oninput = null;
this._htmlInput.onblur = null;
this._htmlInput.onkeydown = null;
} catch (t) {}
this._htmlInput.parentNode && this._htmlInput.parentNode.removeChild(this._htmlInput);
this._htmlInput = null;
}
};
e.prototype._setString = function(t) {
if (!this._isDestroying && this._isAlive()) {
var e = t || "";
this.maxLength > 0 && e.length > this.maxLength && (e = e.substr(0, this.maxLength));
this.string = e;
this._refreshView();
this._emit(this.textChanged);
}
};
e.prototype._refreshView = function() {
if (!this._isDestroying && this._isAlive()) {
this._syncInnerLayout();
if (this._isLabelAlive(this.textLabel)) {
var t = this.inputFlag === cc.EditBox.InputFlag.PASSWORD ? "●".repeat(this.string.length) : this.string;
this._isEditing && this._cursorVisible && (t += "|");
this.textLabel.string = t;
if (this._isLabelAlive(this.placeholderLabel)) {
this.placeholderLabel.string = this.placeholder;
this.placeholderLabel.node.active = !this._isEditing && 0 === this.string.length;
}
this._isLabelAlive(this.textLabel) && (this.textLabel.node.active = this._isEditing || this.string.length > 0);
}
}
};
e.prototype._syncInnerLayout = function() {
if (this._isAlive()) {
var t = this.node.getContentSize(), e = Math.max(0, t.width - 2 * this.horizontalPadding), n = t.height, o = .5 * -t.width + this.horizontalPadding, i = function(t) {
if (t && cc.isValid(t)) {
var e = t.getComponent(cc.Widget);
e && (e.enabled = !1);
var n = t.getComponent(cc.Layout);
n && (n.enabled = !1);
}
};
if (this.textLabel && this.textLabel.node && cc.isValid(this.textLabel.node)) {
i(this.textLabel.node);
this.textLabel.node.setAnchorPoint(0, .5);
this.textLabel.node.setPosition(o, 0);
this.textLabel.node.angle = 0;
this.textLabel.node.scaleX = 1;
this.textLabel.node.scaleY = 1;
this.textLabel.node.setContentSize(e, n);
this.textLabel.overflow = cc.Label.Overflow.CLAMP;
this.textLabel.horizontalAlign = cc.Label.HorizontalAlign.LEFT;
this.textLabel.verticalAlign = cc.Label.VerticalAlign.CENTER;
void 0 !== this.textLabel.enableWrapText && (this.textLabel.enableWrapText = !1);
this.textLabel.lineHeight = Math.max(1, Math.floor(n));
}
if (this.placeholderLabel && this.placeholderLabel.node && cc.isValid(this.placeholderLabel.node)) {
i(this.placeholderLabel.node);
this.placeholderLabel.node.setAnchorPoint(0, .5);
this.placeholderLabel.node.setPosition(o, 0);
this.placeholderLabel.node.angle = 0;
this.placeholderLabel.node.scaleX = 1;
this.placeholderLabel.node.scaleY = 1;
this.placeholderLabel.node.setContentSize(e, n);
this.placeholderLabel.overflow = cc.Label.Overflow.CLAMP;
this.placeholderLabel.horizontalAlign = cc.Label.HorizontalAlign.LEFT;
this.placeholderLabel.verticalAlign = cc.Label.VerticalAlign.CENTER;
void 0 !== this.placeholderLabel.enableWrapText && (this.placeholderLabel.enableWrapText = !1);
this.placeholderLabel.lineHeight = Math.max(1, Math.floor(n));
}
}
};
e.prototype._startCursorBlink = function() {
var t = this;
this._stopCursorBlink();
this._cursorVisible = !0;
this._refreshView();
this._cursorTimer = window.setInterval(function() {
if (!t._isDestroying && t._isAlive() && t._isEditing) {
t._cursorVisible = !t._cursorVisible;
t._refreshView();
} else t._stopCursorBlink();
}, 500);
};
e.prototype._stopCursorBlink = function() {
if (null !== this._cursorTimer) {
clearInterval(this._cursorTimer);
this._cursorTimer = null;
}
this._cursorVisible = !1;
};
e.prototype._emit = function(t) {
!this._isDestroying && this._isAlive() && t && t.length > 0 && cc.Component.EventHandler.emitEvents(t, this.string);
};
r([ s({
tooltip: "Giá trị hiện tại của input"
}) ], e.prototype, "string", void 0);
r([ s({
tooltip: "Placeholder text"
}) ], e.prototype, "placeholder", void 0);
r([ s({
type: cc.Label,
tooltip: "Label hiển thị text"
}) ], e.prototype, "textLabel", void 0);
r([ s({
type: cc.Label,
tooltip: "Label hiển thị placeholder"
}) ], e.prototype, "placeholderLabel", void 0);
r([ s({
type: cc.Enum(cc.EditBox.InputFlag),
tooltip: "Input flag"
}) ], e.prototype, "inputFlag", void 0);
r([ s({
type: cc.Enum(cc.EditBox.InputMode),
tooltip: "Input mode"
}) ], e.prototype, "inputMode", void 0);
r([ s({
type: cc.Enum(cc.EditBox.KeyboardReturnType),
tooltip: "Keyboard return type"
}) ], e.prototype, "keyboardReturnType", void 0);
r([ s({
tooltip: "Max length, 0 = unlimited"
}) ], e.prototype, "maxLength", void 0);
r([ s({
tooltip: "Padding ngang cho text"
}) ], e.prototype, "horizontalPadding", void 0);
r([ s({
type: [ cc.Component.EventHandler ],
tooltip: "Event khi bắt đầu nhập"
}) ], e.prototype, "editingDidBegin", void 0);
r([ s({
type: [ cc.Component.EventHandler ],
tooltip: "Event khi text thay đổi"
}) ], e.prototype, "textChanged", void 0);
r([ s({
type: [ cc.Component.EventHandler ],
tooltip: "Event khi kết thúc nhập"
}) ], e.prototype, "editingDidEnded", void 0);
r([ s({
type: [ cc.Component.EventHandler ],
tooltip: "Event khi nhấn return"
}) ], e.prototype, "editingReturn", void 0);
return r([ a, p("Custom/EditBoxController") ], e);
}(cc.Component);
n.default = l;
cc._RF.pop();
}, {} ],
EventEDB: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "380ffD+S4FA+ZeF4/5i+Dl+", "EventEDB");
var o, i = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
})(t, e);
}, function(t, e) {
o(t, e);
function n() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n());
}), r = this && this.__decorate || function(t, e, n, o) {
var i, r = arguments.length, c = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, n, o); else for (var a = t.length - 1; a >= 0; a--) (i = t[a]) && (c = (r < 3 ? i(c) : r > 3 ? i(e, n, c) : i(e, n)) || c);
return r > 3 && c && Object.defineProperty(e, n, c), c;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var c = cc._decorator, a = c.ccclass, s = c.property, p = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.displayLabel = null;
e.editBox = null;
e.Type = "";
return e;
}
e.prototype.onLoad = function() {};
e.prototype.checkOrientation = function() {
var t = 90 === window.orientation || -90 === window.orientation || window.innerWidth > window.innerHeight;
cc.sys.isBrowser && cc.sys.OS_IOS && cc.sys.isMobile ? this.displayLabel.node.active = !t : this.displayLabel.node.active = !1;
};
e.prototype.onTextChanged = function(t) {
var e = t.string;
"password" == this.Type ? this.displayLabel.string = e.replace(/./g, "*") : this.displayLabel.string = e;
};
e.prototype.onEdbStart = function() {
this.checkOrientation();
};
e.prototype.onEdbDone = function() {
this.displayLabel.node.active = !1;
};
e.prototype.onDestroy = function() {
window.removeEventListener("orientationchange", this.checkOrientation.bind(this));
window.removeEventListener("resize", this.checkOrientation.bind(this));
};
r([ s(cc.Label) ], e.prototype, "displayLabel", void 0);
r([ s(cc.EditBox) ], e.prototype, "editBox", void 0);
r([ s ], e.prototype, "Type", void 0);
return r([ a ], e);
}(cc.Component);
n.default = p;
cc._RF.pop();
}, {} ],
ForgetPassCtrl: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "53d8e/wmD9P54A6oSlG7fWr", "ForgetPassCtrl");
var o, i = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
})(t, e);
}, function(t, e) {
o(t, e);
function n() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n());
}), r = this && this.__decorate || function(t, e, n, o) {
var i, r = arguments.length, c = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, n, o); else for (var a = t.length - 1; a >= 0; a--) (i = t[a]) && (c = (r < 3 ? i(c) : r > 3 ? i(e, n, c) : i(e, n)) || c);
return r > 3 && c && Object.defineProperty(e, n, c), c;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var c = t("../LobbyConst"), a = t("./utils/CapchaZ"), s = cc._decorator, p = s.ccclass, l = s.property, u = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.nStep1 = null;
e.nStep2 = null;
e.ebAccount = null;
e.ebPhoneNumber = null;
e.btnGetOtp = null;
e.edbOTP = null;
e.edbCaptcha = null;
e.UICaptcha = null;
e.txtNewPass = null;
e.txtReNewPass = null;
return e;
}
e.prototype.onLoad = function() {
this.nStep1.active = !0;
this.nStep2.active = !1;
};
e.prototype.onContinueClicked = function() {
if (this.ebAccount.string.length < 6) lngui.UIPopupManager.instance.showPopup("Tên đăng nhập không đúng!"); else if (this.ebPhoneNumber.string.length < 10) lngui.UIPopupManager.instance.showPopup("Số điện thoại không đúng!"); else {
this.nStep1.active = !1;
this.nStep2.active = !0;
}
};
e.prototype.onGetOTPClicked = function() {
if (this.ebAccount.string.length < 6) lngui.UIPopupManager.instance.showPopup("Tên đăng nhập không đúng!"); else if (this.ebPhoneNumber.string.length < 10) lngui.UIPopupManager.instance.showPopup("Số điện thoại không đúng!"); else {
this.btnGetOtp.interactable = !1;
this.btnGetOtp.node.runAction(cc.sequence(cc.delayTime(1), cc.callFunc(function() {
c.LobbyConst.timerSMS--;
if (c.LobbyConst.timerSMS <= 0) {
this.btnGetOtp.interactable = !0;
c.LobbyConst.timerSMS = 30;
this.btnGetOtp.node.stopAllActions();
}
}, this)).repeatForever());
lngui.UIWaitingLayout.showWaiting();
var t = {
AccountName: this.ebAccount.string,
Mobile: this.ebPhoneNumber.string
}, e = c.LobbyConst.API.URL + c.LobbyConst.API.OTP_RESET_PASSWORD, n = this, o = cc.loader.getXMLHttpRequest();
o.onreadystatechange = function() {
lngui.UIWaitingLayout.hideWaiting();
if (4 == o.readyState) if (200 == o.status) {
var t = JSON.parse(o.responseText);
cc.log("otppp ====> pass: ", t);
n.btnGetOtp.interactable = !0;
c.LobbyConst.timerSMS = 30;
n.btnGetOtp.node.stopAllActions();
lngui.UIPopupManager.instance.showPopup("OTP đã gửi về số điện thoại của bạn");
n.onContinueClicked();
} else o.responseText.length > 0 && lngui.UIPopupManager.instance.showPopup(o.responseText);
};
o.ontimeout = function() {
lngui.UIWaitingLayout.hideWaiting();
};
o.onerror = function() {
lngui.UIWaitingLayout.hideWaiting();
};
o.timeout = 3e3;
o.open("POST", e, !0);
o.setRequestHeader("Content-Type", "application/json");
o.withCredentials = !0;
o.send(JSON.stringify(t));
}
};
e.prototype.onBackClicked = function() {
this.btnGetOtp.interactable = !0;
this.nStep1.active = !0;
this.nStep2.active = !1;
};
e.prototype.onChangePassClicked = function() {
var t = this.edbOTP.string.trim(), e = this.txtNewPass.string, n = this.txtReNewPass.string, o = this.edbCaptcha.string;
if (0 != t.length) if (0 != e.length) if (e === n) if (0 != o.length) {
lngui.UIWaitingLayout.showWaiting();
var i = {
AccountName: this.ebAccount.string,
Mobile: this.ebPhoneNumber.string,
Token: this.UICaptcha.getComponent(a.default).getCapChaId(),
Captcha: this.edbCaptcha.string,
OtpType: 1,
NewPassword: e,
Otp: t
};
cc.log(JSON.stringify(i));
var r = c.LobbyConst.API.URL + c.LobbyConst.API.RESET_PASSWORD, s = this, p = cc.loader.getXMLHttpRequest();
p.onreadystatechange = function() {
lngui.UIWaitingLayout.hideWaiting();
if (4 == p.readyState) {
s.onRefreshCaptchaClicked();
if (200 == p.status) {
s.hide();
var t = JSON.parse(p.responseText);
cc.log("change pass: ", t);
lngui.UIPopupManager.instance.showPopup("Đổi mật khẩu thành công");
} else p.responseText.length > 0 ? lngui.UIPopupManager.instance.showPopup(p.responseText) : lngui.UIPopupManager.instance.showPopup("Đổi mật khẩu không thành công");
}
};
p.ontimeout = function() {
lngui.UIWaitingLayout.hideWaiting();
lngui.UIPopupManager.instance.showPopup("Đổi mật khẩu không thành công");
};
p.onerror = function() {
lngui.UIWaitingLayout.hideWaiting();
lngui.UIPopupManager.instance.showPopup("Đổi mật khẩu không thành công");
};
p.timeout = 3e4;
p.open("POST", r, !0);
p.setRequestHeader("Content-Type", "application/json");
p.withCredentials = !0;
p.send(JSON.stringify(i));
} else lngui.UIPopupManager.instance.showPopup("Bạn chưa nhập mã xác nhận"); else lngui.UIPopupManager.instance.showPopup("Nhập lại mật khẩu mới không đúng"); else lngui.UIPopupManager.instance.showPopup("Bạn chưa nhập mật khẩu mới"); else lngui.UIPopupManager.instance.showPopup("Bạn chưa nhập mã OTP!");
};
e.prototype.onRefreshCaptchaClicked = function() {
this.UICaptcha.refreshCapcha();
};
r([ l(cc.Node) ], e.prototype, "nStep1", void 0);
r([ l(cc.Node) ], e.prototype, "nStep2", void 0);
r([ l(cc.EditBox) ], e.prototype, "ebAccount", void 0);
r([ l(cc.EditBox) ], e.prototype, "ebPhoneNumber", void 0);
r([ l(cc.Button) ], e.prototype, "btnGetOtp", void 0);
r([ l(cc.EditBox) ], e.prototype, "edbOTP", void 0);
r([ l(cc.EditBox) ], e.prototype, "edbCaptcha", void 0);
r([ l(a.default) ], e.prototype, "UICaptcha", void 0);
r([ l(cc.EditBox) ], e.prototype, "txtNewPass", void 0);
r([ l(cc.EditBox) ], e.prototype, "txtReNewPass", void 0);
return r([ p ], e);
}(lngui.UIPopup);
n.default = u;
cc._RF.pop();
}, {
"../LobbyConst": "LobbyConst",
"./utils/CapchaZ": "CapchaZ"
} ],
GUIAccountChangePass: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "af430Za50VKKrBLoGZg4QQA", "GUIAccountChangePass");
var o, i = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
})(t, e);
}, function(t, e) {
o(t, e);
function n() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n());
}), r = this && this.__decorate || function(t, e, n, o) {
var i, r = arguments.length, c = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, n, o); else for (var a = t.length - 1; a >= 0; a--) (i = t[a]) && (c = (r < 3 ? i(c) : r > 3 ? i(e, n, c) : i(e, n)) || c);
return r > 3 && c && Object.defineProperty(e, n, c), c;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var c = t("../LobbyConst"), a = t("./utils/CapchaZ"), s = cc._decorator, p = s.ccclass, l = s.property, u = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.UICaptcha = null;
e.txtOldPass = null;
e.txtNewPass = null;
e.txtReNewPass = null;
e.txtCaptchaChangePass = null;
e.nodeStep1 = null;
e.nodeStep2 = null;
return e;
}
e.prototype.onLoad = function() {};
e.prototype.start = function() {};
e.prototype.onRefreshCaptchaClicked = function() {
this.UICaptcha.refreshCapcha();
};
e.prototype.onChangePass = function() {
var t = this, e = this.txtOldPass.string, n = this.txtNewPass.string, o = this.txtReNewPass.string, i = this.txtCaptchaChangePass.string;
if (0 != e.length) if (0 != n.length) if (n === o) if (0 != i.length) {
var r = {
sourceId: c.LobbyConst.platform,
newPass: window.md5(n),
oldPass: window.md5(e),
captchaText: i,
captchaToken: this.UICaptcha.getCapChaId()
};
lngui.Https.post(c.LobbyConst.API.URL + c.LobbyConst.API.CHANGE_PASS, r, function(e, n) {
if (e >= 200 && e < 400) {
var o = n;
if (null != o) if (null != o.IsOtp && 1 == o.IsOtp) lngui.UIPopupManager.instance.showPopupFromPrefab(lngui.CommonAssetDefined.instance.getPrefabByName("GUI_OTP"), function(t) {
t.initData(o.OtpToken, Global.SERVICEID.OTP_SERVICE_CHANGE_PASSWORD);
}); else {
var i = [ lngui.PopupAction.make("OK", function() {
lngui.EventDispatch.instance.emit(c.LobbyConst.EVENT_NAME.CHANGE_TAB_UI, 3);
}), lngui.PopupAction.make("CLOSE", function() {}) ];
lngui.UIPopupManager.instance.showPopup("Bạn cần đăng ký OTP để thực hiện chức năng này.\nBạn muốn đăng ký OTP không?", i);
t.clearInput();
}
} else {
t.clearInput();
t.onRefreshCaptchaClicked();
lngui.UIPopupManager.instance.showPopup(n);
}
});
} else lngui.UIPopupManager.instance.showPopup("Bạn chưa nhập mã xác nhận"); else lngui.UIPopupManager.instance.showPopup("Nhập lại mật khẩu mới không đúng"); else lngui.UIPopupManager.instance.showPopup("Bạn chưa nhập mật khẩu mới"); else lngui.UIPopupManager.instance.showPopup("Bạn chưa nhập mật khẩu cũ");
};
e.prototype.clearInput = function() {
this.onRefreshCaptchaClicked();
this.txtOldPass.string = "";
this.txtNewPass.string = "";
this.txtReNewPass.string = "";
this.txtCaptchaChangePass.string = "";
};
r([ l(a.default) ], e.prototype, "UICaptcha", void 0);
r([ l(cc.EditBox) ], e.prototype, "txtOldPass", void 0);
r([ l(cc.EditBox) ], e.prototype, "txtNewPass", void 0);
r([ l(cc.EditBox) ], e.prototype, "txtReNewPass", void 0);
r([ l(cc.EditBox) ], e.prototype, "txtCaptchaChangePass", void 0);
r([ l(cc.Node) ], e.prototype, "nodeStep1", void 0);
r([ l(cc.Node) ], e.prototype, "nodeStep2", void 0);
return r([ p ], e);
}(lngui.UIPopup);
n.default = u;
cc._RF.pop();
}, {
"../LobbyConst": "LobbyConst",
"./utils/CapchaZ": "CapchaZ"
} ],
GUIAccountDetail: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "b4aaemL11lLvoXxIBnIZrTq", "GUIAccountDetail");
var o, i = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
})(t, e);
}, function(t, e) {
o(t, e);
function n() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n());
}), r = this && this.__decorate || function(t, e, n, o) {
var i, r = arguments.length, c = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, n, o); else for (var a = t.length - 1; a >= 0; a--) (i = t[a]) && (c = (r < 3 ? i(c) : r > 3 ? i(e, n, c) : i(e, n)) || c);
return r > 3 && c && Object.defineProperty(e, n, c), c;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var c = t("../LobbyConst"), a = t("./MVUtils"), s = cc._decorator, p = s.ccclass, l = s.property, u = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.lblNickname = null;
e.lbCoin = null;
e.lbID = null;
e.lblPhone = null;
e.lblDiemVip = null;
e.lblLevel = null;
e.avatar = null;
e.listAvt = [];
e.btnSms = null;
e.PrefabKet = null;
return e;
}
e.prototype.onLoad = function() {
this.setData();
};
e.prototype.setData = function() {
this.lblNickname.string = lngui.UserManager.instance.mainUserInfo.NickName;
this.lbID.string = "ID " + lngui.UserManager.instance.mainUserInfo.AccountID;
this.lbCoin.string = lngui.StringUtils.formatNumber(lngui.UserManager.instance.mainUserInfo.Money);
lngui.UserManager.instance.mainUserInfo.Mobile ? this.lblPhone.string = a.MVUtils.hideMiddle(lngui.UserManager.instance.mainUserInfo.Mobile, 2, 3) : this.lblPhone.string = "";
this.lblDiemVip.string = lngui.UserManager.instance.mainUserInfo.VipPoint + "";
this.lblLevel.string = lngui.UserManager.instance.mainUserInfo.Level + "";
this.btnSms.active = !(this.lblPhone.string.length > 0);
};
e.prototype.openGuideOTP = function() {
lngui.EventDispatch.instance.emit(c.LobbyConst.EVENT_NAME.CHANGE_TAB_UI, 3);
};
e.prototype.onLogoutClicked = function() {
var t = [ lngui.PopupAction.make("OK", function() {
lngui.EventDispatch.instance.emit(lngui.EVENT_GAMECORE.LOGOUT);
}), lngui.PopupAction.make("CLOSE", function() {}) ];
lngui.UIPopupManager.instance.showPopup("Bạn có chắc chắn muốn đăng xuất?", t);
};
e.prototype.onbtnket = function() {
lngui.UserManager.instance.mainUserInfo.Mobile ? lngui.UIPopupManager.instance.showPopupFromPrefab(this.PrefabKet) : lngui.UIPopupManager.instance.showPopup("Bạn cần đăng ký bảo mật để tiếp tục");
};
r([ l(cc.Label) ], e.prototype, "lblNickname", void 0);
r([ l(cc.Label) ], e.prototype, "lbCoin", void 0);
r([ l(cc.Label) ], e.prototype, "lbID", void 0);
r([ l(cc.Label) ], e.prototype, "lblPhone", void 0);
r([ l(cc.Label) ], e.prototype, "lblDiemVip", void 0);
r([ l(cc.Label) ], e.prototype, "lblLevel", void 0);
r([ l(cc.Sprite) ], e.prototype, "avatar", void 0);
r([ l(cc.SpriteFrame) ], e.prototype, "listAvt", void 0);
r([ l(cc.Node) ], e.prototype, "btnSms", void 0);
r([ l(cc.Prefab) ], e.prototype, "PrefabKet", void 0);
return r([ p ], e);
}(lngui.UIPopup);
n.default = u;
cc._RF.pop();
}, {
"../LobbyConst": "LobbyConst",
"./MVUtils": "MVUtils"
} ],
GUIAccountMail: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "7f47c5fYaZANqorDhathbD5", "GUIAccountMail");
var o, i = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
})(t, e);
}, function(t, e) {
o(t, e);
function n() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n());
}), r = this && this.__decorate || function(t, e, n, o) {
var i, r = arguments.length, c = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, n, o); else for (var a = t.length - 1; a >= 0; a--) (i = t[a]) && (c = (r < 3 ? i(c) : r > 3 ? i(e, n, c) : i(e, n)) || c);
return r > 3 && c && Object.defineProperty(e, n, c), c;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var c = t("../LobbyConst"), a = t("./MVUtils"), s = cc._decorator, p = s.ccclass, l = s.property, u = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.mailTemplate = null;
e.mailList = null;
e.mailDetail = null;
return e;
}
n = e;
Object.defineProperty(e, "instance", {
get: function() {
n._instance || (n._instance = new n());
return n._instance;
},
enumerable: !1,
configurable: !0
});
e.prototype.onEnable = function() {
n._instance = this;
this.mailDetail.active = !1;
this.requestMail();
};
e.prototype.onDisable = function() {};
e.prototype.requestMail = function() {
var t = this, e = c.LobbyConst.API.URL + c.LobbyConst.API.GET_LIST_MAIL;
lngui.Https.post(e, {
MailType: 2,
CurrentPage: 1,
PageSize: 25
}, function(e, n) {
e >= 200 && e < 400 ? t.initPanelInbox(n.List) : console.log("err", n);
});
};
e.prototype.initPanelInbox = function(t) {
console.log(t);
if (null != t && !(t.length <= 0)) {
this.mailList.removeAllChildren();
for (var e = 0; e < t.length; e++) {
var n = cc.instantiate(this.mailTemplate);
n.getComponent("ItemMail").initData(t[e]);
n.getComponent(cc.Button).clickEvents[0].customEventData = t[e];
n.getChildByName("btnDelete").getComponent(cc.Button).clickEvents[0].customEventData = t[e].ID;
this.mailList.addChild(n);
}
}
};
e.prototype.initMailContent = function(t) {
this.mailDetail.getChildByName("lblTime").getComponent(cc.Label).string = a.MVUtils.formatDateTime(t.CreatedTime);
this.mailDetail.getChildByName("lblTitle").getComponent(cc.Label).string = t.Title;
this.mailDetail.getChildByName("lblContent").getComponent(cc.Label).string = t.Content;
this.mailDetail.getChildByName("btnUse").active = !1;
};
e.prototype.onActBack = function() {
this.mailList.active = !0;
this.mailDetail.active = !1;
};
var n;
e._instance = null;
r([ l(cc.Prefab) ], e.prototype, "mailTemplate", void 0);
r([ l(cc.Node) ], e.prototype, "mailList", void 0);
r([ l(cc.Node) ], e.prototype, "mailDetail", void 0);
return n = r([ p ], e);
}(lngui.UIPopup);
n.default = u;
cc._RF.pop();
}, {
"../LobbyConst": "LobbyConst",
"./MVUtils": "MVUtils"
} ],
GUIAccountSafe: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "e9512sLjkFEb7wom0HBexVs", "GUIAccountSafe");
var o, i = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
})(t, e);
}, function(t, e) {
o(t, e);
function n() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n());
}), r = this && this.__decorate || function(t, e, n, o) {
var i, r = arguments.length, c = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, n, o); else for (var a = t.length - 1; a >= 0; a--) (i = t[a]) && (c = (r < 3 ? i(c) : r > 3 ? i(e, n, c) : i(e, n)) || c);
return r > 3 && c && Object.defineProperty(e, n, c), c;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var c = t("../LobbyConst"), a = t("./MVUtils"), s = cc._decorator, p = s.ccclass, l = s.property, u = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.panelOTPSafe = null;
e.cbxFreeze = null;
e.cbxOpenFreeze = null;
e.lblBalance = null;
e.lblFreezeBalance = null;
e.edbMoneyFreeze = null;
e.edbOTPSafeStep2 = null;
e.btnAccept = null;
e.btnGetOTP = null;
e.frozenVal = 0;
return e;
}
e.prototype.onEnable = function() {
this.panelOTPSafe.active = !1;
this.edbMoneyFreeze.string = "";
this.edbOTPSafeStep2.string = "";
this.cbxFreeze.interactable = !1;
this.getFrozenValue();
};
e.prototype.onEdbChange = function() {
var t = a.MVUtils.toInt(this.edbMoneyFreeze.string);
t = Math.abs(t);
this.edbMoneyFreeze.string = a.MVUtils.formatNumber(t);
cc.sys.isBrowser && this.edbMoneyFreeze.focus();
};
e.prototype.getFrozenValue = function() {
var t = this;
lngui.UIWaitingLayout.showWaiting();
var e = c.LobbyConst.API.URL + c.LobbyConst.API.GET_FROZEB, n = {
accountId: lngui.UserManager.instance.mainUserInfo.AccountID
}, o = c.getStringBodyByObject(n);
lngui.Https.get(e + o, function(e) {
if (e) {
lngui.UIWaitingLayout.hideWaiting();
var n = e, o = n.FrozenValue;
t.frozenVal = o;
var i = n.Balance;
t.lblFreezeBalance.string = lgui.StringUtils.formatNumber(o);
t.lblBalance.string = lgui.StringUtils.formatNumber(i);
lngui.EventDispatch.instance.emit(lngui.EVENT_GAMECORE.UPDATE_TOTAL_GOLD, i);
} else {
lngui.UIWaitingLayout.hideWaiting();
lngui.UIPopupManager.instance.showPopup("OTP không đúng");
}
});
};
e.prototype.onClickFreeze = function() {
if (this.cbxFreeze.isChecked) {
this.cbxFreeze.isChecked = !0;
this.cbxOpenFreeze.isChecked = !1;
this.panelOTPSafe.active = !1;
this.cbxFreeze.interactable = !1;
this.cbxOpenFreeze.interactable = !0;
}
};
e.prototype.onClickOpenFreeze = function() {
if (this.cbxOpenFreeze.isChecked) {
this.cbxOpenFreeze.isChecked = !0;
this.cbxFreeze.isChecked = !1;
this.panelOTPSafe.active = !0;
this.cbxFreeze.interactable = !0;
this.cbxOpenFreeze.interactable = !1;
}
};
e.prototype.acceptFreeze = function() {
var t = this;
this.btnAccept.interactable = !1;
if (0 != this.edbMoneyFreeze.string.length) {
var e = this.toNumber(this.edbMoneyFreeze.string), n = this.cbxFreeze.isChecked ? c.LobbyConst.SETTING_ID.FROZEN : c.LobbyConst.SETTING_ID.UNFROZEN;
if (e <= 0) {
var o = [ lngui.PopupAction.make("OK", function() {
t.btnAccept.interactable = !0;
}) ];
lngui.UIPopupManager.instance.showPopup("Giá trị phải lớn hơn 0", o);
} else if (e > lngui.UserManager.instance.mainUserInfo.Money && n == c.LobbyConst.SETTING_ID.FROZEN) {
o = [ lngui.PopupAction.make("OK", function() {
t.btnAccept.interactable = !0;
}) ];
lngui.UIPopupManager.instance.showPopup("Giá trị phải nhỏ hơn hoặc bằng số dư của bạn", o);
} else if (e > this.frozenVal && n == c.LobbyConst.SETTING_ID.UNFROZEN) {
o = [ lngui.PopupAction.make("OK", function() {
t.btnAccept.interactable = !0;
}) ];
lngui.UIPopupManager.instance.showPopup("Giá trị phải nhỏ hơn hoặc bằng số dư đóng băng của bạn", o);
} else {
lngui.UIWaitingLayout.showWaiting();
var i = c.LobbyConst.API.URL + c.LobbyConst.API.FROZEB, r = {
accountId: lngui.UserManager.instance.mainUserInfo.AccountID,
amount: e,
isFrozen: n,
sourceId: c.LobbyConst.platform,
otp: this.edbOTPSafeStep2.string,
otpType: 1
}, a = c.getStringBodyByObject(r);
lngui.Https.get(i + a, function(e) {
lngui.UIWaitingLayout.hideWaiting();
if (e) {
var o = e, i = o.FrozenValue, r = o.Balance;
t.frozenVal = i;
lngui.UserManager.instance.mainUserInfo.Money = r;
t.lblFreezeBalance.string = lgui.StringUtils.formatNumber(i);
t.lblBalance.string = lgui.StringUtils.formatNumber(r);
t.edbOTPSafeStep2.string = "";
t.edbMoneyFreeze.string = "";
n == c.LobbyConst.SETTING_ID.FROZEN ? lngui.UIPopupManager.instance.showPopup("Bạn đã đóng băng thành công") : lngui.UIPopupManager.instance.showPopup("Bạn đã mở băng thành công");
lngui.EventDispatch.instance.emit(lngui.EVENT_GAMECORE.UPDATE_TOTAL_GOLD, r);
} else {
lngui.UIWaitingLayout.hideWaiting();
lngui.UIPopupManager.instance.showPopup(e);
}
t.btnAccept.interactable = !0;
});
}
} else lngui.UIPopupManager.instance.showPopup("Bạn chưa nhập số Coin");
};
e.prototype.toNumber = function(t) {
if (t.indexOf(",") >= 0) {
for (var e = t; e.indexOf(",") >= 0; ) e = e.replace(",", "");
return parseInt(e);
}
return parseInt(t);
};
e.prototype.requestOTP = function() {
var t = this, e = c.LobbyConst.API.URL + c.LobbyConst.API.GET_OTP;
lngui.Https.post(e, {
type: "frozen"
}, function(e) {
if (200 == e) {
t.btnGetOTP.interactable = !1;
t.scheduleOnce(function() {
t.btnGetOTP.interactable = !0;
}, 60);
}
});
};
r([ l(cc.Node) ], e.prototype, "panelOTPSafe", void 0);
r([ l(cc.Toggle) ], e.prototype, "cbxFreeze", void 0);
r([ l(cc.Toggle) ], e.prototype, "cbxOpenFreeze", void 0);
r([ l(cc.Label) ], e.prototype, "lblBalance", void 0);
r([ l(cc.Label) ], e.prototype, "lblFreezeBalance", void 0);
r([ l(cc.EditBox) ], e.prototype, "edbMoneyFreeze", void 0);
r([ l(cc.EditBox) ], e.prototype, "edbOTPSafeStep2", void 0);
r([ l(cc.Button) ], e.prototype, "btnAccept", void 0);
r([ l(cc.Button) ], e.prototype, "btnGetOTP", void 0);
return r([ p ], e);
}(lngui.UIPopup);
n.default = u;
cc._RF.pop();
}, {
"../LobbyConst": "LobbyConst",
"./MVUtils": "MVUtils"
} ],
GUIAccountSecurityNew: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "27a50sSsyhLlandscRFb+A+", "GUIAccountSecurityNew");
var o, i = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
})(t, e);
}, function(t, e) {
o(t, e);
function n() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n());
}), r = this && this.__decorate || function(t, e, n, o) {
var i, r = arguments.length, c = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, n, o); else for (var a = t.length - 1; a >= 0; a--) (i = t[a]) && (c = (r < 3 ? i(c) : r > 3 ? i(e, n, c) : i(e, n)) || c);
return r > 3 && c && Object.defineProperty(e, n, c), c;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var c = t("../LobbyConst"), a = cc._decorator, s = a.ccclass, p = a.property, l = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.NodeFAQ = null;
e.NodeRegOtp = null;
e.NodeOtpActive = null;
e.edbOtp = null;
e.otpBot = null;
e._phoneNumber = "";
e.g_isOTP = !1;
return e;
}
e.prototype.onEnable = function() {
if (0 == lngui.UserManager.instance.mainUserInfo.IsMobileActived) {
this.NodeRegOtp.active = !0;
this.NodeOtpActive.active = !1;
} else {
this.NodeRegOtp.active = !1;
this.NodeOtpActive.active = !0;
}
this.otpBot.string = this.convertTelegramLinkToUsername(lngui.ConfigManager.instance.ConfigInfo.BotOtp);
};
e.prototype.registerOTP = function() {
var t = this, e = this.edbOtp.string;
if (0 != e.length) {
var n = {
AccountName: lngui.UserManager.instance.mainUserInfo.UserName,
AccountId: lngui.UserManager.instance.mainUserInfo.AccountID,
Type: 1,
SecureCode: e,
Mobile: 123123
};
lngui.Https.post(c.LobbyConst.API.URL + c.LobbyConst.API.REG_MOBILE, n, function(e, n) {
if (e >= 200 && e < 400) {
lngui.UserManager.instance.mainUserInfo.IsMobileActived = !0;
lngui.UIPopupManager.instance.showPopup(n);
t.NodeRegOtp.active = !1;
t.NodeOtpActive.active = !0;
} else lngui.UIPopupManager.instance.showPopup(n);
});
} else lngui.UIPopupManager.instance.showPopup("Bạn chưa nhập mã OTP!");
};
e.prototype.deletaOTP = function() {
var t = this;
if (0 != this.edbOtp.string.length) {
var e = {
AccountName: lngui.UserManager.instance.mainUserInfo.UserName,
AccountId: lngui.UserManager.instance.mainUserInfo.AccountID,
Type: 2,
SecureCode: 987654,
Mobile: 123123
};
lngui.Https.post(c.LobbyConst.API.URL + c.LobbyConst.API.REG_MOBILE, e, function(e, n) {
if (e >= 200 && e < 400) {
lngui.UserManager.instance.mainUserInfo.IsMobileActived = !1;
lngui.UIPopupManager.instance.showPopup(n);
t.NodeRegOtp.active = !0;
t.NodeOtpActive.active = !1;
} else lngui.UIPopupManager.instance.showPopup(n);
});
} else lngui.UIPopupManager.instance.showPopup("Bạn chưa nhập mã OTP!");
};
e.prototype.touchGetOtpRegisterPhone = function() {};
e.prototype.convertTelegramLinkToUsername = function(t) {
return t ? t.replace(/^https?:\/\/t\.me\//, "@") : "";
};
e.prototype.btnshowfaq = function() {
this.NodeFAQ.active = !0;
};
e.prototype.btnhidefaq = function() {
this.NodeFAQ.active = !1;
};
r([ p(cc.Node) ], e.prototype, "NodeFAQ", void 0);
r([ p(cc.Node) ], e.prototype, "NodeRegOtp", void 0);
r([ p(cc.Node) ], e.prototype, "NodeOtpActive", void 0);
r([ p(cc.EditBox) ], e.prototype, "edbOtp", void 0);
r([ p(cc.Label) ], e.prototype, "otpBot", void 0);
return r([ s ], e);
}(lngui.UIPopup);
n.default = l;
cc._RF.pop();
}, {
"../LobbyConst": "LobbyConst"
} ],
GUIAccountSecurity: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "45a32kM0iRKY6Kqe7N+mRwQ", "GUIAccountSecurity");
var o, i = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
})(t, e);
}, function(t, e) {
o(t, e);
function n() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n());
}), r = this && this.__decorate || function(t, e, n, o) {
var i, r = arguments.length, c = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, n, o); else for (var a = t.length - 1; a >= 0; a--) (i = t[a]) && (c = (r < 3 ? i(c) : r > 3 ? i(e, n, c) : i(e, n)) || c);
return r > 3 && c && Object.defineProperty(e, n, c), c;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var c = t("../LobbyConst"), a = t("./MVUtils"), s = cc._decorator, p = s.ccclass, l = s.property, u = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.lblPhoneSMSPlus = null;
e.lblAccount = null;
e.lblTitleSMSPlus = null;
e.edbPhoneSMSPlus = null;
e.edbOTPRegisterAndDel = null;
e.panelRegisterSMSPlus = null;
e.btnGetOtpDeletePhone = null;
e.btnGetOtpRegisterPhone = null;
e.btnRegisterSMSPlus = null;
e.btnRemovePhoneSMSPlus = null;
e.btnUpdatePhoneSMSPlus = null;
e.btnBack = null;
e.btnDeleteMobile = null;
e._phoneNumber = "";
e.g_isOTP = !1;
return e;
}
e.prototype.onEnable = function() {
this.lblAccount.string = lngui.UserManager.instance.mainUserInfo.NickName;
this.setInfo();
};
e.prototype.setInfo = function() {
this.g_isOTP = lngui.UserManager.instance.mainUserInfo.IsMobileActived;
this._phoneNumber = lngui.UserManager.instance.mainUserInfo.Mobile || 0;
this.lblPhoneSMSPlus.string = this._phoneNumber;
this.g_isOTP ? this.showPanelSMSPlus(c.LobbyConst.SETTING_ID.SMSPLUS_INFO) : this._phoneNumber && this._phoneNumber.length > 0 ? this.showPanelSMSPlus(c.LobbyConst.SETTING_ID.SMSPLUS_REGISTER) : this.showPanelSMSPlus(c.LobbyConst.SETTING_ID.SMSPLUS_INFO);
};
e.prototype.showPanelSMSPlus = function(t) {
this.panelRegisterSMSPlus.active = !1;
this.edbOTPRegisterAndDel.string = "";
if (t == c.LobbyConst.SETTING_ID.SMSPLUS_DEL_PHONE) {
this.panelRegisterSMSPlus.active = !0;
this.lblTitleSMSPlus.string = "HỦY SỐ ĐIỆN THOẠI";
this.btnGetOtpDeletePhone.node.active = !0;
this.btnGetOtpRegisterPhone.node.active = !1;
this.btnRemovePhoneSMSPlus.node.active = !1;
this.btnUpdatePhoneSMSPlus.node.active = !1;
this.edbPhoneSMSPlus.node.active = !1;
this.btnBack.node.active = !0;
this.btnDeleteMobile.node.active = !0;
this.btnRegisterSMSPlus.node.active = !1;
this.btnRegisterSMSPlus.getComponent(cc.Button).clickEvents[0].customEventData = "3";
} else if (t == c.LobbyConst.SETTING_ID.SMSPLUS_REGISTER) {
this.panelRegisterSMSPlus.active = !0;
this.lblTitleSMSPlus.string = "ĐĂNG KÝ BẢO MẬT OTP";
this.btnRemovePhoneSMSPlus.node.active = !1;
this.btnUpdatePhoneSMSPlus.node.active = !1;
this.btnGetOtpDeletePhone.node.active = !1;
this.btnGetOtpRegisterPhone.node.active = !0;
this.edbPhoneSMSPlus.node.active = !1;
this.btnBack.node.active = !1;
this.btnDeleteMobile.node.active = !1;
this.btnRegisterSMSPlus.node.active = !0;
} else if (t == c.LobbyConst.SETTING_ID.SMSPLUS_INFO) {
this.btnBack.node.active = !1;
this.btnDeleteMobile.node.active = !1;
if (this.g_isOTP) {
this.lblTitleSMSPlus.string = "THÔNG TIN BẢO MẬT OTP";
this.lblPhoneSMSPlus.string = a.MVUtils.hideMiddle(this._phoneNumber, 2, 3);
this.edbPhoneSMSPlus.node.active = !1;
this.btnRemovePhoneSMSPlus.node.active = !1;
this.btnUpdatePhoneSMSPlus.node.active = !1;
} else if (this._phoneNumber && this._phoneNumber.length > 0) {
this.lblTitleSMSPlus.string = "THÔNG TIN BẢO MẬT OTP";
this.btnRemovePhoneSMSPlus.node.active = !1;
this.edbPhoneSMSPlus.node.active = !1;
} else {
this.lblTitleSMSPlus.string = "CẬP NHẬT THÔNG TIN BẢO MẬT OTP";
this.lblPhoneSMSPlus.string = "";
this.edbPhoneSMSPlus.node.active = !0;
this.edbPhoneSMSPlus.string = "";
this.btnRemovePhoneSMSPlus.node.active = !1;
this.btnUpdatePhoneSMSPlus.node.active = !0;
}
} else if (999 == t) {
this.lblTitleSMSPlus.string = "CẬP NHẬT THÔNG TIN BẢO MẬT OTP";
this.lblPhoneSMSPlus.string = "";
this.edbPhoneSMSPlus.node.active = !0;
this.edbPhoneSMSPlus.string = "";
this.btnRemovePhoneSMSPlus.node.active = !1;
this.btnUpdatePhoneSMSPlus.node.active = !0;
}
};
e.prototype.touchUpdate = function() {
var t = this, e = this.edbPhoneSMSPlus.string;
if (e.length < 10) lngui.UIPopupManager.instance.showPopup("Số điện thoại không hợp lệ!"); else {
var n = {
accountId: lngui.UserManager.instance.mainUserInfo.AccountID,
mobile: e
};
lngui.Https.post(c.LobbyConst.API.URL + c.LobbyConst.API.UPDATE_MOBILE, n, function(e, n) {
if (e >= 200 && e < 400) {
lngui.UIPopupManager.instance.showPopup("Cập nhật thông tin thành công!");
lngui.UserManager.instance.mainUserInfo.Mobile = n.Mobile;
lngui.UserManager.instance.mainUserInfo.IsMobileActived = n.IsMobileActived;
lngui.UserManager.instance.mainUserInfo.IsOtp = n.IsOTP;
t.setInfo();
} else lngui.UIPopupManager.instance.showPopup(n);
}, !0);
}
};
e.prototype.registerOTP = function(t, e) {
var n = this;
console.log(e);
var o = this.edbOTPRegisterAndDel.string, i = e;
if (0 != o.length) {
var r = {
AccountName: lngui.UserManager.instance.mainUserInfo.UserName,
AccountId: lngui.UserManager.instance.mainUserInfo.AccountID,
Type: parseInt(i),
SecureCode: o,
Mobile: this._phoneNumber
};
lngui.Https.post(c.LobbyConst.API.URL + c.LobbyConst.API.REG_MOBILE, r, function(t, e) {
if (t >= 200 && t < 400) {
var o = e;
lngui.UserManager.instance.mainUserInfo.Mobile = o.Mobile;
lngui.UserManager.instance.mainUserInfo.IsMobileActived = o.IsMobileActived;
lngui.UserManager.instance.mainUserInfo.IsOtp = o.IsOTP;
n.setInfo();
if (i == c.LobbyConst.SETTING_ID.SMSPLUS_REGISTER_TYPE) {
lngui.UIPopupManager.instance.showPopup("Đăng ký bảo mật thành công!");
n.showPanelSMSPlus(c.LobbyConst.SETTING_ID.SMSPLUS_INFO);
} else i == c.LobbyConst.SETTING_ID.SMSPLUS_DEL_OTP_TYPE && lngui.Https.post(c.LobbyConst.API.URL + c.LobbyConst.API.DELETE_MOBILE, {
accountId: lngui.UserManager.instance.mainUserInfo.AccountID,
mobile: lngui.UserManager.instance.mainUserInfo.Mobile
}, function(t, e) {
if (t >= 200 && t < 400) {
var n = [ lngui.PopupAction.make("OK", function() {
lngui.EventDispatch.instance.emit(lngui.EVENT_GAMECORE.LOGOUT);
}) ];
lngui.UIPopupManager.instance.showPopup("Hủy số điện thoại thành công!", n);
} else lngui.UIPopupManager.instance.showPopup(e);
});
} else lngui.UIPopupManager.instance.showPopup(e);
});
} else lngui.UIPopupManager.instance.showPopup("Bạn chưa nhập mã OTP!");
};
e.prototype.touchGetOtpRegisterPhone = function() {};
e.prototype.onShowPanelRemovePhone = function() {
this.showPanelSMSPlus(c.LobbyConst.SETTING_ID.SMSPLUS_DEL_PHONE);
};
r([ l(cc.Label) ], e.prototype, "lblPhoneSMSPlus", void 0);
r([ l(cc.Label) ], e.prototype, "lblAccount", void 0);
r([ l(cc.Label) ], e.prototype, "lblTitleSMSPlus", void 0);
r([ l(cc.EditBox) ], e.prototype, "edbPhoneSMSPlus", void 0);
r([ l(cc.EditBox) ], e.prototype, "edbOTPRegisterAndDel", void 0);
r([ l(cc.Node) ], e.prototype, "panelRegisterSMSPlus", void 0);
r([ l(cc.Button) ], e.prototype, "btnGetOtpDeletePhone", void 0);
r([ l(cc.Button) ], e.prototype, "btnGetOtpRegisterPhone", void 0);
r([ l(cc.Button) ], e.prototype, "btnRegisterSMSPlus", void 0);
r([ l(cc.Button) ], e.prototype, "btnRemovePhoneSMSPlus", void 0);
r([ l(cc.Button) ], e.prototype, "btnUpdatePhoneSMSPlus", void 0);
r([ l(cc.Button) ], e.prototype, "btnBack", void 0);
r([ l(cc.Button) ], e.prototype, "btnDeleteMobile", void 0);
return r([ p ], e);
}(lngui.UIPopup);
n.default = u;
cc._RF.pop();
}, {
"../LobbyConst": "LobbyConst",
"./MVUtils": "MVUtils"
} ],
GUIEventBigBang: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "902523ic5hBB4yIcUG7XBpS", "GUIEventBigBang");
var o, i = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
})(t, e);
}, function(t, e) {
o(t, e);
function n() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n());
}), r = this && this.__decorate || function(t, e, n, o) {
var i, r = arguments.length, c = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, n, o); else for (var a = t.length - 1; a >= 0; a--) (i = t[a]) && (c = (r < 3 ? i(c) : r > 3 ? i(e, n, c) : i(e, n)) || c);
return r > 3 && c && Object.defineProperty(e, n, c), c;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var c, a, s = t("./ItemGiftBigBang"), p = t("./ItemRankBigBang"), l = cc._decorator, u = l.ccclass, h = l.property;
(function(t) {
t[t.DAY = 0] = "DAY";
t[t.FINAL = 1] = "FINAL";
})(c || (c = {}));
(function(t) {
t[t.RANK = 0] = "RANK";
t[t.GIFT = 1] = "GIFT";
t[t.RULE = 2] = "RULE";
})(a || (a = {}));
var d = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.itemTempleRank = null;
e.itemTempleGift = null;
e.itemTempleDate = null;
e.listView = [];
e.ls_btn_tab_top = [];
e.ls_btn_tab_left = [];
e.lb_me = null;
e.dropDay = null;
e.lb_date = null;
return e;
}
e.prototype.start = function() {
this.itemTempleRank.active = !1;
this.itemTempleGift.active = !1;
this.itemTempleDate.active = !1;
this.lb_me.string = "";
this.lb_date.string = "Hôm nay";
this.loadListDate();
this.onClickTabLeft();
};
e.prototype.loadListRank = function(t) {
if (t) for (var e = 0; e < t.length; e++) {
var n = cc.instantiate(this.itemTempleRank).getComponent(p.default);
n.node.parent = this.listView[a.RANK].content;
n.node.active = !0;
n.setInfo(t[e], e + 1);
}
};
e.prototype.loadListGift = function(t) {
for (var e = 0; e < t.length; e++) {
var n = cc.instantiate(this.itemTempleGift).getComponent(s.default);
n.node.parent = this.listView[a.GIFT].content;
n.node.active = !0;
n.setInfo(t[e], e + 1);
}
};
e.prototype.loadListDate = function() {
var t = new Date();
if (t.getDate() > 5) {
this.dropDay.node.height = 250;
this.dropDay.node.y = -150;
} else {
this.dropDay.node.height = 40 * t.getDate();
this.dropDay.node.y = 0 - this.dropDay.node.height / 2 - 25;
}
for (var e = t.getDate(); e >= 1; e--) {
var n = e < 10 ? "0" + e : e, o = t.getMonth() + 1 < 10 ? "0" + (t.getMonth() + 1) : t.getMonth() + 1, i = t.getFullYear(), r = "" + i + o + n, c = cc.instantiate(this.itemTempleDate);
c.active = !0;
c.dataDate = r;
c.parent = this.dropDay.content;
c.getComponentInChildren(cc.Label).string = n + "/" + o + "/" + i;
var a = new cc.Component.EventHandler();
a.target = this.node;
a.component = "GUIEventBigBang";
a.handler = "onClickSelectDate";
c.getComponent(cc.Button).clickEvents = [ a ];
}
};
e.prototype.onClickSelectDate = function(t) {
this.listView[a.RANK].content.destroyAllChildren();
var e = t.target.dataDate, n = "https://api." + lngui.ConfigManager.instance.ConfigInfo.Api + "/api/Event/GetEventRaceVPDaily", o = {
token: lngui.UserManager.instance.mainUserInfo.GameToken,
recallCode: e
};
this.reloadListRank(n, o);
var i = e.slice(0, 4), r = e.slice(4, 6), c = e.slice(6, 8);
new Date().getDate() == parseInt(c) ? this.lb_date.string = "Hôm nay" : this.lb_date.string = c + "/" + r + "/" + i;
this.dropDay.node.active = !1;
};
e.prototype.onClickDropDate = function() {
this.dropDay.node.active = !this.dropDay.node.active;
};
e.prototype.onClickTabTop = function() {
if (this.ls_btn_tab_top[1].isChecked) {
this.lb_date.node.parent.active = !1;
this.listView[a.RANK].content.destroyAllChildren();
var t = "https://api." + lngui.ConfigManager.instance.ConfigInfo.Api + "/api/Event/GetEventRaceVPMonthly";
lngui.UserManager.instance.mainUserInfo.GameToken;
this.reloadListRank(t);
} else {
this.lb_date.node.parent.active = !0;
this.onClickSelectDate({
target: this.dropDay.content.children[0]
}, "");
}
};
e.prototype.reloadListRank = function(t) {
var e = this;
lngui.Https.get(t, function(t) {
if (t) {
e.loadListRank(t.LstEventHonors);
null == t.TotalVP ? e.lb_me.string = "Bạn chưa có hạng!" : null == t.TopNo ? e.lb_me.string = "Bạn chưa có hạng!" : e.lb_me.string = "Điểm của bạn <color=yellow>" + t.TotalVP + "</color>   Hạng <color=yellow>" + t.TopNo + "</color>";
} else console.log(t);
});
};
e.prototype.onClickTabLeft = function() {
var t = this;
this.listView[0].node.active = !1;
this.listView[1].node.active = !1;
this.listView[2].node.active = !1;
if (this.ls_btn_tab_left[0].isChecked) {
this.onClickTabTop();
this.listView[0].node.active = !0;
} else if (this.ls_btn_tab_left[1].isChecked) {
this.listView[1].node.active = !0;
this.listView[a.GIFT].content.destroyAllChildren();
var e = "https://api." + lngui.ConfigManager.instance.ConfigInfo.Api + "/api/Event/GetDailyRewardList";
lngui.UserManager.instance.mainUserInfo.GameToken;
lngui.Https.get(e, function(e) {
if (e) {
console.log("-=-=res gift   ", e);
e.List && t.loadListGift(e.List);
} else console.log(e);
});
} else this.listView[2].node.active = !0;
};
r([ h(cc.Node) ], e.prototype, "itemTempleRank", void 0);
r([ h(cc.Node) ], e.prototype, "itemTempleGift", void 0);
r([ h(cc.Node) ], e.prototype, "itemTempleDate", void 0);
r([ h([ cc.ScrollView ]) ], e.prototype, "listView", void 0);
r([ h([ cc.Toggle ]) ], e.prototype, "ls_btn_tab_top", void 0);
r([ h([ cc.Toggle ]) ], e.prototype, "ls_btn_tab_left", void 0);
r([ h(cc.RichText) ], e.prototype, "lb_me", void 0);
r([ h(cc.ScrollView) ], e.prototype, "dropDay", void 0);
r([ h(cc.Label) ], e.prototype, "lb_date", void 0);
return r([ u ], e);
}(lngui.UIPopup);
n.default = d;
cc._RF.pop();
}, {
"./ItemGiftBigBang": "ItemGiftBigBang",
"./ItemRankBigBang": "ItemRankBigBang"
} ],
GUIEventX3Nap: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "e2c7a960IZIcLR8JtQsG2yn", "GUIEventX3Nap");
var o, i = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
})(t, e);
}, function(t, e) {
o(t, e);
function n() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n());
}), r = this && this.__decorate || function(t, e, n, o) {
var i, r = arguments.length, c = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, n, o); else for (var a = t.length - 1; a >= 0; a--) (i = t[a]) && (c = (r < 3 ? i(c) : r > 3 ? i(e, n, c) : i(e, n)) || c);
return r > 3 && c && Object.defineProperty(e, n, c), c;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var c = t("./ItemNapX3"), a = cc._decorator, s = a.ccclass, p = a.property, l = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.template = null;
e.listView = null;
e.node_progress = null;
e.node_rule = null;
e.ls_btn_tab = [];
return e;
}
e.prototype.onEnable = function() {
var t = this;
this.template.active = !1;
this.listView.content.removeAllChildren();
lngui.Https.get("https://api.${lngui.ConfigManager.instance.ConfigInfo.Api}/api/Event/GetX3Infor", function(e) {
e && t.parseData(e);
});
};
e.prototype.parseData = function(t) {
console.log("-=-=parseData ", t);
if (1 == t.ResponseCode) {
for (var e = 0; e < t.List.length; e++) {
var n = cc.instantiate(this.template).getComponent(c.default);
n.node.active = !0;
n.updateInfo(t.List[e]);
n.node.parent = this.listView.content;
}
this.listView.vertical = t.List.length > 3;
}
};
e.prototype.onClickTab = function(t) {
for (var e = 0; e < this.ls_btn_tab.length; e++) {
var n = this.ls_btn_tab[e].children[0];
if (t.target === this.ls_btn_tab[e]) {
n.active = !0;
if (0 === e) {
this.node_progress.active = !0;
this.node_rule.active = !1;
} else {
this.node_progress.active = !1;
this.node_rule.active = !0;
}
} else n.active = !1;
}
};
r([ p(cc.Node) ], e.prototype, "template", void 0);
r([ p(cc.ScrollView) ], e.prototype, "listView", void 0);
r([ p(cc.Node) ], e.prototype, "node_progress", void 0);
r([ p(cc.Node) ], e.prototype, "node_rule", void 0);
r([ p([ cc.Node ]) ], e.prototype, "ls_btn_tab", void 0);
return r([ s ], e);
}(lngui.UIPopup);
n.default = l;
cc._RF.pop();
}, {
"./ItemNapX3": "ItemNapX3"
} ],
GUIGiftCode: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "9be5cKI7zJMq7+CMpvb7Ae2", "GUIGiftCode");
var o, i = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
})(t, e);
}, function(t, e) {
o(t, e);
function n() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n());
}), r = this && this.__decorate || function(t, e, n, o) {
var i, r = arguments.length, c = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, n, o); else for (var a = t.length - 1; a >= 0; a--) (i = t[a]) && (c = (r < 3 ? i(c) : r > 3 ? i(e, n, c) : i(e, n)) || c);
return r > 3 && c && Object.defineProperty(e, n, c), c;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var c = t("../LobbyConst"), a = t("./utils/CapchaZ"), s = cc._decorator, p = s.ccclass, l = s.property, u = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.UICaptcha = null;
e.txtGiftCode = null;
e.txtCaptcha = null;
e.imgCaptcha = null;
e._codeType = 1;
return e;
}
e.prototype.initData = function(t, e) {
void 0 === e && (e = null);
this._codeType = c.LobbyConst.SETTING_ID.GIFT_CODE;
null != t && (this._codeType = t);
null != e && (this._uiid = e);
this.init();
};
e.prototype.init = function() {
var t = "";
this._codeType == c.LobbyConst.SETTING_ID.GIFT_CODE && (t = c.LobbyConst.StringDefine.INPUT_GIFT_CODE);
this.txtGiftCode.placeholder = t;
this.onRefreshCaptchaClicked();
};
e.prototype.setGiftcodeText = function(t) {
this.txtGiftCode.string = t;
};
e.prototype.touchBtnGiftcode = function() {
var t, e = this, n = this.txtGiftCode.string;
n = n.replace(" ", "");
var o = this.txtCaptcha.string;
if (n.length <= 0) this._codeType == c.LobbyConst.SETTING_ID.GIFT_CODE ? lngui.UIPopupManager.instance.showPopup(c.LobbyConst.StringDefine.INPUT_GIFT_CODE) : this._codeType == c.LobbyConst.SETTING_ID.VIP_CODE ? lngui.UIPopupManager.instance.showPopup(c.LobbyConst.StringDefine.INPUT_VIP_CODE) : this._codeType == c.LobbyConst.SETTING_ID.OTP && lngui.UIPopupManager.instance.showPopup(c.LobbyConst.StringDefine.INPUT_OTP); else {
lngui.UIWaitingLayout.showWaiting();
var i = {
accountId: lngui.UserManager.instance.mainUserInfo.AccountID,
accountName: lngui.UserManager.instance.mainUserInfo.UserName,
nickName: lngui.UserManager.instance.mainUserInfo.NickName,
giftcode: n,
captcha: o,
verifyCaptcha: this.UICaptcha.getCapChaId(),
uiid: this._uiid,
merchantKey: c.LobbyConst.MERCHANT_GIFTCODE.KEY,
merchantId: c.LobbyConst.MERCHANT_GIFTCODE.ID,
sourceId: c.LobbyConst.platform
}, r = c.getStringBodyByObject({
token: lngui.UserManager.instance.mainUserInfo.GameToken
});
t = c.LobbyConst.API.URL + c.LobbyConst.API.GIFT_CODE + r + c.LobbyConst.URL.Gate;
var a = cc.loader.getXMLHttpRequest();
a.onreadystatechange = function() {
if (4 == a.readyState) {
lngui.UIWaitingLayout.hideWaiting();
if (200 == a.status) e._codeType == c.LobbyConst.SETTING_ID.GIFT_CODE && e.onCheckGiftCode(a.responseText); else if (400 == a.status) {
lngui.UIPopupManager.instance.showPopup(a.responseText);
e.onRefreshCaptchaClicked();
} else if (e._codeType == c.LobbyConst.SETTING_ID.GIFT_CODE) {
lngui.UIPopupManager.instance.showPopup("Nhập GiftCode không thành công.\nVui lòng thử lại.");
e.onRefreshCaptchaClicked();
}
}
};
a.ontimeout = function() {
lngui.UIWaitingLayout.hideWaiting();
lngui.UIPopupManager.instance.showPopup(c.LobbyConst.StringDefine.STR_NETWORK_ERROR);
};
a.onerror = function() {
lngui.UIWaitingLayout.hideWaiting();
lngui.UIPopupManager.instance.showPopup(c.LobbyConst.StringDefine.STR_NETWORK_ERROR);
};
a.timeout = 3e4;
a.open("POST", t, !0);
a.setRequestHeader("Content-Type", "application/json");
a.withCredentials = !0;
a.send(JSON.stringify(i));
}
};
e.prototype.onCheckGiftCode = function(t) {
if (null != t) {
var e = JSON.parse(t);
if (e.Response >= 0) {
var n = "Chúc mừng bạn đã nhận được\n" + lngui.StringUtils.formatNumber(e.Response);
lngui.EventDispatch.instance.emit(lngui.EVENT_GAMECORE.UPDATE_TOTAL_GOLD, e.Balance);
var o = [ lngui.PopupAction.make("OK", function() {}) ];
lngui.UIPopupManager.instance.showPopup(n, o);
}
}
};
e.prototype.onRefreshCaptchaClicked = function() {
this.UICaptcha.refreshCapcha();
};
r([ l(a.default) ], e.prototype, "UICaptcha", void 0);
r([ l(cc.EditBox) ], e.prototype, "txtGiftCode", void 0);
r([ l(cc.EditBox) ], e.prototype, "txtCaptcha", void 0);
r([ l(cc.Sprite) ], e.prototype, "imgCaptcha", void 0);
return r([ p ], e);
}(cc.Component);
n.default = u;
cc._RF.pop();
}, {
"../LobbyConst": "LobbyConst",
"./utils/CapchaZ": "CapchaZ"
} ],
GUIOTP: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "1a890yymXtHIZDKEQ8N6vs+", "GUIOTP");
var o, i = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
})(t, e);
}, function(t, e) {
o(t, e);
function n() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n());
}), r = this && this.__decorate || function(t, e, n, o) {
var i, r = arguments.length, c = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, n, o); else for (var a = t.length - 1; a >= 0; a--) (i = t[a]) && (c = (r < 3 ? i(c) : r > 3 ? i(e, n, c) : i(e, n)) || c);
return r > 3 && c && Object.defineProperty(e, n, c), c;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var c = t("../LobbyConst"), a = cc._decorator, s = a.ccclass, p = a.property, l = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.txtOTP = null;
e.btnGetOtpSms = null;
e.otpToken = null;
e.serviceId = null;
e.otpType = 1;
return e;
}
e.prototype.initData = function(t, e) {
this.otpToken = t;
this.serviceId = e;
this.initUI();
};
e.prototype.initUI = function() {
this.otpType = 1;
};
e.prototype.getOTP = function() {
var t = this;
this.btnGetOtpSms.interactable = !1;
var e = c.LobbyConst.API.URL + c.LobbyConst.API.GET_OTP_SMS;
3 == this.otpType && (e = c.LobbyConst.API.URL + c.LobbyConst.API.GET_OTP_TRANFER);
this.scheduleOnce(function() {
t.btnGetOtpSms.interactable = !0;
}, 3);
lngui.Https.get(e, function(t) {
if (cc.js.isNumber(t)) {
lngui.UIPopupManager.instance.showPopup("Hệ thống đã gửi mã OTP đến số điện thoại của bạn");
lngui.EventDispatch.instance.emit(lngui.EVENT_GAMECORE.UPDATE_TOTAL_GOLD, t);
} else lngui.UIPopupManager.instance.showPopup(t);
});
};
e.prototype.touchXacThuc = function() {
var t = this, e = this.txtOTP.string;
if (0 != e.length) {
var n = {
Otp: e,
OtpType: this.otpType,
OtpToken: this.otpToken,
ServiceId: this.serviceId
}, o = c.getStringBodyByObject({
token: lngui.UserManager.instance.mainUserInfo.GameToken
}), i = c.LobbyConst.API.URL + c.LobbyConst.API.CHECK_OTP + o;
lngui.UIWaitingLayout.showWaiting();
var r = cc.loader.getXMLHttpRequest();
r.onreadystatechange = function() {
if (4 == r.readyState) {
lngui.UIWaitingLayout.hideWaiting();
if (200 == r.status) {
lngui.UIPopupManager.instance.showPopup(r.responseText);
t.hide();
} else r.responseText.length > 0 ? lngui.UIPopupManager.instance.showPopup(r.responseText) : lngui.UIPopupManager.instance.showPopup("Kiểm tra OTP không thành công, Vui lòng thử lại!");
}
};
r.ontimeout = function() {
lngui.UIPopupManager.instance.showPopup("Kiểm tra OTP không thành công, kiểm tra kết nối internet của bạn!");
lngui.UIWaitingLayout.hideWaiting();
};
r.onerror = function() {
lngui.UIPopupManager.instance.showPopup("Kiểm tra OTP không thành công. Vui lòng thử lại!");
lngui.UIWaitingLayout.hideWaiting();
};
r.timeout = 3e4;
r.open("POST", i, !0);
r.setRequestHeader("Content-Type", "application/json");
r.withCredentials = !0;
r.send(JSON.stringify(n));
} else lngui.UIPopupManager.instance.showPopup("Bạn chưa nhập mã OTP");
};
r([ p(cc.EditBox) ], e.prototype, "txtOTP", void 0);
r([ p(cc.Button) ], e.prototype, "btnGetOtpSms", void 0);
return r([ s ], e);
}(lngui.UIPopup);
n.default = l;
cc._RF.pop();
}, {
"../LobbyConst": "LobbyConst"
} ],
GUISettingCtrl: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "eb28aej8ZpC7IBPcvjreNwP", "GUISettingCtrl");
var o, i = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
})(t, e);
}, function(t, e) {
o(t, e);
function n() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n());
}), r = this && this.__decorate || function(t, e, n, o) {
var i, r = arguments.length, c = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, n, o); else for (var a = t.length - 1; a >= 0; a--) (i = t[a]) && (c = (r < 3 ? i(c) : r > 3 ? i(e, n, c) : i(e, n)) || c);
return r > 3 && c && Object.defineProperty(e, n, c), c;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var c = cc._decorator, a = c.ccclass, s = c.property, p = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.cbSound = null;
e.cbMusic = null;
return e;
}
e.prototype.onCbSound = function(t) {
lngui.AudioManager.instance.sfxVolume = t.isChecked ? 1 : 0;
};
e.prototype.onCbMusic = function(t) {
lngui.AudioManager.instance.musicVolume = t.isChecked ? 1 : 0;
};
e.prototype.onEnable = function() {
var t = lngui.ClientData.getNumber("music", 1), e = lngui.ClientData.getNumber("sfx", 1);
0 == t ? this.cbMusic.uncheck() : this.cbMusic.check();
0 == e ? this.cbSound.uncheck() : this.cbSound.check();
};
e.prototype.clcickHide = function() {
this.node.active = !1;
};
e.prototype.clcicShow = function() {
this.node.active = !0;
};
r([ s(cc.Toggle) ], e.prototype, "cbSound", void 0);
r([ s(cc.Toggle) ], e.prototype, "cbMusic", void 0);
return r([ a ], e);
}(lngui.UIPopup);
n.default = p;
cc._RF.pop();
}, {} ],
GUITopJackpotCtrl: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "e4903cXk/RKWIdtsKgPq6fc", "GUITopJackpotCtrl");
var o, i = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
})(t, e);
}, function(t, e) {
o(t, e);
function n() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n());
}), r = this && this.__decorate || function(t, e, n, o) {
var i, r = arguments.length, c = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, n, o); else for (var a = t.length - 1; a >= 0; a--) (i = t[a]) && (c = (r < 3 ? i(c) : r > 3 ? i(e, n, c) : i(e, n)) || c);
return r > 3 && c && Object.defineProperty(e, n, c), c;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var c = t("../LobbyConst"), a = t("./game_icon/BundleMiniGame"), s = t("./game_icon/BundleSceneGame"), p = t("./ItemTopJackpotCtrl"), l = t("./utils/Lobby_UITableView"), u = cc._decorator, h = u.ccclass, d = u.property, f = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.tbvJackpot = null;
e.listIconDownLoad = [];
e._dataOld = new Map();
e._data = [];
return e;
}
e.prototype.numberOfCellsInTableView = function() {
return this._data.length || 0;
};
e.prototype.tableCellAtIndex = function(t, e) {
var n = t.dequeueCell(), o = n.getComponent(p.default), i = this._data[e], r = this._dataOld.get(e);
r = r || 0;
o.lbJackpot.data = r;
o.lbJackpot.setString(lngui.StringUtils.formatNumber(r));
this._dataOld.set(e, this._data[e].jackpot);
o.setData(i.gameID, this._data[e].jackpot);
return n;
};
e.prototype.onTabbarSelected = function() {
if (this.tbvJackpot && this.tbvJackpot._isOnLoadCalled) {
this.refreshData();
this.tbvJackpot.reloadData();
this.tbvJackpot.scrollToTop(!1);
}
};
e.prototype.onEnable = function() {
this.tbvJackpot.dataSource = this;
lngui.EventDispatch.instance.add(c.LobbyConst.EVENT_NAME.EVENT_UPDATE_JACKPOT, this.onUpdateListJackpot, this);
lngui.EventDispatch.instance.add(c.LobbyConst.EVENT_NAME.BUNDLE_DOWNLOAD_FROM_ITEM_JACKPOT, this.onDownloadGameFromItem, this);
this.node.on(lngui.ControlEvent.TabbarItemSelected, this.onTabbarSelected, this);
this.onUpdateListJackpot();
};
e.prototype.onDisable = function() {
lngui.EventDispatch.instance.remove(c.LobbyConst.EVENT_NAME.EVENT_UPDATE_JACKPOT, this.onUpdateListJackpot, this);
lngui.EventDispatch.instance.remove(c.LobbyConst.EVENT_NAME.BUNDLE_DOWNLOAD_FROM_ITEM_JACKPOT, this.onDownloadGameFromItem, this);
this.node.off(lngui.ControlEvent.TabbarItemSelected, this.onTabbarSelected, this);
};
e.prototype.onDownloadGameFromItem = function(t) {
this.listIconDownLoad.forEach(function(e) {
if (e) {
var n = e.getComponent(a.default) && e.getComponent(a.default).gameID, o = e.getComponent(s.default) && e.getComponent(s.default).gameID;
if (n && n == t || o && o == t) {
e.getComponent(a.default) && e.getComponent(a.default)._onClicked();
e.getComponent(s.default) && e.getComponent(s.default)._onClicked();
}
}
});
};
e.prototype.refreshData = function() {
var t = c.LobbyConst.slotByKeys;
this._data = [];
var e = [], n = Math.max(this.node.getComponent("UITabbarController").curSelectedIndex, 0);
t.forEach(function(t, o) {
t.length - 1 >= n && e.push({
gameID: o,
jackpot: t[n]
});
});
this._data = e.sort(function(t, e) {
return e.jackpot - t.jackpot;
});
};
e.prototype.onUpdateListJackpot = function() {
this.refreshData();
this.tbvJackpot.reloadData();
};
r([ d(l.default) ], e.prototype, "tbvJackpot", void 0);
r([ d(cc.Node) ], e.prototype, "listIconDownLoad", void 0);
return r([ h ], e);
}(cc.Component);
n.default = f;
cc._RF.pop();
}, {
"../LobbyConst": "LobbyConst",
"./ItemTopJackpotCtrl": "ItemTopJackpotCtrl",
"./game_icon/BundleMiniGame": "BundleMiniGame",
"./game_icon/BundleSceneGame": "BundleSceneGame",
"./utils/Lobby_UITableView": "Lobby_UITableView"
} ],
GUITopupBankManual: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "f998809LCRBorWJUmvHKdwm", "GUITopupBankManual");
var o, i = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
})(t, e);
}, function(t, e) {
o(t, e);
function n() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n());
}), r = this && this.__decorate || function(t, e, n, o) {
var i, r = arguments.length, c = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, n, o); else for (var a = t.length - 1; a >= 0; a--) (i = t[a]) && (c = (r < 3 ? i(c) : r > 3 ? i(e, n, c) : i(e, n)) || c);
return r > 3 && c && Object.defineProperty(e, n, c), c;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
n.Spinner = void 0;
var c = t("../LobbyConst"), a = t("./MVUtils"), s = cc._decorator, p = s.ccclass, l = s.property, u = function() {
function t() {
this.container = null;
this.itemTemplate = null;
this.node = null;
this.type = -1;
}
t.prototype.setInfo = function(t, e, n) {
var o = this;
this.container.children.forEach(function(t) {
t.active = !1;
});
for (var i = function(i) {
var c = r.container.children[i];
c || ((c = cc.instantiate(r.itemTemplate)).parent = r.container);
c.active = !0;
e(c, t[i]);
c.off(cc.Node.EventType.TOUCH_END);
c.on(cc.Node.EventType.TOUCH_END, function() {
n(t[i]);
o.node.active = !1;
});
}, r = this, c = 0; c < t.length; c++) i(c);
};
r([ l(cc.Node) ], t.prototype, "container", void 0);
r([ l(cc.Node) ], t.prototype, "itemTemplate", void 0);
r([ l(cc.Node) ], t.prototype, "node", void 0);
return r([ p("GuiTopupBank2.Spinner") ], t);
}();
n.Spinner = u;
var h = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.edbAmount = null;
e.edbsender = null;
e.edbnote = null;
e.lbTypeBank = null;
e.lbAccountId = null;
e.lbAccountName = null;
e.nodeSpiner = null;
e.nodeInfoTransfer = null;
e.nodeguide = null;
e._verifyCaptcha = null;
e.bank = null;
e.amount = 0;
e.listBank = [];
e.timeRemain = 30;
return e;
}
e.prototype.onLoad = function() {
var t = this;
this.nodeInfoTransfer.active = !1;
lngui.Https.get(c.LobbyConst.API.URL + c.LobbyConst.API.LIST_BANKMANUAL, function(e) {
console.log(e);
e ? t.listBank = e.Data : lngui.UIPopupManager.instance.showPopup("Có lỗi xảy ra");
});
};
e.prototype.start = function() {};
e.prototype.onClickChooseBank = function() {
var t = this;
this.nodeSpiner.node.active = !this.nodeSpiner.node.active;
this.nodeSpiner.setInfo(this.listBank, function(t, e) {
t.getComponentInChildren(cc.Label).string = e.BankName;
}, function(e) {
console.log(e);
t.lbTypeBank.string = e.BankName;
t.lbTypeBank.node.color = cc.Color.WHITE;
t.bank = e.Id;
t.lbAccountId.string = e.BankAccountNumber;
t.lbAccountName.string = e.BankAccountName;
t.nodeInfoTransfer.active = !0;
});
this.nodeSpiner.node.y = 367;
};
e.prototype.onEdbChange = function() {
var t = a.MVUtils.toInt(this.edbAmount.string);
t = Math.abs(t);
this.amount = t;
this.edbAmount.string = a.MVUtils.formatNumber(t);
cc.sys.isBrowser && this.edbAmount.focus();
};
e.prototype.onEnded = function() {
var t = this;
setTimeout(function() {
var e = a.MVUtils.toInt(t.edbAmount.string);
e = Math.abs(e);
t.edbAmount.string = a.MVUtils.formatNumber(e);
}, 500);
};
e.prototype.onClickConfirm = function() {
if ("" != this.edbAmount.string) if (a.MVUtils.toInt(this.edbAmount.string) < 1e4) lngui.UIPopupManager.instance.showPopup("Số tiền tối thiểu là 10.000"); else if (a.MVUtils.toInt(this.edbAmount.string) > 3e8) lngui.UIPopupManager.instance.showPopup("Số tiền tối đa là 300,000,000 Coin"); else if (null != this.bank) {
var t = c.LobbyConst.API.URL + c.LobbyConst.API.REQUEST_MANUALBANK + "?token=" + lngui.UserManager.instance.mainUserInfo.GameToken, e = {
os: c.LobbyConst.platform,
ManualBankId: this.bank,
Amount: this.edbAmount.string,
Code: this.edbnote.string,
SenderName: this.edbsender.string
};
lngui.Https.post(t, e, function(t, e) {
e.ResponseCode < 0 ? lngui.UIPopupManager.instance.showPopup(e.Description) : e && lngui.UIPopupManager.instance.showPopup(e);
});
} else lngui.UIPopupManager.instance.showPopup("Vui lòng chọn ngân hàng!"); else lngui.UIPopupManager.instance.showPopup("Vui lòng nhập số tiền!");
};
e.prototype.onClickCancel = function() {};
e.prototype.onBtnHuyBo = function() {
this.nodeInfoTransfer.active = !1;
};
e.prototype.onClickCopySTK = function() {
lngui.PlatformInterface.copy(this.lbAccountId.string);
};
e.prototype.clickshowguide = function() {
this.nodeguide.active = !0;
};
e.prototype.clickhideguide = function() {
this.nodeguide.active = !1;
};
r([ l(cc.EditBox) ], e.prototype, "edbAmount", void 0);
r([ l(cc.EditBox) ], e.prototype, "edbsender", void 0);
r([ l(cc.EditBox) ], e.prototype, "edbnote", void 0);
r([ l(cc.Label) ], e.prototype, "lbTypeBank", void 0);
r([ l(cc.Label) ], e.prototype, "lbAccountId", void 0);
r([ l(cc.Label) ], e.prototype, "lbAccountName", void 0);
r([ l(u) ], e.prototype, "nodeSpiner", void 0);
r([ l(cc.Node) ], e.prototype, "nodeInfoTransfer", void 0);
r([ l(cc.Node) ], e.prototype, "nodeguide", void 0);
return r([ p ], e);
}(cc.Component);
n.default = h;
cc._RF.pop();
}, {
"../LobbyConst": "LobbyConst",
"./MVUtils": "MVUtils"
} ],
GUITopupBank: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "6f83aop94JNioUx6gMraHaS", "GUITopupBank");
var o, i = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
})(t, e);
}, function(t, e) {
o(t, e);
function n() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n());
}), r = this && this.__decorate || function(t, e, n, o) {
var i, r = arguments.length, c = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, n, o); else for (var a = t.length - 1; a >= 0; a--) (i = t[a]) && (c = (r < 3 ? i(c) : r > 3 ? i(e, n, c) : i(e, n)) || c);
return r > 3 && c && Object.defineProperty(e, n, c), c;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
n.Spinner = void 0;
var c = t("../LobbyConst"), a = t("./MVUtils"), s = cc._decorator, p = s.ccclass, l = s.property, u = function() {
function t() {
this.container = null;
this.itemTemplate = null;
this.node = null;
this.type = -1;
}
t.prototype.setInfo = function(t, e, n) {
var o = this;
this.container.children.forEach(function(t) {
t.active = !1;
});
for (var i = function(i) {
var c = r.container.children[i];
c || ((c = cc.instantiate(r.itemTemplate)).parent = r.container);
c.active = !0;
e(c, t[i]);
c.off(cc.Node.EventType.TOUCH_END);
c.on(cc.Node.EventType.TOUCH_END, function() {
n(t[i]);
o.node.active = !1;
});
}, r = this, c = 0; c < t.length; c++) i(c);
};
r([ l(cc.Node) ], t.prototype, "container", void 0);
r([ l(cc.Node) ], t.prototype, "itemTemplate", void 0);
r([ l(cc.Node) ], t.prototype, "node", void 0);
return r([ p("GuiTopupBank.Spinner") ], t);
}();
n.Spinner = u;
var h = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.edbAmount = null;
e.QR = null;
e.lbTypeBank = null;
e.lbBigAmount = null;
e.lbAccountId = null;
e.lbAccountName = null;
e.lbTransferContent = null;
e.Timer = null;
e.nodeSpiner = null;
e.nodeInfoTransfer = null;
e.nodeStep1 = null;
e.lbStk = null;
e.lbBankName = null;
e.lbAccName = null;
e.lbContent = null;
e.SoTienVND = null;
e.nodeguide = null;
e.imgBank = [];
e._verifyCaptcha = null;
e.bank = null;
e.amount = 0;
e.listBank = [];
e.timeRemain = 30;
e.timerBank = 1800;
e.countdownInterval = null;
return e;
}
n = e;
e.prototype.onLoad = function() {
var t = this;
this.nodeInfoTransfer.active = !1;
lngui.Https.get(c.LobbyConst.API.URL + c.LobbyConst.API.LIST_BANK_IN, function(e) {
e ? t.listBank = e : lngui.UIPopupManager.instance.showPopup("Có lỗi xảy ra");
});
};
e.prototype.start = function() {};
e.prototype.onClickChooseBank = function() {
var t = this;
this.nodeSpiner.node.active = !this.nodeSpiner.node.active;
var e = (this.listBank || []).filter(function(t) {
return n.ALLOWED_BANK_SHORT_NAMES.indexOf(t.ShortName) >= 0;
});
this.nodeSpiner.setInfo(e, function(e, n) {
var o = e.getChildByName("sprBank");
if (o) {
var i = t.getIdxSprBank(n.ShortName);
o.getComponent(cc.Sprite).spriteFrame = t.imgBank[i];
}
}, function(e) {
t.lbTypeBank.string = e.Name;
t.lbTypeBank.node.color = cc.Color.WHITE;
t.bank = e.Code;
t.resetBank();
});
this.nodeSpiner.node.y = 262.9;
};
e.prototype.onEdbChange = function() {
var t = a.MVUtils.toInt(this.edbAmount.string);
t = Math.abs(t);
this.amount = t;
this.edbAmount.string = a.MVUtils.formatNumber(t);
this.lbBigAmount.string = a.MVUtils.formatNumber(t);
cc.sys.isBrowser && this.edbAmount.focus();
};
e.prototype.onEnded = function() {
var t = this;
setTimeout(function() {
var e = a.MVUtils.toInt(t.edbAmount.string);
e = Math.abs(e);
t.edbAmount.string = a.MVUtils.formatNumber(e);
}, 500);
};
e.prototype.onClickConfirm = function() {
var t = this;
if ("" != this.edbAmount.string) if (a.MVUtils.toInt(this.edbAmount.string) < 1e4) lngui.UIPopupManager.instance.showPopup("Số tiền tối thiểu là 10.000"); else if (a.MVUtils.toInt(this.edbAmount.string) > 3e8) lngui.UIPopupManager.instance.showPopup("Số tiền tối đa là 300,000,000"); else if (null != this.bank) {
var e = c.LobbyConst.API.URL + c.LobbyConst.API.REQUEST_BANK + "?access_token=" + lngui.UserManager.instance.mainUserInfo.GameToken + c.LobbyConst.URL.Gate, n = {
os: c.LobbyConst.platform,
amount: this.amount,
provider: this.bank
};
lngui.Https.post(e, n, function(e, n) {
if (n.ResponseCode < 0) lngui.UIPopupManager.instance.showPopup(n.Description); else if (n) {
t.lbStk.string = n.Data.BankNumber;
t.lbBankName.string = n.Data.BankName;
t.lbAccName.string = n.Data.BankAccountName;
t.lbContent.string = n.Data.Content;
t.SoTienVND.string = t.edbAmount.string + "VNĐ";
t.nodeInfoTransfer.active = !0;
t.nodeStep1.active = !1;
var o = n.Data.QrCode;
o = o.replace(/\r\n/g, "");
t.loadImgBinary(o);
t.startCountdown();
}
});
} else lngui.UIPopupManager.instance.showPopup("Vui lòng chọn ngân hàng!"); else lngui.UIPopupManager.instance.showPopup("Vui lòng nhập số tiền!");
};
e.prototype.resetBank = function() {
clearInterval(this.countdownInterval);
this.edbAmount.string = "";
this.nodeInfoTransfer.active = !1;
this.nodeStep1.active = !0;
};
e.prototype.onBtnHuyBo = function() {
this.nodeInfoTransfer.active = !1;
};
e.prototype.onClickCopySTK = function() {
lngui.PlatformInterface.copy(this.lbStk.string);
};
e.prototype.onClickCopyContent = function() {
lngui.PlatformInterface.copy(this.lbContent.string);
};
e.prototype.clickshowguide = function() {
this.nodeguide.active = !0;
};
e.prototype.clickhideguide = function() {
this.nodeguide.active = !1;
};
e.prototype.startCountdown = function() {
var t = this;
this.countdownInterval && clearInterval(this.countdownInterval);
this.Timer.string = "" + this.longToTime(this.timerBank);
this.countdownInterval = setInterval(function() {
t.timerBank--;
if (t.timerBank >= 0) t.Timer.string = "" + t.longToTime(t.timerBank); else {
clearInterval(t.countdownInterval);
t.onBtnHuyBo();
}
}, 1e3);
};
e.prototype.longToTime = function(t) {
var e = t % 60;
return "00:" + parseInt((t / 60).toString()) + ":" + (e < 10 ? "0" : "") + e;
};
e.prototype.getIdxSprBank = function(t) {
return n.ALLOWED_BANK_SHORT_NAMES.indexOf(t);
};
e.prototype.loadImgBinary = function(t) {
var e = "data:image/png;base64," + t, n = new Image();
n.width = 250;
n.height = 250;
var o = this;
n.onload = function() {
var t = new cc.Texture2D();
t.initWithElement(n);
t.handleLoadedTexture();
var e = new cc.SpriteFrame(t);
o.QR.spriteFrame = e;
};
n.src = e;
};
e.prototype.onDestroy = function() {
clearInterval(this.countdownInterval);
};
var n;
e.ALLOWED_BANK_SHORT_NAMES = [ "ACB", "TCB", "VCB", "VTB", "SAB", "BIDV", "TPB", "VPB", "MBB", "MSB" ];
r([ l(cc.EditBox) ], e.prototype, "edbAmount", void 0);
r([ l(cc.Sprite) ], e.prototype, "QR", void 0);
r([ l(cc.Label) ], e.prototype, "lbTypeBank", void 0);
r([ l(cc.Label) ], e.prototype, "lbBigAmount", void 0);
r([ l(cc.Label) ], e.prototype, "lbAccountId", void 0);
r([ l(cc.Label) ], e.prototype, "lbAccountName", void 0);
r([ l(cc.Label) ], e.prototype, "lbTransferContent", void 0);
r([ l(cc.Label) ], e.prototype, "Timer", void 0);
r([ l(u) ], e.prototype, "nodeSpiner", void 0);
r([ l(cc.Node) ], e.prototype, "nodeInfoTransfer", void 0);
r([ l(cc.Node) ], e.prototype, "nodeStep1", void 0);
r([ l(cc.Label) ], e.prototype, "lbStk", void 0);
r([ l(cc.Label) ], e.prototype, "lbBankName", void 0);
r([ l(cc.Label) ], e.prototype, "lbAccName", void 0);
r([ l(cc.Label) ], e.prototype, "lbContent", void 0);
r([ l(cc.Label) ], e.prototype, "SoTienVND", void 0);
r([ l(cc.Node) ], e.prototype, "nodeguide", void 0);
r([ l(cc.SpriteFrame) ], e.prototype, "imgBank", void 0);
return n = r([ p ], e);
}(cc.Component);
n.default = h;
cc._RF.pop();
}, {
"../LobbyConst": "LobbyConst",
"./MVUtils": "MVUtils"
} ],
GUITopupCrypto: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "ae5e3dOGIdFx4hlu+oKV9qK", "GUITopupCrypto");
var o, i = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
})(t, e);
}, function(t, e) {
o(t, e);
function n() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n());
}), r = this && this.__decorate || function(t, e, n, o) {
var i, r = arguments.length, c = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, n, o); else for (var a = t.length - 1; a >= 0; a--) (i = t[a]) && (c = (r < 3 ? i(c) : r > 3 ? i(e, n, c) : i(e, n)) || c);
return r > 3 && c && Object.defineProperty(e, n, c), c;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var c = cc._decorator, a = c.ccclass, s = c.property, p = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.diachivi = null;
e.nodeNapRut = [];
return e;
}
e.prototype.clickNapRut = function() {
if (1 == this.nodeNapRut[0].active) {
this.nodeNapRut[0].active = !1;
this.nodeNapRut[1].active = !0;
} else {
this.nodeNapRut[0].active = !0;
this.nodeNapRut[1].active = !1;
}
};
e.prototype.btnCopy = function() {
lngui.PlatformInterface.copy(this.diachivi.string);
};
e.prototype.btnConfirm = function() {
lngui.UIPopupManager.instance.showPopup("Vui lòng đợi ít phút để hệ thống xác nhận!");
};
e.prototype.btnConfirmRut = function() {
lngui.UIPopupManager.instance.showPopup("Vui lòng đợi ít phút để hệ thống xác nhận!!");
};
r([ s(cc.Label) ], e.prototype, "diachivi", void 0);
r([ s(cc.Node) ], e.prototype, "nodeNapRut", void 0);
return r([ a ], e);
}(cc.Component);
n.default = p;
cc._RF.pop();
}, {} ],
GUITopupCtrl: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "32701gpeuBPPb09K5EcN62J", "GUITopupCtrl");
var o, i = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
})(t, e);
}, function(t, e) {
o(t, e);
function n() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n());
}), r = this && this.__decorate || function(t, e, n, o) {
var i, r = arguments.length, c = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, n, o); else for (var a = t.length - 1; a >= 0; a--) (i = t[a]) && (c = (r < 3 ? i(c) : r > 3 ? i(e, n, c) : i(e, n)) || c);
return r > 3 && c && Object.defineProperty(e, n, c), c;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var c = cc._decorator, a = c.ccclass, s = c.property, p = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.nodeWebView = null;
return e;
}
e.prototype.onEnable = function() {
this.nodeWebView && this.scheduleOnce(function() {
lngui.UIWebViewManager.showAll();
}, 1);
};
r([ s(cc.Node) ], e.prototype, "nodeWebView", void 0);
return r([ a ], e);
}(lngui.UIPopup);
n.default = p;
cc._RF.pop();
}, {} ],
GUITopupEWallet: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "3ed3c3pD0dI3oRCO5rUdcbj", "GUITopupEWallet");
var o, i = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
})(t, e);
}, function(t, e) {
o(t, e);
function n() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n());
}), r = this && this.__decorate || function(t, e, n, o) {
var i, r = arguments.length, c = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, n, o); else for (var a = t.length - 1; a >= 0; a--) (i = t[a]) && (c = (r < 3 ? i(c) : r > 3 ? i(e, n, c) : i(e, n)) || c);
return r > 3 && c && Object.defineProperty(e, n, c), c;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
n.Spinner = void 0;
var c = t("../LobbyConst"), a = t("./MVUtils"), s = cc._decorator, p = s.ccclass, l = s.property, u = function() {
function t() {
this.container = null;
this.itemTemplate = null;
this.node = null;
this.type = -1;
}
t.prototype.setInfo = function(t, e, n) {
var o = this;
this.container.children.forEach(function(t) {
t.active = !1;
});
for (var i = function(i) {
var c = r.container.children[i];
c || ((c = cc.instantiate(r.itemTemplate)).parent = r.container);
c.active = !0;
e(c, t[i]);
c.off(cc.Node.EventType.TOUCH_END);
c.on(cc.Node.EventType.TOUCH_END, function() {
n(t[i]);
o.node.active = !1;
});
}, r = this, c = 0; c < t.length; c++) i(c);
};
r([ l(cc.Node) ], t.prototype, "container", void 0);
r([ l(cc.Node) ], t.prototype, "itemTemplate", void 0);
r([ l(cc.Node) ], t.prototype, "node", void 0);
return r([ p("GUITopupEWallet.Spinner") ], t);
}();
n.Spinner = u;
var h = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.edbAmount = null;
e.edbCaptcha = null;
e.sprCaptcha = null;
e.nodeSpiner = null;
e.nodeCode = null;
e.btnTaoMa = null;
e.lbBocAmount = null;
e.lbSdt = null;
e.lbAccName = null;
e.lbContent = null;
e.lbTypeBank = null;
e.lbTypeVi = null;
e.Timer = null;
e.QR = null;
e._verifyCaptcha = null;
e.bank = null;
e.amount = 0;
e.listBank = [];
e.timeRemain = 30;
e.timerBank = 7200;
e.countdownInterval = null;
return e;
}
e.prototype.onLoad = function() {
this.nodeCode.active = !1;
};
e.prototype.start = function() {};
e.prototype.onClickRefreshCaptcha = function() {
this.sprCaptcha.node.getComponent("CapchaZ").refreshCapcha();
};
e.prototype.onEdbChange = function() {
var t = a.MVUtils.toInt(this.edbAmount.string);
t = Math.abs(t);
this.amount = t;
this.edbAmount.string = a.MVUtils.formatNumber(t);
this.lbBocAmount.string = this.edbAmount.string;
cc.sys.isBrowser && this.edbAmount.focus();
};
e.prototype.onEnded = function() {
var t = this;
setTimeout(function() {
var e = a.MVUtils.toInt(t.edbAmount.string);
e = Math.abs(e);
t.edbAmount.string = a.MVUtils.formatNumber(e);
}, 500);
};
e.prototype.onClickConfirm = function() {
var t = this;
if ("" != this.edbAmount.string) if (a.MVUtils.toInt(this.edbAmount.string) < 1e4) lngui.UIPopupManager.instance.showPopup("Số tiền tối thiểu là 10.000"); else if (a.MVUtils.toInt(this.edbAmount.string) > 1e7) lngui.UIPopupManager.instance.showPopup("Số tiền tối đa là 10.000.000"); else {
var e = c.LobbyConst.API.URL + c.LobbyConst.API.MOMO_REQUEST + "?token=" + lngui.UserManager.instance.mainUserInfo.GameToken, n = {
os: c.LobbyConst.platform,
amount: this.amount,
type: "momo"
};
lngui.Https.post(e, n, function(e, n) {
if (1 == n.ResponseCode) {
if (n) {
t.onClickTaoMa();
t.lbSdt.string = n.Data.Banknumber;
t.lbAccName.string = n.Data.Bankname;
t.lbContent.string = n.Data.Content;
var o = n.Data.QrCode;
o = o.replace(/\r\n/g, "");
t.loadImgBinary(o);
}
} else lngui.UIPopupManager.instance.showPopup(n.Description);
});
} else lngui.UIPopupManager.instance.showPopup("Vui lòng nhập số tiền!");
};
e.prototype.onClickTaoMa = function() {
this.btnTaoMa.active = !1;
this.nodeCode.active = !0;
this.edbAmount.node.active = !1;
this.onClickConfirm();
};
e.prototype.onBtnRefresh = function() {
lngui.UITextManager.showCenterNotification("Bạn chỉ có thể tạo mã mới sau 30 phút");
};
e.prototype.onClickCopySTK = function() {
lngui.PlatformInterface.copy(this.lbSdt.string);
};
e.prototype.onClickCopyContent = function() {
lngui.PlatformInterface.copy(this.lbContent.string);
};
e.prototype.clearInput = function() {
this.onClickRefreshCaptcha();
this.bank = null;
this.edbAmount.string = "";
this.edbCaptcha.string = "";
};
e.prototype.startCountdown = function() {
var t = this;
this.countdownInterval && clearInterval(this.countdownInterval);
this.Timer.string = "" + this.longToTime(this.timerBank);
this.countdownInterval = setInterval(function() {
t.timerBank--;
t.timerBank >= 0 ? t.Timer.string = "" + t.longToTime(t.timerBank) : clearInterval(t.countdownInterval);
}, 1e3);
};
e.prototype.loadImgBinary = function(t) {
var e = "data:image/png;base64," + t, n = new Image();
n.width = 250;
n.height = 250;
var o = this;
n.onload = function() {
var t = new cc.Texture2D();
t.initWithElement(n);
t.handleLoadedTexture();
var e = new cc.SpriteFrame(t);
o.QR.spriteFrame = e;
};
n.src = e;
};
e.prototype.longToTime = function(t) {
var e = Math.floor(t / 3600), n = Math.floor(t % 3600 / 60), o = t % 60, i = function(t) {
return (t < 10 ? "0" : "") + t;
};
return i(e) + ":" + i(n) + ":" + i(o);
};
e.prototype.onDestroy = function() {
clearInterval(this.countdownInterval);
};
r([ l(cc.EditBox) ], e.prototype, "edbAmount", void 0);
r([ l(cc.EditBox) ], e.prototype, "edbCaptcha", void 0);
r([ l(cc.Sprite) ], e.prototype, "sprCaptcha", void 0);
r([ l(u) ], e.prototype, "nodeSpiner", void 0);
r([ l(cc.Node) ], e.prototype, "nodeCode", void 0);
r([ l(cc.Node) ], e.prototype, "btnTaoMa", void 0);
r([ l(cc.Label) ], e.prototype, "lbBocAmount", void 0);
r([ l(cc.Label) ], e.prototype, "lbSdt", void 0);
r([ l(cc.Label) ], e.prototype, "lbAccName", void 0);
r([ l(cc.Label) ], e.prototype, "lbContent", void 0);
r([ l(cc.Label) ], e.prototype, "lbTypeBank", void 0);
r([ l(cc.Label) ], e.prototype, "lbTypeVi", void 0);
r([ l(cc.Label) ], e.prototype, "Timer", void 0);
r([ l(cc.Sprite) ], e.prototype, "QR", void 0);
return r([ p ], e);
}(cc.Component);
n.default = h;
cc._RF.pop();
}, {
"../LobbyConst": "LobbyConst",
"./MVUtils": "MVUtils"
} ],
GUITopupExchange: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "fefcdRa9qVKjLiaLguJ46lr", "GUITopupExchange");
var o, i = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
})(t, e);
}, function(t, e) {
o(t, e);
function n() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n());
}), r = this && this.__decorate || function(t, e, n, o) {
var i, r = arguments.length, c = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, n, o); else for (var a = t.length - 1; a >= 0; a--) (i = t[a]) && (c = (r < 3 ? i(c) : r > 3 ? i(e, n, c) : i(e, n)) || c);
return r > 3 && c && Object.defineProperty(e, n, c), c;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
n.TabCashCard = n.Spinner = void 0;
var c = t("../LobbyConst"), a = t("./MVUtils"), s = cc._decorator, p = s.ccclass, l = s.property, u = function() {
function t() {
this.container = null;
this.itemTemplate = null;
this.thisNode = null;
this.type = -1;
}
t.prototype.setInfo = function(t, e, n) {
var o = this;
this.container.children.forEach(function(t) {
t.active = !1;
});
for (var i = function(i) {
var c = r.container.children[i];
c || ((c = cc.instantiate(r.itemTemplate)).parent = r.container);
c.active = !0;
e(c, t[i]);
c.off(cc.Node.EventType.TOUCH_END);
c.on(cc.Node.EventType.TOUCH_END, function() {
n(t[i]);
o.thisNode.active = !1;
});
}, r = this, c = 0; c < t.length; c++) i(c);
};
r([ l(cc.Node) ], t.prototype, "container", void 0);
r([ l(cc.Node) ], t.prototype, "itemTemplate", void 0);
r([ l(cc.Node) ], t.prototype, "thisNode", void 0);
return r([ p("GuiTopupExchange.Spinner") ], t);
}();
n.Spinner = u;
var h = function() {
function t() {
this.step1 = null;
this.sprCaptcha = null;
this._verifyCaptcha = null;
}
t.prototype.setInfo = function() {};
r([ l(cc.Node) ], t.prototype, "step1", void 0);
r([ l(cc.Sprite) ], t.prototype, "sprCaptcha", void 0);
return r([ p("GuiTopupExchange.TabCashCard") ], t);
}();
n.TabCashCard = h;
var d = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.nodeSpiner = null;
e.tabCashCard = null;
e.lbTypeCard = null;
e.lbRequiredChip = null;
e.lbValue = null;
e.sprCaptcha = null;
e.edbCaptcha = null;
e.pnlOTPVerify = null;
e.edbOTPVerify = null;
e.tiGiaContainer = null;
e.itemTiGiaTemplate = null;
e.nodeguide = null;
e.listProvider = [];
e.listCardRate = [];
e.provider = null;
e.currentCardValue = 0;
return e;
}
e.prototype.onLoad = function() {
var t = this;
0 == this.listProvider.length && lngui.Https.get(c.LobbyConst.API.URL + c.LobbyConst.API.CARD_TYPE, function(e) {
t.listProvider = e.Data;
});
0 == this.listCardRate.length && lngui.Https.get(c.LobbyConst.API.URL + c.LobbyConst.API.RATE_CARD, function(e) {
console.log(e.Data[0]);
console.log(e.Data[0].LstCashInDisplay);
if (e) {
var n = e.Data[0].LstCashInDisplay.filter(function(t) {
return t.Amount >= 2e5;
});
t.listCardRate = n;
}
t.ExchangeRate = e.Data[0].ExchangeRate;
t.loadListTiGia();
});
this.provider = "VT";
};
e.prototype.onClickChangeProvider = function(t, e) {
this.provider = e;
};
e.prototype.loadListTiGia = function() {
for (var t = this.listCardRate, e = 0; e < t.length; e++) {
var n = this.tiGiaContainer.children[e];
n || ((n = cc.instantiate(this.itemTiGiaTemplate)).parent = this.tiGiaContainer);
n.getChildByName("lblValue").getComponent(cc.Label).string = a.MVUtils.formatNumber(t[e].Amount);
n.getChildByName("lblBalance").getComponent(cc.Label).string = a.MVUtils.formatNumber(t[e].Amount * this.ExchangeRate);
}
};
e.prototype.onClickTypeCard = function() {
var t = this;
this.nodeSpiner.thisNode.active = !this.nodeSpiner.thisNode.active;
this.nodeSpiner.type = 0;
this.nodeSpiner.setInfo(this.listProvider, function(t, e) {
t.getComponentInChildren(cc.Label).string = e.cardTypeName;
}, function(e) {
t.lbTypeCard.string = e.cardTypeName;
t.provider = e.cardType;
});
this.nodeSpiner.thisNode.y = 394.026;
};
e.prototype.onClickValue = function() {
var t = this;
this.nodeSpiner.type = 1;
this.nodeSpiner.thisNode.active = !this.nodeSpiner.thisNode.active;
this.nodeSpiner.thisNode.y = 355;
this.nodeSpiner.setInfo(this.listCardRate, function(e, n) {
e.getComponentInChildren(cc.Label).string = ("VT" == t.provider ? "Viettel" : t.provider) + " " + a.MVUtils.formatNumber(n.Amount);
}, function(e) {
t.lbValue.string = ("VT" == t.provider ? "Viettel" : t.provider) + " " + a.MVUtils.formatNumber(e.Amount);
t.currentCardValue = e.Amount;
t.lbRequiredChip.string = a.MVUtils.formatNumber(e.Amount * t.ExchangeRate);
});
};
e.prototype.onClickConfirmExChange = function() {
var t = this;
if ("" != this.edbCaptcha.string) if (this.provider) if (0 != this.currentCardValue) {
var e = "";
"VT" == this.provider && (e = "VTT");
"Vina" == this.provider && (e = "VNP");
"Mobi" == this.provider && (e = "VMS");
var n = {
provider: e,
type: 0,
captchaText: this.edbCaptcha.string,
captchaToken: this.sprCaptcha.getComponent("CapchaZ").getCapChaId(),
amount: this.currentCardValue,
merchantId: 1,
sourceId: 1,
quantity: 1
};
lngui.Https.post(c.LobbyConst.API.URL + c.LobbyConst.API.MUA_THE, n, function(e, n) {
if (e >= 200 && e < 400) {
t.data = n;
t.pnlOTPVerify.getChildByName("pnlContent").getChildByName("lblCardType").getComponent(cc.Label).string = t.provider;
t.pnlOTPVerify.getChildByName("pnlContent").getChildByName("lblCardValue").getComponent(cc.Label).string = a.MVUtils.formatNumber(t.currentCardValue);
t.pnlOTPVerify.getChildByName("pnlContent").getChildByName("lblBigDoi").getComponent(cc.Label).string = t.lbRequiredChip.string;
t.pnlOTPVerify.active = !0;
t.tabCashCard.step1.active = !1;
} else lngui.UIPopupManager.instance.showPopup(n);
});
} else lngui.UIPopupManager.instance.showPopup("Xin vui lòng chọn mệnh giá!"); else lngui.UIPopupManager.instance.showPopup("Xin vui lòng chọn nhà mạng!"); else lngui.UIPopupManager.instance.showPopup("Xin vui lòng nhập mã kiểm tra!");
};
e.prototype.onClickVerifyOTP = function() {
var t = this;
lngui.Https.post(c.LobbyConst.API.URL + c.LobbyConst.API.CHECK_OTP, {
Otp: this.edbOTPVerify.string,
OtpType: 1,
OtpToken: this.data.OtpToken,
ServiceId: 2001
}, function(e, n) {
if (200 == e) {
lngui.UIPopupManager.instance.showPopup("Rút thẻ thành công\nVui lòng đợi NPH duyệt!");
lngui.UserManager.instance.mainUserInfo.Money = lngui.UserManager.instance.mainUserInfo.Money - t.currentCardValue;
lngui.EventDispatch.instance.emit(lngui.EVENT_GAMECORE.UPDATE_TOTAL_GOLD, lngui.UserManager.instance.mainUserInfo.Money);
} else lngui.UIPopupManager.instance.showPopup(n);
});
};
e.prototype.onBtnHuy = function() {
this.tabCashCard.step1.active = !0;
this.pnlOTPVerify.active = !1;
};
e.prototype.onClickRefreshCaptcha = function() {
this.sprCaptcha.node.getComponent("CapchaZ").refreshCapcha();
};
e.prototype.onClickSendOTPSMS = function() {};
e.prototype.clickshowguide = function() {
this.nodeguide.active = !0;
};
e.prototype.clickhideguide = function() {
this.nodeguide.active = !1;
};
r([ l(u) ], e.prototype, "nodeSpiner", void 0);
r([ l(h) ], e.prototype, "tabCashCard", void 0);
r([ l(cc.Label) ], e.prototype, "lbTypeCard", void 0);
r([ l(cc.Label) ], e.prototype, "lbRequiredChip", void 0);
r([ l(cc.Label) ], e.prototype, "lbValue", void 0);
r([ l(cc.Sprite) ], e.prototype, "sprCaptcha", void 0);
r([ l(cc.EditBox) ], e.prototype, "edbCaptcha", void 0);
r([ l(cc.Node) ], e.prototype, "pnlOTPVerify", void 0);
r([ l(cc.EditBox) ], e.prototype, "edbOTPVerify", void 0);
r([ l(cc.Node) ], e.prototype, "tiGiaContainer", void 0);
r([ l(cc.Node) ], e.prototype, "itemTiGiaTemplate", void 0);
r([ l(cc.Node) ], e.prototype, "nodeguide", void 0);
return r([ p ], e);
}(cc.Component);
n.default = d;
cc._RF.pop();
}, {
"../LobbyConst": "LobbyConst",
"./MVUtils": "MVUtils"
} ],
GUITopupHistoryAllGame: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "62760o5vXBKybXWQZVvHxI1", "GUITopupHistoryAllGame");
var o, i = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
})(t, e);
}, function(t, e) {
o(t, e);
function n() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n());
}), r = this && this.__decorate || function(t, e, n, o) {
var i, r = arguments.length, c = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, n, o); else for (var a = t.length - 1; a >= 0; a--) (i = t[a]) && (c = (r < 3 ? i(c) : r > 3 ? i(e, n, c) : i(e, n)) || c);
return r > 3 && c && Object.defineProperty(e, n, c), c;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var c = t("../LobbyConst"), a = t("./MVUtils"), s = cc._decorator, p = s.ccclass, l = s.property, u = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.scrHistory = null;
e.itemTemplate = null;
e.listHistory = [];
return e;
}
e.prototype.onLoad = function() {
var t = this;
lngui.UserManager.instance.mainUserInfo.AccountID;
lngui.UIWaitingLayout.showWaiting();
lngui.Https.get(c.LobbyConst.API.URL + c.LobbyConst.API.LIST_HISTORY_ALLGAME, function(e) {
lngui.UIWaitingLayout.hideWaiting();
e && t.loadListHistory(e);
});
};
e.prototype.loadListHistory = function(t) {
this.listHistory = t;
for (var e = 0; e < this.listHistory.length; e++) {
var n = this.listHistory[e], o = this.scrHistory.content.children[e];
if (!o) {
o = cc.instantiate(this.itemTemplate);
this.scrHistory.content.addChild(o);
}
o.active = !0;
var i = a.MVUtils.formatDateTime4(n.CreatedTime);
o.getChildByName("lbTime").getComponent(cc.Label).string = i;
o.getChildByName("lbService").getComponent(cc.Label).string = n.ServiceName;
if (n.Amount < 0) {
o.getChildByName("lbAmount").color = cc.Color.RED;
o.getChildByName("lbAmount").getComponent(cc.Label).string = a.MVUtils.formatNumber(n.Amount).toString();
} else {
o.getChildByName("lbAmount").color = cc.Color.GREEN;
o.getChildByName("lbAmount").getComponent(cc.Label).string = "+" + a.MVUtils.formatNumber(n.Amount).toString();
}
o.getChildByName("lbSubAmount").getComponent(cc.Label).string = a.MVUtils.formatNumber(n.SubAmount).toString();
o.getChildByName("lbDescription").getComponent(cc.Label).string = n.Description;
n.Description.length > 29 && (n.Description = n.Description.substring(0, 29) + "...");
}
};
e.prototype.start = function() {};
r([ l(cc.ScrollView) ], e.prototype, "scrHistory", void 0);
r([ l(cc.Node) ], e.prototype, "itemTemplate", void 0);
return r([ p ], e);
}(lngui.UIPopup);
n.default = u;
cc._RF.pop();
}, {
"../LobbyConst": "LobbyConst",
"./MVUtils": "MVUtils"
} ],
GUITopupHistoryBankManual: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "f9e60OJcYNGzbGLDcRuAlka", "GUITopupHistoryBankManual");
var o, i = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
})(t, e);
}, function(t, e) {
o(t, e);
function n() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n());
}), r = this && this.__decorate || function(t, e, n, o) {
var i, r = arguments.length, c = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, n, o); else for (var a = t.length - 1; a >= 0; a--) (i = t[a]) && (c = (r < 3 ? i(c) : r > 3 ? i(e, n, c) : i(e, n)) || c);
return r > 3 && c && Object.defineProperty(e, n, c), c;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var c = t("../LobbyConst"), a = t("./MVUtils"), s = cc._decorator, p = s.ccclass, l = s.property, u = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.scrHistory = null;
e.itemTemplate = null;
return e;
}
e.prototype.onLoad = function() {
this.requestHistory();
};
e.prototype.requestHistory = function() {
var t = this, e = c.LobbyConst.API.URL + c.LobbyConst.API.LIST_HISTORY_BANKMANUAL + "?token=" + lngui.UserManager.instance.mainUserInfo.GameToken;
lngui.Https.get(e, function(e) {
t.loadListHistory(e.Data);
});
};
e.prototype.loadListHistory = function(t) {
this.scrHistory.content.removeAllChildren(!0);
if (t && 0 != t.length) for (var e = 0; e < t.length; e++) {
var n = t[e], o = this.scrHistory.content.children[e];
if (!o) {
o = cc.instantiate(this.itemTemplate);
this.scrHistory.content.addChild(o);
}
o.active = !0;
o.getChildByName("lblSTT").getComponent(cc.Label).string = n.Id;
var i = n.CreatedDate;
i = (i = i.replace("T", " ")).substring(0, i.indexOf("."));
o.getChildByName("lblTime").getComponent(cc.Label).string = i;
o.getChildByName("lblCardType").getComponent(cc.Label).string = n.BankName;
o.getChildByName("lblCardValue").getComponent(cc.Label).string = a.MVUtils.formatNumber(n.Amount);
-1 == n.Status ? o.getChildByName("lblStatus").getComponent(cc.Label).string = n.Reason : 1 == n.Status ? o.getChildByName("lblStatus").getComponent(cc.Label).string = "Thành công" : "Đang chờ" == n.Status && (o.getChildByName("lblStatus").getComponent(cc.Label).string = "Đang chờ duyệt");
}
};
e.prototype.onCBXClick = function() {
this.requestHistory();
};
r([ l(cc.ScrollView) ], e.prototype, "scrHistory", void 0);
r([ l(cc.Node) ], e.prototype, "itemTemplate", void 0);
return r([ p ], e);
}(lngui.UIPopup);
n.default = u;
cc._RF.pop();
}, {
"../LobbyConst": "LobbyConst",
"./MVUtils": "MVUtils"
} ],
GUITopupHistoryNapRut_The: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "35e87dTkIhPw5M/THLmGLPe", "GUITopupHistoryNapRut_The");
var o, i = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
})(t, e);
}, function(t, e) {
o(t, e);
function n() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n());
}), r = this && this.__decorate || function(t, e, n, o) {
var i, r = arguments.length, c = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, n, o); else for (var a = t.length - 1; a >= 0; a--) (i = t[a]) && (c = (r < 3 ? i(c) : r > 3 ? i(e, n, c) : i(e, n)) || c);
return r > 3 && c && Object.defineProperty(e, n, c), c;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var c = t("../LobbyConst"), a = t("./MVUtils"), s = cc._decorator, p = s.ccclass, l = s.property, u = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.content = null;
e.itemTemplate = null;
e.txtPage = null;
e.inOut = 1;
e.dataChunkHistory = [];
e.currentIndexHistory = 0;
return e;
}
e.prototype.onLoad = function() {
this.requestHistory();
};
e.prototype.requestHistory = function() {
var t = this, e = c.LobbyConst.API.URL + c.LobbyConst.API.LIST_HISTORY + "?inOut=" + this.inOut + "&type=card";
lngui.Https.get(e, function(e) {
t.intDataHistory(e);
});
};
e.prototype.intDataHistory = function(t) {
this.currentIndexHistory = 0;
this.dataChunkHistory = a.MVUtils.splitArrayIntoChunks(t, 5);
this.refreshHistoryPage();
};
e.prototype.nextHistory = function() {
if (this.dataChunkHistory && 0 !== this.dataChunkHistory.length && !(this.currentIndexHistory >= this.dataChunkHistory.length - 1)) {
this.currentIndexHistory++;
this.refreshHistoryPage();
}
};
e.prototype.previousHistory = function() {
if (!(this.currentIndexHistory <= 0)) {
this.currentIndexHistory--;
this.refreshHistoryPage();
}
};
e.prototype.refreshHistoryPage = function() {
this.txtPage && (this.txtPage.string = (this.currentIndexHistory + 1).toString());
var t = this.dataChunkHistory[this.currentIndexHistory];
this.loadListHistory(t);
};
e.prototype.loadListHistory = function(t) {
var e = this;
this.content.removeAllChildren(!0);
if (t && 0 != t.length) {
t = t.filter(function(t) {
return t.InOut == e.inOut;
});
for (var n = 0; n < t.length; n++) {
var o = t[n], i = cc.instantiate(this.itemTemplate);
i.active = !0;
var r = a.MVUtils.formatDateTime4(o.CreateTime);
i.getChildByName("lblTime").getComponent(cc.Label).string = r;
i.getChildByName("lblAmount").getComponent(cc.Label).string = a.MVUtils.formatNumber(o.Amount);
var c = o.Content.split("-");
i.getChildByName("lblContent").getComponent(cc.Label).string = "Serial: " + c[0] + "\nCode: " + this.maskCodeCard(c[1]);
i.getChildByName("lblStatus").getComponent(cc.Label).string = o.StatusString;
1 == o.Status && (i.getChildByName("lblStatus").color = cc.Color.GREEN);
4 == n && (i.getChildByName("line").active = !1);
this.content.addChild(i);
}
}
};
e.prototype.maskCodeCard = function(t) {
return !t || t.length < 8 ? t : t.substring(0, 3) + "****" + t.substring(8);
};
e.prototype.onCBXClick = function() {
this.requestHistory();
};
r([ l(cc.Node) ], e.prototype, "content", void 0);
r([ l(cc.Node) ], e.prototype, "itemTemplate", void 0);
r([ l(cc.Label) ], e.prototype, "txtPage", void 0);
r([ l ], e.prototype, "inOut", void 0);
return r([ p ], e);
}(lngui.UIPopup);
n.default = u;
cc._RF.pop();
}, {
"../LobbyConst": "LobbyConst",
"./MVUtils": "MVUtils"
} ],
GUITopupHistoryNapRut: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "0f1edg/gHBB44ZE3KZnNhOB", "GUITopupHistoryNapRut");
var o, i = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
})(t, e);
}, function(t, e) {
o(t, e);
function n() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n());
}), r = this && this.__decorate || function(t, e, n, o) {
var i, r = arguments.length, c = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, n, o); else for (var a = t.length - 1; a >= 0; a--) (i = t[a]) && (c = (r < 3 ? i(c) : r > 3 ? i(e, n, c) : i(e, n)) || c);
return r > 3 && c && Object.defineProperty(e, n, c), c;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var c = t("../LobbyConst"), a = t("./MVUtils"), s = cc._decorator, p = s.ccclass, l = s.property, u = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.content = null;
e.itemTemplate = null;
e.txtPage = null;
e.inOut = 1;
e.dataChunkHistory = [];
e.currentIndexHistory = 0;
return e;
}
e.prototype.onLoad = function() {
this.requestHistory();
};
e.prototype.requestHistory = function() {
var t = this, e = c.LobbyConst.API.URL + c.LobbyConst.API.LIST_HISTORY + "?inOut=" + this.inOut + "&type=bank";
lngui.Https.get(e, function(e) {
t.intDataHistory(e);
});
};
e.prototype.intDataHistory = function(t) {
this.currentIndexHistory = 0;
this.dataChunkHistory = a.MVUtils.splitArrayIntoChunks(t, 5);
this.refreshHistoryPage();
};
e.prototype.nextHistory = function() {
if (this.dataChunkHistory && 0 !== this.dataChunkHistory.length && !(this.currentIndexHistory >= this.dataChunkHistory.length - 1)) {
this.currentIndexHistory++;
this.refreshHistoryPage();
}
};
e.prototype.previousHistory = function() {
if (!(this.currentIndexHistory <= 0)) {
this.currentIndexHistory--;
this.refreshHistoryPage();
}
};
e.prototype.refreshHistoryPage = function() {
this.txtPage && (this.txtPage.string = (this.currentIndexHistory + 1).toString());
var t = this.dataChunkHistory[this.currentIndexHistory];
this.loadListHistory(t);
};
e.prototype.loadListHistory = function(t) {
var e = this;
this.content.removeAllChildren(!0);
if (t && 0 != t.length) {
t = t.filter(function(t) {
return t.InOut == e.inOut;
});
for (var n = 0; n < t.length; n++) {
var o = t[n], i = cc.instantiate(this.itemTemplate);
i.active = !0;
var r = a.MVUtils.formatDateTime4(o.CreateTime);
i.getChildByName("lblTime").getComponent(cc.Label).string = r;
i.getChildByName("lblType").getComponent(cc.Label).string = o.Type;
i.getChildByName("lblAmount").getComponent(cc.Label).string = a.MVUtils.formatNumber(o.Amount);
i.getChildByName("lblContent").getComponent(cc.Label).string = o.Content;
i.getChildByName("lblBank").getComponent(cc.Label).string = null == o ? void 0 : o.Provider;
i.getChildByName("lblStatus").getComponent(cc.Label).string = o.StatusString;
1 == o.Status && (1 == this.inOut ? i.getChildByName("lblStatus").color = cc.Color.GREEN : i.getChildByName("lblStatus").color = cc.Color.YELLOW);
this.content.addChild(i);
}
}
};
e.prototype.onCBXClick = function() {
this.requestHistory();
};
r([ l(cc.Node) ], e.prototype, "content", void 0);
r([ l(cc.Node) ], e.prototype, "itemTemplate", void 0);
r([ l(cc.Label) ], e.prototype, "txtPage", void 0);
r([ l ], e.prototype, "inOut", void 0);
return r([ p ], e);
}(lngui.UIPopup);
n.default = u;
cc._RF.pop();
}, {
"../LobbyConst": "LobbyConst",
"./MVUtils": "MVUtils"
} ],
GUITopupRutBank: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "773aePSP/pNJZowO2fOnd+Y", "GUITopupRutBank");
var o, i = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
})(t, e);
}, function(t, e) {
o(t, e);
function n() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n());
}), r = this && this.__decorate || function(t, e, n, o) {
var i, r = arguments.length, c = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, n, o); else for (var a = t.length - 1; a >= 0; a--) (i = t[a]) && (c = (r < 3 ? i(c) : r > 3 ? i(e, n, c) : i(e, n)) || c);
return r > 3 && c && Object.defineProperty(e, n, c), c;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
n.Spinner = void 0;
var c = t("../LobbyConst"), a = t("./MVUtils"), s = cc._decorator, p = s.ccclass, l = s.property, u = function() {
function t() {
this.container = null;
this.itemTemplate = null;
this.node = null;
this.type = -1;
}
t.prototype.setInfo = function(t, e, n) {
var o = this;
this.container.children.forEach(function(t) {
t.active = !1;
});
for (var i = function(i) {
var c = r.container.children[i];
c || ((c = cc.instantiate(r.itemTemplate)).parent = r.container);
c.active = !0;
e(c, t[i]);
c.off(cc.Node.EventType.TOUCH_END);
c.on(cc.Node.EventType.TOUCH_END, function() {
n(t[i]);
o.node.active = !1;
});
}, r = this, c = 0; c < t.length; c++) i(c);
};
r([ l(cc.Node) ], t.prototype, "container", void 0);
r([ l(cc.Node) ], t.prototype, "itemTemplate", void 0);
r([ l(cc.Node) ], t.prototype, "node", void 0);
return r([ p("GUITopupRutBank.Spinner") ], t);
}();
n.Spinner = u;
var h = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.edbAmount = null;
e.edbSoTk = null;
e.edbChuTaiKhoan = null;
e.nodeSpiner = null;
e.lbTypeBank = null;
e.nodeguide = null;
e.imgBank = [];
e.bank = null;
e.listShortNameBank = [];
e.listBank = [];
return e;
}
e.prototype.onLoad = function() {
var t = this;
this.listShortNameBank = [ "ACB", "TCB", "VCB", "VTB", "SAB", "BIDV", "TPB", "VPB", "MBB", "MSB", "EIB", "OCB", "NCB", "HDB", "AGR", "LVPB", "BAB", "NAB", "SHB", "VB", "VCCB", "ABB", "KLB", "STB", "PVB" ];
lngui.Https.get(c.LobbyConst.API.URL + c.LobbyConst.API.LIST_BANK_OUT, function(e) {
e ? t.listBank = e.filter(function(e) {
return t.listShortNameBank.includes(e.ShortCode);
}) : lngui.UITextManager.showCenterNotification("Có lỗi xảy ra");
});
};
e.prototype.start = function() {};
e.prototype.onClickChooseBank = function() {
var t = this;
this.nodeSpiner.node.active = !this.nodeSpiner.node.active;
this.nodeSpiner.setInfo(this.listBank, function(e, n) {
var o = e.getChildByName("sprBank");
o && (o.getComponent(cc.Sprite).spriteFrame = t.imgBank[t.getIdxSprBank(n.ShortCode)]);
}, function(e) {
t.lbTypeBank.string = e.ShortName;
t.lbTypeBank.node.color = cc.Color.WHITE;
t.bank = e.Code;
});
this.nodeSpiner.node.y = 427;
};
e.prototype.onClickRutTien = function() {
var t = this;
if (parseInt(this.edbAmount.string.split(",").join("")) < 2e5) lngui.UITextManager.showCenterNotification("Số tiền rút tối thiểu là 200,000"); else if (parseInt(this.edbAmount.string.split(",").join("")) > 3e8) lngui.UITextManager.showCenterNotification("Số tiền rút tối thiểu là 300,000,000"); else if ("" != this.edbSoTk.string) if ("" != this.edbChuTaiKhoan.string) {
this.data = {
nickNameTrans: lngui.UserManager.instance.mainUserInfo.NickName,
transferValue: a.MVUtils.toInt(this.edbAmount.string),
sourceId: 1,
captchaText: "",
captchaToken: "",
bankAccountNumber: this.edbSoTk.string,
bankAccountName: a.MVUtils.removeVietnameseTones(this.edbChuTaiKhoan.string).toUpperCase(),
bankCode: this.bank,
transferType: 0
};
var e = this;
lngui.Https.post(c.LobbyConst.API.URL + c.LobbyConst.API.CAST_OUT, this.data, function(n, o) {
if (200 == n) {
e.data.OtpToken = o.OtpToken;
t.onClickVerifyOTP();
} else lngui.UITextManager.showCenterNotification(o);
});
} else lngui.UITextManager.showCenterNotification("Vui lòng điền Chủ Tài Khoản"); else lngui.UITextManager.showCenterNotification("Vui lòng điền Số Tài Khoản");
};
e.prototype.onClickVerifyOTP = function() {
var t = this;
lngui.Https.post(c.LobbyConst.API.URL + c.LobbyConst.API.CHECK_OTP, {
Otp: "",
OtpType: 1,
OtpToken: this.data.OtpToken,
ServiceId: 2005
}, function(e, n) {
if (200 == e) {
lngui.UIPopupManager.instance.showPopup("Tạo phiếu rút tiền thành công nhân viên sẽ xác nhận trong vòng 5 phút");
lngui.UserManager.instance.mainUserInfo.Money = lngui.UserManager.instance.mainUserInfo.Money - t.data.transferValue;
lngui.EventDispatch.instance.emit(lngui.EVENT_GAMECORE.UPDATE_TOTAL_GOLD, lngui.UserManager.instance.mainUserInfo.Money);
t.clearInput();
} else lngui.UITextManager.showCenterNotification(n);
});
};
e.prototype.onEdbChange = function() {
var t = a.MVUtils.toInt(this.edbAmount.string);
t = Math.abs(t);
this.edbAmount.string = a.MVUtils.formatNumber(t);
cc.sys.isBrowser && this.edbAmount.focus();
};
e.prototype.onEnded = function() {
var t = this;
setTimeout(function() {
var e = a.MVUtils.toInt(t.edbAmount.string);
e = Math.abs(e);
t.edbAmount.string = a.MVUtils.formatNumber(e);
}, 500);
};
e.prototype.getIdxSprBank = function(t) {
return this.listShortNameBank.indexOf(t);
};
e.prototype.onClickSendOTPSMS = function() {};
e.prototype.clearInput = function() {
this.edbAmount.string = "";
};
e.prototype.clickshowguide = function() {
this.nodeguide.active = !0;
};
e.prototype.clickhideguide = function() {
this.nodeguide.active = !1;
};
r([ l(cc.EditBox) ], e.prototype, "edbAmount", void 0);
r([ l(cc.EditBox) ], e.prototype, "edbSoTk", void 0);
r([ l(cc.EditBox) ], e.prototype, "edbChuTaiKhoan", void 0);
r([ l(u) ], e.prototype, "nodeSpiner", void 0);
r([ l(cc.Label) ], e.prototype, "lbTypeBank", void 0);
r([ l(cc.Node) ], e.prototype, "nodeguide", void 0);
r([ l(cc.SpriteFrame) ], e.prototype, "imgBank", void 0);
return r([ p ], e);
}(cc.Component);
n.default = h;
cc._RF.pop();
}, {
"../LobbyConst": "LobbyConst",
"./MVUtils": "MVUtils"
} ],
GUITopupTelco: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "d4303PCXcRKZrcQyq2peaWg", "GUITopupTelco");
var o, i = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
})(t, e);
}, function(t, e) {
o(t, e);
function n() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n());
}), r = this && this.__decorate || function(t, e, n, o) {
var i, r = arguments.length, c = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, n, o); else for (var a = t.length - 1; a >= 0; a--) (i = t[a]) && (c = (r < 3 ? i(c) : r > 3 ? i(e, n, c) : i(e, n)) || c);
return r > 3 && c && Object.defineProperty(e, n, c), c;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
n.Spinner = void 0;
var c = t("../LobbyConst"), a = t("./MVUtils"), s = cc._decorator, p = s.ccclass, l = s.property, u = function() {
function t() {
this.container = null;
this.itemTemplate = null;
this.thisNode = null;
this.type = -1;
}
t.prototype.setInfo = function(t, e, n) {
var o = this;
this.container.children.forEach(function(t) {
t.active = !1;
});
for (var i = function(i) {
var c = r.container.children[i];
c || ((c = cc.instantiate(r.itemTemplate)).parent = r.container);
c.active = !0;
e(c, t[i]);
c.off(cc.Node.EventType.TOUCH_END);
c.on(cc.Node.EventType.TOUCH_END, function() {
n(t[i]);
o.thisNode.active = !1;
});
}, r = this, c = 0; c < t.length; c++) i(c);
};
r([ l(cc.Node) ], t.prototype, "container", void 0);
r([ l(cc.Node) ], t.prototype, "itemTemplate", void 0);
r([ l(cc.Node) ], t.prototype, "thisNode", void 0);
return r([ p("GuiTopupTelco.Spinner") ], t);
}();
n.Spinner = u;
var h = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.nodeSpinner = null;
e.lbTypeCard = null;
e.lbValue = null;
e.tiGiaContainer = null;
e.itemTiGiaTemplate = null;
e.edbCaptcha = null;
e.edbCardCode = null;
e.edbCardSeri = null;
e.sprCaptcha = null;
e.nodeguide = null;
e.currentMenhGia = 0;
e.provider = null;
e._verifyCaptcha = "";
e.listProvider = [];
e.currentRateProvider = {};
e.rateCard = null;
return e;
}
e.prototype.onLoad = function() {
var t = this;
lngui.Https.get(c.LobbyConst.API.URL + c.LobbyConst.API.RATE_CARD, function(e) {
t.rateCard = e.Data[0];
});
lngui.Https.get(c.LobbyConst.API.URL + c.LobbyConst.API.CARD_TYPE, function(e) {
if (1 == e.ResponseCode) {
console.log(e.Data);
t.listProvider = e.Data;
t.currentRateProvider = t.listProvider[0];
}
t.loadListTiGia();
});
this.provider = "VT";
};
e.prototype.onClickChangeProvider = function(t, e) {
this.provider = e;
};
e.prototype.onClickValue = function() {
var t = this;
this.nodeSpinner.type = 1;
this.nodeSpinner.thisNode.active = !this.nodeSpinner.thisNode.active;
this.nodeSpinner.thisNode.y = 406;
var e = this.rateCard.LstCashInDisplay;
this.nodeSpinner.setInfo(e, function(e, n) {
e.getComponentInChildren(cc.Label).string = ("VT" == t.provider ? "Viettel" : t.provider) + " " + a.MVUtils.formatNumber(n.Amount);
}, function(e) {
cc.log("onClickValue");
t.lbValue.string = ("VT" == t.provider ? "Viettel" : t.provider) + " " + a.MVUtils.formatNumber(e.Amount);
t.currentMenhGia = e.Amount;
});
};
e.prototype.loadListTiGia = function() {
for (var t = this.currentRateProvider.List, e = 0; e < t.length; e++) {
var n = this.tiGiaContainer.children[e];
n || ((n = cc.instantiate(this.itemTiGiaTemplate)).parent = this.tiGiaContainer);
n.getChildByName("lblAmout").getComponent(cc.Label).string = a.MVUtils.formatNumber(t[e].Amount) + " VNĐ";
n.getChildByName("lblNo").getComponent(cc.Label).string = a.MVUtils.formatNumber(t[e].AmountReceive);
n.getChildByName("icMoney");
}
};
e.prototype.onClickConfirm = function() {
var t = this;
if (0 != this.currentMenhGia) if (null != this.provider) if ("" != this.edbCardCode.string && "" != this.edbCardSeri.string) {
this._verifyCaptcha = this.sprCaptcha.node.getComponent("CapchaZ").getCapChaId();
var e = this.edbCardSeri.string, n = this.edbCardCode.string, o = this.edbCaptcha.string, i = {
cardType: this.provider,
cardSerial: e,
amount: this.currentMenhGia,
cardPin: n,
captcha: o,
CardUserAmount: this.currentMenhGia,
verify: this._verifyCaptcha,
os: c.LobbyConst.platform
};
cc.log("Body==", JSON.stringify(i));
var r = c.LobbyConst.API.URL + c.LobbyConst.API.REQUEST_CARD;
lngui.Https.post(r, i, function(e, n) {
200 != e && 0 != n.ResponseCode || t.clearInput();
lngui.UIPopupManager.instance.showPopup(n.Description);
});
} else lngui.UIPopupManager.instance.showPopup("Vui lòng nhập đủ thông tin!"); else lngui.UIPopupManager.instance.showPopup("Vui lòng chọn loại thẻ!"); else lngui.UIPopupManager.instance.showPopup("Vui lòng chọn mệnh giá thẻ!");
};
e.prototype.onClickResetCaptcha = function() {
this.sprCaptcha.node.getComponent("CapchaZ").refreshCapcha();
};
e.prototype.clearInput = function() {
this.onClickResetCaptcha();
this.provider = null;
this.currentMenhGia = 0;
this.lbTypeCard.string = "Chọn nhà mạng";
this.lbValue.string = "Chọn mệnh giá";
this.edbCaptcha.string = "";
};
e.prototype.clickshowguide = function() {
this.nodeguide.active = !0;
};
e.prototype.clickhideguide = function() {
this.nodeguide.active = !1;
};
r([ l(u) ], e.prototype, "nodeSpinner", void 0);
r([ l(cc.Label) ], e.prototype, "lbTypeCard", void 0);
r([ l(cc.Label) ], e.prototype, "lbValue", void 0);
r([ l(cc.Node) ], e.prototype, "tiGiaContainer", void 0);
r([ l(cc.Node) ], e.prototype, "itemTiGiaTemplate", void 0);
r([ l(cc.EditBox) ], e.prototype, "edbCaptcha", void 0);
r([ l(cc.EditBox) ], e.prototype, "edbCardCode", void 0);
r([ l(cc.EditBox) ], e.prototype, "edbCardSeri", void 0);
r([ l(cc.Sprite) ], e.prototype, "sprCaptcha", void 0);
r([ l(cc.Node) ], e.prototype, "nodeguide", void 0);
return r([ p ], e);
}(cc.Component);
n.default = h;
cc._RF.pop();
}, {
"../LobbyConst": "LobbyConst",
"./MVUtils": "MVUtils"
} ],
GUITopupTranfers: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "ad5f9XP3mtEer426/J4XmR4", "GUITopupTranfers");
var o, i = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
})(t, e);
}, function(t, e) {
o(t, e);
function n() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n());
}), r = this && this.__decorate || function(t, e, n, o) {
var i, r = arguments.length, c = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, n, o); else for (var a = t.length - 1; a >= 0; a--) (i = t[a]) && (c = (r < 3 ? i(c) : r > 3 ? i(e, n, c) : i(e, n)) || c);
return r > 3 && c && Object.defineProperty(e, n, c), c;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var c = t("../LobbyConst"), a = t("./MVUtils"), s = cc._decorator, p = s.ccclass, l = s.property, u = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.edbTVN = null;
e.edbReTVN = null;
e.edbAmount = null;
e.edbContent = null;
e.lbFee = null;
e.lbBigReceive = null;
e.scrView = null;
e.transferLayer = null;
e.TichAgency = null;
e.edbOTPVerify = null;
e.ListVip = [];
e.btnGetOTP = null;
e.listAgency = [];
e.amount = 0;
e._verifyCaptcha = "";
return e;
}
e.prototype.onLoad = function() {};
e.prototype.start = function() {};
e.prototype.onEnable = function() {};
e.prototype.onDisable = function() {};
e.prototype.loadListAgency = function() {
for (var t = 0; t < this.listAgency.length; t++) {
var e = this.scrView.content.children[t], n = this.listAgency[t];
if (!e) {
e = cc.instantiate(this.scrView.content.children[0]);
this.scrView.content.addChild(e);
}
e.active = !0;
e.getChildByName("lbStt").getComponent(cc.Label).string = t + 1 + "";
e.getChildByName("lbName").getComponent(cc.Label).string = n.AgencyName;
e.getChildByName("lbNickName").getComponent(cc.Label).string = n.NickName;
e.getChildByName("btnSetNickname").getComponent(cc.Button).clickEvents[0].customEventData = n.NickName;
var o = e.getChildByName("rank").getComponent(cc.Sprite);
n.Vip > 0 ? o.spriteFrame = this.ListVip[n.Vip - 1] : o.spriteFrame = null;
}
};
e.prototype.onClickConfirm = function() {
var t = this;
if ("" != this.edbContent.string && "" != this.edbAmount.string && "" != this.edbReTVN.string && "" != this.edbTVN.string) if (this.edbTVN.string == this.edbReTVN.string) {
var e = this.edbContent.string;
this.data = {
accountIdTrans: lngui.UserManager.instance.mainUserInfo.AccountID,
nickNameTrans: lngui.UserManager.instance.mainUserInfo.NickName,
transferValue: this.amount,
nickNameRecv: this.edbReTVN.string,
sourceId: c.LobbyConst.platform,
captchaText: "",
captchaToken: this._verifyCaptcha,
transferType: 0,
reason: e,
Otp: this.edbOTPVerify.string,
OtpType: 1,
OtpToken: "",
ServiceId: 2002
};
lngui.Https.post(c.LobbyConst.API.URL + c.LobbyConst.API.REQUEST_TRANSFER, this.data, function(e, n) {
if (e >= 200 && e < 400) {
lngui.UIPopupManager.instance.showPopup("Chuyển khoản thành công");
lngui.UserManager.instance.mainUserInfo.Money = n;
lngui.EventDispatch.instance.emit(lngui.EVENT_GAMECORE.UPDATE_TOTAL_GOLD, lngui.UserManager.instance.mainUserInfo.Money);
t.reset();
} else lngui.UIPopupManager.instance.showPopup(n);
});
} else lngui.UIPopupManager.instance.showPopup("Vui lòng xác minh lại tên nhân vật!"); else lngui.UIPopupManager.instance.showPopup("Vui lòng nhập đủ thông tin!");
};
e.prototype.reset = function() {
this.edbAmount.string = "";
this.edbContent.string = "";
this.edbTVN.string = "";
this.edbOTPVerify.string = "";
this.edbReTVN.string = "";
this.lbBigReceive.string = "";
this.lbFee.string = "";
};
e.prototype.onEdbChange = function() {
var t = a.MVUtils.toInt(this.edbAmount.string);
t = Math.abs(t);
this.amount = t;
this.edbAmount.string = a.MVUtils.formatNumber(t);
this.lbFee.string = a.MVUtils.formatNumber(Math.floor(.02 * t));
this.lbBigReceive.string = a.MVUtils.formatNumber(Math.floor(.98 * t));
cc.sys.isBrowser && this.edbAmount.focus();
};
e.prototype.CheckAgency = function() {
var t = this, e = this.listAgency.some(function(e) {
return e.NickName === t.edbTVN.string;
});
this.TichAgency.active = e;
};
e.prototype.choseAgency = function(t, e) {
this.edbTVN.string = e;
this.edbReTVN.string = e;
this.TichAgency.active = !0;
};
e.prototype.requestOTP = function() {
var t = this, e = c.LobbyConst.API.URL + c.LobbyConst.API.GET_OTP;
lngui.Https.post(e, {
type: "transfer"
}, function(e, n) {
if (n) {
t.btnGetOTP.interactable = !1;
t.scheduleOnce(function() {
t.btnGetOTP.interactable = !0;
}, 60);
}
});
};
r([ l(cc.EditBox) ], e.prototype, "edbTVN", void 0);
r([ l(cc.EditBox) ], e.prototype, "edbReTVN", void 0);
r([ l(cc.EditBox) ], e.prototype, "edbAmount", void 0);
r([ l(cc.EditBox) ], e.prototype, "edbContent", void 0);
r([ l(cc.Label) ], e.prototype, "lbFee", void 0);
r([ l(cc.Label) ], e.prototype, "lbBigReceive", void 0);
r([ l(cc.ScrollView) ], e.prototype, "scrView", void 0);
r([ l(cc.Node) ], e.prototype, "transferLayer", void 0);
r([ l(cc.Node) ], e.prototype, "TichAgency", void 0);
r([ l(cc.EditBox) ], e.prototype, "edbOTPVerify", void 0);
r([ l(cc.SpriteFrame) ], e.prototype, "ListVip", void 0);
r([ l(cc.Button) ], e.prototype, "btnGetOTP", void 0);
return r([ p ], e);
}(lngui.UIPopup);
n.default = u;
cc._RF.pop();
}, {
"../LobbyConst": "LobbyConst",
"./MVUtils": "MVUtils"
} ],
GUIUpdateDisplayName: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "034b8Kz6f1Gk4jn9VbUoqSY", "GUIUpdateDisplayName");
var o, i = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
})(t, e);
}, function(t, e) {
o(t, e);
function n() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n());
}), r = this && this.__decorate || function(t, e, n, o) {
var i, r = arguments.length, c = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, n, o); else for (var a = t.length - 1; a >= 0; a--) (i = t[a]) && (c = (r < 3 ? i(c) : r > 3 ? i(e, n, c) : i(e, n)) || c);
return r > 3 && c && Object.defineProperty(e, n, c), c;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var c = t("../LobbyConst"), a = t("./utils/CapchaZ"), s = cc._decorator, p = s.ccclass, l = s.property, u = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.edbNickName = null;
e.edbCaptcha = null;
e.UICaptcha = null;
return e;
}
e.prototype.onAcceptClicked = function() {
var t = this, e = this.edbNickName.string;
this.edbCaptcha.string;
if (e.length < 6 || e.length > 15 || e.indexOf(" ") > 0 || e.indexOf("@") > 0 || e === lngui.UserManager.instance.mainUserInfo.NickName) lngui.UIPopupManager.instance.showPopup("Tên người chơi phải từ 6 - 14 ký tự, viết liền không dấu, không trùng tên tài khoản, không chứa ký tự đặc biệt!"); else {
this.edbNickName.string, this.edbCaptcha.string, this.UICaptcha.getComponent(a.default).getCapChaId();
lngui.Https.get(c.LobbyConst.API.URL + c.LobbyConst.API.UPDATE_DISPLAYNAME, function(e) {
if (e) {
lngui.UserManager.instance.mainUserInfo = e;
lngui.EventDispatch.instance.emit(lngui.EVENT_GAMECORE.UPDATE_DISPLAYNAME);
lngui.EventDispatch.instance.emit(c.LobbyConst.EVENT_NAME.SHOW_BANNER_PROMOTION);
t.hide();
} else {
t.onRefreshCaptchaClicked();
lngui.UIPopupManager.instance.showPopup(e);
}
});
}
};
e.prototype.onRefreshCaptchaClicked = function() {
this.UICaptcha.getComponent(a.default).refreshCapcha();
};
r([ l(cc.EditBox) ], e.prototype, "edbNickName", void 0);
r([ l(cc.EditBox) ], e.prototype, "edbCaptcha", void 0);
r([ l(cc.Node) ], e.prototype, "UICaptcha", void 0);
return r([ p ], e);
}(lngui.UIPopup);
n.default = u;
cc._RF.pop();
}, {
"../LobbyConst": "LobbyConst",
"./utils/CapchaZ": "CapchaZ"
} ],
GateJackpotNoti: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "367a3lByDhFzIpqOJuHzIje", "GateJackpotNoti");
var o, i = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
})(t, e);
}, function(t, e) {
o(t, e);
function n() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n());
}), r = this && this.__decorate || function(t, e, n, o) {
var i, r = arguments.length, c = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, n, o); else for (var a = t.length - 1; a >= 0; a--) (i = t[a]) && (c = (r < 3 ? i(c) : r > 3 ? i(e, n, c) : i(e, n)) || c);
return r > 3 && c && Object.defineProperty(e, n, c), c;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var c = cc._decorator, a = c.ccclass, s = c.property, p = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.lbNameNick = null;
e.lbGameName = null;
e.lbMoneyWin = null;
e.lbTime = null;
e.timeSche = null;
return e;
}
e.prototype.showJackpot = function(t, e) {
var n = this;
void 0 === e && (e = 5);
this.lbNameNick.string = t.NickName;
this.lbGameName.string = t.GameName;
this.lbMoneyWin.string = lngui.StringUtils.formatNumber(t.JackpotValue);
cc.Tween.stopAllByTarget(this.node);
cc.tween(this.node).set({
x: 0,
y: -200
}).to(1, {
x: 0,
y: 0
}, {
easing: cc.easing.backOut
}).delay(e).to(1, {
y: cc.winSize.height / 2 + 500
}, {
easing: cc.easing.backIn
}).call(function() {
n.node.active = !1;
}).start();
this.unschedule(this.timeSche);
this.lbTime.string = e.toString();
this.schedule(this.timeSche = function() {
e--;
n.lbTime.string = e.toString();
}, 1, e + 2);
};
e.prototype.hideJackpot = function() {};
e.prototype.onClickXinLoc = function() {};
r([ s(cc.Label) ], e.prototype, "lbNameNick", void 0);
r([ s(cc.Label) ], e.prototype, "lbGameName", void 0);
r([ s(cc.Label) ], e.prototype, "lbMoneyWin", void 0);
r([ s(cc.Label) ], e.prototype, "lbTime", void 0);
return r([ a ], e);
}(cc.Component);
n.default = p;
cc._RF.pop();
}, {} ],
GateSettingPopup: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "ab674brdgFE/IvGLzEgsLaf", "GateSettingPopup");
var o, i = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
})(t, e);
}, function(t, e) {
o(t, e);
function n() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n());
}), r = this && this.__decorate || function(t, e, n, o) {
var i, r = arguments.length, c = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, n, o); else for (var a = t.length - 1; a >= 0; a--) (i = t[a]) && (c = (r < 3 ? i(c) : r > 3 ? i(e, n, c) : i(e, n)) || c);
return r > 3 && c && Object.defineProperty(e, n, c), c;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var c = cc._decorator, a = c.ccclass, s = c.property, p = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.nodesp = null;
e.nodebtn = null;
return e;
}
e.prototype.shownodesp = function() {
this.nodesp.active = !0;
this.nodebtn.active = !0;
};
e.prototype.hidenodesp = function() {
this.nodesp.active = !1;
this.nodebtn.active = !1;
};
r([ s(cc.Node) ], e.prototype, "nodesp", void 0);
r([ s(cc.Node) ], e.prototype, "nodebtn", void 0);
return r([ a ], e);
}(cc.Component);
n.default = p;
cc._RF.pop();
}, {} ],
GuiTopupRutMomo: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "3ab46hpQlJGOqMVrJBMlUzb", "GuiTopupRutMomo");
var o, i = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
})(t, e);
}, function(t, e) {
o(t, e);
function n() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n());
}), r = this && this.__decorate || function(t, e, n, o) {
var i, r = arguments.length, c = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, n, o); else for (var a = t.length - 1; a >= 0; a--) (i = t[a]) && (c = (r < 3 ? i(c) : r > 3 ? i(e, n, c) : i(e, n)) || c);
return r > 3 && c && Object.defineProperty(e, n, c), c;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var c = t("../LobbyConst"), a = t("./MVUtils"), s = cc._decorator, p = s.ccclass, l = s.property, u = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.edbAmount = null;
e.edbSDT = null;
e.edbChuTaiKhoan = null;
e.edbCaptcha = null;
e.sprCaptcha = null;
e.edbOTPVerify = null;
e.layoutCastOut = null;
e.layoutOTP = null;
e._verifyCaptcha = null;
e.bank = null;
return e;
}
e.prototype.onLoad = function() {
this.layoutCastOut.active = !0;
this.layoutOTP.active = !1;
this.sprCaptcha.node.getComponent("CapchaZ").refreshCapcha();
};
e.prototype.start = function() {
this.bank = "momo";
};
e.prototype.onClickRutTien = function() {
var t = this;
if (parseInt(this.edbAmount.string.split(".").join("")) < 2e5) lngui.UIPopupManager.instance.showPopup("Số tiền rút tối thiểu là 200,000 Gold"); else if ("" != this.edbSDT.string) if ("" != this.edbChuTaiKhoan.string) if ("" != this.edbCaptcha.string) {
this._verifyCaptcha = this.sprCaptcha.getComponent("CapchaZ").getCapChaId();
this.data = {
nickNameTrans: lngui.UserManager.instance.mainUserInfo.NickName,
transferValue: a.MVUtils.toInt(this.edbAmount.string),
sourceId: 1,
captchaText: this.edbCaptcha.string,
captchaToken: this._verifyCaptcha,
bankAccountNumber: this.edbSDT.string,
bankAccountName: a.MVUtils.removeVietnameseTones(this.edbChuTaiKhoan.string).toUpperCase(),
bankCode: this.bank,
transferType: 0
};
var e = this;
lngui.Https.post(c.LobbyConst.API.URL + c.LobbyConst.API.CAST_OUT, this.data, function(n, o) {
if (200 == n) {
e.layoutOTP.getChildByName("lblUsername").getComponent(cc.Label).string = t.data.bankAccountName;
e.layoutOTP.getChildByName("lblReceiveQuay").getComponent(cc.Label).string = a.MVUtils.formatNumber(t.data.transferValue);
e.layoutOTP.getChildByName("lblReason").getComponent(cc.Label).string = t.data.bankAccountNumber + " - " + t.bank;
e.layoutCastOut.active = !1;
e.layoutOTP.active = !0;
e.data.OtpToken = o.OtpToken;
} else lngui.UIPopupManager.instance.showPopup(o);
});
} else lngui.UIPopupManager.instance.showPopup("Nhập mã kiểm tra"); else lngui.UIPopupManager.instance.showPopup("Vui lòng điền Chủ Tài Khoản"); else lngui.UIPopupManager.instance.showPopup("Vui lòng điền Số Điện Thoại");
};
e.prototype.onClickVerifyOTP = function() {
var t = this;
lngui.Https.post(c.LobbyConst.API.URL + c.LobbyConst.API.CHECK_OTP, {
Otp: this.edbOTPVerify.string,
OtpType: 1,
OtpToken: this.data.OtpToken,
ServiceId: 2005
}, function(e, n) {
if (200 == e) {
lngui.UIPopupManager.instance.showPopup("Tạo lệnh rút tiền thành công");
t.layoutCastOut.active = !0;
t.layoutOTP.active = !1;
lngui.UserManager.instance.mainUserInfo.Money = lngui.UserManager.instance.mainUserInfo.Money - t.data.transferValue;
lngui.EventDispatch.instance.emit(lngui.EVENT_GAMECORE.UPDATE_TOTAL_GOLD, lngui.UserManager.instance.mainUserInfo.Money);
} else lngui.UIPopupManager.instance.showPopup(n);
});
};
e.prototype.onClickRefreshCaptcha = function() {
this.sprCaptcha.node.getComponent("CapchaZ").refreshCapcha();
};
e.prototype.onEdbChange = function() {
var t = a.MVUtils.toInt(this.edbAmount.string);
t = Math.abs(t);
this.edbAmount.string = a.MVUtils.formatNumber(t);
cc.sys.isBrowser && this.edbAmount.focus();
};
e.prototype.onClickHuy = function() {
this.layoutCastOut.active = !0;
this.layoutOTP.active = !1;
this.sprCaptcha.node.getComponent("CapchaZ").refreshCapcha();
};
e.prototype.onClickSendOTPSMS = function() {};
r([ l(cc.EditBox) ], e.prototype, "edbAmount", void 0);
r([ l(cc.EditBox) ], e.prototype, "edbSDT", void 0);
r([ l(cc.EditBox) ], e.prototype, "edbChuTaiKhoan", void 0);
r([ l(cc.EditBox) ], e.prototype, "edbCaptcha", void 0);
r([ l(cc.Sprite) ], e.prototype, "sprCaptcha", void 0);
r([ l(cc.EditBox) ], e.prototype, "edbOTPVerify", void 0);
r([ l(cc.Node) ], e.prototype, "layoutCastOut", void 0);
r([ l(cc.Node) ], e.prototype, "layoutOTP", void 0);
return r([ p ], e);
}(cc.Component);
n.default = u;
cc._RF.pop();
}, {
"../LobbyConst": "LobbyConst",
"./MVUtils": "MVUtils"
} ],
HeaderAccountCtrl: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "096b2vP0exLPLpcCyZGPD5R", "HeaderAccountCtrl");
var o, i = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
})(t, e);
}, function(t, e) {
o(t, e);
function n() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n());
}), r = this && this.__decorate || function(t, e, n, o) {
var i, r = arguments.length, c = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, n, o); else for (var a = t.length - 1; a >= 0; a--) (i = t[a]) && (c = (r < 3 ? i(c) : r > 3 ? i(e, n, c) : i(e, n)) || c);
return r > 3 && c && Object.defineProperty(e, n, c), c;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var c = t("../LobbyConst"), a = t("./utils/Lobby_UINumericLabelHelper"), s = cc._decorator, p = s.ccclass, l = s.property, u = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.lbNickName = null;
e.nMail = null;
e.lbMail = null;
e.lbtextrandom = null;
e.lblID = null;
e.lbGold = null;
e.lbVippoint = null;
e.listText = [];
return e;
}
n = e;
Object.defineProperty(e, "instance", {
get: function() {
n._instance || (n._instance = new n());
return n._instance;
},
enumerable: !1,
configurable: !0
});
e.prototype.onLoad = function() {
this.listText = [ "Do lượng người dùng lớn lên đôi khi giao dịch xử lý hơi chậm, mong quý khách thông cảm", "Phế chơi game chỉ từ 1%, giao dịch không mất phế, không đại lý", "Những tài khoản bị khoá vĩnh viễn là những tài khoản có hành vi gian lận,chơi bẩn" ];
lngui.EventDispatch.instance.add(lngui.EVENT_GAMECORE.UPDATE_DISPLAYNAME, this.onUpdateInfo, this);
lngui.EventDispatch.instance.add(lngui.EVENT_GAMECORE.UPDATE_GOLD, this.onUpdateGold, this);
lngui.EventDispatch.instance.add(lngui.EVENT_GAMECORE.UPDATE_TOTAL_GOLD, this.onUpdateTotalGold, this);
lngui.EventDispatch.instance.add(lngui.EVENT_GAMECORE.UPDATE_VIPPOINT, this.onUpDateVipPoint, this);
lngui.EventDispatch.instance.add(c.LobbyConst.EVENT_NAME.USER_MAIL, this.requestMail, this);
this.onTextRandom();
};
e.prototype.onDestroy = function() {
lngui.EventDispatch.instance.remove(lngui.EVENT_GAMECORE.UPDATE_DISPLAYNAME, this.onUpdateInfo, this);
lngui.EventDispatch.instance.remove(lngui.EVENT_GAMECORE.UPDATE_GOLD, this.onUpdateGold, this);
lngui.EventDispatch.instance.remove(lngui.EVENT_GAMECORE.UPDATE_TOTAL_GOLD, this.onUpdateTotalGold, this);
lngui.EventDispatch.instance.remove(lngui.EVENT_GAMECORE.UPDATE_VIPPOINT, this.onUpDateVipPoint, this);
};
e.prototype.requestMail = function() {
var t = this, e = c.LobbyConst.API.URL + c.LobbyConst.API.GET_UNREAD_MAIL;
lngui.Https.get(e, function(e) {
lngui.ZLog.log("requestUnreadMail ===" + JSON.stringify(e));
if (e) if (e.Count) {
lngui.UITextManager.showCenterNotification("Bạn có Mail chưa đọc");
t.nMail.active = !0;
t.lbMail.string = e.Count;
} else {
t.nMail.active = !1;
t.lbMail.string = "";
}
});
};
e.prototype.onUpdateTotalGold = function(t) {
lngui.UserManager.instance.mainUserInfo.Money = t;
this.lbGold.scheduleProgress(t);
};
e.prototype.onUpdateGold = function() {
var t = lngui.UserManager.instance.mainUserInfo.Money;
this.lbGold.scheduleProgress(t);
};
e.prototype.onUpDateVipPoint = function() {
var t = lngui.UserManager.instance.mainUserInfo.VipPoint;
this.lbVippoint.scheduleProgress(t);
};
e.prototype.onUpdateInfo = function() {
var t = lngui.UserManager.instance.mainUserInfo.Money, e = lngui.UserManager.instance.mainUserInfo.VipPoint;
this.lbNickName.string = lngui.UserManager.instance.mainUserInfo.NickName;
this.lblID.string = "ID: " + lngui.UserManager.instance.mainUserInfo.AccountID;
this.lbGold.scheduleProgress(t);
e && this.lbVippoint.scheduleProgress(e);
};
e.prototype.onTestUpdateGold = function() {
lngui.ZLog.log("onTestUpdateGold===>");
lngui.EventDispatch.instance.emit(lngui.EVENT_GAMECORE.UPDATE_TOTAL_GOLD, 1e6);
};
e.prototype.onTextRandom = function() {
var t = this;
this.schedule(function() {
t.lbtextrandom.string = t.listText[Math.floor(Math.random() * t.listText.length)];
}, 10);
};
var n;
e._instance = null;
r([ l(cc.Label) ], e.prototype, "lbNickName", void 0);
r([ l(cc.Node) ], e.prototype, "nMail", void 0);
r([ l(cc.Label) ], e.prototype, "lbMail", void 0);
r([ l(cc.Label) ], e.prototype, "lbtextrandom", void 0);
r([ l(cc.Label) ], e.prototype, "lblID", void 0);
r([ l(a.default) ], e.prototype, "lbGold", void 0);
r([ l(a.default) ], e.prototype, "lbVippoint", void 0);
return n = r([ p ], e);
}(cc.Component);
n.default = u;
cc._RF.pop();
}, {
"../LobbyConst": "LobbyConst",
"./utils/Lobby_UINumericLabelHelper": "Lobby_UINumericLabelHelper"
} ],
HeaderCtrl: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "1a51eW1XyhOt6qP45H4JoA1", "HeaderCtrl");
var o, i = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
})(t, e);
}, function(t, e) {
o(t, e);
function n() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n());
}), r = this && this.__decorate || function(t, e, n, o) {
var i, r = arguments.length, c = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, n, o); else for (var a = t.length - 1; a >= 0; a--) (i = t[a]) && (c = (r < 3 ? i(c) : r > 3 ? i(e, n, c) : i(e, n)) || c);
return r > 3 && c && Object.defineProperty(e, n, c), c;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var c = t("./MVUtils"), a = cc._decorator, s = a.ccclass, p = a.property, l = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.nAccount = null;
e.tabTypeGame = null;
e.nodeDownApp = null;
e.nLogin = null;
return e;
}
e.prototype.onEnable = function() {
this.nAccount.active = lngui.GameCoreManager.instance.isLoginSuccess;
this.nLogin.active = !lngui.GameCoreManager.instance.isLoginSuccess;
this.tabTypeGame.active = lngui.GameCoreManager.instance.isLoginSuccess;
cc.sys.isNative || (this.nodeDownApp.active = !lngui.GameCoreManager.instance.isLoginSuccess);
lngui.EventDispatch.instance.add(lngui.EVENT_GAMECORE.LOGIN_SUCCESS, this.onLoginSucess, this);
lngui.EventDispatch.instance.add(lngui.EVENT_GAMECORE.LOGOUT, this.onLogout, this);
};
e.prototype.onDisable = function() {
lngui.EventDispatch.instance.remove(lngui.EVENT_GAMECORE.LOGIN_SUCCESS, this.onLoginSucess, this);
lngui.EventDispatch.instance.remove(lngui.EVENT_GAMECORE.LOGOUT, this.onLogout, this);
};
e.prototype.onLoginSucess = function() {
this.nAccount.active = !0;
this.tabTypeGame.active = !0;
cc.sys.isNative || (this.nodeDownApp.active = !1);
this.nLogin.active = !1;
};
e.prototype.onLogout = function() {
this.nAccount.active = !1;
this.tabTypeGame.active = !1;
this.nLogin.active = !0;
cc.sys.isNative || (this.nodeDownApp.active = !0);
};
e.prototype.onClickFacebook = function() {
c.MVUtils.onFacebook();
};
e.prototype.onLogoutClicked = function() {
var t = [ lngui.PopupAction.make("OK", function() {
lngui.EventDispatch.instance.emit(lngui.EVENT_GAMECORE.LOGOUT);
}), lngui.PopupAction.make("CLOSE", function() {}) ];
lngui.UIPopupManager.instance.showPopup("Bạn có chắc chắn muốn thoát khỏi trò chơi?", t);
};
r([ p(cc.Node) ], e.prototype, "nAccount", void 0);
r([ p(cc.Node) ], e.prototype, "tabTypeGame", void 0);
r([ p(cc.Node) ], e.prototype, "nodeDownApp", void 0);
r([ p(cc.Node) ], e.prototype, "nLogin", void 0);
return r([ s ], e);
}(cc.Component);
n.default = l;
cc._RF.pop();
}, {
"./MVUtils": "MVUtils"
} ],
IconAnGameScene: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "713c7rEt+dImrqM9bJdxfnG", "IconAnGameScene");
var o, i = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
})(t, e);
}, function(t, e) {
o(t, e);
function n() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n());
}), r = this && this.__decorate || function(t, e, n, o) {
var i, r = arguments.length, c = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, n, o); else for (var a = t.length - 1; a >= 0; a--) (i = t[a]) && (c = (r < 3 ? i(c) : r > 3 ? i(e, n, c) : i(e, n)) || c);
return r > 3 && c && Object.defineProperty(e, n, c), c;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var c = t("./BundleSceneGame"), a = cc._decorator, s = a.ccclass, p = (a.property, 
function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e._countOpenGame = 0;
return e;
}
e.prototype._onClicked = function() {
this.isTest && this._countOpenGame >= this.numOfClick ? t.prototype._onClicked.call(this) : lngui.UIPopupManager.instance.showPopup("Đang bảo trì!");
this._countOpenGame++;
};
return r([ s ], e);
}(c.default));
n.default = p;
cc._RF.pop();
}, {
"./BundleSceneGame": "BundleSceneGame"
} ],
IconAnGame: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "2c0fbSn7stCHqz3in00fODx", "IconAnGame");
var o, i = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
})(t, e);
}, function(t, e) {
o(t, e);
function n() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n());
}), r = this && this.__decorate || function(t, e, n, o) {
var i, r = arguments.length, c = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, n, o); else for (var a = t.length - 1; a >= 0; a--) (i = t[a]) && (c = (r < 3 ? i(c) : r > 3 ? i(e, n, c) : i(e, n)) || c);
return r > 3 && c && Object.defineProperty(e, n, c), c;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var c = t("./BundleMiniGame"), a = cc._decorator, s = a.ccclass, p = (a.property, 
function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e._countOpenGame = 0;
return e;
}
e.prototype._onClicked = function() {
this.isTest && this._countOpenGame >= this.numOfClick ? t.prototype._onClicked.call(this) : lngui.UIPopupManager.instance.showPopup("Đang bảo trì!");
this._countOpenGame++;
};
return r([ s ], e);
}(c.default));
n.default = p;
cc._RF.pop();
}, {
"./BundleMiniGame": "BundleMiniGame"
} ],
IconBanCa: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "49b12s81Z9HvaYra2eUWGet", "IconBanCa");
var o, i = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
})(t, e);
}, function(t, e) {
o(t, e);
function n() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n());
}), r = this && this.__decorate || function(t, e, n, o) {
var i, r = arguments.length, c = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, n, o); else for (var a = t.length - 1; a >= 0; a--) (i = t[a]) && (c = (r < 3 ? i(c) : r > 3 ? i(e, n, c) : i(e, n)) || c);
return r > 3 && c && Object.defineProperty(e, n, c), c;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var c = t("./BundleSceneGame"), a = cc._decorator, s = a.ccclass, p = (a.property, 
function(t) {
i(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
return r([ s ], e);
}(c.default));
n.default = p;
cc._RF.pop();
}, {
"./BundleSceneGame": "BundleSceneGame"
} ],
IconMiniPoker: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "95b79PfFo9Fc6If94sDzKYo", "IconMiniPoker");
var o, i = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
})(t, e);
}, function(t, e) {
o(t, e);
function n() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n());
}), r = this && this.__decorate || function(t, e, n, o) {
var i, r = arguments.length, c = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, n, o); else for (var a = t.length - 1; a >= 0; a--) (i = t[a]) && (c = (r < 3 ? i(c) : r > 3 ? i(e, n, c) : i(e, n)) || c);
return r > 3 && c && Object.defineProperty(e, n, c), c;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var c = t("./BundleMiniGame"), a = cc._decorator, s = a.ccclass, p = (a.property, 
function(t) {
i(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
return r([ s ], e);
}(c.default));
n.default = p;
cc._RF.pop();
}, {
"./BundleMiniGame": "BundleMiniGame"
} ],
IconMiniTaiXiu: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "ff069evfzhDJK5I8Yp0OMyo", "IconMiniTaiXiu");
var o, i = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
})(t, e);
}, function(t, e) {
o(t, e);
function n() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n());
}), r = this && this.__decorate || function(t, e, n, o) {
var i, r = arguments.length, c = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, n, o); else for (var a = t.length - 1; a >= 0; a--) (i = t[a]) && (c = (r < 3 ? i(c) : r > 3 ? i(e, n, c) : i(e, n)) || c);
return r > 3 && c && Object.defineProperty(e, n, c), c;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var c = t("./BundleMiniGame"), a = cc._decorator, s = a.ccclass, p = (a.property, 
function(t) {
i(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
return r([ s ], e);
}(c.default));
n.default = p;
cc._RF.pop();
}, {
"./BundleMiniGame": "BundleMiniGame"
} ],
IconMiniTomCuaCa: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "67e00FaupRPvIof7YcGKiTO", "IconMiniTomCuaCa");
var o, i = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
})(t, e);
}, function(t, e) {
o(t, e);
function n() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n());
}), r = this && this.__decorate || function(t, e, n, o) {
var i, r = arguments.length, c = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, n, o); else for (var a = t.length - 1; a >= 0; a--) (i = t[a]) && (c = (r < 3 ? i(c) : r > 3 ? i(e, n, c) : i(e, n)) || c);
return r > 3 && c && Object.defineProperty(e, n, c), c;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var c = t("./BundleMiniGame"), a = cc._decorator, s = a.ccclass, p = (a.property, 
function(t) {
i(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
return r([ s ], e);
}(c.default));
n.default = p;
cc._RF.pop();
}, {
"./BundleMiniGame": "BundleMiniGame"
} ],
IconTestGameCards: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "0e089P3sfFL1qVUaxzipJ2G", "IconTestGameCards");
var o, i = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
})(t, e);
}, function(t, e) {
o(t, e);
function n() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n());
}), r = this && this.__decorate || function(t, e, n, o) {
var i, r = arguments.length, c = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, n, o); else for (var a = t.length - 1; a >= 0; a--) (i = t[a]) && (c = (r < 3 ? i(c) : r > 3 ? i(e, n, c) : i(e, n)) || c);
return r > 3 && c && Object.defineProperty(e, n, c), c;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var c = t("./BundleSceneGame"), a = cc._decorator, s = a.ccclass, p = (a.property, 
function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e._countOpenGame = 0;
return e;
}
e.prototype._onClicked = function() {
if (this.isTest && this._countOpenGame >= this.numOfClick) {
t.prototype._onClicked.call(this);
lngui.GameCoreManager.instance.setGameID(this.gameID);
} else lngui.UIPopupManager.instance.showPopup("Game Sắp Ra Mắt!");
this._countOpenGame++;
};
return r([ s ], e);
}(c.default));
n.default = p;
cc._RF.pop();
}, {
"./BundleSceneGame": "BundleSceneGame"
} ],
ItemGiftBigBang: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "7ffcdMNs9pMkKnSNkPVasCw", "ItemGiftBigBang");
var o, i = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
})(t, e);
}, function(t, e) {
o(t, e);
function n() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n());
}), r = this && this.__decorate || function(t, e, n, o) {
var i, r = arguments.length, c = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, n, o); else for (var a = t.length - 1; a >= 0; a--) (i = t[a]) && (c = (r < 3 ? i(c) : r > 3 ? i(e, n, c) : i(e, n)) || c);
return r > 3 && c && Object.defineProperty(e, n, c), c;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var c = cc._decorator, a = c.ccclass, s = c.property, p = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.label_title = null;
e.label_money = null;
e.icon_gift = null;
e.ls_icon_gift = [];
e.btn_recive = null;
e.ls_rank = [ "Giải nhất", "Giải nhì", "Giải ba" ];
e.dataItem = null;
return e;
}
e.prototype.start = function() {};
e.prototype.setInfo = function(t) {
this.dataItem = t;
this.label_title.string = "";
this.icon_gift.spriteFrame = this.ls_icon_gift[t.Type - 1];
1 == t.Type ? this.label_money.string = "" : this.label_money.string = t.PrizeDescription;
this.btn_recive.interactable = !t.IsAward;
};
e.prototype.onClickRecive = function() {
var t = this, e = {
token: lngui.UserManager.instance.mainUserInfo.GameToken,
EventPrizeId: this.dataItem.EventPrizeID
};
lngui.Https.post("https://api.${lngui.ConfigManager.instance.ConfigInfo.Api}/api/Event/RaceDailyVPReward", e, function(e, n) {
console.log("-=ress     ", n);
if (e >= 200 && e < 400 && 1 == n.ResponseCode) {
lngui.EventDispatch.instance.emit(lngui.EVENT_GAMECORE.UPDATE_TOTAL_GOLD, n.Balance);
t.btn_recive.interactable = !1;
}
lngui.UIPopupManager.instance.showPopup(n.Message);
});
};
r([ s(cc.Label) ], e.prototype, "label_title", void 0);
r([ s(cc.Label) ], e.prototype, "label_money", void 0);
r([ s(cc.Sprite) ], e.prototype, "icon_gift", void 0);
r([ s([ cc.SpriteFrame ]) ], e.prototype, "ls_icon_gift", void 0);
r([ s(cc.Button) ], e.prototype, "btn_recive", void 0);
return r([ a ], e);
}(cc.Component);
n.default = p;
cc._RF.pop();
}, {} ],
ItemMail: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "6ee50OxiEBBh5EcEWrRQnEV", "ItemMail");
var o, i = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
})(t, e);
}, function(t, e) {
o(t, e);
function n() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n());
}), r = this && this.__decorate || function(t, e, n, o) {
var i, r = arguments.length, c = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, n, o); else for (var a = t.length - 1; a >= 0; a--) (i = t[a]) && (c = (r < 3 ? i(c) : r > 3 ? i(e, n, c) : i(e, n)) || c);
return r > 3 && c && Object.defineProperty(e, n, c), c;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var c = t("../LobbyConst"), a = t("./GUIAccountMail"), s = t("./MVUtils"), p = cc._decorator, l = p.ccclass, u = p.property, h = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.lbTitle = null;
e.btnXoaMail = null;
e.lbTime = null;
e.lbNew = null;
e.idMail = -1;
e.mailType = null;
e.link = null;
e.giftcode = !1;
return e;
}
e.prototype.onLoad = function() {
var t = this;
this.node.on(cc.Node.EventType.TOUCH_END, function() {
t.readMail(t.idMail);
});
};
e.prototype.readMail = function(t) {
var e = this, n = {
Type: 2,
MailID: t
};
lngui.Https.post(c.LobbyConst.API.URL + c.LobbyConst.API.READ_MAIL, n, function(t, n) {
t >= 200 && t < 400 ? 1 == n.ResponseCode ? e.lbNew.node.active = !1 : lngui.UIPopupManager.instance.showPopup(n.Message) : lngui.UIPopupManager.instance.showPopup(n);
});
};
e.prototype.onBtnXoaMail = function(t, e) {
lngui.Https.post(c.LobbyConst.API.URL + c.LobbyConst.API.DEL_MAIL, {
Type: -1,
MailID: e
}, function(t, e) {
if (t >= 200 && t < 400) {
lngui.UITextManager.showCenterNotification("Xóa thành công!");
a.default.instance.requestMail();
} else lngui.UIPopupManager.instance.showPopup(e);
});
};
e.prototype.initData = function(t) {
this.idMail = t.ID;
this.mailType = t.Type;
1 == t.Status ? this.lbNew.node.active = !0 : this.lbNew.node.active = !1;
this.lbTitle.string = t.Title;
this.lbTime.string = s.MVUtils.formatDateTime(t.CreatedTime);
};
e.prototype.onClickMailDetail = function(t, e) {
a.default.instance.mailList.active = !1;
a.default.instance.mailDetail.active = !0;
a.default.instance.initMailContent(e);
};
r([ u(cc.Label) ], e.prototype, "lbTitle", void 0);
r([ u(cc.Button) ], e.prototype, "btnXoaMail", void 0);
r([ u(cc.Label) ], e.prototype, "lbTime", void 0);
r([ u(cc.Sprite) ], e.prototype, "lbNew", void 0);
return r([ l ], e);
}(cc.Component);
n.default = h;
cc._RF.pop();
}, {
"../LobbyConst": "LobbyConst",
"./GUIAccountMail": "GUIAccountMail",
"./MVUtils": "MVUtils"
} ],
ItemNapX3: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "32e11V+jIBA1bZe3TguE4Eq", "ItemNapX3");
var o, i = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
})(t, e);
}, function(t, e) {
o(t, e);
function n() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n());
}), r = this && this.__decorate || function(t, e, n, o) {
var i, r = arguments.length, c = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, n, o); else for (var a = t.length - 1; a >= 0; a--) (i = t[a]) && (c = (r < 3 ? i(c) : r > 3 ? i(e, n, c) : i(e, n)) || c);
return r > 3 && c && Object.defineProperty(e, n, c), c;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var c = t("./MVUtils"), a = cc._decorator, s = a.ccclass, p = a.property, l = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.icon = null;
e.label_gold = null;
e.label_reward = null;
e.sp_progress = null;
e.lb_progress = null;
e.btn_confirm = null;
e.lb_status = null;
e.node_gift = null;
e.ls_sf_icon = [];
e.dataItem = {
$id: "3",
Amount: 0,
PrizeValue: 0,
Progress: 0,
RechargeType: 2,
RemainTime: 0,
Status: 0
};
return e;
}
e.prototype.updateInfo = function(t) {
this.dataItem = t;
this.icon.spriteFrame = this.ls_sf_icon[this.dataItem.RechargeType - 1];
this.lb_progress.string = this.dataItem.Progress + "%";
this.sp_progress.fillRange = this.dataItem.Progress / 100;
this.label_gold.string = c.MVUtils.formatNumber(this.dataItem.Amount);
this.label_reward.string = c.MVUtils.formatNumber(this.dataItem.PrizeValue);
this.lb_status.string = [ "Hết hạn", "Chưa hoàn thành", "Đang trong tiến trình", "Hoàn thành", "Đã nhận thưởng" ][this.dataItem.Status + 1];
cc.Tween.stopAllByTarget(this.node_gift);
if (100 == this.dataItem.Progress && 2 == this.dataItem.Status) {
this.node_gift.color = cc.Color.WHITE;
cc.tween(this.node_gift).repeatForever(cc.tween().by(.2, {
y: 10
}, {
easing: cc.easing.sineIn
}).by(.2, {
y: -10
}, {
easing: cc.easing.sineIn
})).start();
} else {
this.node_gift.color = cc.Color.GRAY;
this.btn_confirm.node.color = cc.Color.GRAY;
}
};
e.prototype.onClickConfirm = function() {
var t = this, e = this.dataItem.RechargeType, n = this.dataItem.Status;
if (-1 != n) if (0 != n) if (1 != n) {
if (2 == n) lngui.Https.post("https://api.${lngui.ConfigManager.instance.ConfigInfo.Api}/api/Event/GetX3Reward", {
RechargeType: e
}, function(e, n) {
if (1 == n.ResponseCode) {
t.node_gift.color = cc.Color.GRAY;
t.btn_confirm.node.color = cc.Color.GRAY;
cc.Tween.stopAllByTarget(t.node_gift);
lngui.EventDispatch.instance.emit(lngui.EVENT_GAMECORE.UPDATE_TOTAL_GOLD, n.Balance);
}
lngui.UIPopupManager.instance.showPopup(n.Message);
}); else if (3 == n) {
lngui.UITextManager.showCenterNotification("Bạn đã nhận thưởng rồi");
return;
}
} else lngui.UITextManager.showCenterNotification("Hãy hoàn thành tiến trình nạp"); else lngui.UITextManager.showCenterNotification("Hãy bắt đầu tiến trình nạp"); else lngui.UITextManager.showCenterNotification("Phần thưởng đã hết hạn");
};
r([ p(cc.Sprite) ], e.prototype, "icon", void 0);
r([ p(cc.Label) ], e.prototype, "label_gold", void 0);
r([ p(cc.Label) ], e.prototype, "label_reward", void 0);
r([ p(cc.Sprite) ], e.prototype, "sp_progress", void 0);
r([ p(cc.Label) ], e.prototype, "lb_progress", void 0);
r([ p(cc.Button) ], e.prototype, "btn_confirm", void 0);
r([ p(cc.Label) ], e.prototype, "lb_status", void 0);
r([ p(cc.Node) ], e.prototype, "node_gift", void 0);
r([ p([ cc.SpriteFrame ]) ], e.prototype, "ls_sf_icon", void 0);
return r([ s ], e);
}(cc.Component);
n.default = l;
cc._RF.pop();
}, {
"./MVUtils": "MVUtils"
} ],
ItemRankBigBang: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "10769ZX8kFJib/g5p0RYBCs", "ItemRankBigBang");
var o, i = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
})(t, e);
}, function(t, e) {
o(t, e);
function n() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n());
}), r = this && this.__decorate || function(t, e, n, o) {
var i, r = arguments.length, c = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, n, o); else for (var a = t.length - 1; a >= 0; a--) (i = t[a]) && (c = (r < 3 ? i(c) : r > 3 ? i(e, n, c) : i(e, n)) || c);
return r > 3 && c && Object.defineProperty(e, n, c), c;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var c = cc._decorator, a = c.ccclass, s = c.property, p = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.label_rank = null;
e.icon_rank = null;
e.label_name = null;
e.label_point = null;
e.label_gift = null;
e.icon_gift = null;
e.ls_sf_icon_rank = [];
e.ls_sf_icon_gift = [];
return e;
}
e.prototype.start = function() {};
e.prototype.setInfo = function(t, e) {
this.label_rank.string = e + "";
this.icon_rank.node.active = e <= 3;
e <= 3 && (this.icon_rank.spriteFrame = this.ls_sf_icon_rank[e - 1]);
this.label_name.string = t.GameAccountName;
this.label_point.string = t.TotalVPString;
if (t.Type >= 6) {
this.label_gift.string = t.PrizeDescription;
this.icon_gift.node.active = !1;
} else {
this.label_gift.string = "";
this.icon_gift.node.active = !0;
this.icon_gift.spriteFrame = this.ls_sf_icon_gift[t.Type - 1];
}
};
r([ s(cc.Label) ], e.prototype, "label_rank", void 0);
r([ s(cc.Sprite) ], e.prototype, "icon_rank", void 0);
r([ s(cc.Label) ], e.prototype, "label_name", void 0);
r([ s(cc.Label) ], e.prototype, "label_point", void 0);
r([ s(cc.Label) ], e.prototype, "label_gift", void 0);
r([ s(cc.Sprite) ], e.prototype, "icon_gift", void 0);
r([ s([ cc.SpriteFrame ]) ], e.prototype, "ls_sf_icon_rank", void 0);
r([ s([ cc.SpriteFrame ]) ], e.prototype, "ls_sf_icon_gift", void 0);
return r([ a ], e);
}(cc.Component);
n.default = p;
cc._RF.pop();
}, {} ],
ItemTopJackpotCtrl: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "c7e213v/PZHe6KcAMZ6T63a", "ItemTopJackpotCtrl");
var o, i = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
})(t, e);
}, function(t, e) {
o(t, e);
function n() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n());
}), r = this && this.__decorate || function(t, e, n, o) {
var i, r = arguments.length, c = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, n, o); else for (var a = t.length - 1; a >= 0; a--) (i = t[a]) && (c = (r < 3 ? i(c) : r > 3 ? i(e, n, c) : i(e, n)) || c);
return r > 3 && c && Object.defineProperty(e, n, c), c;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var c = t("../LobbyConst"), a = t("./utils/Lobby_UINumericLabelHelper"), s = cc._decorator, p = s.ccclass, l = s.property, u = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.lbJackpot = null;
e.lbGameName = null;
e.spIcon = null;
e.iconCaoThap = null;
e.iconAvenger = null;
e.iconKC = null;
e.iconTC = null;
e.iconThanTai = null;
e.iconDragonBall = null;
e.iconMiniPoker = null;
e.iconHaiTac = null;
e.m_IdGame = -1;
return e;
}
e.prototype.updateGoldJackpot = function(t) {
this.lbJackpot.scheduleProgress(t, .5);
};
e.prototype.setData = function(t, e) {
this.m_IdGame = t;
switch (t) {
case c.GAME_IDS.ANKHE:
this.lbGameName.string = "Hải Tắc";
this.spIcon.spriteFrame = this.iconHaiTac;
this.updateGoldJackpot(e);
break;

case c.GAME_IDS.TDK:
this.lbGameName.string = "Thủy Cung";
this.spIcon.spriteFrame = this.iconTC;
this.updateGoldJackpot(e);
break;

case c.GAME_IDS.THANTAI:
this.lbGameName.string = "Thần Tài";
this.spIcon.spriteFrame = this.iconThanTai;
this.updateGoldJackpot(e);
break;

case c.GAME_IDS.STTT:
this.lbGameName.string = "Avenger";
this.spIcon.spriteFrame = this.iconAvenger;
this.updateGoldJackpot(e);
break;

case c.GAME_IDS.MINIPOKER:
this.lbGameName.string = "MiniPoker";
this.spIcon.spriteFrame = this.iconMiniPoker;
this.updateGoldJackpot(e);
break;

case c.GAME_IDS.TRENDUOI:
this.lbGameName.string = "Trên Dưới";
this.spIcon.spriteFrame = this.iconCaoThap;
this.updateGoldJackpot(e);
break;

case c.GAME_IDS.ET:
this.lbGameName.string = "Kim Cương";
this.spIcon.spriteFrame = this.iconKC;
this.updateGoldJackpot(e);
break;

case c.GAME_IDS.XEDIEN:
this.lbGameName.string = "DragonBall";
this.spIcon.spriteFrame = this.iconDragonBall;
this.updateGoldJackpot(e);
break;

default:
return;
}
};
e.prototype.onShowGameClicked = function() {
lngui.EventDispatch.instance.emit(c.LobbyConst.EVENT_NAME.BUNDLE_DOWNLOAD_FROM_ITEM_JACKPOT, this.m_IdGame);
};
r([ l(a.default) ], e.prototype, "lbJackpot", void 0);
r([ l(cc.Label) ], e.prototype, "lbGameName", void 0);
r([ l(cc.Sprite) ], e.prototype, "spIcon", void 0);
r([ l(cc.SpriteFrame) ], e.prototype, "iconCaoThap", void 0);
r([ l(cc.SpriteFrame) ], e.prototype, "iconAvenger", void 0);
r([ l(cc.SpriteFrame) ], e.prototype, "iconKC", void 0);
r([ l(cc.SpriteFrame) ], e.prototype, "iconTC", void 0);
r([ l(cc.SpriteFrame) ], e.prototype, "iconThanTai", void 0);
r([ l(cc.SpriteFrame) ], e.prototype, "iconDragonBall", void 0);
r([ l(cc.SpriteFrame) ], e.prototype, "iconMiniPoker", void 0);
r([ l(cc.SpriteFrame) ], e.prototype, "iconHaiTac", void 0);
return r([ p ], e);
}(cc.Component);
n.default = u;
cc._RF.pop();
}, {
"../LobbyConst": "LobbyConst",
"./utils/Lobby_UINumericLabelHelper": "Lobby_UINumericLabelHelper"
} ],
JackpotBySlot: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "44997m/iLpMhYzy9a4OvCNb", "JackpotBySlot");
var o, i = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
})(t, e);
}, function(t, e) {
o(t, e);
function n() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n());
}), r = this && this.__decorate || function(t, e, n, o) {
var i, r = arguments.length, c = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, n, o); else for (var a = t.length - 1; a >= 0; a--) (i = t[a]) && (c = (r < 3 ? i(c) : r > 3 ? i(e, n, c) : i(e, n)) || c);
return r > 3 && c && Object.defineProperty(e, n, c), c;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var c = t("../LobbyConst"), a = t("./utils/Lobby_UINumericLabelHelper"), s = cc._decorator, p = s.ccclass, l = s.property, u = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.gameID = c.GAME_IDS.NONE;
e.lbJackpot1 = null;
e.lbJackpot2 = null;
e.lbJackpot3 = null;
e.NodeHistory = null;
e.sprdot = [];
return e;
}
e.prototype.onEnable = function() {
lngui.EventDispatch.instance.add(c.LobbyConst.EVENT_NAME.EVENT_UPDATE_JACKPOT, this.updateJackpot, this);
};
e.prototype.onDisable = function() {
lngui.EventDispatch.instance.remove(c.LobbyConst.EVENT_NAME.EVENT_UPDATE_JACKPOT, this.updateJackpot, this);
};
e.prototype.updateJackpot = function() {
var t, e = this;
c.LobbyConst.slotByKeys.forEach(function(n, o) {
o != e.gameID || (t = n);
});
if (t) if (90 != this.gameID && 89 != this.gameID) for (var n = 0; n < t.length; n++) {
t[n] || (t[n] = this.getRandomInt(51231242, 822512512));
4 == t.length ? this.lbJackpot3 && this.lbJackpot3.scheduleProgress(t[3], 8) : this.lbJackpot3 && this.lbJackpot3.scheduleProgress(t[2], 8);
1 == n ? this.lbJackpot2 && this.lbJackpot2.scheduleProgress(t[n], 8) : 0 == n && this.lbJackpot1 && this.lbJackpot1.scheduleProgress(t[n], 8);
} else {
this.lbJackpot2 && this.lbJackpot2.scheduleProgress(t.TotalBetValue1 * lngui.ConfigManager.instance.ConfigInfo.RateMultiple, 2);
this.lbJackpot1 && this.lbJackpot1.scheduleProgress(t.TotalBetValue2 * lngui.ConfigManager.instance.ConfigInfo.RateMultiple, 2);
this.lbJackpot3 && this.lbJackpot3.scheduleProgress(t.JackpotFund * lngui.ConfigManager.instance.ConfigInfo.RateMultiple, 2);
}
};
e.prototype.getRandomInt = function(t, e) {
return Math.floor(Math.random() * (e - t + 1)) + t;
};
r([ l({
type: cc.Enum(c.GAME_IDS)
}) ], e.prototype, "gameID", void 0);
r([ l(a.default) ], e.prototype, "lbJackpot1", void 0);
r([ l(a.default) ], e.prototype, "lbJackpot2", void 0);
r([ l(a.default) ], e.prototype, "lbJackpot3", void 0);
r([ l(cc.Node) ], e.prototype, "NodeHistory", void 0);
r([ l(cc.SpriteFrame) ], e.prototype, "sprdot", void 0);
return r([ p ], e);
}(cc.Component);
n.default = u;
cc._RF.pop();
}, {
"../LobbyConst": "LobbyConst",
"./utils/Lobby_UINumericLabelHelper": "Lobby_UINumericLabelHelper"
} ],
ListAvatar: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "d0fc7K5UWJBqpSTf7mQ58Hg", "ListAvatar");
var o, i = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
})(t, e);
}, function(t, e) {
o(t, e);
function n() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n());
}), r = this && this.__decorate || function(t, e, n, o) {
var i, r = arguments.length, c = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, n, o); else for (var a = t.length - 1; a >= 0; a--) (i = t[a]) && (c = (r < 3 ? i(c) : r > 3 ? i(e, n, c) : i(e, n)) || c);
return r > 3 && c && Object.defineProperty(e, n, c), c;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var c = cc._decorator, a = c.ccclass, s = c.property, p = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.ListSpriteAvatar = [];
return e;
}
r([ s(cc.SpriteFrame) ], e.prototype, "ListSpriteAvatar", void 0);
return r([ a ], e);
}(cc.Component);
n.default = p;
cc._RF.pop();
}, {} ],
LobbAudioDefined: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "590f2JSWmRPELkqE/Ra6jXp", "LobbAudioDefined");
var o, i = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
})(t, e);
}, function(t, e) {
o(t, e);
function n() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n());
}), r = this && this.__decorate || function(t, e, n, o) {
var i, r = arguments.length, c = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, n, o); else for (var a = t.length - 1; a >= 0; a--) (i = t[a]) && (c = (r < 3 ? i(c) : r > 3 ? i(e, n, c) : i(e, n)) || c);
return r > 3 && c && Object.defineProperty(e, n, c), c;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var c = cc._decorator, a = c.ccclass, s = c.property, p = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.music_bgm = null;
return e;
}
n = e;
Object.defineProperty(e, "instance", {
get: function() {
n._instance || (n._instance = new n());
return n._instance;
},
enumerable: !1,
configurable: !0
});
e.prototype.onLoad = function() {
n._instance = this;
};
var n;
e._instance = null;
r([ s(cc.AudioClip) ], e.prototype, "music_bgm", void 0);
return n = r([ a ], e);
}(cc.Component);
n.default = p;
cc._RF.pop();
}, {} ],
LobbyConst: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "6b25cz4Ct5PVrB3sRlPhBbp", "LobbyConst");
Object.defineProperty(n, "__esModule", {
value: !0
});
n.getStringBodyByObject = n.GAME_IDS = n.LobbyConst = n.Platform = void 0;
var o;
(function(t) {
t[t.INVALID = 0] = "INVALID";
t[t.ANDROID = 1] = "ANDROID";
t[t.WINDOWS = 2] = "WINDOWS";
t[t.IOS = 3] = "IOS";
t[t.WEB = 4] = "WEB";
t[t.MAC = 5] = "MAC";
})(o = n.Platform || (n.Platform = {}));
var i = function() {
function t() {}
Object.defineProperty(t, "platform", {
get: function() {
var t = o.INVALID;
cc.sys.isBrowser ? t = o.WEB : cc.sys.os == cc.sys.OS_ANDROID ? t = o.ANDROID : cc.sys.os == cc.sys.OS_IOS ? t = o.IOS : cc.sys.os == cc.sys.OS_WINDOWS ? t = o.WINDOWS : cc.sys.os == cc.sys.OS_OSX ? t = o.MAC : lngui.ZLog.log("Unsupport platform");
return t;
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(t, "OSName", {
get: function() {
return cc.sys.isBrowser ? "web" : cc.sys.os == cc.sys.OS_ANDROID ? "android" : cc.sys.os == cc.sys.OS_OSX || cc.sys.os == cc.sys.OS_IOS ? "ios" : void 0;
},
enumerable: !1,
configurable: !0
});
t.BUILD_VERSION = "v_23_23072021_";
t.usernameRegEx = /^(?:[A-Za-z0-9_.@]{6,32})$/;
t.passwordRegEx = /^(?:[A-Za-z0-9~!@#$%^&*()_+`\-=\[\]{};':"\\|,.<>\/?]{6,35})$/;
t.slotByKeys = new Map();
t.listEventByDay = [];
t.timerSMS = 30;
t.MERCHANT_GIFTCODE = {
ID: 100011,
KEY: "123456"
};
t.URL = {
Gate: "&gate=" + lngui.ConfigManager.instance.ConfigInfo.Gate
};
t.API = {
URL: "https://api." + lngui.ConfigManager.instance.ConfigInfo.Api + "/",
LOGIN: "user/login",
AUTO_LOGIN: "user/info",
REGISTRY: "user/createAccount",
CHECKUSERNAME: "user/checkUsernameExist",
GET_INFO_ACCOUNT: "Account/Vp",
UPDATE_DISPLAYNAME: "Account/UpdateUserFullName",
UPDATE_AVATAR: "Account/updateAvatar",
CHANGE_PASS: "Account/ChangePass",
CHECK_OTP: "Privacy/VerifyOTP",
GET_INFO_OTP: "Account/GetInfo?",
REGISTER_OTP: "Account/RegisterOTP",
DELETE_MOBILE: "Account/deleteMobile",
UPDATE_MOBILE: "Account/updateMobile",
GET_OTP: "Account/sendOtpTele",
REG_MOBILE: "Account/registerOTP",
GET_OTP_SMS: "Account/getOTPSMS",
GET_OTP_TRANFER: "Account/getOTPSMSTranfer",
GET_FROZEB: "Account/getFrozen",
FROZEB: "Account/frozen",
GIFT_CODE: "Account/GiftCode",
LOGIN_VIP_CODE: "Account/LoginVipcode",
VIP_POINT_TRADE: "Account/VipPointTrade",
VIP_POINT_RANK: "Account/getRankingVip",
CAST_OUT: "payment/TransferCashout",
CAST_OUT_NO_OTP: "payment/Cashout",
DELETE_PHONE: "Account/deleteMobile",
GET_BANK_ACCOUNTINFO: "payment/GetBankAccountInfo",
UPDATE_BANK_ACCOUNTINFO: "payment/MapBankAccount",
GET_LIST_BANK_ACCOUNT: "payment/GetListBankAccount",
ADD_BANK_ACCOUNT: "payment/AddBankAccount",
CASH_OUT_USING_BANK_ACCOUNT: "payment/CashoutUsingBankAccount",
LIST_BANK_IN: "payment/GetListBankIn",
LIST_BANK_OUT: "payment/GetListBankOut",
REQUEST_BANK: "payment/BankRequest",
MOMO_REQUEST: "payment/MomoRequest",
RATE_CARD: "payment/GetChargeRate",
REQUEST_CASH_IN: "payment/rechargecard",
REQUEST_CARD: "payment/CardRequest",
CARD_TYPE: "payment/GetCardTypes",
LIST_AGENCY: "Agency/GetAgencies",
REQUEST_TRANSFER: "payment/Transfer",
MOMO_INFO: "payment/MomoGetAccount",
LIST_HISTORY: "payment/UserCashHistory",
LIST_HISTORY_BANKMANUAL: "payment/GetManualBankRequestHistory",
LIST_HISTORY_ALLGAME: "payment/getTransactionLogs",
GET_UNREAD_MAIL: "Mail/MailUnRead",
GET_LIST_MAIL: "Mail/GetUserMail",
READ_MAIL: "Mail/UpdateStatus",
DEL_MAIL: "Mail/UpdateStatus",
MUA_THE: "payment/muaThe",
OTP_RESET_PASSWORD: "Account/GetOTPResetPassword",
RESET_PASSWORD: "Account/ResetPassword",
EVENT_7DAY_CHECK_IN: "api/DailyCheckIn/CheckIn",
EVENT_7DAY_GET_INFO: "api/DailyCheckIn/GetInfo",
EVENT_NAP_7DAY: "api/RechargeStreak/getinfo",
VIP_GETINFO: "api/Vip/GetInfo",
VIP_GETCONFIG: "api/Vip/GetConfigs",
VIP_REWARS: "api/Vip/GetRewards",
VIP_CLAMREWARD: "api/Vip/ClaimReward"
};
t.EVENT_NAME = {
BUNDLEMINI_DOWNLOAD_SUCCESS: "BUNDLEMINI_DOWNLOAD_SUCCESS",
BUNDLE_DOWNLOAD_FROM_ITEM_JACKPOT: "BUNDLE_DOWNLOAD_FROM_ITEM_JACKPOT",
EVENT_UPDATE_JACKPOT: "EVENT_UPDATE_JACKPOT",
CHANGE_TAB_UI: "CHANGE_TAB_UI",
GET_LIST_MAIL: "GET_LIST_MAIL",
GET_DETAIL_MAIL: "GET_DETAIL_MAIL",
EVENT_DETAIL_MAIL: "notify_detail_mail",
USER_MAIL: "UserMail",
NEW_MAIL: "notifyNewMail",
COUNT_MAIL_MAIN: "count_mail0",
SHOW_BANNER_PROMOTION: "SHOW_BANNER_PROMOTION",
REQUEST_EVENT_RANK: "REQUEST_EVENT_RANK",
NOTIFY_SYSTEM: "NOTIFY_SYSTEM",
AVATAR_CHANGED: "AVATAR_CHANGED",
TX_NAN_COVER: "TX_NAN_COVER"
};
t.SETTING_ID = {
SMSPLUS_REGISTER_TYPE: 1,
SMSPLUS_DEL_OTP_TYPE: 3,
SMSPLUS_INFO: 1,
SMSPLUS_REGISTER: 2,
SMSPLUS_DEL_PHONE: 5,
FROZEN: 1,
UNFROZEN: 2,
GIFT_CODE: 1,
VIP_CODE: 2,
OTP: 3
};
t.StringDefine = {
INPUT_GIFT_CODE: "Vui lòng nhập GiftCode",
INPUT_VIP_CODE: "Vui lòng nhập VipCode",
INPUT_OTP: "Vui lòng nhập mã OTP",
STR_NETWORK_ERROR: "Mạng không ổn định, hãy kiểm tra Wifi hoặc 3G của bạn."
};
return t;
}();
n.LobbyConst = i;
(function(t) {
t[t.NONE = -1] = "NONE";
t[t.THANTAI = 5001] = "THANTAI";
t[t.TDK = 103] = "TDK";
t[t.NGULONG = 514] = "NGULONG";
t[t.CUNGHI = 512] = "CUNGHI";
t[t.STTT = 511] = "STTT";
t[t.XEDIEN = 999] = "XEDIEN";
t[t.ET = 115] = "ET";
t[t.TW = 513] = "TW";
t[t.KBTL = 1235] = "KBTL";
t[t.BIMAT = 515] = "BIMAT";
t[t.MEOTAILOC = 516] = "MEOTAILOC";
t[t.TRENDUOI = 517] = "TRENDUOI";
t[t.CHOTET = 518] = "CHOTET";
t[t.BAUCUATO = 519] = "BAUCUATO";
t[t.AVIATOR = 520] = "AVIATOR";
t[t.LINHCHAUTY = 525] = "LINHCHAUTY";
t[t.BMW = 526] = "BMW";
t[t.BONGDA = 7007] = "BONGDA";
t[t.MINIPOKER = 41] = "MINIPOKER";
t[t.TAIXIU = 89] = "TAIXIU";
t[t.TAIXIUMD5 = 90] = "TAIXIUMD5";
t[t.TAIXIULIVE = 521] = "TAIXIULIVE";
t[t.XOCDIALIVE = 522] = "XOCDIALIVE";
t[t.ANKHE = 5002] = "ANKHE";
t[t.BANCA = 123] = "BANCA";
t[t.XOCDIA = 333] = "XOCDIA";
t[t.GAME_POKER = 107] = "GAME_POKER";
t[t.GAME_TLMN_DL = 100] = "GAME_TLMN_DL";
t[t.GAME_MAUBINH = 7] = "GAME_MAUBINH";
t[t.GAME_BA_CAY = 102] = "GAME_BA_CAY";
t[t.GAME_SAMLOC = 101] = "GAME_SAMLOC";
})(n.GAME_IDS || (n.GAME_IDS = {}));
n.getStringBodyByObject = function(t) {
if (!t) return "";
var e = [];
for (var n in t) e.push(n + "=" + encodeURIComponent(t[n]));
return "?" + e.join("&");
};
cc._RF.pop();
}, {} ],
LobbyCtrl: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "a3832nwcBdNMKefpx7BqvfH", "LobbyCtrl");
var o, i = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
})(t, e);
}, function(t, e) {
o(t, e);
function n() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n());
}), r = this && this.__decorate || function(t, e, n, o) {
var i, r = arguments.length, c = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, n, o); else for (var a = t.length - 1; a >= 0; a--) (i = t[a]) && (c = (r < 3 ? i(c) : r > 3 ? i(e, n, c) : i(e, n)) || c);
return r > 3 && c && Object.defineProperty(e, n, c), c;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var c = t("../LobbyConst"), a = t("./audio/LobbAudioDefined"), s = t("./BannerPromotion"), p = t("./network/NetworkPortal"), l = t("./network/NotificationNetworkHandle"), u = cc._decorator, h = u.ccclass, d = u.property, f = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.prfUpdateDisplayName = null;
e.prefabOTP = null;
e.nWidgetIcon = null;
e.PrefabIconTopHu = null;
e.NodeActivePhone = null;
e.PreBigBangIcon = null;
e.scrollview = null;
e.prefabx3 = null;
e.Img = [];
e.ImgRandom = null;
e.nodeMidMobile = null;
e.nodeMidDesktop = null;
e.listEventByDay = [];
return e;
}
e.prototype.update = function() {
if (this.node.active) for (var t = cc.rect(-this.scrollview.content.x, -this.scrollview.node.height / 2, this.scrollview.node.width, this.scrollview.node.height), e = 0; e < this.scrollview.content.children.length; e++) {
var n = this.scrollview.content.children[e];
t.intersects(n.getBoundingBox()) ? n.opacity = 255 : n.opacity = 0;
}
};
e.prototype.onLoad = function() {
if (cc.sys.isMobile) {
this.nodeMidMobile.active = !0;
this.nodeMidDesktop.active = !1;
} else {
this.nodeMidMobile.active = !1;
this.nodeMidDesktop.active = !0;
}
};
e.prototype.getGameEventByDay = function() {
var t = new Date();
if (t.getMonth() + 1 >= 13) {
var e = new Array(7);
e[0] = "Sunday";
e[1] = "Monday";
e[2] = "Tuesday";
e[3] = "Wednesday";
e[4] = "Thursday";
e[5] = "Friday";
e[6] = "Saturday";
var n = [];
switch (e[t.getDay()]) {
case "Monday":
c.LobbyConst.listEventByDay = n.concat(c.GAME_IDS.LONGVUONG);
break;

case "Tuesday":
c.LobbyConst.listEventByDay = n.concat(c.GAME_IDS.ANGRYBIRD);
break;

case "Wednesday":
c.LobbyConst.listEventByDay = n.concat(c.GAME_IDS.LIENMINH);
break;

case "Thursday":
c.LobbyConst.listEventByDay = n.concat(c.GAME_IDS.LONGVUONG);
break;

case "Friday":
c.LobbyConst.listEventByDay = n.concat(c.GAME_IDS.MINIPOKER);
break;

case "Saturday":
c.LobbyConst.listEventByDay = n.concat(c.GAME_IDS.RUNGRAM);
break;

case "Sunday":
c.LobbyConst.listEventByDay = n.concat(c.GAME_IDS.TAYDUKY);
}
} else c.LobbyConst.listEventByDay = [ c.GAME_IDS.LONGVUONG, c.GAME_IDS.TAYDUKY, c.GAME_IDS.FROZEN, c.GAME_IDS.SINBAD, c.GAME_IDS.RUNGRAM, c.GAME_IDS.MINIPOKER ];
};
e.prototype.onEnable = function() {
lngui.EventDispatch.instance.add(lngui.EVENT_GAMECORE.LOGIN_SUCCESS, this.onLoginSuccess, this);
lngui.EventDispatch.instance.add(c.LobbyConst.EVENT_NAME.SHOW_BANNER_PROMOTION, this.loadBannerPromotion, this);
this._addGUIOTP();
this._addWidgetIcon();
this.getGameEventByDay();
this.ImgRandom.spriteFrame = this.Img[0];
this.onImgRandom();
this._addSoundBGM();
this._addTopHuIcon();
var t = cc.Canvas.instance.getComponent(l.default);
t ? t.mSignalr || t.connect() : cc.Canvas.instance.addComponent(l.default).connect();
var e = cc.Canvas.instance.node.getChildByName("Prefab_BigBang_Icon");
e && (e.active = !0);
};
e.prototype._addSoundBGM = function() {
lngui.AudioManager.instance.playMusic(a.default.instance.music_bgm);
};
e.prototype._addTopHuIcon = function() {
if (cc.Canvas.instance.node.getChildByName("Prefab_TopHu_Icon")) cc.Canvas.instance.node.getChildByName("Prefab_TopHu_Icon").active = !0; else {
var t = cc.instantiate(this.PrefabIconTopHu);
t.x = -690;
t.y = -310;
t.name = "Prefab_TopHu_Icon";
t.parent = cc.Canvas.instance.node;
t.zIndex = lngui.eZIndex.Z_ORDER_MAX;
}
};
e.prototype.removeTopHuIcon = function() {
cc.Canvas.instance.node.getChildByName("Prefab_TopHu_Icon") && (cc.Canvas.instance.node.getChildByName("Prefab_TopHu_Icon").active = !1);
};
e.prototype.removeBigBangIcon = function() {
cc.Canvas.instance.node.getChildByName("Prefab_BigBang_Icon") && (cc.Canvas.instance.node.getChildByName("Prefab_BigBang_Icon").active = !1);
};
e.prototype.loadBannerPromotion = function() {
lngui.UIPopupManager.instance.has(s.default);
};
e.prototype._addWidgetIcon = function() {
if (!lngui.GameCoreManager.instance.nMiniGames.getChildByName("nWidgetIcon")) {
var t = cc.instantiate(this.nWidgetIcon);
t.name = "nWidgetIcon";
lngui.GameCoreManager.instance.nMiniGames.addChild(t);
}
};
e.prototype._addGUIOTP = function() {
var t = {
namePrefab: "GUI_OTP",
prfDefined: this.prefabOTP
};
lngui.CommonAssetDefined.instance.listPrefabDefined.push(t);
};
e.prototype.onDisable = function() {
lngui.AudioManager.instance.pauseMusic();
lngui.EventDispatch.instance.remove(lngui.EVENT_GAMECORE.LOGIN_SUCCESS, this.onLoginSuccess, this);
var t = cc.Canvas.instance.node.getChildByName("Prefab_BigBang_Icon");
t && (t.active = !1);
this.removeTopHuIcon();
};
e.prototype.onLoginSuccess = function() {
console.log(lngui.UserManager.instance.mainUserInfo);
if (null == lngui.UserManager.instance.mainUserInfo.NickName || "" == lngui.UserManager.instance.mainUserInfo.NickName) {
lngui.UIPopupManager.instance.showPopupFromPrefab(this.prfUpdateDisplayName);
(t = cc.Canvas.instance.getComponent(p.default)) ? t.connect() : cc.Canvas.instance.addComponent(p.default).connect();
} else {
var t;
(t = cc.Canvas.instance.getComponent(p.default)) ? t.connect() : cc.Canvas.instance.addComponent(p.default).connect();
}
};
e.prototype.onImgRandom = function() {
var t = this;
this.schedule(function() {
t.ImgRandom.spriteFrame = t.Img[Math.floor(Math.random() * t.Img.length)];
}, 10);
};
r([ d(cc.Prefab) ], e.prototype, "prfUpdateDisplayName", void 0);
r([ d(cc.Prefab) ], e.prototype, "prefabOTP", void 0);
r([ d(cc.Prefab) ], e.prototype, "nWidgetIcon", void 0);
r([ d(cc.Prefab) ], e.prototype, "PrefabIconTopHu", void 0);
r([ d(cc.Node) ], e.prototype, "NodeActivePhone", void 0);
r([ d(cc.Prefab) ], e.prototype, "PreBigBangIcon", void 0);
r([ d(cc.ScrollView) ], e.prototype, "scrollview", void 0);
r([ d(cc.Prefab) ], e.prototype, "prefabx3", void 0);
r([ d(cc.SpriteFrame) ], e.prototype, "Img", void 0);
r([ d(cc.Sprite) ], e.prototype, "ImgRandom", void 0);
r([ d(cc.Node) ], e.prototype, "nodeMidMobile", void 0);
r([ d(cc.Node) ], e.prototype, "nodeMidDesktop", void 0);
return r([ h ], e);
}(cc.Component);
n.default = f;
cc._RF.pop();
}, {
"../LobbyConst": "LobbyConst",
"./BannerPromotion": "BannerPromotion",
"./audio/LobbAudioDefined": "LobbAudioDefined",
"./network/NetworkPortal": "NetworkPortal",
"./network/NotificationNetworkHandle": "NotificationNetworkHandle"
} ],
Lobby_MiniGameNavigator: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "17186JZy8dBJp0coDZ023Kr", "Lobby_MiniGameNavigator");
var o, i = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
})(t, e);
}, function(t, e) {
o(t, e);
function n() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n());
}), r = this && this.__decorate || function(t, e, n, o) {
var i, r = arguments.length, c = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, n, o); else for (var a = t.length - 1; a >= 0; a--) (i = t[a]) && (c = (r < 3 ? i(c) : r > 3 ? i(e, n, c) : i(e, n)) || c);
return r > 3 && c && Object.defineProperty(e, n, c), c;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var c = t("../../LobbyConst"), a = cc._decorator, s = a.ccclass, p = a.property, l = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.nBg = null;
return e;
}
e.prototype.start = function() {
this.nBg.opacity = 255;
this.nBg.scale = 0;
var t = cc.spawn(cc.scaleTo(.24, 1), cc.rotateBy(.5, 360));
this.nBg.runAction(t);
};
e.prototype.onEnable = function() {
t.prototype.onEnable.call(this);
lngui.EventDispatch.instance.add(c.LobbyConst.EVENT_NAME.BUNDLEMINI_DOWNLOAD_SUCCESS, this.hide, this);
};
e.prototype.onDisable = function() {
t.prototype.onDisable.call(this);
lngui.EventDispatch.instance.remove(c.LobbyConst.EVENT_NAME.BUNDLEMINI_DOWNLOAD_SUCCESS, this.hide, this);
};
r([ p(cc.Node) ], e.prototype, "nBg", void 0);
return r([ s ], e);
}(lngui.UIPopup);
n.default = l;
cc._RF.pop();
}, {
"../../LobbyConst": "LobbyConst"
} ],
Lobby_UIDraggable: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "9be29xRiu5CyJjMEFV1n4r1", "Lobby_UIDraggable");
var o, i = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
})(t, e);
}, function(t, e) {
o(t, e);
function n() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n());
}), r = this && this.__decorate || function(t, e, n, o) {
var i, r = arguments.length, c = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, n, o); else for (var a = t.length - 1; a >= 0; a--) (i = t[a]) && (c = (r < 3 ? i(c) : r > 3 ? i(e, n, c) : i(e, n)) || c);
return r > 3 && c && Object.defineProperty(e, n, c), c;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var c = cc._decorator, a = c.ccclass, s = c.property, p = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.draggable = !0;
e.backToStartPosition = !1;
e.autoFitEdge = !1;
return e;
}
r([ s ], e.prototype, "draggable", void 0);
r([ s ], e.prototype, "backToStartPosition", void 0);
r([ s ], e.prototype, "autoFitEdge", void 0);
return r([ a ], e);
}(lngui.UIDraggable);
n.default = p;
cc._RF.pop();
}, {} ],
Lobby_UINumericLabelHelper: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "6aa8bFsEZpNjIqUqHxoX0hf", "Lobby_UINumericLabelHelper");
var o, i = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
})(t, e);
}, function(t, e) {
o(t, e);
function n() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n());
}), r = this && this.__decorate || function(t, e, n, o) {
var i, r = arguments.length, c = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, n, o); else for (var a = t.length - 1; a >= 0; a--) (i = t[a]) && (c = (r < 3 ? i(c) : r > 3 ? i(e, n, c) : i(e, n)) || c);
return r > 3 && c && Object.defineProperty(e, n, c), c;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var c = cc._decorator, a = c.ccclass, s = c.property, p = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.isDot = !1;
return e;
}
r([ s ], e.prototype, "isDot", void 0);
return r([ a ], e);
}(lngui.UINumericLabelHelper);
n.default = p;
cc._RF.pop();
}, {} ],
Lobby_UIScrollBar: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "a6f97L48btM7LQAKF6khlKX", "Lobby_UIScrollBar");
var o, i = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
})(t, e);
}, function(t, e) {
o(t, e);
function n() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n());
}), r = this && this.__decorate || function(t, e, n, o) {
var i, r = arguments.length, c = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, n, o); else for (var a = t.length - 1; a >= 0; a--) (i = t[a]) && (c = (r < 3 ? i(c) : r > 3 ? i(e, n, c) : i(e, n)) || c);
return r > 3 && c && Object.defineProperty(e, n, c), c;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var c = cc._decorator, a = c.ccclass, s = c.property, p = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.handle = null;
e.direction = lngui.UIScrollBarDirection.VERTICAL;
e.enableAutoHide = !0;
e.autoHideTime = 1;
return e;
}
r([ s(cc.Sprite) ], e.prototype, "handle", void 0);
r([ s({
type: cc.Enum(lngui.UIScrollBarDirection)
}) ], e.prototype, "direction", void 0);
r([ s(cc.Boolean) ], e.prototype, "enableAutoHide", void 0);
r([ s(cc.Float) ], e.prototype, "autoHideTime", void 0);
return r([ a ], e);
}(lngui.UIScrollBar);
n.default = p;
cc._RF.pop();
}, {} ],
Lobby_UIShowPopupHelp: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "d0169/XWbxHQKww7MnOyWnF", "Lobby_UIShowPopupHelp");
var o, i = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
})(t, e);
}, function(t, e) {
o(t, e);
function n() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n());
}), r = this && this.__decorate || function(t, e, n, o) {
var i, r = arguments.length, c = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, n, o); else for (var a = t.length - 1; a >= 0; a--) (i = t[a]) && (c = (r < 3 ? i(c) : r > 3 ? i(e, n, c) : i(e, n)) || c);
return r > 3 && c && Object.defineProperty(e, n, c), c;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var c = cc._decorator, a = c.ccclass, s = c.property, p = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.text = "";
return e;
}
e.prototype.onEnable = function() {
this.node.getComponent(cc.Button) || this.node.addComponent(cc.Button);
this.node.on(lngui.ControlEvent.Click, this._onClicked, this);
this.node.on(cc.Node.EventType.MOUSE_ENTER, function() {
this.node.runAction(cc.scaleTo(.2, .92, .92));
}.bind(this));
this.node.on(cc.Node.EventType.MOUSE_LEAVE, function() {
this.node.runAction(cc.scaleTo(.2, 1, 1));
}.bind(this));
};
e.prototype.onDisable = function() {
this.node.off(lngui.ControlEvent.Click, this._onClicked, this);
};
e.prototype._onClicked = function() {
lngui.UIPopupManager.instance.showPopup(this.text);
};
r([ s ], e.prototype, "text", void 0);
return r([ a ], e);
}(cc.Component);
n.default = p;
cc._RF.pop();
}, {} ],
Lobby_UIShowToolTip: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "48d7b9tUTVPYKyHs0k6iVYu", "Lobby_UIShowToolTip");
var o, i = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
})(t, e);
}, function(t, e) {
o(t, e);
function n() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n());
}), r = this && this.__decorate || function(t, e, n, o) {
var i, r = arguments.length, c = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, n, o); else for (var a = t.length - 1; a >= 0; a--) (i = t[a]) && (c = (r < 3 ? i(c) : r > 3 ? i(e, n, c) : i(e, n)) || c);
return r > 3 && c && Object.defineProperty(e, n, c), c;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var c = cc._decorator, a = c.ccclass, s = c.property, p = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.text = "";
e.Loading = !0;
e.timeLoading = 2;
return e;
}
e.prototype.onEnable = function() {
this.node.getComponent(cc.Button) || this.node.addComponent(cc.Button);
this.node.on(lngui.ControlEvent.Click, this._onClicked, this);
this.node.on(cc.Node.EventType.MOUSE_ENTER, function() {
this.node.runAction(cc.scaleTo(.2, .92, .92));
}.bind(this));
this.node.on(cc.Node.EventType.MOUSE_LEAVE, function() {
this.node.runAction(cc.scaleTo(.2, 1, 1));
}.bind(this));
};
e.prototype.onDisable = function() {
this.node.off(lngui.ControlEvent.Click, this._onClicked, this);
};
e.prototype._onClicked = function() {
var t = this;
if (this.Loading) {
lngui.UIWaitingLayout.showWaiting();
setTimeout(function() {
lngui.UIWaitingLayout.hideWaiting();
lngui.UITextManager.showCenterNotification(t.text);
}, 2e3);
} else lngui.UITextManager.showCenterNotification(this.text);
};
r([ s ], e.prototype, "text", void 0);
r([ s ], e.prototype, "Loading", void 0);
r([ s ], e.prototype, "timeLoading", void 0);
return r([ a ], e);
}(cc.Component);
n.default = p;
cc._RF.pop();
}, {} ],
Lobby_UITableView: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "498cbDOIwhMmZQNxq7SA5ho", "Lobby_UITableView");
var o, i = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
})(t, e);
}, function(t, e) {
o(t, e);
function n() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n());
}), r = this && this.__decorate || function(t, e, n, o) {
var i, r = arguments.length, c = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, n, o); else for (var a = t.length - 1; a >= 0; a--) (i = t[a]) && (c = (r < 3 ? i(c) : r > 3 ? i(e, n, c) : i(e, n)) || c);
return r > 3 && c && Object.defineProperty(e, n, c), c;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var c = t("./Lobby_UIScrollBar"), a = cc._decorator, s = a.ccclass, p = a.property, l = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.direction = lngui.UIScrollDirection.BOTH;
e.zoomScaleEnabled = !1;
e.maxScale = 1;
e.minScale = 1;
e.content = null;
e.scrollEnabled = !0;
e.touchEnabled = !0;
e.dragChildrenEnabled = !1;
e.easingAutoScroll = !0;
e.movementFactor = .64;
e.horizontalScrollBar = null;
e.verticalScrollBar = null;
e.autoClearAutoScroll = !1;
e.autoClearAutoZoomScale = !1;
e.fillOrder = lngui.UITableViewFillOrder.LEFT_TO_RIGHT__TOP_TO_BOTTOM;
e.interactionMode = lngui.UITableViewInteractionMode.NONE;
e.cellPagingEnabled = !1;
e.numberOfPagingCell = 1;
e.tableCell = null;
e.nEmpty = null;
return e;
}
r([ p({
type: cc.Enum(lngui.UIScrollDirection)
}) ], e.prototype, "direction", void 0);
r([ p ], e.prototype, "zoomScaleEnabled", void 0);
r([ p ], e.prototype, "maxScale", void 0);
r([ p ], e.prototype, "minScale", void 0);
r([ p(cc.Node) ], e.prototype, "content", void 0);
r([ p ], e.prototype, "scrollEnabled", void 0);
r([ p ], e.prototype, "touchEnabled", void 0);
r([ p ], e.prototype, "dragChildrenEnabled", void 0);
r([ p ], e.prototype, "easingAutoScroll", void 0);
r([ p ], e.prototype, "movementFactor", void 0);
r([ p(c.default) ], e.prototype, "horizontalScrollBar", void 0);
r([ p(c.default) ], e.prototype, "verticalScrollBar", void 0);
r([ p ], e.prototype, "autoClearAutoScroll", void 0);
r([ p ], e.prototype, "autoClearAutoZoomScale", void 0);
r([ p({
type: cc.Enum(lngui.UITableViewFillOrder)
}) ], e.prototype, "fillOrder", void 0);
r([ p({
type: cc.Enum(lngui.UITableViewInteractionMode)
}) ], e.prototype, "interactionMode", void 0);
r([ p(cc.Boolean) ], e.prototype, "cellPagingEnabled", void 0);
r([ p(cc.Integer) ], e.prototype, "numberOfPagingCell", void 0);
r([ p(cc.Prefab) ], e.prototype, "tableCell", void 0);
r([ p(cc.Node) ], e.prototype, "nEmpty", void 0);
return r([ s ], e);
}(lngui.UITableView);
n.default = l;
cc._RF.pop();
}, {
"./Lobby_UIScrollBar": "Lobby_UIScrollBar"
} ],
LoginByLanding: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "ed3f8QGDo1Jh7D8nmdXAlvf", "LoginByLanding");
var o, i = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
})(t, e);
}, function(t, e) {
o(t, e);
function n() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n());
}), r = this && this.__decorate || function(t, e, n, o) {
var i, r = arguments.length, c = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, n, o); else for (var a = t.length - 1; a >= 0; a--) (i = t[a]) && (c = (r < 3 ? i(c) : r > 3 ? i(e, n, c) : i(e, n)) || c);
return r > 3 && c && Object.defineProperty(e, n, c), c;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var c = t("../LobbyConst"), a = cc._decorator, s = a.ccclass, p = (a.property, function(t) {
i(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
e.prototype.onLoad = function() {
this.loginWithToken();
};
e.prototype.loginWithToken = function() {
var t = this;
if (cc.sys.isBrowser) {
var e = window.location.href, n = e.slice("https://web.big79.club/token=".length, e.length);
if (n && !(n.length < 30)) {
var o = "https://api.${lngui.ConfigManager.instance.ConfigInfo.Api}/Authen/GetAuthentication?token=" + n;
lngui.Https.getRaw(o, function(e, o) {
if (200 == e) {
var i = JSON.parse(o);
i.GameToken = n;
lngui.UserManager.instance.mainUserInfo = i;
lngui.UserManager.instance.mainUserInfo.UserName = i.UserName;
lngui.UserManager.instance.mainUserInfo.NickName = i.UserName;
lngui.EventDispatch.instance.emit(lngui.EVENT_GAMECORE.LOGIN_SUCCESS);
lngui.EventDispatch.instance.emit(c.LobbyConst.EVENT_NAME.SHOW_BANNER_PROMOTION);
t.requestAccount(i);
}
});
}
}
};
e.prototype.requestAccount = function() {
lngui.Https.get(c.LobbyConst.API.URL + c.LobbyConst.API.GET_INFO_ACCOUNT, {}, function(t, e) {
lngui.UserManager.instance.mainUserInfo.TotalVipPoint = e.TotalVipPoint;
lngui.UserManager.instance.mainUserInfo.VipPoint = e.VipPoint;
lngui.EventDispatch.instance.emit(lngui.EVENT_GAMECORE.UPDATE_DISPLAYNAME);
});
};
e.prototype.requestUnreadMail = function() {
var t = c.LobbyConst.API.URL + c.LobbyConst.API.GET_UNREAD_MAIL;
lngui.Https.get(t, function(t) {
lngui.ZLog.log("requestUnreadMail ===" + JSON.stringify(t));
t && t.ResponseCode;
});
};
return r([ s ], e);
}(cc.Component));
n.default = p;
cc._RF.pop();
}, {
"../LobbyConst": "LobbyConst"
} ],
LoginCtrl: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "65be4uyy4xF46qG67e6b51q", "LoginCtrl");
var o, i = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
})(t, e);
}, function(t, e) {
o(t, e);
function n() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n());
}), r = this && this.__decorate || function(t, e, n, o) {
var i, r = arguments.length, c = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, n, o); else for (var a = t.length - 1; a >= 0; a--) (i = t[a]) && (c = (r < 3 ? i(c) : r > 3 ? i(e, n, c) : i(e, n)) || c);
return r > 3 && c && Object.defineProperty(e, n, c), c;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var c = t("../LobbyConst"), a = t("./utils/CapchaZ"), s = t("./autologin/CheckAndSaveToken"), p = t("./autorotate/EditBoxController "), l = cc._decorator, u = l.ccclass, h = l.property, d = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.edbAccount = null;
e.edbPass = null;
e.edbCaptcha = null;
e.UICaptcha = null;
e.Captcha = null;
e.nCapcha = null;
e.nButton = null;
e.toggleSaveAccount = null;
e.isRequesting = !1;
e.token = null;
e.captchafake = [];
return e;
}
e.prototype.onEnable = function() {
var t = lngui.ClientData.getBoolean("SAVE_PASS", !0);
this.toggleSaveAccount.isChecked = t;
this.edbAccount.string = lngui.ClientData.getString("USER_NAME", "");
this.edbPass.string = lngui.ClientData.getString("PASSWORD", "");
this.captchafake = [ {
code: 200,
data: {
image: "iVBORw0KGgoAAAANSUhEUgAAAKAAAAAyCAIAAABUA0cyAAADAklEQVR42u2cW3KDMAxFs93+dRPdYlfQffQxaTuALflePYxD5OGnhBjjw5VlSentVu3y7VNqH++nHG+vL+1Y2pPfZ7pXVvtvAOAzeP9ga2A/F+CgmbQCTua9xZYLWDYY5wM+U8HIIBxDnAq41/NZaxO1ZiEDVgEPb3YJwP1OggQUpWAIMK3grVi7Bu0CgJMtZAF+HMBJprUALwTY9yAFuAAX4AJcgAtwAS7A+z1iexTgSwB+hkjW4oB7wXllS9YeBXh5wFg/0gUFuACvBxhNZhfgbMCSj+Y5DnTjFZyf2HbeEayGyAfsaIqC0+W7l06ggjXAjILPBpycGXUBTs3IPgXgNjaylIKRsQkKLsAWUyZxOguw0vNagENqsjrFl3GAdU6nAJZ6Zu/Vr1v9c7ikTzlnbc+PBoyW2QKApdnJADyuCCYBm18mEbAkG0bBVAU0Ok0GwNCN4wBDxd4M4LZ5tnP3r/cHyQBmC93H06QZK9WLHloh1kwpX0FL+X2A2QU4QCd7wIZfMuz+HlsPcg02i1hSMKIJwmcc2tX9R6sB7s5Y3x6LM742YFpkMuBhVzYvGhqqMI2IzUdXChbwb5S/F4zcntQHZB+u2YROB+x3/aSXm7s7BxjZwCUoWBcEBAAGHBXogN6eJwG8vcAAOFbBgYCvrGB223o9wPY1eAJg0YtWE4KHk8pCq3sNXf9w6EUvBdjlRY8Ag4zJcAGSS0hTcHsxHbzUK9PU4EMqYFvwxAI4YL+vAgZ7pgATjCcCRiNZTOHAcN8PhSq9S10zNXo/3ZNOwIZIVixgLhYNZ6WQeBaRLkwFbM6ydQGjIp6SD9aySabZOAC+jy0A8NiLNpnBkDTq7oFxP3N6wn87b54eWsDt3MYl/H1J9TzA/oT/0oCx8vfDvSyAdU8vo5jSDhgr/zcPYxEFKwoZA2bhRQEmHlgHzAslyg49AmCziUtuBbgAF+ACXID1JXmak4Us1QU4AvCUh2H3UQV4OmDnrrEALw54wj+BTQWct9BEAfZU71a7WvsCM60c/Ug+bJgAAAAASUVORK5CYII=",
sessionId: "3fbfe18b6008461993d26f7c55392152"
}
}, {
code: 200,
data: {
image: "iVBORw0KGgoAAAANSUhEUgAAAKAAAAAyCAIAAABUA0cyAAAC8UlEQVR42u2cYXrDIAiGe9392yV2xZ1g9+i6p1uWWoXvAzTG4pMf6xqJ4Q0CYnq5ZFu+Xavt6/PKtluXmY6P9zf825+P3VpX4ULrALj6H17UppGmajaZj8L35//+3bh6Ifl8gIFHPAFrDIbMJagEHlACBgDPYcE+wLFuLwFPBzjOghNwAu4D2B1Fx89eCTgYcNWC79rvZsGVCSMBJ+AEnIAXAIwljqyn3J8v9L19lYD7Az7OghNwAk7ACTgBJ+AEnICXAHxXqO0QruU8Cl28ImB0d4AMeH8xTBShEasF13VBbouIBIzXd4uBmevBxPYPETC9mWRKwKo2W2m3NA+RPot9BCUts0hagG17huYFzFtwAOC/B4UdoUbeDdi8KSwBVwOOh2EAPrQvYKEvpbgBgJuD2cXqBwB+nucx36z44OJWowDLz5AN8LMQP2ApGTMFWS7AWBStGJJ8qyGAkSBuEsD1UY0HjFVWqo55ywOlmXO7ng2w3qsD4Eqmu1OEcEDBMwzYuDu9ClhTCOGDy5NOCLiHBRvy4GGA1UHWARczRghg0G7Ypahq906A1Wh/MGAuDxa8TgjgSsdalG9f22tRhNMkg32M8MHwE6ksVVbO9gHWO04PmE3nDgSMj9/3ytpygOVA4SjAuMnFv5A4J2BPxckQJQyOog8DrDCOiKIhwGL0yypotjTJWC7sBLhYBeyRJhkAK0kkFWS1i3qBgOkpGq8H0wX/iEX8kYC9aZLo75WbOg3gx7W0ZQBDCx2vApgpU3vKhX7A6DIWuFT5moAFPbYkjQQMjXBVwGwoKwCm5A+LooX6q6VcOAQwnSaFA9b3RA4ETGyybJ8csjG0B2BjmuQC7EASD5iS/6xQRgnChHEqwBFvvCfgKQDTE1HEZnR9bu8JuBzADIAdtkT8ys6/CG3zn/F+nC0EsG+QyCNuBKwNGACMjD4BgyoKuYVYwIGhZgKeEXCUBdtdTgIGfLBQck7AK1hwAl4NsDM3yZ/KXr99A9RfaUETpuIhAAAAAElFTkSuQmCC",
sessionId: "41768e329f0b44ff9c4f5ed0c02e7e71"
}
}, {
code: 200,
data: {
image: "iVBORw0KGgoAAAANSUhEUgAAAKAAAAAyCAIAAABUA0cyAAADHklEQVR42u2cW1IEIQxFZ7v+uQm36Arch45V1jhCHjchNHR7qfnCpgk5BEJIe7uxXL58bl4+3sXqt9eXRKuRh50e3YZmL9/PgDLDQyNgAiZgAiZgAiZgAiZgEfC9Jv57yEnAZwAcl/Z8gO8Siz8C3gNwap0JrUVnAazN1J/5emLAB1OvnStVgBOKWgl4BpWgasS/IuuhuAsQcHYNBKQk4KWABxc3Aj4BYL2SgAsaznFHCHgnwLgFw90R8GLA7aXtYYDbC2MCLgWs3soT8AUAq2kXFSd1Al4MWM2lAfZgAiZg3MmaFkesjTmXAMbT0/ruog13AlzkRYMOhW3BkwBHUxB9TsGGISdr7hLtXIPA6tOWfQ2w8wbsskFsBb5ZHG/zvK2cZxWFdGIAtudWHHA8Fh1N1+0B53J+G2VpTfB3PtekLRhViATYmFh9kedTOWBRbluVDeBEUnffKa4OpCPDEMEAJLgO5VZEY3YWAxYa6uRAwPY5EtlTcdPPTCbs+GC988nJ2hqwJb2p6GfA/QN2JAhh7w4KWcYHAfsqMn0dZONv6hcA1p4ZAQyaaRQw3lEsACA2B7zlxNdGxwFGZuLjMRcwyCM0qNCkWQ445tmdzoJLAPduvOj+DH29FwHsHrQSMlwccMiIZcBS/STArb9p3+GHDo3zAIsBGteLjgIe3GhdwKFz88hJ0o75gE71ocekXnrkmCSeQUHxJgH2o4yHAw5oYzZgPJJl7Dd2vdawEDBoNJMAG70cDTgXlvu9IcA2G9GyBy24CUzuBniXSBa6oGmAdZMSr0Ciklt7hDRANNtm2AZKABc7WcgtihZ26Ztrx0FVEiVsi4wZunlUAoeBkyhmA7IXnbigw49JuVyvkYwO+3ZMPvunAAeyNXJfNebUOOBk+bGRAwAjFqxVGt/iaYBHsmqq0nT+E+DBwesWXCjOdoCDKU3WYkbAmwKOCO8BBr7kJODwAPEEwhDg7j0Y4IE9gIANDLg/8edTfxtw54QS8ArA6bF4gBuiBHwtwLk92PlvIAR8bsD0ojcDjMcDjPALAe8KOD46JKjHcsHyBaoXdrc4KJyzAAAAAElFTkSuQmCC",
sessionId: "72f95f561e9647e4aab51950a252ddec"
}
}, {
code: 200,
data: {
image: "iVBORw0KGgoAAAANSUhEUgAAAKAAAAAyCAIAAABUA0cyAAAC7ElEQVR42u2aWXLDIAyGfd2+9RK9Yk/Qe6SZZsYlWDuS8fIznjzEtgB9FlpgWdAu3x47t5/vdJFfnx+PIzRuaqlTtk8WgO8J+DmasUsZAQDbpXHqtYHgAZeqG4DHpGVYMADPAtw+CcAlgL0eBxZ8PsBh4XcHnBusAfARAXvkAzAAAzAAAzAAd4N8SusuAL4QYBQ6ABiAxwDHqt/Dudb1AWftISYAzrNgAF76zYel/z9tcwmAJ1rw6CmApK8hfYMSgPMAMyOABd8O8DbRHL8A+DCAzaJKLTgcS0ov1ny74cLLbMDcERN/iKekSUwXsZlGXk+1YPdQhUE7phEDTKls7THLgoVsMBcweysV8HbMCj7yCfcBWxvgt3WGsqe1udYieR2Wp7YP4MjK0aiUyGAdgEVFk3onvEIHL6r92PdOdlF0Mlx43Q7Ya8Hy624LFgatVKmi2h/0Pdsu7HaWZcR2Hc4HHAkrPIAVgcWAV688C3DABw8BVr+v/QCPVLIMAflrJBWAZTUeC7Dd5aQAjuxGaF1wA+YAe7MyAfA2+4h7hCmAU3ywkk6ULdErYD0IcAFu/ukeELZw9BwBgAsBOwNpq/OL7tHJQjIBB7Z0TgHYVZcIAxaqBW4L5u8Kcd+QBYcB9xnw36/LYxm7EHywt/DEFQlyAbelBaEgwZUrTCl/BeD0KoSxi9Z2peJDCHA7DHYiLsDqUir3Rd5She4MuK6SlQ64LeHtANhSf50JmKvQxnJTezW01bXkKbQgw5tbjgOWpyMBdi0LuYC3io5VOQRlsZ7y3dNbiuFkL8ZvS92SCQPWi2t2oUWAB6No+4mONoquBkxv8I0BFnK5VRqxzLiEXhvwdiFNAfwvMBWwet4DgPUU87iA7WFmAmAxKgkALjrBpAIuWqJPBljY7Sd7dQP2z82oLBKwvex6A8DcsF4mKyv03oDJcy/VFwDH45egIcKCj2zBvhASgAF4J8AJx+oB+DIWzI4bgA8LGO3C7RfJoqRyWWvzVQAAAABJRU5ErkJggg==",
sessionId: "8dd4ca74f37c4aadb6131860e23c489b"
}
}, {
code: 200,
data: {
image: "iVBORw0KGgoAAAANSUhEUgAAAKAAAAAyCAIAAABUA0cyAAAC7UlEQVR42u2abU7DMAyGd13+cQmuyAm4xxhIoLaJv147ada9UTWh0saxnzh2ndxubJdv97Z9fR5/Pc3/5KZ9vL8d/t7emdGgYY8TfVT/95nWJh4r5QA/7u8vDAwBLww4KrKZE/mrYDYQcCXgag8mYAImYAImYAJ+RcAPGYeLgEcAbu3ssnYWMGApAgYAJ9Qk4PMAy199BHwVwEIeQ8AETMAETMAdZWeWUf+EShkykDMTcMyZ8k00rywOZvlygO0t0TqvPYzBK3oy4M6wpgB+3OxsUaeNjnWI2ff/lfCOex3grqyd8ocx/YgZDzh2DCEiNOBGm98M4JgWavTNAO44bfeJCYDD50yeCjCcH1wWMBaD1wScQTUAsLJEh05NEHCjTmw1QgFL65/Xg/2AjS+5/QOtxCrA3gV/fAz2Aj7k5I7k0ZNRegHjARKNwbWAxVRzFmBbo40Wzg8/ZfWNAS6ju1EDOcmbAyxapwJwgS4WYL1/Y0IrgCvpngfYEFThwd3OA12pgE0VygAXlvUVrkNjMALYUR6ZCXj7iu4eBuBiuo5CxyDAxn89gNFKVh6w2Ke8HB7f7ea03RQ3ebVp9gjAppVxwECJtBqwGe+8pUpPITccrqZ4sGniFGDVg/FlbyxgK5KXuK/Hg5Fi7NqA81n0DMDSQAEPdgIOTZqlAINOPB+wJ5jldy4L8rit0X1R8EqAdUb2frD+/oKAzbVHL3eMAOwtVRZ9JsUAd4dbFZLxiOUGfN+fmwELHUHAyMRVa9GBus0+/7UAWx8eJYdLKgG7i5SLAoZKlYrveQFLrrYg4O6+rDbfpwB2bTaogKU+JSkxD5YGvSbggJT42dVo9AG/J9PW6wAGtqCrANeWP/EMvM6Dw/bZeDCsiwgYnlM1BzzTihFwO7aYB0c9+4kAK1U2TyVOdwYCPhtw00/tuXMCXgvwiFTrcoCBUaYVO41KYasALNaRntuDq9uzAu5pQcAETMAETMAETMCnAma7cPsG5PAooSxW0mcAAAAASUVORK5CYII=",
sessionId: "3a36c54381a54b2ab5fc04c6f998fca2"
}
}, {
code: 200,
data: {
image: "iVBORw0KGgoAAAANSUhEUgAAAKAAAAAyCAIAAABUA0cyAAADTklEQVR42u2cXXYDIQiFs92+dRPdYlfQffQv5yQaBe8F0ckETx6a6DijnyAg08sly+nLt1S+Prnf4fLx/nbv5P+Pv1+UxnzV6uKck9/LAz4J+EiAJ81tOTMJOAEn4AR8IMAxO9nto62nBLwIcGRJwAk4ASfgBLwIcPCGvdQCmAN4wQB6wwgE7JHgdnKmKAC5nyWAJ6mjrgRfn2kPYL9gJeCjA7ZKcAJOwK8K+AoV+STgJwRcd6tIMDFlTweYN0JBozoB7wNs9Yv0r5sBVzdqAOO6eqC9mwfTTr5hwLcLpwFWprSojQWspQZggJXLFVquA6LucXd3IIZjc6GHUnMik+4BjCduiICh9A8nYNVUngCYGgsmwUopse0FXA6qA5hI8QEAI7ffDhjUSfiiPw/g4daorHd9N50ImNh3rDrpoZ8FgNta5Uk0wLebEUl6Dgm2eXssYHFGeCt6C2DwYTTAXTuTBVy2jAVsjR77AXeNry2ACQmW3CQPYGV9zQHMS/C5AdN+sJluApaagbbSEDBnZA33KtYSUfp5iLopATnFMRUbLNmDW3JSMDIIsNEPBs1FF2CrBI+tXxWw37PXjSzWoRi615Sf0vVKjICRwYAjRAATYATATj8Y9ETF4wRyD0YCtBwOPD6nsamvAnuzhQlF1RoT6MC1mh9w2QPlF2nPDEbYh4CH5pVBgjkw2NLsLA5esYMh2C7gjjoVBDcQMGiOO60JVkUPrWjivjVg896pyJzHyPKcsDUqegdg3MjS7DISMH7AN2t1eqxovXPEnyTOzpDtMwiw9nsNiTpKMwNWtPoywHNUNIdHD1z3vMaVgDu2rnXfZQGDtVQQ1w7YLnwF4G7tAsB2I4vXz7iK1mvRxJU6BBQIGI0a7gOMCqLbNRKVPw4Yj/PU6SIhgIcI7bXzAOOxJCoX7DyA21jjvd/DA67y6YdhVFNu6EEAg31ybtIcwKMU0VDAuBWNHGS1U5eAxWbPCHiCkZWAh4Dt2dSrALsyvV8dcNsGxzZsyb8vCmV0WNdTAg4ATGr4aMDUm3kWwENPHHTYDTrq1QGbLicBe+YLlmDPYyTgBJyA4wEb9pIgwJ7dxPlS5IRXKQ8KOHL9coCtI3qO/50pxN2ynK38AN/vvVXdkLeMAAAAAElFTkSuQmCC",
sessionId: "b7c6c3cd23324e30a174240c01421c01"
}
}, {
code: 200,
data: {
image: "iVBORw0KGgoAAAANSUhEUgAAAKAAAAAyCAIAAABUA0cyAAACyUlEQVR42u2cUXKEMAiG97p96yV6xZ6g99h2pjuOGwP5+QMxUTI+uUYJnyQQcB+PbJdvz7j286399H58fX4cT77Oq7etXDC28QIo+oG7bE8/inE2YExNCTgBJ+AEfCHAf48rjgR8IcA1J+ZfgASM6uuswzaQnRIScKwxeVnwDQDX3ugEPAFgrwmqdqYaH+8Hc1vAhZ8VDDhgilYsOAEjYiTgBDwVYEcXNAFPCli24AS8AODqHk0CXhbwDNsFCfjEKVrsolowuGaDoVpnr8agEnAvYKOoW19T1lyRfEbATGmArLXqyrrtYJiOY5eqhD2AucqIHsDFAE1HKZ50AUhXG6drXrPZBZXQCJgufeEB29VokrA8y5f4jAJsq0OyAO6pbRoDmKBDAq4MFQOsa7+pC3OhGQy4s1TtLMBNX6EBWLn7JID1xZgG7BgmRQBGwK8NuBp+0ICrQzMhHwYYefXXtuBqmCSOkwU8s5Nlmn4gkI5OVidgPfqSZm8i1lKaeFvWV2i/kSxdJg4W3+LBgJWgHrDgHsDSAnERwJ1zSxzgHn3pIxUBw/sPNsChGx18LNha2MDZjwNs2+jAwg/dSnBR9SvLX40W3ETzRr7rW6Y7ATaJOgVgxEkBfQ16YXtpDc7DKFmBxl40oanD27+aBQOz0IAwqTiJqIZJNtCuCjxFD3OymgG6FgvND1hSU2Hc7oCPcdGJXjQPWP9pTsDWPC5HxfFWLoDRMIn5ZnyXgfcCLO0exPGw5WqMDELXYHMcHJ0u9JqOQv6/AMwHLw34iefSFwFM7AM37rMiYCTUcdklHwCY86INF69uwWTzqOjw8ixuBRj1opcDDGXoJgdsrNIlai5XA2ysUg7JxboDhm9+D8AWC07ACTgBLwh4uywBpwUn4Eha1k9XDB+5JODzAfc9BRltAvYEHGeOUkFkAh4IeExz3UW6EeBsF26/MtxNbsYSDDwAAAAASUVORK5CYII=",
sessionId: "9b7cdef5bbde47249fe512dcd308c6c6"
}
} ];
};
e.prototype.onClickLoginFB = function() {};
e.prototype.onClickLogin = function() {
var t = this, e = this.edbAccount.string.trim();
e = e.toLowerCase();
var n = this.edbPass.string.trim(), o = (this.edbCaptcha.string, window.md5(e.toLowerCase() + "zxc" + n.toLowerCase()));
if (e.length <= 0) lngui.UITextManager.showCenterNotification("Bạn chưa nhập tên tài khoản"); else if (n.length <= 0) lngui.UITextManager.showCenterNotification("Bạn chưa nhập mật khẩu"); else {
var i = {
UserName: e,
Password: window.md5(n),
passraw: n,
IpAddress: "",
DeviceName: "Chrome",
PlatformId: c.LobbyConst.platform,
deviceID: lngui.PlatformInterface.deviceID,
platform: lngui.PlatformInterface.platform,
OSName: lngui.PlatformInterface.OSName,
deviceToken: lngui.PlatformInterface.deviceToken,
phoneNumber: lngui.PlatformInterface.phoneNumber,
OSVersion: lngui.PlatformInterface.OSVersion,
appVersion: lngui.PlatformInterface.appVersion,
versionCode: lngui.PlatformInterface.versionCode,
bundleID: lngui.PlatformInterface.bundleID,
UIID: "",
MerchantId: 1002,
CaptchaText: this.edbCaptcha.string,
CaptchaToken: "",
gate: lngui.ConfigManager.instance.ConfigInfo.Gate,
otp: "",
Sid: o,
token: this.token,
captcha: this.edbCaptcha.string
};
lngui.Https.post(c.LobbyConst.API.URL + c.LobbyConst.API.LOGIN, i, function(e, n) {
e >= 200 && e < 400 ? n && t.onLoginSuccess(n, function() {
lngui.Https.get(c.LobbyConst.API.URL + c.LobbyConst.API.GET_INFO_ACCOUNT, function(t) {
lngui.UserManager.instance.mainUserInfo.PassWord = i.Password;
lngui.UserManager.instance.mainUserInfo.UserName = i.UserName;
lngui.UserManager.instance.mainUserInfo.TotalVipPoint = t.TotalVipPoint;
lngui.UserManager.instance.mainUserInfo.VipPoint = t.VipPoint;
lngui.UserManager.instance.mainUserInfo.Level = t.Level;
lngui.EventDispatch.instance.emit(lngui.EVENT_GAMECORE.UPDATE_DISPLAYNAME);
});
}) : lngui.UITextManager.showCenterNotification(n);
});
}
};
e.prototype.onLoginSuccess = function(t, e) {
lngui.UserManager.instance.mainUserInfo = t;
s.default.saveData(lngui.UserManager.instance.mainUserInfo.GameToken);
lngui.EventDispatch.instance.emit(lngui.EVENT_GAMECORE.UPDATE_TOTAL_GOLD, lngui.UserManager.instance.mainUserInfo.Money);
lngui.EventDispatch.instance.emit(lngui.EVENT_GAMECORE.UPDATE_TOTAL_VIPPOINT, lngui.UserManager.instance.mainUserInfo.TotalVipPoint);
this.hide();
lngui.EventDispatch.instance.emit(lngui.EVENT_GAMECORE.LOGIN_SUCCESS);
lngui.EventDispatch.instance.emit(c.LobbyConst.EVENT_NAME.SHOW_BANNER_PROMOTION);
if (this.toggleSaveAccount.isChecked) {
lngui.ClientData.setString("USER_NAME", this.edbAccount.string);
lngui.ClientData.setString("PASSWORD", this.edbPass.string);
} else {
this.edbAccount.string = "";
this.edbPass.string = "";
lngui.ClientData.setString("USER_NAME", this.edbAccount.string);
lngui.ClientData.setString("PASSWORD", this.edbPass.string);
}
e && e();
};
e.prototype.requestCaptcha = function() {
var t = this;
if (this.isRequesting) lngui.UITextManager.showCenterNotification("Vui lòng không tạo Mã Xác Thực quá nhanh."); else {
this.isRequesting = !0;
setTimeout(function() {
t.isRequesting = !1;
}, 3e3);
var e = "https://api." + lngui.ConfigManager.instance.ConfigInfo.Api + "/user/RequestCaptcha", n = {
gate: lngui.ConfigManager.instance.ConfigInfo.Gate
};
lngui.Https.post(e, n, function(e, n) {
if (n) {
t.loadImgBinary(n.data.image);
t.token = n.data.sessionId;
} else t.getCaptchaFake();
});
}
};
e.prototype.getCaptchaFake = function() {
var t = this.captchafake[Math.floor(Math.random() * this.captchafake.length)];
this.loadImgBinary(t.data.image);
this.token = t.data.sessionId;
};
e.prototype.loadImgBinary = function(t) {
var e = "data:image/png;base64," + t, n = new Image();
n.width = 160;
n.height = 50;
var o = this;
n.onload = function() {
var t = new cc.Texture2D();
t.initWithElement(n);
t.handleLoadedTexture();
var e = new cc.SpriteFrame(t);
o.Captcha.spriteFrame = e;
};
n.src = e;
};
e.prototype.setCookie = function() {};
e.prototype.onRefreshCaptchaClicked = function() {
this.UICaptcha.getCapChaId();
};
e.prototype.onToggleSavePass = function(t) {
var e = t.isChecked;
lngui.ClientData.setBoolean("SAVE_PASS", e);
};
e.prototype.requestUnreadMail = function() {
var t = c.LobbyConst.API.URL + c.LobbyConst.API.GET_UNREAD_MAIL;
lngui.Https.get(t, function(t) {
lngui.ZLog.log("requestUnreadMail ===" + JSON.stringify(t));
t && t.ResponseCode;
});
};
r([ h(p.default) ], e.prototype, "edbAccount", void 0);
r([ h(p.default) ], e.prototype, "edbPass", void 0);
r([ h(cc.EditBox) ], e.prototype, "edbCaptcha", void 0);
r([ h(a.default) ], e.prototype, "UICaptcha", void 0);
r([ h(cc.Sprite) ], e.prototype, "Captcha", void 0);
r([ h(cc.Node) ], e.prototype, "nCapcha", void 0);
r([ h(cc.Node) ], e.prototype, "nButton", void 0);
r([ h(cc.Toggle) ], e.prototype, "toggleSaveAccount", void 0);
return r([ u ], e);
}(lngui.UIPopup);
n.default = d;
cc._RF.pop();
}, {
"../LobbyConst": "LobbyConst",
"./autologin/CheckAndSaveToken": "CheckAndSaveToken",
"./autorotate/EditBoxController ": "EditBoxController ",
"./utils/CapchaZ": "CapchaZ"
} ],
MVUtils: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "51eddUDQF1F05VZcf0ZIFjr", "MVUtils");
Object.defineProperty(n, "__esModule", {
value: !0
});
n.MVUtils = void 0;
var o = function() {
function t() {}
t.formatDateTime = function(t) {
if ("" != t.length && 0 != t.length) {
var e = (t = t.split("T"))[0].split("-");
return e[2] + "/" + e[1] + "/" + e[0] + " - " + t[1].substr(0, 5);
}
};
t.formatDateTime4 = function(t) {
var e = (t = t.split("T"))[0].split("-");
return t[1].split(".")[0] + "\n" + e[2] + "-" + e[1] + "-" + e[0];
};
t.formatNumber = function(t) {
return !t || isNaN(t) ? "0" : t.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
};
t.toInt = function(t) {
if ("" == t) return 0;
cc.log("before==" + t);
var e = t.split(",").join("");
cc.log("after==" + e);
return parseInt(e);
};
t.ToVND = function(t) {
var e = t.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
null != e && "NaN" != e || (e = 0);
return e;
};
t.getToken = function() {
return this.getStringBodyByObject({
token: lngui.UserManager.instance.mainUserInfo.GameToken
}, void 0);
};
t.getStringBodyByObject = function(t, e) {
if (!t) return "";
if (null != e && e) return JSON.stringify(t);
var n = [];
for (var o in t) n.push(o + "=" + encodeURIComponent(t[o]));
return "?" + n.join("&");
};
t.getRaw = function(t, e, n, o, i, r) {
void 0 === o && (o = !1);
void 0 === i && (i = !1);
void 0 === r && (r = 3e4);
o && console.log("SendRequest =========>\nurl=" + t + "\ndata=" + JSON.stringify(e));
i && lngui.UIWaitingLayout.showWaiting();
var c = cc.loader.getXMLHttpRequest();
c.timeout = r;
c.open("GET", t + this.getStringBodyByObject(e, void 0), !0);
c.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
c.onreadystatechange = function() {
if (4 == c.readyState) if (c.status >= 200 && c.status < 400) {
o && console.log("ResponseText <=========\nstt=" + c.status + "\ndata=" + c.responseText);
i && lngui.UIWaitingLayout.hideWaiting();
n && n(c.status, JSON.parse(c.responseText));
} else {
i && lngui.UIWaitingLayout.hideWaiting();
n && n(c.status, c.responseText);
}
};
c.send();
};
t.postRaw = function(t, e, n, o, i, r) {
void 0 === o && (o = !1);
void 0 === i && (i = !1);
void 0 === r && (r = 3e4);
o && console.log("SendRequest =========>\nurl=" + t + "\ndata=" + JSON.stringify(e));
i && lngui.UIWaitingLayout.showWaiting();
var c = cc.loader.getXMLHttpRequest();
c.timeout = r;
c.open("POST", t);
c.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
c.onreadystatechange = function() {
if (4 == c.readyState) if (c.status >= 200 && c.status < 400) {
o && console.log("ResponseText <=========\nstt=" + c.status + "\ndata=" + c.responseText);
i && lngui.UIWaitingLayout.hideWaiting();
n && n(c.status, JSON.parse(c.responseText));
} else {
i && lngui.UIWaitingLayout.hideWaiting();
n && n(c.status, c.responseText);
}
};
c.send(JSON.stringify(e));
};
t.post = function(t, e, n, o, i, r) {
void 0 === o && (o = !1);
void 0 === i && (i = !1);
void 0 === r && (r = 3e4);
o && console.log("SendRequest =========>\nurl=" + t + "\ndata=" + JSON.stringify(e));
i && lngui.UIWaitingLayout.showWaiting();
var c = cc.loader.getXMLHttpRequest();
c.timeout = r;
c.open("POST", t + this.getToken());
c.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
c.onreadystatechange = function() {
if (4 == c.readyState) if (c.status >= 200 && c.status < 400) {
o && console.log("ResponseText <=========\nstt=" + c.status + "\ndata=" + c.responseText);
i && lngui.UIWaitingLayout.hideWaiting();
n && n(c.status, JSON.parse(c.responseText));
} else {
i && lngui.UIWaitingLayout.hideWaiting();
n && n(c.status, c.responseText);
}
};
c.send(JSON.stringify(e));
};
t.post2 = function(t, e, n, o, i, r) {
void 0 === o && (o = !1);
void 0 === i && (i = !1);
void 0 === r && (r = 3e4);
o && console.log("SendRequest =========>\nurl=" + t + "\ndata=" + JSON.stringify(e));
i && lngui.UIWaitingLayout.showWaiting();
var c = cc.loader.getXMLHttpRequest();
c.timeout = r;
c.open("POST", t + this.getToken());
c.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
c.onreadystatechange = function() {
if (4 == c.readyState) if (c.status >= 200 && c.status < 400) {
o && console.log("ResponseText <=========\nstt=" + c.status + "\ndata=" + c.responseText);
i && lngui.UIWaitingLayout.hideWaiting();
n && n(c.status, c.responseText);
} else {
i && lngui.UIWaitingLayout.hideWaiting();
n && n(c.status, c.responseText);
}
};
c.send(JSON.stringify(e));
};
t.get = function(t, e, n, o, i, r) {
void 0 === o && (o = !1);
void 0 === i && (i = !1);
void 0 === r && (r = 3e4);
e.token = lngui.UserManager.instance.mainUserInfo.GameToken;
o && console.log("SendRequest =========>\nurl=" + t + "\ndata=" + JSON.stringify(e));
i && lngui.UIWaitingLayout.showWaiting();
var c = cc.loader.getXMLHttpRequest();
c.timeout = r;
c.open("GET", t + this.getStringBodyByObject(e, void 0), !0);
c.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
c.onreadystatechange = function() {
if (4 == c.readyState) if (c.status >= 200 && c.status < 400) {
o && console.log("ResponseText <=========\nstt=" + c.status + "\ndata=" + c.responseText);
i && lngui.UIWaitingLayout.hideWaiting();
n && n(c.status, JSON.parse(c.responseText));
} else {
i && lngui.UIWaitingLayout.hideWaiting();
n && n(c.status, c.responseText);
}
};
c.send();
};
t.getOtpSMS = function() {
this.get("https://api." + lngui.ConfigManager.instance.ConfigInfo.Api + "/Account/getOTPSMS", {}, function(t, e) {
if (t >= 200 && t < 400) {
lngui.UIPopupManager.instance.showPopup("Hệ thống đã gửi mã OTP đến số điện thoại của bạn");
lngui.EventDispatch.instance.emit(lngui.EVENT_GAMECORE.UPDATE_TOTAL_GOLD, lngui.UserManager.instance.mainUserInfo.Money);
} else lngui.UIPopupManager.instance.showPopup(e);
});
};
t.removeVietnameseTones = function(t) {
return (t = (t = (t = (t = (t = (t = (t = (t = (t = (t = (t = (t = (t = (t = (t = (t = (t = (t = t.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, "a")).replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, "e")).replace(/ì|í|ị|ỉ|ĩ/g, "i")).replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, "o")).replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, "u")).replace(/ỳ|ý|ỵ|ỷ|ỹ/g, "y")).replace(/đ/g, "d")).replace(/À|Á|Ạ|Ả|Ã|Â|Ầ|Ấ|Ậ|Ẩ|Ẫ|Ă|Ằ|Ắ|Ặ|Ẳ|Ẵ/g, "A")).replace(/È|É|Ẹ|Ẻ|Ẽ|Ê|Ề|Ế|Ệ|Ể|Ễ/g, "E")).replace(/Ì|Í|Ị|Ỉ|Ĩ/g, "I")).replace(/Ò|Ó|Ọ|Ỏ|Õ|Ô|Ồ|Ố|Ộ|Ổ|Ỗ|Ơ|Ờ|Ớ|Ợ|Ở|Ỡ/g, "O")).replace(/Ù|Ú|Ụ|Ủ|Ũ|Ư|Ừ|Ứ|Ự|Ử|Ữ/g, "U")).replace(/Ỳ|Ý|Ỵ|Ỷ|Ỹ/g, "Y")).replace(/Đ/g, "D")).replace(/\u0300|\u0301|\u0303|\u0309|\u0323/g, "")).replace(/\u02C6|\u0306|\u031B/g, "")).replace(/ + /g, " ")).trim()).replace(/!|@|%|\^|\*|\(|\)|\+|\=|\<|\>|\?|\/|,|\.|\:|\;|\'|\"|\&|\#|\[|\]|~|\$|_|`|-|{|}|\||\\/g, " ");
};
t.onFacebook = function() {
var t = this;
if (cc.sys.os == cc.sys.OS_ANDROID || cc.sys.os == cc.sys.OS_IOS) if (sdkbox.PluginFacebook.isLoggedIn()) lgui.UserManager.instance.mainUserInfo.facebookToken = sdkbox.PluginFacebook.getAccessToken(); else {
cc.log("FB to Login");
sdkbox.PluginFacebook.login([ "public_profile", "email" ]);
} else if (null != this.sdkFbWeb) {
cc.log("Login fb web");
try {
FB.getLoginStatus(function(e) {
if ("connected" === e.status) {
lgui.UserManager.instance.mainUserInfo.facebookToken = e.authResponse.accessToken;
cc.log("Configs.Login.AccessTokenFB auth:" + JSON.stringify(e));
} else "not_authorized" === e.status || FB.login(t.fbRespone, {
scope: "email,public_profile"
});
});
} catch (t) {}
} else this.sdkFbWeb = new facebookSdk("426698672356843", "email,public_profile", this.fbRespone);
};
t.fbRespone = function(t) {
if ("200" != t.status) "wait" != t.response && cc.log(JSON.stringify(t)); else {
cc.log("fbRespone:" + JSON.stringify(t));
lgui.UserManager.instance.mainUserInfo.facebookToken = t.response.authResponse.accessToken;
lgui.UserManager.instance.mainUserInfo.facebookID = t.response.authResponse.userID;
}
};
t.hideMiddle = function(t, e, n) {
var o = new RegExp("^(\\+?\\d{" + e + "})(\\d+)(\\d{" + n + "})$");
return t.replace(o, function(t, e, n, o) {
return e + "*".repeat(n.length) + o;
});
};
t.splitArrayIntoChunks = function(t, e) {
for (var n = [], o = 0; o < t.length; o += e) n.push(t.slice(o, o + e));
return n;
};
t.sdkFbWeb = null;
return t;
}();
n.MVUtils = o;
cc._RF.pop();
}, {} ],
NetworkPortal: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "50da5BoJcVFnpPT2A3XGYP/", "NetworkPortal");
var o, i = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
})(t, e);
}, function(t, e) {
o(t, e);
function n() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n());
}), r = this && this.__decorate || function(t, e, n, o) {
var i, r = arguments.length, c = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, n, o); else for (var a = t.length - 1; a >= 0; a--) (i = t[a]) && (c = (r < 3 ? i(c) : r > 3 ? i(e, n, c) : i(e, n)) || c);
return r > 3 && c && Object.defineProperty(e, n, c), c;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var c = cc._decorator, a = c.ccclass, s = (c.property, function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.mSignalr = null;
e.mListenerKey = "portalHub_net";
e.isConnect = !1;
return e;
}
n = e;
Object.defineProperty(e, "instance", {
get: function() {
n._instance || (n._instance = new n());
return n._instance;
},
enumerable: !1,
configurable: !0
});
e.prototype.onLoad = function() {
n._instance = this;
};
e.prototype.connect = function() {
var t = {
hub: "portalHub",
url: "https://api." + lngui.ConfigManager.instance.ConfigInfo.Api + "/signalr/negotiate",
gate: lngui.ConfigManager.instance.ConfigInfo.Gate
};
cc.systemEvent.off(this.mListenerKey, this.onResponeData, this);
cc.systemEvent.on(this.mListenerKey, this.onResponeData, this);
this.mSignalr = new lngui.GateSignalR();
this.mSignalr.connect(this.mListenerKey, t.url, t.hub, t.gate, "", !1);
lngui.GateWebSocketManager.pushSignalR(this.mSignalr);
};
e.prototype.onEnable = function() {
lngui.EventDispatch.instance.add(lngui.EVENT_GAMECORE.LOGOUT, this.closeWS, this);
};
e.prototype.onDisable = function() {
lngui.EventDispatch.instance.remove(lngui.EVENT_GAMECORE.LOGOUT, this.closeWS, this);
this.closeWS();
};
e.prototype.onResponeData = function(t) {
this.isEmpty(t) || t.s && "error" == t.s || this.onWebSocketCallback(t);
};
e.prototype.isEmpty = function(t) {
for (var e in t) if (t.hasOwnProperty(e)) return !1;
return JSON.stringify(t) === JSON.stringify({});
};
e.prototype.onWebSocketCallback = function(t) {
lngui.ZLog.log("=====================CONNECT WS NOTI===============================" + JSON.stringify(t));
if (("open" == t.s || "reconnect" == t.s || "1" == t.s) && !this.isConnect) {
this.isConnect = !0;
this.connectSuccess();
}
t.R < 0 && lngui.UITextManager.showCenterNotification("Lỗi " + t.R);
if (t.M && Array.isArray(t.M) && 0 != t.M.length) for (var e = t.M.length, n = 0; n < e; ++n) {
var o = t.M[n];
if (o.A && null != o.A[0] && null != o.A[0]) {
var i = o.A[0];
lngui.ZLog.log("onWebSocketCallback: ", o.M + ": " + JSON.stringify(i));
switch (o.M) {
case "playerLeave":
lngui.EventDispatch.instance.emit(lngui.EVENT_GAMECORE.LOGOUT);
lngui.UIPopupManager.instance.showPopup("Tài khoản của bạn đã bị đăng nhập ở chỗ khác");
break;

case "topup":
1 == i.Status ? lngui.GameCoreManager.instance.updateTotalGold(i.balance) : lngui.UIPopupManager.instance.showPopup(i.msg);
}
}
}
};
e.prototype.connectSuccess = function() {
lngui.ZLog.log("NotificationNetworkHandle Sucesss");
};
e.prototype.closeWS = function() {
cc.systemEvent.off(this.mListenerKey, this.onResponeData, this);
this.mSignalr.close();
lngui.GateWebSocketManager.removeSignalR(this.mSignalr);
this.mSignalr = null;
};
e.prototype.sendSignalR = function(t, e) {
lngui.ZLog.log("SendSocket==========================>" + t + "==data==" + JSON.stringify(e));
e = e || [];
this.mSignalr && this.mSignalr.send(t, e);
};
var n;
e._instance = null;
return n = r([ a ], e);
}(cc.Component));
n.default = s;
cc._RF.pop();
}, {} ],
NodeDlAppLogin: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "66538pAckhLP6zQjQd6hFlq", "NodeDlAppLogin");
var o, i = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
})(t, e);
}, function(t, e) {
o(t, e);
function n() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n());
}), r = this && this.__decorate || function(t, e, n, o) {
var i, r = arguments.length, c = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, n, o); else for (var a = t.length - 1; a >= 0; a--) (i = t[a]) && (c = (r < 3 ? i(c) : r > 3 ? i(e, n, c) : i(e, n)) || c);
return r > 3 && c && Object.defineProperty(e, n, c), c;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var c = cc._decorator, a = c.ccclass, s = c.property, p = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.NodeQr = null;
e.NodeBg = null;
e.QRCode = null;
e.btnTaiApp = null;
return e;
}
e.prototype.onLoad = function() {
cc.sys.isNative && (this.btnTaiApp.active = !1);
};
e.prototype.start = function() {
var t = this;
this.clickhidePu();
var e = "https://api." + lngui.ConfigManager.instance.ConfigInfo.Api + "/captcha/GetQrCode?content=https://rebrad.cc/789/app&size=230";
lngui.Https.get(e, function(e) {
if (e) {
var n = e;
n = n.replace(/\r\n/g, "");
t.loadImgBinary(n);
}
});
};
e.prototype.BtnClick = function() {
console.log("click??");
if (cc.sys.isBrowser && !cc.sys.isMobile) {
this.NodeQr.active = !0;
this.NodeBg.active = !0;
} else cc.sys.os === cc.sys.OS_ANDROID ? cc.sys.openURL(lngui.ConfigManager.instance.ConfigInfo.LinkAppAndroid) : cc.sys.os === cc.sys.OS_IOS && cc.sys.openURL(lngui.ConfigManager.instance.ConfigInfo.LinkAppIos);
};
e.prototype.loadImgBinary = function(t) {
var e = "data:image/png;base64," + t, n = new Image();
n.width = 230;
n.height = 230;
var o = this;
n.onload = function() {
var t = new cc.Texture2D();
t.initWithElement(n);
t.handleLoadedTexture();
var e = new cc.SpriteFrame(t);
o.QRCode.spriteFrame = e;
};
n.src = e;
};
e.prototype.clickhidePu = function() {
this.NodeQr.active = !1;
this.NodeBg.active = !1;
};
e.prototype.clicksupport = function() {
cc.sys.openURL(this.linksupport);
};
r([ s(cc.Node) ], e.prototype, "NodeQr", void 0);
r([ s(cc.Node) ], e.prototype, "NodeBg", void 0);
r([ s(cc.Sprite) ], e.prototype, "QRCode", void 0);
r([ s(cc.Node) ], e.prototype, "btnTaiApp", void 0);
return r([ a ], e);
}(cc.Component);
n.default = p;
cc._RF.pop();
}, {} ],
NotiRunItem: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "ad5ffKiZKdBjqMQvMFTKodO", "NotiRunItem");
var o, i = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
})(t, e);
}, function(t, e) {
o(t, e);
function n() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n());
}), r = this && this.__decorate || function(t, e, n, o) {
var i, r = arguments.length, c = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, n, o); else for (var a = t.length - 1; a >= 0; a--) (i = t[a]) && (c = (r < 3 ? i(c) : r > 3 ? i(e, n, c) : i(e, n)) || c);
return r > 3 && c && Object.defineProperty(e, n, c), c;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var c = cc._decorator, a = c.ccclass, s = c.property, p = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.content = null;
e.mIsReady = !0;
e.mSpaceX = 15;
e.mSpeed = 90;
e.mNotifySystem = null;
return e;
}
e.prototype.onLoad = function() {
this.node.anchorX = 0;
};
e.prototype.init = function(t) {
this.mNotifySystem = t;
this.setDefault();
};
e.prototype.setDefault = function() {
this.node.active = !1;
this.node.x = 575;
this.content.string = "";
this.mIsReady = !0;
};
e.prototype.setContent = function(t) {
this.content.string = t;
};
e.prototype.setReady = function(t) {
this.mIsReady = t;
};
e.prototype.isReady = function() {
return this.mIsReady;
};
e.prototype.runNoify = function() {
var t = this;
this.mIsReady = !1;
this.node.active = !0;
this.node.stopAllActions();
var e = -this.node.width - this.mSpaceX, n = Math.abs(e) / this.mSpeed, o = -this.node.width - (this.mNotifySystem.nodeContent.width - Math.abs(e)), i = Math.abs(o) / this.mSpeed;
this.node.runAction(cc.sequence(cc.moveBy(n, e, 0), cc.callFunc(function() {
t.mNotifySystem.mIsReady = !0;
t.mNotifySystem.runNotify();
}, this), cc.moveBy(i, o, 0), cc.callFunc(function() {
t.setDefault();
t.mNotifySystem.checkEmptyContent();
}, this)));
};
r([ s(cc.RichText) ], e.prototype, "content", void 0);
return r([ a ], e);
}(cc.Component);
n.default = p;
cc._RF.pop();
}, {} ],
NotiRun: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "69b92KAzsFIqLLj/7ibvdgo", "NotiRun");
var o, i = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
})(t, e);
}, function(t, e) {
o(t, e);
function n() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n());
}), r = this && this.__decorate || function(t, e, n, o) {
var i, r = arguments.length, c = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, n, o); else for (var a = t.length - 1; a >= 0; a--) (i = t[a]) && (c = (r < 3 ? i(c) : r > 3 ? i(e, n, c) : i(e, n)) || c);
return r > 3 && c && Object.defineProperty(e, n, c), c;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
n.NOTIFY_TYPE = n.DataNotify = void 0;
var c, a = t("../network/NotificationNetworkHandle"), s = t("../../LobbyConst"), p = t("./NotiRunItem"), l = cc._decorator, u = l.ccclass, h = l.property, d = function() {
this.content = "";
this.type = 0;
};
n.DataNotify = d;
(function(t) {
t[t.ADMIN = 1] = "ADMIN";
t[t.MONEY_WIN = 2] = "MONEY_WIN";
})(c = n.NOTIFY_TYPE || (n.NOTIFY_TYPE = {}));
var f = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.listNotifyItem = [];
e.nodeContent = null;
e.listNotifyMoneyWin = [];
e.listNotifyAdmin = [];
e.mIsReady = !1;
return e;
}
e.prototype.onEnable = function() {
lngui.EventDispatch.instance.add(s.LobbyConst.EVENT_NAME.NOTIFY_SYSTEM, this.onRunText, this);
};
e.prototype.onDisable = function() {
lngui.EventDispatch.instance.remove(s.LobbyConst.EVENT_NAME.NOTIFY_SYSTEM, this.onRunText, this);
};
e.prototype.onRunText = function(t) {
null == t && a.default.instance.sendNotifyRun();
for (var e = 0; e < this.listNotifyItem.length; e++) this.listNotifyItem[e].init(this);
this.updateNotify(t);
};
e.prototype.getGameNameById = function(t) {
var e = "";
switch (t) {
case s.GAME_IDS.MINIPOKER:
e = "MiniPoker";
break;

case s.GAME_IDS.TAIXIU:
e = "Tài Xỉu";
break;

case s.GAME_IDS.TAIXIUMD5:
e = "Tài Xỉu Md5";
break;

default:
e = "" + t;
}
return e;
};
e.prototype.updateNotify = function(t) {
var e = "", n = [ "thắng", "nổ hũ" ];
if (t) {
t = t.Data;
for (var o = 0; o < t.length; o++) {
e = t[o].gameId > 7 ? "<size=20>" + (0 == o ? "Chúc mừng người chơi" : "") + " <color=#FF6600>" + (t[o].UserName, 
t[o].UserName) + "</color> " + n[t[o].NType - 1] + " <color=#FF0000>" + lngui.StringUtils.formatNumber(t[o].Amount) + "</color> Game <color=#FF0000>" + t[o].gameID + "</color>" + (o == t.length - 1 ? "" : ",") + "</size>" : "<size=20>" + (0 == o ? "Chúc mừng người chơi" : "") + " <color=#FF6600>" + (t[o].UserName, 
t[o].UserName) + "</color> " + n[0] + " <color=#FF0000>" + lngui.StringUtils.formatNumber(t[o].Amount) + "</color> Game <color=#FF0000>" + this.getGameNameById(t[o].GameID) + "</color>" + (o == t.length - 1 ? "" : ",") + "</size></size>";
var i = new d();
i.content = e;
i.type = c.MONEY_WIN;
this.addNotify(i);
}
}
};
e.prototype.addNotify = function(t) {
t.type == c.MONEY_WIN ? this.listNotifyMoneyWin.push(t) : t.type == c.ADMIN && this.listNotifyAdmin.push(t);
if (!this.mIsReady) {
this.node.active = !0;
this.runNotify();
}
};
e.prototype.getNotifyReady = function() {
for (var t = 0; t < this.listNotifyItem.length; t++) if (this.listNotifyItem[t].isReady()) return this.listNotifyItem[t];
return null;
};
e.prototype.runNotify = function() {
this.mIsReady = !0;
var t = this.getNotifyReady();
if (t) {
var e = null;
this.listNotifyAdmin.length > 0 ? e = this.listNotifyAdmin.shift() : this.listNotifyMoneyWin.length > 0 && (e = this.listNotifyMoneyWin.shift());
if (e && "" != e.content) {
t.setContent(e.content);
t.runNoify();
} else {
this.mIsReady = !1;
a.default.instance.sendNotifyRun();
}
}
};
e.prototype.checkEmptyContent = function() {
for (var t = !1, e = 0; e < this.listNotifyItem.length; e++) if (!this.listNotifyItem[e].isReady()) {
t = !0;
break;
}
this.mIsReady = t;
this.node.active = t;
};
e.instance = null;
r([ h(p.default) ], e.prototype, "listNotifyItem", void 0);
r([ h(cc.Node) ], e.prototype, "nodeContent", void 0);
return r([ u ], e);
}(cc.Component);
n.default = f;
cc._RF.pop();
}, {
"../../LobbyConst": "LobbyConst",
"../network/NotificationNetworkHandle": "NotificationNetworkHandle",
"./NotiRunItem": "NotiRunItem"
} ],
NotificationNetworkHandle: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "d49d4pTbZtBr5HXvzAt99Nj", "NotificationNetworkHandle");
var o, i = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
})(t, e);
}, function(t, e) {
o(t, e);
function n() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n());
}), r = this && this.__decorate || function(t, e, n, o) {
var i, r = arguments.length, c = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, n, o); else for (var a = t.length - 1; a >= 0; a--) (i = t[a]) && (c = (r < 3 ? i(c) : r > 3 ? i(e, n, c) : i(e, n)) || c);
return r > 3 && c && Object.defineProperty(e, n, c), c;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var c = t("../../LobbyConst"), a = t("../GateJackpotNoti"), s = t("../TimeAndResultMinigame"), p = cc._decorator, l = p.ccclass, u = (p.property, 
function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.mSignalr = null;
e.mListenerKey = "notify_event";
e.isConnect = !1;
return e;
}
n = e;
Object.defineProperty(e, "instance", {
get: function() {
n._instance || (n._instance = new n());
return n._instance;
},
enumerable: !1,
configurable: !0
});
e.prototype.onLoad = function() {
n._instance = this;
};
e.prototype.connect = function() {
var t = {
hub: "GateHub",
url: "https://noti." + lngui.ConfigManager.instance.ConfigInfo.Api + "/signalr/negotiate",
gate: lngui.ConfigManager.instance.ConfigInfo.Gate
};
cc.systemEvent.off(this.mListenerKey, this.onResponeData, this);
cc.systemEvent.on(this.mListenerKey, this.onResponeData, this);
cc.systemEvent.off(c.LobbyConst.EVENT_NAME.GET_LIST_MAIL, this.getUnReadMail, this);
cc.systemEvent.on(c.LobbyConst.EVENT_NAME.GET_LIST_MAIL, this.getUnReadMail, this);
cc.systemEvent.off(c.LobbyConst.EVENT_NAME.GET_DETAIL_MAIL, this.getDetailMail, this);
cc.systemEvent.on(c.LobbyConst.EVENT_NAME.GET_DETAIL_MAIL, this.getDetailMail, this);
this.mSignalr = new lngui.GateSignalR();
this.mSignalr.connect(this.mListenerKey, t.url, t.hub, t.gate, "", !1);
lngui.GateWebSocketManager.pushSignalR(this.mSignalr);
};
e.prototype.onEnable = function() {
lngui.EventDispatch.instance.add(lngui.EVENT_GAMECORE.LOGIN_SUCCESS, this.connect, this);
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
}
t.R < 0 && lngui.UITextManager.showCenterNotification("Lỗi " + t.R);
if (t.M && Array.isArray(t.M) && 0 != t.M.length) for (var e = t.M.length, n = 0; n < e; ++n) {
var o = t.M[n];
if (o.A && null != o.A[0] && null != o.A[0]) {
var i = o.A[0];
switch (o.M) {
case "jackpots":
this.onGetListJackPot(i);
break;

case "lobbyHitories":
this.onGetHistory(i);
break;

case "UserMail":
lngui.EventDispatch.instance.emit(c.LobbyConst.EVENT_NAME.USER_MAIL, i);
break;

case "notifyNewMail":
break;

case "mailContent":
lngui.EventDispatch.instance.emit(c.LobbyConst.EVENT_NAME.EVENT_DETAIL_MAIL, i);
break;

case "NotifyJackpot":
break;

case "NotifySystem":
lngui.EventDispatch.instance.emit(c.LobbyConst.EVENT_NAME.NOTIFY_SYSTEM, i);
break;

case "txTimeAndResult":
s.default.instance.RemainAndResult(i);
}
}
}
};
e.prototype.getMail = function() {
this.sendSignalR("GetUserMail", []);
};
e.prototype.getDetailMail = function(t) {
this.sendSignalR("GetUserMailContent", [ t ]);
};
e.prototype.deleteMail = function(t) {
this.sendSignalR("DeleteUserMail", [ t ]);
};
e.prototype.getUnReadMail = function() {
this.sendSignalR("GetUnReadUserMailQuantity", []);
};
e.prototype.connectSuccess = function() {
this.sendSignalR("GetGeneralNotification", []);
this.scheduleOnce(function() {
n.instance.sendNotifyRun();
}, 1);
};
e.prototype.closeWS = function() {
cc.systemEvent.off(this.mListenerKey, this.onResponeData, this);
this.mSignalr.close();
lngui.GateWebSocketManager.removeSignalR(this.mSignalr);
this.mSignalr = null;
};
e.prototype.sendSignalR = function(t, e) {
lngui.ZLog.log("SendSocket==========================>" + t + "==data==" + JSON.stringify(e));
e = e || [];
this.mSignalr && this.mSignalr.send(t, e);
};
e.prototype.sendNotifyRun = function() {
console.log("=====GetSystemNotification -----\x3e");
this.sendSignalR("GetSystemNotification", [ 0 ]);
};
e.prototype.onTestSendSocketClicked = function() {
this.sendSignalR("GetUserMail", []);
};
e.prototype.onGetListJackPot = function(t) {
if (t && Array.isArray(t)) {
for (var e = 0; e < t.length; e++) if (t[e]) {
var n = t[e].GameID;
if (Object.values(c.GAME_IDS).includes(n)) {
var o;
o = 89 === n || 90 === n || 1236 === n ? JSON.parse(t[e].JackpotFund) : t[e].JackpotFund.split("|").map(Number);
c.LobbyConst.slotByKeys.set(n, o);
}
} else {
t.splice(e, 1);
e--;
}
lngui.EventDispatch.instance.emit(c.LobbyConst.EVENT_NAME.EVENT_UPDATE_JACKPOT);
}
};
e.prototype.onGetHistory = function(t) {
c.LobbyConst.history = t;
};
e.prototype.showJackpotNotify = function(t) {
var e = lngui.EBundle_Name.LOBBY;
lngui.BundleManager.instance.getPrefabFromBundle("prefabs/GateJackpotNotify", e, function(e) {
var n = cc.instantiate(e);
lngui.GameCoreManager.instance.nWidgetShowJackpot.addChild(n);
var o = n.getComponent(a.default);
o && o.showJackpot(t);
});
};
var n;
e._instance = null;
return n = r([ l ], e);
}(cc.Component));
n.default = u;
cc._RF.pop();
}, {
"../../LobbyConst": "LobbyConst",
"../GateJackpotNoti": "GateJackpotNoti",
"../TimeAndResultMinigame": "TimeAndResultMinigame"
} ],
OpenUrl: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "fdad7/FnzVGQIEH3Ihxq/j2", "OpenUrl");
var o, i = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
})(t, e);
}, function(t, e) {
o(t, e);
function n() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n());
}), r = this && this.__decorate || function(t, e, n, o) {
var i, r = arguments.length, c = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, n, o); else for (var a = t.length - 1; a >= 0; a--) (i = t[a]) && (c = (r < 3 ? i(c) : r > 3 ? i(e, n, c) : i(e, n)) || c);
return r > 3 && c && Object.defineProperty(e, n, c), c;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var c = cc._decorator, a = c.ccclass, s = (c.property, function(t) {
i(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
e.prototype.onBtnClick = function(t, e) {
"BotOtp" == e ? cc.sys.openURL(lngui.ConfigManager.instance.ConfigInfo.BotOtp) : "LiveChat" == e ? cc.sys.openURL(lngui.ConfigManager.instance.ConfigInfo.LiveChat) : cc.sys.openURL(e);
};
return r([ a ], e);
}(cc.Component));
n.default = s;
cc._RF.pop();
}, {} ],
PopupRotateManager: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "b354btoHp5NAYBlhhMO7J9i", "PopupRotateManager");
var o, i = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
})(t, e);
}, function(t, e) {
o(t, e);
function n() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n());
}), r = this && this.__decorate || function(t, e, n, o) {
var i, r = arguments.length, c = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, n, o); else for (var a = t.length - 1; a >= 0; a--) (i = t[a]) && (c = (r < 3 ? i(c) : r > 3 ? i(e, n, c) : i(e, n)) || c);
return r > 3 && c && Object.defineProperty(e, n, c), c;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var c = cc._decorator, a = c.ccclass, s = c.property, p = (c.menu, function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.portraitAngle = 90;
e.landscapeAngle = 0;
e.webMobileOnly = !0;
e.debugLog = !1;
e._lastPortrait = null;
e._boundRefresh = null;
return e;
}
e.prototype.onLoad = function() {
var t = this;
this._boundRefresh = this.refreshNow.bind(this);
this._bindEvents();
this.refreshNow();
this.scheduleOnce(function() {
return t.refreshNow();
}, 0);
this.scheduleOnce(function() {
return t.refreshNow();
}, .2);
this.scheduleOnce(function() {
return t.refreshNow();
}, .5);
};
e.prototype.onEnable = function() {
this.refreshNow();
};
e.prototype.onDestroy = function() {
this._unbindEvents();
};
e.prototype.refreshNow = function() {
if (this.node && this.node.isValid) if (this._shouldRotate()) {
var t = this._isDevicePortrait(), e = t ? this.portraitAngle : this.landscapeAngle;
this.node.angle = e;
this.debugLog && this._lastPortrait !== t && "undefined" != typeof window && cc.log("[PopupRotateManager]", "inner=", window.innerWidth + "x" + window.innerHeight, "portrait=", t, "angle=", e);
this._lastPortrait = t;
} else this.node.angle = this.landscapeAngle;
};
e.prototype._shouldRotate = function() {
return !this.webMobileOnly || cc.sys.isBrowser && cc.sys.isMobile;
};
e.prototype._bindEvents = function() {
cc.view.on("canvas-resize", this._boundRefresh, this);
cc.view.on("design-resolution-changed", this._boundRefresh, this);
if ("undefined" != typeof window) {
window.addEventListener("resize", this._boundRefresh);
window.addEventListener("orientationchange", this._boundRefresh);
var t = window.visualViewport;
t && t.addEventListener && t.addEventListener("resize", this._boundRefresh);
}
};
e.prototype._unbindEvents = function() {
cc.view.off("canvas-resize", this._boundRefresh, this);
cc.view.off("design-resolution-changed", this._boundRefresh, this);
if ("undefined" != typeof window) {
window.removeEventListener("resize", this._boundRefresh);
window.removeEventListener("orientationchange", this._boundRefresh);
var t = window.visualViewport;
t && t.removeEventListener && t.removeEventListener("resize", this._boundRefresh);
}
};
e.prototype._isDevicePortrait = function() {
if ("undefined" == typeof window) return !1;
var t = Math.max(1, window.innerWidth || 0), e = Math.max(1, window.innerHeight || 0);
if (t !== e) return e > t;
var n = window.visualViewport;
return !!(n && n.width && n.height && n.width !== n.height) && n.height > n.width;
};
r([ s({
tooltip: "Góc xoay khi thiết bị đang cầm dọc"
}) ], e.prototype, "portraitAngle", void 0);
r([ s({
tooltip: "Góc xoay khi thiết bị đang cầm ngang"
}) ], e.prototype, "landscapeAngle", void 0);
r([ s({
tooltip: "Chỉ rotate trên web mobile"
}) ], e.prototype, "webMobileOnly", void 0);
r([ s({
tooltip: "Bật log debug"
}) ], e.prototype, "debugLog", void 0);
return r([ a ], e);
}(cc.Component));
n.default = p;
cc._RF.pop();
}, {} ],
RegisterCtrl: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "f9766EnY81CLoCN+Ya8puza", "RegisterCtrl");
var o, i = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
})(t, e);
}, function(t, e) {
o(t, e);
function n() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n());
}), r = this && this.__decorate || function(t, e, n, o) {
var i, r = arguments.length, c = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, n, o); else for (var a = t.length - 1; a >= 0; a--) (i = t[a]) && (c = (r < 3 ? i(c) : r > 3 ? i(e, n, c) : i(e, n)) || c);
return r > 3 && c && Object.defineProperty(e, n, c), c;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var c = t("../LobbyConst"), a = t("./autologin/CheckAndSaveToken"), s = t("./autorotate/EditBoxController "), p = cc._decorator, l = p.ccclass, u = p.property, h = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.edbAccount = null;
e.edbPass = null;
e.edbRePass = null;
e.edbUserFullName = null;
e.edbCaptcha = null;
e.Captcha = null;
e.sprftick = [];
e.tick = [];
e.token = null;
e.captchafake = [];
return e;
}
e.prototype.onEnable = function() {
this.captchafake = [ {
code: 200,
data: {
image: "iVBORw0KGgoAAAANSUhEUgAAAKAAAAAyCAIAAABUA0cyAAADAklEQVR42u2cW3KDMAxFs93+dRPdYlfQffQxaTuALflePYxD5OGnhBjjw5VlSentVu3y7VNqH++nHG+vL+1Y2pPfZ7pXVvtvAOAzeP9ga2A/F+CgmbQCTua9xZYLWDYY5wM+U8HIIBxDnAq41/NZaxO1ZiEDVgEPb3YJwP1OggQUpWAIMK3grVi7Bu0CgJMtZAF+HMBJprUALwTY9yAFuAAX4AJcgAtwAS7A+z1iexTgSwB+hkjW4oB7wXllS9YeBXh5wFg/0gUFuACvBxhNZhfgbMCSj+Y5DnTjFZyf2HbeEayGyAfsaIqC0+W7l06ggjXAjILPBpycGXUBTs3IPgXgNjaylIKRsQkKLsAWUyZxOguw0vNagENqsjrFl3GAdU6nAJZ6Zu/Vr1v9c7ikTzlnbc+PBoyW2QKApdnJADyuCCYBm18mEbAkG0bBVAU0Ok0GwNCN4wBDxd4M4LZ5tnP3r/cHyQBmC93H06QZK9WLHloh1kwpX0FL+X2A2QU4QCd7wIZfMuz+HlsPcg02i1hSMKIJwmcc2tX9R6sB7s5Y3x6LM742YFpkMuBhVzYvGhqqMI2IzUdXChbwb5S/F4zcntQHZB+u2YROB+x3/aSXm7s7BxjZwCUoWBcEBAAGHBXogN6eJwG8vcAAOFbBgYCvrGB223o9wPY1eAJg0YtWE4KHk8pCq3sNXf9w6EUvBdjlRY8Ag4zJcAGSS0hTcHsxHbzUK9PU4EMqYFvwxAI4YL+vAgZ7pgATjCcCRiNZTOHAcN8PhSq9S10zNXo/3ZNOwIZIVixgLhYNZ6WQeBaRLkwFbM6ydQGjIp6SD9aySabZOAC+jy0A8NiLNpnBkDTq7oFxP3N6wn87b54eWsDt3MYl/H1J9TzA/oT/0oCx8vfDvSyAdU8vo5jSDhgr/zcPYxEFKwoZA2bhRQEmHlgHzAslyg49AmCziUtuBbgAF+ACXID1JXmak4Us1QU4AvCUh2H3UQV4OmDnrrEALw54wj+BTQWct9BEAfZU71a7WvsCM60c/Ug+bJgAAAAASUVORK5CYII=",
sessionId: "3fbfe18b6008461993d26f7c55392152"
}
}, {
code: 200,
data: {
image: "iVBORw0KGgoAAAANSUhEUgAAAKAAAAAyCAIAAABUA0cyAAAC8UlEQVR42u2cYXrDIAiGe9392yV2xZ1g9+i6p1uWWoXvAzTG4pMf6xqJ4Q0CYnq5ZFu+Xavt6/PKtluXmY6P9zf825+P3VpX4ULrALj6H17UppGmajaZj8L35//+3bh6Ifl8gIFHPAFrDIbMJagEHlACBgDPYcE+wLFuLwFPBzjOghNwAu4D2B1Fx89eCTgYcNWC79rvZsGVCSMBJ+AEnIAXAIwljqyn3J8v9L19lYD7Az7OghNwAk7ACTgBJ+AEnICXAHxXqO0QruU8Cl28ImB0d4AMeH8xTBShEasF13VBbouIBIzXd4uBmevBxPYPETC9mWRKwKo2W2m3NA+RPot9BCUts0hagG17huYFzFtwAOC/B4UdoUbeDdi8KSwBVwOOh2EAPrQvYKEvpbgBgJuD2cXqBwB+nucx36z44OJWowDLz5AN8LMQP2ApGTMFWS7AWBStGJJ8qyGAkSBuEsD1UY0HjFVWqo55ywOlmXO7ng2w3qsD4Eqmu1OEcEDBMwzYuDu9ClhTCOGDy5NOCLiHBRvy4GGA1UHWARczRghg0G7Ypahq906A1Wh/MGAuDxa8TgjgSsdalG9f22tRhNMkg32M8MHwE6ksVVbO9gHWO04PmE3nDgSMj9/3ytpygOVA4SjAuMnFv5A4J2BPxckQJQyOog8DrDCOiKIhwGL0yypotjTJWC7sBLhYBeyRJhkAK0kkFWS1i3qBgOkpGq8H0wX/iEX8kYC9aZLo75WbOg3gx7W0ZQBDCx2vApgpU3vKhX7A6DIWuFT5moAFPbYkjQQMjXBVwGwoKwCm5A+LooX6q6VcOAQwnSaFA9b3RA4ETGyybJ8csjG0B2BjmuQC7EASD5iS/6xQRgnChHEqwBFvvCfgKQDTE1HEZnR9bu8JuBzADIAdtkT8ys6/CG3zn/F+nC0EsG+QyCNuBKwNGACMjD4BgyoKuYVYwIGhZgKeEXCUBdtdTgIGfLBQck7AK1hwAl4NsDM3yZ/KXr99A9RfaUETpuIhAAAAAElFTkSuQmCC",
sessionId: "41768e329f0b44ff9c4f5ed0c02e7e71"
}
}, {
code: 200,
data: {
image: "iVBORw0KGgoAAAANSUhEUgAAAKAAAAAyCAIAAABUA0cyAAADHklEQVR42u2cW1IEIQxFZ7v+uQm36Arch45V1jhCHjchNHR7qfnCpgk5BEJIe7uxXL58bl4+3sXqt9eXRKuRh50e3YZmL9/PgDLDQyNgAiZgAiZgAiZgAiZgEfC9Jv57yEnAZwAcl/Z8gO8Siz8C3gNwap0JrUVnAazN1J/5emLAB1OvnStVgBOKWgl4BpWgasS/IuuhuAsQcHYNBKQk4KWABxc3Aj4BYL2SgAsaznFHCHgnwLgFw90R8GLA7aXtYYDbC2MCLgWs3soT8AUAq2kXFSd1Al4MWM2lAfZgAiZg3MmaFkesjTmXAMbT0/ruog13AlzkRYMOhW3BkwBHUxB9TsGGISdr7hLtXIPA6tOWfQ2w8wbsskFsBb5ZHG/zvK2cZxWFdGIAtudWHHA8Fh1N1+0B53J+G2VpTfB3PtekLRhViATYmFh9kedTOWBRbluVDeBEUnffKa4OpCPDEMEAJLgO5VZEY3YWAxYa6uRAwPY5EtlTcdPPTCbs+GC988nJ2hqwJb2p6GfA/QN2JAhh7w4KWcYHAfsqMn0dZONv6hcA1p4ZAQyaaRQw3lEsACA2B7zlxNdGxwFGZuLjMRcwyCM0qNCkWQ445tmdzoJLAPduvOj+DH29FwHsHrQSMlwccMiIZcBS/STArb9p3+GHDo3zAIsBGteLjgIe3GhdwKFz88hJ0o75gE71ocekXnrkmCSeQUHxJgH2o4yHAw5oYzZgPJJl7Dd2vdawEDBoNJMAG70cDTgXlvu9IcA2G9GyBy24CUzuBniXSBa6oGmAdZMSr0Ciklt7hDRANNtm2AZKABc7WcgtihZ26Ztrx0FVEiVsi4wZunlUAoeBkyhmA7IXnbigw49JuVyvkYwO+3ZMPvunAAeyNXJfNebUOOBk+bGRAwAjFqxVGt/iaYBHsmqq0nT+E+DBwesWXCjOdoCDKU3WYkbAmwKOCO8BBr7kJODwAPEEwhDg7j0Y4IE9gIANDLg/8edTfxtw54QS8ArA6bF4gBuiBHwtwLk92PlvIAR8bsD0ojcDjMcDjPALAe8KOD46JKjHcsHyBaoXdrc4KJyzAAAAAElFTkSuQmCC",
sessionId: "72f95f561e9647e4aab51950a252ddec"
}
}, {
code: 200,
data: {
image: "iVBORw0KGgoAAAANSUhEUgAAAKAAAAAyCAIAAABUA0cyAAAC7ElEQVR42u2aWXLDIAyGfd2+9RK9Yk/Qe6SZZsYlWDuS8fIznjzEtgB9FlpgWdAu3x47t5/vdJFfnx+PIzRuaqlTtk8WgO8J+DmasUsZAQDbpXHqtYHgAZeqG4DHpGVYMADPAtw+CcAlgL0eBxZ8PsBh4XcHnBusAfARAXvkAzAAAzAAAzAAd4N8SusuAL4QYBQ6ABiAxwDHqt/Dudb1AWftISYAzrNgAF76zYel/z9tcwmAJ1rw6CmApK8hfYMSgPMAMyOABd8O8DbRHL8A+DCAzaJKLTgcS0ov1ny74cLLbMDcERN/iKekSUwXsZlGXk+1YPdQhUE7phEDTKls7THLgoVsMBcweysV8HbMCj7yCfcBWxvgt3WGsqe1udYieR2Wp7YP4MjK0aiUyGAdgEVFk3onvEIHL6r92PdOdlF0Mlx43Q7Ya8Hy624LFgatVKmi2h/0Pdsu7HaWZcR2Hc4HHAkrPIAVgcWAV688C3DABw8BVr+v/QCPVLIMAflrJBWAZTUeC7Dd5aQAjuxGaF1wA+YAe7MyAfA2+4h7hCmAU3ywkk6ULdErYD0IcAFu/ukeELZw9BwBgAsBOwNpq/OL7tHJQjIBB7Z0TgHYVZcIAxaqBW4L5u8Kcd+QBYcB9xnw36/LYxm7EHywt/DEFQlyAbelBaEgwZUrTCl/BeD0KoSxi9Z2peJDCHA7DHYiLsDqUir3Rd5She4MuK6SlQ64LeHtANhSf50JmKvQxnJTezW01bXkKbQgw5tbjgOWpyMBdi0LuYC3io5VOQRlsZ7y3dNbiuFkL8ZvS92SCQPWi2t2oUWAB6No+4mONoquBkxv8I0BFnK5VRqxzLiEXhvwdiFNAfwvMBWwet4DgPUU87iA7WFmAmAxKgkALjrBpAIuWqJPBljY7Sd7dQP2z82oLBKwvex6A8DcsF4mKyv03oDJcy/VFwDH45egIcKCj2zBvhASgAF4J8AJx+oB+DIWzI4bgA8LGO3C7RfJoqRyWWvzVQAAAABJRU5ErkJggg==",
sessionId: "8dd4ca74f37c4aadb6131860e23c489b"
}
}, {
code: 200,
data: {
image: "iVBORw0KGgoAAAANSUhEUgAAAKAAAAAyCAIAAABUA0cyAAAC7UlEQVR42u2abU7DMAyGd13+cQmuyAm4xxhIoLaJv147ada9UTWh0saxnzh2ndxubJdv97Z9fR5/Pc3/5KZ9vL8d/t7emdGgYY8TfVT/95nWJh4r5QA/7u8vDAwBLww4KrKZE/mrYDYQcCXgag8mYAImYAImYAJ+RcAPGYeLgEcAbu3ssnYWMGApAgYAJ9Qk4PMAy199BHwVwEIeQ8AETMAETMAdZWeWUf+EShkykDMTcMyZ8k00rywOZvlygO0t0TqvPYzBK3oy4M6wpgB+3OxsUaeNjnWI2ff/lfCOex3grqyd8ocx/YgZDzh2DCEiNOBGm98M4JgWavTNAO44bfeJCYDD50yeCjCcH1wWMBaD1wScQTUAsLJEh05NEHCjTmw1QgFL65/Xg/2AjS+5/QOtxCrA3gV/fAz2Aj7k5I7k0ZNRegHjARKNwbWAxVRzFmBbo40Wzg8/ZfWNAS6ju1EDOcmbAyxapwJwgS4WYL1/Y0IrgCvpngfYEFThwd3OA12pgE0VygAXlvUVrkNjMALYUR6ZCXj7iu4eBuBiuo5CxyDAxn89gNFKVh6w2Ke8HB7f7ea03RQ3ebVp9gjAppVxwECJtBqwGe+8pUpPITccrqZ4sGniFGDVg/FlbyxgK5KXuK/Hg5Fi7NqA81n0DMDSQAEPdgIOTZqlAINOPB+wJ5jldy4L8rit0X1R8EqAdUb2frD+/oKAzbVHL3eMAOwtVRZ9JsUAd4dbFZLxiOUGfN+fmwELHUHAyMRVa9GBus0+/7UAWx8eJYdLKgG7i5SLAoZKlYrveQFLrrYg4O6+rDbfpwB2bTaogKU+JSkxD5YGvSbggJT42dVo9AG/J9PW6wAGtqCrANeWP/EMvM6Dw/bZeDCsiwgYnlM1BzzTihFwO7aYB0c9+4kAK1U2TyVOdwYCPhtw00/tuXMCXgvwiFTrcoCBUaYVO41KYasALNaRntuDq9uzAu5pQcAETMAETMAETMCnAma7cPsG5PAooSxW0mcAAAAASUVORK5CYII=",
sessionId: "3a36c54381a54b2ab5fc04c6f998fca2"
}
}, {
code: 200,
data: {
image: "iVBORw0KGgoAAAANSUhEUgAAAKAAAAAyCAIAAABUA0cyAAADTklEQVR42u2cXXYDIQiFs92+dRPdYlfQffQv5yQaBe8F0ckETx6a6DijnyAg08sly+nLt1S+Prnf4fLx/nbv5P+Pv1+UxnzV6uKck9/LAz4J+EiAJ81tOTMJOAEn4AR8IMAxO9nto62nBLwIcGRJwAk4ASfgBLwIcPCGvdQCmAN4wQB6wwgE7JHgdnKmKAC5nyWAJ6mjrgRfn2kPYL9gJeCjA7ZKcAJOwK8K+AoV+STgJwRcd6tIMDFlTweYN0JBozoB7wNs9Yv0r5sBVzdqAOO6eqC9mwfTTr5hwLcLpwFWprSojQWspQZggJXLFVquA6LucXd3IIZjc6GHUnMik+4BjCduiICh9A8nYNVUngCYGgsmwUopse0FXA6qA5hI8QEAI7ffDhjUSfiiPw/g4daorHd9N50ImNh3rDrpoZ8FgNta5Uk0wLebEUl6Dgm2eXssYHFGeCt6C2DwYTTAXTuTBVy2jAVsjR77AXeNry2ACQmW3CQPYGV9zQHMS/C5AdN+sJluApaagbbSEDBnZA33KtYSUfp5iLopATnFMRUbLNmDW3JSMDIIsNEPBs1FF2CrBI+tXxWw37PXjSzWoRi615Sf0vVKjICRwYAjRAATYATATj8Y9ETF4wRyD0YCtBwOPD6nsamvAnuzhQlF1RoT6MC1mh9w2QPlF2nPDEbYh4CH5pVBgjkw2NLsLA5esYMh2C7gjjoVBDcQMGiOO60JVkUPrWjivjVg896pyJzHyPKcsDUqegdg3MjS7DISMH7AN2t1eqxovXPEnyTOzpDtMwiw9nsNiTpKMwNWtPoywHNUNIdHD1z3vMaVgDu2rnXfZQGDtVQQ1w7YLnwF4G7tAsB2I4vXz7iK1mvRxJU6BBQIGI0a7gOMCqLbNRKVPw4Yj/PU6SIhgIcI7bXzAOOxJCoX7DyA21jjvd/DA67y6YdhVFNu6EEAg31ybtIcwKMU0VDAuBWNHGS1U5eAxWbPCHiCkZWAh4Dt2dSrALsyvV8dcNsGxzZsyb8vCmV0WNdTAg4ATGr4aMDUm3kWwENPHHTYDTrq1QGbLicBe+YLlmDPYyTgBJyA4wEb9pIgwJ7dxPlS5IRXKQ8KOHL9coCtI3qO/50pxN2ynK38AN/vvVXdkLeMAAAAAElFTkSuQmCC",
sessionId: "b7c6c3cd23324e30a174240c01421c01"
}
}, {
code: 200,
data: {
image: "iVBORw0KGgoAAAANSUhEUgAAAKAAAAAyCAIAAABUA0cyAAACyUlEQVR42u2cUXKEMAiG97p96yV6xZ6g99h2pjuOGwP5+QMxUTI+uUYJnyQQcB+PbJdvz7j286399H58fX4cT77Oq7etXDC28QIo+oG7bE8/inE2YExNCTgBJ+AEfCHAf48rjgR8IcA1J+ZfgASM6uuswzaQnRIScKwxeVnwDQDX3ugEPAFgrwmqdqYaH+8Hc1vAhZ8VDDhgilYsOAEjYiTgBDwVYEcXNAFPCli24AS8AODqHk0CXhbwDNsFCfjEKVrsolowuGaDoVpnr8agEnAvYKOoW19T1lyRfEbATGmArLXqyrrtYJiOY5eqhD2AucqIHsDFAE1HKZ50AUhXG6drXrPZBZXQCJgufeEB29VokrA8y5f4jAJsq0OyAO6pbRoDmKBDAq4MFQOsa7+pC3OhGQy4s1TtLMBNX6EBWLn7JID1xZgG7BgmRQBGwK8NuBp+0ICrQzMhHwYYefXXtuBqmCSOkwU8s5Nlmn4gkI5OVidgPfqSZm8i1lKaeFvWV2i/kSxdJg4W3+LBgJWgHrDgHsDSAnERwJ1zSxzgHn3pIxUBw/sPNsChGx18LNha2MDZjwNs2+jAwg/dSnBR9SvLX40W3ETzRr7rW6Y7ATaJOgVgxEkBfQ16YXtpDc7DKFmBxl40oanD27+aBQOz0IAwqTiJqIZJNtCuCjxFD3OymgG6FgvND1hSU2Hc7oCPcdGJXjQPWP9pTsDWPC5HxfFWLoDRMIn5ZnyXgfcCLO0exPGw5WqMDELXYHMcHJ0u9JqOQv6/AMwHLw34iefSFwFM7AM37rMiYCTUcdklHwCY86INF69uwWTzqOjw8ixuBRj1opcDDGXoJgdsrNIlai5XA2ysUg7JxboDhm9+D8AWC07ACTgBLwh4uywBpwUn4Eha1k9XDB+5JODzAfc9BRltAvYEHGeOUkFkAh4IeExz3UW6EeBsF26/MtxNbsYSDDwAAAAASUVORK5CYII=",
sessionId: "9b7cdef5bbde47249fe512dcd308c6c6"
}
} ];
this.getCaptchaFake();
};
e.prototype.onClickReg = function() {
var t = this, e = this.edbAccount.string.trim(), n = this.edbPass.string.trim(), o = this.edbRePass.string.trim(), i = this.edbUserFullName.string.trim(), r = (this.edbCaptcha.string, 
window.md5(e.toLowerCase() + "zxc" + n.toLowerCase()));
if (e.length > 18 || e.length < 6 || e.indexOf(" ") > 0 || e.indexOf("@") > 0) lngui.UITextManager.showCenterNotification("Tên tài khoản phải từ 6 - 18 ký tự, viết liền không dấu, không có ký tự đặc biệt!"); else if (n.length < 6 || n.length > 18) lngui.UITextManager.showCenterNotification("Mật khẩu phải có độ dài từ 6 - 18 ký tự!"); else if (n === o) {
lngui.ZLog.log('======"PlatformID": LobbyConst.platform==============' + c.LobbyConst.platform);
var a = {
username: e,
password: window.md5(n),
userfullName: i,
passraw: n,
verify: "",
captcha: this.edbCaptcha.string,
Email: "fff",
landingHost: lngui.PlatformInterface.bundleID,
PlatformID: c.LobbyConst.platform,
deviceID: lngui.PlatformInterface.deviceID,
platform: lngui.PlatformInterface.platform,
OSName: lngui.PlatformInterface.OSName,
deviceToken: lngui.PlatformInterface.deviceToken,
phoneNumber: lngui.PlatformInterface.phoneNumber,
OSVersion: lngui.PlatformInterface.OSVersion,
appVersion: lngui.PlatformInterface.appVersion,
versionCode: lngui.PlatformInterface.versionCode,
bundleID: lngui.PlatformInterface.bundleID,
MerchantID: "1",
ServiceID: "1",
gate: lngui.ConfigManager.instance.ConfigInfo.Gate,
Sid: r
};
lngui.Https.post(c.LobbyConst.API.URL + c.LobbyConst.API.REGISTRY, a, function(e, n) {
if (e >= 200 && e < 400) t.onLoginSuccess(n, function() {
lngui.Https.get(c.LobbyConst.API.URL + c.LobbyConst.API.GET_INFO_ACCOUNT, function(t) {
lngui.UserManager.instance.mainUserInfo.VipPoint = t.VipPoint;
lngui.EventDispatch.instance.emit(lngui.EVENT_GAMECORE.UPDATE_DISPLAYNAME);
lngui.UserManager.instance.mainUserInfo.PassWord = a.password;
});
}); else {
t.onRefreshCaptchaClicked();
lngui.UITextManager.showCenterNotification(n);
}
});
} else lngui.UITextManager.showCenterNotification("Mật khẩu nhập lại không trùng với mật khẩu đã nhập.");
};
e.prototype.onLoginSuccess = function(t, e) {
lngui.UserManager.instance.mainUserInfo = t;
a.default.saveData(lngui.UserManager.instance.mainUserInfo.GameToken);
this.hide();
lngui.EventDispatch.instance.emit(lngui.EVENT_GAMECORE.LOGIN_SUCCESS);
e && e();
};
e.prototype.checkuserName = function() {
var t = this;
if (this.edbAccount.string.trim()) {
var e = c.LobbyConst.API.URL + c.LobbyConst.API.CHECKUSERNAME + "?username=" + this.edbAccount.string.trim();
lngui.Https.get(e, function(e) {
e && (0 == e.data.exist ? t.tick[0].spriteFrame = t.sprftick[0] : t.tick[0].spriteFrame = t.sprftick[1]);
});
}
};
e.prototype.checkRePws = function() {
var t = this.edbPass.string.trim(), e = this.edbRePass.string.trim();
t === e && t ? this.tick[1].spriteFrame = this.sprftick[0] : t == e && e || (this.tick[1].spriteFrame = this.sprftick[1]);
};
e.prototype.getCaptchaFake = function() {
var t = this.captchafake[Math.floor(Math.random() * this.captchafake.length)];
this.loadImgBinary(t.data.image);
this.token = t.data.sessionId;
};
e.prototype.loadImgBinary = function(t) {
var e = "data:image/png;base64," + t, n = new Image();
n.width = 160;
n.height = 50;
var o = this;
n.onload = function() {
var t = new cc.Texture2D();
t.initWithElement(n);
t.handleLoadedTexture();
var e = new cc.SpriteFrame(t);
o.Captcha.spriteFrame = e;
};
n.src = e;
};
e.prototype.onRefreshCaptchaClicked = function() {};
r([ u(s.default) ], e.prototype, "edbAccount", void 0);
r([ u(s.default) ], e.prototype, "edbPass", void 0);
r([ u(s.default) ], e.prototype, "edbRePass", void 0);
r([ u(s.default) ], e.prototype, "edbUserFullName", void 0);
r([ u(cc.EditBox) ], e.prototype, "edbCaptcha", void 0);
r([ u(cc.Sprite) ], e.prototype, "Captcha", void 0);
r([ u(cc.SpriteFrame) ], e.prototype, "sprftick", void 0);
r([ u(cc.Sprite) ], e.prototype, "tick", void 0);
return r([ l ], e);
}(lngui.UIPopup);
n.default = h;
cc._RF.pop();
}, {
"../LobbyConst": "LobbyConst",
"./autologin/CheckAndSaveToken": "CheckAndSaveToken",
"./autorotate/EditBoxController ": "EditBoxController "
} ],
SetAvatar: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "1ad11Q0v01Ddryjjj+xE13p", "SetAvatar");
var o, i = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
})(t, e);
}, function(t, e) {
o(t, e);
function n() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n());
}), r = this && this.__decorate || function(t, e, n, o) {
var i, r = arguments.length, c = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, n, o); else for (var a = t.length - 1; a >= 0; a--) (i = t[a]) && (c = (r < 3 ? i(c) : r > 3 ? i(e, n, c) : i(e, n)) || c);
return r > 3 && c && Object.defineProperty(e, n, c), c;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var c = t("./ListAvatar"), a = t("../../LobbyConst"), s = cc._decorator, p = s.ccclass, l = s.property, u = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.SpritetAvatar = null;
e.Avatar = null;
return e;
}
e.prototype.onLoad = function() {
this.SpritetAvatar = this.SpritetAvatar;
};
e.prototype.onEnable = function() {
lngui.EventDispatch.instance.add(a.LobbyConst.EVENT_NAME.AVATAR_CHANGED, this.onAvatarChanged, this);
this.SetAvatar();
};
e.prototype.onDisable = function() {
lngui.EventDispatch.instance.remove(a.LobbyConst.EVENT_NAME.AVATAR_CHANGED, this.onAvatarChanged, this);
};
e.prototype.onAvatarChanged = function(t) {
this.SetAvatar(t);
};
e.prototype.SetAvatar = function(t) {
if (this.Avatar && this.SpritetAvatar && this.SpritetAvatar.ListSpriteAvatar) {
var e = lngui.UserManager.instance.mainUserInfo.Avatar, n = null != t ? t : e;
if (null != n) {
var o = this.SpritetAvatar.ListSpriteAvatar, i = Number(n);
i < 0 || i >= o.length || (this.Avatar.spriteFrame = o[i]);
}
}
};
r([ l(c.default) ], e.prototype, "SpritetAvatar", void 0);
r([ l(cc.Sprite) ], e.prototype, "Avatar", void 0);
return r([ p ], e);
}(cc.Component);
n.default = u;
cc._RF.pop();
}, {
"../../LobbyConst": "LobbyConst",
"./ListAvatar": "ListAvatar"
} ],
TabTypeGameCtrl: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "f9205OA5INPFLbKqXgtwJU3", "TabTypeGameCtrl");
var o, i = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
})(t, e);
}, function(t, e) {
o(t, e);
function n() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n());
}), r = this && this.__decorate || function(t, e, n, o) {
var i, r = arguments.length, c = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, n, o); else for (var a = t.length - 1; a >= 0; a--) (i = t[a]) && (c = (r < 3 ? i(c) : r > 3 ? i(e, n, c) : i(e, n)) || c);
return r > 3 && c && Object.defineProperty(e, n, c), c;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var c = cc._decorator, a = c.ccclass, s = c.property, p = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.listAllGame = null;
e.listGameSlots = [];
e.listMiniGame = [];
e.listCardGame = [];
e.listLive = [];
e.listTheThao = [];
e.taball = null;
e.tabcard = null;
e.tabslot = null;
e.tabmini = null;
e.tablive = null;
e.tabthethao = null;
return e;
}
e.prototype.showAllGame = function() {
this.listAllGame.children.forEach(function(t) {
t && (t.active = !0);
});
};
e.prototype.showAllSlots = function() {
this.listAllGame.children.forEach(function(t) {
t && (t.active = !1);
});
this.listGameSlots.forEach(function(t) {
t && (t.active = !0);
});
};
e.prototype.showMiniGame = function() {
this.listAllGame.children.forEach(function(t) {
t && (t.active = !1);
});
this.listMiniGame.forEach(function(t) {
t && (t.active = !0);
});
};
e.prototype.showCardGame = function() {
this.listAllGame.children.forEach(function(t) {
t && (t.active = !1);
});
this.listCardGame.forEach(function(t) {
t && (t.active = !0);
});
};
e.prototype.showLive = function() {
this.listAllGame.children.forEach(function(t) {
t && (t.active = !1);
});
this.listLive.forEach(function(t) {
t && (t.active = !0);
});
};
e.prototype.showTheThao = function() {
this.listAllGame.children.forEach(function(t) {
t && (t.active = !1);
});
this.listTheThao.forEach(function(t) {
t && (t.active = !0);
});
};
e.prototype.onUITouchEvent = function(t, e) {
switch (e) {
case "showAll":
this.showAllGame();
break;

case "showSlots":
this.showAllSlots();
break;

case "cardgame":
this.showCardGame();
break;

case "minigame":
this.showMiniGame();
break;

case "live":
this.showLive();
break;

case "thethao":
this.showTheThao();
}
};
r([ s(cc.Node) ], e.prototype, "listAllGame", void 0);
r([ s(cc.Node) ], e.prototype, "listGameSlots", void 0);
r([ s(cc.Node) ], e.prototype, "listMiniGame", void 0);
r([ s(cc.Node) ], e.prototype, "listCardGame", void 0);
r([ s(cc.Node) ], e.prototype, "listLive", void 0);
r([ s(cc.Node) ], e.prototype, "listTheThao", void 0);
r([ s(cc.Node) ], e.prototype, "taball", void 0);
r([ s(cc.Node) ], e.prototype, "tabcard", void 0);
r([ s(cc.Node) ], e.prototype, "tabslot", void 0);
r([ s(cc.Node) ], e.prototype, "tabmini", void 0);
r([ s(cc.Node) ], e.prototype, "tablive", void 0);
r([ s(cc.Node) ], e.prototype, "tabthethao", void 0);
return r([ a ], e);
}(cc.Component);
n.default = p;
cc._RF.pop();
}, {} ],
TimeAndResultMinigame: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "ddb48MAZEhGtYvjd6LTZYFz", "TimeAndResultMinigame");
var o, i = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
})(t, e);
}, function(t, e) {
o(t, e);
function n() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n());
}), r = this && this.__decorate || function(t, e, n, o) {
var i, r = arguments.length, c = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, n, o); else for (var a = t.length - 1; a >= 0; a--) (i = t[a]) && (c = (r < 3 ? i(c) : r > 3 ? i(e, n, c) : i(e, n)) || c);
return r > 3 && c && Object.defineProperty(e, n, c), c;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var c = t("../LobbyConst"), a = cc._decorator, s = a.ccclass, p = a.property, l = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.RemainBetting = null;
e.nodetime = null;
e.resultTai = null;
e.resultXiu = null;
e.nodeResult = null;
e.timeremain = null;
e.isShowResult = !1;
e._isNodeResultActive = null;
e._lastTxNotify = null;
e._lobbyResultHeldForBowl = !1;
return e;
}
n = e;
Object.defineProperty(e, "instance", {
get: function() {
n._instance || (n._instance = new n());
return n._instance;
},
enumerable: !1,
configurable: !0
});
e.prototype.onLoad = function() {
n._instance = this;
this.resultTai.active = !1;
this.resultXiu.active = !1;
this.RemainBetting.string = "0";
this.nodeResult.active = !1;
this._isNodeResultActive = !1;
lngui.EventDispatch.instance.add(c.LobbyConst.EVENT_NAME.TX_NAN_COVER, this.onTxNanCoverChange, this);
};
e.prototype.onDestroy = function() {
lngui.EventDispatch.instance.remove(c.LobbyConst.EVENT_NAME.TX_NAN_COVER, this.onTxNanCoverChange, this);
};
e.prototype.onTxNanCoverChange = function(t) {
var e = !(!t || !t.active);
this._lobbyResultHeldForBowl = e;
e ? this.clearTaiXiuResultNodes() : this.flushLobbyTaiXiuFromLastNotify();
};
e.prototype.flushLobbyTaiXiuFromLastNotify = function() {
this._lastTxNotify && this.applyTaiXiuResultNodes(this._lastTxNotify);
};
e.prototype.clearTaiXiuResultNodes = function() {
this.resultTai.active = !1;
this.resultXiu.active = !1;
this.resultTai.stopAllActions();
this.resultXiu.stopAllActions();
};
e.prototype.applyTaiXiuResultNodes = function(t) {
var e = t.Result, n = t.RemainBetting, o = cc.scaleTo(.3, .65), i = cc.scaleTo(.3, .5), r = cc.sequence(o, i), c = cc.repeatForever(r);
if (1 == e && 0 == n) {
this.resultTai.active = !1;
this.resultXiu.active = !0;
this.resultXiu.runAction(c);
} else if (2 == e && 0 == n) {
this.resultTai.active = !0;
this.resultXiu.active = !1;
this.resultTai.runAction(c);
} else -1 == e && n > 0 && this.clearTaiXiuResultNodes();
};
e.prototype.RemainAndResult = function(t) {
if (this && this.enabled) {
var e = lngui.GameCoreManager.instance.isLoginSuccess;
if (this._isNodeResultActive !== e) {
this.nodeResult.active = e;
this._isNodeResultActive = e;
}
if (e) {
this._lastTxNotify = t;
t.Result;
this.timeremain = t.RemainBetting;
var n = this.timeremain;
this.RemainBetting.string = n + "";
this.nodetime.active = n > 3;
this._lobbyResultHeldForBowl ? this.clearTaiXiuResultNodes() : this.applyTaiXiuResultNodes(t);
}
}
};
var n;
e._instance = null;
r([ p(cc.Label) ], e.prototype, "RemainBetting", void 0);
r([ p(cc.Node) ], e.prototype, "nodetime", void 0);
r([ p(cc.Node) ], e.prototype, "resultTai", void 0);
r([ p(cc.Node) ], e.prototype, "resultXiu", void 0);
r([ p(cc.Node) ], e.prototype, "nodeResult", void 0);
return n = r([ s ], e);
}(cc.Component);
n.default = l;
cc._RF.pop();
}, {
"../LobbyConst": "LobbyConst"
} ],
TopHuIcon: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "84e0dgyCZ1AH6rW8oY05uF0", "TopHuIcon");
var o, i = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
})(t, e);
}, function(t, e) {
o(t, e);
function n() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n());
}), r = this && this.__decorate || function(t, e, n, o) {
var i, r = arguments.length, c = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, n, o); else for (var a = t.length - 1; a >= 0; a--) (i = t[a]) && (c = (r < 3 ? i(c) : r > 3 ? i(e, n, c) : i(e, n)) || c);
return r > 3 && c && Object.defineProperty(e, n, c), c;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var c = cc._decorator, a = c.ccclass, s = c.property, p = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.nodeJackpot = null;
return e;
}
e.prototype.onClick = function() {
this.nodeJackpot.active = !this.nodeJackpot.active;
};
r([ s(cc.Node) ], e.prototype, "nodeJackpot", void 0);
return r([ a ], e);
}(cc.Component);
n.default = p;
cc._RF.pop();
}, {} ],
WidgetIconBigbang: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "3acbcfqXDBEcYeUxomMconC", "WidgetIconBigbang");
var o, i = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
})(t, e);
}, function(t, e) {
o(t, e);
function n() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n());
}), r = this && this.__decorate || function(t, e, n, o) {
var i, r = arguments.length, c = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, n, o); else for (var a = t.length - 1; a >= 0; a--) (i = t[a]) && (c = (r < 3 ? i(c) : r > 3 ? i(e, n, c) : i(e, n)) || c);
return r > 3 && c && Object.defineProperty(e, n, c), c;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var c = t("./GUIEventBigBang"), a = cc._decorator, s = a.ccclass, p = a.property, l = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.prfMiniGame = null;
return e;
}
e.prototype.onClick = function() {
lngui.UIPopupManager.instance.has(c.default) || lngui.UIPopupManager.instance.showPopupFromPrefab(this.prfMiniGame);
};
r([ p(cc.Prefab) ], e.prototype, "prfMiniGame", void 0);
return r([ s ], e);
}(cc.Component);
n.default = l;
cc._RF.pop();
}, {
"./GUIEventBigBang": "GUIEventBigBang"
} ],
WidgetIconCtrl: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "3c748uOw7NLXpHZ13WZ9nfN", "WidgetIconCtrl");
var o, i = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
})(t, e);
}, function(t, e) {
o(t, e);
function n() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n());
}), r = this && this.__decorate || function(t, e, n, o) {
var i, r = arguments.length, c = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, n, o); else for (var a = t.length - 1; a >= 0; a--) (i = t[a]) && (c = (r < 3 ? i(c) : r > 3 ? i(e, n, c) : i(e, n)) || c);
return r > 3 && c && Object.defineProperty(e, n, c), c;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var c = t("./utils/Lobby_MiniGameNavigator"), a = cc._decorator, s = a.ccclass, p = a.property, l = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.prfPopupMinigame = null;
e.buttonClicked = !0;
e.buttonMoved = cc.Vec2.ZERO;
return e;
}
e.prototype.onClick = function() {
lngui.UIPopupManager.instance.has(c.default) || lngui.UIPopupManager.instance.showPopupFromPrefab(this.prfPopupMinigame);
};
e.prototype.onLoad = function() {
var t = this;
this.node.on(cc.Node.EventType.TOUCH_START, function() {
t.buttonClicked = !0;
t.buttonMoved = cc.Vec2.ZERO;
console.log("TOUCH_START");
}, this);
this.node.on(cc.Node.EventType.TOUCH_MOVE, function(e) {
t.buttonMoved = t.buttonMoved.add(e.getDelta());
t.buttonClicked && (Math.abs(t.buttonMoved.x) > 30 || Math.abs(t.buttonMoved.y) > 30) && (t.buttonClicked = !1);
}, this);
this.node.on(cc.Node.EventType.TOUCH_END, function() {
t.buttonClicked && t.onClick();
}, this);
};
r([ p(cc.Prefab) ], e.prototype, "prfPopupMinigame", void 0);
return r([ s ], e);
}(cc.Component);
n.default = l;
cc._RF.pop();
}, {
"./utils/Lobby_MiniGameNavigator": "Lobby_MiniGameNavigator"
} ],
autoOpenPopup: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "9121avohXhGpoklCDnZOJ0s", "autoOpenPopup");
var o, i = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
})(t, e);
}, function(t, e) {
o(t, e);
function n() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n());
}), r = this && this.__decorate || function(t, e, n, o) {
var i, r = arguments.length, c = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, n, o); else for (var a = t.length - 1; a >= 0; a--) (i = t[a]) && (c = (r < 3 ? i(c) : r > 3 ? i(e, n, c) : i(e, n)) || c);
return r > 3 && c && Object.defineProperty(e, n, c), c;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var c = cc._decorator, a = c.ccclass, s = c.property, p = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.popup = null;
return e;
}
e.prototype.onLoad = function() {
lngui.UIPopupManager.instance.showPopupFromPrefab(this.popup);
};
r([ s(cc.Prefab) ], e.prototype, "popup", void 0);
return r([ a ], e);
}(cc.Component);
n.default = p;
cc._RF.pop();
}, {} ]
}, {}, [ "LobbyConst", "BannerPromotion", "BetTX", "ChangeAvatar", "ListAvatar", "SetAvatar", "EventEDB", "ForgetPassCtrl", "GUIAccountChangePass", "GUIAccountDetail", "GUIAccountMail", "GUIAccountSafe", "GUIAccountSecurity", "GUIAccountSecurityNew", "GUIEventBigBang", "GUIEventX3Nap", "GUIGiftCode", "GUIOTP", "GUISettingCtrl", "GUITopJackpotCtrl", "GUITopupBank", "GUITopupBankManual", "GUITopupCrypto", "GUITopupCtrl", "GUITopupEWallet", "GUITopupExchange", "GUITopupHistoryAllGame", "GUITopupHistoryBankManual", "GUITopupHistoryNapRut", "GUITopupHistoryNapRut_The", "GUITopupRutBank", "GUITopupTelco", "GUITopupTranfers", "GUIUpdateDisplayName", "GateJackpotNoti", "GateSettingPopup", "GuiTopupRutMomo", "HeaderAccountCtrl", "HeaderCtrl", "ItemGiftBigBang", "ItemMail", "ItemNapX3", "ItemRankBigBang", "ItemTopJackpotCtrl", "JackpotBySlot", "LobbyCtrl", "LoginByLanding", "LoginCtrl", "MVUtils", "NodeDlAppLogin", "OpenUrl", "RegisterCtrl", "TabTypeGameCtrl", "TimeAndResultMinigame", "TopHuIcon", "WidgetIconBigbang", "WidgetIconCtrl", "LobbAudioDefined", "autoOpenPopup", "CheckAndSaveToken", "CheckAutoLogin", "EditBoxController ", "PopupRotateManager", "BundleMiniGame", "BundleSceneGame", "IconAnGame", "IconAnGameScene", "IconBanCa", "IconMiniPoker", "IconMiniTaiXiu", "IconMiniTomCuaCa", "IconTestGameCards", "NetworkPortal", "NotificationNetworkHandle", "NotiRun", "NotiRunItem", "AutoDetectDomainReal", "AutoFadeNode", "AutoFadeSpr", "AutoScroll", "CapchaReal", "CapchaZ", "Lobby_MiniGameNavigator", "Lobby_UIDraggable", "Lobby_UINumericLabelHelper", "Lobby_UIScrollBar", "Lobby_UIShowPopupHelp", "Lobby_UIShowToolTip", "Lobby_UITableView" ]);