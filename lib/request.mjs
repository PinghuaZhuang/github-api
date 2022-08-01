var gt = Object.defineProperty;
var mt = (e, r, t) => r in e ? gt(e, r, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[r] = t;
var R = (e, r, t) => (mt(e, typeof r != "symbol" ? r + "" : r, t), t);
var J = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function $t(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Dr = { exports: {} }, xe = { exports: {} }, Ir = function(r, t) {
  return function() {
    for (var a = new Array(arguments.length), i = 0; i < a.length; i++)
      a[i] = arguments[i];
    return r.apply(t, a);
  };
}, Ot = Ir, je = Object.prototype.toString, De = function(e) {
  return function(r) {
    var t = je.call(r);
    return e[t] || (e[t] = t.slice(8, -1).toLowerCase());
  };
}(/* @__PURE__ */ Object.create(null));
function w(e) {
  return e = e.toLowerCase(), function(t) {
    return De(t) === e;
  };
}
function Ie(e) {
  return Array.isArray(e);
}
function X(e) {
  return typeof e > "u";
}
function Et(e) {
  return e !== null && !X(e) && e.constructor !== null && !X(e.constructor) && typeof e.constructor.isBuffer == "function" && e.constructor.isBuffer(e);
}
var Nr = w("ArrayBuffer");
function wt(e) {
  var r;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? r = ArrayBuffer.isView(e) : r = e && e.buffer && Nr(e.buffer), r;
}
function At(e) {
  return typeof e == "string";
}
function Tt(e) {
  return typeof e == "number";
}
function Lr(e) {
  return e !== null && typeof e == "object";
}
function K(e) {
  if (De(e) !== "object")
    return !1;
  var r = Object.getPrototypeOf(e);
  return r === null || r === Object.prototype;
}
var Ct = w("Date"), St = w("File"), Rt = w("Blob"), Pt = w("FileList");
function Ne(e) {
  return je.call(e) === "[object Function]";
}
function xt(e) {
  return Lr(e) && Ne(e.pipe);
}
function jt(e) {
  var r = "[object FormData]";
  return e && (typeof FormData == "function" && e instanceof FormData || je.call(e) === r || Ne(e.toString) && e.toString() === r);
}
var Dt = w("URLSearchParams");
function It(e) {
  return e.trim ? e.trim() : e.replace(/^\s+|\s+$/g, "");
}
function Nt() {
  return typeof navigator < "u" && (navigator.product === "ReactNative" || navigator.product === "NativeScript" || navigator.product === "NS") ? !1 : typeof window < "u" && typeof document < "u";
}
function Le(e, r) {
  if (!(e === null || typeof e > "u"))
    if (typeof e != "object" && (e = [e]), Ie(e))
      for (var t = 0, n = e.length; t < n; t++)
        r.call(null, e[t], t, e);
    else
      for (var a in e)
        Object.prototype.hasOwnProperty.call(e, a) && r.call(null, e[a], a, e);
}
function Se() {
  var e = {};
  function r(a, i) {
    K(e[i]) && K(a) ? e[i] = Se(e[i], a) : K(a) ? e[i] = Se({}, a) : Ie(a) ? e[i] = a.slice() : e[i] = a;
  }
  for (var t = 0, n = arguments.length; t < n; t++)
    Le(arguments[t], r);
  return e;
}
function Lt(e, r, t) {
  return Le(r, function(a, i) {
    t && typeof a == "function" ? e[i] = Ot(a, t) : e[i] = a;
  }), e;
}
function Ut(e) {
  return e.charCodeAt(0) === 65279 && (e = e.slice(1)), e;
}
function Bt(e, r, t, n) {
  e.prototype = Object.create(r.prototype, n), e.prototype.constructor = e, t && Object.assign(e.prototype, t);
}
function Ft(e, r, t) {
  var n, a, i, s = {};
  r = r || {};
  do {
    for (n = Object.getOwnPropertyNames(e), a = n.length; a-- > 0; )
      i = n[a], s[i] || (r[i] = e[i], s[i] = !0);
    e = Object.getPrototypeOf(e);
  } while (e && (!t || t(e, r)) && e !== Object.prototype);
  return r;
}
function qt(e, r, t) {
  e = String(e), (t === void 0 || t > e.length) && (t = e.length), t -= r.length;
  var n = e.indexOf(r, t);
  return n !== -1 && n === t;
}
function Mt(e) {
  if (!e)
    return null;
  var r = e.length;
  if (X(r))
    return null;
  for (var t = new Array(r); r-- > 0; )
    t[r] = e[r];
  return t;
}
var Ht = function(e) {
  return function(r) {
    return e && r instanceof e;
  };
}(typeof Uint8Array < "u" && Object.getPrototypeOf(Uint8Array)), y = {
  isArray: Ie,
  isArrayBuffer: Nr,
  isBuffer: Et,
  isFormData: jt,
  isArrayBufferView: wt,
  isString: At,
  isNumber: Tt,
  isObject: Lr,
  isPlainObject: K,
  isUndefined: X,
  isDate: Ct,
  isFile: St,
  isBlob: Rt,
  isFunction: Ne,
  isStream: xt,
  isURLSearchParams: Dt,
  isStandardBrowserEnv: Nt,
  forEach: Le,
  merge: Se,
  extend: Lt,
  trim: It,
  stripBOM: Ut,
  inherits: Bt,
  toFlatObject: Ft,
  kindOf: De,
  kindOfTest: w,
  endsWith: qt,
  toArray: Mt,
  isTypedArray: Ht,
  isFileList: Pt
}, P = y;
function Ve(e) {
  return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
var Ur = function(r, t, n) {
  if (!t)
    return r;
  var a;
  if (n)
    a = n(t);
  else if (P.isURLSearchParams(t))
    a = t.toString();
  else {
    var i = [];
    P.forEach(t, function(u, c) {
      u === null || typeof u > "u" || (P.isArray(u) ? c = c + "[]" : u = [u], P.forEach(u, function(h) {
        P.isDate(h) ? h = h.toISOString() : P.isObject(h) && (h = JSON.stringify(h)), i.push(Ve(c) + "=" + Ve(h));
      }));
    }), a = i.join("&");
  }
  if (a) {
    var s = r.indexOf("#");
    s !== -1 && (r = r.slice(0, s)), r += (r.indexOf("?") === -1 ? "?" : "&") + a;
  }
  return r;
}, Gt = y;
function Y() {
  this.handlers = [];
}
Y.prototype.use = function(r, t, n) {
  return this.handlers.push({
    fulfilled: r,
    rejected: t,
    synchronous: n ? n.synchronous : !1,
    runWhen: n ? n.runWhen : null
  }), this.handlers.length - 1;
};
Y.prototype.eject = function(r) {
  this.handlers[r] && (this.handlers[r] = null);
};
Y.prototype.forEach = function(r) {
  Gt.forEach(this.handlers, function(n) {
    n !== null && r(n);
  });
};
var kt = Y, zt = y, Vt = function(r, t) {
  zt.forEach(r, function(a, i) {
    i !== t && i.toUpperCase() === t.toUpperCase() && (r[t] = a, delete r[i]);
  });
}, Br = y;
function j(e, r, t, n, a) {
  Error.call(this), this.message = e, this.name = "AxiosError", r && (this.code = r), t && (this.config = t), n && (this.request = n), a && (this.response = a);
}
Br.inherits(j, Error, {
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
var Fr = j.prototype, qr = {};
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
].forEach(function(e) {
  qr[e] = { value: e };
});
Object.defineProperties(j, qr);
Object.defineProperty(Fr, "isAxiosError", { value: !0 });
j.from = function(e, r, t, n, a, i) {
  var s = Object.create(Fr);
  return Br.toFlatObject(e, s, function(u) {
    return u !== Error.prototype;
  }), j.call(s, e.message, r, t, n, a), s.name = e.name, i && Object.assign(s, i), s;
};
var I = j, Mr = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, $ = y;
function Jt(e, r) {
  r = r || new FormData();
  var t = [];
  function n(i) {
    return i === null ? "" : $.isDate(i) ? i.toISOString() : $.isArrayBuffer(i) || $.isTypedArray(i) ? typeof Blob == "function" ? new Blob([i]) : Buffer.from(i) : i;
  }
  function a(i, s) {
    if ($.isPlainObject(i) || $.isArray(i)) {
      if (t.indexOf(i) !== -1)
        throw Error("Circular reference detected in " + s);
      t.push(i), $.forEach(i, function(u, c) {
        if (!$.isUndefined(u)) {
          var l = s ? s + "." + c : c, h;
          if (u && !s && typeof u == "object") {
            if ($.endsWith(c, "{}"))
              u = JSON.stringify(u);
            else if ($.endsWith(c, "[]") && (h = $.toArray(u))) {
              h.forEach(function(f) {
                !$.isUndefined(f) && r.append(l, n(f));
              });
              return;
            }
          }
          a(u, l);
        }
      }), t.pop();
    } else
      r.append(s, n(i));
  }
  return a(e), r;
}
var Hr = Jt, le, Je;
function Kt() {
  if (Je)
    return le;
  Je = 1;
  var e = I;
  return le = function(t, n, a) {
    var i = a.config.validateStatus;
    !a.status || !i || i(a.status) ? t(a) : n(new e(
      "Request failed with status code " + a.status,
      [e.ERR_BAD_REQUEST, e.ERR_BAD_RESPONSE][Math.floor(a.status / 100) - 4],
      a.config,
      a.request,
      a
    ));
  }, le;
}
var de, Ke;
function Wt() {
  if (Ke)
    return de;
  Ke = 1;
  var e = y;
  return de = e.isStandardBrowserEnv() ? function() {
    return {
      write: function(n, a, i, s, o, u) {
        var c = [];
        c.push(n + "=" + encodeURIComponent(a)), e.isNumber(i) && c.push("expires=" + new Date(i).toGMTString()), e.isString(s) && c.push("path=" + s), e.isString(o) && c.push("domain=" + o), u === !0 && c.push("secure"), document.cookie = c.join("; ");
      },
      read: function(n) {
        var a = document.cookie.match(new RegExp("(^|;\\s*)(" + n + ")=([^;]*)"));
        return a ? decodeURIComponent(a[3]) : null;
      },
      remove: function(n) {
        this.write(n, "", Date.now() - 864e5);
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
  }(), de;
}
var Xt = function(r) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(r);
}, Qt = function(r, t) {
  return t ? r.replace(/\/+$/, "") + "/" + t.replace(/^\/+/, "") : r;
}, Yt = Xt, Zt = Qt, Gr = function(r, t) {
  return r && !Yt(t) ? Zt(r, t) : t;
}, he, We;
function en() {
  if (We)
    return he;
  We = 1;
  var e = y, r = [
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
  return he = function(n) {
    var a = {}, i, s, o;
    return n && e.forEach(n.split(`
`), function(c) {
      if (o = c.indexOf(":"), i = e.trim(c.substr(0, o)).toLowerCase(), s = e.trim(c.substr(o + 1)), i) {
        if (a[i] && r.indexOf(i) >= 0)
          return;
        i === "set-cookie" ? a[i] = (a[i] ? a[i] : []).concat([s]) : a[i] = a[i] ? a[i] + ", " + s : s;
      }
    }), a;
  }, he;
}
var pe, Xe;
function rn() {
  if (Xe)
    return pe;
  Xe = 1;
  var e = y;
  return pe = e.isStandardBrowserEnv() ? function() {
    var t = /(msie|trident)/i.test(navigator.userAgent), n = document.createElement("a"), a;
    function i(s) {
      var o = s;
      return t && (n.setAttribute("href", o), o = n.href), n.setAttribute("href", o), {
        href: n.href,
        protocol: n.protocol ? n.protocol.replace(/:$/, "") : "",
        host: n.host,
        search: n.search ? n.search.replace(/^\?/, "") : "",
        hash: n.hash ? n.hash.replace(/^#/, "") : "",
        hostname: n.hostname,
        port: n.port,
        pathname: n.pathname.charAt(0) === "/" ? n.pathname : "/" + n.pathname
      };
    }
    return a = i(window.location.href), function(o) {
      var u = e.isString(o) ? i(o) : o;
      return u.protocol === a.protocol && u.host === a.host;
    };
  }() : function() {
    return function() {
      return !0;
    };
  }(), pe;
}
var ve, Qe;
function Z() {
  if (Qe)
    return ve;
  Qe = 1;
  var e = I, r = y;
  function t(n) {
    e.call(this, n == null ? "canceled" : n, e.ERR_CANCELED), this.name = "CanceledError";
  }
  return r.inherits(t, e, {
    __CANCEL__: !0
  }), ve = t, ve;
}
var ye, Ye;
function tn() {
  return Ye || (Ye = 1, ye = function(r) {
    var t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(r);
    return t && t[1] || "";
  }), ye;
}
var be, Ze;
function er() {
  if (Ze)
    return be;
  Ze = 1;
  var e = y, r = Kt(), t = Wt(), n = Ur, a = Gr, i = en(), s = rn(), o = Mr, u = I, c = Z(), l = tn();
  return be = function(f) {
    return new Promise(function(V, T) {
      var q = f.data, M = f.headers, H = f.responseType, C;
      function Ge() {
        f.cancelToken && f.cancelToken.unsubscribe(C), f.signal && f.signal.removeEventListener("abort", C);
      }
      e.isFormData(q) && e.isStandardBrowserEnv() && delete M["Content-Type"];
      var d = new XMLHttpRequest();
      if (f.auth) {
        var yt = f.auth.username || "", bt = f.auth.password ? unescape(encodeURIComponent(f.auth.password)) : "";
        M.Authorization = "Basic " + btoa(yt + ":" + bt);
      }
      var ue = a(f.baseURL, f.url);
      d.open(f.method.toUpperCase(), n(ue, f.params, f.paramsSerializer), !0), d.timeout = f.timeout;
      function ke() {
        if (!!d) {
          var m = "getAllResponseHeaders" in d ? i(d.getAllResponseHeaders()) : null, S = !H || H === "text" || H === "json" ? d.responseText : d.response, E = {
            data: S,
            status: d.status,
            statusText: d.statusText,
            headers: m,
            config: f,
            request: d
          };
          r(function(ce) {
            V(ce), Ge();
          }, function(ce) {
            T(ce), Ge();
          }, E), d = null;
        }
      }
      if ("onloadend" in d ? d.onloadend = ke : d.onreadystatechange = function() {
        !d || d.readyState !== 4 || d.status === 0 && !(d.responseURL && d.responseURL.indexOf("file:") === 0) || setTimeout(ke);
      }, d.onabort = function() {
        !d || (T(new u("Request aborted", u.ECONNABORTED, f, d)), d = null);
      }, d.onerror = function() {
        T(new u("Network Error", u.ERR_NETWORK, f, d, d)), d = null;
      }, d.ontimeout = function() {
        var S = f.timeout ? "timeout of " + f.timeout + "ms exceeded" : "timeout exceeded", E = f.transitional || o;
        f.timeoutErrorMessage && (S = f.timeoutErrorMessage), T(new u(
          S,
          E.clarifyTimeoutError ? u.ETIMEDOUT : u.ECONNABORTED,
          f,
          d
        )), d = null;
      }, e.isStandardBrowserEnv()) {
        var ze = (f.withCredentials || s(ue)) && f.xsrfCookieName ? t.read(f.xsrfCookieName) : void 0;
        ze && (M[f.xsrfHeaderName] = ze);
      }
      "setRequestHeader" in d && e.forEach(M, function(S, E) {
        typeof q > "u" && E.toLowerCase() === "content-type" ? delete M[E] : d.setRequestHeader(E, S);
      }), e.isUndefined(f.withCredentials) || (d.withCredentials = !!f.withCredentials), H && H !== "json" && (d.responseType = f.responseType), typeof f.onDownloadProgress == "function" && d.addEventListener("progress", f.onDownloadProgress), typeof f.onUploadProgress == "function" && d.upload && d.upload.addEventListener("progress", f.onUploadProgress), (f.cancelToken || f.signal) && (C = function(m) {
        !d || (T(!m || m && m.type ? new c() : m), d.abort(), d = null);
      }, f.cancelToken && f.cancelToken.subscribe(C), f.signal && (f.signal.aborted ? C() : f.signal.addEventListener("abort", C))), q || (q = null);
      var fe = l(ue);
      if (fe && ["http", "https", "file"].indexOf(fe) === -1) {
        T(new u("Unsupported protocol " + fe + ":", u.ERR_BAD_REQUEST, f));
        return;
      }
      d.send(q);
    });
  }, be;
}
var _e, rr;
function nn() {
  return rr || (rr = 1, _e = null), _e;
}
var v = y, tr = Vt, nr = I, an = Mr, sn = Hr, on = {
  "Content-Type": "application/x-www-form-urlencoded"
};
function ar(e, r) {
  !v.isUndefined(e) && v.isUndefined(e["Content-Type"]) && (e["Content-Type"] = r);
}
function un() {
  var e;
  return (typeof XMLHttpRequest < "u" || typeof process < "u" && Object.prototype.toString.call(process) === "[object process]") && (e = er()), e;
}
function fn(e, r, t) {
  if (v.isString(e))
    try {
      return (r || JSON.parse)(e), v.trim(e);
    } catch (n) {
      if (n.name !== "SyntaxError")
        throw n;
    }
  return (t || JSON.stringify)(e);
}
var ee = {
  transitional: an,
  adapter: un(),
  transformRequest: [function(r, t) {
    if (tr(t, "Accept"), tr(t, "Content-Type"), v.isFormData(r) || v.isArrayBuffer(r) || v.isBuffer(r) || v.isStream(r) || v.isFile(r) || v.isBlob(r))
      return r;
    if (v.isArrayBufferView(r))
      return r.buffer;
    if (v.isURLSearchParams(r))
      return ar(t, "application/x-www-form-urlencoded;charset=utf-8"), r.toString();
    var n = v.isObject(r), a = t && t["Content-Type"], i;
    if ((i = v.isFileList(r)) || n && a === "multipart/form-data") {
      var s = this.env && this.env.FormData;
      return sn(i ? { "files[]": r } : r, s && new s());
    } else if (n || a === "application/json")
      return ar(t, "application/json"), fn(r);
    return r;
  }],
  transformResponse: [function(r) {
    var t = this.transitional || ee.transitional, n = t && t.silentJSONParsing, a = t && t.forcedJSONParsing, i = !n && this.responseType === "json";
    if (i || a && v.isString(r) && r.length)
      try {
        return JSON.parse(r);
      } catch (s) {
        if (i)
          throw s.name === "SyntaxError" ? nr.from(s, nr.ERR_BAD_RESPONSE, this, null, this.response) : s;
      }
    return r;
  }],
  timeout: 0,
  xsrfCookieName: "XSRF-TOKEN",
  xsrfHeaderName: "X-XSRF-TOKEN",
  maxContentLength: -1,
  maxBodyLength: -1,
  env: {
    FormData: nn()
  },
  validateStatus: function(r) {
    return r >= 200 && r < 300;
  },
  headers: {
    common: {
      Accept: "application/json, text/plain, */*"
    }
  }
};
v.forEach(["delete", "get", "head"], function(r) {
  ee.headers[r] = {};
});
v.forEach(["post", "put", "patch"], function(r) {
  ee.headers[r] = v.merge(on);
});
var Ue = ee, cn = y, ln = Ue, dn = function(r, t, n) {
  var a = this || ln;
  return cn.forEach(n, function(s) {
    r = s.call(a, r, t);
  }), r;
}, ge, ir;
function kr() {
  return ir || (ir = 1, ge = function(r) {
    return !!(r && r.__CANCEL__);
  }), ge;
}
var sr = y, me = dn, hn = kr(), pn = Ue, vn = Z();
function $e(e) {
  if (e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted)
    throw new vn();
}
var yn = function(r) {
  $e(r), r.headers = r.headers || {}, r.data = me.call(
    r,
    r.data,
    r.headers,
    r.transformRequest
  ), r.headers = sr.merge(
    r.headers.common || {},
    r.headers[r.method] || {},
    r.headers
  ), sr.forEach(
    ["delete", "get", "head", "post", "put", "patch", "common"],
    function(a) {
      delete r.headers[a];
    }
  );
  var t = r.adapter || pn.adapter;
  return t(r).then(function(a) {
    return $e(r), a.data = me.call(
      r,
      a.data,
      a.headers,
      r.transformResponse
    ), a;
  }, function(a) {
    return hn(a) || ($e(r), a && a.response && (a.response.data = me.call(
      r,
      a.response.data,
      a.response.headers,
      r.transformResponse
    ))), Promise.reject(a);
  });
}, g = y, zr = function(r, t) {
  t = t || {};
  var n = {};
  function a(l, h) {
    return g.isPlainObject(l) && g.isPlainObject(h) ? g.merge(l, h) : g.isPlainObject(h) ? g.merge({}, h) : g.isArray(h) ? h.slice() : h;
  }
  function i(l) {
    if (g.isUndefined(t[l])) {
      if (!g.isUndefined(r[l]))
        return a(void 0, r[l]);
    } else
      return a(r[l], t[l]);
  }
  function s(l) {
    if (!g.isUndefined(t[l]))
      return a(void 0, t[l]);
  }
  function o(l) {
    if (g.isUndefined(t[l])) {
      if (!g.isUndefined(r[l]))
        return a(void 0, r[l]);
    } else
      return a(void 0, t[l]);
  }
  function u(l) {
    if (l in t)
      return a(r[l], t[l]);
    if (l in r)
      return a(void 0, r[l]);
  }
  var c = {
    url: s,
    method: s,
    data: s,
    baseURL: o,
    transformRequest: o,
    transformResponse: o,
    paramsSerializer: o,
    timeout: o,
    timeoutMessage: o,
    withCredentials: o,
    adapter: o,
    responseType: o,
    xsrfCookieName: o,
    xsrfHeaderName: o,
    onUploadProgress: o,
    onDownloadProgress: o,
    decompress: o,
    maxContentLength: o,
    maxBodyLength: o,
    beforeRedirect: o,
    transport: o,
    httpAgent: o,
    httpsAgent: o,
    cancelToken: o,
    socketPath: o,
    responseEncoding: o,
    validateStatus: u
  };
  return g.forEach(Object.keys(r).concat(Object.keys(t)), function(h) {
    var f = c[h] || i, b = f(h);
    g.isUndefined(b) && f !== u || (n[h] = b);
  }), n;
}, Oe, or;
function Vr() {
  return or || (or = 1, Oe = {
    version: "0.27.2"
  }), Oe;
}
var bn = Vr().version, O = I, Be = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach(function(e, r) {
  Be[e] = function(n) {
    return typeof n === e || "a" + (r < 1 ? "n " : " ") + e;
  };
});
var ur = {};
Be.transitional = function(r, t, n) {
  function a(i, s) {
    return "[Axios v" + bn + "] Transitional option '" + i + "'" + s + (n ? ". " + n : "");
  }
  return function(i, s, o) {
    if (r === !1)
      throw new O(
        a(s, " has been removed" + (t ? " in " + t : "")),
        O.ERR_DEPRECATED
      );
    return t && !ur[s] && (ur[s] = !0, console.warn(
      a(
        s,
        " has been deprecated since v" + t + " and will be removed in the near future"
      )
    )), r ? r(i, s, o) : !0;
  };
};
function _n(e, r, t) {
  if (typeof e != "object")
    throw new O("options must be an object", O.ERR_BAD_OPTION_VALUE);
  for (var n = Object.keys(e), a = n.length; a-- > 0; ) {
    var i = n[a], s = r[i];
    if (s) {
      var o = e[i], u = o === void 0 || s(o, i, e);
      if (u !== !0)
        throw new O("option " + i + " must be " + u, O.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (t !== !0)
      throw new O("Unknown option " + i, O.ERR_BAD_OPTION);
  }
}
var gn = {
  assertOptions: _n,
  validators: Be
}, Jr = y, mn = Ur, fr = kt, cr = yn, re = zr, $n = Gr, Kr = gn, x = Kr.validators;
function D(e) {
  this.defaults = e, this.interceptors = {
    request: new fr(),
    response: new fr()
  };
}
D.prototype.request = function(r, t) {
  typeof r == "string" ? (t = t || {}, t.url = r) : t = r || {}, t = re(this.defaults, t), t.method ? t.method = t.method.toLowerCase() : this.defaults.method ? t.method = this.defaults.method.toLowerCase() : t.method = "get";
  var n = t.transitional;
  n !== void 0 && Kr.assertOptions(n, {
    silentJSONParsing: x.transitional(x.boolean),
    forcedJSONParsing: x.transitional(x.boolean),
    clarifyTimeoutError: x.transitional(x.boolean)
  }, !1);
  var a = [], i = !0;
  this.interceptors.request.forEach(function(b) {
    typeof b.runWhen == "function" && b.runWhen(t) === !1 || (i = i && b.synchronous, a.unshift(b.fulfilled, b.rejected));
  });
  var s = [];
  this.interceptors.response.forEach(function(b) {
    s.push(b.fulfilled, b.rejected);
  });
  var o;
  if (!i) {
    var u = [cr, void 0];
    for (Array.prototype.unshift.apply(u, a), u = u.concat(s), o = Promise.resolve(t); u.length; )
      o = o.then(u.shift(), u.shift());
    return o;
  }
  for (var c = t; a.length; ) {
    var l = a.shift(), h = a.shift();
    try {
      c = l(c);
    } catch (f) {
      h(f);
      break;
    }
  }
  try {
    o = cr(c);
  } catch (f) {
    return Promise.reject(f);
  }
  for (; s.length; )
    o = o.then(s.shift(), s.shift());
  return o;
};
D.prototype.getUri = function(r) {
  r = re(this.defaults, r);
  var t = $n(r.baseURL, r.url);
  return mn(t, r.params, r.paramsSerializer);
};
Jr.forEach(["delete", "get", "head", "options"], function(r) {
  D.prototype[r] = function(t, n) {
    return this.request(re(n || {}, {
      method: r,
      url: t,
      data: (n || {}).data
    }));
  };
});
Jr.forEach(["post", "put", "patch"], function(r) {
  function t(n) {
    return function(i, s, o) {
      return this.request(re(o || {}, {
        method: r,
        headers: n ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: i,
        data: s
      }));
    };
  }
  D.prototype[r] = t(), D.prototype[r + "Form"] = t(!0);
});
var On = D, Ee, lr;
function En() {
  if (lr)
    return Ee;
  lr = 1;
  var e = Z();
  function r(t) {
    if (typeof t != "function")
      throw new TypeError("executor must be a function.");
    var n;
    this.promise = new Promise(function(s) {
      n = s;
    });
    var a = this;
    this.promise.then(function(i) {
      if (!!a._listeners) {
        var s, o = a._listeners.length;
        for (s = 0; s < o; s++)
          a._listeners[s](i);
        a._listeners = null;
      }
    }), this.promise.then = function(i) {
      var s, o = new Promise(function(u) {
        a.subscribe(u), s = u;
      }).then(i);
      return o.cancel = function() {
        a.unsubscribe(s);
      }, o;
    }, t(function(s) {
      a.reason || (a.reason = new e(s), n(a.reason));
    });
  }
  return r.prototype.throwIfRequested = function() {
    if (this.reason)
      throw this.reason;
  }, r.prototype.subscribe = function(n) {
    if (this.reason) {
      n(this.reason);
      return;
    }
    this._listeners ? this._listeners.push(n) : this._listeners = [n];
  }, r.prototype.unsubscribe = function(n) {
    if (!!this._listeners) {
      var a = this._listeners.indexOf(n);
      a !== -1 && this._listeners.splice(a, 1);
    }
  }, r.source = function() {
    var n, a = new r(function(s) {
      n = s;
    });
    return {
      token: a,
      cancel: n
    };
  }, Ee = r, Ee;
}
var we, dr;
function wn() {
  return dr || (dr = 1, we = function(r) {
    return function(n) {
      return r.apply(null, n);
    };
  }), we;
}
var Ae, hr;
function An() {
  if (hr)
    return Ae;
  hr = 1;
  var e = y;
  return Ae = function(t) {
    return e.isObject(t) && t.isAxiosError === !0;
  }, Ae;
}
var pr = y, Tn = Ir, W = On, Cn = zr, Sn = Ue;
function Wr(e) {
  var r = new W(e), t = Tn(W.prototype.request, r);
  return pr.extend(t, W.prototype, r), pr.extend(t, r), t.create = function(a) {
    return Wr(Cn(e, a));
  }, t;
}
var _ = Wr(Sn);
_.Axios = W;
_.CanceledError = Z();
_.CancelToken = En();
_.isCancel = kr();
_.VERSION = Vr().version;
_.toFormData = Hr;
_.AxiosError = I;
_.Cancel = _.CanceledError;
_.all = function(r) {
  return Promise.all(r);
};
_.spread = wn();
_.isAxiosError = An();
xe.exports = _;
xe.exports.default = _;
(function(e) {
  e.exports = xe.exports;
})(Dr);
const Xr = /* @__PURE__ */ $t(Dr.exports);
function Rn() {
  this.__data__ = [], this.size = 0;
}
var Pn = Rn;
function xn(e, r) {
  return e === r || e !== e && r !== r;
}
var te = xn, jn = te;
function Dn(e, r) {
  for (var t = e.length; t--; )
    if (jn(e[t][0], r))
      return t;
  return -1;
}
var ne = Dn, In = ne, Nn = Array.prototype, Ln = Nn.splice;
function Un(e) {
  var r = this.__data__, t = In(r, e);
  if (t < 0)
    return !1;
  var n = r.length - 1;
  return t == n ? r.pop() : Ln.call(r, t, 1), --this.size, !0;
}
var Bn = Un, Fn = ne;
function qn(e) {
  var r = this.__data__, t = Fn(r, e);
  return t < 0 ? void 0 : r[t][1];
}
var Mn = qn, Hn = ne;
function Gn(e) {
  return Hn(this.__data__, e) > -1;
}
var kn = Gn, zn = ne;
function Vn(e, r) {
  var t = this.__data__, n = zn(t, e);
  return n < 0 ? (++this.size, t.push([e, r])) : t[n][1] = r, this;
}
var Jn = Vn, Kn = Pn, Wn = Bn, Xn = Mn, Qn = kn, Yn = Jn;
function N(e) {
  var r = -1, t = e == null ? 0 : e.length;
  for (this.clear(); ++r < t; ) {
    var n = e[r];
    this.set(n[0], n[1]);
  }
}
N.prototype.clear = Kn;
N.prototype.delete = Wn;
N.prototype.get = Xn;
N.prototype.has = Qn;
N.prototype.set = Yn;
var ae = N, Zn = ae;
function ea() {
  this.__data__ = new Zn(), this.size = 0;
}
var ra = ea;
function ta(e) {
  var r = this.__data__, t = r.delete(e);
  return this.size = r.size, t;
}
var na = ta;
function aa(e) {
  return this.__data__.get(e);
}
var ia = aa;
function sa(e) {
  return this.__data__.has(e);
}
var oa = sa, ua = typeof J == "object" && J && J.Object === Object && J, Qr = ua, fa = Qr, ca = typeof self == "object" && self && self.Object === Object && self, la = fa || ca || Function("return this")(), L = la, da = L, ha = da.Symbol, Yr = ha, vr = Yr, Zr = Object.prototype, pa = Zr.hasOwnProperty, va = Zr.toString, G = vr ? vr.toStringTag : void 0;
function ya(e) {
  var r = pa.call(e, G), t = e[G];
  try {
    e[G] = void 0;
    var n = !0;
  } catch {
  }
  var a = va.call(e);
  return n && (r ? e[G] = t : delete e[G]), a;
}
var ba = ya, _a = Object.prototype, ga = _a.toString;
function ma(e) {
  return ga.call(e);
}
var $a = ma, yr = Yr, Oa = ba, Ea = $a, wa = "[object Null]", Aa = "[object Undefined]", br = yr ? yr.toStringTag : void 0;
function Ta(e) {
  return e == null ? e === void 0 ? Aa : wa : br && br in Object(e) ? Oa(e) : Ea(e);
}
var ie = Ta;
function Ca(e) {
  var r = typeof e;
  return e != null && (r == "object" || r == "function");
}
var A = Ca, Sa = ie, Ra = A, Pa = "[object AsyncFunction]", xa = "[object Function]", ja = "[object GeneratorFunction]", Da = "[object Proxy]";
function Ia(e) {
  if (!Ra(e))
    return !1;
  var r = Sa(e);
  return r == xa || r == ja || r == Pa || r == Da;
}
var Fe = Ia, Na = L, La = Na["__core-js_shared__"], Ua = La, Te = Ua, _r = function() {
  var e = /[^.]+$/.exec(Te && Te.keys && Te.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function Ba(e) {
  return !!_r && _r in e;
}
var Fa = Ba, qa = Function.prototype, Ma = qa.toString;
function Ha(e) {
  if (e != null) {
    try {
      return Ma.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var Ga = Ha, ka = Fe, za = Fa, Va = A, Ja = Ga, Ka = /[\\^$.*+?()[\]{}|]/g, Wa = /^\[object .+?Constructor\]$/, Xa = Function.prototype, Qa = Object.prototype, Ya = Xa.toString, Za = Qa.hasOwnProperty, ei = RegExp(
  "^" + Ya.call(Za).replace(Ka, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function ri(e) {
  if (!Va(e) || za(e))
    return !1;
  var r = ka(e) ? ei : Wa;
  return r.test(Ja(e));
}
var ti = ri;
function ni(e, r) {
  return e == null ? void 0 : e[r];
}
var ai = ni, ii = ti, si = ai;
function oi(e, r) {
  var t = si(e, r);
  return ii(t) ? t : void 0;
}
var qe = oi, ui = qe, fi = L, ci = ui(fi, "Map"), et = ci, li = qe, di = li(Object, "create"), se = di, gr = se;
function hi() {
  this.__data__ = gr ? gr(null) : {}, this.size = 0;
}
var pi = hi;
function vi(e) {
  var r = this.has(e) && delete this.__data__[e];
  return this.size -= r ? 1 : 0, r;
}
var yi = vi, bi = se, _i = "__lodash_hash_undefined__", gi = Object.prototype, mi = gi.hasOwnProperty;
function $i(e) {
  var r = this.__data__;
  if (bi) {
    var t = r[e];
    return t === _i ? void 0 : t;
  }
  return mi.call(r, e) ? r[e] : void 0;
}
var Oi = $i, Ei = se, wi = Object.prototype, Ai = wi.hasOwnProperty;
function Ti(e) {
  var r = this.__data__;
  return Ei ? r[e] !== void 0 : Ai.call(r, e);
}
var Ci = Ti, Si = se, Ri = "__lodash_hash_undefined__";
function Pi(e, r) {
  var t = this.__data__;
  return this.size += this.has(e) ? 0 : 1, t[e] = Si && r === void 0 ? Ri : r, this;
}
var xi = Pi, ji = pi, Di = yi, Ii = Oi, Ni = Ci, Li = xi;
function U(e) {
  var r = -1, t = e == null ? 0 : e.length;
  for (this.clear(); ++r < t; ) {
    var n = e[r];
    this.set(n[0], n[1]);
  }
}
U.prototype.clear = ji;
U.prototype.delete = Di;
U.prototype.get = Ii;
U.prototype.has = Ni;
U.prototype.set = Li;
var Ui = U, mr = Ui, Bi = ae, Fi = et;
function qi() {
  this.size = 0, this.__data__ = {
    hash: new mr(),
    map: new (Fi || Bi)(),
    string: new mr()
  };
}
var Mi = qi;
function Hi(e) {
  var r = typeof e;
  return r == "string" || r == "number" || r == "symbol" || r == "boolean" ? e !== "__proto__" : e === null;
}
var Gi = Hi, ki = Gi;
function zi(e, r) {
  var t = e.__data__;
  return ki(r) ? t[typeof r == "string" ? "string" : "hash"] : t.map;
}
var oe = zi, Vi = oe;
function Ji(e) {
  var r = Vi(this, e).delete(e);
  return this.size -= r ? 1 : 0, r;
}
var Ki = Ji, Wi = oe;
function Xi(e) {
  return Wi(this, e).get(e);
}
var Qi = Xi, Yi = oe;
function Zi(e) {
  return Yi(this, e).has(e);
}
var es = Zi, rs = oe;
function ts(e, r) {
  var t = rs(this, e), n = t.size;
  return t.set(e, r), this.size += t.size == n ? 0 : 1, this;
}
var ns = ts, as = Mi, is = Ki, ss = Qi, os = es, us = ns;
function B(e) {
  var r = -1, t = e == null ? 0 : e.length;
  for (this.clear(); ++r < t; ) {
    var n = e[r];
    this.set(n[0], n[1]);
  }
}
B.prototype.clear = as;
B.prototype.delete = is;
B.prototype.get = ss;
B.prototype.has = os;
B.prototype.set = us;
var fs = B, cs = ae, ls = et, ds = fs, hs = 200;
function ps(e, r) {
  var t = this.__data__;
  if (t instanceof cs) {
    var n = t.__data__;
    if (!ls || n.length < hs - 1)
      return n.push([e, r]), this.size = ++t.size, this;
    t = this.__data__ = new ds(n);
  }
  return t.set(e, r), this.size = t.size, this;
}
var vs = ps, ys = ae, bs = ra, _s = na, gs = ia, ms = oa, $s = vs;
function F(e) {
  var r = this.__data__ = new ys(e);
  this.size = r.size;
}
F.prototype.clear = bs;
F.prototype.delete = _s;
F.prototype.get = gs;
F.prototype.has = ms;
F.prototype.set = $s;
var Os = F, Es = qe, ws = function() {
  try {
    var e = Es(Object, "defineProperty");
    return e({}, "", {}), e;
  } catch {
  }
}(), rt = ws, $r = rt;
function As(e, r, t) {
  r == "__proto__" && $r ? $r(e, r, {
    configurable: !0,
    enumerable: !0,
    value: t,
    writable: !0
  }) : e[r] = t;
}
var Me = As, Ts = Me, Cs = te;
function Ss(e, r, t) {
  (t !== void 0 && !Cs(e[r], t) || t === void 0 && !(r in e)) && Ts(e, r, t);
}
var tt = Ss;
function Rs(e) {
  return function(r, t, n) {
    for (var a = -1, i = Object(r), s = n(r), o = s.length; o--; ) {
      var u = s[e ? o : ++a];
      if (t(i[u], u, i) === !1)
        break;
    }
    return r;
  };
}
var Ps = Rs, xs = Ps, js = xs(), Ds = js, Re = { exports: {} };
(function(e, r) {
  var t = L, n = r && !r.nodeType && r, a = n && !0 && e && !e.nodeType && e, i = a && a.exports === n, s = i ? t.Buffer : void 0, o = s ? s.allocUnsafe : void 0;
  function u(c, l) {
    if (l)
      return c.slice();
    var h = c.length, f = o ? o(h) : new c.constructor(h);
    return c.copy(f), f;
  }
  e.exports = u;
})(Re, Re.exports);
var Is = L, Ns = Is.Uint8Array, Ls = Ns, Or = Ls;
function Us(e) {
  var r = new e.constructor(e.byteLength);
  return new Or(r).set(new Or(e)), r;
}
var Bs = Us, Fs = Bs;
function qs(e, r) {
  var t = r ? Fs(e.buffer) : e.buffer;
  return new e.constructor(t, e.byteOffset, e.length);
}
var Ms = qs;
function Hs(e, r) {
  var t = -1, n = e.length;
  for (r || (r = Array(n)); ++t < n; )
    r[t] = e[t];
  return r;
}
var Gs = Hs, ks = A, Er = Object.create, zs = function() {
  function e() {
  }
  return function(r) {
    if (!ks(r))
      return {};
    if (Er)
      return Er(r);
    e.prototype = r;
    var t = new e();
    return e.prototype = void 0, t;
  };
}(), Vs = zs;
function Js(e, r) {
  return function(t) {
    return e(r(t));
  };
}
var Ks = Js, Ws = Ks, Xs = Ws(Object.getPrototypeOf, Object), nt = Xs, Qs = Object.prototype;
function Ys(e) {
  var r = e && e.constructor, t = typeof r == "function" && r.prototype || Qs;
  return e === t;
}
var at = Ys, Zs = Vs, eo = nt, ro = at;
function to(e) {
  return typeof e.constructor == "function" && !ro(e) ? Zs(eo(e)) : {};
}
var no = to;
function ao(e) {
  return e != null && typeof e == "object";
}
var z = ao, io = ie, so = z, oo = "[object Arguments]";
function uo(e) {
  return so(e) && io(e) == oo;
}
var fo = uo, wr = fo, co = z, it = Object.prototype, lo = it.hasOwnProperty, ho = it.propertyIsEnumerable, po = wr(function() {
  return arguments;
}()) ? wr : function(e) {
  return co(e) && lo.call(e, "callee") && !ho.call(e, "callee");
}, st = po, vo = Array.isArray, ot = vo, yo = 9007199254740991;
function bo(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= yo;
}
var ut = bo, _o = Fe, go = ut;
function mo(e) {
  return e != null && go(e.length) && !_o(e);
}
var He = mo, $o = He, Oo = z;
function Eo(e) {
  return Oo(e) && $o(e);
}
var wo = Eo, Q = { exports: {} };
function Ao() {
  return !1;
}
var To = Ao;
(function(e, r) {
  var t = L, n = To, a = r && !r.nodeType && r, i = a && !0 && e && !e.nodeType && e, s = i && i.exports === a, o = s ? t.Buffer : void 0, u = o ? o.isBuffer : void 0, c = u || n;
  e.exports = c;
})(Q, Q.exports);
var Co = ie, So = nt, Ro = z, Po = "[object Object]", xo = Function.prototype, jo = Object.prototype, ft = xo.toString, Do = jo.hasOwnProperty, Io = ft.call(Object);
function No(e) {
  if (!Ro(e) || Co(e) != Po)
    return !1;
  var r = So(e);
  if (r === null)
    return !0;
  var t = Do.call(r, "constructor") && r.constructor;
  return typeof t == "function" && t instanceof t && ft.call(t) == Io;
}
var Lo = No, Uo = ie, Bo = ut, Fo = z, qo = "[object Arguments]", Mo = "[object Array]", Ho = "[object Boolean]", Go = "[object Date]", ko = "[object Error]", zo = "[object Function]", Vo = "[object Map]", Jo = "[object Number]", Ko = "[object Object]", Wo = "[object RegExp]", Xo = "[object Set]", Qo = "[object String]", Yo = "[object WeakMap]", Zo = "[object ArrayBuffer]", eu = "[object DataView]", ru = "[object Float32Array]", tu = "[object Float64Array]", nu = "[object Int8Array]", au = "[object Int16Array]", iu = "[object Int32Array]", su = "[object Uint8Array]", ou = "[object Uint8ClampedArray]", uu = "[object Uint16Array]", fu = "[object Uint32Array]", p = {};
p[ru] = p[tu] = p[nu] = p[au] = p[iu] = p[su] = p[ou] = p[uu] = p[fu] = !0;
p[qo] = p[Mo] = p[Zo] = p[Ho] = p[eu] = p[Go] = p[ko] = p[zo] = p[Vo] = p[Jo] = p[Ko] = p[Wo] = p[Xo] = p[Qo] = p[Yo] = !1;
function cu(e) {
  return Fo(e) && Bo(e.length) && !!p[Uo(e)];
}
var lu = cu;
function du(e) {
  return function(r) {
    return e(r);
  };
}
var hu = du, Pe = { exports: {} };
(function(e, r) {
  var t = Qr, n = r && !r.nodeType && r, a = n && !0 && e && !e.nodeType && e, i = a && a.exports === n, s = i && t.process, o = function() {
    try {
      var u = a && a.require && a.require("util").types;
      return u || s && s.binding && s.binding("util");
    } catch {
    }
  }();
  e.exports = o;
})(Pe, Pe.exports);
var pu = lu, vu = hu, Ar = Pe.exports, Tr = Ar && Ar.isTypedArray, yu = Tr ? vu(Tr) : pu, ct = yu;
function bu(e, r) {
  if (!(r === "constructor" && typeof e[r] == "function") && r != "__proto__")
    return e[r];
}
var lt = bu, _u = Me, gu = te, mu = Object.prototype, $u = mu.hasOwnProperty;
function Ou(e, r, t) {
  var n = e[r];
  (!($u.call(e, r) && gu(n, t)) || t === void 0 && !(r in e)) && _u(e, r, t);
}
var Eu = Ou, wu = Eu, Au = Me;
function Tu(e, r, t, n) {
  var a = !t;
  t || (t = {});
  for (var i = -1, s = r.length; ++i < s; ) {
    var o = r[i], u = n ? n(t[o], e[o], o, t, e) : void 0;
    u === void 0 && (u = e[o]), a ? Au(t, o, u) : wu(t, o, u);
  }
  return t;
}
var Cu = Tu;
function Su(e, r) {
  for (var t = -1, n = Array(e); ++t < e; )
    n[t] = r(t);
  return n;
}
var Ru = Su, Pu = 9007199254740991, xu = /^(?:0|[1-9]\d*)$/;
function ju(e, r) {
  var t = typeof e;
  return r = r == null ? Pu : r, !!r && (t == "number" || t != "symbol" && xu.test(e)) && e > -1 && e % 1 == 0 && e < r;
}
var dt = ju, Du = Ru, Iu = st, Nu = ot, Lu = Q.exports, Uu = dt, Bu = ct, Fu = Object.prototype, qu = Fu.hasOwnProperty;
function Mu(e, r) {
  var t = Nu(e), n = !t && Iu(e), a = !t && !n && Lu(e), i = !t && !n && !a && Bu(e), s = t || n || a || i, o = s ? Du(e.length, String) : [], u = o.length;
  for (var c in e)
    (r || qu.call(e, c)) && !(s && (c == "length" || a && (c == "offset" || c == "parent") || i && (c == "buffer" || c == "byteLength" || c == "byteOffset") || Uu(c, u))) && o.push(c);
  return o;
}
var Hu = Mu;
function Gu(e) {
  var r = [];
  if (e != null)
    for (var t in Object(e))
      r.push(t);
  return r;
}
var ku = Gu, zu = A, Vu = at, Ju = ku, Ku = Object.prototype, Wu = Ku.hasOwnProperty;
function Xu(e) {
  if (!zu(e))
    return Ju(e);
  var r = Vu(e), t = [];
  for (var n in e)
    n == "constructor" && (r || !Wu.call(e, n)) || t.push(n);
  return t;
}
var Qu = Xu, Yu = Hu, Zu = Qu, ef = He;
function rf(e) {
  return ef(e) ? Yu(e, !0) : Zu(e);
}
var ht = rf, tf = Cu, nf = ht;
function af(e) {
  return tf(e, nf(e));
}
var sf = af, Cr = tt, of = Re.exports, uf = Ms, ff = Gs, cf = no, Sr = st, Rr = ot, lf = wo, df = Q.exports, hf = Fe, pf = A, vf = Lo, yf = ct, Pr = lt, bf = sf;
function _f(e, r, t, n, a, i, s) {
  var o = Pr(e, t), u = Pr(r, t), c = s.get(u);
  if (c) {
    Cr(e, t, c);
    return;
  }
  var l = i ? i(o, u, t + "", e, r, s) : void 0, h = l === void 0;
  if (h) {
    var f = Rr(u), b = !f && df(u), V = !f && !b && yf(u);
    l = u, f || b || V ? Rr(o) ? l = o : lf(o) ? l = ff(o) : b ? (h = !1, l = of(u, !0)) : V ? (h = !1, l = uf(u, !0)) : l = [] : vf(u) || Sr(u) ? (l = o, Sr(o) ? l = bf(o) : (!pf(o) || hf(o)) && (l = cf(u))) : h = !1;
  }
  h && (s.set(u, l), a(l, u, n, i, s), s.delete(u)), Cr(e, t, l);
}
var gf = _f, mf = Os, $f = tt, Of = Ds, Ef = gf, wf = A, Af = ht, Tf = lt;
function pt(e, r, t, n, a) {
  e !== r && Of(r, function(i, s) {
    if (a || (a = new mf()), wf(i))
      Ef(e, r, s, t, pt, n, a);
    else {
      var o = n ? n(Tf(e, s), i, s + "", e, r, a) : void 0;
      o === void 0 && (o = i), $f(e, s, o);
    }
  }, Af);
}
var Cf = pt;
function Sf(e) {
  return e;
}
var vt = Sf;
function Rf(e, r, t) {
  switch (t.length) {
    case 0:
      return e.call(r);
    case 1:
      return e.call(r, t[0]);
    case 2:
      return e.call(r, t[0], t[1]);
    case 3:
      return e.call(r, t[0], t[1], t[2]);
  }
  return e.apply(r, t);
}
var Pf = Rf, xf = Pf, xr = Math.max;
function jf(e, r, t) {
  return r = xr(r === void 0 ? e.length - 1 : r, 0), function() {
    for (var n = arguments, a = -1, i = xr(n.length - r, 0), s = Array(i); ++a < i; )
      s[a] = n[r + a];
    a = -1;
    for (var o = Array(r + 1); ++a < r; )
      o[a] = n[a];
    return o[r] = t(s), xf(e, this, o);
  };
}
var Df = jf;
function If(e) {
  return function() {
    return e;
  };
}
var Nf = If, Lf = Nf, jr = rt, Uf = vt, Bf = jr ? function(e, r) {
  return jr(e, "toString", {
    configurable: !0,
    enumerable: !1,
    value: Lf(r),
    writable: !0
  });
} : Uf, Ff = Bf, qf = 800, Mf = 16, Hf = Date.now;
function Gf(e) {
  var r = 0, t = 0;
  return function() {
    var n = Hf(), a = Mf - (n - t);
    if (t = n, a > 0) {
      if (++r >= qf)
        return arguments[0];
    } else
      r = 0;
    return e.apply(void 0, arguments);
  };
}
var kf = Gf, zf = Ff, Vf = kf, Jf = Vf(zf), Kf = Jf, Wf = vt, Xf = Df, Qf = Kf;
function Yf(e, r) {
  return Qf(Xf(e, r, Wf), e + "");
}
var Zf = Yf, ec = te, rc = He, tc = dt, nc = A;
function ac(e, r, t) {
  if (!nc(t))
    return !1;
  var n = typeof r;
  return (n == "number" ? rc(t) && tc(r, t.length) : n == "string" && r in t) ? ec(t[r], e) : !1;
}
var ic = ac, sc = Zf, oc = ic;
function uc(e) {
  return sc(function(r, t) {
    var n = -1, a = t.length, i = a > 1 ? t[a - 1] : void 0, s = a > 2 ? t[2] : void 0;
    for (i = e.length > 3 && typeof i == "function" ? (a--, i) : void 0, s && oc(t[0], t[1], s) && (i = a < 3 ? void 0 : i, a = 1), r = Object(r); ++n < a; ) {
      var o = t[n];
      o && e(r, o, n, i);
    }
    return r;
  });
}
var fc = uc, cc = Cf, lc = fc, dc = lc(function(e, r, t) {
  cc(e, r, t);
}), k = dc;
const hc = "/repos/{owner}/{repo}/contents/{path}", pc = "/repos/{owner}/{repo}/contents/{path}";
function vc(e) {
  return Xr.create(k({
    headers: {
      Authorization: "Bearer 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",
      "Content-Type": "application/json",
      Accept: "application/vnd.github+json"
    },
    timeout: 5 * 1e3,
    baseURL: "https://api.github.com"
  }, e));
}
function Ce(e, r) {
  return e.replace(/{owner}/g, r.owner).replace(/{repo}/g, r.repo);
}
class yc {
  constructor(r) {
    R(this, "token");
    R(this, "owner");
    R(this, "repo");
    R(this, "axios");
    R(this, "ref", "api");
    var t;
    this.config(r), this.axios = (t = r == null ? void 0 : r.axios) != null ? t : vc();
  }
  config(r) {
    var t, n;
    r != null && r.token && (this.token = r.token), this.owner = (t = r == null ? void 0 : r.owner) != null ? t : "pinghuazhuang", this.repo = (n = r == null ? void 0 : r.repo) != null ? n : "note";
  }
  read(r, t, n) {
    return Xr.get(
      Ce(
        `{owner}/{repo}/api/${r.replace(/(.*?)(\.json)?$/, "$1.json")}`,
        this
      ).replace(/{path}/g, r),
      k({
        params: k({
          ref: this.ref
        }, t),
        headers: {
          "Content-Type": "text/plain"
        },
        baseURL: "https://raw.githubusercontent.com"
      }, n)
    ).then((a) => a.data);
  }
  delete(r, t, n) {
    return r = r.replace(/(.*?)(\.json)?$/, "$1.json"), n = k({
      ref: this.ref
    }, n), this.axios.get(
      Ce(
        hc,
        this
      ).replace(/{path}/g, r),
      {
        params: n
      }
    ).then((a) => this.axios.delete(Ce(
      pc,
      this
    ).replace(/{path}/g, r), {
      data: k({
        message: `delete(GIT-API): ${r}`,
        branch: this.ref,
        sha: a.data.sha,
        committer: { name: "Monalisa Octocat", email: "octocat@github.com" }
      }, t)
    }));
  }
}
const _c = new yc();
export {
  _c as default
};
