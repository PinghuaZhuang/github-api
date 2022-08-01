var te = Object.defineProperty;
var ne = (h, t, c) => t in h ? te(h, t, { enumerable: !0, configurable: !0, writable: !0, value: c }) : h[t] = c;
var E = (h, t, c) => (ne(h, typeof t != "symbol" ? t + "" : t, c), c);
var ie = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function fe(h) {
  return h && h.__esModule && Object.prototype.hasOwnProperty.call(h, "default") ? h.default : h;
}
var $ = { exports: {} };
(function(h, t) {
  (function(O, m) {
    h.exports = m();
  })(ie, function() {
    return function(c) {
      var O = {};
      function m(u) {
        if (O[u])
          return O[u].exports;
        var o = O[u] = {
          i: u,
          l: !1,
          exports: {}
        };
        return c[u].call(o.exports, o, o.exports, m), o.l = !0, o.exports;
      }
      return m.m = c, m.c = O, m.i = function(u) {
        return u;
      }, m.d = function(u, o, e) {
        m.o(u, o) || Object.defineProperty(u, o, {
          configurable: !1,
          enumerable: !0,
          get: e
        });
      }, m.n = function(u) {
        var o = u && u.__esModule ? function() {
          return u.default;
        } : function() {
          return u;
        };
        return m.d(o, "a", o), o;
      }, m.o = function(u, o) {
        return Object.prototype.hasOwnProperty.call(u, o);
      }, m.p = "", m(m.s = 2);
    }([
      function(c, O, m) {
        var u = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(o) {
          return typeof o;
        } : function(o) {
          return o && typeof Symbol == "function" && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
        };
        c.exports = {
          type: function(e) {
            return Object.prototype.toString.call(e).slice(8, -1).toLowerCase();
          },
          isObject: function(e, w) {
            return w ? this.type(e) === "object" : e && (typeof e > "u" ? "undefined" : u(e)) === "object";
          },
          isFormData: function(e) {
            return typeof FormData < "u" && e instanceof FormData;
          },
          trim: function(e) {
            return e.replace(/(^\s*)|(\s*$)/g, "");
          },
          encode: function(e) {
            return encodeURIComponent(e).replace(/%40/gi, "@").replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
          },
          formatParams: function(e) {
            var w = "", v = !0, p = this;
            if (!this.isObject(e))
              return e;
            function l(r, i) {
              var f = p.encode, T = p.type(r);
              if (T == "array")
                r.forEach(function(s, b) {
                  p.isObject(s) || (b = ""), l(s, i + ("%5B" + b + "%5D"));
                });
              else if (T == "object")
                for (var n in r)
                  i ? l(r[n], i + "%5B" + f(n) + "%5D") : l(r[n], f(n));
              else
                v || (w += "&"), v = !1, w += i + "=" + f(r);
            }
            return l(e, ""), w;
          },
          merge: function(e, w) {
            for (var v in w)
              e.hasOwnProperty(v) ? this.isObject(w[v], 1) && this.isObject(e[v], 1) && this.merge(e[v], w[v]) : e[v] = w[v];
            return e;
          }
        };
      },
      ,
      function(c, O, m) {
        var u = function() {
          function p(l, r) {
            for (var i = 0; i < r.length; i++) {
              var f = r[i];
              f.enumerable = f.enumerable || !1, f.configurable = !0, "value" in f && (f.writable = !0), Object.defineProperty(l, f.key, f);
            }
          }
          return function(l, r, i) {
            return r && p(l.prototype, r), i && p(l, i), l;
          };
        }();
        function o(p, l) {
          if (!(p instanceof l))
            throw new TypeError("Cannot call a class as a function");
        }
        var e = m(0), w = typeof document < "u", v = function() {
          function p(l) {
            o(this, p), this.engine = l || XMLHttpRequest, this.default = this;
            function r(n) {
              var s = void 0, b = void 0;
              function D() {
                n.p = s = b = null;
              }
              e.merge(n, {
                lock: function() {
                  s || (n.p = new Promise(function(q, L) {
                    s = q, b = L;
                  }));
                },
                unlock: function() {
                  s && (s(), D());
                },
                clear: function() {
                  b && (b("cancel"), D());
                }
              });
            }
            var i = this.interceptors = {
              response: {
                use: function(s, b) {
                  this.handler = s, this.onerror = b;
                }
              },
              request: {
                use: function(s) {
                  this.handler = s;
                }
              }
            }, f = i.request, T = i.response;
            r(T), r(f), this.config = {
              method: "GET",
              baseURL: "",
              headers: {},
              timeout: 0,
              params: {},
              parseJson: !0,
              withCredentials: !1
            };
          }
          return u(p, [{
            key: "request",
            value: function(r, i, f) {
              var T = this, n = new this.engine(), s = "Content-Type", b = s.toLowerCase(), D = this.interceptors, _ = D.request, q = D.response, L = _.handler, B = new Promise(function(A, G) {
                e.isObject(r) && (f = r, r = f.url), f = f || {}, f.headers = f.headers || {};
                function z(a) {
                  return a && a.then && a.catch;
                }
                function I(a, g) {
                  a ? a.then(function() {
                    g();
                  }) : g();
                }
                function re(a) {
                  i = a.body, r = e.trim(a.url);
                  var g = e.trim(a.baseURL || "");
                  if (!r && w && !g && (r = location.href), r.indexOf("http") !== 0) {
                    var j = r[0] === "/";
                    if (!g && w) {
                      var Q = location.pathname.split("/");
                      Q.pop(), g = location.protocol + "//" + location.host + (j ? "" : Q.join("/"));
                    }
                    if (g[g.length - 1] !== "/" && (g += "/"), r = g + (j ? r.substr(1) : r), w) {
                      var X = document.createElement("a");
                      X.href = r, r = X.href;
                    }
                  }
                  var K = e.trim(a.responseType || ""), S = ["GET", "HEAD", "DELETE", "OPTION"].indexOf(a.method) !== -1, V = e.type(i), C = a.params || {};
                  S && V === "object" && (C = e.merge(i, C)), C = e.formatParams(C);
                  var k = [];
                  C && k.push(C), S && i && V === "string" && k.push(i), k.length > 0 && (r += (r.indexOf("?") === -1 ? "?" : "&") + k.join("&")), n.open(a.method, r);
                  try {
                    n.withCredentials = !!a.withCredentials, n.timeout = a.timeout || 0, K !== "stream" && (n.responseType = K);
                  } catch {
                  }
                  var W = a.headers[s] || a.headers[b], M = "application/x-www-form-urlencoded";
                  e.trim((W || "").toLowerCase()) === M ? i = e.formatParams(i) : !e.isFormData(i) && ["object", "array"].indexOf(e.type(i)) !== -1 && (M = "application/json;charset=utf-8", i = JSON.stringify(i)), W || S || (a.headers[s] = M);
                  for (var U in a.headers)
                    if (U === s && e.isFormData(i))
                      delete a.headers[U];
                    else
                      try {
                        n.setRequestHeader(U, a.headers[U]);
                      } catch {
                      }
                  function Y(y, d, F) {
                    I(q.p, function() {
                      if (y) {
                        F && (d.request = a);
                        var x = y.call(q, d, Promise);
                        d = x === void 0 ? d : x;
                      }
                      z(d) || (d = Promise[F === 0 ? "resolve" : "reject"](d)), d.then(function(P) {
                        A(P);
                      }).catch(function(P) {
                        G(P);
                      });
                    });
                  }
                  function H(y) {
                    y.engine = n, Y(q.onerror, y, -1);
                  }
                  function J(y, d) {
                    this.message = y, this.status = d;
                  }
                  n.onload = function() {
                    try {
                      var y = n.response || n.responseText;
                      y && a.parseJson && (n.getResponseHeader(s) || "").indexOf("json") !== -1 && !e.isObject(y) && (y = JSON.parse(y));
                      var d = n.responseHeaders;
                      if (!d) {
                        d = {};
                        var F = (n.getAllResponseHeaders() || "").split(`\r
`);
                        F.pop(), F.forEach(function(N) {
                          if (!!N) {
                            var ee = N.split(":")[0];
                            d[ee] = n.getResponseHeader(ee);
                          }
                        });
                      }
                      var x = n.status, P = n.statusText, R = { data: y, headers: d, status: x, statusText: P };
                      if (e.merge(R, n._response), x >= 200 && x < 300 || x === 304)
                        R.engine = n, R.request = a, Y(q.handler, R, 0);
                      else {
                        var Z = new J(P, x);
                        Z.response = R, H(Z);
                      }
                    } catch (N) {
                      H(new J(N.msg, n.status));
                    }
                  }, n.onerror = function(y) {
                    H(new J(y.msg || "Network Error", 0));
                  }, n.ontimeout = function() {
                    H(new J("timeout [ " + n.timeout + "ms ]", 1));
                  }, n._options = a, setTimeout(function() {
                    n.send(S ? null : i);
                  }, 0);
                }
                I(_.p, function() {
                  e.merge(f, JSON.parse(JSON.stringify(T.config)));
                  var a = f.headers;
                  a[s] = a[s] || a[b] || "", delete a[b], f.body = i || f.body, r = e.trim(r || ""), f.method = f.method.toUpperCase(), f.url = r;
                  var g = f;
                  L && (g = L.call(_, f, Promise) || f), z(g) || (g = Promise.resolve(g)), g.then(function(j) {
                    j === f ? re(j) : A(j);
                  }, function(j) {
                    G(j);
                  });
                });
              });
              return B.engine = n, B;
            }
          }, {
            key: "all",
            value: function(r) {
              return Promise.all(r);
            }
          }, {
            key: "spread",
            value: function(r) {
              return function(i) {
                return r.apply(null, i);
              };
            }
          }]), p;
        }();
        v.default = v, ["get", "post", "put", "patch", "head", "delete"].forEach(function(p) {
          v.prototype[p] = function(l, r, i) {
            return this.request(l, r, e.merge({ method: p }, i));
          };
        }), ["lock", "unlock", "clear"].forEach(function(p) {
          v.prototype[p] = function() {
            this.interceptors.request[p]();
          };
        }), c.exports = v;
      }
    ]);
  });
})($);
const ae = /* @__PURE__ */ fe($.exports);
var oe = $.exports, ce = new oe(), ue = ce;
function se(h) {
  const t = new ae(h);
  return t.config.headers = {
    Authorization: "4b8b91aa08d98acd65d2fa8d0c4fbf4ab3e4fe01",
    "Content-Type": "application/json"
  }, t.config.timeout = 5 * 1e3, t.config.baseURL = "https://api.github.com", t;
}
function le(h, t) {
  return h.replace(/{owner}/g, t.owner).replace(/{repo}/g, t.repo);
}
class he {
  constructor(t) {
    E(this, "token");
    E(this, "owner");
    E(this, "repo");
    E(this, "fly");
    E(this, "ref", "api");
    var c;
    this.config(t), this.fly = (c = t == null ? void 0 : t.fly) != null ? c : se(t == null ? void 0 : t.engine);
  }
  config(t) {
    var c, O;
    t != null && t.token && (this.token = t.token), this.owner = (c = t == null ? void 0 : t.owner) != null ? c : "pinghuazhuang", this.repo = (O = t == null ? void 0 : t.repo) != null ? O : "note";
  }
  read(t) {
    return ue.get(
      le(`{owner}/{repo}/api/${t}`, this).replace(/{path}/g, t),
      {
        ref: this.ref
      },
      {
        headers: {
          "Content-Type": "text/plain"
        },
        baseURL: "https://raw.githubusercontent.com"
      }
    ).then((c) => JSON.parse(c.data));
  }
}
const me = new he();
export {
  me as default
};
