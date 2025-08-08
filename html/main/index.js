(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const l of document.querySelectorAll('link[rel="modulepreload"]')) r(l);
  new MutationObserver((l) => {
    for (const o of l)
      if (o.type === "childList")
        for (const i of o.addedNodes)
          i.tagName === "LINK" && i.rel === "modulepreload" && r(i);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(l) {
    const o = {};
    return (
      l.integrity && (o.integrity = l.integrity),
      l.referrerPolicy && (o.referrerPolicy = l.referrerPolicy),
      l.crossOrigin === "use-credentials"
        ? (o.credentials = "include")
        : l.crossOrigin === "anonymous"
          ? (o.credentials = "omit")
          : (o.credentials = "same-origin"),
      o
    );
  }
  function r(l) {
    if (l.ep) return;
    l.ep = !0;
    const o = n(l);
    fetch(l.href, o);
  }
})();
var Wu = { exports: {} },
  tl = {},
  Qu = { exports: {} },
  L = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Xn = Symbol.for("react.element"),
  lc = Symbol.for("react.portal"),
  oc = Symbol.for("react.fragment"),
  ic = Symbol.for("react.strict_mode"),
  uc = Symbol.for("react.profiler"),
  sc = Symbol.for("react.provider"),
  ac = Symbol.for("react.context"),
  cc = Symbol.for("react.forward_ref"),
  dc = Symbol.for("react.suspense"),
  fc = Symbol.for("react.memo"),
  pc = Symbol.for("react.lazy"),
  Oi = Symbol.iterator;
function mc(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Oi && e[Oi]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var Ku = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  Yu = Object.assign,
  Gu = {};
function on(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = Gu),
    (this.updater = n || Ku);
}
on.prototype.isReactComponent = {};
on.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables.",
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
on.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function Xu() {}
Xu.prototype = on.prototype;
function $o(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = Gu),
    (this.updater = n || Ku);
}
var Ao = ($o.prototype = new Xu());
Ao.constructor = $o;
Yu(Ao, on.prototype);
Ao.isPureReactComponent = !0;
var Di = Array.isArray,
  Zu = Object.prototype.hasOwnProperty,
  Vo = { current: null },
  Ju = { key: !0, ref: !0, __self: !0, __source: !0 };
function qu(e, t, n) {
  var r,
    l = {},
    o = null,
    i = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (i = t.ref),
    t.key !== void 0 && (o = "" + t.key),
    t))
      Zu.call(t, r) && !Ju.hasOwnProperty(r) && (l[r] = t[r]);
  var u = arguments.length - 2;
  if (u === 1) l.children = n;
  else if (1 < u) {
    for (var s = Array(u), c = 0; c < u; c++) s[c] = arguments[c + 2];
    l.children = s;
  }
  if (e && e.defaultProps)
    for (r in ((u = e.defaultProps), u)) l[r] === void 0 && (l[r] = u[r]);
  return {
    $$typeof: Xn,
    type: e,
    key: o,
    ref: i,
    props: l,
    _owner: Vo.current,
  };
}
function hc(e, t) {
  return {
    $$typeof: Xn,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function Bo(e) {
  return typeof e == "object" && e !== null && e.$$typeof === Xn;
}
function vc(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var Ii = /\/+/g;
function kl(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? vc("" + e.key)
    : t.toString(36);
}
function xr(e, t, n, r, l) {
  var o = typeof e;
  (o === "undefined" || o === "boolean") && (e = null);
  var i = !1;
  if (e === null) i = !0;
  else
    switch (o) {
      case "string":
      case "number":
        i = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case Xn:
          case lc:
            i = !0;
        }
    }
  if (i)
    return (
      (i = e),
      (l = l(i)),
      (e = r === "" ? "." + kl(i, 0) : r),
      Di(l)
        ? ((n = ""),
          e != null && (n = e.replace(Ii, "$&/") + "/"),
          xr(l, t, n, "", function (c) {
            return c;
          }))
        : l != null &&
          (Bo(l) &&
            (l = hc(
              l,
              n +
                (!l.key || (i && i.key === l.key)
                  ? ""
                  : ("" + l.key).replace(Ii, "$&/") + "/") +
                e,
            )),
          t.push(l)),
      1
    );
  if (((i = 0), (r = r === "" ? "." : r + ":"), Di(e)))
    for (var u = 0; u < e.length; u++) {
      o = e[u];
      var s = r + kl(o, u);
      i += xr(o, t, n, s, l);
    }
  else if (((s = mc(e)), typeof s == "function"))
    for (e = s.call(e), u = 0; !(o = e.next()).done; )
      (o = o.value), (s = r + kl(o, u++)), (i += xr(o, t, n, s, l));
  else if (o === "object")
    throw (
      ((t = String(e)),
      Error(
        "Objects are not valid as a React child (found: " +
          (t === "[object Object]"
            ? "object with keys {" + Object.keys(e).join(", ") + "}"
            : t) +
          "). If you meant to render a collection of children, use an array instead.",
      ))
    );
  return i;
}
function nr(e, t, n) {
  if (e == null) return e;
  var r = [],
    l = 0;
  return (
    xr(e, r, "", "", function (o) {
      return t.call(n, o, l++);
    }),
    r
  );
}
function gc(e) {
  if (e._status === -1) {
    var t = e._result;
    (t = t()),
      t.then(
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 1), (e._result = n));
        },
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 2), (e._result = n));
        },
      ),
      e._status === -1 && ((e._status = 0), (e._result = t));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var ue = { current: null },
  kr = { transition: null },
  yc = {
    ReactCurrentDispatcher: ue,
    ReactCurrentBatchConfig: kr,
    ReactCurrentOwner: Vo,
  };
function bu() {
  throw Error("act(...) is not supported in production builds of React.");
}
L.Children = {
  map: nr,
  forEach: function (e, t, n) {
    nr(
      e,
      function () {
        t.apply(this, arguments);
      },
      n,
    );
  },
  count: function (e) {
    var t = 0;
    return (
      nr(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      nr(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!Bo(e))
      throw Error(
        "React.Children.only expected to receive a single React element child.",
      );
    return e;
  },
};
L.Component = on;
L.Fragment = oc;
L.Profiler = uc;
L.PureComponent = $o;
L.StrictMode = ic;
L.Suspense = dc;
L.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = yc;
L.act = bu;
L.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        ".",
    );
  var r = Yu({}, e.props),
    l = e.key,
    o = e.ref,
    i = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((o = t.ref), (i = Vo.current)),
      t.key !== void 0 && (l = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var u = e.type.defaultProps;
    for (s in t)
      Zu.call(t, s) &&
        !Ju.hasOwnProperty(s) &&
        (r[s] = t[s] === void 0 && u !== void 0 ? u[s] : t[s]);
  }
  var s = arguments.length - 2;
  if (s === 1) r.children = n;
  else if (1 < s) {
    u = Array(s);
    for (var c = 0; c < s; c++) u[c] = arguments[c + 2];
    r.children = u;
  }
  return { $$typeof: Xn, type: e.type, key: l, ref: o, props: r, _owner: i };
};
L.createContext = function (e) {
  return (
    (e = {
      $$typeof: ac,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: sc, _context: e }),
    (e.Consumer = e)
  );
};
L.createElement = qu;
L.createFactory = function (e) {
  var t = qu.bind(null, e);
  return (t.type = e), t;
};
L.createRef = function () {
  return { current: null };
};
L.forwardRef = function (e) {
  return { $$typeof: cc, render: e };
};
L.isValidElement = Bo;
L.lazy = function (e) {
  return { $$typeof: pc, _payload: { _status: -1, _result: e }, _init: gc };
};
L.memo = function (e, t) {
  return { $$typeof: fc, type: e, compare: t === void 0 ? null : t };
};
L.startTransition = function (e) {
  var t = kr.transition;
  kr.transition = {};
  try {
    e();
  } finally {
    kr.transition = t;
  }
};
L.unstable_act = bu;
L.useCallback = function (e, t) {
  return ue.current.useCallback(e, t);
};
L.useContext = function (e) {
  return ue.current.useContext(e);
};
L.useDebugValue = function () {};
L.useDeferredValue = function (e) {
  return ue.current.useDeferredValue(e);
};
L.useEffect = function (e, t) {
  return ue.current.useEffect(e, t);
};
L.useId = function () {
  return ue.current.useId();
};
L.useImperativeHandle = function (e, t, n) {
  return ue.current.useImperativeHandle(e, t, n);
};
L.useInsertionEffect = function (e, t) {
  return ue.current.useInsertionEffect(e, t);
};
L.useLayoutEffect = function (e, t) {
  return ue.current.useLayoutEffect(e, t);
};
L.useMemo = function (e, t) {
  return ue.current.useMemo(e, t);
};
L.useReducer = function (e, t, n) {
  return ue.current.useReducer(e, t, n);
};
L.useRef = function (e) {
  return ue.current.useRef(e);
};
L.useState = function (e) {
  return ue.current.useState(e);
};
L.useSyncExternalStore = function (e, t, n) {
  return ue.current.useSyncExternalStore(e, t, n);
};
L.useTransition = function () {
  return ue.current.useTransition();
};
L.version = "18.3.1";
Qu.exports = L;
var Ee = Qu.exports;
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var xc = Ee,
  kc = Symbol.for("react.element"),
  wc = Symbol.for("react.fragment"),
  Sc = Object.prototype.hasOwnProperty,
  Nc = xc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  Ec = { key: !0, ref: !0, __self: !0, __source: !0 };
function es(e, t, n) {
  var r,
    l = {},
    o = null,
    i = null;
  n !== void 0 && (o = "" + n),
    t.key !== void 0 && (o = "" + t.key),
    t.ref !== void 0 && (i = t.ref);
  for (r in t) Sc.call(t, r) && !Ec.hasOwnProperty(r) && (l[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) l[r] === void 0 && (l[r] = t[r]);
  return {
    $$typeof: kc,
    type: e,
    key: o,
    ref: i,
    props: l,
    _owner: Nc.current,
  };
}
tl.Fragment = wc;
tl.jsx = es;
tl.jsxs = es;
Wu.exports = tl;
var f = Wu.exports,
  ts = { exports: {} },
  ye = {},
  ns = { exports: {} },
  rs = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(E, z) {
    var P = E.length;
    E.push(z);
    e: for (; 0 < P; ) {
      var W = (P - 1) >>> 1,
        X = E[W];
      if (0 < l(X, z)) (E[W] = z), (E[P] = X), (P = W);
      else break e;
    }
  }
  function n(E) {
    return E.length === 0 ? null : E[0];
  }
  function r(E) {
    if (E.length === 0) return null;
    var z = E[0],
      P = E.pop();
    if (P !== z) {
      E[0] = P;
      e: for (var W = 0, X = E.length, er = X >>> 1; W < er; ) {
        var gt = 2 * (W + 1) - 1,
          xl = E[gt],
          yt = gt + 1,
          tr = E[yt];
        if (0 > l(xl, P))
          yt < X && 0 > l(tr, xl)
            ? ((E[W] = tr), (E[yt] = P), (W = yt))
            : ((E[W] = xl), (E[gt] = P), (W = gt));
        else if (yt < X && 0 > l(tr, P)) (E[W] = tr), (E[yt] = P), (W = yt);
        else break e;
      }
    }
    return z;
  }
  function l(E, z) {
    var P = E.sortIndex - z.sortIndex;
    return P !== 0 ? P : E.id - z.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var o = performance;
    e.unstable_now = function () {
      return o.now();
    };
  } else {
    var i = Date,
      u = i.now();
    e.unstable_now = function () {
      return i.now() - u;
    };
  }
  var s = [],
    c = [],
    v = 1,
    h = null,
    m = 3,
    x = !1,
    k = !1,
    w = !1,
    F = typeof setTimeout == "function" ? setTimeout : null,
    d = typeof clearTimeout == "function" ? clearTimeout : null,
    a = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function p(E) {
    for (var z = n(c); z !== null; ) {
      if (z.callback === null) r(c);
      else if (z.startTime <= E)
        r(c), (z.sortIndex = z.expirationTime), t(s, z);
      else break;
      z = n(c);
    }
  }
  function g(E) {
    if (((w = !1), p(E), !k))
      if (n(s) !== null) (k = !0), gl(N);
      else {
        var z = n(c);
        z !== null && yl(g, z.startTime - E);
      }
  }
  function N(E, z) {
    (k = !1), w && ((w = !1), d(j), (j = -1)), (x = !0);
    var P = m;
    try {
      for (
        p(z), h = n(s);
        h !== null && (!(h.expirationTime > z) || (E && !ze()));

      ) {
        var W = h.callback;
        if (typeof W == "function") {
          (h.callback = null), (m = h.priorityLevel);
          var X = W(h.expirationTime <= z);
          (z = e.unstable_now()),
            typeof X == "function" ? (h.callback = X) : h === n(s) && r(s),
            p(z);
        } else r(s);
        h = n(s);
      }
      if (h !== null) var er = !0;
      else {
        var gt = n(c);
        gt !== null && yl(g, gt.startTime - z), (er = !1);
      }
      return er;
    } finally {
      (h = null), (m = P), (x = !1);
    }
  }
  var _ = !1,
    C = null,
    j = -1,
    H = 5,
    T = -1;
  function ze() {
    return !(e.unstable_now() - T < H);
  }
  function an() {
    if (C !== null) {
      var E = e.unstable_now();
      T = E;
      var z = !0;
      try {
        z = C(!0, E);
      } finally {
        z ? cn() : ((_ = !1), (C = null));
      }
    } else _ = !1;
  }
  var cn;
  if (typeof a == "function")
    cn = function () {
      a(an);
    };
  else if (typeof MessageChannel < "u") {
    var Ri = new MessageChannel(),
      rc = Ri.port2;
    (Ri.port1.onmessage = an),
      (cn = function () {
        rc.postMessage(null);
      });
  } else
    cn = function () {
      F(an, 0);
    };
  function gl(E) {
    (C = E), _ || ((_ = !0), cn());
  }
  function yl(E, z) {
    j = F(function () {
      E(e.unstable_now());
    }, z);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (E) {
      E.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      k || x || ((k = !0), gl(N));
    }),
    (e.unstable_forceFrameRate = function (E) {
      0 > E || 125 < E
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported",
          )
        : (H = 0 < E ? Math.floor(1e3 / E) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return m;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(s);
    }),
    (e.unstable_next = function (E) {
      switch (m) {
        case 1:
        case 2:
        case 3:
          var z = 3;
          break;
        default:
          z = m;
      }
      var P = m;
      m = z;
      try {
        return E();
      } finally {
        m = P;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (E, z) {
      switch (E) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          E = 3;
      }
      var P = m;
      m = E;
      try {
        return z();
      } finally {
        m = P;
      }
    }),
    (e.unstable_scheduleCallback = function (E, z, P) {
      var W = e.unstable_now();
      switch (
        (typeof P == "object" && P !== null
          ? ((P = P.delay), (P = typeof P == "number" && 0 < P ? W + P : W))
          : (P = W),
        E)
      ) {
        case 1:
          var X = -1;
          break;
        case 2:
          X = 250;
          break;
        case 5:
          X = 1073741823;
          break;
        case 4:
          X = 1e4;
          break;
        default:
          X = 5e3;
      }
      return (
        (X = P + X),
        (E = {
          id: v++,
          callback: z,
          priorityLevel: E,
          startTime: P,
          expirationTime: X,
          sortIndex: -1,
        }),
        P > W
          ? ((E.sortIndex = P),
            t(c, E),
            n(s) === null &&
              E === n(c) &&
              (w ? (d(j), (j = -1)) : (w = !0), yl(g, P - W)))
          : ((E.sortIndex = X), t(s, E), k || x || ((k = !0), gl(N))),
        E
      );
    }),
    (e.unstable_shouldYield = ze),
    (e.unstable_wrapCallback = function (E) {
      var z = m;
      return function () {
        var P = m;
        m = z;
        try {
          return E.apply(this, arguments);
        } finally {
          m = P;
        }
      };
    });
})(rs);
ns.exports = rs;
var _c = ns.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Cc = Ee,
  ge = _c;
function y(e) {
  for (
    var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1;
    n < arguments.length;
    n++
  )
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return (
    "Minified React error #" +
    e +
    "; visit " +
    t +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  );
}
var ls = new Set(),
  Mn = {};
function Tt(e, t) {
  qt(e, t), qt(e + "Capture", t);
}
function qt(e, t) {
  for (Mn[e] = t, e = 0; e < t.length; e++) ls.add(t[e]);
}
var Ke = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  Kl = Object.prototype.hasOwnProperty,
  jc =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  Fi = {},
  Ui = {};
function zc(e) {
  return Kl.call(Ui, e)
    ? !0
    : Kl.call(Fi, e)
      ? !1
      : jc.test(e)
        ? (Ui[e] = !0)
        : ((Fi[e] = !0), !1);
}
function Pc(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r
        ? !1
        : n !== null
          ? !n.acceptsBooleans
          : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function Lc(e, t, n, r) {
  if (t === null || typeof t > "u" || Pc(e, t, n, r)) return !0;
  if (r) return !1;
  if (n !== null)
    switch (n.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
  return !1;
}
function se(e, t, n, r, l, o, i) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = l),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = o),
    (this.removeEmptyString = i);
}
var ee = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    ee[e] = new se(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  ee[t] = new se(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  ee[e] = new se(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  ee[e] = new se(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    ee[e] = new se(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  ee[e] = new se(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  ee[e] = new se(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  ee[e] = new se(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  ee[e] = new se(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var Ho = /[\-:]([a-z])/g;
function Wo(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Ho, Wo);
    ee[t] = new se(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Ho, Wo);
    ee[t] = new se(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(Ho, Wo);
  ee[t] = new se(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  ee[e] = new se(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
ee.xlinkHref = new se(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1,
);
["src", "href", "action", "formAction"].forEach(function (e) {
  ee[e] = new se(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function Qo(e, t, n, r) {
  var l = ee.hasOwnProperty(t) ? ee[t] : null;
  (l !== null
    ? l.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    (Lc(t, n, l, r) && (n = null),
    r || l === null
      ? zc(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
      : l.mustUseProperty
        ? (e[l.propertyName] = n === null ? (l.type === 3 ? !1 : "") : n)
        : ((t = l.attributeName),
          (r = l.attributeNamespace),
          n === null
            ? e.removeAttribute(t)
            : ((l = l.type),
              (n = l === 3 || (l === 4 && n === !0) ? "" : "" + n),
              r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var Ze = Cc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  rr = Symbol.for("react.element"),
  Ot = Symbol.for("react.portal"),
  Dt = Symbol.for("react.fragment"),
  Ko = Symbol.for("react.strict_mode"),
  Yl = Symbol.for("react.profiler"),
  os = Symbol.for("react.provider"),
  is = Symbol.for("react.context"),
  Yo = Symbol.for("react.forward_ref"),
  Gl = Symbol.for("react.suspense"),
  Xl = Symbol.for("react.suspense_list"),
  Go = Symbol.for("react.memo"),
  qe = Symbol.for("react.lazy"),
  us = Symbol.for("react.offscreen"),
  $i = Symbol.iterator;
function dn(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = ($i && e[$i]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var V = Object.assign,
  wl;
function xn(e) {
  if (wl === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      wl = (t && t[1]) || "";
    }
  return (
    `
` +
    wl +
    e
  );
}
var Sl = !1;
function Nl(e, t) {
  if (!e || Sl) return "";
  Sl = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (
        ((t = function () {
          throw Error();
        }),
        Object.defineProperty(t.prototype, "props", {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == "object" && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, []);
        } catch (c) {
          var r = c;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (c) {
          r = c;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (c) {
        r = c;
      }
      e();
    }
  } catch (c) {
    if (c && r && typeof c.stack == "string") {
      for (
        var l = c.stack.split(`
`),
          o = r.stack.split(`
`),
          i = l.length - 1,
          u = o.length - 1;
        1 <= i && 0 <= u && l[i] !== o[u];

      )
        u--;
      for (; 1 <= i && 0 <= u; i--, u--)
        if (l[i] !== o[u]) {
          if (i !== 1 || u !== 1)
            do
              if ((i--, u--, 0 > u || l[i] !== o[u])) {
                var s =
                  `
` + l[i].replace(" at new ", " at ");
                return (
                  e.displayName &&
                    s.includes("<anonymous>") &&
                    (s = s.replace("<anonymous>", e.displayName)),
                  s
                );
              }
            while (1 <= i && 0 <= u);
          break;
        }
    }
  } finally {
    (Sl = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : "") ? xn(e) : "";
}
function Tc(e) {
  switch (e.tag) {
    case 5:
      return xn(e.type);
    case 16:
      return xn("Lazy");
    case 13:
      return xn("Suspense");
    case 19:
      return xn("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (e = Nl(e.type, !1)), e;
    case 11:
      return (e = Nl(e.type.render, !1)), e;
    case 1:
      return (e = Nl(e.type, !0)), e;
    default:
      return "";
  }
}
function Zl(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case Dt:
      return "Fragment";
    case Ot:
      return "Portal";
    case Yl:
      return "Profiler";
    case Ko:
      return "StrictMode";
    case Gl:
      return "Suspense";
    case Xl:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case is:
        return (e.displayName || "Context") + ".Consumer";
      case os:
        return (e._context.displayName || "Context") + ".Provider";
      case Yo:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case Go:
        return (
          (t = e.displayName || null), t !== null ? t : Zl(e.type) || "Memo"
        );
      case qe:
        (t = e._payload), (e = e._init);
        try {
          return Zl(e(t));
        } catch {}
    }
  return null;
}
function Mc(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return "Cache";
    case 9:
      return (t.displayName || "Context") + ".Consumer";
    case 10:
      return (t._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return (
        (e = t.render),
        (e = e.displayName || e.name || ""),
        t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
      );
    case 7:
      return "Fragment";
    case 5:
      return t;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return Zl(t);
    case 8:
      return t === Ko ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == "function") return t.displayName || t.name || null;
      if (typeof t == "string") return t;
  }
  return null;
}
function ft(e) {
  switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return e;
    case "object":
      return e;
    default:
      return "";
  }
}
function ss(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function Rc(e) {
  var t = ss(e) ? "checked" : "value",
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = "" + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof n < "u" &&
    typeof n.get == "function" &&
    typeof n.set == "function"
  ) {
    var l = n.get,
      o = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return l.call(this);
        },
        set: function (i) {
          (r = "" + i), o.call(this, i);
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (i) {
          r = "" + i;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[t];
        },
      }
    );
  }
}
function lr(e) {
  e._valueTracker || (e._valueTracker = Rc(e));
}
function as(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = "";
  return (
    e && (r = ss(e) ? (e.checked ? "true" : "false") : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function Tr(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function Jl(e, t) {
  var n = t.checked;
  return V({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function Ai(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  (n = ft(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    });
}
function cs(e, t) {
  (t = t.checked), t != null && Qo(e, "checked", t, !1);
}
function ql(e, t) {
  cs(e, t);
  var n = ft(t.value),
    r = t.type;
  if (n != null)
    r === "number"
      ? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n)
      : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value")
    ? bl(e, t.type, n)
    : t.hasOwnProperty("defaultValue") && bl(e, t.type, ft(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function Vi(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (
      !(
        (r !== "submit" && r !== "reset") ||
        (t.value !== void 0 && t.value !== null)
      )
    )
      return;
    (t = "" + e._wrapperState.initialValue),
      n || t === e.value || (e.value = t),
      (e.defaultValue = t);
  }
  (n = e.name),
    n !== "" && (e.name = ""),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    n !== "" && (e.name = n);
}
function bl(e, t, n) {
  (t !== "number" || Tr(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var kn = Array.isArray;
function Kt(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var l = 0; l < n.length; l++) t["$" + n[l]] = !0;
    for (n = 0; n < e.length; n++)
      (l = t.hasOwnProperty("$" + e[n].value)),
        e[n].selected !== l && (e[n].selected = l),
        l && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + ft(n), t = null, l = 0; l < e.length; l++) {
      if (e[l].value === n) {
        (e[l].selected = !0), r && (e[l].defaultSelected = !0);
        return;
      }
      t !== null || e[l].disabled || (t = e[l]);
    }
    t !== null && (t.selected = !0);
  }
}
function eo(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(y(91));
  return V({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function Bi(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(y(92));
      if (kn(n)) {
        if (1 < n.length) throw Error(y(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), (n = t);
  }
  e._wrapperState = { initialValue: ft(n) };
}
function ds(e, t) {
  var n = ft(t.value),
    r = ft(t.defaultValue);
  n != null &&
    ((n = "" + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r);
}
function Hi(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function fs(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function to(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? fs(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
      ? "http://www.w3.org/1999/xhtml"
      : e;
}
var or,
  ps = (function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, l) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, l);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
      e.innerHTML = t;
    else {
      for (
        or = or || document.createElement("div"),
          or.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = or.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function Rn(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var Nn = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0,
  },
  Oc = ["Webkit", "ms", "Moz", "O"];
Object.keys(Nn).forEach(function (e) {
  Oc.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Nn[t] = Nn[e]);
  });
});
function ms(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || (Nn.hasOwnProperty(e) && Nn[e])
      ? ("" + t).trim()
      : t + "px";
}
function hs(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        l = ms(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, l) : (e[n] = l);
    }
}
var Dc = V(
  { menuitem: !0 },
  {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
  },
);
function no(e, t) {
  if (t) {
    if (Dc[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(y(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(y(60));
      if (
        typeof t.dangerouslySetInnerHTML != "object" ||
        !("__html" in t.dangerouslySetInnerHTML)
      )
        throw Error(y(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(y(62));
  }
}
function ro(e, t) {
  if (e.indexOf("-") === -1) return typeof t.is == "string";
  switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return !1;
    default:
      return !0;
  }
}
var lo = null;
function Xo(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var oo = null,
  Yt = null,
  Gt = null;
function Wi(e) {
  if ((e = qn(e))) {
    if (typeof oo != "function") throw Error(y(280));
    var t = e.stateNode;
    t && ((t = il(t)), oo(e.stateNode, e.type, t));
  }
}
function vs(e) {
  Yt ? (Gt ? Gt.push(e) : (Gt = [e])) : (Yt = e);
}
function gs() {
  if (Yt) {
    var e = Yt,
      t = Gt;
    if (((Gt = Yt = null), Wi(e), t)) for (e = 0; e < t.length; e++) Wi(t[e]);
  }
}
function ys(e, t) {
  return e(t);
}
function xs() {}
var El = !1;
function ks(e, t, n) {
  if (El) return e(t, n);
  El = !0;
  try {
    return ys(e, t, n);
  } finally {
    (El = !1), (Yt !== null || Gt !== null) && (xs(), gs());
  }
}
function On(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = il(n);
  if (r === null) return null;
  n = r[t];
  e: switch (t) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
      (r = !r.disabled) ||
        ((e = e.type),
        (r = !(
          e === "button" ||
          e === "input" ||
          e === "select" ||
          e === "textarea"
        ))),
        (e = !r);
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != "function") throw Error(y(231, t, typeof n));
  return n;
}
var io = !1;
if (Ke)
  try {
    var fn = {};
    Object.defineProperty(fn, "passive", {
      get: function () {
        io = !0;
      },
    }),
      window.addEventListener("test", fn, fn),
      window.removeEventListener("test", fn, fn);
  } catch {
    io = !1;
  }
function Ic(e, t, n, r, l, o, i, u, s) {
  var c = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, c);
  } catch (v) {
    this.onError(v);
  }
}
var En = !1,
  Mr = null,
  Rr = !1,
  uo = null,
  Fc = {
    onError: function (e) {
      (En = !0), (Mr = e);
    },
  };
function Uc(e, t, n, r, l, o, i, u, s) {
  (En = !1), (Mr = null), Ic.apply(Fc, arguments);
}
function $c(e, t, n, r, l, o, i, u, s) {
  if ((Uc.apply(this, arguments), En)) {
    if (En) {
      var c = Mr;
      (En = !1), (Mr = null);
    } else throw Error(y(198));
    Rr || ((Rr = !0), (uo = c));
  }
}
function Mt(e) {
  var t = e,
    n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do (t = e), t.flags & 4098 && (n = t.return), (e = t.return);
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function ws(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (
      (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
      t !== null)
    )
      return t.dehydrated;
  }
  return null;
}
function Qi(e) {
  if (Mt(e) !== e) throw Error(y(188));
}
function Ac(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = Mt(e)), t === null)) throw Error(y(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var l = n.return;
    if (l === null) break;
    var o = l.alternate;
    if (o === null) {
      if (((r = l.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (l.child === o.child) {
      for (o = l.child; o; ) {
        if (o === n) return Qi(l), e;
        if (o === r) return Qi(l), t;
        o = o.sibling;
      }
      throw Error(y(188));
    }
    if (n.return !== r.return) (n = l), (r = o);
    else {
      for (var i = !1, u = l.child; u; ) {
        if (u === n) {
          (i = !0), (n = l), (r = o);
          break;
        }
        if (u === r) {
          (i = !0), (r = l), (n = o);
          break;
        }
        u = u.sibling;
      }
      if (!i) {
        for (u = o.child; u; ) {
          if (u === n) {
            (i = !0), (n = o), (r = l);
            break;
          }
          if (u === r) {
            (i = !0), (r = o), (n = l);
            break;
          }
          u = u.sibling;
        }
        if (!i) throw Error(y(189));
      }
    }
    if (n.alternate !== r) throw Error(y(190));
  }
  if (n.tag !== 3) throw Error(y(188));
  return n.stateNode.current === n ? e : t;
}
function Ss(e) {
  return (e = Ac(e)), e !== null ? Ns(e) : null;
}
function Ns(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = Ns(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var Es = ge.unstable_scheduleCallback,
  Ki = ge.unstable_cancelCallback,
  Vc = ge.unstable_shouldYield,
  Bc = ge.unstable_requestPaint,
  Q = ge.unstable_now,
  Hc = ge.unstable_getCurrentPriorityLevel,
  Zo = ge.unstable_ImmediatePriority,
  _s = ge.unstable_UserBlockingPriority,
  Or = ge.unstable_NormalPriority,
  Wc = ge.unstable_LowPriority,
  Cs = ge.unstable_IdlePriority,
  nl = null,
  $e = null;
function Qc(e) {
  if ($e && typeof $e.onCommitFiberRoot == "function")
    try {
      $e.onCommitFiberRoot(nl, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var Re = Math.clz32 ? Math.clz32 : Gc,
  Kc = Math.log,
  Yc = Math.LN2;
function Gc(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((Kc(e) / Yc) | 0)) | 0;
}
var ir = 64,
  ur = 4194304;
function wn(e) {
  switch (e & -e) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function Dr(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    l = e.suspendedLanes,
    o = e.pingedLanes,
    i = n & 268435455;
  if (i !== 0) {
    var u = i & ~l;
    u !== 0 ? (r = wn(u)) : ((o &= i), o !== 0 && (r = wn(o)));
  } else (i = n & ~l), i !== 0 ? (r = wn(i)) : o !== 0 && (r = wn(o));
  if (r === 0) return 0;
  if (
    t !== 0 &&
    t !== r &&
    !(t & l) &&
    ((l = r & -r), (o = t & -t), l >= o || (l === 16 && (o & 4194240) !== 0))
  )
    return t;
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      (n = 31 - Re(t)), (l = 1 << n), (r |= e[n]), (t &= ~l);
  return r;
}
function Xc(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function Zc(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      l = e.expirationTimes,
      o = e.pendingLanes;
    0 < o;

  ) {
    var i = 31 - Re(o),
      u = 1 << i,
      s = l[i];
    s === -1
      ? (!(u & n) || u & r) && (l[i] = Xc(u, t))
      : s <= t && (e.expiredLanes |= u),
      (o &= ~u);
  }
}
function so(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function js() {
  var e = ir;
  return (ir <<= 1), !(ir & 4194240) && (ir = 64), e;
}
function _l(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function Zn(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - Re(t)),
    (e[t] = n);
}
function Jc(e, t) {
  var n = e.pendingLanes & ~t;
  (e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements);
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var l = 31 - Re(n),
      o = 1 << l;
    (t[l] = 0), (r[l] = -1), (e[l] = -1), (n &= ~o);
  }
}
function Jo(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - Re(n),
      l = 1 << r;
    (l & t) | (e[r] & t) && (e[r] |= t), (n &= ~l);
  }
}
var R = 0;
function zs(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var Ps,
  qo,
  Ls,
  Ts,
  Ms,
  ao = !1,
  sr = [],
  lt = null,
  ot = null,
  it = null,
  Dn = new Map(),
  In = new Map(),
  et = [],
  qc =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " ",
    );
function Yi(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      lt = null;
      break;
    case "dragenter":
    case "dragleave":
      ot = null;
      break;
    case "mouseover":
    case "mouseout":
      it = null;
      break;
    case "pointerover":
    case "pointerout":
      Dn.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      In.delete(t.pointerId);
  }
}
function pn(e, t, n, r, l, o) {
  return e === null || e.nativeEvent !== o
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: o,
        targetContainers: [l],
      }),
      t !== null && ((t = qn(t)), t !== null && qo(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      l !== null && t.indexOf(l) === -1 && t.push(l),
      e);
}
function bc(e, t, n, r, l) {
  switch (t) {
    case "focusin":
      return (lt = pn(lt, e, t, n, r, l)), !0;
    case "dragenter":
      return (ot = pn(ot, e, t, n, r, l)), !0;
    case "mouseover":
      return (it = pn(it, e, t, n, r, l)), !0;
    case "pointerover":
      var o = l.pointerId;
      return Dn.set(o, pn(Dn.get(o) || null, e, t, n, r, l)), !0;
    case "gotpointercapture":
      return (
        (o = l.pointerId), In.set(o, pn(In.get(o) || null, e, t, n, r, l)), !0
      );
  }
  return !1;
}
function Rs(e) {
  var t = wt(e.target);
  if (t !== null) {
    var n = Mt(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = ws(n)), t !== null)) {
          (e.blockedOn = t),
            Ms(e.priority, function () {
              Ls(n);
            });
          return;
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function wr(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = co(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      (lo = r), n.target.dispatchEvent(r), (lo = null);
    } else return (t = qn(n)), t !== null && qo(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function Gi(e, t, n) {
  wr(e) && n.delete(t);
}
function ed() {
  (ao = !1),
    lt !== null && wr(lt) && (lt = null),
    ot !== null && wr(ot) && (ot = null),
    it !== null && wr(it) && (it = null),
    Dn.forEach(Gi),
    In.forEach(Gi);
}
function mn(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    ao ||
      ((ao = !0),
      ge.unstable_scheduleCallback(ge.unstable_NormalPriority, ed)));
}
function Fn(e) {
  function t(l) {
    return mn(l, e);
  }
  if (0 < sr.length) {
    mn(sr[0], e);
    for (var n = 1; n < sr.length; n++) {
      var r = sr[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    lt !== null && mn(lt, e),
      ot !== null && mn(ot, e),
      it !== null && mn(it, e),
      Dn.forEach(t),
      In.forEach(t),
      n = 0;
    n < et.length;
    n++
  )
    (r = et[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < et.length && ((n = et[0]), n.blockedOn === null); )
    Rs(n), n.blockedOn === null && et.shift();
}
var Xt = Ze.ReactCurrentBatchConfig,
  Ir = !0;
function td(e, t, n, r) {
  var l = R,
    o = Xt.transition;
  Xt.transition = null;
  try {
    (R = 1), bo(e, t, n, r);
  } finally {
    (R = l), (Xt.transition = o);
  }
}
function nd(e, t, n, r) {
  var l = R,
    o = Xt.transition;
  Xt.transition = null;
  try {
    (R = 4), bo(e, t, n, r);
  } finally {
    (R = l), (Xt.transition = o);
  }
}
function bo(e, t, n, r) {
  if (Ir) {
    var l = co(e, t, n, r);
    if (l === null) Dl(e, t, r, Fr, n), Yi(e, r);
    else if (bc(l, e, t, n, r)) r.stopPropagation();
    else if ((Yi(e, r), t & 4 && -1 < qc.indexOf(e))) {
      for (; l !== null; ) {
        var o = qn(l);
        if (
          (o !== null && Ps(o),
          (o = co(e, t, n, r)),
          o === null && Dl(e, t, r, Fr, n),
          o === l)
        )
          break;
        l = o;
      }
      l !== null && r.stopPropagation();
    } else Dl(e, t, r, null, n);
  }
}
var Fr = null;
function co(e, t, n, r) {
  if (((Fr = null), (e = Xo(r)), (e = wt(e)), e !== null))
    if (((t = Mt(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = ws(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (Fr = e), null;
}
function Os(e) {
  switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (Hc()) {
        case Zo:
          return 1;
        case _s:
          return 4;
        case Or:
        case Wc:
          return 16;
        case Cs:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var nt = null,
  ei = null,
  Sr = null;
function Ds() {
  if (Sr) return Sr;
  var e,
    t = ei,
    n = t.length,
    r,
    l = "value" in nt ? nt.value : nt.textContent,
    o = l.length;
  for (e = 0; e < n && t[e] === l[e]; e++);
  var i = n - e;
  for (r = 1; r <= i && t[n - r] === l[o - r]; r++);
  return (Sr = l.slice(e, 1 < r ? 1 - r : void 0));
}
function Nr(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function ar() {
  return !0;
}
function Xi() {
  return !1;
}
function xe(e) {
  function t(n, r, l, o, i) {
    (this._reactName = n),
      (this._targetInst = l),
      (this.type = r),
      (this.nativeEvent = o),
      (this.target = i),
      (this.currentTarget = null);
    for (var u in e)
      e.hasOwnProperty(u) && ((n = e[u]), (this[u] = n ? n(o) : o[u]));
    return (
      (this.isDefaultPrevented = (
        o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1
      )
        ? ar
        : Xi),
      (this.isPropagationStopped = Xi),
      this
    );
  }
  return (
    V(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = ar));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = ar));
      },
      persist: function () {},
      isPersistent: ar,
    }),
    t
  );
}
var un = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  ti = xe(un),
  Jn = V({}, un, { view: 0, detail: 0 }),
  rd = xe(Jn),
  Cl,
  jl,
  hn,
  rl = V({}, Jn, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: ni,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget;
    },
    movementX: function (e) {
      return "movementX" in e
        ? e.movementX
        : (e !== hn &&
            (hn && e.type === "mousemove"
              ? ((Cl = e.screenX - hn.screenX), (jl = e.screenY - hn.screenY))
              : (jl = Cl = 0),
            (hn = e)),
          Cl);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : jl;
    },
  }),
  Zi = xe(rl),
  ld = V({}, rl, { dataTransfer: 0 }),
  od = xe(ld),
  id = V({}, Jn, { relatedTarget: 0 }),
  zl = xe(id),
  ud = V({}, un, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  sd = xe(ud),
  ad = V({}, un, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  cd = xe(ad),
  dd = V({}, un, { data: 0 }),
  Ji = xe(dd),
  fd = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified",
  },
  pd = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta",
  },
  md = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function hd(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = md[e]) ? !!t[e] : !1;
}
function ni() {
  return hd;
}
var vd = V({}, Jn, {
    key: function (e) {
      if (e.key) {
        var t = fd[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = Nr(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
          ? pd[e.keyCode] || "Unidentified"
          : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: ni,
    charCode: function (e) {
      return e.type === "keypress" ? Nr(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? Nr(e)
        : e.type === "keydown" || e.type === "keyup"
          ? e.keyCode
          : 0;
    },
  }),
  gd = xe(vd),
  yd = V({}, rl, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  qi = xe(yd),
  xd = V({}, Jn, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: ni,
  }),
  kd = xe(xd),
  wd = V({}, un, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Sd = xe(wd),
  Nd = V({}, rl, {
    deltaX: function (e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return "deltaY" in e
        ? e.deltaY
        : "wheelDeltaY" in e
          ? -e.wheelDeltaY
          : "wheelDelta" in e
            ? -e.wheelDelta
            : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  Ed = xe(Nd),
  _d = [9, 13, 27, 32],
  ri = Ke && "CompositionEvent" in window,
  _n = null;
Ke && "documentMode" in document && (_n = document.documentMode);
var Cd = Ke && "TextEvent" in window && !_n,
  Is = Ke && (!ri || (_n && 8 < _n && 11 >= _n)),
  bi = " ",
  eu = !1;
function Fs(e, t) {
  switch (e) {
    case "keyup":
      return _d.indexOf(t.keyCode) !== -1;
    case "keydown":
      return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function Us(e) {
  return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var It = !1;
function jd(e, t) {
  switch (e) {
    case "compositionend":
      return Us(t);
    case "keypress":
      return t.which !== 32 ? null : ((eu = !0), bi);
    case "textInput":
      return (e = t.data), e === bi && eu ? null : e;
    default:
      return null;
  }
}
function zd(e, t) {
  if (It)
    return e === "compositionend" || (!ri && Fs(e, t))
      ? ((e = Ds()), (Sr = ei = nt = null), (It = !1), e)
      : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case "compositionend":
      return Is && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var Pd = {
  color: !0,
  date: !0,
  datetime: !0,
  "datetime-local": !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0,
};
function tu(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!Pd[e.type] : t === "textarea";
}
function $s(e, t, n, r) {
  vs(r),
    (t = Ur(t, "onChange")),
    0 < t.length &&
      ((n = new ti("onChange", "change", null, n, r)),
      e.push({ event: n, listeners: t }));
}
var Cn = null,
  Un = null;
function Ld(e) {
  Zs(e, 0);
}
function ll(e) {
  var t = $t(e);
  if (as(t)) return e;
}
function Td(e, t) {
  if (e === "change") return t;
}
var As = !1;
if (Ke) {
  var Pl;
  if (Ke) {
    var Ll = "oninput" in document;
    if (!Ll) {
      var nu = document.createElement("div");
      nu.setAttribute("oninput", "return;"),
        (Ll = typeof nu.oninput == "function");
    }
    Pl = Ll;
  } else Pl = !1;
  As = Pl && (!document.documentMode || 9 < document.documentMode);
}
function ru() {
  Cn && (Cn.detachEvent("onpropertychange", Vs), (Un = Cn = null));
}
function Vs(e) {
  if (e.propertyName === "value" && ll(Un)) {
    var t = [];
    $s(t, Un, e, Xo(e)), ks(Ld, t);
  }
}
function Md(e, t, n) {
  e === "focusin"
    ? (ru(), (Cn = t), (Un = n), Cn.attachEvent("onpropertychange", Vs))
    : e === "focusout" && ru();
}
function Rd(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return ll(Un);
}
function Od(e, t) {
  if (e === "click") return ll(t);
}
function Dd(e, t) {
  if (e === "input" || e === "change") return ll(t);
}
function Id(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var De = typeof Object.is == "function" ? Object.is : Id;
function $n(e, t) {
  if (De(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var l = n[r];
    if (!Kl.call(t, l) || !De(e[l], t[l])) return !1;
  }
  return !0;
}
function lu(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function ou(e, t) {
  var n = lu(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (((r = e + n.textContent.length), e <= t && r >= t))
        return { node: n, offset: t - e };
      e = r;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = lu(n);
  }
}
function Bs(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
        ? !1
        : t && t.nodeType === 3
          ? Bs(e, t.parentNode)
          : "contains" in e
            ? e.contains(t)
            : e.compareDocumentPosition
              ? !!(e.compareDocumentPosition(t) & 16)
              : !1
    : !1;
}
function Hs() {
  for (var e = window, t = Tr(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = Tr(e.document);
  }
  return t;
}
function li(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    t &&
    ((t === "input" &&
      (e.type === "text" ||
        e.type === "search" ||
        e.type === "tel" ||
        e.type === "url" ||
        e.type === "password")) ||
      t === "textarea" ||
      e.contentEditable === "true")
  );
}
function Fd(e) {
  var t = Hs(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    Bs(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && li(n)) {
      if (
        ((t = r.start),
        (e = r.end),
        e === void 0 && (e = t),
        "selectionStart" in n)
      )
        (n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length));
      else if (
        ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection();
        var l = n.textContent.length,
          o = Math.min(r.start, l);
        (r = r.end === void 0 ? o : Math.min(r.end, l)),
          !e.extend && o > r && ((l = r), (r = o), (o = l)),
          (l = ou(n, o));
        var i = ou(n, r);
        l &&
          i &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== l.node ||
            e.anchorOffset !== l.offset ||
            e.focusNode !== i.node ||
            e.focusOffset !== i.offset) &&
          ((t = t.createRange()),
          t.setStart(l.node, l.offset),
          e.removeAllRanges(),
          o > r
            ? (e.addRange(t), e.extend(i.node, i.offset))
            : (t.setEnd(i.node, i.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; (e = e.parentNode); )
      e.nodeType === 1 &&
        t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
      (e = t[n]),
        (e.element.scrollLeft = e.left),
        (e.element.scrollTop = e.top);
  }
}
var Ud = Ke && "documentMode" in document && 11 >= document.documentMode,
  Ft = null,
  fo = null,
  jn = null,
  po = !1;
function iu(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  po ||
    Ft == null ||
    Ft !== Tr(r) ||
    ((r = Ft),
    "selectionStart" in r && li(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : ((r = (
          (r.ownerDocument && r.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset,
        })),
    (jn && $n(jn, r)) ||
      ((jn = r),
      (r = Ur(fo, "onSelect")),
      0 < r.length &&
        ((t = new ti("onSelect", "select", null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = Ft))));
}
function cr(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n["Webkit" + e] = "webkit" + t),
    (n["Moz" + e] = "moz" + t),
    n
  );
}
var Ut = {
    animationend: cr("Animation", "AnimationEnd"),
    animationiteration: cr("Animation", "AnimationIteration"),
    animationstart: cr("Animation", "AnimationStart"),
    transitionend: cr("Transition", "TransitionEnd"),
  },
  Tl = {},
  Ws = {};
Ke &&
  ((Ws = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete Ut.animationend.animation,
    delete Ut.animationiteration.animation,
    delete Ut.animationstart.animation),
  "TransitionEvent" in window || delete Ut.transitionend.transition);
function ol(e) {
  if (Tl[e]) return Tl[e];
  if (!Ut[e]) return e;
  var t = Ut[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in Ws) return (Tl[e] = t[n]);
  return e;
}
var Qs = ol("animationend"),
  Ks = ol("animationiteration"),
  Ys = ol("animationstart"),
  Gs = ol("transitionend"),
  Xs = new Map(),
  uu =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " ",
    );
function mt(e, t) {
  Xs.set(e, t), Tt(t, [e]);
}
for (var Ml = 0; Ml < uu.length; Ml++) {
  var Rl = uu[Ml],
    $d = Rl.toLowerCase(),
    Ad = Rl[0].toUpperCase() + Rl.slice(1);
  mt($d, "on" + Ad);
}
mt(Qs, "onAnimationEnd");
mt(Ks, "onAnimationIteration");
mt(Ys, "onAnimationStart");
mt("dblclick", "onDoubleClick");
mt("focusin", "onFocus");
mt("focusout", "onBlur");
mt(Gs, "onTransitionEnd");
qt("onMouseEnter", ["mouseout", "mouseover"]);
qt("onMouseLeave", ["mouseout", "mouseover"]);
qt("onPointerEnter", ["pointerout", "pointerover"]);
qt("onPointerLeave", ["pointerout", "pointerover"]);
Tt(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(
    " ",
  ),
);
Tt(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " ",
  ),
);
Tt("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Tt(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" "),
);
Tt(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" "),
);
Tt(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" "),
);
var Sn =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " ",
    ),
  Vd = new Set("cancel close invalid load scroll toggle".split(" ").concat(Sn));
function su(e, t, n) {
  var r = e.type || "unknown-event";
  (e.currentTarget = n), $c(r, t, void 0, e), (e.currentTarget = null);
}
function Zs(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      l = r.event;
    r = r.listeners;
    e: {
      var o = void 0;
      if (t)
        for (var i = r.length - 1; 0 <= i; i--) {
          var u = r[i],
            s = u.instance,
            c = u.currentTarget;
          if (((u = u.listener), s !== o && l.isPropagationStopped())) break e;
          su(l, u, c), (o = s);
        }
      else
        for (i = 0; i < r.length; i++) {
          if (
            ((u = r[i]),
            (s = u.instance),
            (c = u.currentTarget),
            (u = u.listener),
            s !== o && l.isPropagationStopped())
          )
            break e;
          su(l, u, c), (o = s);
        }
    }
  }
  if (Rr) throw ((e = uo), (Rr = !1), (uo = null), e);
}
function D(e, t) {
  var n = t[yo];
  n === void 0 && (n = t[yo] = new Set());
  var r = e + "__bubble";
  n.has(r) || (Js(t, e, 2, !1), n.add(r));
}
function Ol(e, t, n) {
  var r = 0;
  t && (r |= 4), Js(n, e, r, t);
}
var dr = "_reactListening" + Math.random().toString(36).slice(2);
function An(e) {
  if (!e[dr]) {
    (e[dr] = !0),
      ls.forEach(function (n) {
        n !== "selectionchange" && (Vd.has(n) || Ol(n, !1, e), Ol(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[dr] || ((t[dr] = !0), Ol("selectionchange", !1, t));
  }
}
function Js(e, t, n, r) {
  switch (Os(t)) {
    case 1:
      var l = td;
      break;
    case 4:
      l = nd;
      break;
    default:
      l = bo;
  }
  (n = l.bind(null, t, n, e)),
    (l = void 0),
    !io ||
      (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
      (l = !0),
    r
      ? l !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: l })
        : e.addEventListener(t, n, !0)
      : l !== void 0
        ? e.addEventListener(t, n, { passive: l })
        : e.addEventListener(t, n, !1);
}
function Dl(e, t, n, r, l) {
  var o = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var i = r.tag;
      if (i === 3 || i === 4) {
        var u = r.stateNode.containerInfo;
        if (u === l || (u.nodeType === 8 && u.parentNode === l)) break;
        if (i === 4)
          for (i = r.return; i !== null; ) {
            var s = i.tag;
            if (
              (s === 3 || s === 4) &&
              ((s = i.stateNode.containerInfo),
              s === l || (s.nodeType === 8 && s.parentNode === l))
            )
              return;
            i = i.return;
          }
        for (; u !== null; ) {
          if (((i = wt(u)), i === null)) return;
          if (((s = i.tag), s === 5 || s === 6)) {
            r = o = i;
            continue e;
          }
          u = u.parentNode;
        }
      }
      r = r.return;
    }
  ks(function () {
    var c = o,
      v = Xo(n),
      h = [];
    e: {
      var m = Xs.get(e);
      if (m !== void 0) {
        var x = ti,
          k = e;
        switch (e) {
          case "keypress":
            if (Nr(n) === 0) break e;
          case "keydown":
          case "keyup":
            x = gd;
            break;
          case "focusin":
            (k = "focus"), (x = zl);
            break;
          case "focusout":
            (k = "blur"), (x = zl);
            break;
          case "beforeblur":
          case "afterblur":
            x = zl;
            break;
          case "click":
            if (n.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            x = Zi;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            x = od;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            x = kd;
            break;
          case Qs:
          case Ks:
          case Ys:
            x = sd;
            break;
          case Gs:
            x = Sd;
            break;
          case "scroll":
            x = rd;
            break;
          case "wheel":
            x = Ed;
            break;
          case "copy":
          case "cut":
          case "paste":
            x = cd;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            x = qi;
        }
        var w = (t & 4) !== 0,
          F = !w && e === "scroll",
          d = w ? (m !== null ? m + "Capture" : null) : m;
        w = [];
        for (var a = c, p; a !== null; ) {
          p = a;
          var g = p.stateNode;
          if (
            (p.tag === 5 &&
              g !== null &&
              ((p = g),
              d !== null && ((g = On(a, d)), g != null && w.push(Vn(a, g, p)))),
            F)
          )
            break;
          a = a.return;
        }
        0 < w.length &&
          ((m = new x(m, k, null, n, v)), h.push({ event: m, listeners: w }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((m = e === "mouseover" || e === "pointerover"),
          (x = e === "mouseout" || e === "pointerout"),
          m &&
            n !== lo &&
            (k = n.relatedTarget || n.fromElement) &&
            (wt(k) || k[Ye]))
        )
          break e;
        if (
          (x || m) &&
          ((m =
            v.window === v
              ? v
              : (m = v.ownerDocument)
                ? m.defaultView || m.parentWindow
                : window),
          x
            ? ((k = n.relatedTarget || n.toElement),
              (x = c),
              (k = k ? wt(k) : null),
              k !== null &&
                ((F = Mt(k)), k !== F || (k.tag !== 5 && k.tag !== 6)) &&
                (k = null))
            : ((x = null), (k = c)),
          x !== k)
        ) {
          if (
            ((w = Zi),
            (g = "onMouseLeave"),
            (d = "onMouseEnter"),
            (a = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((w = qi),
              (g = "onPointerLeave"),
              (d = "onPointerEnter"),
              (a = "pointer")),
            (F = x == null ? m : $t(x)),
            (p = k == null ? m : $t(k)),
            (m = new w(g, a + "leave", x, n, v)),
            (m.target = F),
            (m.relatedTarget = p),
            (g = null),
            wt(v) === c &&
              ((w = new w(d, a + "enter", k, n, v)),
              (w.target = p),
              (w.relatedTarget = F),
              (g = w)),
            (F = g),
            x && k)
          )
            t: {
              for (w = x, d = k, a = 0, p = w; p; p = Rt(p)) a++;
              for (p = 0, g = d; g; g = Rt(g)) p++;
              for (; 0 < a - p; ) (w = Rt(w)), a--;
              for (; 0 < p - a; ) (d = Rt(d)), p--;
              for (; a--; ) {
                if (w === d || (d !== null && w === d.alternate)) break t;
                (w = Rt(w)), (d = Rt(d));
              }
              w = null;
            }
          else w = null;
          x !== null && au(h, m, x, w, !1),
            k !== null && F !== null && au(h, F, k, w, !0);
        }
      }
      e: {
        if (
          ((m = c ? $t(c) : window),
          (x = m.nodeName && m.nodeName.toLowerCase()),
          x === "select" || (x === "input" && m.type === "file"))
        )
          var N = Td;
        else if (tu(m))
          if (As) N = Dd;
          else {
            N = Rd;
            var _ = Md;
          }
        else
          (x = m.nodeName) &&
            x.toLowerCase() === "input" &&
            (m.type === "checkbox" || m.type === "radio") &&
            (N = Od);
        if (N && (N = N(e, c))) {
          $s(h, N, n, v);
          break e;
        }
        _ && _(e, m, c),
          e === "focusout" &&
            (_ = m._wrapperState) &&
            _.controlled &&
            m.type === "number" &&
            bl(m, "number", m.value);
      }
      switch (((_ = c ? $t(c) : window), e)) {
        case "focusin":
          (tu(_) || _.contentEditable === "true") &&
            ((Ft = _), (fo = c), (jn = null));
          break;
        case "focusout":
          jn = fo = Ft = null;
          break;
        case "mousedown":
          po = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (po = !1), iu(h, n, v);
          break;
        case "selectionchange":
          if (Ud) break;
        case "keydown":
        case "keyup":
          iu(h, n, v);
      }
      var C;
      if (ri)
        e: {
          switch (e) {
            case "compositionstart":
              var j = "onCompositionStart";
              break e;
            case "compositionend":
              j = "onCompositionEnd";
              break e;
            case "compositionupdate":
              j = "onCompositionUpdate";
              break e;
          }
          j = void 0;
        }
      else
        It
          ? Fs(e, n) && (j = "onCompositionEnd")
          : e === "keydown" && n.keyCode === 229 && (j = "onCompositionStart");
      j &&
        (Is &&
          n.locale !== "ko" &&
          (It || j !== "onCompositionStart"
            ? j === "onCompositionEnd" && It && (C = Ds())
            : ((nt = v),
              (ei = "value" in nt ? nt.value : nt.textContent),
              (It = !0))),
        (_ = Ur(c, j)),
        0 < _.length &&
          ((j = new Ji(j, e, null, n, v)),
          h.push({ event: j, listeners: _ }),
          C ? (j.data = C) : ((C = Us(n)), C !== null && (j.data = C)))),
        (C = Cd ? jd(e, n) : zd(e, n)) &&
          ((c = Ur(c, "onBeforeInput")),
          0 < c.length &&
            ((v = new Ji("onBeforeInput", "beforeinput", null, n, v)),
            h.push({ event: v, listeners: c }),
            (v.data = C)));
    }
    Zs(h, t);
  });
}
function Vn(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function Ur(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var l = e,
      o = l.stateNode;
    l.tag === 5 &&
      o !== null &&
      ((l = o),
      (o = On(e, n)),
      o != null && r.unshift(Vn(e, o, l)),
      (o = On(e, t)),
      o != null && r.push(Vn(e, o, l))),
      (e = e.return);
  }
  return r;
}
function Rt(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function au(e, t, n, r, l) {
  for (var o = t._reactName, i = []; n !== null && n !== r; ) {
    var u = n,
      s = u.alternate,
      c = u.stateNode;
    if (s !== null && s === r) break;
    u.tag === 5 &&
      c !== null &&
      ((u = c),
      l
        ? ((s = On(n, o)), s != null && i.unshift(Vn(n, s, u)))
        : l || ((s = On(n, o)), s != null && i.push(Vn(n, s, u)))),
      (n = n.return);
  }
  i.length !== 0 && e.push({ event: t, listeners: i });
}
var Bd = /\r\n?/g,
  Hd = /\u0000|\uFFFD/g;
function cu(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      Bd,
      `
`,
    )
    .replace(Hd, "");
}
function fr(e, t, n) {
  if (((t = cu(t)), cu(e) !== t && n)) throw Error(y(425));
}
function $r() {}
var mo = null,
  ho = null;
function vo(e, t) {
  return (
    e === "textarea" ||
    e === "noscript" ||
    typeof t.children == "string" ||
    typeof t.children == "number" ||
    (typeof t.dangerouslySetInnerHTML == "object" &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  );
}
var go = typeof setTimeout == "function" ? setTimeout : void 0,
  Wd = typeof clearTimeout == "function" ? clearTimeout : void 0,
  du = typeof Promise == "function" ? Promise : void 0,
  Qd =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof du < "u"
        ? function (e) {
            return du.resolve(null).then(e).catch(Kd);
          }
        : go;
function Kd(e) {
  setTimeout(function () {
    throw e;
  });
}
function Il(e, t) {
  var n = t,
    r = 0;
  do {
    var l = n.nextSibling;
    if ((e.removeChild(n), l && l.nodeType === 8))
      if (((n = l.data), n === "/$")) {
        if (r === 0) {
          e.removeChild(l), Fn(t);
          return;
        }
        r--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
    n = l;
  } while (n);
  Fn(t);
}
function ut(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
      if (t === "/$") return null;
    }
  }
  return e;
}
function fu(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === "$" || n === "$!" || n === "$?") {
        if (t === 0) return e;
        t--;
      } else n === "/$" && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var sn = Math.random().toString(36).slice(2),
  Ue = "__reactFiber$" + sn,
  Bn = "__reactProps$" + sn,
  Ye = "__reactContainer$" + sn,
  yo = "__reactEvents$" + sn,
  Yd = "__reactListeners$" + sn,
  Gd = "__reactHandles$" + sn;
function wt(e) {
  var t = e[Ue];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[Ye] || n[Ue])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = fu(e); e !== null; ) {
          if ((n = e[Ue])) return n;
          e = fu(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function qn(e) {
  return (
    (e = e[Ue] || e[Ye]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function $t(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(y(33));
}
function il(e) {
  return e[Bn] || null;
}
var xo = [],
  At = -1;
function ht(e) {
  return { current: e };
}
function I(e) {
  0 > At || ((e.current = xo[At]), (xo[At] = null), At--);
}
function O(e, t) {
  At++, (xo[At] = e.current), (e.current = t);
}
var pt = {},
  le = ht(pt),
  de = ht(!1),
  Ct = pt;
function bt(e, t) {
  var n = e.type.contextTypes;
  if (!n) return pt;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var l = {},
    o;
  for (o in n) l[o] = t[o];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = l)),
    l
  );
}
function fe(e) {
  return (e = e.childContextTypes), e != null;
}
function Ar() {
  I(de), I(le);
}
function pu(e, t, n) {
  if (le.current !== pt) throw Error(y(168));
  O(le, t), O(de, n);
}
function qs(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
    return n;
  r = r.getChildContext();
  for (var l in r) if (!(l in t)) throw Error(y(108, Mc(e) || "Unknown", l));
  return V({}, n, r);
}
function Vr(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || pt),
    (Ct = le.current),
    O(le, e),
    O(de, de.current),
    !0
  );
}
function mu(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(y(169));
  n
    ? ((e = qs(e, t, Ct)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      I(de),
      I(le),
      O(le, e))
    : I(de),
    O(de, n);
}
var Be = null,
  ul = !1,
  Fl = !1;
function bs(e) {
  Be === null ? (Be = [e]) : Be.push(e);
}
function Xd(e) {
  (ul = !0), bs(e);
}
function vt() {
  if (!Fl && Be !== null) {
    Fl = !0;
    var e = 0,
      t = R;
    try {
      var n = Be;
      for (R = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      (Be = null), (ul = !1);
    } catch (l) {
      throw (Be !== null && (Be = Be.slice(e + 1)), Es(Zo, vt), l);
    } finally {
      (R = t), (Fl = !1);
    }
  }
  return null;
}
var Vt = [],
  Bt = 0,
  Br = null,
  Hr = 0,
  we = [],
  Se = 0,
  jt = null,
  He = 1,
  We = "";
function xt(e, t) {
  (Vt[Bt++] = Hr), (Vt[Bt++] = Br), (Br = e), (Hr = t);
}
function ea(e, t, n) {
  (we[Se++] = He), (we[Se++] = We), (we[Se++] = jt), (jt = e);
  var r = He;
  e = We;
  var l = 32 - Re(r) - 1;
  (r &= ~(1 << l)), (n += 1);
  var o = 32 - Re(t) + l;
  if (30 < o) {
    var i = l - (l % 5);
    (o = (r & ((1 << i) - 1)).toString(32)),
      (r >>= i),
      (l -= i),
      (He = (1 << (32 - Re(t) + l)) | (n << l) | r),
      (We = o + e);
  } else (He = (1 << o) | (n << l) | r), (We = e);
}
function oi(e) {
  e.return !== null && (xt(e, 1), ea(e, 1, 0));
}
function ii(e) {
  for (; e === Br; )
    (Br = Vt[--Bt]), (Vt[Bt] = null), (Hr = Vt[--Bt]), (Vt[Bt] = null);
  for (; e === jt; )
    (jt = we[--Se]),
      (we[Se] = null),
      (We = we[--Se]),
      (we[Se] = null),
      (He = we[--Se]),
      (we[Se] = null);
}
var ve = null,
  he = null,
  U = !1,
  Me = null;
function ta(e, t) {
  var n = Ne(5, null, null, 0);
  (n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function hu(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (ve = e), (he = ut(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (ve = e), (he = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = jt !== null ? { id: He, overflow: We } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = Ne(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (ve = e),
            (he = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function ko(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function wo(e) {
  if (U) {
    var t = he;
    if (t) {
      var n = t;
      if (!hu(e, t)) {
        if (ko(e)) throw Error(y(418));
        t = ut(n.nextSibling);
        var r = ve;
        t && hu(e, t)
          ? ta(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (U = !1), (ve = e));
      }
    } else {
      if (ko(e)) throw Error(y(418));
      (e.flags = (e.flags & -4097) | 2), (U = !1), (ve = e);
    }
  }
}
function vu(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  ve = e;
}
function pr(e) {
  if (e !== ve) return !1;
  if (!U) return vu(e), (U = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !vo(e.type, e.memoizedProps))),
    t && (t = he))
  ) {
    if (ko(e)) throw (na(), Error(y(418)));
    for (; t; ) ta(e, t), (t = ut(t.nextSibling));
  }
  if ((vu(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(y(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              he = ut(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      he = null;
    }
  } else he = ve ? ut(e.stateNode.nextSibling) : null;
  return !0;
}
function na() {
  for (var e = he; e; ) e = ut(e.nextSibling);
}
function en() {
  (he = ve = null), (U = !1);
}
function ui(e) {
  Me === null ? (Me = [e]) : Me.push(e);
}
var Zd = Ze.ReactCurrentBatchConfig;
function vn(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(y(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(y(147, e));
      var l = r,
        o = "" + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == "function" &&
        t.ref._stringRef === o
        ? t.ref
        : ((t = function (i) {
            var u = l.refs;
            i === null ? delete u[o] : (u[o] = i);
          }),
          (t._stringRef = o),
          t);
    }
    if (typeof e != "string") throw Error(y(284));
    if (!n._owner) throw Error(y(290, e));
  }
  return e;
}
function mr(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      y(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : e,
      ),
    ))
  );
}
function gu(e) {
  var t = e._init;
  return t(e._payload);
}
function ra(e) {
  function t(d, a) {
    if (e) {
      var p = d.deletions;
      p === null ? ((d.deletions = [a]), (d.flags |= 16)) : p.push(a);
    }
  }
  function n(d, a) {
    if (!e) return null;
    for (; a !== null; ) t(d, a), (a = a.sibling);
    return null;
  }
  function r(d, a) {
    for (d = new Map(); a !== null; )
      a.key !== null ? d.set(a.key, a) : d.set(a.index, a), (a = a.sibling);
    return d;
  }
  function l(d, a) {
    return (d = dt(d, a)), (d.index = 0), (d.sibling = null), d;
  }
  function o(d, a, p) {
    return (
      (d.index = p),
      e
        ? ((p = d.alternate),
          p !== null
            ? ((p = p.index), p < a ? ((d.flags |= 2), a) : p)
            : ((d.flags |= 2), a))
        : ((d.flags |= 1048576), a)
    );
  }
  function i(d) {
    return e && d.alternate === null && (d.flags |= 2), d;
  }
  function u(d, a, p, g) {
    return a === null || a.tag !== 6
      ? ((a = Wl(p, d.mode, g)), (a.return = d), a)
      : ((a = l(a, p)), (a.return = d), a);
  }
  function s(d, a, p, g) {
    var N = p.type;
    return N === Dt
      ? v(d, a, p.props.children, g, p.key)
      : a !== null &&
          (a.elementType === N ||
            (typeof N == "object" &&
              N !== null &&
              N.$$typeof === qe &&
              gu(N) === a.type))
        ? ((g = l(a, p.props)), (g.ref = vn(d, a, p)), (g.return = d), g)
        : ((g = Lr(p.type, p.key, p.props, null, d.mode, g)),
          (g.ref = vn(d, a, p)),
          (g.return = d),
          g);
  }
  function c(d, a, p, g) {
    return a === null ||
      a.tag !== 4 ||
      a.stateNode.containerInfo !== p.containerInfo ||
      a.stateNode.implementation !== p.implementation
      ? ((a = Ql(p, d.mode, g)), (a.return = d), a)
      : ((a = l(a, p.children || [])), (a.return = d), a);
  }
  function v(d, a, p, g, N) {
    return a === null || a.tag !== 7
      ? ((a = _t(p, d.mode, g, N)), (a.return = d), a)
      : ((a = l(a, p)), (a.return = d), a);
  }
  function h(d, a, p) {
    if ((typeof a == "string" && a !== "") || typeof a == "number")
      return (a = Wl("" + a, d.mode, p)), (a.return = d), a;
    if (typeof a == "object" && a !== null) {
      switch (a.$$typeof) {
        case rr:
          return (
            (p = Lr(a.type, a.key, a.props, null, d.mode, p)),
            (p.ref = vn(d, null, a)),
            (p.return = d),
            p
          );
        case Ot:
          return (a = Ql(a, d.mode, p)), (a.return = d), a;
        case qe:
          var g = a._init;
          return h(d, g(a._payload), p);
      }
      if (kn(a) || dn(a))
        return (a = _t(a, d.mode, p, null)), (a.return = d), a;
      mr(d, a);
    }
    return null;
  }
  function m(d, a, p, g) {
    var N = a !== null ? a.key : null;
    if ((typeof p == "string" && p !== "") || typeof p == "number")
      return N !== null ? null : u(d, a, "" + p, g);
    if (typeof p == "object" && p !== null) {
      switch (p.$$typeof) {
        case rr:
          return p.key === N ? s(d, a, p, g) : null;
        case Ot:
          return p.key === N ? c(d, a, p, g) : null;
        case qe:
          return (N = p._init), m(d, a, N(p._payload), g);
      }
      if (kn(p) || dn(p)) return N !== null ? null : v(d, a, p, g, null);
      mr(d, p);
    }
    return null;
  }
  function x(d, a, p, g, N) {
    if ((typeof g == "string" && g !== "") || typeof g == "number")
      return (d = d.get(p) || null), u(a, d, "" + g, N);
    if (typeof g == "object" && g !== null) {
      switch (g.$$typeof) {
        case rr:
          return (d = d.get(g.key === null ? p : g.key) || null), s(a, d, g, N);
        case Ot:
          return (d = d.get(g.key === null ? p : g.key) || null), c(a, d, g, N);
        case qe:
          var _ = g._init;
          return x(d, a, p, _(g._payload), N);
      }
      if (kn(g) || dn(g)) return (d = d.get(p) || null), v(a, d, g, N, null);
      mr(a, g);
    }
    return null;
  }
  function k(d, a, p, g) {
    for (
      var N = null, _ = null, C = a, j = (a = 0), H = null;
      C !== null && j < p.length;
      j++
    ) {
      C.index > j ? ((H = C), (C = null)) : (H = C.sibling);
      var T = m(d, C, p[j], g);
      if (T === null) {
        C === null && (C = H);
        break;
      }
      e && C && T.alternate === null && t(d, C),
        (a = o(T, a, j)),
        _ === null ? (N = T) : (_.sibling = T),
        (_ = T),
        (C = H);
    }
    if (j === p.length) return n(d, C), U && xt(d, j), N;
    if (C === null) {
      for (; j < p.length; j++)
        (C = h(d, p[j], g)),
          C !== null &&
            ((a = o(C, a, j)), _ === null ? (N = C) : (_.sibling = C), (_ = C));
      return U && xt(d, j), N;
    }
    for (C = r(d, C); j < p.length; j++)
      (H = x(C, d, j, p[j], g)),
        H !== null &&
          (e && H.alternate !== null && C.delete(H.key === null ? j : H.key),
          (a = o(H, a, j)),
          _ === null ? (N = H) : (_.sibling = H),
          (_ = H));
    return (
      e &&
        C.forEach(function (ze) {
          return t(d, ze);
        }),
      U && xt(d, j),
      N
    );
  }
  function w(d, a, p, g) {
    var N = dn(p);
    if (typeof N != "function") throw Error(y(150));
    if (((p = N.call(p)), p == null)) throw Error(y(151));
    for (
      var _ = (N = null), C = a, j = (a = 0), H = null, T = p.next();
      C !== null && !T.done;
      j++, T = p.next()
    ) {
      C.index > j ? ((H = C), (C = null)) : (H = C.sibling);
      var ze = m(d, C, T.value, g);
      if (ze === null) {
        C === null && (C = H);
        break;
      }
      e && C && ze.alternate === null && t(d, C),
        (a = o(ze, a, j)),
        _ === null ? (N = ze) : (_.sibling = ze),
        (_ = ze),
        (C = H);
    }
    if (T.done) return n(d, C), U && xt(d, j), N;
    if (C === null) {
      for (; !T.done; j++, T = p.next())
        (T = h(d, T.value, g)),
          T !== null &&
            ((a = o(T, a, j)), _ === null ? (N = T) : (_.sibling = T), (_ = T));
      return U && xt(d, j), N;
    }
    for (C = r(d, C); !T.done; j++, T = p.next())
      (T = x(C, d, j, T.value, g)),
        T !== null &&
          (e && T.alternate !== null && C.delete(T.key === null ? j : T.key),
          (a = o(T, a, j)),
          _ === null ? (N = T) : (_.sibling = T),
          (_ = T));
    return (
      e &&
        C.forEach(function (an) {
          return t(d, an);
        }),
      U && xt(d, j),
      N
    );
  }
  function F(d, a, p, g) {
    if (
      (typeof p == "object" &&
        p !== null &&
        p.type === Dt &&
        p.key === null &&
        (p = p.props.children),
      typeof p == "object" && p !== null)
    ) {
      switch (p.$$typeof) {
        case rr:
          e: {
            for (var N = p.key, _ = a; _ !== null; ) {
              if (_.key === N) {
                if (((N = p.type), N === Dt)) {
                  if (_.tag === 7) {
                    n(d, _.sibling),
                      (a = l(_, p.props.children)),
                      (a.return = d),
                      (d = a);
                    break e;
                  }
                } else if (
                  _.elementType === N ||
                  (typeof N == "object" &&
                    N !== null &&
                    N.$$typeof === qe &&
                    gu(N) === _.type)
                ) {
                  n(d, _.sibling),
                    (a = l(_, p.props)),
                    (a.ref = vn(d, _, p)),
                    (a.return = d),
                    (d = a);
                  break e;
                }
                n(d, _);
                break;
              } else t(d, _);
              _ = _.sibling;
            }
            p.type === Dt
              ? ((a = _t(p.props.children, d.mode, g, p.key)),
                (a.return = d),
                (d = a))
              : ((g = Lr(p.type, p.key, p.props, null, d.mode, g)),
                (g.ref = vn(d, a, p)),
                (g.return = d),
                (d = g));
          }
          return i(d);
        case Ot:
          e: {
            for (_ = p.key; a !== null; ) {
              if (a.key === _)
                if (
                  a.tag === 4 &&
                  a.stateNode.containerInfo === p.containerInfo &&
                  a.stateNode.implementation === p.implementation
                ) {
                  n(d, a.sibling),
                    (a = l(a, p.children || [])),
                    (a.return = d),
                    (d = a);
                  break e;
                } else {
                  n(d, a);
                  break;
                }
              else t(d, a);
              a = a.sibling;
            }
            (a = Ql(p, d.mode, g)), (a.return = d), (d = a);
          }
          return i(d);
        case qe:
          return (_ = p._init), F(d, a, _(p._payload), g);
      }
      if (kn(p)) return k(d, a, p, g);
      if (dn(p)) return w(d, a, p, g);
      mr(d, p);
    }
    return (typeof p == "string" && p !== "") || typeof p == "number"
      ? ((p = "" + p),
        a !== null && a.tag === 6
          ? (n(d, a.sibling), (a = l(a, p)), (a.return = d), (d = a))
          : (n(d, a), (a = Wl(p, d.mode, g)), (a.return = d), (d = a)),
        i(d))
      : n(d, a);
  }
  return F;
}
var tn = ra(!0),
  la = ra(!1),
  Wr = ht(null),
  Qr = null,
  Ht = null,
  si = null;
function ai() {
  si = Ht = Qr = null;
}
function ci(e) {
  var t = Wr.current;
  I(Wr), (e._currentValue = t);
}
function So(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
        : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
      e === n)
    )
      break;
    e = e.return;
  }
}
function Zt(e, t) {
  (Qr = e),
    (si = Ht = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (ce = !0), (e.firstContext = null));
}
function Ce(e) {
  var t = e._currentValue;
  if (si !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), Ht === null)) {
      if (Qr === null) throw Error(y(308));
      (Ht = e), (Qr.dependencies = { lanes: 0, firstContext: e });
    } else Ht = Ht.next = e;
  return t;
}
var St = null;
function di(e) {
  St === null ? (St = [e]) : St.push(e);
}
function oa(e, t, n, r) {
  var l = t.interleaved;
  return (
    l === null ? ((n.next = n), di(t)) : ((n.next = l.next), (l.next = n)),
    (t.interleaved = n),
    Ge(e, r)
  );
}
function Ge(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    (e.childLanes |= t),
      (n = e.alternate),
      n !== null && (n.childLanes |= t),
      (n = e),
      (e = e.return);
  return n.tag === 3 ? n.stateNode : null;
}
var be = !1;
function fi(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function ia(e, t) {
  (e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      });
}
function Qe(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function st(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), M & 2)) {
    var l = r.pending;
    return (
      l === null ? (t.next = t) : ((t.next = l.next), (l.next = t)),
      (r.pending = t),
      Ge(e, n)
    );
  }
  return (
    (l = r.interleaved),
    l === null ? ((t.next = t), di(r)) : ((t.next = l.next), (l.next = t)),
    (r.interleaved = t),
    Ge(e, n)
  );
}
function Er(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), Jo(e, n);
  }
}
function yu(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var l = null,
      o = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var i = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        o === null ? (l = o = i) : (o = o.next = i), (n = n.next);
      } while (n !== null);
      o === null ? (l = o = t) : (o = o.next = t);
    } else l = o = t;
    (n = {
      baseState: r.baseState,
      firstBaseUpdate: l,
      lastBaseUpdate: o,
      shared: r.shared,
      effects: r.effects,
    }),
      (e.updateQueue = n);
    return;
  }
  (e = n.lastBaseUpdate),
    e === null ? (n.firstBaseUpdate = t) : (e.next = t),
    (n.lastBaseUpdate = t);
}
function Kr(e, t, n, r) {
  var l = e.updateQueue;
  be = !1;
  var o = l.firstBaseUpdate,
    i = l.lastBaseUpdate,
    u = l.shared.pending;
  if (u !== null) {
    l.shared.pending = null;
    var s = u,
      c = s.next;
    (s.next = null), i === null ? (o = c) : (i.next = c), (i = s);
    var v = e.alternate;
    v !== null &&
      ((v = v.updateQueue),
      (u = v.lastBaseUpdate),
      u !== i &&
        (u === null ? (v.firstBaseUpdate = c) : (u.next = c),
        (v.lastBaseUpdate = s)));
  }
  if (o !== null) {
    var h = l.baseState;
    (i = 0), (v = c = s = null), (u = o);
    do {
      var m = u.lane,
        x = u.eventTime;
      if ((r & m) === m) {
        v !== null &&
          (v = v.next =
            {
              eventTime: x,
              lane: 0,
              tag: u.tag,
              payload: u.payload,
              callback: u.callback,
              next: null,
            });
        e: {
          var k = e,
            w = u;
          switch (((m = t), (x = n), w.tag)) {
            case 1:
              if (((k = w.payload), typeof k == "function")) {
                h = k.call(x, h, m);
                break e;
              }
              h = k;
              break e;
            case 3:
              k.flags = (k.flags & -65537) | 128;
            case 0:
              if (
                ((k = w.payload),
                (m = typeof k == "function" ? k.call(x, h, m) : k),
                m == null)
              )
                break e;
              h = V({}, h, m);
              break e;
            case 2:
              be = !0;
          }
        }
        u.callback !== null &&
          u.lane !== 0 &&
          ((e.flags |= 64),
          (m = l.effects),
          m === null ? (l.effects = [u]) : m.push(u));
      } else
        (x = {
          eventTime: x,
          lane: m,
          tag: u.tag,
          payload: u.payload,
          callback: u.callback,
          next: null,
        }),
          v === null ? ((c = v = x), (s = h)) : (v = v.next = x),
          (i |= m);
      if (((u = u.next), u === null)) {
        if (((u = l.shared.pending), u === null)) break;
        (m = u),
          (u = m.next),
          (m.next = null),
          (l.lastBaseUpdate = m),
          (l.shared.pending = null);
      }
    } while (!0);
    if (
      (v === null && (s = h),
      (l.baseState = s),
      (l.firstBaseUpdate = c),
      (l.lastBaseUpdate = v),
      (t = l.shared.interleaved),
      t !== null)
    ) {
      l = t;
      do (i |= l.lane), (l = l.next);
      while (l !== t);
    } else o === null && (l.shared.lanes = 0);
    (Pt |= i), (e.lanes = i), (e.memoizedState = h);
  }
}
function xu(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        l = r.callback;
      if (l !== null) {
        if (((r.callback = null), (r = n), typeof l != "function"))
          throw Error(y(191, l));
        l.call(r);
      }
    }
}
var bn = {},
  Ae = ht(bn),
  Hn = ht(bn),
  Wn = ht(bn);
function Nt(e) {
  if (e === bn) throw Error(y(174));
  return e;
}
function pi(e, t) {
  switch ((O(Wn, t), O(Hn, e), O(Ae, bn), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : to(null, "");
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = to(t, e));
  }
  I(Ae), O(Ae, t);
}
function nn() {
  I(Ae), I(Hn), I(Wn);
}
function ua(e) {
  Nt(Wn.current);
  var t = Nt(Ae.current),
    n = to(t, e.type);
  t !== n && (O(Hn, e), O(Ae, n));
}
function mi(e) {
  Hn.current === e && (I(Ae), I(Hn));
}
var $ = ht(0);
function Yr(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (
        n !== null &&
        ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")
      )
        return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
    } else if (t.child !== null) {
      (t.child.return = t), (t = t.child);
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    (t.sibling.return = t.return), (t = t.sibling);
  }
  return null;
}
var Ul = [];
function hi() {
  for (var e = 0; e < Ul.length; e++)
    Ul[e]._workInProgressVersionPrimary = null;
  Ul.length = 0;
}
var _r = Ze.ReactCurrentDispatcher,
  $l = Ze.ReactCurrentBatchConfig,
  zt = 0,
  A = null,
  Y = null,
  Z = null,
  Gr = !1,
  zn = !1,
  Qn = 0,
  Jd = 0;
function te() {
  throw Error(y(321));
}
function vi(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!De(e[n], t[n])) return !1;
  return !0;
}
function gi(e, t, n, r, l, o) {
  if (
    ((zt = o),
    (A = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (_r.current = e === null || e.memoizedState === null ? tf : nf),
    (e = n(r, l)),
    zn)
  ) {
    o = 0;
    do {
      if (((zn = !1), (Qn = 0), 25 <= o)) throw Error(y(301));
      (o += 1),
        (Z = Y = null),
        (t.updateQueue = null),
        (_r.current = rf),
        (e = n(r, l));
    } while (zn);
  }
  if (
    ((_r.current = Xr),
    (t = Y !== null && Y.next !== null),
    (zt = 0),
    (Z = Y = A = null),
    (Gr = !1),
    t)
  )
    throw Error(y(300));
  return e;
}
function yi() {
  var e = Qn !== 0;
  return (Qn = 0), e;
}
function Fe() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return Z === null ? (A.memoizedState = Z = e) : (Z = Z.next = e), Z;
}
function je() {
  if (Y === null) {
    var e = A.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = Y.next;
  var t = Z === null ? A.memoizedState : Z.next;
  if (t !== null) (Z = t), (Y = e);
  else {
    if (e === null) throw Error(y(310));
    (Y = e),
      (e = {
        memoizedState: Y.memoizedState,
        baseState: Y.baseState,
        baseQueue: Y.baseQueue,
        queue: Y.queue,
        next: null,
      }),
      Z === null ? (A.memoizedState = Z = e) : (Z = Z.next = e);
  }
  return Z;
}
function Kn(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function Al(e) {
  var t = je(),
    n = t.queue;
  if (n === null) throw Error(y(311));
  n.lastRenderedReducer = e;
  var r = Y,
    l = r.baseQueue,
    o = n.pending;
  if (o !== null) {
    if (l !== null) {
      var i = l.next;
      (l.next = o.next), (o.next = i);
    }
    (r.baseQueue = l = o), (n.pending = null);
  }
  if (l !== null) {
    (o = l.next), (r = r.baseState);
    var u = (i = null),
      s = null,
      c = o;
    do {
      var v = c.lane;
      if ((zt & v) === v)
        s !== null &&
          (s = s.next =
            {
              lane: 0,
              action: c.action,
              hasEagerState: c.hasEagerState,
              eagerState: c.eagerState,
              next: null,
            }),
          (r = c.hasEagerState ? c.eagerState : e(r, c.action));
      else {
        var h = {
          lane: v,
          action: c.action,
          hasEagerState: c.hasEagerState,
          eagerState: c.eagerState,
          next: null,
        };
        s === null ? ((u = s = h), (i = r)) : (s = s.next = h),
          (A.lanes |= v),
          (Pt |= v);
      }
      c = c.next;
    } while (c !== null && c !== o);
    s === null ? (i = r) : (s.next = u),
      De(r, t.memoizedState) || (ce = !0),
      (t.memoizedState = r),
      (t.baseState = i),
      (t.baseQueue = s),
      (n.lastRenderedState = r);
  }
  if (((e = n.interleaved), e !== null)) {
    l = e;
    do (o = l.lane), (A.lanes |= o), (Pt |= o), (l = l.next);
    while (l !== e);
  } else l === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function Vl(e) {
  var t = je(),
    n = t.queue;
  if (n === null) throw Error(y(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    l = n.pending,
    o = t.memoizedState;
  if (l !== null) {
    n.pending = null;
    var i = (l = l.next);
    do (o = e(o, i.action)), (i = i.next);
    while (i !== l);
    De(o, t.memoizedState) || (ce = !0),
      (t.memoizedState = o),
      t.baseQueue === null && (t.baseState = o),
      (n.lastRenderedState = o);
  }
  return [o, r];
}
function sa() {}
function aa(e, t) {
  var n = A,
    r = je(),
    l = t(),
    o = !De(r.memoizedState, l);
  if (
    (o && ((r.memoizedState = l), (ce = !0)),
    (r = r.queue),
    xi(fa.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || o || (Z !== null && Z.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      Yn(9, da.bind(null, n, r, l, t), void 0, null),
      J === null)
    )
      throw Error(y(349));
    zt & 30 || ca(n, t, l);
  }
  return l;
}
function ca(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = A.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (A.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function da(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), pa(t) && ma(e);
}
function fa(e, t, n) {
  return n(function () {
    pa(t) && ma(e);
  });
}
function pa(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !De(e, n);
  } catch {
    return !0;
  }
}
function ma(e) {
  var t = Ge(e, 1);
  t !== null && Oe(t, e, 1, -1);
}
function ku(e) {
  var t = Fe();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Kn,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = ef.bind(null, A, e)),
    [t.memoizedState, e]
  );
}
function Yn(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = A.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (A.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function ha() {
  return je().memoizedState;
}
function Cr(e, t, n, r) {
  var l = Fe();
  (A.flags |= e),
    (l.memoizedState = Yn(1 | t, n, void 0, r === void 0 ? null : r));
}
function sl(e, t, n, r) {
  var l = je();
  r = r === void 0 ? null : r;
  var o = void 0;
  if (Y !== null) {
    var i = Y.memoizedState;
    if (((o = i.destroy), r !== null && vi(r, i.deps))) {
      l.memoizedState = Yn(t, n, o, r);
      return;
    }
  }
  (A.flags |= e), (l.memoizedState = Yn(1 | t, n, o, r));
}
function wu(e, t) {
  return Cr(8390656, 8, e, t);
}
function xi(e, t) {
  return sl(2048, 8, e, t);
}
function va(e, t) {
  return sl(4, 2, e, t);
}
function ga(e, t) {
  return sl(4, 4, e, t);
}
function ya(e, t) {
  if (typeof t == "function")
    return (
      (e = e()),
      t(e),
      function () {
        t(null);
      }
    );
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null;
      }
    );
}
function xa(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), sl(4, 4, ya.bind(null, t, e), n)
  );
}
function ki() {}
function ka(e, t) {
  var n = je();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && vi(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function wa(e, t) {
  var n = je();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && vi(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function Sa(e, t, n) {
  return zt & 21
    ? (De(n, t) || ((n = js()), (A.lanes |= n), (Pt |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (ce = !0)), (e.memoizedState = n));
}
function qd(e, t) {
  var n = R;
  (R = n !== 0 && 4 > n ? n : 4), e(!0);
  var r = $l.transition;
  $l.transition = {};
  try {
    e(!1), t();
  } finally {
    (R = n), ($l.transition = r);
  }
}
function Na() {
  return je().memoizedState;
}
function bd(e, t, n) {
  var r = ct(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    Ea(e))
  )
    _a(t, n);
  else if (((n = oa(e, t, n, r)), n !== null)) {
    var l = ie();
    Oe(n, e, r, l), Ca(n, t, r);
  }
}
function ef(e, t, n) {
  var r = ct(e),
    l = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (Ea(e)) _a(t, l);
  else {
    var o = e.alternate;
    if (
      e.lanes === 0 &&
      (o === null || o.lanes === 0) &&
      ((o = t.lastRenderedReducer), o !== null)
    )
      try {
        var i = t.lastRenderedState,
          u = o(i, n);
        if (((l.hasEagerState = !0), (l.eagerState = u), De(u, i))) {
          var s = t.interleaved;
          s === null
            ? ((l.next = l), di(t))
            : ((l.next = s.next), (s.next = l)),
            (t.interleaved = l);
          return;
        }
      } catch {
      } finally {
      }
    (n = oa(e, t, l, r)),
      n !== null && ((l = ie()), Oe(n, e, r, l), Ca(n, t, r));
  }
}
function Ea(e) {
  var t = e.alternate;
  return e === A || (t !== null && t === A);
}
function _a(e, t) {
  zn = Gr = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t);
}
function Ca(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), Jo(e, n);
  }
}
var Xr = {
    readContext: Ce,
    useCallback: te,
    useContext: te,
    useEffect: te,
    useImperativeHandle: te,
    useInsertionEffect: te,
    useLayoutEffect: te,
    useMemo: te,
    useReducer: te,
    useRef: te,
    useState: te,
    useDebugValue: te,
    useDeferredValue: te,
    useTransition: te,
    useMutableSource: te,
    useSyncExternalStore: te,
    useId: te,
    unstable_isNewReconciler: !1,
  },
  tf = {
    readContext: Ce,
    useCallback: function (e, t) {
      return (Fe().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: Ce,
    useEffect: wu,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        Cr(4194308, 4, ya.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return Cr(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return Cr(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = Fe();
      return (
        (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, n) {
      var r = Fe();
      return (
        (t = n !== void 0 ? n(t) : t),
        (r.memoizedState = r.baseState = t),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t,
        }),
        (r.queue = e),
        (e = e.dispatch = bd.bind(null, A, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = Fe();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: ku,
    useDebugValue: ki,
    useDeferredValue: function (e) {
      return (Fe().memoizedState = e);
    },
    useTransition: function () {
      var e = ku(!1),
        t = e[0];
      return (e = qd.bind(null, e[1])), (Fe().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = A,
        l = Fe();
      if (U) {
        if (n === void 0) throw Error(y(407));
        n = n();
      } else {
        if (((n = t()), J === null)) throw Error(y(349));
        zt & 30 || ca(r, t, n);
      }
      l.memoizedState = n;
      var o = { value: n, getSnapshot: t };
      return (
        (l.queue = o),
        wu(fa.bind(null, r, o, e), [e]),
        (r.flags |= 2048),
        Yn(9, da.bind(null, r, o, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = Fe(),
        t = J.identifierPrefix;
      if (U) {
        var n = We,
          r = He;
        (n = (r & ~(1 << (32 - Re(r) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = Qn++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":");
      } else (n = Jd++), (t = ":" + t + "r" + n.toString(32) + ":");
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  nf = {
    readContext: Ce,
    useCallback: ka,
    useContext: Ce,
    useEffect: xi,
    useImperativeHandle: xa,
    useInsertionEffect: va,
    useLayoutEffect: ga,
    useMemo: wa,
    useReducer: Al,
    useRef: ha,
    useState: function () {
      return Al(Kn);
    },
    useDebugValue: ki,
    useDeferredValue: function (e) {
      var t = je();
      return Sa(t, Y.memoizedState, e);
    },
    useTransition: function () {
      var e = Al(Kn)[0],
        t = je().memoizedState;
      return [e, t];
    },
    useMutableSource: sa,
    useSyncExternalStore: aa,
    useId: Na,
    unstable_isNewReconciler: !1,
  },
  rf = {
    readContext: Ce,
    useCallback: ka,
    useContext: Ce,
    useEffect: xi,
    useImperativeHandle: xa,
    useInsertionEffect: va,
    useLayoutEffect: ga,
    useMemo: wa,
    useReducer: Vl,
    useRef: ha,
    useState: function () {
      return Vl(Kn);
    },
    useDebugValue: ki,
    useDeferredValue: function (e) {
      var t = je();
      return Y === null ? (t.memoizedState = e) : Sa(t, Y.memoizedState, e);
    },
    useTransition: function () {
      var e = Vl(Kn)[0],
        t = je().memoizedState;
      return [e, t];
    },
    useMutableSource: sa,
    useSyncExternalStore: aa,
    useId: Na,
    unstable_isNewReconciler: !1,
  };
function Le(e, t) {
  if (e && e.defaultProps) {
    (t = V({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function No(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : V({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var al = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? Mt(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = ie(),
      l = ct(e),
      o = Qe(r, l);
    (o.payload = t),
      n != null && (o.callback = n),
      (t = st(e, o, l)),
      t !== null && (Oe(t, e, l, r), Er(t, e, l));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = ie(),
      l = ct(e),
      o = Qe(r, l);
    (o.tag = 1),
      (o.payload = t),
      n != null && (o.callback = n),
      (t = st(e, o, l)),
      t !== null && (Oe(t, e, l, r), Er(t, e, l));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = ie(),
      r = ct(e),
      l = Qe(n, r);
    (l.tag = 2),
      t != null && (l.callback = t),
      (t = st(e, l, r)),
      t !== null && (Oe(t, e, r, n), Er(t, e, r));
  },
};
function Su(e, t, n, r, l, o, i) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(r, o, i)
      : t.prototype && t.prototype.isPureReactComponent
        ? !$n(n, r) || !$n(l, o)
        : !0
  );
}
function ja(e, t, n) {
  var r = !1,
    l = pt,
    o = t.contextType;
  return (
    typeof o == "object" && o !== null
      ? (o = Ce(o))
      : ((l = fe(t) ? Ct : le.current),
        (r = t.contextTypes),
        (o = (r = r != null) ? bt(e, l) : pt)),
    (t = new t(n, o)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = al),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = l),
      (e.__reactInternalMemoizedMaskedChildContext = o)),
    t
  );
}
function Nu(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && al.enqueueReplaceState(t, t.state, null);
}
function Eo(e, t, n, r) {
  var l = e.stateNode;
  (l.props = n), (l.state = e.memoizedState), (l.refs = {}), fi(e);
  var o = t.contextType;
  typeof o == "object" && o !== null
    ? (l.context = Ce(o))
    : ((o = fe(t) ? Ct : le.current), (l.context = bt(e, o))),
    (l.state = e.memoizedState),
    (o = t.getDerivedStateFromProps),
    typeof o == "function" && (No(e, t, o, n), (l.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof l.getSnapshotBeforeUpdate == "function" ||
      (typeof l.UNSAFE_componentWillMount != "function" &&
        typeof l.componentWillMount != "function") ||
      ((t = l.state),
      typeof l.componentWillMount == "function" && l.componentWillMount(),
      typeof l.UNSAFE_componentWillMount == "function" &&
        l.UNSAFE_componentWillMount(),
      t !== l.state && al.enqueueReplaceState(l, l.state, null),
      Kr(e, n, l, r),
      (l.state = e.memoizedState)),
    typeof l.componentDidMount == "function" && (e.flags |= 4194308);
}
function rn(e, t) {
  try {
    var n = "",
      r = t;
    do (n += Tc(r)), (r = r.return);
    while (r);
    var l = n;
  } catch (o) {
    l =
      `
Error generating stack: ` +
      o.message +
      `
` +
      o.stack;
  }
  return { value: e, source: t, stack: l, digest: null };
}
function Bl(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function _o(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var lf = typeof WeakMap == "function" ? WeakMap : Map;
function za(e, t, n) {
  (n = Qe(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      Jr || ((Jr = !0), (Do = r)), _o(e, t);
    }),
    n
  );
}
function Pa(e, t, n) {
  (n = Qe(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var l = t.value;
    (n.payload = function () {
      return r(l);
    }),
      (n.callback = function () {
        _o(e, t);
      });
  }
  var o = e.stateNode;
  return (
    o !== null &&
      typeof o.componentDidCatch == "function" &&
      (n.callback = function () {
        _o(e, t),
          typeof r != "function" &&
            (at === null ? (at = new Set([this])) : at.add(this));
        var i = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: i !== null ? i : "",
        });
      }),
    n
  );
}
function Eu(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new lf();
    var l = new Set();
    r.set(t, l);
  } else (l = r.get(t)), l === void 0 && ((l = new Set()), r.set(t, l));
  l.has(n) || (l.add(n), (e = xf.bind(null, e, t, n)), t.then(e, e));
}
function _u(e) {
  do {
    var t;
    if (
      ((t = e.tag === 13) &&
        ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
      t)
    )
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function Cu(e, t, n, r, l) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = l), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((t = Qe(-1, 1)), (t.tag = 2), st(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var of = Ze.ReactCurrentOwner,
  ce = !1;
function oe(e, t, n, r) {
  t.child = e === null ? la(t, null, n, r) : tn(t, e.child, n, r);
}
function ju(e, t, n, r, l) {
  n = n.render;
  var o = t.ref;
  return (
    Zt(t, l),
    (r = gi(e, t, n, r, o, l)),
    (n = yi()),
    e !== null && !ce
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~l),
        Xe(e, t, l))
      : (U && n && oi(t), (t.flags |= 1), oe(e, t, r, l), t.child)
  );
}
function zu(e, t, n, r, l) {
  if (e === null) {
    var o = n.type;
    return typeof o == "function" &&
      !zi(o) &&
      o.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = o), La(e, t, o, r, l))
      : ((e = Lr(n.type, null, r, t, t.mode, l)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((o = e.child), !(e.lanes & l))) {
    var i = o.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : $n), n(i, r) && e.ref === t.ref)
    )
      return Xe(e, t, l);
  }
  return (
    (t.flags |= 1),
    (e = dt(o, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function La(e, t, n, r, l) {
  if (e !== null) {
    var o = e.memoizedProps;
    if ($n(o, r) && e.ref === t.ref)
      if (((ce = !1), (t.pendingProps = r = o), (e.lanes & l) !== 0))
        e.flags & 131072 && (ce = !0);
      else return (t.lanes = e.lanes), Xe(e, t, l);
  }
  return Co(e, t, n, r, l);
}
function Ta(e, t, n) {
  var r = t.pendingProps,
    l = r.children,
    o = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        O(Qt, me),
        (me |= n);
    else {
      if (!(n & 1073741824))
        return (
          (e = o !== null ? o.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          O(Qt, me),
          (me |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = o !== null ? o.baseLanes : n),
        O(Qt, me),
        (me |= r);
    }
  else
    o !== null ? ((r = o.baseLanes | n), (t.memoizedState = null)) : (r = n),
      O(Qt, me),
      (me |= r);
  return oe(e, t, l, n), t.child;
}
function Ma(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function Co(e, t, n, r, l) {
  var o = fe(n) ? Ct : le.current;
  return (
    (o = bt(t, o)),
    Zt(t, l),
    (n = gi(e, t, n, r, o, l)),
    (r = yi()),
    e !== null && !ce
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~l),
        Xe(e, t, l))
      : (U && r && oi(t), (t.flags |= 1), oe(e, t, n, l), t.child)
  );
}
function Pu(e, t, n, r, l) {
  if (fe(n)) {
    var o = !0;
    Vr(t);
  } else o = !1;
  if ((Zt(t, l), t.stateNode === null))
    jr(e, t), ja(t, n, r), Eo(t, n, r, l), (r = !0);
  else if (e === null) {
    var i = t.stateNode,
      u = t.memoizedProps;
    i.props = u;
    var s = i.context,
      c = n.contextType;
    typeof c == "object" && c !== null
      ? (c = Ce(c))
      : ((c = fe(n) ? Ct : le.current), (c = bt(t, c)));
    var v = n.getDerivedStateFromProps,
      h =
        typeof v == "function" ||
        typeof i.getSnapshotBeforeUpdate == "function";
    h ||
      (typeof i.UNSAFE_componentWillReceiveProps != "function" &&
        typeof i.componentWillReceiveProps != "function") ||
      ((u !== r || s !== c) && Nu(t, i, r, c)),
      (be = !1);
    var m = t.memoizedState;
    (i.state = m),
      Kr(t, r, i, l),
      (s = t.memoizedState),
      u !== r || m !== s || de.current || be
        ? (typeof v == "function" && (No(t, n, v, r), (s = t.memoizedState)),
          (u = be || Su(t, n, u, r, m, s, c))
            ? (h ||
                (typeof i.UNSAFE_componentWillMount != "function" &&
                  typeof i.componentWillMount != "function") ||
                (typeof i.componentWillMount == "function" &&
                  i.componentWillMount(),
                typeof i.UNSAFE_componentWillMount == "function" &&
                  i.UNSAFE_componentWillMount()),
              typeof i.componentDidMount == "function" && (t.flags |= 4194308))
            : (typeof i.componentDidMount == "function" && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = s)),
          (i.props = r),
          (i.state = s),
          (i.context = c),
          (r = u))
        : (typeof i.componentDidMount == "function" && (t.flags |= 4194308),
          (r = !1));
  } else {
    (i = t.stateNode),
      ia(e, t),
      (u = t.memoizedProps),
      (c = t.type === t.elementType ? u : Le(t.type, u)),
      (i.props = c),
      (h = t.pendingProps),
      (m = i.context),
      (s = n.contextType),
      typeof s == "object" && s !== null
        ? (s = Ce(s))
        : ((s = fe(n) ? Ct : le.current), (s = bt(t, s)));
    var x = n.getDerivedStateFromProps;
    (v =
      typeof x == "function" ||
      typeof i.getSnapshotBeforeUpdate == "function") ||
      (typeof i.UNSAFE_componentWillReceiveProps != "function" &&
        typeof i.componentWillReceiveProps != "function") ||
      ((u !== h || m !== s) && Nu(t, i, r, s)),
      (be = !1),
      (m = t.memoizedState),
      (i.state = m),
      Kr(t, r, i, l);
    var k = t.memoizedState;
    u !== h || m !== k || de.current || be
      ? (typeof x == "function" && (No(t, n, x, r), (k = t.memoizedState)),
        (c = be || Su(t, n, c, r, m, k, s) || !1)
          ? (v ||
              (typeof i.UNSAFE_componentWillUpdate != "function" &&
                typeof i.componentWillUpdate != "function") ||
              (typeof i.componentWillUpdate == "function" &&
                i.componentWillUpdate(r, k, s),
              typeof i.UNSAFE_componentWillUpdate == "function" &&
                i.UNSAFE_componentWillUpdate(r, k, s)),
            typeof i.componentDidUpdate == "function" && (t.flags |= 4),
            typeof i.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof i.componentDidUpdate != "function" ||
              (u === e.memoizedProps && m === e.memoizedState) ||
              (t.flags |= 4),
            typeof i.getSnapshotBeforeUpdate != "function" ||
              (u === e.memoizedProps && m === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = k)),
        (i.props = r),
        (i.state = k),
        (i.context = s),
        (r = c))
      : (typeof i.componentDidUpdate != "function" ||
          (u === e.memoizedProps && m === e.memoizedState) ||
          (t.flags |= 4),
        typeof i.getSnapshotBeforeUpdate != "function" ||
          (u === e.memoizedProps && m === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return jo(e, t, n, r, o, l);
}
function jo(e, t, n, r, l, o) {
  Ma(e, t);
  var i = (t.flags & 128) !== 0;
  if (!r && !i) return l && mu(t, n, !1), Xe(e, t, o);
  (r = t.stateNode), (of.current = t);
  var u =
    i && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && i
      ? ((t.child = tn(t, e.child, null, o)), (t.child = tn(t, null, u, o)))
      : oe(e, t, u, o),
    (t.memoizedState = r.state),
    l && mu(t, n, !0),
    t.child
  );
}
function Ra(e) {
  var t = e.stateNode;
  t.pendingContext
    ? pu(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && pu(e, t.context, !1),
    pi(e, t.containerInfo);
}
function Lu(e, t, n, r, l) {
  return en(), ui(l), (t.flags |= 256), oe(e, t, n, r), t.child;
}
var zo = { dehydrated: null, treeContext: null, retryLane: 0 };
function Po(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function Oa(e, t, n) {
  var r = t.pendingProps,
    l = $.current,
    o = !1,
    i = (t.flags & 128) !== 0,
    u;
  if (
    ((u = i) ||
      (u = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0),
    u
      ? ((o = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (l |= 1),
    O($, l & 1),
    e === null)
  )
    return (
      wo(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1
            ? e.data === "$!"
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((i = r.children),
          (e = r.fallback),
          o
            ? ((r = t.mode),
              (o = t.child),
              (i = { mode: "hidden", children: i }),
              !(r & 1) && o !== null
                ? ((o.childLanes = 0), (o.pendingProps = i))
                : (o = fl(i, r, 0, null)),
              (e = _t(e, r, n, null)),
              (o.return = t),
              (e.return = t),
              (o.sibling = e),
              (t.child = o),
              (t.child.memoizedState = Po(n)),
              (t.memoizedState = zo),
              e)
            : wi(t, i))
    );
  if (((l = e.memoizedState), l !== null && ((u = l.dehydrated), u !== null)))
    return uf(e, t, i, r, u, l, n);
  if (o) {
    (o = r.fallback), (i = t.mode), (l = e.child), (u = l.sibling);
    var s = { mode: "hidden", children: r.children };
    return (
      !(i & 1) && t.child !== l
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = s),
          (t.deletions = null))
        : ((r = dt(l, s)), (r.subtreeFlags = l.subtreeFlags & 14680064)),
      u !== null ? (o = dt(u, o)) : ((o = _t(o, i, n, null)), (o.flags |= 2)),
      (o.return = t),
      (r.return = t),
      (r.sibling = o),
      (t.child = r),
      (r = o),
      (o = t.child),
      (i = e.child.memoizedState),
      (i =
        i === null
          ? Po(n)
          : {
              baseLanes: i.baseLanes | n,
              cachePool: null,
              transitions: i.transitions,
            }),
      (o.memoizedState = i),
      (o.childLanes = e.childLanes & ~n),
      (t.memoizedState = zo),
      r
    );
  }
  return (
    (o = e.child),
    (e = o.sibling),
    (r = dt(o, { mode: "visible", children: r.children })),
    !(t.mode & 1) && (r.lanes = n),
    (r.return = t),
    (r.sibling = null),
    e !== null &&
      ((n = t.deletions),
      n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
    (t.child = r),
    (t.memoizedState = null),
    r
  );
}
function wi(e, t) {
  return (
    (t = fl({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function hr(e, t, n, r) {
  return (
    r !== null && ui(r),
    tn(t, e.child, null, n),
    (e = wi(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function uf(e, t, n, r, l, o, i) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = Bl(Error(y(422)))), hr(e, t, i, r))
      : t.memoizedState !== null
        ? ((t.child = e.child), (t.flags |= 128), null)
        : ((o = r.fallback),
          (l = t.mode),
          (r = fl({ mode: "visible", children: r.children }, l, 0, null)),
          (o = _t(o, l, i, null)),
          (o.flags |= 2),
          (r.return = t),
          (o.return = t),
          (r.sibling = o),
          (t.child = r),
          t.mode & 1 && tn(t, e.child, null, i),
          (t.child.memoizedState = Po(i)),
          (t.memoizedState = zo),
          o);
  if (!(t.mode & 1)) return hr(e, t, i, null);
  if (l.data === "$!") {
    if (((r = l.nextSibling && l.nextSibling.dataset), r)) var u = r.dgst;
    return (r = u), (o = Error(y(419))), (r = Bl(o, r, void 0)), hr(e, t, i, r);
  }
  if (((u = (i & e.childLanes) !== 0), ce || u)) {
    if (((r = J), r !== null)) {
      switch (i & -i) {
        case 4:
          l = 2;
          break;
        case 16:
          l = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          l = 32;
          break;
        case 536870912:
          l = 268435456;
          break;
        default:
          l = 0;
      }
      (l = l & (r.suspendedLanes | i) ? 0 : l),
        l !== 0 &&
          l !== o.retryLane &&
          ((o.retryLane = l), Ge(e, l), Oe(r, e, l, -1));
    }
    return ji(), (r = Bl(Error(y(421)))), hr(e, t, i, r);
  }
  return l.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = kf.bind(null, e)),
      (l._reactRetry = t),
      null)
    : ((e = o.treeContext),
      (he = ut(l.nextSibling)),
      (ve = t),
      (U = !0),
      (Me = null),
      e !== null &&
        ((we[Se++] = He),
        (we[Se++] = We),
        (we[Se++] = jt),
        (He = e.id),
        (We = e.overflow),
        (jt = t)),
      (t = wi(t, r.children)),
      (t.flags |= 4096),
      t);
}
function Tu(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), So(e.return, t, n);
}
function Hl(e, t, n, r, l) {
  var o = e.memoizedState;
  o === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: l,
      })
    : ((o.isBackwards = t),
      (o.rendering = null),
      (o.renderingStartTime = 0),
      (o.last = r),
      (o.tail = n),
      (o.tailMode = l));
}
function Da(e, t, n) {
  var r = t.pendingProps,
    l = r.revealOrder,
    o = r.tail;
  if ((oe(e, t, r.children, n), (r = $.current), r & 2))
    (r = (r & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && Tu(e, n, t);
        else if (e.tag === 19) Tu(e, n, t);
        else if (e.child !== null) {
          (e.child.return = e), (e = e.child);
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    r &= 1;
  }
  if ((O($, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (l) {
      case "forwards":
        for (n = t.child, l = null; n !== null; )
          (e = n.alternate),
            e !== null && Yr(e) === null && (l = n),
            (n = n.sibling);
        (n = l),
          n === null
            ? ((l = t.child), (t.child = null))
            : ((l = n.sibling), (n.sibling = null)),
          Hl(t, !1, l, n, o);
        break;
      case "backwards":
        for (n = null, l = t.child, t.child = null; l !== null; ) {
          if (((e = l.alternate), e !== null && Yr(e) === null)) {
            t.child = l;
            break;
          }
          (e = l.sibling), (l.sibling = n), (n = l), (l = e);
        }
        Hl(t, !0, n, null, o);
        break;
      case "together":
        Hl(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function jr(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function Xe(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (Pt |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(y(153));
  if (t.child !== null) {
    for (
      e = t.child, n = dt(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = dt(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function sf(e, t, n) {
  switch (t.tag) {
    case 3:
      Ra(t), en();
      break;
    case 5:
      ua(t);
      break;
    case 1:
      fe(t.type) && Vr(t);
      break;
    case 4:
      pi(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        l = t.memoizedProps.value;
      O(Wr, r._currentValue), (r._currentValue = l);
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (O($, $.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
            ? Oa(e, t, n)
            : (O($, $.current & 1),
              (e = Xe(e, t, n)),
              e !== null ? e.sibling : null);
      O($, $.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return Da(e, t, n);
        t.flags |= 128;
      }
      if (
        ((l = t.memoizedState),
        l !== null &&
          ((l.rendering = null), (l.tail = null), (l.lastEffect = null)),
        O($, $.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), Ta(e, t, n);
  }
  return Xe(e, t, n);
}
var Ia, Lo, Fa, Ua;
Ia = function (e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      (n.child.return = n), (n = n.child);
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    (n.sibling.return = n.return), (n = n.sibling);
  }
};
Lo = function () {};
Fa = function (e, t, n, r) {
  var l = e.memoizedProps;
  if (l !== r) {
    (e = t.stateNode), Nt(Ae.current);
    var o = null;
    switch (n) {
      case "input":
        (l = Jl(e, l)), (r = Jl(e, r)), (o = []);
        break;
      case "select":
        (l = V({}, l, { value: void 0 })),
          (r = V({}, r, { value: void 0 })),
          (o = []);
        break;
      case "textarea":
        (l = eo(e, l)), (r = eo(e, r)), (o = []);
        break;
      default:
        typeof l.onClick != "function" &&
          typeof r.onClick == "function" &&
          (e.onclick = $r);
    }
    no(n, r);
    var i;
    n = null;
    for (c in l)
      if (!r.hasOwnProperty(c) && l.hasOwnProperty(c) && l[c] != null)
        if (c === "style") {
          var u = l[c];
          for (i in u) u.hasOwnProperty(i) && (n || (n = {}), (n[i] = ""));
        } else
          c !== "dangerouslySetInnerHTML" &&
            c !== "children" &&
            c !== "suppressContentEditableWarning" &&
            c !== "suppressHydrationWarning" &&
            c !== "autoFocus" &&
            (Mn.hasOwnProperty(c)
              ? o || (o = [])
              : (o = o || []).push(c, null));
    for (c in r) {
      var s = r[c];
      if (
        ((u = l != null ? l[c] : void 0),
        r.hasOwnProperty(c) && s !== u && (s != null || u != null))
      )
        if (c === "style")
          if (u) {
            for (i in u)
              !u.hasOwnProperty(i) ||
                (s && s.hasOwnProperty(i)) ||
                (n || (n = {}), (n[i] = ""));
            for (i in s)
              s.hasOwnProperty(i) &&
                u[i] !== s[i] &&
                (n || (n = {}), (n[i] = s[i]));
          } else n || (o || (o = []), o.push(c, n)), (n = s);
        else
          c === "dangerouslySetInnerHTML"
            ? ((s = s ? s.__html : void 0),
              (u = u ? u.__html : void 0),
              s != null && u !== s && (o = o || []).push(c, s))
            : c === "children"
              ? (typeof s != "string" && typeof s != "number") ||
                (o = o || []).push(c, "" + s)
              : c !== "suppressContentEditableWarning" &&
                c !== "suppressHydrationWarning" &&
                (Mn.hasOwnProperty(c)
                  ? (s != null && c === "onScroll" && D("scroll", e),
                    o || u === s || (o = []))
                  : (o = o || []).push(c, s));
    }
    n && (o = o || []).push("style", n);
    var c = o;
    (t.updateQueue = c) && (t.flags |= 4);
  }
};
Ua = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function gn(e, t) {
  if (!U)
    switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var n = null; t !== null; )
          t.alternate !== null && (n = t), (t = t.sibling);
        n === null ? (e.tail = null) : (n.sibling = null);
        break;
      case "collapsed":
        n = e.tail;
        for (var r = null; n !== null; )
          n.alternate !== null && (r = n), (n = n.sibling);
        r === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (r.sibling = null);
    }
}
function ne(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0;
  if (t)
    for (var l = e.child; l !== null; )
      (n |= l.lanes | l.childLanes),
        (r |= l.subtreeFlags & 14680064),
        (r |= l.flags & 14680064),
        (l.return = e),
        (l = l.sibling);
  else
    for (l = e.child; l !== null; )
      (n |= l.lanes | l.childLanes),
        (r |= l.subtreeFlags),
        (r |= l.flags),
        (l.return = e),
        (l = l.sibling);
  return (e.subtreeFlags |= r), (e.childLanes = n), t;
}
function af(e, t, n) {
  var r = t.pendingProps;
  switch ((ii(t), t.tag)) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return ne(t), null;
    case 1:
      return fe(t.type) && Ar(), ne(t), null;
    case 3:
      return (
        (r = t.stateNode),
        nn(),
        I(de),
        I(le),
        hi(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (pr(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), Me !== null && (Uo(Me), (Me = null)))),
        Lo(e, t),
        ne(t),
        null
      );
    case 5:
      mi(t);
      var l = Nt(Wn.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        Fa(e, t, n, r, l),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(y(166));
          return ne(t), null;
        }
        if (((e = Nt(Ae.current)), pr(t))) {
          (r = t.stateNode), (n = t.type);
          var o = t.memoizedProps;
          switch (((r[Ue] = t), (r[Bn] = o), (e = (t.mode & 1) !== 0), n)) {
            case "dialog":
              D("cancel", r), D("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              D("load", r);
              break;
            case "video":
            case "audio":
              for (l = 0; l < Sn.length; l++) D(Sn[l], r);
              break;
            case "source":
              D("error", r);
              break;
            case "img":
            case "image":
            case "link":
              D("error", r), D("load", r);
              break;
            case "details":
              D("toggle", r);
              break;
            case "input":
              Ai(r, o), D("invalid", r);
              break;
            case "select":
              (r._wrapperState = { wasMultiple: !!o.multiple }),
                D("invalid", r);
              break;
            case "textarea":
              Bi(r, o), D("invalid", r);
          }
          no(n, o), (l = null);
          for (var i in o)
            if (o.hasOwnProperty(i)) {
              var u = o[i];
              i === "children"
                ? typeof u == "string"
                  ? r.textContent !== u &&
                    (o.suppressHydrationWarning !== !0 &&
                      fr(r.textContent, u, e),
                    (l = ["children", u]))
                  : typeof u == "number" &&
                    r.textContent !== "" + u &&
                    (o.suppressHydrationWarning !== !0 &&
                      fr(r.textContent, u, e),
                    (l = ["children", "" + u]))
                : Mn.hasOwnProperty(i) &&
                  u != null &&
                  i === "onScroll" &&
                  D("scroll", r);
            }
          switch (n) {
            case "input":
              lr(r), Vi(r, o, !0);
              break;
            case "textarea":
              lr(r), Hi(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof o.onClick == "function" && (r.onclick = $r);
          }
          (r = l), (t.updateQueue = r), r !== null && (t.flags |= 4);
        } else {
          (i = l.nodeType === 9 ? l : l.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = fs(n)),
            e === "http://www.w3.org/1999/xhtml"
              ? n === "script"
                ? ((e = i.createElement("div")),
                  (e.innerHTML = "<script><\/script>"),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == "string"
                  ? (e = i.createElement(n, { is: r.is }))
                  : ((e = i.createElement(n)),
                    n === "select" &&
                      ((i = e),
                      r.multiple
                        ? (i.multiple = !0)
                        : r.size && (i.size = r.size)))
              : (e = i.createElementNS(e, n)),
            (e[Ue] = t),
            (e[Bn] = r),
            Ia(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((i = ro(n, r)), n)) {
              case "dialog":
                D("cancel", e), D("close", e), (l = r);
                break;
              case "iframe":
              case "object":
              case "embed":
                D("load", e), (l = r);
                break;
              case "video":
              case "audio":
                for (l = 0; l < Sn.length; l++) D(Sn[l], e);
                l = r;
                break;
              case "source":
                D("error", e), (l = r);
                break;
              case "img":
              case "image":
              case "link":
                D("error", e), D("load", e), (l = r);
                break;
              case "details":
                D("toggle", e), (l = r);
                break;
              case "input":
                Ai(e, r), (l = Jl(e, r)), D("invalid", e);
                break;
              case "option":
                l = r;
                break;
              case "select":
                (e._wrapperState = { wasMultiple: !!r.multiple }),
                  (l = V({}, r, { value: void 0 })),
                  D("invalid", e);
                break;
              case "textarea":
                Bi(e, r), (l = eo(e, r)), D("invalid", e);
                break;
              default:
                l = r;
            }
            no(n, l), (u = l);
            for (o in u)
              if (u.hasOwnProperty(o)) {
                var s = u[o];
                o === "style"
                  ? hs(e, s)
                  : o === "dangerouslySetInnerHTML"
                    ? ((s = s ? s.__html : void 0), s != null && ps(e, s))
                    : o === "children"
                      ? typeof s == "string"
                        ? (n !== "textarea" || s !== "") && Rn(e, s)
                        : typeof s == "number" && Rn(e, "" + s)
                      : o !== "suppressContentEditableWarning" &&
                        o !== "suppressHydrationWarning" &&
                        o !== "autoFocus" &&
                        (Mn.hasOwnProperty(o)
                          ? s != null && o === "onScroll" && D("scroll", e)
                          : s != null && Qo(e, o, s, i));
              }
            switch (n) {
              case "input":
                lr(e), Vi(e, r, !1);
                break;
              case "textarea":
                lr(e), Hi(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + ft(r.value));
                break;
              case "select":
                (e.multiple = !!r.multiple),
                  (o = r.value),
                  o != null
                    ? Kt(e, !!r.multiple, o, !1)
                    : r.defaultValue != null &&
                      Kt(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof l.onClick == "function" && (e.onclick = $r);
            }
            switch (n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                r = !!r.autoFocus;
                break e;
              case "img":
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (t.flags |= 4);
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
      }
      return ne(t), null;
    case 6:
      if (e && t.stateNode != null) Ua(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(y(166));
        if (((n = Nt(Wn.current)), Nt(Ae.current), pr(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[Ue] = t),
            (o = r.nodeValue !== n) && ((e = ve), e !== null))
          )
            switch (e.tag) {
              case 3:
                fr(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  fr(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          o && (t.flags |= 4);
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[Ue] = t),
            (t.stateNode = r);
      }
      return ne(t), null;
    case 13:
      if (
        (I($),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (U && he !== null && t.mode & 1 && !(t.flags & 128))
          na(), en(), (t.flags |= 98560), (o = !1);
        else if (((o = pr(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!o) throw Error(y(318));
            if (
              ((o = t.memoizedState),
              (o = o !== null ? o.dehydrated : null),
              !o)
            )
              throw Error(y(317));
            o[Ue] = t;
          } else
            en(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          ne(t), (o = !1);
        } else Me !== null && (Uo(Me), (Me = null)), (o = !0);
        if (!o) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || $.current & 1 ? G === 0 && (G = 3) : ji())),
          t.updateQueue !== null && (t.flags |= 4),
          ne(t),
          null);
    case 4:
      return (
        nn(), Lo(e, t), e === null && An(t.stateNode.containerInfo), ne(t), null
      );
    case 10:
      return ci(t.type._context), ne(t), null;
    case 17:
      return fe(t.type) && Ar(), ne(t), null;
    case 19:
      if ((I($), (o = t.memoizedState), o === null)) return ne(t), null;
      if (((r = (t.flags & 128) !== 0), (i = o.rendering), i === null))
        if (r) gn(o, !1);
        else {
          if (G !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((i = Yr(e)), i !== null)) {
                for (
                  t.flags |= 128,
                    gn(o, !1),
                    r = i.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;

                )
                  (o = n),
                    (e = r),
                    (o.flags &= 14680066),
                    (i = o.alternate),
                    i === null
                      ? ((o.childLanes = 0),
                        (o.lanes = e),
                        (o.child = null),
                        (o.subtreeFlags = 0),
                        (o.memoizedProps = null),
                        (o.memoizedState = null),
                        (o.updateQueue = null),
                        (o.dependencies = null),
                        (o.stateNode = null))
                      : ((o.childLanes = i.childLanes),
                        (o.lanes = i.lanes),
                        (o.child = i.child),
                        (o.subtreeFlags = 0),
                        (o.deletions = null),
                        (o.memoizedProps = i.memoizedProps),
                        (o.memoizedState = i.memoizedState),
                        (o.updateQueue = i.updateQueue),
                        (o.type = i.type),
                        (e = i.dependencies),
                        (o.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling);
                return O($, ($.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          o.tail !== null &&
            Q() > ln &&
            ((t.flags |= 128), (r = !0), gn(o, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = Yr(i)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              gn(o, !0),
              o.tail === null && o.tailMode === "hidden" && !i.alternate && !U)
            )
              return ne(t), null;
          } else
            2 * Q() - o.renderingStartTime > ln &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), gn(o, !1), (t.lanes = 4194304));
        o.isBackwards
          ? ((i.sibling = t.child), (t.child = i))
          : ((n = o.last),
            n !== null ? (n.sibling = i) : (t.child = i),
            (o.last = i));
      }
      return o.tail !== null
        ? ((t = o.tail),
          (o.rendering = t),
          (o.tail = t.sibling),
          (o.renderingStartTime = Q()),
          (t.sibling = null),
          (n = $.current),
          O($, r ? (n & 1) | 2 : n & 1),
          t)
        : (ne(t), null);
    case 22:
    case 23:
      return (
        Ci(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? me & 1073741824 && (ne(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : ne(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(y(156, t.tag));
}
function cf(e, t) {
  switch ((ii(t), t.tag)) {
    case 1:
      return (
        fe(t.type) && Ar(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        nn(),
        I(de),
        I(le),
        hi(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return mi(t), null;
    case 13:
      if ((I($), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
        if (t.alternate === null) throw Error(y(340));
        en();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return I($), null;
    case 4:
      return nn(), null;
    case 10:
      return ci(t.type._context), null;
    case 22:
    case 23:
      return Ci(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var vr = !1,
  re = !1,
  df = typeof WeakSet == "function" ? WeakSet : Set,
  S = null;
function Wt(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        B(e, t, r);
      }
    else n.current = null;
}
function To(e, t, n) {
  try {
    n();
  } catch (r) {
    B(e, t, r);
  }
}
var Mu = !1;
function ff(e, t) {
  if (((mo = Ir), (e = Hs()), li(e))) {
    if ("selectionStart" in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var l = r.anchorOffset,
            o = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, o.nodeType;
          } catch {
            n = null;
            break e;
          }
          var i = 0,
            u = -1,
            s = -1,
            c = 0,
            v = 0,
            h = e,
            m = null;
          t: for (;;) {
            for (
              var x;
              h !== n || (l !== 0 && h.nodeType !== 3) || (u = i + l),
                h !== o || (r !== 0 && h.nodeType !== 3) || (s = i + r),
                h.nodeType === 3 && (i += h.nodeValue.length),
                (x = h.firstChild) !== null;

            )
              (m = h), (h = x);
            for (;;) {
              if (h === e) break t;
              if (
                (m === n && ++c === l && (u = i),
                m === o && ++v === r && (s = i),
                (x = h.nextSibling) !== null)
              )
                break;
              (h = m), (m = h.parentNode);
            }
            h = x;
          }
          n = u === -1 || s === -1 ? null : { start: u, end: s };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (ho = { focusedElem: e, selectionRange: n }, Ir = !1, S = t; S !== null; )
    if (((t = S), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (S = e);
    else
      for (; S !== null; ) {
        t = S;
        try {
          var k = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (k !== null) {
                  var w = k.memoizedProps,
                    F = k.memoizedState,
                    d = t.stateNode,
                    a = d.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? w : Le(t.type, w),
                      F,
                    );
                  d.__reactInternalSnapshotBeforeUpdate = a;
                }
                break;
              case 3:
                var p = t.stateNode.containerInfo;
                p.nodeType === 1
                  ? (p.textContent = "")
                  : p.nodeType === 9 &&
                    p.documentElement &&
                    p.removeChild(p.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(y(163));
            }
        } catch (g) {
          B(t, t.return, g);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (S = e);
          break;
        }
        S = t.return;
      }
  return (k = Mu), (Mu = !1), k;
}
function Pn(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var l = (r = r.next);
    do {
      if ((l.tag & e) === e) {
        var o = l.destroy;
        (l.destroy = void 0), o !== void 0 && To(t, n, o);
      }
      l = l.next;
    } while (l !== r);
  }
}
function cl(e, t) {
  if (
    ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
  ) {
    var n = (t = t.next);
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function Mo(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n;
    }
    typeof t == "function" ? t(e) : (t.current = e);
  }
}
function $a(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), $a(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[Ue], delete t[Bn], delete t[yo], delete t[Yd], delete t[Gd])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function Aa(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function Ru(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || Aa(e.return)) return null;
      e = e.return;
    }
    for (
      e.sibling.return = e.return, e = e.sibling;
      e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

    ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      (e.child.return = e), (e = e.child);
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function Ro(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8
            ? ((t = n.parentNode), t.insertBefore(e, n))
            : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = $r));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Ro(e, t, n), e = e.sibling; e !== null; ) Ro(e, t, n), (e = e.sibling);
}
function Oo(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Oo(e, t, n), e = e.sibling; e !== null; ) Oo(e, t, n), (e = e.sibling);
}
var q = null,
  Te = !1;
function Je(e, t, n) {
  for (n = n.child; n !== null; ) Va(e, t, n), (n = n.sibling);
}
function Va(e, t, n) {
  if ($e && typeof $e.onCommitFiberUnmount == "function")
    try {
      $e.onCommitFiberUnmount(nl, n);
    } catch {}
  switch (n.tag) {
    case 5:
      re || Wt(n, t);
    case 6:
      var r = q,
        l = Te;
      (q = null),
        Je(e, t, n),
        (q = r),
        (Te = l),
        q !== null &&
          (Te
            ? ((e = q),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : q.removeChild(n.stateNode));
      break;
    case 18:
      q !== null &&
        (Te
          ? ((e = q),
            (n = n.stateNode),
            e.nodeType === 8
              ? Il(e.parentNode, n)
              : e.nodeType === 1 && Il(e, n),
            Fn(e))
          : Il(q, n.stateNode));
      break;
    case 4:
      (r = q),
        (l = Te),
        (q = n.stateNode.containerInfo),
        (Te = !0),
        Je(e, t, n),
        (q = r),
        (Te = l);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !re &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        l = r = r.next;
        do {
          var o = l,
            i = o.destroy;
          (o = o.tag),
            i !== void 0 && (o & 2 || o & 4) && To(n, t, i),
            (l = l.next);
        } while (l !== r);
      }
      Je(e, t, n);
      break;
    case 1:
      if (
        !re &&
        (Wt(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == "function")
      )
        try {
          (r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount();
        } catch (u) {
          B(n, t, u);
        }
      Je(e, t, n);
      break;
    case 21:
      Je(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((re = (r = re) || n.memoizedState !== null), Je(e, t, n), (re = r))
        : Je(e, t, n);
      break;
    default:
      Je(e, t, n);
  }
}
function Ou(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new df()),
      t.forEach(function (r) {
        var l = wf.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(l, l));
      });
  }
}
function Pe(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var l = n[r];
      try {
        var o = e,
          i = t,
          u = i;
        e: for (; u !== null; ) {
          switch (u.tag) {
            case 5:
              (q = u.stateNode), (Te = !1);
              break e;
            case 3:
              (q = u.stateNode.containerInfo), (Te = !0);
              break e;
            case 4:
              (q = u.stateNode.containerInfo), (Te = !0);
              break e;
          }
          u = u.return;
        }
        if (q === null) throw Error(y(160));
        Va(o, i, l), (q = null), (Te = !1);
        var s = l.alternate;
        s !== null && (s.return = null), (l.return = null);
      } catch (c) {
        B(l, t, c);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) Ba(t, e), (t = t.sibling);
}
function Ba(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((Pe(t, e), Ie(e), r & 4)) {
        try {
          Pn(3, e, e.return), cl(3, e);
        } catch (w) {
          B(e, e.return, w);
        }
        try {
          Pn(5, e, e.return);
        } catch (w) {
          B(e, e.return, w);
        }
      }
      break;
    case 1:
      Pe(t, e), Ie(e), r & 512 && n !== null && Wt(n, n.return);
      break;
    case 5:
      if (
        (Pe(t, e),
        Ie(e),
        r & 512 && n !== null && Wt(n, n.return),
        e.flags & 32)
      ) {
        var l = e.stateNode;
        try {
          Rn(l, "");
        } catch (w) {
          B(e, e.return, w);
        }
      }
      if (r & 4 && ((l = e.stateNode), l != null)) {
        var o = e.memoizedProps,
          i = n !== null ? n.memoizedProps : o,
          u = e.type,
          s = e.updateQueue;
        if (((e.updateQueue = null), s !== null))
          try {
            u === "input" && o.type === "radio" && o.name != null && cs(l, o),
              ro(u, i);
            var c = ro(u, o);
            for (i = 0; i < s.length; i += 2) {
              var v = s[i],
                h = s[i + 1];
              v === "style"
                ? hs(l, h)
                : v === "dangerouslySetInnerHTML"
                  ? ps(l, h)
                  : v === "children"
                    ? Rn(l, h)
                    : Qo(l, v, h, c);
            }
            switch (u) {
              case "input":
                ql(l, o);
                break;
              case "textarea":
                ds(l, o);
                break;
              case "select":
                var m = l._wrapperState.wasMultiple;
                l._wrapperState.wasMultiple = !!o.multiple;
                var x = o.value;
                x != null
                  ? Kt(l, !!o.multiple, x, !1)
                  : m !== !!o.multiple &&
                    (o.defaultValue != null
                      ? Kt(l, !!o.multiple, o.defaultValue, !0)
                      : Kt(l, !!o.multiple, o.multiple ? [] : "", !1));
            }
            l[Bn] = o;
          } catch (w) {
            B(e, e.return, w);
          }
      }
      break;
    case 6:
      if ((Pe(t, e), Ie(e), r & 4)) {
        if (e.stateNode === null) throw Error(y(162));
        (l = e.stateNode), (o = e.memoizedProps);
        try {
          l.nodeValue = o;
        } catch (w) {
          B(e, e.return, w);
        }
      }
      break;
    case 3:
      if (
        (Pe(t, e), Ie(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          Fn(t.containerInfo);
        } catch (w) {
          B(e, e.return, w);
        }
      break;
    case 4:
      Pe(t, e), Ie(e);
      break;
    case 13:
      Pe(t, e),
        Ie(e),
        (l = e.child),
        l.flags & 8192 &&
          ((o = l.memoizedState !== null),
          (l.stateNode.isHidden = o),
          !o ||
            (l.alternate !== null && l.alternate.memoizedState !== null) ||
            (Ei = Q())),
        r & 4 && Ou(e);
      break;
    case 22:
      if (
        ((v = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((re = (c = re) || v), Pe(t, e), (re = c)) : Pe(t, e),
        Ie(e),
        r & 8192)
      ) {
        if (
          ((c = e.memoizedState !== null),
          (e.stateNode.isHidden = c) && !v && e.mode & 1)
        )
          for (S = e, v = e.child; v !== null; ) {
            for (h = S = v; S !== null; ) {
              switch (((m = S), (x = m.child), m.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Pn(4, m, m.return);
                  break;
                case 1:
                  Wt(m, m.return);
                  var k = m.stateNode;
                  if (typeof k.componentWillUnmount == "function") {
                    (r = m), (n = m.return);
                    try {
                      (t = r),
                        (k.props = t.memoizedProps),
                        (k.state = t.memoizedState),
                        k.componentWillUnmount();
                    } catch (w) {
                      B(r, n, w);
                    }
                  }
                  break;
                case 5:
                  Wt(m, m.return);
                  break;
                case 22:
                  if (m.memoizedState !== null) {
                    Iu(h);
                    continue;
                  }
              }
              x !== null ? ((x.return = m), (S = x)) : Iu(h);
            }
            v = v.sibling;
          }
        e: for (v = null, h = e; ; ) {
          if (h.tag === 5) {
            if (v === null) {
              v = h;
              try {
                (l = h.stateNode),
                  c
                    ? ((o = l.style),
                      typeof o.setProperty == "function"
                        ? o.setProperty("display", "none", "important")
                        : (o.display = "none"))
                    : ((u = h.stateNode),
                      (s = h.memoizedProps.style),
                      (i =
                        s != null && s.hasOwnProperty("display")
                          ? s.display
                          : null),
                      (u.style.display = ms("display", i)));
              } catch (w) {
                B(e, e.return, w);
              }
            }
          } else if (h.tag === 6) {
            if (v === null)
              try {
                h.stateNode.nodeValue = c ? "" : h.memoizedProps;
              } catch (w) {
                B(e, e.return, w);
              }
          } else if (
            ((h.tag !== 22 && h.tag !== 23) ||
              h.memoizedState === null ||
              h === e) &&
            h.child !== null
          ) {
            (h.child.return = h), (h = h.child);
            continue;
          }
          if (h === e) break e;
          for (; h.sibling === null; ) {
            if (h.return === null || h.return === e) break e;
            v === h && (v = null), (h = h.return);
          }
          v === h && (v = null), (h.sibling.return = h.return), (h = h.sibling);
        }
      }
      break;
    case 19:
      Pe(t, e), Ie(e), r & 4 && Ou(e);
      break;
    case 21:
      break;
    default:
      Pe(t, e), Ie(e);
  }
}
function Ie(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (Aa(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(y(160));
      }
      switch (r.tag) {
        case 5:
          var l = r.stateNode;
          r.flags & 32 && (Rn(l, ""), (r.flags &= -33));
          var o = Ru(e);
          Oo(e, o, l);
          break;
        case 3:
        case 4:
          var i = r.stateNode.containerInfo,
            u = Ru(e);
          Ro(e, u, i);
          break;
        default:
          throw Error(y(161));
      }
    } catch (s) {
      B(e, e.return, s);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function pf(e, t, n) {
  (S = e), Ha(e);
}
function Ha(e, t, n) {
  for (var r = (e.mode & 1) !== 0; S !== null; ) {
    var l = S,
      o = l.child;
    if (l.tag === 22 && r) {
      var i = l.memoizedState !== null || vr;
      if (!i) {
        var u = l.alternate,
          s = (u !== null && u.memoizedState !== null) || re;
        u = vr;
        var c = re;
        if (((vr = i), (re = s) && !c))
          for (S = l; S !== null; )
            (i = S),
              (s = i.child),
              i.tag === 22 && i.memoizedState !== null
                ? Fu(l)
                : s !== null
                  ? ((s.return = i), (S = s))
                  : Fu(l);
        for (; o !== null; ) (S = o), Ha(o), (o = o.sibling);
        (S = l), (vr = u), (re = c);
      }
      Du(e);
    } else
      l.subtreeFlags & 8772 && o !== null ? ((o.return = l), (S = o)) : Du(e);
  }
}
function Du(e) {
  for (; S !== null; ) {
    var t = S;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              re || cl(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !re)
                if (n === null) r.componentDidMount();
                else {
                  var l =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : Le(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    l,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate,
                  );
                }
              var o = t.updateQueue;
              o !== null && xu(t, o, r);
              break;
            case 3:
              var i = t.updateQueue;
              if (i !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                xu(t, i, n);
              }
              break;
            case 5:
              var u = t.stateNode;
              if (n === null && t.flags & 4) {
                n = u;
                var s = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    s.autoFocus && n.focus();
                    break;
                  case "img":
                    s.src && (n.src = s.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (t.memoizedState === null) {
                var c = t.alternate;
                if (c !== null) {
                  var v = c.memoizedState;
                  if (v !== null) {
                    var h = v.dehydrated;
                    h !== null && Fn(h);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(y(163));
          }
        re || (t.flags & 512 && Mo(t));
      } catch (m) {
        B(t, t.return, m);
      }
    }
    if (t === e) {
      S = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      (n.return = t.return), (S = n);
      break;
    }
    S = t.return;
  }
}
function Iu(e) {
  for (; S !== null; ) {
    var t = S;
    if (t === e) {
      S = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      (n.return = t.return), (S = n);
      break;
    }
    S = t.return;
  }
}
function Fu(e) {
  for (; S !== null; ) {
    var t = S;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            cl(4, t);
          } catch (s) {
            B(t, n, s);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var l = t.return;
            try {
              r.componentDidMount();
            } catch (s) {
              B(t, l, s);
            }
          }
          var o = t.return;
          try {
            Mo(t);
          } catch (s) {
            B(t, o, s);
          }
          break;
        case 5:
          var i = t.return;
          try {
            Mo(t);
          } catch (s) {
            B(t, i, s);
          }
      }
    } catch (s) {
      B(t, t.return, s);
    }
    if (t === e) {
      S = null;
      break;
    }
    var u = t.sibling;
    if (u !== null) {
      (u.return = t.return), (S = u);
      break;
    }
    S = t.return;
  }
}
var mf = Math.ceil,
  Zr = Ze.ReactCurrentDispatcher,
  Si = Ze.ReactCurrentOwner,
  _e = Ze.ReactCurrentBatchConfig,
  M = 0,
  J = null,
  K = null,
  b = 0,
  me = 0,
  Qt = ht(0),
  G = 0,
  Gn = null,
  Pt = 0,
  dl = 0,
  Ni = 0,
  Ln = null,
  ae = null,
  Ei = 0,
  ln = 1 / 0,
  Ve = null,
  Jr = !1,
  Do = null,
  at = null,
  gr = !1,
  rt = null,
  qr = 0,
  Tn = 0,
  Io = null,
  zr = -1,
  Pr = 0;
function ie() {
  return M & 6 ? Q() : zr !== -1 ? zr : (zr = Q());
}
function ct(e) {
  return e.mode & 1
    ? M & 2 && b !== 0
      ? b & -b
      : Zd.transition !== null
        ? (Pr === 0 && (Pr = js()), Pr)
        : ((e = R),
          e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : Os(e.type))),
          e)
    : 1;
}
function Oe(e, t, n, r) {
  if (50 < Tn) throw ((Tn = 0), (Io = null), Error(y(185)));
  Zn(e, n, r),
    (!(M & 2) || e !== J) &&
      (e === J && (!(M & 2) && (dl |= n), G === 4 && tt(e, b)),
      pe(e, r),
      n === 1 && M === 0 && !(t.mode & 1) && ((ln = Q() + 500), ul && vt()));
}
function pe(e, t) {
  var n = e.callbackNode;
  Zc(e, t);
  var r = Dr(e, e === J ? b : 0);
  if (r === 0)
    n !== null && Ki(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && Ki(n), t === 1))
      e.tag === 0 ? Xd(Uu.bind(null, e)) : bs(Uu.bind(null, e)),
        Qd(function () {
          !(M & 6) && vt();
        }),
        (n = null);
    else {
      switch (zs(r)) {
        case 1:
          n = Zo;
          break;
        case 4:
          n = _s;
          break;
        case 16:
          n = Or;
          break;
        case 536870912:
          n = Cs;
          break;
        default:
          n = Or;
      }
      n = Ja(n, Wa.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function Wa(e, t) {
  if (((zr = -1), (Pr = 0), M & 6)) throw Error(y(327));
  var n = e.callbackNode;
  if (Jt() && e.callbackNode !== n) return null;
  var r = Dr(e, e === J ? b : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = br(e, r);
  else {
    t = r;
    var l = M;
    M |= 2;
    var o = Ka();
    (J !== e || b !== t) && ((Ve = null), (ln = Q() + 500), Et(e, t));
    do
      try {
        gf();
        break;
      } catch (u) {
        Qa(e, u);
      }
    while (!0);
    ai(),
      (Zr.current = o),
      (M = l),
      K !== null ? (t = 0) : ((J = null), (b = 0), (t = G));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((l = so(e)), l !== 0 && ((r = l), (t = Fo(e, l)))), t === 1)
    )
      throw ((n = Gn), Et(e, 0), tt(e, r), pe(e, Q()), n);
    if (t === 6) tt(e, r);
    else {
      if (
        ((l = e.current.alternate),
        !(r & 30) &&
          !hf(l) &&
          ((t = br(e, r)),
          t === 2 && ((o = so(e)), o !== 0 && ((r = o), (t = Fo(e, o)))),
          t === 1))
      )
        throw ((n = Gn), Et(e, 0), tt(e, r), pe(e, Q()), n);
      switch (((e.finishedWork = l), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(y(345));
        case 2:
          kt(e, ae, Ve);
          break;
        case 3:
          if (
            (tt(e, r), (r & 130023424) === r && ((t = Ei + 500 - Q()), 10 < t))
          ) {
            if (Dr(e, 0) !== 0) break;
            if (((l = e.suspendedLanes), (l & r) !== r)) {
              ie(), (e.pingedLanes |= e.suspendedLanes & l);
              break;
            }
            e.timeoutHandle = go(kt.bind(null, e, ae, Ve), t);
            break;
          }
          kt(e, ae, Ve);
          break;
        case 4:
          if ((tt(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, l = -1; 0 < r; ) {
            var i = 31 - Re(r);
            (o = 1 << i), (i = t[i]), i > l && (l = i), (r &= ~o);
          }
          if (
            ((r = l),
            (r = Q() - r),
            (r =
              (120 > r
                ? 120
                : 480 > r
                  ? 480
                  : 1080 > r
                    ? 1080
                    : 1920 > r
                      ? 1920
                      : 3e3 > r
                        ? 3e3
                        : 4320 > r
                          ? 4320
                          : 1960 * mf(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = go(kt.bind(null, e, ae, Ve), r);
            break;
          }
          kt(e, ae, Ve);
          break;
        case 5:
          kt(e, ae, Ve);
          break;
        default:
          throw Error(y(329));
      }
    }
  }
  return pe(e, Q()), e.callbackNode === n ? Wa.bind(null, e) : null;
}
function Fo(e, t) {
  var n = Ln;
  return (
    e.current.memoizedState.isDehydrated && (Et(e, t).flags |= 256),
    (e = br(e, t)),
    e !== 2 && ((t = ae), (ae = n), t !== null && Uo(t)),
    e
  );
}
function Uo(e) {
  ae === null ? (ae = e) : ae.push.apply(ae, e);
}
function hf(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var l = n[r],
            o = l.getSnapshot;
          l = l.value;
          try {
            if (!De(o(), l)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
      (n.return = t), (t = n);
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
  }
  return !0;
}
function tt(e, t) {
  for (
    t &= ~Ni,
      t &= ~dl,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - Re(t),
      r = 1 << n;
    (e[n] = -1), (t &= ~r);
  }
}
function Uu(e) {
  if (M & 6) throw Error(y(327));
  Jt();
  var t = Dr(e, 0);
  if (!(t & 1)) return pe(e, Q()), null;
  var n = br(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = so(e);
    r !== 0 && ((t = r), (n = Fo(e, r)));
  }
  if (n === 1) throw ((n = Gn), Et(e, 0), tt(e, t), pe(e, Q()), n);
  if (n === 6) throw Error(y(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    kt(e, ae, Ve),
    pe(e, Q()),
    null
  );
}
function _i(e, t) {
  var n = M;
  M |= 1;
  try {
    return e(t);
  } finally {
    (M = n), M === 0 && ((ln = Q() + 500), ul && vt());
  }
}
function Lt(e) {
  rt !== null && rt.tag === 0 && !(M & 6) && Jt();
  var t = M;
  M |= 1;
  var n = _e.transition,
    r = R;
  try {
    if (((_e.transition = null), (R = 1), e)) return e();
  } finally {
    (R = r), (_e.transition = n), (M = t), !(M & 6) && vt();
  }
}
function Ci() {
  (me = Qt.current), I(Qt);
}
function Et(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), Wd(n)), K !== null))
    for (n = K.return; n !== null; ) {
      var r = n;
      switch ((ii(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && Ar();
          break;
        case 3:
          nn(), I(de), I(le), hi();
          break;
        case 5:
          mi(r);
          break;
        case 4:
          nn();
          break;
        case 13:
          I($);
          break;
        case 19:
          I($);
          break;
        case 10:
          ci(r.type._context);
          break;
        case 22:
        case 23:
          Ci();
      }
      n = n.return;
    }
  if (
    ((J = e),
    (K = e = dt(e.current, null)),
    (b = me = t),
    (G = 0),
    (Gn = null),
    (Ni = dl = Pt = 0),
    (ae = Ln = null),
    St !== null)
  ) {
    for (t = 0; t < St.length; t++)
      if (((n = St[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var l = r.next,
          o = n.pending;
        if (o !== null) {
          var i = o.next;
          (o.next = l), (r.next = i);
        }
        n.pending = r;
      }
    St = null;
  }
  return e;
}
function Qa(e, t) {
  do {
    var n = K;
    try {
      if ((ai(), (_r.current = Xr), Gr)) {
        for (var r = A.memoizedState; r !== null; ) {
          var l = r.queue;
          l !== null && (l.pending = null), (r = r.next);
        }
        Gr = !1;
      }
      if (
        ((zt = 0),
        (Z = Y = A = null),
        (zn = !1),
        (Qn = 0),
        (Si.current = null),
        n === null || n.return === null)
      ) {
        (G = 1), (Gn = t), (K = null);
        break;
      }
      e: {
        var o = e,
          i = n.return,
          u = n,
          s = t;
        if (
          ((t = b),
          (u.flags |= 32768),
          s !== null && typeof s == "object" && typeof s.then == "function")
        ) {
          var c = s,
            v = u,
            h = v.tag;
          if (!(v.mode & 1) && (h === 0 || h === 11 || h === 15)) {
            var m = v.alternate;
            m
              ? ((v.updateQueue = m.updateQueue),
                (v.memoizedState = m.memoizedState),
                (v.lanes = m.lanes))
              : ((v.updateQueue = null), (v.memoizedState = null));
          }
          var x = _u(i);
          if (x !== null) {
            (x.flags &= -257),
              Cu(x, i, u, o, t),
              x.mode & 1 && Eu(o, c, t),
              (t = x),
              (s = c);
            var k = t.updateQueue;
            if (k === null) {
              var w = new Set();
              w.add(s), (t.updateQueue = w);
            } else k.add(s);
            break e;
          } else {
            if (!(t & 1)) {
              Eu(o, c, t), ji();
              break e;
            }
            s = Error(y(426));
          }
        } else if (U && u.mode & 1) {
          var F = _u(i);
          if (F !== null) {
            !(F.flags & 65536) && (F.flags |= 256),
              Cu(F, i, u, o, t),
              ui(rn(s, u));
            break e;
          }
        }
        (o = s = rn(s, u)),
          G !== 4 && (G = 2),
          Ln === null ? (Ln = [o]) : Ln.push(o),
          (o = i);
        do {
          switch (o.tag) {
            case 3:
              (o.flags |= 65536), (t &= -t), (o.lanes |= t);
              var d = za(o, s, t);
              yu(o, d);
              break e;
            case 1:
              u = s;
              var a = o.type,
                p = o.stateNode;
              if (
                !(o.flags & 128) &&
                (typeof a.getDerivedStateFromError == "function" ||
                  (p !== null &&
                    typeof p.componentDidCatch == "function" &&
                    (at === null || !at.has(p))))
              ) {
                (o.flags |= 65536), (t &= -t), (o.lanes |= t);
                var g = Pa(o, u, t);
                yu(o, g);
                break e;
              }
          }
          o = o.return;
        } while (o !== null);
      }
      Ga(n);
    } catch (N) {
      (t = N), K === n && n !== null && (K = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function Ka() {
  var e = Zr.current;
  return (Zr.current = Xr), e === null ? Xr : e;
}
function ji() {
  (G === 0 || G === 3 || G === 2) && (G = 4),
    J === null || (!(Pt & 268435455) && !(dl & 268435455)) || tt(J, b);
}
function br(e, t) {
  var n = M;
  M |= 2;
  var r = Ka();
  (J !== e || b !== t) && ((Ve = null), Et(e, t));
  do
    try {
      vf();
      break;
    } catch (l) {
      Qa(e, l);
    }
  while (!0);
  if ((ai(), (M = n), (Zr.current = r), K !== null)) throw Error(y(261));
  return (J = null), (b = 0), G;
}
function vf() {
  for (; K !== null; ) Ya(K);
}
function gf() {
  for (; K !== null && !Vc(); ) Ya(K);
}
function Ya(e) {
  var t = Za(e.alternate, e, me);
  (e.memoizedProps = e.pendingProps),
    t === null ? Ga(e) : (K = t),
    (Si.current = null);
}
function Ga(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = cf(n, t)), n !== null)) {
        (n.flags &= 32767), (K = n);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (G = 6), (K = null);
        return;
      }
    } else if (((n = af(n, t, me)), n !== null)) {
      K = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      K = t;
      return;
    }
    K = t = e;
  } while (t !== null);
  G === 0 && (G = 5);
}
function kt(e, t, n) {
  var r = R,
    l = _e.transition;
  try {
    (_e.transition = null), (R = 1), yf(e, t, n, r);
  } finally {
    (_e.transition = l), (R = r);
  }
  return null;
}
function yf(e, t, n, r) {
  do Jt();
  while (rt !== null);
  if (M & 6) throw Error(y(327));
  n = e.finishedWork;
  var l = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(y(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var o = n.lanes | n.childLanes;
  if (
    (Jc(e, o),
    e === J && ((K = J = null), (b = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      gr ||
      ((gr = !0),
      Ja(Or, function () {
        return Jt(), null;
      })),
    (o = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || o)
  ) {
    (o = _e.transition), (_e.transition = null);
    var i = R;
    R = 1;
    var u = M;
    (M |= 4),
      (Si.current = null),
      ff(e, n),
      Ba(n, e),
      Fd(ho),
      (Ir = !!mo),
      (ho = mo = null),
      (e.current = n),
      pf(n),
      Bc(),
      (M = u),
      (R = i),
      (_e.transition = o);
  } else e.current = n;
  if (
    (gr && ((gr = !1), (rt = e), (qr = l)),
    (o = e.pendingLanes),
    o === 0 && (at = null),
    Qc(n.stateNode),
    pe(e, Q()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (l = t[n]), r(l.value, { componentStack: l.stack, digest: l.digest });
  if (Jr) throw ((Jr = !1), (e = Do), (Do = null), e);
  return (
    qr & 1 && e.tag !== 0 && Jt(),
    (o = e.pendingLanes),
    o & 1 ? (e === Io ? Tn++ : ((Tn = 0), (Io = e))) : (Tn = 0),
    vt(),
    null
  );
}
function Jt() {
  if (rt !== null) {
    var e = zs(qr),
      t = _e.transition,
      n = R;
    try {
      if (((_e.transition = null), (R = 16 > e ? 16 : e), rt === null))
        var r = !1;
      else {
        if (((e = rt), (rt = null), (qr = 0), M & 6)) throw Error(y(331));
        var l = M;
        for (M |= 4, S = e.current; S !== null; ) {
          var o = S,
            i = o.child;
          if (S.flags & 16) {
            var u = o.deletions;
            if (u !== null) {
              for (var s = 0; s < u.length; s++) {
                var c = u[s];
                for (S = c; S !== null; ) {
                  var v = S;
                  switch (v.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Pn(8, v, o);
                  }
                  var h = v.child;
                  if (h !== null) (h.return = v), (S = h);
                  else
                    for (; S !== null; ) {
                      v = S;
                      var m = v.sibling,
                        x = v.return;
                      if (($a(v), v === c)) {
                        S = null;
                        break;
                      }
                      if (m !== null) {
                        (m.return = x), (S = m);
                        break;
                      }
                      S = x;
                    }
                }
              }
              var k = o.alternate;
              if (k !== null) {
                var w = k.child;
                if (w !== null) {
                  k.child = null;
                  do {
                    var F = w.sibling;
                    (w.sibling = null), (w = F);
                  } while (w !== null);
                }
              }
              S = o;
            }
          }
          if (o.subtreeFlags & 2064 && i !== null) (i.return = o), (S = i);
          else
            e: for (; S !== null; ) {
              if (((o = S), o.flags & 2048))
                switch (o.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Pn(9, o, o.return);
                }
              var d = o.sibling;
              if (d !== null) {
                (d.return = o.return), (S = d);
                break e;
              }
              S = o.return;
            }
        }
        var a = e.current;
        for (S = a; S !== null; ) {
          i = S;
          var p = i.child;
          if (i.subtreeFlags & 2064 && p !== null) (p.return = i), (S = p);
          else
            e: for (i = a; S !== null; ) {
              if (((u = S), u.flags & 2048))
                try {
                  switch (u.tag) {
                    case 0:
                    case 11:
                    case 15:
                      cl(9, u);
                  }
                } catch (N) {
                  B(u, u.return, N);
                }
              if (u === i) {
                S = null;
                break e;
              }
              var g = u.sibling;
              if (g !== null) {
                (g.return = u.return), (S = g);
                break e;
              }
              S = u.return;
            }
        }
        if (
          ((M = l), vt(), $e && typeof $e.onPostCommitFiberRoot == "function")
        )
          try {
            $e.onPostCommitFiberRoot(nl, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (R = n), (_e.transition = t);
    }
  }
  return !1;
}
function $u(e, t, n) {
  (t = rn(n, t)),
    (t = za(e, t, 1)),
    (e = st(e, t, 1)),
    (t = ie()),
    e !== null && (Zn(e, 1, t), pe(e, t));
}
function B(e, t, n) {
  if (e.tag === 3) $u(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        $u(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" &&
            (at === null || !at.has(r)))
        ) {
          (e = rn(n, e)),
            (e = Pa(t, e, 1)),
            (t = st(t, e, 1)),
            (e = ie()),
            t !== null && (Zn(t, 1, e), pe(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function xf(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = ie()),
    (e.pingedLanes |= e.suspendedLanes & n),
    J === e &&
      (b & n) === n &&
      (G === 4 || (G === 3 && (b & 130023424) === b && 500 > Q() - Ei)
        ? Et(e, 0)
        : (Ni |= n)),
    pe(e, t);
}
function Xa(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = ur), (ur <<= 1), !(ur & 130023424) && (ur = 4194304))
      : (t = 1));
  var n = ie();
  (e = Ge(e, t)), e !== null && (Zn(e, t, n), pe(e, n));
}
function kf(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), Xa(e, n);
}
function wf(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        l = e.memoizedState;
      l !== null && (n = l.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(y(314));
  }
  r !== null && r.delete(t), Xa(e, n);
}
var Za;
Za = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || de.current) ce = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (ce = !1), sf(e, t, n);
      ce = !!(e.flags & 131072);
    }
  else (ce = !1), U && t.flags & 1048576 && ea(t, Hr, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      jr(e, t), (e = t.pendingProps);
      var l = bt(t, le.current);
      Zt(t, n), (l = gi(null, t, r, e, l, n));
      var o = yi();
      return (
        (t.flags |= 1),
        typeof l == "object" &&
        l !== null &&
        typeof l.render == "function" &&
        l.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            fe(r) ? ((o = !0), Vr(t)) : (o = !1),
            (t.memoizedState =
              l.state !== null && l.state !== void 0 ? l.state : null),
            fi(t),
            (l.updater = al),
            (t.stateNode = l),
            (l._reactInternals = t),
            Eo(t, r, e, n),
            (t = jo(null, t, r, !0, o, n)))
          : ((t.tag = 0), U && o && oi(t), oe(null, t, l, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (jr(e, t),
          (e = t.pendingProps),
          (l = r._init),
          (r = l(r._payload)),
          (t.type = r),
          (l = t.tag = Nf(r)),
          (e = Le(r, e)),
          l)
        ) {
          case 0:
            t = Co(null, t, r, e, n);
            break e;
          case 1:
            t = Pu(null, t, r, e, n);
            break e;
          case 11:
            t = ju(null, t, r, e, n);
            break e;
          case 14:
            t = zu(null, t, r, Le(r.type, e), n);
            break e;
        }
        throw Error(y(306, r, ""));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : Le(r, l)),
        Co(e, t, r, l, n)
      );
    case 1:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : Le(r, l)),
        Pu(e, t, r, l, n)
      );
    case 3:
      e: {
        if ((Ra(t), e === null)) throw Error(y(387));
        (r = t.pendingProps),
          (o = t.memoizedState),
          (l = o.element),
          ia(e, t),
          Kr(t, r, null, n);
        var i = t.memoizedState;
        if (((r = i.element), o.isDehydrated))
          if (
            ((o = {
              element: r,
              isDehydrated: !1,
              cache: i.cache,
              pendingSuspenseBoundaries: i.pendingSuspenseBoundaries,
              transitions: i.transitions,
            }),
            (t.updateQueue.baseState = o),
            (t.memoizedState = o),
            t.flags & 256)
          ) {
            (l = rn(Error(y(423)), t)), (t = Lu(e, t, r, n, l));
            break e;
          } else if (r !== l) {
            (l = rn(Error(y(424)), t)), (t = Lu(e, t, r, n, l));
            break e;
          } else
            for (
              he = ut(t.stateNode.containerInfo.firstChild),
                ve = t,
                U = !0,
                Me = null,
                n = la(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((en(), r === l)) {
            t = Xe(e, t, n);
            break e;
          }
          oe(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        ua(t),
        e === null && wo(t),
        (r = t.type),
        (l = t.pendingProps),
        (o = e !== null ? e.memoizedProps : null),
        (i = l.children),
        vo(r, l) ? (i = null) : o !== null && vo(r, o) && (t.flags |= 32),
        Ma(e, t),
        oe(e, t, i, n),
        t.child
      );
    case 6:
      return e === null && wo(t), null;
    case 13:
      return Oa(e, t, n);
    case 4:
      return (
        pi(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = tn(t, null, r, n)) : oe(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : Le(r, l)),
        ju(e, t, r, l, n)
      );
    case 7:
      return oe(e, t, t.pendingProps, n), t.child;
    case 8:
      return oe(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return oe(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (l = t.pendingProps),
          (o = t.memoizedProps),
          (i = l.value),
          O(Wr, r._currentValue),
          (r._currentValue = i),
          o !== null)
        )
          if (De(o.value, i)) {
            if (o.children === l.children && !de.current) {
              t = Xe(e, t, n);
              break e;
            }
          } else
            for (o = t.child, o !== null && (o.return = t); o !== null; ) {
              var u = o.dependencies;
              if (u !== null) {
                i = o.child;
                for (var s = u.firstContext; s !== null; ) {
                  if (s.context === r) {
                    if (o.tag === 1) {
                      (s = Qe(-1, n & -n)), (s.tag = 2);
                      var c = o.updateQueue;
                      if (c !== null) {
                        c = c.shared;
                        var v = c.pending;
                        v === null
                          ? (s.next = s)
                          : ((s.next = v.next), (v.next = s)),
                          (c.pending = s);
                      }
                    }
                    (o.lanes |= n),
                      (s = o.alternate),
                      s !== null && (s.lanes |= n),
                      So(o.return, n, t),
                      (u.lanes |= n);
                    break;
                  }
                  s = s.next;
                }
              } else if (o.tag === 10) i = o.type === t.type ? null : o.child;
              else if (o.tag === 18) {
                if (((i = o.return), i === null)) throw Error(y(341));
                (i.lanes |= n),
                  (u = i.alternate),
                  u !== null && (u.lanes |= n),
                  So(i, n, t),
                  (i = o.sibling);
              } else i = o.child;
              if (i !== null) i.return = o;
              else
                for (i = o; i !== null; ) {
                  if (i === t) {
                    i = null;
                    break;
                  }
                  if (((o = i.sibling), o !== null)) {
                    (o.return = i.return), (i = o);
                    break;
                  }
                  i = i.return;
                }
              o = i;
            }
        oe(e, t, l.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (l = t.type),
        (r = t.pendingProps.children),
        Zt(t, n),
        (l = Ce(l)),
        (r = r(l)),
        (t.flags |= 1),
        oe(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (l = Le(r, t.pendingProps)),
        (l = Le(r.type, l)),
        zu(e, t, r, l, n)
      );
    case 15:
      return La(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : Le(r, l)),
        jr(e, t),
        (t.tag = 1),
        fe(r) ? ((e = !0), Vr(t)) : (e = !1),
        Zt(t, n),
        ja(t, r, l),
        Eo(t, r, l, n),
        jo(null, t, r, !0, e, n)
      );
    case 19:
      return Da(e, t, n);
    case 22:
      return Ta(e, t, n);
  }
  throw Error(y(156, t.tag));
};
function Ja(e, t) {
  return Es(e, t);
}
function Sf(e, t, n, r) {
  (this.tag = e),
    (this.key = n),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = r),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null);
}
function Ne(e, t, n, r) {
  return new Sf(e, t, n, r);
}
function zi(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function Nf(e) {
  if (typeof e == "function") return zi(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === Yo)) return 11;
    if (e === Go) return 14;
  }
  return 2;
}
function dt(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = Ne(e.tag, t, e.key, e.mode)),
        (n.elementType = e.elementType),
        (n.type = e.type),
        (n.stateNode = e.stateNode),
        (n.alternate = e),
        (e.alternate = n))
      : ((n.pendingProps = t),
        (n.type = e.type),
        (n.flags = 0),
        (n.subtreeFlags = 0),
        (n.deletions = null)),
    (n.flags = e.flags & 14680064),
    (n.childLanes = e.childLanes),
    (n.lanes = e.lanes),
    (n.child = e.child),
    (n.memoizedProps = e.memoizedProps),
    (n.memoizedState = e.memoizedState),
    (n.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (n.dependencies =
      t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (n.sibling = e.sibling),
    (n.index = e.index),
    (n.ref = e.ref),
    n
  );
}
function Lr(e, t, n, r, l, o) {
  var i = 2;
  if (((r = e), typeof e == "function")) zi(e) && (i = 1);
  else if (typeof e == "string") i = 5;
  else
    e: switch (e) {
      case Dt:
        return _t(n.children, l, o, t);
      case Ko:
        (i = 8), (l |= 8);
        break;
      case Yl:
        return (
          (e = Ne(12, n, t, l | 2)), (e.elementType = Yl), (e.lanes = o), e
        );
      case Gl:
        return (e = Ne(13, n, t, l)), (e.elementType = Gl), (e.lanes = o), e;
      case Xl:
        return (e = Ne(19, n, t, l)), (e.elementType = Xl), (e.lanes = o), e;
      case us:
        return fl(n, l, o, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case os:
              i = 10;
              break e;
            case is:
              i = 9;
              break e;
            case Yo:
              i = 11;
              break e;
            case Go:
              i = 14;
              break e;
            case qe:
              (i = 16), (r = null);
              break e;
          }
        throw Error(y(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = Ne(i, n, t, l)), (t.elementType = e), (t.type = r), (t.lanes = o), t
  );
}
function _t(e, t, n, r) {
  return (e = Ne(7, e, r, t)), (e.lanes = n), e;
}
function fl(e, t, n, r) {
  return (
    (e = Ne(22, e, r, t)),
    (e.elementType = us),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function Wl(e, t, n) {
  return (e = Ne(6, e, null, t)), (e.lanes = n), e;
}
function Ql(e, t, n) {
  return (
    (t = Ne(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function Ef(e, t, n, r, l) {
  (this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = _l(0)),
    (this.expirationTimes = _l(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = _l(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = l),
    (this.mutableSourceEagerHydrationData = null);
}
function Pi(e, t, n, r, l, o, i, u, s) {
  return (
    (e = new Ef(e, t, n, u, s)),
    t === 1 ? ((t = 1), o === !0 && (t |= 8)) : (t = 0),
    (o = Ne(3, null, null, t)),
    (e.current = o),
    (o.stateNode = e),
    (o.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    fi(o),
    e
  );
}
function _f(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: Ot,
    key: r == null ? null : "" + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function qa(e) {
  if (!e) return pt;
  e = e._reactInternals;
  e: {
    if (Mt(e) !== e || e.tag !== 1) throw Error(y(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (fe(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(y(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (fe(n)) return qs(e, n, t);
  }
  return t;
}
function ba(e, t, n, r, l, o, i, u, s) {
  return (
    (e = Pi(n, r, !0, e, l, o, i, u, s)),
    (e.context = qa(null)),
    (n = e.current),
    (r = ie()),
    (l = ct(n)),
    (o = Qe(r, l)),
    (o.callback = t ?? null),
    st(n, o, l),
    (e.current.lanes = l),
    Zn(e, l, r),
    pe(e, r),
    e
  );
}
function pl(e, t, n, r) {
  var l = t.current,
    o = ie(),
    i = ct(l);
  return (
    (n = qa(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = Qe(o, i)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = st(l, t, i)),
    e !== null && (Oe(e, l, i, o), Er(e, l, i)),
    i
  );
}
function el(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function Au(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function Li(e, t) {
  Au(e, t), (e = e.alternate) && Au(e, t);
}
function Cf() {
  return null;
}
var ec =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function Ti(e) {
  this._internalRoot = e;
}
ml.prototype.render = Ti.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(y(409));
  pl(e, t, null, null);
};
ml.prototype.unmount = Ti.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    Lt(function () {
      pl(null, e, null, null);
    }),
      (t[Ye] = null);
  }
};
function ml(e) {
  this._internalRoot = e;
}
ml.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = Ts();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < et.length && t !== 0 && t < et[n].priority; n++);
    et.splice(n, 0, e), n === 0 && Rs(e);
  }
};
function Mi(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function hl(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function Vu() {}
function jf(e, t, n, r, l) {
  if (l) {
    if (typeof r == "function") {
      var o = r;
      r = function () {
        var c = el(i);
        o.call(c);
      };
    }
    var i = ba(t, r, e, 0, null, !1, !1, "", Vu);
    return (
      (e._reactRootContainer = i),
      (e[Ye] = i.current),
      An(e.nodeType === 8 ? e.parentNode : e),
      Lt(),
      i
    );
  }
  for (; (l = e.lastChild); ) e.removeChild(l);
  if (typeof r == "function") {
    var u = r;
    r = function () {
      var c = el(s);
      u.call(c);
    };
  }
  var s = Pi(e, 0, !1, null, null, !1, !1, "", Vu);
  return (
    (e._reactRootContainer = s),
    (e[Ye] = s.current),
    An(e.nodeType === 8 ? e.parentNode : e),
    Lt(function () {
      pl(t, s, n, r);
    }),
    s
  );
}
function vl(e, t, n, r, l) {
  var o = n._reactRootContainer;
  if (o) {
    var i = o;
    if (typeof l == "function") {
      var u = l;
      l = function () {
        var s = el(i);
        u.call(s);
      };
    }
    pl(t, i, e, l);
  } else i = jf(n, t, e, l, r);
  return el(i);
}
Ps = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = wn(t.pendingLanes);
        n !== 0 &&
          (Jo(t, n | 1), pe(t, Q()), !(M & 6) && ((ln = Q() + 500), vt()));
      }
      break;
    case 13:
      Lt(function () {
        var r = Ge(e, 1);
        if (r !== null) {
          var l = ie();
          Oe(r, e, 1, l);
        }
      }),
        Li(e, 1);
  }
};
qo = function (e) {
  if (e.tag === 13) {
    var t = Ge(e, 134217728);
    if (t !== null) {
      var n = ie();
      Oe(t, e, 134217728, n);
    }
    Li(e, 134217728);
  }
};
Ls = function (e) {
  if (e.tag === 13) {
    var t = ct(e),
      n = Ge(e, t);
    if (n !== null) {
      var r = ie();
      Oe(n, e, t, r);
    }
    Li(e, t);
  }
};
Ts = function () {
  return R;
};
Ms = function (e, t) {
  var n = R;
  try {
    return (R = e), t();
  } finally {
    R = n;
  }
};
oo = function (e, t, n) {
  switch (t) {
    case "input":
      if ((ql(e, n), (t = n.name), n.type === "radio" && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (
          n = n.querySelectorAll(
            "input[name=" + JSON.stringify("" + t) + '][type="radio"]',
          ),
            t = 0;
          t < n.length;
          t++
        ) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var l = il(r);
            if (!l) throw Error(y(90));
            as(r), ql(r, l);
          }
        }
      }
      break;
    case "textarea":
      ds(e, n);
      break;
    case "select":
      (t = n.value), t != null && Kt(e, !!n.multiple, t, !1);
  }
};
ys = _i;
xs = Lt;
var zf = { usingClientEntryPoint: !1, Events: [qn, $t, il, vs, gs, _i] },
  yn = {
    findFiberByHostInstance: wt,
    bundleType: 0,
    version: "18.3.1",
    rendererPackageName: "react-dom",
  },
  Pf = {
    bundleType: yn.bundleType,
    version: yn.version,
    rendererPackageName: yn.rendererPackageName,
    rendererConfig: yn.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: Ze.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = Ss(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: yn.findFiberByHostInstance || Cf,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var yr = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!yr.isDisabled && yr.supportsFiber)
    try {
      (nl = yr.inject(Pf)), ($e = yr);
    } catch {}
}
ye.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = zf;
ye.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Mi(t)) throw Error(y(200));
  return _f(e, t, null, n);
};
ye.createRoot = function (e, t) {
  if (!Mi(e)) throw Error(y(299));
  var n = !1,
    r = "",
    l = ec;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (l = t.onRecoverableError)),
    (t = Pi(e, 1, !1, null, null, n, !1, r, l)),
    (e[Ye] = t.current),
    An(e.nodeType === 8 ? e.parentNode : e),
    new Ti(t)
  );
};
ye.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(y(188))
      : ((e = Object.keys(e).join(",")), Error(y(268, e)));
  return (e = Ss(t)), (e = e === null ? null : e.stateNode), e;
};
ye.flushSync = function (e) {
  return Lt(e);
};
ye.hydrate = function (e, t, n) {
  if (!hl(t)) throw Error(y(200));
  return vl(null, e, t, !0, n);
};
ye.hydrateRoot = function (e, t, n) {
  if (!Mi(e)) throw Error(y(405));
  var r = (n != null && n.hydratedSources) || null,
    l = !1,
    o = "",
    i = ec;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (l = !0),
      n.identifierPrefix !== void 0 && (o = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (i = n.onRecoverableError)),
    (t = ba(t, null, e, 1, n ?? null, l, !1, o, i)),
    (e[Ye] = t.current),
    An(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (l = n._getVersion),
        (l = l(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, l])
          : t.mutableSourceEagerHydrationData.push(n, l);
  return new ml(t);
};
ye.render = function (e, t, n) {
  if (!hl(t)) throw Error(y(200));
  return vl(null, e, t, !1, n);
};
ye.unmountComponentAtNode = function (e) {
  if (!hl(e)) throw Error(y(40));
  return e._reactRootContainer
    ? (Lt(function () {
        vl(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[Ye] = null);
        });
      }),
      !0)
    : !1;
};
ye.unstable_batchedUpdates = _i;
ye.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!hl(n)) throw Error(y(200));
  if (e == null || e._reactInternals === void 0) throw Error(y(38));
  return vl(e, t, n, !1, r);
};
ye.version = "18.3.1-next-f1338f8080-20240426";
function tc() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(tc);
    } catch (e) {
      console.error(e);
    }
}
tc(), (ts.exports = ye);
var Lf = ts.exports,
  nc,
  Bu = Lf;
(nc = Bu.createRoot), Bu.hydrateRoot;
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var Tf = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Mf = (e) =>
    e
      .replace(/([a-z0-9])([A-Z])/g, "$1-$2")
      .toLowerCase()
      .trim(),
  ke = (e, t) => {
    const n = Ee.forwardRef(
      (
        {
          color: r = "currentColor",
          size: l = 24,
          strokeWidth: o = 2,
          absoluteStrokeWidth: i,
          className: u = "",
          children: s,
          ...c
        },
        v,
      ) =>
        Ee.createElement(
          "svg",
          {
            ref: v,
            ...Tf,
            width: l,
            height: l,
            stroke: r,
            strokeWidth: i ? (Number(o) * 24) / Number(l) : o,
            className: ["lucide", `lucide-${Mf(e)}`, u].join(" "),
            ...c,
          },
          [
            ...t.map(([h, m]) => Ee.createElement(h, m)),
            ...(Array.isArray(s) ? s : [s]),
          ],
        ),
    );
    return (n.displayName = `${e}`), n;
  };
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Rf = ke("ArrowRight", [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "m12 5 7 7-7 7", key: "xquz4c" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Of = ke("ChevronDown", [
  ["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Df = ke("Code", [
  ["polyline", { points: "16 18 22 12 16 6", key: "z7tu5w" }],
  ["polyline", { points: "8 6 2 12 8 18", key: "1eg1df" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Hu = ke("Github", [
  [
    "path",
    {
      d: "M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",
      key: "tonef",
    },
  ],
  ["path", { d: "M9 18c-4.51 2-5-2-7-2", key: "9comsn" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const If = ke("Globe", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  [
    "path",
    { d: "M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20", key: "13o1zl" },
  ],
  ["path", { d: "M2 12h20", key: "9i4pu4" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Ff = ke("Mail", [
  [
    "rect",
    { width: "20", height: "16", x: "2", y: "4", rx: "2", key: "18n3k1" },
  ],
  ["path", { d: "m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7", key: "1ocrg3" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Uf = ke("Menu", [
  ["line", { x1: "4", x2: "20", y1: "12", y2: "12", key: "1e0a9i" }],
  ["line", { x1: "4", x2: "20", y1: "6", y2: "6", key: "1owob3" }],
  ["line", { x1: "4", x2: "20", y1: "18", y2: "18", key: "yk5zj1" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const $f = ke("MessageSquare", [
  [
    "path",
    {
      d: "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",
      key: "1lielz",
    },
  ],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Af = ke("Moon", [
  ["path", { d: "M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z", key: "a7tn18" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Vf = ke("Shield", [
  [
    "path",
    {
      d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
      key: "oel41y",
    },
  ],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Bf = ke("Sun", [
  ["circle", { cx: "12", cy: "12", r: "4", key: "4exip2" }],
  ["path", { d: "M12 2v2", key: "tus03m" }],
  ["path", { d: "M12 20v2", key: "1lh1kg" }],
  ["path", { d: "m4.93 4.93 1.41 1.41", key: "149t6j" }],
  ["path", { d: "m17.66 17.66 1.41 1.41", key: "ptbguv" }],
  ["path", { d: "M2 12h2", key: "1t8f8n" }],
  ["path", { d: "M20 12h2", key: "1q8mjw" }],
  ["path", { d: "m6.34 17.66-1.41 1.41", key: "1m8zz5" }],
  ["path", { d: "m19.07 4.93-1.41 1.41", key: "1shlcs" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Hf = ke("X", [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Wf = ke("Zap", [
    [
      "polygon",
      { points: "13 2 3 14 12 14 11 22 21 10 12 10 13 2", key: "45s27k" },
    ],
  ]),
  Qf = ({ darkMode: e, toggleDarkMode: t }) => {
    const [n, r] = Ee.useState(!1),
      [l, o] = Ee.useState(!1);
    Ee.useEffect(() => {
      const s = () => {
        o(window.scrollY > 10);
      };
      return (
        window.addEventListener("scroll", s),
        () => window.removeEventListener("scroll", s)
      );
    }, []);
    const i = () => {
        r(!n);
      },
      u = (s) => {
        const c = document.getElementById(s);
        c && c.scrollIntoView({ behavior: "smooth" }), r(!1);
      };
    return f.jsxs("header", {
      className: `fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${l ? "bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg shadow-lg" : "bg-transparent"}`,
      children: [
        f.jsx("div", {
          className: "container mx-auto px-4 sm:px-6 lg:px-8",
          children: f.jsxs("div", {
            className: "flex items-center justify-between h-20",
            children: [
              f.jsx("div", {
                className: "flex-shrink-0",
                children: f.jsx("span", {
                  className:
                    "text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400",
                  children: "创梦星际",
                }),
              }),
              f.jsx("nav", {
                className: "hidden md:flex items-center space-x-1",
                children: ["首页", "特点", "关于", "联系"].map((s, c) =>
                  f.jsxs(
                    "button",
                    {
                      onClick: () =>
                        u(
                          s === "首页"
                            ? "home"
                            : s === "特点"
                              ? "features"
                              : s === "关于"
                                ? "about"
                                : "contact",
                        ),
                      className:
                        "relative px-5 py-2 group text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300",
                      children: [
                        f.jsx("span", {
                          className: "relative z-10",
                          children: s,
                        }),
                        f.jsx("div", {
                          className:
                            "absolute inset-0 h-full w-full bg-blue-100 dark:bg-blue-900/30 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300 origin-center",
                        }),
                      ],
                    },
                    c,
                  ),
                ),
              }),
              f.jsxs("div", {
                className: "flex items-center gap-4",
                children: [
                  f.jsxs("button", {
                    onClick: t,
                    className:
                      "relative p-2 rounded-lg text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300 group",
                    children: [
                      f.jsx("div", {
                        className:
                          "absolute inset-0 bg-blue-100 dark:bg-blue-900/30 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300",
                      }),
                      f.jsx("span", {
                        className: "relative",
                        children: e
                          ? f.jsx(Bf, { size: 22 })
                          : f.jsx(Af, { size: 22 }),
                      }),
                    ],
                  }),
                  f.jsxs("button", {
                    onClick: i,
                    className:
                      "md:hidden relative p-2 rounded-lg text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300 group",
                    children: [
                      f.jsx("div", {
                        className:
                          "absolute inset-0 bg-blue-100 dark:bg-blue-900/30 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300",
                      }),
                      f.jsx("span", {
                        className: "relative",
                        children: n
                          ? f.jsx(Hf, { size: 24 })
                          : f.jsx(Uf, { size: 24 }),
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        }),
        f.jsx("div", {
          className: `md:hidden fixed inset-x-0 top-20 bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg transition-all duration-300 transform ${n ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"}`,
          children: f.jsx("div", {
            className: "container mx-auto px-4 py-4 space-y-1",
            children: ["首页", "特点", "关于", "联系"].map((s, c) =>
              f.jsx(
                "button",
                {
                  onClick: () =>
                    u(
                      s === "首页"
                        ? "home"
                        : s === "特点"
                          ? "features"
                          : s === "关于"
                            ? "about"
                            : "contact",
                    ),
                  className:
                    "block w-full text-left px-4 py-3 rounded-lg text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/30 transition-colors duration-300",
                  children: s,
                },
                c,
              ),
            ),
          }),
        }),
      ],
    });
  },
  Kf = () =>
    f.jsxs("section", {
      id: "home",
      className:
        "relative min-h-screen pt-16 md:pt-24 lg:pt-32 pb-16 md:pb-24 overflow-hidden flex items-center",
      children: [
        f.jsxs("div", {
          className: "absolute inset-0",
          children: [
            f.jsx("img", {
              src: "main/2.png",
              alt: "Background",
              className: "w-full h-full object-cover opacity-10 dark:opacity-5",
            }),
            f.jsx("div", {
              className:
                "absolute inset-0 bg-gradient-to-b from-white via-transparent to-white dark:from-gray-900 dark:to-gray-900",
            }),
          ],
        }),
        f.jsx("div", {
          className: "container mx-auto px-4 sm:px-6 lg:px-8 relative z-10",
          children: f.jsxs("div", {
            className:
              "flex flex-col lg:flex-row items-center gap-12 lg:gap-16",
            children: [
              f.jsxs("div", {
                className: "lg:w-1/2 space-y-8",
                children: [
                  f.jsx("div", {
                    className:
                      "inline-flex items-center px-4 py-2 bg-blue-100/80 dark:bg-blue-900/30 rounded-full text-blue-700 dark:text-blue-300 text-sm font-medium backdrop-blur-sm animate-fade-in",
                    children: "✨ 引领迷你世界的未来",
                  }),
                  f.jsxs("h1", {
                    className:
                      "text-5xl md:text-6xl lg:text-7xl font-bold leading-tight",
                    children: [
                      f.jsx("span", {
                        className: "text-gray-900 dark:text-white",
                        children: "创梦星际",
                      }),
                      f.jsx("br", {}),
                      f.jsx("span", {
                        className:
                          "text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400",
                        children: "引领迷你",
                      }),
                    ],
                  }),
                  f.jsx("p", {
                    className:
                      "text-xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-2xl animate-fade-in animation-delay-200",
                    children:
                      "用技术来填补迷你的空缺，让大家一起享受老版本的快乐。我们致力于为用户提供最优质的体验。",
                  }),
                  f.jsxs("div", {
                    className: "flex flex-col sm:flex-row gap-4 pt-4",
                    children: [
                      f.jsx("a", {
                        href: "https://www.scmgzs.top",
                        target: "_blank",
                        rel: "noopener noreferrer",
                        className:
                          "group relative inline-flex items-center justify-center px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-[0_0_2rem_-0.5rem_#3b82f6]",
                        children: f.jsxs("span", {
                          className: "relative flex items-center",
                          children: [
                            "访问官网",
                            f.jsx(Rf, {
                              size: 18,
                              className:
                                "ml-2 transition-transform duration-300 group-hover:translate-x-1",
                            }),
                          ],
                        }),
                      }),
                      f.jsx("button", {
                        onClick: () => {
                          var e;
                          return (e = document.getElementById("features")) ==
                            null
                            ? void 0
                            : e.scrollIntoView({ behavior: "smooth" });
                        },
                        className:
                          "group relative inline-flex items-center justify-center px-8 py-4 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 font-medium rounded-xl border border-gray-200 dark:border-gray-700 transition-all duration-300 transform hover:scale-105 hover:shadow-lg",
                        children: f.jsxs("span", {
                          className: "relative flex items-center",
                          children: [
                            "了解更多",
                            f.jsx(Of, {
                              size: 18,
                              className:
                                "ml-2 transition-transform duration-300 group-hover:translate-y-1",
                            }),
                          ],
                        }),
                      }),
                    ],
                  }),
                ],
              }),
              f.jsx("div", {
                className: "lg:w-1/2",
                children: f.jsxs("div", {
                  className: "relative group",
                  children: [
                    f.jsx("div", {
                      className:
                        "absolute -inset-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl blur opacity-25 group-hover:opacity-40 transition-opacity duration-500",
                    }),
                    f.jsx("div", {
                      className:
                        "relative rounded-2xl overflow-hidden shadow-2xl",
                      children: f.jsx("img", {
                        src: "main/1.png",
                        alt: "创梦星际",
                        className:
                          "w-full h-auto transform transition-transform duration-500 group-hover:scale-105",
                      }),
                    }),
                  ],
                }),
              }),
            ],
          }),
        }),
      ],
    }),
  Yf = ({ icon: e, title: t, description: n }) =>
    f.jsxs("div", {
      className: "relative group",
      children: [
        f.jsx("div", {
          className:
            "absolute -inset-2 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-xl blur opacity-0 group-hover:opacity-20 transition duration-500",
        }),
        f.jsxs("div", {
          className:
            "relative bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100/50 dark:border-gray-700/50 backdrop-blur-sm",
          children: [
            f.jsx("div", {
              className:
                "w-14 h-14 bg-gradient-to-br from-emerald-100 to-blue-100 dark:from-emerald-900/50 dark:to-blue-900/50 rounded-xl flex items-center justify-center text-emerald-600 dark:text-emerald-400 mb-6 group-hover:scale-110 transition-transform duration-300",
              children: e,
            }),
            f.jsx("h3", {
              className:
                "text-2xl font-bold text-gray-900 dark:text-white mb-4",
              children: t,
            }),
            f.jsx("p", {
              className: "text-lg text-gray-600 dark:text-gray-300",
              children: n,
            }),
          ],
        }),
      ],
    }),
  Gf = () => {
    const e = [
      {
        icon: f.jsx(Wf, { size: 28 }),
        title: "丰富资源",
        description: "流畅的下载速度，丰富的资源库，为您提供最优质的内容体验。",
      },
      {
        icon: f.jsx(Vf, { size: 28 }),
        title: "安全可靠",
        description:
          "始终提供安全无毒的文件，对用户数据进行严格的匿名化处理，保护您的隐私。",
      },
      {
        icon: f.jsx(If, { size: 28 }),
        title: "技术支持",
        description: "专业的技术团队，为您提供全方位的支持和解决方案。",
      },
      {
        icon: f.jsx(Df, { size: 28 }),
        title: "开发友好",
        description:
          "完善的API文档和开发工具，让开发者能够轻松集成和使用我们的服务。",
      },
    ];
    return f.jsxs("section", {
      id: "features",
      className:
        "py-24 md:py-32 bg-gray-50 dark:bg-gray-900 relative overflow-hidden",
      children: [
        f.jsxs("div", {
          className: "absolute inset-0",
          children: [
            f.jsx("div", {
              className:
                "absolute w-96 h-96 top-0 right-0 bg-emerald-500/10 dark:bg-emerald-500/5 rounded-full filter blur-3xl",
            }),
            f.jsx("div", {
              className:
                "absolute w-96 h-96 bottom-0 left-0 bg-blue-500/10 dark:bg-blue-500/5 rounded-full filter blur-3xl",
            }),
          ],
        }),
        f.jsx("div", {
          className: "absolute inset-0",
          style: {
            backgroundImage:
              "radial-gradient(circle at 1px 1px, rgba(0,0,0,0.05) 1px, transparent 0)",
            backgroundSize: "40px 40px",
          },
        }),
        f.jsxs("div", {
          className: "container mx-auto px-4 sm:px-6 lg:px-8 relative",
          children: [
            f.jsxs("div", {
              className: "text-center max-w-3xl mx-auto mb-16 md:mb-20",
              children: [
                f.jsx("div", {
                  className:
                    "inline-flex items-center px-4 py-2 bg-emerald-100/80 dark:bg-emerald-900/30 rounded-full text-emerald-700 dark:text-emerald-300 text-sm font-medium backdrop-blur-sm mb-4 border border-emerald-200/50 dark:border-emerald-700/30",
                  children: "✨ 我们的优势",
                }),
                f.jsx("h2", {
                  className:
                    "text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6",
                  children: "核心优势",
                }),
                f.jsx("p", {
                  className: "text-xl text-gray-600 dark:text-gray-300",
                  children:
                    "探索驱动我们前进的方向，为用户提供最优质的服务体验",
                }),
              ],
            }),
            f.jsx("div", {
              className:
                "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10",
              children: e.map((t, n) =>
                f.jsx(
                  Yf,
                  { icon: t.icon, title: t.title, description: t.description },
                  n,
                ),
              ),
            }),
            f.jsx("div", {
              className: "mt-20 text-center",
              children: f.jsxs("a", {
                href: "https://www.scmgzs.top",
                target: "_blank",
                rel: "noopener noreferrer",
                className:
                  "group relative inline-flex items-center justify-center px-8 py-4 overflow-hidden rounded-xl bg-gradient-to-r from-emerald-500 to-blue-600 text-white font-medium transition-all duration-300 transform hover:scale-105",
                children: [
                  f.jsx("div", {
                    className:
                      "absolute inset-0 w-full h-full bg-gradient-to-r from-emerald-600 to-blue-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300",
                  }),
                  f.jsx("span", {
                    className: "relative",
                    children: "了解更多功能",
                  }),
                ],
              }),
            }),
          ],
        }),
      ],
    });
  },
  Xf = () =>
    f.jsxs("section", {
      id: "about",
      className: "py-24 md:py-32 relative overflow-hidden",
      children: [
        f.jsx("div", {
          className:
            "absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(120,119,198,0.1),rgba(255,255,255,0))] dark:bg-[radial-gradient(circle_at_70%_50%,rgba(120,119,198,0.05),rgba(0,0,0,0))]",
        }),
        f.jsx("div", {
          className: "container mx-auto px-4 sm:px-6 lg:px-8 relative",
          children: f.jsxs("div", {
            className:
              "flex flex-col lg:flex-row items-center gap-16 lg:gap-20",
            children: [
              f.jsx("div", {
                className: "lg:w-1/2 order-2 lg:order-1",
                children: f.jsxs("div", {
                  className: "relative",
                  children: [
                    f.jsx("div", {
                      className:
                        "absolute -inset-4 bg-gradient-to-r from-blue-500 to-teal-500 rounded-3xl blur opacity-20 dark:opacity-40 animate-pulse",
                    }),
                    f.jsx("div", {
                      className: "relative",
                      children: f.jsx("img", {
                        src: "main/2.png",
                        alt: "我们的团队",
                        className:
                          "rounded-2xl shadow-2xl transform hover:scale-[1.02] transition-transform duration-300",
                      }),
                    }),
                  ],
                }),
              }),
              f.jsxs("div", {
                className: "lg:w-1/2 order-1 lg:order-2",
                children: [
                  f.jsx("div", {
                    className:
                      "inline-flex items-center px-4 py-2 bg-blue-100/80 dark:bg-blue-900/30 rounded-full text-blue-700 dark:text-blue-300 text-sm font-medium backdrop-blur-sm mb-6",
                    children: "👋 认识我们",
                  }),
                  f.jsxs("h2", {
                    className:
                      "text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-8",
                    children: [
                      "关于 ",
                      f.jsx("span", {
                        className:
                          "text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-500 dark:from-blue-400 dark:to-teal-400",
                        children: "我们",
                      }),
                    ],
                  }),
                  f.jsxs("div", {
                    className: "space-y-6",
                    children: [
                      f.jsx("p", {
                        className:
                          "text-xl text-gray-600 dark:text-gray-300 leading-relaxed",
                        children:
                          "一位初中生的博客，会python，lua，html等语言。热爱编程，致力于为用户创造价值。",
                      }),
                      f.jsx("p", {
                        className:
                          "text-xl text-gray-600 dark:text-gray-300 leading-relaxed",
                        children:
                          "创梦星际成立于2024年，我们一直致力于迷你世界开发与资源下载，为用户提供更便捷，更安全的文件服务。",
                      }),
                    ],
                  }),
                  f.jsxs("div", {
                    className: "grid grid-cols-2 gap-6 mt-12 mb-10",
                    children: [
                      f.jsxs("div", {
                        className:
                          "bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700",
                        children: [
                          f.jsx("div", {
                            className:
                              "text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-500 dark:from-blue-400 dark:to-teal-400",
                            children: "10万+",
                          }),
                          f.jsx("div", {
                            className: "text-gray-600 dark:text-gray-300 mt-2",
                            children: "访问人数",
                          }),
                        ],
                      }),
                      f.jsxs("div", {
                        className:
                          "bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700",
                        children: [
                          f.jsx("div", {
                            className:
                              "text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-500 dark:from-blue-400 dark:to-teal-400",
                            children: "15+",
                          }),
                          f.jsx("div", {
                            className: "text-gray-600 dark:text-gray-300 mt-2",
                            children: "提供资源",
                          }),
                        ],
                      }),
                      f.jsxs("div", {
                        className:
                          "bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700",
                        children: [
                          f.jsx("div", {
                            className:
                              "text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-500 dark:from-blue-400 dark:to-teal-400",
                            children: "中国",
                          }),
                          f.jsx("div", {
                            className: "text-gray-600 dark:text-gray-300 mt-2",
                            children: "服务国家",
                          }),
                        ],
                      }),
                      f.jsxs("div", {
                        className:
                          "bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700",
                        children: [
                          f.jsx("div", {
                            className:
                              "text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-500 dark:from-blue-400 dark:to-teal-400",
                            children: "98%",
                          }),
                          f.jsx("div", {
                            className: "text-gray-600 dark:text-gray-300 mt-2",
                            children: "客户满意度",
                          }),
                        ],
                      }),
                    ],
                  }),
                  f.jsx("a", {
                    href: "https://www.scmgzs.top",
                    target: "_blank",
                    rel: "noopener noreferrer",
                    className:
                      "inline-flex items-center justify-center px-8 py-4 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-200 font-medium rounded-xl border border-gray-200 dark:border-gray-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl backdrop-blur-sm",
                    children: "了解更多详情",
                  }),
                ],
              }),
            ],
          }),
        }),
      ],
    }),
  Zf = () =>
    f.jsxs("section", {
      id: "contact",
      className: "py-24 bg-white dark:bg-gray-900 relative overflow-hidden",
      children: [
        f.jsx("div", {
          className:
            "absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(59,130,246,0.1),rgba(255,255,255,0))] dark:bg-[radial-gradient(circle_at_30%_50%,rgba(59,130,246,0.05),rgba(0,0,0,0))]",
        }),
        f.jsxs("div", {
          className: "container mx-auto px-4 sm:px-6 lg:px-8 relative",
          children: [
            f.jsxs("div", {
              className: "text-center max-w-3xl mx-auto mb-16",
              children: [
                f.jsx("div", {
                  className:
                    "inline-flex items-center px-4 py-2 bg-blue-100/80 dark:bg-blue-900/30 rounded-full text-blue-700 dark:text-blue-300 text-sm font-medium backdrop-blur-sm mb-4",
                  children: "📞 联系方式",
                }),
                f.jsx("h2", {
                  className:
                    "text-4xl font-bold text-gray-900 dark:text-white mb-6",
                  children: "与我联系",
                }),
                f.jsx("p", {
                  className: "text-xl text-gray-600 dark:text-gray-300",
                  children: "随时欢迎与我交流，期待您的消息",
                }),
              ],
            }),
            f.jsxs("div", {
              className:
                "grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto",
              children: [
                f.jsxs("div", {
                  className: "group relative",
                  children: [
                    f.jsx("div", {
                      className:
                        "absolute -inset-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl blur opacity-0 group-hover:opacity-20 transition duration-500",
                    }),
                    f.jsxs("a", {
                      href: "https://qm.qq.com/q/mf17BazQpW",
                      target: "_blank",
                      rel: "noopener noreferrer",
                      className:
                        "relative block bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-all duration-300",
                      children: [
                        f.jsx("div", {
                          className:
                            "w-14 h-14 bg-blue-100 dark:bg-blue-900/50 rounded-xl flex items-center justify-center text-blue-600 dark:text-blue-400 mb-6",
                          children: f.jsx($f, { size: 28 }),
                        }),
                        f.jsx("h3", {
                          className:
                            "text-2xl font-bold text-gray-900 dark:text-white mb-4",
                          children: "QQ",
                        }),
                        f.jsx("p", {
                          className:
                            "text-lg text-blue-600 dark:text-blue-400 font-medium",
                          children: "2196634956",
                        }),
                      ],
                    }),
                  ],
                }),
                f.jsxs("div", {
                  className: "group relative",
                  children: [
                    f.jsx("div", {
                      className:
                        "absolute -inset-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl blur opacity-0 group-hover:opacity-20 transition duration-500",
                    }),
                    f.jsxs("a", {
                      href: "mailto:2196634956@qq.com",
                      className:
                        "relative block bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-all duration-300",
                      children: [
                        f.jsx("div", {
                          className:
                            "w-14 h-14 bg-blue-100 dark:bg-blue-900/50 rounded-xl flex items-center justify-center text-blue-600 dark:text-blue-400 mb-6",
                          children: f.jsx(Ff, { size: 28 }),
                        }),
                        f.jsx("h3", {
                          className:
                            "text-2xl font-bold text-gray-900 dark:text-white mb-4",
                          children: "邮箱",
                        }),
                        f.jsx("p", {
                          className:
                            "text-lg text-blue-600 dark:text-blue-400 font-medium",
                          children: "2196634956@qq.com",
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
      ],
    }),
  Jf = () =>
    f.jsxs("section", {
      className: "py-24 bg-gray-50 dark:bg-gray-800 relative overflow-hidden",
      children: [
        f.jsx("div", {
          className:
            "absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(99,102,241,0.1),rgba(255,255,255,0))] dark:bg-[radial-gradient(circle_at_50%_50%,rgba(99,102,241,0.05),rgba(0,0,0,0))]",
        }),
        f.jsx("div", {
          className: "container mx-auto px-4 sm:px-6 lg:px-8 relative",
          children: f.jsx("div", {
            className: "max-w-4xl mx-auto",
            children: f.jsxs("div", {
              className:
                "bg-white dark:bg-gray-900 rounded-2xl shadow-xl overflow-hidden",
              children: [
                f.jsx("div", {
                  className: "p-8 md:p-12",
                  children: f.jsxs("div", {
                    className:
                      "flex flex-col md:flex-row items-center gap-8 md:gap-12",
                    children: [
                      f.jsx("div", {
                        className:
                          "w-24 h-24 md:w-32 md:h-32 bg-gray-100 dark:bg-gray-800 rounded-xl flex items-center justify-center",
                        children: f.jsx(Hu, {
                          className:
                            "w-12 h-12 md:w-16 md:h-16 text-gray-900 dark:text-white",
                        }),
                      }),
                      f.jsxs("div", {
                        className: "flex-1 text-center md:text-left",
                        children: [
                          f.jsx("h2", {
                            className:
                              "text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4",
                            children: "在 GitHub 上关注我",
                          }),
                          f.jsx("p", {
                            className:
                              "text-xl text-gray-600 dark:text-gray-300 mb-8",
                            children:
                              "欢迎访问我的 Github 项目，让我们一起将他变的更好",
                          }),
                          f.jsxs("a", {
                            href: "https://github.com/shisanwen-gmail/cmxj",
                            target: "_blank",
                            rel: "noopener noreferrer",
                            className:
                              "inline-flex items-center justify-center px-8 py-4 bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-medium rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg gap-2",
                            children: [
                              f.jsx(Hu, { size: 20 }),
                              f.jsx("span", { children: "访问 GitHub" }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
                f.jsx("div", {
                  className:
                    "px-8 md:px-12 py-6 bg-gray-50 dark:bg-gray-800 border-t border-gray-100 dark:border-gray-700",
                  children: f.jsx("p", {
                    className:
                      "text-gray-600 dark:text-gray-300 text-center md:text-left",
                    children: "GitHub: @是史三问呀",
                  }),
                }),
              ],
            }),
          }),
        }),
      ],
    }),
  qf = () =>
    f.jsxs("footer", {
      className: "bg-gray-900 text-white py-16 relative overflow-hidden",
      children: [
        f.jsx("div", {
          className:
            "absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(120,119,198,0.1),rgba(0,0,0,0))]",
        }),
        f.jsxs("div", {
          className: "container mx-auto px-4 sm:px-6 lg:px-8 relative",
          children: [
            f.jsxs("div", {
              className: "text-center max-w-2xl mx-auto",
              children: [
                f.jsx("div", {
                  className:
                    "font-bold text-3xl text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-400 mb-6",
                  children: "创梦星际",
                }),
                f.jsx("p", {
                  className: "text-xl text-gray-300 mb-8 max-w-md mx-auto",
                  children: "用技术来打造新的世界，为用户创造价值",
                }),
                f.jsx("a", {
                  href: "https://www.scmgzs.top",
                  target: "_blank",
                  rel: "noopener noreferrer",
                  className:
                    "inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-medium rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl",
                  children: "访问官网",
                }),
              ],
            }),
            f.jsx("div", {
              className: "mt-16 pt-8 border-t border-gray-800 text-center",
              children: f.jsxs("p", {
                className: "text-gray-400",
                children: [
                  "© ",
                  new Date().getFullYear(),
                  " 创梦星际. 保留所有权利.",
                ],
              }),
            }),
          ],
        }),
      ],
    }),
  bf = () => {
    const [e, t] = Ee.useState(
      localStorage.getItem("darkMode") === "true" ||
        (window.matchMedia &&
          window.matchMedia("(prefers-color-scheme: dark)").matches),
    );
    return (
      Ee.useEffect(() => {
        const r = window.document.documentElement;
        e ? r.classList.add("dark") : r.classList.remove("dark"),
          localStorage.setItem("darkMode", e.toString());
      }, [e]),
      {
        darkMode: e,
        toggleDarkMode: () => {
          t((r) => !r);
        },
      }
    );
  };
function ep() {
  const { darkMode: e, toggleDarkMode: t } = bf();
  return (
    Ee.useEffect(() => {    
      document.title = "创梦星际";
    }, []),
    f.jsxs("div", {
      className:
        "min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300",
      children: [
        f.jsx(Qf, { darkMode: e, toggleDarkMode: t }),
        f.jsxs("main", {
          children: [
            f.jsx(Kf, {}),
            f.jsx(Gf, {}),
            f.jsx(Xf, {}),
            f.jsx(Zf, {}),
            f.jsx(Jf, {}),
          ],
        }),
        f.jsx(qf, {}),
      ],
    })
  );
}
nc(document.getElementById("root")).render(
  f.jsx(Ee.StrictMode, { children: f.jsx(ep, {}) }),
);