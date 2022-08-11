var Yt = Object.defineProperty;
var Xt = (r, e, t) => e in r ? Yt(r, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : r[e] = t;
var er = (r, e, t) => (Xt(r, typeof e != "symbol" ? e + "" : e, t), t);
var vr = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Qt(r) {
  return r && r.__esModule && Object.prototype.hasOwnProperty.call(r, "default") ? r.default : r;
}
var ct = { exports: {} }, oe = { exports: {} }, ht = function(e, t) {
  return function() {
    for (var s = new Array(arguments.length), l = 0; l < s.length; l++)
      s[l] = arguments[l];
    return e.apply(t, s);
  };
}, Zt = ht, se = Object.prototype.toString, ue = function(r) {
  return function(e) {
    var t = se.call(e);
    return r[t] || (r[t] = t.slice(8, -1).toLowerCase());
  };
}(/* @__PURE__ */ Object.create(null));
function Q(r) {
  return r = r.toLowerCase(), function(t) {
    return ue(t) === r;
  };
}
function fe(r) {
  return Array.isArray(r);
}
function Sr(r) {
  return typeof r > "u";
}
function rn(r) {
  return r !== null && !Sr(r) && r.constructor !== null && !Sr(r.constructor) && typeof r.constructor.isBuffer == "function" && r.constructor.isBuffer(r);
}
var pt = Q("ArrayBuffer");
function en(r) {
  var e;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? e = ArrayBuffer.isView(r) : e = r && r.buffer && pt(r.buffer), e;
}
function tn(r) {
  return typeof r == "string";
}
function nn(r) {
  return typeof r == "number";
}
function dt(r) {
  return r !== null && typeof r == "object";
}
function Rr(r) {
  if (ue(r) !== "object")
    return !1;
  var e = Object.getPrototypeOf(r);
  return e === null || e === Object.prototype;
}
var an = Q("Date"), on = Q("File"), sn = Q("Blob"), un = Q("FileList");
function le(r) {
  return se.call(r) === "[object Function]";
}
function fn(r) {
  return dt(r) && le(r.pipe);
}
function ln(r) {
  var e = "[object FormData]";
  return r && (typeof FormData == "function" && r instanceof FormData || se.call(r) === e || le(r.toString) && r.toString() === e);
}
var cn = Q("URLSearchParams");
function hn(r) {
  return r.trim ? r.trim() : r.replace(/^\s+|\s+$/g, "");
}
function pn() {
  return typeof navigator < "u" && (navigator.product === "ReactNative" || navigator.product === "NativeScript" || navigator.product === "NS") ? !1 : typeof window < "u" && typeof document < "u";
}
function ce(r, e) {
  if (!(r === null || typeof r > "u"))
    if (typeof r != "object" && (r = [r]), fe(r))
      for (var t = 0, a = r.length; t < a; t++)
        e.call(null, r[t], t, r);
    else
      for (var s in r)
        Object.prototype.hasOwnProperty.call(r, s) && e.call(null, r[s], s, r);
}
function ee() {
  var r = {};
  function e(s, l) {
    Rr(r[l]) && Rr(s) ? r[l] = ee(r[l], s) : Rr(s) ? r[l] = ee({}, s) : fe(s) ? r[l] = s.slice() : r[l] = s;
  }
  for (var t = 0, a = arguments.length; t < a; t++)
    ce(arguments[t], e);
  return r;
}
function dn(r, e, t) {
  return ce(e, function(s, l) {
    t && typeof s == "function" ? r[l] = Zt(s, t) : r[l] = s;
  }), r;
}
function vn(r) {
  return r.charCodeAt(0) === 65279 && (r = r.slice(1)), r;
}
function yn(r, e, t, a) {
  r.prototype = Object.create(e.prototype, a), r.prototype.constructor = r, t && Object.assign(r.prototype, t);
}
function gn(r, e, t) {
  var a, s, l, f = {};
  e = e || {};
  do {
    for (a = Object.getOwnPropertyNames(r), s = a.length; s-- > 0; )
      l = a[s], f[l] || (e[l] = r[l], f[l] = !0);
    r = Object.getPrototypeOf(r);
  } while (r && (!t || t(r, e)) && r !== Object.prototype);
  return e;
}
function mn(r, e, t) {
  r = String(r), (t === void 0 || t > r.length) && (t = r.length), t -= e.length;
  var a = r.indexOf(e, t);
  return a !== -1 && a === t;
}
function En(r) {
  if (!r)
    return null;
  var e = r.length;
  if (Sr(e))
    return null;
  for (var t = new Array(e); e-- > 0; )
    t[e] = r[e];
  return t;
}
var _n = function(r) {
  return function(e) {
    return r && e instanceof r;
  };
}(typeof Uint8Array < "u" && Object.getPrototypeOf(Uint8Array)), N = {
  isArray: fe,
  isArrayBuffer: pt,
  isBuffer: rn,
  isFormData: ln,
  isArrayBufferView: en,
  isString: tn,
  isNumber: nn,
  isObject: dt,
  isPlainObject: Rr,
  isUndefined: Sr,
  isDate: an,
  isFile: on,
  isBlob: sn,
  isFunction: le,
  isStream: fn,
  isURLSearchParams: cn,
  isStandardBrowserEnv: pn,
  forEach: ce,
  merge: ee,
  extend: dn,
  trim: hn,
  stripBOM: vn,
  inherits: yn,
  toFlatObject: gn,
  kindOf: ue,
  kindOfTest: Q,
  endsWith: mn,
  toArray: En,
  isTypedArray: _n,
  isFileList: un
}, tr = N;
function be(r) {
  return encodeURIComponent(r).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
var vt = function(e, t, a) {
  if (!t)
    return e;
  var s;
  if (a)
    s = a(t);
  else if (tr.isURLSearchParams(t))
    s = t.toString();
  else {
    var l = [];
    tr.forEach(t, function(v, m) {
      v === null || typeof v > "u" || (tr.isArray(v) ? m = m + "[]" : v = [v], tr.forEach(v, function(R) {
        tr.isDate(R) ? R = R.toISOString() : tr.isObject(R) && (R = JSON.stringify(R)), l.push(be(m) + "=" + be(R));
      }));
    }), s = l.join("&");
  }
  if (s) {
    var f = e.indexOf("#");
    f !== -1 && (e = e.slice(0, f)), e += (e.indexOf("?") === -1 ? "?" : "&") + s;
  }
  return e;
}, On = N;
function $r() {
  this.handlers = [];
}
$r.prototype.use = function(e, t, a) {
  return this.handlers.push({
    fulfilled: e,
    rejected: t,
    synchronous: a ? a.synchronous : !1,
    runWhen: a ? a.runWhen : null
  }), this.handlers.length - 1;
};
$r.prototype.eject = function(e) {
  this.handlers[e] && (this.handlers[e] = null);
};
$r.prototype.forEach = function(e) {
  On.forEach(this.handlers, function(a) {
    a !== null && e(a);
  });
};
var bn = $r, An = N, Rn = function(e, t) {
  An.forEach(e, function(s, l) {
    l !== t && l.toUpperCase() === t.toUpperCase() && (e[t] = s, delete e[l]);
  });
}, yt = N;
function ir(r, e, t, a, s) {
  Error.call(this), this.message = r, this.name = "AxiosError", e && (this.code = e), t && (this.config = t), a && (this.request = a), s && (this.response = s);
}
yt.inherits(ir, Error, {
  toJSON: function() {
    return {
      message: this.message,
      name: this.name,
      description: this.description,
      number: this.number,
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      config: this.config,
      code: this.code,
      status: this.response && this.response.status ? this.response.status : null
    };
  }
});
var gt = ir.prototype, mt = {};
[
  "ERR_BAD_OPTION_VALUE",
  "ERR_BAD_OPTION",
  "ECONNABORTED",
  "ETIMEDOUT",
  "ERR_NETWORK",
  "ERR_FR_TOO_MANY_REDIRECTS",
  "ERR_DEPRECATED",
  "ERR_BAD_RESPONSE",
  "ERR_BAD_REQUEST",
  "ERR_CANCELED"
].forEach(function(r) {
  mt[r] = { value: r };
});
Object.defineProperties(ir, mt);
Object.defineProperty(gt, "isAxiosError", { value: !0 });
ir.from = function(r, e, t, a, s, l) {
  var f = Object.create(gt);
  return yt.toFlatObject(r, f, function(v) {
    return v !== Error.prototype;
  }), ir.call(f, r.message, e, t, a, s), f.name = r.name, l && Object.assign(f, l), f;
};
var or = ir, Et = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, B = N;
function wn(r, e) {
  e = e || new FormData();
  var t = [];
  function a(l) {
    return l === null ? "" : B.isDate(l) ? l.toISOString() : B.isArrayBuffer(l) || B.isTypedArray(l) ? typeof Blob == "function" ? new Blob([l]) : Buffer.from(l) : l;
  }
  function s(l, f) {
    if (B.isPlainObject(l) || B.isArray(l)) {
      if (t.indexOf(l) !== -1)
        throw Error("Circular reference detected in " + f);
      t.push(l), B.forEach(l, function(v, m) {
        if (!B.isUndefined(v)) {
          var _ = f ? f + "." + m : m, R;
          if (v && !f && typeof v == "object") {
            if (B.endsWith(m, "{}"))
              v = JSON.stringify(v);
            else if (B.endsWith(m, "[]") && (R = B.toArray(v))) {
              R.forEach(function(g) {
                !B.isUndefined(g) && e.append(_, a(g));
              });
              return;
            }
          }
          s(v, _);
        }
      }), t.pop();
    } else
      e.append(f, a(l));
  }
  return s(r), e;
}
var _t = wn, Dr, Ae;
function Sn() {
  if (Ae)
    return Dr;
  Ae = 1;
  var r = or;
  return Dr = function(t, a, s) {
    var l = s.config.validateStatus;
    !s.status || !l || l(s.status) ? t(s) : a(new r(
      "Request failed with status code " + s.status,
      [r.ERR_BAD_REQUEST, r.ERR_BAD_RESPONSE][Math.floor(s.status / 100) - 4],
      s.config,
      s.request,
      s
    ));
  }, Dr;
}
var Fr, Re;
function Tn() {
  if (Re)
    return Fr;
  Re = 1;
  var r = N;
  return Fr = r.isStandardBrowserEnv() ? function() {
    return {
      write: function(a, s, l, f, p, v) {
        var m = [];
        m.push(a + "=" + encodeURIComponent(s)), r.isNumber(l) && m.push("expires=" + new Date(l).toGMTString()), r.isString(f) && m.push("path=" + f), r.isString(p) && m.push("domain=" + p), v === !0 && m.push("secure"), document.cookie = m.join("; ");
      },
      read: function(a) {
        var s = document.cookie.match(new RegExp("(^|;\\s*)(" + a + ")=([^;]*)"));
        return s ? decodeURIComponent(s[3]) : null;
      },
      remove: function(a) {
        this.write(a, "", Date.now() - 864e5);
      }
    };
  }() : function() {
    return {
      write: function() {
      },
      read: function() {
        return null;
      },
      remove: function() {
      }
    };
  }(), Fr;
}
var $n = function(e) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}, xn = function(e, t) {
  return t ? e.replace(/\/+$/, "") + "/" + t.replace(/^\/+/, "") : e;
}, Cn = $n, Pn = xn, Ot = function(e, t) {
  return e && !Cn(t) ? Pn(e, t) : t;
}, Br, we;
function In() {
  if (we)
    return Br;
  we = 1;
  var r = N, e = [
    "age",
    "authorization",
    "content-length",
    "content-type",
    "etag",
    "expires",
    "from",
    "host",
    "if-modified-since",
    "if-unmodified-since",
    "last-modified",
    "location",
    "max-forwards",
    "proxy-authorization",
    "referer",
    "retry-after",
    "user-agent"
  ];
  return Br = function(a) {
    var s = {}, l, f, p;
    return a && r.forEach(a.split(`
`), function(m) {
      if (p = m.indexOf(":"), l = r.trim(m.substr(0, p)).toLowerCase(), f = r.trim(m.substr(p + 1)), l) {
        if (s[l] && e.indexOf(l) >= 0)
          return;
        l === "set-cookie" ? s[l] = (s[l] ? s[l] : []).concat([f]) : s[l] = s[l] ? s[l] + ", " + f : f;
      }
    }), s;
  }, Br;
}
var qr, Se;
function Nn() {
  if (Se)
    return qr;
  Se = 1;
  var r = N;
  return qr = r.isStandardBrowserEnv() ? function() {
    var t = /(msie|trident)/i.test(navigator.userAgent), a = document.createElement("a"), s;
    function l(f) {
      var p = f;
      return t && (a.setAttribute("href", p), p = a.href), a.setAttribute("href", p), {
        href: a.href,
        protocol: a.protocol ? a.protocol.replace(/:$/, "") : "",
        host: a.host,
        search: a.search ? a.search.replace(/^\?/, "") : "",
        hash: a.hash ? a.hash.replace(/^#/, "") : "",
        hostname: a.hostname,
        port: a.port,
        pathname: a.pathname.charAt(0) === "/" ? a.pathname : "/" + a.pathname
      };
    }
    return s = l(window.location.href), function(p) {
      var v = r.isString(p) ? l(p) : p;
      return v.protocol === s.protocol && v.host === s.host;
    };
  }() : function() {
    return function() {
      return !0;
    };
  }(), qr;
}
var kr, Te;
function xr() {
  if (Te)
    return kr;
  Te = 1;
  var r = or, e = N;
  function t(a) {
    r.call(this, a == null ? "canceled" : a, r.ERR_CANCELED), this.name = "CanceledError";
  }
  return e.inherits(t, r, {
    __CANCEL__: !0
  }), kr = t, kr;
}
var Gr, $e;
function Mn() {
  return $e || ($e = 1, Gr = function(e) {
    var t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
    return t && t[1] || "";
  }), Gr;
}
var Hr, xe;
function Ce() {
  if (xe)
    return Hr;
  xe = 1;
  var r = N, e = Sn(), t = Tn(), a = vt, s = Ot, l = In(), f = Nn(), p = Et, v = or, m = xr(), _ = Mn();
  return Hr = function(g) {
    return new Promise(function(z, b) {
      var k = g.data, K = g.headers, G = g.responseType, j;
      function mr() {
        g.cancelToken && g.cancelToken.unsubscribe(j), g.signal && g.signal.removeEventListener("abort", j);
      }
      r.isFormData(k) && r.isStandardBrowserEnv() && delete K["Content-Type"];
      var O = new XMLHttpRequest();
      if (g.auth) {
        var Er = g.auth.username || "", rr = g.auth.password ? unescape(encodeURIComponent(g.auth.password)) : "";
        K.Authorization = "Basic " + btoa(Er + ":" + rr);
      }
      var o = s(g.baseURL, g.url);
      O.open(g.method.toUpperCase(), a(o, g.params, g.paramsSerializer), !0), O.timeout = g.timeout;
      function n() {
        if (!!O) {
          var h = "getAllResponseHeaders" in O ? l(O.getAllResponseHeaders()) : null, c = !G || G === "text" || G === "json" ? O.responseText : O.response, d = {
            data: c,
            status: O.status,
            statusText: O.statusText,
            headers: h,
            config: g,
            request: O
          };
          e(function(E) {
            z(E), mr();
          }, function(E) {
            b(E), mr();
          }, d), O = null;
        }
      }
      if ("onloadend" in O ? O.onloadend = n : O.onreadystatechange = function() {
        !O || O.readyState !== 4 || O.status === 0 && !(O.responseURL && O.responseURL.indexOf("file:") === 0) || setTimeout(n);
      }, O.onabort = function() {
        !O || (b(new v("Request aborted", v.ECONNABORTED, g, O)), O = null);
      }, O.onerror = function() {
        b(new v("Network Error", v.ERR_NETWORK, g, O, O)), O = null;
      }, O.ontimeout = function() {
        var c = g.timeout ? "timeout of " + g.timeout + "ms exceeded" : "timeout exceeded", d = g.transitional || p;
        g.timeoutErrorMessage && (c = g.timeoutErrorMessage), b(new v(
          c,
          d.clarifyTimeoutError ? v.ETIMEDOUT : v.ECONNABORTED,
          g,
          O
        )), O = null;
      }, r.isStandardBrowserEnv()) {
        var i = (g.withCredentials || f(o)) && g.xsrfCookieName ? t.read(g.xsrfCookieName) : void 0;
        i && (K[g.xsrfHeaderName] = i);
      }
      "setRequestHeader" in O && r.forEach(K, function(c, d) {
        typeof k > "u" && d.toLowerCase() === "content-type" ? delete K[d] : O.setRequestHeader(d, c);
      }), r.isUndefined(g.withCredentials) || (O.withCredentials = !!g.withCredentials), G && G !== "json" && (O.responseType = g.responseType), typeof g.onDownloadProgress == "function" && O.addEventListener("progress", g.onDownloadProgress), typeof g.onUploadProgress == "function" && O.upload && O.upload.addEventListener("progress", g.onUploadProgress), (g.cancelToken || g.signal) && (j = function(h) {
        !O || (b(!h || h && h.type ? new m() : h), O.abort(), O = null);
      }, g.cancelToken && g.cancelToken.subscribe(j), g.signal && (g.signal.aborted ? j() : g.signal.addEventListener("abort", j))), k || (k = null);
      var u = _(o);
      if (u && ["http", "https", "file"].indexOf(u) === -1) {
        b(new v("Unsupported protocol " + u + ":", v.ERR_BAD_REQUEST, g));
        return;
      }
      O.send(k);
    });
  }, Hr;
}
var Vr, Pe;
function Un() {
  return Pe || (Pe = 1, Vr = null), Vr;
}
var I = N, Ie = Rn, Ne = or, jn = Et, Ln = _t, Dn = {
  "Content-Type": "application/x-www-form-urlencoded"
};
function Me(r, e) {
  !I.isUndefined(r) && I.isUndefined(r["Content-Type"]) && (r["Content-Type"] = e);
}
function Fn() {
  var r;
  return (typeof XMLHttpRequest < "u" || typeof process < "u" && Object.prototype.toString.call(process) === "[object process]") && (r = Ce()), r;
}
function Bn(r, e, t) {
  if (I.isString(r))
    try {
      return (e || JSON.parse)(r), I.trim(r);
    } catch (a) {
      if (a.name !== "SyntaxError")
        throw a;
    }
  return (t || JSON.stringify)(r);
}
var Cr = {
  transitional: jn,
  adapter: Fn(),
  transformRequest: [function(e, t) {
    if (Ie(t, "Accept"), Ie(t, "Content-Type"), I.isFormData(e) || I.isArrayBuffer(e) || I.isBuffer(e) || I.isStream(e) || I.isFile(e) || I.isBlob(e))
      return e;
    if (I.isArrayBufferView(e))
      return e.buffer;
    if (I.isURLSearchParams(e))
      return Me(t, "application/x-www-form-urlencoded;charset=utf-8"), e.toString();
    var a = I.isObject(e), s = t && t["Content-Type"], l;
    if ((l = I.isFileList(e)) || a && s === "multipart/form-data") {
      var f = this.env && this.env.FormData;
      return Ln(l ? { "files[]": e } : e, f && new f());
    } else if (a || s === "application/json")
      return Me(t, "application/json"), Bn(e);
    return e;
  }],
  transformResponse: [function(e) {
    var t = this.transitional || Cr.transitional, a = t && t.silentJSONParsing, s = t && t.forcedJSONParsing, l = !a && this.responseType === "json";
    if (l || s && I.isString(e) && e.length)
      try {
        return JSON.parse(e);
      } catch (f) {
        if (l)
          throw f.name === "SyntaxError" ? Ne.from(f, Ne.ERR_BAD_RESPONSE, this, null, this.response) : f;
      }
    return e;
  }],
  timeout: 0,
  xsrfCookieName: "XSRF-TOKEN",
  xsrfHeaderName: "X-XSRF-TOKEN",
  maxContentLength: -1,
  maxBodyLength: -1,
  env: {
    FormData: Un()
  },
  validateStatus: function(e) {
    return e >= 200 && e < 300;
  },
  headers: {
    common: {
      Accept: "application/json, text/plain, */*"
    }
  }
};
I.forEach(["delete", "get", "head"], function(e) {
  Cr.headers[e] = {};
});
I.forEach(["post", "put", "patch"], function(e) {
  Cr.headers[e] = I.merge(Dn);
});
var he = Cr, qn = N, kn = he, Gn = function(e, t, a) {
  var s = this || kn;
  return qn.forEach(a, function(f) {
    e = f.call(s, e, t);
  }), e;
}, zr, Ue;
function bt() {
  return Ue || (Ue = 1, zr = function(e) {
    return !!(e && e.__CANCEL__);
  }), zr;
}
var je = N, Kr = Gn, Hn = bt(), Vn = he, zn = xr();
function Jr(r) {
  if (r.cancelToken && r.cancelToken.throwIfRequested(), r.signal && r.signal.aborted)
    throw new zn();
}
var Kn = function(e) {
  Jr(e), e.headers = e.headers || {}, e.data = Kr.call(
    e,
    e.data,
    e.headers,
    e.transformRequest
  ), e.headers = je.merge(
    e.headers.common || {},
    e.headers[e.method] || {},
    e.headers
  ), je.forEach(
    ["delete", "get", "head", "post", "put", "patch", "common"],
    function(s) {
      delete e.headers[s];
    }
  );
  var t = e.adapter || Vn.adapter;
  return t(e).then(function(s) {
    return Jr(e), s.data = Kr.call(
      e,
      s.data,
      s.headers,
      e.transformResponse
    ), s;
  }, function(s) {
    return Hn(s) || (Jr(e), s && s.response && (s.response.data = Kr.call(
      e,
      s.response.data,
      s.response.headers,
      e.transformResponse
    ))), Promise.reject(s);
  });
}, D = N, At = function(e, t) {
  t = t || {};
  var a = {};
  function s(_, R) {
    return D.isPlainObject(_) && D.isPlainObject(R) ? D.merge(_, R) : D.isPlainObject(R) ? D.merge({}, R) : D.isArray(R) ? R.slice() : R;
  }
  function l(_) {
    if (D.isUndefined(t[_])) {
      if (!D.isUndefined(e[_]))
        return s(void 0, e[_]);
    } else
      return s(e[_], t[_]);
  }
  function f(_) {
    if (!D.isUndefined(t[_]))
      return s(void 0, t[_]);
  }
  function p(_) {
    if (D.isUndefined(t[_])) {
      if (!D.isUndefined(e[_]))
        return s(void 0, e[_]);
    } else
      return s(void 0, t[_]);
  }
  function v(_) {
    if (_ in t)
      return s(e[_], t[_]);
    if (_ in e)
      return s(void 0, e[_]);
  }
  var m = {
    url: f,
    method: f,
    data: f,
    baseURL: p,
    transformRequest: p,
    transformResponse: p,
    paramsSerializer: p,
    timeout: p,
    timeoutMessage: p,
    withCredentials: p,
    adapter: p,
    responseType: p,
    xsrfCookieName: p,
    xsrfHeaderName: p,
    onUploadProgress: p,
    onDownloadProgress: p,
    decompress: p,
    maxContentLength: p,
    maxBodyLength: p,
    beforeRedirect: p,
    transport: p,
    httpAgent: p,
    httpsAgent: p,
    cancelToken: p,
    socketPath: p,
    responseEncoding: p,
    validateStatus: v
  };
  return D.forEach(Object.keys(e).concat(Object.keys(t)), function(R) {
    var g = m[R] || l, x = g(R);
    D.isUndefined(x) && g !== v || (a[R] = x);
  }), a;
}, Wr, Le;
function Rt() {
  return Le || (Le = 1, Wr = {
    version: "0.27.2"
  }), Wr;
}
var Jn = Rt().version, W = or, pe = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach(function(r, e) {
  pe[r] = function(a) {
    return typeof a === r || "a" + (e < 1 ? "n " : " ") + r;
  };
});
var De = {};
pe.transitional = function(e, t, a) {
  function s(l, f) {
    return "[Axios v" + Jn + "] Transitional option '" + l + "'" + f + (a ? ". " + a : "");
  }
  return function(l, f, p) {
    if (e === !1)
      throw new W(
        s(f, " has been removed" + (t ? " in " + t : "")),
        W.ERR_DEPRECATED
      );
    return t && !De[f] && (De[f] = !0, console.warn(
      s(
        f,
        " has been deprecated since v" + t + " and will be removed in the near future"
      )
    )), e ? e(l, f, p) : !0;
  };
};
function Wn(r, e, t) {
  if (typeof r != "object")
    throw new W("options must be an object", W.ERR_BAD_OPTION_VALUE);
  for (var a = Object.keys(r), s = a.length; s-- > 0; ) {
    var l = a[s], f = e[l];
    if (f) {
      var p = r[l], v = p === void 0 || f(p, l, r);
      if (v !== !0)
        throw new W("option " + l + " must be " + v, W.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (t !== !0)
      throw new W("Unknown option " + l, W.ERR_BAD_OPTION);
  }
}
var Yn = {
  assertOptions: Wn,
  validators: pe
}, wt = N, Xn = vt, Fe = bn, Be = Kn, Pr = At, Qn = Ot, St = Yn, nr = St.validators;
function ar(r) {
  this.defaults = r, this.interceptors = {
    request: new Fe(),
    response: new Fe()
  };
}
ar.prototype.request = function(e, t) {
  typeof e == "string" ? (t = t || {}, t.url = e) : t = e || {}, t = Pr(this.defaults, t), t.method ? t.method = t.method.toLowerCase() : this.defaults.method ? t.method = this.defaults.method.toLowerCase() : t.method = "get";
  var a = t.transitional;
  a !== void 0 && St.assertOptions(a, {
    silentJSONParsing: nr.transitional(nr.boolean),
    forcedJSONParsing: nr.transitional(nr.boolean),
    clarifyTimeoutError: nr.transitional(nr.boolean)
  }, !1);
  var s = [], l = !0;
  this.interceptors.request.forEach(function(x) {
    typeof x.runWhen == "function" && x.runWhen(t) === !1 || (l = l && x.synchronous, s.unshift(x.fulfilled, x.rejected));
  });
  var f = [];
  this.interceptors.response.forEach(function(x) {
    f.push(x.fulfilled, x.rejected);
  });
  var p;
  if (!l) {
    var v = [Be, void 0];
    for (Array.prototype.unshift.apply(v, s), v = v.concat(f), p = Promise.resolve(t); v.length; )
      p = p.then(v.shift(), v.shift());
    return p;
  }
  for (var m = t; s.length; ) {
    var _ = s.shift(), R = s.shift();
    try {
      m = _(m);
    } catch (g) {
      R(g);
      break;
    }
  }
  try {
    p = Be(m);
  } catch (g) {
    return Promise.reject(g);
  }
  for (; f.length; )
    p = p.then(f.shift(), f.shift());
  return p;
};
ar.prototype.getUri = function(e) {
  e = Pr(this.defaults, e);
  var t = Qn(e.baseURL, e.url);
  return Xn(t, e.params, e.paramsSerializer);
};
wt.forEach(["delete", "get", "head", "options"], function(e) {
  ar.prototype[e] = function(t, a) {
    return this.request(Pr(a || {}, {
      method: e,
      url: t,
      data: (a || {}).data
    }));
  };
});
wt.forEach(["post", "put", "patch"], function(e) {
  function t(a) {
    return function(l, f, p) {
      return this.request(Pr(p || {}, {
        method: e,
        headers: a ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: l,
        data: f
      }));
    };
  }
  ar.prototype[e] = t(), ar.prototype[e + "Form"] = t(!0);
});
var Zn = ar, Yr, qe;
function ri() {
  if (qe)
    return Yr;
  qe = 1;
  var r = xr();
  function e(t) {
    if (typeof t != "function")
      throw new TypeError("executor must be a function.");
    var a;
    this.promise = new Promise(function(f) {
      a = f;
    });
    var s = this;
    this.promise.then(function(l) {
      if (!!s._listeners) {
        var f, p = s._listeners.length;
        for (f = 0; f < p; f++)
          s._listeners[f](l);
        s._listeners = null;
      }
    }), this.promise.then = function(l) {
      var f, p = new Promise(function(v) {
        s.subscribe(v), f = v;
      }).then(l);
      return p.cancel = function() {
        s.unsubscribe(f);
      }, p;
    }, t(function(f) {
      s.reason || (s.reason = new r(f), a(s.reason));
    });
  }
  return e.prototype.throwIfRequested = function() {
    if (this.reason)
      throw this.reason;
  }, e.prototype.subscribe = function(a) {
    if (this.reason) {
      a(this.reason);
      return;
    }
    this._listeners ? this._listeners.push(a) : this._listeners = [a];
  }, e.prototype.unsubscribe = function(a) {
    if (!!this._listeners) {
      var s = this._listeners.indexOf(a);
      s !== -1 && this._listeners.splice(s, 1);
    }
  }, e.source = function() {
    var a, s = new e(function(f) {
      a = f;
    });
    return {
      token: s,
      cancel: a
    };
  }, Yr = e, Yr;
}
var Xr, ke;
function ei() {
  return ke || (ke = 1, Xr = function(e) {
    return function(a) {
      return e.apply(null, a);
    };
  }), Xr;
}
var Qr, Ge;
function ti() {
  if (Ge)
    return Qr;
  Ge = 1;
  var r = N;
  return Qr = function(t) {
    return r.isObject(t) && t.isAxiosError === !0;
  }, Qr;
}
var He = N, ni = ht, wr = Zn, ii = At, ai = he;
function Tt(r) {
  var e = new wr(r), t = ni(wr.prototype.request, e);
  return He.extend(t, wr.prototype, e), He.extend(t, e), t.create = function(s) {
    return Tt(ii(r, s));
  }, t;
}
var L = Tt(ai);
L.Axios = wr;
L.CanceledError = xr();
L.CancelToken = ri();
L.isCancel = bt();
L.VERSION = Rt().version;
L.toFormData = _t;
L.AxiosError = or;
L.Cancel = L.CanceledError;
L.all = function(e) {
  return Promise.all(e);
};
L.spread = ei();
L.isAxiosError = ti();
oe.exports = L;
oe.exports.default = L;
(function(r) {
  r.exports = oe.exports;
})(ct);
const $t = /* @__PURE__ */ Qt(ct.exports);
var xt = { exports: {} };
(function(r) {
  (function(e, t) {
    r.exports ? r.exports = t() : e.tv4 = t();
  })(vr, function() {
    Object.keys || (Object.keys = function() {
      var o = Object.prototype.hasOwnProperty, n = !{ toString: null }.propertyIsEnumerable("toString"), i = [
        "toString",
        "toLocaleString",
        "valueOf",
        "hasOwnProperty",
        "isPrototypeOf",
        "propertyIsEnumerable",
        "constructor"
      ], u = i.length;
      return function(h) {
        if (typeof h != "object" && typeof h != "function" || h === null)
          throw new TypeError("Object.keys called on non-object");
        var c = [];
        for (var d in h)
          o.call(h, d) && c.push(d);
        if (n)
          for (var y = 0; y < u; y++)
            o.call(h, i[y]) && c.push(i[y]);
        return c;
      };
    }()), Object.create || (Object.create = function() {
      function o() {
      }
      return function(n) {
        if (arguments.length !== 1)
          throw new Error("Object.create implementation only accepts one parameter.");
        return o.prototype = n, new o();
      };
    }()), Array.isArray || (Array.isArray = function(o) {
      return Object.prototype.toString.call(o) === "[object Array]";
    }), Array.prototype.indexOf || (Array.prototype.indexOf = function(o) {
      if (this === null)
        throw new TypeError();
      var n = Object(this), i = n.length >>> 0;
      if (i === 0)
        return -1;
      var u = 0;
      if (arguments.length > 1 && (u = Number(arguments[1]), u !== u ? u = 0 : u !== 0 && u !== 1 / 0 && u !== -1 / 0 && (u = (u > 0 || -1) * Math.floor(Math.abs(u)))), u >= i)
        return -1;
      for (var h = u >= 0 ? u : Math.max(i - Math.abs(u), 0); h < i; h++)
        if (h in n && n[h] === o)
          return h;
      return -1;
    }), Object.isFrozen || (Object.isFrozen = function(o) {
      for (var n = "tv4_test_frozen_key"; o.hasOwnProperty(n); )
        n += Math.random();
      try {
        return o[n] = !0, delete o[n], !1;
      } catch {
        return !0;
      }
    });
    var e = {
      "+": !0,
      "#": !0,
      ".": !0,
      "/": !0,
      ";": !0,
      "?": !0,
      "&": !0
    }, t = {
      "*": !0
    };
    function a(o) {
      return encodeURI(o).replace(/%25[0-9][0-9]/g, function(n) {
        return "%" + n.substring(3);
      });
    }
    function s(o) {
      var n = "";
      e[o.charAt(0)] && (n = o.charAt(0), o = o.substring(1));
      var i = "", u = "", h = !0, c = !1, d = !1;
      n === "+" ? h = !1 : n === "." ? (u = ".", i = ".") : n === "/" ? (u = "/", i = "/") : n === "#" ? (u = "#", h = !1) : n === ";" ? (u = ";", i = ";", c = !0, d = !0) : n === "?" ? (u = "?", i = "&", c = !0) : n === "&" && (u = "&", i = "&", c = !0);
      for (var y = [], E = o.split(","), A = [], C = 0; C < E.length; C++) {
        var w = E[C], S = null;
        if (w.indexOf(":") !== -1) {
          var $ = w.split(":");
          w = $[0], S = parseInt($[1], 10);
        }
        for (var M = {}; t[w.charAt(w.length - 1)]; )
          M[w.charAt(w.length - 1)] = !0, w = w.substring(0, w.length - 1);
        var H = {
          truncate: S,
          name: w,
          suffices: M
        };
        A.push(H), y.push(w);
      }
      var hr = function(Ee) {
        for (var U = "", _e = 0, _r = 0; _r < A.length; _r++) {
          var F = A[_r], P = Ee(F.name);
          if (P == null || Array.isArray(P) && P.length === 0 || typeof P == "object" && Object.keys(P).length === 0) {
            _e++;
            continue;
          }
          if (_r === _e ? U += u : U += i || ",", Array.isArray(P)) {
            c && (U += F.name + "=");
            for (var pr = 0; pr < P.length; pr++)
              pr > 0 && (U += F.suffices["*"] && i || ",", F.suffices["*"] && c && (U += F.name + "=")), U += h ? encodeURIComponent(P[pr]).replace(/!/g, "%21") : a(P[pr]);
          } else if (typeof P == "object") {
            c && !F.suffices["*"] && (U += F.name + "=");
            var Oe = !0;
            for (var Or in P)
              Oe || (U += F.suffices["*"] && i || ","), Oe = !1, U += h ? encodeURIComponent(Or).replace(/!/g, "%21") : a(Or), U += F.suffices["*"] ? "=" : ",", U += h ? encodeURIComponent(P[Or]).replace(/!/g, "%21") : a(P[Or]);
          } else
            c && (U += F.name, (!d || P !== "") && (U += "=")), F.truncate != null && (P = P.substring(0, F.truncate)), U += h ? encodeURIComponent(P).replace(/!/g, "%21") : a(P);
        }
        return U;
      };
      return hr.varNames = y, {
        prefix: u,
        substitution: hr
      };
    }
    function l(o) {
      if (!(this instanceof l))
        return new l(o);
      for (var n = o.split("{"), i = [n.shift()], u = [], h = [], c = []; n.length > 0; ) {
        var d = n.shift(), y = d.split("}")[0], E = d.substring(y.length + 1), A = s(y);
        h.push(A.substitution), u.push(A.prefix), i.push(E), c = c.concat(A.substitution.varNames);
      }
      this.fill = function(C) {
        for (var w = i[0], S = 0; S < h.length; S++) {
          var $ = h[S];
          w += $(C), w += i[S + 1];
        }
        return w;
      }, this.varNames = c, this.template = o;
    }
    l.prototype = {
      toString: function() {
        return this.template;
      },
      fillFromObject: function(o) {
        return this.fill(function(n) {
          return o[n];
        });
      }
    };
    var f = function(n, i, u, h, c) {
      if (this.missing = [], this.missingMap = {}, this.formatValidators = n ? Object.create(n.formatValidators) : {}, this.schemas = n ? Object.create(n.schemas) : {}, this.collectMultiple = i, this.errors = [], this.handleError = i ? this.collectError : this.returnError, h && (this.checkRecursive = !0, this.scanned = [], this.scannedFrozen = [], this.scannedFrozenSchemas = [], this.scannedFrozenValidationErrors = [], this.validatedSchemasKey = "tv4_validation_id", this.validationErrorsKey = "tv4_validation_errors_id"), c && (this.trackUnknownProperties = !0, this.knownPropertyPaths = {}, this.unknownPropertyPaths = {}), this.errorReporter = u || z("en"), typeof this.errorReporter == "string")
        throw new Error("debug");
      if (this.definedKeywords = {}, n)
        for (var d in n.definedKeywords)
          this.definedKeywords[d] = n.definedKeywords[d].slice(0);
    };
    f.prototype.defineKeyword = function(o, n) {
      this.definedKeywords[o] = this.definedKeywords[o] || [], this.definedKeywords[o].push(n);
    }, f.prototype.createError = function(o, n, i, u, h, c, d) {
      var y = new j(o, n, i, u, h);
      return y.message = this.errorReporter(y, c, d), y;
    }, f.prototype.returnError = function(o) {
      return o;
    }, f.prototype.collectError = function(o) {
      return o && this.errors.push(o), null;
    }, f.prototype.prefixErrors = function(o, n, i) {
      for (var u = o; u < this.errors.length; u++)
        this.errors[u] = this.errors[u].prefixWith(n, i);
      return this;
    }, f.prototype.banUnknownProperties = function(o, n) {
      for (var i in this.unknownPropertyPaths) {
        var u = this.createError(b.UNKNOWN_PROPERTY, { path: i }, i, "", null, o, n), h = this.handleError(u);
        if (h)
          return h;
      }
      return null;
    }, f.prototype.addFormat = function(o, n) {
      if (typeof o == "object") {
        for (var i in o)
          this.addFormat(i, o[i]);
        return this;
      }
      this.formatValidators[o] = n;
    }, f.prototype.resolveRefs = function(o, n) {
      if (o.$ref !== void 0) {
        if (n = n || {}, n[o.$ref])
          return this.createError(b.CIRCULAR_REFERENCE, { urls: Object.keys(n).join(", ") }, "", "", null, void 0, o);
        n[o.$ref] = !0, o = this.getSchema(o.$ref, n);
      }
      return o;
    }, f.prototype.getSchema = function(o, n) {
      var i;
      if (this.schemas[o] !== void 0)
        return i = this.schemas[o], this.resolveRefs(i, n);
      var u = o, h = "";
      if (o.indexOf("#") !== -1 && (h = o.substring(o.indexOf("#") + 1), u = o.substring(0, o.indexOf("#"))), typeof this.schemas[u] == "object") {
        i = this.schemas[u];
        var c = decodeURIComponent(h);
        if (c === "")
          return this.resolveRefs(i, n);
        if (c.charAt(0) !== "/")
          return;
        for (var d = c.split("/").slice(1), y = 0; y < d.length; y++) {
          var E = d[y].replace(/~1/g, "/").replace(/~0/g, "~");
          if (i[E] === void 0) {
            i = void 0;
            break;
          }
          i = i[E];
        }
        if (i !== void 0)
          return this.resolveRefs(i, n);
      }
      this.missing[u] === void 0 && (this.missing.push(u), this.missing[u] = u, this.missingMap[u] = u);
    }, f.prototype.searchSchemas = function(o, n) {
      if (Array.isArray(o))
        for (var i = 0; i < o.length; i++)
          this.searchSchemas(o[i], n);
      else if (o && typeof o == "object") {
        typeof o.id == "string" && mr(n, o.id) && this.schemas[o.id] === void 0 && (this.schemas[o.id] = o);
        for (var u in o)
          if (u !== "enum") {
            if (typeof o[u] == "object")
              this.searchSchemas(o[u], n);
            else if (u === "$ref") {
              var h = g(o[u]);
              h && this.schemas[h] === void 0 && this.missingMap[h] === void 0 && (this.missingMap[h] = h);
            }
          }
      }
    }, f.prototype.addSchema = function(o, n) {
      if (typeof o != "string" || typeof n > "u")
        if (typeof o == "object" && typeof o.id == "string")
          n = o, o = n.id;
        else
          return;
      o === g(o) + "#" && (o = g(o)), this.schemas[o] = n, delete this.missingMap[o], x(n, o), this.searchSchemas(n, o);
    }, f.prototype.getSchemaMap = function() {
      var o = {};
      for (var n in this.schemas)
        o[n] = this.schemas[n];
      return o;
    }, f.prototype.getSchemaUris = function(o) {
      var n = [];
      for (var i in this.schemas)
        (!o || o.test(i)) && n.push(i);
      return n;
    }, f.prototype.getMissingUris = function(o) {
      var n = [];
      for (var i in this.missingMap)
        (!o || o.test(i)) && n.push(i);
      return n;
    }, f.prototype.dropSchemas = function() {
      this.schemas = {}, this.reset();
    }, f.prototype.reset = function() {
      this.missing = [], this.missingMap = {}, this.errors = [];
    }, f.prototype.validateAll = function(o, n, i, u, h) {
      var c;
      if (n = this.resolveRefs(n), n) {
        if (n instanceof j)
          return this.errors.push(n), n;
      } else
        return null;
      var d = this.errors.length, y, E = null, A = null;
      if (this.checkRecursive && o && typeof o == "object") {
        if (c = !this.scanned.length, o[this.validatedSchemasKey]) {
          var C = o[this.validatedSchemasKey].indexOf(n);
          if (C !== -1)
            return this.errors = this.errors.concat(o[this.validationErrorsKey][C]), null;
        }
        if (Object.isFrozen(o) && (y = this.scannedFrozen.indexOf(o), y !== -1)) {
          var w = this.scannedFrozenSchemas[y].indexOf(n);
          if (w !== -1)
            return this.errors = this.errors.concat(this.scannedFrozenValidationErrors[y][w]), null;
        }
        if (this.scanned.push(o), Object.isFrozen(o))
          y === -1 && (y = this.scannedFrozen.length, this.scannedFrozen.push(o), this.scannedFrozenSchemas.push([])), E = this.scannedFrozenSchemas[y].length, this.scannedFrozenSchemas[y][E] = n, this.scannedFrozenValidationErrors[y][E] = [];
        else {
          if (!o[this.validatedSchemasKey])
            try {
              Object.defineProperty(o, this.validatedSchemasKey, {
                value: [],
                configurable: !0
              }), Object.defineProperty(o, this.validationErrorsKey, {
                value: [],
                configurable: !0
              });
            } catch {
              o[this.validatedSchemasKey] = [], o[this.validationErrorsKey] = [];
            }
          A = o[this.validatedSchemasKey].length, o[this.validatedSchemasKey][A] = n, o[this.validationErrorsKey][A] = [];
        }
      }
      var S = this.errors.length, $ = this.validateBasic(o, n, h) || this.validateNumeric(o, n, h) || this.validateString(o, n, h) || this.validateArray(o, n, h) || this.validateObject(o, n, h) || this.validateCombinations(o, n, h) || this.validateHypermedia(o, n, h) || this.validateFormat(o, n, h) || this.validateDefinedKeywords(o, n, h) || null;
      if (c) {
        for (; this.scanned.length; ) {
          var M = this.scanned.pop();
          delete M[this.validatedSchemasKey];
        }
        this.scannedFrozen = [], this.scannedFrozenSchemas = [];
      }
      if ($ || S !== this.errors.length)
        for (; i && i.length || u && u.length; ) {
          var H = i && i.length ? "" + i.pop() : null, hr = u && u.length ? "" + u.pop() : null;
          $ && ($ = $.prefixWith(H, hr)), this.prefixErrors(S, H, hr);
        }
      return E !== null ? this.scannedFrozenValidationErrors[y][E] = this.errors.slice(d) : A !== null && (o[this.validationErrorsKey][A] = this.errors.slice(d)), this.handleError($);
    }, f.prototype.validateFormat = function(o, n) {
      if (typeof n.format != "string" || !this.formatValidators[n.format])
        return null;
      var i = this.formatValidators[n.format].call(null, o, n);
      return typeof i == "string" || typeof i == "number" ? this.createError(b.FORMAT_CUSTOM, { message: i }, "", "/format", null, o, n) : i && typeof i == "object" ? this.createError(b.FORMAT_CUSTOM, { message: i.message || "?" }, i.dataPath || "", i.schemaPath || "/format", null, o, n) : null;
    }, f.prototype.validateDefinedKeywords = function(o, n, i) {
      for (var u in this.definedKeywords)
        if (!(typeof n[u] > "u"))
          for (var h = this.definedKeywords[u], c = 0; c < h.length; c++) {
            var d = h[c], y = d(o, n[u], n, i);
            if (typeof y == "string" || typeof y == "number")
              return this.createError(b.KEYWORD_CUSTOM, { key: u, message: y }, "", "", null, o, n).prefixWith(null, u);
            if (y && typeof y == "object") {
              var E = y.code;
              if (typeof E == "string") {
                if (!b[E])
                  throw new Error("Undefined error code (use defineError): " + E);
                E = b[E];
              } else
                typeof E != "number" && (E = b.KEYWORD_CUSTOM);
              var A = typeof y.message == "object" ? y.message : { key: u, message: y.message || "?" }, C = y.schemaPath || "/" + u.replace(/~/g, "~0").replace(/\//g, "~1");
              return this.createError(E, A, y.dataPath || null, C, null, o, n);
            }
          }
      return null;
    };
    function p(o, n) {
      if (o === n)
        return !0;
      if (o && n && typeof o == "object" && typeof n == "object") {
        if (Array.isArray(o) !== Array.isArray(n))
          return !1;
        if (Array.isArray(o)) {
          if (o.length !== n.length)
            return !1;
          for (var i = 0; i < o.length; i++)
            if (!p(o[i], n[i]))
              return !1;
        } else {
          var u;
          for (u in o)
            if (n[u] === void 0 && o[u] !== void 0)
              return !1;
          for (u in n)
            if (o[u] === void 0 && n[u] !== void 0)
              return !1;
          for (u in o)
            if (!p(o[u], n[u]))
              return !1;
        }
        return !0;
      }
      return !1;
    }
    f.prototype.validateBasic = function(n, i, u) {
      var h;
      return (h = this.validateType(n, i, u)) || (h = this.validateEnum(n, i, u)) ? h.prefixWith(null, "type") : null;
    }, f.prototype.validateType = function(n, i) {
      if (i.type === void 0)
        return null;
      var u = typeof n;
      n === null ? u = "null" : Array.isArray(n) && (u = "array");
      var h = i.type;
      Array.isArray(h) || (h = [h]);
      for (var c = 0; c < h.length; c++) {
        var d = h[c];
        if (d === u || d === "integer" && u === "number" && n % 1 === 0)
          return null;
      }
      return this.createError(b.INVALID_TYPE, { type: u, expected: h.join("/") }, "", "", null, n, i);
    }, f.prototype.validateEnum = function(n, i) {
      if (i.enum === void 0)
        return null;
      for (var u = 0; u < i.enum.length; u++) {
        var h = i.enum[u];
        if (p(n, h))
          return null;
      }
      return this.createError(b.ENUM_MISMATCH, { value: typeof JSON < "u" ? JSON.stringify(n) : n }, "", "", null, n, i);
    }, f.prototype.validateNumeric = function(n, i, u) {
      return this.validateMultipleOf(n, i, u) || this.validateMinMax(n, i, u) || this.validateNaN(n, i, u) || null;
    };
    var v = Math.pow(2, -51), m = 1 - v;
    f.prototype.validateMultipleOf = function(n, i) {
      var u = i.multipleOf || i.divisibleBy;
      if (u === void 0)
        return null;
      if (typeof n == "number") {
        var h = n / u % 1;
        if (h >= v && h < m)
          return this.createError(b.NUMBER_MULTIPLE_OF, { value: n, multipleOf: u }, "", "", null, n, i);
      }
      return null;
    }, f.prototype.validateMinMax = function(n, i) {
      if (typeof n != "number")
        return null;
      if (i.minimum !== void 0) {
        if (n < i.minimum)
          return this.createError(b.NUMBER_MINIMUM, { value: n, minimum: i.minimum }, "", "/minimum", null, n, i);
        if (i.exclusiveMinimum && n === i.minimum)
          return this.createError(b.NUMBER_MINIMUM_EXCLUSIVE, { value: n, minimum: i.minimum }, "", "/exclusiveMinimum", null, n, i);
      }
      if (i.maximum !== void 0) {
        if (n > i.maximum)
          return this.createError(b.NUMBER_MAXIMUM, { value: n, maximum: i.maximum }, "", "/maximum", null, n, i);
        if (i.exclusiveMaximum && n === i.maximum)
          return this.createError(b.NUMBER_MAXIMUM_EXCLUSIVE, { value: n, maximum: i.maximum }, "", "/exclusiveMaximum", null, n, i);
      }
      return null;
    }, f.prototype.validateNaN = function(n, i) {
      return typeof n != "number" ? null : isNaN(n) === !0 || n === 1 / 0 || n === -1 / 0 ? this.createError(b.NUMBER_NOT_A_NUMBER, { value: n }, "", "/type", null, n, i) : null;
    }, f.prototype.validateString = function(n, i, u) {
      return this.validateStringLength(n, i, u) || this.validateStringPattern(n, i, u) || null;
    }, f.prototype.validateStringLength = function(n, i) {
      return typeof n != "string" ? null : i.minLength !== void 0 && n.length < i.minLength ? this.createError(b.STRING_LENGTH_SHORT, { length: n.length, minimum: i.minLength }, "", "/minLength", null, n, i) : i.maxLength !== void 0 && n.length > i.maxLength ? this.createError(b.STRING_LENGTH_LONG, { length: n.length, maximum: i.maxLength }, "", "/maxLength", null, n, i) : null;
    }, f.prototype.validateStringPattern = function(n, i) {
      if (typeof n != "string" || typeof i.pattern != "string" && !(i.pattern instanceof RegExp))
        return null;
      var u;
      if (i.pattern instanceof RegExp)
        u = i.pattern;
      else {
        var h, c = "", d = i.pattern.match(/^\/(.+)\/([img]*)$/);
        d ? (h = d[1], c = d[2]) : h = i.pattern, u = new RegExp(h, c);
      }
      return u.test(n) ? null : this.createError(b.STRING_PATTERN, { pattern: i.pattern }, "", "/pattern", null, n, i);
    }, f.prototype.validateArray = function(n, i, u) {
      return Array.isArray(n) && (this.validateArrayLength(n, i, u) || this.validateArrayUniqueItems(n, i, u) || this.validateArrayItems(n, i, u)) || null;
    }, f.prototype.validateArrayLength = function(n, i) {
      var u;
      return i.minItems !== void 0 && n.length < i.minItems && (u = this.createError(b.ARRAY_LENGTH_SHORT, { length: n.length, minimum: i.minItems }, "", "/minItems", null, n, i), this.handleError(u)) || i.maxItems !== void 0 && n.length > i.maxItems && (u = this.createError(b.ARRAY_LENGTH_LONG, { length: n.length, maximum: i.maxItems }, "", "/maxItems", null, n, i), this.handleError(u)) ? u : null;
    }, f.prototype.validateArrayUniqueItems = function(n, i) {
      if (i.uniqueItems) {
        for (var u = 0; u < n.length; u++)
          for (var h = u + 1; h < n.length; h++)
            if (p(n[u], n[h])) {
              var c = this.createError(b.ARRAY_UNIQUE, { match1: u, match2: h }, "", "/uniqueItems", null, n, i);
              if (this.handleError(c))
                return c;
            }
      }
      return null;
    }, f.prototype.validateArrayItems = function(n, i, u) {
      if (i.items === void 0)
        return null;
      var h, c;
      if (Array.isArray(i.items)) {
        for (c = 0; c < n.length; c++)
          if (c < i.items.length) {
            if (h = this.validateAll(n[c], i.items[c], [c], ["items", c], u + "/" + c))
              return h;
          } else if (i.additionalItems !== void 0) {
            if (typeof i.additionalItems == "boolean") {
              if (!i.additionalItems && (h = this.createError(b.ARRAY_ADDITIONAL_ITEMS, {}, "/" + c, "/additionalItems", null, n, i), this.handleError(h)))
                return h;
            } else if (h = this.validateAll(n[c], i.additionalItems, [c], ["additionalItems"], u + "/" + c))
              return h;
          }
      } else
        for (c = 0; c < n.length; c++)
          if (h = this.validateAll(n[c], i.items, [c], ["items"], u + "/" + c))
            return h;
      return null;
    }, f.prototype.validateObject = function(n, i, u) {
      return typeof n != "object" || n === null || Array.isArray(n) ? null : this.validateObjectMinMaxProperties(n, i, u) || this.validateObjectRequiredProperties(n, i, u) || this.validateObjectProperties(n, i, u) || this.validateObjectDependencies(n, i, u) || null;
    }, f.prototype.validateObjectMinMaxProperties = function(n, i) {
      var u = Object.keys(n), h;
      return i.minProperties !== void 0 && u.length < i.minProperties && (h = this.createError(b.OBJECT_PROPERTIES_MINIMUM, { propertyCount: u.length, minimum: i.minProperties }, "", "/minProperties", null, n, i), this.handleError(h)) || i.maxProperties !== void 0 && u.length > i.maxProperties && (h = this.createError(b.OBJECT_PROPERTIES_MAXIMUM, { propertyCount: u.length, maximum: i.maxProperties }, "", "/maxProperties", null, n, i), this.handleError(h)) ? h : null;
    }, f.prototype.validateObjectRequiredProperties = function(n, i) {
      if (i.required !== void 0)
        for (var u = 0; u < i.required.length; u++) {
          var h = i.required[u];
          if (n[h] === void 0) {
            var c = this.createError(b.OBJECT_REQUIRED, { key: h }, "", "/required/" + u, null, n, i);
            if (this.handleError(c))
              return c;
          }
        }
      return null;
    }, f.prototype.validateObjectProperties = function(n, i, u) {
      var h;
      for (var c in n) {
        var d = u + "/" + c.replace(/~/g, "~0").replace(/\//g, "~1"), y = !1;
        if (i.properties !== void 0 && i.properties[c] !== void 0 && (y = !0, h = this.validateAll(n[c], i.properties[c], [c], ["properties", c], d)))
          return h;
        if (i.patternProperties !== void 0)
          for (var E in i.patternProperties) {
            var A = new RegExp(E);
            if (A.test(c) && (y = !0, h = this.validateAll(n[c], i.patternProperties[E], [c], ["patternProperties", E], d)))
              return h;
          }
        if (y)
          this.trackUnknownProperties && (this.knownPropertyPaths[d] = !0, delete this.unknownPropertyPaths[d]);
        else if (i.additionalProperties !== void 0) {
          if (this.trackUnknownProperties && (this.knownPropertyPaths[d] = !0, delete this.unknownPropertyPaths[d]), typeof i.additionalProperties == "boolean") {
            if (!i.additionalProperties && (h = this.createError(b.OBJECT_ADDITIONAL_PROPERTIES, { key: c }, "", "/additionalProperties", null, n, i).prefixWith(c, null), this.handleError(h)))
              return h;
          } else if (h = this.validateAll(n[c], i.additionalProperties, [c], ["additionalProperties"], d))
            return h;
        } else
          this.trackUnknownProperties && !this.knownPropertyPaths[d] && (this.unknownPropertyPaths[d] = !0);
      }
      return null;
    }, f.prototype.validateObjectDependencies = function(n, i, u) {
      var h;
      if (i.dependencies !== void 0) {
        for (var c in i.dependencies)
          if (n[c] !== void 0) {
            var d = i.dependencies[c];
            if (typeof d == "string") {
              if (n[d] === void 0 && (h = this.createError(b.OBJECT_DEPENDENCY_KEY, { key: c, missing: d }, "", "", null, n, i).prefixWith(null, c).prefixWith(null, "dependencies"), this.handleError(h)))
                return h;
            } else if (Array.isArray(d))
              for (var y = 0; y < d.length; y++) {
                var E = d[y];
                if (n[E] === void 0 && (h = this.createError(b.OBJECT_DEPENDENCY_KEY, { key: c, missing: E }, "", "/" + y, null, n, i).prefixWith(null, c).prefixWith(null, "dependencies"), this.handleError(h)))
                  return h;
              }
            else if (h = this.validateAll(n, d, [], ["dependencies", c], u))
              return h;
          }
      }
      return null;
    }, f.prototype.validateCombinations = function(n, i, u) {
      return this.validateAllOf(n, i, u) || this.validateAnyOf(n, i, u) || this.validateOneOf(n, i, u) || this.validateNot(n, i, u) || null;
    }, f.prototype.validateAllOf = function(n, i, u) {
      if (i.allOf === void 0)
        return null;
      for (var h, c = 0; c < i.allOf.length; c++) {
        var d = i.allOf[c];
        if (h = this.validateAll(n, d, [], ["allOf", c], u))
          return h;
      }
      return null;
    }, f.prototype.validateAnyOf = function(n, i, u) {
      if (i.anyOf === void 0)
        return null;
      var h = [], c = this.errors.length, d, y;
      this.trackUnknownProperties && (d = this.unknownPropertyPaths, y = this.knownPropertyPaths);
      for (var E = !0, A = 0; A < i.anyOf.length; A++) {
        this.trackUnknownProperties && (this.unknownPropertyPaths = {}, this.knownPropertyPaths = {});
        var C = i.anyOf[A], w = this.errors.length, S = this.validateAll(n, C, [], ["anyOf", A], u);
        if (S === null && w === this.errors.length) {
          if (this.errors = this.errors.slice(0, c), this.trackUnknownProperties) {
            for (var $ in this.knownPropertyPaths)
              y[$] = !0, delete d[$];
            for (var M in this.unknownPropertyPaths)
              y[M] || (d[M] = !0);
            E = !1;
            continue;
          }
          return null;
        }
        S && h.push(S.prefixWith(null, "" + A).prefixWith(null, "anyOf"));
      }
      if (this.trackUnknownProperties && (this.unknownPropertyPaths = d, this.knownPropertyPaths = y), E)
        return h = h.concat(this.errors.slice(c)), this.errors = this.errors.slice(0, c), this.createError(b.ANY_OF_MISSING, {}, "", "/anyOf", h, n, i);
    }, f.prototype.validateOneOf = function(n, i, u) {
      if (i.oneOf === void 0)
        return null;
      var h = null, c = [], d = this.errors.length, y, E;
      this.trackUnknownProperties && (y = this.unknownPropertyPaths, E = this.knownPropertyPaths);
      for (var A = 0; A < i.oneOf.length; A++) {
        this.trackUnknownProperties && (this.unknownPropertyPaths = {}, this.knownPropertyPaths = {});
        var C = i.oneOf[A], w = this.errors.length, S = this.validateAll(n, C, [], ["oneOf", A], u);
        if (S === null && w === this.errors.length) {
          if (h === null)
            h = A;
          else
            return this.errors = this.errors.slice(0, d), this.createError(b.ONE_OF_MULTIPLE, { index1: h, index2: A }, "", "/oneOf", null, n, i);
          if (this.trackUnknownProperties) {
            for (var $ in this.knownPropertyPaths)
              E[$] = !0, delete y[$];
            for (var M in this.unknownPropertyPaths)
              E[M] || (y[M] = !0);
          }
        } else
          S && c.push(S);
      }
      return this.trackUnknownProperties && (this.unknownPropertyPaths = y, this.knownPropertyPaths = E), h === null ? (c = c.concat(this.errors.slice(d)), this.errors = this.errors.slice(0, d), this.createError(b.ONE_OF_MISSING, {}, "", "/oneOf", c, n, i)) : (this.errors = this.errors.slice(0, d), null);
    }, f.prototype.validateNot = function(n, i, u) {
      if (i.not === void 0)
        return null;
      var h = this.errors.length, c, d;
      this.trackUnknownProperties && (c = this.unknownPropertyPaths, d = this.knownPropertyPaths, this.unknownPropertyPaths = {}, this.knownPropertyPaths = {});
      var y = this.validateAll(n, i.not, null, null, u), E = this.errors.slice(h);
      return this.errors = this.errors.slice(0, h), this.trackUnknownProperties && (this.unknownPropertyPaths = c, this.knownPropertyPaths = d), y === null && E.length === 0 ? this.createError(b.NOT_PASSED, {}, "", "/not", null, n, i) : null;
    }, f.prototype.validateHypermedia = function(n, i, u) {
      if (!i.links)
        return null;
      for (var h, c = 0; c < i.links.length; c++) {
        var d = i.links[c];
        if (d.rel === "describedby") {
          for (var y = new l(d.href), E = !0, A = 0; A < y.varNames.length; A++)
            if (!(y.varNames[A] in n)) {
              E = !1;
              break;
            }
          if (E) {
            var C = y.fillFromObject(n), w = { $ref: C };
            if (h = this.validateAll(n, w, [], ["links", c], u))
              return h;
          }
        }
      }
    };
    function _(o) {
      var n = String(o).replace(/^\s+|\s+$/g, "").match(/^([^:\/?#]+:)?(\/\/(?:[^:@]*(?::[^:@]*)?@)?(([^:\/?#]*)(?::(\d*))?))?([^?#]*)(\?[^#]*)?(#[\s\S]*)?/);
      return n ? {
        href: n[0] || "",
        protocol: n[1] || "",
        authority: n[2] || "",
        host: n[3] || "",
        hostname: n[4] || "",
        port: n[5] || "",
        pathname: n[6] || "",
        search: n[7] || "",
        hash: n[8] || ""
      } : null;
    }
    function R(o, n) {
      function i(u) {
        var h = [];
        return u.replace(/^(\.\.?(\/|$))+/, "").replace(/\/(\.(\/|$))+/g, "/").replace(/\/\.\.$/, "/../").replace(/\/?[^\/]*/g, function(c) {
          c === "/.." ? h.pop() : h.push(c);
        }), h.join("").replace(/^\//, u.charAt(0) === "/" ? "/" : "");
      }
      return n = _(n || ""), o = _(o || ""), !n || !o ? null : (n.protocol || o.protocol) + (n.protocol || n.authority ? n.authority : o.authority) + i(n.protocol || n.authority || n.pathname.charAt(0) === "/" ? n.pathname : n.pathname ? (o.authority && !o.pathname ? "/" : "") + o.pathname.slice(0, o.pathname.lastIndexOf("/") + 1) + n.pathname : o.pathname) + (n.protocol || n.authority || n.pathname ? n.search : n.search || o.search) + n.hash;
    }
    function g(o) {
      return o.split("#")[0];
    }
    function x(o, n) {
      if (o && typeof o == "object")
        if (n === void 0 ? n = o.id : typeof o.id == "string" && (n = R(n, o.id), o.id = n), Array.isArray(o))
          for (var i = 0; i < o.length; i++)
            x(o[i], n);
        else {
          typeof o.$ref == "string" && (o.$ref = R(n, o.$ref));
          for (var u in o)
            u !== "enum" && x(o[u], n);
        }
    }
    function z(o) {
      o = o || "en";
      var n = O[o];
      return function(i) {
        var u = n[i.code] || G[i.code];
        if (typeof u != "string")
          return "Unknown error code " + i.code + ": " + JSON.stringify(i.messageParams);
        var h = i.params;
        return u.replace(/\{([^{}]*)\}/g, function(c, d) {
          var y = h[d];
          return typeof y == "string" || typeof y == "number" ? y : c;
        });
      };
    }
    var b = {
      INVALID_TYPE: 0,
      ENUM_MISMATCH: 1,
      ANY_OF_MISSING: 10,
      ONE_OF_MISSING: 11,
      ONE_OF_MULTIPLE: 12,
      NOT_PASSED: 13,
      NUMBER_MULTIPLE_OF: 100,
      NUMBER_MINIMUM: 101,
      NUMBER_MINIMUM_EXCLUSIVE: 102,
      NUMBER_MAXIMUM: 103,
      NUMBER_MAXIMUM_EXCLUSIVE: 104,
      NUMBER_NOT_A_NUMBER: 105,
      STRING_LENGTH_SHORT: 200,
      STRING_LENGTH_LONG: 201,
      STRING_PATTERN: 202,
      OBJECT_PROPERTIES_MINIMUM: 300,
      OBJECT_PROPERTIES_MAXIMUM: 301,
      OBJECT_REQUIRED: 302,
      OBJECT_ADDITIONAL_PROPERTIES: 303,
      OBJECT_DEPENDENCY_KEY: 304,
      ARRAY_LENGTH_SHORT: 400,
      ARRAY_LENGTH_LONG: 401,
      ARRAY_UNIQUE: 402,
      ARRAY_ADDITIONAL_ITEMS: 403,
      FORMAT_CUSTOM: 500,
      KEYWORD_CUSTOM: 501,
      CIRCULAR_REFERENCE: 600,
      UNKNOWN_PROPERTY: 1e3
    }, k = {};
    for (var K in b)
      k[b[K]] = K;
    var G = {
      INVALID_TYPE: "Invalid type: {type} (expected {expected})",
      ENUM_MISMATCH: "No enum match for: {value}",
      ANY_OF_MISSING: 'Data does not match any schemas from "anyOf"',
      ONE_OF_MISSING: 'Data does not match any schemas from "oneOf"',
      ONE_OF_MULTIPLE: 'Data is valid against more than one schema from "oneOf": indices {index1} and {index2}',
      NOT_PASSED: 'Data matches schema from "not"',
      NUMBER_MULTIPLE_OF: "Value {value} is not a multiple of {multipleOf}",
      NUMBER_MINIMUM: "Value {value} is less than minimum {minimum}",
      NUMBER_MINIMUM_EXCLUSIVE: "Value {value} is equal to exclusive minimum {minimum}",
      NUMBER_MAXIMUM: "Value {value} is greater than maximum {maximum}",
      NUMBER_MAXIMUM_EXCLUSIVE: "Value {value} is equal to exclusive maximum {maximum}",
      NUMBER_NOT_A_NUMBER: "Value {value} is not a valid number",
      STRING_LENGTH_SHORT: "String is too short ({length} chars), minimum {minimum}",
      STRING_LENGTH_LONG: "String is too long ({length} chars), maximum {maximum}",
      STRING_PATTERN: "String does not match pattern: {pattern}",
      OBJECT_PROPERTIES_MINIMUM: "Too few properties defined ({propertyCount}), minimum {minimum}",
      OBJECT_PROPERTIES_MAXIMUM: "Too many properties defined ({propertyCount}), maximum {maximum}",
      OBJECT_REQUIRED: "Missing required property: {key}",
      OBJECT_ADDITIONAL_PROPERTIES: "Additional properties not allowed",
      OBJECT_DEPENDENCY_KEY: "Dependency failed - key must exist: {missing} (due to key: {key})",
      ARRAY_LENGTH_SHORT: "Array is too short ({length}), minimum {minimum}",
      ARRAY_LENGTH_LONG: "Array is too long ({length}), maximum {maximum}",
      ARRAY_UNIQUE: "Array items are not unique (indices {match1} and {match2})",
      ARRAY_ADDITIONAL_ITEMS: "Additional items not allowed",
      FORMAT_CUSTOM: "Format validation failed ({message})",
      KEYWORD_CUSTOM: "Keyword failed: {key} ({message})",
      CIRCULAR_REFERENCE: "Circular $refs: {urls}",
      UNKNOWN_PROPERTY: "Unknown property (not in schema)"
    };
    function j(o, n, i, u, h) {
      if (Error.call(this), o === void 0)
        throw new Error("No error code supplied: " + u);
      this.message = "", this.params = n, this.code = o, this.dataPath = i || "", this.schemaPath = u || "", this.subErrors = h || null;
      var c = new Error(this.message);
      if (this.stack = c.stack || c.stacktrace, !this.stack)
        try {
          throw c;
        } catch (d) {
          this.stack = d.stack || d.stacktrace;
        }
    }
    j.prototype = Object.create(Error.prototype), j.prototype.constructor = j, j.prototype.name = "ValidationError", j.prototype.prefixWith = function(o, n) {
      if (o !== null && (o = o.replace(/~/g, "~0").replace(/\//g, "~1"), this.dataPath = "/" + o + this.dataPath), n !== null && (n = n.replace(/~/g, "~0").replace(/\//g, "~1"), this.schemaPath = "/" + n + this.schemaPath), this.subErrors !== null)
        for (var i = 0; i < this.subErrors.length; i++)
          this.subErrors[i].prefixWith(o, n);
      return this;
    };
    function mr(o, n) {
      if (n.substring(0, o.length) === o) {
        var i = n.substring(o.length);
        if (n.length > 0 && n.charAt(o.length - 1) === "/" || i.charAt(0) === "#" || i.charAt(0) === "?")
          return !0;
      }
      return !1;
    }
    var O = {};
    function Er(o) {
      var n = new f(), i, u, h = {
        setErrorReporter: function(c) {
          return typeof c == "string" ? this.language(c) : (u = c, !0);
        },
        addFormat: function() {
          n.addFormat.apply(n, arguments);
        },
        language: function(c) {
          return c ? (O[c] || (c = c.split("-")[0]), O[c] ? (i = c, c) : !1) : i;
        },
        addLanguage: function(c, d) {
          var y;
          for (y in b)
            d[y] && !d[b[y]] && (d[b[y]] = d[y]);
          var E = c.split("-")[0];
          if (!O[E])
            O[c] = d, O[E] = d;
          else {
            O[c] = Object.create(O[E]);
            for (y in d)
              typeof O[E][y] > "u" && (O[E][y] = d[y]), O[c][y] = d[y];
          }
          return this;
        },
        freshApi: function(c) {
          var d = Er();
          return c && d.language(c), d;
        },
        validate: function(c, d, y, E) {
          var A = z(i), C = u ? function($, M, H) {
            return u($, M, H) || A($, M, H);
          } : A, w = new f(n, !1, C, y, E);
          typeof d == "string" && (d = { $ref: d }), w.addSchema("", d);
          var S = w.validateAll(c, d, null, null, "");
          return !S && E && (S = w.banUnknownProperties(c, d)), this.error = S, this.missing = w.missing, this.valid = S === null, this.valid;
        },
        validateResult: function() {
          var c = { toString: function() {
            return this.valid ? "valid" : this.error.message;
          } };
          return this.validate.apply(c, arguments), c;
        },
        validateMultiple: function(c, d, y, E) {
          var A = z(i), C = u ? function($, M, H) {
            return u($, M, H) || A($, M, H);
          } : A, w = new f(n, !0, C, y, E);
          typeof d == "string" && (d = { $ref: d }), w.addSchema("", d), w.validateAll(c, d, null, null, ""), E && w.banUnknownProperties(c, d);
          var S = { toString: function() {
            return this.valid ? "valid" : this.error.message;
          } };
          return S.errors = w.errors, S.missing = w.missing, S.valid = S.errors.length === 0, S;
        },
        addSchema: function() {
          return n.addSchema.apply(n, arguments);
        },
        getSchema: function() {
          return n.getSchema.apply(n, arguments);
        },
        getSchemaMap: function() {
          return n.getSchemaMap.apply(n, arguments);
        },
        getSchemaUris: function() {
          return n.getSchemaUris.apply(n, arguments);
        },
        getMissingUris: function() {
          return n.getMissingUris.apply(n, arguments);
        },
        dropSchemas: function() {
          n.dropSchemas.apply(n, arguments);
        },
        defineKeyword: function() {
          n.defineKeyword.apply(n, arguments);
        },
        defineError: function(c, d, y) {
          if (typeof c != "string" || !/^[A-Z]+(_[A-Z]+)*$/.test(c))
            throw new Error("Code name must be a string in UPPER_CASE_WITH_UNDERSCORES");
          if (typeof d != "number" || d % 1 !== 0 || d < 1e4)
            throw new Error("Code number must be an integer > 10000");
          if (typeof b[c] < "u")
            throw new Error("Error already defined: " + c + " as " + b[c]);
          if (typeof k[d] < "u")
            throw new Error("Error code already used: " + k[d] + " as " + d);
          b[c] = d, k[d] = c, G[c] = G[d] = y;
          for (var E in O) {
            var A = O[E];
            A[c] && (A[d] = A[d] || A[c]);
          }
        },
        reset: function() {
          n.reset(), this.error = null, this.missing = [], this.valid = !0;
        },
        missing: [],
        error: null,
        valid: !0,
        normSchema: x,
        resolveUrl: R,
        getDocumentUri: g,
        errorCodes: b
      };
      return h.language(o || "en"), h;
    }
    var rr = Er();
    return rr.addLanguage("en-gb", G), rr.tv4 = rr, rr;
  });
})(xt);
const oi = xt.exports;
let si = (r = 21) => crypto.getRandomValues(new Uint8Array(r)).reduce((e, t) => (t &= 63, t < 36 ? e += t.toString(36) : t < 62 ? e += (t - 26).toString(36).toUpperCase() : t > 62 ? e += "-" : e += "_", e), "");
function ui() {
  this.__data__ = [], this.size = 0;
}
var fi = ui;
function li(r, e) {
  return r === e || r !== r && e !== e;
}
var Ir = li, ci = Ir;
function hi(r, e) {
  for (var t = r.length; t--; )
    if (ci(r[t][0], e))
      return t;
  return -1;
}
var Nr = hi, pi = Nr, di = Array.prototype, vi = di.splice;
function yi(r) {
  var e = this.__data__, t = pi(e, r);
  if (t < 0)
    return !1;
  var a = e.length - 1;
  return t == a ? e.pop() : vi.call(e, t, 1), --this.size, !0;
}
var gi = yi, mi = Nr;
function Ei(r) {
  var e = this.__data__, t = mi(e, r);
  return t < 0 ? void 0 : e[t][1];
}
var _i = Ei, Oi = Nr;
function bi(r) {
  return Oi(this.__data__, r) > -1;
}
var Ai = bi, Ri = Nr;
function wi(r, e) {
  var t = this.__data__, a = Ri(t, r);
  return a < 0 ? (++this.size, t.push([r, e])) : t[a][1] = e, this;
}
var Si = wi, Ti = fi, $i = gi, xi = _i, Ci = Ai, Pi = Si;
function sr(r) {
  var e = -1, t = r == null ? 0 : r.length;
  for (this.clear(); ++e < t; ) {
    var a = r[e];
    this.set(a[0], a[1]);
  }
}
sr.prototype.clear = Ti;
sr.prototype.delete = $i;
sr.prototype.get = xi;
sr.prototype.has = Ci;
sr.prototype.set = Pi;
var Mr = sr, Ii = Mr;
function Ni() {
  this.__data__ = new Ii(), this.size = 0;
}
var Mi = Ni;
function Ui(r) {
  var e = this.__data__, t = e.delete(r);
  return this.size = e.size, t;
}
var ji = Ui;
function Li(r) {
  return this.__data__.get(r);
}
var Di = Li;
function Fi(r) {
  return this.__data__.has(r);
}
var Bi = Fi, qi = typeof vr == "object" && vr && vr.Object === Object && vr, Ct = qi, ki = Ct, Gi = typeof self == "object" && self && self.Object === Object && self, Hi = ki || Gi || Function("return this")(), ur = Hi, Vi = ur, zi = Vi.Symbol, Pt = zi, Ve = Pt, It = Object.prototype, Ki = It.hasOwnProperty, Ji = It.toString, dr = Ve ? Ve.toStringTag : void 0;
function Wi(r) {
  var e = Ki.call(r, dr), t = r[dr];
  try {
    r[dr] = void 0;
    var a = !0;
  } catch {
  }
  var s = Ji.call(r);
  return a && (e ? r[dr] = t : delete r[dr]), s;
}
var Yi = Wi, Xi = Object.prototype, Qi = Xi.toString;
function Zi(r) {
  return Qi.call(r);
}
var ra = Zi, ze = Pt, ea = Yi, ta = ra, na = "[object Null]", ia = "[object Undefined]", Ke = ze ? ze.toStringTag : void 0;
function aa(r) {
  return r == null ? r === void 0 ? ia : na : Ke && Ke in Object(r) ? ea(r) : ta(r);
}
var Ur = aa;
function oa(r) {
  var e = typeof r;
  return r != null && (e == "object" || e == "function");
}
var Z = oa, sa = Ur, ua = Z, fa = "[object AsyncFunction]", la = "[object Function]", ca = "[object GeneratorFunction]", ha = "[object Proxy]";
function pa(r) {
  if (!ua(r))
    return !1;
  var e = sa(r);
  return e == la || e == ca || e == fa || e == ha;
}
var de = pa, da = ur, va = da["__core-js_shared__"], ya = va, Zr = ya, Je = function() {
  var r = /[^.]+$/.exec(Zr && Zr.keys && Zr.keys.IE_PROTO || "");
  return r ? "Symbol(src)_1." + r : "";
}();
function ga(r) {
  return !!Je && Je in r;
}
var ma = ga, Ea = Function.prototype, _a = Ea.toString;
function Oa(r) {
  if (r != null) {
    try {
      return _a.call(r);
    } catch {
    }
    try {
      return r + "";
    } catch {
    }
  }
  return "";
}
var ba = Oa, Aa = de, Ra = ma, wa = Z, Sa = ba, Ta = /[\\^$.*+?()[\]{}|]/g, $a = /^\[object .+?Constructor\]$/, xa = Function.prototype, Ca = Object.prototype, Pa = xa.toString, Ia = Ca.hasOwnProperty, Na = RegExp(
  "^" + Pa.call(Ia).replace(Ta, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function Ma(r) {
  if (!wa(r) || Ra(r))
    return !1;
  var e = Aa(r) ? Na : $a;
  return e.test(Sa(r));
}
var Ua = Ma;
function ja(r, e) {
  return r == null ? void 0 : r[e];
}
var La = ja, Da = Ua, Fa = La;
function Ba(r, e) {
  var t = Fa(r, e);
  return Da(t) ? t : void 0;
}
var ve = Ba, qa = ve, ka = ur, Ga = qa(ka, "Map"), Nt = Ga, Ha = ve, Va = Ha(Object, "create"), jr = Va, We = jr;
function za() {
  this.__data__ = We ? We(null) : {}, this.size = 0;
}
var Ka = za;
function Ja(r) {
  var e = this.has(r) && delete this.__data__[r];
  return this.size -= e ? 1 : 0, e;
}
var Wa = Ja, Ya = jr, Xa = "__lodash_hash_undefined__", Qa = Object.prototype, Za = Qa.hasOwnProperty;
function ro(r) {
  var e = this.__data__;
  if (Ya) {
    var t = e[r];
    return t === Xa ? void 0 : t;
  }
  return Za.call(e, r) ? e[r] : void 0;
}
var eo = ro, to = jr, no = Object.prototype, io = no.hasOwnProperty;
function ao(r) {
  var e = this.__data__;
  return to ? e[r] !== void 0 : io.call(e, r);
}
var oo = ao, so = jr, uo = "__lodash_hash_undefined__";
function fo(r, e) {
  var t = this.__data__;
  return this.size += this.has(r) ? 0 : 1, t[r] = so && e === void 0 ? uo : e, this;
}
var lo = fo, co = Ka, ho = Wa, po = eo, vo = oo, yo = lo;
function fr(r) {
  var e = -1, t = r == null ? 0 : r.length;
  for (this.clear(); ++e < t; ) {
    var a = r[e];
    this.set(a[0], a[1]);
  }
}
fr.prototype.clear = co;
fr.prototype.delete = ho;
fr.prototype.get = po;
fr.prototype.has = vo;
fr.prototype.set = yo;
var go = fr, Ye = go, mo = Mr, Eo = Nt;
function _o() {
  this.size = 0, this.__data__ = {
    hash: new Ye(),
    map: new (Eo || mo)(),
    string: new Ye()
  };
}
var Oo = _o;
function bo(r) {
  var e = typeof r;
  return e == "string" || e == "number" || e == "symbol" || e == "boolean" ? r !== "__proto__" : r === null;
}
var Ao = bo, Ro = Ao;
function wo(r, e) {
  var t = r.__data__;
  return Ro(e) ? t[typeof e == "string" ? "string" : "hash"] : t.map;
}
var Lr = wo, So = Lr;
function To(r) {
  var e = So(this, r).delete(r);
  return this.size -= e ? 1 : 0, e;
}
var $o = To, xo = Lr;
function Co(r) {
  return xo(this, r).get(r);
}
var Po = Co, Io = Lr;
function No(r) {
  return Io(this, r).has(r);
}
var Mo = No, Uo = Lr;
function jo(r, e) {
  var t = Uo(this, r), a = t.size;
  return t.set(r, e), this.size += t.size == a ? 0 : 1, this;
}
var Lo = jo, Do = Oo, Fo = $o, Bo = Po, qo = Mo, ko = Lo;
function lr(r) {
  var e = -1, t = r == null ? 0 : r.length;
  for (this.clear(); ++e < t; ) {
    var a = r[e];
    this.set(a[0], a[1]);
  }
}
lr.prototype.clear = Do;
lr.prototype.delete = Fo;
lr.prototype.get = Bo;
lr.prototype.has = qo;
lr.prototype.set = ko;
var Go = lr, Ho = Mr, Vo = Nt, zo = Go, Ko = 200;
function Jo(r, e) {
  var t = this.__data__;
  if (t instanceof Ho) {
    var a = t.__data__;
    if (!Vo || a.length < Ko - 1)
      return a.push([r, e]), this.size = ++t.size, this;
    t = this.__data__ = new zo(a);
  }
  return t.set(r, e), this.size = t.size, this;
}
var Wo = Jo, Yo = Mr, Xo = Mi, Qo = ji, Zo = Di, rs = Bi, es = Wo;
function cr(r) {
  var e = this.__data__ = new Yo(r);
  this.size = e.size;
}
cr.prototype.clear = Xo;
cr.prototype.delete = Qo;
cr.prototype.get = Zo;
cr.prototype.has = rs;
cr.prototype.set = es;
var ts = cr, ns = ve, is = function() {
  try {
    var r = ns(Object, "defineProperty");
    return r({}, "", {}), r;
  } catch {
  }
}(), Mt = is, Xe = Mt;
function as(r, e, t) {
  e == "__proto__" && Xe ? Xe(r, e, {
    configurable: !0,
    enumerable: !0,
    value: t,
    writable: !0
  }) : r[e] = t;
}
var ye = as, os = ye, ss = Ir;
function us(r, e, t) {
  (t !== void 0 && !ss(r[e], t) || t === void 0 && !(e in r)) && os(r, e, t);
}
var Ut = us;
function fs(r) {
  return function(e, t, a) {
    for (var s = -1, l = Object(e), f = a(e), p = f.length; p--; ) {
      var v = f[r ? p : ++s];
      if (t(l[v], v, l) === !1)
        break;
    }
    return e;
  };
}
var ls = fs, cs = ls, hs = cs(), ps = hs, te = { exports: {} };
(function(r, e) {
  var t = ur, a = e && !e.nodeType && e, s = a && !0 && r && !r.nodeType && r, l = s && s.exports === a, f = l ? t.Buffer : void 0, p = f ? f.allocUnsafe : void 0;
  function v(m, _) {
    if (_)
      return m.slice();
    var R = m.length, g = p ? p(R) : new m.constructor(R);
    return m.copy(g), g;
  }
  r.exports = v;
})(te, te.exports);
var ds = ur, vs = ds.Uint8Array, ys = vs, Qe = ys;
function gs(r) {
  var e = new r.constructor(r.byteLength);
  return new Qe(e).set(new Qe(r)), e;
}
var ms = gs, Es = ms;
function _s(r, e) {
  var t = e ? Es(r.buffer) : r.buffer;
  return new r.constructor(t, r.byteOffset, r.length);
}
var Os = _s;
function bs(r, e) {
  var t = -1, a = r.length;
  for (e || (e = Array(a)); ++t < a; )
    e[t] = r[t];
  return e;
}
var As = bs, Rs = Z, Ze = Object.create, ws = function() {
  function r() {
  }
  return function(e) {
    if (!Rs(e))
      return {};
    if (Ze)
      return Ze(e);
    r.prototype = e;
    var t = new r();
    return r.prototype = void 0, t;
  };
}(), Ss = ws;
function Ts(r, e) {
  return function(t) {
    return r(e(t));
  };
}
var $s = Ts, xs = $s, Cs = xs(Object.getPrototypeOf, Object), jt = Cs, Ps = Object.prototype;
function Is(r) {
  var e = r && r.constructor, t = typeof e == "function" && e.prototype || Ps;
  return r === t;
}
var Lt = Is, Ns = Ss, Ms = jt, Us = Lt;
function js(r) {
  return typeof r.constructor == "function" && !Us(r) ? Ns(Ms(r)) : {};
}
var Ls = js;
function Ds(r) {
  return r != null && typeof r == "object";
}
var gr = Ds, Fs = Ur, Bs = gr, qs = "[object Arguments]";
function ks(r) {
  return Bs(r) && Fs(r) == qs;
}
var Gs = ks, rt = Gs, Hs = gr, Dt = Object.prototype, Vs = Dt.hasOwnProperty, zs = Dt.propertyIsEnumerable, Ks = rt(function() {
  return arguments;
}()) ? rt : function(r) {
  return Hs(r) && Vs.call(r, "callee") && !zs.call(r, "callee");
}, Ft = Ks, Js = Array.isArray, Bt = Js, Ws = 9007199254740991;
function Ys(r) {
  return typeof r == "number" && r > -1 && r % 1 == 0 && r <= Ws;
}
var qt = Ys, Xs = de, Qs = qt;
function Zs(r) {
  return r != null && Qs(r.length) && !Xs(r);
}
var ge = Zs, ru = ge, eu = gr;
function tu(r) {
  return eu(r) && ru(r);
}
var nu = tu, Tr = { exports: {} };
function iu() {
  return !1;
}
var au = iu;
(function(r, e) {
  var t = ur, a = au, s = e && !e.nodeType && e, l = s && !0 && r && !r.nodeType && r, f = l && l.exports === s, p = f ? t.Buffer : void 0, v = p ? p.isBuffer : void 0, m = v || a;
  r.exports = m;
})(Tr, Tr.exports);
var ou = Ur, su = jt, uu = gr, fu = "[object Object]", lu = Function.prototype, cu = Object.prototype, kt = lu.toString, hu = cu.hasOwnProperty, pu = kt.call(Object);
function du(r) {
  if (!uu(r) || ou(r) != fu)
    return !1;
  var e = su(r);
  if (e === null)
    return !0;
  var t = hu.call(e, "constructor") && e.constructor;
  return typeof t == "function" && t instanceof t && kt.call(t) == pu;
}
var vu = du, yu = Ur, gu = qt, mu = gr, Eu = "[object Arguments]", _u = "[object Array]", Ou = "[object Boolean]", bu = "[object Date]", Au = "[object Error]", Ru = "[object Function]", wu = "[object Map]", Su = "[object Number]", Tu = "[object Object]", $u = "[object RegExp]", xu = "[object Set]", Cu = "[object String]", Pu = "[object WeakMap]", Iu = "[object ArrayBuffer]", Nu = "[object DataView]", Mu = "[object Float32Array]", Uu = "[object Float64Array]", ju = "[object Int8Array]", Lu = "[object Int16Array]", Du = "[object Int32Array]", Fu = "[object Uint8Array]", Bu = "[object Uint8ClampedArray]", qu = "[object Uint16Array]", ku = "[object Uint32Array]", T = {};
T[Mu] = T[Uu] = T[ju] = T[Lu] = T[Du] = T[Fu] = T[Bu] = T[qu] = T[ku] = !0;
T[Eu] = T[_u] = T[Iu] = T[Ou] = T[Nu] = T[bu] = T[Au] = T[Ru] = T[wu] = T[Su] = T[Tu] = T[$u] = T[xu] = T[Cu] = T[Pu] = !1;
function Gu(r) {
  return mu(r) && gu(r.length) && !!T[yu(r)];
}
var Hu = Gu;
function Vu(r) {
  return function(e) {
    return r(e);
  };
}
var zu = Vu, ne = { exports: {} };
(function(r, e) {
  var t = Ct, a = e && !e.nodeType && e, s = a && !0 && r && !r.nodeType && r, l = s && s.exports === a, f = l && t.process, p = function() {
    try {
      var v = s && s.require && s.require("util").types;
      return v || f && f.binding && f.binding("util");
    } catch {
    }
  }();
  r.exports = p;
})(ne, ne.exports);
var Ku = Hu, Ju = zu, et = ne.exports, tt = et && et.isTypedArray, Wu = tt ? Ju(tt) : Ku, Gt = Wu;
function Yu(r, e) {
  if (!(e === "constructor" && typeof r[e] == "function") && e != "__proto__")
    return r[e];
}
var Ht = Yu, Xu = ye, Qu = Ir, Zu = Object.prototype, rf = Zu.hasOwnProperty;
function ef(r, e, t) {
  var a = r[e];
  (!(rf.call(r, e) && Qu(a, t)) || t === void 0 && !(e in r)) && Xu(r, e, t);
}
var tf = ef, nf = tf, af = ye;
function of(r, e, t, a) {
  var s = !t;
  t || (t = {});
  for (var l = -1, f = e.length; ++l < f; ) {
    var p = e[l], v = a ? a(t[p], r[p], p, t, r) : void 0;
    v === void 0 && (v = r[p]), s ? af(t, p, v) : nf(t, p, v);
  }
  return t;
}
var sf = of;
function uf(r, e) {
  for (var t = -1, a = Array(r); ++t < r; )
    a[t] = e(t);
  return a;
}
var ff = uf, lf = 9007199254740991, cf = /^(?:0|[1-9]\d*)$/;
function hf(r, e) {
  var t = typeof r;
  return e = e == null ? lf : e, !!e && (t == "number" || t != "symbol" && cf.test(r)) && r > -1 && r % 1 == 0 && r < e;
}
var Vt = hf, pf = ff, df = Ft, vf = Bt, yf = Tr.exports, gf = Vt, mf = Gt, Ef = Object.prototype, _f = Ef.hasOwnProperty;
function Of(r, e) {
  var t = vf(r), a = !t && df(r), s = !t && !a && yf(r), l = !t && !a && !s && mf(r), f = t || a || s || l, p = f ? pf(r.length, String) : [], v = p.length;
  for (var m in r)
    (e || _f.call(r, m)) && !(f && (m == "length" || s && (m == "offset" || m == "parent") || l && (m == "buffer" || m == "byteLength" || m == "byteOffset") || gf(m, v))) && p.push(m);
  return p;
}
var bf = Of;
function Af(r) {
  var e = [];
  if (r != null)
    for (var t in Object(r))
      e.push(t);
  return e;
}
var Rf = Af, wf = Z, Sf = Lt, Tf = Rf, $f = Object.prototype, xf = $f.hasOwnProperty;
function Cf(r) {
  if (!wf(r))
    return Tf(r);
  var e = Sf(r), t = [];
  for (var a in r)
    a == "constructor" && (e || !xf.call(r, a)) || t.push(a);
  return t;
}
var Pf = Cf, If = bf, Nf = Pf, Mf = ge;
function Uf(r) {
  return Mf(r) ? If(r, !0) : Nf(r);
}
var zt = Uf, jf = sf, Lf = zt;
function Df(r) {
  return jf(r, Lf(r));
}
var Ff = Df, nt = Ut, Bf = te.exports, qf = Os, kf = As, Gf = Ls, it = Ft, at = Bt, Hf = nu, Vf = Tr.exports, zf = de, Kf = Z, Jf = vu, Wf = Gt, ot = Ht, Yf = Ff;
function Xf(r, e, t, a, s, l, f) {
  var p = ot(r, t), v = ot(e, t), m = f.get(v);
  if (m) {
    nt(r, t, m);
    return;
  }
  var _ = l ? l(p, v, t + "", r, e, f) : void 0, R = _ === void 0;
  if (R) {
    var g = at(v), x = !g && Vf(v), z = !g && !x && Wf(v);
    _ = v, g || x || z ? at(p) ? _ = p : Hf(p) ? _ = kf(p) : x ? (R = !1, _ = Bf(v, !0)) : z ? (R = !1, _ = qf(v, !0)) : _ = [] : Jf(v) || it(v) ? (_ = p, it(p) ? _ = Yf(p) : (!Kf(p) || zf(p)) && (_ = Gf(v))) : R = !1;
  }
  R && (f.set(v, _), s(_, v, a, l, f), f.delete(v)), nt(r, t, _);
}
var Qf = Xf, Zf = ts, rl = Ut, el = ps, tl = Qf, nl = Z, il = zt, al = Ht;
function Kt(r, e, t, a, s) {
  r !== e && el(e, function(l, f) {
    if (s || (s = new Zf()), nl(l))
      tl(r, e, f, t, Kt, a, s);
    else {
      var p = a ? a(al(r, f), l, f + "", r, e, s) : void 0;
      p === void 0 && (p = l), rl(r, f, p);
    }
  }, il);
}
var ol = Kt;
function sl(r) {
  return r;
}
var Jt = sl;
function ul(r, e, t) {
  switch (t.length) {
    case 0:
      return r.call(e);
    case 1:
      return r.call(e, t[0]);
    case 2:
      return r.call(e, t[0], t[1]);
    case 3:
      return r.call(e, t[0], t[1], t[2]);
  }
  return r.apply(e, t);
}
var fl = ul, ll = fl, st = Math.max;
function cl(r, e, t) {
  return e = st(e === void 0 ? r.length - 1 : e, 0), function() {
    for (var a = arguments, s = -1, l = st(a.length - e, 0), f = Array(l); ++s < l; )
      f[s] = a[e + s];
    s = -1;
    for (var p = Array(e + 1); ++s < e; )
      p[s] = a[s];
    return p[e] = t(f), ll(r, this, p);
  };
}
var hl = cl;
function pl(r) {
  return function() {
    return r;
  };
}
var dl = pl, vl = dl, ut = Mt, yl = Jt, gl = ut ? function(r, e) {
  return ut(r, "toString", {
    configurable: !0,
    enumerable: !1,
    value: vl(e),
    writable: !0
  });
} : yl, ml = gl, El = 800, _l = 16, Ol = Date.now;
function bl(r) {
  var e = 0, t = 0;
  return function() {
    var a = Ol(), s = _l - (a - t);
    if (t = a, s > 0) {
      if (++e >= El)
        return arguments[0];
    } else
      e = 0;
    return r.apply(void 0, arguments);
  };
}
var Al = bl, Rl = ml, wl = Al, Sl = wl(Rl), Tl = Sl, $l = Jt, xl = hl, Cl = Tl;
function Pl(r, e) {
  return Cl(xl(r, e, $l), r + "");
}
var Il = Pl, Nl = Ir, Ml = ge, Ul = Vt, jl = Z;
function Ll(r, e, t) {
  if (!jl(t))
    return !1;
  var a = typeof e;
  return (a == "number" ? Ml(t) && Ul(e, t.length) : a == "string" && e in t) ? Nl(t[e], r) : !1;
}
var Dl = Ll, Fl = Il, Bl = Dl;
function ql(r) {
  return Fl(function(e, t) {
    var a = -1, s = t.length, l = s > 1 ? t[s - 1] : void 0, f = s > 2 ? t[2] : void 0;
    for (l = r.length > 3 && typeof l == "function" ? (s--, l) : void 0, f && Bl(t[0], t[1], f) && (l = s < 3 ? void 0 : l, s = 1), e = Object(e); ++a < s; ) {
      var p = t[a];
      p && r(e, p, a, l);
    }
    return e;
  });
}
var kl = ql, Gl = ol, Hl = kl, Vl = Hl(function(r, e, t) {
  Gl(r, e, t);
}), X = Vl;
const zl = typeof btoa == "function", me = typeof Buffer == "function";
typeof TextDecoder == "function" && new TextDecoder();
const ft = typeof TextEncoder == "function" ? new TextEncoder() : void 0, Kl = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=", yr = Array.prototype.slice.call(Kl);
((r) => {
  let e = {};
  return r.forEach((t, a) => e[t] = a), e;
})(yr);
const V = String.fromCharCode.bind(String);
typeof Uint8Array.from == "function" && Uint8Array.from.bind(Uint8Array);
const Jl = (r) => r.replace(/=/g, "").replace(/[+\/]/g, (e) => e == "+" ? "-" : "_"), Wl = (r) => {
  let e, t, a, s, l = "";
  const f = r.length % 3;
  for (let p = 0; p < r.length; ) {
    if ((t = r.charCodeAt(p++)) > 255 || (a = r.charCodeAt(p++)) > 255 || (s = r.charCodeAt(p++)) > 255)
      throw new TypeError("invalid character found");
    e = t << 16 | a << 8 | s, l += yr[e >> 18 & 63] + yr[e >> 12 & 63] + yr[e >> 6 & 63] + yr[e & 63];
  }
  return f ? l.slice(0, f - 3) + "===".substring(f) : l;
}, Wt = zl ? (r) => btoa(r) : me ? (r) => Buffer.from(r, "binary").toString("base64") : Wl, Yl = me ? (r) => Buffer.from(r).toString("base64") : (r) => {
  let t = [];
  for (let a = 0, s = r.length; a < s; a += 4096)
    t.push(V.apply(null, r.subarray(a, a + 4096)));
  return Wt(t.join(""));
}, Xl = (r) => {
  if (r.length < 2) {
    var e = r.charCodeAt(0);
    return e < 128 ? r : e < 2048 ? V(192 | e >>> 6) + V(128 | e & 63) : V(224 | e >>> 12 & 15) + V(128 | e >>> 6 & 63) + V(128 | e & 63);
  } else {
    var e = 65536 + (r.charCodeAt(0) - 55296) * 1024 + (r.charCodeAt(1) - 56320);
    return V(240 | e >>> 18 & 7) + V(128 | e >>> 12 & 63) + V(128 | e >>> 6 & 63) + V(128 | e & 63);
  }
}, Ql = /[\uD800-\uDBFF][\uDC00-\uDFFFF]|[^\x00-\x7F]/g, Zl = (r) => r.replace(Ql, Xl), lt = me ? (r) => Buffer.from(r, "utf8").toString("base64") : ft ? (r) => Yl(ft.encode(r)) : (r) => Wt(Zl(r)), rc = (r, e = !1) => e ? Jl(lt(r)) : lt(r);
var ie = { exports: {} };
(function(r, e) {
  e = r.exports = t, e.getSerialize = a;
  function t(s, l, f, p) {
    return JSON.stringify(s, a(l, p), f);
  }
  function a(s, l) {
    var f = [], p = [];
    return l == null && (l = function(v, m) {
      return f[0] === m ? "[Circular ~]" : "[Circular ~." + p.slice(0, f.indexOf(m)).join(".") + "]";
    }), function(v, m) {
      if (f.length > 0) {
        var _ = f.indexOf(this);
        ~_ ? f.splice(_ + 1) : f.push(this), ~_ ? p.splice(_, 1 / 0, v) : p.push(v), ~f.indexOf(m) && (m = l.call(this, v, m));
      } else
        f.push(m);
      return s == null ? m : s.call(this, v, m);
    };
  }
})(ie, ie.exports);
const ec = ie.exports, ae = {
  token: "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",
  owner: "pinghuazhuang",
  repo: "note"
}, tc = "/repos/{owner}/{repo}/contents/{path}", nc = "/repos/{owner}/{repo}/contents/{path}", ic = "/repos/{owner}/{repo}/contents/{path}", { isArray: re } = Array, ac = [].toString;
function oc(r) {
  return ac.call(r).toLowerCase() === "[object object]";
}
function sc(r, e) {
  return $t.create(X({
    headers: {
      "Content-Type": "application/json",
      Authorization: `token ${e != null ? e : ae.token}`,
      Accept: "application/vnd.github+json"
    },
    timeout: 5e3,
    baseURL: "https://api.github.com"
  }, r));
}
function br(r, e, t) {
  return q(r.replace(/\/{2,}/g, "/").replace(/{owner}/g, e.owner).replace(/{repo}/g, e.repo).replace(/{path}/g, t != null ? t : ""));
}
function Y(r) {
  return q(r.replace(/(.*?)(\.json)?$/, "$1.json"));
}
function q(r) {
  return r.replace(/\/{2,}/g, "/");
}
function Ar(r) {
  return /\.json$/.test(r) ? q(r.replace(/\/[^\/]*?$/, "")) : q(r);
}
function uc(r) {
  return {
    params: {
      ref: r.ref
    }
  };
}
function J(r, ...e) {
  return typeof r != "string" && (r = e.reduce((t, a, s) => t + a + r[s + 1], r.raw[0])), new TypeError(r);
}
class fc {
  constructor(e) {
    er(this, "token");
    er(this, "owner");
    er(this, "repo");
    er(this, "axios");
    er(this, "ref", "api");
    this.config(e);
  }
  config(e) {
    var t, a, s;
    e != null && e.token && (this.token = e.token), this.owner = (t = e == null ? void 0 : e.owner) != null ? t : ae.owner, this.repo = (a = e == null ? void 0 : e.repo) != null ? a : ae.repo, this.axios = (s = e == null ? void 0 : e.axios) != null ? s : sc(void 0, this.token);
  }
  path(e) {
    return this.axios.get(
      br(
        tc,
        this,
        e
      ),
      uc(this)
    ).then((t) => Promise.resolve(t.data));
  }
  exists(e) {
    return this.readFile(q(e)).catch((t) => {
      const { response: { status: a } } = t;
      return a === 404 ? Promise.resolve({
        is404: !0,
        data: t
      }) : Promise.reject(t);
    }).then((t) => "is404" in t ? t : re(t) ? Promise.reject(J`Not file. path: ${e}`) : { is404: !1, data: t });
  }
  validate(e, t) {
    const a = oi.freshApi();
    return a.validate(e, t) !== !0 ? a.error : !0;
  }
  readFile(e) {
    return this.path(q(e)).then((t) => re(t) ? Promise.reject(J`Not file. path: ${e}`) : t);
  }
  updateOrCreateFile(e, t) {
    const a = Y(e);
    return this.axios.put(
      br(
        nc,
        this,
        a
      ),
      X(
        {
          branch: this.ref,
          committer: {
            name: "robot",
            email: "robot@github.com"
          }
        },
        t,
        {
          content: rc(ec(t.content))
        }
      )
    );
  }
  readDir(e) {
    return this.path(q(e)).then((t) => re(t) ? t : Promise.reject(J`Not dir. path: ${e}`));
  }
  readDirNames(e) {
    return this.readDir(e).then((t) => t.map((a) => a.name));
  }
  getJsonSchema(e) {
    const t = q(`${Ar(e)}/schema.json`);
    return this.read(t).then((a) => oc(a) ? a : Promise.reject(J`Json Schema type error. path: ${e}`)).catch((a) => {
      const { response: { status: s } } = a;
      return s === 404 ? Promise.reject(J`Don't have json-schema.`) : Promise.reject(a);
    });
  }
  addJsonSchema(e, t, a) {
    const s = q(`${Ar(e)}/schema.json`);
    return this.exists(s).then((l) => l.is404 ? Promise.resolve(l.data) : Promise.reject(J`Already have json-shcema. path: ${s}`)).then(() => this.updateOrCreateFile(s, X({
      message: `create(API): add json-schema. ${Y(s)}.`,
      content: t
    }, a)));
  }
  updateJsonShcema(e, t, a) {
    console.warn("Update the json-shcema ?");
    const s = q(`${Ar(e)}/schema.json`);
    return this.exists(s).then((l) => l.is404 ? Promise.reject(J`Don't have json-schema. path: ${s}`) : Promise.resolve(l.data)).then((l) => this.updateOrCreateFile(s, X({
      message: `update(API): update json-schema. ${s}.`,
      content: t,
      sha: l.sha
    }, a)));
  }
  read(e) {
    const t = Y(e);
    return $t.get(
      br(
        "{owner}/{repo}/api/{path}",
        this,
        t
      ),
      {
        params: {
          ref: this.ref
        },
        headers: {
          "Content-Type": "text/plain"
        },
        baseURL: "https://raw.githubusercontent.com"
      }
    ).then((a) => a.data);
  }
  delete(e, t) {
    const a = Y(e);
    return this.readFile(a).then((s) => this.axios.delete(br(
      ic,
      this,
      a
    ), {
      data: X({
        message: `delete(API): ${a}`,
        branch: this.ref,
        sha: s.sha
      }, t)
    }));
  }
  update(e, t, a) {
    const s = Y(e);
    return this.exists(Y(s)).then((l) => l.is404 ? Promise.reject(J`Don't have file. path: ${s}`) : Promise.resolve(l.data)).then((l) => this.getJsonSchema(Ar(s)).then((f) => {
      const p = this.validate(t, f);
      return p === !0 ? this.updateOrCreateFile(s, X({
        message: `update(API): ${s}.`,
        sha: l.sha,
        content: t
      }, a)) : Promise.reject(p);
    }));
  }
  create(e, t, a) {
    const s = q(`${e}/${si()}.json`), l = `create(API): ${Y(s)}.`;
    return this.getJsonSchema(e).then((f) => {
      const p = this.validate(t, f);
      return p === !0 ? this.updateOrCreateFile(s, X({
        message: l,
        content: t
      }, a)) : Promise.reject(p);
    });
  }
}
const cc = new fc();
export {
  cc as default
};
