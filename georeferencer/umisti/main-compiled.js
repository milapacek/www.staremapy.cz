function aa() {
  return function() {
  }
}
function e(a) {
  return function() {
    return this[a]
  }
}
function ba(a) {
  return function() {
    return a
  }
}
var m, ca = ca || {}, p = this;
function da(a) {
  a = a.split(".");
  for(var b = p, c;c = a.shift();) {
    if(null != b[c]) {
      b = b[c]
    }else {
      return null
    }
  }
  return b
}
function s() {
}
function ea(a) {
  a.ga = function() {
    return a.jd ? a.jd : a.jd = new a
  }
}
function fa(a) {
  var b = typeof a;
  if("object" == b) {
    if(a) {
      if(a instanceof Array) {
        return"array"
      }
      if(a instanceof Object) {
        return b
      }
      var c = Object.prototype.toString.call(a);
      if("[object Window]" == c) {
        return"object"
      }
      if("[object Array]" == c || "number" == typeof a.length && "undefined" != typeof a.splice && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("splice")) {
        return"array"
      }
      if("[object Function]" == c || "undefined" != typeof a.call && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("call")) {
        return"function"
      }
    }else {
      return"null"
    }
  }else {
    if("function" == b && "undefined" == typeof a.call) {
      return"object"
    }
  }
  return b
}
function t(a) {
  return void 0 !== a
}
function u(a) {
  return"array" == fa(a)
}
function ga(a) {
  var b = fa(a);
  return"array" == b || "object" == b && "number" == typeof a.length
}
function v(a) {
  return"string" == typeof a
}
function ha(a) {
  return"number" == typeof a
}
function ia(a) {
  return"function" == fa(a)
}
function ja(a) {
  var b = typeof a;
  return"object" == b && null != a || "function" == b
}
function w(a) {
  return a[ka] || (a[ka] = ++la)
}
var ka = "closure_uid_" + (1E9 * Math.random() >>> 0), la = 0;
function ma(a, b, c) {
  return a.call.apply(a.bind, arguments)
}
function na(a, b, c) {
  if(!a) {
    throw Error();
  }
  if(2 < arguments.length) {
    var d = Array.prototype.slice.call(arguments, 2);
    return function() {
      var c = Array.prototype.slice.call(arguments);
      Array.prototype.unshift.apply(c, d);
      return a.apply(b, c)
    }
  }
  return function() {
    return a.apply(b, arguments)
  }
}
function x(a, b, c) {
  x = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? ma : na;
  return x.apply(null, arguments)
}
function oa(a, b) {
  var c = Array.prototype.slice.call(arguments, 1);
  return function() {
    var b = Array.prototype.slice.call(arguments);
    b.unshift.apply(b, c);
    return a.apply(this, b)
  }
}
var y = Date.now || function() {
  return+new Date
};
function pa(a) {
  var b = {}, c;
  for(c in b) {
    var d = ("" + b[c]).replace(/\$/g, "$$$$");
    a = a.replace(RegExp("\\{\\$" + c + "\\}", "gi"), d)
  }
  return a
}
function B(a, b) {
  function c() {
  }
  c.prototype = b.prototype;
  a.b = b.prototype;
  a.prototype = new c;
  a.prototype.constructor = a
}
;function qa(a) {
  Error.captureStackTrace ? Error.captureStackTrace(this, qa) : this.stack = Error().stack || "";
  a && (this.message = String(a))
}
B(qa, Error);
qa.prototype.name = "CustomError";
function ra(a, b) {
  for(var c = a.split("%s"), d = "", g = Array.prototype.slice.call(arguments, 1);g.length && 1 < c.length;) {
    d += c.shift() + g.shift()
  }
  return d + c.join("%s")
}
function sa(a) {
  if(!ta.test(a)) {
    return a
  }
  -1 != a.indexOf("\x26") && (a = a.replace(ua, "\x26amp;"));
  -1 != a.indexOf("\x3c") && (a = a.replace(va, "\x26lt;"));
  -1 != a.indexOf("\x3e") && (a = a.replace(wa, "\x26gt;"));
  -1 != a.indexOf('"') && (a = a.replace(xa, "\x26quot;"));
  return a
}
var ua = /&/g, va = /</g, wa = />/g, xa = /\"/g, ta = /[&<>\"]/;
function ya(a) {
  return String(a).replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, "\\$1").replace(/\x08/g, "\\x08")
}
;function za(a, b) {
  b.unshift(a);
  qa.call(this, ra.apply(null, b));
  b.shift();
  this.$e = a
}
B(za, qa);
za.prototype.name = "AssertionError";
function Aa(a, b) {
  throw new za("Failure" + (a ? ": " + a : ""), Array.prototype.slice.call(arguments, 1));
}
;var C = Array.prototype, Ba = C.indexOf ? function(a, b, c) {
  return C.indexOf.call(a, b, c)
} : function(a, b, c) {
  c = null == c ? 0 : 0 > c ? Math.max(0, a.length + c) : c;
  if(v(a)) {
    return v(b) && 1 == b.length ? a.indexOf(b, c) : -1
  }
  for(;c < a.length;c++) {
    if(c in a && a[c] === b) {
      return c
    }
  }
  return-1
}, Ca = C.forEach ? function(a, b, c) {
  C.forEach.call(a, b, c)
} : function(a, b, c) {
  for(var d = a.length, g = v(a) ? a.split("") : a, f = 0;f < d;f++) {
    f in g && b.call(c, g[f], f, a)
  }
}, Da = C.filter ? function(a, b, c) {
  return C.filter.call(a, b, c)
} : function(a, b, c) {
  for(var d = a.length, g = [], f = 0, h = v(a) ? a.split("") : a, k = 0;k < d;k++) {
    if(k in h) {
      var l = h[k];
      b.call(c, l, k, a) && (g[f++] = l)
    }
  }
  return g
}, Ea = C.map ? function(a, b, c) {
  return C.map.call(a, b, c)
} : function(a, b, c) {
  for(var d = a.length, g = Array(d), f = v(a) ? a.split("") : a, h = 0;h < d;h++) {
    h in f && (g[h] = b.call(c, f[h], h, a))
  }
  return g
}, Fa = C.every ? function(a, b, c) {
  return C.every.call(a, b, c)
} : function(a, b, c) {
  for(var d = a.length, g = v(a) ? a.split("") : a, f = 0;f < d;f++) {
    if(f in g && !b.call(c, g[f], f, a)) {
      return!1
    }
  }
  return!0
};
function Ga(a) {
  var b;
  a: {
    b = Ha;
    for(var c = a.length, d = v(a) ? a.split("") : a, g = 0;g < c;g++) {
      if(g in d && b.call(void 0, d[g], g, a)) {
        b = g;
        break a
      }
    }
    b = -1
  }
  return 0 > b ? null : v(a) ? a.charAt(b) : a[b]
}
function Ia(a, b) {
  return 0 <= Ba(a, b)
}
function Ja(a, b) {
  var c = Ba(a, b), d;
  (d = 0 <= c) && C.splice.call(a, c, 1);
  return d
}
function Ka(a) {
  var b = a.length;
  if(0 < b) {
    for(var c = Array(b), d = 0;d < b;d++) {
      c[d] = a[d]
    }
    return c
  }
  return[]
}
function La(a, b, c) {
  return 2 >= arguments.length ? C.slice.call(a, b) : C.slice.call(a, b, c)
}
;var Ma, Na, Oa, Pa, Qa;
function Ra() {
  return p.navigator ? p.navigator.userAgent : null
}
function Sa() {
  return p.navigator
}
Pa = Oa = Na = Ma = !1;
var Ta;
if(Ta = Ra()) {
  var Ua = Sa();
  Ma = 0 == Ta.lastIndexOf("Opera", 0);
  Na = !Ma && (-1 != Ta.indexOf("MSIE") || -1 != Ta.indexOf("Trident"));
  Oa = !Ma && -1 != Ta.indexOf("WebKit");
  Pa = !Ma && !Oa && !Na && "Gecko" == Ua.product
}
var Va = Ma, D = Na, E = Pa, F = Oa, Wa = Sa();
Qa = -1 != (Wa && Wa.platform || "").indexOf("Mac");
var Xa = !!Sa() && -1 != (Sa().appVersion || "").indexOf("X11");
function Ya() {
  var a = p.document;
  return a ? a.documentMode : void 0
}
var Za;
a: {
  var $a = "", ab;
  if(Va && p.opera) {
    var bb = p.opera.version, $a = "function" == typeof bb ? bb() : bb
  }else {
    if(E ? ab = /rv\:([^\);]+)(\)|;)/ : D ? ab = /\b(?:MSIE|rv)\s+([^\);]+)(\)|;)/ : F && (ab = /WebKit\/(\S+)/), ab) {
      var cb = ab.exec(Ra()), $a = cb ? cb[1] : ""
    }
  }
  if(D) {
    var db = Ya();
    if(db > parseFloat($a)) {
      Za = String(db);
      break a
    }
  }
  Za = $a
}
var eb = {};
function G(a) {
  var b;
  if(!(b = eb[a])) {
    b = 0;
    for(var c = String(Za).replace(/^[\s\xa0]+|[\s\xa0]+$/g, "").split("."), d = String(a).replace(/^[\s\xa0]+|[\s\xa0]+$/g, "").split("."), g = Math.max(c.length, d.length), f = 0;0 == b && f < g;f++) {
      var h = c[f] || "", k = d[f] || "", l = RegExp("(\\d*)(\\D*)", "g"), n = RegExp("(\\d*)(\\D*)", "g");
      do {
        var q = l.exec(h) || ["", "", ""], r = n.exec(k) || ["", "", ""];
        if(0 == q[0].length && 0 == r[0].length) {
          break
        }
        b = ((0 == q[1].length ? 0 : parseInt(q[1], 10)) < (0 == r[1].length ? 0 : parseInt(r[1], 10)) ? -1 : (0 == q[1].length ? 0 : parseInt(q[1], 10)) > (0 == r[1].length ? 0 : parseInt(r[1], 10)) ? 1 : 0) || ((0 == q[2].length) < (0 == r[2].length) ? -1 : (0 == q[2].length) > (0 == r[2].length) ? 1 : 0) || (q[2] < r[2] ? -1 : q[2] > r[2] ? 1 : 0)
      }while(0 == b)
    }
    b = eb[a] = 0 <= b
  }
  return b
}
var fb = p.document, gb = fb && D ? Ya() || ("CSS1Compat" == fb.compatMode ? parseInt(Za, 10) : 5) : void 0;
var hb, ib = !D || D && 9 <= gb, jb = !E && !D || D && D && 9 <= gb || E && G("1.9.1"), kb = D && !G("9");
function lb(a) {
  a = a.className;
  return v(a) && a.match(/\S+/g) || []
}
function H(a, b) {
  for(var c = lb(a), d = La(arguments, 1), g = c.length + d.length, f = c, h = 0;h < d.length;h++) {
    Ia(f, d[h]) || f.push(d[h])
  }
  a.className = c.join(" ");
  return c.length == g
}
function mb(a, b) {
  var c = lb(a), d = La(arguments, 1), g = nb(c, d);
  a.className = g.join(" ");
  return g.length == c.length - d.length
}
function nb(a, b) {
  return Da(a, function(a) {
    return!Ia(b, a)
  })
}
;function I(a, b) {
  this.x = t(a) ? a : 0;
  this.y = t(b) ? b : 0
}
I.prototype.va = function() {
  return new I(this.x, this.y)
};
I.prototype.toString = function() {
  return"(" + this.x + ", " + this.y + ")"
};
function ob(a, b) {
  return new I(a.x - b.x, a.y - b.y)
}
I.prototype.round = function() {
  this.x = Math.round(this.x);
  this.y = Math.round(this.y);
  return this
};
function pb(a, b) {
  this.width = a;
  this.height = b
}
pb.prototype.va = function() {
  return new pb(this.width, this.height)
};
pb.prototype.toString = function() {
  return"(" + this.width + " x " + this.height + ")"
};
pb.prototype.round = function() {
  this.width = Math.round(this.width);
  this.height = Math.round(this.height);
  return this
};
function qb(a, b) {
  for(var c in a) {
    b.call(void 0, a[c], c, a)
  }
}
function sb(a) {
  var b = [], c = 0, d;
  for(d in a) {
    b[c++] = a[d]
  }
  return b
}
function tb(a) {
  var b = [], c = 0, d;
  for(d in a) {
    b[c++] = d
  }
  return b
}
function ub() {
  var a = vb, b;
  for(b in a) {
    return!1
  }
  return!0
}
var wb = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");
function xb(a, b) {
  for(var c, d, g = 1;g < arguments.length;g++) {
    d = arguments[g];
    for(c in d) {
      a[c] = d[c]
    }
    for(var f = 0;f < wb.length;f++) {
      c = wb[f], Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c])
    }
  }
}
;function J(a) {
  return a ? new yb(K(a)) : hb || (hb = new yb)
}
function zb(a, b) {
  qb(b, function(b, d) {
    "style" == d ? a.style.cssText = b : "class" == d ? a.className = b : "for" == d ? a.htmlFor = b : d in Ab ? a.setAttribute(Ab[d], b) : 0 == d.lastIndexOf("aria-", 0) || 0 == d.lastIndexOf("data-", 0) ? a.setAttribute(d, b) : a[d] = b
  })
}
var Ab = {cellpadding:"cellPadding", cellspacing:"cellSpacing", colspan:"colSpan", frameborder:"frameBorder", height:"height", maxlength:"maxLength", role:"role", rowspan:"rowSpan", type:"type", usemap:"useMap", valign:"vAlign", width:"width"};
function Bb(a) {
  a = a.document;
  a = "CSS1Compat" == a.compatMode ? a.documentElement : a.body;
  return new pb(a.clientWidth, a.clientHeight)
}
function Cb(a) {
  return a ? a.parentWindow || a.defaultView : window
}
function Db(a, b, c, d) {
  function g(c) {
    c && b.appendChild(v(c) ? a.createTextNode(c) : c)
  }
  for(;d < c.length;d++) {
    var f = c[d];
    if(!ga(f) || ja(f) && 0 < f.nodeType) {
      g(f)
    }else {
      var h;
      a: {
        if(f && "number" == typeof f.length) {
          if(ja(f)) {
            h = "function" == typeof f.item || "string" == typeof f.item;
            break a
          }
          if(ia(f)) {
            h = "function" == typeof f.item;
            break a
          }
        }
        h = !1
      }
      Ca(h ? Ka(f) : f, g)
    }
  }
}
function L(a) {
  return document.createElement(a)
}
function Eb(a, b) {
  Db(K(a), a, arguments, 1)
}
function Fb(a) {
  for(var b;b = a.firstChild;) {
    a.removeChild(b)
  }
}
function Gb(a, b) {
  b.parentNode && b.parentNode.insertBefore(a, b)
}
function Hb(a) {
  return a && a.parentNode ? a.parentNode.removeChild(a) : null
}
function Ib(a, b) {
  if(a.contains && 1 == b.nodeType) {
    return a == b || a.contains(b)
  }
  if("undefined" != typeof a.compareDocumentPosition) {
    return a == b || Boolean(a.compareDocumentPosition(b) & 16)
  }
  for(;b && a != b;) {
    b = b.parentNode
  }
  return b == a
}
function K(a) {
  return 9 == a.nodeType ? a : a.ownerDocument || a.document
}
function Jb(a, b) {
  if("textContent" in a) {
    a.textContent = b
  }else {
    if(a.firstChild && 3 == a.firstChild.nodeType) {
      for(;a.lastChild != a.firstChild;) {
        a.removeChild(a.lastChild)
      }
      a.firstChild.data = b
    }else {
      Fb(a), a.appendChild(K(a).createTextNode(String(b)))
    }
  }
}
var Kb = {SCRIPT:1, STYLE:1, HEAD:1, IFRAME:1, OBJECT:1}, Lb = {IMG:" ", BR:"\n"};
function Mb(a) {
  var b = a.getAttributeNode("tabindex");
  return b && b.specified ? (a = a.tabIndex, ha(a) && 0 <= a && 32768 > a) : !1
}
function Nb(a, b) {
  b ? a.tabIndex = 0 : (a.tabIndex = -1, a.removeAttribute("tabIndex"))
}
function Ob(a) {
  var b = [];
  Pb(a, b, !1);
  return b.join("")
}
function Pb(a, b, c) {
  if(!(a.nodeName in Kb)) {
    if(3 == a.nodeType) {
      c ? b.push(String(a.nodeValue).replace(/(\r\n|\r|\n)/g, "")) : b.push(a.nodeValue)
    }else {
      if(a.nodeName in Lb) {
        b.push(Lb[a.nodeName])
      }else {
        for(a = a.firstChild;a;) {
          Pb(a, b, c), a = a.nextSibling
        }
      }
    }
  }
}
function yb(a) {
  this.j = a || p.document || document
}
m = yb.prototype;
m.m = J;
function Qb(a) {
  return a.j
}
m.c = function(a) {
  return v(a) ? this.j.getElementById(a) : a
};
m.i = function(a, b, c) {
  var d = this.j, g = arguments, f = g[0], h = g[1];
  if(!ib && h && (h.name || h.type)) {
    f = ["\x3c", f];
    h.name && f.push(' name\x3d"', sa(h.name), '"');
    if(h.type) {
      f.push(' type\x3d"', sa(h.type), '"');
      var k = {};
      xb(k, h);
      delete k.type;
      h = k
    }
    f.push("\x3e");
    f = f.join("")
  }
  f = d.createElement(f);
  h && (v(h) ? f.className = h : u(h) ? H.apply(null, [f].concat(h)) : zb(f, h));
  2 < g.length && Db(d, f, g, 2);
  return f
};
m.createElement = function(a) {
  return this.j.createElement(a)
};
m.createTextNode = function(a) {
  return this.j.createTextNode(String(a))
};
function Rb(a) {
  return"CSS1Compat" == a.j.compatMode
}
function Sb(a) {
  return a.j.parentWindow || a.j.defaultView
}
function Tb(a) {
  var b = a.j;
  a = F || "CSS1Compat" != b.compatMode ? b.body : b.documentElement;
  b = b.parentWindow || b.defaultView;
  return D && G("10") && b.pageYOffset != a.scrollTop ? new I(a.scrollLeft, a.scrollTop) : new I(b.pageXOffset || a.scrollLeft, b.pageYOffset || a.scrollTop)
}
m.appendChild = function(a, b) {
  a.appendChild(b)
};
m.yd = Fb;
m.hd = Gb;
m.removeNode = Hb;
m.Sc = function(a) {
  return jb && void 0 != a.children ? a.children : Da(a.childNodes, function(a) {
    return 1 == a.nodeType
  })
};
m.contains = Ib;
function Ub(a, b, c, d, g) {
  if(!(D || F && G("525"))) {
    return!0
  }
  if(Qa && g) {
    return Vb(a)
  }
  if(g && !d || !c && (17 == b || 18 == b || Qa && 91 == b)) {
    return!1
  }
  if(F && d && c) {
    switch(a) {
      case 220:
      ;
      case 219:
      ;
      case 221:
      ;
      case 192:
      ;
      case 186:
      ;
      case 189:
      ;
      case 187:
      ;
      case 188:
      ;
      case 190:
      ;
      case 191:
      ;
      case 192:
      ;
      case 222:
        return!1
    }
  }
  if(D && d && b == a) {
    return!1
  }
  switch(a) {
    case 13:
      return!(D && D && 9 <= gb);
    case 27:
      return!F
  }
  return Vb(a)
}
function Vb(a) {
  if(48 <= a && 57 >= a || 96 <= a && 106 >= a || 65 <= a && 90 >= a || F && 0 == a) {
    return!0
  }
  switch(a) {
    case 32:
    ;
    case 63:
    ;
    case 107:
    ;
    case 109:
    ;
    case 110:
    ;
    case 111:
    ;
    case 186:
    ;
    case 59:
    ;
    case 189:
    ;
    case 187:
    ;
    case 61:
    ;
    case 188:
    ;
    case 190:
    ;
    case 191:
    ;
    case 192:
    ;
    case 222:
    ;
    case 219:
    ;
    case 220:
    ;
    case 221:
      return!0;
    default:
      return!1
  }
}
function Wb(a) {
  switch(a) {
    case 61:
      return 187;
    case 59:
      return 186;
    case 224:
      return 91;
    case 0:
      return 224;
    default:
      return a
  }
}
;var Xb = !D || D && 9 <= gb, Yb = !D || D && 9 <= gb, Zb = D && !G("9");
!F || G("528");
E && G("1.9b") || D && G("8") || Va && G("9.5") || F && G("528");
E && !G("8") || D && G("9");
function M() {
  0 != $b && (this.Te = Error().stack, ac[w(this)] = this)
}
var $b = 0, ac = {};
M.prototype.Za = !1;
M.prototype.B = function() {
  if(!this.Za && (this.Za = !0, this.d(), 0 != $b)) {
    var a = w(this);
    delete ac[a]
  }
};
M.prototype.d = function() {
  if(this.ib) {
    for(;this.ib.length;) {
      this.ib.shift()()
    }
  }
};
function bc(a) {
  a && "function" == typeof a.B && a.B()
}
;function N(a, b) {
  this.type = a;
  this.currentTarget = this.target = b
}
m = N.prototype;
m.d = aa();
m.B = aa();
m.ra = !1;
m.defaultPrevented = !1;
m.Bd = !0;
m.stopPropagation = function() {
  this.ra = !0
};
m.preventDefault = function() {
  this.defaultPrevented = !0;
  this.Bd = !1
};
function cc(a) {
  a.preventDefault()
}
;function dc(a) {
  dc[" "](a);
  return a
}
dc[" "] = s;
function ec(a, b) {
  a && fc(this, a, b)
}
B(ec, N);
var gc = [1, 4, 2];
m = ec.prototype;
m.target = null;
m.relatedTarget = null;
m.offsetX = 0;
m.offsetY = 0;
m.clientX = 0;
m.clientY = 0;
m.screenX = 0;
m.screenY = 0;
m.button = 0;
m.keyCode = 0;
m.charCode = 0;
m.ctrlKey = !1;
m.altKey = !1;
m.shiftKey = !1;
m.metaKey = !1;
m.Bc = !1;
m.R = null;
function fc(a, b, c) {
  var d = a.type = b.type;
  N.call(a, d);
  a.target = b.target || b.srcElement;
  a.currentTarget = c;
  if(c = b.relatedTarget) {
    if(E) {
      var g;
      a: {
        try {
          dc(c.nodeName);
          g = !0;
          break a
        }catch(f) {
        }
        g = !1
      }
      g || (c = null)
    }
  }else {
    "mouseover" == d ? c = b.fromElement : "mouseout" == d && (c = b.toElement)
  }
  a.relatedTarget = c;
  a.offsetX = F || void 0 !== b.offsetX ? b.offsetX : b.layerX;
  a.offsetY = F || void 0 !== b.offsetY ? b.offsetY : b.layerY;
  a.clientX = void 0 !== b.clientX ? b.clientX : b.pageX;
  a.clientY = void 0 !== b.clientY ? b.clientY : b.pageY;
  a.screenX = b.screenX || 0;
  a.screenY = b.screenY || 0;
  a.button = b.button;
  a.keyCode = b.keyCode || 0;
  a.charCode = b.charCode || ("keypress" == d ? b.keyCode : 0);
  a.ctrlKey = b.ctrlKey;
  a.altKey = b.altKey;
  a.shiftKey = b.shiftKey;
  a.metaKey = b.metaKey;
  a.Bc = Qa ? b.metaKey : b.ctrlKey;
  a.state = b.state;
  a.R = b;
  b.defaultPrevented && a.preventDefault();
  delete a.ra
}
function hc(a) {
  return(Xb ? 0 == a.R.button : "click" == a.type ? !0 : !!(a.R.button & gc[0])) && !(F && Qa && a.ctrlKey)
}
m.stopPropagation = function() {
  ec.b.stopPropagation.call(this);
  this.R.stopPropagation ? this.R.stopPropagation() : this.R.cancelBubble = !0
};
m.preventDefault = function() {
  ec.b.preventDefault.call(this);
  var a = this.R;
  if(a.preventDefault) {
    a.preventDefault()
  }else {
    if(a.returnValue = !1, Zb) {
      try {
        if(a.ctrlKey || 112 <= a.keyCode && 123 >= a.keyCode) {
          a.keyCode = -1
        }
      }catch(b) {
      }
    }
  }
};
m.d = aa();
var ic = "closure_listenable_" + (1E6 * Math.random() | 0);
function jc(a) {
  return!(!a || !a[ic])
}
var kc = 0;
function lc(a, b, c, d, g, f) {
  this.ba = a;
  this.xd = b;
  this.src = c;
  this.type = d;
  this.capture = !!g;
  this.za = f;
  this.key = ++kc;
  this.ia = this.Fa = !1
}
function mc(a) {
  a.ia = !0;
  a.ba = null;
  a.xd = null;
  a.src = null;
  a.za = null
}
;var nc = {}, O = {}, oc = {}, pc = {};
function Q(a, b, c, d, g) {
  if(u(b)) {
    for(var f = 0;f < b.length;f++) {
      Q(a, b[f], c, d, g)
    }
    return null
  }
  c = qc(c);
  return jc(a) ? a.e(b, c, d, g) : rc(a, b, c, !1, d, g)
}
function rc(a, b, c, d, g, f) {
  if(!b) {
    throw Error("Invalid event type");
  }
  g = !!g;
  var h = O;
  b in h || (h[b] = {H:0});
  h = h[b];
  g in h || (h[g] = {H:0}, h.H++);
  var h = h[g], k = w(a), l;
  if(h[k]) {
    l = h[k];
    for(var n = 0;n < l.length;n++) {
      if(h = l[n], h.ba == c && h.za == f) {
        if(h.ia) {
          break
        }
        d || (l[n].Fa = !1);
        return l[n]
      }
    }
  }else {
    l = h[k] = [], h.H++
  }
  n = sc();
  h = new lc(c, n, a, b, g, f);
  h.Fa = d;
  n.src = a;
  n.ba = h;
  l.push(h);
  oc[k] || (oc[k] = []);
  oc[k].push(h);
  a.addEventListener ? a.addEventListener(b, n, g) : a.attachEvent(b in pc ? pc[b] : pc[b] = "on" + b, n);
  return nc[h.key] = h
}
function sc() {
  var a = tc, b = Yb ? function(c) {
    return a.call(b.src, b.ba, c)
  } : function(c) {
    c = a.call(b.src, b.ba, c);
    if(!c) {
      return c
    }
  };
  return b
}
function uc(a, b, c, d, g) {
  if(u(b)) {
    for(var f = 0;f < b.length;f++) {
      uc(a, b[f], c, d, g)
    }
    return null
  }
  c = qc(c);
  return jc(a) ? a.Kb(b, c, d, g) : rc(a, b, c, !0, d, g)
}
function vc(a, b, c, d, g) {
  if(u(b)) {
    for(var f = 0;f < b.length;f++) {
      vc(a, b[f], c, d, g)
    }
  }else {
    if(c = qc(c), jc(a)) {
      a.u(b, c, d, g)
    }else {
      if(d = !!d, a = wc(a, b, d)) {
        for(f = 0;f < a.length;f++) {
          if(a[f].ba == c && a[f].capture == d && a[f].za == g) {
            xc(a[f]);
            break
          }
        }
      }
    }
  }
}
function xc(a) {
  if(ha(a) || !a || a.ia) {
    return!1
  }
  var b = a.src;
  if(jc(b)) {
    return yc(b.ea, a)
  }
  var c = a.type, d = a.xd, g = a.capture;
  b.removeEventListener ? b.removeEventListener(c, d, g) : b.detachEvent && b.detachEvent(c in pc ? pc[c] : pc[c] = "on" + c, d);
  b = w(b);
  oc[b] && (d = oc[b], Ja(d, a), 0 == d.length && delete oc[b]);
  mc(a);
  if(d = O[c][g][b]) {
    Ja(d, a), 0 == d.length && (delete O[c][g][b], O[c][g].H--), 0 == O[c][g].H && (delete O[c][g], O[c].H--), 0 == O[c].H && delete O[c]
  }
  delete nc[a.key];
  return!0
}
function wc(a, b, c) {
  var d = O;
  return b in d && (d = d[b], c in d && (d = d[c], a = w(a), d[a])) ? d[a] : null
}
function zc(a, b, c) {
  var d = 1;
  b = w(b);
  if(a[b]) {
    for(a = Ka(a[b]), b = 0;b < a.length;b++) {
      var g = a[b];
      g && !g.ia && (d &= !1 !== Ac(g, c))
    }
  }
  return Boolean(d)
}
function Ac(a, b) {
  var c = a.ba, d = a.za || a.src;
  a.Fa && xc(a);
  return c.call(d, b)
}
function tc(a, b) {
  if(a.ia) {
    return!0
  }
  var c = a.type, d = O;
  if(!(c in d)) {
    return!0
  }
  var d = d[c], g, f;
  if(!Yb) {
    g = b || da("window.event");
    var c = !0 in d, h = !1 in d;
    if(c) {
      if(0 > g.keyCode || void 0 != g.returnValue) {
        return!0
      }
      a: {
        var k = !1;
        if(0 == g.keyCode) {
          try {
            g.keyCode = -1;
            break a
          }catch(l) {
            k = !0
          }
        }
        if(k || void 0 == g.returnValue) {
          g.returnValue = !0
        }
      }
    }
    k = new ec;
    fc(k, g, this);
    g = !0;
    try {
      if(c) {
        for(var n = [], q = k.currentTarget;q;q = q.parentNode) {
          n.push(q)
        }
        f = d[!0];
        for(var r = n.length - 1;!k.ra && 0 <= r;r--) {
          k.currentTarget = n[r], g &= zc(f, n[r], k)
        }
        if(h) {
          for(f = d[!1], r = 0;!k.ra && r < n.length;r++) {
            k.currentTarget = n[r], g &= zc(f, n[r], k)
          }
        }
      }else {
        g = Ac(a, k)
      }
    }finally {
      n && (n.length = 0)
    }
    return g
  }
  d = new ec(b, this);
  return g = Ac(a, d)
}
var Bc = "__closure_events_fn_" + (1E9 * Math.random() >>> 0);
function qc(a) {
  return ia(a) ? a : a[Bc] || (a[Bc] = function(b) {
    return a.handleEvent(b)
  })
}
;function Cc(a) {
  this.src = a;
  this.D = {};
  this.Wb = 0
}
Cc.prototype.add = function(a, b, c, d, g) {
  var f = this.D[a];
  f || (f = this.D[a] = [], this.Wb++);
  var h = Dc(f, b, d, g);
  -1 < h ? (a = f[h], c || (a.Fa = !1)) : (a = new lc(b, null, this.src, a, !!d, g), a.Fa = c, f.push(a));
  return a
};
Cc.prototype.remove = function(a, b, c, d) {
  if(!(a in this.D)) {
    return!1
  }
  var g = this.D[a];
  b = Dc(g, b, c, d);
  return-1 < b ? (mc(g[b]), C.splice.call(g, b, 1), 0 == g.length && (delete this.D[a], this.Wb--), !0) : !1
};
function yc(a, b) {
  var c = b.type;
  if(!(c in a.D)) {
    return!1
  }
  var d = Ja(a.D[c], b);
  d && (mc(b), 0 == a.D[c].length && (delete a.D[c], a.Wb--));
  return d
}
Cc.prototype.Ca = function(a) {
  var b = 0, c;
  for(c in this.D) {
    if(!a || c == a) {
      for(var d = this.D[c], g = 0;g < d.length;g++) {
        ++b, d[g].ia = !0
      }
      delete this.D[c];
      this.Wb--
    }
  }
  return b
};
Cc.prototype.mc = function(a, b, c, d) {
  a = this.D[a];
  var g = -1;
  a && (g = Dc(a, b, c, d));
  return-1 < g ? a[g] : null
};
function Dc(a, b, c, d) {
  for(var g = 0;g < a.length;++g) {
    var f = a[g];
    if(!f.ia && f.ba == b && f.capture == !!c && f.za == d) {
      return g
    }
  }
  return-1
}
;function R() {
  M.call(this);
  this.ea = new Cc(this);
  this.Rd = this
}
B(R, M);
R.prototype[ic] = !0;
m = R.prototype;
m.Nb = null;
m.Hc = function(a) {
  this.Nb = a
};
m.addEventListener = function(a, b, c, d) {
  Q(this, a, b, c, d)
};
m.removeEventListener = function(a, b, c, d) {
  vc(this, a, b, c, d)
};
m.dispatchEvent = function(a) {
  var b, c = this.Nb;
  if(c) {
    for(b = [];c;c = c.Nb) {
      b.push(c)
    }
  }
  var c = this.Rd, d = a.type || a;
  if(v(a)) {
    a = new N(a, c)
  }else {
    if(a instanceof N) {
      a.target = a.target || c
    }else {
      var g = a;
      a = new N(d, c);
      xb(a, g)
    }
  }
  var g = !0, f;
  if(b) {
    for(var h = b.length - 1;!a.ra && 0 <= h;h--) {
      f = a.currentTarget = b[h], g = Ec(f, d, !0, a) && g
    }
  }
  a.ra || (f = a.currentTarget = c, g = Ec(f, d, !0, a) && g, a.ra || (g = Ec(f, d, !1, a) && g));
  if(b) {
    for(h = 0;!a.ra && h < b.length;h++) {
      f = a.currentTarget = b[h], g = Ec(f, d, !1, a) && g
    }
  }
  return g
};
m.d = function() {
  R.b.d.call(this);
  this.ea && this.ea.Ca(void 0);
  this.Nb = null
};
m.e = function(a, b, c, d) {
  return this.ea.add(a, b, !1, c, d)
};
m.Kb = function(a, b, c, d) {
  return this.ea.add(a, b, !0, c, d)
};
m.u = function(a, b, c, d) {
  return this.ea.remove(a, b, c, d)
};
function Ec(a, b, c, d) {
  b = a.ea.D[b];
  if(!b) {
    return!0
  }
  b = Ka(b);
  for(var g = !0, f = 0;f < b.length;++f) {
    var h = b[f];
    if(h && !h.ia && h.capture == c) {
      var k = h.ba, l = h.za || h.src;
      h.Fa && yc(a.ea, h);
      g = !1 !== k.call(l, d) && g
    }
  }
  return g && !1 != d.Bd
}
m.mc = function(a, b, c, d) {
  return this.ea.mc(a, b, c, d)
};
function Fc(a, b) {
  R.call(this);
  a && Gc(this, a, b)
}
B(Fc, R);
m = Fc.prototype;
m.a = null;
m.Gb = null;
m.tc = null;
m.Hb = null;
m.J = -1;
m.pa = -1;
m.dc = !1;
var Hc = {3:13, 12:144, 63232:38, 63233:40, 63234:37, 63235:39, 63236:112, 63237:113, 63238:114, 63239:115, 63240:116, 63241:117, 63242:118, 63243:119, 63244:120, 63245:121, 63246:122, 63247:123, 63248:44, 63272:46, 63273:36, 63275:35, 63276:33, 63277:34, 63289:144, 63302:45}, Ic = {Up:38, Down:40, Left:37, Right:39, Enter:13, F1:112, F2:113, F3:114, F4:115, F5:116, F6:117, F7:118, F8:119, F9:120, F10:121, F11:122, F12:123, "U+007F":46, Home:36, End:35, PageUp:33, PageDown:34, Insert:45}, Jc = D || 
F && G("525"), Kc = Qa && E;
m = Fc.prototype;
m.ee = function(a) {
  F && (17 == this.J && !a.ctrlKey || 18 == this.J && !a.altKey || Qa && 91 == this.J && !a.metaKey) && (this.pa = this.J = -1);
  -1 == this.J && (a.ctrlKey && 17 != a.keyCode ? this.J = 17 : a.altKey && 18 != a.keyCode ? this.J = 18 : a.metaKey && 91 != a.keyCode && (this.J = 91));
  Jc && !Ub(a.keyCode, this.J, a.shiftKey, a.ctrlKey, a.altKey) ? this.handleEvent(a) : (this.pa = E ? Wb(a.keyCode) : a.keyCode, Kc && (this.dc = a.altKey))
};
m.ge = function(a) {
  this.pa = this.J = -1;
  this.dc = a.altKey
};
m.handleEvent = function(a) {
  var b = a.R, c, d, g = b.altKey;
  D && "keypress" == a.type ? (c = this.pa, d = 13 != c && 27 != c ? b.keyCode : 0) : F && "keypress" == a.type ? (c = this.pa, d = 0 <= b.charCode && 63232 > b.charCode && Vb(c) ? b.charCode : 0) : Va ? (c = this.pa, d = Vb(c) ? b.keyCode : 0) : (c = b.keyCode || this.pa, d = b.charCode || 0, Kc && (g = this.dc), Qa && (63 == d && 224 == c) && (c = 191));
  var f = c, h = b.keyIdentifier;
  c ? 63232 <= c && c in Hc ? f = Hc[c] : 25 == c && a.shiftKey && (f = 9) : h && h in Ic && (f = Ic[h]);
  a = f == this.J;
  this.J = f;
  b = new Lc(f, d, a, b);
  b.altKey = g;
  this.dispatchEvent(b)
};
m.c = e("a");
function Gc(a, b, c) {
  a.Hb && a.detach();
  a.a = b;
  a.Gb = Q(a.a, "keypress", a, c);
  a.tc = Q(a.a, "keydown", a.ee, c, a);
  a.Hb = Q(a.a, "keyup", a.ge, c, a)
}
m.detach = function() {
  this.Gb && (xc(this.Gb), xc(this.tc), xc(this.Hb), this.Hb = this.tc = this.Gb = null);
  this.a = null;
  this.pa = this.J = -1
};
m.d = function() {
  Fc.b.d.call(this);
  this.detach()
};
function Lc(a, b, c, d) {
  d && fc(this, d, void 0);
  this.type = "key";
  this.keyCode = a;
  this.charCode = b;
  this.repeat = c
}
B(Lc, ec);
var Mc;
function Nc(a, b) {
  b ? a.setAttribute("role", b) : a.removeAttribute("role")
}
function S(a, b, c) {
  ga(c) && (c = c.join(" "));
  var d = "aria-" + b;
  "" === c || void 0 == c ? (Mc || (Mc = {atomic:!1, autocomplete:"none", dropeffect:"none", haspopup:!1, live:"off", multiline:!1, multiselectable:!1, orientation:"vertical", readonly:!1, relevant:"additions text", required:!1, sort:"none", busy:!1, disabled:!1, hidden:!1, invalid:"false"}), c = Mc, b in c ? a.setAttribute(d, c[b]) : a.removeAttribute(d)) : a.setAttribute(d, c)
}
function Oc(a, b) {
  var c = "";
  b && (c = b.id);
  S(a, "activedescendant", c)
}
;function Pc(a) {
  M.call(this);
  this.Ja = a;
  this.o = {}
}
B(Pc, M);
var Qc = [];
m = Pc.prototype;
m.e = function(a, b, c, d, g) {
  u(b) || (Qc[0] = b, b = Qc);
  for(var f = 0;f < b.length;f++) {
    var h = Q(a, b[f], c || this, d || !1, g || this.Ja || this);
    if(!h) {
      break
    }
    this.o[h.key] = h
  }
  return this
};
m.Kb = function(a, b, c, d, g) {
  if(u(b)) {
    for(var f = 0;f < b.length;f++) {
      this.Kb(a, b[f], c, d, g)
    }
  }else {
    a = uc(a, b, c || this, d, g || this.Ja || this), this.o[a.key] = a
  }
  return this
};
m.u = function(a, b, c, d, g) {
  if(u(b)) {
    for(var f = 0;f < b.length;f++) {
      this.u(a, b[f], c, d, g)
    }
  }else {
    a: {
      if(g = g || this.Ja || this, d = !!d, c = qc(c || this), jc(a)) {
        a = a.mc(b, c, d, g)
      }else {
        if(a = wc(a, b, d)) {
          for(b = 0;b < a.length;b++) {
            if(!a[b].ia && a[b].ba == c && a[b].capture == d && a[b].za == g) {
              a = a[b];
              break a
            }
          }
        }
        a = null
      }
    }
    a && (xc(a), delete this.o[a.key])
  }
  return this
};
m.Ca = function() {
  qb(this.o, xc);
  this.o = {}
};
m.d = function() {
  Pc.b.d.call(this);
  this.Ca()
};
m.handleEvent = function() {
  throw Error("EventHandler.handleEvent not implemented");
};
function T(a, b, c, d) {
  this.top = a;
  this.right = b;
  this.bottom = c;
  this.left = d
}
T.prototype.va = function() {
  return new T(this.top, this.right, this.bottom, this.left)
};
T.prototype.toString = function() {
  return"(" + this.top + "t, " + this.right + "r, " + this.bottom + "b, " + this.left + "l)"
};
T.prototype.contains = function(a) {
  return this && a ? a instanceof T ? a.left >= this.left && a.right <= this.right && a.top >= this.top && a.bottom <= this.bottom : a.x >= this.left && a.x <= this.right && a.y >= this.top && a.y <= this.bottom : !1
};
T.prototype.round = function() {
  this.top = Math.round(this.top);
  this.right = Math.round(this.right);
  this.bottom = Math.round(this.bottom);
  this.left = Math.round(this.left);
  return this
};
function U(a, b, c, d) {
  this.left = a;
  this.top = b;
  this.width = c;
  this.height = d
}
U.prototype.va = function() {
  return new U(this.left, this.top, this.width, this.height)
};
U.prototype.toString = function() {
  return"(" + this.left + ", " + this.top + " - " + this.width + "w x " + this.height + "h)"
};
U.prototype.contains = function(a) {
  return a instanceof U ? this.left <= a.left && this.left + this.width >= a.left + a.width && this.top <= a.top && this.top + this.height >= a.top + a.height : a.x >= this.left && a.x <= this.left + this.width && a.y >= this.top && a.y <= this.top + this.height
};
U.prototype.round = function() {
  this.left = Math.round(this.left);
  this.top = Math.round(this.top);
  this.width = Math.round(this.width);
  this.height = Math.round(this.height);
  return this
};
function V(a, b) {
  var c = K(a);
  return c.defaultView && c.defaultView.getComputedStyle && (c = c.defaultView.getComputedStyle(a, null)) ? c[b] || c.getPropertyValue(b) || "" : ""
}
function Rc(a, b) {
  return V(a, b) || (a.currentStyle ? a.currentStyle[b] : null) || a.style && a.style[b]
}
function Sc(a) {
  return Rc(a, "position")
}
function Tc(a, b, c) {
  var d, g = E && (Qa || Xa) && G("1.9");
  b instanceof I ? (d = b.x, b = b.y) : (d = b, b = c);
  a.style.left = Uc(d, g);
  a.style.top = Uc(b, g)
}
function Vc(a) {
  var b;
  try {
    b = a.getBoundingClientRect()
  }catch(c) {
    return{left:0, top:0, right:0, bottom:0}
  }
  D && (a = a.ownerDocument, b.left -= a.documentElement.clientLeft + a.body.clientLeft, b.top -= a.documentElement.clientTop + a.body.clientTop);
  return b
}
function Wc(a) {
  if(D && !(D && 8 <= gb)) {
    return a.offsetParent
  }
  var b = K(a), c = Rc(a, "position"), d = "fixed" == c || "absolute" == c;
  for(a = a.parentNode;a && a != b;a = a.parentNode) {
    if(c = Rc(a, "position"), d = d && "static" == c && a != b.documentElement && a != b.body, !d && (a.scrollWidth > a.clientWidth || a.scrollHeight > a.clientHeight || "fixed" == c || "absolute" == c || "relative" == c)) {
      return a
    }
  }
  return null
}
function Xc(a) {
  for(var b = new T(0, Infinity, Infinity, 0), c = J(a), d = c.j.body, g = c.j.documentElement, f = F || "CSS1Compat" != c.j.compatMode ? c.j.body : c.j.documentElement;a = Wc(a);) {
    if(!(D && 0 == a.clientWidth || F && 0 == a.clientHeight && a == d || a == d || a == g || "visible" == Rc(a, "overflow"))) {
      var h = Yc(a), k;
      k = a;
      if(E && !G("1.9")) {
        var l = parseFloat(V(k, "borderLeftWidth"));
        if(Zc(k)) {
          var n = k.offsetWidth - k.clientWidth - l - parseFloat(V(k, "borderRightWidth")), l = l + n
        }
        k = new I(l, parseFloat(V(k, "borderTopWidth")))
      }else {
        k = new I(k.clientLeft, k.clientTop)
      }
      h.x += k.x;
      h.y += k.y;
      b.top = Math.max(b.top, h.y);
      b.right = Math.min(b.right, h.x + a.clientWidth);
      b.bottom = Math.min(b.bottom, h.y + a.clientHeight);
      b.left = Math.max(b.left, h.x)
    }
  }
  d = f.scrollLeft;
  f = f.scrollTop;
  b.left = Math.max(b.left, d);
  b.top = Math.max(b.top, f);
  c = Bb(Sb(c) || window);
  b.right = Math.min(b.right, d + c.width);
  b.bottom = Math.min(b.bottom, f + c.height);
  return 0 <= b.top && 0 <= b.left && b.bottom > b.top && b.right > b.left ? b : null
}
function Yc(a) {
  var b, c = K(a), d = Rc(a, "position"), g = E && c.getBoxObjectFor && !a.getBoundingClientRect && "absolute" == d && (b = c.getBoxObjectFor(a)) && (0 > b.screenX || 0 > b.screenY), f = new I(0, 0), h;
  b = c ? K(c) : document;
  h = !D || D && 9 <= gb || Rb(J(b)) ? b.documentElement : b.body;
  if(a == h) {
    return f
  }
  if(a.getBoundingClientRect) {
    b = Vc(a), a = Tb(J(c)), f.x = b.left + a.x, f.y = b.top + a.y
  }else {
    if(c.getBoxObjectFor && !g) {
      b = c.getBoxObjectFor(a), a = c.getBoxObjectFor(h), f.x = b.screenX - a.screenX, f.y = b.screenY - a.screenY
    }else {
      b = a;
      do {
        f.x += b.offsetLeft;
        f.y += b.offsetTop;
        b != a && (f.x += b.clientLeft || 0, f.y += b.clientTop || 0);
        if(F && "fixed" == Sc(b)) {
          f.x += c.body.scrollLeft;
          f.y += c.body.scrollTop;
          break
        }
        b = b.offsetParent
      }while(b && b != a);
      if(Va || F && "absolute" == d) {
        f.y -= c.body.offsetTop
      }
      for(b = a;(b = Wc(b)) && b != c.body && b != h;) {
        f.x -= b.scrollLeft, Va && "TR" == b.tagName || (f.y -= b.scrollTop)
      }
    }
  }
  return f
}
function $c(a, b, c) {
  if(b instanceof pb) {
    c = b.height, b = b.width
  }else {
    if(void 0 == c) {
      throw Error("missing height argument");
    }
  }
  a.style.width = Uc(b, !0);
  a.style.height = Uc(c, !0)
}
function Uc(a, b) {
  "number" == typeof a && (a = (b ? Math.round(a) : a) + "px");
  return a
}
function ad(a) {
  var b = bd;
  if("none" != Rc(a, "display")) {
    return b(a)
  }
  var c = a.style, d = c.display, g = c.visibility, f = c.position;
  c.visibility = "hidden";
  c.position = "absolute";
  c.display = "inline";
  a = b(a);
  c.display = d;
  c.position = f;
  c.visibility = g;
  return a
}
function bd(a) {
  var b = a.offsetWidth, c = a.offsetHeight, d = F && !b && !c;
  return t(b) && !d || !a.getBoundingClientRect ? new pb(b, c) : (a = Vc(a), new pb(a.right - a.left, a.bottom - a.top))
}
function cd(a, b) {
  var c = a.style;
  "opacity" in c ? c.opacity = b : "MozOpacity" in c ? c.MozOpacity = b : "filter" in c && (c.filter = "" === b ? "" : "alpha(opacity\x3d" + 100 * b + ")")
}
function W(a, b) {
  a.style.display = b ? "" : "none"
}
function Zc(a) {
  return"rtl" == Rc(a, "direction")
}
var dd = E ? "MozUserSelect" : F ? "WebkitUserSelect" : null;
function ed(a, b, c) {
  c = c ? null : a.getElementsByTagName("*");
  if(dd) {
    if(b = b ? "none" : "", a.style[dd] = b, c) {
      a = 0;
      for(var d;d = c[a];a++) {
        d.style[dd] = b
      }
    }
  }else {
    if(D || Va) {
      if(b = b ? "on" : "", a.setAttribute("unselectable", b), c) {
        for(a = 0;d = c[a];a++) {
          d.setAttribute("unselectable", b)
        }
      }
    }
  }
}
function fd(a, b) {
  if(/^\d+px?$/.test(b)) {
    return parseInt(b, 10)
  }
  var c = a.style.left, d = a.runtimeStyle.left;
  a.runtimeStyle.left = a.currentStyle.left;
  a.style.left = b;
  var g = a.style.pixelLeft;
  a.style.left = c;
  a.runtimeStyle.left = d;
  return g
}
function gd(a, b) {
  var c = a.currentStyle ? a.currentStyle[b] : null;
  return c ? fd(a, c) : 0
}
var hd = {thin:2, medium:4, thick:6};
function id(a, b) {
  if("none" == (a.currentStyle ? a.currentStyle[b + "Style"] : null)) {
    return 0
  }
  var c = a.currentStyle ? a.currentStyle[b + "Width"] : null;
  return c in hd ? hd[c] : fd(a, c)
}
function jd(a) {
  if(D) {
    var b = id(a, "borderLeft"), c = id(a, "borderRight"), d = id(a, "borderTop");
    a = id(a, "borderBottom");
    return new T(d, c, a, b)
  }
  b = V(a, "borderLeftWidth");
  c = V(a, "borderRightWidth");
  d = V(a, "borderTopWidth");
  a = V(a, "borderBottomWidth");
  return new T(parseFloat(d), parseFloat(c), parseFloat(a), parseFloat(b))
}
var kd = /matrix\([0-9\.\-]+, [0-9\.\-]+, [0-9\.\-]+, [0-9\.\-]+, ([0-9\.\-]+)p?x?, ([0-9\.\-]+)p?x?\)/;
function ld() {
}
ea(ld);
ld.prototype.se = 0;
function md(a) {
  return":" + (a.se++).toString(36)
}
ld.ga();
function nd(a) {
  R.call(this);
  this.s = a || J();
  this.U = od
}
B(nd, R);
nd.prototype.cd = ld.ga();
var od = null;
function pd(a, b) {
  switch(a) {
    case 1:
      return b ? "disable" : "enable";
    case 2:
      return b ? "highlight" : "unhighlight";
    case 4:
      return b ? "activate" : "deactivate";
    case 8:
      return b ? "select" : "unselect";
    case 16:
      return b ? "check" : "uncheck";
    case 32:
      return b ? "focus" : "blur";
    case 64:
      return b ? "open" : "close"
  }
  throw Error("Invalid component state");
}
m = nd.prototype;
m.aa = null;
m.C = !1;
m.a = null;
m.U = null;
m.oe = null;
m.w = null;
m.L = null;
m.sb = null;
m.Ne = !1;
m.c = e("a");
m.T = function() {
  return this.Ia || (this.Ia = new Pc(this))
};
m.getParent = e("w");
m.Hc = function(a) {
  if(this.w && this.w != a) {
    throw Error("Method not supported");
  }
  nd.b.Hc.call(this, a)
};
m.m = e("s");
m.i = function() {
  this.a = this.s.createElement("div")
};
m.sa = function(a) {
  if(this.C) {
    throw Error("Component already rendered");
  }
  this.a || this.i();
  a ? a.insertBefore(this.a, null) : this.s.j.body.appendChild(this.a);
  this.w && !this.w.C || this.Y()
};
m.Y = function() {
  this.C = !0;
  qd(this, function(a) {
    !a.C && a.c() && a.Y()
  })
};
m.fa = function() {
  qd(this, function(a) {
    a.C && a.fa()
  });
  this.Ia && this.Ia.Ca();
  this.C = !1
};
m.d = function() {
  this.C && this.fa();
  this.Ia && (this.Ia.B(), delete this.Ia);
  qd(this, function(a) {
    a.B()
  });
  !this.Ne && this.a && Hb(this.a);
  this.w = this.oe = this.a = this.sb = this.L = null;
  nd.b.d.call(this)
};
m.ab = e("a");
m.ld = function() {
  null == this.U && (this.U = Zc(this.C ? this.a : this.s.j.body));
  return this.U
};
m.Qa = function(a) {
  if(this.C) {
    throw Error("Component already rendered");
  }
  this.U = a
};
function qd(a, b) {
  a.L && Ca(a.L, b, void 0)
}
m.removeChild = function(a, b) {
  if(a) {
    var c = v(a) ? a : a.aa || (a.aa = md(a.cd)), d;
    this.sb && c ? (d = this.sb, d = (c in d ? d[c] : void 0) || null) : d = null;
    a = d;
    if(c && a) {
      d = this.sb;
      c in d && delete d[c];
      Ja(this.L, a);
      b && (a.fa(), a.a && Hb(a.a));
      c = a;
      if(null == c) {
        throw Error("Unable to set parent component");
      }
      c.w = null;
      nd.b.Hc.call(c, null)
    }
  }
  if(!a) {
    throw Error("Child is not in parent component");
  }
  return a
};
m.yd = function(a) {
  for(var b = [];this.L && 0 != this.L.length;) {
    b.push(this.removeChild(this.L ? this.L[0] || null : null, a))
  }
  return b
};
function rd() {
}
var sd;
ea(rd);
m = rd.prototype;
m.vb = aa();
m.i = function(a) {
  var b = a.m().i("div", td(this, a).join(" "), a.X);
  ud(this, a, b);
  return b
};
m.ab = function(a) {
  return a
};
m.$a = function(a, b, c) {
  if(a = a.c ? a.c() : a) {
    if(D && !G("7")) {
      var d = vd(lb(a), b);
      d.push(b);
      oa(c ? H : mb, a).apply(null, d)
    }else {
      c ? H(a, b) : mb(a, b)
    }
  }
};
m.fd = function(a) {
  a.ld() && this.Qa(a.c(), !0);
  a.isEnabled() && this.Rb(a, a.n)
};
function ud(a, b, c) {
  b.n || S(c, "hidden", !b.n);
  b.isEnabled() || a.ja(c, 1, !b.isEnabled());
  b.F & 8 && a.ja(c, 8, !!(b.h & 8));
  b.F & 16 && a.ja(c, 16, !!(b.h & 16));
  b.F & 64 && a.ja(c, 64, b.oa())
}
m.Pb = function(a, b) {
  ed(a, !b, !D && !Va)
};
m.Qa = function(a, b) {
  this.$a(a, this.S() + "-rtl", b)
};
m.kd = function(a) {
  var b;
  return a.F & 32 && (b = a.ya()) ? Mb(b) : !1
};
m.Rb = function(a, b) {
  var c;
  if(a.F & 32 && (c = a.ya())) {
    if(!b && a.h & 32) {
      try {
        c.blur()
      }catch(d) {
      }
      a.h & 32 && a.Ab(null)
    }
    Mb(c) != b && Nb(c, b)
  }
};
m.K = function(a, b) {
  W(a, b);
  a && S(a, "hidden", !b)
};
m.P = function(a, b, c) {
  var d = a.c();
  if(d) {
    var g = wd(this, b);
    g && this.$a(a, g, c);
    this.ja(d, b, c)
  }
};
m.ja = function(a, b, c) {
  sd || (sd = {1:"disabled", 8:"selected", 16:"checked", 64:"expanded"});
  (b = sd[b]) && S(a, b, c)
};
m.Qb = function(a, b) {
  var c = this.ab(a);
  if(c && (Fb(c), b)) {
    if(v(b)) {
      Jb(c, b)
    }else {
      var d = function(a) {
        if(a) {
          var b = K(c);
          c.appendChild(v(a) ? b.createTextNode(a) : a)
        }
      };
      u(b) ? Ca(b, d) : !ga(b) || "nodeType" in b ? d(b) : Ca(Ka(b), d)
    }
  }
};
m.ya = function(a) {
  return a.c()
};
m.S = ba("goog-control");
function td(a, b) {
  var c = a.S(), d = [c], g = a.S();
  g != c && d.push(g);
  c = b.h;
  for(g = [];c;) {
    var f = c & -c;
    g.push(wd(a, f));
    c &= ~f
  }
  d.push.apply(d, g);
  (c = b.$) && d.push.apply(d, c);
  D && !G("7") && d.push.apply(d, vd(d));
  return d
}
function vd(a, b) {
  var c = [];
  b && (a = a.concat([b]));
  Ca([], function(d) {
    !Fa(d, oa(Ia, a)) || b && !Ia(d, b) || c.push(d.join("_"))
  });
  return c
}
function wd(a, b) {
  if(!a.Lc) {
    var c = a.S();
    a.Lc = {1:c + "-disabled", 2:c + "-hover", 4:c + "-active", 8:c + "-selected", 16:c + "-checked", 32:c + "-focused", 64:c + "-open"}
  }
  return a.Lc[b]
}
;function xd() {
}
B(xd, rd);
ea(xd);
m = xd.prototype;
m.vb = ba("button");
m.ja = function(a, b, c) {
  switch(b) {
    case 8:
    ;
    case 16:
      S(a, "pressed", c);
      break;
    default:
    ;
    case 64:
    ;
    case 1:
      xd.b.ja.call(this, a, b, c)
  }
};
m.i = function(a) {
  var b = xd.b.i.call(this, a);
  this.Sb(b, a.yb());
  var c = a.I();
  c && this.Ra(b, c);
  a.F & 16 && this.ja(b, 16, !!(a.h & 16));
  return b
};
m.I = s;
m.Ra = s;
m.yb = function(a) {
  return a.title
};
m.Sb = function(a, b) {
  a && b && (a.title = b)
};
m.S = ba("goog-button");
function yd(a, b) {
  if(!a) {
    throw Error("Invalid class name " + a);
  }
  if(!ia(b)) {
    throw Error("Invalid decorator function " + b);
  }
}
var zd = {};
function X(a, b, c) {
  nd.call(this, c);
  if(!b) {
    b = this.constructor;
    for(var d;b;) {
      d = w(b);
      if(d = zd[d]) {
        break
      }
      b = b.b ? b.b.constructor : null
    }
    b = d ? ia(d.ga) ? d.ga() : new d : null
  }
  this.g = b;
  this.X = a
}
B(X, nd);
m = X.prototype;
m.X = null;
m.h = 0;
m.F = 39;
m.fc = 255;
m.Ie = 0;
m.n = !0;
m.$ = null;
m.pc = !0;
m.cc = !1;
m.Ob = null;
m.ya = function() {
  return this.g.ya(this)
};
function Ad(a, b) {
  b && (a.$ ? Ia(a.$, b) || a.$.push(b) : a.$ = [b], a.g.$a(a, b, !0))
}
m.$a = function(a, b) {
  b ? Ad(this, a) : a && (this.$ && Ja(this.$, a)) && (0 == this.$.length && (this.$ = null), this.g.$a(this, a, !1))
};
m.i = function() {
  var a = this.g.i(this);
  this.a = a;
  var b = this.Ob || this.g.vb();
  b && Nc(a, b);
  this.cc || this.g.Pb(a, !1);
  this.n || this.g.K(a, !1)
};
m.ab = function() {
  return this.g.ab(this.c())
};
m.Y = function() {
  X.b.Y.call(this);
  this.g.fd(this);
  if(this.F & -2 && (this.pc && Bd(this, !0), this.F & 32)) {
    var a = this.ya();
    if(a) {
      var b = this.M || (this.M = new Fc);
      Gc(b, a);
      this.T().e(b, "key", this.nc).e(a, "focus", this.Cb).e(a, "blur", this.Ab)
    }
  }
};
function Bd(a, b) {
  var c = a.T(), d = a.c();
  b ? (c.e(d, "mouseover", a.Xc).e(d, "mousedown", a.Db).e(d, "mouseup", a.Zc).e(d, "mouseout", a.Wc), a.Bb != s && c.e(d, "contextmenu", a.Bb), D && c.e(d, "dblclick", a.Uc)) : (c.u(d, "mouseover", a.Xc).u(d, "mousedown", a.Db).u(d, "mouseup", a.Zc).u(d, "mouseout", a.Wc), a.Bb != s && c.u(d, "contextmenu", a.Bb), D && c.u(d, "dblclick", a.Uc))
}
m.fa = function() {
  X.b.fa.call(this);
  this.M && this.M.detach();
  this.n && this.isEnabled() && this.g.Rb(this, !1)
};
m.d = function() {
  X.b.d.call(this);
  this.M && (this.M.B(), delete this.M);
  delete this.g;
  this.$ = this.X = null
};
m.Qb = function(a) {
  this.g.Qb(this.c(), a);
  this.X = a
};
function Cd(a) {
  a = a.X;
  if(!a) {
    return""
  }
  if(!v(a)) {
    if(u(a)) {
      a = Ea(a, Ob).join("")
    }else {
      if(kb && "innerText" in a) {
        a = a.innerText.replace(/(\r\n|\r|\n)/g, "\n")
      }else {
        var b = [];
        Pb(a, b, !0);
        a = b.join("")
      }
      a = a.replace(/ \xAD /g, " ").replace(/\xAD/g, "");
      a = a.replace(/\u200B/g, "");
      kb || (a = a.replace(/ +/g, " "));
      " " != a && (a = a.replace(/^\s*/, ""))
    }
  }
  return a.replace(/[\t\r\n ]+/g, " ").replace(/^[\t\r\n ]+|[\t\r\n ]+$/g, "")
}
m.Qa = function(a) {
  X.b.Qa.call(this, a);
  var b = this.c();
  b && this.g.Qa(b, a)
};
m.Pb = function(a) {
  this.cc = a;
  var b = this.c();
  b && this.g.Pb(b, a)
};
m.K = function(a, b) {
  if(b || this.n != a && this.dispatchEvent(a ? "show" : "hide")) {
    var c = this.c();
    c && this.g.K(c, a);
    this.isEnabled() && this.g.Rb(this, a);
    this.n = a;
    return!0
  }
  return!1
};
m.isEnabled = function() {
  return!(this.h & 1)
};
function Dd(a, b) {
  Ed(a, 2, b) && a.P(2, b)
}
m.bb = function() {
  return!!(this.h & 4)
};
m.setActive = function(a) {
  Ed(this, 4, a) && this.P(4, a)
};
m.oa = function() {
  return!!(this.h & 64)
};
m.P = function(a, b) {
  this.F & a && b != !!(this.h & a) && (this.g.P(this, a, b), this.h = b ? this.h | a : this.h & ~a)
};
function Y(a, b) {
  return!!(a.fc & b) && !!(a.F & b)
}
function Ed(a, b, c) {
  return!!(a.F & b) && !!(a.h & b) != c && (!(a.Ie & b) || a.dispatchEvent(pd(b, c))) && !a.Za
}
m.Xc = function(a) {
  (!a.relatedTarget || !Ib(this.c(), a.relatedTarget)) && (this.dispatchEvent("enter") && this.isEnabled() && Y(this, 2)) && Dd(this, !0)
};
m.Wc = function(a) {
  a.relatedTarget && Ib(this.c(), a.relatedTarget) || !this.dispatchEvent("leave") || (Y(this, 4) && this.setActive(!1), Y(this, 2) && Dd(this, !1))
};
m.Bb = s;
m.Db = function(a) {
  this.isEnabled() && (Y(this, 2) && Dd(this, !0), hc(a) && (Y(this, 4) && this.setActive(!0), this.g.kd(this) && this.ya().focus()));
  !this.cc && hc(a) && a.preventDefault()
};
m.Zc = function(a) {
  this.isEnabled() && (Y(this, 2) && Dd(this, !0), this.bb() && (this.kb(a) && Y(this, 4)) && this.setActive(!1))
};
m.Uc = function(a) {
  this.isEnabled() && this.kb(a)
};
m.kb = function(a) {
  if(Y(this, 16)) {
    var b = !(this.h & 16);
    Ed(this, 16, b) && this.P(16, b)
  }
  Y(this, 8) && Ed(this, 8, !0) && this.P(8, !0);
  Y(this, 64) && (b = !this.oa(), Ed(this, 64, b) && this.P(64, b));
  b = new N("action", this);
  a && (b.altKey = a.altKey, b.ctrlKey = a.ctrlKey, b.metaKey = a.metaKey, b.shiftKey = a.shiftKey, b.Bc = a.Bc);
  return this.dispatchEvent(b)
};
m.Cb = function() {
  Y(this, 32) && Ed(this, 32, !0) && this.P(32, !0)
};
m.Ab = function() {
  Y(this, 4) && this.setActive(!1);
  Y(this, 32) && Ed(this, 32, !1) && this.P(32, !1)
};
m.nc = function(a) {
  return this.n && this.isEnabled() && this.oc(a) ? (a.preventDefault(), a.stopPropagation(), !0) : !1
};
m.oc = function(a) {
  return 13 == a.keyCode && this.kb(a)
};
if(!ia(X)) {
  throw Error("Invalid component class " + X);
}
if(!ia(rd)) {
  throw Error("Invalid renderer class " + rd);
}
var Fd = w(X);
zd[Fd] = rd;
yd("goog-control", function() {
  return new X(null)
});
function Gd() {
}
B(Gd, xd);
ea(Gd);
m = Gd.prototype;
m.vb = aa();
m.i = function(a) {
  a.C && !1 != a.pc && Bd(a, !1);
  a.pc = !1;
  a.fc &= -256;
  if(a.C && a.h & 32) {
    throw Error("Component already rendered");
  }
  a.h & 32 && a.P(32, !1);
  a.F &= -33;
  return a.m().i("button", {"class":td(this, a).join(" "), disabled:!a.isEnabled(), title:a.yb() || "", value:a.I() || ""}, Cd(a) || "")
};
m.fd = function(a) {
  a.T().e(a.c(), "click", a.kb)
};
m.Pb = s;
m.Qa = s;
m.kd = function(a) {
  return a.isEnabled()
};
m.Rb = s;
m.P = function(a, b, c) {
  Gd.b.P.call(this, a, b, c);
  (a = a.c()) && 1 == b && (a.disabled = c)
};
m.I = function(a) {
  return a.value
};
m.Ra = function(a, b) {
  a && (a.value = b)
};
m.ja = s;
function Hd(a, b, c) {
  X.call(this, a, b || Gd.ga(), c)
}
B(Hd, X);
m = Hd.prototype;
m.I = e("Od");
m.Ra = function(a) {
  this.Od = a;
  this.g.Ra(this.c(), a)
};
m.yb = e("Kd");
m.Sb = function(a) {
  this.Kd = a;
  this.g.Sb(this.c(), a)
};
m.d = function() {
  Hd.b.d.call(this);
  delete this.Od;
  delete this.Kd
};
m.Y = function() {
  Hd.b.Y.call(this);
  if(this.F & 32) {
    var a = this.ya();
    a && this.T().e(a, "keyup", this.oc)
  }
};
m.oc = function(a) {
  return 13 == a.keyCode && "key" == a.type || 32 == a.keyCode && "keyup" == a.type ? this.kb(a) : 32 == a.keyCode
};
yd("goog-button", function() {
  return new Hd(null)
});
function Id() {
}
B(Id, xd);
ea(Id);
Id.prototype.i = function(a) {
  var b = {"class":"goog-inline-block " + td(this, a).join(" ")}, b = a.m().i("div", b, a.X);
  this.Sb(b, a.yb());
  ud(this, a, b);
  return b
};
Id.prototype.vb = ba("button");
Id.prototype.I = ba("");
Id.prototype.S = ba("goog-flat-button");
yd("goog-flat-button", function() {
  return new Hd(null, Id.ga())
});
function Jd(a, b, c) {
  R.call(this);
  this.target = a;
  this.handle = b || a;
  this.Jb = c || new U(NaN, NaN, NaN, NaN);
  this.j = K(a);
  this.Z = new Pc(this);
  a = oa(bc, this.Z);
  this.ib || (this.ib = []);
  this.ib.push(x(a, void 0));
  Q(this.handle, ["touchstart", "mousedown"], this.Dd, !1, this)
}
B(Jd, R);
var Kd = D || E && G("1.9.3");
m = Jd.prototype;
m.clientX = 0;
m.clientY = 0;
m.screenX = 0;
m.screenY = 0;
m.Fd = 0;
m.Gd = 0;
m.Ga = 0;
m.Ha = 0;
m.Mc = !0;
m.xa = !1;
m.bd = 0;
m.pe = 0;
m.je = !1;
m.Yb = !1;
m.T = e("Z");
m.d = function() {
  Jd.b.d.call(this);
  vc(this.handle, ["touchstart", "mousedown"], this.Dd, !1, this);
  this.Z.Ca();
  Kd && this.j.releaseCapture();
  this.handle = this.target = null
};
function Ld(a) {
  t(a.U) || (a.U = Zc(a.target));
  return a.U
}
m.Dd = function(a) {
  var b = "mousedown" == a.type;
  if(!this.Mc || this.xa || b && !hc(a)) {
    this.dispatchEvent("earlycancel")
  }else {
    Md(a);
    if(0 == this.bd) {
      if(this.dispatchEvent(new Nd("start", this, a.clientX, a.clientY, a))) {
        this.xa = !0, a.preventDefault()
      }else {
        return
      }
    }else {
      a.preventDefault()
    }
    var b = this.j, c = b.documentElement, d = !Kd;
    this.Z.e(b, ["touchmove", "mousemove"], this.he, d);
    this.Z.e(b, ["touchend", "mouseup"], this.ub, d);
    Kd ? (c.setCapture(!1), this.Z.e(c, "losecapture", this.ub)) : this.Z.e(Cb(b), "blur", this.ub);
    D && this.je && this.Z.e(b, "dragstart", cc);
    this.Ce && this.Z.e(this.Ce, "scroll", this.xe, d);
    this.clientX = this.Fd = a.clientX;
    this.clientY = this.Gd = a.clientY;
    this.screenX = a.screenX;
    this.screenY = a.screenY;
    this.Yb ? (a = this.target, b = a.offsetLeft, c = a.offsetParent, c || "fixed" != Sc(a) || (c = K(a).documentElement), c ? (E ? (d = jd(c), b += d.left) : D && 8 <= gb && (d = jd(c), b -= d.left), a = Zc(c) ? c.clientWidth - (b + a.offsetWidth) : b) : a = b) : a = this.target.offsetLeft;
    this.Ga = a;
    this.Ha = this.target.offsetTop;
    this.Ac = Tb(J(this.j));
    this.pe = y()
  }
};
m.ub = function(a, b) {
  this.Z.Ca();
  Kd && this.j.releaseCapture();
  if(this.xa) {
    Md(a);
    this.xa = !1;
    var c = Od(this, this.Ga), d = Pd(this, this.Ha);
    this.dispatchEvent(new Nd("end", this, a.clientX, a.clientY, a, c, d, b || "touchcancel" == a.type))
  }else {
    this.dispatchEvent("earlycancel")
  }
};
function Md(a) {
  var b = a.type;
  "touchstart" == b || "touchmove" == b ? fc(a, a.R.targetTouches[0], a.currentTarget) : "touchend" != b && "touchcancel" != b || fc(a, a.R.changedTouches[0], a.currentTarget)
}
m.he = function(a) {
  if(this.Mc) {
    Md(a);
    var b = (this.Yb && Ld(this) ? -1 : 1) * (a.clientX - this.clientX), c = a.clientY - this.clientY;
    this.clientX = a.clientX;
    this.clientY = a.clientY;
    this.screenX = a.screenX;
    this.screenY = a.screenY;
    if(!this.xa) {
      var d = this.Fd - this.clientX, g = this.Gd - this.clientY;
      if(d * d + g * g > this.bd) {
        if(this.dispatchEvent(new Nd("start", this, a.clientX, a.clientY, a))) {
          this.xa = !0
        }else {
          this.Za || this.ub(a);
          return
        }
      }
    }
    c = Qd(this, b, c);
    b = c.x;
    c = c.y;
    this.xa && this.dispatchEvent(new Nd("beforedrag", this, a.clientX, a.clientY, a, b, c)) && (Rd(this, a, b, c), a.preventDefault())
  }
};
function Qd(a, b, c) {
  var d = Tb(J(a.j));
  b += d.x - a.Ac.x;
  c += d.y - a.Ac.y;
  a.Ac = d;
  a.Ga += b;
  a.Ha += c;
  b = Od(a, a.Ga);
  a = Pd(a, a.Ha);
  return new I(b, a)
}
m.xe = function(a) {
  var b = Qd(this, 0, 0);
  a.clientX = this.clientX;
  a.clientY = this.clientY;
  Rd(this, a, b.x, b.y)
};
function Rd(a, b, c, d) {
  a.Yb && Ld(a) ? a.target.style.right = c + "px" : a.target.style.left = c + "px";
  a.target.style.top = d + "px";
  a.dispatchEvent(new Nd("drag", a, b.clientX, b.clientY, b, c, d))
}
function Od(a, b) {
  var c = a.Jb, d = isNaN(c.left) ? null : c.left, c = isNaN(c.width) ? 0 : c.width;
  return Math.min(null != d ? d + c : Infinity, Math.max(null != d ? d : -Infinity, b))
}
function Pd(a, b) {
  var c = a.Jb, d = isNaN(c.top) ? null : c.top, c = isNaN(c.height) ? 0 : c.height;
  return Math.min(null != d ? d + c : Infinity, Math.max(null != d ? d : -Infinity, b))
}
function Nd(a, b, c, d, g, f, h, k) {
  N.call(this, a);
  this.clientX = c;
  this.clientY = d;
  this.Se = g;
  this.left = t(f) ? f : b.Ga;
  this.top = t(h) ? h : b.Ha;
  this.Ve = b;
  this.Ue = !!k
}
B(Nd, N);
function Sd(a) {
  if("function" == typeof a.zb) {
    return a.zb()
  }
  if(v(a)) {
    return a.split("")
  }
  if(ga(a)) {
    for(var b = [], c = a.length, d = 0;d < c;d++) {
      b.push(a[d])
    }
    return b
  }
  return sb(a)
}
function Td(a, b, c) {
  if("function" == typeof a.forEach) {
    a.forEach(b, c)
  }else {
    if(ga(a) || v(a)) {
      Ca(a, b, c)
    }else {
      var d;
      if("function" == typeof a.xb) {
        d = a.xb()
      }else {
        if("function" != typeof a.zb) {
          if(ga(a) || v(a)) {
            d = [];
            for(var g = a.length, f = 0;f < g;f++) {
              d.push(f)
            }
          }else {
            d = tb(a)
          }
        }else {
          d = void 0
        }
      }
      for(var g = Sd(a), f = g.length, h = 0;h < f;h++) {
        b.call(c, g[h], d && d[h], a)
      }
    }
  }
}
;function Ud(a, b) {
  this.qa = {};
  this.o = [];
  var c = arguments.length;
  if(1 < c) {
    if(c % 2) {
      throw Error("Uneven number of arguments");
    }
    for(var d = 0;d < c;d += 2) {
      this.set(arguments[d], arguments[d + 1])
    }
  }else {
    if(a) {
      a instanceof Ud ? (c = a.xb(), d = a.zb()) : (c = tb(a), d = sb(a));
      for(var g = 0;g < c.length;g++) {
        this.set(c[g], d[g])
      }
    }
  }
}
m = Ud.prototype;
m.H = 0;
m.Pd = 0;
m.zb = function() {
  Vd(this);
  for(var a = [], b = 0;b < this.o.length;b++) {
    a.push(this.qa[this.o[b]])
  }
  return a
};
m.xb = function() {
  Vd(this);
  return this.o.concat()
};
m.remove = function(a) {
  return Object.prototype.hasOwnProperty.call(this.qa, a) ? (delete this.qa[a], this.H--, this.Pd++, this.o.length > 2 * this.H && Vd(this), !0) : !1
};
function Vd(a) {
  if(a.H != a.o.length) {
    for(var b = 0, c = 0;b < a.o.length;) {
      var d = a.o[b];
      Object.prototype.hasOwnProperty.call(a.qa, d) && (a.o[c++] = d);
      b++
    }
    a.o.length = c
  }
  if(a.H != a.o.length) {
    for(var g = {}, c = b = 0;b < a.o.length;) {
      d = a.o[b], Object.prototype.hasOwnProperty.call(g, d) || (a.o[c++] = d, g[d] = 1), b++
    }
    a.o.length = c
  }
}
m.get = function(a, b) {
  return Object.prototype.hasOwnProperty.call(this.qa, a) ? this.qa[a] : b
};
m.set = function(a, b) {
  Object.prototype.hasOwnProperty.call(this.qa, a) || (this.H++, this.o.push(a), this.Pd++);
  this.qa[a] = b
};
m.va = function() {
  return new Ud(this)
};
function Wd(a, b) {
  R.call(this);
  this.Ka = a || 1;
  this.Sa = b || p;
  this.ic = x(this.Je, this);
  this.wc = y()
}
B(Wd, R);
m = Wd.prototype;
m.enabled = !1;
m.q = null;
m.Je = function() {
  if(this.enabled) {
    var a = y() - this.wc;
    0 < a && a < 0.8 * this.Ka ? this.q = this.Sa.setTimeout(this.ic, this.Ka - a) : (this.q && (this.Sa.clearTimeout(this.q), this.q = null), this.dispatchEvent(Xd), this.enabled && (this.q = this.Sa.setTimeout(this.ic, this.Ka), this.wc = y()))
  }
};
m.start = function() {
  this.enabled = !0;
  this.q || (this.q = this.Sa.setTimeout(this.ic, this.Ka), this.wc = y())
};
m.stop = function() {
  this.enabled = !1;
  this.q && (this.Sa.clearTimeout(this.q), this.q = null)
};
m.d = function() {
  Wd.b.d.call(this);
  this.stop();
  delete this.Sa
};
var Xd = "tick";
function Yd(a, b, c) {
  if(ia(a)) {
    c && (a = x(a, c))
  }else {
    if(a && "function" == typeof a.handleEvent) {
      a = x(a.handleEvent, a)
    }else {
      throw Error("Invalid listener argument");
    }
  }
  return 2147483647 < b ? -1 : p.setTimeout(a, b || 0)
}
;function Zd(a) {
  R.call(this);
  this.a = a;
  a = D ? "focusout" : "blur";
  this.ke = Q(this.a, D ? "focusin" : "focus", this, !D);
  this.le = Q(this.a, a, this, !D)
}
B(Zd, R);
Zd.prototype.handleEvent = function(a) {
  var b = new ec(a.R);
  b.type = "focusin" == a.type || "focus" == a.type ? "focusin" : "focusout";
  this.dispatchEvent(b)
};
Zd.prototype.d = function() {
  Zd.b.d.call(this);
  xc(this.ke);
  xc(this.le);
  delete this.a
};
function $d(a, b) {
  nd.call(this, b);
  this.Le = !!a;
  this.fb = null
}
B($d, nd);
m = $d.prototype;
m.lc = null;
m.n = !1;
m.G = null;
m.v = null;
m.V = null;
m.hc = !1;
m.S = ba("goog-modalpopup");
m.wb = e("G");
m.i = function() {
  $d.b.i.call(this);
  var a = this.c();
  H(a, this.S());
  Nb(a, !0);
  W(a, !1);
  this.Le && !this.v && (this.v = this.m().i("iframe", {frameborder:0, style:"border:0;vertical-align:bottom;", src:'javascript:""'}), this.v.className = this.S() + "-bg", W(this.v, !1), cd(this.v, 0));
  this.G || (this.G = this.m().i("div", this.S() + "-bg"), W(this.G, !1));
  this.V || (this.V = this.m().createElement("span"), W(this.V, !1), Nb(this.V, !0), this.V.style.position = "absolute")
};
m.zd = function() {
  this.hc = !1
};
m.Y = function() {
  this.v && Gb(this.v, this.c());
  Gb(this.G, this.c());
  $d.b.Y.call(this);
  var a = this.c();
  a.parentNode && a.parentNode.insertBefore(this.V, a.nextSibling);
  this.lc = new Zd(Qb(this.m()));
  this.T().e(this.lc, "focusin", this.ue);
  ae(this, !1)
};
m.fa = function() {
  this.n && this.K(!1);
  bc(this.lc);
  $d.b.fa.call(this);
  Hb(this.v);
  Hb(this.G);
  Hb(this.V)
};
m.K = function(a) {
  if(a != this.n) {
    if(this.Pa && this.Pa.stop(), this.Wa && this.Wa.stop(), this.Oa && this.Oa.stop(), this.Va && this.Va.stop(), this.C && ae(this, a), a) {
      if(this.dispatchEvent("beforeshow")) {
        try {
          this.fb = Qb(this.m()).activeElement
        }catch(b) {
        }
        this.Ec();
        this.Dc();
        this.T().e(Sb(this.m()), "resize", this.Ec);
        be(this, !0);
        this.focus();
        this.n = !0;
        this.Pa && this.Wa ? (uc(this.Pa, "end", this.Na, !1, this), this.Wa.play(), this.Pa.play()) : this.Na()
      }
    }else {
      if(this.dispatchEvent("beforehide")) {
        this.T().u(Sb(this.m()), "resize", this.Ec);
        this.n = !1;
        this.Oa && this.Va ? (uc(this.Oa, "end", this.Mb, !1, this), this.Va.play(), this.Oa.play()) : this.Mb();
        try {
          var c = Qb(this.m()).body, d = Qb(this.m()).activeElement || c;
          this.fb && (d == c && this.fb != c) && this.fb.focus()
        }catch(g) {
        }
        this.fb = null
      }
    }
  }
};
function ae(a, b) {
  for(var c = Qb(a.m()).body.firstChild;c;c = c.nextSibling) {
    if(1 == c.nodeType) {
      var d = c;
      b ? S(d, "hidden", b) : d.removeAttribute("aria-hidden")
    }
  }
  c = a.a;
  (d = !b) ? S(c, "hidden", d) : c.removeAttribute("aria-hidden")
}
function be(a, b) {
  a.v && W(a.v, b);
  a.G && W(a.G, b);
  W(a.c(), b);
  W(a.V, b)
}
m.Na = function() {
  this.dispatchEvent("show")
};
m.Mb = function() {
  be(this, !1);
  this.dispatchEvent("hide")
};
m.focus = function() {
  this.Qc()
};
m.Ec = function() {
  this.v && W(this.v, !1);
  this.G && W(this.G, !1);
  var a = Qb(this.m()), b = Bb(Cb(a) || window || window), c = Math.max(b.width, Math.max(a.body.scrollWidth, a.documentElement.scrollWidth)), a = Math.max(b.height, Math.max(a.body.scrollHeight, a.documentElement.scrollHeight));
  this.v && (W(this.v, !0), $c(this.v, c, a));
  this.G && (W(this.G, !0), $c(this.G, c, a))
};
m.Dc = function() {
  var a = Qb(this.m()), b = Cb(a) || window;
  if("fixed" == Sc(this.c())) {
    var c = a = 0
  }else {
    c = Tb(this.m()), a = c.x, c = c.y
  }
  var d = ad(this.c()), b = Bb(b || window), a = Math.max(a + b.width / 2 - d.width / 2, 0), c = Math.max(c + b.height / 2 - d.height / 2, 0);
  Tc(this.c(), a, c);
  Tc(this.V, a, c)
};
m.ue = function(a) {
  this.hc ? this.zd() : a.target == this.V && Yd(this.Qc, 0, this)
};
m.Qc = function() {
  try {
    D && Qb(this.m()).body.focus(), this.c().focus()
  }catch(a) {
  }
};
m.d = function() {
  bc(this.Pa);
  this.Pa = null;
  bc(this.Oa);
  this.Oa = null;
  bc(this.Wa);
  this.Wa = null;
  bc(this.Va);
  this.Va = null;
  $d.b.d.call(this)
};
function Z(a, b, c) {
  $d.call(this, b, c);
  this.W = a || "modal-dialog";
  this.la = $($(new ce, de, !0), ee, !1, !0)
}
B(Z, $d);
m = Z.prototype;
m.ae = !0;
m.ad = !0;
m.yc = !0;
m.Zd = !0;
m.gc = 0.5;
m.Jd = "";
m.X = "";
m.ma = null;
m.Xd = !1;
m.Ta = null;
m.qb = null;
m.Id = null;
m.Ub = null;
m.Xa = null;
m.ua = null;
m.Ob = "dialog";
m.S = e("W");
m.Qb = function(a) {
  this.X = a;
  this.Xa && (this.Xa.innerHTML = a)
};
m.ab = function() {
  this.c() || this.sa();
  return this.Xa
};
m.wb = function() {
  this.c() || this.sa();
  return Z.b.wb.call(this)
};
function fe(a, b) {
  a.yc = b;
  if(a.C) {
    var c = a.m(), d = a.wb(), g = a.v;
    b ? (g && c.hd(g, a.c()), c.hd(d, a.c())) : (c.removeNode(g), c.removeNode(d))
  }
}
function ge(a, b) {
  if(a.c()) {
    var c = a.Ta, d = a.W + "-title-draggable";
    b ? H(c, d) : mb(c, d)
  }
  b && !a.ma ? (a.ma = new Jd(a.c(), a.Ta), H(a.Ta, a.W + "-title-draggable"), Q(a.ma, "start", a.He, !1, a)) : !b && a.ma && (a.ma.B(), a.ma = null)
}
m.i = function() {
  Z.b.i.call(this);
  var a = this.c(), b = this.m();
  this.Ta = b.i("div", {className:this.W + "-title", id:this.aa || (this.aa = md(this.cd))}, this.qb = b.i("span", this.W + "-title-text", this.Jd), this.Ub = b.i("span", this.W + "-title-close"));
  Eb(a, this.Ta, this.Xa = b.i("div", this.W + "-content"), this.ua = b.i("div", this.W + "-buttons"));
  this.Id = this.Ta.id;
  Nc(a, this.Ob);
  S(a, "labelledby", this.Id || "");
  this.X && (this.Xa.innerHTML = this.X);
  W(this.Ub, this.ad);
  this.la && (a = this.la, a.a = this.ua, a.sa());
  W(this.ua, !!this.la);
  this.gc = this.gc;
  this.c() && (a = this.wb()) && cd(a, this.gc)
};
m.Y = function() {
  Z.b.Y.call(this);
  this.T().e(this.c(), "keydown", this.jb).e(this.c(), "keypress", this.jb);
  this.T().e(this.ua, "click", this.te);
  ge(this, this.Zd);
  this.T().e(this.Ub, "click", this.ye);
  var a = this.c();
  Nc(a, this.Ob);
  "" !== this.qb.id && S(a, "labelledby", this.qb.id);
  this.yc || fe(this, !1)
};
m.fa = function() {
  this.n && this.K(!1);
  ge(this, !1);
  Z.b.fa.call(this)
};
m.K = function(a) {
  a != this.n && (this.C || this.sa(), Z.b.K.call(this, a))
};
m.Na = function() {
  Z.b.Na.call(this);
  this.dispatchEvent(he)
};
m.Mb = function() {
  Z.b.Mb.call(this);
  this.dispatchEvent(ie);
  this.Xd && this.B()
};
m.focus = function() {
  Z.b.focus.call(this);
  if(this.la) {
    var a = this.la.tb;
    if(a) {
      for(var b = Qb(this.m()), c = this.ua.getElementsByTagName("button"), d = 0, g;g = c[d];d++) {
        if(g.name == a && !g.disabled) {
          try {
            if(F || Va) {
              var f = b.createElement("input");
              f.style.cssText = "position:fixed;width:0;height:0;left:0;top:0;";
              this.c().appendChild(f);
              f.focus();
              this.c().removeChild(f)
            }
            g.focus()
          }catch(h) {
          }
          break
        }
      }
    }
  }
};
m.He = function() {
  var a = Qb(this.m()), b = Bb(Cb(a) || window || window), c = Math.max(a.body.scrollWidth, b.width), a = Math.max(a.body.scrollHeight, b.height), d = ad(this.c());
  "fixed" == Sc(this.c()) ? (b = new U(0, 0, Math.max(0, b.width - d.width), Math.max(0, b.height - d.height)), this.ma.Jb = b || new U(NaN, NaN, NaN, NaN)) : this.ma.Jb = new U(0, 0, c - d.width, a - d.height) || new U(NaN, NaN, NaN, NaN)
};
m.ye = function() {
  if(this.ad) {
    var a = this.la, b = a && a.jc;
    b ? (a = a.get(b), this.dispatchEvent(new je(b, a)) && this.K(!1)) : this.K(!1)
  }
};
m.d = function() {
  this.ua = this.Ub = null;
  Z.b.d.call(this)
};
m.te = function(a) {
  a: {
    for(a = a.target;null != a && a != this.ua;) {
      if("BUTTON" == a.tagName) {
        break a
      }
      a = a.parentNode
    }
    a = null
  }
  if(a && !a.disabled) {
    a = a.name;
    var b = this.la.get(a);
    this.dispatchEvent(new je(a, b)) && this.K(!1)
  }
};
m.jb = function(a) {
  var b = !1, c = !1, d = this.la, g = a.target;
  if("keydown" == a.type) {
    if(this.ae && 27 == a.keyCode) {
      var f = d && d.jc, g = "SELECT" == g.tagName && !g.disabled;
      f && !g ? (c = !0, b = d.get(f), b = this.dispatchEvent(new je(f, b))) : g || (b = !0)
    }else {
      if(9 == a.keyCode && a.shiftKey && g == this.c()) {
        this.hc = !0;
        try {
          this.V.focus()
        }catch(h) {
        }
        Yd(this.zd, 0, this)
      }
    }
  }else {
    if(13 == a.keyCode) {
      if("BUTTON" == g.tagName && !g.disabled) {
        f = g.name
      }else {
        if(d) {
          var k = d.tb, l;
          if(l = k) {
            a: {
              l = d.a.getElementsByTagName("BUTTON");
              for(var n = 0, q;q = l[n];n++) {
                if(q.name == k || q.id == k) {
                  l = q;
                  break a
                }
              }
              l = null
            }
          }
          g = ("TEXTAREA" == g.tagName || "SELECT" == g.tagName || "A" == g.tagName) && !g.disabled;
          !l || (l.disabled || g) || (f = k)
        }
      }
      f && d && (c = !0, b = this.dispatchEvent(new je(f, String(d.get(f)))))
    }
  }
  if(b || c) {
    a.stopPropagation(), a.preventDefault()
  }
  b && this.K(!1)
};
function je(a, b) {
  this.type = ke;
  this.key = a;
  this.caption = b
}
B(je, N);
var ke = "dialogselect", ie = "afterhide", he = "aftershow";
function ce(a) {
  this.s = a || J();
  Ud.call(this)
}
B(ce, Ud);
m = ce.prototype;
m.W = "goog-buttonset";
m.tb = null;
m.a = null;
m.jc = null;
m.set = function(a, b, c, d) {
  Ud.prototype.set.call(this, a, b);
  c && (this.tb = a);
  d && (this.jc = a);
  return this
};
function $(a, b, c, d) {
  return a.set(b.key, b.caption, c, d)
}
m.sa = function() {
  if(this.a) {
    this.a.innerHTML = "";
    var a = J(this.a);
    Td(this, function(b, c) {
      var d = a.i("button", {name:c}, b);
      c == this.tb && (d.className = this.W + "-default");
      this.a.appendChild(d)
    }, this)
  }
};
m.c = e("a");
m.m = e("s");
var le = pa("OK"), me = pa("Cancel"), ne = pa("Yes"), oe = pa("No"), pe = pa("Save"), qe = pa("Continue"), de = {key:"ok", caption:le}, ee = {key:"cancel", caption:me}, re = {key:"yes", caption:ne}, se = {key:"no", caption:oe}, te = {key:"save", caption:pe}, ue = {key:"continue", caption:qe};
"undefined" != typeof document && ($(new ce, de, !0, !0), $($(new ce, de, !0), ee, !1, !0), $($(new ce, re, !0), se, !1, !0), $($($(new ce, re), se, !0), ee, !1, !0), $($($(new ce, ue), te), ee, !0, !0));
function ve(a, b, c) {
  R.call(this);
  this.hb = a;
  this.mb = c;
  this.g = b;
  Q(b, [we, xe, ye, ze], this.handleEvent, !1, this);
  this.Q = null;
  this.p = [];
  this.na = -1;
  this.A = 0;
  this.wa = this.r = null;
  this.gd = {}
}
B(ve, R);
ve.prototype.Td = !0;
ve.prototype.Kc = !1;
ve.prototype.Qd = !1;
ve.prototype.Ld = !1;
var we = "hilite", xe = "select", ze = "dismiss", ye = "canceldismiss";
m = ve.prototype;
m.handleEvent = function(a) {
  if(a.target == this.g) {
    switch(a.type) {
      case we:
        this.ha(a.lb);
        break;
      case xe:
        a = a.lb;
        var b = this.p[Ae(this, a)], c = !!b && this.hb.sc && this.hb.sc(b);
        a && (b && !c && this.na != a) && this.ha(a);
        c || Be(this);
        break;
      case ye:
        Ce(this);
        break;
      case ze:
        De(this)
    }
  }
};
m.oa = function() {
  return this.g.n
};
function Ee(a) {
  for(var b = a.A + a.p.length - 1, c = a.na, d = 0;d < a.p.length;d++) {
    if(c >= a.A && c < b) {
      c++
    }else {
      if(-1 == c) {
        c = a.A
      }else {
        if(a.Kc && c == b) {
          a.ha(-1);
          break
        }else {
          if(a.Qd && c == b) {
            c = a.A
          }else {
            break
          }
        }
      }
    }
    if(a.ha(c)) {
      break
    }
  }
}
function Fe(a) {
  for(var b = a.A + a.p.length - 1, c = a.na, d = 0;d < a.p.length;d++) {
    if(c > a.A) {
      c--
    }else {
      if(a.Kc && c == a.A) {
        a.ha(-1);
        break
      }else {
        if(!a.Qd || -1 != c && c != a.A) {
          break
        }else {
          c = b
        }
      }
    }
    if(a.ha(c)) {
      break
    }
  }
}
m.ha = function(a) {
  var b = Ae(this, a), c = this.p[b];
  return c && this.hb.sc && this.hb.sc(c) ? !1 : (this.na = a, this.g.ha(a), -1 != b)
};
function Be(a) {
  var b = Ae(a, a.na);
  if(-1 != b) {
    var b = a.p[b], c = a.mb, d = b.toString();
    if(t(void 0) ? 0 : c.La) {
      var g = Ge(c, c.I(), He(c.l)), f = Ie(c, c.I());
      c.De.test(d) || (d = d.replace(/[\s\xa0]+$/, "") + c.Wd);
      c.Oe && (0 == g || /^[\s\xa0]*$/.test(f[g - 1]) || (d = " " + d), g == f.length - 1 && (d += " "));
      if(d != f[g]) {
        f[g] = d;
        d = c.l;
        (E || D && G("9")) && d.blur();
        d.value = f.join("");
        for(var h = 0, k = 0;k <= g;k++) {
          h += f[k].length
        }
        d.focus();
        g = h;
        f = c.l;
        d = g;
        Je(f) ? f.selectionStart = d : D && (h = Ke(f), k = h[0], k.inRange(h[1]) && (d = Le(f, d), k.collapse(!0), k.move("character", d), k.select()));
        f = c.l;
        Je(f) ? f.selectionEnd = g : D && (h = Ke(f), d = h[1], h[0].inRange(d) && (g = Le(f, g), f = Le(f, He(f)), d.collapse(!0), d.moveEnd("character", g - f), d.select()))
      }
    }else {
      c.Ra(d)
    }
    c.Gc = !0;
    a.Ld ? (a.Q = null, De(a)) : a.ca();
    a.dispatchEvent({type:"update", lb:b});
    a.Ld && a.mb.update(!0);
    return!0
  }
  a.ca();
  a.dispatchEvent({type:"update", lb:null});
  return!1
}
m.ca = function() {
  this.na = -1;
  this.Q = null;
  this.A += this.p.length;
  this.p = [];
  window.clearTimeout(this.wa);
  this.wa = null;
  this.g.ca();
  this.dispatchEvent("suggestionsupdate");
  this.dispatchEvent(ze)
};
function De(a) {
  a.wa || (a.wa = window.setTimeout(x(a.ca, a), 100))
}
m.ed = function() {
  return this.wa ? (window.clearTimeout(this.wa), this.wa = null, !0) : !1
};
function Ce(a) {
  a.ed() || window.setTimeout(x(a.ed, a), 10)
}
m.d = function() {
  ve.b.d.call(this);
  delete this.gd;
  this.g.B();
  this.mb.B();
  this.hb = null
};
m.me = function(a, b, c) {
  this.Q == a && this.Cc(b, c)
};
m.Cc = function(a, b) {
  var c = "object" == fa(b) && b, d = (c ? c.Xe() : b) ? Ae(this, this.na) : -1;
  this.A += this.p.length;
  this.p = a;
  for(var g = [], f = 0;f < a.length;++f) {
    g.push({id:this.A + f, data:a[f]})
  }
  f = null;
  this.r && (f = this.gd[w(this.r)] || this.r);
  this.g.Sd = f;
  this.g.Cc(g, this.Q, this.r);
  f = this.Td;
  c && void 0 !== c.ce() && (f = c.ce());
  this.na = -1;
  (f || 0 <= d) && (0 != g.length && this.Q) && (0 <= d ? this.ha(this.A + d) : Ee(this));
  this.dispatchEvent("suggestionsupdate")
};
function Ae(a, b) {
  var c = b - a.A;
  return 0 > c || c >= a.p.length ? -1 : c
}
m.ec = function(a) {
  var b = this.mb;
  b.ec.apply(b, arguments)
};
m.update = function(a) {
  this.mb.update(a)
};
function Me() {
  R.call(this);
  this.h = Ne;
  this.Nc = this.startTime = null
}
B(Me, R);
var Ne = 0;
Me.prototype.Ba = function() {
  this.da("begin")
};
Me.prototype.Ma = function() {
  this.da("end")
};
Me.prototype.da = function(a) {
  this.dispatchEvent(a)
};
function Oe(a, b, c) {
  M.call(this);
  this.xc = a;
  this.Ka = b || 0;
  this.Ja = c;
  this.Ud = x(this.Yd, this)
}
B(Oe, M);
m = Oe.prototype;
m.aa = 0;
m.d = function() {
  Oe.b.d.call(this);
  this.stop();
  delete this.xc;
  delete this.Ja
};
m.start = function(a) {
  this.stop();
  this.aa = Yd(this.Ud, t(a) ? a : this.Ka)
};
m.stop = function() {
  this.bb() && p.clearTimeout(this.aa);
  this.aa = 0
};
m.bb = function() {
  return 0 != this.aa
};
m.Yd = function() {
  this.aa = 0;
  this.xc && this.xc.call(this.Ja)
};
var vb = {}, Pe = null;
function Qe(a) {
  a = w(a);
  delete vb[a];
  ub() && Pe && Pe.stop()
}
function Re() {
  Pe || (Pe = new Oe(function() {
    Se()
  }, 20));
  var a = Pe;
  a.bb() || a.start()
}
function Se() {
  var a = y();
  qb(vb, function(b) {
    Te(b, a)
  });
  ub() || Re()
}
;function Ue(a, b, c, d) {
  Me.call(this);
  if(!u(a) || !u(b)) {
    throw Error("Start and end parameters must be arrays");
  }
  if(a.length != b.length) {
    throw Error("Start and end points must be the same length");
  }
  this.ob = a;
  this.$d = b;
  this.duration = c;
  this.Ic = d;
  this.coords = [];
  this.Yb = !1
}
B(Ue, Me);
m = Ue.prototype;
m.Rc = 0;
m.O = 0;
m.uc = null;
m.play = function(a) {
  if(a || this.h == Ne) {
    this.O = 0, this.coords = this.ob
  }else {
    if(1 == this.h) {
      return!1
    }
  }
  Qe(this);
  this.startTime = a = y();
  -1 == this.h && (this.startTime -= this.duration * this.O);
  this.Nc = this.startTime + this.duration;
  this.uc = this.startTime;
  this.O || this.Ba();
  this.da("play");
  -1 == this.h && this.da("resume");
  this.h = 1;
  var b = w(this);
  b in vb || (vb[b] = this);
  Re();
  Te(this, a);
  return!0
};
m.stop = function(a) {
  Qe(this);
  this.h = Ne;
  a && (this.O = 1);
  Ve(this, this.O);
  this.da("stop");
  this.Ma()
};
m.d = function() {
  this.h == Ne || this.stop(!1);
  this.da("destroy");
  Ue.b.d.call(this)
};
function Te(a, b) {
  a.O = (b - a.startTime) / (a.Nc - a.startTime);
  1 <= a.O && (a.O = 1);
  a.Rc = 1E3 / (b - a.uc);
  a.uc = b;
  Ve(a, a.O);
  1 == a.O ? (a.h = Ne, Qe(a), a.da("finish"), a.Ma()) : 1 == a.h && a.zc()
}
function Ve(a, b) {
  ia(a.Ic) && (b = a.Ic(b));
  a.coords = Array(a.ob.length);
  for(var c = 0;c < a.ob.length;c++) {
    a.coords[c] = (a.$d[c] - a.ob[c]) * b + a.ob[c]
  }
}
m.zc = function() {
  this.da("animate")
};
m.da = function(a) {
  this.dispatchEvent(new We(a, this))
};
function We(a, b) {
  N.call(this, a);
  this.coords = b.coords;
  this.x = b.coords[0];
  this.y = b.coords[1];
  this.z = b.coords[2];
  this.duration = b.duration;
  this.O = b.O;
  this.We = b.Rc;
  this.state = b.h;
  this.Re = b
}
B(We, N);
function Xe(a, b, c, d, g) {
  Ue.call(this, b, c, d, g);
  this.element = a
}
B(Xe, Ue);
m = Xe.prototype;
m.Xb = s;
m.ld = function() {
  t(this.U) || (this.U = Zc(this.element));
  return this.U
};
m.zc = function() {
  this.Xb();
  Xe.b.zc.call(this)
};
m.Ma = function() {
  this.Xb();
  Xe.b.Ma.call(this)
};
m.Ba = function() {
  this.Xb();
  Xe.b.Ba.call(this)
};
function Ye(a, b, c, d, g) {
  ha(b) && (b = [b]);
  ha(c) && (c = [c]);
  Xe.call(this, a, b, c, d, g);
  if(1 != b.length || 1 != c.length) {
    throw Error("Start and end points must be 1D");
  }
}
B(Ye, Xe);
Ye.prototype.Xb = function() {
  cd(this.element, this.coords[0])
};
Ye.prototype.show = function() {
  this.element.style.display = ""
};
function Ze(a, b, c) {
  Ye.call(this, a, 1, 0, b, c)
}
B(Ze, Ye);
Ze.prototype.Ba = function() {
  this.show();
  Ze.b.Ba.call(this)
};
Ze.prototype.Ma = function() {
  this.element.style.display = "none";
  Ze.b.Ma.call(this)
};
function $e(a, b, c) {
  Ye.call(this, a, 0, 1, b, c)
}
B($e, Ye);
$e.prototype.Ba = function() {
  this.show();
  $e.b.Ba.call(this)
};
function af(a, b, c, d) {
  R.call(this);
  this.w = a || document.body;
  this.s = J(this.w);
  this.Ae = !a;
  this.a = null;
  this.Q = "";
  this.p = [];
  this.Da = [];
  this.Ed = this.Eb = -1;
  this.n = !1;
  this.className = "ac-renderer";
  this.Fc = "ac-row";
  this.od = "active";
  this.Jc = "ac-active";
  this.ie = "ac-highlighted";
  this.Ya = b || null;
  this.Me = null != d ? d : !0;
  this.ne = !0;
  this.qc = !1;
  this.Be = !!c;
  this.Vb = !1;
  this.Lb = 0
}
B(af, R);
m = af.prototype;
m.c = e("a");
m.Cc = function(a, b, c) {
  this.Q = b;
  this.p = a;
  this.Eb = -1;
  this.Ed = y();
  this.r = c;
  this.Da = [];
  bf(this)
};
m.ca = function() {
  this.r && Oc(this.r, null);
  this.n && (this.n = !1, this.r && S(this.r, "haspopup", !1), 0 < this.Lb ? (bc(this.Ea), this.Ea = new Ze(this.a, this.Lb), this.Ea.play()) : W(this.a, !1))
};
m.show = function() {
  this.n || (this.n = !0, this.r && (Nc(this.r, "combobox"), S(this.r, "autocomplete", "list"), S(this.r, "haspopup", !0)), 0 < this.Lb ? (bc(this.Ea), this.Ea = new $e(this.a, this.Lb), this.Ea.play()) : W(this.a, !0))
};
function cf(a, b) {
  var c = 0 <= b && b < a.Da.length ? a.Da[b] : void 0;
  if(a.dispatchEvent({type:"rowhilite", bf:c}) && (0 <= a.Eb && mb(a.Da[a.Eb], a.Jc, a.od), a.Eb = b, c)) {
    H(c, a.Jc, a.od);
    a.r && Oc(a.r, c);
    var d = a.a, g = Yc(c), f = Yc(d), h = jd(d), k = g.x - f.x - h.left, g = g.y - f.y - h.top, f = d.clientHeight - c.offsetHeight, h = d.scrollLeft, l = d.scrollTop, h = h + Math.min(k, Math.max(k - (d.clientWidth - c.offsetWidth), 0)), l = l + Math.min(g, Math.max(g - f, 0)), c = new I(h, l);
    d.scrollLeft = c.x;
    d.scrollTop = c.y
  }
}
m.ha = function(a) {
  if(-1 == a) {
    cf(this, -1)
  }else {
    for(var b = 0;b < this.p.length;b++) {
      if(this.p[b].id == a) {
        cf(this, b);
        break
      }
    }
  }
};
function df(a) {
  if(!a.a) {
    var b = a.s.i("div", {style:"display:none"});
    a.a = b;
    H(b, a.className);
    Nc(b, "listbox");
    b.id = md(ld.ga());
    a.s.appendChild(a.w, b);
    Q(b, "click", a.Tc, !1, a);
    Q(b, "mousedown", a.Vc, !1, a);
    Q(b, "mouseover", a.Yc, !1, a)
  }
}
function bf(a) {
  df(a);
  a.Vb && (a.a.style.visibility = "hidden");
  a.Pe && (a.a.style.minWidth = a.Pe.clientWidth + "px");
  a.Da.length = 0;
  a.s.yd(a.a);
  if(a.Ya && a.Ya.sa) {
    a.Ya.sa(a, a.a, a.p, a.Q)
  }else {
    var b = null;
    Ca(a.p, function(a) {
      var d = this.Q, g = this.s.i("div", {className:this.Fc, id:md(ld.ga())});
      Nc(g, "option");
      this.Ya && this.Ya.af || (g.innerHTML = sa(a.data.toString()));
      d && this.Me && ef(this, g, d);
      H(g, this.Fc);
      this.Da.push(g);
      a = g;
      this.Vb ? this.a.insertBefore(a, b) : this.s.appendChild(this.a, a);
      b = a
    }, a)
  }
  0 == a.p.length ? a.ca() : (a.show(), a.Dc(), ed(a.a, !0))
}
m.Dc = function() {
  if(this.r && this.Ae) {
    var a, b = this.Be ? 3 : 1;
    this.Vb && (b ^= 1);
    a = b;
    var c = this.Sd || this.r, b = this.a, d = a ^ 1, g, f;
    if(g = b.offsetParent) {
      var h = "HTML" == g.tagName || "BODY" == g.tagName;
      h && "static" == Sc(g) || (f = Yc(g), h || (h = (h = Zc(g)) && E ? -g.scrollLeft : !h || D && G("8") || "visible" == Rc(g, "overflowX") ? g.scrollLeft : g.scrollWidth - g.clientWidth - g.scrollLeft, f = ob(f, new I(h, g.scrollTop))))
    }
    g = f || new I;
    f = Yc(c);
    h = ad(c);
    f = new U(f.x, f.y, h.width, h.height);
    if(h = Xc(c)) {
      var k = new U(h.left, h.top, h.right - h.left, h.bottom - h.top), h = Math.max(f.left, k.left), l = Math.min(f.left + f.width, k.left + k.width);
      if(h <= l) {
        var n = Math.max(f.top, k.top), k = Math.min(f.top + f.height, k.top + k.height);
        n <= k && (f.left = h, f.top = n, f.width = l - h, f.height = k - n)
      }
    }
    h = J(c);
    n = J(b);
    if(h.j != n.j) {
      var l = h.j.body, n = Sb(n), k = new I(0, 0), q = Cb(K(l)), r = l;
      do {
        var z;
        if(q == n) {
          z = Yc(r)
        }else {
          z = r;
          var P = void 0;
          if(z.getBoundingClientRect) {
            P = Vc(z), P = new I(P.left, P.top)
          }else {
            var P = Tb(J(z)), A = Yc(z), P = new I(A.x - P.x, A.y - P.y)
          }
          A = void 0;
          if(E && !G(12)) {
            A = void 0;
            A = void 0;
            D ? A = "-ms-transform" : F ? A = "-webkit-transform" : Va ? A = "-o-transform" : E && (A = "-moz-transform");
            var rb = void 0;
            A && (rb = Rc(z, A));
            rb || (rb = Rc(z, "transform"));
            A = rb ? (z = rb.match(kd)) ? new I(parseFloat(z[1]), parseFloat(z[2])) : new I(0, 0) : new I(0, 0);
            A = new I(P.x + A.x, P.y + A.y)
          }else {
            A = P
          }
          z = A
        }
        k.x += z.x;
        k.y += z.y
      }while(q && q != n && (r = q.frameElement) && (q = q.parent));
      l = ob(k, Yc(l));
      D && !Rb(h) && (l = ob(l, Tb(h)));
      f.left += l.x;
      f.top += l.y
    }
    a = (a & 4 && Zc(c) ? a ^ 2 : a) & -5;
    c = new I(a & 2 ? f.left + f.width : f.left, a & 1 ? f.top + f.height : f.top);
    c = ob(c, g);
    if(a = Xc(b)) {
      a.top -= g.y, a.right -= g.x, a.bottom -= g.y, a.left -= g.x
    }
    c = c.va();
    f = (d & 4 && Zc(b) ? d ^ 2 : d) & -5;
    g = ad(b);
    d = g.va();
    0 != f && (f & 2 && (c.x -= d.width + 0), f & 1 && (c.y -= d.height + 0));
    a ? (f = c, h = 65, l = 0, 65 == (h & 65) && (f.x < a.left || f.x >= a.right) && (h &= -2), 132 == (h & 132) && (f.y < a.top || f.y >= a.bottom) && (h &= -5), f.x < a.left && h & 1 && (f.x = a.left, l |= 1), f.x < a.left && (f.x + d.width > a.right && h & 16) && (d.width = Math.max(d.width - (f.x + d.width - a.right), 0), l |= 4), f.x + d.width > a.right && h & 1 && (f.x = Math.max(a.right - d.width, a.left), l |= 1), h & 2 && (l |= (f.x < a.left ? 16 : 0) | (f.x + d.width > a.right ? 32 : 0)), 
    f.y < a.top && h & 4 && (f.y = a.top, l |= 2), f.y <= a.top && (f.y + d.height < a.bottom && h & 32) && (d.height = Math.max(d.height - (a.top - f.y), 0), f.y = a.top, l |= 8), f.y >= a.top && (f.y + d.height > a.bottom && h & 32) && (d.height = Math.max(d.height - (f.y + d.height - a.bottom), 0), l |= 8), f.y + d.height > a.bottom && h & 4 && (f.y = Math.max(a.bottom - d.height, a.top), l |= 2), h & 8 && (l |= (f.y < a.top ? 64 : 0) | (f.y + d.height > a.bottom ? 128 : 0)), a = l) : a = 256;
    a & 496 || (Tc(b, c), g == d || g && d && g.width == d.width && g.height == d.height || (c = Rb(J(K(b))), !D || c && G("8") ? (b = b.style, E ? b.MozBoxSizing = "border-box" : F ? b.WebkitBoxSizing = "border-box" : b.boxSizing = "border-box", b.width = Math.max(d.width, 0) + "px", b.height = Math.max(d.height, 0) + "px") : (a = b.style, c ? (D ? (c = gd(b, "paddingLeft"), g = gd(b, "paddingRight"), f = gd(b, "paddingTop"), h = gd(b, "paddingBottom"), c = new T(f, g, h, c)) : (c = V(b, "paddingLeft"), 
    g = V(b, "paddingRight"), f = V(b, "paddingTop"), h = V(b, "paddingBottom"), c = new T(parseFloat(f), parseFloat(g), parseFloat(h), parseFloat(c))), b = jd(b), a.pixelWidth = d.width - b.left - c.left - c.right - b.right, a.pixelHeight = d.height - b.top - c.top - c.bottom - b.bottom) : (a.pixelWidth = d.width, a.pixelHeight = d.height))));
    this.Vb && (this.a.style.visibility = "visible")
  }
};
m.d = function() {
  this.a && (vc(this.a, "click", this.Tc, !1, this), vc(this.a, "mousedown", this.Vc, !1, this), vc(this.a, "mouseover", this.Yc, !1, this), this.s.removeNode(this.a), this.a = null, this.n = !1);
  bc(this.Ea);
  this.w = null;
  af.b.d.call(this)
};
function ef(a, b, c) {
  if(3 == b.nodeType) {
    var d = null;
    u(c) && (1 < c.length && !a.qc) && (d = La(c, 1));
    c = ff(a, c);
    if(0 != c.length) {
      var g = b.nodeValue, f = a.ne ? RegExp("([\\s\\S]*?)\\b(" + c + ")", "gi") : RegExp("([\\s\\S]*?)(" + c + ")", "gi");
      c = [];
      for(var h = 0, k = f.exec(g), l = 0;k;) {
        l++, c.push(k[1]), c.push(k[2]), h = f.lastIndex, k = f.exec(g)
      }
      c.push(g.substring(h));
      if(1 < c.length) {
        d = a.qc ? l : 1;
        for(g = 0;g < d;g++) {
          f = 2 * g, b.nodeValue = c[f], h = a.s.createElement("b"), h.className = a.ie, a.s.appendChild(h, a.s.createTextNode(c[f + 1])), h = b.parentNode.insertBefore(h, b.nextSibling), b.parentNode.insertBefore(a.s.createTextNode(""), h.nextSibling), b = h.nextSibling
        }
        a = La(c, 2 * d);
        b.nodeValue = a.join("")
      }else {
        d && ef(a, b, d)
      }
    }
  }else {
    for(b = b.firstChild;b;) {
      d = b.nextSibling, ef(a, b, c), b = d
    }
  }
}
function ff(a, b) {
  var c = "";
  if(!b) {
    return c
  }
  u(b) && (b = Da(b, function(a) {
    return!/^[\s\xa0]*$/.test(null == a ? "" : String(a))
  }));
  a.qc ? u(b) ? c = Ea(b, ya).join("|") : (c = b.replace(/[\s\xa0]+/g, " ").replace(/^\s+|\s+$/g, ""), c = ya(c), c = c.replace(/ /g, "|")) : u(b) ? c = 0 < b.length ? ya(b[0]) : "" : /^\W/.test(b) || (c = ya(b));
  return c
}
function gf(a, b) {
  for(;b && b != a.a && !Ia(lb(b), a.Fc);) {
    b = b.parentNode
  }
  return b ? Ba(a.Da, b) : -1
}
m.Tc = function(a) {
  var b = gf(this, a.target);
  0 <= b && this.dispatchEvent({type:xe, lb:this.p[b].id});
  a.stopPropagation()
};
m.Vc = function(a) {
  a.stopPropagation();
  a.preventDefault()
};
m.Yc = function(a) {
  a = gf(this, a.target);
  0 <= a && !(300 > y() - this.Ed) && this.dispatchEvent({type:we, lb:this.p[a].id})
};
function He(a) {
  var b;
  a: {
    var c = 0, d = 0;
    if(Je(a)) {
      c = a.selectionStart, d = -1
    }else {
      if(D) {
        var g = Ke(a);
        b = g[0];
        g = g[1];
        if(b.inRange(g)) {
          b.setEndPoint("EndToStart", g);
          if("textarea" == a.type) {
            g.duplicate();
            c = a = b.text;
            for(d = !1;!d;) {
              0 == b.compareEndPoints("StartToEnd", b) ? d = !0 : (b.moveEnd("character", -1), b.text == a ? c += "\r\n" : d = !0)
            }
            b = [c.length, -1];
            break a
          }
          c = b.text.length;
          d = -1
        }
      }
    }
    b = [c, d]
  }
  return b[0]
}
function Ke(a) {
  var b = a.ownerDocument || a.document, c = b.selection.createRange();
  "textarea" == a.type ? (b = b.body.createTextRange(), b.moveToElementText(a)) : b = a.createTextRange();
  return[b, c]
}
function Le(a, b) {
  "textarea" == a.type && (b = a.value.substring(0, b).replace(/(\r\n|\r|\n)/g, "\n").length);
  return b
}
function Je(a) {
  try {
    return"number" == typeof a.selectionStart
  }catch(b) {
    return!1
  }
}
;var hf, jf;
jf = hf = !1;
var kf = Ra();
kf && (-1 != kf.indexOf("Firefox") || -1 != kf.indexOf("Camino") || (-1 != kf.indexOf("iPhone") || -1 != kf.indexOf("iPod") ? hf = !0 : -1 != kf.indexOf("iPad") && (jf = !0)));
var lf = hf, mf = jf;
function nf(a, b, c, d) {
  M.call(this);
  d = d || 150;
  this.La = null != c ? c : !0;
  this.nb = a || ",;";
  this.Wd = this.nb.substring(0, 1);
  a = this.La ? "[\\s" + this.nb + "]+" : "[\\s]+";
  this.Md = RegExp("^" + a + "|" + a + "$", "g");
  this.De = RegExp("\\s*[" + this.nb + "]$");
  this.pd = b || "";
  this.ze = this.La;
  this.q = 0 < d ? new Wd(d) : null;
  this.t = new Pc(this);
  this.ac = new Pc(this);
  this.M = new Fc;
  this.md = -1
}
B(nf, M);
var of = (lf || mf) && !G("533.17.9");
m = nf.prototype;
m.Oe = !0;
m.be = !0;
m.Nd = !1;
m.Fe = !0;
m.Ee = !0;
m.bc = null;
m.l = null;
m.vc = "";
m.ta = !1;
m.Gc = !1;
m.Ke = !0;
m.I = function() {
  return this.l.value
};
m.Ra = function(a) {
  this.l.value = a
};
m.ec = function(a) {
  for(var b = 0;b < arguments.length;b++) {
    var c = arguments[b];
    ja(c) && 1 == c.nodeType && S(c, "haspopup", !0);
    this.t.e(c, "focus", this.Cb);
    this.t.e(c, "blur", this.Ab);
    if(!this.l && (this.ac.e(c, "keydown", this.ve), ja(c) && 1 == c.nodeType)) {
      var d;
      a: {
        var g = K(c);
        try {
          d = g && g.activeElement;
          break a
        }catch(f) {
        }
        d = null
      }
      d == c && pf(this, c)
    }
  }
};
m.d = function() {
  nf.b.d.call(this);
  null != this.bc && window.clearTimeout(this.bc);
  this.t.B();
  delete this.t;
  this.ac.B();
  this.M.B();
  bc(this.q)
};
m.nc = function(a) {
  switch(a.keyCode) {
    case 40:
      if(this.k.oa()) {
        return this.Nd ? Fe(this.k) : Ee(this.k), a.preventDefault(), !0
      }
      if(!this.La) {
        return this.update(!0), a.preventDefault(), !0
      }
      break;
    case 38:
      if(this.k.oa()) {
        return this.Nd ? Ee(this.k) : Fe(this.k), a.preventDefault(), !0
      }
      break;
    case 9:
      if(this.k.oa() && !a.shiftKey) {
        if(this.update(), Be(this.k) && this.ze) {
          return a.preventDefault(), !0
        }
      }else {
        this.k.ca()
      }
      break;
    case 13:
      if(this.k.oa()) {
        if(this.update(), Be(this.k)) {
          return a.preventDefault(), a.stopPropagation(), !0
        }
      }else {
        this.k.ca()
      }
      break;
    case 27:
      if(this.k.oa()) {
        return this.k.ca(), a.preventDefault(), a.stopPropagation(), !0
      }
      break;
    case 229:
      if(!this.ta) {
        return this.ta || (this.t.e(this.l, "keyup", this.sd), this.t.e(this.l, "keypress", this.rd), this.ta = !0), !0
      }
      break;
    default:
      this.q && !this.Ke && (this.q.stop(), this.q.start())
  }
  return qf(this, a)
};
function qf(a, b) {
  var c = a.La && b.charCode && -1 != a.nb.indexOf(String.fromCharCode(b.charCode));
  a.Fe && c && a.update();
  return a.Ee && c && Be(a.k) ? (b.preventDefault(), !0) : !1
}
m.fe = ba(!1);
m.Cb = function(a) {
  pf(this, a.target || null)
};
function pf(a, b) {
  a.ac.Ca();
  a.k && Ce(a.k);
  b != a.l && (a.l = b, a.q && (a.q.start(), a.t.e(a.q, Xd, a.vd)), a.vc = a.I(), Gc(a.M, a.l), a.t.e(a.M, "key", a.jb), a.t.e(a.l, "mousedown", a.td), D && a.t.e(a.l, "keypress", a.qd))
}
m.Ab = function() {
  of ? this.bc = window.setTimeout(x(this.wd, this), 0) : this.wd()
};
m.wd = function() {
  this.l && (this.t.u(this.M, "key", this.jb), this.M.detach(), this.t.u(this.l, "keyup", this.fe), this.t.u(this.l, "mousedown", this.td), D && this.t.u(this.l, "keypress", this.qd), this.ta && rf(this), this.l = null, this.q && (this.q.stop(), this.t.u(this.q, Xd, this.vd)), this.k && De(this.k))
};
m.vd = function() {
  this.update()
};
m.ve = function(a) {
  this.Cb(a)
};
m.jb = function(a) {
  this.md = a.keyCode;
  this.k && this.nc(a)
};
m.rd = function() {
  this.ta && 229 != this.md && rf(this)
};
m.sd = function(a) {
  this.ta && (13 == a.keyCode || 77 == a.keyCode && a.ctrlKey) && rf(this)
};
m.td = function(a) {
  this.k && this.Db(a)
};
m.Db = aa();
function rf(a) {
  a.ta && (a.ta = !1, a.t.u(a.l, "keypress", a.rd), a.t.u(a.l, "keyup", a.sd))
}
m.qd = function(a) {
  qf(this, a)
};
m.update = function(a) {
  if(this.l && (a || this.I() != this.vc)) {
    if(a || !this.Gc) {
      a = He(this.l);
      var b = this.I();
      a = Ie(this, b)[Ge(this, b, a)];
      a = this.Md ? String(a).replace(this.Md, "") : a;
      this.k && (this.k.r = this.l, b = this.k, this.I(), b.Q != a && (b.Q = a, sf(b.Q, x(b.me, b)), Ce(b)))
    }
    this.vc = this.I()
  }
  this.Gc = !1
};
function Ge(a, b, c) {
  a = Ie(a, b);
  if(c == b.length) {
    return a.length - 1
  }
  for(var d = b = 0, g = 0;d < a.length && g <= c;d++) {
    g += a[d].length, b = d
  }
  return b
}
function Ie(a, b) {
  if(!a.La) {
    return[b]
  }
  for(var c = String(b).split(""), d = [], g = [], f = 0, h = !1;f < c.length;f++) {
    a.pd && -1 != a.pd.indexOf(c[f]) ? (a.be && !h && (d.push(g.join("")), g.length = 0), g.push(c[f]), h = !h) : h || -1 == a.nb.indexOf(c[f]) ? g.push(c[f]) : (g.push(c[f]), d.push(g.join("")), g.length = 0)
  }
  d.push(g.join(""));
  return d
}
;function tf(a) {
  a = String(a);
  if(/^\s*$/.test(a) ? 0 : /^[\],:{}\s\u2028\u2029]*$/.test(a.replace(/\\["\\\/bfnrtu]/g, "@").replace(/"[^"\\\n\r\u2028\u2029\x00-\x08\x0a-\x1f]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:[\s\u2028\u2029]*\[)+/g, ""))) {
    try {
      return eval("(" + a + ")")
    }catch(b) {
    }
  }
  throw Error("Invalid JSON string: " + a);
}
;function uf(a) {
  return vf(a || arguments.callee.caller, [])
}
function vf(a, b) {
  var c = [];
  if(Ia(b, a)) {
    c.push("[...circular reference...]")
  }else {
    if(a && 50 > b.length) {
      c.push(wf(a) + "(");
      for(var d = a.arguments, g = 0;g < d.length;g++) {
        0 < g && c.push(", ");
        var f;
        f = d[g];
        switch(typeof f) {
          case "object":
            f = f ? "object" : "null";
            break;
          case "string":
            break;
          case "number":
            f = String(f);
            break;
          case "boolean":
            f = f ? "true" : "false";
            break;
          case "function":
            f = (f = wf(f)) ? f : "[fn]";
            break;
          default:
            f = typeof f
        }
        40 < f.length && (f = f.substr(0, 40) + "...");
        c.push(f)
      }
      b.push(a);
      c.push(")\n");
      try {
        c.push(vf(a.caller, b))
      }catch(h) {
        c.push("[exception trying to get caller]\n")
      }
    }else {
      a ? c.push("[...long stack...]") : c.push("[end]")
    }
  }
  return c.join("")
}
function wf(a) {
  if(xf[a]) {
    return xf[a]
  }
  a = String(a);
  if(!xf[a]) {
    var b = /function ([^\(]+)/.exec(a);
    xf[a] = b ? b[1] : "[Anonymous]"
  }
  return xf[a]
}
var xf = {};
function yf(a, b, c, d, g) {
  this.reset(a, b, c, d, g)
}
yf.prototype.Ge = 0;
yf.prototype.Pc = null;
yf.prototype.Oc = null;
var zf = 0;
yf.prototype.reset = function(a, b, c, d, g) {
  this.Ge = "number" == typeof g ? g : zf++;
  this.cf = d || y();
  this.gb = a;
  this.qe = b;
  this.Ze = c;
  delete this.Pc;
  delete this.Oc
};
yf.prototype.Cd = function(a) {
  this.gb = a
};
function Af(a) {
  this.re = a
}
Af.prototype.w = null;
Af.prototype.gb = null;
Af.prototype.L = null;
Af.prototype.$c = null;
function Bf(a, b) {
  this.name = a;
  this.value = b
}
Bf.prototype.toString = e("name");
var Cf = new Bf("SEVERE", 1E3), Df = new Bf("WARNING", 900), Ef = new Bf("CONFIG", 700), Ff = new Bf("FINE", 500);
m = Af.prototype;
m.getParent = e("w");
m.Sc = function() {
  this.L || (this.L = {});
  return this.L
};
m.Cd = function(a) {
  this.gb = a
};
function Gf(a) {
  if(a.gb) {
    return a.gb
  }
  if(a.w) {
    return Gf(a.w)
  }
  Aa("Root logger has no level set.");
  return null
}
m.log = function(a, b, c) {
  if(a.value >= Gf(this).value) {
    for(a = this.de(a, b, c), b = "log:" + a.qe, p.console && (p.console.timeStamp ? p.console.timeStamp(b) : p.console.markTimeline && p.console.markTimeline(b)), p.msWriteProfilerMark && p.msWriteProfilerMark(b), b = this;b;) {
      c = b;
      var d = a;
      if(c.$c) {
        for(var g = 0, f = void 0;f = c.$c[g];g++) {
          f(d)
        }
      }
      b = b.getParent()
    }
  }
};
m.de = function(a, b, c) {
  var d = new yf(a, String(b), this.re);
  if(c) {
    d.Pc = c;
    var g;
    var f = arguments.callee.caller;
    try {
      var h;
      var k = da("window.location.href");
      if(v(c)) {
        h = {message:c, name:"Unknown error", lineNumber:"Not available", fileName:k, stack:"Not available"}
      }else {
        var l, n, q = !1;
        try {
          l = c.lineNumber || c.Ye || "Not available"
        }catch(r) {
          l = "Not available", q = !0
        }
        try {
          n = c.fileName || c.filename || c.sourceURL || p.$googDebugFname || k
        }catch(z) {
          n = "Not available", q = !0
        }
        h = !q && c.lineNumber && c.fileName && c.stack && c.message && c.name ? c : {message:c.message || "Not available", name:c.name || "UnknownError", lineNumber:l, fileName:n, stack:c.stack || "Not available"}
      }
      g = "Message: " + sa(h.message) + '\nUrl: \x3ca href\x3d"view-source:' + h.fileName + '" target\x3d"_new"\x3e' + h.fileName + "\x3c/a\x3e\nLine: " + h.lineNumber + "\n\nBrowser stack:\n" + sa(h.stack + "-\x3e ") + "[end]\n\nJS stack traversal:\n" + sa(uf(f) + "-\x3e ")
    }catch(P) {
      g = "Exception trying to expose exception! You win, we lose. " + P
    }
    d.Oc = g
  }
  return d
};
var Hf = {}, If = null;
function Jf(a) {
  If || (If = new Af(""), Hf[""] = If, If.Cd(Ef));
  var b;
  if(!(b = Hf[a])) {
    b = new Af(a);
    var c = a.lastIndexOf("."), d = a.substr(c + 1), c = Jf(a.substr(0, c));
    c.Sc()[d] = b;
    b.w = c;
    Hf[a] = b
  }
  return b
}
;function Kf(a, b) {
  a && a.log(Ff, b, void 0)
}
;function Lf() {
}
Lf.prototype.rb = null;
var Mf;
function Nf() {
}
B(Nf, Lf);
function Of(a) {
  return(a = Pf(a)) ? new ActiveXObject(a) : new XMLHttpRequest
}
function Qf(a) {
  var b = {};
  Pf(a) && (b[0] = !0, b[1] = !0);
  return b
}
function Pf(a) {
  if(!a.dd && "undefined" == typeof XMLHttpRequest && "undefined" != typeof ActiveXObject) {
    for(var b = ["MSXML2.XMLHTTP.6.0", "MSXML2.XMLHTTP.3.0", "MSXML2.XMLHTTP", "Microsoft.XMLHTTP"], c = 0;c < b.length;c++) {
      var d = b[c];
      try {
        return new ActiveXObject(d), a.dd = d
      }catch(g) {
      }
    }
    throw Error("Could not create ActiveXObject. ActiveX might be disabled, or MSXML might not be installed");
  }
  return a.dd
}
Mf = new Nf;
var Rf = RegExp("^(?:([^:/?#.]+):)?(?://(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?\x3d[/#?]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#(.*))?$"), Sf = F;
function Tf(a, b) {
  if(Sf) {
    Sf = !1;
    var c = p.location;
    if(c) {
      var d = c.href;
      if(d && (d = (d = Tf(3, d)) && decodeURIComponent(d)) && d != c.hostname) {
        throw Sf = !0, Error();
      }
    }
  }
  return b.match(Rf)[a] || null
}
;function Uf(a) {
  R.call(this);
  this.headers = new Ud;
  this.Ua = a || null;
  this.ka = !1;
  this.$b = this.f = null;
  this.nd = this.Ib = "";
  this.cb = 0;
  this.eb = "";
  this.Aa = this.rc = this.Fb = this.kc = !1;
  this.pb = 0;
  this.Tb = null;
  this.Ad = Vf;
  this.Zb = this.Qe = !1
}
B(Uf, R);
var Vf = "", Wf = Uf.prototype, Xf = Jf("goog.net.XhrIo");
Wf.N = Xf;
var Yf = /^https?$/i, Zf = ["POST", "PUT"], $f = [];
function ag(a, b) {
  var c = new Uf;
  $f.push(c);
  b && c.e("complete", b);
  c.Kb("ready", c.Vd);
  c.send(a, void 0, void 0, void 0)
}
m = Uf.prototype;
m.Vd = function() {
  this.B();
  Ja($f, this)
};
m.send = function(a, b, c, d) {
  if(this.f) {
    throw Error("[goog.net.XhrIo] Object is active with another request\x3d" + this.Ib + "; newUri\x3d" + a);
  }
  b = b ? b.toUpperCase() : "GET";
  this.Ib = a;
  this.eb = "";
  this.cb = 0;
  this.nd = b;
  this.kc = !1;
  this.ka = !0;
  this.f = this.Ua ? Of(this.Ua) : Of(Mf);
  this.$b = this.Ua ? this.Ua.rb || (this.Ua.rb = Qf(this.Ua)) : Mf.rb || (Mf.rb = Qf(Mf));
  this.f.onreadystatechange = x(this.ud, this);
  try {
    Kf(this.N, bg(this, "Opening Xhr")), this.rc = !0, this.f.open(b, a, !0), this.rc = !1
  }catch(g) {
    Kf(this.N, bg(this, "Error opening Xhr: " + g.message));
    cg(this, g);
    return
  }
  a = c || "";
  var f = this.headers.va();
  d && Td(d, function(a, b) {
    f.set(b, a)
  });
  d = Ga(f.xb());
  c = p.FormData && a instanceof p.FormData;
  !Ia(Zf, b) || (d || c) || f.set("Content-Type", "application/x-www-form-urlencoded;charset\x3dutf-8");
  Td(f, function(a, b) {
    this.f.setRequestHeader(b, a)
  }, this);
  this.Ad && (this.f.responseType = this.Ad);
  "withCredentials" in this.f && (this.f.withCredentials = this.Qe);
  try {
    dg(this), 0 < this.pb && (this.Zb = D && G(9) && ha(this.f.timeout) && t(this.f.ontimeout), Kf(this.N, bg(this, "Will abort after " + this.pb + "ms if incomplete, xhr2 " + this.Zb)), this.Zb ? (this.f.timeout = this.pb, this.f.ontimeout = x(this.Hd, this)) : this.Tb = Yd(this.Hd, this.pb, this)), Kf(this.N, bg(this, "Sending request")), this.Fb = !0, this.f.send(a), this.Fb = !1
  }catch(h) {
    Kf(this.N, bg(this, "Send error: " + h.message)), cg(this, h)
  }
};
function Ha(a) {
  return"content-type" == a.toLowerCase()
}
m.Hd = function() {
  "undefined" != typeof ca && this.f && (this.eb = "Timed out after " + this.pb + "ms, aborting", this.cb = 8, Kf(this.N, bg(this, this.eb)), this.dispatchEvent("timeout"), this.abort(8))
};
function cg(a, b) {
  a.ka = !1;
  a.f && (a.Aa = !0, a.f.abort(), a.Aa = !1);
  a.eb = b;
  a.cb = 5;
  eg(a);
  fg(a)
}
function eg(a) {
  a.kc || (a.kc = !0, a.dispatchEvent("complete"), a.dispatchEvent("error"))
}
m.abort = function(a) {
  this.f && this.ka && (Kf(this.N, bg(this, "Aborting")), this.ka = !1, this.Aa = !0, this.f.abort(), this.Aa = !1, this.cb = a || 7, this.dispatchEvent("complete"), this.dispatchEvent("abort"), fg(this))
};
m.d = function() {
  this.f && (this.ka && (this.ka = !1, this.Aa = !0, this.f.abort(), this.Aa = !1), fg(this, !0));
  Uf.b.d.call(this)
};
m.ud = function() {
  this.Za || (this.rc || this.Fb || this.Aa ? gg(this) : this.we())
};
m.we = function() {
  gg(this)
};
function gg(a) {
  if(a.ka && "undefined" != typeof ca) {
    if(a.$b[1] && 4 == hg(a) && 2 == ig(a)) {
      Kf(a.N, bg(a, "Local request error detected and ignored"))
    }else {
      if(a.Fb && 4 == hg(a)) {
        Yd(a.ud, 0, a)
      }else {
        if(a.dispatchEvent("readystatechange"), 4 == hg(a)) {
          Kf(a.N, bg(a, "Request complete"));
          a.ka = !1;
          try {
            var b = ig(a), c, d;
            a: {
              switch(b) {
                case 200:
                ;
                case 201:
                ;
                case 202:
                ;
                case 204:
                ;
                case 206:
                ;
                case 304:
                ;
                case 1223:
                  d = !0;
                  break a;
                default:
                  d = !1
              }
            }
            if(!(c = d)) {
              var g;
              if(g = 0 === b) {
                var f = Tf(1, String(a.Ib));
                if(!f && self.location) {
                  var h = self.location.protocol, f = h.substr(0, h.length - 1)
                }
                g = !Yf.test(f ? f.toLowerCase() : "")
              }
              c = g
            }
            if(c) {
              a.dispatchEvent("complete"), a.dispatchEvent("success")
            }else {
              a.cb = 6;
              var k;
              try {
                k = 2 < hg(a) ? a.f.statusText : ""
              }catch(l) {
                Kf(a.N, "Can not get status: " + l.message), k = ""
              }
              a.eb = k + " [" + ig(a) + "]";
              eg(a)
            }
          }finally {
            fg(a)
          }
        }
      }
    }
  }
}
function fg(a, b) {
  if(a.f) {
    dg(a);
    var c = a.f, d = a.$b[0] ? s : null;
    a.f = null;
    a.$b = null;
    b || a.dispatchEvent("ready");
    try {
      c.onreadystatechange = d
    }catch(g) {
      (c = a.N) && c.log(Cf, "Problem encountered resetting onreadystatechange: " + g.message, void 0)
    }
  }
}
function dg(a) {
  a.f && a.Zb && (a.f.ontimeout = null);
  ha(a.Tb) && (p.clearTimeout(a.Tb), a.Tb = null)
}
m.bb = function() {
  return!!this.f
};
function hg(a) {
  return a.f ? a.f.readyState : 0
}
function ig(a) {
  try {
    return 2 < hg(a) ? a.f.status : -1
  }catch(b) {
    return(a = a.N) && a.log(Df, "Can not get status: " + b.message, void 0), -1
  }
}
function jg(a) {
  if(a.f) {
    return tf(a.f.responseText)
  }
}
function bg(a, b) {
  return b + " [" + a.nd + " " + a.Ib + " " + ig(a) + "]"
}
;function kg() {
}
function sf(a, b) {
  ag("http://epsg.io?q\x3d" + a + "\x26format\x3djson", function(c) {
    c = jg(c.target).results;
    var d = [];
    Ca(c, function(a) {
      d.push(a.code + ": " + a.name + ", " + a.area)
    });
    b(a, d)
  })
}
;function lg() {
  Z.call(this);
  !0 != this.yc && fe(this, !0);
  this.Jd = "Vlo\u017ei\u0165 bod.";
  this.qb && Jb(this.qb, "Vlo\u017ei\u0165 bod.");
  this.Qb(mg())
}
B(lg, Z);
lg.prototype.Na = function() {
  lg.b.Na.call(this);
  var a = new nf(null, null, !1), b = new ve(new kg, new af, new nf(void 0, void 0, !1));
  a.k = b;
  a.ec(v("input-proj") ? document.getElementById("input-proj") : "input-proj");
  Q(b, "update", function(a) {
    window.console.log(a)
  })
};
function mg() {
  var a = L("table"), b = L("tr"), c = L("th"), d = L("td"), g = L("input"), f = L("tr"), h = L("th"), k = L("td"), l = L("input"), n = L("tr"), q = L("th"), r = L("td"), z = L("input");
  a.appendChild(b);
  a.appendChild(f);
  a.appendChild(n);
  b.appendChild(c);
  b.appendChild(d);
  f.appendChild(h);
  f.appendChild(k);
  n.appendChild(q);
  n.appendChild(r);
  Jb(c, "Zem\u011bpisn\u00e1 \u0161\u00ed\u0159ka:");
  Jb(h, "Zem\u011bpisn\u00e1 d\u00e9lka:");
  Jb(q, "Kartografick\u00e1 projekce:");
  d.appendChild(g);
  k.appendChild(l);
  r.appendChild(z);
  g.id = "input-lat";
  l.id = "input-lon";
  z.id = "input-proj";
  "outerHTML" in a ? a = a.outerHTML : (b = K(a).createElement("div"), b.appendChild(a.cloneNode(!0)), a = b.innerHTML);
  return a
}
;function ng(a) {
  var b = document.getElementsByTagName("head")[0], c = L("link");
  c.type = "text/css";
  c.rel = "stylesheet";
  c.href = a;
  Eb(b, c)
}
function og() {
  ng("http://staremapy.cz/css/fonts.css");
  ng("http://staremapy.cz/georeferencer/umisti/css/main.css");
  ng("http://staremapy.cz/georeferencer/umisti/css/dialog.css");
  var a = v("main-right") ? document.getElementById("main-right") : "main-right", b = L("span");
  H(b, "icon-target");
  b = new Hd(b, Id.ga());
  Ad(b, "addpoint");
  Q(b, "action", function(a) {
    (new lg).K(!0);
    a.stopPropagation()
  });
  b.sa(a)
}
var pg = ["georeferencer", "umisti", "main"], qg = p;
pg[0] in qg || !qg.execScript || qg.execScript("var " + pg[0]);
for(var rg;pg.length && (rg = pg.shift());) {
  pg.length || void 0 === og ? qg = qg[rg] ? qg[rg] : qg[rg] = {} : qg[rg] = og
}
;
