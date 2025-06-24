(function() {
    "use strict";
    var p = Object.defineProperty,
        u = Object.getOwnPropertySymbols,
        y = Object.prototype.hasOwnProperty,
        P = Object.prototype.propertyIsEnumerable,
        f = (t, r, e) => r in t ? p(t, r, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: e
        }) : t[r] = e,
        c = (t, r) => {
            for (var e in r || (r = {})) y.call(r, e) && f(t, e, r[e]);
            if (u)
                for (var e of u(r)) P.call(r, e) && f(t, e, r[e]);
            return t
        };
    (() => {
        let t = !1;
        return () => {
            if (!t) {
                const r = document.querySelectorAll("[data-add-query-params]");
                if (r.length) {
                    const e = a => {
                            const n = document.createElement("div");
                            return n.innerText = a, n.innerHTML
                        },
                        m = a => {
                            const n = {},
                                i = a.split("?");
                            return (i[1] ? i[1].split("&") : []).forEach(l => {
                                const [s, o] = l.split("=");
                                s && o && (n[decodeURIComponent(s)] = e(decodeURIComponent(o)))
                            }), n
                        },
                        d = m(window.location.search);
                    r.forEach(a => {
                        const n = a.getAttribute("href"),
                            i = m(n),
                            l = a.dataset.addQueryParams === "overwrite" ? c(c({}, d), i) : c(c({}, i), d),
                            s = new URL(n, window.location.origin);
                        Object.keys(l).forEach(o => {
                            s.searchParams.set(o, l[o])
                        }), a.setAttribute("href", s.toString())
                    })
                }
                t = !0
            }
        }
    })()()
})();