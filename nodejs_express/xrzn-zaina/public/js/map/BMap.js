window.BMAP_AUTHENTIC_KEY = "499112f817ba817f59472fe03dd6828f";

(function() {
    function aa(a) {
        throw a;
    }
    var ba = void 0, i = !0, n = null, o = !1;
    function p() {
        return function() {};
    }
    function ca(a) {
        return function(b) {
            this[a] = b;
        };
    }
    function s(a) {
        return function() {
            return this[a];
        };
    }
    function da(a) {
        return function() {
            return a;
        };
    }
    var ea = [];
    function fa(a) {
        return function() {
            return ea[a].apply(this, arguments);
        };
    }
    function ga(a, b) {
        return ea[a] = b;
    }
    var ia, t = ia = t || {
        version:"1.3.4"
    };
    t.Q = "$BAIDU$";
    window[t.Q] = window[t.Q] || {};
    t.object = t.object || {};
    t.extend = t.object.extend = function(a, b) {
        for (var c in b) b.hasOwnProperty(c) && (a[c] = b[c]);
        return a;
    };
    t.B = t.B || {};
    t.B.M = function(a) {
        return "string" == typeof a || a instanceof String ? document.getElementById(a) :a && a.nodeName && (1 == a.nodeType || 9 == a.nodeType) ? a :n;
    };
    t.M = t.Pb = t.B.M;
    t.B.H = function(a) {
        a = t.B.M(a);
        a.style.display = "none";
        return a;
    };
    t.H = t.B.H;
    t.lang = t.lang || {};
    t.lang.Ye = function(a) {
        return "[object String]" == Object.prototype.toString.call(a);
    };
    t.Ye = t.lang.Ye;
    t.B.Jh = function(a) {
        return t.lang.Ye(a) ? document.getElementById(a) :a;
    };
    t.Jh = t.B.Jh;
    t.B.contains = function(a, b) {
        var c = t.B.Jh, a = c(a), b = c(b);
        return a.contains ? a != b && a.contains(b) :!!(a.compareDocumentPosition(b) & 16);
    };
    t.R = t.R || {};
    /msie (\d+\.\d)/i.test(navigator.userAgent) && (t.R.V = t.V = document.documentMode || +RegExp.$1);
    var ja = {
        cellpadding:"cellPadding",
        cellspacing:"cellSpacing",
        colspan:"colSpan",
        rowspan:"rowSpan",
        valign:"vAlign",
        usemap:"useMap",
        frameborder:"frameBorder"
    };
    8 > t.R.V ? (ja["for"] = "htmlFor", ja["class"] = "className") :(ja.htmlFor = "for",
    ja.className = "class");
    t.B.Rz = ja;
    t.B.Hy = function(a, b, c) {
        a = t.B.M(a);
        if ("style" == b) a.style.cssText = c; else {
            b = t.B.Rz[b] || b;
            a.setAttribute(b, c);
        }
        return a;
    };
    t.Hy = t.B.Hy;
    t.B.Iy = function(a, b) {
        var a = t.B.M(a), c;
        for (c in b) t.B.Hy(a, c, b[c]);
        return a;
    };
    t.Iy = t.B.Iy;
    t.Ci = t.Ci || {};
    (function() {
        var a = RegExp("(^[\\s\\t\\xa0\\u3000]+)|([\\u3000\\xa0\\s\\t]+$)", "g");
        t.Ci.trim = function(b) {
            return ("" + b).replace(a, "");
        };
    })();
    t.trim = t.Ci.trim;
    t.Ci.Nj = function(a, b) {
        var a = "" + a, c = Array.prototype.slice.call(arguments, 1), d = Object.prototype.toString;
        if (c.length) {
            c = c.length == 1 ? b !== n && /\[object Array\]|\[object Object\]/.test(d.call(b)) ? b :c :c;
            return a.replace(/#\{(.+?)\}/g, function(a, b) {
                var g = c[b];
                "[object Function]" == d.call(g) && (g = g(b));
                return "undefined" == typeof g ? "" :g;
            });
        }
        return a;
    };
    t.Nj = t.Ci.Nj;
    t.B.mc = function(a, b) {
        for (var a = t.B.M(a), c = a.className.split(/\s+/), d = b.split(/\s+/), e, f = d.length, g, j = 0; j < f; ++j) {
            g = 0;
            for (e = c.length; g < e; ++g) if (c[g] == d[j]) {
                c.splice(g, 1);
                break;
            }
        }
        a.className = c.join(" ");
        return a;
    };
    t.mc = t.B.mc;
    t.B.as = function(a, b, c) {
        var a = t.B.M(a), d;
        if (a.insertAdjacentHTML) a.insertAdjacentHTML(b, c); else {
            d = a.ownerDocument.createRange();
            b = b.toUpperCase();
            if (b == "AFTERBEGIN" || b == "BEFOREEND") {
                d.selectNodeContents(a);
                d.collapse(b == "AFTERBEGIN");
            } else {
                b = b == "BEFOREBEGIN";
                d[b ? "setStartBefore" :"setEndAfter"](a);
                d.collapse(b);
            }
            d.insertNode(d.createContextualFragment(c));
        }
        return a;
    };
    t.as = t.B.as;
    t.B.show = function(a) {
        a = t.B.M(a);
        a.style.display = "";
        return a;
    };
    t.show = t.B.show;
    t.B.jx = function(a) {
        a = t.B.M(a);
        return a.nodeType == 9 ? a :a.ownerDocument || a.document;
    };
    t.B.ib = function(a, b) {
        for (var a = t.B.M(a), c = b.split(/\s+/), d = a.className, e = " " + d + " ", f = 0, g = c.length; f < g; f++) e.indexOf(" " + c[f] + " ") < 0 && (d = d + (" " + c[f]));
        a.className = d;
        return a;
    };
    t.ib = t.B.ib;
    t.B.yv = t.B.yv || {};
    t.B.lj = t.B.lj || [];
    t.B.lj.filter = function(a, b, c) {
        for (var d = 0, e = t.B.lj, f; f = e[d]; d++) if (f = f[c]) b = f(a, b);
        return b;
    };
    t.Ci.cG = function(a) {
        return a.indexOf("-") < 0 && a.indexOf("_") < 0 ? a :a.replace(/[-_][^-_]/g, function(a) {
            return a.charAt(1).toUpperCase();
        });
    };
    t.B.nU = function(a, b) {
        t.B.Gx(a, b) ? t.B.mc(a, b) :t.B.ib(a, b);
    };
    t.B.Gx = function(a) {
        if (arguments.length <= 0 || typeof a === "function") return this;
        if (this.size() <= 0) return o;
        var a = a.replace(/^\s+/g, "").replace(/\s+$/g, "").replace(/\s+/g, " "), b = a.split(" "), c;
        t.forEach(this, function(a) {
            for (var a = a.className, e = 0; e < b.length; e++) if (!~(" " + a + " ").indexOf(" " + b[e] + " ")) {
                c = o;
                return;
            }
            c !== o && (c = i);
        });
        return c;
    };
    t.B.qh = function(a, b) {
        var c = t.B, a = c.M(a), b = t.Ci.cG(b), d = a.style[b];
        if (!d) var e = c.yv[b], d = a.currentStyle || (t.R.V ? a.style :getComputedStyle(a, n)), d = e && e.get ? e.get(a, d) :d[e || b];
        if (e = c.lj) d = e.filter(b, d, "get");
        return d;
    };
    t.qh = t.B.qh;
    /opera\/(\d+\.\d)/i.test(navigator.userAgent) && (t.R.opera = +RegExp.$1);
    t.R.tE = /webkit/i.test(navigator.userAgent);
    t.R.HO = /gecko/i.test(navigator.userAgent) && !/like gecko/i.test(navigator.userAgent);
    t.R.Tx = "CSS1Compat" == document.compatMode;
    t.B.W = function(a) {
        var a = t.B.M(a), b = t.B.jx(a), c = t.R, d = t.B.qh;
        c.HO > 0 && b.getBoxObjectFor && d(a, "position");
        var e = {
            left:0,
            top:0
        }, f;
        if (a == (c.V && !c.Tx ? b.body :b.documentElement)) return e;
        if (a.getBoundingClientRect) {
            a = a.getBoundingClientRect();
            e.left = Math.floor(a.left) + Math.max(b.documentElement.scrollLeft, b.body.scrollLeft);
            e.top = Math.floor(a.top) + Math.max(b.documentElement.scrollTop, b.body.scrollTop);
            e.left = e.left - b.documentElement.clientLeft;
            e.top = e.top - b.documentElement.clientTop;
            a = b.body;
            b = parseInt(d(a, "borderLeftWidth"));
            d = parseInt(d(a, "borderTopWidth"));
            if (c.V && !c.Tx) {
                e.left = e.left - (isNaN(b) ? 2 :b);
                e.top = e.top - (isNaN(d) ? 2 :d);
            }
        } else {
            f = a;
            do {
                e.left = e.left + f.offsetLeft;
                e.top = e.top + f.offsetTop;
                if (c.tE > 0 && d(f, "position") == "fixed") {
                    e.left = e.left + b.body.scrollLeft;
                    e.top = e.top + b.body.scrollTop;
                    break;
                }
                f = f.offsetParent;
            } while (f && f != a);
            if (c.opera > 0 || c.tE > 0 && d(a, "position") == "absolute") e.top = e.top - b.body.offsetTop;
            for (f = a.offsetParent; f && f != b.body; ) {
                e.left = e.left - f.scrollLeft;
                if (!c.opera || f.tagName != "TR") e.top = e.top - f.scrollTop;
                f = f.offsetParent;
            }
        }
        return e;
    };
    /firefox\/(\d+\.\d)/i.test(navigator.userAgent) && (t.R.Bf = +RegExp.$1);
    var ka = navigator.userAgent;
    /(\d+\.\d)?(?:\.\d)?\s+safari\/?(\d+\.\d+)?/i.test(ka) && !/chrome/i.test(ka) && (t.R.DF = +(RegExp.$1 || RegExp.$2));
    /chrome\/(\d+\.\d)/i.test(navigator.userAgent) && (t.R.DC = +RegExp.$1);
    t.fc = t.fc || {};
    t.fc.wc = function(a, b) {
        var c, d, e = a.length;
        if ("function" == typeof b) for (d = 0; d < e; d++) {
            c = a[d];
            c = b.call(a, c, d);
            if (c === o) break;
        }
        return a;
    };
    t.wc = t.fc.wc;
    t.lang.Q = function() {
        return "TANGRAM__" + (window[t.Q]._counter++).toString(36);
    };
    window[t.Q]._counter = window[t.Q]._counter || 1;
    window[t.Q]._instances = window[t.Q]._instances || {};
    t.lang.Oo = function(a) {
        return "[object Function]" == Object.prototype.toString.call(a);
    };
    t.lang.ma = function(a) {
        this.Q = a || t.lang.Q();
        window[t.Q]._instances[this.Q] = this;
    };
    window[t.Q]._instances = window[t.Q]._instances || {};
    t.lang.ma.prototype.qg = fa(1);
    t.lang.ma.prototype.toString = function() {
        return "[object " + (this.LH || "Object") + "]";
    };
    t.lang.ut = function(a, b) {
        this.type = a;
        this.returnValue = i;
        this.target = b || n;
        this.currentTarget = n;
    };
    t.lang.ma.prototype.addEventListener = function(a, b, c) {
        if (t.lang.Oo(b)) {
            !this.Mg && (this.Mg = {});
            var d = this.Mg, e;
            if (typeof c == "string" && c) {
                /[^\w\-]/.test(c) && aa("nonstandard key:" + c);
                e = b.WD = c;
            }
            a.indexOf("on") != 0 && (a = "on" + a);
            typeof d[a] != "object" && (d[a] = {});
            e = e || t.lang.Q();
            b.WD = e;
            d[a][e] = b;
        }
    };
    t.lang.ma.prototype.removeEventListener = function(a, b) {
        if (t.lang.Oo(b)) b = b.WD; else if (!t.lang.Ye(b)) return;
        !this.Mg && (this.Mg = {});
        a.indexOf("on") != 0 && (a = "on" + a);
        var c = this.Mg;
        c[a] && c[a][b] && delete c[a][b];
    };
    t.lang.ma.prototype.dispatchEvent = function(a, b) {
        t.lang.Ye(a) && (a = new t.lang.ut(a));
        !this.Mg && (this.Mg = {});
        var b = b || {}, c;
        for (c in b) a[c] = b[c];
        var d = this.Mg, e = a.type;
        a.target = a.target || this;
        a.currentTarget = this;
        e.indexOf("on") != 0 && (e = "on" + e);
        t.lang.Oo(this[e]) && this[e].apply(this, arguments);
        if (typeof d[e] == "object") for (c in d[e]) d[e][c].apply(this, arguments);
        return a.returnValue;
    };
    t.lang.ga = function(a, b, c) {
        var d, e, f = a.prototype;
        e = new Function();
        e.prototype = b.prototype;
        e = a.prototype = new e();
        for (d in f) e[d] = f[d];
        a.prototype.constructor = a;
        a.PQ = b.prototype;
        if ("string" == typeof c) e.LH = c;
    };
    t.ga = t.lang.ga;
    t.lang.Xc = function(a) {
        return window[t.Q]._instances[a] || n;
    };
    t.platform = t.platform || {};
    t.platform.MO = /macintosh/i.test(navigator.userAgent);
    t.platform.tT = /MicroMessenger/i.test(navigator.userAgent);
    t.platform.uE = /windows/i.test(navigator.userAgent);
    t.platform.RO = /x11/i.test(navigator.userAgent);
    t.platform.Sl = /android/i.test(navigator.userAgent);
    /android (\d+\.\d)/i.test(navigator.userAgent) && (t.platform.lC = t.lC = RegExp.$1);
    t.platform.KO = /ipad/i.test(navigator.userAgent);
    t.platform.LO = /iphone/i.test(navigator.userAgent);
    function u(a, b) {
        a.domEvent = b = window.event || b;
        a.clientX = b.clientX || b.pageX;
        a.clientY = b.clientY || b.pageY;
        a.offsetX = b.offsetX || b.layerX;
        a.offsetY = b.offsetY || b.layerY;
        a.screenX = b.screenX;
        a.screenY = b.screenY;
        a.ctrlKey = b.ctrlKey || b.metaKey;
        a.shiftKey = b.shiftKey;
        a.altKey = b.altKey;
        if (b.touches) {
            a.touches = [];
            for (var c = 0; c < b.touches.length; c++) a.touches.push({
                clientX:b.touches[c].clientX,
                clientY:b.touches[c].clientY,
                screenX:b.touches[c].screenX,
                screenY:b.touches[c].screenY,
                pageX:b.touches[c].pageX,
                pageY:b.touches[c].pageY,
                target:b.touches[c].target,
                identifier:b.touches[c].identifier
            });
        }
        if (b.changedTouches) {
            a.changedTouches = [];
            for (c = 0; c < b.changedTouches.length; c++) a.changedTouches.push({
                clientX:b.changedTouches[c].clientX,
                clientY:b.changedTouches[c].clientY,
                screenX:b.changedTouches[c].screenX,
                screenY:b.changedTouches[c].screenY,
                pageX:b.changedTouches[c].pageX,
                pageY:b.changedTouches[c].pageY,
                target:b.changedTouches[c].target,
                identifier:b.changedTouches[c].identifier
            });
        }
        if (b.targetTouches) {
            a.targetTouches = [];
            for (c = 0; c < b.targetTouches.length; c++) a.targetTouches.push({
                clientX:b.targetTouches[c].clientX,
                clientY:b.targetTouches[c].clientY,
                screenX:b.targetTouches[c].screenX,
                screenY:b.targetTouches[c].screenY,
                pageX:b.targetTouches[c].pageX,
                pageY:b.targetTouches[c].pageY,
                target:b.targetTouches[c].target,
                identifier:b.targetTouches[c].identifier
            });
        }
        a.rotation = b.rotation;
        a.scale = b.scale;
        return a;
    }
    t.lang.yr = function(a) {
        var b = window[t.Q];
        b.DJ && delete b.DJ[a];
    };
    t.event = {};
    t.D = t.event.D = function(a, b, c) {
        if (!(a = t.M(a))) return a;
        b = b.replace(/^on/, "");
        a.addEventListener ? a.addEventListener(b, c, o) :a.attachEvent && a.attachEvent("on" + b, c);
        return a;
    };
    t.xd = t.event.xd = function(a, b, c) {
        if (!(a = t.M(a))) return a;
        b = b.replace(/^on/, "");
        a.removeEventListener ? a.removeEventListener(b, c, o) :a.detachEvent && a.detachEvent("on" + b, c);
        return a;
    };
    t.B.Gx = function(a, b) {
        if (!a || !a.className || typeof a.className != "string") return o;
        var c = -1;
        try {
            c = a.className == b || a.className.search(RegExp("(\\s|^)" + b + "(\\s|$)"));
        } catch (d) {
            return o;
        }
        return c > -1;
    };
    t.iD = function() {
        function a(a) {
            document.addEventListener && (this.element = a, this.lD = this.Yj ? "touchstart" :"mousedown",
            this.Sw = this.Yj ? "touchmove" :"mousemove", this.Rw = this.Yj ? "touchend" :"mouseup",
            this.Jf = o, this.up = this.sp = 0, this.element.addEventListener(this.lD, this, o),
            ia.D(this.element, "mousedown", p()), this.handleEvent(n));
        }
        a.prototype = {
            Yj:"ontouchstart" in window || "createTouch" in document,
            start:function(a) {
                x(a);
                this.Jf = o;
                this.sp = this.Yj ? a.touches[0].clientX :a.clientX;
                this.up = this.Yj ? a.touches[0].clientY :a.clientY;
                this.element.addEventListener(this.Sw, this, o);
                this.element.addEventListener(this.Rw, this, o);
            },
            move:function(a) {
                ma(a);
                var c = this.Yj ? a.touches[0].clientY :a.clientY;
                if (10 < Math.abs((this.Yj ? a.touches[0].clientX :a.clientX) - this.sp) || 10 < Math.abs(c - this.up)) this.Jf = i;
            },
            end:function(a) {
                ma(a);
                this.Jf || (a = document.createEvent("Event"), a.initEvent("tap", o, i), this.element.dispatchEvent(a));
                this.element.removeEventListener(this.Sw, this, o);
                this.element.removeEventListener(this.Rw, this, o);
            },
            handleEvent:function(a) {
                if (a) switch (a.type) {
                  case this.lD:
                    this.start(a);
                    break;

                  case this.Sw:
                    this.move(a);
                    break;

                  case this.Rw:
                    this.end(a);
                }
            }
        };
        return function(b) {
            return new a(b);
        };
    }();
    var B = window.BMap || {};
    B.version = "2.0";
    0 <= B.version.indexOf("#") && (B.version = "2.0");
    B.Ln = [];
    B.Pd = function(a) {
        this.Ln.push(a);
    };
    B.cv = [];
    B.ky = function(a) {
        this.cv.push(a);
    };
    B.vL = B.apiLoad || p();
    var na = window.BMAP_AUTHENTIC_KEY;
    window.BMAP_AUTHENTIC_KEY = n;
    var oa = window.BMap_loadScriptTime, pa = new Date().getTime(), qa = n, sa = i, ta = n, ua = 5042, va = 5002, xa = 5003, ya = "load_mapclick", za = 5038, Aa = 5041, Ba = 5044, Ca = 5036, Da = 5039, Ea = 5037, Fa = 5040, Ga = 5011, Ha = 7e3;
    function Ia(a, b) {
        if (a = t.M(a)) {
            var c = this;
            t.lang.ma.call(c);
            b = b || {};
            c.F = {
                Wv:200,
                Sb:i,
                Fr:o,
                Jw:i,
                ro:i,
                to:o,
                Mw:i,
                so:i,
                Dr:i,
                yl:b.enable3DBuilding || o,
                Vc:25,
                BR:240,
                jL:450,
                yb:C.yb,
                Hc:C.Hc,
                cs:!!b.cs,
                Kc:b.minZoom || 1,
                od:b.maxZoom || 18,
                mb:b.mapType || Ja,
                $T:o,
                Er:i,
                Bw:500,
                KS:b.enableHighResolution !== o,
                zl:b.enableMapClick !== o,
                devicePixelRatio:b.devicePixelRatio || window.devicePixelRatio || 1,
                xG:b.vectorMapLevel || (D() || 1 < window.devicePixelRatio ? 3 :99),
                nd:b.mapStyle || n,
                ZO:b.logoControl === o ? o :i,
                DL:[ "chrome" ],
                rC:b.beforeClickIcon || n
            };
            c.F.nd && (this.gE(c.F.nd.controls), this.hE(c.F.nd.geotableId));
            c.F.nd && c.F.nd.styleId && c.OD(c.F.nd.styleId);
            c.F.ao = {
                dark:{
                    backColor:"#2D2D2D",
                    textColor:"#bfbfbf",
                    iconUrl:"dicons"
                },
                normal:{
                    backColor:"#F3F1EC",
                    textColor:"#c61b1b",
                    iconUrl:"icons"
                },
                light:{
                    backColor:"#EBF8FC",
                    textColor:"#017fb4",
                    iconUrl:"licons"
                }
            };
            b.enableAutoResize && (c.F.Dr = b.enableAutoResize);
            t.platform.Sl && 1.5 < window.devicePixelRatio && (c.F.devicePixelRatio = 1.5);
            var d = c.F.DL;
            if (D()) for (var e = 0, f = d.length; e < f; e++) if (t.R[d[e]]) {
                c.F.devicePixelRatio = 1;
                break;
            }
            c.Aa = a;
            c.rv(a);
            a.unselectable = "on";
            a.innerHTML = "";
            a.appendChild(c.qa());
            b.size && this.Oc(b.size);
            d = c.Ab();
            c.width = d.width;
            c.height = d.height;
            c.offsetX = 0;
            c.offsetY = 0;
            c.platform = a.firstChild;
            c.ie = c.platform.firstChild;
            c.ie.style.width = c.width + "px";
            c.ie.style.height = c.height + "px";
            c.hd = {};
            c.wf = new H(0, 0);
            c.Wb = new H(0, 0);
            c.ra = 3;
            c.kc = 0;
            c.nw = n;
            c.mw = n;
            c.tb = "";
            c.nr = "";
            c.cg = {};
            c.cg.custom = {};
            c.Ba = 0;
            c.L = new Ka(a, {
                Al:"api"
            });
            c.L.H();
            c.L.My(c);
            b = b || {};
            d = c.mb = c.F.mb;
            c.sd = d.Jl();
            d === La && I(va);
            d === Ma && I(xa);
            d = c.F;
            d.qG = b.minZoom;
            d.pG = b.maxZoom;
            c.Wt();
            c.G = {
                Ub:o,
                wb:0,
                To:0,
                zE:0,
                wT:0,
                Pv:o,
                vy:-1,
                ae:[]
            };
            c.platform.style.cursor = c.F.yb;
            for (e = 0; e < B.Ln.length; e++) B.Ln[e](c);
            c.G.vy = e;
            c.P();
            J.load("map", function() {
                c.Eb();
            });
            c.F.zl && (setTimeout(function() {
                I(ya);
            }, 1e3), J.load("mapclick", function() {
                window.MPC_Mgr = new Na(c);
            }, i));
            Oa() && J.load("oppc", function() {
                c.Mt();
            });
            D() && J.load("opmb", function() {
                c.Mt();
            });
            a = n;
            c.Dv = [];
        }
    }
    t.lang.ga(Ia, t.lang.ma, "Map");
    t.extend(Ia.prototype, {
        qa:function() {
            var a = L("div"), b = a.style;
            b.overflow = "visible";
            b.position = "absolute";
            b.zIndex = "0";
            b.top = b.left = "0px";
            var b = L("div", {
                "class":"BMap_mask"
            }), c = b.style;
            c.position = "absolute";
            c.top = c.left = "0px";
            c.zIndex = "9";
            c.overflow = "hidden";
            c.WebkitUserSelect = "none";
            a.appendChild(b);
            return a;
        },
        rv:function(a) {
            var b = a.style;
            b.overflow = "hidden";
            "absolute" != Pa(a).position && (b.position = "relative", b.zIndex = 0);
            b.backgroundColor = "#F3F1EC";
            b.color = "#000";
            b.textAlign = "left";
        },
        P:function() {
            var a = this;
            a.Un = function() {
                var b = a.Ab();
                if (a.width != b.width || a.height != b.height) {
                    var c = new M(a.width, a.height), d = new N("onbeforeresize");
                    d.size = c;
                    a.dispatchEvent(d);
                    a.Sh((b.width - a.width) / 2, (b.height - a.height) / 2);
                    a.ie.style.width = (a.width = b.width) + "px";
                    a.ie.style.height = (a.height = b.height) + "px";
                    c = new N("onresize");
                    c.size = b;
                    a.dispatchEvent(c);
                }
            };
            a.F.Dr && (a.G.Xn = setInterval(a.Un, 80));
        },
        Sh:function(a, b, c, d) {
            var e = this.ka().Tb(this.U()), f = this.sd, g = i;
            c && H.kE(c) && (this.wf = new H(c.lng, c.lat), g = o);
            if (c = c && d ? f.ek(c, this.tb) :this.Wb) if (this.Wb = new H(c.lng + a * e, c.lat - b * e),
            (a = f.ni(this.Wb, this.tb)) && g) this.wf = a;
        },
        jf:function(a, b) {
            if (Qa(a) && (a = this.Pk(a).zoom, a != this.ra)) {
                this.kc = this.ra;
                this.ra = a;
                var c;
                b ? c = b :this.Ef() && (c = this.Ef().W());
                c && (c = this.Bb(c, this.kc), this.Sh(this.width / 2 - c.x, this.height / 2 - c.y, this.eb(c, this.kc), i));
                this.dispatchEvent(new N("onzoomstart"));
                this.dispatchEvent(new N("onzoomstartcode"));
            }
        },
        dd:function(a) {
            this.jf(a);
        },
        kz:function(a) {
            this.jf(this.ra + 1, a);
        },
        lz:function(a) {
            this.jf(this.ra - 1, a);
        },
        Cg:function(a) {
            a instanceof H && (this.Wb = this.sd.ek(a, this.tb), this.wf = H.kE(a) ? new H(a.lng, a.lat) :this.sd.ni(this.Wb, this.tb));
        },
        cf:function(a, b) {
            a = Math.round(a) || 0;
            b = Math.round(b) || 0;
            this.Sh(-a, -b);
        },
        br:function(a) {
            a && Ra(a.Td) && (a.Td(this), this.dispatchEvent(new N("onaddcontrol", a)));
        },
        xF:function(a) {
            a && Ra(a.remove) && (a.remove(), this.dispatchEvent(new N("onremovecontrol", a)));
        },
        ml:function(a) {
            a && Ra(a.ha) && (a.ha(this), this.dispatchEvent(new N("onaddcontextmenu", a)));
        },
        bm:function(a) {
            a && Ra(a.remove) && (this.dispatchEvent(new N("onremovecontextmenu", a)), a.remove());
        },
        ya:function(a) {
            a && Ra(a.Td) && (a.Td(this), this.dispatchEvent(new N("onaddoverlay", a)));
        },
        Gb:function(a) {
            a && Ra(a.remove) && (a.remove(), this.dispatchEvent(new N("onremoveoverlay", a)));
        },
        FC:function() {
            this.dispatchEvent(new N("onclearoverlays"));
        },
        sf:function(a) {
            a && this.dispatchEvent(new N("onaddtilelayer", a));
        },
        Of:function(a) {
            a && this.dispatchEvent(new N("onremovetilelayer", a));
        },
        df:function(a) {
            if (this.mb !== a) {
                var b = new N("onsetmaptype");
                b.TT = this.mb;
                this.mb = this.F.mb = a;
                this.sd = this.mb.Jl();
                this.Sh(0, 0, this.za(), i);
                this.Wt();
                var c = this.Pk(this.U()).zoom;
                this.jf(c);
                this.dispatchEvent(b);
                b = new N("onmaptypechange");
                b.ra = c;
                b.mb = a;
                this.dispatchEvent(b);
                (a === Ta || a === Ma) && I(xa);
            }
        },
        Fe:function(a) {
            var b = this;
            if (a instanceof H) b.Cg(a, {
                noAnimation:i
            }); else if (Ua(a)) if (b.mb == La) {
                var c = C.Sv[a];
                c && (pt = c.m, b.Fe(pt));
            } else {
                var d = this.LA();
                d.Py(function(c) {
                    0 == d.Tj() && 2 == d.va.result.type && (b.Fe(c.fi(0).point), La.bi(a) && b.Ky(a));
                });
                d.search(a, {
                    log:"center"
                });
            }
        },
        jd:function(a, b) {
            "[object Undefined]" !== Object.prototype.toString.call(b) && (b = parseInt(b));
            ta = D() ? Va.Ek.co(101) :Va.Ek.co(1);
            ta.Wy();
            ta.xc("script_loaded", pa - oa);
            ta.xc("centerAndZoom");
            var c = this;
            if (Ua(a)) if (c.mb == La) {
                var d = C.Sv[a];
                d && (pt = d.m, c.jd(pt, b));
            } else {
                var e = c.LA();
                e.Py(function(d) {
                    if (0 == e.Tj() && 2 == e.va.result.type) {
                        var d = d.fi(0).point, f = b || O.dx(e.va.content.level, c);
                        c.jd(d, f);
                        La.bi(a) && c.Ky(a);
                    }
                });
                e.search(a, {
                    log:"center"
                });
            } else if (a instanceof H && b) {
                b = c.Pk(b).zoom;
                c.kc = c.ra || b;
                c.ra = b;
                c.wf = new H(a.lng, a.lat);
                c.Wb = c.sd.ek(c.wf, c.tb);
                c.nw = c.nw || c.ra;
                c.mw = c.mw || c.wf;
                var d = new N("onload"), f = new N("onloadcode");
                d.point = new H(a.lng, a.lat);
                d.pixel = c.Bb(c.wf, c.ra);
                d.zoom = b;
                c.loaded || (c.loaded = i, c.dispatchEvent(d), qa || (qa = Wa()));
                c.dispatchEvent(f);
                c.dispatchEvent(new N("onmoveend"));
                c.kc != c.ra && c.dispatchEvent(new N("onzoomend"));
                c.F.yl && c.yl();
            }
        },
        LA:function() {
            this.G.DE || (this.G.DE = new Xa(1));
            return this.G.DE;
        },
        reset:function() {
            this.jd(this.mw, this.nw, i);
        },
        enableDragging:function() {
            this.F.Sb = i;
        },
        disableDragging:function() {
            this.F.Sb = o;
        },
        enableInertialDragging:function() {
            this.F.Er = i;
        },
        disableInertialDragging:function() {
            this.F.Er = o;
        },
        enableScrollWheelZoom:function() {
            this.F.to = i;
        },
        disableScrollWheelZoom:function() {
            this.F.to = o;
        },
        enableContinuousZoom:function() {
            this.F.ro = i;
        },
        disableContinuousZoom:function() {
            this.F.ro = o;
        },
        enableDoubleClickZoom:function() {
            this.F.Jw = i;
        },
        disableDoubleClickZoom:function() {
            this.F.Jw = o;
        },
        enableKeyboard:function() {
            this.F.Fr = i;
        },
        disableKeyboard:function() {
            this.F.Fr = o;
        },
        enablePinchToZoom:function() {
            this.F.so = i;
        },
        disablePinchToZoom:function() {
            this.F.so = o;
        },
        enableAutoResize:function() {
            this.F.Dr = i;
            this.Un();
            this.G.Xn || (this.G.Xn = setInterval(this.Un, 80));
        },
        disableAutoResize:function() {
            this.F.Dr = o;
            this.G.Xn && (clearInterval(this.G.Xn), this.G.Xn = n);
        },
        yl:function() {
            this.F.yl = i;
            this.Ik || (this.Ik = new Ya({
                oD:i
            }), this.sf(this.Ik));
        },
        DM:function() {
            this.F.yl = o;
            this.Ik && (this.Of(this.Ik), this.Ik = n, delete this.Ik);
        },
        Ab:function() {
            return this.ko && this.ko instanceof M ? new M(this.ko.width, this.ko.height) :new M(this.Aa.clientWidth, this.Aa.clientHeight);
        },
        Oc:function(a) {
            a && a instanceof M ? (this.ko = a, this.Aa.style.width = a.width + "px", this.Aa.style.height = a.height + "px") :this.ko = n;
        },
        za:s("wf"),
        U:s("ra"),
        XL:function() {
            this.Un();
        },
        Pk:function(a) {
            var b = this.F.Kc, c = this.F.od, d = o;
            a < b && (d = i, a = b);
            a > c && (d = i, a = c);
            return {
                zoom:a,
                Tw:d
            };
        },
        Ca:s("Aa"),
        Bb:function(a, b) {
            b = b || this.U();
            return this.sd.Bb(a, b, this.Wb, this.Ab(), this.tb);
        },
        eb:function(a, b) {
            b = b || this.U();
            return this.sd.eb(a, b, this.Wb, this.Ab(), this.tb);
        },
        Od:function(a, b) {
            if (a) {
                var c = this.Bb(new H(a.lng, a.lat), b);
                c.x -= this.offsetX;
                c.y -= this.offsetY;
                return c;
            }
        },
        oF:function(a, b) {
            if (a) {
                var c = new P(a.x, a.y);
                c.x += this.offsetX;
                c.y += this.offsetY;
                return this.eb(c, b);
            }
        },
        pointToPixelFor3D:function(a, b) {
            var c = map.tb;
            this.mb == La && c && Za.KC(a, this, b);
        },
        OT:function(a, b) {
            var c = map.tb;
            this.mb == La && c && Za.JC(a, this, b);
        },
        PT:function(a, b) {
            var c = this, d = map.tb;
            c.mb == La && d && Za.KC(a, c, function(a) {
                a.x -= c.offsetX;
                a.y -= c.offsetY;
                b && b(a);
            });
        },
        MT:function(a, b) {
            var c = map.tb;
            this.mb == La && c && (a.x += this.offsetX, a.y += this.offsetY, Za.JC(a, this, b));
        },
        Be:function(a) {
            if (!this.Qx()) return new $a();
            var b = a || {}, a = b.margins || [ 0, 0, 0, 0 ], c = b.zoom || n, b = this.eb({
                x:a[3],
                y:this.height - a[2]
            }, c), a = this.eb({
                x:this.width - a[1],
                y:a[0]
            }, c);
            return new $a(b, a);
        },
        Qx:function() {
            return !!this.loaded;
        },
        TI:function(a, b) {
            for (var c = this.ka(), d = b.margins || [ 10, 10, 10, 10 ], e = b.zoomFactor || 0, f = d[1] + d[3], d = d[0] + d[2], g = c.El(), j = c = c.Rj(); j >= g; j--) {
                var k = this.ka().Tb(j);
                if (a.dz().lng / k < this.width - f && a.dz().lat / k < this.height - d) break;
            }
            j += e;
            j < g && (j = g);
            j > c && (j = c);
            return j;
        },
        Io:function(a, b) {
            var c = {
                center:this.za(),
                zoom:this.U()
            };
            if (!a || !a instanceof $a && 0 == a.length || a instanceof $a && a.uh()) return c;
            var d = [];
            a instanceof $a ? (d.push(a.Md()), d.push(a.Wc())) :d = a.slice(0);
            for (var b = b || {}, e = [], f = 0, g = d.length; f < g; f++) e.push(this.sd.ek(d[f], this.tb));
            d = new $a();
            for (f = e.length - 1; 0 <= f; f--) d.extend(e[f]);
            if (d.uh()) return c;
            c = d.za();
            e = this.TI(d, b);
            b.margins && (d = b.margins, f = (d[1] - d[3]) / 2, d = (d[0] - d[2]) / 2, g = this.ka().Tb(e),
            b.offset && (f = b.offset.width, d = b.offset.height), c.lng += g * f, c.lat += g * d);
            c = this.sd.ni(c, this.tb);
            return {
                center:c,
                zoom:e
            };
        },
        Pf:function(a, b) {
            var c;
            c = a && a.center ? a :this.Io(a, b);
            var b = b || {}, d = b.delay || 200;
            if (c.zoom == this.ra && b.enableAnimation != o) {
                var e = this;
                setTimeout(function() {
                    e.Cg(c.center, {
                        duration:210
                    });
                }, d);
            } else this.jd(c.center, c.zoom);
        },
        Xe:s("hd"),
        Ef:function() {
            return this.G.Ra && this.G.Ra.Da() ? this.G.Ra :n;
        },
        getDistance:function(a, b) {
            if (a && b) {
                var c = 0, c = Q.wo(a, b);
                if (c == n || c == ba) c = 0;
                return c;
            }
        },
        wx:function() {
            var a = [], b = this.ja, c = this.Ad;
            if (b) for (var d in b) b[d] instanceof ab && a.push(b[d]);
            if (c) {
                d = 0;
                for (b = c.length; d < b; d++) a.push(c[d]);
            }
            return a;
        },
        ka:s("mb"),
        Mt:function() {
            for (var a = this.G.vy; a < B.Ln.length; a++) B.Ln[a](this);
            this.G.vy = a;
        },
        Ky:function(a) {
            this.tb = La.bi(a);
            this.nr = La.xD(this.tb);
            this.mb == La && this.sd instanceof bb && (this.sd.fw = this.tb);
        },
        setDefaultCursor:function(a) {
            this.F.yb = a;
            this.platform && (this.platform.style.cursor = this.F.yb);
        },
        getDefaultCursor:function() {
            return this.F.yb;
        },
        setDraggingCursor:function(a) {
            this.F.Hc = a;
        },
        getDraggingCursor:function() {
            return this.F.Hc;
        },
        ji:da(o),
        er:function(a, b) {
            b ? this.cg[b] || (this.cg[b] = {}) :b = "custom";
            a.tag = b;
            a instanceof cb && (this.cg[b][a.Q] = a, a.ha(this));
            var c = this;
            J.load("hotspot", function() {
                c.Mt();
            });
        },
        IP:function(a, b) {
            b || (b = "custom");
            this.cg[b][a.Q] && delete this.cg[b][a.Q];
        },
        zj:function(a) {
            a || (a = "custom");
            this.cg[a] = {};
        },
        Wt:function() {
            var a = this.ji() ? this.mb.k.rO :this.mb.El(), b = this.ji() ? this.mb.k.qO :this.mb.Rj(), c = this.F;
            c.Kc = c.qG || a;
            c.od = c.pG || b;
            c.Kc < a && (c.Kc = a);
            c.od > b && (c.od = b);
        },
        setMinZoom:function(a) {
            a > this.F.od && (a = this.F.od);
            this.F.qG = a;
            this.ZB();
        },
        setMaxZoom:function(a) {
            a < this.F.Kc && (a = this.F.Kc);
            this.F.pG = a;
            this.ZB();
        },
        ZB:function() {
            this.Wt();
            var a = this.F;
            this.ra < a.Kc ? this.dd(a.Kc) :this.ra > a.od && this.dd(a.od);
            var b = new N("onzoomspanchange");
            b.Kc = a.Kc;
            b.od = a.od;
            this.dispatchEvent(b);
        },
        mT:s("Dv"),
        getKey:function() {
            return na;
        },
        km:function(a) {
            window.MPC_Mgr && window.MPC_Mgr.close();
            var b = this;
            b.F.zl = o;
            if (a) {
                if (a.styleId) this.OD(a.styleId); else {
                    b = this;
                    a.styleJson && (a.styleStr = b.MQ(a.styleJson));
                    D() && t.R.DF ? setTimeout(function() {
                        b.F.nd = a;
                        b.dispatchEvent(new N("onsetcustomstyles", a));
                    }, 50) :(this.F.nd = a, this.dispatchEvent(new N("onsetcustomstyles", a)), this.hE(b.F.nd.geotableId));
                    this.gE(a.controls);
                    var c = {
                        style:a.style
                    };
                    a.features && 0 < a.features.length && (c.features = i);
                    a.styleJson && 0 < a.styleJson.length && (c.styleJson = i);
                    I(5050, c);
                }
                a.style && (c = b.F.ao[a.style] ? b.F.ao[a.style].backColor :b.F.ao.normal.backColor) && (this.Ca().style.backgroundColor = c);
            }
        },
        OD:function(a) {
            var b = this;
            db(B.vc + "style/poi/personalize?method=get&ak=" + na + "&id=" + a, function(a) {
                if (a && a.content && 0 < a.content.length) {
                    var a = a.content[0], d = {};
                    a.features && 0 < a.features.length && (d.features = a.features);
                    a.controllers && 0 < a.controllers.length && (d.controls = a.controllers);
                    a.style && "" != a.style && (d.style = a.style);
                    a.geotable_id && "" != a.geotable_id && (d.geotableId = a.geotable_id);
                    setTimeout(function() {
                        b.km(d);
                    }, 200);
                }
            });
        },
        gE:function(a) {
            this.controls || (this.controls = {
                navigationControl:new eb(),
                scaleControl:new fb(),
                overviewMapControl:new gb(),
                mapTypeControl:new hb()
            });
            var b = this, c;
            for (c in this.controls) b.xF(b.controls[c]);
            a = a || [];
            t.fc.wc(a, function(a) {
                b.br(b.controls[a]);
            });
        },
        hE:function(a) {
            a ? this.io && this.io.Oe == a || (this.Of(this.io), this.io = new ib({
                geotableId:a
            }), this.sf(this.io)) :this.Of(this.io);
        },
        Jb:function() {
            var a = this.U() >= this.F.xG && this.ka() == Ja && 18 >= this.U(), b = o;
            try {
                document.createElement("canvas").getContext("2d"), b = i;
            } catch (c) {
                b = o;
            }
            return a && b;
        },
        getCurrentCity:function() {
            return {
                name:this.tl,
                code:this.Mv
            };
        },
        getPanorama:s("L"),
        setPanorama:function(a) {
            this.L = a;
            this.L.My(this);
        },
        MQ:function(a) {
            for (var b = {
                featureType:"t",
                elementType:"e",
                visibility:"v",
                color:"c",
                lightness:"l",
                saturation:"s",
                weight:"w",
                zoom:"z",
                hue:"h"
            }, c = {
                all:"all",
                geometry:"g",
                "geometry.fill":"g.f",
                "geometry.stroke":"g.s",
                labels:"l",
                "labels.text.fill":"l.t.f",
                "labels.text.stroke":"l.t.s",
                "lables.text":"l.t",
                "labels.icon":"l.i"
            }, d = [], e = 0, f; f = a[e]; e++) {
                var g = f.stylers;
                delete f.stylers;
                t.extend(f, g);
                var g = [], j;
                for (j in b) f[j] && ("elementType" == j ? g.push(b[j] + ":" + c[f[j]]) :g.push(b[j] + ":" + f[j]));
                2 < g.length && d.push(g.join("|"));
            }
            return d.join(",");
        }
    });
    function I(a, b) {
        if (a) {
            var b = b || {}, c = "", d;
            for (d in b) c = c + "&" + d + "=" + encodeURIComponent(b[d]);
            var e = function(a) {
                a && (jb = i, setTimeout(function() {
                    kb.src = B.vc + "images/blank.gif?" + a.src;
                }, 50));
            }, f = function() {
                var a = lb.shift();
                a && e(a);
            };
            d = (1e8 * Math.random()).toFixed(0);
            jb ? lb.push({
                src:"product=jsapi&sub_product=jsapi&v=" + B.version + "&sub_product_v=" + B.version + "&t=" + d + "&code=" + a + "&da_src=" + a + c
            }) :e({
                src:"product=jsapi&sub_product=jsapi&v=" + B.version + "&sub_product_v=" + B.version + "&t=" + d + "&code=" + a + "&da_src=" + a + c
            });
            mb || (t.D(kb, "load", function() {
                jb = o;
                f();
            }), t.D(kb, "error", function() {
                jb = o;
                f();
            }), mb = i);
        }
    }
    var jb, mb, lb = [], kb = new Image();
    I(5e3);
    B.aE = {
        TILE_BASE_URLS:[ "ss0.baidu.com/5bwHcj7lABFU8t_jkk_Z1zRvfdw6buu", "ss0.baidu.com/5bwHcj7lABFV8t_jkk_Z1zRvfdw6buu", "ss0.baidu.com/5bwHcj7lABFS8t_jkk_Z1zRvfdw6buu", "ss0.bdstatic.com/5bwHcj7lABFT8t_jkk_Z1zRvfdw6buu", "ss0.bdstatic.com/5bwHcj7lABFY8t_jkk_Z1zRvfdw6buu" ],
        TILE_ONLINE_URLS:[ "ss0.bdstatic.com/8bo_dTSlR1gBo1vgoIiO_jowehsv", "ss0.bdstatic.com/8bo_dTSlRMgBo1vgoIiO_jowehsv", "ss0.bdstatic.com/8bo_dTSlRcgBo1vgoIiO_jowehsv", "ss0.bdstatic.com/8bo_dTSlRsgBo1vgoIiO_jowehsv", "ss0.bdstatic.com/8bo_dTSlQ1gBo1vgoIiO_jowehsv" ],
        TIlE_PERSPECT_URLS:[ "ss0.bdstatic.com/-OR1cTe9KgQFm2e88IuM_a", "ss0.bdstatic.com/-ON1cTe9KgQFm2e88IuM_a", "ss0.bdstatic.com/-OZ1cTe9KgQFm2e88IuM_a", "ss0.bdstatic.com/-OV1cTe9KgQFm2e88IuM_a" ],
        geolocControl:"p0.baidu.com/8LkJsjOpB1gCo2Kml5_Y_D3",
        TILES_YUN_HOST:[ "sp0.baidu.com/-eR1bSahKgkFkRGko9WTAnF6hhy", "sp0.baidu.com/-eN1bSahKgkFkRGko9WTAnF6hhy", "sp0.baidu.com/-eZ1bSahKgkFkRGko9WTAnF6hhy", "sp0.baidu.com/-eV1bSahKgkFkRGko9WTAnF6hhy" ],
        traffic:"sp0.baidu.com/7_AZsjOpB1gCo2Kml5_Y_D3",
        iw_pano:"ss0.bdstatic.com/5LUZemba_QUU8t7mm9GUKT-xh_",
        message:"sp0.baidu.com/7vo0bSba2gU2pMbgoY3K",
        baidumap:"sp0.baidu.com/80MWsjip0QIZ8tyhnq",
        wuxian:"sp0.baidu.com/6a1OdTeaKgQFm2e88IuM_a",
        pano:[ "ss0.bdstatic.com/5LUZemba_QUU8t7mm9GUKT-xh_", "ss0.bdstatic.com/5LUZemfa_QUU8t7mm9GUKT-xh_", "ss0.bdstatic.com/5LUZemja_QUU8t7mm9GUKT-xh_" ],
        main_domain_nocdn:{
            baidu:"sp0.baidu.com/9_Q4sjOpB1gCo2Kml5_Y_D3",
            other:"sapi.map.baidu.com"
        },
        main_domain_cdn:{
            baidu:[ "ss0.bdstatic.com/9_Q4vHSd2RZ3otebn9fN2DJv", "ss0.baidu.com/9_Q4vXSd2RZ3otebn9fN2DJv", "ss0.bdstatic.com/9_Q4vnSd2RZ3otebn9fN2DJv" ],
            other:[ "sapi.map.baidu.com" ]
        },
        map_click:"sp0.baidu.com/80MWbzKh2wt3n2qy8IqW0jdnxx1xbK",
        vector_traffic:"ss0.bdstatic.com/8aZ1cTe9KgQIm2_p8IuM_a"
    };
    B.vO = {
        TILE_BASE_URLS:[ "shangetu0.map.bdimg.com", "shangetu1.map.bdimg.com", "shangetu2.map.bdimg.com", "shangetu3.map.bdimg.com", "shangetu4.map.bdimg.com" ],
        TILE_ONLINE_URLS:[ "online0.map.bdimg.com", "online1.map.bdimg.com", "online2.map.bdimg.com", "online3.map.bdimg.com", "online4.map.bdimg.com" ],
        TIlE_PERSPECT_URLS:[ "d0.map.baidu.com", "d1.map.baidu.com", "d2.map.baidu.com", "d3.map.baidu.com" ],
        geolocControl:"loc.map.baidu.com",
        TILES_YUN_HOST:[ "g0.api.map.baidu.com", "g1.api.map.baidu.com", "g2.api.map.baidu.com", "g3.api.map.baidu.com" ],
        traffic:"its.map.baidu.com",
        iw_pano:"pcsv0.map.bdimg.com",
        message:"j.map.baidu.com",
        baidumap:"map.baidu.com",
        wuxian:"wuxian.baidu.com",
        pano:[ "pcsv0.map.bdimg.com", "pcsv1.map.bdimg.com", "pcsv2.map.bdimg.com" ],
        main_domain_nocdn:{
            baidu:"api.map.baidu.com"
        },
        main_domain_cdn:{
            baidu:[ "api0.map.bdimg.com", "api1.map.bdimg.com", "api2.map.bdimg.com" ]
        },
        map_click:"mapclick.map.baidu.com",
        vector_traffic:"or.map.bdimg.com"
    };
    B.mR = {
        "0":{
            proto:"http://",
            domain:B.vO
        },
        1:{
            proto:"https://",
            domain:B.aE
        },
        2:{
            proto:"https://",
            domain:B.aE
        }
    };
    B.ht = window.HOST_TYPE || "0";
    B.url = B.mR[B.ht];
    B.ks = B.url.proto + B.url.domain.baidumap + "/";
    B.vc = B.url.proto + ("2" == B.ht ? B.url.domain.main_domain_nocdn.other :B.url.domain.main_domain_nocdn.baidu) + "/";
    B.ca = B.url.proto + ("2" == B.ht ? B.url.domain.main_domain_cdn.other[0] :B.url.domain.main_domain_cdn.baidu[0]) + "/";
    function nb(a) {
        var b = {
            duration:1e3,
            Vc:30,
            vl:0,
            vd:ob.BE,
            ws:p()
        };
        this.Ie = [];
        if (a) for (var c in a) b[c] = a[c];
        this.k = b;
        if (Qa(b.vl)) {
            var d = this;
            setTimeout(function() {
                d.start();
            }, b.vl);
        } else b.vl != pb && this.start();
    }
    var pb = "INFINITE";
    nb.prototype.start = function() {
        this.Rp = Wa();
        this.mu = this.Rp + this.k.duration;
        qb(this);
    };
    nb.prototype.add = fa(0);
    function qb(a) {
        var b = Wa();
        b >= a.mu ? (Ra(a.k.qa) && a.k.qa(a.k.vd(1)), Ra(a.k.finish) && a.k.finish(), 0 < a.Ie.length && (b = a.Ie[0],
        b.Ie = [].concat(a.Ie.slice(1)), b.start())) :(a.Ls = a.k.vd((b - a.Rp) / a.k.duration),
        Ra(a.k.qa) && a.k.qa(a.Ls), a.Zy || (a.Rn = setTimeout(function() {
            qb(a);
        }, 1e3 / a.k.Vc)));
    }
    nb.prototype.stop = function(a) {
        this.Zy = i;
        for (var b = 0; b < this.Ie.length; b++) this.Ie[b].stop(), this.Ie[b] = n;
        this.Ie.length = 0;
        this.Rn && (clearTimeout(this.Rn), this.Rn = n);
        this.k.ws(this.Ls);
        a && (this.mu = this.Rp, qb(this));
    };
    nb.prototype.cancel = fa(2);
    var ob = {
        BE:function(a) {
            return a;
        },
        reverse:function(a) {
            return 1 - a;
        },
        Gw:function(a) {
            return a * a;
        },
        Fw:function(a) {
            return Math.pow(a, 3);
        },
        $M:function(a) {
            return -(a * (a - 2));
        },
        ZM:function(a) {
            return Math.pow(a - 1, 3) + 1;
        },
        gD:function(a) {
            return .5 > a ? 2 * a * a :-2 * (a - 2) * a - 1;
        },
        ES:function(a) {
            return .5 > a ? 4 * Math.pow(a, 3) :4 * Math.pow(a - 1, 3) + 1;
        },
        FS:function(a) {
            return (1 - Math.cos(Math.PI * a)) / 2;
        }
    };
    ob["ease-in"] = ob.Gw;
    ob["ease-out"] = ob.$M;
    var C = {
        oz:34,
        pz:21,
        qz:new M(21, 32),
        HG:new M(10, 32),
        GG:new M(24, 36),
        FG:new M(12, 36),
        mz:new M(13, 1),
        da:B.ca + "images/",
        nz:B.ca + "images/markers_new.png",
        DG:24,
        EG:73,
        Sv:{
            "北京":{
                Bs:"bj",
                m:new H(116.403874, 39.914889)
            },
            "上海":{
                Bs:"sh",
                m:new H(121.487899, 31.249162)
            },
            "深圳":{
                Bs:"sz",
                m:new H(114.025974, 22.546054)
            },
            "广州":{
                Bs:"gz",
                m:new H(113.30765, 23.120049)
            }
        },
        fontFamily:"arial,sans-serif"
    };
    t.R.Bf ? (t.extend(C, {
        XC:"url(" + C.da + "ruler.cur),crosshair",
        yb:"-moz-grab",
        Hc:"-moz-grabbing"
    }), t.platform.uE && (C.fontFamily = "arial,simsun,sans-serif")) :t.R.DC || t.R.DF ? t.extend(C, {
        XC:"url(" + C.da + "ruler.cur) 2 6,crosshair",
        yb:"url(" + C.da + "openhand.cur) 8 8,default",
        Hc:"url(" + C.da + "closedhand.cur) 8 8,move"
    }) :t.extend(C, {
        XC:"url(" + C.da + "ruler.cur),crosshair",
        yb:"url(" + C.da + "openhand.cur),default",
        Hc:"url(" + C.da + "closedhand.cur),move"
    });
    function rb(a, b) {
        var c = a.style;
        c.left = b[0] + "px";
        c.top = b[1] + "px";
    }
    function sb(a) {
        0 < t.R.V ? a.unselectable = "on" :a.style.MozUserSelect = "none";
    }
    function tb(a) {
        return a && a.parentNode && 11 != a.parentNode.nodeType;
    }
    function ub(a, b) {
        t.B.as(a, "beforeEnd", b);
        return a.lastChild;
    }
    function vb(a) {
        for (var b = {
            left:0,
            top:0
        }; a && a.offsetParent; ) b.left += a.offsetLeft, b.top += a.offsetTop, a = a.offsetParent;
        return b;
    }
    function x(a) {
        a = window.event || a;
        a.stopPropagation ? a.stopPropagation() :a.cancelBubble = i;
    }
    function wb(a) {
        a = window.event || a;
        a.preventDefault ? a.preventDefault() :a.returnValue = o;
        return o;
    }
    function ma(a) {
        x(a);
        return wb(a);
    }
    function xb() {
        var a = document.documentElement, b = document.body;
        return a && (a.scrollTop || a.scrollLeft) ? [ a.scrollTop, a.scrollLeft ] :b ? [ b.scrollTop, b.scrollLeft ] :[ 0, 0 ];
    }
    function yb(a, b) {
        if (a && b) return Math.round(Math.sqrt(Math.pow(a.x - b.x, 2) + Math.pow(a.y - b.y, 2)));
    }
    function zb(a, b) {
        var c = [], b = b || function(a) {
            return a;
        }, d;
        for (d in a) c.push(d + "=" + b(a[d]));
        return c.join("&");
    }
    function L(a, b, c) {
        var d = document.createElement(a);
        c && (d = document.createElementNS(c, a));
        return t.B.Iy(d, b || {});
    }
    function Pa(a) {
        if (a.currentStyle) return a.currentStyle;
        if (a.ownerDocument && a.ownerDocument.defaultView) return a.ownerDocument.defaultView.getComputedStyle(a, n);
    }
    function Ra(a) {
        return "function" == typeof a;
    }
    function Qa(a) {
        return "number" == typeof a;
    }
    function Ua(a) {
        return "string" == typeof a;
    }
    function Ab(a) {
        return "undefined" != typeof a;
    }
    function Bb(a) {
        return "object" == typeof a;
    }
    var Cb = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
    function Db(a) {
        var b = "", c, d, e = "", f, g = "", j = 0;
        f = /[^A-Za-z0-9\+\/\=]/g;
        if (!a || f.exec(a)) return a;
        a = a.replace(/[^A-Za-z0-9\+\/\=]/g, "");
        do c = Cb.indexOf(a.charAt(j++)), d = Cb.indexOf(a.charAt(j++)), f = Cb.indexOf(a.charAt(j++)),
        g = Cb.indexOf(a.charAt(j++)), c = c << 2 | d >> 4, d = (d & 15) << 4 | f >> 2,
        e = (f & 3) << 6 | g, b += String.fromCharCode(c), 64 != f && (b += String.fromCharCode(d)),
        64 != g && (b += String.fromCharCode(e)); while (j < a.length);
        return b;
    }
    var N = t.lang.ut;
    function D() {
        return !(!t.platform.LO && !t.platform.KO && !t.platform.Sl);
    }
    function Oa() {
        return !(!t.platform.uE && !t.platform.MO && !t.platform.RO);
    }
    function Wa() {
        return new Date().getTime();
    }
    function Eb() {
        var a = document.body.appendChild(L("div"));
        a.innerHTML = '<v:shape id="vml_tester1" adj="1" />';
        var b = a.firstChild;
        if (!b.style) return o;
        b.style.behavior = "url(#default#VML)";
        b = b ? "object" == typeof b.adj :i;
        a.parentNode.removeChild(a);
        return b;
    }
    function Fb() {
        return !!document.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#Shape", "1.1");
    }
    function Gb() {
        return !!L("canvas").getContext;
    }
    B.gs = function() {
        var a = i, b = i, c = i, d = i, e = 0, f = 0, g = 0, j = 0;
        return {
            VH:function() {
                e += 1;
                a && (a = o, setTimeout(function() {
                    I(5054, {
                        pic:e
                    });
                    a = i;
                    e = 0;
                }, 1e4));
            },
            UH:function() {
                f += 1;
                b && (b = o, setTimeout(function() {
                    I(5055, {
                        move:f
                    });
                    b = i;
                    f = 0;
                }, 1e4));
            },
            XH:function() {
                g += 1;
                c && (c = o, setTimeout(function() {
                    I(5056, {
                        zoom:g
                    });
                    c = i;
                    g = 0;
                }, 1e4));
            },
            WH:function(a) {
                j += a;
                d && (d = o, setTimeout(function() {
                    I(5057, {
                        tile:j
                    });
                    d = i;
                    j = 0;
                }, 1e4));
            }
        };
    }();
    var Va;
    (function() {
        function a(a) {
            this.xL = a;
            this.timing = {};
            this.start = +new Date();
        }
        function b(a, b) {
            if (a.length === +a.length) for (var c = 0, d = a.length; c < d && b.call(ba, c, a[c], a) !== o; c++) ; else for (c in a) if (a.hasOwnProperty(c) && b.call(ba, c, a[c], a) === o) break;
        }
        var c = [], d = {
            push:function(a) {
                c.push(a);
                if (window.localStorage && window.JSON) try {
                    localStorage.setItem("WPO_NR", JSON.stringify(c));
                } catch (b) {}
            },
            get:function(a) {
                var b = [];
                if (window.localStorage) try {
                    a && localStorage.removeItem("WPO_NR");
                } catch (d) {}
                b = c;
                a && (c = []);
                return b;
            }
        }, e, f, g, j, k = {};
        (!window.localStorage || !window.JSON) && document.attachEvent && window.attachEvent("onbeforeunload", function() {
            l.send();
        });
        var l = {
            send:function(a) {
                var c = [], e = [], f = a || d.get(i), g;
                0 < f.length && (b(f, function(d, e) {
                    var f = [];
                    b(e.timing, function(a, b) {
                        f.push('"' + a + '":' + b);
                    });
                    c.push('{"t":{' + f.join(",") + '},"a":' + e.xL + "}");
                    !g && a && e.start && (g = e.start);
                }), b(k, function(a, b) {
                    e.push(a + "=" + b);
                }), e.push("d=[" + c.join(",") + "]"), g ? e.push("_st=" + g) :e.push("_t=" + +new Date()),
                f = new Image(), f.src = "http://static.tieba.baidu.com/tb/pms/img/st.gif?" + e.join("&"),
                window["___pms_img_" + 1 * new Date()] = f);
            }
        };
        a.prototype = {
            xc:function(a, b) {
                this.timing[a] = 0 <= b ? b :new Date() - this.start;
            },
            Wy:function() {
                this.start = +new Date();
            },
            hR:function() {
                this.xc("tt");
            },
            zG:function() {
                this.xc("vt");
            },
            Gs:function() {
                f && (d.push(this), d.get().length >= g && l.send());
            },
            error:p()
        };
        Va = {
            Ek:{
                Mo:function(a) {
                    var b = navigator.xS || navigator.BT || navigator.xU || {
                        type:0
                    };
                    f = Math.random() <= (a.UP || .01);
                    g = a.max || 5;
                    j = a.AT || b.type;
                    k = {
                        p:a.DP,
                        mnt:j,
                        b:50
                    };
                    window.localStorage && window.JSON && window.addEventListener && (e = d.get(i),
                    window.addEventListener("load", function() {
                        l.send(e);
                    }, o));
                },
                co:function(b) {
                    return new a(b);
                }
            }
        };
    })();
    Va.Ek.Mo({
        DP:18,
        UP:.1,
        max:1
    });
    B.Am = {
        Ez:"#83a1ff",
        Cm:"#808080"
    };
    function db(a, b) {
        if (b) {
            var c = (1e5 * Math.random()).toFixed(0);
            B._rd["_cbk" + c] = function(a) {
                b && b(a);
                delete B._rd["_cbk" + c];
            };
            a += "&callback=BMap._rd._cbk" + c;
        }
        var d = L("script", {
            type:"text/javascript"
        });
        d.charset = "utf-8";
        d.src = a;
        d.addEventListener ? d.addEventListener("load", function(a) {
            a = a.target;
            a.parentNode.removeChild(a);
        }, o) :d.attachEvent && d.attachEvent("onreadystatechange", function() {
            var a = window.event.srcElement;
            a && ("loaded" == a.readyState || "complete" == a.readyState) && a.parentNode.removeChild(a);
        });
        setTimeout(function() {
            document.getElementsByTagName("head")[0].appendChild(d);
            d = n;
        }, 1);
    }
    var Hb = {
        map:"q2co5y",
        common:"gg3lyt",
        tile:"2aemuk",
        groundoverlay:"isz1rv",
        marker:"fwc2es",
        markeranimation:"loi1qy",
        poly:"otqgne",
        draw:"xpb4wj",
        drawbysvg:"dt1egy",
        drawbyvml:"axclnm",
        drawbycanvas:"jsgdrh",
        infowindow:"gfg2fw",
        oppc:"kgplum",
        opmb:"bzkuml",
        menu:"5yna4h",
        control:"rntjih",
        navictrl:"ydm4dx",
        geoctrl:"ieh335",
        copyrightctrl:"jxxbx4",
        scommon:"ywp2x2",
        local:"yukvfp",
        route:"ftv1bw",
        othersearch:"t5rmo0",
        mapclick:"01qwci",
        buslinesearch:"44v15h",
        hotspot:"2pg4wv",
        autocomplete:"mxurrm",
        coordtrans:"i1tuxt",
        coordtransutils:"2k1tjb",
        clayer:"siefgw",
        panorama:"me0hip",
        panoramaservice:"el0vuc",
        panoramaflash:"pxzep5",
        vector:"yvh4bw"
    };
    t.at = function() {
        function a(a) {
            return d && !!c[b + a + "_" + Hb[a]];
        }
        var b = "BMap_", c = window.localStorage, d = "localStorage" in window && c !== n && c !== ba;
        return {
            OO:d,
            set:function(a, f) {
                if (d) {
                    for (var g = b + a + "_", j = c.length, k; j--; ) k = c.key(j), -1 < k.indexOf(g) && c.removeItem(k);
                    try {
                        c.setItem(b + a + "_" + Hb[a], f);
                    } catch (l) {
                        c.clear();
                    }
                }
            },
            get:function(e) {
                return d && a(e) ? c.getItem(b + e + "_" + Hb[e]) :o;
            },
            AC:a
        };
    }();
    function J() {}
    t.object.extend(J, {
        Bh:{
            Gz:-1,
            lH:0,
            wm:1
        },
        AD:function() {
            var a = "drawbysvg";
            D() && Gb() ? a = "drawbycanvas" :Fb() ? a = "drawbysvg" :Eb() ? a = "drawbyvml" :Gb() && (a = "drawbycanvas");
            return {
                control:[],
                marker:[],
                poly:[ "marker", a ],
                drawbysvg:[ "draw" ],
                drawbyvml:[ "draw" ],
                drawbycanvas:[ "draw" ],
                infowindow:[ "common", "marker" ],
                menu:[],
                oppc:[],
                opmb:[],
                scommon:[],
                local:[ "scommon" ],
                route:[ "scommon" ],
                othersearch:[ "scommon" ],
                autocomplete:[ "scommon" ],
                mapclick:[ "scommon" ],
                buslinesearch:[ "route" ],
                hotspot:[],
                coordtransutils:[ "coordtrans" ],
                clayer:[ "tile" ],
                panoramaservice:[],
                panorama:[ "marker", "panoramaservice" ],
                panoramaflash:[ "panoramaservice" ]
            };
        },
        ST:{},
        wz:{
            uH:B.ca + "getmodules?v=2.0&t=20140707",
            cL:5e3
        },
        ow:o,
        Rc:{
            Wi:{},
            Gk:[],
            Lq:[]
        },
        load:function(a, b, c) {
            var d = this.ho(a);
            if (d.Xd == this.Bh.wm) c && b(); else {
                if (d.Xd == this.Bh.Gz) {
                    this.HC(a);
                    this.vF(a);
                    var e = this;
                    e.ow == o && (e.ow = i, setTimeout(function() {
                        for (var a = [], b = 0, c = e.Rc.Gk.length; b < c; b++) {
                            var d = e.Rc.Gk[b], l = "";
                            ia.at.AC(d) ? l = ia.at.get(d) :(l = "", a.push(d + "_" + Hb[d]));
                            e.Rc.Lq.push({
                                PE:d,
                                dy:l
                            });
                        }
                        e.ow = o;
                        e.Rc.Gk.length = 0;
                        0 == a.length ? e.kD() :db(e.wz.uH + "&mod=" + a.join(","));
                    }, 1));
                    d.Xd = this.Bh.lH;
                }
                d.Sp.push(b);
            }
        },
        HC:function(a) {
            if (a && this.AD()[a]) for (var a = this.AD()[a], b = 0; b < a.length; b++) this.HC(a[b]),
            this.Rc.Wi[a[b]] || this.vF(a[b]);
        },
        vF:function(a) {
            for (var b = 0; b < this.Rc.Gk.length; b++) if (this.Rc.Gk[b] == a) return;
            this.Rc.Gk.push(a);
        },
        TP:function(a, b) {
            var c = this.ho(a);
            try {
                eval(b);
            } catch (d) {
                return;
            }
            c.Xd = this.Bh.wm;
            for (var e = 0, f = c.Sp.length; e < f; e++) c.Sp[e]();
            c.Sp.length = 0;
        },
        AC:function(a, b) {
            var c = this;
            c.timeout = setTimeout(function() {
                c.Rc.Wi[a].Xd != c.Bh.wm ? (c.remove(a), c.load(a, b)) :clearTimeout(c.timeout);
            }, c.wz.cL);
        },
        ho:function(a) {
            this.Rc.Wi[a] || (this.Rc.Wi[a] = {}, this.Rc.Wi[a].Xd = this.Bh.Gz, this.Rc.Wi[a].Sp = []);
            return this.Rc.Wi[a];
        },
        remove:function(a) {
            delete this.ho(a);
        },
        UL:function(a, b) {
            for (var c = this.Rc.Lq, d = i, e = 0, f = c.length; e < f; e++) "" == c[e].dy && (c[e].PE == a ? c[e].dy = b :d = o);
            d && this.kD();
        },
        kD:function() {
            for (var a = this.Rc.Lq, b = 0, c = a.length; b < c; b++) this.TP(a[b].PE, a[b].dy);
            this.Rc.Lq.length = 0;
        }
    });
    function P(a, b) {
        this.x = a || 0;
        this.y = b || 0;
        this.x = this.x;
        this.y = this.y;
    }
    P.prototype.kb = function(a) {
        return a && a.x == this.x && a.y == this.y;
    };
    function M(a, b) {
        this.width = a || 0;
        this.height = b || 0;
    }
    M.prototype.kb = function(a) {
        return a && this.width == a.width && this.height == a.height;
    };
    function cb(a, b) {
        a && (this.ab = a, this.Q = "spot" + cb.Q++, b = b || {}, this.$g = b.text || "",
        this.xq = b.offsets ? b.offsets.slice(0) :[ 5, 5, 5, 5 ], this.$B = b.userData || n,
        this.fg = b.minZoom || n, this.ue = b.maxZoom || n);
    }
    cb.Q = 0;
    t.extend(cb.prototype, {
        ha:function(a) {
            this.fg == n && (this.fg = a.F.Kc);
            this.ue == n && (this.ue = a.F.od);
        },
        fa:function(a) {
            a instanceof H && (this.ab = a);
        },
        W:s("ab"),
        kp:ca("$g"),
        Bx:s("$g"),
        setUserData:ca("$B"),
        getUserData:s("$B")
    });
    function R() {
        this.A = n;
        this.Fb = "control";
        this.Qa = this.tC = i;
    }
    t.lang.ga(R, t.lang.ma, "Control");
    t.extend(R.prototype, {
        initialize:function(a) {
            this.A = a;
            if (this.C) return a.Aa.appendChild(this.C), this.C;
        },
        Td:function(a) {
            !this.C && this.initialize && Ra(this.initialize) && (this.C = this.initialize(a));
            this.k = this.k || {
                Mf:o
            };
            this.rv();
            this.Eq();
            this.C && (this.C.wn = this);
        },
        rv:function() {
            var a = this.C;
            if (a) {
                var b = a.style;
                b.position = "absolute";
                b.zIndex = this.Qt || "10";
                b.MozUserSelect = "none";
                b.WebkitTextSizeAdjust = "none";
                this.k.Mf || t.B.ib(a, "BMap_noprint");
                D() || t.D(a, "contextmenu", ma);
            }
        },
        remove:function() {
            this.A = n;
            this.C && (this.C.parentNode && this.C.parentNode.removeChild(this.C), this.C = this.C.wn = n);
        },
        Ja:function() {
            this.C = ub(this.A.Aa, "<div unselectable='on'></div>");
            this.Qa == o && t.B.H(this.C);
            return this.C;
        },
        Eq:function() {
            this.Zb(this.k.anchor);
        },
        Zb:function(a) {
            if (this.lS || !Qa(a) || isNaN(a) || a < Ib || 3 < a) a = this.defaultAnchor;
            this.k = this.k || {
                Mf:o
            };
            this.k.la = this.k.la || this.defaultOffset;
            var b = this.k.anchor;
            this.k.anchor = a;
            if (this.C) {
                var c = this.C, d = this.k.la.width, e = this.k.la.height;
                c.style.left = c.style.top = c.style.right = c.style.bottom = "auto";
                switch (a) {
                  case Ib:
                    c.style.top = e + "px";
                    c.style.left = d + "px";
                    break;

                  case Jb:
                    c.style.top = e + "px";
                    c.style.right = d + "px";
                    break;

                  case Kb:
                    c.style.bottom = e + "px";
                    c.style.left = d + "px";
                    break;

                  case 3:
                    c.style.bottom = e + "px", c.style.right = d + "px";
                }
                c = [ "TL", "TR", "BL", "BR" ];
                t.B.mc(this.C, "anchor" + c[b]);
                t.B.ib(this.C, "anchor" + c[a]);
            }
        },
        ax:function() {
            return this.k.anchor;
        },
        td:function(a) {
            a instanceof M && (this.k = this.k || {
                Mf:o
            }, this.k.la = new M(a.width, a.height), this.C && this.Zb(this.k.anchor));
        },
        Ff:function() {
            return this.k.la;
        },
        Jc:s("C"),
        show:function() {
            this.Qa != i && (this.Qa = i, this.C && t.B.show(this.C));
        },
        H:function() {
            this.Qa != o && (this.Qa = o, this.C && t.B.H(this.C));
        },
        isPrintable:function() {
            return !!this.k.Mf;
        },
        vh:function() {
            return !this.C && !this.A ? o :!!this.Qa;
        }
    });
    var Ib = 0, Jb = 1, Kb = 2;
    function eb(a) {
        R.call(this);
        a = a || {};
        this.k = {
            Mf:o,
            Sy:a.showZoomInfo || i,
            anchor:a.anchor,
            la:a.offset,
            type:a.type,
            aN:a.enableGeolocation || o
        };
        this.defaultAnchor = D() ? 3 :Ib;
        this.defaultOffset = new M(10, 10);
        this.Zb(a.anchor);
        this.vk(a.type);
        this.pe();
    }
    t.lang.ga(eb, R, "NavigationControl");
    t.extend(eb.prototype, {
        initialize:function(a) {
            this.A = a;
            return this.C;
        },
        vk:function(a) {
            this.k.type = Qa(a) && 0 <= a && 3 >= a ? a :0;
        },
        Ml:function() {
            return this.k.type;
        },
        pe:function() {
            var a = this;
            J.load("navictrl", function() {
                a.lf();
            });
        }
    });
    function Lb(a) {
        R.call(this);
        a = a || {};
        this.k = {
            anchor:a.anchor || Kb,
            la:a.offset || new M(10, 30),
            gU:a.showAddressBar || o,
            HS:a.enableAutoLocation || o,
            yT:a.locationIcon || n
        };
        var b = this;
        this.Qt = 1200;
        b.oR = [];
        this.al = [];
        J.load("geoctrl", function() {
            (function d() {
                if (0 !== b.al.length) {
                    var a = b.al.shift();
                    b[a.method].apply(b, a.arguments);
                    d();
                }
            })();
            b.tH();
        });
        I(Ha);
    }
    t.lang.ga(Lb, R, "GeolocationControl");
    t.extend(Lb.prototype, {
        location:function() {
            this.al.push({
                method:"location",
                arguments:arguments
            });
        },
        getAddressComponent:da(n)
    });
    function Mb(a) {
        R.call(this);
        a = a || {};
        this.k = {
            Mf:o,
            anchor:a.anchor,
            la:a.offset
        };
        this.sb = [];
        this.defaultAnchor = Kb;
        this.defaultOffset = new M(5, 2);
        this.Zb(a.anchor);
        this.tC = o;
        this.pe();
    }
    t.lang.ga(Mb, R, "CopyrightControl");
    t.object.extend(Mb.prototype, {
        initialize:function(a) {
            this.A = a;
            return this.C;
        },
        cr:function(a) {
            if (a && Qa(a.id) && !isNaN(a.id)) {
                var b = {
                    bounds:n,
                    content:""
                }, c;
                for (c in a) b[c] = a[c];
                if (a = this.Pj(a.id)) for (var d in b) a[d] = b[d]; else this.sb.push(b);
            }
        },
        Pj:function(a) {
            for (var b = 0, c = this.sb.length; b < c; b++) if (this.sb[b].id == a) return this.sb[b];
        },
        ix:s("sb"),
        wy:function(a) {
            for (var b = 0, c = this.sb.length; b < c; b++) this.sb[b].id == a && (r = this.sb.splice(b, 1),
            b--, c = this.sb.length);
        },
        pe:function() {
            var a = this;
            J.load("copyrightctrl", function() {
                a.lf();
            });
        }
    });
    function gb(a) {
        R.call(this);
        a = a || {};
        this.k = {
            Mf:o,
            size:a.size || new M(150, 150),
            padding:5,
            Da:a.isOpen === i ? i :o,
            zR:4,
            la:a.offset,
            anchor:a.anchor
        };
        this.defaultAnchor = 3;
        this.defaultOffset = new M(0, 0);
        this.Pm = this.Qm = 13;
        this.Zb(a.anchor);
        this.Oc(this.k.size);
        this.pe();
    }
    t.lang.ga(gb, R, "OverviewMapControl");
    t.extend(gb.prototype, {
        initialize:function(a) {
            this.A = a;
            return this.C;
        },
        Zb:function(a) {
            R.prototype.Zb.call(this, a);
        },
        kd:function() {
            this.kd.el = i;
            this.k.Da = !this.k.Da;
            this.C || (this.kd.el = o);
        },
        Oc:function(a) {
            a instanceof M || (a = new M(150, 150));
            a.width = 0 < a.width ? a.width :150;
            a.height = 0 < a.height ? a.height :150;
            this.k.size = a;
        },
        Ab:function() {
            return this.k.size;
        },
        Da:function() {
            return this.k.Da;
        },
        pe:function() {
            var a = this;
            J.load("control", function() {
                a.lf();
            });
        }
    });
    function fb(a) {
        R.call(this);
        a = a || {};
        this.k = {
            Mf:o,
            color:"black",
            oc:"metric",
            la:a.offset
        };
        this.defaultAnchor = Kb;
        this.defaultOffset = new M(81, 18);
        this.Zb(a.anchor);
        this.lg = {
            metric:{
                name:"metric",
                IC:1,
                fE:1e3,
                kG:"米",
                lG:"公里"
            },
            us:{
                name:"us",
                IC:3.2808,
                fE:5280,
                kG:"英尺",
                lG:"英里"
            }
        };
        this.lg[this.k.oc] || (this.k.oc = "metric");
        this.CB = n;
        this.jB = {};
        this.pe();
    }
    t.lang.ga(fb, R, "ScaleControl");
    t.object.extend(fb.prototype, {
        initialize:function(a) {
            this.A = a;
            return this.C;
        },
        Jy:function(a) {
            this.k.color = a + "";
        },
        PS:function() {
            return this.k.color;
        },
        Ry:function(a) {
            this.k.oc = this.lg[a] && this.lg[a].name || this.k.oc;
        },
        gO:function() {
            return this.k.oc;
        },
        pe:function() {
            var a = this;
            J.load("control", function() {
                a.lf();
            });
        }
    });
    var Nb = 0;
    function hb(a) {
        R.call(this);
        a = a || {};
        this.defaultAnchor = Jb;
        this.defaultOffset = new M(10, 10);
        this.k = {
            Mf:o,
            If:[ Ja, Ta, Ma, La ],
            vM:[ "B_DIMENSIONAL_MAP", "B_SATELLITE_MAP", "B_NORMAL_MAP" ],
            type:a.type || Nb,
            la:a.offset || this.defaultOffset,
            cN:i
        };
        this.Zb(a.anchor);
        "[object Array]" == Object.prototype.toString.call(a.mapTypes) && (this.k.If = a.mapTypes.slice(0));
        this.pe();
    }
    t.lang.ga(hb, R, "MapTypeControl");
    t.object.extend(hb.prototype, {
        initialize:function(a) {
            this.A = a;
            return this.C;
        },
        bt:function(a) {
            this.A.Tk = a;
        },
        pe:function() {
            var a = this;
            J.load("control", function() {
                a.lf();
            }, i);
        }
    });
    function Ob(a) {
        R.call(this);
        a = a || {};
        this.k = {
            Mf:o,
            la:a.offset,
            anchor:a.anchor
        };
        this.Ug = o;
        this.Nq = n;
        this.rB = new Pb({
            Al:"api"
        });
        this.sB = new Qb(n, {
            Al:"api"
        });
        this.defaultAnchor = Jb;
        this.defaultOffset = new M(10, 10);
        this.Zb(a.anchor);
        this.pe();
        I(ua);
    }
    t.lang.ga(Ob, R, "PanoramaControl");
    t.extend(Ob.prototype, {
        initialize:function(a) {
            this.A = a;
            return this.C;
        },
        pe:function() {
            var a = this;
            J.load("control", function() {
                a.lf();
            });
        }
    });
    function Rb(a) {
        t.lang.ma.call(this);
        this.k = {
            Aa:n,
            cursor:"default"
        };
        this.k = t.extend(this.k, a);
        this.Fb = "contextmenu";
        this.A = n;
        this.ia = [];
        this.ve = [];
        this.Bd = [];
        this.wr = this.fo = n;
        this.dg = o;
        var b = this;
        J.load("menu", function() {
            b.Eb();
        });
    }
    t.lang.ga(Rb, t.lang.ma, "ContextMenu");
    t.object.extend(Rb.prototype, {
        ha:function(a, b) {
            this.A = a;
            this.$i = b || n;
        },
        remove:function() {
            this.A = this.$i = n;
        },
        fr:function(a) {
            if (a && !("menuitem" != a.Fb || "" == a.$g || 0 >= a.iL)) {
                for (var b = 0, c = this.ia.length; b < c; b++) if (this.ia[b] === a) return;
                this.ia.push(a);
                this.ve.push(a);
            }
        },
        removeItem:function(a) {
            if (a && "menuitem" == a.Fb) {
                for (var b = 0, c = this.ia.length; b < c; b++) this.ia[b] === a && (this.ia[b].remove(),
                this.ia.splice(b, 1), c--);
                b = 0;
                for (c = this.ve.length; b < c; b++) this.ve[b] === a && (this.ve[b].remove(), this.ve.splice(b, 1),
                c--);
            }
        },
        Hv:function() {
            this.ia.push({
                Fb:"divider",
                Gh:this.Bd.length
            });
            this.Bd.push({
                B:n
            });
        },
        yy:function(a) {
            if (this.Bd[a]) {
                for (var b = 0, c = this.ia.length; b < c; b++) this.ia[b] && "divider" == this.ia[b].Fb && this.ia[b].Gh == a && (this.ia.splice(b, 1),
                c--), this.ia[b] && "divider" == this.ia[b].Fb && this.ia[b].Gh > a && this.ia[b].Gh--;
                this.Bd.splice(a, 1);
            }
        },
        Jc:s("C"),
        show:function() {
            this.dg != i && (this.dg = i);
        },
        H:function() {
            this.dg != o && (this.dg = o);
        },
        gQ:function(a) {
            a && (this.k.cursor = a);
        },
        getItem:function(a) {
            return this.ve[a];
        }
    });
    function Sb(a, b, c) {
        if (a && Ra(b)) {
            t.lang.ma.call(this);
            this.k = {
                width:100,
                id:""
            };
            c = c || {};
            this.k.width = 1 * c.width ? c.width :100;
            this.k.id = c.id ? c.id :"";
            this.$g = a + "";
            this.Li = b;
            this.A = n;
            this.Fb = "menuitem";
            this.C = this.Xf = n;
            this.$f = i;
            var d = this;
            J.load("menu", function() {
                d.Eb();
            });
        }
    }
    t.lang.ga(Sb, t.lang.ma, "MenuItem");
    t.object.extend(Sb.prototype, {
        ha:function(a, b) {
            this.A = a;
            this.Xf = b;
        },
        remove:function() {
            this.A = this.Xf = n;
        },
        kp:function(a) {
            a && (this.$g = a + "");
        },
        Jc:s("C"),
        enable:function() {
            this.$f = i;
        },
        disable:function() {
            this.$f = o;
        }
    });
    function $a(a, b) {
        a && !b && (b = a);
        this.Fd = this.Ed = this.Jd = this.Id = this.mj = this.Zi = n;
        a && (this.mj = new H(a.lng, a.lat), this.Zi = new H(b.lng, b.lat), this.Jd = a.lng,
        this.Id = a.lat, this.Fd = b.lng, this.Ed = b.lat);
    }
    t.object.extend($a.prototype, {
        uh:function() {
            return !this.mj || !this.Zi;
        },
        kb:function(a) {
            return !(a instanceof $a) || this.uh() ? o :this.Wc().kb(a.Wc()) && this.Md().kb(a.Md());
        },
        Wc:s("mj"),
        Md:s("Zi"),
        hM:function(a) {
            return !(a instanceof $a) || this.uh() || a.uh() ? o :a.Jd > this.Jd && a.Fd < this.Fd && a.Id > this.Id && a.Ed < this.Ed;
        },
        za:function() {
            return this.uh() ? n :new H((this.Jd + this.Fd) / 2, (this.Id + this.Ed) / 2);
        },
        Nx:function(a) {
            if (!(a instanceof $a) || Math.max(a.Jd, a.Fd) < Math.min(this.Jd, this.Fd) || Math.min(a.Jd, a.Fd) > Math.max(this.Jd, this.Fd) || Math.max(a.Id, a.Ed) < Math.min(this.Id, this.Ed) || Math.min(a.Id, a.Ed) > Math.max(this.Id, this.Ed)) return n;
            var b = Math.max(this.Jd, a.Jd), c = Math.min(this.Fd, a.Fd), d = Math.max(this.Id, a.Id), a = Math.min(this.Ed, a.Ed);
            return new $a(new H(b, d), new H(c, a));
        },
        iM:function(a) {
            return !(a instanceof H) || this.uh() ? o :a.lng >= this.Jd && a.lng <= this.Fd && a.lat >= this.Id && a.lat <= this.Ed;
        },
        extend:function(a) {
            if (a instanceof H) {
                var b = a.lng, a = a.lat;
                this.mj || (this.mj = new H(0, 0));
                this.Zi || (this.Zi = new H(0, 0));
                if (!this.Jd || this.Jd > b) this.mj.lng = this.Jd = b;
                if (!this.Fd || this.Fd < b) this.Zi.lng = this.Fd = b;
                if (!this.Id || this.Id > a) this.mj.lat = this.Id = a;
                if (!this.Ed || this.Ed < a) this.Zi.lat = this.Ed = a;
            }
        },
        dz:function() {
            return this.uh() ? new H(0, 0) :new H(Math.abs(this.Fd - this.Jd), Math.abs(this.Ed - this.Id));
        }
    });
    function H(a, b) {
        isNaN(a) && (a = Db(a), a = isNaN(a) ? 0 :a);
        Ua(a) && (a = parseFloat(a));
        isNaN(b) && (b = Db(b), b = isNaN(b) ? 0 :b);
        Ua(b) && (b = parseFloat(b));
        this.lng = a;
        this.lat = b;
    }
    H.kE = function(a) {
        return a && 180 >= a.lng && -180 <= a.lng && 74 >= a.lat && -74 <= a.lat;
    };
    H.prototype.kb = function(a) {
        return a && this.lat == a.lat && this.lng == a.lng;
    };
    function Tb() {}
    Tb.prototype.mi = function() {
        aa("lngLatToPoint方法未实现");
    };
    Tb.prototype.xh = function() {
        aa("pointToLngLat方法未实现");
    };
    function Ub() {}
    var Za = {
        KC:function(a, b, c) {
            J.load("coordtransutils", function() {
                Za.CL(a, b, c);
            }, i);
        },
        JC:function(a, b, c) {
            J.load("coordtransutils", function() {
                Za.BL(a, b, c);
            }, i);
        }
    };
    function Q() {}
    Q.prototype = new Tb();
    t.extend(Q, {
        PG:6370996.81,
        Kz:[ 12890594.86, 8362377.87, 5591021, 3481989.83, 1678043.12, 0 ],
        Kp:[ 75, 60, 45, 30, 15, 0 ],
        VG:[ [ 1.410526172116255e-8, 898305509648872e-20, -1.9939833816331, 200.9824383106796, -187.2403703815547, 91.6087516669843, -23.38765649603339, 2.57121317296198, -.03801003308653, 17337981.2 ], [ -7.435856389565537e-9, 8983055097726239e-21, -.78625201886289, 96.32687599759846, -1.85204757529826, -59.36935905485877, 47.40033549296737, -16.50741931063887, 2.28786674699375, 10260144.86 ], [ -3.030883460898826e-8, 898305509983578e-20, .30071316287616, 59.74293618442277, 7.357984074871, -25.38371002664745, 13.45380521110908, -3.29883767235584, .32710905363475, 6856817.37 ], [ -1.981981304930552e-8, 8983055099779535e-21, .03278182852591, 40.31678527705744, .65659298677277, -4.44255534477492, .85341911805263, .12923347998204, -.04625736007561, 4482777.06 ], [ 3.09191371068437e-9, 8983055096812155e-21, 6995724062e-14, 23.10934304144901, -.00023663490511, -.6321817810242, -.00663494467273, .03430082397953, -.00466043876332, 2555164.4 ], [ 2.890871144776878e-9, 8983055095805407e-21, -3.068298e-8, 7.47137025468032, -353937994e-14, -.02145144861037, -1234426596e-14, .00010322952773, -323890364e-14, 826088.5 ] ],
        Hz:[ [ -.0015702102444, 111320.7020616939, 0x60e374c3105a3, -0x24bb4115e2e164, 0x5cc55543bb0ae8, -0x7ce070193f3784, 0x5e7ca61ddf8150, -0x261a578d8b24d0, 0x665d60f3742ca, 82.5 ], [ .0008277824516172526, 111320.7020463578, 647795574.6671607, -4082003173.641316, 10774905663.51142, -15171875531.51559, 12053065338.62167, -5124939663.577472, 913311935.9512032, 67.5 ], [ .00337398766765, 111320.7020202162, 4481351.045890365, -23393751.19931662, 79682215.47186455, -115964993.2797253, 97236711.15602145, -43661946.33752821, 8477230.501135234, 52.5 ], [ .00220636496208, 111320.7020209128, 51751.86112841131, 3796837.749470245, 992013.7397791013, -1221952.21711287, 1340652.697009075, -620943.6990984312, 144416.9293806241, 37.5 ], [ -.0003441963504368392, 111320.7020576856, 278.2353980772752, 2485758.690035394, 6070.750963243378, 54821.18345352118, 9540.606633304236, -2710.55326746645, 1405.483844121726, 22.5 ], [ -.0003218135878613132, 111320.7020701615, .00369383431289, 823725.6402795718, .46104986909093, 2351.343141331292, 1.58060784298199, 8.77738589078284, .37238884252424, 7.45 ] ],
        TS:function(a, b) {
            if (!a || !b) return 0;
            var c, d, a = this.xb(a);
            if (!a) return 0;
            c = this.Di(a.lng);
            d = this.Di(a.lat);
            b = this.xb(b);
            return !b ? 0 :this.ee(c, this.Di(b.lng), d, this.Di(b.lat));
        },
        wo:function(a, b) {
            if (!a || !b) return 0;
            a.lng = this.sx(a.lng, -180, 180);
            a.lat = this.yx(a.lat, -74, 74);
            b.lng = this.sx(b.lng, -180, 180);
            b.lat = this.yx(b.lat, -74, 74);
            return this.ee(this.Di(a.lng), this.Di(b.lng), this.Di(a.lat), this.Di(b.lat));
        },
        xb:function(a) {
            if (a === n || a === ba) return new H(0, 0);
            var b, c;
            b = new H(Math.abs(a.lng), Math.abs(a.lat));
            for (var d = 0; d < this.Kz.length; d++) if (b.lat >= this.Kz[d]) {
                c = this.VG[d];
                break;
            }
            a = this.LC(a, c);
            return a = new H(a.lng.toFixed(6), a.lat.toFixed(6));
        },
        jb:function(a) {
            if (a === n || a === ba || 180 < a.lng || -180 > a.lng || 90 < a.lat || -90 > a.lat) return new H(0, 0);
            var b, c;
            a.lng = this.sx(a.lng, -180, 180);
            a.lat = this.yx(a.lat, -74, 74);
            b = new H(a.lng, a.lat);
            for (var d = 0; d < this.Kp.length; d++) if (b.lat >= this.Kp[d]) {
                c = this.Hz[d];
                break;
            }
            if (!c) for (d = this.Kp.length - 1; 0 <= d; d--) if (b.lat <= -this.Kp[d]) {
                c = this.Hz[d];
                break;
            }
            a = this.LC(a, c);
            return a = new H(a.lng.toFixed(2), a.lat.toFixed(2));
        },
        LC:function(a, b) {
            if (a && b) {
                var c = b[0] + b[1] * Math.abs(a.lng), d = Math.abs(a.lat) / b[9], d = b[2] + b[3] * d + b[4] * d * d + b[5] * d * d * d + b[6] * d * d * d * d + b[7] * d * d * d * d * d + b[8] * d * d * d * d * d * d, c = c * (0 > a.lng ? -1 :1), d = d * (0 > a.lat ? -1 :1);
                return new H(c, d);
            }
        },
        ee:function(a, b, c, d) {
            return this.PG * Math.acos(Math.sin(c) * Math.sin(d) + Math.cos(c) * Math.cos(d) * Math.cos(b - a));
        },
        Di:function(a) {
            return Math.PI * a / 180;
        },
        mU:function(a) {
            return 180 * a / Math.PI;
        },
        yx:function(a, b, c) {
            b != n && (a = Math.max(a, b));
            c != n && (a = Math.min(a, c));
            return a;
        },
        sx:function(a, b, c) {
            for (;a > c; ) a -= c - b;
            for (;a < b; ) a += c - b;
            return a;
        }
    });
    t.extend(Q.prototype, {
        ek:function(a) {
            return Q.jb(a);
        },
        mi:function(a) {
            a = Q.jb(a);
            return new P(a.lng, a.lat);
        },
        ni:function(a) {
            return Q.xb(a);
        },
        xh:function(a) {
            a = new H(a.x, a.y);
            return Q.xb(a);
        },
        Bb:function(a, b, c, d, e) {
            if (a) return a = this.ek(a, e), b = this.Tb(b), new P(Math.round((a.lng - c.lng) / b + d.width / 2), Math.round((c.lat - a.lat) / b + d.height / 2));
        },
        eb:function(a, b, c, d, e) {
            if (a) return b = this.Tb(b), this.ni(new H(c.lng + b * (a.x - d.width / 2), c.lat - b * (a.y - d.height / 2)), e);
        },
        Tb:function(a) {
            return Math.pow(2, 18 - a);
        }
    });
    function bb() {
        this.fw = "bj";
    }
    bb.prototype = new Q();
    t.extend(bb.prototype, {
        ek:function(a, b) {
            return this.RH(b, Q.jb(a));
        },
        ni:function(a, b) {
            return Q.xb(this.SH(b, a));
        },
        lngLatToPointFor3D:function(a, b) {
            var c = this, d = Q.jb(a);
            J.load("coordtrans", function() {
                var a = Ub.vx(c.fw || "bj", d), a = new P(a.x, a.y);
                b && b(a);
            }, i);
        },
        pointToLngLatFor3D:function(a, b) {
            var c = this, d = new H(a.x, a.y);
            J.load("coordtrans", function() {
                var a = Ub.ux(c.fw || "bj", d), a = new H(a.lng, a.lat), a = Q.xb(a);
                b && b(a);
            }, i);
        },
        RH:function(a, b) {
            if (J.ho("coordtrans").Xd == J.Bh.wm) {
                var c = Ub.vx(a || "bj", b);
                return new H(c.x, c.y);
            }
            J.load("coordtrans", p());
            return new H(0, 0);
        },
        SH:function(a, b) {
            if (J.ho("coordtrans").Xd == J.Bh.wm) {
                var c = Ub.ux(a || "bj", b);
                return new H(c.lng, c.lat);
            }
            J.load("coordtrans", p());
            return new H(0, 0);
        },
        Tb:function(a) {
            return Math.pow(2, 20 - a);
        }
    });
    function Vb() {
        this.Fb = "overlay";
    }
    t.lang.ga(Vb, t.lang.ma, "Overlay");
    Vb.Wj = function(a) {
        a *= 1;
        return !a ? 0 :-1e5 * a << 1;
    };
    t.extend(Vb.prototype, {
        Td:function(a) {
            if (!this.J && Ra(this.initialize) && (this.J = this.initialize(a))) this.J.style.WebkitUserSelect = "none";
            this.draw();
        },
        initialize:function() {
            aa("initialize方法未实现");
        },
        draw:function() {
            aa("draw方法未实现");
        },
        remove:function() {
            this.J && this.J.parentNode && this.J.parentNode.removeChild(this.J);
            this.J = n;
            this.dispatchEvent(new N("onremove"));
        },
        H:function() {
            this.J && t.B.H(this.J);
        },
        show:function() {
            this.J && t.B.show(this.J);
        },
        vh:function() {
            return !this.J || "none" == this.J.style.display || "hidden" == this.J.style.visibility ? o :i;
        }
    });
    B.Pd(function(a) {
        function b(a, b) {
            var c = L("div"), g = c.style;
            g.position = "absolute";
            g.top = g.left = g.width = g.height = "0";
            g.zIndex = b;
            a.appendChild(c);
            return c;
        }
        var c = a.G;
        c.le = a.le = b(a.platform, 200);
        a.hd.Xw = b(c.le, 800);
        a.hd.ay = b(c.le, 700);
        a.hd.pD = b(c.le, 600);
        a.hd.Wx = b(c.le, 500);
        a.hd.LE = b(c.le, 400);
        a.hd.ME = b(c.le, 300);
        a.hd.vR = b(c.le, 201);
        a.hd.js = b(c.le, 200);
    });
    function ab() {
        t.lang.ma.call(this);
        Vb.call(this);
        this.map = n;
        this.Qa = i;
        this.$a = n;
        this.pA = 0;
    }
    t.lang.ga(ab, Vb, "OverlayInternal");
    t.extend(ab.prototype, {
        initialize:function(a) {
            this.map = a;
            t.lang.ma.call(this, this.Q);
            return n;
        },
        tx:s("map"),
        draw:p(),
        remove:function() {
            this.map = n;
            t.lang.yr(this.Q);
            Vb.prototype.remove.call(this);
        },
        H:function() {
            this.Qa != o && (this.Qa = o);
        },
        show:function() {
            this.Qa != i && (this.Qa = i);
        },
        vh:function() {
            return !this.J ? o :!!this.Qa;
        },
        Ca:s("J"),
        GF:function(a) {
            var a = a || {}, b;
            for (b in a) this.z[b] = a[b];
        },
        Ts:ca("zIndex"),
        $h:function() {
            this.z.$h = i;
        },
        FM:function() {
            this.z.$h = o;
        },
        ml:ca("Re"),
        bm:function() {
            this.Re = n;
        }
    });
    function Wb() {
        this.map = n;
        this.ja = {};
        this.Ad = [];
    }
    B.Pd(function(a) {
        var b = new Wb();
        b.map = a;
        a.ja = b.ja;
        a.Ad = b.Ad;
        a.addEventListener("load", function(a) {
            b.draw(a);
        });
        a.addEventListener("moveend", function(a) {
            b.draw(a);
        });
        t.R.V && 8 > t.R.V || "BackCompat" == document.compatMode ? a.addEventListener("zoomend", function(a) {
            setTimeout(function() {
                b.draw(a);
            }, 20);
        }) :a.addEventListener("zoomend", function(a) {
            b.draw(a);
        });
        a.addEventListener("maptypechange", function(a) {
            b.draw(a);
        });
        a.addEventListener("addoverlay", function(a) {
            a = a.target;
            if (a instanceof ab) b.ja[a.Q] || (b.ja[a.Q] = a); else {
                for (var d = o, e = 0, f = b.Ad.length; e < f; e++) if (b.Ad[e] === a) {
                    d = i;
                    break;
                }
                d || b.Ad.push(a);
            }
        });
        a.addEventListener("removeoverlay", function(a) {
            a = a.target;
            if (a instanceof ab) delete b.ja[a.Q]; else for (var d = 0, e = b.Ad.length; d < e; d++) if (b.Ad[d] === a) {
                b.Ad.splice(d, 1);
                break;
            }
        });
        a.addEventListener("clearoverlays", function() {
            this.hc();
            for (var a in b.ja) b.ja[a].z.$h && (b.ja[a].remove(), delete b.ja[a]);
            a = 0;
            for (var d = b.Ad.length; a < d; a++) b.Ad[a].$h != o && (b.Ad[a].remove(), b.Ad[a] = n,
            b.Ad.splice(a, 1), a--, d--);
        });
        a.addEventListener("infowindowopen", function() {
            var a = this.$a;
            a && (t.B.H(a.Lb), t.B.H(a.qb));
        });
        a.addEventListener("movestart", function() {
            this.Ef() && this.Ef().IB();
        });
        a.addEventListener("moveend", function() {
            this.Ef() && this.Ef().AB();
        });
    });
    Wb.prototype.draw = function() {
        if (B.zm) {
            var a = B.zm.xo(this.map);
            "canvas" == a.Fb && a.canvas && a.OH(a.canvas.getContext("2d"));
        }
        for (var b in this.ja) this.ja[b].draw();
        t.fc.wc(this.Ad, function(a) {
            a.draw();
        });
        this.map.G.Ra && this.map.G.Ra.fa();
        B.zm && a.Oy();
    };
    function Xb(a) {
        ab.call(this);
        a = a || {};
        this.z = {
            strokeColor:a.strokeColor || "#3a6bdb",
            Qf:a.strokeWeight || 5,
            ff:a.strokeOpacity || .65,
            strokeStyle:a.strokeStyle || "solid",
            $h:a.enableMassClear === o ? o :i,
            ei:n,
            Sj:n,
            Ae:a.enableEditing === i ? i :o,
            UE:15,
            nR:o,
            $d:a.enableClicking === o ? o :i
        };
        0 >= this.z.Qf && (this.z.Qf = 5);
        if (0 > this.z.ff || 1 < this.z.ff) this.z.ff = .65;
        if (0 > this.z.Lj || 1 < this.z.Lj) this.z.Lj = .65;
        "solid" != this.z.strokeStyle && "dashed" != this.z.strokeStyle && (this.z.strokeStyle = "solid");
        this.J = n;
        this.Pt = new $a(0, 0);
        this.Wd = [];
        this.Db = [];
        this.wa = {};
    }
    t.lang.ga(Xb, ab, "Graph");
    Xb.Nr = function(a) {
        var b = [];
        if (!a) return b;
        Ua(a) && t.fc.wc(a.split(";"), function(a) {
            a = a.split(",");
            b.push(new H(a[0], a[1]));
        });
        "[object Array]" == Object.prototype.toString.apply(a) && 0 < a.length && (b = a);
        return b;
    };
    Xb.my = [ .09, .005, 1e-4, 1e-5 ];
    t.extend(Xb.prototype, {
        initialize:function(a) {
            this.map = a;
            return n;
        },
        draw:p(),
        Pn:function(a) {
            this.Wd.length = 0;
            this.ba = Xb.Nr(a).slice(0);
            this.Tf();
        },
        ud:function(a) {
            this.Pn(a);
        },
        Tf:function() {
            if (this.ba) {
                var a = this;
                a.Pt = new $a();
                t.fc.wc(this.ba, function(b) {
                    a.Pt.extend(b);
                });
            }
        },
        md:s("ba"),
        uk:function(a, b) {
            b && this.ba[a] && (this.Wd.length = 0, this.ba[a] = new H(b.lng, b.lat), this.Tf());
        },
        setStrokeColor:function(a) {
            this.z.strokeColor = a;
        },
        XN:function() {
            return this.z.strokeColor;
        },
        jp:function(a) {
            0 < a && (this.z.Qf = a);
        },
        ND:function() {
            return this.z.Qf;
        },
        hp:function(a) {
            a == ba || 1 < a || 0 > a || (this.z.ff = a);
        },
        YN:function() {
            return this.z.ff;
        },
        Ns:function(a) {
            1 < a || 0 > a || (this.z.Lj = a);
        },
        xN:function() {
            return this.z.Lj;
        },
        ip:function(a) {
            "solid" != a && "dashed" != a || (this.z.strokeStyle = a);
        },
        MD:function() {
            return this.z.strokeStyle;
        },
        setFillColor:function(a) {
            this.z.fillColor = a || "";
        },
        wN:function() {
            return this.z.fillColor;
        },
        Be:s("Pt"),
        remove:function() {
            this.map && this.map.removeEventListener("onmousemove", this.hq);
            ab.prototype.remove.call(this);
            this.Wd.length = 0;
        },
        Ae:function() {
            if (!(2 > this.ba.length)) {
                this.z.Ae = i;
                var a = this;
                J.load("poly", function() {
                    a.rj();
                }, i);
            }
        },
        EM:function() {
            this.z.Ae = o;
            var a = this;
            J.load("poly", function() {
                a.Vh();
            }, i);
        }
    });
    function Yb(a) {
        ab.call(this);
        this.J = this.map = n;
        this.z = {
            width:0,
            height:0,
            la:new M(0, 0),
            opacity:1,
            background:"transparent",
            es:1,
            AE:"#000",
            XO:"solid",
            point:n
        };
        this.GF(a);
        this.point = this.z.point;
    }
    t.lang.ga(Yb, ab, "Division");
    t.extend(Yb.prototype, {
        Ki:function() {
            var a = this.z, b = this.content, c = [ '<div class="BMap_Division" style="position:absolute;' ];
            c.push("width:" + a.width + "px;display:block;");
            c.push("overflow:hidden;");
            "none" != a.borderColor && c.push("border:" + a.es + "px " + a.XO + " " + a.AE + ";");
            c.push("opacity:" + a.opacity + "; filter:(opacity=" + 100 * a.opacity + ")");
            c.push("background:" + a.background + ";");
            c.push('z-index:60;">');
            c.push(b);
            c.push("</div>");
            this.J = ub(this.map.Xe().ay, c.join(""));
        },
        initialize:function(a) {
            this.map = a;
            this.Ki();
            this.J && t.D(this.J, D() ? "touchstart" :"mousedown", function(a) {
                x(a);
            });
            return this.J;
        },
        draw:function() {
            var a = this.map.Od(this.z.point);
            this.z.la = new M(-Math.round(this.z.width / 2) - Math.round(this.z.es), -Math.round(this.z.height / 2) - Math.round(this.z.es));
            this.J.style.left = a.x + this.z.la.width + "px";
            this.J.style.top = a.y + this.z.la.height + "px";
        },
        W:function() {
            return this.z.point;
        },
        VR:function() {
            return this.map.Bb(this.W());
        },
        fa:function(a) {
            this.z.point = a;
            this.draw();
        },
        hQ:function(a, b) {
            this.z.width = Math.round(a);
            this.z.height = Math.round(b);
            this.J && (this.J.style.width = this.z.width + "px", this.J.style.height = this.z.height + "px",
            this.draw());
        }
    });
    function Zb(a, b, c) {
        a && b && (this.imageUrl = a, this.size = b, a = new M(Math.floor(b.width / 2), Math.floor(b.height / 2)),
        c = c || {}, a = c.anchor || a, b = c.imageOffset || new M(0, 0), this.imageSize = c.imageSize,
        this.anchor = a, this.imageOffset = b, this.infoWindowAnchor = c.infoWindowAnchor || this.anchor,
        this.printImageUrl = c.printImageUrl || "");
    }
    t.extend(Zb.prototype, {
        qQ:function(a) {
            a && (this.imageUrl = a);
        },
        AQ:function(a) {
            a && (this.printImageUrl = a);
        },
        Oc:function(a) {
            a && (this.size = new M(a.width, a.height));
        },
        Zb:function(a) {
            a && (this.anchor = new M(a.width, a.height));
        },
        ep:function(a) {
            a && (this.imageOffset = new M(a.width, a.height));
        },
        sQ:function(a) {
            a && (this.infoWindowAnchor = new M(a.width, a.height));
        },
        oQ:function(a) {
            a && (this.imageSize = new M(a.width, a.height));
        },
        toString:da("Icon")
    });
    function $b(a, b) {
        t.lang.ma.call(this);
        this.content = a;
        this.map = n;
        b = b || {};
        this.z = {
            width:b.width || 0,
            height:b.height || 0,
            maxWidth:b.maxWidth || 600,
            la:b.offset || new M(0, 0),
            title:b.title || "",
            by:b.maxContent || "",
            yf:b.enableMaximize || o,
            qo:b.enableAutoPan === o ? o :i,
            Iw:b.enableCloseOnClick === o ? o :i,
            margin:b.margin || [ 10, 10, 40, 10 ],
            Yv:b.collisions || [ [ 10, 10 ], [ 10, 10 ], [ 10, 10 ], [ 10, 10 ] ],
            wO:o,
            oP:b.onClosing || da(i),
            Lw:b.enableMessage === o ? o :i,
            Nw:b.enableParano === i ? i :o,
            message:b.message,
            Pw:b.enableSearchTool === i ? i :o,
            Wr:b.headerContent || ""
        };
        if (0 != this.z.width && (220 > this.z.width && (this.z.width = 220), 730 < this.z.width)) this.z.width = 730;
        if (0 != this.z.height && (60 > this.z.height && (this.z.height = 60), 650 < this.z.height)) this.z.height = 650;
        if (0 != this.z.maxWidth && (220 > this.z.maxWidth && (this.z.maxWidth = 220), 730 < this.z.maxWidth)) this.z.maxWidth = 730;
        this.Yc = o;
        this.Kg = C.da;
        this.Na = n;
        var c = this;
        J.load("infowindow", function() {
            c.Eb();
        });
    }
    t.lang.ga($b, t.lang.ma, "InfoWindow");
    t.extend($b.prototype, {
        setWidth:function(a) {
            !a && 0 != a || isNaN(a) || 0 > a || (0 != a && (220 > a && (a = 220), 730 < a && (a = 730)),
            this.z.width = a);
        },
        setHeight:function(a) {
            !a && 0 != a || isNaN(a) || 0 > a || (0 != a && (60 > a && (a = 60), 650 < a && (a = 650)),
            this.z.height = a);
        },
        KF:function(a) {
            !a && 0 != a || isNaN(a) || 0 > a || (0 != a && (220 > a && (a = 220), 730 < a && (a = 730)),
            this.z.maxWidth = a);
        },
        Ob:function(a) {
            this.z.title = a;
        },
        getTitle:function() {
            return this.z.title;
        },
        nc:ca("content"),
        ci:s("content"),
        fp:function(a) {
            this.z.by = a + "";
        },
        cd:p(),
        qo:function() {
            this.z.qo = i;
        },
        disableAutoPan:function() {
            this.z.qo = o;
        },
        enableCloseOnClick:function() {
            this.z.Iw = i;
        },
        disableCloseOnClick:function() {
            this.z.Iw = o;
        },
        yf:function() {
            this.z.yf = i;
        },
        Ar:function() {
            this.z.yf = o;
        },
        show:function() {
            this.Qa = i;
        },
        H:function() {
            this.Qa = o;
        },
        close:function() {
            this.H();
        },
        ls:function() {
            this.Yc = i;
        },
        restore:function() {
            this.Yc = o;
        },
        vh:function() {
            return this.Da();
        },
        Da:da(o),
        W:function() {
            if (this.Na && this.Na.W) return this.Na.W();
        },
        Ff:function() {
            return this.z.la;
        }
    });
    Ia.prototype.Xb = function(a, b) {
        if (a instanceof $b && b instanceof H) {
            var c = this.G;
            c.gk ? c.gk.fa(b) :(c.gk = new S(b, {
                icon:new Zb(C.da + "blank.gif", {
                    width:1,
                    height:1
                }),
                offset:new M(0, 0),
                clickable:o
            }), c.gk.KI = 1);
            this.ya(c.gk);
            c.gk.Xb(a);
        }
    };
    Ia.prototype.hc = function() {
        var a = this.G.Ra || this.G.Si;
        a && a.Na && a.Na.hc();
    };
    ab.prototype.Xb = function(a) {
        this.map && (this.map.hc(), a.Qa = i, this.map.G.Si = a, a.Na = this, t.lang.ma.call(a, a.Q));
    };
    ab.prototype.hc = function() {
        this.map && this.map.G.Si && (this.map.G.Si.Qa = o, t.lang.yr(this.map.G.Si.Q),
        this.map.G.Si = n);
    };
    function ac(a, b) {
        ab.call(this);
        this.content = a;
        this.J = this.map = n;
        b = b || {};
        this.z = {
            width:0,
            la:b.offset || new M(0, 0),
            nm:{
                backgroundColor:"#fff",
                border:"1px solid #f00",
                padding:"1px",
                whiteSpace:"nowrap",
                font:"12px " + C.fontFamily,
                zIndex:"80",
                MozUserSelect:"none"
            },
            position:b.position || n,
            $h:b.enableMassClear === o ? o :i,
            $d:i
        };
        0 > this.z.width && (this.z.width = 0);
        Ab(b.enableClicking) && (this.z.$d = b.enableClicking);
        this.point = this.z.position;
        var c = this;
        J.load("marker", function() {
            c.Eb();
        });
    }
    t.lang.ga(ac, ab, "Label");
    t.extend(ac.prototype, {
        W:function() {
            return this.tq ? this.tq.W() :this.point;
        },
        fa:function(a) {
            a instanceof H && !this.Qr() && (this.point = this.z.position = new H(a.lng, a.lat));
        },
        nc:ca("content"),
        Ny:function(a) {
            0 <= a && 1 >= a && (this.z.opacity = a);
        },
        td:function(a) {
            a instanceof M && (this.z.la = new M(a.width, a.height));
        },
        Ff:function() {
            return this.z.la;
        },
        Pc:function(a) {
            a = a || {};
            this.z.nm = t.extend(this.z.nm, a);
        },
        yi:function(a) {
            return this.Pc(a);
        },
        Ob:function(a) {
            this.z.title = a || "";
        },
        getTitle:function() {
            return this.z.title;
        },
        JF:function(a) {
            this.point = (this.tq = a) ? this.z.position = a.W() :this.z.position = n;
        },
        Qr:function() {
            return this.tq || n;
        },
        ci:s("content")
    });
    function bc(a, b) {
        if (0 !== arguments.length) {
            ab.apply(this, arguments);
            b = b || {};
            this.z = {
                Va:a,
                opacity:b.opacity || 1,
                bk:b.bk || "",
                xl:b.xl || 1,
                wl:b.wl || 18
            };
            var c = this;
            J.load("groundoverlay", function() {
                c.Eb();
            });
        }
    }
    t.lang.ga(bc, ab, "GroundOverlay");
    t.extend(bc.prototype, {
        setBounds:function(a) {
            this.z.Va = a;
        },
        getBounds:function() {
            return this.z.Va;
        },
        setOpacity:function(a) {
            this.z.opacity = a;
        },
        getOpacity:function() {
            return this.z.opacity;
        },
        setImageURL:function(a) {
            this.z.bk = a;
        },
        getImageURL:function() {
            return this.z.bk;
        },
        setDispalyOnMinLevel:function(a) {
            this.z.xl = a;
        },
        getDispalyOnMinLevel:function() {
            return this.z.xl;
        },
        setDispalyOnMaxLevel:function(a) {
            this.z.wl = a;
        },
        getDispalyOnMaxLevel:function() {
            return this.z.wl;
        }
    });
    var cc = new Zb(C.da + "marker_red_sprite.png", new M(19, 25), {
        anchor:new M(10, 25),
        infoWindowAnchor:new M(10, 0)
    }), ec = new Zb(C.da + "marker_red_sprite.png", new M(20, 11), {
        anchor:new M(6, 11),
        imageOffset:new M(-19, -13)
    });
    function S(a, b) {
        ab.call(this);
        b = b || {};
        this.point = a;
        this.Mm = this.map = n;
        this.z = {
            la:b.offset || new M(0, 0),
            Gf:b.icon || cc,
            zi:ec,
            title:b.title || "",
            label:n,
            qC:b.baseZIndex || 0,
            $d:i,
            AU:o,
            Ux:o,
            $h:b.enableMassClear === o ? o :i,
            Sb:o,
            wF:b.raiseOnDrag === i ? i :o,
            AF:o,
            Hc:b.draggingCursor || C.Hc,
            rotation:b.rotation || 0
        };
        b.icon && !b.shadow && (this.z.zi = n);
        b.enableDragging && (this.z.Sb = b.enableDragging);
        Ab(b.enableClicking) && (this.z.$d = b.enableClicking);
        var c = this;
        J.load("marker", function() {
            c.Eb();
        });
    }
    S.Pp = Vb.Wj(-90) + 1e6;
    S.Bz = S.Pp + 1e6;
    t.lang.ga(S, ab, "Marker");
    t.extend(S.prototype, {
        Hb:function(a) {
            a instanceof Zb && (this.z.Gf = a);
        },
        Ao:function() {
            return this.z.Gf;
        },
        Ss:function(a) {
            a instanceof Zb && (this.z.zi = a);
        },
        getShadow:function() {
            return this.z.zi;
        },
        sk:function(a) {
            this.z.label = a || n;
        },
        ED:function() {
            return this.z.label;
        },
        Sb:function() {
            this.z.Sb = i;
        },
        sw:function() {
            this.z.Sb = o;
        },
        W:s("point"),
        fa:function(a) {
            a instanceof H && (this.point = new H(a.lng, a.lat));
        },
        Fg:function(a, b) {
            this.z.Ux = !!a;
            a && (this.Wz = b || 0);
        },
        Ob:function(a) {
            this.z.title = a + "";
        },
        getTitle:function() {
            return this.z.title;
        },
        td:function(a) {
            a instanceof M && (this.z.la = a);
        },
        Ff:function() {
            return this.z.la;
        },
        rk:ca("Mm"),
        Rs:function(a) {
            this.z.rotation = a;
        },
        KD:function() {
            return this.z.rotation;
        }
    });
    function fc(a, b) {
        Xb.call(this, b);
        b = b || {};
        this.z.Lj = b.fillOpacity ? b.fillOpacity :.65;
        this.z.fillColor = "" == b.fillColor ? "" :b.fillColor ? b.fillColor :"#fff";
        this.ud(a);
        var c = this;
        J.load("poly", function() {
            c.Eb();
        });
    }
    t.lang.ga(fc, Xb, "Polygon");
    t.extend(fc.prototype, {
        ud:function(a, b) {
            this.jl = Xb.Nr(a).slice(0);
            var c = Xb.Nr(a).slice(0);
            1 < c.length && c.push(new H(c[0].lng, c[0].lat));
            Xb.prototype.ud.call(this, c, b);
        },
        uk:function(a, b) {
            this.jl[a] && (this.jl[a] = new H(b.lng, b.lat), this.ba[a] = new H(b.lng, b.lat),
            0 == a && !this.ba[0].kb(this.ba[this.ba.length - 1]) && (this.ba[this.ba.length - 1] = new H(b.lng, b.lat)),
            this.Tf());
        },
        md:function() {
            var a = this.jl;
            0 == a.length && (a = this.ba);
            return a;
        }
    });
    function gc(a, b) {
        Xb.call(this, b);
        this.Pn(a);
        var c = this;
        J.load("poly", function() {
            c.Eb();
        });
    }
    t.lang.ga(gc, Xb, "Polyline");
    function hc(a, b, c) {
        this.point = a;
        this.Ga = Math.abs(b);
        fc.call(this, [], c);
    }
    hc.my = [ .01, 1e-4, 1e-5, 4e-6 ];
    t.lang.ga(hc, fc, "Circle");
    t.extend(hc.prototype, {
        initialize:function(a) {
            this.map = a;
            this.ba = this.fq(this.point, this.Ga);
            this.Tf();
            return n;
        },
        za:s("point"),
        Fe:function(a) {
            a && (this.point = a);
        },
        QN:s("Ga"),
        Qs:function(a) {
            this.Ga = Math.abs(a);
        },
        fq:function(a, b) {
            if (!a || !b || !this.map) return [];
            for (var c = [], d = b / 6378800, e = Math.PI / 180 * a.lat, f = Math.PI / 180 * a.lng, g = 0; 360 > g; g += 9) {
                var j = Math.PI / 180 * g, k = Math.asin(Math.sin(e) * Math.cos(d) + Math.cos(e) * Math.sin(d) * Math.cos(j)), j = new H(((f - Math.atan2(Math.sin(j) * Math.sin(d) * Math.cos(e), Math.cos(d) - Math.sin(e) * Math.sin(k)) + Math.PI) % (2 * Math.PI) - Math.PI) * (180 / Math.PI), k * (180 / Math.PI));
                c.push(j);
            }
            d = c[0];
            c.push(new H(d.lng, d.lat));
            return c;
        }
    });
    var ic = {};
    function jc(a) {
        this.map = a;
        this.fk = [];
        this.He = [];
        this.hf = [];
        this.PL = 300;
        this.uy = 0;
        this.$e = {};
        this.gh = {};
        this.Kf = 0;
        this.Px = i;
        this.RC = {};
        this.rq = this.Um(1);
        this.Zd = this.Um(2);
        this.Cn = this.Um(3);
        a.platform.appendChild(this.rq);
        a.platform.appendChild(this.Zd);
        a.platform.appendChild(this.Cn);
    }
    B.Pd(function(a) {
        var b = new jc(a);
        b.ha();
        a.Cb = b;
    });
    t.extend(jc.prototype, {
        ha:function() {
            var a = this, b = a.map;
            b.addEventListener("loadcode", function() {
                a.fs();
            });
            b.addEventListener("addtilelayer", function(b) {
                a.sf(b);
            });
            b.addEventListener("removetilelayer", function(b) {
                a.Of(b);
            });
            b.addEventListener("setmaptype", function(b) {
                a.df(b);
            });
            b.addEventListener("zoomstartcode", function(b) {
                a.uc(b);
            });
            b.addEventListener("setcustomstyles", function(b) {
                a.km(b.target);
                a.bf(i);
            });
        },
        fs:function() {
            var a = this;
            if (t.R.V) try {
                document.execCommand("BackgroundImageCache", o, i);
            } catch (b) {}
            this.loaded || a.$r();
            a.bf();
            this.loaded || (this.loaded = i, J.load("tile", function() {
                a.sH();
            }));
        },
        $r:function() {
            for (var a = this.map.ka().xn, b = 0; b < a.length; b++) {
                var c = new kc();
                t.extend(c, a[b]);
                this.fk.push(c);
                c.ha(this.map, this.rq);
            }
            this.km();
        },
        Um:function(a) {
            var b = L("div");
            b.style.position = "absolute";
            b.style.overflow = "visible";
            b.style.left = b.style.top = "0";
            b.style.zIndex = a;
            return b;
        },
        mf:function() {
            this.Kf--;
            var a = this;
            this.Px && (this.map.dispatchEvent(new N("onfirsttileloaded")), this.Px = o);
            0 == this.Kf && (this.Pg && (clearTimeout(this.Pg), this.Pg = n), this.Pg = setTimeout(function() {
                if (a.Kf == 0) {
                    a.map.dispatchEvent(new N("ontilesloaded"));
                    a.Px = i;
                }
                a.Pg = n;
            }, 80));
        },
        Cx:function(a, b) {
            return "TILE-" + b.Q + "-" + a[0] + "-" + a[1] + "-" + a[2];
        },
        Yr:function(a) {
            var b = a.fb;
            b && tb(b) && b.parentNode.removeChild(b);
            delete this.$e[a.name];
            a.loaded || (lc(a), a.fb = n, a.ik = n);
        },
        Ll:function(a, b, c) {
            var d = this.map, e = d.ka(), f = d.ra, g = d.Wb, j = e.Tb(f), k = this.yD(), l = k[0], m = k[1], q = k[2], v = k[3], w = k[4], c = "undefined" != typeof c ? c :0, e = e.k.Nb, k = d.Q.replace(/^TANGRAM_/, "");
            for (this.Hg ? this.Hg.length = 0 :this.Hg = []; l < q; l++) for (var z = m; z < v; z++) {
                var A = l, G = z;
                this.Hg.push([ A, G ]);
                A = k + "_" + b + "_" + A + "_" + G + "_" + f;
                this.RC[A] = A;
            }
            this.Hg.sort(function(a) {
                return function(b, c) {
                    return .4 * Math.abs(b[0] - a[0]) + .6 * Math.abs(b[1] - a[1]) - (.4 * Math.abs(c[0] - a[0]) + .6 * Math.abs(c[1] - a[1]));
                };
            }([ w[0] - 1, w[1] - 1 ]));
            g = [ Math.round(-g.lng / j), Math.round(g.lat / j) ];
            l = -d.offsetY + d.height / 2;
            a.style.left = -d.offsetX + d.width / 2 + "px";
            a.style.top = l + "px";
            this.vj ? this.vj.length = 0 :this.vj = [];
            l = 0;
            for (d = a.childNodes.length; l < d; l++) z = a.childNodes[l], z.YA = o, this.vj.push(z);
            if (l = this.hy) for (var y in l) delete l[y]; else this.hy = {};
            this.wj ? this.wj.length = 0 :this.wj = [];
            l = 0;
            for (d = this.Hg.length; l < d; l++) {
                y = this.Hg[l][0];
                j = this.Hg[l][1];
                z = 0;
                for (m = this.vj.length; z < m; z++) if (q = this.vj[z], q.id == k + "_" + b + "_" + y + "_" + j + "_" + f) {
                    q.YA = i;
                    this.hy[q.id] = q;
                    break;
                }
            }
            l = 0;
            for (d = this.vj.length; l < d; l++) q = this.vj[l], q.YA || this.wj.push(q);
            this.az = [];
            z = (e + c) * this.map.F.devicePixelRatio;
            l = 0;
            for (d = this.Hg.length; l < d; l++) y = this.Hg[l][0], j = this.Hg[l][1], v = y * e + g[0] - c / 2,
            w = (-1 - j) * e + g[1] - c / 2, A = k + "_" + b + "_" + y + "_" + j + "_" + f,
            m = this.hy[A], q = n, m ? (q = m.style, q.left = v + "px", q.top = w + "px", m.nf || this.az.push([ y, j, m ])) :(0 < this.wj.length ? (m = this.wj.shift(),
            m.getContext("2d").clearRect(-c / 2, -c / 2, z, z), q = m.style) :(m = document.createElement("canvas"),
            q = m.style, q.position = "absolute", q.width = e + c + "px", q.height = e + c + "px",
            this.rE() && (q.WebkitTransform = "scale(1.001)"), m.setAttribute("width", z), m.setAttribute("height", z),
            a.appendChild(m)), m.id = A, q.left = v + "px", q.top = w + "px", -1 < A.indexOf("bg") && (v = "#F3F1EC",
            this.map.F.jr && (v = this.map.F.jr), q.background = v ? v :""), this.az.push([ y, j, m ])),
            m.style.visibility = "";
            l = 0;
            for (d = this.wj.length; l < d; l++) this.wj[l].style.visibility = "hidden";
            return this.az;
        },
        rE:function() {
            return /M040/i.test(navigator.userAgent);
        },
        yD:function() {
            var a = this.map, b = a.ka(), c = a.ra;
            b.Tb(c);
            var c = b.SD(c), d = a.Wb, e = Math.ceil(d.lng / c), f = Math.ceil(d.lat / c), b = b.k.Nb, c = [ e, f, (d.lng - e * c) / c * b, (d.lat - f * c) / c * b ];
            return [ c[0] - Math.ceil((a.width / 2 - c[2]) / b), c[1] - Math.ceil((a.height / 2 - c[3]) / b), c[0] + Math.ceil((a.width / 2 + c[2]) / b), c[1] + Math.ceil((a.height / 2 + c[3]) / b), c ];
        },
        GQ:function(a, b, c, d) {
            var e = this;
            e.sS = b;
            var f = this.map.ka(), g = e.Cx(a, c), j = f.k.Nb, b = [ a[0] * j + b[0], (-1 - a[1]) * j + b[1] ], k = this.$e[g];
            k && k.fb ? (rb(k.fb, b), d && (d = new P(a[0], a[1]), f = this.map.F.nd ? this.map.F.nd.style :"normal",
            d = c.getTilesUrl(d, a[2], f), k.loaded = o, nc(k, d)), k.loaded ? this.mf() :oc(k, function() {
                e.mf();
            })) :(k = this.gh[g]) && k.fb ? (c.rb.insertBefore(k.fb, c.rb.lastChild), this.$e[g] = k,
            rb(k.fb, b), d && (d = new P(a[0], a[1]), f = this.map.F.nd ? this.map.F.nd.style :"normal",
            d = c.getTilesUrl(d, a[2], f), k.loaded = o, nc(k, d)), k.loaded ? this.mf() :oc(k, function() {
                e.mf();
            })) :(k = j * Math.pow(2, f.Rj() - a[2]), new H(a[0] * k, a[1] * k), d = new P(a[0], a[1]),
            f = this.map.F.nd ? this.map.F.nd.style :"normal", d = c.getTilesUrl(d, a[2], f),
            k = new pc(this, d, b, a, c), oc(k, function() {
                e.mf();
            }), qc(k), this.$e[g] = k);
        },
        mf:function() {
            this.Kf--;
            var a = this;
            0 == this.Kf && (this.Pg && (clearTimeout(this.Pg), this.Pg = n), this.Pg = setTimeout(function() {
                if (a.Kf == 0) {
                    a.map.dispatchEvent(new N("ontilesloaded"));
                    if (sa) {
                        if (oa && pa && qa) {
                            var b = Wa(), c = a.map.Ab();
                            setTimeout(function() {
                                I(5030, {
                                    load_script_time:pa - oa,
                                    load_tiles_time:b - qa,
                                    map_width:c.width,
                                    map_height:c.height,
                                    map_size:c.width * c.height
                                });
                            }, 1e4);
                            ta.xc("img_fisrt_loaded");
                            ta.xc("map_width", c.width);
                            ta.xc("map_height", c.height);
                            ta.xc("map_size", c.width * c.height);
                            ta.Gs();
                        }
                        sa = o;
                    }
                }
                a.Pg = n;
            }, 80));
        },
        Cx:function(a, b) {
            return this.map.ka() === La ? "TILE-" + b.Q + "-" + this.map.nr + "-" + a[0] + "-" + a[1] + "-" + a[2] :"TILE-" + b.Q + "-" + a[0] + "-" + a[1] + "-" + a[2];
        },
        Yr:function(a) {
            var b = a.fb;
            b && (rc(b), tb(b) && b.parentNode.removeChild(b));
            delete this.$e[a.name];
            a.loaded || (rc(b), lc(a), a.fb = n, a.ik = n);
        },
        bf:function(a) {
            var b = this;
            if (b.map.ka() == La) J.load("coordtrans", function() {
                b.map.tb || (b.map.tb = La.bi(b.map.tl), b.map.nr = La.xD(b.map.tb));
                b.gB();
            }, i); else {
                if (a && a) for (var c in this.gh) delete this.gh[c];
                b.gB(a);
            }
        },
        gB:function(a) {
            for (var b = this.fk.concat(this.He), c = b.length, d = 0; d < c; d++) {
                var e = b[d];
                if (e.Kc && l.ra < e.Kc) break;
                if (e.kr) {
                    var f = this.rb = e.rb;
                    if (a) {
                        var g = f;
                        if (g && g.childNodes) for (var j = g.childNodes.length, k = j - 1; 0 <= k; k--) j = g.childNodes[k],
                        g.removeChild(j), j = n;
                    }
                    if (this.map.Jb()) {
                        this.Zd.style.display = "block";
                        f.style.display = "none";
                        this.map.dispatchEvent(new N("vectorchanged"), {
                            isvector:i
                        });
                        continue;
                    } else f.style.display = "block", this.Zd.style.display = "none", this.map.dispatchEvent(new N("vectorchanged"), {
                        isvector:o
                    });
                }
                if (!(e.Tl && !this.map.Jb() || e.qE && this.map.Jb())) {
                    var l = this.map, m = l.ka(), f = m.Jl(), j = l.ra, q = l.Wb;
                    m == La && q.kb(new H(0, 0)) && (q = l.Wb = f.ek(l.wf, l.tb));
                    var v = m.Tb(j), j = m.SD(j), f = Math.ceil(q.lng / j), g = Math.ceil(q.lat / j), w = m.k.Nb, j = [ f, g, (q.lng - f * j) / j * w, (q.lat - g * j) / j * w ], k = j[0] - Math.ceil((l.width / 2 - j[2]) / w), f = j[1] - Math.ceil((l.height / 2 - j[3]) / w), g = j[0] + Math.ceil((l.width / 2 + j[2]) / w), z = 0;
                    m === La && 15 == l.U() && (z = 1);
                    m = j[1] + Math.ceil((l.height / 2 + j[3]) / w) + z;
                    this.nC = new H(q.lng, q.lat);
                    var A = this.$e, w = -this.nC.lng / v, z = this.nC.lat / v, v = [ Math.ceil(w), Math.ceil(z) ], q = l.U(), G;
                    for (G in A) {
                        var y = A[G], K = y.info;
                        (K[2] != q || K[2] == q && (k > K[0] || g <= K[0] || f > K[1] || m <= K[1])) && this.Yr(y);
                    }
                    A = -l.offsetX + l.width / 2;
                    y = -l.offsetY + l.height / 2;
                    e.rb && (e.rb.style.left = Math.ceil(w + A) - v[0] + "px", e.rb.style.top = Math.ceil(z + y) - v[1] + "px");
                    w = [];
                    for (l.Dv = []; k < g; k++) for (z = f; z < m; z++) w.push([ k, z ]), l.Dv.push({
                        x:k,
                        y:z
                    });
                    w.sort(function(a) {
                        return function(b, c) {
                            return .4 * Math.abs(b[0] - a[0]) + .6 * Math.abs(b[1] - a[1]) - (.4 * Math.abs(c[0] - a[0]) + .6 * Math.abs(c[1] - a[1]));
                        };
                    }([ j[0] - 1, j[1] - 1 ]));
                    if (!e.FJ) {
                        j = w.length;
                        this.Kf += j;
                        B.gs.WH(j);
                        for (k = 0; k < j; k++) this.GQ([ w[k][0], w[k][1], q ], v, e, a);
                    }
                }
            }
        },
        sf:function(a) {
            var b = this, c = a.target, a = b.map.Jb();
            if (c instanceof Ya) a && !c.ck && (c.ha(this.map, this.Zd), c.ck = i); else if (c.gf && this.map.sf(c.gf),
            c.Tl) {
                for (a = 0; a < b.hf.length; a++) if (b.hf[a] == c) return;
                J.load("vector", function() {
                    c.ha(b.map, b.Zd);
                    b.hf.push(c);
                }, i);
            } else {
                for (a = 0; a < b.He.length; a++) if (b.He[a] == c) return;
                c.ha(this.map, this.Cn);
                b.He.push(c);
            }
        },
        Of:function(a) {
            var a = a.target, b = this.map.Jb();
            if (a instanceof Ya) b && a.ck && (a.remove(), a.ck = o); else {
                a.gf && this.map.Of(a.gf);
                if (a.Tl) for (var b = 0, c = this.hf.length; b < c; b++) a == this.hf[b] && this.hf.splice(b, 1); else {
                    b = 0;
                    for (c = this.He.length; b < c; b++) a == this.He[b] && this.He.splice(b, 1);
                }
                a.remove();
            }
        },
        df:function() {
            for (var a = this.fk, b = 0, c = a.length; b < c; b++) a[b].remove();
            delete this.rb;
            this.fk = [];
            this.gh = this.$e = {};
            this.$r();
            this.bf();
        },
        uc:function() {
            var a = this;
            a.Cc && t.B.H(a.Cc);
            setTimeout(function() {
                a.bf();
                a.map.dispatchEvent(new N("onzoomend"));
            }, 10);
        },
        rU:p(),
        km:function(a) {
            if (!this.map.Jb() && (a ? this.map.F.NQ = a :a = this.map.F.NQ, a)) for (var b = n, b = "2" == B.ht ? [ B.url.proto + B.url.domain.main_domain_cdn.other[0] + "/" ] :[ B.url.proto + B.url.domain.main_domain_cdn.baidu[0] + "/", B.url.proto + B.url.domain.main_domain_cdn.baidu[1] + "/", B.url.proto + B.url.domain.main_domain_cdn.baidu[2] + "/" ], c = 0, d; d = this.fk[c]; c++) if (d.CQ == i) {
                d.getTilesUrl = function(c, d) {
                    var g = c.x, j = c.y, k = "customimage/tile?&x=" + g + "&y=" + j + "&z=" + d + "&udt=20140905", k = a.styleStr ? k + ("&styles=" + encodeURIComponent(a.styleStr)) :k + ("&customid=" + a.style);
                    return b[Math.abs(g + j) % b.length] + k;
                };
                break;
            }
        }
    });
    function pc(a, b, c, d, e) {
        this.ik = a;
        this.position = c;
        this.Tp = [];
        this.name = a.Cx(d, e);
        this.info = d;
        this.YB = e.Ro();
        d = L("img");
        sb(d);
        d.rD = o;
        var f = d.style, a = a.map.ka();
        f.position = "absolute";
        f.border = "none";
        f.width = a.k.Nb + "px";
        f.height = a.k.Nb + "px";
        f.left = c[0] + "px";
        f.top = c[1] + "px";
        f.maxWidth = "none";
        this.fb = d;
        this.src = b;
        sc && (this.fb.style.opacity = 0);
        var g = this;
        this.fb.onload = function() {
            B.gs.VH();
            g.loaded = i;
            if (g.ik) {
                var a = g.ik, b = a.gh;
                if (!b[g.name]) {
                    a.uy++;
                    b[g.name] = g;
                }
                if (g.fb && !tb(g.fb) && e.rb) {
                    e.rb.appendChild(g.fb);
                    if (t.R.V <= 6 && t.R.V > 0 && g.YB) g.fb.style.cssText = g.fb.style.cssText + (';filter: progid:DXImageTransform.Microsoft.AlphaImageLoader(src="' + g.src + '",sizingMethod=scale);');
                }
                var c = a.uy - a.PL, d;
                for (d in b) {
                    if (c <= 0) break;
                    if (!a.$e[d]) {
                        b[d].ik = n;
                        var f = b[d].fb;
                        if (f && f.parentNode) {
                            f.parentNode.removeChild(f);
                            rc(f);
                        }
                        f = n;
                        b[d].fb = n;
                        delete b[d];
                        a.uy--;
                        c--;
                    }
                }
                sc && new nb({
                    Vc:20,
                    duration:200,
                    qa:function(a) {
                        if (g.fb && g.fb.style) g.fb.style.opacity = a * 1;
                    },
                    finish:function() {
                        g.fb && g.fb.style && delete g.fb.style.opacity;
                    }
                });
                lc(g);
            }
        };
        this.fb.onerror = function() {
            lc(g);
            if (g.ik) {
                var a = g.ik.map.ka();
                if (a.k.Qw) {
                    g.error = i;
                    g.fb.src = a.k.Qw;
                    g.fb && !tb(g.fb) && e.rb.appendChild(g.fb);
                }
            }
        };
        d = n;
    }
    function oc(a, b) {
        a.Tp.push(b);
    }
    function qc(a) {
        a.fb.src = 0 < t.R.V && 6 >= t.R.V && a.YB ? C.da + "blank.gif" :"" !== a.src && a.fb.src == a.src ? a.src + "&t = " + Date.now() :a.src;
    }
    function lc(a) {
        for (var b = 0; b < a.Tp.length; b++) a.Tp[b]();
        a.Tp.length = 0;
    }
    function rc(a) {
        if (a) {
            a.onload = a.onerror = n;
            var b = a.attributes, c, d, e;
            if (b) {
                d = b.length;
                for (c = 0; c < d; c += 1) e = b[c].name, Ra(a[e]) && (a[e] = n);
            }
            if (b = a.children) {
                d = b.length;
                for (c = 0; c < d; c += 1) rc(a.children[c]);
            }
        }
    }
    function nc(a, b) {
        a.src = b;
        qc(a);
    }
    var sc = !t.R.V || 8 < t.R.V;
    function kc(a) {
        this.Zl = a || {};
        this.kM = this.Zl.copyright || n;
        this.kR = this.Zl.transparentPng || o;
        this.kr = this.Zl.baseLayer || o;
        this.zIndex = this.Zl.zIndex || 0;
        this.Q = kc.uJ++;
    }
    kc.uJ = 0;
    t.lang.ga(kc, t.lang.ma, "TileLayer");
    t.extend(kc.prototype, {
        ha:function(a, b) {
            this.kr && (this.zIndex = -100);
            this.map = a;
            if (!this.rb) {
                var c = L("div"), d = c.style;
                d.position = "absolute";
                d.overflow = "visible";
                d.zIndex = this.zIndex;
                d.left = Math.ceil(-a.offsetX + a.width / 2) + "px";
                d.top = Math.ceil(-a.offsetY + a.height / 2) + "px";
                b.appendChild(c);
                this.rb = c;
            }
            c = a.ka();
            a.ji() && c == Ja && (c.k.Nb = 128, d = function(a) {
                return Math.pow(2, 18 - a) * 2;
            }, c.Tb = d, c.k.sd.Tb = d);
        },
        remove:function() {
            this.rb && this.rb.parentNode && (this.rb.innerHTML = "", this.rb.parentNode.removeChild(this.rb));
            delete this.rb;
        },
        Ro:s("kR"),
        getTilesUrl:function(a, b) {
            var c = "";
            this.Zl.tileUrlTemplate && (c = this.Zl.tileUrlTemplate.replace(/\{X\}/, a.x), c = c.replace(/\{Y\}/, a.y),
            c = c.replace(/\{Z\}/, b));
            return c;
        },
        Pj:s("kM"),
        ka:function() {
            return this.mb || Ja;
        }
    });
    function tc(a, b) {
        Bb(a) ? b = a || {} :(b = b || {}, b.databoxId = a);
        this.k = {
            SC:b.databoxId,
            Cf:b.geotableId,
            Fs:b.q || "",
            vp:b.tags || "",
            filter:b.filter || "",
            Zs:b.sortby || "",
            LQ:b.styleId || "",
            sj:b.ak || na,
            ir:b.age || 36e5,
            zIndex:11,
            VO:"VectorCloudLayer",
            ki:b.hotspotName || "vector_md_" + (1e5 * Math.random()).toFixed(0),
            uL:"LBS云麻点层"
        };
        this.Tl = i;
        kc.call(this, this.k);
        this.yM = B.vc + "geosearch/detail/";
        this.zM = B.vc + "geosearch/v2/detail/";
        this.Ol = {};
    }
    t.ga(tc, kc, "VectorCloudLayer");
    function uc(a) {
        a = a || {};
        this.k = t.extend(a, {
            zIndex:1,
            VO:"VectorTrafficLayer",
            uL:"矢量路况层"
        });
        this.Tl = i;
        kc.call(this, this.k);
        this.gR = B.url.proto + B.url.domain.vector_traffic + "/gvd/?qt=lgvd&styles=pl&layers=tf";
        this.dc = {
            "0":[ 2, 1354709503, 2, 2, 0, [], 0, 0 ],
            1:[ 2, 1354709503, 3, 2, 0, [], 0, 0 ],
            10:[ 2, -231722753, 2, 2, 0, [], 0, 0 ],
            11:[ 2, -231722753, 3, 2, 0, [], 0, 0 ],
            12:[ 2, -231722753, 4, 2, 0, [], 0, 0 ],
            13:[ 2, -231722753, 5, 2, 0, [], 0, 0 ],
            14:[ 2, -231722753, 6, 2, 0, [], 0, 0 ],
            15:[ 2, -1, 4, 0, 0, [], 0, 0 ],
            16:[ 2, -1, 5.5, 0, 0, [], 0, 0 ],
            17:[ 2, -1, 7, 0, 0, [], 0, 0 ],
            18:[ 2, -1, 8.5, 0, 0, [], 0, 0 ],
            19:[ 2, -1, 10, 0, 0, [], 0, 0 ],
            2:[ 2, 1354709503, 4, 2, 0, [], 0, 0 ],
            3:[ 2, 1354709503, 5, 2, 0, [], 0, 0 ],
            4:[ 2, 1354709503, 6, 2, 0, [], 0, 0 ],
            5:[ 2, -6350337, 2, 2, 0, [], 0, 0 ],
            6:[ 2, -6350337, 3, 2, 0, [], 0, 0 ],
            7:[ 2, -6350337, 4, 2, 0, [], 0, 0 ],
            8:[ 2, -6350337, 5, 2, 0, [], 0, 0 ],
            9:[ 2, -6350337, 6, 2, 0, [], 0, 0 ]
        };
    }
    t.ga(uc, kc, "VectorTrafficLayer");
    function Ya(a) {
        this.QL = [ B.url.proto + B.url.domain.TILE_ONLINE_URLS[1] + "/gvd/?", B.url.proto + B.url.domain.TILE_ONLINE_URLS[2] + "/gvd/?", B.url.proto + B.url.domain.TILE_ONLINE_URLS[3] + "/gvd/?", B.url.proto + B.url.domain.TILE_ONLINE_URLS[4] + "/gvd/?" ];
        this.k = {
            oD:o
        };
        for (var b in a) this.k[b] = a[b];
        this.kg = this.Qg = this.bc = this.C = this.A = n;
        this.yE = 0;
        var c = this;
        J.load("vector", function() {
            c.pe();
        });
    }
    t.extend(Ya.prototype, {
        ha:function(a, b) {
            this.A = a;
            this.C = b;
        },
        remove:function() {
            this.C = this.A = n;
        }
    });
    function vc(a) {
        kc.call(this, a);
        this.k = a || {};
        this.qE = i;
        this.gf = new uc();
        this.gf.dt = this;
        if (this.k.predictDate) {
            if (1 > this.k.predictDate.weekday || 7 < this.k.predictDate.weekday) this.k.predictDate = 1;
            if (0 > this.k.predictDate.hour || 23 < this.k.predictDate.hour) this.k.predictDate.hour = 0;
        }
        this.bL = B.url.proto + B.url.domain.traffic + ":8002/traffic/";
    }
    vc.prototype = new kc();
    vc.prototype.ha = function(a, b) {
        kc.prototype.ha.call(this, a, b);
        this.A = a;
    };
    vc.prototype.Ro = da(i);
    vc.prototype.getTilesUrl = function(a, b) {
        var c = "";
        this.k.predictDate ? c = "HistoryService?day=" + (this.k.predictDate.weekday - 1) + "&hour=" + this.k.predictDate.hour + "&t=" + new Date().getTime() + "&" :(c = "TrafficTileService?time=" + new Date().getTime() + "&",
        this.A.ji() || (c += "label=web2D&v=016&"));
        return (this.bL + c + "level=" + b + "&x=" + a.x + "&y=" + a.y).replace(/-(\d+)/gi, "M$1");
    };
    var wc = [ B.url.proto + B.url.domain.TILES_YUN_HOST[0] + "/georender/gss", B.url.proto + B.url.domain.TILES_YUN_HOST[1] + "/georender/gss", B.url.proto + B.url.domain.TILES_YUN_HOST[2] + "/georender/gss", B.url.proto + B.url.domain.TILES_YUN_HOST[3] + "/georender/gss" ];
    function ib(a, b) {
        kc.call(this);
        var c = this;
        this.qE = i;
        var d = o;
        try {
            document.createElement("canvas").getContext("2d"), d = i;
        } catch (e) {
            d = o;
        }
        d && (this.gf = new tc(a, b), this.gf.dt = this);
        Bb(a) ? b = a || {} :(c.Wm = a, b = b || {});
        b.geotableId && (c.Oe = b.geotableId);
        b.databoxId && (c.Wm = b.databoxId);
        d = B.vc + "geosearch";
        c.Tc = {
            tO:d + "/detail/",
            uO:d + "/v2/detail/",
            ir:b.age || 36e5,
            Fs:b.q || "",
            WQ:"png",
            pT:[ 5, 5, 5, 5 ],
            UO:{
                backgroundColor:"#FFFFD5",
                borderColor:"#808080"
            },
            sj:b.ak || na,
            vp:b.tags || "",
            filter:b.filter || "",
            Zs:b.sortby || "",
            ki:b.hotspotName || "tile_md_" + (1e5 * Math.random()).toFixed(0)
        };
        J.load("clayer", function() {
            c.zd();
        });
    }
    ib.prototype = new kc();
    ib.prototype.ha = function(a, b) {
        kc.prototype.ha.call(this, a, b);
        this.A = a;
    };
    ib.prototype.getTilesUrl = function(a, b) {
        var c = a.x, d = a.y, e = this.Tc, c = wc[Math.abs(c + d) % wc.length] + "/image?grids=" + c + "_" + d + "_" + b + "&q=" + e.Fs + "&tags=" + e.vp + "&filter=" + e.filter + "&sortby=" + e.Zs + "&ak=" + this.Tc.sj + "&age=" + e.ir + "&format=" + e.WQ;
        this.Oe ? c += "&geotable_id=" + this.Oe :this.Wm && (c += "&databox_id=" + this.Wm);
        return c;
    };
    ib.EK = /^point\(|\)$/gi;
    ib.FK = /\s+/;
    ib.HK = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
    function xc(a, b, c) {
        this.Ud = a;
        this.xn = b instanceof kc ? [ b ] :b.slice(0);
        c = c || {};
        this.k = {
            XQ:c.tips || "",
            Xx:"",
            Kc:c.minZoom || 3,
            od:c.maxZoom || 18,
            rO:c.minZoom || 3,
            qO:c.maxZoom || 18,
            Nb:256,
            VQ:c.textColor || "black",
            Qw:c.errorImageUrl || "",
            sd:c.projection || new Q()
        };
        1 <= this.xn.length && (this.xn[0].kr = i);
        t.extend(this.k, c);
    }
    t.extend(xc.prototype, {
        getName:s("Ud"),
        Go:function() {
            return this.k.XQ;
        },
        $S:function() {
            return this.k.Xx;
        },
        cO:function() {
            return this.xn[0];
        },
        lT:s("xn"),
        dO:function() {
            return this.k.Nb;
        },
        El:function() {
            return this.k.Kc;
        },
        Rj:function() {
            return this.k.od;
        },
        setMaxZoom:function(a) {
            this.k.od = a;
        },
        Fo:function() {
            return this.k.VQ;
        },
        Jl:function() {
            return this.k.sd;
        },
        US:function() {
            return this.k.Qw;
        },
        dO:function() {
            return this.k.Nb;
        },
        Tb:function(a) {
            return Math.pow(2, 18 - a);
        },
        SD:function(a) {
            return this.Tb(a) * this.k.Nb;
        }
    });
    var yc = [ B.url.proto + B.url.domain.TILE_BASE_URLS[0] + "/it/", B.url.proto + B.url.domain.TILE_BASE_URLS[1] + "/it/", B.url.proto + B.url.domain.TILE_BASE_URLS[2] + "/it/", B.url.proto + B.url.domain.TILE_BASE_URLS[3] + "/it/", B.url.proto + B.url.domain.TILE_BASE_URLS[4] + "/it/" ], zc = [ B.url.proto + B.url.domain.TILE_ONLINE_URLS[0] + "/tile/", B.url.proto + B.url.domain.TILE_ONLINE_URLS[1] + "/tile/", B.url.proto + B.url.domain.TILE_ONLINE_URLS[2] + "/tile/", B.url.proto + B.url.domain.TILE_ONLINE_URLS[3] + "/tile/", B.url.proto + B.url.domain.TILE_ONLINE_URLS[4] + "/tile/" ], Ac = {
        dark:"dl",
        light:"ll",
        normal:"pl"
    }, Bc = new kc();
    Bc.CQ = i;
    Bc.getTilesUrl = function(a, b, c) {
        var d = a.x, a = a.y, e = "pl";
        this.map.ji();
        e = Ac[c];
        return (zc[Math.abs(d + a) % zc.length] + "?qt=tile&x=" + (d + "").replace(/-/gi, "M") + "&y=" + (a + "").replace(/-/gi, "M") + "&z=" + b + "&styles=" + e + (6 == t.R.V ? "&color_dep=32&colors=50" :"") + "&udt=20140911").replace(/-(\d+)/gi, "M$1");
    };
    var Ja = new xc("地图", Bc, {
        tips:"显示普通地图"
    }), Cc = new kc();
    Cc.$F = [ B.url.proto + B.url.domain.TIlE_PERSPECT_URLS[0] + "/resource/mappic/", B.url.proto + B.url.domain.TIlE_PERSPECT_URLS[1] + "/resource/mappic/", B.url.proto + B.url.domain.TIlE_PERSPECT_URLS[2] + "/resource/mappic/", B.url.proto + B.url.domain.TIlE_PERSPECT_URLS[3] + "/resource/mappic/" ];
    Cc.getTilesUrl = function(a, b) {
        var c = a.x, d = a.y, e = 256 * Math.pow(2, 20 - b), d = Math.round((9998336 - e * d) / e) - 1;
        return url = this.$F[Math.abs(c + d) % this.$F.length] + this.map.tb + "/" + this.map.nr + "/3/lv" + (21 - b) + "/" + c + "," + d + ".jpg";
    };
    var La = new xc("三维", Cc, {
        tips:"显示三维地图",
        minZoom:15,
        maxZoom:20,
        textColor:"white",
        projection:new bb()
    });
    La.Tb = function(a) {
        return Math.pow(2, 20 - a);
    };
    La.bi = function(a) {
        if (!a) return "";
        var b = C.Sv, c;
        for (c in b) if (-1 < a.search(c)) return b[c].Bs;
        return "";
    };
    La.xD = function(a) {
        return {
            bj:2,
            gz:1,
            sz:14,
            sh:4
        }[a];
    };
    var Dc = new kc({
        kr:i
    });
    Dc.getTilesUrl = function(a, b) {
        var c = a.x, d = a.y;
        return (yc[Math.abs(c + d) % yc.length] + "u=x=" + c + ";y=" + d + ";z=" + b + ";v=009;type=sate&fm=46").replace(/-(\d+)/gi, "M$1");
    };
    var Ta = new xc("卫星", Dc, {
        tips:"显示卫星影像",
        minZoom:1,
        maxZoom:19,
        textColor:"white"
    }), Ec = new kc({
        transparentPng:i
    });
    Ec.getTilesUrl = function(a, b) {
        var c = a.x, d = a.y;
        return (zc[Math.abs(c + d) % zc.length] + "?qt=tile&x=" + (c + "").replace(/-/gi, "M") + "&y=" + (d + "").replace(/-/gi, "M") + "&z=" + b + "&styles=sl" + (6 == t.R.V ? "&color_dep=32&colors=50" :"") + "&udt=20131219").replace(/-(\d+)/gi, "M$1");
    };
    var Ma = new xc("混合", [ Dc, Ec ], {
        tips:"显示带有街道的卫星影像",
        labelText:"路网",
        minZoom:1,
        maxZoom:19,
        textColor:"white"
    });
    var Fc = 1, T = {};
    window.CR = T;
    function U(a, b) {
        t.lang.ma.call(this);
        this.Ec = {};
        this.tk(a);
        b = b || {};
        b.S = b.renderOptions || {};
        this.k = {
            S:{
                ua:b.S.panel || n,
                map:b.S.map || n,
                uf:b.S.autoViewport || i,
                cp:b.S.selectFirstResult,
                Ko:b.S.highlightMode,
                Sb:b.S.enableDragging || o
            },
            vs:b.onSearchComplete || p(),
            gF:b.onMarkersSet || p(),
            fF:b.onInfoHtmlSet || p(),
            iF:b.onResultsHtmlSet || p(),
            eF:b.onGetBusListComplete || p(),
            dF:b.onGetBusLineComplete || p(),
            cF:b.onBusListHtmlSet || p(),
            bF:b.onBusLineHtmlSet || p(),
            iy:b.onPolylinesSet || p(),
            cm:b.reqFrom || ""
        };
        this.k.S.uf = "undefined" != typeof b && "undefined" != typeof b.renderOptions && "undefined" != typeof b.renderOptions.autoViewport ? b.renderOptions.autoViewport :i;
        this.k.S.ua = t.Pb(this.k.S.ua);
    }
    t.ga(U, t.lang.ma);
    t.extend(U.prototype, {
        getResults:function() {
            return this.Rb ? this.Ng :this.T;
        },
        enableAutoViewport:function() {
            this.k.S.uf = i;
        },
        disableAutoViewport:function() {
            this.k.S.uf = o;
        },
        tk:function(a) {
            a && (this.Ec.src = a);
        },
        Py:function(a) {
            this.k.vs = a || p();
        },
        setMarkersSetCallback:function(a) {
            this.k.gF = a || p();
        },
        setPolylinesSetCallback:function(a) {
            this.k.iy = a || p();
        },
        setInfoHtmlSetCallback:function(a) {
            this.k.fF = a || p();
        },
        setResultsHtmlSetCallback:function(a) {
            this.k.iF = a || p();
        },
        Tj:s("Xd")
    });
    var Gc = {
        bH:B.vc,
        Xa:function(a, b, c, d, e) {
            var f = (1e5 * Math.random()).toFixed(0);
            B._rd["_cbk" + f] = function(b) {
                c = c || {};
                a && a(b, c);
                delete B._rd["_cbk" + f];
            };
            d = d || "";
            b = c && c.nG ? zb(b, encodeURI) :zb(b, encodeURIComponent);
            d = this.bH + d + "?" + b + "&ie=utf-8&oue=1&fromproduct=jsapi";
            e || (d += "&res=api");
            db(d + ("&callback=BMap._rd._cbk" + f));
        }
    };
    window.IR = Gc;
    B._rd = {};
    var O = {};
    window.HR = O;
    O.yF = function(a) {
        return a.replace(/<\/?b>/g, "");
    };
    O.wP = function(a) {
        return a.replace(/([1-9]\d*\.\d*|0\.\d*[1-9]\d*|0?\.0+|0|[1-9]\d*),([1-9]\d*\.\d*|0\.\d*[1-9]\d*|0?\.0+|0|[1-9]\d*)(,)/g, "$1,$2;");
    };
    O.xP = function(a, b) {
        return a.replace(RegExp("(((-?\\d+)(\\.\\d+)?),((-?\\d+)(\\.\\d+)?);)(((-?\\d+)(\\.\\d+)?),((-?\\d+)(\\.\\d+)?);){" + b + "}", "ig"), "$1");
    };
    var Hc = 2, Jc = 3, Kc = 0, Lc = "bt", Mc = "nav", Nc = "walk", Oc = "bl", Pc = "bsl", Qc = 14, Rc = 15, Sc = 18, Tc = 20, Uc = 31;
    B.I = window.Instance = t.lang.Xc;
    function Vc(a, b, c) {
        t.lang.ma.call(this);
        if (a) {
            this.Aa = "object" == typeof a ? a :t.Pb(a);
            this.page = 1;
            this.Lc = 100;
            this.oC = "pg";
            this.Ee = 4;
            this.vC = b;
            this.update = i;
            a = {
                page:1,
                ne:100,
                Lc:100,
                Ee:4,
                oC:"pg",
                update:i
            };
            c || (c = a);
            for (var d in c) "undefined" != typeof c[d] && (this[d] = c[d]);
            this.qa();
        }
    }
    t.extend(Vc.prototype, {
        qa:function() {
            this.ha();
        },
        ha:function() {
            this.VL();
            this.Aa.innerHTML = this.oM();
        },
        VL:function() {
            isNaN(parseInt(this.page)) && (this.page = 1);
            isNaN(parseInt(this.Lc)) && (this.Lc = 1);
            1 > this.page && (this.page = 1);
            1 > this.Lc && (this.Lc = 1);
            this.page > this.Lc && (this.page = this.Lc);
            this.page = parseInt(this.page);
            this.Lc = parseInt(this.Lc);
        },
        dT:function() {
            location.search.match(RegExp("[?&]?" + this.oC + "=([^&]*)[&$]?", "gi"));
            this.page = RegExp.$1;
        },
        oM:function() {
            var a = [], b = this.page - 1, c = this.page + 1;
            a.push('<p style="margin:0;padding:0;white-space:nowrap">');
            if (!(1 > b)) {
                if (this.page >= this.Ee) {
                    var d;
                    a.push('<span style="margin-right:3px"><a style="color:#7777cc" href="javascript:void(0)" onclick="{temp1}">首页</a></span>'.replace("{temp1}", "BMap.I('" + this.Q + "').toPage(1);"));
                }
                a.push('<span style="margin-right:3px"><a style="color:#7777cc" href="javascript:void(0)" onclick="{temp2}">上一页</a></span>'.replace("{temp2}", "BMap.I('" + this.Q + "').toPage(" + b + ");"));
            }
            if (this.page < this.Ee) d = 0 == this.page % this.Ee ? this.page - this.Ee - 1 :this.page - this.page % this.Ee + 1,
            b = d + this.Ee - 1; else {
                d = Math.floor(this.Ee / 2);
                var e = this.Ee % 2 - 1, b = this.Lc > this.page + d ? this.page + d :this.Lc;
                d = this.page - d - e;
            }
            this.page > this.Lc - this.Ee && this.page >= this.Ee && (d = this.Lc - this.Ee + 1,
            b = this.Lc);
            for (e = d; e <= b; e++) 0 < e && (e == this.page ? a.push('<span style="margin-right:3px">' + e + "</span>") :1 <= e && e <= this.Lc && (d = '<span><a style="color:#7777cc;margin-right:3px" href="javascript:void(0)" onclick="{temp3}">[' + e + "]</a></span>",
            a.push(d.replace("{temp3}", "BMap.I('" + this.Q + "').toPage(" + e + ");"))));
            c > this.Lc || a.push('<span><a style="color:#7777cc" href="javascript:void(0)" onclick="{temp4}">下一页</a></span>'.replace("{temp4}", "BMap.I('" + this.Q + "').toPage(" + c + ");"));
            a.push("</p>");
            return a.join("");
        },
        toPage:function(a) {
            a = a ? a :1;
            "function" == typeof this.vC && (this.vC(a), this.page = a);
            this.update && this.qa();
        }
    });
    function Xa(a, b) {
        U.call(this, a, b);
        b = b || {};
        b.renderOptions = b.renderOptions || {};
        this.lm(b.pageCapacity);
        "undefined" != typeof b.renderOptions.selectFirstResult && !b.renderOptions.selectFirstResult ? this.tw() :this.Kw();
        this.ja = [];
        this.oe = [];
        this.Oa = -1;
        this.Fa = [];
        var c = this;
        J.load("local", function() {
            c.Vt();
        }, i);
    }
    t.ga(Xa, U, "LocalSearch");
    Xa.ym = 10;
    Xa.FR = 1;
    Xa.Dk = 100;
    Xa.zz = 2e3;
    Xa.Jz = 1e5;
    t.extend(Xa.prototype, {
        search:function(a, b) {
            this.Fa.push({
                method:"search",
                arguments:[ a, b ]
            });
        },
        qk:function(a, b, c) {
            this.Fa.push({
                method:"searchInBounds",
                arguments:[ a, b, c ]
            });
        },
        im:function(a, b, c, d) {
            this.Fa.push({
                method:"searchNearby",
                arguments:[ a, b, c, d ]
            });
        },
        Kd:function() {
            delete this.va;
            delete this.Xd;
            delete this.T;
            delete this.aa;
            this.Oa = -1;
            this.Ya();
            this.k.S.ua && (this.k.S.ua.innerHTML = "");
        },
        Xj:p(),
        Kw:function() {
            this.k.S.cp = i;
        },
        tw:function() {
            this.k.S.cp = o;
        },
        lm:function(a) {
            this.k.qi = "number" == typeof a && !isNaN(a) ? 1 > a ? Xa.ym :a > Xa.Dk ? Xa.ym :a :Xa.ym;
        },
        fe:function() {
            return this.k.qi;
        },
        toString:da("LocalSearch")
    });
    var Wc = Xa.prototype;
    V(Wc, {
        clearResults:Wc.Kd,
        setPageCapacity:Wc.lm,
        getPageCapacity:Wc.fe,
        gotoPage:Wc.Xj,
        searchNearby:Wc.im,
        searchInBounds:Wc.qk,
        search:Wc.search,
        enableFirstResultSelection:Wc.Kw,
        disableFirstResultSelection:Wc.tw
    });
    function Xc(a, b) {
        U.call(this, a, b);
    }
    t.ga(Xc, U, "BaseRoute");
    t.extend(Xc.prototype, {
        Kd:p()
    });
    function Yc(a, b) {
        U.call(this, a, b);
        b = b || {};
        this.gp(b.policy);
        this.lm(b.pageCapacity);
        this.yd = Lc;
        this.Lp = Qc;
        this.Dt = Fc;
        this.ja = [];
        this.Oa = -1;
        this.Fa = [];
        var c = this;
        J.load("route", function() {
            c.zd();
        });
    }
    Yc.Dk = 100;
    Yc.RG = [ 0, 1, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 1, 1, 1 ];
    t.ga(Yc, Xc, "TransitRoute");
    t.extend(Yc.prototype, {
        gp:function(a) {
            this.k.rd = 0 <= a && 4 >= a ? a :0;
        },
        Gu:function(a, b) {
            this.Fa.push({
                method:"_internalSearch",
                arguments:[ a, b ]
            });
        },
        search:function(a, b) {
            this.Fa.push({
                method:"search",
                arguments:[ a, b ]
            });
        },
        lm:function(a) {
            if ("string" == typeof a && (a = parseInt(a), isNaN(a))) {
                this.k.qi = Yc.Dk;
                return;
            }
            this.k.qi = "number" != typeof a ? Yc.Dk :1 <= a && a <= Yc.Dk ? Math.round(a) :Yc.Dk;
        },
        toString:da("TransitRoute"),
        QK:function(a) {
            return a.replace(/\(.*\)/, "");
        }
    });
    var Zc = Yc.prototype;
    V(Zc, {
        _internalSearch:Zc.Gu
    });
    function $c(a, b) {
        U.call(this, a, b);
        this.ja = [];
        this.Oa = -1;
        this.Fa = [];
        var c = this, d = this.k.S;
        1 != d.Ko && 2 != d.Ko && (d.Ko = 1);
        this.lu = this.k.S.Sb ? i :o;
        J.load("route", function() {
            c.zd();
        });
        this.Mx && this.Mx();
    }
    $c.eH = " 环岛 无属性道路 主路 高速连接路 交叉点内路段 连接道路 停车场内部道路 服务区内部道路 桥 步行街 辅路 匝道 全封闭道路 未定义交通区域 POI连接路 隧道 步行道 公交专用道 提前右转道".split(" ");
    t.ga($c, Xc, "DWRoute");
    t.extend($c.prototype, {
        search:function(a, b, c) {
            this.Fa.push({
                method:"search",
                arguments:[ a, b, c ]
            });
        }
    });
    function ad(a, b) {
        $c.call(this, a, b);
        b = b || {};
        this.gp(b.policy);
        this.yd = Mc;
        this.Lp = Tc;
        this.Dt = Jc;
    }
    t.ga(ad, $c, "DrivingRoute");
    ad.prototype.gp = function(a) {
        this.k.rd = 0 <= a && 2 >= a ? a :0;
    };
    function bd(a, b) {
        $c.call(this, a, b);
        this.yd = Nc;
        this.Lp = Uc;
        this.Dt = Hc;
        this.lu = o;
    }
    t.ga(bd, $c, "WalkingRoute");
    function cd(a, b) {
        t.lang.ma.call(this);
        this.De = [];
        this.lk = [];
        this.k = b;
        this.lb = a;
        this.map = this.k.S.map || n;
        this.Ks = this.k.Ks;
        this.$a = n;
        this.ih = 0;
        this.$s = "";
        this.zf = 1;
        this.Gr = "";
        this.dm = [ 0, 0, 0, 0, 0, 0, 0 ];
        this.Yx = [];
        this.eo = [ 1, 1, 1, 1, 1, 1, 1 ];
        this.gG = [ 1, 1, 1, 1, 1, 1, 1 ];
        this.ap = [ 0, 0, 0, 0, 0, 0, 0 ];
        this.em = [ 0, 0, 0, 0, 0, 0, 0 ];
        this.Yb = [ {
            o:"",
            ye:0,
            zk:0,
            x:0,
            y:0,
            Ib:-1
        }, {
            o:"",
            ye:0,
            zk:0,
            x:0,
            y:0,
            Ib:-1
        }, {
            o:"",
            ye:0,
            zk:0,
            x:0,
            y:0,
            Ib:-1
        }, {
            o:"",
            ye:0,
            zk:0,
            x:0,
            y:0,
            Ib:-1
        }, {
            o:"",
            ye:0,
            zk:0,
            x:0,
            y:0,
            Ib:-1
        }, {
            o:"",
            ye:0,
            zk:0,
            x:0,
            y:0,
            Ib:-1
        }, {
            o:"",
            ye:0,
            zk:0,
            x:0,
            y:0,
            Ib:-1
        } ];
        this.pg = -1;
        J.load("route", p());
    }
    t.lang.ga(cd, t.lang.ma, "RouteAddr");
    function dd(a) {
        this.k = {};
        t.extend(this.k, a);
        this.Fa = [];
        var b = this;
        J.load("othersearch", function() {
            b.zd();
        });
    }
    t.ga(dd, t.lang.ma, "Geocoder");
    t.extend(dd.prototype, {
        xx:function(a, b, c) {
            this.Fa.push({
                method:"getPoint",
                arguments:[ a, b, c ]
            });
        },
        Pr:function(a, b, c) {
            this.Fa.push({
                method:"getLocation",
                arguments:[ a, b, c ]
            });
        },
        toString:da("Geocoder")
    });
    var ed = dd.prototype;
    V(ed, {
        getPoint:ed.xx,
        getLocation:ed.Pr
    });
    function Geolocation(a) {
        a = a || {};
        this.F = {
            timeout:a.timeout || 1e4,
            maximumAge:a.maximumAge || 6e5
        };
        this.al = [];
        var b = this;
        J.load("othersearch", function() {
            for (var a = 0, d; d = b.al[a]; a++) b[d.method].apply(b, d.arguments);
        });
    }
    t.extend(Geolocation.prototype, {
        getCurrentPosition:function(a, b) {
            this.al.push({
                method:"getCurrentPosition",
                arguments:arguments
            });
        },
        getStatus:da(2)
    });
    function fd(a) {
        a = a || {};
        a.S = a.renderOptions || {};
        this.k = {
            S:{
                map:a.S.map || n
            }
        };
        this.Fa = [];
        var b = this;
        J.load("othersearch", function() {
            b.zd();
        });
    }
    t.ga(fd, t.lang.ma, "LocalCity");
    t.extend(fd.prototype, {
        get:function(a) {
            this.Fa.push({
                method:"get",
                arguments:[ a ]
            });
        },
        toString:da("LocalCity")
    });
    function gd() {
        this.Fa = [];
        var a = this;
        J.load("othersearch", function() {
            a.zd();
        });
    }
    t.ga(gd, t.lang.ma, "Boundary");
    t.extend(gd.prototype, {
        get:function(a, b) {
            this.Fa.push({
                method:"get",
                arguments:[ a, b ]
            });
        },
        toString:da("Boundary")
    });
    function hd(a, b) {
        U.call(this, a, b);
        this.aH = Oc;
        this.dH = Rc;
        this.$G = Pc;
        this.cH = Sc;
        this.Fa = [];
        var c = this;
        J.load("buslinesearch", function() {
            c.zd();
        });
    }
    hd.lq = C.da + "iw_plus.gif";
    hd.yJ = C.da + "iw_minus.gif";
    hd.YK = C.da + "stop_icon.png";
    t.ga(hd, U);
    t.extend(hd.prototype, {
        getBusList:function(a) {
            this.Fa.push({
                method:"getBusList",
                arguments:[ a ]
            });
        },
        getBusLine:function(a) {
            this.Fa.push({
                method:"getBusLine",
                arguments:[ a ]
            });
        },
        setGetBusListCompleteCallback:function(a) {
            this.k.eF = a || p();
        },
        setGetBusLineCompleteCallback:function(a) {
            this.k.dF = a || p();
        },
        setBusListHtmlSetCallback:function(a) {
            this.k.cF = a || p();
        },
        setBusLineHtmlSetCallback:function(a) {
            this.k.bF = a || p();
        },
        setPolylinesSetCallback:function(a) {
            this.k.iy = a || p();
        }
    });
    function id(a) {
        U.call(this, a);
        a = a || {};
        this.Tc = {
            input:a.input || n,
            Kv:a.baseDom || n,
            types:a.types || [],
            vs:a.onSearchComplete || p()
        };
        this.Ec.src = a.location || "全国";
        this.dh = "";
        this.Te = n;
        this.WA = "";
        this.Tg();
        I(Ga);
        var b = this;
        J.load("autocomplete", function() {
            b.zd();
        });
    }
    t.ga(id, U, "Autocomplete");
    t.extend(id.prototype, {
        Tg:p(),
        show:p(),
        H:p(),
        Qy:function(a) {
            this.Tc.types = a;
        },
        tk:function(a) {
            this.Ec.src = a;
        },
        search:ca("dh"),
        Os:ca("WA")
    });
    var Na;
    function Ka(a, b) {
        this.C = "string" == typeof a ? t.M(a) :a;
        this.k = {
            linksControl:i,
            enableScrollWheelZoom:i,
            navigationControl:i,
            panoramaRenderer:"flash",
            swfSrc:B.vc + "res/swf/APILoader.swf",
            visible:i
        };
        var b = b || {}, c;
        for (c in b) this.k[c] = b[c];
        this.Ia = {
            heading:0,
            pitch:0
        };
        this.yn = [];
        this.ab = this.Ha = n;
        this.Mn = this.kn();
        this.ja = [];
        this.uc = 1;
        this.Zk = this.PJ = this.Hh = "";
        this.Gd = {};
        this.pf = [];
        this.Gn = [];
        this.Kn = o;
        var d = this;
        Oa() && !D() && "javascript" != b.panoramaRenderer ? J.load("panoramaflash", function() {
            d.Tg();
        }, i) :J.load("panorama", function() {
            d.Eb();
        }, i);
        this.mK(this.C);
        I(Ba, {
            type:b.panoramaRenderer
        });
        "api" == b.Al ? I(Ca) :I(Da);
    }
    var jd = 4, kd = 1;
    t.lang.ga(Ka, t.lang.ma, "Panorama");
    t.extend(Ka.prototype, {
        mK:function(a) {
            var b, c;
            b = a.style;
            c = Pa(a).position;
            "absolute" != c && "relative" != c && (b.position = "relative", b.zIndex = 0);
            if ("absolute" === c || "relative" === c) if (a = Pa(a).zIndex, !a || "auto" === a) b.zIndex = 0;
        },
        DN:s("yn"),
        Ld:s("Ha"),
        eO:s("Oq"),
        PF:s("Oq"),
        W:s("ab"),
        Za:s("Ia"),
        U:s("uc"),
        di:s("Hh"),
        fT:function() {
            return this.cS || [];
        },
        bT:s("PJ"),
        zc:function(a, b) {
            a != this.Ha && (this.Vi = this.Ha, this.mq = this.ab, this.Ha = a, this.Zk = b || "street",
            this.ab = n);
        },
        fa:function(a) {
            a.kb(this.ab) || (this.Vi = this.Ha, this.mq = this.ab, this.ab = a, this.Ha = n);
        },
        Qd:function(a) {
            this.Ia = a;
            a = this.Ia.pitch;
            "cvsRender" == this.kn() ? (90 < a && (a = 90), -90 > a && (a = -90)) :"cssRender" == this.kn() && (45 < a && (a = 45),
            -45 > a && (a = -45));
            this.Kn = i;
            this.Ia.pitch = a;
        },
        dd:function(a) {
            a != this.uc && (a > jd && (a = jd), a < kd && (a = kd), a != this.uc && (this.uc = a));
        },
        pv:function() {
            if (this.A) for (var a = this.A.wx(), b = 0; b < a.length; b++) (a[b] instanceof S || a[b] instanceof ac) && a[b].point && this.ja.push(a[b]);
        },
        My:ca("A"),
        ii:function() {
            this.aj.style.display = "none";
        },
        Vs:function() {
            this.aj.style.display = "block";
        },
        bN:function() {
            this.k.enableScrollWheelZoom = i;
        },
        GM:function() {
            this.k.enableScrollWheelZoom = o;
        },
        show:function() {
            this.k.visible = i;
        },
        H:function() {
            this.k.visible = o;
        },
        kn:function() {
            return !D() && Gb() ? "cvsRender" :"cssRender";
        },
        ya:function(a) {
            this.Gd[a.Vd] = a;
        },
        Gb:function(a) {
            delete this.Gd[a];
        },
        RD:function() {
            return this.k.visible;
        },
        RD:function() {
            return this.k.visible;
        },
        Gv:function(a) {
            function b(a, b) {
                return function() {
                    a.Gn.push({
                        RE:b,
                        QE:arguments
                    });
                };
            }
            for (var c = a.getPanoMethodList(), d = "", e = 0, f = c.length; e < f; e++) d = c[e],
            this[d] = b(this, d);
            this.pf.push(a);
        },
        xy:function(a) {
            for (var b = this.pf.length; b--; ) this.pf[b] === a && this.pf.splice(b, 1);
        }
    });
    var W = Ka.prototype;
    V(W, {
        setId:W.zc,
        setPosition:W.fa,
        setPov:W.Qd,
        setZoom:W.dd,
        getId:W.Ld,
        getPosition:W.W,
        getPov:W.Za,
        getZoom:W.U,
        getLinks:W.DN,
        enableDoubleClickZoom:W.JS,
        disableDoubleClickZoom:W.BS,
        enableScrollWheelZoom:W.bN,
        disableScrollWheelZoom:W.GM,
        show:W.show,
        hide:W.H,
        addPlugin:W.Gv,
        removePlugin:W.xy,
        getVisible:W.RD,
        addOverlay:W.ya,
        removeOverlay:W.Gb
    });
    function ld() {
        t.lang.ma.call(this);
        this.Vd = "PanoramaOverlay_" + this.Q;
        this.L = n;
        this.Qa = i;
    }
    t.lang.ga(ld, t.lang.ma, "PanoramaOverlayBase");
    t.extend(ld.prototype, {
        cT:s("Vd"),
        ha:function() {
            aa("initialize方法未实现");
        },
        remove:function() {
            aa("remove方法未实现");
        },
        jg:function() {
            aa("_setOverlayProperty方法未实现");
        }
    });
    function md(a, b) {
        ld.call(this);
        var c = {
            position:n,
            altitude:2
        }, b = b || {}, d;
        for (d in b) c[d] = b[d];
        this.ab = c.position;
        this.Fh = a;
        this.Lm = c.altitude;
    }
    t.lang.ga(md, ld, "PanoramaLabel");
    t.extend(md.prototype, {
        fa:function(a) {
            this.ab = a;
            this.jg("position", a);
        },
        W:s("ab"),
        nc:function(a) {
            this.Fh = a;
            this.jg("content", a);
        },
        ci:s("Fh"),
        Gy:function(a) {
            this.Lm = a;
            this.jg("altitude", a);
        },
        Ir:s("Lm"),
        H:function() {
            aa("hide方法未实现");
        },
        show:function() {
            aa("show方法未实现");
        }
    });
    var nd = md.prototype;
    V(nd, {
        setPosition:nd.fa,
        getPosition:nd.W,
        setContent:nd.nc,
        getContent:nd.ci,
        setAltitude:nd.Gy,
        getAltitude:nd.Ir,
        show:nd.show,
        hide:nd.H
    });
    function od(a, b) {
        ld.call(this);
        var c = {
            icon:"",
            title:"",
            panoInfo:n,
            altitude:2
        }, b = b || {}, d;
        for (d in b) c[d] = b[d];
        this.ab = a;
        this.TA = c.icon;
        this.WB = c.title;
        this.Lm = c.altitude;
        this.cK = c.panoInfo;
    }
    t.lang.ga(od, ld, "PanoramaMarker");
    t.extend(od.prototype, {
        fa:function(a) {
            this.ab = a;
            this.jg("position", a);
        },
        W:s("ab"),
        Ob:function(a) {
            this.WB = a;
            this.jg("title", a);
        },
        Ho:s("WB"),
        Hb:function(a) {
            this.TA = icon;
            this.jg("icon", a);
        },
        Ao:s("TA"),
        Gy:function(a) {
            this.Lm = a;
            this.jg("altitude", a);
        },
        Ir:s("Lm"),
        HD:s("cK")
    });
    var pd = od.prototype;
    V(pd, {
        setPosition:pd.fa,
        getPosition:pd.W,
        setTitle:pd.Ob,
        getTitle:pd.Ho,
        setAltitude:pd.Gy,
        getAltitude:pd.Ir,
        getPanoInfo:pd.HD,
        getIcon:pd.Ao,
        setIcon:pd.Hb
    });
    function Qb(a, b) {
        this.L = a || n;
        var c = this;
        c.L && c.P();
        J.load("panoramaservice", function() {
            c.JH();
        });
        "api" == (b || {}).Al ? I(Ea) :I(Fa);
    }
    B.ky(function(a) {
        new Qb(a, {
            Al:"api"
        });
    });
    t.extend(Qb.prototype, {
        P:function() {
            function a(a) {
                if (a) {
                    if (a.id != b.Oq) {
                        b.PF(a.id);
                        var c = new N("ondataload");
                        c.data = a;
                        b.Ha = a.id;
                        b.ab = a.position;
                        b.$R = a.ri;
                        b.aS = a.si;
                        b.Hh = a.description;
                        b.yn = a.links;
                        b.na = a;
                        b.dispatchEvent(c);
                        b.dispatchEvent(new N("onposition_changed"));
                        b.dispatchEvent(new N("onlinks_changed"));
                        a.vf ? (t.B.show(b.nu), t.B.H(b.Uk)) :(t.B.H(b.nu), t.B.show(b.Uk));
                    }
                } else b.Ha = b.Vi, b.ab = b.mq, b.dispatchEvent(new N("onnoresult"));
            }
            var b = this.L, c = this;
            b.addEventListener("id_changed", function() {
                c.Hl(b.Ld(), a);
            });
            b.addEventListener("iid_changed", function() {
                c.bl(Qb.Np + "qt=idcb&iid=" + b.Du + "&fn=", function(b) {
                    if (b && b.result && 0 == b.result.error) {
                        var b = b.content[0].interinfo, e = {};
                        e.vf = b.BreakID;
                        for (var f = b.Defaultfloor, g = n, j = 0; j < b.Floors.length; j++) if (b.Floors[j].Floor == f) {
                            g = b.Floors[j];
                            break;
                        }
                        e.id = g.StartID || g.Points[0].PID;
                        c.Hl(e.id, a, e);
                    }
                });
            });
            b.addEventListener("position_changed_inner", function() {
                c.nh(b.W(), a);
            });
        },
        Hl:function(a, b) {
            this.Ha = a;
            this.Li = b;
            this.Ru = n;
        },
        nh:function(a, b, c) {
            this.Ru = a;
            this.nK = b;
            this.Li = c;
            this.Ha = n;
        }
    });
    var qd = Qb.prototype;
    V(qd, {
        getPanoramaById:qd.Hl,
        getPanoramaByLocation:qd.nh
    });
    function Pb(a) {
        kc.call(this);
        "api" == (a || {}).Al ? I(za) :I(Aa);
    }
    Pb.Oz = [ "http://pcsv0.map.bdimg.com/tile/", "http://pcsv1.map.bdimg.com/tile/" ];
    Pb.prototype = new kc();
    Pb.prototype.getTilesUrl = function(a, b) {
        return Pb.Oz[(a.x + a.y) % Pb.Oz.length] + "?udt=v&qt=tile&styles=pl&x=" + a.x + "&y=" + a.y + "&z=" + b;
    };
    Pb.prototype.Ro = da(i);
    rd.eg = new Q();
    function rd() {}
    t.extend(rd, {
        HM:function(a, b, c) {
            c = t.lang.Xc(c);
            b = {
                data:b
            };
            "position_changed" == a && (b.data = rd.eg.xh(new P(b.data.mercatorX, b.data.mercatorY)));
            c.dispatchEvent(new N("on" + a), b);
        }
    });
    var sd = rd;
    V(sd, {
        dispatchFlashEvent:sd.HM
    });
    var td = {
        TG:50,
        Mp:"http://pcsv0.map.bdimg.com",
        Jp:{
            width:220,
            height:60
        }
    };
    t.extend(td, {
        Rl:function(a, b, c, d) {
            if (!b || !c || !c.lngLat || !c.panoInstance) d(); else {
                this.$k === ba && (this.$k = new Qb());
                var e = this;
                this.$k.WL(b, function(b) {
                    b ? e.$k.nh(c.lngLat, td.TG, function(b) {
                        if (b && b.id) {
                            var f = b.id, k = b.ri, b = b.si, l = Qb.eg.mi(c.lngLat), m = e.fJ(l, {
                                x:k,
                                y:b
                            }), k = e.LN(f, m, 0, td.Jp.width, td.Jp.height);
                            a.content = e.gJ(a.content, k, c.titleTip, c.beforeDomId);
                            a.addEventListener("open", function() {
                                ia.D(t.Pb("infoWndPano"), "click", function() {
                                    c.panoInstance.zc(f);
                                    c.panoInstance.show();
                                    c.panoInstance.Qd({
                                        heading:m,
                                        pitch:0
                                    });
                                });
                            });
                        }
                        d();
                    }) :d();
                });
            }
        },
        gJ:function(a, b, c, d) {
            var c = c || "", e;
            !d || !a.split(d)[0] ? (d = a, a = "") :(d = a.split(d)[0], e = d.lastIndexOf("<"),
            d = a.substring(0, e), a = a.substring(e));
            e = [];
            var f = td.Jp.width, g = td.Jp.height;
            e.push(d);
            e.push("<div id='infoWndPano' class='panoInfoBox' style='height:" + g + "px;width:" + f + "px; margin-top: -19px;'>");
            e.push("<img class='pano_thumnail_img' width='" + f + "' height='" + g + "' border='0' alt='" + c + "外景' title='" + c + "外景' src='" + b + "' onerror='Pano.PanoEntranceUtil.thumbnailNotFound(this, " + f + ", " + g + ");' />");
            e.push("<div class='panoInfoBoxTitleBg' style='width:" + f + "px;'></div><a href='javascript:void(0)' class='panoInfoBoxTitleContent' >进入全景&gt;&gt;</a>");
            e.push("</div>");
            e.push(a);
            return e.join("");
        },
        fJ:function(a, b) {
            var c = 90 - 180 * Math.atan2(a.y - b.y, a.x - b.x) / Math.PI;
            0 > c && (c += 360);
            return c;
        },
        LN:function(a, b, c, d, e) {
            var f = {
                panoId:a,
                panoHeading:b || 0,
                panoPitch:c || 0,
                width:d,
                height:e
            };
            return (td.Mp + "/?qt=pr3d&fovy=75&quality=80&panoid={panoId}&heading={panoHeading}&pitch={panoPitch}&width={width}&height={height}").replace(/\{(.*?)\}/g, function(a, b) {
                return f[b];
            });
        }
    });
    B.Map = Ia;
    B.Hotspot = cb;
    B.MapType = xc;
    B.Point = H;
    B.Pixel = P;
    B.Size = M;
    B.Bounds = $a;
    B.TileLayer = kc;
    B.Projection = Tb;
    B.MercatorProjection = Q;
    B.PerspectiveProjection = bb;
    B.Copyright = function(a, b, c) {
        this.id = a;
        this.Va = b;
        this.content = c;
    };
    B.Overlay = Vb;
    B.Label = ac;
    B.GroundOverlay = bc;
    B.Marker = S;
    B.Icon = Zb;
    B.Polyline = gc;
    B.Polygon = fc;
    B.InfoWindow = $b;
    B.Circle = hc;
    B.Control = R;
    B.NavigationControl = eb;
    B.GeolocationControl = Lb;
    B.OverviewMapControl = gb;
    B.CopyrightControl = Mb;
    B.ScaleControl = fb;
    B.MapTypeControl = hb;
    B.PanoramaControl = Ob;
    B.TrafficLayer = vc;
    B.CustomLayer = ib;
    B.ContextMenu = Rb;
    B.MenuItem = Sb;
    B.LocalSearch = Xa;
    B.TransitRoute = Yc;
    B.DrivingRoute = ad;
    B.WalkingRoute = bd;
    B.Autocomplete = id;
    B.Geocoder = dd;
    B.LocalCity = fd;
    B.Geolocation = Geolocation;
    B.BusLineSearch = hd;
    B.Boundary = gd;
    B.VectorCloudLayer = tc;
    B.VectorTrafficLayer = uc;
    B.Panorama = Ka;
    B.PanoramaLabel = md;
    B.PanoramaService = Qb;
    B.PanoramaCoverageLayer = Pb;
    B.PanoramaFlashInterface = rd;
    function V(a, b) {
        for (var c in b) a[c] = b[c];
    }
    V(window, {
        BMap:B,
        _jsload2:function(a, b) {
            ia.at.OO && ia.at.set(a, b);
            J.UL(a, b);
        },
        BMAP_API_VERSION:"2.0"
    });
    var X = Ia.prototype;
    V(X, {
        getBounds:X.Be,
        getCenter:X.za,
        getMapType:X.ka,
        getSize:X.Ab,
        setSize:X.Oc,
        getViewport:X.Io,
        getZoom:X.U,
        centerAndZoom:X.jd,
        panTo:X.Cg,
        panBy:X.cf,
        setCenter:X.Fe,
        setCurrentCity:X.Ky,
        setMapType:X.df,
        setViewport:X.Pf,
        setZoom:X.dd,
        highResolutionEnabled:X.ji,
        zoomTo:X.jf,
        zoomIn:X.kz,
        zoomOut:X.lz,
        addHotspot:X.er,
        removeHotspot:X.IP,
        clearHotspots:X.zj,
        checkResize:X.XL,
        addControl:X.br,
        removeControl:X.xF,
        getContainer:X.Ca,
        addContextMenu:X.ml,
        removeContextMenu:X.bm,
        addOverlay:X.ya,
        removeOverlay:X.Gb,
        clearOverlays:X.FC,
        openInfoWindow:X.Xb,
        closeInfoWindow:X.hc,
        pointToOverlayPixel:X.Od,
        overlayPixelToPoint:X.oF,
        getInfoWindow:X.Ef,
        getOverlays:X.wx,
        getPanes:function() {
            return {
                floatPane:this.hd.Xw,
                markerMouseTarget:this.hd.ay,
                floatShadow:this.hd.pD,
                labelPane:this.hd.Wx,
                markerPane:this.hd.LE,
                markerShadow:this.hd.ME,
                mapPane:this.hd.js
            };
        },
        addTileLayer:X.sf,
        removeTileLayer:X.Of,
        pixelToPoint:X.eb,
        pointToPixel:X.Bb,
        setFeatureStyle:X.Ly,
        selectBaseElement:X.cU,
        setMapStyle:X.km,
        enable3DBuilding:X.yl,
        disable3DBuilding:X.DM
    });
    var ud = xc.prototype;
    V(ud, {
        getTileLayer:ud.cO,
        getMinZoom:ud.El,
        getMaxZoom:ud.Rj,
        getProjection:ud.Jl,
        getTextColor:ud.Fo,
        getTips:ud.Go
    });
    V(window, {
        BMAP_NORMAL_MAP:Ja,
        BMAP_PERSPECTIVE_MAP:La,
        BMAP_SATELLITE_MAP:Ta,
        BMAP_HYBRID_MAP:Ma
    });
    var vd = Q.prototype;
    V(vd, {
        lngLatToPoint:vd.mi,
        pointToLngLat:vd.xh
    });
    var wd = bb.prototype;
    V(wd, {
        lngLatToPoint:wd.mi,
        pointToLngLat:wd.xh
    });
    var xd = $a.prototype;
    V(xd, {
        equals:xd.kb,
        containsPoint:xd.iM,
        containsBounds:xd.hM,
        intersects:xd.Nx,
        extend:xd.extend,
        getCenter:xd.za,
        isEmpty:xd.uh,
        getSouthWest:xd.Wc,
        getNorthEast:xd.Md,
        toSpan:xd.dz
    });
    var yd = Vb.prototype;
    V(yd, {
        isVisible:yd.vh,
        show:yd.show,
        hide:yd.H
    });
    Vb.getZIndex = Vb.Wj;
    var zd = ab.prototype;
    V(zd, {
        openInfoWindow:zd.Xb,
        closeInfoWindow:zd.hc,
        enableMassClear:zd.$h,
        disableMassClear:zd.FM,
        show:zd.show,
        hide:zd.H,
        getMap:zd.tx,
        addContextMenu:zd.ml,
        removeContextMenu:zd.bm
    });
    var Ad = S.prototype;
    V(Ad, {
        setIcon:Ad.Hb,
        getIcon:Ad.Ao,
        setPosition:Ad.fa,
        getPosition:Ad.W,
        setOffset:Ad.td,
        getOffset:Ad.Ff,
        getLabel:Ad.ED,
        setLabel:Ad.sk,
        setTitle:Ad.Ob,
        setTop:Ad.Fg,
        enableDragging:Ad.Sb,
        disableDragging:Ad.sw,
        setZIndex:Ad.Ts,
        getMap:Ad.tx,
        setAnimation:Ad.rk,
        setShadow:Ad.Ss,
        hide:Ad.H,
        setRotation:Ad.Rs,
        getRotation:Ad.KD
    });
    V(window, {
        BMAP_ANIMATION_DROP:1,
        BMAP_ANIMATION_BOUNCE:2
    });
    var Bd = ac.prototype;
    V(Bd, {
        setStyle:Bd.Pc,
        setStyles:Bd.yi,
        setContent:Bd.nc,
        setPosition:Bd.fa,
        getPosition:Bd.W,
        setOffset:Bd.td,
        getOffset:Bd.Ff,
        setTitle:Bd.Ob,
        setZIndex:Bd.Ts,
        getMap:Bd.tx,
        getContent:Bd.ci
    });
    var Cd = Zb.prototype;
    V(Cd, {
        setImageUrl:Cd.qQ,
        setSize:Cd.Oc,
        setAnchor:Cd.Zb,
        setImageOffset:Cd.ep,
        setImageSize:Cd.oQ,
        setInfoWindowAnchor:Cd.sQ,
        setPrintImageUrl:Cd.AQ
    });
    var Dd = $b.prototype;
    V(Dd, {
        redraw:Dd.cd,
        setTitle:Dd.Ob,
        setContent:Dd.nc,
        getContent:Dd.ci,
        getPosition:Dd.W,
        enableMaximize:Dd.yf,
        disableMaximize:Dd.Ar,
        isOpen:Dd.Da,
        setMaxContent:Dd.fp,
        maximize:Dd.ls,
        enableAutoPan:Dd.qo
    });
    var Ed = Xb.prototype;
    V(Ed, {
        getPath:Ed.md,
        setPath:Ed.ud,
        setPositionAt:Ed.uk,
        getStrokeColor:Ed.XN,
        setStrokeWeight:Ed.jp,
        getStrokeWeight:Ed.ND,
        setStrokeOpacity:Ed.hp,
        getStrokeOpacity:Ed.YN,
        setFillOpacity:Ed.Ns,
        getFillOpacity:Ed.xN,
        setStrokeStyle:Ed.ip,
        getStrokeStyle:Ed.MD,
        getFillColor:Ed.wN,
        getBounds:Ed.Be,
        enableEditing:Ed.Ae,
        disableEditing:Ed.EM
    });
    var Fd = hc.prototype;
    V(Fd, {
        setCenter:Fd.Fe,
        getCenter:Fd.za,
        getRadius:Fd.QN,
        setRadius:Fd.Qs
    });
    var Gd = fc.prototype;
    V(Gd, {
        getPath:Gd.md,
        setPath:Gd.ud,
        setPositionAt:Gd.uk
    });
    var Hd = cb.prototype;
    V(Hd, {
        getPosition:Hd.W,
        setPosition:Hd.fa,
        getText:Hd.Bx,
        setText:Hd.kp
    });
    H.prototype.equals = H.prototype.kb;
    P.prototype.equals = P.prototype.kb;
    M.prototype.equals = M.prototype.kb;
    V(window, {
        BMAP_ANCHOR_TOP_LEFT:Ib,
        BMAP_ANCHOR_TOP_RIGHT:Jb,
        BMAP_ANCHOR_BOTTOM_LEFT:Kb,
        BMAP_ANCHOR_BOTTOM_RIGHT:3
    });
    var Id = R.prototype;
    V(Id, {
        setAnchor:Id.Zb,
        getAnchor:Id.ax,
        setOffset:Id.td,
        getOffset:Id.Ff,
        show:Id.show,
        hide:Id.H,
        isVisible:Id.vh,
        toString:Id.toString
    });
    var Jd = eb.prototype;
    V(Jd, {
        getType:Jd.Ml,
        setType:Jd.vk
    });
    V(window, {
        BMAP_NAVIGATION_CONTROL_LARGE:0,
        BMAP_NAVIGATION_CONTROL_SMALL:1,
        BMAP_NAVIGATION_CONTROL_PAN:2,
        BMAP_NAVIGATION_CONTROL_ZOOM:3
    });
    var Kd = gb.prototype;
    V(Kd, {
        changeView:Kd.kd,
        setSize:Kd.Oc,
        getSize:Kd.Ab
    });
    var Ld = fb.prototype;
    V(Ld, {
        getUnit:Ld.gO,
        setUnit:Ld.Ry
    });
    V(window, {
        BMAP_UNIT_METRIC:"metric",
        BMAP_UNIT_IMPERIAL:"us"
    });
    var Md = Mb.prototype;
    V(Md, {
        addCopyright:Md.cr,
        removeCopyright:Md.wy,
        getCopyright:Md.Pj,
        getCopyrightCollection:Md.ix
    });
    V(window, {
        BMAP_MAPTYPE_CONTROL_HORIZONTAL:Nb,
        BMAP_MAPTYPE_CONTROL_DROPDOWN:1,
        BMAP_MAPTYPE_CONTROL_MAP:2
    });
    var Nd = kc.prototype;
    V(Nd, {
        getMapType:Nd.ka,
        getCopyright:Nd.Pj,
        isTransparentPng:Nd.Ro
    });
    var Od = Rb.prototype;
    V(Od, {
        addItem:Od.fr,
        addSeparator:Od.Hv,
        removeSeparator:Od.yy
    });
    var Pd = Sb.prototype;
    V(Pd, {
        setText:Pd.kp
    });
    var Qd = U.prototype;
    V(Qd, {
        getStatus:Qd.Tj,
        setSearchCompleteCallback:Qd.Py,
        getPageCapacity:Qd.fe,
        setPageCapacity:Qd.lm,
        setLocation:Qd.tk,
        disableFirstResultSelection:Qd.tw,
        enableFirstResultSelection:Qd.Kw,
        gotoPage:Qd.Xj,
        searchNearby:Qd.im,
        searchInBounds:Qd.qk,
        search:Qd.search
    });
    V(window, {
        BMAP_STATUS_SUCCESS:0,
        BMAP_STATUS_CITY_LIST:1,
        BMAP_STATUS_UNKNOWN_LOCATION:2,
        BMAP_STATUS_UNKNOWN_ROUTE:3,
        BMAP_STATUS_INVALID_KEY:4,
        BMAP_STATUS_INVALID_REQUEST:5,
        BMAP_STATUS_PERMISSION_DENIED:6,
        BMAP_STATUS_SERVICE_UNAVAILABLE:7,
        BMAP_STATUS_TIMEOUT:8
    });
    V(window, {
        BMAP_POI_TYPE_NORMAL:0,
        BMAP_POI_TYPE_BUSSTOP:1,
        BMAP_POI_TYPE_BUSLINE:2,
        BMAP_POI_TYPE_SUBSTOP:3,
        BMAP_POI_TYPE_SUBLINE:4
    });
    V(window, {
        BMAP_TRANSIT_POLICY_LEAST_TIME:0,
        BMAP_TRANSIT_POLICY_LEAST_TRANSFER:2,
        BMAP_TRANSIT_POLICY_LEAST_WALKING:3,
        BMAP_TRANSIT_POLICY_AVOID_SUBWAYS:4,
        BMAP_LINE_TYPE_BUS:0,
        BMAP_LINE_TYPE_SUBWAY:1,
        BMAP_LINE_TYPE_FERRY:2
    });
    var Rd = Xc.prototype;
    V(Rd, {
        clearResults:Rd.Kd
    });
    Zc = Yc.prototype;
    V(Zc, {
        setPolicy:Zc.gp,
        toString:Zc.toString,
        setPageCapacity:Zc.lm
    });
    V(window, {
        BMAP_DRIVING_POLICY_LEAST_TIME:0,
        BMAP_DRIVING_POLICY_LEAST_DISTANCE:1,
        BMAP_DRIVING_POLICY_AVOID_HIGHWAYS:2
    });
    V(window, {
        BMAP_HIGHLIGHT_STEP:1,
        BMAP_HIGHLIGHT_ROUTE:2
    });
    V(window, {
        BMAP_ROUTE_TYPE_DRIVING:Jc,
        BMAP_ROUTE_TYPE_WALKING:Hc
    });
    V(window, {
        BMAP_ROUTE_STATUS_NORMAL:Kc,
        BMAP_ROUTE_STATUS_EMPTY:1,
        BMAP_ROUTE_STATUS_ADDRESS:2
    });
    var Sd = ad.prototype;
    V(Sd, {
        setPolicy:Sd.gp
    });
    var Td = id.prototype;
    V(Td, {
        show:Td.show,
        hide:Td.H,
        setTypes:Td.Qy,
        setLocation:Td.tk,
        search:Td.search,
        setInputValue:Td.Os
    });
    V(ib.prototype, {});
    var Ud = gd.prototype;
    V(Ud, {
        get:Ud.get
    });
    V(Pb.prototype, {});
    V(Ya.prototype, {});
    B.vL();
})();