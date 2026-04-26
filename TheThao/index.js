window.__require = function t(e, o, n) {
function a(r, c) {
if (!o[r]) {
if (!e[r]) {
var l = r.split("/");
l = l[l.length - 1];
if (!e[l]) {
var s = "function" == typeof __require && __require;
if (!c && s) return s(l, !0);
if (i) return i(l, !0);
throw new Error("Cannot find module '" + r + "'");
}
r = l;
}
var d = o[r] = {
exports: {}
};
e[r][0].call(d.exports, function(t) {
return a(e[r][1][t] || t);
}, d, d.exports, t, e, o, n);
}
return o[r].exports;
}
for (var i = "function" == typeof __require && __require, r = 0; r < n.length; r++) a(n[r]);
return a;
}({
Bet: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "5812b/avklMko3tyy6ccyeg", "Bet");
var n, a = this && this.__extends || (n = function(t, e) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
n(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), i = this && this.__decorate || function(t, e, o, n) {
var a, i = arguments.length, r = i < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(t, e, o, n); else for (var c = t.length - 1; c >= 0; c--) (a = t[c]) && (r = (i < 3 ? a(r) : i > 3 ? a(e, o, r) : a(e, o)) || r);
return i > 3 && r && Object.defineProperty(e, o, r), r;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var r = t("./Helper"), c = t("./TheThaoContext"), l = cc._decorator, s = l.ccclass, d = l.property, p = function(t) {
a(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.autoPlayShowAnim = !0;
e.showAnimDuration = .25;
e.fromOffsetY = 350;
e.useFade = !0;
e.time = null;
e.teamHome = null;
e.teamAway = null;
e.titleHome = null;
e.titleAway = null;
e.betTitle = null;
e.bet = null;
e.pBet = null;
e.rBet = null;
e.amount = null;
e.betAmount = null;
e.editboxAmount = null;
e.targetNode = null;
e.amountNum = 0;
e.betAmountNum = 0;
e.rateNum = 0;
e._targetPos = new cc.Vec2(-180, -700);
return e;
}
e.prototype.onEnable = function() {
this.betAmountNum = 0;
this.autoPlayShowAnim && this.playShowAnim();
};
e.prototype.start = function() {};
e.prototype.setData = function(t, e) {
void 0 === e && (e = !1);
this.time.string = r.default.formatDateTime(t.time);
this.teamHome.string = t.teamH;
this.teamAway.string = t.teamA;
this.betTitle.string = t.betTitle;
this.bet.string = t.bet;
this.pBet.string = t.p + "@";
this.rBet.string = t.rate;
this.rateNum = parseFloat(t.rate);
this.amount.string = "0";
this.betAmount.string = "0";
this.editboxAmount.string = "";
parseFloat(t.rate) < 0 ? this.rBet.node.color = cc.Color.RED : this.rBet.node.color = cc.Color.BLACK;
if (e) {
this.titleHome.node.active = !1;
this.titleAway.node.active = !1;
this.teamAway.node.active = !1;
this.teamHome.node.setPosition(cc.v2(0, 105));
} else {
this.titleHome.node.active = !0;
this.titleAway.node.active = !0;
this.teamAway.node.active = !0;
this.teamHome.node.setPosition(cc.v2(-130, 105));
}
};
e.prototype.onCLoseBetNode = function() {
var t = this.targetNode;
t.stopAllActions();
this._targetPos && t.setPosition(this._targetPos);
t.opacity = 255;
this.node.active = !1;
};
e.prototype.playShowAnim = function() {
var t = this.targetNode;
t.stopAllActions();
this._targetPos || (this._targetPos = t.getPosition());
var e = Math.max(0, this.showAnimDuration || 0);
t.opacity = this.useFade ? 0 : 255;
t.setPosition(this._targetPos.x, this._targetPos.y - (this.fromOffsetY || 0));
var o = cc.moveTo(e, this._targetPos).easing(cc.easeBackOut());
if (this.useFade) {
var n = cc.fadeTo(e, 255).easing(cc.easeCubicActionOut());
t.runAction(cc.spawn(o, n));
} else t.runAction(o);
};
e.prototype.onBetAmountChange = function(t) {
"" == t && (t = "0");
this.betAmountNum = parseInt(t);
this.betAmount.string = r.default.formatDotNumber(this.betAmountNum);
var e = this.rateNum > 1 ? this.betAmountNum * this.rateNum : this.betAmountNum + Math.abs(this.betAmountNum * this.rateNum);
this.amount.string = r.default.formatDotNumber(Math.abs(e));
this.editboxAmount.string = r.default.formatDotNumber(this.betAmountNum);
};
e.prototype.onBetClick = function(t, e) {
this.betAmountNum += parseInt(e);
this.betAmount.string = r.default.formatDotNumber(this.betAmountNum);
var o = this.rateNum > 1 ? this.betAmountNum * this.rateNum : this.betAmountNum + Math.abs(this.betAmountNum * this.rateNum);
this.amount.string = r.default.formatDotNumber(Math.abs(o));
this.editboxAmount.string = r.default.formatDotNumber(this.betAmountNum);
};
e.prototype.onBetConfirm = function() {
var t = c.getTheThaoInstance();
t && t.uiLoading && t.uiLoading.showLoading();
this.onCLoseBetNode();
this.scheduleOnce(function() {
lngui.UITextManager.showCenterNotification("Có lỗi xảy ra vui lòng thử lại sau ít phút!");
}, 3);
};
i([ d ], e.prototype, "autoPlayShowAnim", void 0);
i([ d ], e.prototype, "showAnimDuration", void 0);
i([ d ], e.prototype, "fromOffsetY", void 0);
i([ d ], e.prototype, "useFade", void 0);
i([ d(cc.Label) ], e.prototype, "time", void 0);
i([ d(cc.Label) ], e.prototype, "teamHome", void 0);
i([ d(cc.Label) ], e.prototype, "teamAway", void 0);
i([ d(cc.Label) ], e.prototype, "titleHome", void 0);
i([ d(cc.Label) ], e.prototype, "titleAway", void 0);
i([ d(cc.Label) ], e.prototype, "betTitle", void 0);
i([ d(cc.Label) ], e.prototype, "bet", void 0);
i([ d(cc.Label) ], e.prototype, "pBet", void 0);
i([ d(cc.Label) ], e.prototype, "rBet", void 0);
i([ d(cc.Label) ], e.prototype, "amount", void 0);
i([ d(cc.Label) ], e.prototype, "betAmount", void 0);
i([ d(cc.EditBox) ], e.prototype, "editboxAmount", void 0);
i([ d(cc.Node) ], e.prototype, "targetNode", void 0);
return i([ s ], e);
}(cc.Component);
o.default = p;
cc._RF.pop();
}, {
"./Helper": "Helper",
"./TheThaoContext": "TheThaoContext"
} ],
BongDa: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "67af7ttDbNL/6LkTauhiwvc", "BongDa");
var n, a = this && this.__extends || (n = function(t, e) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
n(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), i = this && this.__decorate || function(t, e, o, n) {
var a, i = arguments.length, r = i < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(t, e, o, n); else for (var c = t.length - 1; c >= 0; c--) (a = t[c]) && (r = (i < 3 ? a(r) : i > 3 ? a(e, o, r) : a(e, o)) || r);
return i > 3 && r && Object.defineProperty(e, o, r), r;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var r = t("./GiaiDau"), c = t("./GiaiDauDB"), l = t("./NetworkClient"), s = t("./PoolNode"), d = t("./TheoThaoConfig"), p = t("./TheThao"), u = t("./TranDauGhim"), h = cc._decorator, f = h.ccclass, y = h.property, T = function(t) {
a(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.BongDaScrollView = null;
e.BongDaContent = null;
e.GiaiDau = null;
e.GiaiDauItems = [];
e.GiaiDauDB = null;
e.TranDauGhimScrollView = null;
e.TranDauGhimContent = null;
e.TranDauGhim = null;
e.GiaiDauDBItems = [];
e.renderBatchSize = 3;
e.collapseMatchesOnLoad = !0;
e.expandFirstLeaguesCount = 2;
e.enableDynamicAtlas = !0;
e.rerenderPinEveryLoad = !0;
e.sportUrl = d.TheoThaoConfig.dauSom;
e.renderToken = 0;
e.GiaiDauToggle = !0;
e.ghimRender = !1;
e.toggleContainer = null;
return e;
}
e.prototype.onLoad = function() {
var t = this;
if (this.enableDynamicAtlas) {
var e = cc.dynamicAtlasManager;
e && (e.enabled = !0);
}
this.toggleContainer.toggleItems.forEach(function(e) {
e.node.on("toggle", t.onToggleChange, t);
});
};
e.prototype.onDisable = function() {
this.unscheduleAllCallbacks();
};
e.prototype.onEnable = function() {
this.loadData();
};
e.prototype.start = function() {};
e.prototype.loadData = function() {
var t = this;
p.default.getInstance().uiLoading.activeLoading(!0);
l.default.instance.getCb(this.sportUrl, function(e, o) {
e ? p.default.getInstance().uiLoading.activeLoading(!1) : t.renderSportData(o.response).then(function() {
p.default.getInstance().uiLoading.activeLoading(!1);
if (t.rerenderPinEveryLoad) t.renderSportPin(o.response); else if (!t.ghimRender) {
t.ghimRender = !0;
t.renderSportPin(o.response);
}
}).catch(function() {
p.default.getInstance().uiLoading.activeLoading(!1);
});
});
};
e.prototype.loadDataDB = function() {
var t = this;
p.default.getInstance().uiLoading.activeLoading(!0);
l.default.instance.getCb(this.sportUrl, function(e, o) {
e ? p.default.getInstance().uiLoading.activeLoading(!1) : t.renderSportDBData(o.response).then(function() {
p.default.getInstance().uiLoading.activeLoading(!1);
t.rerenderPinEveryLoad && t.renderSportPin(o.response);
}).catch(function() {
p.default.getInstance().uiLoading.activeLoading(!1);
});
});
};
e.prototype.clearToPool = function() {
for (var t = function(t) {
var e = t.getComponent(r.default), o = t.getComponent(c.default), n = o ? "TheThao.GiaiDauDB" : "TheThao.GiaiDau";
s.default.put(n, t, function() {
o && o.reset ? o.reset() : e && e.reset ? e.reset() : t.removeAllChildren();
});
}, e = 0, o = this.BongDaContent.children.slice(); e < o.length; e++) t(o[e]);
this.BongDaContent.removeAllChildren();
this.GiaiDauItems = [];
this.GiaiDauDBItems = [];
};
e.prototype.clearPinToPool = function() {
if (this.TranDauGhimContent) {
s.default.putChildren("TheThao.TranDauGhim", this.TranDauGhimContent);
this.TranDauGhimContent.removeAllChildren();
}
};
e.prototype.applyDefaultExpandState = function() {
this.GiaiDauToggle = !this.collapseMatchesOnLoad;
};
e.prototype.getInitialExpandedByIndex = function(t) {
return !this.collapseMatchesOnLoad || t < Math.max(0, 0 | this.expandFirstLeaguesCount);
};
e.prototype.renderSportData = function(t) {
var e = this, o = ++this.renderToken;
this.unscheduleAllCallbacks();
this.clearToPool();
this.applyDefaultExpandState();
var n = this.BongDaContent.getComponent(cc.Layout);
n && (n.enabled = !1);
var a = Array.isArray(t) ? t : [], i = 0, c = Math.max(1, 0 | this.renderBatchSize);
return new Promise(function(t) {
var l = function() {
if (o === e.renderToken) {
for (var d = 0; i < a.length && d < c; ) {
var p = i, u = a[i++], h = s.default.get("TheThao.GiaiDau", e.GiaiDau);
h.parent = e.BongDaContent;
var f = h.getComponent(r.default);
e.GiaiDauItems.push(f);
if (f) {
f.setData(u);
var y = e.getInitialExpandedByIndex(p);
f.setExpanded && f.setExpanded(y, !1);
}
d++;
}
if (i >= a.length) {
if (n) {
n.enabled = !0;
n.updateLayout && n.updateLayout();
}
if (e.BongDaScrollView) {
e.BongDaScrollView.stopAutoScroll();
e.BongDaScrollView.scrollToTop(0);
}
e.unschedule(l);
t();
}
} else {
e.unschedule(l);
t();
}
};
e.schedule(l, 0);
});
};
e.prototype.renderSportDBData = function(t) {
var e = this, o = ++this.renderToken;
this.unscheduleAllCallbacks();
this.clearToPool();
this.applyDefaultExpandState();
var n = this.BongDaContent.getComponent(cc.Layout);
n && (n.enabled = !1);
var a = Array.isArray(t) ? t : [], i = 0, r = Math.max(1, 0 | this.renderBatchSize);
return new Promise(function(t) {
var l = function() {
if (o === e.renderToken) {
for (var d = 0; i < a.length && d < r; ) {
var p = i, u = a[i++], h = s.default.get("TheThao.GiaiDauDB", e.GiaiDauDB);
h.parent = e.BongDaContent;
var f = h.getComponent(c.default);
e.GiaiDauDBItems.push(f);
if (f) {
f.setData(u);
var y = e.getInitialExpandedByIndex(p);
f.setExpanded && f.setExpanded(y, !1);
}
d++;
}
if (i >= a.length) {
if (n) {
n.enabled = !0;
n.updateLayout && n.updateLayout();
}
if (e.BongDaScrollView) {
e.BongDaScrollView.stopAutoScroll();
e.BongDaScrollView.scrollToTop(0);
}
e.unschedule(l);
t();
}
} else {
e.unschedule(l);
t();
}
};
e.schedule(l, 0);
});
};
e.prototype.renderSportPin = function(t) {
if (this.TranDauGhimContent && this.TranDauGhim) {
var e = this.TranDauGhimContent.getComponent(cc.Layout);
e && (e.enabled = !1);
this.clearPinToPool();
for (var o = 0, n = Array.isArray(t) ? t : []; o < n.length; o++) {
var a = n[o];
if (a && !0 === a.pin) {
var i = s.default.get("TheThao.TranDauGhim", this.TranDauGhim);
i.parent = this.TranDauGhimContent;
var r = i.getComponent(u.default);
r && r.setData(a);
}
}
if (e) {
e.enabled = !0;
e.updateLayout && e.updateLayout();
}
}
};
e.prototype.onToggleChange = function(t) {
switch (t.node.name) {
case "dacbiet":
this.sportUrl = d.TheoThaoConfig.dacbiet;
this.loadDataDB();
break;

case "dausom":
this.sportUrl = d.TheoThaoConfig.dauSom;
this.loadData();
break;

case "homnay":
this.sportUrl = d.TheoThaoConfig.homNay;
this.loadData();
break;

case "tructiep":
this.sportUrl = d.TheoThaoConfig.tructiep;
this.loadData();
}
};
e.prototype.onToggleTranDauClick = function() {
this.GiaiDauToggle = !this.GiaiDauToggle;
for (var t = 0, e = this.GiaiDauItems; t < e.length; t++) (a = e[t]) && (a.setExpanded ? a.setExpanded(this.GiaiDauToggle, !0) : a.playToggleTranDau(this.GiaiDauToggle));
for (var o = 0, n = this.GiaiDauDBItems; o < n.length; o++) {
var a;
(a = n[o]) && (a.setExpanded ? a.setExpanded(this.GiaiDauToggle, !0) : a.playToggleTranDau(this.GiaiDauToggle));
}
};
i([ y(cc.ScrollView) ], e.prototype, "BongDaScrollView", void 0);
i([ y(cc.Node) ], e.prototype, "BongDaContent", void 0);
i([ y(cc.Prefab) ], e.prototype, "GiaiDau", void 0);
i([ y(cc.Prefab) ], e.prototype, "GiaiDauDB", void 0);
i([ y(cc.ScrollView) ], e.prototype, "TranDauGhimScrollView", void 0);
i([ y(cc.Node) ], e.prototype, "TranDauGhimContent", void 0);
i([ y(cc.Prefab) ], e.prototype, "TranDauGhim", void 0);
i([ y ], e.prototype, "renderBatchSize", void 0);
i([ y ], e.prototype, "collapseMatchesOnLoad", void 0);
i([ y ], e.prototype, "expandFirstLeaguesCount", void 0);
i([ y ], e.prototype, "enableDynamicAtlas", void 0);
i([ y ], e.prototype, "rerenderPinEveryLoad", void 0);
i([ y(cc.ToggleContainer) ], e.prototype, "toggleContainer", void 0);
return i([ f ], e);
}(cc.Component);
o.default = T;
cc._RF.pop();
}, {
"./GiaiDau": "GiaiDau",
"./GiaiDauDB": "GiaiDauDB",
"./NetworkClient": "NetworkClient",
"./PoolNode": "PoolNode",
"./TheThao": "TheThao",
"./TheoThaoConfig": "TheoThaoConfig",
"./TranDauGhim": "TranDauGhim"
} ],
CaiDat: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "30fb1CO0O1I5aLlK3XALStt", "CaiDat");
var n, a = this && this.__extends || (n = function(t, e) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
n(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), i = this && this.__decorate || function(t, e, o, n) {
var a, i = arguments.length, r = i < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(t, e, o, n); else for (var c = t.length - 1; c >= 0; c--) (a = t[c]) && (r = (i < 3 ? a(r) : i > 3 ? a(e, o, r) : a(e, o)) || r);
return i > 3 && r && Object.defineProperty(e, o, r), r;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var r = cc._decorator, c = r.ccclass, l = r.property, s = function(t) {
a(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.autoPlayShowAnim = !0;
e.showAnimDuration = .25;
e.fromScaleX = 0;
e.fromScaleY = 0;
return e;
}
e.prototype.onEnable = function() {
this.autoPlayShowAnim && this.playShowAnim();
};
e.prototype.start = function() {};
e.prototype.playShowAnim = function() {
var t = this.node;
t.stopAllActions();
var e = Math.max(0, this.showAnimDuration || 0), o = 0 === t.scaleX ? 1 : t.scaleX, n = 0 === t.scaleY ? 1 : t.scaleY;
t.opacity = 0;
t.scaleX = this.fromScaleX;
t.scaleY = this.fromScaleY;
var a = cc.fadeTo(e, 255).easing(cc.easeCubicActionOut()), i = cc.scaleTo(e, o, n).easing(cc.easeBackOut());
t.runAction(cc.spawn(a, i));
};
e.prototype.hide = function() {
this.node.active = !1;
};
i([ l ], e.prototype, "autoPlayShowAnim", void 0);
i([ l ], e.prototype, "showAnimDuration", void 0);
i([ l ], e.prototype, "fromScaleX", void 0);
i([ l ], e.prototype, "fromScaleY", void 0);
return i([ c ], e);
}(cc.Component);
o.default = s;
cc._RF.pop();
}, {} ],
ChanLeH2: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "9c2e5pS3xJL66klPGYFBzQj", "ChanLeH2");
var n, a = this && this.__extends || (n = function(t, e) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
n(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), i = this && this.__decorate || function(t, e, o, n) {
var a, i = arguments.length, r = i < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(t, e, o, n); else for (var c = t.length - 1; c >= 0; c--) (a = t[c]) && (r = (i < 3 ? a(r) : i > 3 ? a(e, o, r) : a(e, o)) || r);
return i > 3 && r && Object.defineProperty(e, o, r), r;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var r, c = t("./GameEnum"), l = t("./Helper"), s = t("./Odd"), d = cc._decorator, p = d.ccclass, u = d.property;
(function(t) {
t[t.event = 0] = "event";
t[t.odd = 1] = "odd";
})(r || (r = {}));
var h = function(t) {
a(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.le = null;
e.chan = null;
e.oddPrefab = null;
e.chanLeH2Node = null;
return e;
}
e.prototype.renderData = function(t, e) {
var o = this;
this.createOddData(t, this.le, e.oddH2, c.OddType.CHANLEH2, r.odd);
this.createOddData(t, this.chan, e.evenH2, c.OddType.CHANLEH2, r.event);
this.scheduleOnce(function() {
o.chanLeH2Node.height = l.default.getMaxHeight([ o.chan, o.le ]);
}, 0);
};
e.prototype.addOdd = function(t, e) {
var o = l.default.instantiateNode(t, this.oddPrefab);
o.getComponent(s.default).setData(e);
o.getChildByName("rOdd").setPosition(cc.v2(0, 2));
};
e.prototype.createOddData = function(t, e, o, n, a) {
e.removeAllChildren();
o && this.addOdd(e, {
teamH: t.hn,
teamA: t.an,
time: t.et,
betTitle: l.default.getBetTitle(n),
bet: this.getOddBetType(a),
p: "",
rate: o
});
};
e.prototype.getOddBetType = function(t) {
switch (t) {
case r.event:
return "Chẵn";

case r.odd:
return "Lẻ";

default:
return "";
}
};
i([ u(cc.Node) ], e.prototype, "le", void 0);
i([ u(cc.Node) ], e.prototype, "chan", void 0);
i([ u(cc.Prefab) ], e.prototype, "oddPrefab", void 0);
i([ u(cc.Node) ], e.prototype, "chanLeH2Node", void 0);
return i([ p ], e);
}(cc.Component);
o.default = h;
cc._RF.pop();
}, {
"./GameEnum": "GameEnum",
"./Helper": "Helper",
"./Odd": "Odd"
} ],
ChanLeNhaKhach: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "c4fa1AYDUNPYqXeijUIe4Bc", "ChanLeNhaKhach");
var n, a = this && this.__extends || (n = function(t, e) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
n(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), i = this && this.__decorate || function(t, e, o, n) {
var a, i = arguments.length, r = i < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(t, e, o, n); else for (var c = t.length - 1; c >= 0; c--) (a = t[c]) && (r = (i < 3 ? a(r) : i > 3 ? a(e, o, r) : a(e, o)) || r);
return i > 3 && r && Object.defineProperty(e, o, r), r;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var r, c = t("./GameEnum"), l = t("./Helper"), s = t("./Odd"), d = cc._decorator, p = d.ccclass, u = d.property;
(function(t) {
t[t.odd = 0] = "odd";
t[t.even = 1] = "even";
})(r || (r = {}));
var h = function(t) {
a(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.leNha = null;
e.chanNha = null;
e.leKhach = null;
e.chanKhach = null;
e.oddPrefab = null;
e.chanLeNhaKhachNode = null;
return e;
}
e.prototype.renderData = function(t, e) {
var o = this;
this.createOddData(t, this.leNha, e.oddNha, c.OddType.DOINHA, r.odd);
this.createOddData(t, this.chanNha, e.evenNha, c.OddType.DOINHA, r.even);
this.createOddData(t, this.leKhach, e.oddKhach, c.OddType.DOIKHACH, r.odd);
this.createOddData(t, this.chanKhach, e.evenKhach, c.OddType.DOIKHACH, r.even);
this.scheduleOnce(function() {
o.chanLeNhaKhachNode.height = l.default.getMaxHeight([ o.leNha, o.chanNha, o.leKhach, o.chanKhach ]);
}, 0);
};
e.prototype.addOdd = function(t, e) {
var o = l.default.instantiateNode(t, this.oddPrefab);
o.getComponent(s.default).setData(e);
o.getChildByName("rOdd").setPosition(cc.v2(0, 2));
};
e.prototype.createOddData = function(t, e, o, n, a) {
e.removeAllChildren();
o && this.addOdd(e, {
teamH: t.hn,
teamA: t.an,
time: t.et,
betTitle: l.default.getBetTitle(n),
bet: this.getOddBetType(a),
p: "",
rate: o
});
};
e.prototype.getOddBetType = function(t) {
switch (t) {
case r.odd:
return "Lẻ";

case r.even:
return "Chẵn";

default:
return "";
}
};
i([ u(cc.Node) ], e.prototype, "leNha", void 0);
i([ u(cc.Node) ], e.prototype, "chanNha", void 0);
i([ u(cc.Node) ], e.prototype, "leKhach", void 0);
i([ u(cc.Node) ], e.prototype, "chanKhach", void 0);
i([ u(cc.Prefab) ], e.prototype, "oddPrefab", void 0);
i([ u(cc.Node) ], e.prototype, "chanLeNhaKhachNode", void 0);
return i([ p ], e);
}(cc.Component);
o.default = h;
cc._RF.pop();
}, {
"./GameEnum": "GameEnum",
"./Helper": "Helper",
"./Odd": "Odd"
} ],
ChanLe: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "d1a05476fpGP42uNYW+ZU+q", "ChanLe");
var n, a = this && this.__extends || (n = function(t, e) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
n(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), i = this && this.__decorate || function(t, e, o, n) {
var a, i = arguments.length, r = i < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(t, e, o, n); else for (var c = t.length - 1; c >= 0; c--) (a = t[c]) && (r = (i < 3 ? a(r) : i > 3 ? a(e, o, r) : a(e, o)) || r);
return i > 3 && r && Object.defineProperty(e, o, r), r;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var r, c = t("./GameEnum"), l = t("./Helper"), s = t("./Odd"), d = cc._decorator, p = d.ccclass, u = d.property;
(function(t) {
t[t.event = 0] = "event";
t[t.odd = 1] = "odd";
})(r || (r = {}));
var h = function(t) {
a(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.chan = null;
e.le = null;
e.chanH1 = null;
e.leH1 = null;
e.oddPrefab = null;
e.chanLeNode = null;
return e;
}
e.prototype.renderData = function(t, e) {
var o = this;
this.createOddData(t, this.chan, e.evenFT, c.OddType.CHANLE, r.event);
this.createOddData(t, this.le, e.oddFT, c.OddType.CHANLE, r.odd);
this.createOddData(t, this.chanH1, e.evenH1, c.OddType.CHANLEH1, r.event);
this.createOddData(t, this.leH1, e.oddH1, c.OddType.CHANLEH1, r.odd);
this.scheduleOnce(function() {
o.chanLeNode.height = l.default.getMaxHeight([ o.chan, o.le, o.chanH1, o.leH1 ]);
}, 0);
};
e.prototype.addOdd = function(t, e) {
var o = l.default.instantiateNode(t, this.oddPrefab);
o.getComponent(s.default).setData(e);
o.getChildByName("rOdd").setPosition(cc.v2(0, 2));
};
e.prototype.createOddData = function(t, e, o, n, a) {
e.removeAllChildren();
o && this.addOdd(e, {
teamH: t.hn,
teamA: t.an,
time: t.et,
betTitle: l.default.getBetTitle(n),
bet: this.getOddBetType(a),
p: "",
rate: o
});
};
e.prototype.getOddBetType = function(t) {
switch (t) {
case r.event:
return "Chẵn";

case r.odd:
return "Lẻ";

default:
return "";
}
};
i([ u(cc.Node) ], e.prototype, "chan", void 0);
i([ u(cc.Node) ], e.prototype, "le", void 0);
i([ u(cc.Node) ], e.prototype, "chanH1", void 0);
i([ u(cc.Node) ], e.prototype, "leH1", void 0);
i([ u(cc.Prefab) ], e.prototype, "oddPrefab", void 0);
i([ u(cc.Node) ], e.prototype, "chanLeNode", void 0);
return i([ p ], e);
}(cc.Component);
o.default = h;
cc._RF.pop();
}, {
"./GameEnum": "GameEnum",
"./Helper": "Helper",
"./Odd": "Odd"
} ],
ChiTietTranDau: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "0e25fMaYOlCFaYm/+eTKoNg", "ChiTietTranDau");
var n, a = this && this.__extends || (n = function(t, e) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
n(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), i = this && this.__decorate || function(t, e, o, n) {
var a, i = arguments.length, r = i < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(t, e, o, n); else for (var c = t.length - 1; c >= 0; c--) (a = t[c]) && (r = (i < 3 ? a(r) : i > 3 ? a(e, o, r) : a(e, o)) || r);
return i > 3 && r && Object.defineProperty(e, o, r), r;
}, r = this && this.__spreadArrays || function() {
for (var t = 0, e = 0, o = arguments.length; e < o; e++) t += arguments[e].length;
var n = Array(t), a = 0;
for (e = 0; e < o; e++) for (var i = arguments[e], r = 0, c = i.length; r < c; r++, 
a++) n[a] = i[r];
return n;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var c = t("./ChanLe"), l = t("./ChanLeH2"), s = t("./ChanLeNhaKhach"), d = t("./CoHoiKep"), p = t("./DoiKhachTx"), u = t("./DoiNhaTx"), h = t("./GameEnum"), f = t("./H2"), y = t("./Helper"), T = t("./HoanTien"), v = t("./TongBanThang"), g = t("./Tran"), m = t("./Tyso"), O = cc._decorator, _ = O.ccclass, b = O.property, H = function(t) {
a(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.logoTeamH = null;
e.logoTeamA = null;
e.time = null;
e.labelGiai = null;
e.labelTeamH = null;
e.labelTeamA = null;
e.tran = null;
e.tyso = null;
e.h2 = null;
e.chanLe = null;
e.chanLeH2 = null;
e.chanLeNhaKhach = null;
e.hoanTien = null;
e.coHoiKep = null;
e.doiNhaTx = null;
e.doiKhachTx = null;
e.tongBanThang = null;
e.TranDauToggleNode = [];
e.IconToggleNode = [];
e.toggleAnimDuration = .4;
e.toggleSlideOffsetY = 60;
e.TranDauToggle = [];
e.trandauData = null;
e._toggleTargetPos = [];
e.allNode = [];
e.tranDauNode = [];
e.tysoNode = [];
return e;
}
e.prototype.start = function() {};
e.prototype.setDeaActiveTabAll = function() {
this.allNode.forEach(function(t) {
t.active = !1;
});
this.tranDauNode.forEach(function(t) {
t.active = !1;
});
this.tysoNode.forEach(function(t) {
t.active = !1;
});
};
e.prototype.setTab = function(t) {
this.setDeaActiveTabAll();
switch (t) {
case "tatca":
this.allNode.forEach(function(t) {
t.active = !0;
});
break;

case "tran":
this.tranDauNode.forEach(function(t) {
t.active = !0;
});
break;

case "goc":
break;

case "tyso":
this.tysoNode.forEach(function(t) {
t.active = !0;
});
}
};
e.prototype.onToggleTranDauClick = function(t, e) {
var o = parseInt(e);
this.TranDauToggle[o] = !this.TranDauToggle[o];
this.playToggleTranDau(this.TranDauToggle[o], o);
};
e.prototype.playToggleTranDau = function(t, e) {
var o = this.TranDauToggleNode[e];
if (o) {
o.stopAllActions();
var n = Math.max(0, this.toggleAnimDuration || 0), a = this.toggleSlideOffsetY || 0;
this._toggleTargetPos[e] || (this._toggleTargetPos[e] = o.getPosition());
var i = this._toggleTargetPos[e], r = this.IconToggleNode[e];
if (r) {
r.stopAllActions();
var c = t ? -1 : 1;
r.runAction(cc.scaleTo(n, r.scaleX, c).easing(cc.easeCubicActionOut()));
}
if (t) {
o.active = !0;
o.opacity = 0;
o.setPosition(i.x, i.y + a);
var l = cc.fadeTo(n, 255).easing(cc.easeCubicActionOut()), s = cc.moveTo(n, i).easing(cc.easeCubicActionOut());
o.runAction(cc.spawn(l, s));
} else {
var d = cc.fadeTo(n, 0).easing(cc.easeCubicActionIn()), p = cc.moveTo(n, i.x, i.y + a).easing(cc.easeCubicActionIn());
o.runAction(cc.sequence(cc.spawn(d, p), cc.callFunc(function() {
o.active = !1;
o.setPosition(i);
o.opacity = 255;
})));
}
}
};
e.prototype.reset = function() {
if (this.TranDauToggleNode.length > 0) for (var t = 0; t < this.TranDauToggleNode.length; t++) {
this.TranDauToggleNode[t].stopAllActions();
this.IconToggleNode[t].scaleY = -1;
}
};
e.prototype.setData = function(t) {
this.reset();
this.trandauData = t;
this.labelGiai.string = y.default.truncate(t.ln, 30);
this.time.string = y.default.formatDateTime(t.et);
y.default.setSpriteFromUrl(this.logoTeamH, t.hf);
this.labelTeamH.string = y.default.truncate(t.hn, 10);
y.default.setSpriteFromUrl(this.logoTeamA, t.af);
this.labelTeamA.string = y.default.truncate(t.an, 10);
var e = this.transformData(t.odd), o = this.transformDataH2(t.odd), n = this.transformCorrectScore(t.odd), a = this.transformDataTBT(t.odd), i = this.transformChanLe(t.odd), r = this.transformChanLeH2(t.odd), c = this.transformChanLeNhaKhach(t.odd), l = this.transformHoanTien(t.odd), s = this.transformCoHoiKep(t.odd), d = this.transformDoiNhaTx(t.odd), p = this.transformDoiNhaTx(t.odd);
if (!y.default.hasEmptyValue(e)) {
this.tran.renderData(t, e);
this.TranDauToggle.push(!0);
this.allNode.push(this.tran.node);
this.tranDauNode.push(this.tran.node);
}
this.tran.node.active = !y.default.hasEmptyValue(e);
if (!y.default.hasEmptyValue(o)) {
this.h2.renderData(t, o);
this.TranDauToggle.push(!0);
this.allNode.push(this.h2.node);
this.tranDauNode.push(this.h2.node);
}
this.h2.node.active = !y.default.hasEmptyValue(o);
if (!y.default.hasEmptyValue(n)) {
this.tyso.renderData(t, n);
this.TranDauToggle.push(!0);
this.allNode.push(this.tyso.node);
this.tysoNode.push(this.tyso.node);
}
this.tyso.node.active = !y.default.hasEmptyValue(n);
if (!y.default.hasEmptyValue(a)) {
this.tongBanThang.renderData(t, a);
this.TranDauToggle.push(!0);
this.allNode.push(this.tongBanThang.node);
this.tysoNode.push(this.tyso.node);
}
this.tongBanThang.node.active = !y.default.hasEmptyValue(a);
if (!y.default.hasEmptyValue(i)) {
this.chanLe.renderData(t, i);
this.TranDauToggle.push(!0);
this.allNode.push(this.chanLe.node);
this.tranDauNode.push(this.h2.node);
}
this.chanLe.node.active = !y.default.hasEmptyValue(i);
if (y.default.hasEmptyValue(r)) this.chanLeH2.node.active = !1; else {
this.chanLeH2.renderData(t, r);
this.TranDauToggle.push(!0);
this.allNode.push(this.chanLeH2.node);
this.tranDauNode.push(this.h2.node);
}
if (!y.default.hasEmptyValue(c)) {
this.chanLeNhaKhach.renderData(t, c);
this.TranDauToggle.push(!0);
this.allNode.push(this.chanLeNhaKhach.node);
this.tranDauNode.push(this.h2.node);
}
this.chanLeNhaKhach.node.active = !y.default.hasEmptyValue(c);
if (!y.default.hasEmptyValue(l)) {
this.hoanTien.renderData(t, l);
this.TranDauToggle.push(!0);
this.allNode.push(this.hoanTien.node);
this.tranDauNode.push(this.h2.node);
}
this.hoanTien.node.active = !y.default.hasEmptyValue(l);
if (!y.default.hasEmptyValue(s)) {
this.coHoiKep.renderData(t, s);
this.TranDauToggle.push(!0);
this.allNode.push(this.coHoiKep.node);
this.tranDauNode.push(this.h2.node);
}
this.coHoiKep.node.active = !y.default.hasEmptyValue(s);
if (!y.default.hasEmptyValue(d)) {
this.doiNhaTx.renderData(t, d);
this.TranDauToggle.push(!0);
this.allNode.push(this.doiNhaTx.node);
this.tranDauNode.push(this.h2.node);
}
this.doiNhaTx.node.active = !y.default.hasEmptyValue(d);
if (!y.default.hasEmptyValue(p)) {
this.doiKhachTx.renderData(t, p);
this.TranDauToggle.push(!0);
this.allNode.push(this.doiKhachTx.node);
this.tranDauNode.push(this.h2.node);
}
this.doiKhachTx.node.active = !y.default.hasEmptyValue(p);
};
e.prototype.parse1X2 = function(t) {
var e, o, n, a = t.o.find(function(t) {
return t.ml;
}) || t.o[0];
return a ? {
home: null === (e = a.oh) || void 0 === e ? void 0 : e.de,
draw: null === (o = a.od) || void 0 === o ? void 0 : o.de,
away: null === (n = a.oa) || void 0 === n ? void 0 : n.de
} : null;
};
e.prototype.parseOverUnder = function(t) {
var e = this;
return t.o.map(function(t) {
return {
line: e.formatLine(t.p),
over: t.oh.ma,
under: t.oa.ma
};
});
};
e.prototype.parseOverUnderH2 = function(t) {
var e = this;
return t.o.map(function(t) {
return {
line: e.formatLine(t.p),
over: t.oh.de,
under: t.oa.de
};
});
};
e.prototype.parseHandicap = function(t) {
var e = this;
return r(t.o).sort(function(t, e) {
return parseFloat(t.p) - parseFloat(e.p);
}).map(function(t) {
var o, n;
return {
line: e.formatLine(t.p),
lineTeam: e.getHandicapTeam(t.p),
home: null === (o = t.oh) || void 0 === o ? void 0 : o.ma,
away: null === (n = t.oa) || void 0 === n ? void 0 : n.ma
};
});
};
e.prototype.parseHandicapH2 = function(t) {
var e = this;
return r(t.o).sort(function(t, e) {
return parseFloat(t.p) - parseFloat(e.p);
}).map(function(t) {
var o, n;
return {
line: e.formatLine(t.p),
lineTeam: e.getHandicapTeam(t.p),
home: null === (o = t.oh) || void 0 === o ? void 0 : o.de,
away: null === (n = t.oa) || void 0 === n ? void 0 : n.de
};
});
};
e.prototype.parseHandicapFT = function(t) {
var e = this;
return r(t.o).sort(function(t, e) {
return parseFloat(t.p) - parseFloat(e.p);
}).map(function(t) {
var o;
return {
line: e.formatLine(t.p),
lineTeam: e.getHandicapTeam(t.p),
home: null === (o = t.oh) || void 0 === o ? void 0 : o.de
};
});
};
e.prototype.parseHandicapGoalFT = function(t) {
var e = this;
return r(t.o).sort(function(t, e) {
return parseFloat(t.p) - parseFloat(e.p);
}).map(function(t) {
var o;
return {
line: e.formatLine(t.p),
lineTeam: t.p,
home: null === (o = t.oh) || void 0 === o ? void 0 : o.de
};
});
};
e.prototype.getHandicapTeam = function(t) {
var e = this.parseHandicapValue(t);
return e < 0 ? h.HandicapTeam.HOME : e > 0 ? h.HandicapTeam.AWAY : h.HandicapTeam.NONE;
};
e.prototype.parseHandicapValue = function(t) {
if ("number" == typeof t) return t;
if ("string" != typeof t) return 0;
var e = t.trim().toLowerCase();
if (!e || "pk" === e) return 0;
var o = parseFloat(e.replace(",", "."));
return Number.isFinite(o) ? o : 0;
};
e.prototype.formatLine = function(t) {
var e = Math.abs(this.parseHandicapValue(t)), o = e % 1;
if (Math.abs(o - .25) < 1e-6) return (n = Math.floor(e)) + "-" + (n + .5);
if (Math.abs(o - .75) < 1e-6) {
var n;
return (n = Math.floor(e) + .5) + "-" + (n + .5);
}
return e.toString();
};
e.prototype.sortOdds = function(t) {
return t.sort(function(t, e) {
return parseFloat(t.odds) - parseFloat(e.odds);
});
};
e.prototype.transformData = function(t) {
var e = this, o = {
keochap: [],
taixiu: [],
onextwox: {
home: "",
draw: "",
away: ""
},
keochaph1: [],
taixiuh1: [],
onextwoxh1: {
home: "",
draw: "",
away: ""
}
};
t.forEach(function(t) {
switch (t.mi) {
case h.MarketMi.FT_1x2:
o.onextwox = e.parse1X2(t);
break;

case h.MarketMi.HT_1x2:
o.onextwoxh1 = e.parse1X2(t);
break;

case h.MarketMi.FT_OU:
o.taixiu = e.parseOverUnder(t);
break;

case h.MarketMi.HT_OU:
o.taixiuh1 = e.parseOverUnder(t);
break;

case h.MarketMi.FT_HANDICAP:
o.keochap = e.parseHandicap(t);
break;

case h.MarketMi.HT_HANDICAP:
o.keochaph1 = e.parseHandicap(t);
}
});
return o;
};
e.prototype.transformDataH2 = function(t) {
var e = this, o = {
onextwoxh2: {},
taixiuh2: [],
keochaph2: []
};
t.forEach(function(t) {
switch (t.mi) {
case h.MarketMi.HT2_1x2:
o.onextwoxh2 = e.parse1X2(t);
break;

case h.MarketMi.HT2_OU:
o.taixiuh2 = e.parseOverUnderH2(t);
break;

case h.MarketMi.HT2_HANDICAP:
o.keochaph2 = e.parseHandicapH2(t);
}
});
return o;
};
e.prototype.transformDataTBT = function(t) {
var e = this, o = {
toantran: [],
hiep1: []
};
t.forEach(function(t) {
switch (t.mi) {
case h.MarketMi.FT_GOLD:
o.toantran = e.parseHandicapGoalFT(t);
break;

case h.MarketMi.HF_GOLD_H1:
o.hiep1 = e.parseHandicapGoalFT(t);
}
});
return o;
};
e.prototype.transformChanLe = function(t) {
var e = {
oddFT: null,
evenFT: null,
oddH1: null,
evenH1: null
};
t.forEach(function(t) {
var o = t.o[0];
if (o) {
if (t.mi === h.MarketMi.FT_CHANLE) {
e.oddFT = Number(o.oh.ma);
e.evenFT = Number(o.oa.ma);
}
if (t.mi === h.MarketMi.FT_CHANLE_H1) {
e.oddH1 = Number(o.oh.ma);
e.evenH1 = Number(o.oa.ma);
}
}
});
return e;
};
e.prototype.transformChanLeNhaKhach = function(t) {
var e = {
oddNha: null,
evenNha: null,
oddKhach: null,
evenKhach: null
};
t.forEach(function(t) {
var o = t.o[0];
if (o) {
if (t.mi === h.MarketMi.NHA) {
e.oddNha = Number(o.oh.de);
e.evenNha = Number(o.oa.de);
}
if (t.mi === h.MarketMi.KHACH) {
e.oddKhach = Number(o.oh.de);
e.evenKhach = Number(o.oa.de);
}
}
});
return e;
};
e.prototype.transformChanLeH2 = function(t) {
var e = {
oddH2: null,
evenH2: null
};
t.forEach(function(t) {
var o = t.o[0];
if (o && t.mi === h.MarketMi.FT_CHANLE_H2) {
e.oddH2 = Number(o.oh.de);
e.evenH2 = Number(o.oa.de);
}
});
return e;
};
e.prototype.transformHoanTien = function(t) {
var e = {
nha: null,
khach: null,
nhaH1: null,
khachH1: null
};
t.forEach(function(t) {
var o = t.o[0];
if (o) {
if (t.mi === h.MarketMi.HOANTIEN) {
e.nha = Number(o.oh.de);
e.khach = Number(o.oa.de);
}
if (t.mi === h.MarketMi.HOANTIEN_H1) {
e.nhaH1 = Number(o.oh.de);
e.khachH1 = Number(o.oa.de);
}
}
});
return e;
};
e.prototype.transformCoHoiKep = function(t) {
var e = {
nhaHoa: null,
khachHoa: null,
nhaKhach: null,
nhaHoaH1: null,
khachHoaH1: null,
nhaKhachH1: null
};
t.forEach(function(t) {
var o = t.o[0];
if (o) {
if (t.mi === h.MarketMi.COHOIKEP) {
e.nhaHoa = Number(o.oh.de);
e.khachHoa = Number(o.oa.de);
e.nhaKhach = Number(o.od.de);
}
if (t.mi === h.MarketMi.COHOIKEPH_H1) {
e.nhaHoaH1 = Number(o.oh.de);
e.khachHoaH1 = Number(o.oa.de);
e.nhaKhachH1 = Number(o.od.de);
}
}
});
return e;
};
e.prototype.transformDoiNhaTx = function(t) {
var e = {
tai: null,
xiu: null
};
t.forEach(function(t) {
var o = t.o[0];
if (o && t.mi === h.MarketMi.DOINHA_TX) {
e.tai = Number(o.oh.de);
e.xiu = Number(o.oa.de);
}
});
return e;
};
e.prototype.transformCorrectScore = function(t) {
var e = {
ft: {
home: [],
draw: [],
away: []
},
ht: {
home: [],
draw: [],
away: []
}
};
t.forEach(function(t) {
10 !== t.mi && 11 !== t.mi || t.o.forEach(function(o) {
var n, a = null === (n = o.oh) || void 0 === n ? void 0 : n.de;
if (a) {
var i = o.p.split(":").map(Number), r = i[0], c = i[1], l = {
score: o.p,
odds: Number(a).toFixed(2)
}, s = 10 === t.mi ? e.ft : e.ht;
r > c ? s.home.push(l) : r === c ? s.draw.push(l) : s.away.push(l);
}
});
});
return {
ft: {
home: this.sortOdds(r(e.ft.home)),
draw: this.sortOdds(r(e.ft.draw)),
away: this.sortOdds(r(e.ft.away))
},
ht: {
home: this.sortOdds(r(e.ht.home)),
draw: this.sortOdds(r(e.ht.draw)),
away: this.sortOdds(r(e.ht.away))
}
};
};
i([ b(cc.Sprite) ], e.prototype, "logoTeamH", void 0);
i([ b(cc.Sprite) ], e.prototype, "logoTeamA", void 0);
i([ b(cc.Label) ], e.prototype, "time", void 0);
i([ b(cc.Label) ], e.prototype, "labelGiai", void 0);
i([ b(cc.Label) ], e.prototype, "labelTeamH", void 0);
i([ b(cc.Label) ], e.prototype, "labelTeamA", void 0);
i([ b(g.default) ], e.prototype, "tran", void 0);
i([ b(m.default) ], e.prototype, "tyso", void 0);
i([ b(f.default) ], e.prototype, "h2", void 0);
i([ b(c.default) ], e.prototype, "chanLe", void 0);
i([ b(l.default) ], e.prototype, "chanLeH2", void 0);
i([ b(s.default) ], e.prototype, "chanLeNhaKhach", void 0);
i([ b(T.default) ], e.prototype, "hoanTien", void 0);
i([ b(d.default) ], e.prototype, "coHoiKep", void 0);
i([ b(u.default) ], e.prototype, "doiNhaTx", void 0);
i([ b(p.default) ], e.prototype, "doiKhachTx", void 0);
i([ b(v.default) ], e.prototype, "tongBanThang", void 0);
i([ b(cc.Node) ], e.prototype, "TranDauToggleNode", void 0);
i([ b(cc.Node) ], e.prototype, "IconToggleNode", void 0);
i([ b ], e.prototype, "toggleAnimDuration", void 0);
i([ b ], e.prototype, "toggleSlideOffsetY", void 0);
return i([ _ ], e);
}(cc.Component);
o.default = H;
cc._RF.pop();
}, {
"./ChanLe": "ChanLe",
"./ChanLeH2": "ChanLeH2",
"./ChanLeNhaKhach": "ChanLeNhaKhach",
"./CoHoiKep": "CoHoiKep",
"./DoiKhachTx": "DoiKhachTx",
"./DoiNhaTx": "DoiNhaTx",
"./GameEnum": "GameEnum",
"./H2": "H2",
"./Helper": "Helper",
"./HoanTien": "HoanTien",
"./TongBanThang": "TongBanThang",
"./Tran": "Tran",
"./Tyso": "Tyso"
} ],
CoHoiKep: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "b8123f/tm9My6CLJGtnTuah", "CoHoiKep");
var n, a = this && this.__extends || (n = function(t, e) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
n(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), i = this && this.__decorate || function(t, e, o, n) {
var a, i = arguments.length, r = i < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(t, e, o, n); else for (var c = t.length - 1; c >= 0; c--) (a = t[c]) && (r = (i < 3 ? a(r) : i > 3 ? a(e, o, r) : a(e, o)) || r);
return i > 3 && r && Object.defineProperty(e, o, r), r;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var r = t("./GameEnum"), c = t("./Helper"), l = t("./Odd"), s = cc._decorator, d = s.ccclass, p = s.property, u = function(t) {
a(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.nhaHoa = null;
e.khachHoa = null;
e.nhaKhach = null;
e.nhaHoaH1 = null;
e.khachHoaH1 = null;
e.nhaKhachH1 = null;
e.oddPrefab = null;
e.coHoiKepNode = null;
return e;
}
e.prototype.renderData = function(t, e) {
var o = this;
this.createOddData(t, this.nhaHoa, e.nhaHoa, r.OddType.COHOIKEP, r.HandicapTeam.HOME);
this.createOddData(t, this.khachHoa, e.khachHoa, r.OddType.COHOIKEP, r.HandicapTeam.AWAY);
this.createOddData(t, this.nhaKhach, e.nhaKhach, r.OddType.COHOIKEP, r.HandicapTeam.NONE);
this.createOddData(t, this.nhaHoaH1, e.nhaHoaH1, r.OddType.COHOIKEPH_H1, r.HandicapTeam.HOME);
this.createOddData(t, this.khachHoaH1, e.khachHoaH1, r.OddType.COHOIKEPH_H1, r.HandicapTeam.AWAY);
this.createOddData(t, this.nhaKhachH1, e.nhaKhachH1, r.OddType.COHOIKEPH_H1, r.HandicapTeam.NONE);
this.scheduleOnce(function() {
o.coHoiKepNode.height = c.default.getMaxHeight([ o.nhaHoa, o.khachHoa, o.nhaKhach, o.nhaHoaH1, o.khachHoaH1, o.nhaKhachH1 ]);
}, 0);
};
e.prototype.addOdd = function(t, e) {
var o = c.default.instantiateNode(t, this.oddPrefab);
o.getComponent(l.default).setData(e);
o.getChildByName("rOdd").setPosition(cc.v2(0, 2));
};
e.prototype.createOddData = function(t, e, o, n, a) {
e.removeAllChildren();
o && this.addOdd(e, {
teamH: t.hn,
teamA: t.an,
time: t.et,
betTitle: c.default.getBetTitle(n),
bet: this.getBetType(a),
p: "",
rate: o
});
};
e.prototype.getBetType = function(t) {
return t === r.HandicapTeam.HOME ? "Nhà hoặc Hòa" : t === r.HandicapTeam.AWAY ? "Khách hoặc Hòa" : t === r.HandicapTeam.NONE ? "Nhà Hoặc Khách" : "";
};
i([ p(cc.Node) ], e.prototype, "nhaHoa", void 0);
i([ p(cc.Node) ], e.prototype, "khachHoa", void 0);
i([ p(cc.Node) ], e.prototype, "nhaKhach", void 0);
i([ p(cc.Node) ], e.prototype, "nhaHoaH1", void 0);
i([ p(cc.Node) ], e.prototype, "khachHoaH1", void 0);
i([ p(cc.Node) ], e.prototype, "nhaKhachH1", void 0);
i([ p(cc.Prefab) ], e.prototype, "oddPrefab", void 0);
i([ p(cc.Node) ], e.prototype, "coHoiKepNode", void 0);
return i([ d ], e);
}(cc.Component);
o.default = u;
cc._RF.pop();
}, {
"./GameEnum": "GameEnum",
"./Helper": "Helper",
"./Odd": "Odd"
} ],
DoiKhachTx: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "ec92cUCyN5B8rOmPKdU25YU", "DoiKhachTx");
var n, a = this && this.__extends || (n = function(t, e) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
n(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), i = this && this.__decorate || function(t, e, o, n) {
var a, i = arguments.length, r = i < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(t, e, o, n); else for (var c = t.length - 1; c >= 0; c--) (a = t[c]) && (r = (i < 3 ? a(r) : i > 3 ? a(e, o, r) : a(e, o)) || r);
return i > 3 && r && Object.defineProperty(e, o, r), r;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var r = t("./GameEnum"), c = t("./Helper"), l = t("./Odd"), s = cc._decorator, d = s.ccclass, p = s.property, u = function(t) {
a(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.tai = null;
e.xiu = null;
e.oddPrefab = null;
e.doiKhachTxNode = null;
return e;
}
e.prototype.renderData = function(t, e) {
var o = this;
this.createOddData(t, this.tai, e.tai, r.OddType.DOIKHACH_TX, r.HandicapTeam.HOME);
this.createOddData(t, this.xiu, e.xiu, r.OddType.DOIKHACH_TX, r.HandicapTeam.AWAY);
this.scheduleOnce(function() {
o.doiKhachTxNode.height = c.default.getMaxHeight([ o.tai, o.xiu ]);
}, 0);
};
e.prototype.addOdd = function(t, e) {
var o = c.default.instantiateNode(t, this.oddPrefab);
o.getComponent(l.default).setData(e);
o.getChildByName("rOdd").setPosition(cc.v2(0, 2));
};
e.prototype.createOddData = function(t, e, o, n, a) {
e.removeAllChildren();
o && this.addOdd(e, {
teamH: t.hn,
teamA: t.an,
time: t.et,
betTitle: c.default.getBetTitle(n),
bet: c.default.getBetType(t, a, n),
p: "",
rate: o
});
};
i([ p(cc.Node) ], e.prototype, "tai", void 0);
i([ p(cc.Node) ], e.prototype, "xiu", void 0);
i([ p(cc.Prefab) ], e.prototype, "oddPrefab", void 0);
i([ p(cc.Node) ], e.prototype, "doiKhachTxNode", void 0);
return i([ d ], e);
}(cc.Component);
o.default = u;
cc._RF.pop();
}, {
"./GameEnum": "GameEnum",
"./Helper": "Helper",
"./Odd": "Odd"
} ],
DoiNhaTx: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "2861dSqi/BFvKKwM7J2S4eF", "DoiNhaTx");
var n, a = this && this.__extends || (n = function(t, e) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
n(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), i = this && this.__decorate || function(t, e, o, n) {
var a, i = arguments.length, r = i < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(t, e, o, n); else for (var c = t.length - 1; c >= 0; c--) (a = t[c]) && (r = (i < 3 ? a(r) : i > 3 ? a(e, o, r) : a(e, o)) || r);
return i > 3 && r && Object.defineProperty(e, o, r), r;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var r = t("./GameEnum"), c = t("./Helper"), l = t("./Odd"), s = cc._decorator, d = s.ccclass, p = s.property, u = function(t) {
a(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.tai = null;
e.xiu = null;
e.oddPrefab = null;
e.doiNhaTxNode = null;
return e;
}
e.prototype.renderData = function(t, e) {
var o = this;
this.createOddData(t, this.tai, e.tai, r.OddType.DOINHA_TX, r.HandicapTeam.HOME);
this.createOddData(t, this.xiu, e.xiu, r.OddType.DOINHA_TX, r.HandicapTeam.AWAY);
this.scheduleOnce(function() {
o.doiNhaTxNode.height = c.default.getMaxHeight([ o.tai, o.xiu ]);
}, 0);
};
e.prototype.addOdd = function(t, e) {
var o = c.default.instantiateNode(t, this.oddPrefab);
o.getComponent(l.default).setData(e);
o.getChildByName("rOdd").setPosition(cc.v2(0, 2));
};
e.prototype.createOddData = function(t, e, o, n, a) {
e.removeAllChildren();
o && this.addOdd(e, {
teamH: t.hn,
teamA: t.an,
time: t.et,
betTitle: c.default.getBetTitle(n),
bet: c.default.getBetType(t, a, n),
p: "",
rate: o
});
};
i([ p(cc.Node) ], e.prototype, "tai", void 0);
i([ p(cc.Node) ], e.prototype, "xiu", void 0);
i([ p(cc.Prefab) ], e.prototype, "oddPrefab", void 0);
i([ p(cc.Node) ], e.prototype, "doiNhaTxNode", void 0);
return i([ d ], e);
}(cc.Component);
o.default = u;
cc._RF.pop();
}, {
"./GameEnum": "GameEnum",
"./Helper": "Helper",
"./Odd": "Odd"
} ],
GameEnum: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "b23b9RiRyJBN4egPThkV9Oq", "GameEnum");
Object.defineProperty(o, "__esModule", {
value: !0
});
o.MarketMi = o.HandicapTeam = o.OddType = void 0;
(function(t) {
t[t.KEOCHAP = 1] = "KEOCHAP";
t[t.TAIXIU = 2] = "TAIXIU";
t[t.ONEXTWOX = 3] = "ONEXTWOX";
t[t.KEOCHAPH1 = 4] = "KEOCHAPH1";
t[t.TAIXIUH1 = 5] = "TAIXIUH1";
t[t.ONEXTWOXH1 = 6] = "ONEXTWOXH1";
t[t.TYSO = 7] = "TYSO";
t[t.KEOCHAPH2 = 8] = "KEOCHAPH2";
t[t.TAIXIUH2 = 9] = "TAIXIUH2";
t[t.ONEXTWOXH2 = 10] = "ONEXTWOXH2";
t[t.TONGBANTHANG = 11] = "TONGBANTHANG";
t[t.TONGBANTHANGH1 = 12] = "TONGBANTHANGH1";
t[t.CHANLE = 13] = "CHANLE";
t[t.CHANLEH1 = 14] = "CHANLEH1";
t[t.CHANLEH2 = 15] = "CHANLEH2";
t[t.DOINHA = 16] = "DOINHA";
t[t.DOIKHACH = 17] = "DOIKHACH";
t[t.HOANTIEN = 18] = "HOANTIEN";
t[t.HOANTIEN_H1 = 19] = "HOANTIEN_H1";
t[t.COHOIKEP = 20] = "COHOIKEP";
t[t.COHOIKEPH_H1 = 21] = "COHOIKEPH_H1";
t[t.DOINHA_TX = 22] = "DOINHA_TX";
t[t.DOIKHACH_TX = 23] = "DOIKHACH_TX";
})(o.OddType || (o.OddType = {}));
(function(t) {
t.NONE = "";
t.HOME = "home";
t.AWAY = "away";
})(o.HandicapTeam || (o.HandicapTeam = {}));
(function(t) {
t[t.FT_1x2 = 1] = "FT_1x2";
t[t.HT_1x2 = 2] = "HT_1x2";
t[t.FT_OU = 3] = "FT_OU";
t[t.HT_OU = 4] = "HT_OU";
t[t.FT_HANDICAP = 5] = "FT_HANDICAP";
t[t.HT_HANDICAP = 6] = "HT_HANDICAP";
t[t.FT_CHANLE = 8] = "FT_CHANLE";
t[t.FT_CHANLE_H1 = 9] = "FT_CHANLE_H1";
t[t.FT_CHANLE_H2 = 86] = "FT_CHANLE_H2";
t[t.HT2_1x2 = 89] = "HT2_1x2";
t[t.HT2_HANDICAP = 85] = "HT2_HANDICAP";
t[t.HT2_OU = 80] = "HT2_OU";
t[t.FT_SCORE = 10] = "FT_SCORE";
t[t.HT_SCORE = 11] = "HT_SCORE";
t[t.FT_GOLD = 14] = "FT_GOLD";
t[t.HF_GOLD_H1 = 15] = "HF_GOLD_H1";
t[t.NHA = 76] = "NHA";
t[t.KHACH = 77] = "KHACH";
t[t.HOANTIEN = 16] = "HOANTIEN";
t[t.HOANTIEN_H1 = 75] = "HOANTIEN_H1";
t[t.COHOIKEP = 12] = "COHOIKEP";
t[t.COHOIKEPH_H1 = 13] = "COHOIKEPH_H1";
t[t.DOINHA_TX = 101] = "DOINHA_TX";
t[t.DOIKHACH_TX = 102] = "DOIKHACH_TX";
})(o.MarketMi || (o.MarketMi = {}));
cc._RF.pop();
}, {} ],
GiaiDauDB: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "48012+rjzhAyZAC9JMtnbUm", "GiaiDauDB");
var n, a = this && this.__extends || (n = function(t, e) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
n(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), i = this && this.__decorate || function(t, e, o, n) {
var a, i = arguments.length, r = i < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(t, e, o, n); else for (var c = t.length - 1; c >= 0; c--) (a = t[c]) && (r = (i < 3 ? a(r) : i > 3 ? a(e, o, r) : a(e, o)) || r);
return i > 3 && r && Object.defineProperty(e, o, r), r;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var r = t("./Helper"), c = t("./PoolNode"), l = t("./TranDauDB"), s = cc._decorator, d = s.ccclass, p = s.property, u = function(t) {
a(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.GiaiDauLabel = null;
e.TimeLabel = null;
e.GiaiDauSprite = null;
e.TranDauDB = null;
e.TranDauParent = null;
e.TieuDe = null;
e.TranDauToggleNode = null;
e.toggleAnimDuration = .4;
e.TranDauToggle = !0;
return e;
}
e.prototype.start = function() {};
e.prototype.setData = function(t) {
this.reset();
var e = t[2].match(/\[(.*?)\]\s*(.*)/), o = "", n = "";
if (e && e.length > 2) {
o = e[1];
n = e[2];
}
this.TimeLabel.string = o;
var a = t[2] || [];
if (a && 0 !== a.length) {
this.GiaiDauLabel.string = n;
r.default.setSpriteFromUrl(this.GiaiDauSprite, t[6]);
for (var i = 0, s = t[5]; i < s.length; i++) {
var d = s[i], p = c.default.get("TheThao.TranDauDB", this.TranDauDB);
p.parent = this.TranDauParent;
var u = t[5].indexOf(d);
p.getComponent(l.default).setData(d, u, n);
}
}
};
e.prototype.reset = function() {
if (this.TranDauParent) {
this.TranDauToggle = !0;
this.TranDauParent.stopAllActions();
this.TranDauParent.active = !0;
this.TieuDe.active = !0;
this.TranDauParent.opacity = 255;
this.TranDauParent.scaleX = 1;
this.TranDauParent.scaleY = 1;
if (this.TranDauToggleNode) {
this.TranDauToggleNode.stopAllActions();
this.TranDauToggleNode.scaleY = -1;
}
c.default.putChildren("TheThao.TranDauDB", this.TranDauParent);
}
};
e.prototype.setExpanded = function(t, e) {
void 0 === e && (e = !0);
this.TranDauToggle = t;
var o = this.TranDauParent;
if (o) {
o.stopAllActions();
var n = this.TranDauToggleNode;
n && n.stopAllActions();
if (e) this.playToggleTranDau(t); else {
n && (n.scaleY = t ? -1 : 1);
o.active = t;
this.TieuDe && (this.TieuDe.active = t);
o.opacity = t ? 255 : 0;
o.scaleX = 1;
o.scaleY = t ? 1 : 0;
}
}
};
e.prototype.onToggleTranDauClick = function() {
this.TranDauToggle = !this.TranDauToggle;
this.playToggleTranDau(this.TranDauToggle);
};
e.prototype.playToggleTranDau = function(t) {
var e = this, o = this.TranDauParent;
if (o) {
o.stopAllActions();
var n = Math.max(0, this.toggleAnimDuration || 0), a = this.TranDauToggleNode;
if (a) {
a.stopAllActions();
var i = t ? -1 : 1;
a.runAction(cc.scaleTo(n, a.scaleX, i).easing(cc.easeBackOut()));
}
if (t) {
o.active = !0;
this.TieuDe.active = !0;
o.opacity = 0;
o.scaleX = 1;
o.scaleY = 0;
var r = cc.fadeTo(n, 255).easing(cc.easeCubicActionOut()), c = cc.scaleTo(n, 1, 1).easing(cc.easeBackOut());
o.runAction(cc.spawn(r, c));
} else {
var l = cc.fadeTo(n, 0).easing(cc.easeCubicActionIn()), s = cc.scaleTo(n, 1, 0).easing(cc.easeBackIn());
o.runAction(cc.sequence(cc.spawn(l, s), cc.callFunc(function() {
o.active = !1;
e.TieuDe.active = !1;
})));
}
}
};
i([ p(cc.Label) ], e.prototype, "GiaiDauLabel", void 0);
i([ p(cc.Label) ], e.prototype, "TimeLabel", void 0);
i([ p(cc.Sprite) ], e.prototype, "GiaiDauSprite", void 0);
i([ p(cc.Prefab) ], e.prototype, "TranDauDB", void 0);
i([ p(cc.Node) ], e.prototype, "TranDauParent", void 0);
i([ p(cc.Node) ], e.prototype, "TieuDe", void 0);
i([ p(cc.Node) ], e.prototype, "TranDauToggleNode", void 0);
i([ p ], e.prototype, "toggleAnimDuration", void 0);
return i([ d ], e);
}(cc.Component);
o.default = u;
cc._RF.pop();
}, {
"./Helper": "Helper",
"./PoolNode": "PoolNode",
"./TranDauDB": "TranDauDB"
} ],
GiaiDau: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "aa998Wd8+ZHBLwVEJJRfmZb", "GiaiDau");
var n, a = this && this.__extends || (n = function(t, e) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
n(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), i = this && this.__decorate || function(t, e, o, n) {
var a, i = arguments.length, r = i < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(t, e, o, n); else for (var c = t.length - 1; c >= 0; c--) (a = t[c]) && (r = (i < 3 ? a(r) : i > 3 ? a(e, o, r) : a(e, o)) || r);
return i > 3 && r && Object.defineProperty(e, o, r), r;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var r = t("./Helper"), c = t("./PoolNode"), l = t("./TranDau"), s = cc._decorator, d = s.ccclass, p = s.property, u = function(t) {
a(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.GiaiDauLabel = null;
e.GiaiDauSprite = null;
e.TranDau = null;
e.TranDauParent = null;
e.TranDauToggleNode = null;
e.toggleAnimDuration = .4;
e.TranDauToggle = !0;
return e;
}
e.prototype.start = function() {};
e.prototype.setData = function(t) {
this.reset();
this.GiaiDauLabel.string = t.ln;
r.default.setSpriteFromUrl(this.GiaiDauSprite, t.lg);
for (var e = 0, o = t.e; e < o.length; e++) {
var n = o[e], a = c.default.get("TheThao.TranDau", this.TranDau);
a.parent = this.TranDauParent;
t.e.indexOf(n);
a.getComponent(l.default).setData(n, t.ln);
}
};
e.prototype.reset = function() {
if (this.TranDauParent) {
this.TranDauToggle = !0;
this.TranDauParent.stopAllActions();
this.TranDauParent.active = !0;
this.TranDauParent.opacity = 255;
this.TranDauParent.scaleX = 1;
this.TranDauParent.scaleY = 1;
if (this.TranDauToggleNode) {
this.TranDauToggleNode.stopAllActions();
this.TranDauToggleNode.scaleY = -1;
}
c.default.putChildren("TheThao.TranDau", this.TranDauParent);
}
};
e.prototype.setExpanded = function(t, e) {
void 0 === e && (e = !0);
this.TranDauToggle = t;
var o = this.TranDauParent;
if (o) {
o.stopAllActions();
var n = this.TranDauToggleNode;
n && n.stopAllActions();
if (e) this.playToggleTranDau(t); else {
n && (n.scaleY = t ? -1 : 1);
o.active = t;
o.opacity = t ? 255 : 0;
o.scaleX = 1;
o.scaleY = t ? 1 : 0;
}
}
};
e.prototype.onToggleTranDauClick = function() {
this.TranDauToggle = !this.TranDauToggle;
this.playToggleTranDau(this.TranDauToggle);
};
e.prototype.playToggleTranDau = function(t) {
var e = this.TranDauParent;
if (e) {
e.stopAllActions();
var o = Math.max(0, this.toggleAnimDuration || 0), n = this.TranDauToggleNode;
if (n) {
n.stopAllActions();
var a = t ? -1 : 1;
n.runAction(cc.scaleTo(o, n.scaleX, a).easing(cc.easeBackOut()));
}
if (t) {
e.active = !0;
e.opacity = 0;
e.scaleX = 1;
e.scaleY = 0;
var i = cc.fadeTo(o, 255).easing(cc.easeCubicActionOut()), r = cc.scaleTo(o, 1, 1).easing(cc.easeBackOut());
e.runAction(cc.spawn(i, r));
} else {
var c = cc.fadeTo(o, 0).easing(cc.easeCubicActionIn()), l = cc.scaleTo(o, 1, 0).easing(cc.easeBackIn());
e.runAction(cc.sequence(cc.spawn(c, l), cc.callFunc(function() {
e.active = !1;
})));
}
}
};
i([ p(cc.Label) ], e.prototype, "GiaiDauLabel", void 0);
i([ p(cc.Sprite) ], e.prototype, "GiaiDauSprite", void 0);
i([ p(cc.Prefab) ], e.prototype, "TranDau", void 0);
i([ p(cc.Node) ], e.prototype, "TranDauParent", void 0);
i([ p(cc.Node) ], e.prototype, "TranDauToggleNode", void 0);
i([ p ], e.prototype, "toggleAnimDuration", void 0);
return i([ d ], e);
}(cc.Component);
o.default = u;
cc._RF.pop();
}, {
"./Helper": "Helper",
"./PoolNode": "PoolNode",
"./TranDau": "TranDau"
} ],
H2: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "836f8itzZBGyoLKsfYBmf9n", "H2");
var n, a = this && this.__extends || (n = function(t, e) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
n(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), i = this && this.__decorate || function(t, e, o, n) {
var a, i = arguments.length, r = i < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(t, e, o, n); else for (var c = t.length - 1; c >= 0; c--) (a = t[c]) && (r = (i < 3 ? a(r) : i > 3 ? a(e, o, r) : a(e, o)) || r);
return i > 3 && r && Object.defineProperty(e, o, r), r;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var r = t("./GameEnum"), c = t("./Helper"), l = t("./Odd"), s = cc._decorator, d = s.ccclass, p = s.property, u = function(t) {
a(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.keochap = null;
e.taixiu = null;
e.motx2 = null;
e.oddPrefab = null;
e.h2Node = null;
return e;
}
e.prototype.renderData = function(t, e) {
var o = this;
this.renderHandicap(t, this.keochap, e.keochaph2, r.OddType.KEOCHAPH2);
this.renderOverUnder(t, this.taixiu, e.taixiuh2, r.OddType.TAIXIUH2);
this.render1X2(t, this.motx2, e.onextwoxh2, r.OddType.ONEXTWOXH2);
this.scheduleOnce(function() {
o.h2Node.height = c.default.getMaxHeight([ o.keochap, o.taixiu, o.motx2 ]);
}, 0);
};
e.prototype.createOddData = function(t, e, o, n, a, i) {
return {
teamH: t.hn,
teamA: t.an,
time: t.et,
betTitle: c.default.getBetTitle(e),
bet: c.default.getOddBetType(o, n, e),
p: a,
rate: i
};
};
e.prototype.addOdd = function(t, e) {
c.default.instantiateNode(t, this.oddPrefab).getComponent(l.default).setData(e);
};
e.prototype.renderHomeAwayList = function(t, e, o, n, a, i, c, l) {
var s = this;
e.removeAllChildren();
o && 0 !== o.length && o.forEach(function(o) {
s.addOdd(e, s.createOddData(t, n, t.hn, r.HandicapTeam.HOME, a(o), c(o)));
s.addOdd(e, s.createOddData(t, n, t.an, r.HandicapTeam.AWAY, i(o), l(o)));
});
};
e.prototype.renderHandicap = function(t, e, o, n) {
this.renderHomeAwayList(t, e, o, n, function(t) {
return t.lineTeam === r.HandicapTeam.HOME ? t.line : "";
}, function(t) {
return t.lineTeam === r.HandicapTeam.AWAY ? t.line : "";
}, function(t) {
return t.home;
}, function(t) {
return t.away;
});
};
e.prototype.renderOverUnder = function(t, e, o, n) {
this.renderHomeAwayList(t, e, o, n, function(t) {
return t.line;
}, function() {
return "U";
}, function(t) {
return t.over;
}, function(t) {
return t.under;
});
};
e.prototype.render1X2 = function(t, e, o, n) {
e.removeAllChildren();
if (0 !== Object.keys(o).length) {
"" != o.home && this.addOdd(e, this.createOddData(t, n, t.hn, r.HandicapTeam.HOME, "1", o.home));
"" != o.away && this.addOdd(e, this.createOddData(t, n, t.an, r.HandicapTeam.AWAY, "2", o.away));
"" != o.draw && this.addOdd(e, this.createOddData(t, n, t.hn, r.HandicapTeam.NONE, "X", o.draw));
}
};
i([ p(cc.Node) ], e.prototype, "keochap", void 0);
i([ p(cc.Node) ], e.prototype, "taixiu", void 0);
i([ p(cc.Node) ], e.prototype, "motx2", void 0);
i([ p(cc.Prefab) ], e.prototype, "oddPrefab", void 0);
i([ p(cc.Node) ], e.prototype, "h2Node", void 0);
return i([ d ], e);
}(cc.Component);
o.default = u;
cc._RF.pop();
}, {
"./GameEnum": "GameEnum",
"./Helper": "Helper",
"./Odd": "Odd"
} ],
Helper: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "9e1bbm3yLJEqo6bmKJtyk0a", "Helper");
var n = this && this.__awaiter || function(t, e, o, n) {
return new (o || (o = Promise))(function(a, i) {
function r(t) {
try {
l(n.next(t));
} catch (t) {
i(t);
}
}
function c(t) {
try {
l(n.throw(t));
} catch (t) {
i(t);
}
}
function l(t) {
t.done ? a(t.value) : (e = t.value, e instanceof o ? e : new o(function(t) {
t(e);
})).then(r, c);
var e;
}
l((n = n.apply(t, e || [])).next());
});
}, a = this && this.__generator || function(t, e) {
var o, n, a, i, r = {
label: 0,
sent: function() {
if (1 & a[0]) throw a[1];
return a[1];
},
trys: [],
ops: []
};
return i = {
next: c(0),
throw: c(1),
return: c(2)
}, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
return this;
}), i;
function c(t) {
return function(e) {
return l([ t, e ]);
};
}
function l(i) {
if (o) throw new TypeError("Generator is already executing.");
for (;r; ) try {
if (o = 1, n && (a = 2 & i[0] ? n.return : i[0] ? n.throw || ((a = n.return) && a.call(n), 
0) : n.next) && !(a = a.call(n, i[1])).done) return a;
(n = 0, a) && (i = [ 2 & i[0], a.value ]);
switch (i[0]) {
case 0:
case 1:
a = i;
break;

case 4:
r.label++;
return {
value: i[1],
done: !1
};

case 5:
r.label++;
n = i[1];
i = [ 0 ];
continue;

case 7:
i = r.ops.pop();
r.trys.pop();
continue;

default:
if (!(a = r.trys, a = a.length > 0 && a[a.length - 1]) && (6 === i[0] || 2 === i[0])) {
r = 0;
continue;
}
if (3 === i[0] && (!a || i[1] > a[0] && i[1] < a[3])) {
r.label = i[1];
break;
}
if (6 === i[0] && r.label < a[1]) {
r.label = a[1];
a = i;
break;
}
if (a && r.label < a[2]) {
r.label = a[2];
r.ops.push(i);
break;
}
a[2] && r.ops.pop();
r.trys.pop();
continue;
}
i = e.call(t, r);
} catch (t) {
i = [ 6, t ];
n = 0;
} finally {
o = a = 0;
}
if (5 & i[0]) throw i[1];
return {
value: i[0] ? i[1] : void 0,
done: !0
};
}
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var i = t("./GameEnum");
function r(t) {
if (!t) return "png";
var e = t.split("?")[0].split("#")[0].toLowerCase();
return e.endsWith(".jpg") ? "jpg" : e.endsWith(".jpeg") ? "jpeg" : e.endsWith(".webp") ? "webp" : "png";
}
var c = function() {
function t() {}
t.runQueue = function() {
for (;this._loading < this.MAX_CONCURRENT && this._queue.length > 0; ) {
var t = this._queue.shift();
this._loading++;
t();
}
};
t.enqueue = function(t) {
this._queue.push(t);
this.runQueue();
};
t.loadRemote = function(t, e) {
var o = this;
if (this._cache.has(t)) return Promise.resolve(this._cache.get(t));
if (this._loadingMap.has(t)) return this._loadingMap.get(t);
var n = new Promise(function(n, a) {
var i, c, l = null !== (i = null == e ? void 0 : e.retry) && void 0 !== i ? i : o.DEFAULT_RETRY, s = null !== (c = null == e ? void 0 : e.timeoutMs) && void 0 !== c ? c : o.DEFAULT_TIMEOUT, d = function(i) {
var c = !1, p = setTimeout(function() {
if (!c) {
c = !0;
i < l ? d(i + 1) : a(new Error("Timeout"));
}
}, s);
cc.assetManager.loadRemote(t, {
ext: "." + ((null == e ? void 0 : e.type) || r(t))
}, function(e, r) {
if (!c) {
clearTimeout(p);
c = !0;
if (!e && r) {
var s = new cc.SpriteFrame(r);
o._cache.set(t, s);
n(s);
} else i < l ? d(i + 1) : a(e || new Error("Texture null"));
}
});
};
d(0);
});
this._loadingMap.set(t, n);
n.then(function() {
return o._loadingMap.delete(t);
}, function() {
return o._loadingMap.delete(t);
});
return n;
};
t.loadSpriteFrameFromUrl = function(t, e) {
var o = this;
return t ? new Promise(function(n, a) {
o.enqueue(function() {
var i = o.loadRemote(t, e);
i.then(n, a);
i.then(function() {
o._loading--;
o.runQueue();
}, function() {
o._loading--;
o.runQueue();
});
});
}) : Promise.reject(new Error("Invalid URL"));
};
t.setSpriteFromUrl = function(t, e, o) {
return n(this, void 0, Promise, function() {
var n, i;
return a(this, function(a) {
switch (a.label) {
case 0:
if (!e || !cc.isValid(t)) return [ 2, null ];
a.label = 1;

case 1:
a.trys.push([ 1, 3, , 4 ]);
return [ 4, this.loadSpriteFrameFromUrl(e, o) ];

case 2:
(n = a.sent()) && cc.isValid(t) && cc.isValid(t.node) && (t.spriteFrame = n);
return [ 2, n ];

case 3:
i = a.sent();
console.warn("Load sprite fail:", e, i);
return [ 2, null ];

case 4:
return [ 2 ];
}
});
});
};
t.clearImageCache = function(t) {
t ? this._cache.delete(t) : this._cache.clear();
};
t.formatDateTime = function(t) {
var e = new Date(t);
if (isNaN(e.getTime())) return "";
var o = e.getHours(), n = String(e.getMinutes()).padStart(2, "0"), a = o >= 12 ? "PM" : "AM";
o = o % 12 || 12;
return String(o).padStart(2, "0") + ":" + n + " " + a + " - " + String(e.getDate()).padStart(2, "0") + "/" + String(e.getMonth() + 1).padStart(2, "0");
};
t.getCurrentDayMonth = function() {
var t = new Date();
return {
day: String(t.getDate()).padStart(2, "0"),
month: [ "JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC" ][t.getMonth()]
};
};
t.formatDotNumber = function(t) {
return Math.round(t).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
};
t.formatRemoveDotNumber = function(t) {
return parseFloat(t.toString().replace(/\./g, ""));
};
t.truncate = function(t, e) {
return t.length > e ? t.slice(0, e) + "..." : t;
};
t.isValidNumber = function(t) {
return "" !== t.trim() && !Number.isNaN(Number(t));
};
t.handicapToUI = function(t) {
var e = this.parseHandicapValue(t);
if (e % 1 == 0 || e % 1 == .5) return e.toString();
var o = Math.floor(e);
return e % 1 == .25 ? o + "-" + (o + .5) : e % 1 == .75 ? o + .5 + "-" + (o + 1) : e.toString();
};
t.parseHandicapValue = function(t) {
if ("number" == typeof t) return t;
if ("string" != typeof t) return 0;
var e = t.trim().toLowerCase();
if (!e || "pk" === e) return 0;
var o = parseFloat(e.replace(",", "."));
return Number.isFinite(o) ? o : 0;
};
t.parseHandicap = function(t) {
var e, o, n = this.parseHandicapValue(null == t ? void 0 : t.p), a = (null === (e = t.oh) || void 0 === e ? void 0 : e.ma) || "", r = (null === (o = t.oa) || void 0 === o ? void 0 : o.ma) || "", c = this.handicapToUI(n), l = i.HandicapTeam.NONE, s = {};
if (n < 0) {
l = i.HandicapTeam.HOME;
s = {
home: {
label: "" + c,
odds: a
},
away: {
label: "" + c,
odds: r
}
};
} else if (n > 0) {
l = i.HandicapTeam.AWAY;
s = {
home: {
label: "" + c,
odds: a
},
away: {
label: "" + c,
odds: r
}
};
} else {
l = i.HandicapTeam.NONE;
s = {
home: {
label: "0",
odds: a
},
away: {
label: "0",
odds: r
}
};
}
return {
handicap: c,
handicapTeam: l,
display: s
};
};
t.getBetTitle = function(t) {
return t === i.OddType.KEOCHAP ? "Kèo chấp toàn trận" : t === i.OddType.KEOCHAPH1 ? "Kèo chấp hiệp 1" : t === i.OddType.TAIXIU ? "Tài/Xỉu toàn trận" : t === i.OddType.TAIXIUH1 ? "Tài/Xỉu hiệp 1" : t === i.OddType.ONEXTWOX ? "1X2 toàn trận" : t === i.OddType.ONEXTWOXH1 ? "1X2 hiệp 1" : t === i.OddType.TYSO ? "Tỷ só chính xác toàn trận" : t === i.OddType.KEOCHAPH2 ? "Kèo chấp hiệp 2" : t === i.OddType.TAIXIUH2 ? "Tài/Xỉu hiệp 2" : t === i.OddType.ONEXTWOXH2 ? "1X2 hiệp 2" : t === i.OddType.TONGBANTHANG ? "Tổng số bàn thắng toàn trận" : t === i.OddType.TONGBANTHANGH1 ? "Tổng số bàn thắng hiệp 1" : t === i.OddType.CHANLE ? "Chẵn/Lẻ toàn trận" : t === i.OddType.CHANLEH1 ? "Chẵn/Lẻ hiệp 1" : t === i.OddType.CHANLEH2 ? "Chẵn/Lẻ hiệp 2" : t === i.OddType.DOINHA ? "Đội nhà Chẵn/Lẻ" : t === i.OddType.DOIKHACH ? "Đội khách Chẵn/Lẻ" : t === i.OddType.HOANTIEN ? "Hòa được hoàn tiền toàn trận" : t === i.OddType.HOANTIEN_H1 ? " Hòa được hoàn tiền hiệp 1" : t === i.OddType.COHOIKEP ? "Có hội kép toàn trận" : t === i.OddType.COHOIKEPH_H1 ? "Có hội kép hiệp 1" : t === i.OddType.DOINHA_TX ? "Đội nhà Tài/Xỉu 1" : t === i.OddType.DOIKHACH_TX ? "Đội khách Tài/Xỉu 1" : "";
};
t.getBetType = function(t, e, o) {
var n = "";
o !== i.OddType.KEOCHAP && o !== i.OddType.KEOCHAPH1 || (n = e === i.HandicapTeam.HOME ? (null == t ? void 0 : t.hn) || "" : (null == t ? void 0 : t.an) || "");
o !== i.OddType.HOANTIEN && o !== i.OddType.HOANTIEN_H1 || (n = e === i.HandicapTeam.HOME ? (null == t ? void 0 : t.hn) || "" : (null == t ? void 0 : t.an) || "");
o !== i.OddType.TAIXIU && o !== i.OddType.TAIXIUH1 && o !== i.OddType.DOINHA_TX && o !== i.OddType.DOIKHACH_TX || (n = e === i.HandicapTeam.HOME ? "Tài" : "Xỉu");
return o === i.OddType.ONEXTWOX ? "FT" : o === i.OddType.ONEXTWOXH1 ? "HT" : n;
};
t.getOddBetType = function(t, e, o) {
var n = "";
o !== i.OddType.KEOCHAP && o !== i.OddType.KEOCHAPH1 && o !== i.OddType.KEOCHAPH2 || (n = t);
o !== i.OddType.TAIXIU && o !== i.OddType.TAIXIUH1 && o !== i.OddType.TAIXIUH2 || (n = e === i.HandicapTeam.HOME ? "Tài" : "Xỉu");
return o === i.OddType.ONEXTWOX ? "FT" : o === i.OddType.ONEXTWOXH1 || o === i.OddType.ONEXTWOXH2 ? "HT" : n;
};
t.instantiateNode = function(t, e) {
var o = cc.instantiate(e);
o.parent = t;
return o;
};
t.getMaxHeight = function(t) {
return Math.max.apply(Math, t.map(function(t) {
return t.height;
}));
};
t.hasEmptyValue = function(t) {
var e = function(t) {
if (null == t || "" === t) return !0;
if (Array.isArray(t)) return 0 === t.length || t.every(e);
if ("object" == typeof t) {
var o = Object.values(t);
return 0 === o.length || o.every(e);
}
return !1;
};
return e(t);
};
t.MAX_CONCURRENT = 4;
t.DEFAULT_TIMEOUT = 1e4;
t.DEFAULT_RETRY = 2;
t._loading = 0;
t._queue = [];
t._cache = new Map();
t._loadingMap = new Map();
return t;
}();
o.default = c;
cc._RF.pop();
}, {
"./GameEnum": "GameEnum"
} ],
HoanTien: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "c3cb2Nz0aZGSb5eQyHo9siH", "HoanTien");
var n, a = this && this.__extends || (n = function(t, e) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
n(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), i = this && this.__decorate || function(t, e, o, n) {
var a, i = arguments.length, r = i < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(t, e, o, n); else for (var c = t.length - 1; c >= 0; c--) (a = t[c]) && (r = (i < 3 ? a(r) : i > 3 ? a(e, o, r) : a(e, o)) || r);
return i > 3 && r && Object.defineProperty(e, o, r), r;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var r = t("./GameEnum"), c = t("./Helper"), l = t("./Odd"), s = cc._decorator, d = s.ccclass, p = s.property, u = function(t) {
a(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.doiNha = null;
e.doiKhach = null;
e.doiNhaH1 = null;
e.doiKhachH1 = null;
e.oddPrefab = null;
e.hoanTienNode = null;
return e;
}
e.prototype.renderData = function(t, e) {
var o = this;
this.createOddData(t, this.doiNha, e.nha, r.OddType.HOANTIEN, r.HandicapTeam.HOME);
this.createOddData(t, this.doiKhach, e.khach, r.OddType.HOANTIEN, r.HandicapTeam.AWAY);
this.createOddData(t, this.doiNhaH1, e.nhaH1, r.OddType.HOANTIEN_H1, r.HandicapTeam.HOME);
this.createOddData(t, this.doiKhachH1, e.khachH1, r.OddType.HOANTIEN_H1, r.HandicapTeam.AWAY);
this.scheduleOnce(function() {
o.hoanTienNode.height = c.default.getMaxHeight([ o.doiNha, o.doiNhaH1, o.doiKhach, o.doiKhachH1 ]);
}, 0);
};
e.prototype.addOdd = function(t, e) {
var o = c.default.instantiateNode(t, this.oddPrefab);
o.getComponent(l.default).setData(e);
o.getChildByName("rOdd").setPosition(cc.v2(0, 2));
};
e.prototype.createOddData = function(t, e, o, n, a) {
e.removeAllChildren();
o && this.addOdd(e, {
teamH: t.hn,
teamA: t.an,
time: t.et,
betTitle: c.default.getBetTitle(n),
bet: c.default.getBetType(t, a, n),
p: "",
rate: o
});
};
i([ p(cc.Node) ], e.prototype, "doiNha", void 0);
i([ p(cc.Node) ], e.prototype, "doiKhach", void 0);
i([ p(cc.Node) ], e.prototype, "doiNhaH1", void 0);
i([ p(cc.Node) ], e.prototype, "doiKhachH1", void 0);
i([ p(cc.Prefab) ], e.prototype, "oddPrefab", void 0);
i([ p(cc.Node) ], e.prototype, "hoanTienNode", void 0);
return i([ d ], e);
}(cc.Component);
o.default = u;
cc._RF.pop();
}, {
"./GameEnum": "GameEnum",
"./Helper": "Helper",
"./Odd": "Odd"
} ],
Keo: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "1eda0N8jIhIbJ4T/Eu8X82g", "Keo");
var n, a = this && this.__extends || (n = function(t, e) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
n(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), i = this && this.__decorate || function(t, e, o, n) {
var a, i = arguments.length, r = i < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(t, e, o, n); else for (var c = t.length - 1; c >= 0; c--) (a = t[c]) && (r = (i < 3 ? a(r) : i > 3 ? a(e, o, r) : a(e, o)) || r);
return i > 3 && r && Object.defineProperty(e, o, r), r;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var r = t("./TheThao"), c = cc._decorator, l = c.ccclass, s = c.property, d = function(t) {
a(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.keo = null;
e.rate = null;
e.odd = null;
return e;
}
e.prototype.setData = function(t) {
if (t) if ("" !== t.rate) {
this.odd = t;
parseFloat(t.rate) < 0 ? this.rate.node.color = cc.Color.RED : this.rate.node.color = cc.Color.BLACK;
this.keo.string = t.p;
this.rate.string = t.rate.toString();
this.node.active = !0;
} else this.node.active = !1; else this.node.active = !1;
};
e.prototype.onCLickBet = function() {
r.default.getInstance().showBetNode(this.odd);
};
i([ s(cc.Label) ], e.prototype, "keo", void 0);
i([ s(cc.Label) ], e.prototype, "rate", void 0);
return i([ l ], e);
}(cc.Component);
o.default = d;
cc._RF.pop();
}, {
"./TheThao": "TheThao"
} ],
NetworkClient: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "a568eV4IYdNw6GCvyt+y5xP", "NetworkClient");
var n = this && this.__assign || function() {
return (n = Object.assign || function(t) {
for (var e, o = 1, n = arguments.length; o < n; o++) {
e = arguments[o];
for (var a in e) Object.prototype.hasOwnProperty.call(e, a) && (t[a] = e[a]);
}
return t;
}).apply(this, arguments);
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.NetworkWebSocket = void 0;
function a() {
var t, e = null === (t = cc) || void 0 === t ? void 0 : t.loader;
return e && "function" == typeof e.getXMLHttpRequest ? e.getXMLHttpRequest() : new XMLHttpRequest();
}
function i(t) {
if (!t) return null;
try {
return JSON.parse(t);
} catch (t) {
return null;
}
}
var r = function() {
function t() {
this.ws = null;
this.onOpen = null;
this.onMessage = null;
this.onError = null;
this.onClose = null;
}
Object.defineProperty(t.prototype, "socket", {
get: function() {
return this.ws;
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(t.prototype, "readyState", {
get: function() {
return this.ws ? this.ws.readyState : WebSocket.CLOSED;
},
enumerable: !1,
configurable: !0
});
t.prototype.connect = function(t, e) {
var o = this;
this.ws && this.close();
var n = e ? new WebSocket(t, e) : new WebSocket(t);
this.ws = n;
n.onopen = function(t) {
return o.onOpen && o.onOpen(t);
};
n.onmessage = function(t) {
return o.onMessage && o.onMessage(t);
};
n.onerror = function(t) {
return o.onError && o.onError(t);
};
n.onclose = function(t) {
return o.onClose && o.onClose(t);
};
return n;
};
t.prototype.send = function(t) {
this.ws && this.ws.readyState === WebSocket.OPEN && this.ws.send(t);
};
t.prototype.close = function(t, e) {
if (this.ws) {
var o = this.ws;
this.ws = null;
o.close(t, e);
}
};
return t;
}();
o.NetworkWebSocket = r;
var c = function() {
function t() {}
Object.defineProperty(t, "instance", {
get: function() {
this._instance || (this._instance = new t());
return this._instance;
},
enumerable: !1,
configurable: !0
});
t.prototype.request = function(t) {
var e = (t.method || "GET").toUpperCase(), o = a();
return new Promise(function(n, a) {
var r, c, l, s, d;
o.onreadystatechange = function() {
if (4 === o.readyState) {
var e = o.status, r = o.responseText || "", c = e >= 200 && e < 400, l = r;
if (t.responseType && "text" !== t.responseType) l = o.response; else {
var s = i(r);
null !== s && (l = s);
}
var d = {
status: e,
ok: c,
response: l,
rawText: r,
xhr: o
};
c ? n(d) : a(d);
}
};
o.onerror = function() {
var t = o.status || 0, e = o.responseText || "";
a({
status: t,
ok: !1,
response: e,
rawText: e,
xhr: o
}, satisfies, HttpResult);
};
o.ontimeout = function() {
var t = o.status || 0, e = o.responseText || "";
a({
status: t,
ok: !1,
response: e,
rawText: e,
xhr: o
}, satisfies, HttpResult);
};
o.timeout = null !== (r = t.timeoutMs) && void 0 !== r ? r : 6e4;
"boolean" == typeof t.withCredentials && (o.withCredentials = t.withCredentials);
o.open(e, t.url, !0);
t.responseType && (o.responseType = t.responseType);
if (t.headers) for (var p = 0, u = Object.keys(t.headers); p < u.length; p++) {
var h = u[p];
o.setRequestHeader(h, t.headers[h]);
}
var f = t.body, y = (null === (c = t.headers) || void 0 === c ? void 0 : c["Content-Type"]) || (null === (l = t.headers) || void 0 === l ? void 0 : l["content-type"]) || "";
if (f && "object" == typeof f && !(f instanceof ArrayBuffer) && !(f instanceof Blob) && (y.includes("application/json") || "" === y)) {
(null === (s = t.headers) || void 0 === s ? void 0 : s["Content-Type"]) || (null === (d = t.headers) || void 0 === d ? void 0 : d["content-type"]) || o.setRequestHeader("Content-Type", "application/json; charset=UTF-8");
f = JSON.stringify(f);
}
o.send(f);
});
};
t.prototype.requestCb = function(t, e) {
var o, n, r, c, l, s = (t.method || "GET").toUpperCase(), d = a(), p = function(t, o) {
if (e) try {
e(t, o);
} catch (t) {}
};
d.onreadystatechange = function() {
if (4 === d.readyState) {
var e = d.status, o = d.responseText || "", n = e >= 200 && e < 400, a = o;
if (t.responseType && "text" !== t.responseType) a = d.response; else {
var r = i(o);
null !== r && (a = r);
}
var c = {
status: e,
ok: n,
response: a,
rawText: o,
xhr: d
};
n ? p(null, c) : p(c);
}
};
var u = function() {
var t = d.status || 0, e = d.responseText || "";
p({
status: t,
ok: !1,
response: e,
rawText: e,
xhr: d
});
};
d.onerror = u;
d.ontimeout = u;
d.timeout = null !== (o = t.timeoutMs) && void 0 !== o ? o : 6e4;
"boolean" == typeof t.withCredentials && (d.withCredentials = t.withCredentials);
d.open(s, t.url, !0);
t.responseType && (d.responseType = t.responseType);
if (t.headers) for (var h = 0, f = Object.keys(t.headers); h < f.length; h++) {
var y = f[h];
d.setRequestHeader(y, t.headers[y]);
}
var T = t.body, v = (null === (n = t.headers) || void 0 === n ? void 0 : n["Content-Type"]) || (null === (r = t.headers) || void 0 === r ? void 0 : r["content-type"]) || "";
if (T && "object" == typeof T && !(T instanceof ArrayBuffer) && !(T instanceof Blob) && (v.includes("application/json") || "" === v)) {
(null === (c = t.headers) || void 0 === c ? void 0 : c["Content-Type"]) || (null === (l = t.headers) || void 0 === l ? void 0 : l["content-type"]) || d.setRequestHeader("Content-Type", "application/json; charset=UTF-8");
T = JSON.stringify(T);
}
d.send(T);
return d;
};
t.prototype.get = function(t, e) {
return this.request(n(n({}, e || {}), {
url: t,
method: "GET"
}));
};
t.prototype.getCb = function(t, e, o) {
return this.requestCb(n(n({}, o || {}), {
url: t,
method: "GET"
}), e);
};
t.prototype.post = function(t, e, o) {
return this.request(n(n({}, o || {}), {
url: t,
method: "POST",
body: e
}));
};
t.prototype.postCb = function(t, e, o, a) {
return this.requestCb(n(n({}, a || {}), {
url: t,
method: "POST",
body: e
}), o);
};
t.prototype.createWebSocket = function() {
return new r();
};
t._instance = null;
return t;
}();
o.default = c;
cc._RF.pop();
}, {} ],
OddData: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "c6cddT7dfhLQZ1N3aRQVFgK", "OddData");
Object.defineProperty(o, "__esModule", {
value: !0
});
cc._RF.pop();
}, {} ],
Odd: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "1bdbaUTzPlNuLol7bxB8u0Y", "Odd");
var n, a = this && this.__extends || (n = function(t, e) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
n(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), i = this && this.__decorate || function(t, e, o, n) {
var a, i = arguments.length, r = i < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(t, e, o, n); else for (var c = t.length - 1; c >= 0; c--) (a = t[c]) && (r = (i < 3 ? a(r) : i > 3 ? a(e, o, r) : a(e, o)) || r);
return i > 3 && r && Object.defineProperty(e, o, r), r;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var r = t("./TheThao"), c = cc._decorator, l = c.ccclass, s = c.property, d = function(t) {
a(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.pOdd = null;
e.rOdd = null;
e.odd = null;
return e;
}
e.prototype.setData = function(t) {
this.odd = t;
parseFloat(t.rate) < 0 ? this.rOdd.node.color = cc.Color.RED : this.rOdd.node.color = cc.Color.BLACK;
this.pOdd.string = t.p;
this.rOdd.string = t.rate;
};
e.prototype.onCLickBet = function() {
r.default.getInstance().showBetNode(this.odd);
};
i([ s(cc.Label) ], e.prototype, "pOdd", void 0);
i([ s(cc.Label) ], e.prototype, "rOdd", void 0);
return i([ l ], e);
}(cc.Component);
o.default = d;
cc._RF.pop();
}, {
"./TheThao": "TheThao"
} ],
PoolNode: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "5af45N1rrpOMJCKXZWz51Y/", "PoolNode");
Object.defineProperty(o, "__esModule", {
value: !0
});
var n = function() {
function t() {}
t.getPool = function(t) {
this.pools[t] || (this.pools[t] = new cc.NodePool());
return this.pools[t];
};
t.get = function(t, e) {
var o = this.getPool(t);
return o.size() > 0 ? o.get() : cc.instantiate(e);
};
t.put = function(t, e, o) {
if (e) {
o && o(e);
this.getPool(t).put(e);
}
};
t.putChildren = function(t, e, o) {
if (e) for (var n = 0, a = e.children.slice(); n < a.length; n++) {
var i = a[n];
this.put(t, i, o);
}
};
t.clear = function(t) {
var e = this.pools[t];
e && e.clear();
};
t.clearAll = function() {
for (var t = 0, e = Object.keys(this.pools); t < e.length; t++) {
var o = e[t];
this.pools[o].clear();
}
this.pools = {};
};
t.pools = {};
return t;
}();
o.default = n;
cc._RF.pop();
}, {} ],
ScrollViewPaging: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "2f6aaHiTfJDDKXG0gwS6ZfS", "ScrollViewPaging");
var n, a = this && this.__extends || (n = function(t, e) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
n(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), i = this && this.__decorate || function(t, e, o, n) {
var a, i = arguments.length, r = i < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(t, e, o, n); else for (var c = t.length - 1; c >= 0; c--) (a = t[c]) && (r = (i < 3 ? a(r) : i > 3 ? a(e, o, r) : a(e, o)) || r);
return i > 3 && r && Object.defineProperty(e, o, r), r;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var r = cc._decorator, c = r.ccclass, l = r.property, s = function(t) {
a(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.scrollView = null;
e.duration = .4;
e.interval = 5;
e.index = 0;
e.itemStep = 0;
e.total = 0;
e.content = null;
e.init = function() {
var t = e.content.getComponent(cc.Layout);
t && t.updateLayout();
e.total = e.content.childrenCount;
if (0 !== e.total) {
var o = t ? t.spacingX : 0, n = e.content.children[0];
e.itemStep = n.width + o;
e.scrollView.scrollToLeft(0);
e.schedule(e.autoNext, e.interval);
}
};
e.autoNext = function() {
e.index++;
if (e.index >= e.total) {
e.index = e.total - 1;
e.unschedule(e.autoNext);
}
e.scrollToIndex(e.index);
};
return e;
}
e.prototype.onLoad = function() {
this.content = this.scrollView.content;
};
e.prototype.start = function() {
this.scheduleOnce(this.init, .2);
};
e.prototype.scrollToIndex = function(t) {
if (this.scrollView) {
this.scrollView.stopAutoScroll();
var e = this.scrollView.getMaxScrollOffset(), o = t * this.itemStep;
o = Math.min(o, e.x);
o = Math.max(o, 0);
this.scrollView.scrollToOffset(cc.v2(o, 0), this.duration);
}
};
i([ l(cc.ScrollView) ], e.prototype, "scrollView", void 0);
i([ l ], e.prototype, "duration", void 0);
i([ l ], e.prototype, "interval", void 0);
return i([ c ], e);
}(cc.Component);
o.default = s;
cc._RF.pop();
}, {} ],
TTChatNetworkClient: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "97f5dAVRBFPzKfUhJs+ZTAy", "TTChatNetworkClient");
var n, a = this && this.__extends || (n = function(t, e) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
n(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), i = this && this.__decorate || function(t, e, o, n) {
var a, i = arguments.length, r = i < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(t, e, o, n); else for (var c = t.length - 1; c >= 0; c--) (a = t[c]) && (r = (i < 3 ? a(r) : i > 3 ? a(e, o, r) : a(e, o)) || r);
return i > 3 && r && Object.defineProperty(e, o, r), r;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var r = t("./TTChat"), c = cc._decorator, l = c.ccclass, s = (c.property, function(t) {
a(e, t);
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
cc.systemEvent.off("OnChatXocDiaSocketEvent", this.onResponeData, this);
cc.systemEvent.on("OnChatXocDiaSocketEvent", this.onResponeData, this);
this.mSignalr = new lngui.GateSignalR();
this.mSignalr.connect("OnChatXocDiaSocketEvent", t.url, t.hub, t.gate, lngui.UserManager.instance.mainUserInfo.cookie, !1);
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
var n = t.M[o];
if (n.A && null != n.A[0] && null != n.A[0]) {
var a = n.A[0];
switch (n.M) {
case "receiveMessage":
r.default.instance.receiveMessage(a);
break;

case "listLastMessages":
r.default.instance.listLastMessages(a);
}
}
}
};
e.prototype.registerChat = function() {
this.sendSignalR("RegisterChat", [ r.default.instance.chatChanel ]);
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
return o = i([ l ], e);
}(cc.Component));
o.default = s;
cc._RF.pop();
}, {
"./TTChat": "TTChat"
} ],
TTChat: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "fc35f/2WxdOjJEbcibkQ2Gy", "TTChat");
var n, a = this && this.__extends || (n = function(t, e) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
n(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), i = this && this.__decorate || function(t, e, o, n) {
var a, i = arguments.length, r = i < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(t, e, o, n); else for (var c = t.length - 1; c >= 0; c--) (a = t[c]) && (r = (i < 3 ? a(r) : i > 3 ? a(e, o, r) : a(e, o)) || r);
return i > 3 && r && Object.defineProperty(e, o, r), r;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var r = t("./TTChatNetworkClient"), c = cc._decorator, l = c.ccclass, s = c.property, d = function(t) {
a(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.templateMessage = null;
e.templateMessageTip = null;
e.spriteFramesTip = [];
e.listChat = null;
e.NodeTip = null;
e.scrollListChat = null;
e.txtInputChat = null;
e.DealerName = null;
e.nameDealer = null;
e.chatChanel = "thethao-sun";
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
r.default.instance.sendSignalR("SendMessage", [ this.txtInputChat.string, this.chatChanel ]);
this.txtInputChat.string = "";
}
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
o && r.default.instance.sendSignalR("SendTip", [ this.chatChanel, o.iId, o.iN, this.nameDealer ]);
};
e.prototype.listLastMessages = function(t) {
if (0 != t.length) {
this.listChat.removeAllChildren();
if (t) for (var e = 0; e < t.length; e++) {
var o = t[e], n = o.n, a = o.c, i = o.Type;
if (void 0 !== n && void 0 !== a && "SYSTEM" != n && "SYSTEM" != a && "TIP" != i) {
if ("SYSTEM" != n && "SYSTEM" != a && n.length > 0 && a.length > 0) {
var r = a, c = cc.instantiate(this.templateMessage), l = o.n, s = n;
c.active = !0;
l = (l.localeCompare(lngui.UserManager.instance.mainUserInfo.NickName), s);
c.getComponent(cc.Label).string = l + ": " + r;
if (1 == t.IsVipTx) {
c.getChildByName("lb_name").getComponent(cc.Label).node.active = !1;
c.getChildByName("lb_nameVip").getComponent(cc.Label).string = l + ": ";
} else {
c.getChildByName("lb_nameVip").getComponent(cc.Label).node.active = !1;
c.getChildByName("lb_name").getComponent(cc.Label).string = l + ": ";
}
this.listChat.addChild(c);
}
this.scrollListChat.scrollToBottom();
}
}
}
};
e.prototype.receiveMessage = function(t) {
var e = t.n, o = t.c, n = t.Type;
if (void 0 !== e && void 0 !== o && "TIP" !== n && "SYSTEM" != e && "SYSTEM" != o && e.length > 0 && o.length > 0) {
var a = o, i = cc.instantiate(this.templateMessage), r = t.n, c = e;
i.active = !0;
r = (r.localeCompare(lngui.UserManager.instance.mainUserInfo.NickName), c);
i.getComponent(cc.Label).string = r + ": " + a;
if (1 == t.IsVipTx) {
i.getChildByName("lb_name").getComponent(cc.Label).node.active = !1;
i.getChildByName("lb_nameVip").getComponent(cc.Label).string = r + ": ";
} else {
i.getChildByName("lb_nameVip").getComponent(cc.Label).node.active = !1;
i.getChildByName("lb_name").getComponent(cc.Label).string = r + ": ";
}
this.listChat.addChild(i);
this.scrollListChat.scrollToBottom();
}
};
e.prototype.receiveMessageTip = function(t) {
this.nameDealer = t.dealerName;
var e = cc.instantiate(this.templateMessageTip), o = t.giftId, n = "cho " + t.msg.split(" cho ")[1], a = t.user;
e.active = !0;
e.getChildByName("lb_name").getComponent(cc.Label).node.active = !0;
e.getChildByName("lb_name").getComponent(cc.Label).string = a;
e.getChildByName("lb_name").setPosition(cc.v2(0));
e.getChildByName("lb_msg1").getComponent(cc.Label).node.active = !0;
e.getChildByName("lb_msg1").getComponent(cc.Label).string = "đã tip";
e.getChildByName("lb_msg2").getComponent(cc.Label).node.active = !0;
e.getChildByName("lb_msg2").getComponent(cc.Label).string = n;
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
};
e.prototype.onKeyDown = function(t) {
switch (t.keyCode) {
case cc.macro.KEY.enter:
this.txtInputChat.focus();
}
};
var o;
e._instance = null;
i([ s(cc.Node) ], e.prototype, "templateMessage", void 0);
i([ s(cc.Node) ], e.prototype, "templateMessageTip", void 0);
i([ s([ cc.SpriteFrame ]) ], e.prototype, "spriteFramesTip", void 0);
i([ s(cc.Node) ], e.prototype, "listChat", void 0);
i([ s(cc.Node) ], e.prototype, "NodeTip", void 0);
i([ s(cc.ScrollView) ], e.prototype, "scrollListChat", void 0);
i([ s(cc.EditBox) ], e.prototype, "txtInputChat", void 0);
i([ s(cc.Label) ], e.prototype, "DealerName", void 0);
return o = i([ l ], e);
}(cc.Component);
o.default = d;
cc._RF.pop();
}, {
"./TTChatNetworkClient": "TTChatNetworkClient"
} ],
TheThaoContext: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "509feSh1WhOnqmgHOR4RiUH", "TheThaoContext");
Object.defineProperty(o, "__esModule", {
value: !0
});
o.getTheThaoInstance = o.setTheThaoInstance = void 0;
var n = null;
o.setTheThaoInstance = function(t) {
n = t;
};
o.getTheThaoInstance = function() {
return n;
};
cc._RF.pop();
}, {} ],
TheThaoTab: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "5261252TWlJnYA406mj1GzC", "TheThaoTab");
var n, a = this && this.__extends || (n = function(t, e) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
n(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), i = this && this.__decorate || function(t, e, o, n) {
var a, i = arguments.length, r = i < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(t, e, o, n); else for (var c = t.length - 1; c >= 0; c--) (a = t[c]) && (r = (i < 3 ? a(r) : i > 3 ? a(e, o, r) : a(e, o)) || r);
return i > 3 && r && Object.defineProperty(e, o, r), r;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var r = t("./TheThao"), c = cc._decorator, l = c.ccclass, s = c.property, d = function(t) {
a(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.tabBarSkeleton = null;
e.bongDaSkeleton = null;
e.BongDaTabs = [];
return e;
}
e.prototype.onLoad = function() {
this.BongDaTabs.forEach(function(t, e) {
t.active = 0 === e;
});
};
e.prototype.disableAllTab = function() {
this.BongDaTabs.forEach(function(t) {
t.active = !1;
});
};
e.prototype.start = function() {
this.tabBarSkeleton.setAnimation(0, "All_inactive", !0);
this.bongDaSkeleton.setAnimation(0, "thethao_football", !0);
};
e.prototype.onClickTab = function(t, e) {
this.disableAllTab();
var o = 0;
this.tabBarSkeleton.setAnimation(0, "All_inactive", !0);
this.bongDaSkeleton.setAnimation(0, "thethao_football_inactive", !0);
switch (e) {
case "Cuoc_xien":
this.tabBarSkeleton.setAnimation(0, "Cuoc_xien", !0);
o = 2;
break;

case "Xemlive":
this.tabBarSkeleton.setAnimation(0, "Xemlive", !0);
o = 1;
break;

case "lsucuoc":
this.tabBarSkeleton.setAnimation(0, "lsucuoc", !0);
o = 3;
break;

case "thethao_football":
this.bongDaSkeleton.setAnimation(0, "thethao_football", !0);
o = 0;
}
this.BongDaTabs.forEach(function(t, e) {
t.active = e === o;
});
};
e.prototype.onCLickSetting = function() {
r.default.getInstance().CaiDat.node.active = !0;
};
i([ s(sp.Skeleton) ], e.prototype, "tabBarSkeleton", void 0);
i([ s(sp.Skeleton) ], e.prototype, "bongDaSkeleton", void 0);
i([ s(cc.Node) ], e.prototype, "BongDaTabs", void 0);
return i([ l ], e);
}(cc.Component);
o.default = d;
cc._RF.pop();
}, {
"./TheThao": "TheThao"
} ],
TheThao: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "353fem2VqxMv4HbL0AEJCFp", "TheThao");
var n, a = this && this.__extends || (n = function(t, e) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
n(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), i = this && this.__decorate || function(t, e, o, n) {
var a, i = arguments.length, r = i < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(t, e, o, n); else for (var c = t.length - 1; c >= 0; c--) (a = t[c]) && (r = (i < 3 ? a(r) : i > 3 ? a(e, o, r) : a(e, o)) || r);
return i > 3 && r && Object.defineProperty(e, o, r), r;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var r = t("./Bet"), c = t("./CaiDat"), l = t("./ChiTietTranDau"), s = t("./Helper"), d = t("./TheThaoContext"), p = t("./UiLoading"), u = cc._decorator, h = u.ccclass, f = u.property, y = function(t) {
a(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.uiLoading = null;
e.CaiDat = null;
e.Bet = null;
e.sideBar = null;
e.BongDa = null;
e.TranGhim = null;
e.sideBarTranDau = null;
e.ChiTietTranDau = null;
e.labelDay = null;
e.labelMonth = null;
e.avatar = null;
e.labelName = null;
e.labelGold = null;
return e;
}
o = e;
e.getInstance = function() {
return o.instance;
};
e.prototype.onSetActiveTranDau = function(t) {
void 0 === t && (t = !1);
this.sideBarTranDau.active = t;
this.ChiTietTranDau.node.active = t;
this.sideBar.active = !t;
this.BongDa.active = !t;
this.TranGhim.active = !t;
};
e.prototype.onSetTabChiTietTranDau = function(t) {
this.ChiTietTranDau.setTab(t);
};
e.prototype.onLoad = function() {
o.instance = this;
d.setTheThaoInstance(this);
var t = s.default.getCurrentDayMonth(), e = t.day, n = t.month;
this.labelDay.string = e;
this.labelMonth.string = n;
this.onSetActiveTranDau(!1);
};
e.prototype.start = function() {
var t = this;
setTimeout(function() {
t.labelName.string = lngui.UserManager.instance.mainUserInfo.NickName;
t.labelGold.string = s.default.formatDotNumber(lngui.UserManager.instance.mainUserInfo.Money);
}, 1e3);
};
e.prototype.update = function() {};
e.prototype.showBetNode = function(t, e) {
void 0 === e && (e = !1);
this.Bet.setData(t, e);
this.Bet.node.active = !0;
};
e.prototype.clickLobby = function() {
lngui.UIScreenManager.instance.popToRootScreen();
};
var o;
e.instance = null;
i([ f(p.default) ], e.prototype, "uiLoading", void 0);
i([ f(c.default) ], e.prototype, "CaiDat", void 0);
i([ f(r.default) ], e.prototype, "Bet", void 0);
i([ f(cc.Node) ], e.prototype, "sideBar", void 0);
i([ f(cc.Node) ], e.prototype, "BongDa", void 0);
i([ f(cc.Node) ], e.prototype, "TranGhim", void 0);
i([ f(cc.Node) ], e.prototype, "sideBarTranDau", void 0);
i([ f(l.default) ], e.prototype, "ChiTietTranDau", void 0);
i([ f(cc.Label) ], e.prototype, "labelDay", void 0);
i([ f(cc.Label) ], e.prototype, "labelMonth", void 0);
i([ f(cc.Sprite) ], e.prototype, "avatar", void 0);
i([ f(cc.Label) ], e.prototype, "labelName", void 0);
i([ f(cc.Label) ], e.prototype, "labelGold", void 0);
return o = i([ h ], e);
}(cc.Component);
o.default = y;
cc._RF.pop();
}, {
"./Bet": "Bet",
"./CaiDat": "CaiDat",
"./ChiTietTranDau": "ChiTietTranDau",
"./Helper": "Helper",
"./TheThaoContext": "TheThaoContext",
"./UiLoading": "UiLoading"
} ],
TheoThaoConfig: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "c02e9D31ZxMUKnKCSVfPCE/", "TheoThaoConfig");
Object.defineProperty(o, "__esModule", {
value: !0
});
o.TheoThaoConfig = void 0;
var n = function() {
function t() {}
t.token = "";
t.dacbiet = "https://api.streamvid.fit/sun/sport/event/outright?agentId=32&days=0&isLive=false&sportId=1";
t.dauSom = "https://api.streamvid.fit/sun/sport/event/get-event-market?agentId=32&days=2&isLive=false&sportId=1";
t.homNay = "https://api.streamvid.fit/sun/sport/event/get-event-market?agentId=32&days=1&isLive=false&sportId=1";
t.tructiep = "https://api.streamvid.fit/sun/sport/event/get-event-market?agentId=32&days=1&isLive=true&sportId=1";
t.xemlive = "https://api.streamvid.fit/sun/sport/event/get-event-market?agentId=32&days=1&isLive=true&sportId=1";
return t;
}();
o.TheoThaoConfig = n;
cc._RF.pop();
}, {} ],
TongBanThang: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "35536cAewRDU5ycj/A6qhMm", "TongBanThang");
var n, a = this && this.__extends || (n = function(t, e) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
n(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), i = this && this.__decorate || function(t, e, o, n) {
var a, i = arguments.length, r = i < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(t, e, o, n); else for (var c = t.length - 1; c >= 0; c--) (a = t[c]) && (r = (i < 3 ? a(r) : i > 3 ? a(e, o, r) : a(e, o)) || r);
return i > 3 && r && Object.defineProperty(e, o, r), r;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var r = t("./GameEnum"), c = t("./Helper"), l = t("./Odd"), s = cc._decorator, d = s.ccclass, p = s.property, u = function(t) {
a(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.toantran = null;
e.hiep1 = null;
e.oddPrefab = null;
e.tongBanThangNode = null;
return e;
}
e.prototype.renderData = function(t, e) {
var o = this;
this.renderHandicap(t, this.toantran, e.toantran, r.OddType.TONGBANTHANG);
this.renderHandicap(t, this.hiep1, e.hiep1, r.OddType.TONGBANTHANGH1);
this.scheduleOnce(function() {
o.tongBanThangNode.height = c.default.getMaxHeight([ o.toantran, o.hiep1 ]);
}, 0);
};
e.prototype.createOddData = function(t, e, o, n) {
return {
teamH: t.hn,
teamA: t.an,
time: t.et,
betTitle: c.default.getBetTitle(e),
bet: o,
p: o,
rate: n
};
};
e.prototype.addOdd = function(t, e) {
c.default.instantiateNode(t, this.oddPrefab).getComponent(l.default).setData(e);
};
e.prototype.renderHomeAwayList = function(t, e, o, n, a, i) {
var r = this;
e.removeAllChildren();
o && 0 !== o.length && o.forEach(function(o) {
r.addOdd(e, r.createOddData(t, n, a(o), i(o)));
});
};
e.prototype.renderHandicap = function(t, e, o, n) {
this.renderHomeAwayList(t, e, o, n, function(t) {
return t.lineTeam;
}, function(t) {
return t.home;
});
};
i([ p(cc.Node) ], e.prototype, "toantran", void 0);
i([ p(cc.Node) ], e.prototype, "hiep1", void 0);
i([ p(cc.Prefab) ], e.prototype, "oddPrefab", void 0);
i([ p(cc.Node) ], e.prototype, "tongBanThangNode", void 0);
return i([ d ], e);
}(cc.Component);
o.default = u;
cc._RF.pop();
}, {
"./GameEnum": "GameEnum",
"./Helper": "Helper",
"./Odd": "Odd"
} ],
TranDauDB: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "9eed9YhVEFBh5XMtBtT6tYL", "TranDauDB");
var n, a = this && this.__extends || (n = function(t, e) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
n(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), i = this && this.__decorate || function(t, e, o, n) {
var a, i = arguments.length, r = i < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(t, e, o, n); else for (var c = t.length - 1; c >= 0; c--) (a = t[c]) && (r = (i < 3 ? a(r) : i > 3 ? a(e, o, r) : a(e, o)) || r);
return i > 3 && r && Object.defineProperty(e, o, r), r;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var r = t("./Helper"), c = t("./TheThao"), l = cc._decorator, s = l.ccclass, d = l.property, p = function(t) {
a(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.logo = null;
e.team = null;
e.stt = null;
e.odd = null;
e.odData = null;
return e;
}
e.prototype.start = function() {};
e.prototype.setData = function(t, e, o) {
this.odData = {
teamH: o,
teamA: "",
time: r.default.formatDateTime(t[7]),
betTitle: "Đội vô địch",
bet: t[2],
p: "",
rate: t[4]
};
this.stt.string = (e + 1).toString();
r.default.setSpriteFromUrl(this.logo, t[8]);
this.team.string = t[2];
this.odd.string = t[4];
};
e.prototype.onBetCLick = function() {
c.default.getInstance().showBetNode(this.odData, !0);
};
i([ d(cc.Sprite) ], e.prototype, "logo", void 0);
i([ d(cc.Label) ], e.prototype, "team", void 0);
i([ d(cc.Label) ], e.prototype, "stt", void 0);
i([ d(cc.Label) ], e.prototype, "odd", void 0);
return i([ s ], e);
}(cc.Component);
o.default = p;
cc._RF.pop();
}, {
"./Helper": "Helper",
"./TheThao": "TheThao"
} ],
TranDauGhim: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "79c2biuP3ZNUJTo/2PTrC+D", "TranDauGhim");
var n, a = this && this.__extends || (n = function(t, e) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
n(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), i = this && this.__decorate || function(t, e, o, n) {
var a, i = arguments.length, r = i < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(t, e, o, n); else for (var c = t.length - 1; c >= 0; c--) (a = t[c]) && (r = (i < 3 ? a(r) : i > 3 ? a(e, o, r) : a(e, o)) || r);
return i > 3 && r && Object.defineProperty(e, o, r), r;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var r = t("./Helper"), c = t("./TheThao"), l = cc._decorator, s = l.ccclass, d = l.property, p = function(t) {
a(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.logoGiai = null;
e.logoTeamH = null;
e.logoTeamA = null;
e.time = null;
e.labelGiai = null;
e.labelTeamH = null;
e.labelTeamA = null;
e.pHTx = null;
e.pAtx = null;
e.rHTx = null;
e.rAtx = null;
e.pHKc = null;
e.pAKc = null;
e.rHKc = null;
e.rAKc = null;
e.trandauData = null;
return e;
}
e.prototype.setData = function(t) {
var e, o, n, a;
r.default.setSpriteFromUrl(this.logoGiai, t.lg);
this.labelGiai.string = r.default.truncate(t.ln, 30);
var i = t.e[0];
this.trandauData = {
ln: t.ln,
af: i.af,
an: i.an,
et: i.et,
hf: i.hf,
hn: i.hn,
odd: i.m
};
this.time.string = r.default.formatDateTime(i.et);
r.default.setSpriteFromUrl(this.logoTeamH, i.hf);
this.labelTeamH.string = r.default.truncate(i.hn, 10);
r.default.setSpriteFromUrl(this.logoTeamA, i.af);
this.labelTeamA.string = r.default.truncate(i.an, 10);
var c = i.m, l = r.default.parseHandicap(null === (o = null === (e = c[2]) || void 0 === e ? void 0 : e.o) || void 0 === o ? void 0 : o[0]);
if (l) {
this.pHTx.string = l.display.home.label;
this.pAtx.string = "U";
this.rHTx.string = l.display.home.odds;
parseFloat(l.display.home.odds.rate) < 0 ? this.rHTx.node.color = cc.Color.RED : this.rHTx.node.color = cc.Color.BLACK;
this.rAtx.string = l.display.away.odds;
parseFloat(l.display.away.odds.rate) < 0 ? this.rAtx.node.color = cc.Color.RED : this.rAtx.node.color = cc.Color.BLACK;
}
var s = r.default.parseHandicap(null === (a = null === (n = c[4]) || void 0 === n ? void 0 : n.o) || void 0 === a ? void 0 : a[0]);
if (s) {
if ("home" === s.handicapTeam) {
this.pHKc.string = s.display.home.label;
this.pAKc.string = "";
} else {
this.pAKc.string = s.display.away.label;
this.pHKc.string = "";
}
var d = s.display.home.odds, p = s.display.away.odds;
this.rHKc.string = d;
this.rAKc.string = p;
parseFloat(d) < 0 ? this.rHKc.node.color = cc.Color.RED : this.rHKc.node.color = cc.Color.BLACK;
parseFloat(p) < 0 ? this.rAKc.node.color = cc.Color.RED : this.rAKc.node.color = cc.Color.BLACK;
}
};
e.prototype.onClickDetail = function() {
if (this.trandauData) {
c.default.getInstance().ChiTietTranDau.setData(this.trandauData);
c.default.getInstance().onSetActiveTranDau(!0);
}
};
i([ d(cc.Sprite) ], e.prototype, "logoGiai", void 0);
i([ d(cc.Sprite) ], e.prototype, "logoTeamH", void 0);
i([ d(cc.Sprite) ], e.prototype, "logoTeamA", void 0);
i([ d(cc.Label) ], e.prototype, "time", void 0);
i([ d(cc.Label) ], e.prototype, "labelGiai", void 0);
i([ d(cc.Label) ], e.prototype, "labelTeamH", void 0);
i([ d(cc.Label) ], e.prototype, "labelTeamA", void 0);
i([ d(cc.Label) ], e.prototype, "pHTx", void 0);
i([ d(cc.Label) ], e.prototype, "pAtx", void 0);
i([ d(cc.Label) ], e.prototype, "rHTx", void 0);
i([ d(cc.Label) ], e.prototype, "rAtx", void 0);
i([ d(cc.Label) ], e.prototype, "pHKc", void 0);
i([ d(cc.Label) ], e.prototype, "pAKc", void 0);
i([ d(cc.Label) ], e.prototype, "rHKc", void 0);
i([ d(cc.Label) ], e.prototype, "rAKc", void 0);
return i([ s ], e);
}(cc.Component);
o.default = p;
cc._RF.pop();
}, {
"./Helper": "Helper",
"./TheThao": "TheThao"
} ],
TranDauLive: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "3d9754TTddEx4/jfEsKn59L", "TranDauLive");
var n, a = this && this.__extends || (n = function(t, e) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
n(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), i = this && this.__decorate || function(t, e, o, n) {
var a, i = arguments.length, r = i < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(t, e, o, n); else for (var c = t.length - 1; c >= 0; c--) (a = t[c]) && (r = (i < 3 ? a(r) : i > 3 ? a(e, o, r) : a(e, o)) || r);
return i > 3 && r && Object.defineProperty(e, o, r), r;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var r = t("./Helper"), c = t("./TheThao"), l = cc._decorator, s = l.ccclass, d = l.property, p = function(t) {
a(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.logoH = null;
e.logoA = null;
e.giaiDau = null;
e.doiH = null;
e.doiA = null;
e.result = null;
e.time = null;
e.theDoH = null;
e.theDoA = null;
e.theVangH = null;
e.theVangA = null;
e.gocH = null;
e.gocA = null;
e.trandauData = null;
return e;
}
e.prototype.start = function() {};
e.prototype.setData = function(t, e) {
var o = t.e[0];
this.trandauData = {
ln: e,
af: o.af,
an: o.an,
et: o.et,
hf: o.hf,
hn: o.hn,
odd: o.m
};
this.giaiDau.string = t.ln;
r.default.setSpriteFromUrl(this.logoH, o.hf);
r.default.setSpriteFromUrl(this.logoA, o.af);
this.doiH.string = o.hn;
this.doiA.string = o.an;
this.result.string = o.hs + " - " + o.as;
this.time.string = this.formatMatchTime(o.mc);
this.theDoH.string = o.rch;
this.theDoH.node.parent.active = o.rch > 0;
this.theDoA.string = o.rca;
this.theDoA.node.parent.active = o.rca > 0;
this.theVangH.string = o.ych;
this.theVangH.node.parent.active = o.ych > 0;
this.theVangA.node.parent.active = o.yca > 0;
this.theVangA.string = o.yca;
this.gocH.string = o.hc;
this.gocH.node.parent.active = o.hc > 0;
this.gocA.string = o.ac;
this.gocA.node.parent.active = o.ac > 0;
};
e.prototype.formatMatchTime = function(t) {
if (null == t) return "Chưa bắt đầu";
var e = "", o = Math.floor(t);
if (o <= 50) e = "Hiệp 1"; else {
if (o < 55) return "Nghỉ giữa hiệp";
if (!(o <= 100)) return "Kết thúc";
e = "Hiệp 2";
}
var n = o;
"Hiệp 1" === e && o > 45 ? n = "45+" + (o - 45) : "Hiệp 2" === e && o > 90 && (n = "90+" + (o - 90));
return e + " - " + n + "'";
};
e.prototype.onBetCLick = function() {
if (this.trandauData) {
c.default.getInstance().ChiTietTranDau.setData(this.trandauData);
c.default.getInstance().onSetActiveTranDau(!0);
}
};
i([ d(cc.Sprite) ], e.prototype, "logoH", void 0);
i([ d(cc.Sprite) ], e.prototype, "logoA", void 0);
i([ d(cc.Label) ], e.prototype, "giaiDau", void 0);
i([ d(cc.Label) ], e.prototype, "doiH", void 0);
i([ d(cc.Label) ], e.prototype, "doiA", void 0);
i([ d(cc.Label) ], e.prototype, "result", void 0);
i([ d(cc.Label) ], e.prototype, "time", void 0);
i([ d(cc.Label) ], e.prototype, "theDoH", void 0);
i([ d(cc.Label) ], e.prototype, "theDoA", void 0);
i([ d(cc.Label) ], e.prototype, "theVangH", void 0);
i([ d(cc.Label) ], e.prototype, "theVangA", void 0);
i([ d(cc.Label) ], e.prototype, "gocH", void 0);
i([ d(cc.Label) ], e.prototype, "gocA", void 0);
return i([ s ], e);
}(cc.Component);
o.default = p;
cc._RF.pop();
}, {
"./Helper": "Helper",
"./TheThao": "TheThao"
} ],
TranDauTab: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "fbf6dshiL9D+7u1kwyHseGP", "TranDauTab");
var n, a = this && this.__extends || (n = function(t, e) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
n(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), i = this && this.__decorate || function(t, e, o, n) {
var a, i = arguments.length, r = i < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(t, e, o, n); else for (var c = t.length - 1; c >= 0; c--) (a = t[c]) && (r = (i < 3 ? a(r) : i > 3 ? a(e, o, r) : a(e, o)) || r);
return i > 3 && r && Object.defineProperty(e, o, r), r;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var r = t("./TheThao"), c = cc._decorator, l = c.ccclass, s = c.property, d = function(t) {
a(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.toggleContainer = null;
return e;
}
e.prototype.onLoad = function() {
var t = this;
this.toggleContainer.toggleItems.forEach(function(e) {
e.node.on("toggle", t.onToggleChange, t);
});
};
e.prototype.onToggleChange = function(t) {
r.default.getInstance().onSetTabChiTietTranDau(t.node.name);
};
e.prototype.onCLickBackToMain = function() {
r.default.getInstance().onSetActiveTranDau(!1);
};
i([ s(cc.ToggleContainer) ], e.prototype, "toggleContainer", void 0);
return i([ l ], e);
}(cc.Component);
o.default = d;
cc._RF.pop();
}, {
"./TheThao": "TheThao"
} ],
TranDau: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "b0339RHOGJED70M2wepqVUE", "TranDau");
var n, a = this && this.__extends || (n = function(t, e) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
n(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), i = this && this.__decorate || function(t, e, o, n) {
var a, i = arguments.length, r = i < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(t, e, o, n); else for (var c = t.length - 1; c >= 0; c--) (a = t[c]) && (r = (i < 3 ? a(r) : i > 3 ? a(e, o, r) : a(e, o)) || r);
return i > 3 && r && Object.defineProperty(e, o, r), r;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var r = t("./Helper"), c = t("./Keo"), l = t("./PoolNode"), s = cc._decorator, d = s.ccclass, p = s.property, u = t("./GameEnum"), h = t("./TheThao"), f = function(t) {
a(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.logoA = null;
e.logoB = null;
e.doiA = null;
e.doiB = null;
e.time = null;
e.isLive = !1;
e.isLiveNode = null;
e.homeNode = null;
e.awayNode = null;
e.drawNode = null;
e.oddPrefab = null;
e.homeAwayPos = [ cc.v2(-234.5, 0), cc.v2(-110, 0), cc.v2(15, 0), cc.v2(140, 0), cc.v2(267, 0), cc.v2(391, 0) ];
e.DrawPos = [ cc.v2(15, 0), cc.v2(391, 0) ];
e.trandauData = null;
return e;
}
o = e;
e.prototype.start = function() {};
e.prototype.resetOddNode = function(t) {
t.stopAllActions();
t.opacity = 255;
t.scale = 1;
t.angle = 0;
t.active = !1;
};
e.prototype.putOddChildrenToPool = function(t) {
var e = this;
if (t) for (var n = 0, a = t.children.slice(); n < a.length; n++) {
var i = a[n];
i && i.getComponent(c.default) && l.default.put(o.ODD_POOL_KEY, i, function(t) {
return e.resetOddNode(t);
});
}
};
e.prototype.spawnOdd = function(t, e, n) {
var a = l.default.get(o.ODD_POOL_KEY, this.oddPrefab);
a.parent = t;
a.active = !0;
a.opacity = 255;
a.scale = 1;
a.angle = 0;
a.setPosition(e);
var i = a.getComponent(c.default);
i && i.setData(n);
return a;
};
e.prototype.setData = function(t, e) {
var o, n, a, i, c, l, s, d, p, h, f, y, T;
this.trandauData = {
ln: e,
af: t.af,
an: t.an,
et: t.et,
hf: t.hf,
hn: t.hn,
odd: t.m
};
this.time.string = r.default.formatDateTime(t.et);
this.isLive = null !== (o = t.l) && void 0 !== o && o;
r.default.setSpriteFromUrl(this.logoA, t.hf);
r.default.setSpriteFromUrl(this.logoB, t.af);
this.doiA.string = t.hn;
this.doiB.string = t.an;
this.isLiveNode.active = this.isLive;
this.putOddChildrenToPool(this.homeNode);
this.putOddChildrenToPool(this.awayNode);
this.putOddChildrenToPool(this.drawNode);
var v = t, g = t.m || [];
if (g && 0 !== g.length && g[0].hasOwnProperty("o")) {
var m = (null === (a = null === (n = null == g ? void 0 : g[0]) || void 0 === n ? void 0 : n.o) || void 0 === a ? void 0 : a[0]) || null, O = (null === (c = null === (i = null == g ? void 0 : g[1]) || void 0 === i ? void 0 : i.o) || void 0 === c ? void 0 : c[0]) || null, _ = (null === (s = null === (l = null == g ? void 0 : g[2]) || void 0 === l ? void 0 : l.o) || void 0 === s ? void 0 : s[0]) || null, b = (null === (p = null === (d = null == g ? void 0 : g[3]) || void 0 === d ? void 0 : d.o) || void 0 === p ? void 0 : p[0]) || null, H = (null === (f = null === (h = null == g ? void 0 : g[4]) || void 0 === h ? void 0 : h.o) || void 0 === f ? void 0 : f[0]) || null, D = (null === (T = null === (y = null == g ? void 0 : g[5]) || void 0 === y ? void 0 : y.o) || void 0 === T ? void 0 : T[0]) || null;
if (null !== m) {
this.spawnOdd(this.homeNode, this.homeAwayPos[2], this.getOddData(v, m, u.OddType.ONEXTWOX, u.HandicapTeam.HOME));
this.spawnOdd(this.awayNode, this.homeAwayPos[2], this.getOddData(v, m, u.OddType.ONEXTWOX, u.HandicapTeam.AWAY));
this.spawnOdd(this.drawNode, this.DrawPos[0], this.getOddData(v, m, u.OddType.ONEXTWOX, u.HandicapTeam.NONE, !0));
}
if (null !== O) {
this.spawnOdd(this.homeNode, this.homeAwayPos[5], this.getOddData(v, O, u.OddType.ONEXTWOXH1, u.HandicapTeam.HOME));
this.spawnOdd(this.awayNode, this.homeAwayPos[5], this.getOddData(v, O, u.OddType.ONEXTWOX, u.HandicapTeam.AWAY));
this.spawnOdd(this.drawNode, this.DrawPos[1], this.getOddData(v, O, u.OddType.ONEXTWOXH1, u.HandicapTeam.NONE, !0));
}
if (null !== _) {
this.spawnOdd(this.homeNode, this.homeAwayPos[1], this.getOddData(v, _, u.OddType.TAIXIU, u.HandicapTeam.HOME));
this.spawnOdd(this.awayNode, this.homeAwayPos[1], this.getOddData(v, _, u.OddType.TAIXIU, u.HandicapTeam.AWAY));
}
if (null !== b) {
this.spawnOdd(this.homeNode, this.homeAwayPos[4], this.getOddData(v, b, u.OddType.TAIXIU, u.HandicapTeam.HOME));
this.spawnOdd(this.awayNode, this.homeAwayPos[4], this.getOddData(v, b, u.OddType.TAIXIUH1, u.HandicapTeam.AWAY));
}
if (null !== H) {
this.spawnOdd(this.homeNode, this.homeAwayPos[0], this.getOddData(v, H, u.OddType.KEOCHAP, u.HandicapTeam.HOME));
this.spawnOdd(this.awayNode, this.homeAwayPos[0], this.getOddData(v, H, u.OddType.KEOCHAP, u.HandicapTeam.AWAY));
}
if (null !== D) {
this.spawnOdd(this.homeNode, this.homeAwayPos[3], this.getOddData(v, D, u.OddType.KEOCHAPH1, u.HandicapTeam.HOME));
this.spawnOdd(this.awayNode, this.homeAwayPos[3], this.getOddData(v, D, u.OddType.KEOCHAPH1, u.HandicapTeam.AWAY));
}
}
};
e.prototype.getOddData = function(t, e, o, n, a) {
var i, c, l;
void 0 === a && (a = !1);
var s = "", d = "";
if (o === u.OddType.KEOCHAP || o === u.OddType.KEOCHAPH1) {
d = (f = this.parseHandicap(e)).display[n].odds;
var p = f.display[n].label, h = r.default.isValidNumber(p) ? Math.abs(p) : p;
s = n === f.handicapTeam ? h.toString() : "";
}
if (o === u.OddType.TAIXIU || o === u.OddType.TAIXIUH1) {
var f;
d = (f = this.parseHandicap(e)).display[n].odds;
s = n === u.HandicapTeam.HOME ? f.display[n].label : "U";
}
if (o === u.OddType.ONEXTWOX || o === u.OddType.ONEXTWOXH1) {
if (n === u.HandicapTeam.HOME) {
s = "1";
d = (null === (i = e.oh) || void 0 === i ? void 0 : i.de) || "";
}
if (n === u.HandicapTeam.AWAY) {
s = "2";
d = (null === (c = e.oa) || void 0 === c ? void 0 : c.de) || "";
}
if (a) {
s = "X";
d = (null === (l = e.od) || void 0 === l ? void 0 : l.de) || "";
}
}
var y = r.default.getBetType(t, n, o);
return {
teamH: (null == t ? void 0 : t.hn) || "",
teamA: (null == t ? void 0 : t.an) || "",
time: (null == t ? void 0 : t.et) || "",
betTitle: r.default.getBetTitle(o),
bet: y,
p: s,
rate: d
};
};
e.prototype.parseHandicapValue = function(t) {
if ("number" == typeof t) return t;
if ("string" != typeof t) return 0;
var e = t.trim().toLowerCase();
if (!e || "pk" === e) return 0;
var o = parseFloat(e.replace(",", "."));
return Number.isFinite(o) ? o : 0;
};
e.prototype.handicapToUI = function(t) {
var e = this.parseHandicapValue(t);
if (e % 1 == 0 || e % 1 == .5) return e.toString();
var o = Math.floor(e);
return e % 1 == .25 ? o + "-" + (o + .5) : e % 1 == .75 ? o + .5 + "-" + (o + 1) : e.toString();
};
e.prototype.parseHandicap = function(t) {
var e, o, n = this.parseHandicapValue(null == t ? void 0 : t.p), a = (null === (e = t.oh) || void 0 === e ? void 0 : e.ma) || "", i = (null === (o = t.oa) || void 0 === o ? void 0 : o.ma) || "", r = this.handicapToUI(n), c = u.HandicapTeam.NONE, l = {};
if (n < 0) {
c = u.HandicapTeam.HOME;
l = {
home: {
label: "" + r,
odds: a
},
away: {
label: "" + r,
odds: i
}
};
} else if (n > 0) {
c = u.HandicapTeam.AWAY;
l = {
home: {
label: "" + r,
odds: a
},
away: {
label: "" + r,
odds: i
}
};
} else {
c = u.HandicapTeam.NONE;
l = {
home: {
label: "0",
odds: a
},
away: {
label: "0",
odds: i
}
};
}
return {
handicap: r,
handicapTeam: c,
display: l
};
};
e.prototype.onClickDetail = function() {
if (this.trandauData) {
h.default.getInstance().ChiTietTranDau.setData(this.trandauData);
h.default.getInstance().onSetActiveTranDau(!0);
}
};
var o;
e.ODD_POOL_KEY = "TheThao.TranDau.Odd";
i([ p(cc.Sprite) ], e.prototype, "logoA", void 0);
i([ p(cc.Sprite) ], e.prototype, "logoB", void 0);
i([ p(cc.Label) ], e.prototype, "doiA", void 0);
i([ p(cc.Label) ], e.prototype, "doiB", void 0);
i([ p(cc.Label) ], e.prototype, "time", void 0);
i([ p(cc.Node) ], e.prototype, "isLiveNode", void 0);
i([ p(cc.Node) ], e.prototype, "homeNode", void 0);
i([ p(cc.Node) ], e.prototype, "awayNode", void 0);
i([ p(cc.Node) ], e.prototype, "drawNode", void 0);
i([ p(cc.Prefab) ], e.prototype, "oddPrefab", void 0);
return o = i([ d ], e);
}(cc.Component);
o.default = f;
cc._RF.pop();
}, {
"./GameEnum": "GameEnum",
"./Helper": "Helper",
"./Keo": "Keo",
"./PoolNode": "PoolNode",
"./TheThao": "TheThao"
} ],
Tran: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "bd0f0dtiYRNmorHxP+o1ca5", "Tran");
var n, a = this && this.__extends || (n = function(t, e) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
n(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), i = this && this.__decorate || function(t, e, o, n) {
var a, i = arguments.length, r = i < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(t, e, o, n); else for (var c = t.length - 1; c >= 0; c--) (a = t[c]) && (r = (i < 3 ? a(r) : i > 3 ? a(e, o, r) : a(e, o)) || r);
return i > 3 && r && Object.defineProperty(e, o, r), r;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var r = t("./GameEnum"), c = t("./Helper"), l = t("./Odd"), s = cc._decorator, d = s.ccclass, p = s.property, u = function(t) {
a(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.keochap = null;
e.taixiu = null;
e.onextwox = null;
e.keochaph1 = null;
e.taixiuh1 = null;
e.onextwoxh1 = null;
e.oddPrefab = null;
e.tranNode = null;
return e;
}
e.prototype.renderData = function(t, e) {
var o = this;
this.renderHandicap(t, this.keochap, e.keochap, r.OddType.KEOCHAP);
this.renderOverUnder(t, this.taixiu, e.taixiu, r.OddType.TAIXIU);
this.render1X2(t, this.onextwox, e.onextwox, r.OddType.ONEXTWOX);
this.renderHandicap(t, this.keochaph1, e.keochaph1, r.OddType.KEOCHAPH1);
this.renderOverUnder(t, this.taixiuh1, e.taixiuh1, r.OddType.TAIXIUH1);
this.render1X2(t, this.onextwoxh1, e.onextwoxh1, r.OddType.ONEXTWOXH1);
this.scheduleOnce(function() {
o.tranNode.height = c.default.getMaxHeight([ o.keochap, o.taixiu, o.onextwox, o.keochaph1, o.taixiuh1, o.onextwoxh1 ]);
}, 0);
};
e.prototype.createOddData = function(t, e, o, n, a, i) {
return {
teamH: t.hn,
teamA: t.an,
time: t.et,
betTitle: c.default.getBetTitle(e),
bet: c.default.getOddBetType(o, n, e),
p: a,
rate: i
};
};
e.prototype.addOdd = function(t, e) {
c.default.instantiateNode(t, this.oddPrefab).getComponent(l.default).setData(e);
};
e.prototype.renderHomeAwayList = function(t, e, o, n, a, i, c, l) {
var s = this;
e.removeAllChildren();
o && 0 !== o.length && o.forEach(function(o) {
s.addOdd(e, s.createOddData(t, n, t.hn, r.HandicapTeam.HOME, a(o), c(o)));
s.addOdd(e, s.createOddData(t, n, t.an, r.HandicapTeam.AWAY, i(o), l(o)));
});
};
e.prototype.renderHandicap = function(t, e, o, n) {
this.renderHomeAwayList(t, e, o, n, function(t) {
return t.lineTeam === r.HandicapTeam.HOME ? t.line : "";
}, function(t) {
return t.lineTeam === r.HandicapTeam.AWAY ? t.line : "";
}, function(t) {
return t.home;
}, function(t) {
return t.away;
});
};
e.prototype.renderOverUnder = function(t, e, o, n) {
this.renderHomeAwayList(t, e, o, n, function(t) {
return t.line;
}, function() {
return "U";
}, function(t) {
return t.over;
}, function(t) {
return t.under;
});
};
e.prototype.render1X2 = function(t, e, o, n) {
e.removeAllChildren();
if (o) {
"" != o.home && this.addOdd(e, this.createOddData(t, n, t.hn, r.HandicapTeam.HOME, "1", o.home));
"" != o.away && this.addOdd(e, this.createOddData(t, n, t.an, r.HandicapTeam.AWAY, "2", o.away));
"" != o.draw && this.addOdd(e, this.createOddData(t, n, t.hn, r.HandicapTeam.NONE, "X", o.draw));
}
};
i([ p(cc.Node) ], e.prototype, "keochap", void 0);
i([ p(cc.Node) ], e.prototype, "taixiu", void 0);
i([ p(cc.Node) ], e.prototype, "onextwox", void 0);
i([ p(cc.Node) ], e.prototype, "keochaph1", void 0);
i([ p(cc.Node) ], e.prototype, "taixiuh1", void 0);
i([ p(cc.Node) ], e.prototype, "onextwoxh1", void 0);
i([ p(cc.Prefab) ], e.prototype, "oddPrefab", void 0);
i([ p(cc.Node) ], e.prototype, "tranNode", void 0);
return i([ d ], e);
}(cc.Component);
o.default = u;
cc._RF.pop();
}, {
"./GameEnum": "GameEnum",
"./Helper": "Helper",
"./Odd": "Odd"
} ],
Tyso: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "5a698jROa5CaIJlH9IOS5kA", "Tyso");
var n, a = this && this.__extends || (n = function(t, e) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
n(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), i = this && this.__decorate || function(t, e, o, n) {
var a, i = arguments.length, r = i < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(t, e, o, n); else for (var c = t.length - 1; c >= 0; c--) (a = t[c]) && (r = (i < 3 ? a(r) : i > 3 ? a(e, o, r) : a(e, o)) || r);
return i > 3 && r && Object.defineProperty(e, o, r), r;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var r = t("./GameEnum"), c = t("./Helper"), l = t("./Odd"), s = cc._decorator, d = s.ccclass, p = s.property, u = function(t) {
a(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.doinha = null;
e.hoa = null;
e.doikhach = null;
e.doinhah1 = null;
e.hoah1 = null;
e.doikhachh1 = null;
e.oddPrefab = null;
e.tysoNode = null;
return e;
}
e.prototype.renderData = function(t, e) {
this.renderCorrectScore(t, e);
};
e.prototype.renderCorrectScore = function(t, e) {
var o = this, n = e.ft, a = e.ht;
this.renderTySoList(t, this.doinha, null == n ? void 0 : n.home, t.hn, r.HandicapTeam.HOME);
this.renderTySoList(t, this.doikhach, null == n ? void 0 : n.away, t.an, r.HandicapTeam.AWAY);
this.renderTySoList(t, this.hoa, null == n ? void 0 : n.draw, t.hn, r.HandicapTeam.NONE);
this.renderTySoList(t, this.doinhah1, null == a ? void 0 : a.home, t.hn, r.HandicapTeam.HOME);
this.renderTySoList(t, this.doikhachh1, null == a ? void 0 : a.away, t.an, r.HandicapTeam.AWAY);
this.renderTySoList(t, this.hoah1, null == a ? void 0 : a.draw, t.hn, r.HandicapTeam.NONE);
this.scheduleOnce(function() {
o.tysoNode.height = c.default.getMaxHeight([ o.doinha, o.doikhach, o.hoa, o.doinhah1, o.doikhachh1, o.hoah1 ]);
}, 0);
};
e.prototype.renderTySoList = function(t, e, o, n, a) {
e.removeAllChildren();
if (o && 0 !== o.length) for (var i = 0, c = o; i < c.length; i++) {
var l = c[i];
this.addOdd(e, this.createOddData(t, r.OddType.TYSO, n, a, l.score, l.odds));
}
};
e.prototype.createOddData = function(t, e, o, n, a, i) {
return {
teamH: t.hn,
teamA: t.an,
time: t.et,
betTitle: c.default.getBetTitle(e),
bet: c.default.getOddBetType(o, n, e),
p: a,
rate: i
};
};
e.prototype.addOdd = function(t, e) {
c.default.instantiateNode(t, this.oddPrefab).getComponent(l.default).setData(e);
};
i([ p(cc.Node) ], e.prototype, "doinha", void 0);
i([ p(cc.Node) ], e.prototype, "hoa", void 0);
i([ p(cc.Node) ], e.prototype, "doikhach", void 0);
i([ p(cc.Node) ], e.prototype, "doinhah1", void 0);
i([ p(cc.Node) ], e.prototype, "hoah1", void 0);
i([ p(cc.Node) ], e.prototype, "doikhachh1", void 0);
i([ p(cc.Prefab) ], e.prototype, "oddPrefab", void 0);
i([ p(cc.Node) ], e.prototype, "tysoNode", void 0);
return i([ d ], e);
}(cc.Component);
o.default = u;
cc._RF.pop();
}, {
"./GameEnum": "GameEnum",
"./Helper": "Helper",
"./Odd": "Odd"
} ],
UiLoading: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "4591c4buQtN5rOGfjAWnn+N", "UiLoading");
var n, a = this && this.__extends || (n = function(t, e) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
n(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), i = this && this.__decorate || function(t, e, o, n) {
var a, i = arguments.length, r = i < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(t, e, o, n); else for (var c = t.length - 1; c >= 0; c--) (a = t[c]) && (r = (i < 3 ? a(r) : i > 3 ? a(e, o, r) : a(e, o)) || r);
return i > 3 && r && Object.defineProperty(e, o, r), r;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var r = cc._decorator, c = r.ccclass, l = (r.property, function(t) {
a(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
e.prototype.activeLoading = function(t) {
this.node.active = t;
};
e.prototype.showLoading = function(t) {
void 0 === t && (t = 3e3);
this.node.active = !0;
this.unschedule(this.hideLoading);
this.scheduleOnce(this.hideLoading, t / 1e3);
};
e.prototype.hideLoading = function() {
this.node.active = !1;
};
return i([ c ], e);
}(cc.Component));
o.default = l;
cc._RF.pop();
}, {} ],
XemLive: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "6e07dx8ZUVACZ5NuwDAiyDi", "XemLive");
var n, a = this && this.__extends || (n = function(t, e) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
n(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), i = this && this.__decorate || function(t, e, o, n) {
var a, i = arguments.length, r = i < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(t, e, o, n); else for (var c = t.length - 1; c >= 0; c--) (a = t[c]) && (r = (i < 3 ? a(r) : i > 3 ? a(e, o, r) : a(e, o)) || r);
return i > 3 && r && Object.defineProperty(e, o, r), r;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var r = t("./TranDauLive"), c = t("./NetworkClient"), l = t("./PoolNode"), s = t("./TheoThaoConfig"), d = t("./TheThao"), p = cc._decorator, u = p.ccclass, h = p.property, f = function(t) {
a(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.XemLiveScrollView = null;
e.XemLiveContent = null;
e.GiaiDau = null;
e.renderBatchSize = 3;
e.sportUrl = s.TheoThaoConfig.xemlive;
e.renderToken = 0;
e._renderTick = null;
return e;
}
e.prototype.onEnable = function() {
this.loadData();
};
e.prototype.onDisable = function() {
if (this._renderTick) {
this.unschedule(this._renderTick);
this._renderTick = null;
}
};
e.prototype.loadData = function() {
var t = this;
d.default.getInstance().uiLoading.activeLoading(!0);
c.default.instance.getCb(this.sportUrl, function(e, o) {
e ? d.default.getInstance().uiLoading.activeLoading(!1) : t.renderSportData(o.response).then(function() {
d.default.getInstance().uiLoading.activeLoading(!1);
}).catch(function() {
d.default.getInstance().uiLoading.activeLoading(!1);
});
});
};
e.prototype.renderSportData = function(t) {
var e = this, o = ++this.renderToken;
this._renderTick && this.unschedule(this._renderTick);
this.clearToPool();
var n = this.XemLiveContent.getComponent(cc.Layout);
n && (n.enabled = !1);
var a = Array.isArray(t) ? t : [], i = 0, c = Math.max(1, 0 | this.renderBatchSize);
return new Promise(function(t) {
e._renderTick = function() {
if (o === e.renderToken) {
for (var s = 0; i < a.length && s < c; ) {
var d = a[i++], p = l.default.get("TheThao.TranDauLive", e.GiaiDau);
p.active = !0;
p.parent = e.XemLiveContent;
var u = p.getComponent(r.default);
u && u.setData(d, d.ln);
s++;
}
if (i >= a.length) {
if (n) {
n.enabled = !0;
n.updateLayout();
}
e.scheduleOnce(function() {
if (e.XemLiveScrollView) {
e.XemLiveScrollView.stopAutoScroll();
e.XemLiveScrollView.scrollToTop(0);
}
}, 0);
e.unschedule(e._renderTick);
e._renderTick = null;
t();
}
} else {
e.unschedule(e._renderTick);
t();
}
};
e.schedule(e._renderTick);
});
};
e.prototype.clearToPool = function() {
for (var t = function(t) {
var e = t.getComponent(r.default);
l.default.put("TheThao.TranDauLive", t, function() {
e && e.reset && e.reset();
});
}, e = 0, o = this.XemLiveContent.children.slice(); e < o.length; e++) t(o[e]);
};
i([ h(cc.ScrollView) ], e.prototype, "XemLiveScrollView", void 0);
i([ h(cc.Node) ], e.prototype, "XemLiveContent", void 0);
i([ h(cc.Prefab) ], e.prototype, "GiaiDau", void 0);
i([ h ], e.prototype, "renderBatchSize", void 0);
return i([ u ], e);
}(cc.Component);
o.default = f;
cc._RF.pop();
}, {
"./NetworkClient": "NetworkClient",
"./PoolNode": "PoolNode",
"./TheThao": "TheThao",
"./TheoThaoConfig": "TheoThaoConfig",
"./TranDauLive": "TranDauLive"
} ]
}, {}, [ "Bet", "BongDa", "CaiDat", "ChanLe", "ChanLeH2", "ChanLeNhaKhach", "ChiTietTranDau", "CoHoiKep", "DoiKhachTx", "DoiNhaTx", "GameEnum", "GiaiDau", "GiaiDauDB", "H2", "Helper", "HoanTien", "Keo", "NetworkClient", "Odd", "OddData", "PoolNode", "ScrollViewPaging", "TTChat", "TTChatNetworkClient", "TheThao", "TheThaoContext", "TheThaoTab", "TheoThaoConfig", "TongBanThang", "Tran", "TranDau", "TranDauDB", "TranDauGhim", "TranDauLive", "TranDauTab", "Tyso", "UiLoading", "XemLive" ]);