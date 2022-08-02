var St = Object.defineProperty;
var Rt = (e, r, t) => r in e ? St(e, r, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[r] = t;
var R = (e, r, t) => (Rt(e, typeof r != "symbol" ? r + "" : r, t), t);
var W = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Pt(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Hr = { exports: {} }, Le = { exports: {} }, Gr = function(r, t) {
  return function() {
    for (var a = new Array(arguments.length), i = 0; i < a.length; i++)
      a[i] = arguments[i];
    return r.apply(t, a);
  };
}, jt = Gr, Fe = Object.prototype.toString, Be = function(e) {
  return function(r) {
    var t = Fe.call(r);
    return e[t] || (e[t] = t.slice(8, -1).toLowerCase());
  };
}(/* @__PURE__ */ Object.create(null));
function w(e) {
  return e = e.toLowerCase(), function(t) {
    return Be(t) === e;
  };
}
function qe(e) {
  return Array.isArray(e);
}
function Y(e) {
  return typeof e > "u";
}
function Dt(e) {
  return e !== null && !Y(e) && e.constructor !== null && !Y(e.constructor) && typeof e.constructor.isBuffer == "function" && e.constructor.isBuffer(e);
}
var kr = w("ArrayBuffer");
function It(e) {
  var r;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? r = ArrayBuffer.isView(e) : r = e && e.buffer && kr(e.buffer), r;
}
function Nt(e) {
  return typeof e == "string";
}
function Ut(e) {
  return typeof e == "number";
}
function zr(e) {
  return e !== null && typeof e == "object";
}
function X(e) {
  if (Be(e) !== "object")
    return !1;
  var r = Object.getPrototypeOf(e);
  return r === null || r === Object.prototype;
}
var Lt = w("Date"), Ft = w("File"), Bt = w("Blob"), qt = w("FileList");
function Me(e) {
  return Fe.call(e) === "[object Function]";
}
function Mt(e) {
  return zr(e) && Me(e.pipe);
}
function Ht(e) {
  var r = "[object FormData]";
  return e && (typeof FormData == "function" && e instanceof FormData || Fe.call(e) === r || Me(e.toString) && e.toString() === r);
}
var Gt = w("URLSearchParams");
function kt(e) {
  return e.trim ? e.trim() : e.replace(/^\s+|\s+$/g, "");
}
function zt() {
  return typeof navigator < "u" && (navigator.product === "ReactNative" || navigator.product === "NativeScript" || navigator.product === "NS") ? !1 : typeof window < "u" && typeof document < "u";
}
function He(e, r) {
  if (!(e === null || typeof e > "u"))
    if (typeof e != "object" && (e = [e]), qe(e))
      for (var t = 0, n = e.length; t < n; t++)
        r.call(null, e[t], t, e);
    else
      for (var a in e)
        Object.prototype.hasOwnProperty.call(e, a) && r.call(null, e[a], a, e);
}
function je() {
  var e = {};
  function r(a, i) {
    X(e[i]) && X(a) ? e[i] = je(e[i], a) : X(a) ? e[i] = je({}, a) : qe(a) ? e[i] = a.slice() : e[i] = a;
  }
  for (var t = 0, n = arguments.length; t < n; t++)
    He(arguments[t], r);
  return e;
}
function Vt(e, r, t) {
  return He(r, function(a, i) {
    t && typeof a == "function" ? e[i] = jt(a, t) : e[i] = a;
  }), e;
}
function Jt(e) {
  return e.charCodeAt(0) === 65279 && (e = e.slice(1)), e;
}
function Kt(e, r, t, n) {
  e.prototype = Object.create(r.prototype, n), e.prototype.constructor = e, t && Object.assign(e.prototype, t);
}
function Wt(e, r, t) {
  var n, a, i, s = {};
  r = r || {};
  do {
    for (n = Object.getOwnPropertyNames(e), a = n.length; a-- > 0; )
      i = n[a], s[i] || (r[i] = e[i], s[i] = !0);
    e = Object.getPrototypeOf(e);
  } while (e && (!t || t(e, r)) && e !== Object.prototype);
  return r;
}
function Xt(e, r, t) {
  e = String(e), (t === void 0 || t > e.length) && (t = e.length), t -= r.length;
  var n = e.indexOf(r, t);
  return n !== -1 && n === t;
}
function Qt(e) {
  if (!e)
    return null;
  var r = e.length;
  if (Y(r))
    return null;
  for (var t = new Array(r); r-- > 0; )
    t[r] = e[r];
  return t;
}
var Yt = function(e) {
  return function(r) {
    return e && r instanceof e;
  };
}(typeof Uint8Array < "u" && Object.getPrototypeOf(Uint8Array)), y = {
  isArray: qe,
  isArrayBuffer: kr,
  isBuffer: Dt,
  isFormData: Ht,
  isArrayBufferView: It,
  isString: Nt,
  isNumber: Ut,
  isObject: zr,
  isPlainObject: X,
  isUndefined: Y,
  isDate: Lt,
  isFile: Ft,
  isBlob: Bt,
  isFunction: Me,
  isStream: Mt,
  isURLSearchParams: Gt,
  isStandardBrowserEnv: zt,
  forEach: He,
  merge: je,
  extend: Vt,
  trim: kt,
  stripBOM: Jt,
  inherits: Kt,
  toFlatObject: Wt,
  kindOf: Be,
  kindOfTest: w,
  endsWith: Xt,
  toArray: Qt,
  isTypedArray: Yt,
  isFileList: qt
}, P = y;
function Ze(e) {
  return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
var Vr = function(r, t, n) {
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
      u === null || typeof u > "u" || (P.isArray(u) ? c = c + "[]" : u = [u], P.forEach(u, function(d) {
        P.isDate(d) ? d = d.toISOString() : P.isObject(d) && (d = JSON.stringify(d)), i.push(Ze(c) + "=" + Ze(d));
      }));
    }), a = i.join("&");
  }
  if (a) {
    var s = r.indexOf("#");
    s !== -1 && (r = r.slice(0, s)), r += (r.indexOf("?") === -1 ? "?" : "&") + a;
  }
  return r;
}, Zt = y;
function ee() {
  this.handlers = [];
}
ee.prototype.use = function(r, t, n) {
  return this.handlers.push({
    fulfilled: r,
    rejected: t,
    synchronous: n ? n.synchronous : !1,
    runWhen: n ? n.runWhen : null
  }), this.handlers.length - 1;
};
ee.prototype.eject = function(r) {
  this.handlers[r] && (this.handlers[r] = null);
};
ee.prototype.forEach = function(r) {
  Zt.forEach(this.handlers, function(n) {
    n !== null && r(n);
  });
};
var en = ee, rn = y, tn = function(r, t) {
  rn.forEach(r, function(a, i) {
    i !== t && i.toUpperCase() === t.toUpperCase() && (r[t] = a, delete r[i]);
  });
}, Jr = y;
function I(e, r, t, n, a) {
  Error.call(this), this.message = e, this.name = "AxiosError", r && (this.code = r), t && (this.config = t), n && (this.request = n), a && (this.response = a);
}
Jr.inherits(I, Error, {
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
var Kr = I.prototype, Wr = {};
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
  Wr[e] = { value: e };
});
Object.defineProperties(I, Wr);
Object.defineProperty(Kr, "isAxiosError", { value: !0 });
I.from = function(e, r, t, n, a, i) {
  var s = Object.create(Kr);
  return Jr.toFlatObject(e, s, function(u) {
    return u !== Error.prototype;
  }), I.call(s, e.message, r, t, n, a), s.name = e.name, i && Object.assign(s, i), s;
};
var U = I, Xr = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, $ = y;
function nn(e, r) {
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
          var l = s ? s + "." + c : c, d;
          if (u && !s && typeof u == "object") {
            if ($.endsWith(c, "{}"))
              u = JSON.stringify(u);
            else if ($.endsWith(c, "[]") && (d = $.toArray(u))) {
              d.forEach(function(f) {
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
var Qr = nn, de, er;
function an() {
  if (er)
    return de;
  er = 1;
  var e = U;
  return de = function(t, n, a) {
    var i = a.config.validateStatus;
    !a.status || !i || i(a.status) ? t(a) : n(new e(
      "Request failed with status code " + a.status,
      [e.ERR_BAD_REQUEST, e.ERR_BAD_RESPONSE][Math.floor(a.status / 100) - 4],
      a.config,
      a.request,
      a
    ));
  }, de;
}
var pe, rr;
function sn() {
  if (rr)
    return pe;
  rr = 1;
  var e = y;
  return pe = e.isStandardBrowserEnv() ? function() {
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
  }(), pe;
}
var on = function(r) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(r);
}, un = function(r, t) {
  return t ? r.replace(/\/+$/, "") + "/" + t.replace(/^\/+/, "") : r;
}, fn = on, cn = un, Yr = function(r, t) {
  return r && !fn(t) ? cn(r, t) : t;
}, ve, tr;
function ln() {
  if (tr)
    return ve;
  tr = 1;
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
  return ve = function(n) {
    var a = {}, i, s, o;
    return n && e.forEach(n.split(`
`), function(c) {
      if (o = c.indexOf(":"), i = e.trim(c.substr(0, o)).toLowerCase(), s = e.trim(c.substr(o + 1)), i) {
        if (a[i] && r.indexOf(i) >= 0)
          return;
        i === "set-cookie" ? a[i] = (a[i] ? a[i] : []).concat([s]) : a[i] = a[i] ? a[i] + ", " + s : s;
      }
    }), a;
  }, ve;
}
var ye, nr;
function hn() {
  if (nr)
    return ye;
  nr = 1;
  var e = y;
  return ye = e.isStandardBrowserEnv() ? function() {
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
  }(), ye;
}
var be, ar;
function re() {
  if (ar)
    return be;
  ar = 1;
  var e = U, r = y;
  function t(n) {
    e.call(this, n == null ? "canceled" : n, e.ERR_CANCELED), this.name = "CanceledError";
  }
  return r.inherits(t, e, {
    __CANCEL__: !0
  }), be = t, be;
}
var _e, ir;
function dn() {
  return ir || (ir = 1, _e = function(r) {
    var t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(r);
    return t && t[1] || "";
  }), _e;
}
var ge, sr;
function or() {
  if (sr)
    return ge;
  sr = 1;
  var e = y, r = an(), t = sn(), n = Vr, a = Yr, i = ln(), s = hn(), o = Xr, u = U, c = re(), l = dn();
  return ge = function(f) {
    return new Promise(function(K, T) {
      var H = f.data, G = f.headers, k = f.responseType, x;
      function Xe() {
        f.cancelToken && f.cancelToken.unsubscribe(x), f.signal && f.signal.removeEventListener("abort", x);
      }
      e.isFormData(H) && e.isStandardBrowserEnv() && delete G["Content-Type"];
      var h = new XMLHttpRequest();
      if (f.auth) {
        var Ct = f.auth.username || "", Tt = f.auth.password ? unescape(encodeURIComponent(f.auth.password)) : "";
        G.Authorization = "Basic " + btoa(Ct + ":" + Tt);
      }
      var ce = a(f.baseURL, f.url);
      h.open(f.method.toUpperCase(), n(ce, f.params, f.paramsSerializer), !0), h.timeout = f.timeout;
      function Qe() {
        if (!!h) {
          var m = "getAllResponseHeaders" in h ? i(h.getAllResponseHeaders()) : null, S = !k || k === "text" || k === "json" ? h.responseText : h.response, A = {
            data: S,
            status: h.status,
            statusText: h.statusText,
            headers: m,
            config: f,
            request: h
          };
          r(function(he) {
            K(he), Xe();
          }, function(he) {
            T(he), Xe();
          }, A), h = null;
        }
      }
      if ("onloadend" in h ? h.onloadend = Qe : h.onreadystatechange = function() {
        !h || h.readyState !== 4 || h.status === 0 && !(h.responseURL && h.responseURL.indexOf("file:") === 0) || setTimeout(Qe);
      }, h.onabort = function() {
        !h || (T(new u("Request aborted", u.ECONNABORTED, f, h)), h = null);
      }, h.onerror = function() {
        T(new u("Network Error", u.ERR_NETWORK, f, h, h)), h = null;
      }, h.ontimeout = function() {
        var S = f.timeout ? "timeout of " + f.timeout + "ms exceeded" : "timeout exceeded", A = f.transitional || o;
        f.timeoutErrorMessage && (S = f.timeoutErrorMessage), T(new u(
          S,
          A.clarifyTimeoutError ? u.ETIMEDOUT : u.ECONNABORTED,
          f,
          h
        )), h = null;
      }, e.isStandardBrowserEnv()) {
        var Ye = (f.withCredentials || s(ce)) && f.xsrfCookieName ? t.read(f.xsrfCookieName) : void 0;
        Ye && (G[f.xsrfHeaderName] = Ye);
      }
      "setRequestHeader" in h && e.forEach(G, function(S, A) {
        typeof H > "u" && A.toLowerCase() === "content-type" ? delete G[A] : h.setRequestHeader(A, S);
      }), e.isUndefined(f.withCredentials) || (h.withCredentials = !!f.withCredentials), k && k !== "json" && (h.responseType = f.responseType), typeof f.onDownloadProgress == "function" && h.addEventListener("progress", f.onDownloadProgress), typeof f.onUploadProgress == "function" && h.upload && h.upload.addEventListener("progress", f.onUploadProgress), (f.cancelToken || f.signal) && (x = function(m) {
        !h || (T(!m || m && m.type ? new c() : m), h.abort(), h = null);
      }, f.cancelToken && f.cancelToken.subscribe(x), f.signal && (f.signal.aborted ? x() : f.signal.addEventListener("abort", x))), H || (H = null);
      var le = l(ce);
      if (le && ["http", "https", "file"].indexOf(le) === -1) {
        T(new u("Unsupported protocol " + le + ":", u.ERR_BAD_REQUEST, f));
        return;
      }
      h.send(H);
    });
  }, ge;
}
var me, ur;
function pn() {
  return ur || (ur = 1, me = null), me;
}
var v = y, fr = tn, cr = U, vn = Xr, yn = Qr, bn = {
  "Content-Type": "application/x-www-form-urlencoded"
};
function lr(e, r) {
  !v.isUndefined(e) && v.isUndefined(e["Content-Type"]) && (e["Content-Type"] = r);
}
function _n() {
  var e;
  return (typeof XMLHttpRequest < "u" || typeof process < "u" && Object.prototype.toString.call(process) === "[object process]") && (e = or()), e;
}
function gn(e, r, t) {
  if (v.isString(e))
    try {
      return (r || JSON.parse)(e), v.trim(e);
    } catch (n) {
      if (n.name !== "SyntaxError")
        throw n;
    }
  return (t || JSON.stringify)(e);
}
var te = {
  transitional: vn,
  adapter: _n(),
  transformRequest: [function(r, t) {
    if (fr(t, "Accept"), fr(t, "Content-Type"), v.isFormData(r) || v.isArrayBuffer(r) || v.isBuffer(r) || v.isStream(r) || v.isFile(r) || v.isBlob(r))
      return r;
    if (v.isArrayBufferView(r))
      return r.buffer;
    if (v.isURLSearchParams(r))
      return lr(t, "application/x-www-form-urlencoded;charset=utf-8"), r.toString();
    var n = v.isObject(r), a = t && t["Content-Type"], i;
    if ((i = v.isFileList(r)) || n && a === "multipart/form-data") {
      var s = this.env && this.env.FormData;
      return yn(i ? { "files[]": r } : r, s && new s());
    } else if (n || a === "application/json")
      return lr(t, "application/json"), gn(r);
    return r;
  }],
  transformResponse: [function(r) {
    var t = this.transitional || te.transitional, n = t && t.silentJSONParsing, a = t && t.forcedJSONParsing, i = !n && this.responseType === "json";
    if (i || a && v.isString(r) && r.length)
      try {
        return JSON.parse(r);
      } catch (s) {
        if (i)
          throw s.name === "SyntaxError" ? cr.from(s, cr.ERR_BAD_RESPONSE, this, null, this.response) : s;
      }
    return r;
  }],
  timeout: 0,
  xsrfCookieName: "XSRF-TOKEN",
  xsrfHeaderName: "X-XSRF-TOKEN",
  maxContentLength: -1,
  maxBodyLength: -1,
  env: {
    FormData: pn()
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
  te.headers[r] = {};
});
v.forEach(["post", "put", "patch"], function(r) {
  te.headers[r] = v.merge(bn);
});
var Ge = te, mn = y, $n = Ge, On = function(r, t, n) {
  var a = this || $n;
  return mn.forEach(n, function(s) {
    r = s.call(a, r, t);
  }), r;
}, $e, hr;
function Zr() {
  return hr || (hr = 1, $e = function(r) {
    return !!(r && r.__CANCEL__);
  }), $e;
}
var dr = y, Oe = On, En = Zr(), An = Ge, wn = re();
function Ee(e) {
  if (e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted)
    throw new wn();
}
var Cn = function(r) {
  Ee(r), r.headers = r.headers || {}, r.data = Oe.call(
    r,
    r.data,
    r.headers,
    r.transformRequest
  ), r.headers = dr.merge(
    r.headers.common || {},
    r.headers[r.method] || {},
    r.headers
  ), dr.forEach(
    ["delete", "get", "head", "post", "put", "patch", "common"],
    function(a) {
      delete r.headers[a];
    }
  );
  var t = r.adapter || An.adapter;
  return t(r).then(function(a) {
    return Ee(r), a.data = Oe.call(
      r,
      a.data,
      a.headers,
      r.transformResponse
    ), a;
  }, function(a) {
    return En(a) || (Ee(r), a && a.response && (a.response.data = Oe.call(
      r,
      a.response.data,
      a.response.headers,
      r.transformResponse
    ))), Promise.reject(a);
  });
}, g = y, et = function(r, t) {
  t = t || {};
  var n = {};
  function a(l, d) {
    return g.isPlainObject(l) && g.isPlainObject(d) ? g.merge(l, d) : g.isPlainObject(d) ? g.merge({}, d) : g.isArray(d) ? d.slice() : d;
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
  return g.forEach(Object.keys(r).concat(Object.keys(t)), function(d) {
    var f = c[d] || i, b = f(d);
    g.isUndefined(b) && f !== u || (n[d] = b);
  }), n;
}, Ae, pr;
function rt() {
  return pr || (pr = 1, Ae = {
    version: "0.27.2"
  }), Ae;
}
var Tn = rt().version, E = U, ke = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach(function(e, r) {
  ke[e] = function(n) {
    return typeof n === e || "a" + (r < 1 ? "n " : " ") + e;
  };
});
var vr = {};
ke.transitional = function(r, t, n) {
  function a(i, s) {
    return "[Axios v" + Tn + "] Transitional option '" + i + "'" + s + (n ? ". " + n : "");
  }
  return function(i, s, o) {
    if (r === !1)
      throw new E(
        a(s, " has been removed" + (t ? " in " + t : "")),
        E.ERR_DEPRECATED
      );
    return t && !vr[s] && (vr[s] = !0, console.warn(
      a(
        s,
        " has been deprecated since v" + t + " and will be removed in the near future"
      )
    )), r ? r(i, s, o) : !0;
  };
};
function xn(e, r, t) {
  if (typeof e != "object")
    throw new E("options must be an object", E.ERR_BAD_OPTION_VALUE);
  for (var n = Object.keys(e), a = n.length; a-- > 0; ) {
    var i = n[a], s = r[i];
    if (s) {
      var o = e[i], u = o === void 0 || s(o, i, e);
      if (u !== !0)
        throw new E("option " + i + " must be " + u, E.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (t !== !0)
      throw new E("Unknown option " + i, E.ERR_BAD_OPTION);
  }
}
var Sn = {
  assertOptions: xn,
  validators: ke
}, tt = y, Rn = Vr, yr = en, br = Cn, ne = et, Pn = Yr, nt = Sn, j = nt.validators;
function N(e) {
  this.defaults = e, this.interceptors = {
    request: new yr(),
    response: new yr()
  };
}
N.prototype.request = function(r, t) {
  typeof r == "string" ? (t = t || {}, t.url = r) : t = r || {}, t = ne(this.defaults, t), t.method ? t.method = t.method.toLowerCase() : this.defaults.method ? t.method = this.defaults.method.toLowerCase() : t.method = "get";
  var n = t.transitional;
  n !== void 0 && nt.assertOptions(n, {
    silentJSONParsing: j.transitional(j.boolean),
    forcedJSONParsing: j.transitional(j.boolean),
    clarifyTimeoutError: j.transitional(j.boolean)
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
    var u = [br, void 0];
    for (Array.prototype.unshift.apply(u, a), u = u.concat(s), o = Promise.resolve(t); u.length; )
      o = o.then(u.shift(), u.shift());
    return o;
  }
  for (var c = t; a.length; ) {
    var l = a.shift(), d = a.shift();
    try {
      c = l(c);
    } catch (f) {
      d(f);
      break;
    }
  }
  try {
    o = br(c);
  } catch (f) {
    return Promise.reject(f);
  }
  for (; s.length; )
    o = o.then(s.shift(), s.shift());
  return o;
};
N.prototype.getUri = function(r) {
  r = ne(this.defaults, r);
  var t = Pn(r.baseURL, r.url);
  return Rn(t, r.params, r.paramsSerializer);
};
tt.forEach(["delete", "get", "head", "options"], function(r) {
  N.prototype[r] = function(t, n) {
    return this.request(ne(n || {}, {
      method: r,
      url: t,
      data: (n || {}).data
    }));
  };
});
tt.forEach(["post", "put", "patch"], function(r) {
  function t(n) {
    return function(i, s, o) {
      return this.request(ne(o || {}, {
        method: r,
        headers: n ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: i,
        data: s
      }));
    };
  }
  N.prototype[r] = t(), N.prototype[r + "Form"] = t(!0);
});
var jn = N, we, _r;
function Dn() {
  if (_r)
    return we;
  _r = 1;
  var e = re();
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
  }, we = r, we;
}
var Ce, gr;
function In() {
  return gr || (gr = 1, Ce = function(r) {
    return function(n) {
      return r.apply(null, n);
    };
  }), Ce;
}
var Te, mr;
function Nn() {
  if (mr)
    return Te;
  mr = 1;
  var e = y;
  return Te = function(t) {
    return e.isObject(t) && t.isAxiosError === !0;
  }, Te;
}
var $r = y, Un = Gr, Q = jn, Ln = et, Fn = Ge;
function at(e) {
  var r = new Q(e), t = Un(Q.prototype.request, r);
  return $r.extend(t, Q.prototype, r), $r.extend(t, r), t.create = function(a) {
    return at(Ln(e, a));
  }, t;
}
var _ = at(Fn);
_.Axios = Q;
_.CanceledError = re();
_.CancelToken = Dn();
_.isCancel = Zr();
_.VERSION = rt().version;
_.toFormData = Qr;
_.AxiosError = U;
_.Cancel = _.CanceledError;
_.all = function(r) {
  return Promise.all(r);
};
_.spread = In();
_.isAxiosError = Nn();
Le.exports = _;
Le.exports.default = _;
(function(e) {
  e.exports = Le.exports;
})(Hr);
const it = /* @__PURE__ */ Pt(Hr.exports);
function Bn() {
  this.__data__ = [], this.size = 0;
}
var qn = Bn;
function Mn(e, r) {
  return e === r || e !== e && r !== r;
}
var ae = Mn, Hn = ae;
function Gn(e, r) {
  for (var t = e.length; t--; )
    if (Hn(e[t][0], r))
      return t;
  return -1;
}
var ie = Gn, kn = ie, zn = Array.prototype, Vn = zn.splice;
function Jn(e) {
  var r = this.__data__, t = kn(r, e);
  if (t < 0)
    return !1;
  var n = r.length - 1;
  return t == n ? r.pop() : Vn.call(r, t, 1), --this.size, !0;
}
var Kn = Jn, Wn = ie;
function Xn(e) {
  var r = this.__data__, t = Wn(r, e);
  return t < 0 ? void 0 : r[t][1];
}
var Qn = Xn, Yn = ie;
function Zn(e) {
  return Yn(this.__data__, e) > -1;
}
var ea = Zn, ra = ie;
function ta(e, r) {
  var t = this.__data__, n = ra(t, e);
  return n < 0 ? (++this.size, t.push([e, r])) : t[n][1] = r, this;
}
var na = ta, aa = qn, ia = Kn, sa = Qn, oa = ea, ua = na;
function L(e) {
  var r = -1, t = e == null ? 0 : e.length;
  for (this.clear(); ++r < t; ) {
    var n = e[r];
    this.set(n[0], n[1]);
  }
}
L.prototype.clear = aa;
L.prototype.delete = ia;
L.prototype.get = sa;
L.prototype.has = oa;
L.prototype.set = ua;
var se = L, fa = se;
function ca() {
  this.__data__ = new fa(), this.size = 0;
}
var la = ca;
function ha(e) {
  var r = this.__data__, t = r.delete(e);
  return this.size = r.size, t;
}
var da = ha;
function pa(e) {
  return this.__data__.get(e);
}
var va = pa;
function ya(e) {
  return this.__data__.has(e);
}
var ba = ya, _a = typeof W == "object" && W && W.Object === Object && W, st = _a, ga = st, ma = typeof self == "object" && self && self.Object === Object && self, $a = ga || ma || Function("return this")(), F = $a, Oa = F, Ea = Oa.Symbol, ot = Ea, Or = ot, ut = Object.prototype, Aa = ut.hasOwnProperty, wa = ut.toString, z = Or ? Or.toStringTag : void 0;
function Ca(e) {
  var r = Aa.call(e, z), t = e[z];
  try {
    e[z] = void 0;
    var n = !0;
  } catch {
  }
  var a = wa.call(e);
  return n && (r ? e[z] = t : delete e[z]), a;
}
var Ta = Ca, xa = Object.prototype, Sa = xa.toString;
function Ra(e) {
  return Sa.call(e);
}
var Pa = Ra, Er = ot, ja = Ta, Da = Pa, Ia = "[object Null]", Na = "[object Undefined]", Ar = Er ? Er.toStringTag : void 0;
function Ua(e) {
  return e == null ? e === void 0 ? Na : Ia : Ar && Ar in Object(e) ? ja(e) : Da(e);
}
var oe = Ua;
function La(e) {
  var r = typeof e;
  return e != null && (r == "object" || r == "function");
}
var C = La, Fa = oe, Ba = C, qa = "[object AsyncFunction]", Ma = "[object Function]", Ha = "[object GeneratorFunction]", Ga = "[object Proxy]";
function ka(e) {
  if (!Ba(e))
    return !1;
  var r = Fa(e);
  return r == Ma || r == Ha || r == qa || r == Ga;
}
var ze = ka, za = F, Va = za["__core-js_shared__"], Ja = Va, xe = Ja, wr = function() {
  var e = /[^.]+$/.exec(xe && xe.keys && xe.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function Ka(e) {
  return !!wr && wr in e;
}
var Wa = Ka, Xa = Function.prototype, Qa = Xa.toString;
function Ya(e) {
  if (e != null) {
    try {
      return Qa.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var Za = Ya, ei = ze, ri = Wa, ti = C, ni = Za, ai = /[\\^$.*+?()[\]{}|]/g, ii = /^\[object .+?Constructor\]$/, si = Function.prototype, oi = Object.prototype, ui = si.toString, fi = oi.hasOwnProperty, ci = RegExp(
  "^" + ui.call(fi).replace(ai, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function li(e) {
  if (!ti(e) || ri(e))
    return !1;
  var r = ei(e) ? ci : ii;
  return r.test(ni(e));
}
var hi = li;
function di(e, r) {
  return e == null ? void 0 : e[r];
}
var pi = di, vi = hi, yi = pi;
function bi(e, r) {
  var t = yi(e, r);
  return vi(t) ? t : void 0;
}
var Ve = bi, _i = Ve, gi = F, mi = _i(gi, "Map"), ft = mi, $i = Ve, Oi = $i(Object, "create"), ue = Oi, Cr = ue;
function Ei() {
  this.__data__ = Cr ? Cr(null) : {}, this.size = 0;
}
var Ai = Ei;
function wi(e) {
  var r = this.has(e) && delete this.__data__[e];
  return this.size -= r ? 1 : 0, r;
}
var Ci = wi, Ti = ue, xi = "__lodash_hash_undefined__", Si = Object.prototype, Ri = Si.hasOwnProperty;
function Pi(e) {
  var r = this.__data__;
  if (Ti) {
    var t = r[e];
    return t === xi ? void 0 : t;
  }
  return Ri.call(r, e) ? r[e] : void 0;
}
var ji = Pi, Di = ue, Ii = Object.prototype, Ni = Ii.hasOwnProperty;
function Ui(e) {
  var r = this.__data__;
  return Di ? r[e] !== void 0 : Ni.call(r, e);
}
var Li = Ui, Fi = ue, Bi = "__lodash_hash_undefined__";
function qi(e, r) {
  var t = this.__data__;
  return this.size += this.has(e) ? 0 : 1, t[e] = Fi && r === void 0 ? Bi : r, this;
}
var Mi = qi, Hi = Ai, Gi = Ci, ki = ji, zi = Li, Vi = Mi;
function B(e) {
  var r = -1, t = e == null ? 0 : e.length;
  for (this.clear(); ++r < t; ) {
    var n = e[r];
    this.set(n[0], n[1]);
  }
}
B.prototype.clear = Hi;
B.prototype.delete = Gi;
B.prototype.get = ki;
B.prototype.has = zi;
B.prototype.set = Vi;
var Ji = B, Tr = Ji, Ki = se, Wi = ft;
function Xi() {
  this.size = 0, this.__data__ = {
    hash: new Tr(),
    map: new (Wi || Ki)(),
    string: new Tr()
  };
}
var Qi = Xi;
function Yi(e) {
  var r = typeof e;
  return r == "string" || r == "number" || r == "symbol" || r == "boolean" ? e !== "__proto__" : e === null;
}
var Zi = Yi, es = Zi;
function rs(e, r) {
  var t = e.__data__;
  return es(r) ? t[typeof r == "string" ? "string" : "hash"] : t.map;
}
var fe = rs, ts = fe;
function ns(e) {
  var r = ts(this, e).delete(e);
  return this.size -= r ? 1 : 0, r;
}
var as = ns, is = fe;
function ss(e) {
  return is(this, e).get(e);
}
var os = ss, us = fe;
function fs(e) {
  return us(this, e).has(e);
}
var cs = fs, ls = fe;
function hs(e, r) {
  var t = ls(this, e), n = t.size;
  return t.set(e, r), this.size += t.size == n ? 0 : 1, this;
}
var ds = hs, ps = Qi, vs = as, ys = os, bs = cs, _s = ds;
function q(e) {
  var r = -1, t = e == null ? 0 : e.length;
  for (this.clear(); ++r < t; ) {
    var n = e[r];
    this.set(n[0], n[1]);
  }
}
q.prototype.clear = ps;
q.prototype.delete = vs;
q.prototype.get = ys;
q.prototype.has = bs;
q.prototype.set = _s;
var gs = q, ms = se, $s = ft, Os = gs, Es = 200;
function As(e, r) {
  var t = this.__data__;
  if (t instanceof ms) {
    var n = t.__data__;
    if (!$s || n.length < Es - 1)
      return n.push([e, r]), this.size = ++t.size, this;
    t = this.__data__ = new Os(n);
  }
  return t.set(e, r), this.size = t.size, this;
}
var ws = As, Cs = se, Ts = la, xs = da, Ss = va, Rs = ba, Ps = ws;
function M(e) {
  var r = this.__data__ = new Cs(e);
  this.size = r.size;
}
M.prototype.clear = Ts;
M.prototype.delete = xs;
M.prototype.get = Ss;
M.prototype.has = Rs;
M.prototype.set = Ps;
var js = M, Ds = Ve, Is = function() {
  try {
    var e = Ds(Object, "defineProperty");
    return e({}, "", {}), e;
  } catch {
  }
}(), ct = Is, xr = ct;
function Ns(e, r, t) {
  r == "__proto__" && xr ? xr(e, r, {
    configurable: !0,
    enumerable: !0,
    value: t,
    writable: !0
  }) : e[r] = t;
}
var Je = Ns, Us = Je, Ls = ae;
function Fs(e, r, t) {
  (t !== void 0 && !Ls(e[r], t) || t === void 0 && !(r in e)) && Us(e, r, t);
}
var lt = Fs;
function Bs(e) {
  return function(r, t, n) {
    for (var a = -1, i = Object(r), s = n(r), o = s.length; o--; ) {
      var u = s[e ? o : ++a];
      if (t(i[u], u, i) === !1)
        break;
    }
    return r;
  };
}
var qs = Bs, Ms = qs, Hs = Ms(), Gs = Hs, De = { exports: {} };
(function(e, r) {
  var t = F, n = r && !r.nodeType && r, a = n && !0 && e && !e.nodeType && e, i = a && a.exports === n, s = i ? t.Buffer : void 0, o = s ? s.allocUnsafe : void 0;
  function u(c, l) {
    if (l)
      return c.slice();
    var d = c.length, f = o ? o(d) : new c.constructor(d);
    return c.copy(f), f;
  }
  e.exports = u;
})(De, De.exports);
var ks = F, zs = ks.Uint8Array, Vs = zs, Sr = Vs;
function Js(e) {
  var r = new e.constructor(e.byteLength);
  return new Sr(r).set(new Sr(e)), r;
}
var Ks = Js, Ws = Ks;
function Xs(e, r) {
  var t = r ? Ws(e.buffer) : e.buffer;
  return new e.constructor(t, e.byteOffset, e.length);
}
var Qs = Xs;
function Ys(e, r) {
  var t = -1, n = e.length;
  for (r || (r = Array(n)); ++t < n; )
    r[t] = e[t];
  return r;
}
var Zs = Ys, eo = C, Rr = Object.create, ro = function() {
  function e() {
  }
  return function(r) {
    if (!eo(r))
      return {};
    if (Rr)
      return Rr(r);
    e.prototype = r;
    var t = new e();
    return e.prototype = void 0, t;
  };
}(), to = ro;
function no(e, r) {
  return function(t) {
    return e(r(t));
  };
}
var ao = no, io = ao, so = io(Object.getPrototypeOf, Object), ht = so, oo = Object.prototype;
function uo(e) {
  var r = e && e.constructor, t = typeof r == "function" && r.prototype || oo;
  return e === t;
}
var dt = uo, fo = to, co = ht, lo = dt;
function ho(e) {
  return typeof e.constructor == "function" && !lo(e) ? fo(co(e)) : {};
}
var po = ho;
function vo(e) {
  return e != null && typeof e == "object";
}
var J = vo, yo = oe, bo = J, _o = "[object Arguments]";
function go(e) {
  return bo(e) && yo(e) == _o;
}
var mo = go, Pr = mo, $o = J, pt = Object.prototype, Oo = pt.hasOwnProperty, Eo = pt.propertyIsEnumerable, Ao = Pr(function() {
  return arguments;
}()) ? Pr : function(e) {
  return $o(e) && Oo.call(e, "callee") && !Eo.call(e, "callee");
}, vt = Ao, wo = Array.isArray, yt = wo, Co = 9007199254740991;
function To(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= Co;
}
var bt = To, xo = ze, So = bt;
function Ro(e) {
  return e != null && So(e.length) && !xo(e);
}
var Ke = Ro, Po = Ke, jo = J;
function Do(e) {
  return jo(e) && Po(e);
}
var Io = Do, Z = { exports: {} };
function No() {
  return !1;
}
var Uo = No;
(function(e, r) {
  var t = F, n = Uo, a = r && !r.nodeType && r, i = a && !0 && e && !e.nodeType && e, s = i && i.exports === a, o = s ? t.Buffer : void 0, u = o ? o.isBuffer : void 0, c = u || n;
  e.exports = c;
})(Z, Z.exports);
var Lo = oe, Fo = ht, Bo = J, qo = "[object Object]", Mo = Function.prototype, Ho = Object.prototype, _t = Mo.toString, Go = Ho.hasOwnProperty, ko = _t.call(Object);
function zo(e) {
  if (!Bo(e) || Lo(e) != qo)
    return !1;
  var r = Fo(e);
  if (r === null)
    return !0;
  var t = Go.call(r, "constructor") && r.constructor;
  return typeof t == "function" && t instanceof t && _t.call(t) == ko;
}
var Vo = zo, Jo = oe, Ko = bt, Wo = J, Xo = "[object Arguments]", Qo = "[object Array]", Yo = "[object Boolean]", Zo = "[object Date]", eu = "[object Error]", ru = "[object Function]", tu = "[object Map]", nu = "[object Number]", au = "[object Object]", iu = "[object RegExp]", su = "[object Set]", ou = "[object String]", uu = "[object WeakMap]", fu = "[object ArrayBuffer]", cu = "[object DataView]", lu = "[object Float32Array]", hu = "[object Float64Array]", du = "[object Int8Array]", pu = "[object Int16Array]", vu = "[object Int32Array]", yu = "[object Uint8Array]", bu = "[object Uint8ClampedArray]", _u = "[object Uint16Array]", gu = "[object Uint32Array]", p = {};
p[lu] = p[hu] = p[du] = p[pu] = p[vu] = p[yu] = p[bu] = p[_u] = p[gu] = !0;
p[Xo] = p[Qo] = p[fu] = p[Yo] = p[cu] = p[Zo] = p[eu] = p[ru] = p[tu] = p[nu] = p[au] = p[iu] = p[su] = p[ou] = p[uu] = !1;
function mu(e) {
  return Wo(e) && Ko(e.length) && !!p[Jo(e)];
}
var $u = mu;
function Ou(e) {
  return function(r) {
    return e(r);
  };
}
var Eu = Ou, Ie = { exports: {} };
(function(e, r) {
  var t = st, n = r && !r.nodeType && r, a = n && !0 && e && !e.nodeType && e, i = a && a.exports === n, s = i && t.process, o = function() {
    try {
      var u = a && a.require && a.require("util").types;
      return u || s && s.binding && s.binding("util");
    } catch {
    }
  }();
  e.exports = o;
})(Ie, Ie.exports);
var Au = $u, wu = Eu, jr = Ie.exports, Dr = jr && jr.isTypedArray, Cu = Dr ? wu(Dr) : Au, gt = Cu;
function Tu(e, r) {
  if (!(r === "constructor" && typeof e[r] == "function") && r != "__proto__")
    return e[r];
}
var mt = Tu, xu = Je, Su = ae, Ru = Object.prototype, Pu = Ru.hasOwnProperty;
function ju(e, r, t) {
  var n = e[r];
  (!(Pu.call(e, r) && Su(n, t)) || t === void 0 && !(r in e)) && xu(e, r, t);
}
var Du = ju, Iu = Du, Nu = Je;
function Uu(e, r, t, n) {
  var a = !t;
  t || (t = {});
  for (var i = -1, s = r.length; ++i < s; ) {
    var o = r[i], u = n ? n(t[o], e[o], o, t, e) : void 0;
    u === void 0 && (u = e[o]), a ? Nu(t, o, u) : Iu(t, o, u);
  }
  return t;
}
var Lu = Uu;
function Fu(e, r) {
  for (var t = -1, n = Array(e); ++t < e; )
    n[t] = r(t);
  return n;
}
var Bu = Fu, qu = 9007199254740991, Mu = /^(?:0|[1-9]\d*)$/;
function Hu(e, r) {
  var t = typeof e;
  return r = r == null ? qu : r, !!r && (t == "number" || t != "symbol" && Mu.test(e)) && e > -1 && e % 1 == 0 && e < r;
}
var $t = Hu, Gu = Bu, ku = vt, zu = yt, Vu = Z.exports, Ju = $t, Ku = gt, Wu = Object.prototype, Xu = Wu.hasOwnProperty;
function Qu(e, r) {
  var t = zu(e), n = !t && ku(e), a = !t && !n && Vu(e), i = !t && !n && !a && Ku(e), s = t || n || a || i, o = s ? Gu(e.length, String) : [], u = o.length;
  for (var c in e)
    (r || Xu.call(e, c)) && !(s && (c == "length" || a && (c == "offset" || c == "parent") || i && (c == "buffer" || c == "byteLength" || c == "byteOffset") || Ju(c, u))) && o.push(c);
  return o;
}
var Yu = Qu;
function Zu(e) {
  var r = [];
  if (e != null)
    for (var t in Object(e))
      r.push(t);
  return r;
}
var ef = Zu, rf = C, tf = dt, nf = ef, af = Object.prototype, sf = af.hasOwnProperty;
function of(e) {
  if (!rf(e))
    return nf(e);
  var r = tf(e), t = [];
  for (var n in e)
    n == "constructor" && (r || !sf.call(e, n)) || t.push(n);
  return t;
}
var uf = of, ff = Yu, cf = uf, lf = Ke;
function hf(e) {
  return lf(e) ? ff(e, !0) : cf(e);
}
var Ot = hf, df = Lu, pf = Ot;
function vf(e) {
  return df(e, pf(e));
}
var yf = vf, Ir = lt, bf = De.exports, _f = Qs, gf = Zs, mf = po, Nr = vt, Ur = yt, $f = Io, Of = Z.exports, Ef = ze, Af = C, wf = Vo, Cf = gt, Lr = mt, Tf = yf;
function xf(e, r, t, n, a, i, s) {
  var o = Lr(e, t), u = Lr(r, t), c = s.get(u);
  if (c) {
    Ir(e, t, c);
    return;
  }
  var l = i ? i(o, u, t + "", e, r, s) : void 0, d = l === void 0;
  if (d) {
    var f = Ur(u), b = !f && Of(u), K = !f && !b && Cf(u);
    l = u, f || b || K ? Ur(o) ? l = o : $f(o) ? l = gf(o) : b ? (d = !1, l = bf(u, !0)) : K ? (d = !1, l = _f(u, !0)) : l = [] : wf(u) || Nr(u) ? (l = o, Nr(o) ? l = Tf(o) : (!Af(o) || Ef(o)) && (l = mf(u))) : d = !1;
  }
  d && (s.set(u, l), a(l, u, n, i, s), s.delete(u)), Ir(e, t, l);
}
var Sf = xf, Rf = js, Pf = lt, jf = Gs, Df = Sf, If = C, Nf = Ot, Uf = mt;
function Et(e, r, t, n, a) {
  e !== r && jf(r, function(i, s) {
    if (a || (a = new Rf()), If(i))
      Df(e, r, s, t, Et, n, a);
    else {
      var o = n ? n(Uf(e, s), i, s + "", e, r, a) : void 0;
      o === void 0 && (o = i), Pf(e, s, o);
    }
  }, Nf);
}
var Lf = Et;
function Ff(e) {
  return e;
}
var At = Ff;
function Bf(e, r, t) {
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
var qf = Bf, Mf = qf, Fr = Math.max;
function Hf(e, r, t) {
  return r = Fr(r === void 0 ? e.length - 1 : r, 0), function() {
    for (var n = arguments, a = -1, i = Fr(n.length - r, 0), s = Array(i); ++a < i; )
      s[a] = n[r + a];
    a = -1;
    for (var o = Array(r + 1); ++a < r; )
      o[a] = n[a];
    return o[r] = t(s), Mf(e, this, o);
  };
}
var Gf = Hf;
function kf(e) {
  return function() {
    return e;
  };
}
var zf = kf, Vf = zf, Br = ct, Jf = At, Kf = Br ? function(e, r) {
  return Br(e, "toString", {
    configurable: !0,
    enumerable: !1,
    value: Vf(r),
    writable: !0
  });
} : Jf, Wf = Kf, Xf = 800, Qf = 16, Yf = Date.now;
function Zf(e) {
  var r = 0, t = 0;
  return function() {
    var n = Yf(), a = Qf - (n - t);
    if (t = n, a > 0) {
      if (++r >= Xf)
        return arguments[0];
    } else
      r = 0;
    return e.apply(void 0, arguments);
  };
}
var ec = Zf, rc = Wf, tc = ec, nc = tc(rc), ac = nc, ic = At, sc = Gf, oc = ac;
function uc(e, r) {
  return oc(sc(e, r, ic), e + "");
}
var fc = uc, cc = ae, lc = Ke, hc = $t, dc = C;
function pc(e, r, t) {
  if (!dc(t))
    return !1;
  var n = typeof r;
  return (n == "number" ? lc(t) && hc(r, t.length) : n == "string" && r in t) ? cc(t[r], e) : !1;
}
var vc = pc, yc = fc, bc = vc;
function _c(e) {
  return yc(function(r, t) {
    var n = -1, a = t.length, i = a > 1 ? t[a - 1] : void 0, s = a > 2 ? t[2] : void 0;
    for (i = e.length > 3 && typeof i == "function" ? (a--, i) : void 0, s && bc(t[0], t[1], s) && (i = a < 3 ? void 0 : i, a = 1), r = Object(r); ++n < a; ) {
      var o = t[n];
      o && e(r, o, n, i);
    }
    return r;
  });
}
var gc = _c, mc = Lf, $c = gc, Oc = $c(function(e, r, t) {
  mc(e, r, t);
}), Ne = Oc;
const Ec = typeof btoa == "function", We = typeof Buffer == "function";
typeof TextDecoder == "function" && new TextDecoder();
const qr = typeof TextEncoder == "function" ? new TextEncoder() : void 0, Ac = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=", V = Array.prototype.slice.call(Ac);
((e) => {
  let r = {};
  return e.forEach((t, n) => r[t] = n), r;
})(V);
const O = String.fromCharCode.bind(String);
typeof Uint8Array.from == "function" && Uint8Array.from.bind(Uint8Array);
const wc = (e) => e.replace(/=/g, "").replace(/[+\/]/g, (r) => r == "+" ? "-" : "_"), Cc = (e) => {
  let r, t, n, a, i = "";
  const s = e.length % 3;
  for (let o = 0; o < e.length; ) {
    if ((t = e.charCodeAt(o++)) > 255 || (n = e.charCodeAt(o++)) > 255 || (a = e.charCodeAt(o++)) > 255)
      throw new TypeError("invalid character found");
    r = t << 16 | n << 8 | a, i += V[r >> 18 & 63] + V[r >> 12 & 63] + V[r >> 6 & 63] + V[r & 63];
  }
  return s ? i.slice(0, s - 3) + "===".substring(s) : i;
}, wt = Ec ? (e) => btoa(e) : We ? (e) => Buffer.from(e, "binary").toString("base64") : Cc, Tc = We ? (e) => Buffer.from(e).toString("base64") : (e) => {
  let t = [];
  for (let n = 0, a = e.length; n < a; n += 4096)
    t.push(O.apply(null, e.subarray(n, n + 4096)));
  return wt(t.join(""));
}, xc = (e) => {
  if (e.length < 2) {
    var r = e.charCodeAt(0);
    return r < 128 ? e : r < 2048 ? O(192 | r >>> 6) + O(128 | r & 63) : O(224 | r >>> 12 & 15) + O(128 | r >>> 6 & 63) + O(128 | r & 63);
  } else {
    var r = 65536 + (e.charCodeAt(0) - 55296) * 1024 + (e.charCodeAt(1) - 56320);
    return O(240 | r >>> 18 & 7) + O(128 | r >>> 12 & 63) + O(128 | r >>> 6 & 63) + O(128 | r & 63);
  }
}, Sc = /[\uD800-\uDBFF][\uDC00-\uDFFFF]|[^\x00-\x7F]/g, Rc = (e) => e.replace(Sc, xc), Mr = We ? (e) => Buffer.from(e, "utf8").toString("base64") : qr ? (e) => Tc(qr.encode(e)) : (e) => wt(Rc(e)), Pc = (e, r = !1) => r ? wc(Mr(e)) : Mr(e);
var Ue = { exports: {} };
(function(e, r) {
  r = e.exports = t, r.getSerialize = n;
  function t(a, i, s, o) {
    return JSON.stringify(a, n(i, o), s);
  }
  function n(a, i) {
    var s = [], o = [];
    return i == null && (i = function(u, c) {
      return s[0] === c ? "[Circular ~]" : "[Circular ~." + o.slice(0, s.indexOf(c)).join(".") + "]";
    }), function(u, c) {
      if (s.length > 0) {
        var l = s.indexOf(this);
        ~l ? s.splice(l + 1) : s.push(this), ~l ? o.splice(l, 1 / 0, u) : o.push(u), ~s.indexOf(c) && (c = i.call(this, u, c));
      } else
        s.push(c);
      return a == null ? c : a.call(this, u, c);
    };
  }
})(Ue, Ue.exports);
const jc = Ue.exports, Se = "/repos/{owner}/{repo}/contents/{path}", Dc = "/repos/{owner}/{repo}/contents/{path}", Ic = "/repos/{owner}/{repo}/contents/{path}";
function Nc(e, r) {
  return it.create(Ne({
    headers: {
      "Content-Type": "application/json",
      Authorization: `token ${r != null ? r : "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"}`,
      Accept: "application/vnd.github+json"
    },
    timeout: 5e3,
    baseURL: "https://api.github.com"
  }, e));
}
function D(e, r, t) {
  return e.replace(/{owner}/g, r.owner).replace(/{repo}/g, r.repo).replace(/{path}/g, t != null ? t : "");
}
function Re(e) {
  return e.replace(/(.*?)(\.json)?$/, "$1.json");
}
function Pe(e) {
  return {
    params: {
      ref: e.ref
    }
  };
}
class Uc {
  constructor(r) {
    R(this, "token");
    R(this, "owner");
    R(this, "repo");
    R(this, "axios");
    R(this, "ref", "api");
    this.config(r);
  }
  config(r) {
    var t, n, a;
    r != null && r.token && (this.token = r.token, this.axios = (t = r == null ? void 0 : r.axios) != null ? t : Nc(void 0, this.token)), this.owner = (n = r == null ? void 0 : r.owner) != null ? n : "pinghuazhuang", this.repo = (a = r == null ? void 0 : r.repo) != null ? a : "note";
  }
  readDir(r) {
    return this.axios.get(
      D(
        Se,
        this,
        r
      ),
      Pe(this)
    ).then((t) => {
      const { data: n } = t;
      return Array.isArray(n) ? n : Promise.resolve([t]);
    });
  }
  read(r) {
    const t = Re(r);
    return it.get(
      D(
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
    ).then((n) => n.data);
  }
  delete(r, t) {
    const n = Re(r);
    return this.axios.get(
      D(
        Se,
        this,
        n
      ),
      Pe(this)
    ).then((a) => this.axios.delete(D(
      Ic,
      this,
      n
    ), {
      data: Ne({
        message: `delete(API): ${n}`,
        branch: this.ref,
        sha: a.data.sha
      }, t)
    }));
  }
  update(r, t) {
    let n = !1;
    const a = Re(r);
    return this.axios.get(
      D(
        Se,
        this,
        a
      ),
      Pe(this)
    ).catch((i) => {
      const { response: { status: s } } = i;
      return s === 404 ? (n = !0, Promise.resolve(i)) : Promise.reject(i);
    }).then((i) => this.axios.put(
      D(
        Dc,
        this,
        a
      ),
      Ne(
        {
          message: n ? `create(API): ${a}` : `update(API): ${a}`,
          branch: this.ref,
          committer: {
            name: "robot",
            email: "robot@github.com"
          }
        },
        t,
        n ? {} : {
          sha: i.data.sha
        },
        {
          content: Pc(jc(t.content))
        }
      )
    ));
  }
}
const Fc = new Uc();
export {
  Fc as default
};
