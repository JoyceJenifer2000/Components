(function() {
    "use strict";
    (function() {
        const L = (o, t) => {
            o.filter(i => i.getAttribute("data-component-load") !== "done").forEach(i => {
                i.setAttribute("data-component-load", "done"), new t(i, i == null ? void 0 : i.dataset)
            })
        };
        var S = (o, t) => {
            const i = () => {
                var n;
                const s = [].slice.call(document.querySelectorAll(`[data-component-type="${o}"`));
                L(s, t);
                try {
                    const {
                        MutationObserver: c
                    } = (n = window != null ? window : window.WebKitMutationObserver) != null ? n : window.MozMutationObserver, a = new c(d => {
                        d.forEach(E => {
                            Array.from(E.addedNodes).filter(h => h.querySelectorAll != null).forEach(h => {
                                const u = Array.from(h.querySelectorAll(`[data-component-type="${o}"`));
                                L(u, t)
                            })
                        })
                    }), l = document.querySelector("body");
                    a.observe(l, {
                        subtree: !0,
                        childList: !0,
                        characterData: !0
                    })
                } catch (c) {
                    console.error(c)
                }
            };
            document.readyState !== "loading" ? i() : document.addEventListener("DOMContentLoaded", i)
        };
        class C {
            constructor({
                element: t,
                props: i
            }) {
                var n, s;
                this.element = t, this.props = (s = i != null ? i : (n = this == null ? void 0 : this.element) == null ? void 0 : n.dataset) != null ? s : {}, this.element.setAttribute("data-component-load", "done"), this.registerEventListeners(), this.init()
            }
            registerEventListeners() {}
            init() {}
        }
        var N = C;
        const Ee = {
            GLOBAL: {
                ESCAPE_KEYPRESS: "Escape keypress"
            },
            ACCORDION: {
                ITEM: {
                    COLLAPSING: "Accordion item collapsing",
                    EXPANDING: "Accordion item expanding"
                },
                ITEM_BUTTON: {
                    CLICK: "Accordion item button click"
                }
            },
            BREADCRUMBS: {
                ELLIPSIS: {
                    CLICK: "Breadcrumbs ellipsis click"
                }
            },
            CHIP_TAB_ITEM: {
                CLICK: "Chip tab item click"
            },
            HEADER: {
                ESCAPE_KEYPRESS: "Header escape keypress",
                OVERLAY_CLICK: "Header overlay click",
                MENU: {
                    COLLAPSING: "Header menu collapsing",
                    EXPANDING: "Header menu expanding"
                },
                BUTTON: {
                    SELECT: "Header navigation button selected",
                    DESELECT: "Header navigation button deselected"
                },
                BACK_BUTTON: {
                    CLICK: "Header back button click"
                },
                NAVIGATION_LIST: {
                    SHOWING_SUB_LISTS: "Header navigation list showing sub-lists",
                    HIDING_SUB_LISTS: "Header navigation list hiding sub-lists"
                },
                SEGMENT_BUTTON: {
                    EXPANDING: "Header segment button expanding",
                    COLLAPSING: "Header segment button collapsing"
                },
                SEGMENT_CLOSE_BUTTON: {
                    CLICK: "Header segment close button click"
                },
                SEGMENT_POPUP_CONTAINER: {
                    COLLAPSING: "Header segment popup container collapsing",
                    EXPANDING: "Header segment popup container expanding",
                    OUTSIDE_CLICK: "Header segment popup container outside click"
                },
                SEGMENT_POPUP: {
                    USER_NAVIGATING: "Header segment popup user navigating"
                },
                SEGMENT_POPUP_BODY: {
                    USER_NAVIGATING_AWAY: "Header segment popup body user navigating away",
                    USER_CLICKING_AWAY: "Header segment popup body user clicking away",
                    ESCAPE_KEYPRESS: "Header segment popup body escape keypress"
                }
            },
            MODAL: {
                OPENING: "Modal opening",
                CLOSING: "Modal closing",
                OVERLAY_CLICK: "Modal overlay click",
                OPEN_BUTTON_CLICK: "Modal open button click",
                CLOSE_BUTTON_CLICK: "Modal dismiss button click"
            },
            STICKY_FOOTER: {
                BOUNDARY_TOP: {
                    REGISTERED: "Sticky footer boundary top registered",
                    INTERSECTING: "Sticky footer boundary top intersecting",
                    NOT_INTERSECTING: "Sticky footer boundary top not intersecting"
                },
                BOUNDARY_BOTTOM: {
                    SCROLLED_PAST: "Sticky footer boundary bottom scrolled past",
                    NOT_SCROLLED_PAST: "Sticky footer boundary bottom not scrolled past"
                },
                BODY: {
                    SHOULD_STICK: "Sticky footer body should stick",
                    SHOULD_UNSTICK: "Sticky footer body should unstick"
                }
            },
            TAB: {
                SELECT_CHANGE: "Tab select value changing",
                TAB_CHANGE: "Tab value changing",
                TAB_FOCUS_SHIFT: "Tab focus shifting"
            },
            TRANSCRIPT: {
                COLLAPSING: "Transcript collapsing",
                EXPANDING: "Transcript expanding",
                BUTTON_CLICK: "Transcript button click"
            }
        };
        var ue = null,
            O = {
                lg: 60,
                md: 40,
                sm: 30,
                xs: 20,
                xxs: 0
            };
        const g = new Map;
        var f = o => {
                if (!(o instanceof Element)) return null;
                if (g.has(o)) return g.get(o);
                const t = getComputedStyle(o, null),
                    i = Number.parseFloat(t.fontSize);
                return g.set(o, i), i
            },
            P = o => {
                const t = ["lg", "md", "sm", "xs", "xxs"];
                for (const i of t)
                    if (o > O[i]) return i
            },
            I = () => {
                const o = document.documentElement,
                    t = f(o),
                    i = o.clientWidth;
                if (!Number.isFinite(t) || !Number.isFinite(i)) return null;
                const n = i / t;
                return P(n)
            };
        const v = Object.values({
            a: "a[href]",
            area: "area[href]",
            button: "button:not([disabled])",
            custom: "[tabindex]:not([tabindex='-1'])",
            input: "input:not([disabled])",
            object: "object:not([disabled])",
            select: "select:not([disabled])",
            textarea: "textarea:not([disabled])"
        }).toString();
        var B = (o, t = {}) => {
            var i, n, s;
            const a = [...(s = (n = o == null ? void 0 : o.querySelectorAll) == null ? void 0 : n.call(o, (i = t.selector) != null ? i : v)) != null ? s : []].filter(l => t.includePositionFixed && window.getComputedStyle(l).display === "none" ? !1 : l.offsetParent !== null);
            return {
                list: a,
                first: a[0],
                last: a[a.length - 1]
            }
        };
        class G {
            constructor(t) {
                this.delegated = t
            }
            handleEvent(t) {
                this.delegated["on" + t.type](t)
            }
        }
        var A = G,
            m = o => "key" in o ? o.key === "Escape" || o.key === "Esc" : o.keyCode === 27,
            U = o => "key" in o ? o.key === "Tab" : o.keyCode === 9;
        class y {
            constructor() {
                this.observers = []
            }
            subscribe(t) {
                typeof t == "function" && this.observers.push(t)
            }
            unsubscribe(t) {
                typeof t == "function" && (this.observers = this.observers.filter(i => i !== t))
            }
            notify(t) {
                this.observers.forEach(i => i(t))
            }
        }
        var k = y,
            r = {
                getObservable: (() => {
                    let o;
                    return () => (o || (o = new k), o)
                })()
            }.getObservable(),
            b = ({
                data: o,
                elementId: t,
                elementSuffix: i,
                siblingSuffix: n
            }) => {
                const {
                    elementId: s
                } = o != null ? o : {}, c = s.slice(0, s.length - n.length), a = t.slice(0, t.length - i.length);
                return c === a
            },
            e = {
                HEADER: {
                    ESCAPE_KEYPRESS: "Header escape keypress",
                    OVERLAY_CLICK: "Header overlay click"
                },
                MENU: {
                    COLLAPSING: "Menu collapsing",
                    EXPANDING: "Menu expanding"
                },
                BUTTON: {
                    SELECT: "Navigation button selected",
                    DESELECT: "Navigation button deselected"
                },
                BACK_BUTTON: {
                    CLICK: "Back button click"
                },
                NAVIGATION_LIST: {
                    SHOWING_SUB_LISTS: "Navigation list showing sub-lists",
                    HIDING_SUB_LISTS: "Navigation list hiding sub-lists"
                },
                SEGMENT_BUTTON: {
                    EXPANDING: "Segment button expanding",
                    COLLAPSING: "Segment button collapsing"
                },
                SEGMENT_CLOSE_BUTTON: {
                    CLICK: "Segment close button click"
                },
                SEGMENT_POPUP_CONTAINER: {
                    COLLAPSING: "Segment popup container collapsing",
                    EXPANDING: "Segment popup container expanding",
                    OUTSIDE_CLICK: "Segment popup container outside click"
                },
                SEGMENT_POPUP: {
                    USER_NAVIGATING: "Segment popup user navigating"
                },
                SEGMENT_POPUP_BODY: {
                    USER_NAVIGATING_AWAY: "Segment popup body user navigating away",
                    USER_CLICKING_AWAY: "Segment popup body user clicking away",
                    ESCAPE_KEYPRESS: "Segment popup body escape keypress"
                }
            },
            T = {
                HEADER: {
                    IS_EXPANDED: "c-header--is-expanded"
                },
                LIST: {
                    SHOW_SUBLISTS: "c-header-nav__list--show-sublists"
                },
                LIST_BODY: {
                    IS_VISIBLE: "c-header-nav__list-body--is-visible"
                },
                BODY: {
                    IS_VISIBLE: "c-header-nav__list-body--is-visible"
                },
                MENU: {
                    IS_ACTIVE: "c-header-menu--is-active"
                },
                LINK: {
                    IS_ACTIVE: "c-header-link--is-active"
                },
                SEGMENT_POPUP_CONTAINER: {
                    IS_VISIBLE: "c-header__control-content--is-visible"
                },
                SEGMENT_BUTTON: {
                    IS_EXPANDED: "c-dropdown-button--is-expanded"
                },
                SEGMENT_BUTTON_ICON: {
                    IS_ROTATED: "c-icon--rotate-180"
                }
            };
        class D extends N {
            constructor(t, i) {
                super({
                    element: t,
                    props: i
                }), this.expand = () => {
                    this.element.classList.add(T.HEADER.IS_EXPANDED), this.expanded = !0
                }, this.collapse = n => {
                    n != null && r.notify({
                        actionType: n
                    }), this.element.classList.remove(T.HEADER.IS_EXPANDED), this.expanded = !1
                }, this.actionHandler = n => {
                    const {
                        actionType: s
                    } = n, c = [e.MENU.EXPANDING, e.BUTTON.SELECT], a = [e.MENU.COLLAPSING, e.SEGMENT_BUTTON.EXPANDING], l = s === e.BUTTON.DESELECT, d = c.includes(s), E = a.includes(s);
                    if (d && this.expand(), E && this.collapse(), l && this.expanded) {
                        const p = ["sm", "md"],
                            h = I();
                        p.includes(h) || this.collapse()
                    }
                }, this.init()
            }
            registerEventListeners() {
                super.registerEventListeners(), this.element.addEventListener("keydown", new A(this)), this.element.addEventListener("click", new A(this))
            }
            onclick(t) {
                const {
                    target: i,
                    currentTarget: n
                } = t;
                i.isSameNode(n) && this.collapse(e.HEADER.OVERLAY_CLICK)
            }
            onkeydown(t) {
                const i = m(t),
                    n = U(t);
                if (i && this.expanded && this.collapse(e.HEADER.ESCAPE_KEYPRESS), n) {
                    const {
                        first: s,
                        last: c
                    } = B(this.element);
                    if (this.expanded) {
                        const {
                            activeElement: a
                        } = document, l = !t.shiftKey && a === c, d = t.shiftKey && a === s;
                        l && (t.preventDefault(), s.focus()), d && (t.preventDefault(), c.focus())
                    }
                }
            }
            init() {
                r.subscribe(this.actionHandler)
            }
        }
        var x = D;
        class H extends N {
            constructor(t, i) {
                super({
                    element: t,
                    props: i
                }), this.activate = () => {
                    this.element.classList.add(T.LINK.IS_ACTIVE), this.element.setAttribute("aria-expanded", "true"), this.isActive = !0
                }, this.deactivate = () => {
                    this.element.classList.remove(T.LINK.IS_ACTIVE), this.element.setAttribute("aria-expanded", "false"), this.isActive = !1
                }, this.enable = () => {
                    this.element.removeAttribute("disabled")
                }, this.disable = () => {
                    this.element.setAttribute("disabled", "")
                }, this.toggleState = () => {
                    this.isActive ? this.deactivate() : this.activate()
                }, this.actionHandler = n => {
                    const {
                        actionType: s
                    } = n, c = s === e.BUTTON.SELECT, a = [e.NAVIGATION_LIST.HIDING_SUB_LISTS], l = [e.NAVIGATION_LIST.SHOWING_SUB_LISTS], d = [e.HEADER.ESCAPE_KEYPRESS, e.HEADER.OVERLAY_CLICK, e.MENU.COLLAPSING, e.BACK_BUTTON.CLICK, e.SEGMENT_BUTTON.EXPANDING], E = a.includes(s), p = l.includes(s), h = d.includes(s);
                    if (E) {
                        const u = I();
                        this.ignoredBreakpointList.includes(u) || this.enable()
                    }
                    if (p) {
                        const u = I();
                        this.ignoredBreakpointList.includes(u) || this.disable()
                    }
                    if (this.isActive && s === e.BACK_BUTTON.CLICK) {
                        const u = I();
                        this.ignoredBreakpointList.includes(u) || (this.enable(), this.element.focus())
                    }
                    if (this.isActive && s === e.HEADER.ESCAPE_KEYPRESS) {
                        const u = ["lg"],
                            _ = I();
                        u.includes(_) && this.element.focus()
                    }
                    if (h && this.deactivate(), this.isActive && c) {
                        const {
                            elementId: u
                        } = n != null ? n : {};
                        u === this.element.id || this.deactivate()
                    }
                }, this.isActive = !1, this.ignoredBreakpointList = ["lg", "md"], this.init()
            }
            registerEventListeners() {
                super.registerEventListeners(), this.element.addEventListener("click", new A(this))
            }
            onclick(t) {
                const i = {
                    elementId: this.element.id,
                    actionType: this.isActive ? e.BUTTON.DESELECT : e.BUTTON.SELECT
                };
                r.notify(i), this.toggleState()
            }
            init() {
                super.init(), r.subscribe(this.actionHandler)
            }
        }
        var M = H;
        class R extends N {
            constructor(t, i) {
                super({
                    element: t,
                    props: i
                }), this.expand = () => {
                    this.element.classList.add(T.LIST_BODY.IS_VISIBLE), this.element.setAttribute("aria-expanded", "true"), this.element.style.removeProperty("display")
                }, this.collapse = () => {
                    this.element.classList.remove(T.LIST_BODY.IS_VISIBLE), this.element.setAttribute("aria-expanded", "false"), this.element.style.setProperty("display", "none")
                }, this.actionHandler = n => {
                    const {
                        actionType: s
                    } = n, c = s === e.BUTTON.SELECT, a = s === e.BACK_BUTTON.CLICK;
                    [e.HEADER.ESCAPE_KEYPRESS, e.HEADER.OVERLAY_CLICK, e.MENU.COLLAPSING, e.BUTTON.DESELECT, e.SEGMENT_BUTTON.EXPANDING].includes(s) && this.collapse(), !(!c && !a) && (c && (b({
                        data: n,
                        elementId: this.element.id,
                        elementSuffix: "-body",
                        siblingSuffix: "-button"
                    }) ? this.expand() : this.collapse()), a && b({
                        data: n,
                        elementId: this.element.id,
                        elementSuffix: "-body",
                        siblingSuffix: "-back-button"
                    }) && this.collapse())
                }, this.init()
            }
            init() {
                super.init(), r.subscribe(this.actionHandler)
            }
        }
        var K = R;
        class Y extends N {
            constructor(t, i) {
                super({
                    element: t,
                    props: i
                }), this.focusElement = () => {
                    this.element.focus()
                }, this.actionHandler = n => {
                    const {
                        actionType: s
                    } = n;
                    if (![e.BUTTON.SELECT].includes(s)) return;
                    const l = "-title",
                        d = this.element.id,
                        E = d.slice(0, d.length - l.length),
                        {
                            elementId: p
                        } = n != null ? n : {},
                        h = "-button",
                        u = p.slice(0, p.length - h.length),
                        _ = "-back-button",
                        re = p.slice(0, p.length - _.length);
                    (s === e.BUTTON.SELECT ? u === E : re === E) && setTimeout(this.focusElement, 100)
                }, this.init()
            }
            init() {
                super.init(), r.subscribe(this.actionHandler)
            }
        }
        var w = Y;
        class V extends N {
            constructor(t, i) {
                super({
                    element: t,
                    props: i
                }), this.expand = () => {
                    this.element.classList.add(T.LIST.SHOW_SUBLISTS), r.notify({
                        actionType: e.NAVIGATION_LIST.SHOWING_SUB_LISTS
                    }), this.expanded = !0
                }, this.collapse = () => {
                    this.element.classList.remove(T.LIST.SHOW_SUBLISTS), r.notify({
                        actionType: e.NAVIGATION_LIST.HIDING_SUB_LISTS
                    }), this.expanded = !1
                }, this.actionHandler = n => {
                    const s = [e.MENU.EXPANDING],
                        c = [e.BUTTON.SELECT],
                        a = [e.HEADER.OVERLAY_CLICK, e.SEGMENT_BUTTON.EXPANDING, e.MENU.COLLAPSING, e.BACK_BUTTON.CLICK, e.BUTTON.DESELECT],
                        {
                            actionType: l
                        } = n,
                        d = a.includes(l),
                        E = c.includes(l),
                        p = s.includes(l);
                    E && this.expand(), d && this.collapse(), p && this.element.focus()
                }, this.expanded = !1, this.init()
            }
            registerEventListeners() {
                super.registerEventListeners(), this.element.addEventListener("keydown", new A(this))
            }
            onkeydown(t) {
                m(t) && this.collapse()
            }
            init() {
                super.init(), r.subscribe(this.actionHandler)
            }
        }
        var X = V;
        class W extends N {
            constructor(t, i) {
                super({
                    element: t,
                    props: i
                }), this.enable = () => {
                    this.element.removeAttribute("disabled")
                }, this.disable = () => {
                    this.element.setAttribute("disabled", "")
                }, this.actionHandler = n => {
                    const {
                        actionType: s
                    } = n, c = [e.NAVIGATION_LIST.SHOWING_SUB_LISTS], a = [e.NAVIGATION_LIST.HIDING_SUB_LISTS], l = c.includes(s), d = a.includes(s);
                    if (l) {
                        const E = I();
                        this.ignoredBreakpointList.includes(E) || this.enable()
                    }
                    if (d) {
                        const E = I();
                        this.ignoredBreakpointList.includes(E) || this.disable()
                    }
                }, this.ignoredBreakpointList = ["lg", "md"], this.init()
            }
            registerEventListeners() {
                super.registerEventListeners(), this.element.addEventListener("click", new A(this))
            }
            onclick(t) {
                const i = {
                    elementId: this.element.id,
                    actionType: e.BACK_BUTTON.CLICK
                };
                r.notify(i)
            }
            init() {
                super.init(), r.subscribe(this.actionHandler)
            }
        }
        var F = W;
        class z extends N {
            constructor(t, i) {
                super({
                    element: t,
                    props: i
                }), this.expand = () => {
                    this.element.setAttribute("aria-expanded", "true"), this.label && (this.label.innerText = this.labelTextHide), this.expanded = !0
                }, this.collapse = () => {
                    this.element.setAttribute("aria-expanded", "false"), this.label && (this.label.innerText = this.labelTextShow), this.expanded = !1
                }, this.toggleState = () => {
                    this.expanded ? this.collapse() : this.expand()
                }, this.actionHandler = n => {
                    const {
                        actionType: s
                    } = n, c = [e.BUTTON.SELECT], a = [e.HEADER.ESCAPE_KEYPRESS], l = [e.HEADER.ESCAPE_KEYPRESS, e.HEADER.OVERLAY_CLICK, e.SEGMENT_BUTTON.EXPANDING], d = s === e.BUTTON.DESELECT, E = a.includes(s), p = c.includes(s), h = l.includes(s);
                    if (E && this.expanded) {
                        const u = ["lg"],
                            _ = I();
                        u.includes(_) || this.element.focus()
                    }
                    if (h && this.collapse(), p && this.expand(), d && this.expanded) {
                        const u = ["sm", "md"],
                            _ = I();
                        u.includes(_) || this.collapse()
                    }
                }, this.labelTextShow = this.props.labelTextShow, this.labelTextHide = this.props.labelTextHide, this.label = null, this.expanded = !1, this.init()
            }
            registerEventListeners() {
                super.registerEventListeners(), this.element.addEventListener("click", new A(this))
            }
            onclick(t) {
                const i = this.expanded ? e.MENU.COLLAPSING : e.MENU.EXPANDING;
                r.notify({
                    actionType: i
                }), this.toggleState()
            }
            init() {
                super.init(), r.subscribe(this.actionHandler), this.label = this.element.querySelector("[data-navigation-menu-button-label]")
            }
        }
        var q = z;
        class j extends N {
            constructor(t, i) {
                super({
                    element: t,
                    props: i
                }), this.activate = () => {
                    this.element.classList.add(T.MENU.IS_ACTIVE), this.isActive = !0
                }, this.deactivate = () => {
                    this.element.classList.remove(T.MENU.IS_ACTIVE), this.isActive = !1
                }, this.actionHandler = n => {
                    const {
                        actionType: s
                    } = n, c = [e.MENU.EXPANDING, e.BUTTON.SELECT], a = [e.MENU.COLLAPSING, e.HEADER.ESCAPE_KEYPRESS, e.HEADER.OVERLAY_CLICK, e.SEGMENT_BUTTON.EXPANDING], l = c.includes(s), d = a.includes(s), E = s === e.BUTTON.DESELECT;
                    if (l && this.activate(), d && this.deactivate(), E && this.isActive) {
                        const p = ["sm", "md"],
                            h = I();
                        p.includes(h) || this.deactivate()
                    }
                }, this.isActive = !1, this.init()
            }
            init() {
                super.init(), r.subscribe(this.actionHandler)
            }
        }
        var $ = j;
        class J extends N {
            constructor(t, i) {
                super({
                    element: t,
                    props: i
                }), this.actionHandler = n => {
                    const {
                        actionType: s
                    } = n, a = [e.SEGMENT_POPUP_CONTAINER.EXPANDING].includes(s);
                    this.isFirstItem && a && this.element.focus()
                }, this.isFirstItem = this.props.popUpNavFirstItem, this.init()
            }
            init() {
                super.init(), r.subscribe(this.actionHandler)
            }
        }
        var Q = J;
        class Z extends N {
            constructor(t, i) {
                super({
                    element: t,
                    props: i
                }), this.expand = () => {
                    this.expanded = !0, r.notify({
                        actionType: e.SEGMENT_BUTTON.EXPANDING
                    })
                }, this.collapse = n => {
                    n != null && r.notify({
                        actionType: n
                    }), this.expanded = !1
                }, this.toggle = () => {
                    this.expanded ? this.collapse(e.SEGMENT_BUTTON.COLLAPSING) : this.expand()
                }, this.actionHandler = n => {
                    const {
                        actionType: s
                    } = n, c = [e.SEGMENT_POPUP_CONTAINER.COLLAPSING], l = [e.SEGMENT_POPUP_BODY.USER_NAVIGATING_AWAY, e.SEGMENT_POPUP_BODY.ESCAPE_KEYPRESS].includes(s), d = c.includes(s);
                    l && this.expanded && this.element.focus(), d && this.collapse()
                }, this.expanded = !1, this.init()
            }
            registerEventListeners() {
                super.registerEventListeners(), this.element.addEventListener("click", new A(this))
            }
            onclick(t) {
                this.toggle()
            }
            init() {
                super.init(), r.subscribe(this.actionHandler)
            }
        }
        var ee = Z;
        class te extends N {
            constructor(t, i) {
                super({
                    element: t,
                    props: i
                }), this.rotate = () => {
                    this.element.classList.add(T.SEGMENT_BUTTON_ICON.IS_ROTATED)
                }, this.unRotate = () => {
                    this.element.classList.remove(T.SEGMENT_BUTTON_ICON.IS_ROTATED)
                }, this.actionHandler = n => {
                    const {
                        actionType: s
                    } = n, c = [e.SEGMENT_POPUP_CONTAINER.EXPANDING], a = [e.SEGMENT_POPUP_CONTAINER.COLLAPSING], l = c.includes(s), d = a.includes(s);
                    l && this.rotate(), d && this.unRotate()
                }, this.init()
            }
            init() {
                super.init(), r.subscribe(this.actionHandler)
            }
        }
        var ie = te;
        class se extends N {
            constructor(t, i) {
                super({
                    element: t,
                    props: i
                }), this.init()
            }
            registerEventListeners() {
                super.registerEventListeners(), this.element.addEventListener("keydown", new A(this))
            }
            onkeydown(t) {
                ("key" in t ? t.key === "Tab" : t.keyCode === 9) && r.notify({
                    actionType: e.SEGMENT_POPUP.USER_NAVIGATING
                })
            }
        }
        var ne = se;
        class oe extends N {
            constructor(t, i) {
                super({
                    element: t,
                    props: i
                }), this.expand = () => {
                    this.expanded = !0
                }, this.collapse = () => {
                    this.expanded = !1
                }, this.notify = () => {
                    this.element.contains(document.activeElement) || r.notify({
                        actionType: e.SEGMENT_POPUP_BODY.USER_NAVIGATING_AWAY
                    })
                }, this.actionHandler = n => {
                    const {
                        actionType: s
                    } = n, c = [e.SEGMENT_POPUP.USER_NAVIGATING], a = [e.SEGMENT_POPUP_CONTAINER.EXPANDING], l = [e.SEGMENT_BUTTON.EXPANDING], d = [e.SEGMENT_CLOSE_BUTTON.CLICK, e.SEGMENT_BUTTON.COLLAPSING, e.SEGMENT_POPUP_BODY.ESCAPE_KEYPRESS], E = a.includes(s), p = c.includes(s), h = d.includes(s), u = l.includes(s);
                    E && this.element.focus(), p && setTimeout(() => {
                        this.element.contains(document.activeElement) || r.notify({
                            actionType: e.SEGMENT_POPUP_BODY.USER_NAVIGATING_AWAY
                        })
                    }, 100), u && this.expand(), h && this.collapse()
                }, this.onclick = n => {
                    const {
                        target: s
                    } = n;
                    !this.element.contains(s) && !this.element.contains(document.activeElement) && r.notify({
                        actionType: e.SEGMENT_POPUP_BODY.USER_CLICKING_AWAY
                    })
                }, this.expanded = !1, this.init()
            }
            registerEventListeners() {
                super.registerEventListeners(), this.element.addEventListener("keydown", new A(this)), window.addEventListener("click", new A(this))
            }
            onkeydown(t) {
                m(t) && r.notify({
                    actionType: e.SEGMENT_POPUP_BODY.ESCAPE_KEYPRESS
                })
            }
            init() {
                super.init(), r.subscribe(this.actionHandler)
            }
        }
        var ae = oe;
        class ce extends N {
            constructor(t, i) {
                super({
                    element: t,
                    props: i
                }), this.expand = () => {
                    this.expanded = !0, this.element.setAttribute("aria-expanded", "true"), this.element.classList.add(T.SEGMENT_POPUP_CONTAINER.IS_VISIBLE), r.notify({
                        actionType: e.SEGMENT_POPUP_CONTAINER.EXPANDING
                    })
                }, this.collapse = () => {
                    this.expanded = !1, this.element.setAttribute("aria-expanded", "false"), this.element.classList.remove(T.SEGMENT_POPUP_CONTAINER.IS_VISIBLE), r.notify({
                        actionType: e.SEGMENT_POPUP_CONTAINER.COLLAPSING
                    })
                }, this.actionHandler = n => {
                    const {
                        actionType: s
                    } = n, c = [e.SEGMENT_BUTTON.EXPANDING], a = [e.SEGMENT_CLOSE_BUTTON.CLICK, e.SEGMENT_BUTTON.COLLAPSING, e.SEGMENT_POPUP_BODY.USER_NAVIGATING_AWAY, e.SEGMENT_POPUP_BODY.USER_CLICKING_AWAY, e.SEGMENT_POPUP_BODY.ESCAPE_KEYPRESS], l = c.includes(s);
                    a.includes(s) && this.collapse(), l && this.expand()
                }, this.expanded = !1, this.init()
            }
            init() {
                super.init(), r.subscribe(this.actionHandler)
            }
        }
        var le = ce;
        S("Header", x), S("Header:Navigation:List", X), S("Header:Navigation:BackButton", F), S("Header:Navigation:Menu", $), S("Header:Navigation:Menu:Button", q), S("Header:Navigation:Item:Body", K), S("Header:Navigation:Item:Title", w), S("Header:Navigation:Item:Button", M), S("Header:Segment:DropdownButton", ee), S("Header:Segment:DropdownButton:Icon", ie), S("Header:Segment:PopUp", ne), S("Header:Segment:PopUp:Body", ae), S("Header:Segment:PopUp:Container", le), S("Header:Segment:PopUp:CloseButton", Q)
    })()
})();