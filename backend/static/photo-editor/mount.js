/**
* @vue/shared v3.5.43
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
// @__NO_SIDE_EFFECTS__
function Qr(t) {
  const e = /* @__PURE__ */ Object.create(null);
  for (const i of t.split(",")) e[i] = 1;
  return (i) => i in e;
}
const Tt = {}, We = [], ne = () => {
}, ga = () => !1, $n = (t) => t.charCodeAt(0) === 111 && t.charCodeAt(1) === 110 && // uppercase letter
(t.charCodeAt(2) > 122 || t.charCodeAt(2) < 97), Xn = (t) => t.startsWith("onUpdate:"), Ut = Object.assign, Zr = (t, e) => {
  const i = t.indexOf(e);
  i > -1 && t.splice(i, 1);
}, Nl = Object.prototype.hasOwnProperty, xt = (t, e) => Nl.call(t, e), ut = Array.isArray, ke = (t) => mn(t) === "[object Map]", Mn = (t) => mn(t) === "[object Set]", Cs = (t) => mn(t) === "[object Date]", ft = (t) => typeof t == "function", Ft = (t) => typeof t == "string", de = (t) => typeof t == "symbol", Pt = (t) => t !== null && typeof t == "object", pa = (t) => (Pt(t) || ft(t)) && ft(t.then) && ft(t.catch), ma = Object.prototype.toString, mn = (t) => ma.call(t), Ll = (t) => mn(t).slice(8, -1), _a = (t) => mn(t) === "[object Object]", ts = (t) => Ft(t) && t !== "NaN" && t[0] !== "-" && "" + parseInt(t, 10) === t, en = /* @__PURE__ */ Qr(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), Jn = (t) => {
  const e = /* @__PURE__ */ Object.create(null);
  return ((i) => e[i] || (e[i] = t(i)));
}, Dl = /-\w/g, zt = Jn(
  (t) => t.replace(Dl, (e) => e.slice(1).toUpperCase())
), Gl = /\B([A-Z])/g, ze = Jn(
  (t) => t.replace(Gl, "-$1").toLowerCase()
), Qn = Jn((t) => t.charAt(0).toUpperCase() + t.slice(1)), dr = Jn(
  (t) => t ? `on${Qn(t)}` : ""
), ue = (t, e) => !Object.is(t, e), fr = (t, ...e) => {
  for (let i = 0; i < t.length; i++)
    t[i](...e);
}, ya = (t, e, i, r = !1) => {
  Object.defineProperty(t, e, {
    configurable: !0,
    enumerable: !1,
    writable: r,
    value: i
  });
}, Il = (t) => {
  const e = parseFloat(t);
  return isNaN(e) ? t : e;
};
let ws;
const Zn = () => ws || (ws = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function _n(t) {
  if (ut(t)) {
    const e = {};
    for (let i = 0; i < t.length; i++) {
      const r = t[i], n = Ft(r) ? Hl(r) : _n(r);
      if (n)
        for (const s in n)
          e[s] = n[s];
    }
    return e;
  } else if (Ft(t) || Pt(t))
    return t;
}
const Ul = /;(?![^(]*\))/g, Bl = /:([^]+)/, Vl = /"(?:[^"\\]|\\[^])*"|'(?:[^'\\]|\\[^])*'|\\[^]|\/\*[^]*?\*\//g;
function Hl(t) {
  const e = {};
  return t.replace(Vl, (i) => i.startsWith("/*") ? "" : i).split(Ul).forEach((i) => {
    if (i) {
      const r = i.split(Bl);
      r.length > 1 && (e[r[0].trim()] = r[1].trim());
    }
  }), e;
}
function Me(t) {
  let e = "";
  if (Ft(t))
    e = t;
  else if (ut(t))
    for (let i = 0; i < t.length; i++) {
      const r = Me(t[i]);
      r && (e += r + " ");
    }
  else if (Pt(t))
    for (const i in t)
      t[i] && (e += i + " ");
  return e.trim();
}
const Wl = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", jl = /* @__PURE__ */ Qr(Wl);
function va(t) {
  return !!t || t === "";
}
function ql(t, e, i) {
  if (t.length !== e.length) return !1;
  let r = !0;
  for (let n = 0; r && n < t.length; n++)
    r = tr(t[n], e[n], i);
  return r;
}
function xs(t, e, i) {
  if (t.size !== e.size) return !1;
  const r = Array.from(e), n = new Uint8Array(r.length);
  for (const s of t) {
    let a = -1;
    for (let o = 0; o < r.length; o++)
      if (!n[o] && tr(s, r[o], i)) {
        a = o;
        break;
      }
    if (a < 0) return !1;
    n[a] = 1;
  }
  return !0;
}
function Kl(t, e, i) {
  let r = ke(t), n = ke(e);
  if (r || n || (r = Mn(t), n = Mn(e), r || n))
    return r && n ? xs(t, e, i) : !1;
  const s = Object.keys(t).length, a = Object.keys(e).length;
  if (s !== a)
    return !1;
  for (const o in t) {
    const l = t.hasOwnProperty(o), u = e.hasOwnProperty(o);
    if (l && !u || !l && u || !tr(t[o], e[o], i))
      return !1;
  }
  return String(t) === String(e);
}
function Ps(t, e, i, r) {
  i || (i = [/* @__PURE__ */ new Map(), /* @__PURE__ */ new Map()]);
  const [n, s] = i;
  if (n.has(t) || s.has(e))
    return n.get(t) === e && s.get(e) === t;
  n.set(t, e), s.set(e, t);
  const a = r(t, e, i);
  return n.delete(t), s.delete(e), a;
}
function tr(t, e, i) {
  if (t === e) return !0;
  let r = Cs(t), n = Cs(e);
  return r || n ? r && n ? t.getTime() === e.getTime() : !1 : (r = de(t), n = de(e), r || n ? t === e : (r = ut(t), n = ut(e), r || n ? r && n ? Ps(t, e, i, ql) : !1 : (r = Pt(t), n = Pt(e), r || n ? !r || !n ? !1 : Ps(t, e, i, Kl) : String(t) === String(e))));
}
const ba = (t) => !!(t && t.__v_isRef === !0), Fe = (t) => Ft(t) ? t : t == null ? "" : ut(t) || Pt(t) && (t.toString === ma || !ft(t.toString)) ? ba(t) ? Fe(t.value) : JSON.stringify(t, Sa, 2) : String(t), Sa = (t, e) => ba(e) ? Sa(t, e.value) : ke(e) ? {
  [`Map(${e.size})`]: [...e.entries()].reduce(
    (i, [r, n], s) => (i[gr(r, s) + " =>"] = n, i),
    {}
  )
} : Mn(e) ? {
  [`Set(${e.size})`]: [...e.values()].map((i) => gr(i))
} : de(e) ? gr(e) : Pt(e) && !ut(e) && !_a(e) ? String(e) : e, gr = (t, e = "") => {
  var i;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    de(t) ? `Symbol(${(i = t.description) != null ? i : e})` : t
  );
};
function zl(t) {
  return t == null ? "initial" : typeof t == "string" ? t === "" ? " " : t : String(t);
}
/**
* @vue/reactivity v3.5.43
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let Dt;
class Yl {
  // TODO isolatedDeclarations "__v_skip"
  constructor(e = !1) {
    this.detached = e, this._active = !0, this._on = 0, this.effects = [], this.cleanups = [], this._isPaused = !1, this._warnOnRun = !0, this.__v_skip = !0, !e && Dt && (Dt.active ? (this.parent = Dt, this.index = (Dt.scopes || (Dt.scopes = [])).push(
      this
    ) - 1) : (this._active = !1, this._warnOnRun = !1));
  }
  get active() {
    return this._active;
  }
  pause() {
    if (this._active) {
      this._isPaused = !0;
      let e, i;
      if (this.scopes) {
        const r = this.scopes.slice();
        for (e = 0, i = r.length; e < i; e++)
          r[e].pause();
      }
      for (e = 0, i = this.effects.length; e < i; e++)
        this.effects[e].pause();
    }
  }
  /**
   * Resumes the effect scope, including all child scopes and effects.
   */
  resume() {
    if (this._active && this._isPaused) {
      this._isPaused = !1;
      let e, i;
      if (this.scopes) {
        const n = this.scopes.slice();
        for (e = 0, i = n.length; e < i; e++)
          n[e].resume();
      }
      const r = this.effects.slice();
      for (e = 0, i = r.length; e < i; e++)
        r[e].resume();
    }
  }
  run(e) {
    if (this._active) {
      const i = Dt;
      try {
        return Dt = this, e();
      } finally {
        Dt = i;
      }
    }
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    ++this._on === 1 && (this.prevScope = Dt, Dt = this);
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    if (this._on > 0 && --this._on === 0) {
      if (Dt === this)
        Dt = this.prevScope;
      else {
        let e = Dt;
        for (; e; ) {
          if (e.prevScope === this) {
            e.prevScope = this.prevScope;
            break;
          }
          e = e.prevScope;
        }
      }
      this.prevScope = void 0;
    }
  }
  stop(e) {
    if (this._active) {
      this._active = !1;
      let i, r;
      for (i = 0, r = this.effects.length; i < r; i++)
        this.effects[i].stop();
      for (this.effects.length = 0, i = 0, r = this.cleanups.length; i < r; i++)
        this.cleanups[i]();
      if (this.cleanups.length = 0, this.scopes) {
        const n = this.scopes.slice();
        for (i = 0, r = n.length; i < r; i++)
          n[i].stop(!0);
        this.scopes.length = 0;
      }
      if (!this.detached && this.parent && !e) {
        const n = this.parent.scopes.pop();
        n && n !== this && (this.parent.scopes[this.index] = n, n.index = this.index);
      }
      this.parent = void 0;
    }
  }
}
function Ca() {
  return Dt;
}
function $l(t, e = !1) {
  Dt && Dt.cleanups.push(t);
}
let At;
const pr = /* @__PURE__ */ new WeakSet();
class wa {
  constructor(e) {
    this.fn = e, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, Dt && (Dt.active ? Dt.effects.push(this) : this.flags &= -2);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, pr.has(this) && (pr.delete(this), this.trigger()));
  }
  /**
   * @internal
   */
  notify() {
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || Pa(this);
  }
  run() {
    if (!(this.flags & 1))
      return this.fn();
    this.flags |= 2, Ts(this), Ta(this);
    const e = At, i = re;
    At = this, re = !0;
    try {
      return this.fn();
    } finally {
      Aa(this), At = e, re = i, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let e = this.deps; e; e = e.nextDep)
        ns(e);
      this.deps = this.depsTail = void 0, Ts(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    this.flags & 64 ? pr.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  /**
   * @internal
   */
  runIfDirty() {
    Dr(this) && this.run();
  }
  get dirty() {
    return Dr(this);
  }
}
let xa = 0, nn, rn;
function Pa(t, e = !1) {
  if (t.flags |= 8, e) {
    t.next = rn, rn = t;
    return;
  }
  t.next = nn, nn = t;
}
function es() {
  xa++;
}
function is() {
  if (--xa > 0)
    return;
  if (rn) {
    let e = rn;
    for (rn = void 0; e; ) {
      const i = e.next;
      e.next = void 0, e.flags &= -9, e = i;
    }
  }
  let t;
  for (; nn; ) {
    let e = nn;
    for (nn = void 0; e; ) {
      const i = e.next;
      if (e.next = void 0, e.flags &= -9, e.flags & 1)
        try {
          e.trigger();
        } catch (r) {
          t || (t = r);
        }
      e = i;
    }
  }
  if (t) throw t;
}
function Ta(t) {
  for (let e = t.deps; e; e = e.nextDep)
    e.version = -1, e.prevActiveLink = e.dep.activeLink, e.dep.activeLink = e;
}
function Aa(t) {
  let e, i = t.depsTail, r = i;
  for (; r; ) {
    const n = r.prevDep;
    r.version === -1 ? (r === i && (i = n), ns(r), Xl(r)) : e = r, r.dep.activeLink = r.prevActiveLink, r.prevActiveLink = void 0, r = n;
  }
  t.deps = e, t.depsTail = i;
}
function Dr(t) {
  for (let e = t.deps; e; e = e.nextDep)
    if (e.dep.version !== e.version || e.dep.computed && (Ra(e.dep.computed) || e.dep.version !== e.version))
      return !0;
  return !!t._dirty;
}
function Ra(t) {
  if (t.flags & 4 && !(t.flags & 16) || (t.flags &= -17, t.globalVersion === hn) || (t.globalVersion = hn, !t.isSSR && t.flags & 128 && (!t.deps && !t._dirty || !Dr(t))))
    return;
  t.flags |= 2;
  const e = t.dep, i = At, r = re;
  At = t, re = !0;
  try {
    Ta(t);
    const n = t.fn(t._value);
    (e.version === 0 || ue(n, t._value)) && (t.flags |= 128, t._value = n, e.version++);
  } catch (n) {
    throw e.version++, n;
  } finally {
    At = i, re = r, Aa(t), t.flags &= -3;
  }
}
function ns(t, e = !1) {
  const { dep: i, prevSub: r, nextSub: n } = t;
  if (r && (r.nextSub = n, t.prevSub = void 0), n && (n.prevSub = r, t.nextSub = void 0), i.subs === t && (i.subs = r, !r && i.computed)) {
    i.computed.flags &= -5;
    for (let s = i.computed.deps; s; s = s.nextDep)
      ns(s, !0);
  }
  !e && !--i.sc && i.map && i.map.delete(i.key);
}
function Xl(t) {
  const { prevDep: e, nextDep: i } = t;
  e && (e.nextDep = i, t.prevDep = void 0), i && (i.prevDep = e, t.nextDep = void 0);
}
let re = !0;
const Ea = [];
function Se() {
  Ea.push(re), re = !1;
}
function Ce() {
  const t = Ea.pop();
  re = t === void 0 ? !0 : t;
}
function Ts(t) {
  const { cleanup: e } = t;
  if (t.cleanup = void 0, e) {
    const i = At;
    At = void 0;
    try {
      e();
    } finally {
      At = i;
    }
  }
}
let hn = 0;
class Jl {
  constructor(e, i) {
    this.sub = e, this.dep = i, this.version = i.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class rs {
  // TODO isolatedDeclarations "__v_skip"
  constructor(e) {
    this.computed = e, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0;
  }
  track(e) {
    if (!At || !re || At === this.computed)
      return;
    let i = this.activeLink;
    if (i === void 0 || i.sub !== At)
      i = this.activeLink = new Jl(At, this), At.deps ? (i.prevDep = At.depsTail, At.depsTail.nextDep = i, At.depsTail = i) : At.deps = At.depsTail = i, Ma(i);
    else if (i.version === -1 && (i.version = this.version, i.nextDep)) {
      const r = i.nextDep;
      r.prevDep = i.prevDep, i.prevDep && (i.prevDep.nextDep = r), i.prevDep = At.depsTail, i.nextDep = void 0, At.depsTail.nextDep = i, At.depsTail = i, At.deps === i && (At.deps = r);
    }
    return i;
  }
  trigger(e) {
    this.version++, hn++, this.notify(e);
  }
  notify(e) {
    es();
    try {
      for (let i = this.subs; i; i = i.prevSub)
        i.sub.notify() && i.sub.dep.notify();
    } finally {
      is();
    }
  }
}
function Ma(t) {
  if (t.dep.sc++, t.sub.flags & 4) {
    const e = t.dep.computed;
    if (e && !t.dep.subs) {
      e.flags |= 20;
      for (let r = e.deps; r; r = r.nextDep)
        Ma(r);
    }
    const i = t.dep.subs;
    i !== t && (t.prevSub = i, i && (i.nextSub = t)), t.dep.subs = t;
  }
}
const Gr = /* @__PURE__ */ new WeakMap(), je = /* @__PURE__ */ Symbol(
  ""
), Ir = /* @__PURE__ */ Symbol(
  ""
), cn = /* @__PURE__ */ Symbol(
  ""
);
function Vt(t, e, i) {
  if (re && At) {
    let r = Gr.get(t);
    r || Gr.set(t, r = /* @__PURE__ */ new Map());
    let n = r.get(i);
    n || (r.set(i, n = new rs()), n.map = r, n.key = i), n.track();
  }
}
function ve(t, e, i, r, n, s) {
  const a = Gr.get(t);
  if (!a) {
    hn++;
    return;
  }
  const o = (l) => {
    l && l.trigger();
  };
  if (es(), e === "clear")
    a.forEach(o);
  else {
    const l = ut(t), u = l && ts(i);
    if (l && i === "length") {
      const h = Number(r);
      a.forEach((_, m) => {
        (m === "length" || m === cn || !de(m) && m >= h) && o(_);
      });
    } else
      switch ((i !== void 0 || a.has(void 0)) && o(a.get(i)), u && o(a.get(cn)), e) {
        case "add":
          l ? u && o(a.get("length")) : (o(a.get(je)), ke(t) && o(a.get(Ir)));
          break;
        case "delete":
          l || (o(a.get(je)), ke(t) && o(a.get(Ir)));
          break;
        case "set":
          ke(t) && o(a.get(je));
          break;
      }
  }
  is();
}
function $e(t) {
  const e = /* @__PURE__ */ wt(t);
  return e === t || (Vt(e, "iterate", cn), /* @__PURE__ */ te(t)) ? e : /* @__PURE__ */ fe(t) ? /* @__PURE__ */ Oe(t) ? e.map((i) => Ne(ie(i))) : e.map(Ne) : e.map(ie);
}
function er(t) {
  return Vt(t = /* @__PURE__ */ wt(t), "iterate", cn), t;
}
function he(t, e) {
  return /* @__PURE__ */ fe(t) ? Ne(/* @__PURE__ */ Oe(t) ? ie(e) : e) : ie(e);
}
const Ql = {
  __proto__: null,
  [Symbol.iterator]() {
    return mr(this, Symbol.iterator, (t) => he(this, t));
  },
  concat(...t) {
    return $e(this).concat(
      ...t.map((e) => ut(e) ? $e(e) : e)
    );
  },
  entries() {
    return mr(this, "entries", (t) => (t[1] = he(this, t[1]), t));
  },
  every(t, e) {
    return ge(this, "every", t, e, void 0, arguments);
  },
  filter(t, e) {
    return ge(
      this,
      "filter",
      t,
      e,
      (i) => i.map((r) => he(this, r)),
      arguments
    );
  },
  find(t, e) {
    return ge(
      this,
      "find",
      t,
      e,
      (i) => he(this, i),
      arguments
    );
  },
  findIndex(t, e) {
    return ge(this, "findIndex", t, e, void 0, arguments);
  },
  findLast(t, e) {
    return ge(
      this,
      "findLast",
      t,
      e,
      (i) => he(this, i),
      arguments
    );
  },
  findLastIndex(t, e) {
    return ge(this, "findLastIndex", t, e, void 0, arguments);
  },
  // flat, flatMap could benefit from ARRAY_ITERATE but are not straight-forward to implement
  forEach(t, e) {
    return ge(this, "forEach", t, e, void 0, arguments);
  },
  includes(...t) {
    return _r(this, "includes", t);
  },
  indexOf(...t) {
    return _r(this, "indexOf", t);
  },
  join(t) {
    return $e(this).join(t);
  },
  // keys() iterator only reads `length`, no optimization required
  lastIndexOf(...t) {
    return _r(this, "lastIndexOf", t);
  },
  map(t, e) {
    return ge(this, "map", t, e, void 0, arguments);
  },
  pop() {
    return oi(this, "pop");
  },
  push(...t) {
    return oi(this, "push", t);
  },
  reduce(t, ...e) {
    return As(this, "reduce", t, e);
  },
  reduceRight(t, ...e) {
    return As(this, "reduceRight", t, e);
  },
  shift() {
    return oi(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(t, e) {
    return ge(this, "some", t, e, void 0, arguments);
  },
  splice(...t) {
    return oi(this, "splice", t);
  },
  toReversed() {
    return $e(this).toReversed();
  },
  toSorted(t) {
    return $e(this).toSorted(t);
  },
  toSpliced(...t) {
    return $e(this).toSpliced(...t);
  },
  unshift(...t) {
    return oi(this, "unshift", t);
  },
  values() {
    return mr(this, "values", (t) => he(this, t));
  }
};
function mr(t, e, i) {
  const r = er(t), n = r[e]();
  return r !== t && !/* @__PURE__ */ te(t) && (n._next = n.next, n.next = () => {
    const s = n._next();
    return s.done || (s.value = i(s.value)), s;
  }), n;
}
const Zl = Array.prototype;
function ge(t, e, i, r, n, s) {
  const a = er(t), o = a !== t && !/* @__PURE__ */ te(t), l = a[e];
  if (l !== Zl[e]) {
    const _ = l.apply(t, s);
    return o ? ie(_) : _;
  }
  let u = i;
  a !== t && (o ? u = function(_, m) {
    return i.call(this, he(t, _), m, t);
  } : i.length > 2 && (u = function(_, m) {
    return i.call(this, _, m, t);
  }));
  const h = l.call(a, u, r);
  return o && n ? n(h) : h;
}
function As(t, e, i, r) {
  const n = er(t), s = n !== t && !/* @__PURE__ */ te(t);
  let a = i, o = !1;
  n !== t && (s ? (o = r.length === 0, a = function(u, h, _) {
    return o && (o = !1, u = he(t, u)), i.call(this, u, he(t, h), _, t);
  }) : i.length > 3 && (a = function(u, h, _) {
    return i.call(this, u, h, _, t);
  }));
  const l = n[e](a, ...r);
  return o ? he(t, l) : l;
}
function _r(t, e, i) {
  const r = /* @__PURE__ */ wt(t);
  Vt(r, "iterate", cn);
  const n = r[e](...i);
  return (n === -1 || n === !1) && /* @__PURE__ */ as(i[0]) ? (i[0] = /* @__PURE__ */ wt(i[0]), r[e](...i)) : n;
}
function oi(t, e, i = []) {
  Se(), es();
  const r = (/* @__PURE__ */ wt(t))[e].apply(t, i);
  return is(), Ce(), r;
}
const th = /* @__PURE__ */ Qr("__proto__,__v_isRef,__isVue"), Fa = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((t) => t !== "arguments" && t !== "caller").map((t) => Symbol[t]).filter(de)
);
function eh(t) {
  de(t) || (t = String(t));
  const e = /* @__PURE__ */ wt(this);
  return Vt(e, "has", t), e.hasOwnProperty(t);
}
class ka {
  constructor(e = !1, i = !1) {
    this._isReadonly = e, this._isShallow = i;
  }
  get(e, i, r) {
    if (i === "__v_skip") return e.__v_skip;
    const n = this._isReadonly, s = this._isShallow;
    if (i === "__v_isReactive")
      return !n;
    if (i === "__v_isReadonly")
      return n;
    if (i === "__v_isShallow")
      return s;
    if (i === "__v_raw")
      return r === (n ? s ? uh : Da : s ? La : Na).get(e) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(e) === Object.getPrototypeOf(r) ? e : void 0;
    const a = ut(e);
    if (!n) {
      let l;
      if (a && (l = Ql[i]))
        return l;
      if (i === "hasOwnProperty")
        return eh;
    }
    const o = Reflect.get(
      e,
      i,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      /* @__PURE__ */ It(e) ? e : r
    );
    if ((de(i) ? Fa.has(i) : th(i)) || (n || Vt(e, "get", i), s))
      return o;
    if (/* @__PURE__ */ It(o)) {
      const l = a && ts(i) ? o : o.value;
      return n && Pt(l) ? /* @__PURE__ */ Fn(l) : l;
    }
    return Pt(o) ? n ? /* @__PURE__ */ Fn(o) : /* @__PURE__ */ si(o) : o;
  }
}
class Oa extends ka {
  constructor(e = !1) {
    super(!1, e);
  }
  set(e, i, r, n) {
    let s = e[i];
    const a = ut(e) && ts(i);
    if (!this._isShallow) {
      const u = /* @__PURE__ */ fe(s);
      if (!/* @__PURE__ */ te(r) && !/* @__PURE__ */ fe(r) && (s = /* @__PURE__ */ wt(s), r = /* @__PURE__ */ wt(r)), !a && /* @__PURE__ */ It(s) && !/* @__PURE__ */ It(r))
        return u || (s.value = r), !0;
    }
    const o = a ? Number(i) < e.length : xt(e, i), l = Reflect.set(
      e,
      i,
      r,
      /* @__PURE__ */ It(e) ? e : n
    );
    return e === /* @__PURE__ */ wt(n) && l && (o ? ue(r, s) && ve(e, "set", i, r) : ve(e, "add", i, r)), l;
  }
  deleteProperty(e, i) {
    const r = xt(e, i);
    e[i];
    const n = Reflect.deleteProperty(e, i);
    return n && r && ve(e, "delete", i, void 0), n;
  }
  has(e, i) {
    const r = Reflect.has(e, i);
    return (!de(i) || !Fa.has(i)) && Vt(e, "has", i), r;
  }
  ownKeys(e) {
    return Vt(
      e,
      "iterate",
      ut(e) ? "length" : je
    ), Reflect.ownKeys(e);
  }
}
class ih extends ka {
  constructor(e = !1) {
    super(!0, e);
  }
  set(e, i) {
    return !0;
  }
  deleteProperty(e, i) {
    return !0;
  }
}
const nh = /* @__PURE__ */ new Oa(), rh = /* @__PURE__ */ new ih(), sh = /* @__PURE__ */ new Oa(!0);
const Ur = (t) => t, Sn = (t) => Reflect.getPrototypeOf(t);
function oh(t, e, i) {
  return function(...r) {
    const n = this.__v_raw, s = /* @__PURE__ */ wt(n), a = ke(s), o = t === "entries" || t === Symbol.iterator && a, l = t === "keys" && a, u = n[t](...r), h = i ? Ur : e ? Ne : ie;
    return !e && Vt(
      s,
      "iterate",
      l ? Ir : je
    ), Ut(
      // inheriting all iterator properties
      Object.create(u),
      {
        // iterator protocol
        next() {
          const { value: _, done: m } = u.next();
          return m ? { value: _, done: m } : {
            value: o ? [h(_[0]), h(_[1])] : h(_),
            done: m
          };
        }
      }
    );
  };
}
function Cn(t) {
  return function(...e) {
    return t === "delete" ? !1 : t === "clear" ? void 0 : this;
  };
}
function ah(t, e) {
  const i = {
    get(n) {
      const s = this.__v_raw, a = /* @__PURE__ */ wt(s), o = /* @__PURE__ */ wt(n);
      t || (ue(n, o) && Vt(a, "get", n), Vt(a, "get", o));
      const { has: l } = Sn(a), u = e ? Ur : t ? Ne : ie;
      if (l.call(a, n))
        return u(s.get(n));
      if (l.call(a, o))
        return u(s.get(o));
      s !== a && s.get(n);
    },
    get size() {
      const n = this.__v_raw;
      return !t && Vt(/* @__PURE__ */ wt(n), "iterate", je), n.size;
    },
    has(n) {
      const s = this.__v_raw, a = /* @__PURE__ */ wt(s), o = /* @__PURE__ */ wt(n);
      return t || (ue(n, o) && Vt(a, "has", n), Vt(a, "has", o)), n === o ? s.has(n) : s.has(n) || s.has(o);
    },
    forEach(n, s) {
      const a = this, o = a.__v_raw, l = /* @__PURE__ */ wt(o), u = e ? Ur : t ? Ne : ie;
      return !t && Vt(l, "iterate", je), o.forEach((h, _) => n.call(s, u(h), u(_), a));
    }
  };
  return Ut(
    i,
    t ? {
      add: Cn("add"),
      set: Cn("set"),
      delete: Cn("delete"),
      clear: Cn("clear")
    } : {
      add(n) {
        const s = /* @__PURE__ */ wt(this), a = Sn(s), o = /* @__PURE__ */ wt(n), l = !e && !/* @__PURE__ */ te(n) && !/* @__PURE__ */ fe(n) ? o : n;
        return a.has.call(s, l) || ue(n, l) && a.has.call(s, n) || ue(o, l) && a.has.call(s, o) || (s.add(l), ve(s, "add", l, l)), this;
      },
      set(n, s) {
        !e && !/* @__PURE__ */ te(s) && !/* @__PURE__ */ fe(s) && (s = /* @__PURE__ */ wt(s));
        const a = /* @__PURE__ */ wt(this), { has: o, get: l } = Sn(a);
        let u = o.call(a, n);
        u || (n = /* @__PURE__ */ wt(n), u = o.call(a, n));
        const h = l.call(a, n);
        return a.set(n, s), u ? ue(s, h) && ve(a, "set", n, s) : ve(a, "add", n, s), this;
      },
      delete(n) {
        const s = /* @__PURE__ */ wt(this), { has: a, get: o } = Sn(s);
        let l = a.call(s, n);
        l || (n = /* @__PURE__ */ wt(n), l = a.call(s, n)), o && o.call(s, n);
        const u = s.delete(n);
        return l && ve(s, "delete", n, void 0), u;
      },
      clear() {
        const n = /* @__PURE__ */ wt(this), s = n.size !== 0, a = n.clear();
        return s && ve(
          n,
          "clear",
          void 0,
          void 0
        ), a;
      }
    }
  ), [
    "keys",
    "values",
    "entries",
    Symbol.iterator
  ].forEach((n) => {
    i[n] = oh(n, t, e);
  }), i;
}
function ss(t, e) {
  const i = ah(t, e);
  return (r, n, s) => n === "__v_isReactive" ? !t : n === "__v_isReadonly" ? t : n === "__v_raw" ? r : Reflect.get(
    xt(i, n) && n in r ? i : r,
    n,
    s
  );
}
const lh = {
  get: /* @__PURE__ */ ss(!1, !1)
}, hh = {
  get: /* @__PURE__ */ ss(!1, !0)
}, ch = {
  get: /* @__PURE__ */ ss(!0, !1)
};
const Na = /* @__PURE__ */ new WeakMap(), La = /* @__PURE__ */ new WeakMap(), Da = /* @__PURE__ */ new WeakMap(), uh = /* @__PURE__ */ new WeakMap();
function dh(t) {
  switch (t) {
    case "Object":
    case "Array":
      return 1;
    case "Map":
    case "Set":
    case "WeakMap":
    case "WeakSet":
      return 2;
    default:
      return 0;
  }
}
// @__NO_SIDE_EFFECTS__
function si(t) {
  return /* @__PURE__ */ fe(t) ? t : os(
    t,
    !1,
    nh,
    lh,
    Na
  );
}
// @__NO_SIDE_EFFECTS__
function fh(t) {
  return os(
    t,
    !1,
    sh,
    hh,
    La
  );
}
// @__NO_SIDE_EFFECTS__
function Fn(t) {
  return os(
    t,
    !0,
    rh,
    ch,
    Da
  );
}
function os(t, e, i, r, n) {
  if (!Pt(t) || t.__v_raw && !(e && t.__v_isReactive) || t.__v_skip || !Object.isExtensible(t))
    return t;
  const s = n.get(t);
  if (s)
    return s;
  const a = dh(Ll(t));
  if (a === 0)
    return t;
  const o = new Proxy(
    t,
    a === 2 ? r : i
  );
  return n.set(t, o), o;
}
// @__NO_SIDE_EFFECTS__
function Oe(t) {
  return /* @__PURE__ */ fe(t) ? /* @__PURE__ */ Oe(t.__v_raw) : !!(t && t.__v_isReactive);
}
// @__NO_SIDE_EFFECTS__
function fe(t) {
  return !!(t && t.__v_isReadonly);
}
// @__NO_SIDE_EFFECTS__
function te(t) {
  return !!(t && t.__v_isShallow);
}
// @__NO_SIDE_EFFECTS__
function as(t) {
  return t ? !!t.__v_raw : !1;
}
// @__NO_SIDE_EFFECTS__
function wt(t) {
  const e = t && t.__v_raw;
  return e ? /* @__PURE__ */ wt(e) : t;
}
function gh(t) {
  return !xt(t, "__v_skip") && Object.isExtensible(t) && ya(t, "__v_skip", !0), t;
}
const ie = (t) => Pt(t) ? /* @__PURE__ */ si(t) : t, Ne = (t) => Pt(t) ? /* @__PURE__ */ Fn(t) : t;
// @__NO_SIDE_EFFECTS__
function It(t) {
  return t ? t.__v_isRef === !0 : !1;
}
// @__NO_SIDE_EFFECTS__
function Ct(t) {
  return ph(t, !1);
}
function ph(t, e) {
  return /* @__PURE__ */ It(t) ? t : new mh(t, e);
}
class mh {
  constructor(e, i) {
    this.dep = new rs(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = i ? e : /* @__PURE__ */ wt(e), this._value = i ? e : ie(e), this.__v_isShallow = i;
  }
  get value() {
    return this.dep.track(), this._value;
  }
  set value(e) {
    const i = this._rawValue, r = this.__v_isShallow || /* @__PURE__ */ te(e) || /* @__PURE__ */ fe(e);
    e = r ? e : /* @__PURE__ */ wt(e), ue(e, i) && (this._rawValue = e, this._value = r ? e : ie(e), this.dep.trigger());
  }
}
function nt(t) {
  return /* @__PURE__ */ It(t) ? t.value : t;
}
const _h = {
  get: (t, e, i) => e === "__v_raw" ? t : nt(Reflect.get(t, e, i)),
  set: (t, e, i, r) => {
    const n = t[e];
    return /* @__PURE__ */ It(n) && !/* @__PURE__ */ It(i) ? (n.value = i, !0) : Reflect.set(t, e, i, r);
  }
};
function Ga(t) {
  return /* @__PURE__ */ Oe(t) ? t : new Proxy(t, _h);
}
class yh {
  constructor(e, i, r) {
    this.fn = e, this.setter = i, this._value = void 0, this.dep = new rs(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = hn - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !i, this.isSSR = r;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    At !== this)
      return Pa(this, !0), !0;
  }
  get value() {
    const e = this.dep.track();
    return Ra(this), e && (e.version = this.dep.version), this._value;
  }
  set value(e) {
    this.setter && this.setter(e);
  }
}
// @__NO_SIDE_EFFECTS__
function vh(t, e, i = !1) {
  let r, n;
  return ft(t) ? r = t : (r = t.get, n = t.set), new yh(r, n, i);
}
const wn = {}, kn = /* @__PURE__ */ new WeakMap();
let Ue;
function bh(t, e = !1, i = Ue) {
  if (i) {
    let r = kn.get(i);
    r || kn.set(i, r = []), r.push(t);
  }
}
function Sh(t, e, i = Tt) {
  const { immediate: r, deep: n, once: s, scheduler: a, augmentJob: o, call: l } = i, u = (d) => n ? d : /* @__PURE__ */ te(d) || n === !1 || n === 0 ? be(d, 1) : be(d);
  let h, _, m, f, p = !1, y = !1;
  if (/* @__PURE__ */ It(t) ? (_ = () => t.value, p = /* @__PURE__ */ te(t)) : /* @__PURE__ */ Oe(t) ? (_ = () => u(t), p = !0) : ut(t) ? (y = !0, p = t.some((d) => /* @__PURE__ */ Oe(d) || /* @__PURE__ */ te(d)), _ = () => t.map((d) => {
    if (/* @__PURE__ */ It(d))
      return d.value;
    if (/* @__PURE__ */ Oe(d))
      return u(d);
    if (ft(d))
      return l ? l(d, 2) : d();
  })) : ft(t) ? e ? _ = l ? () => l(t, 2) : t : _ = () => {
    if (m) {
      Se();
      try {
        m();
      } finally {
        Ce();
      }
    }
    const d = Ue;
    Ue = h;
    try {
      return l ? l(t, 3, [f]) : t(f);
    } finally {
      Ue = d;
    }
  } : _ = ne, e && n) {
    const d = _, v = n === !0 ? 1 / 0 : n;
    _ = () => be(d(), v);
  }
  const S = Ca(), P = () => {
    h.stop(), S && S.active && Zr(S.effects, h);
  };
  if (s && e) {
    const d = e;
    e = (...v) => {
      const x = d(...v);
      return P(), x;
    };
  }
  let g = y ? new Array(t.length).fill(wn) : wn;
  const c = (d) => {
    if (!(!(h.flags & 1) || !h.dirty && !d))
      if (e) {
        const v = h.run();
        if (d || n || p || (y ? v.some((x, E) => ue(x, g[E])) : ue(v, g))) {
          m && m();
          const x = Ue;
          Ue = h;
          try {
            const E = [
              v,
              // pass undefined as the old value when it's changed for the first time
              g === wn ? void 0 : y && g[0] === wn ? [] : g,
              f
            ];
            g = v, l ? l(e, 3, E) : (
              // @ts-expect-error
              e(...E)
            );
          } finally {
            Ue = x;
          }
        }
      } else
        h.run();
  };
  return o && o(c), h = new wa(_), h.scheduler = a ? () => a(c, !1) : c, f = (d) => bh(d, !1, h), m = h.onStop = () => {
    const d = kn.get(h);
    if (d) {
      if (l)
        l(d, 4);
      else
        for (const v of d) v();
      kn.delete(h);
    }
  }, e ? r ? c(!0) : g = h.run() : a ? a(c.bind(null, !0), !0) : h.run(), P.pause = h.pause.bind(h), P.resume = h.resume.bind(h), P.stop = P, P;
}
function be(t, e = 1 / 0, i) {
  if (e <= 0 || !Pt(t) || t.__v_skip || (i = i || /* @__PURE__ */ new Map(), (i.get(t) || 0) >= e))
    return t;
  if (i.set(t, e), e--, /* @__PURE__ */ It(t))
    be(t.value, e, i);
  else if (ut(t))
    for (let r = 0; r < t.length; r++)
      be(t[r], e, i);
  else if (Mn(t) || ke(t))
    t.forEach((r) => {
      be(r, e, i);
    });
  else if (_a(t)) {
    for (const r in t)
      be(t[r], e, i);
    for (const r of Object.getOwnPropertySymbols(t))
      Object.prototype.propertyIsEnumerable.call(t, r) && be(t[r], e, i);
  }
  return t;
}
/**
* @vue/runtime-core v3.5.43
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function yn(t, e, i, r) {
  try {
    return r ? t(...r) : t();
  } catch (n) {
    ir(n, e, i);
  }
}
function se(t, e, i, r) {
  if (ft(t)) {
    const n = yn(t, e, i, r);
    return n && pa(n) && n.catch((s) => {
      ir(s, e, i);
    }), n;
  }
  if (ut(t)) {
    const n = [];
    for (let s = 0; s < t.length; s++)
      n.push(se(t[s], e, i, r));
    return n;
  }
}
function ir(t, e, i, r = !0) {
  const n = e ? e.vnode : null, { errorHandler: s, throwUnhandledErrorInProduction: a } = e && e.appContext.config || Tt;
  if (e) {
    let o = e.parent;
    const l = e.proxy, u = `https://vuejs.org/error-reference/#runtime-${i}`;
    for (; o; ) {
      const h = o.ec;
      if (h) {
        for (let _ = 0; _ < h.length; _++)
          if (h[_](t, l, u) === !1)
            return;
      }
      o = o.parent;
    }
    if (s) {
      Se(), yn(s, null, 10, [
        t,
        l,
        u
      ]), Ce();
      return;
    }
  }
  Ch(t, i, n, r, a);
}
function Ch(t, e, i, r = !0, n = !1) {
  if (n)
    throw t;
  console.error(t);
}
const Kt = [];
let le = -1;
const ii = [];
let Ee = null, Qe = 0;
const Ia = /* @__PURE__ */ Promise.resolve();
let On = null;
function Nn(t) {
  const e = On || Ia;
  return t ? e.then(this ? t.bind(this) : t) : e;
}
function wh(t) {
  let e = le + 1, i = Kt.length;
  for (; e < i; ) {
    const r = e + i >>> 1, n = Kt[r], s = un(n);
    s < t || s === t && n.flags & 2 ? e = r + 1 : i = r;
  }
  return e;
}
function ls(t) {
  if (!(t.flags & 1)) {
    const e = un(t), i = Kt[Kt.length - 1];
    !i || // fast path when the job id is larger than the tail
    !(t.flags & 2) && e >= un(i) ? Kt.push(t) : Kt.splice(wh(e), 0, t), t.flags |= 1, Ua();
  }
}
function Ua() {
  On || (On = Ia.then(Ha));
}
function Ba(t) {
  if (!ut(t))
    Ee && t.id === -1 ? Ee.splice(Qe + 1, 0, t) : t.flags & 1 || (ii.push(t), t.flags |= 1);
  else
    for (let e = 0; e < t.length; e++)
      ii.push(t[e]);
  Ua();
}
function Rs(t, e, i = le + 1) {
  for (; i < Kt.length; i++) {
    const r = Kt[i];
    if (r && r.flags & 2) {
      if (t && r.id !== t.uid)
        continue;
      Kt.splice(i, 1), i--, r.flags & 4 && (r.flags &= -2), r(), r.flags & 4 || (r.flags &= -2);
    }
  }
}
function Va(t) {
  if (ii.length) {
    const e = [...new Set(ii)].sort(
      (i, r) => un(i) - un(r)
    );
    if (ii.length = 0, Ee) {
      for (let i = 0; i < e.length; i++)
        Ee.push(e[i]);
      return;
    }
    for (Ee = e, Qe = 0; Qe < Ee.length; Qe++) {
      const i = Ee[Qe];
      i.flags & 4 && (i.flags &= -2), i.flags & 8 || i(), i.flags &= -2;
    }
    Ee = null, Qe = 0;
  }
}
const un = (t) => t.id == null ? t.flags & 2 ? -1 : 1 / 0 : t.id;
function Ha(t) {
  try {
    for (le = 0; le < Kt.length; le++) {
      const e = Kt[le];
      e && !(e.flags & 8) && (e.flags & 4 && (e.flags &= -2), yn(
        e,
        e.i,
        e.i ? 15 : 14
      ), e.flags & 4 || (e.flags &= -2));
    }
  } finally {
    for (; le < Kt.length; le++) {
      const e = Kt[le];
      e && (e.flags &= -2);
    }
    le = -1, Kt.length = 0, Va(), On = null, (Kt.length || ii.length) && Ha();
  }
}
let Jt = null, Wa = null;
function Ln(t) {
  const e = Jt;
  return Jt = t, Wa = t && t.type.__scopeId || null, e;
}
function Ji(t, e = Jt, i) {
  if (!e || t._n)
    return t;
  const r = (...n) => {
    r._d && In(-1);
    const s = Ln(e), a = qe.length;
    let o;
    try {
      o = t(...n);
    } finally {
      for (let l = qe.length; l > a; l--) fl();
      Ln(s), r._d && In(1);
    }
    return o;
  };
  return r._n = !0, r._c = !0, r._d = !0, r;
}
function xh(t, e) {
  if (Jt === null)
    return t;
  const i = hr(Jt), r = t.dirs || (t.dirs = []);
  for (let n = 0; n < e.length; n++) {
    let [s, a, o, l = Tt] = e[n];
    s && (ft(s) && (s = {
      mounted: s,
      updated: s
    }), s.deep && be(a), r.push({
      dir: s,
      instance: i,
      value: a,
      oldValue: void 0,
      arg: o,
      modifiers: l
    }));
  }
  return t;
}
function De(t, e, i, r) {
  const n = t.dirs, s = e && e.dirs;
  for (let a = 0; a < n.length; a++) {
    const o = n[a];
    s && (o.oldValue = s[a].value);
    let l = o.dir[r];
    l && (Se(), se(l, i, 8, [
      t.el,
      o,
      t,
      e
    ]), Ce());
  }
}
function Ph(t, e) {
  if (Ht) {
    let i = Ht.provides;
    const r = Ht.parent && Ht.parent.provides;
    r === i && (i = Ht.provides = Object.create(r)), i[t] = e;
  }
}
function An(t, e, i = !1) {
  const r = lr();
  if (r || ni) {
    let n = ni ? ni._context.provides : r ? r.parent == null || r.ce ? r.vnode.appContext && r.vnode.appContext.provides : r.parent.provides : void 0;
    if (n && t in n)
      return n[t];
    if (arguments.length > 1)
      return i && ft(e) ? e.call(r && r.proxy) : e;
  }
}
const Th = /* @__PURE__ */ Symbol.for("v-scx"), Ah = () => An(Th);
function ee(t, e, i) {
  return ja(t, e, i);
}
function ja(t, e, i = Tt) {
  const { immediate: r, deep: n, flush: s, once: a } = i, o = Ut({}, i), l = e && r || !e && s !== "post";
  let u;
  if (gn) {
    if (s === "sync") {
      const f = Ah();
      u = f.__watcherHandles || (f.__watcherHandles = []);
    } else if (!l) {
      const f = () => {
      };
      return f.stop = ne, f.resume = ne, f.pause = ne, f;
    }
  }
  const h = Ht;
  o.call = (f, p, y) => se(f, h, p, y);
  let _ = !1;
  s === "post" ? o.scheduler = (f) => {
    qt(f, h && h.suspense);
  } : s !== "sync" && (_ = !0, o.scheduler = (f, p) => {
    p ? f() : ls(f);
  }), o.augmentJob = (f) => {
    e && (f.flags |= 4), _ && (f.flags |= 2, h && (f.id = h.uid, f.i = h));
  };
  const m = Sh(t, e, o);
  return gn && (u ? u.push(m) : l && m()), m;
}
function Rh(t, e, i) {
  const r = this.proxy, n = Ft(t) ? t.includes(".") ? qa(r, t) : () => r[t] : t.bind(r, r);
  let s;
  ft(e) ? s = e : (s = e.handler, i = e);
  const a = bn(this), o = ja(n, s.bind(r), i);
  return a(), o;
}
function qa(t, e) {
  const i = e.split(".");
  return () => {
    let r = t;
    for (let n = 0; n < i.length && r; n++)
      r = r[i[n]];
    return r;
  };
}
const Ae = /* @__PURE__ */ new WeakMap(), Ka = /* @__PURE__ */ Symbol("_vte"), nr = (t) => t.__isTeleport, Be = (t) => t && (t.disabled || t.disabled === ""), Eh = (t) => t && (t.defer || t.defer === ""), Es = (t) => typeof SVGElement < "u" && t instanceof SVGElement, Ms = (t) => typeof MathMLElement == "function" && t instanceof MathMLElement, Br = (t, e) => {
  const i = t && t.to;
  return Ft(i) ? e ? e(i) : null : i;
}, Mh = {
  name: "Teleport",
  __isTeleport: !0,
  process(t, e, i, r, n, s, a, o, l, u) {
    const {
      mc: h,
      pc: _,
      pbc: m,
      o: { insert: f, querySelector: p, createText: y, createComment: S, parentNode: P }
    } = u, g = Be(e.props);
    let { dynamicChildren: c } = e;
    const d = (E, C, w) => {
      E.shapeFlag & 16 && h(
        E.children,
        C,
        w,
        n,
        s,
        a,
        o,
        l
      );
    }, v = (E = e) => {
      const C = Be(E.props), w = E.target = Br(E.props, p), T = Vr(w, E, y, f);
      w && (a !== "svg" && Es(w) ? a = "svg" : a !== "mathml" && Ms(w) && (a = "mathml"), n && n.isCE && (n.ce._teleportTargets || (n.ce._teleportTargets = /* @__PURE__ */ new Set())).add(w), C || (d(E, w, T), Qi(E, !1)));
    }, x = (E) => {
      const C = () => {
        if (Ae.get(E) === C) {
          if (Ae.delete(E), Be(E.props)) {
            const w = P(E.el) || i;
            d(E, w, E.anchor), Qi(E, !0);
          }
          v(E);
        }
      };
      Ae.set(E, C), qt(C, s);
    };
    if (t == null) {
      const E = e.el = y(""), C = e.anchor = y("");
      if (f(E, i, r), f(C, i, r), Eh(e.props) || s && s.pendingBranch) {
        x(e);
        return;
      }
      g && (d(e, i, C), Qi(e, !0)), v();
    } else {
      e.el = t.el;
      const E = e.anchor = t.anchor, C = Ae.get(t);
      if (C) {
        C.flags |= 8, Ae.delete(t), x(e);
        return;
      }
      e.targetStart = t.targetStart;
      const w = e.target = t.target, T = e.targetAnchor = t.targetAnchor, M = Be(t.props), D = M ? i : w, I = M ? E : T;
      if (a === "svg" || Es(w) ? a = "svg" : (a === "mathml" || Ms(w)) && (a = "mathml"), c ? (m(
        t.dynamicChildren,
        c,
        D,
        n,
        s,
        a,
        o
      ), gs(t, e, !0)) : l || _(
        t,
        e,
        D,
        I,
        n,
        s,
        a,
        o,
        !1
      ), g)
        M ? e.props && t.props && e.props.to !== t.props.to && (e.props.to = t.props.to) : xn(
          e,
          i,
          E,
          u,
          1
        );
      else if ((e.props && e.props.to) !== (t.props && t.props.to)) {
        const B = Br(e.props, p);
        B && (e.target = B, xn(
          e,
          B,
          null,
          u,
          0
        ));
      } else M && xn(
        e,
        w,
        T,
        u,
        1
      );
      Qi(e, g);
    }
  },
  remove(t, e, i, { um: r, o: { remove: n } }, s) {
    const {
      shapeFlag: a,
      children: o,
      anchor: l,
      targetStart: u,
      targetAnchor: h,
      target: _,
      props: m
    } = t, f = Be(m), p = s || !f, y = Ae.get(t);
    if (y && (y.flags |= 8, Ae.delete(t)), _ && (n(u), n(h)), s && n(l), !y && (f || _) && a & 16)
      for (let S = 0; S < o.length; S++) {
        const P = o[S];
        r(
          P,
          e,
          i,
          p,
          !!P.dynamicChildren
        );
      }
  },
  move: xn,
  hydrate: Fh
};
function xn(t, e, i, { o: { insert: r }, m: n }, s = 2) {
  s === 0 && r(t.targetAnchor, e, i);
  const { el: a, anchor: o, shapeFlag: l, children: u, props: h } = t, _ = s === 2;
  if (_ && r(a, e, i), !Ae.has(t) && (!_ || Be(h)) && l & 16)
    for (let m = 0; m < u.length; m++)
      n(
        u[m],
        e,
        i,
        2
      );
  _ && r(o, e, i);
}
function Fh(t, e, i, r, n, s, {
  o: { nextSibling: a, parentNode: o, querySelector: l, insert: u, createText: h }
}, _) {
  function m(S, P) {
    let g = P;
    for (; g; ) {
      if (g && g.nodeType === 8) {
        if (g.data === "teleport start anchor")
          e.targetStart = g;
        else if (g.data === "teleport anchor") {
          e.targetAnchor = g, S._lpa = e.targetAnchor && a(e.targetAnchor);
          break;
        }
      }
      g = a(g);
    }
  }
  function f(S, P) {
    P.anchor = _(
      a(S),
      P,
      o(S),
      i,
      r,
      n,
      s
    );
  }
  const p = e.target = Br(
    e.props,
    l
  ), y = Be(e.props);
  if (p) {
    const S = p._lpa || p.firstChild;
    e.shapeFlag & 16 && (y ? (f(t, e), m(p, S), e.targetAnchor || Vr(
      p,
      e,
      h,
      u,
      // if target is the same as the main view, insert anchors before current node
      // to avoid hydrating mismatch
      o(t) === p ? t : null
    )) : (e.anchor = a(t), m(p, S), e.targetAnchor || Vr(p, e, h, u), _(
      S && a(S),
      e,
      p,
      i,
      r,
      n,
      s
    ))), Qi(e, y);
  } else y && e.shapeFlag & 16 && (f(t, e), e.targetStart = t, e.targetAnchor = a(t));
  return e.anchor && a(e.anchor);
}
const kh = Mh;
function Qi(t, e) {
  const i = t.ctx;
  if (i && i.ut) {
    let r, n;
    for (e ? (r = t.el, n = t.anchor) : (r = t.targetStart, n = t.targetAnchor); r && r !== n; )
      r.nodeType === 1 && r.setAttribute("data-v-owner", i.uid), r = r.nextSibling;
    i.ut();
  }
}
function Vr(t, e, i, r, n = null) {
  const s = e.targetStart = i(""), a = e.targetAnchor = i("");
  return s[Ka] = a, t && (r(s, t, n), r(a, t, n)), a;
}
const yr = /* @__PURE__ */ Symbol("_leaveCb");
function Oh(t) {
  let e = t[0];
  if (t.length > 1) {
    for (const i of t)
      if (i.type !== we) {
        e = i;
        break;
      }
  }
  return e;
}
function za(t) {
  if (!cs(t))
    return nr(t.type) && t.children ? Oh(t.children) : t;
  if (t.component)
    return t.component.subTree;
  const { shapeFlag: e, children: i } = t;
  if (i) {
    if (e & 16)
      return i[0];
    if (e & 32 && ft(i.default))
      return i.default();
  }
}
function hs(t, e) {
  if (t.shapeFlag & 6 && t.component) {
    t.transition = e;
    const i = t.component.subTree;
    hs(
      nr(i.type) && za(i) || i,
      e
    );
  } else t.shapeFlag & 128 ? (t.ssContent.transition = e.clone(t.ssContent), t.ssFallback.transition = e.clone(t.ssFallback)) : t.transition = e;
}
// @__NO_SIDE_EFFECTS__
function Ye(t, e) {
  return ft(t) ? (
    // #8236: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    Ut({ name: t.name }, e, { setup: t })
  ) : t;
}
function Ya(t) {
  t.ids = [t.ids[0] + t.ids[2]++ + "-", 0, 0];
}
function Fs(t, e) {
  let i;
  return !!((i = Object.getOwnPropertyDescriptor(t, e)) && !i.configurable);
}
const Dn = /* @__PURE__ */ new WeakMap();
function sn(t, e, i, r, n = !1) {
  if (ut(t)) {
    t.forEach(
      (y, S) => sn(
        y,
        e && (ut(e) ? e[S] : e),
        i,
        r,
        n
      )
    );
    return;
  }
  if (on(r) && !n) {
    r.shapeFlag & 512 && r.type.__asyncResolved && r.component.subTree.component && sn(t, e, i, r.component.subTree);
    return;
  }
  const s = r.shapeFlag & 4 ? hr(r.component) : r.el, a = n ? null : s, { i: o, r: l } = t, u = e && e.r, h = o.refs === Tt ? o.refs = {} : o.refs, _ = o.setupState, m = /* @__PURE__ */ wt(_), f = _ === Tt ? ga : (y) => Fs(h, y) ? !1 : xt(m, y), p = (y, S) => !(S && Fs(h, S));
  if (u != null && u !== l) {
    if (ks(e), Ft(u))
      h[u] = null, f(u) && (_[u] = null);
    else if (/* @__PURE__ */ It(u)) {
      const y = e;
      p(u, y.k) && (u.value = null), y.k && (h[y.k] = null);
    }
  }
  if (ft(l))
    yn(l, o, 12, [a, h]);
  else {
    const y = Ft(l), S = /* @__PURE__ */ It(l);
    if (y || S) {
      const P = () => {
        if (t.f) {
          const g = y ? f(l) ? _[l] : h[l] : p() || !t.k ? l.value : h[t.k];
          if (n)
            ut(g) && Zr(g, s);
          else if (ut(g))
            g.includes(s) || g.push(s);
          else if (y)
            h[l] = [s], f(l) && (_[l] = h[l]);
          else {
            const c = [s];
            p(l, t.k) && (l.value = c), t.k && (h[t.k] = c);
          }
        } else y ? (h[l] = a, f(l) && (_[l] = a)) : S && (p(l, t.k) && (l.value = a), t.k && (h[t.k] = a));
      };
      if (a) {
        const g = () => {
          P(), Dn.delete(t);
        };
        g.id = -1, Dn.set(t, g), qt(g, i);
      } else
        ks(t), P();
    }
  }
}
function ks(t) {
  const e = Dn.get(t);
  e && (e.flags |= 8, Dn.delete(t));
}
Zn().requestIdleCallback;
Zn().cancelIdleCallback;
const on = (t) => !!t.type.__asyncLoader, cs = (t) => t.type.__isKeepAlive;
function Nh(t, e) {
  $a(t, "a", e);
}
function Lh(t, e) {
  $a(t, "da", e);
}
function $a(t, e, i = Ht) {
  const r = t.__wdc || (t.__wdc = () => {
    let n = i;
    for (; n; ) {
      if (n.isDeactivated)
        return;
      n = n.parent;
    }
    return t();
  });
  if (rr(e, r, i), i) {
    let n = i.parent;
    for (; n && n.parent; )
      cs(n.parent.vnode) && Dh(r, e, i, n), n = n.parent;
  }
}
function Dh(t, e, i, r) {
  const n = rr(
    e,
    t,
    r,
    !0
    /* prepend */
  );
  sr(() => {
    Zr(r[e], n);
  }, i);
}
function rr(t, e, i = Ht, r = !1) {
  if (i) {
    const n = i[t] || (i[t] = []), s = e.__weh || (e.__weh = (...a) => {
      Se();
      const o = bn(i), l = se(e, i, t, a);
      return o(), Ce(), l;
    });
    return r ? n.unshift(s) : n.push(s), s;
  }
}
const xe = (t) => (e, i = Ht) => {
  (!gn || t === "sp") && rr(t, (...r) => e(...r), i);
}, Gh = xe("bm"), Ke = xe("m"), Xa = xe(
  "bu"
), us = xe("u"), vn = xe(
  "bum"
), sr = xe("um"), Ih = xe(
  "sp"
), Uh = xe("rtg"), Bh = xe("rtc");
function Vh(t, e = Ht) {
  rr("ec", t, e);
}
const Hh = "components";
function Xe(t, e) {
  return jh(Hh, t, !0, e) || t;
}
const Wh = /* @__PURE__ */ Symbol.for("v-ndc");
function jh(t, e, i = !0, r = !1) {
  const n = Jt || Ht;
  if (n) {
    const s = n.type;
    {
      const o = Tc(
        s,
        !1
      );
      if (o && (o === e || o === zt(e) || o === Qn(zt(e))))
        return s;
    }
    const a = (
      // local registration
      // check instance[type] first which is resolved for options API
      Os(n[t] || s[t], e) || // global registration
      Os(n.appContext[t], e)
    );
    return !a && r ? s : a;
  }
}
function Os(t, e) {
  return t && (t[e] || t[zt(e)] || t[Qn(zt(e))]);
}
function Ns(t, e, i, r) {
  let n;
  const s = i, a = ut(t);
  if (a || Ft(t)) {
    const o = a && /* @__PURE__ */ Oe(t);
    let l = !1, u = !1;
    o && (l = !/* @__PURE__ */ te(t), u = /* @__PURE__ */ fe(t), t = er(t)), n = new Array(t.length);
    for (let h = 0, _ = t.length; h < _; h++)
      n[h] = e(
        l ? u ? Ne(ie(t[h])) : ie(t[h]) : t[h],
        h,
        void 0,
        s
      );
  } else if (typeof t == "number") {
    n = new Array(t);
    for (let o = 0; o < t; o++)
      n[o] = e(o + 1, o, void 0, s);
  } else if (Pt(t))
    if (t[Symbol.iterator])
      n = Array.from(
        t,
        (o, l) => e(o, l, void 0, s)
      );
    else {
      const o = Object.keys(t);
      n = new Array(o.length);
      for (let l = 0, u = o.length; l < u; l++) {
        const h = o[l];
        n[l] = e(t[h], h, l, s);
      }
    }
  else
    n = [];
  return n;
}
const Hr = (t) => t ? _l(t) ? hr(t) : Hr(t.parent) : null, an = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ Ut(/* @__PURE__ */ Object.create(null), {
    $: (t) => t,
    $el: (t) => t.vnode.el,
    $data: (t) => t.data,
    $props: (t) => t.props,
    $attrs: (t) => t.attrs,
    $slots: (t) => t.slots,
    $refs: (t) => t.refs,
    $parent: (t) => Hr(t.parent),
    $root: (t) => Hr(t.root),
    $host: (t) => t.ce,
    $emit: (t) => t.emit,
    $options: (t) => Qa(t),
    $forceUpdate: (t) => t.f || (t.f = () => {
      ls(t.update);
    }),
    $nextTick: (t) => t.n || (t.n = Nn.bind(t.proxy)),
    $watch: (t) => Rh.bind(t)
  })
), vr = (t, e) => t !== Tt && !t.__isScriptSetup && xt(t, e), qh = {
  get({ _: t }, e) {
    if (e === "__v_skip")
      return !0;
    const { ctx: i, setupState: r, data: n, props: s, accessCache: a, type: o, appContext: l } = t;
    if (e[0] !== "$") {
      const m = a[e];
      if (m !== void 0)
        switch (m) {
          case 1:
            return r[e];
          case 2:
            return n[e];
          case 4:
            return i[e];
          case 3:
            return s[e];
        }
      else {
        if (vr(r, e))
          return a[e] = 1, r[e];
        if (n !== Tt && xt(n, e))
          return a[e] = 2, n[e];
        if (xt(s, e))
          return a[e] = 3, s[e];
        if (i !== Tt && xt(i, e))
          return a[e] = 4, i[e];
        Wr && (a[e] = 0);
      }
    }
    const u = an[e];
    let h, _;
    if (u)
      return e === "$attrs" && Vt(t.attrs, "get", ""), u(t);
    if (
      // css module (injected by vue-loader)
      (h = o.__cssModules) && (h = h[e])
    )
      return h;
    if (i !== Tt && xt(i, e))
      return a[e] = 4, i[e];
    if (
      // global properties
      _ = l.config.globalProperties, xt(_, e)
    )
      return _[e];
  },
  set({ _: t }, e, i) {
    const { data: r, setupState: n, ctx: s } = t;
    return vr(n, e) ? (n[e] = i, !0) : r !== Tt && xt(r, e) ? (r[e] = i, !0) : xt(t.props, e) || e[0] === "$" && e.slice(1) in t ? !1 : (s[e] = i, !0);
  },
  has({
    _: { data: t, setupState: e, accessCache: i, ctx: r, appContext: n, props: s, type: a }
  }, o) {
    let l;
    return !!(i[o] || t !== Tt && o[0] !== "$" && xt(t, o) || vr(e, o) || xt(s, o) || xt(r, o) || xt(an, o) || xt(n.config.globalProperties, o) || (l = a.__cssModules) && l[o]);
  },
  defineProperty(t, e, i) {
    return i.get != null ? t._.accessCache[e] = 0 : xt(i, "value") && this.set(t, e, i.value, null), Reflect.defineProperty(t, e, i);
  }
};
function Ls(t) {
  return ut(t) ? t.reduce(
    (e, i) => (e[i] = null, e),
    {}
  ) : t;
}
let Wr = !0;
function Kh(t) {
  const e = Qa(t), i = t.proxy, r = t.ctx;
  Wr = !1, e.beforeCreate && Ds(e.beforeCreate, t, "bc");
  const {
    // state
    data: n,
    computed: s,
    methods: a,
    watch: o,
    provide: l,
    inject: u,
    // lifecycle
    created: h,
    beforeMount: _,
    mounted: m,
    beforeUpdate: f,
    updated: p,
    activated: y,
    deactivated: S,
    beforeDestroy: P,
    beforeUnmount: g,
    destroyed: c,
    unmounted: d,
    render: v,
    renderTracked: x,
    renderTriggered: E,
    errorCaptured: C,
    serverPrefetch: w,
    // public API
    expose: T,
    inheritAttrs: M,
    // assets
    components: D,
    directives: I,
    filters: B
  } = e;
  if (u && zh(u, r, null), a)
    for (const b in a) {
      const A = a[b];
      ft(A) && (r[b] = A.bind(i));
    }
  if (n) {
    const b = n.call(i, i);
    Pt(b) && (t.data = /* @__PURE__ */ si(b));
  }
  if (Wr = !0, s)
    for (const b in s) {
      const A = s[b], k = ft(A) ? A.bind(i, i) : ft(A.get) ? A.get.bind(i, i) : ne, F = !ft(A) && ft(A.set) ? A.set.bind(i) : ne, L = Hn({
        get: k,
        set: F
      });
      Object.defineProperty(r, b, {
        enumerable: !0,
        configurable: !0,
        get: () => L.value,
        set: (W) => L.value = W
      });
    }
  if (o)
    for (const b in o)
      Ja(o[b], r, i, b);
  if (l) {
    const b = ft(l) ? l.call(i) : l;
    Reflect.ownKeys(b).forEach((A) => {
      Ph(A, b[A]);
    });
  }
  h && Ds(h, t, "c");
  function X(b, A) {
    ut(A) ? A.forEach((k) => b(k.bind(i))) : A && b(A.bind(i));
  }
  if (X(Gh, _), X(Ke, m), X(Xa, f), X(us, p), X(Nh, y), X(Lh, S), X(Vh, C), X(Bh, x), X(Uh, E), X(vn, g), X(sr, d), X(Ih, w), ut(T))
    if (T.length) {
      const b = t.exposed || (t.exposed = {});
      T.forEach((A) => {
        Object.defineProperty(b, A, {
          get: () => i[A],
          set: (k) => i[A] = k,
          enumerable: !0
        });
      });
    } else t.exposed || (t.exposed = {});
  v && t.render === ne && (t.render = v), M != null && (t.inheritAttrs = M), D && (t.components = D), I && (t.directives = I), w && Ya(t);
}
function zh(t, e, i = ne) {
  ut(t) && (t = jr(t));
  for (const r in t) {
    const n = t[r];
    let s;
    Pt(n) ? "default" in n ? s = An(
      n.from || r,
      n.default,
      !0
    ) : s = An(n.from || r) : s = An(n), /* @__PURE__ */ It(s) ? Object.defineProperty(e, r, {
      enumerable: !0,
      configurable: !0,
      get: () => s.value,
      set: (a) => s.value = a
    }) : e[r] = s;
  }
}
function Ds(t, e, i) {
  se(
    ut(t) ? t.map((r) => r.bind(e.proxy)) : t.bind(e.proxy),
    e,
    i
  );
}
function Ja(t, e, i, r) {
  let n = r.includes(".") ? qa(i, r) : () => i[r];
  if (Ft(t)) {
    const s = e[t];
    ft(s) && ee(n, s);
  } else if (ft(t))
    ee(n, t.bind(i));
  else if (Pt(t))
    if (ut(t))
      t.forEach((s) => Ja(s, e, i, r));
    else {
      const s = ft(t.handler) ? t.handler.bind(i) : e[t.handler];
      ft(s) && ee(n, s, t);
    }
}
function Qa(t) {
  const e = t.type, { mixins: i, extends: r } = e, {
    mixins: n,
    optionsCache: s,
    config: { optionMergeStrategies: a }
  } = t.appContext, o = s.get(e);
  let l;
  return o ? l = o : !n.length && !i && !r ? l = e : (l = {}, n.length && n.forEach(
    (u) => Gn(l, u, a, !0)
  ), Gn(l, e, a)), Pt(e) && s.set(e, l), l;
}
function Gn(t, e, i, r = !1) {
  const { mixins: n, extends: s } = e;
  s && Gn(t, s, i, !0), n && n.forEach(
    (a) => Gn(t, a, i, !0)
  );
  for (const a in e)
    if (!(r && a === "expose")) {
      const o = Yh[a] || i && i[a];
      t[a] = o ? o(t[a], e[a]) : e[a];
    }
  return t;
}
const Yh = {
  data: Gs,
  props: Is,
  emits: Is,
  // objects
  methods: Zi,
  computed: Zi,
  // lifecycle
  beforeCreate: jt,
  created: jt,
  beforeMount: jt,
  mounted: jt,
  beforeUpdate: jt,
  updated: jt,
  beforeDestroy: jt,
  beforeUnmount: jt,
  destroyed: jt,
  unmounted: jt,
  activated: jt,
  deactivated: jt,
  errorCaptured: jt,
  serverPrefetch: jt,
  // assets
  components: Zi,
  directives: Zi,
  // watch
  watch: Xh,
  // provide / inject
  provide: Gs,
  inject: $h
};
function Gs(t, e) {
  return e ? t ? function() {
    return Ut(
      ft(t) ? t.call(this, this) : t,
      ft(e) ? e.call(this, this) : e
    );
  } : e : t;
}
function $h(t, e) {
  return Zi(jr(t), jr(e));
}
function jr(t) {
  if (ut(t)) {
    const e = {};
    for (let i = 0; i < t.length; i++)
      e[t[i]] = t[i];
    return e;
  }
  return t;
}
function jt(t, e) {
  return t ? [...new Set([].concat(t, e))] : e;
}
function Zi(t, e) {
  return t ? Ut(/* @__PURE__ */ Object.create(null), t, e) : e;
}
function Is(t, e) {
  return t ? ut(t) && ut(e) ? [.../* @__PURE__ */ new Set([...t, ...e])] : Ut(
    /* @__PURE__ */ Object.create(null),
    Ls(t),
    Ls(e ?? {})
  ) : e;
}
function Xh(t, e) {
  if (!t) return e;
  if (!e) return t;
  const i = Ut(/* @__PURE__ */ Object.create(null), t);
  for (const r in e)
    i[r] = jt(t[r], e[r]);
  return i;
}
function Za() {
  return {
    app: null,
    config: {
      isNativeTag: ga,
      performance: !1,
      globalProperties: {},
      optionMergeStrategies: {},
      errorHandler: void 0,
      warnHandler: void 0,
      compilerOptions: {}
    },
    mixins: [],
    components: {},
    directives: {},
    provides: /* @__PURE__ */ Object.create(null),
    optionsCache: /* @__PURE__ */ new WeakMap(),
    propsCache: /* @__PURE__ */ new WeakMap(),
    emitsCache: /* @__PURE__ */ new WeakMap()
  };
}
let Jh = 0;
function Qh(t, e) {
  return function(r, n = null) {
    ft(r) || (r = Ut({}, r)), n != null && !Pt(n) && (n = null);
    const s = Za(), a = /* @__PURE__ */ new WeakSet(), o = [];
    let l = !1;
    const u = s.app = {
      _uid: Jh++,
      _component: r,
      _props: n,
      _container: null,
      _context: s,
      _instance: null,
      version: Ec,
      get config() {
        return s.config;
      },
      set config(h) {
      },
      use(h, ..._) {
        return a.has(h) || (h && ft(h.install) ? (a.add(h), h.install(u, ..._)) : ft(h) && (a.add(h), h(u, ..._))), u;
      },
      mixin(h) {
        return s.mixins.includes(h) || s.mixins.push(h), u;
      },
      component(h, _) {
        return _ ? (s.components[h] = _, u) : s.components[h];
      },
      directive(h, _) {
        return _ ? (s.directives[h] = _, u) : s.directives[h];
      },
      mount(h, _, m) {
        if (!l) {
          const f = u._ceVNode || dt(r, n);
          return f.appContext = s, m === !0 ? m = "svg" : m === !1 && (m = void 0), t(f, h, m), l = !0, u._container = h, h.__vue_app__ = u, hr(f.component);
        }
      },
      onUnmount(h) {
        o.push(h);
      },
      unmount() {
        l && (se(
          o,
          u._instance,
          16
        ), t(null, u._container), delete u._container.__vue_app__);
      },
      provide(h, _) {
        return s.provides[h] = _, u;
      },
      runWithContext(h) {
        const _ = ni;
        ni = u;
        try {
          return h();
        } finally {
          ni = _;
        }
      }
    };
    return u;
  };
}
let ni = null;
const Zh = (t, e) => e === "modelValue" || e === "model-value" ? t.modelModifiers : t[`${e}Modifiers`] || t[`${zt(e)}Modifiers`] || t[`${ze(e)}Modifiers`];
function tc(t, e, ...i) {
  if (t.isUnmounted) return;
  const r = t.vnode.props || Tt;
  let n = i;
  const s = e.startsWith("update:"), a = s && Zh(r, e.slice(7));
  a && (a.trim && (n = i.map((h) => Ft(h) ? h.trim() : h)), a.number && (n = n.map(Il)));
  let o, l = r[o = dr(e)] || // also try camelCase event handler (#2249)
  r[o = dr(zt(e))];
  !l && s && (l = r[o = dr(ze(e))]), l && se(
    l,
    t,
    6,
    n
  );
  const u = r[o + "Once"];
  if (u) {
    if (!t.emitted)
      t.emitted = {};
    else if (t.emitted[o])
      return;
    t.emitted[o] = !0, se(
      u,
      t,
      6,
      n
    );
  }
}
const ec = /* @__PURE__ */ new WeakMap();
function tl(t, e, i = !1) {
  const r = i ? ec : e.emitsCache, n = r.get(t);
  if (n !== void 0)
    return n;
  const s = t.emits;
  let a = {}, o = !1;
  if (!ft(t)) {
    const l = (u) => {
      const h = tl(u, e, !0);
      h && (o = !0, Ut(a, h));
    };
    !i && e.mixins.length && e.mixins.forEach(l), t.extends && l(t.extends), t.mixins && t.mixins.forEach(l);
  }
  return !s && !o ? (Pt(t) && r.set(t, null), null) : (ut(s) ? s.forEach((l) => a[l] = null) : Ut(a, s), Pt(t) && r.set(t, a), a);
}
function or(t, e) {
  return !t || !$n(e) ? !1 : (e = e.slice(2), e = e === "Once" ? e : e.replace(/Once$/, ""), xt(t, e[0].toLowerCase() + e.slice(1)) || xt(t, ze(e)) || xt(t, e));
}
function Us(t) {
  const {
    type: e,
    vnode: i,
    proxy: r,
    withProxy: n,
    propsOptions: [s],
    slots: a,
    attrs: o,
    emit: l,
    render: u,
    renderCache: h,
    props: _,
    data: m,
    setupState: f,
    ctx: p,
    inheritAttrs: y
  } = t, S = Ln(t);
  let P, g;
  try {
    if (i.shapeFlag & 4) {
      const d = n || r, v = d;
      P = ce(
        u.call(
          v,
          d,
          h,
          _,
          f,
          m,
          p
        )
      ), g = o;
    } else {
      const d = e;
      P = ce(
        d.length > 1 ? d(
          _,
          { attrs: o, slots: a, emit: l }
        ) : d(
          _,
          null
        )
      ), g = e.props ? o : ic(o);
    }
  } catch (d) {
    qe.length = 0, ir(d, t, 1), P = dt(we);
  }
  let c = P;
  if (g && y !== !1) {
    const d = Object.keys(g), { shapeFlag: v } = c;
    d.length && v & 7 && (s && d.some(Xn) && (g = nc(
      g,
      s
    )), c = ri(c, g, !1, !0));
  }
  if (i.dirs && (c = ri(c, null, !1, !0), c.dirs = c.dirs ? c.dirs.concat(i.dirs) : i.dirs), i.transition) {
    const d = nr(c.type) && za(c) || c;
    hs(d, i.transition);
  }
  return P = c, Ln(S), P;
}
const ic = (t) => {
  let e;
  for (const i in t)
    (i === "class" || i === "style" || $n(i)) && ((e || (e = {}))[i] = t[i]);
  return e;
}, nc = (t, e) => {
  const i = {};
  for (const r in t)
    (!Xn(r) || !(r.slice(9) in e)) && (i[r] = t[r]);
  return i;
};
function rc(t, e, i) {
  const { props: r, children: n, component: s } = t, { props: a, children: o, patchFlag: l } = e, u = s.emitsOptions;
  if (e.dirs || e.transition)
    return !0;
  if (i && l >= 0) {
    if (l & 1024)
      return !0;
    if (l & 16)
      return r ? Bs(r, a, u) : !!a;
    if (l & 8) {
      const h = e.dynamicProps;
      for (let _ = 0; _ < h.length; _++) {
        const m = h[_];
        if (el(a, r, m) && !or(u, m))
          return !0;
      }
    }
  } else
    return (n || o) && (!o || !o.$stable) ? !0 : r === a ? !1 : r ? a ? Bs(r, a, u) : !0 : !!a;
  return !1;
}
function Bs(t, e, i) {
  const r = Object.keys(e);
  if (r.length !== Object.keys(t).length)
    return !0;
  for (let n = 0; n < r.length; n++) {
    const s = r[n];
    if (el(e, t, s) && !or(i, s))
      return !0;
  }
  return !1;
}
function el(t, e, i) {
  const r = t[i], n = e[i];
  return i === "style" && Pt(r) && Pt(n) ? !tr(r, n) : r !== n;
}
function sc({ vnode: t, parent: e, suspense: i }, r) {
  for (; e; ) {
    const n = e.subTree;
    if (n.suspense && n.suspense.activeBranch === t && (n.suspense.vnode.el = n.el = r, t = n), n === t)
      (t = e.vnode).el = r, e = e.parent;
    else
      break;
  }
  i && i.activeBranch === t && (i.vnode.el = r);
}
const il = {}, nl = () => Object.create(il), rl = (t) => Object.getPrototypeOf(t) === il;
function oc(t, e, i, r = !1) {
  const n = {}, s = nl();
  t.propsDefaults = /* @__PURE__ */ Object.create(null), sl(t, e, n, s);
  for (const a in t.propsOptions[0])
    a in n || (n[a] = void 0);
  i ? t.props = r ? n : /* @__PURE__ */ fh(n) : t.type.props ? t.props = n : t.props = s, t.attrs = s;
}
function ac(t, e, i, r) {
  const {
    props: n,
    attrs: s,
    vnode: { patchFlag: a }
  } = t, o = /* @__PURE__ */ wt(n), [l] = t.propsOptions;
  let u = !1;
  if (
    // always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
    (r || a > 0) && !(a & 16)
  ) {
    if (a & 8) {
      const h = t.vnode.dynamicProps;
      for (let _ = 0; _ < h.length; _++) {
        let m = h[_];
        if (or(t.emitsOptions, m))
          continue;
        const f = e[m];
        if (l)
          if (xt(s, m))
            f !== s[m] && (s[m] = f, u = !0);
          else {
            const p = zt(m);
            n[p] = qr(
              l,
              o,
              p,
              f,
              t,
              !1
            );
          }
        else
          f !== s[m] && (s[m] = f, u = !0);
      }
    }
  } else {
    sl(t, e, n, s) && (u = !0);
    let h;
    for (const _ in o)
      (!e || // for camelCase
      !xt(e, _) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((h = ze(_)) === _ || !xt(e, h))) && (l ? i && // for camelCase
      (i[_] !== void 0 || // for kebab-case
      i[h] !== void 0) && (n[_] = qr(
        l,
        o,
        _,
        void 0,
        t,
        !0
      )) : delete n[_]);
    if (s !== o)
      for (const _ in s)
        (!e || !xt(e, _)) && (delete s[_], u = !0);
  }
  u && ve(t.attrs, "set", "");
}
function sl(t, e, i, r) {
  const [n, s] = t.propsOptions;
  let a = !1, o;
  if (e)
    for (let l in e) {
      if (en(l))
        continue;
      const u = e[l];
      let h;
      n && xt(n, h = zt(l)) ? !s || !s.includes(h) ? i[h] = u : (o || (o = {}))[h] = u : or(t.emitsOptions, l) || (!(l in r) || u !== r[l]) && (r[l] = u, a = !0);
    }
  if (s) {
    const l = /* @__PURE__ */ wt(i), u = o || Tt;
    for (let h = 0; h < s.length; h++) {
      const _ = s[h];
      i[_] = qr(
        n,
        l,
        _,
        u[_],
        t,
        !xt(u, _)
      );
    }
  }
  return a;
}
function qr(t, e, i, r, n, s) {
  const a = t[i];
  if (a != null) {
    const o = xt(a, "default");
    if (o && r === void 0) {
      const l = a.default;
      if (a.type !== Function && !a.skipFactory && ft(l)) {
        const { propsDefaults: u } = n;
        if (i in u)
          r = u[i];
        else {
          const h = bn(n);
          r = u[i] = l.call(
            null,
            e
          ), h();
        }
      } else
        r = l;
      n.ce && n.ce._setProp(i, r);
    }
    a[
      0
      /* shouldCast */
    ] && (s && !o ? r = !1 : a[
      1
      /* shouldCastTrue */
    ] && (r === "" || r === ze(i)) && (r = !0));
  }
  return r;
}
const lc = /* @__PURE__ */ new WeakMap();
function ol(t, e, i = !1) {
  const r = i ? lc : e.propsCache, n = r.get(t);
  if (n)
    return n;
  const s = t.props, a = {}, o = [];
  let l = !1;
  if (!ft(t)) {
    const h = (_) => {
      l = !0;
      const [m, f] = ol(_, e, !0);
      Ut(a, m), f && o.push(...f);
    };
    !i && e.mixins.length && e.mixins.forEach(h), t.extends && h(t.extends), t.mixins && t.mixins.forEach(h);
  }
  if (!s && !l)
    return Pt(t) && r.set(t, We), We;
  if (ut(s))
    for (let h = 0; h < s.length; h++) {
      const _ = zt(s[h]);
      Vs(_) && (a[_] = Tt);
    }
  else if (s)
    for (const h in s) {
      const _ = zt(h);
      if (Vs(_)) {
        const m = s[h], f = a[_] = ut(m) || ft(m) ? { type: m } : Ut({}, m), p = f.type;
        let y = !1, S = !0;
        if (ut(p))
          for (let P = 0; P < p.length; ++P) {
            const g = p[P], c = ft(g) && g.name;
            if (c === "Boolean") {
              y = !0;
              break;
            } else c === "String" && (S = !1);
          }
        else
          y = ft(p) && p.name === "Boolean";
        f[
          0
          /* shouldCast */
        ] = y, f[
          1
          /* shouldCastTrue */
        ] = S, (y || xt(f, "default")) && o.push(_);
      }
    }
  const u = [a, o];
  return Pt(t) && r.set(t, u), u;
}
function Vs(t) {
  return t[0] !== "$" && !en(t);
}
const ds = (t) => t === "_" || t === "_ctx" || t === "$stable", fs = (t) => ut(t) ? t.map(ce) : [ce(t)], hc = (t, e, i) => {
  if (e._n)
    return e;
  const r = Ji((...n) => fs(e(...n)), i);
  return r._c = !1, r;
}, al = (t, e, i) => {
  const r = t._ctx;
  for (const n in t) {
    if (ds(n)) continue;
    const s = t[n];
    if (ft(s))
      e[n] = hc(n, s, r);
    else if (s != null) {
      const a = fs(s);
      e[n] = () => a;
    }
  }
}, ll = (t, e) => {
  const i = fs(e);
  t.slots.default = () => i;
}, hl = (t, e, i) => {
  for (const r in e)
    (i || !ds(r)) && (t[r] = e[r]);
}, cc = (t, e, i) => {
  const r = t.slots = nl();
  if (t.vnode.shapeFlag & 32) {
    const n = e._;
    n ? (hl(r, e, i), i && ya(r, "_", n, !0)) : al(e, r);
  } else e && ll(t, e);
}, uc = (t, e, i) => {
  const { vnode: r, slots: n } = t;
  let s = !0, a = Tt;
  if (r.shapeFlag & 32) {
    const o = e._;
    o ? i && o === 1 ? s = !1 : hl(n, e, i) : (s = !e.$stable, al(e, n)), a = e;
  } else e && (ll(t, e), a = { default: 1 });
  if (s)
    for (const o in n)
      !ds(o) && a[o] == null && delete n[o];
}, qt = mc;
function dc(t) {
  return fc(t);
}
function fc(t, e) {
  const i = Zn();
  i.__VUE__ = !0;
  const {
    insert: r,
    remove: n,
    patchProp: s,
    createElement: a,
    createText: o,
    createComment: l,
    setText: u,
    setElementText: h,
    parentNode: _,
    nextSibling: m,
    setScopeId: f = ne,
    insertStaticContent: p
  } = t, y = (R, N, H, z = null, $ = null, Y = null, q = void 0, it = null, tt = !!N.dynamicChildren) => {
    if (R === N)
      return;
    R && !ai(R, N) && (z = O(R), W(R, $, Y, !0), R = null), N.patchFlag === -2 && (tt = !1, N.dynamicChildren = null), N.dynamicChildren && R && R.dynamicChildren && R.dynamicChildren.hasOnce && (N.dynamicChildren === We && (N.dynamicChildren = []), N.dynamicChildren.hasOnce = !0);
    const { type: J, ref: ot, shapeFlag: st } = N;
    switch (J) {
      case ar:
        S(R, N, H, z);
        break;
      case we:
        P(R, N, H, z);
        break;
      case ln:
        R == null && g(N, H, z, q);
        break;
      case Et:
        D(
          R,
          N,
          H,
          z,
          $,
          Y,
          q,
          it,
          tt
        );
        break;
      default:
        st & 1 ? v(
          R,
          N,
          H,
          z,
          $,
          Y,
          q,
          it,
          tt
        ) : st & 6 ? I(
          R,
          N,
          H,
          z,
          $,
          Y,
          q,
          it,
          tt
        ) : (st & 64 || st & 128) && J.process(
          R,
          N,
          H,
          z,
          $,
          Y,
          q,
          it,
          tt,
          V
        );
    }
    ot != null && $ ? sn(ot, R && R.ref, Y, N || R, !N) : ot == null && R && R.ref != null && sn(R.ref, null, Y, R, !0);
  }, S = (R, N, H, z) => {
    if (R == null)
      r(
        N.el = o(N.children),
        H,
        z
      );
    else {
      const $ = N.el = R.el;
      N.children !== R.children && u($, N.children);
    }
  }, P = (R, N, H, z) => {
    R == null ? r(
      N.el = l(N.children || ""),
      H,
      z
    ) : N.el = R.el;
  }, g = (R, N, H, z) => {
    [R.el, R.anchor] = p(
      R.children,
      N,
      H,
      z,
      R.el,
      R.anchor
    );
  }, c = ({ el: R, anchor: N }, H, z) => {
    let $;
    for (; R && R !== N; )
      $ = m(R), r(R, H, z), R = $;
    r(N, H, z);
  }, d = ({ el: R, anchor: N }) => {
    let H;
    for (; R && R !== N; )
      H = m(R), n(R), R = H;
    n(N);
  }, v = (R, N, H, z, $, Y, q, it, tt) => {
    if (N.type === "svg" ? q = "svg" : N.type === "math" && (q = "mathml"), R == null)
      x(
        N,
        H,
        z,
        $,
        Y,
        q,
        it,
        tt
      );
    else {
      const J = R.el && R.el._isVueCE ? R.el : null;
      try {
        J && J._beginPatch(), w(
          R,
          N,
          $,
          Y,
          q,
          it,
          tt
        );
      } finally {
        J && J._endPatch();
      }
    }
  }, x = (R, N, H, z, $, Y, q, it) => {
    let tt, J;
    const { props: ot, shapeFlag: st, transition: at, dirs: ht } = R;
    if (tt = R.el = a(
      R.type,
      Y,
      ot && ot.is,
      ot
    ), st & 8 ? h(tt, R.children) : st & 16 && C(
      R.children,
      tt,
      null,
      z,
      $,
      br(R, Y),
      q,
      it
    ), ht && De(R, null, z, "created"), E(tt, R, R.scopeId, q, z), ot) {
      for (const _t in ot)
        _t !== "value" && !en(_t) && s(tt, _t, null, ot[_t], Y, z);
      "value" in ot && s(tt, "value", null, ot.value, Y), (J = ot.onVnodeBeforeMount) && oe(J, z, R);
    }
    ht && De(R, null, z, "beforeMount");
    const ct = gc($, at);
    ct && at.beforeEnter(tt), r(tt, N, H), ((J = ot && ot.onVnodeMounted) || ct || ht) && qt(() => {
      try {
        J && oe(J, z, R), ct && at.enter(tt), ht && De(R, null, z, "mounted");
      } finally {
      }
    }, $);
  }, E = (R, N, H, z, $) => {
    if (H && f(R, H), z)
      for (let Y = 0; Y < z.length; Y++)
        f(R, z[Y]);
    if ($) {
      let Y = $.subTree;
      if (N === Y || dl(Y.type) && (Y.ssContent === N || Y.ssFallback === N)) {
        const q = $.vnode;
        E(
          R,
          q,
          q.scopeId,
          q.slotScopeIds,
          $.parent
        );
      }
    }
  }, C = (R, N, H, z, $, Y, q, it, tt = 0) => {
    for (let J = tt; J < R.length; J++) {
      const ot = R[J] = it ? ye(R[J]) : ce(R[J]);
      y(
        null,
        ot,
        N,
        H,
        z,
        $,
        Y,
        q,
        it
      );
    }
  }, w = (R, N, H, z, $, Y, q) => {
    const it = N.el = R.el;
    let { patchFlag: tt, dynamicChildren: J, dirs: ot } = N;
    tt |= R.patchFlag & 16;
    const st = R.props || Tt, at = N.props || Tt;
    let ht;
    if (H && Ge(H, !1), (ht = at.onVnodeBeforeUpdate) && oe(ht, H, N, R), ot && De(N, R, H, "beforeUpdate"), H && Ge(H, !0), // #6385 the old vnode may be a user-wrapped non-isomorphic block
    // Force full diff when block metadata is unstable.
    J && (!R.dynamicChildren || R.dynamicChildren.length !== J.length) && (tt = 0, q = !1, J = null), (st.innerHTML && at.innerHTML == null || st.textContent && at.textContent == null) && h(it, ""), J ? T(
      R.dynamicChildren,
      J,
      it,
      H,
      z,
      br(N, $),
      Y
    ) : q || A(
      R,
      N,
      it,
      null,
      H,
      z,
      br(N, $),
      Y,
      !1
    ), tt > 0) {
      if (tt & 16)
        M(it, st, at, H, $);
      else if (tt & 2 && st.class !== at.class && s(it, "class", null, at.class, $), tt & 4 && s(it, "style", st.style, at.style, $), tt & 8) {
        const ct = N.dynamicProps;
        for (let _t = 0; _t < ct.length; _t++) {
          const gt = ct[_t], St = st[gt], vt = at[gt];
          (vt !== St || gt === "value") && s(it, gt, St, vt, $, H);
        }
      }
      tt & 1 && R.children !== N.children && h(it, N.children);
    } else !q && J == null && M(it, st, at, H, $);
    ((ht = at.onVnodeUpdated) || ot) && qt(() => {
      ht && oe(ht, H, N, R), ot && De(N, R, H, "updated");
    }, z);
  }, T = (R, N, H, z, $, Y, q) => {
    for (let it = 0; it < N.length; it++) {
      const tt = R[it], J = N[it], ot = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        tt.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (tt.type === Et || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !ai(tt, J) || // - In the case of a component, it could contain anything.
        tt.shapeFlag & 198) ? _(tt.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          H
        )
      );
      y(
        tt,
        J,
        ot,
        null,
        z,
        $,
        Y,
        q,
        !0
      );
    }
  }, M = (R, N, H, z, $) => {
    if (N !== H) {
      if (N !== Tt)
        for (const Y in N)
          !en(Y) && !(Y in H) && s(
            R,
            Y,
            N[Y],
            null,
            $,
            z
          );
      for (const Y in H) {
        if (en(Y)) continue;
        const q = H[Y], it = N[Y];
        q !== it && Y !== "value" && s(R, Y, it, q, $, z);
      }
      "value" in H && s(R, "value", N.value, H.value, $);
    }
  }, D = (R, N, H, z, $, Y, q, it, tt) => {
    const J = N.el = R ? R.el : o(""), ot = N.anchor = R ? R.anchor : o("");
    let { patchFlag: st, dynamicChildren: at, slotScopeIds: ht } = N;
    ht && (it = it ? it.concat(ht) : ht), R == null ? (r(J, H, z), r(ot, H, z), C(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      N.children || [],
      H,
      ot,
      $,
      Y,
      q,
      it,
      tt
    )) : st > 0 && st & 64 && at && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    R.dynamicChildren && R.dynamicChildren.length === at.length ? (T(
      R.dynamicChildren,
      at,
      H,
      $,
      Y,
      q,
      it
    ), // #2080 if the stable fragment has a key, it's a <template v-for> that may
    //  get moved around. Make sure all root level vnodes inherit el.
    // #2134 or if it's a component root, it may also get moved around
    // as the component is being moved.
    (N.key != null || $ && N === $.subTree) && gs(
      R,
      N,
      !0
      /* shallow */
    )) : A(
      R,
      N,
      H,
      ot,
      $,
      Y,
      q,
      it,
      tt
    );
  }, I = (R, N, H, z, $, Y, q, it, tt) => {
    N.slotScopeIds = it, R == null ? N.shapeFlag & 512 ? $.ctx.activate(
      N,
      H,
      z,
      q,
      tt
    ) : B(
      N,
      H,
      z,
      $,
      Y,
      q,
      tt
    ) : G(R, N, tt);
  }, B = (R, N, H, z, $, Y, q) => {
    const it = R.component = Sc(
      R,
      z,
      $
    );
    if (cs(R) && (it.ctx.renderer = V), Cc(it, !1, q), it.asyncDep) {
      if ($ && $.registerDep(it, X, q), !R.el) {
        const tt = it.subTree = dt(we);
        P(null, tt, N, H), R.placeholder = tt.el;
      }
    } else
      X(
        it,
        R,
        N,
        H,
        $,
        Y,
        q
      );
  }, G = (R, N, H) => {
    const z = N.component = R.component;
    if (rc(R, N, H))
      if (z.asyncDep && !z.asyncResolved) {
        N.el = R.el, b(z, N, H);
        return;
      } else
        z.next = N, z.update();
    else
      N.el = R.el, z.vnode = N;
  }, X = (R, N, H, z, $, Y, q) => {
    const it = () => {
      if (R.isMounted) {
        let { next: st, bu: at, u: ht, parent: ct, vnode: _t } = R;
        {
          const Bt = cl(R);
          if (Bt) {
            st && (st.el = _t.el, b(R, st, q)), Bt.asyncDep.then(() => {
              qt(() => {
                R.isUnmounted || J();
              }, $);
            });
            return;
          }
        }
        let gt = st, St;
        Ge(R, !1), st ? (st.el = _t.el, b(R, st, q)) : st = _t, at && fr(at), (St = st.props && st.props.onVnodeBeforeUpdate) && oe(St, ct, st, _t), Ge(R, !0);
        const vt = Us(R), Mt = R.subTree;
        R.subTree = vt, y(
          Mt,
          vt,
          // parent may have changed if it's in a teleport
          _(Mt.el),
          // anchor may have changed if it's in a fragment
          O(Mt),
          R,
          $,
          Y
        ), st.el = vt.el, gt === null && sc(R, vt.el), ht && qt(ht, $), (St = st.props && st.props.onVnodeUpdated) && qt(
          () => oe(St, ct, st, _t),
          $
        );
      } else {
        let st;
        const { el: at, props: ht } = N, { bm: ct, m: _t, parent: gt, root: St, type: vt } = R, Mt = on(N);
        Ge(R, !1), ct && fr(ct), !Mt && (st = ht && ht.onVnodeBeforeMount) && oe(st, gt, N), Ge(R, !0);
        {
          St.ce && St.ce._hasShadowRoot() && St.ce._injectChildStyle(
            vt,
            R.parent ? R.parent.type : void 0
          );
          const Bt = R.subTree = Us(R);
          y(
            null,
            Bt,
            H,
            z,
            R,
            $,
            Y
          ), N.el = Bt.el;
        }
        if (_t && qt(_t, $), !Mt && (st = ht && ht.onVnodeMounted)) {
          const Bt = N;
          qt(
            () => oe(st, gt, Bt),
            $
          );
        }
        (N.shapeFlag & 256 || gt && on(gt.vnode) && gt.vnode.shapeFlag & 256) && R.a && qt(R.a, $), R.isMounted = !0, N = H = z = null;
      }
    };
    R.scope.on();
    const tt = R.effect = new wa(it);
    R.scope.off();
    const J = R.update = tt.run.bind(tt), ot = R.job = tt.runIfDirty.bind(tt);
    ot.i = R, ot.id = R.uid, tt.scheduler = () => ls(ot), Ge(R, !0), J();
  }, b = (R, N, H) => {
    N.component = R;
    const z = R.vnode.props;
    R.vnode = N, R.next = null, ac(R, N.props, z, H), uc(R, N.children, H), Se(), Rs(R), Ce();
  }, A = (R, N, H, z, $, Y, q, it, tt = !1) => {
    const J = R && R.children, ot = R ? R.shapeFlag : 0, st = N.children, { patchFlag: at, shapeFlag: ht } = N;
    if (at > 0) {
      if (at & 128) {
        F(
          J,
          st,
          H,
          z,
          $,
          Y,
          q,
          it,
          tt
        );
        return;
      } else if (at & 256) {
        k(
          J,
          st,
          H,
          z,
          $,
          Y,
          q,
          it,
          tt
        );
        return;
      }
    }
    ht & 8 ? (ot & 16 && K(J, $, Y), st !== J && h(H, st)) : ot & 16 ? ht & 16 ? F(
      J,
      st,
      H,
      z,
      $,
      Y,
      q,
      it,
      tt
    ) : K(J, $, Y, !0) : (ot & 8 && h(H, ""), ht & 16 && C(
      st,
      H,
      z,
      $,
      Y,
      q,
      it,
      tt
    ));
  }, k = (R, N, H, z, $, Y, q, it, tt) => {
    R = R || We, N = N || We;
    const J = R.length, ot = N.length, st = Math.min(J, ot);
    let at;
    for (at = 0; at < st; at++) {
      const ht = N[at] = tt ? ye(N[at]) : ce(N[at]);
      y(
        R[at],
        ht,
        H,
        null,
        $,
        Y,
        q,
        it,
        tt
      );
    }
    J > ot ? K(
      R,
      $,
      Y,
      !0,
      !1,
      st
    ) : C(
      N,
      H,
      z,
      $,
      Y,
      q,
      it,
      tt,
      st
    );
  }, F = (R, N, H, z, $, Y, q, it, tt) => {
    let J = 0;
    const ot = N.length;
    let st = R.length - 1, at = ot - 1;
    for (; J <= st && J <= at; ) {
      const ht = R[J], ct = N[J] = tt ? ye(N[J]) : ce(N[J]);
      if (ai(ht, ct))
        y(
          ht,
          ct,
          H,
          null,
          $,
          Y,
          q,
          it,
          tt
        );
      else
        break;
      J++;
    }
    for (; J <= st && J <= at; ) {
      const ht = R[st], ct = N[at] = tt ? ye(N[at]) : ce(N[at]);
      if (ai(ht, ct))
        y(
          ht,
          ct,
          H,
          null,
          $,
          Y,
          q,
          it,
          tt
        );
      else
        break;
      st--, at--;
    }
    if (J > st) {
      if (J <= at) {
        const ht = at + 1, ct = ht < ot ? N[ht].el : z;
        for (; J <= at; )
          y(
            null,
            N[J] = tt ? ye(N[J]) : ce(N[J]),
            H,
            ct,
            $,
            Y,
            q,
            it,
            tt
          ), J++;
      }
    } else if (J > at)
      for (; J <= st; )
        W(R[J], $, Y, !0), J++;
    else {
      const ht = J, ct = J, _t = /* @__PURE__ */ new Map();
      for (J = ct; J <= at; J++) {
        const Wt = N[J] = tt ? ye(N[J]) : ce(N[J]);
        Wt.key != null && _t.set(Wt.key, J);
      }
      let gt, St = 0;
      const vt = at - ct + 1;
      let Mt = !1, Bt = 0;
      const Pe = new Array(vt);
      for (J = 0; J < vt; J++) Pe[J] = 0;
      for (J = ht; J <= st; J++) {
        const Wt = R[J];
        if (St >= vt) {
          W(Wt, $, Y, !0);
          continue;
        }
        let Zt;
        if (Wt.key != null)
          Zt = _t.get(Wt.key);
        else
          for (gt = ct; gt <= at; gt++)
            if (Pe[gt - ct] === 0 && ai(Wt, N[gt])) {
              Zt = gt;
              break;
            }
        Zt === void 0 ? W(Wt, $, Y, !0) : (Pe[Zt - ct] = J + 1, Zt >= Bt ? Bt = Zt : Mt = !0, y(
          Wt,
          N[Zt],
          H,
          null,
          $,
          Y,
          q,
          it,
          tt
        ), St++);
      }
      const Le = Mt ? pc(Pe) : We;
      for (gt = Le.length - 1, J = vt - 1; J >= 0; J--) {
        const Wt = ct + J, Zt = N[Wt], bs = N[Wt + 1], Ss = Wt + 1 < ot ? (
          // #13559, #14173 fallback to el placeholder for unresolved async component
          bs.el || ul(bs)
        ) : z;
        Pe[J] === 0 ? y(
          null,
          Zt,
          H,
          Ss,
          $,
          Y,
          q,
          it,
          tt
        ) : Mt && (gt < 0 || J !== Le[gt] ? L(Zt, H, Ss, 2) : gt--);
      }
    }
  }, L = (R, N, H, z, $ = null) => {
    const { el: Y, type: q, transition: it, children: tt, shapeFlag: J } = R;
    if (J & 6) {
      L(R.component.subTree, N, H, z);
      return;
    }
    if (J & 128) {
      R.suspense.move(N, H, z);
      return;
    }
    if (J & 64) {
      q.move(R, N, H, V);
      return;
    }
    if (q === Et) {
      r(Y, N, H);
      for (let st = 0; st < tt.length; st++)
        L(tt[st], N, H, z);
      r(R.anchor, N, H);
      return;
    }
    if (q === ln) {
      c(R, N, H);
      return;
    }
    if (z !== 2 && J & 1 && it)
      if (z === 0)
        it.persisted && !Y[yr] ? r(Y, N, H) : (it.beforeEnter(Y), r(Y, N, H), qt(() => it.enter(Y), $));
      else {
        const { leave: st, delayLeave: at, afterLeave: ht } = it, ct = () => {
          R.ctx.isUnmounted ? n(Y) : r(Y, N, H);
        }, _t = () => {
          const gt = Y._isLeaving || !!Y[yr];
          Y._isLeaving && Y[yr](
            !0
            /* cancelled */
          ), it.persisted && !gt ? ct() : st(Y, () => {
            ct(), ht && ht();
          });
        };
        at ? at(Y, ct, _t) : _t();
      }
    else
      r(Y, N, H);
  }, W = (R, N, H, z = !1, $ = !1) => {
    const {
      type: Y,
      props: q,
      ref: it,
      children: tt,
      dynamicChildren: J,
      shapeFlag: ot,
      patchFlag: st,
      dirs: at,
      cacheIndex: ht,
      memo: ct
    } = R;
    if ((st === -2 || J && J.hasOnce) && ($ = !1), it != null && (Se(), sn(it, null, H, R, !0), Ce()), ht != null && (!R.ctx || R.ctx === N) && (N.renderCache[ht] = void 0), ot & 256) {
      N.ctx.deactivate(R);
      return;
    }
    const _t = ot & 1 && at, gt = !on(R);
    let St;
    if (gt && (St = q && q.onVnodeBeforeUnmount) && oe(St, N, R), ot & 6)
      rt(R.component, H, z);
    else {
      if (ot & 128) {
        R.suspense.unmount(H, z);
        return;
      }
      _t && De(R, null, N, "beforeUnmount"), ot & 64 ? R.type.remove(
        R,
        N,
        H,
        V,
        z
      ) : J && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !J.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (Y !== Et || st > 0 && st & 64) ? K(
        J,
        N,
        H,
        !1,
        !0
      ) : (Y === Et && st & 384 || !$ && ot & 16) && K(tt, N, H), z && U(R);
    }
    const vt = ct != null && ht == null;
    (gt && (St = q && q.onVnodeUnmounted) || _t || vt) && qt(() => {
      St && oe(St, N, R), _t && De(R, null, N, "unmounted"), vt && (R.el = null);
    }, H);
  }, U = (R) => {
    const { type: N, el: H, anchor: z, transition: $ } = R;
    if (N === Et) {
      Q(H, z);
      return;
    }
    if (N === ln) {
      d(R), $ && !$.persisted && $.afterLeave && $.afterLeave();
      return;
    }
    const Y = () => {
      n(H), $ && !$.persisted && $.afterLeave && $.afterLeave();
    };
    if (R.shapeFlag & 1 && $ && !$.persisted) {
      const { leave: q, delayLeave: it } = $, tt = () => q(H, Y);
      it ? it(R.el, Y, tt) : tt();
    } else
      Y();
  }, Q = (R, N) => {
    let H;
    for (; R !== N; )
      H = m(R), n(R), R = H;
    n(N);
  }, rt = (R, N, H) => {
    const { bum: z, scope: $, job: Y, subTree: q, um: it, m: tt, a: J } = R;
    Hs(tt), Hs(J), z && fr(z), $.stop(), Y ? (Y.flags |= 8, W(q, R, N, H)) : R.vnode.el && q && (q.transition = R.vnode.transition, W(q, R, N, H)), it && qt(it, N), qt(() => {
      R.isUnmounted = !0;
    }, N);
  }, K = (R, N, H, z = !1, $ = !1, Y = 0) => {
    for (let q = Y; q < R.length; q++)
      W(R[q], N, H, z, $);
  }, O = (R) => {
    if (R.shapeFlag & 6)
      return O(R.component.subTree);
    if (R.shapeFlag & 128)
      return R.suspense.next();
    const N = m(R.anchor || R.el), H = N && N[Ka];
    return H ? m(H) : N;
  };
  let j = !1;
  const Z = (R, N, H) => {
    let z;
    R == null ? N._vnode && (W(N._vnode, null, null, !0), z = N._vnode.component) : y(
      N._vnode || null,
      R,
      N,
      null,
      null,
      null,
      H
    ), N._vnode = R, j || (j = !0, Rs(z), Va(), j = !1);
  }, V = {
    p: y,
    um: W,
    m: L,
    r: U,
    mt: B,
    mc: C,
    pc: A,
    pbc: T,
    n: O,
    o: t
  };
  return {
    render: Z,
    hydrate: void 0,
    createApp: Qh(Z)
  };
}
function br({ type: t, props: e }, i) {
  return i === "svg" && t === "foreignObject" || i === "mathml" && t === "annotation-xml" && e && e.encoding && e.encoding.includes("html") ? void 0 : i;
}
function Ge({ effect: t, job: e }, i) {
  i ? (t.flags |= 32, e.flags |= 4) : (t.flags &= -33, e.flags &= -5);
}
function gc(t, e) {
  return (!t || t && !t.pendingBranch) && e && !e.persisted;
}
function gs(t, e, i = !1) {
  const r = t.children, n = e.children;
  if (ut(r) && ut(n))
    for (let s = 0; s < r.length; s++) {
      const a = r[s];
      let o = n[s];
      o.shapeFlag & 1 && !o.dynamicChildren && ((o.patchFlag <= 0 || o.patchFlag === 32) && (o = n[s] = ye(n[s]), o.el = a.el), !i && o.patchFlag !== -2 && gs(a, o)), o.type === ar && (o.patchFlag === -1 && (o = n[s] = ye(o)), o.el = a.el), o.type === we && !o.el && (o.el = a.el);
    }
}
function pc(t) {
  const e = t.slice(), i = [0];
  let r, n, s, a, o;
  const l = t.length;
  for (r = 0; r < l; r++) {
    const u = t[r];
    if (u !== 0) {
      if (n = i[i.length - 1], t[n] < u) {
        e[r] = n, i.push(r);
        continue;
      }
      for (s = 0, a = i.length - 1; s < a; )
        o = s + a >> 1, t[i[o]] < u ? s = o + 1 : a = o;
      u < t[i[s]] && (s > 0 && (e[r] = i[s - 1]), i[s] = r);
    }
  }
  for (s = i.length, a = i[s - 1]; s-- > 0; )
    i[s] = a, a = e[a];
  return i;
}
function cl(t) {
  const e = t.subTree.component;
  if (e)
    return e.asyncDep && !e.asyncResolved ? e : cl(e);
}
function Hs(t) {
  if (t)
    for (let e = 0; e < t.length; e++)
      t[e].flags |= 8;
}
function ul(t) {
  if (t.placeholder)
    return t.placeholder;
  const e = t.component;
  return e ? ul(e.subTree) : null;
}
const dl = (t) => t.__isSuspense;
function mc(t, e) {
  e && e.pendingBranch ? ut(t) ? e.effects.push(...t) : e.effects.push(t) : Ba(t);
}
const Et = /* @__PURE__ */ Symbol.for("v-fgt"), ar = /* @__PURE__ */ Symbol.for("v-txt"), we = /* @__PURE__ */ Symbol.for("v-cmt"), ln = /* @__PURE__ */ Symbol.for("v-stc"), qe = [];
let Qt = null;
function bt(t = !1) {
  qe.push(Qt = t ? null : []);
}
function fl() {
  qe.pop(), Qt = qe[qe.length - 1] || null;
}
let dn = 1;
function In(t, e = !1) {
  dn += t, t < 0 && Qt && e && (Qt.hasOnce = !0);
}
function gl(t) {
  return t.dynamicChildren = dn > 0 ? Qt || We : null, fl(), dn > 0 && Qt && Qt.push(t), t;
}
function Rt(t, e, i, r, n, s) {
  return gl(
    et(
      t,
      e,
      i,
      r,
      n,
      s,
      !0
    )
  );
}
function ti(t, e, i, r, n) {
  return gl(
    dt(
      t,
      e,
      i,
      r,
      n,
      !0
    )
  );
}
function Un(t) {
  return t ? t.__v_isVNode === !0 : !1;
}
function ai(t, e) {
  return t.type === e.type && t.key === e.key;
}
const pl = ({ key: t }) => t ?? null, Rn = ({
  ref: t,
  ref_key: e,
  ref_for: i
}) => (typeof t == "number" && (t = "" + t), t != null ? Ft(t) || /* @__PURE__ */ It(t) || ft(t) ? { i: Jt, r: t, k: e, f: !!i } : t : null);
function et(t, e = null, i = null, r = 0, n = null, s = t === Et ? 0 : 1, a = !1, o = !1) {
  const l = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: t,
    props: e,
    key: e && pl(e),
    ref: e && Rn(e),
    scopeId: Wa,
    slotScopeIds: null,
    children: i,
    component: null,
    suspense: null,
    ssContent: null,
    ssFallback: null,
    dirs: null,
    transition: null,
    el: null,
    anchor: null,
    target: null,
    targetStart: null,
    targetAnchor: null,
    staticCount: 0,
    shapeFlag: s,
    patchFlag: r,
    dynamicProps: n,
    dynamicChildren: null,
    appContext: null,
    ctx: Jt
  };
  return o ? (Bn(l, i), s & 128 && t.normalize(l)) : i && (l.shapeFlag |= Ft(i) ? 8 : 16), dn > 0 && // avoid a block node from tracking itself
  !a && // has current parent block
  Qt && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (l.patchFlag > 0 || s & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  l.patchFlag !== 32 && Qt.push(l), l;
}
const dt = _c;
function _c(t, e = null, i = null, r = 0, n = null, s = !1) {
  if ((!t || t === Wh) && (t = we), Un(t)) {
    const o = ri(
      t,
      e,
      !0
      /* mergeRef: true */
    );
    return i && Bn(o, i), dn > 0 && !s && Qt && (o.shapeFlag & 6 ? Qt[Qt.indexOf(t)] = o : Qt.push(o)), o.patchFlag = -2, o;
  }
  if (Ac(t) && (t = t.__vccOpts), e) {
    e = yc(e);
    let { class: o, style: l } = e;
    o && !Ft(o) && (e.class = Me(o)), Pt(l) && (/* @__PURE__ */ as(l) && !ut(l) && (l = Ut({}, l)), e.style = _n(l));
  }
  const a = Ft(t) ? 1 : dl(t) ? 128 : nr(t) ? 64 : Pt(t) ? 4 : ft(t) ? 2 : 0;
  return et(
    t,
    e,
    i,
    r,
    n,
    a,
    s,
    !0
  );
}
function yc(t) {
  return t ? /* @__PURE__ */ as(t) || rl(t) ? Ut({}, t) : t : null;
}
function ri(t, e, i = !1, r = !1) {
  const { props: n, ref: s, patchFlag: a, children: o, transition: l } = t, u = e ? ml(n || {}, e) : n, h = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: t.type,
    props: u,
    key: u && pl(u),
    ref: e && e.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      i && s ? ut(s) ? s.concat(Rn(e)) : [s, Rn(e)] : Rn(e)
    ) : s,
    scopeId: t.scopeId,
    slotScopeIds: t.slotScopeIds,
    children: o,
    target: t.target,
    targetStart: t.targetStart,
    targetAnchor: t.targetAnchor,
    staticCount: t.staticCount,
    shapeFlag: t.shapeFlag,
    // if the vnode is cloned with extra props, we can no longer assume its
    // existing patch flag to be reliable and need to add the FULL_PROPS flag.
    // note: preserve flag for fragments since they use the flag for children
    // fast paths only.
    patchFlag: e && t.type !== Et ? a === -1 ? 16 : a | 16 : a,
    dynamicProps: t.dynamicProps,
    dynamicChildren: t.dynamicChildren,
    appContext: t.appContext,
    dirs: t.dirs,
    transition: l,
    // These should technically only be non-null on mounted VNodes. However,
    // they *should* be copied for kept-alive vnodes. So we just always copy
    // them since them being non-null during a mount doesn't affect the logic as
    // they will simply be overwritten.
    component: t.component,
    suspense: t.suspense,
    ssContent: t.ssContent && ri(t.ssContent),
    ssFallback: t.ssFallback && ri(t.ssFallback),
    placeholder: t.placeholder,
    el: t.el,
    anchor: t.anchor,
    ctx: t.ctx,
    ce: t.ce,
    cacheIndex: t.cacheIndex
  };
  return l && r && hs(
    h,
    l.clone(h)
  ), h;
}
function Re(t = " ", e = 0) {
  return dt(ar, null, t, e);
}
function Ws(t, e) {
  const i = dt(ln, null, t);
  return i.staticCount = e, i;
}
function Ve(t = "", e = !1) {
  return e ? (bt(), ti(we, null, t)) : dt(we, null, t);
}
function ce(t) {
  return t == null || typeof t == "boolean" ? dt(we) : ut(t) ? dt(
    Et,
    null,
    // #3666, avoid reference pollution when reusing vnode
    t.slice()
  ) : Un(t) ? ye(t) : dt(ar, null, String(t));
}
function ye(t) {
  return t.el === null && t.patchFlag !== -1 || t.memo ? t : ri(t);
}
function Bn(t, e) {
  let i = 0;
  const { shapeFlag: r } = t;
  if (e == null)
    e = null;
  else if (ut(e))
    i = 16;
  else if (typeof e == "object")
    if (r & 65) {
      const n = e.default;
      n && (n._c && (n._d = !1), Bn(t, n()), n._c && (n._d = !0));
      return;
    } else {
      i = 32;
      const n = e._;
      !n && !rl(e) ? e._ctx = Jt : n === 3 && Jt && (Jt.slots._ === 1 ? e._ = 1 : (e._ = 2, t.patchFlag |= 1024));
    }
  else if (ft(e)) {
    if (r & 65) {
      Bn(t, { default: e });
      return;
    }
    e = { default: e, _ctx: Jt }, i = 32;
  } else
    e = String(e), r & 64 ? (i = 16, e = [Re(e)]) : i = 8;
  t.children = e, t.shapeFlag |= i;
}
function ml(...t) {
  const e = {};
  for (let i = 0; i < t.length; i++) {
    const r = t[i];
    for (const n in r)
      if (n === "class")
        e.class !== r.class && (e.class = Me([e.class, r.class]));
      else if (n === "style")
        e.style = _n([e.style, r.style]);
      else if ($n(n)) {
        const s = e[n], a = r[n];
        a && s !== a && !(ut(s) && s.includes(a)) ? e[n] = s ? [].concat(s, a) : a : a == null && s == null && // mergeProps({ 'onUpdate:modelValue': undefined }) should not retain
        // the model listener.
        !Xn(n) && (e[n] = a);
      } else n !== "" && (e[n] = r[n]);
  }
  return e;
}
function oe(t, e, i, r = null) {
  se(t, e, 7, [
    i,
    r
  ]);
}
const vc = Za();
let bc = 0;
function Sc(t, e, i) {
  const r = t.type, n = (e ? e.appContext : t.appContext) || vc, s = {
    uid: bc++,
    vnode: t,
    type: r,
    parent: e,
    appContext: n,
    root: null,
    // to be immediately set
    next: null,
    subTree: null,
    // will be set synchronously right after creation
    effect: null,
    update: null,
    // will be set synchronously right after creation
    job: null,
    scope: new Yl(
      !0
      /* detached */
    ),
    render: null,
    proxy: null,
    exposed: null,
    exposeProxy: null,
    withProxy: null,
    provides: e ? e.provides : Object.create(n.provides),
    ids: e ? e.ids : ["", 0, 0],
    accessCache: null,
    renderCache: [],
    // local resolved assets
    components: null,
    directives: null,
    // resolved props and emits options
    propsOptions: ol(r, n),
    emitsOptions: tl(r, n),
    // emit
    emit: null,
    // to be set immediately
    emitted: null,
    // props default value
    propsDefaults: Tt,
    // inheritAttrs
    inheritAttrs: r.inheritAttrs,
    // state
    ctx: Tt,
    data: Tt,
    props: Tt,
    attrs: Tt,
    slots: Tt,
    refs: Tt,
    setupState: Tt,
    setupContext: null,
    // suspense related
    suspense: i,
    suspenseId: i ? i.pendingId : 0,
    asyncDep: null,
    asyncResolved: !1,
    // lifecycle hooks
    // not using enums here because it results in computed properties
    isMounted: !1,
    isUnmounted: !1,
    isDeactivated: !1,
    bc: null,
    c: null,
    bm: null,
    m: null,
    bu: null,
    u: null,
    um: null,
    bum: null,
    da: null,
    a: null,
    rtg: null,
    rtc: null,
    ec: null,
    sp: null
  };
  return s.ctx = { _: s }, s.root = e ? e.root : s, s.emit = tc.bind(null, s), t.ce && t.ce(s), s;
}
let Ht = null;
const lr = () => Ht || Jt;
let Vn, fn;
{
  const t = Zn(), e = (i, r) => {
    let n;
    return (n = t[i]) || (n = t[i] = []), n.push(r), (s) => {
      n.length > 1 ? n.forEach((a) => a(s)) : n[0](s);
    };
  };
  Vn = e(
    "__VUE_INSTANCE_SETTERS__",
    (i) => Ht = i
  ), fn = e(
    "__VUE_SSR_SETTERS__",
    (i) => gn = i
  );
}
const bn = (t) => {
  const e = Ht;
  return Vn(t), t.scope.on(), () => {
    t.scope.off(), Vn(e);
  };
}, js = () => {
  Ht && Ht.scope.off(), Vn(null);
};
function _l(t) {
  return t.vnode.shapeFlag & 4;
}
let gn = !1;
function Cc(t, e = !1, i = !1) {
  e && fn(e);
  const { props: r, children: n } = t.vnode, s = _l(t);
  oc(t, r, s, e), cc(t, n, i || e);
  const a = s ? wc(t, e) : void 0;
  return e && fn(!1), a;
}
function wc(t, e) {
  const i = t.type;
  t.accessCache = /* @__PURE__ */ Object.create(null), t.proxy = new Proxy(t.ctx, qh);
  const { setup: r } = i;
  if (r) {
    Se();
    const n = t.setupContext = r.length > 1 ? Pc(t) : null, s = bn(t), a = yn(
      r,
      t,
      0,
      [
        t.props,
        n
      ]
    ), o = pa(a);
    if (Ce(), s(), (o || t.sp) && !on(t) && Ya(t), o) {
      if (a.then(js, js), e)
        return a.then((l) => {
          fn(!0);
          try {
            qs(t, l, e);
          } finally {
            fn(!1);
          }
        }).catch((l) => {
          ir(l, t, 0);
        });
      t.asyncDep = a;
    } else
      qs(t, a);
  } else
    yl(t);
}
function qs(t, e, i) {
  ft(e) ? t.type.__ssrInlineRender ? t.ssrRender = e : t.render = e : Pt(e) && (t.setupState = Ga(e)), yl(t);
}
function yl(t, e, i) {
  const r = t.type;
  t.render || (t.render = r.render || ne);
  {
    const n = bn(t);
    Se();
    try {
      Kh(t);
    } finally {
      Ce(), n();
    }
  }
}
const xc = {
  get(t, e) {
    return Vt(t, "get", ""), t[e];
  }
};
function Pc(t) {
  const e = (i) => {
    t.exposed = i || {};
  };
  return {
    attrs: new Proxy(t.attrs, xc),
    slots: t.slots,
    emit: t.emit,
    expose: e
  };
}
function hr(t) {
  return t.exposed ? t.exposeProxy || (t.exposeProxy = new Proxy(Ga(gh(t.exposed)), {
    get(e, i) {
      if (i in e)
        return e[i];
      if (i in an)
        return an[i](t);
    },
    has(e, i) {
      return i in e || i in an;
    }
  })) : t.proxy;
}
function Tc(t, e = !0) {
  return ft(t) ? t.displayName || t.name : t.name || e && t.__name;
}
function Ac(t) {
  return ft(t) && "__vccOpts" in t;
}
const Hn = (t, e) => /* @__PURE__ */ vh(t, e, gn);
function Rc(t, e, i) {
  try {
    In(-1);
    const r = arguments.length;
    return r === 2 ? Pt(e) && !ut(e) ? Un(e) ? dt(t, null, [e]) : dt(t, e) : dt(t, null, e) : (r > 3 ? i = Array.prototype.slice.call(arguments, 2) : r === 3 && Un(i) && (i = [i]), dt(t, e, i));
  } finally {
    In(1);
  }
}
const Ec = "3.5.43";
/**
* @vue/runtime-dom v3.5.43
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let Kr;
const Ks = typeof window < "u" && window.trustedTypes;
if (Ks)
  try {
    Kr = /* @__PURE__ */ Ks.createPolicy("vue", {
      createHTML: (t) => t
    });
  } catch {
  }
const vl = Kr ? (t) => Kr.createHTML(t) : (t) => t, Mc = "http://www.w3.org/2000/svg", Fc = "http://www.w3.org/1998/Math/MathML", _e = typeof document < "u" ? document : null, zs = _e && /* @__PURE__ */ _e.createElement("template"), kc = {
  insert: (t, e, i) => {
    e.insertBefore(t, i || null);
  },
  remove: (t) => {
    const e = t.parentNode;
    e && e.removeChild(t);
  },
  createElement: (t, e, i, r) => {
    const n = e === "svg" ? _e.createElementNS(Mc, t) : e === "mathml" ? _e.createElementNS(Fc, t) : i ? _e.createElement(t, { is: i }) : _e.createElement(t);
    return t === "select" && r && r.multiple != null && n.setAttribute("multiple", r.multiple), n;
  },
  createText: (t) => _e.createTextNode(t),
  createComment: (t) => _e.createComment(t),
  setText: (t, e) => {
    t.nodeValue = e;
  },
  setElementText: (t, e) => {
    t.textContent = e;
  },
  parentNode: (t) => t.parentNode,
  nextSibling: (t) => t.nextSibling,
  querySelector: (t) => _e.querySelector(t),
  setScopeId(t, e) {
    t.setAttribute(e, "");
  },
  // __UNSAFE__
  // Reason: innerHTML.
  // Static content here can only come from compiled templates.
  // As long as the user only uses trusted templates, this is safe.
  insertStaticContent(t, e, i, r, n, s) {
    const a = i ? i.previousSibling : e.lastChild;
    if (n && (n === s || n.nextSibling))
      for (; e.insertBefore(n.cloneNode(!0), i), !(n === s || !(n = n.nextSibling)); )
        ;
    else {
      zs.innerHTML = vl(
        r === "svg" ? `<svg>${t}</svg>` : r === "mathml" ? `<math>${t}</math>` : t
      );
      const o = zs.content;
      if (r === "svg" || r === "mathml") {
        const l = o.firstChild;
        for (; l.firstChild; )
          o.appendChild(l.firstChild);
        o.removeChild(l);
      }
      e.insertBefore(o, i);
    }
    return [
      // first
      a ? a.nextSibling : e.firstChild,
      // last
      i ? i.previousSibling : e.lastChild
    ];
  }
}, Oc = /* @__PURE__ */ Symbol("_vtc");
function Nc(t, e, i) {
  const r = t[Oc];
  r && (e = (e ? [e, ...r] : [...r]).join(" ")), e == null ? t.removeAttribute("class") : i ? t.setAttribute("class", e) : t.className = e;
}
const Wn = /* @__PURE__ */ Symbol("_vod"), bl = /* @__PURE__ */ Symbol("_vsh"), Lc = {
  // used for prop mismatch check during hydration
  name: "show",
  beforeMount(t, { value: e }, { transition: i }) {
    t[Wn] = t.style.display === "none" ? "" : t.style.display, i && e ? i.beforeEnter(t) : li(t, e);
  },
  mounted(t, { value: e }, { transition: i }) {
    i && e && i.enter(t);
  },
  updated(t, { value: e, oldValue: i }, { transition: r }) {
    !e != !i && (r ? e ? (r.beforeEnter(t), li(t, !0), r.enter(t)) : r.leave(t, () => {
      li(t, !1);
    }) : li(t, e));
  },
  beforeUnmount(t, { value: e }) {
    li(t, e);
  }
};
function li(t, e) {
  t.style.display = e ? t[Wn] : "none", t[bl] = !e;
}
const Sl = /* @__PURE__ */ Symbol("");
function Dc(t) {
  const e = lr();
  if (!e)
    return;
  const i = e.ut = (n = t(e.proxy)) => {
    Array.from(
      document.querySelectorAll(`[data-v-owner="${e.uid}"]`)
    ).forEach((s) => jn(s, n));
  }, r = () => {
    const n = t(e.proxy);
    e.ce ? jn(e.ce, n) : zr(e.subTree, n), i(n);
  };
  Xa(() => {
    Ba(r);
  }), Ke(() => {
    ee(r, ne, { flush: "post" });
    const n = new MutationObserver(r);
    n.observe(e.subTree.el.parentNode, { childList: !0 }), sr(() => n.disconnect());
  });
}
function zr(t, e) {
  if (t.shapeFlag & 128) {
    const i = t.suspense;
    t = i.activeBranch, i.pendingBranch && !i.isHydrating && i.effects.push(() => {
      zr(i.activeBranch, e);
    });
  }
  for (; t.component; )
    t = t.component.subTree;
  if (t.shapeFlag & 1 && t.el)
    jn(t.el, e);
  else if (t.type === Et)
    t.children.forEach((i) => zr(i, e));
  else if (t.type === ln) {
    let { el: i, anchor: r } = t;
    for (; i && (jn(i, e), i !== r); )
      i = i.nextSibling;
  }
}
function jn(t, e) {
  if (t.nodeType === 1) {
    const i = t.style;
    let r = "";
    for (const n in e) {
      const s = zl(e[n]);
      i.setProperty(`--${n}`, s), r += `--${n}: ${s};`;
    }
    i[Sl] = r;
  }
}
const Gc = /(?:^|;)\s*display\s*:/;
function Ic(t, e, i) {
  const r = t.style, n = Ft(i);
  let s = !1;
  if (i && !n) {
    if (e)
      if (Ft(e))
        for (const a of e.split(";")) {
          const o = a.slice(0, a.indexOf(":")).trim();
          i[o] == null && tn(r, o, "");
        }
      else
        for (const a in e)
          i[a] == null && tn(r, a, "");
    for (const a in i) {
      a === "display" && (s = !0);
      const o = i[a];
      o != null ? Bc(
        t,
        a,
        !Ft(e) && e ? e[a] : void 0,
        o
      ) || tn(r, a, o) : tn(r, a, "");
    }
  } else if (n) {
    if (e !== i) {
      const a = r[Sl];
      a && (i += ";" + a), r.cssText = i, s = Gc.test(i);
    }
  } else e && t.removeAttribute("style");
  Wn in t && (t[Wn] = s ? r.display : "", t[bl] && (r.display = "none"));
}
const Pn = /\s*!important$/;
function tn(t, e, i) {
  if (ut(i))
    i.forEach((r) => tn(t, e, r));
  else if (i == null && (i = ""), e.startsWith("--"))
    Pn.test(i) ? t.setProperty(e, i.replace(Pn, ""), "important") : t.setProperty(e, i);
  else {
    const r = Uc(t, e);
    Pn.test(i) ? t.setProperty(
      ze(r),
      i.replace(Pn, ""),
      "important"
    ) : t[r] = i;
  }
}
const Ys = ["Webkit", "Moz", "ms"], Sr = {};
function Uc(t, e) {
  const i = Sr[e];
  if (i)
    return i;
  let r = zt(e);
  if (r !== "filter" && r in t)
    return Sr[e] = r;
  r = Qn(r);
  for (let n = 0; n < Ys.length; n++) {
    const s = Ys[n] + r;
    if (s in t)
      return Sr[e] = s;
  }
  return e;
}
function Bc(t, e, i, r) {
  return t.tagName === "TEXTAREA" && (e === "width" || e === "height") && Ft(r) && i === r;
}
const $s = "http://www.w3.org/1999/xlink";
function Xs(t, e, i, r, n, s = jl(e)) {
  r && e.startsWith("xlink:") ? i == null ? t.removeAttributeNS($s, e.slice(6, e.length)) : t.setAttributeNS($s, e, i) : i == null || s && !va(i) ? t.removeAttribute(e) : t.setAttribute(
    e,
    s ? "" : de(i) ? String(i) : i
  );
}
function Js(t, e, i, r, n) {
  if (e === "innerHTML" || e === "textContent") {
    i != null && (t[e] = e === "innerHTML" ? vl(i) : i);
    return;
  }
  const s = t.tagName;
  if (e === "value" && s !== "PROGRESS" && // custom elements may use _value internally
  !s.includes("-")) {
    const o = s === "OPTION" ? t.getAttribute("value") || "" : t.value, l = i == null ? (
      // #11647: value should be set as empty string for null and undefined,
      // but <input type="checkbox"> should be set as 'on'.
      t.type === "checkbox" ? "on" : ""
    ) : String(i);
    (o !== l || !("_value" in t)) && (t.value = l), i == null && t.removeAttribute(e), t._value = i;
    return;
  }
  let a = !1;
  if (i === "" || i == null) {
    const o = typeof t[e];
    o === "boolean" ? i = va(i) : i == null && o === "string" ? (i = "", a = !0) : o === "number" && (i = 0, a = !0);
  }
  try {
    t[e] = i;
  } catch {
  }
  a && t.removeAttribute(n || e);
}
function Vc(t, e, i, r) {
  t.addEventListener(e, i, r);
}
function Hc(t, e, i, r) {
  t.removeEventListener(e, i, r);
}
const Qs = /* @__PURE__ */ Symbol("_vei");
function Wc(t, e, i, r, n = null) {
  const s = t[Qs] || (t[Qs] = {}), a = s[e];
  if (r && a)
    a.value = r;
  else {
    const [o, l] = Kc(e);
    if (r) {
      const u = s[e] = $c(
        r,
        n
      );
      Vc(t, o, u, l);
    } else a && (Hc(t, o, a, l), s[e] = void 0);
  }
}
const jc = /(Once|Passive|Capture)$/, qc = /^on:?(?:Once|Passive|Capture)$/;
function Kc(t) {
  let e, i;
  for (; (i = t.match(jc)) && !qc.test(t); )
    e || (e = {}), t = t.slice(0, t.length - i[1].length), e[i[1].toLowerCase()] = !0;
  return [t[2] === ":" ? t.slice(3) : ze(t.slice(2)), e];
}
let Cr = 0;
const zc = /* @__PURE__ */ Promise.resolve(), Yc = () => Cr || (zc.then(() => Cr = 0), Cr = Date.now());
function $c(t, e) {
  const i = (r) => {
    if (!r._vts)
      r._vts = Date.now();
    else if (r._vts <= i.attached)
      return;
    const n = i.value;
    if (ut(n)) {
      const s = r.stopImmediatePropagation;
      r.stopImmediatePropagation = () => {
        s.call(r), r._stopped = !0;
      };
      const a = n.slice(), o = [r];
      for (let l = 0; l < a.length && !r._stopped; l++) {
        const u = a[l];
        u && se(
          u,
          e,
          5,
          o
        );
      }
    } else
      se(
        n,
        e,
        5,
        [r]
      );
  };
  return i.value = t, i.attached = Yc(), i;
}
const Zs = (t) => t.charCodeAt(0) === 111 && t.charCodeAt(1) === 110 && // lowercase letter
t.charCodeAt(2) > 96 && t.charCodeAt(2) < 123, Xc = (t, e, i, r, n, s) => {
  const a = n === "svg";
  e === "class" ? Nc(t, r, a) : e === "style" ? Ic(t, i, r) : $n(e) ? Xn(e) || Wc(t, e, i, r, s) : (e[0] === "." ? (e = e.slice(1), !0) : e[0] === "^" ? (e = e.slice(1), !1) : Jc(t, e, r, a)) ? (Js(t, e, r), !t.tagName.includes("-") && (e === "value" || e === "checked" || e === "selected") && Xs(t, e, r, a, s, e !== "value")) : /* #11081 force set props for possible async custom element */ t._isVueCE && // #12408 check if it's declared prop or it's async custom element
  (Qc(t, e) || // @ts-expect-error _def is private
  t._def.__asyncLoader && (/[A-Z]/.test(e) || !Ft(r))) ? Js(t, zt(e), r, s, e) : (e === "true-value" ? t._trueValue = r : e === "false-value" && (t._falseValue = r), Xs(t, e, r, a));
};
function Jc(t, e, i, r) {
  if (r)
    return !!(e === "innerHTML" || e === "textContent" || e in t && Zs(e) && ft(i));
  if (e === "spellcheck" || e === "draggable" || e === "translate" || e === "autocorrect" || e === "sandbox" && t.tagName === "IFRAME" || e === "form" || e === "list" && t.tagName === "INPUT" || e === "type" && t.tagName === "TEXTAREA")
    return !1;
  if (e === "width" || e === "height") {
    const n = t.tagName;
    if (n === "IMG" || n === "VIDEO" || n === "CANVAS" || n === "SOURCE")
      return !1;
  }
  return Zs(e) && Ft(i) ? !1 : e in t;
}
function Qc(t, e) {
  const i = (
    // @ts-expect-error _def is private
    t._def.props
  );
  if (!i)
    return !1;
  const r = zt(e);
  return Array.isArray(i) ? i.some((n) => zt(n) === r) : Object.keys(i).some((n) => zt(n) === r);
}
const Zc = ["ctrl", "shift", "alt", "meta"], tu = {
  stop: (t) => t.stopPropagation(),
  prevent: (t) => t.preventDefault(),
  self: (t) => t.target !== t.currentTarget,
  ctrl: (t) => !t.ctrlKey,
  shift: (t) => !t.shiftKey,
  alt: (t) => !t.altKey,
  meta: (t) => !t.metaKey,
  left: (t) => "button" in t && t.button !== 0,
  middle: (t) => "button" in t && t.button !== 1,
  right: (t) => "button" in t && t.button !== 2,
  exact: (t, e) => Zc.some((i) => t[`${i}Key`] && !e.includes(i))
}, Yr = (t, e) => {
  if (!t) return t;
  const i = t._withMods || (t._withMods = {}), r = e.join(".");
  return i[r] || (i[r] = ((n, ...s) => {
    for (let a = 0; a < e.length; a++) {
      const o = tu[e[a]];
      if (o && o(n, e)) return;
    }
    return t(n, ...s);
  }));
}, eu = /* @__PURE__ */ Ut({ patchProp: Xc }, kc);
let to;
function iu() {
  return to || (to = dc(eu));
}
const nu = ((...t) => {
  const e = iu().createApp(...t), { mount: i } = e;
  return e.mount = (r) => {
    const n = su(r);
    if (!n) return;
    const s = e._component;
    !ft(s) && !s.render && !s.template && (s.template = n.innerHTML), n.nodeType === 1 && (n.textContent = "");
    const a = i(n, !1, ru(n));
    return n instanceof Element && (n.removeAttribute("v-cloak"), n.setAttribute("data-v-app", "")), a;
  }, e;
});
function ru(t) {
  if (t instanceof SVGElement)
    return "svg";
  if (typeof MathMLElement == "function" && t instanceof MathMLElement)
    return "mathml";
}
function su(t) {
  return Ft(t) ? document.querySelector(t) : t;
}
var eo = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function ou(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
}
var En = { exports: {} }, hi = {}, wr = {}, xr = {}, io;
function pt() {
  return io || (io = 1, (function(t) {
    Object.defineProperty(t, "__esModule", { value: !0 }), t._registerNode = t.Konva = t.glob = void 0;
    const e = Math.PI / 180;
    function i() {
      return typeof window < "u" && ({}.toString.call(window) === "[object Window]" || {}.toString.call(window) === "[object global]");
    }
    t.glob = typeof eo < "u" ? eo : typeof window < "u" ? window : typeof WorkerGlobalScope < "u" ? self : {}, t.Konva = {
      _global: t.glob,
      version: "9.3.22",
      isBrowser: i(),
      isUnminified: /param/.test((function(n) {
      }).toString()),
      dblClickWindow: 400,
      getAngle(n) {
        return t.Konva.angleDeg ? n * e : n;
      },
      enableTrace: !1,
      pointerEventsEnabled: !0,
      autoDrawEnabled: !0,
      hitOnDragEnabled: !1,
      capturePointerEventsEnabled: !1,
      _mouseListenClick: !1,
      _touchListenClick: !1,
      _pointerListenClick: !1,
      _mouseInDblClickWindow: !1,
      _touchInDblClickWindow: !1,
      _pointerInDblClickWindow: !1,
      _mouseDblClickPointerId: null,
      _touchDblClickPointerId: null,
      _pointerDblClickPointerId: null,
      _fixTextRendering: !1,
      pixelRatio: typeof window < "u" && window.devicePixelRatio || 1,
      dragDistance: 3,
      angleDeg: !0,
      showWarnings: !0,
      dragButtons: [0, 1],
      isDragging() {
        return t.Konva.DD.isDragging;
      },
      isTransforming() {
        var n;
        return (n = t.Konva.Transformer) === null || n === void 0 ? void 0 : n.isTransforming();
      },
      isDragReady() {
        return !!t.Konva.DD.node;
      },
      releaseCanvasOnDestroy: !0,
      document: t.glob.document,
      _injectGlobal(n) {
        t.glob.Konva = n;
      }
    };
    const r = (n) => {
      t.Konva[n.prototype.getClassName()] = n;
    };
    t._registerNode = r, t.Konva._injectGlobal(t.Konva);
  })(xr)), xr;
}
var Pr = {}, no;
function Ot() {
  return no || (no = 1, (function(t) {
    Object.defineProperty(t, "__esModule", { value: !0 }), t.Util = t.Transform = void 0;
    const e = pt();
    class i {
      constructor(d = [1, 0, 0, 1, 0, 0]) {
        this.dirty = !1, this.m = d && d.slice() || [1, 0, 0, 1, 0, 0];
      }
      reset() {
        this.m[0] = 1, this.m[1] = 0, this.m[2] = 0, this.m[3] = 1, this.m[4] = 0, this.m[5] = 0;
      }
      copy() {
        return new i(this.m);
      }
      copyInto(d) {
        d.m[0] = this.m[0], d.m[1] = this.m[1], d.m[2] = this.m[2], d.m[3] = this.m[3], d.m[4] = this.m[4], d.m[5] = this.m[5];
      }
      point(d) {
        const v = this.m;
        return {
          x: v[0] * d.x + v[2] * d.y + v[4],
          y: v[1] * d.x + v[3] * d.y + v[5]
        };
      }
      translate(d, v) {
        return this.m[4] += this.m[0] * d + this.m[2] * v, this.m[5] += this.m[1] * d + this.m[3] * v, this;
      }
      scale(d, v) {
        return this.m[0] *= d, this.m[1] *= d, this.m[2] *= v, this.m[3] *= v, this;
      }
      rotate(d) {
        const v = Math.cos(d), x = Math.sin(d), E = this.m[0] * v + this.m[2] * x, C = this.m[1] * v + this.m[3] * x, w = this.m[0] * -x + this.m[2] * v, T = this.m[1] * -x + this.m[3] * v;
        return this.m[0] = E, this.m[1] = C, this.m[2] = w, this.m[3] = T, this;
      }
      getTranslation() {
        return {
          x: this.m[4],
          y: this.m[5]
        };
      }
      skew(d, v) {
        const x = this.m[0] + this.m[2] * v, E = this.m[1] + this.m[3] * v, C = this.m[2] + this.m[0] * d, w = this.m[3] + this.m[1] * d;
        return this.m[0] = x, this.m[1] = E, this.m[2] = C, this.m[3] = w, this;
      }
      multiply(d) {
        const v = this.m[0] * d.m[0] + this.m[2] * d.m[1], x = this.m[1] * d.m[0] + this.m[3] * d.m[1], E = this.m[0] * d.m[2] + this.m[2] * d.m[3], C = this.m[1] * d.m[2] + this.m[3] * d.m[3], w = this.m[0] * d.m[4] + this.m[2] * d.m[5] + this.m[4], T = this.m[1] * d.m[4] + this.m[3] * d.m[5] + this.m[5];
        return this.m[0] = v, this.m[1] = x, this.m[2] = E, this.m[3] = C, this.m[4] = w, this.m[5] = T, this;
      }
      invert() {
        const d = 1 / (this.m[0] * this.m[3] - this.m[1] * this.m[2]), v = this.m[3] * d, x = -this.m[1] * d, E = -this.m[2] * d, C = this.m[0] * d, w = d * (this.m[2] * this.m[5] - this.m[3] * this.m[4]), T = d * (this.m[1] * this.m[4] - this.m[0] * this.m[5]);
        return this.m[0] = v, this.m[1] = x, this.m[2] = E, this.m[3] = C, this.m[4] = w, this.m[5] = T, this;
      }
      getMatrix() {
        return this.m;
      }
      decompose() {
        const d = this.m[0], v = this.m[1], x = this.m[2], E = this.m[3], C = this.m[4], w = this.m[5], T = d * E - v * x, M = {
          x: C,
          y: w,
          rotation: 0,
          scaleX: 0,
          scaleY: 0,
          skewX: 0,
          skewY: 0
        };
        if (d != 0 || v != 0) {
          const D = Math.sqrt(d * d + v * v);
          M.rotation = v > 0 ? Math.acos(d / D) : -Math.acos(d / D), M.scaleX = D, M.scaleY = T / D, M.skewX = (d * x + v * E) / T, M.skewY = 0;
        } else if (x != 0 || E != 0) {
          const D = Math.sqrt(x * x + E * E);
          M.rotation = Math.PI / 2 - (E > 0 ? Math.acos(-x / D) : -Math.acos(x / D)), M.scaleX = T / D, M.scaleY = D, M.skewX = 0, M.skewY = (d * x + v * E) / T;
        }
        return M.rotation = t.Util._getRotation(M.rotation), M;
      }
    }
    t.Transform = i;
    const r = "[object Array]", n = "[object Number]", s = "[object String]", a = "[object Boolean]", o = Math.PI / 180, l = 180 / Math.PI, u = "#", h = "", _ = "0", m = "Konva warning: ", f = "Konva error: ", p = "rgb(", y = {
      aliceblue: [240, 248, 255],
      antiquewhite: [250, 235, 215],
      aqua: [0, 255, 255],
      aquamarine: [127, 255, 212],
      azure: [240, 255, 255],
      beige: [245, 245, 220],
      bisque: [255, 228, 196],
      black: [0, 0, 0],
      blanchedalmond: [255, 235, 205],
      blue: [0, 0, 255],
      blueviolet: [138, 43, 226],
      brown: [165, 42, 42],
      burlywood: [222, 184, 135],
      cadetblue: [95, 158, 160],
      chartreuse: [127, 255, 0],
      chocolate: [210, 105, 30],
      coral: [255, 127, 80],
      cornflowerblue: [100, 149, 237],
      cornsilk: [255, 248, 220],
      crimson: [220, 20, 60],
      cyan: [0, 255, 255],
      darkblue: [0, 0, 139],
      darkcyan: [0, 139, 139],
      darkgoldenrod: [184, 132, 11],
      darkgray: [169, 169, 169],
      darkgreen: [0, 100, 0],
      darkgrey: [169, 169, 169],
      darkkhaki: [189, 183, 107],
      darkmagenta: [139, 0, 139],
      darkolivegreen: [85, 107, 47],
      darkorange: [255, 140, 0],
      darkorchid: [153, 50, 204],
      darkred: [139, 0, 0],
      darksalmon: [233, 150, 122],
      darkseagreen: [143, 188, 143],
      darkslateblue: [72, 61, 139],
      darkslategray: [47, 79, 79],
      darkslategrey: [47, 79, 79],
      darkturquoise: [0, 206, 209],
      darkviolet: [148, 0, 211],
      deeppink: [255, 20, 147],
      deepskyblue: [0, 191, 255],
      dimgray: [105, 105, 105],
      dimgrey: [105, 105, 105],
      dodgerblue: [30, 144, 255],
      firebrick: [178, 34, 34],
      floralwhite: [255, 255, 240],
      forestgreen: [34, 139, 34],
      fuchsia: [255, 0, 255],
      gainsboro: [220, 220, 220],
      ghostwhite: [248, 248, 255],
      gold: [255, 215, 0],
      goldenrod: [218, 165, 32],
      gray: [128, 128, 128],
      green: [0, 128, 0],
      greenyellow: [173, 255, 47],
      grey: [128, 128, 128],
      honeydew: [240, 255, 240],
      hotpink: [255, 105, 180],
      indianred: [205, 92, 92],
      indigo: [75, 0, 130],
      ivory: [255, 255, 240],
      khaki: [240, 230, 140],
      lavender: [230, 230, 250],
      lavenderblush: [255, 240, 245],
      lawngreen: [124, 252, 0],
      lemonchiffon: [255, 250, 205],
      lightblue: [173, 216, 230],
      lightcoral: [240, 128, 128],
      lightcyan: [224, 255, 255],
      lightgoldenrodyellow: [250, 250, 210],
      lightgray: [211, 211, 211],
      lightgreen: [144, 238, 144],
      lightgrey: [211, 211, 211],
      lightpink: [255, 182, 193],
      lightsalmon: [255, 160, 122],
      lightseagreen: [32, 178, 170],
      lightskyblue: [135, 206, 250],
      lightslategray: [119, 136, 153],
      lightslategrey: [119, 136, 153],
      lightsteelblue: [176, 196, 222],
      lightyellow: [255, 255, 224],
      lime: [0, 255, 0],
      limegreen: [50, 205, 50],
      linen: [250, 240, 230],
      magenta: [255, 0, 255],
      maroon: [128, 0, 0],
      mediumaquamarine: [102, 205, 170],
      mediumblue: [0, 0, 205],
      mediumorchid: [186, 85, 211],
      mediumpurple: [147, 112, 219],
      mediumseagreen: [60, 179, 113],
      mediumslateblue: [123, 104, 238],
      mediumspringgreen: [0, 250, 154],
      mediumturquoise: [72, 209, 204],
      mediumvioletred: [199, 21, 133],
      midnightblue: [25, 25, 112],
      mintcream: [245, 255, 250],
      mistyrose: [255, 228, 225],
      moccasin: [255, 228, 181],
      navajowhite: [255, 222, 173],
      navy: [0, 0, 128],
      oldlace: [253, 245, 230],
      olive: [128, 128, 0],
      olivedrab: [107, 142, 35],
      orange: [255, 165, 0],
      orangered: [255, 69, 0],
      orchid: [218, 112, 214],
      palegoldenrod: [238, 232, 170],
      palegreen: [152, 251, 152],
      paleturquoise: [175, 238, 238],
      palevioletred: [219, 112, 147],
      papayawhip: [255, 239, 213],
      peachpuff: [255, 218, 185],
      peru: [205, 133, 63],
      pink: [255, 192, 203],
      plum: [221, 160, 203],
      powderblue: [176, 224, 230],
      purple: [128, 0, 128],
      rebeccapurple: [102, 51, 153],
      red: [255, 0, 0],
      rosybrown: [188, 143, 143],
      royalblue: [65, 105, 225],
      saddlebrown: [139, 69, 19],
      salmon: [250, 128, 114],
      sandybrown: [244, 164, 96],
      seagreen: [46, 139, 87],
      seashell: [255, 245, 238],
      sienna: [160, 82, 45],
      silver: [192, 192, 192],
      skyblue: [135, 206, 235],
      slateblue: [106, 90, 205],
      slategray: [119, 128, 144],
      slategrey: [119, 128, 144],
      snow: [255, 255, 250],
      springgreen: [0, 255, 127],
      steelblue: [70, 130, 180],
      tan: [210, 180, 140],
      teal: [0, 128, 128],
      thistle: [216, 191, 216],
      transparent: [255, 255, 255, 0],
      tomato: [255, 99, 71],
      turquoise: [64, 224, 208],
      violet: [238, 130, 238],
      wheat: [245, 222, 179],
      white: [255, 255, 255],
      whitesmoke: [245, 245, 245],
      yellow: [255, 255, 0],
      yellowgreen: [154, 205, 5]
    }, S = /rgb\((\d{1,3}),(\d{1,3}),(\d{1,3})\)/;
    let P = [];
    const g = typeof requestAnimationFrame < "u" && requestAnimationFrame || function(c) {
      setTimeout(c, 60);
    };
    t.Util = {
      _isElement(c) {
        return !!(c && c.nodeType == 1);
      },
      _isFunction(c) {
        return !!(c && c.constructor && c.call && c.apply);
      },
      _isPlainObject(c) {
        return !!c && c.constructor === Object;
      },
      _isArray(c) {
        return Object.prototype.toString.call(c) === r;
      },
      _isNumber(c) {
        return Object.prototype.toString.call(c) === n && !isNaN(c) && isFinite(c);
      },
      _isString(c) {
        return Object.prototype.toString.call(c) === s;
      },
      _isBoolean(c) {
        return Object.prototype.toString.call(c) === a;
      },
      isObject(c) {
        return c instanceof Object;
      },
      isValidSelector(c) {
        if (typeof c != "string")
          return !1;
        const d = c[0];
        return d === "#" || d === "." || d === d.toUpperCase();
      },
      _sign(c) {
        return c === 0 || c > 0 ? 1 : -1;
      },
      requestAnimFrame(c) {
        P.push(c), P.length === 1 && g(function() {
          const d = P;
          P = [], d.forEach(function(v) {
            v();
          });
        });
      },
      createCanvasElement() {
        const c = document.createElement("canvas");
        try {
          c.style = c.style || {};
        } catch {
        }
        return c;
      },
      createImageElement() {
        return document.createElement("img");
      },
      _isInDocument(c) {
        for (; c = c.parentNode; )
          if (c == document)
            return !0;
        return !1;
      },
      _urlToImage(c, d) {
        const v = t.Util.createImageElement();
        v.onload = function() {
          d(v);
        }, v.src = c;
      },
      _rgbToHex(c, d, v) {
        return ((1 << 24) + (c << 16) + (d << 8) + v).toString(16).slice(1);
      },
      _hexToRgb(c) {
        c = c.replace(u, h);
        const d = parseInt(c, 16);
        return {
          r: d >> 16 & 255,
          g: d >> 8 & 255,
          b: d & 255
        };
      },
      getRandomColor() {
        let c = (Math.random() * 16777215 << 0).toString(16);
        for (; c.length < 6; )
          c = _ + c;
        return u + c;
      },
      getRGB(c) {
        let d;
        return c in y ? (d = y[c], {
          r: d[0],
          g: d[1],
          b: d[2]
        }) : c[0] === u ? this._hexToRgb(c.substring(1)) : c.substr(0, 4) === p ? (d = S.exec(c.replace(/ /g, "")), {
          r: parseInt(d[1], 10),
          g: parseInt(d[2], 10),
          b: parseInt(d[3], 10)
        }) : {
          r: 0,
          g: 0,
          b: 0
        };
      },
      colorToRGBA(c) {
        return c = c || "black", t.Util._namedColorToRBA(c) || t.Util._hex3ColorToRGBA(c) || t.Util._hex4ColorToRGBA(c) || t.Util._hex6ColorToRGBA(c) || t.Util._hex8ColorToRGBA(c) || t.Util._rgbColorToRGBA(c) || t.Util._rgbaColorToRGBA(c) || t.Util._hslColorToRGBA(c);
      },
      _namedColorToRBA(c) {
        const d = y[c.toLowerCase()];
        return d ? {
          r: d[0],
          g: d[1],
          b: d[2],
          a: 1
        } : null;
      },
      _rgbColorToRGBA(c) {
        if (c.indexOf("rgb(") === 0) {
          c = c.match(/rgb\(([^)]+)\)/)[1];
          const d = c.split(/ *, */).map(Number);
          return {
            r: d[0],
            g: d[1],
            b: d[2],
            a: 1
          };
        }
      },
      _rgbaColorToRGBA(c) {
        if (c.indexOf("rgba(") === 0) {
          c = c.match(/rgba\(([^)]+)\)/)[1];
          const d = c.split(/ *, */).map((v, x) => v.slice(-1) === "%" ? x === 3 ? parseInt(v) / 100 : parseInt(v) / 100 * 255 : Number(v));
          return {
            r: d[0],
            g: d[1],
            b: d[2],
            a: d[3]
          };
        }
      },
      _hex8ColorToRGBA(c) {
        if (c[0] === "#" && c.length === 9)
          return {
            r: parseInt(c.slice(1, 3), 16),
            g: parseInt(c.slice(3, 5), 16),
            b: parseInt(c.slice(5, 7), 16),
            a: parseInt(c.slice(7, 9), 16) / 255
          };
      },
      _hex6ColorToRGBA(c) {
        if (c[0] === "#" && c.length === 7)
          return {
            r: parseInt(c.slice(1, 3), 16),
            g: parseInt(c.slice(3, 5), 16),
            b: parseInt(c.slice(5, 7), 16),
            a: 1
          };
      },
      _hex4ColorToRGBA(c) {
        if (c[0] === "#" && c.length === 5)
          return {
            r: parseInt(c[1] + c[1], 16),
            g: parseInt(c[2] + c[2], 16),
            b: parseInt(c[3] + c[3], 16),
            a: parseInt(c[4] + c[4], 16) / 255
          };
      },
      _hex3ColorToRGBA(c) {
        if (c[0] === "#" && c.length === 4)
          return {
            r: parseInt(c[1] + c[1], 16),
            g: parseInt(c[2] + c[2], 16),
            b: parseInt(c[3] + c[3], 16),
            a: 1
          };
      },
      _hslColorToRGBA(c) {
        if (/hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)/g.test(c)) {
          const [d, ...v] = /hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)/g.exec(c), x = Number(v[0]) / 360, E = Number(v[1]) / 100, C = Number(v[2]) / 100;
          let w, T, M;
          if (E === 0)
            return M = C * 255, {
              r: Math.round(M),
              g: Math.round(M),
              b: Math.round(M),
              a: 1
            };
          C < 0.5 ? w = C * (1 + E) : w = C + E - C * E;
          const D = 2 * C - w, I = [0, 0, 0];
          for (let B = 0; B < 3; B++)
            T = x + 1 / 3 * -(B - 1), T < 0 && T++, T > 1 && T--, 6 * T < 1 ? M = D + (w - D) * 6 * T : 2 * T < 1 ? M = w : 3 * T < 2 ? M = D + (w - D) * (2 / 3 - T) * 6 : M = D, I[B] = M * 255;
          return {
            r: Math.round(I[0]),
            g: Math.round(I[1]),
            b: Math.round(I[2]),
            a: 1
          };
        }
      },
      haveIntersection(c, d) {
        return !(d.x > c.x + c.width || d.x + d.width < c.x || d.y > c.y + c.height || d.y + d.height < c.y);
      },
      cloneObject(c) {
        const d = {};
        for (const v in c)
          this._isPlainObject(c[v]) ? d[v] = this.cloneObject(c[v]) : this._isArray(c[v]) ? d[v] = this.cloneArray(c[v]) : d[v] = c[v];
        return d;
      },
      cloneArray(c) {
        return c.slice(0);
      },
      degToRad(c) {
        return c * o;
      },
      radToDeg(c) {
        return c * l;
      },
      _degToRad(c) {
        return t.Util.warn("Util._degToRad is removed. Please use public Util.degToRad instead."), t.Util.degToRad(c);
      },
      _radToDeg(c) {
        return t.Util.warn("Util._radToDeg is removed. Please use public Util.radToDeg instead."), t.Util.radToDeg(c);
      },
      _getRotation(c) {
        return e.Konva.angleDeg ? t.Util.radToDeg(c) : c;
      },
      _capitalize(c) {
        return c.charAt(0).toUpperCase() + c.slice(1);
      },
      throw(c) {
        throw new Error(f + c);
      },
      error(c) {
        console.error(f + c);
      },
      warn(c) {
        e.Konva.showWarnings && console.warn(m + c);
      },
      each(c, d) {
        for (const v in c)
          d(v, c[v]);
      },
      _inRange(c, d, v) {
        return d <= c && c < v;
      },
      _getProjectionToSegment(c, d, v, x, E, C) {
        let w, T, M;
        const D = (c - v) * (c - v) + (d - x) * (d - x);
        if (D == 0)
          w = c, T = d, M = (E - v) * (E - v) + (C - x) * (C - x);
        else {
          const I = ((E - c) * (v - c) + (C - d) * (x - d)) / D;
          I < 0 ? (w = c, T = d, M = (c - E) * (c - E) + (d - C) * (d - C)) : I > 1 ? (w = v, T = x, M = (v - E) * (v - E) + (x - C) * (x - C)) : (w = c + I * (v - c), T = d + I * (x - d), M = (w - E) * (w - E) + (T - C) * (T - C));
        }
        return [w, T, M];
      },
      _getProjectionToLine(c, d, v) {
        const x = t.Util.cloneObject(c);
        let E = Number.MAX_VALUE;
        return d.forEach(function(C, w) {
          if (!v && w === d.length - 1)
            return;
          const T = d[(w + 1) % d.length], M = t.Util._getProjectionToSegment(C.x, C.y, T.x, T.y, c.x, c.y), D = M[0], I = M[1], B = M[2];
          B < E && (x.x = D, x.y = I, E = B);
        }), x;
      },
      _prepareArrayForTween(c, d, v) {
        const x = [], E = [];
        if (c.length > d.length) {
          const w = d;
          d = c, c = w;
        }
        for (let w = 0; w < c.length; w += 2)
          x.push({
            x: c[w],
            y: c[w + 1]
          });
        for (let w = 0; w < d.length; w += 2)
          E.push({
            x: d[w],
            y: d[w + 1]
          });
        const C = [];
        return E.forEach(function(w) {
          const T = t.Util._getProjectionToLine(w, x, v);
          C.push(T.x), C.push(T.y);
        }), C;
      },
      _prepareToStringify(c) {
        let d;
        c.visitedByCircularReferenceRemoval = !0;
        for (const v in c)
          if (c.hasOwnProperty(v) && c[v] && typeof c[v] == "object") {
            if (d = Object.getOwnPropertyDescriptor(c, v), c[v].visitedByCircularReferenceRemoval || t.Util._isElement(c[v]))
              if (d.configurable)
                delete c[v];
              else
                return null;
            else if (t.Util._prepareToStringify(c[v]) === null)
              if (d.configurable)
                delete c[v];
              else
                return null;
          }
        return delete c.visitedByCircularReferenceRemoval, c;
      },
      _assign(c, d) {
        for (const v in d)
          c[v] = d[v];
        return c;
      },
      _getFirstPointerId(c) {
        return c.touches ? c.changedTouches[0].identifier : c.pointerId || 999;
      },
      releaseCanvas(...c) {
        e.Konva.releaseCanvasOnDestroy && c.forEach((d) => {
          d.width = 0, d.height = 0;
        });
      },
      drawRoundedRectPath(c, d, v, x) {
        let E = 0, C = 0, w = 0, T = 0;
        typeof x == "number" ? E = C = w = T = Math.min(x, d / 2, v / 2) : (E = Math.min(x[0] || 0, d / 2, v / 2), C = Math.min(x[1] || 0, d / 2, v / 2), T = Math.min(x[2] || 0, d / 2, v / 2), w = Math.min(x[3] || 0, d / 2, v / 2)), c.moveTo(E, 0), c.lineTo(d - C, 0), c.arc(d - C, C, C, Math.PI * 3 / 2, 0, !1), c.lineTo(d, v - T), c.arc(d - T, v - T, T, 0, Math.PI / 2, !1), c.lineTo(w, v), c.arc(w, v - w, w, Math.PI / 2, Math.PI, !1), c.lineTo(0, E), c.arc(E, E, E, Math.PI, Math.PI * 3 / 2, !1);
      }
    };
  })(Pr)), Pr;
}
var ci = {}, pe = {}, me = {}, ro;
function Cl() {
  if (ro) return me;
  ro = 1, Object.defineProperty(me, "__esModule", { value: !0 }), me.HitContext = me.SceneContext = me.Context = void 0;
  const t = Ot(), e = pt();
  function i(P) {
    const g = [], c = P.length, d = t.Util;
    for (let v = 0; v < c; v++) {
      let x = P[v];
      d._isNumber(x) ? x = Math.round(x * 1e3) / 1e3 : d._isString(x) || (x = x + ""), g.push(x);
    }
    return g;
  }
  const r = ",", n = "(", s = ")", a = "([", o = "])", l = ";", u = "()", h = "=", _ = [
    "arc",
    "arcTo",
    "beginPath",
    "bezierCurveTo",
    "clearRect",
    "clip",
    "closePath",
    "createLinearGradient",
    "createPattern",
    "createRadialGradient",
    "drawImage",
    "ellipse",
    "fill",
    "fillText",
    "getImageData",
    "createImageData",
    "lineTo",
    "moveTo",
    "putImageData",
    "quadraticCurveTo",
    "rect",
    "roundRect",
    "restore",
    "rotate",
    "save",
    "scale",
    "setLineDash",
    "setTransform",
    "stroke",
    "strokeText",
    "transform",
    "translate"
  ], m = [
    "fillStyle",
    "strokeStyle",
    "shadowColor",
    "shadowBlur",
    "shadowOffsetX",
    "shadowOffsetY",
    "letterSpacing",
    "lineCap",
    "lineDashOffset",
    "lineJoin",
    "lineWidth",
    "miterLimit",
    "direction",
    "font",
    "textAlign",
    "textBaseline",
    "globalAlpha",
    "globalCompositeOperation",
    "imageSmoothingEnabled"
  ], f = 100;
  let p = class {
    constructor(g) {
      this.canvas = g, e.Konva.enableTrace && (this.traceArr = [], this._enableTrace());
    }
    fillShape(g) {
      g.fillEnabled() && this._fill(g);
    }
    _fill(g) {
    }
    strokeShape(g) {
      g.hasStroke() && this._stroke(g);
    }
    _stroke(g) {
    }
    fillStrokeShape(g) {
      g.attrs.fillAfterStrokeEnabled ? (this.strokeShape(g), this.fillShape(g)) : (this.fillShape(g), this.strokeShape(g));
    }
    getTrace(g, c) {
      let d = this.traceArr, v = d.length, x = "", E, C, w, T;
      for (E = 0; E < v; E++)
        C = d[E], w = C.method, w ? (T = C.args, x += w, g ? x += u : t.Util._isArray(T[0]) ? x += a + T.join(r) + o : (c && (T = T.map((M) => typeof M == "number" ? Math.floor(M) : M)), x += n + T.join(r) + s)) : (x += C.property, g || (x += h + C.val)), x += l;
      return x;
    }
    clearTrace() {
      this.traceArr = [];
    }
    _trace(g) {
      let c = this.traceArr, d;
      c.push(g), d = c.length, d >= f && c.shift();
    }
    reset() {
      const g = this.getCanvas().getPixelRatio();
      this.setTransform(1 * g, 0, 0, 1 * g, 0, 0);
    }
    getCanvas() {
      return this.canvas;
    }
    clear(g) {
      const c = this.getCanvas();
      g ? this.clearRect(g.x || 0, g.y || 0, g.width || 0, g.height || 0) : this.clearRect(0, 0, c.getWidth() / c.pixelRatio, c.getHeight() / c.pixelRatio);
    }
    _applyLineCap(g) {
      const c = g.attrs.lineCap;
      c && this.setAttr("lineCap", c);
    }
    _applyOpacity(g) {
      const c = g.getAbsoluteOpacity();
      c !== 1 && this.setAttr("globalAlpha", c);
    }
    _applyLineJoin(g) {
      const c = g.attrs.lineJoin;
      c && this.setAttr("lineJoin", c);
    }
    setAttr(g, c) {
      this._context[g] = c;
    }
    arc(g, c, d, v, x, E) {
      this._context.arc(g, c, d, v, x, E);
    }
    arcTo(g, c, d, v, x) {
      this._context.arcTo(g, c, d, v, x);
    }
    beginPath() {
      this._context.beginPath();
    }
    bezierCurveTo(g, c, d, v, x, E) {
      this._context.bezierCurveTo(g, c, d, v, x, E);
    }
    clearRect(g, c, d, v) {
      this._context.clearRect(g, c, d, v);
    }
    clip(...g) {
      this._context.clip.apply(this._context, g);
    }
    closePath() {
      this._context.closePath();
    }
    createImageData(g, c) {
      const d = arguments;
      if (d.length === 2)
        return this._context.createImageData(g, c);
      if (d.length === 1)
        return this._context.createImageData(g);
    }
    createLinearGradient(g, c, d, v) {
      return this._context.createLinearGradient(g, c, d, v);
    }
    createPattern(g, c) {
      return this._context.createPattern(g, c);
    }
    createRadialGradient(g, c, d, v, x, E) {
      return this._context.createRadialGradient(g, c, d, v, x, E);
    }
    drawImage(g, c, d, v, x, E, C, w, T) {
      const M = arguments, D = this._context;
      M.length === 3 ? D.drawImage(g, c, d) : M.length === 5 ? D.drawImage(g, c, d, v, x) : M.length === 9 && D.drawImage(g, c, d, v, x, E, C, w, T);
    }
    ellipse(g, c, d, v, x, E, C, w) {
      this._context.ellipse(g, c, d, v, x, E, C, w);
    }
    isPointInPath(g, c, d, v) {
      return d ? this._context.isPointInPath(d, g, c, v) : this._context.isPointInPath(g, c, v);
    }
    fill(...g) {
      this._context.fill.apply(this._context, g);
    }
    fillRect(g, c, d, v) {
      this._context.fillRect(g, c, d, v);
    }
    strokeRect(g, c, d, v) {
      this._context.strokeRect(g, c, d, v);
    }
    fillText(g, c, d, v) {
      v ? this._context.fillText(g, c, d, v) : this._context.fillText(g, c, d);
    }
    measureText(g) {
      return this._context.measureText(g);
    }
    getImageData(g, c, d, v) {
      return this._context.getImageData(g, c, d, v);
    }
    lineTo(g, c) {
      this._context.lineTo(g, c);
    }
    moveTo(g, c) {
      this._context.moveTo(g, c);
    }
    rect(g, c, d, v) {
      this._context.rect(g, c, d, v);
    }
    roundRect(g, c, d, v, x) {
      this._context.roundRect(g, c, d, v, x);
    }
    putImageData(g, c, d) {
      this._context.putImageData(g, c, d);
    }
    quadraticCurveTo(g, c, d, v) {
      this._context.quadraticCurveTo(g, c, d, v);
    }
    restore() {
      this._context.restore();
    }
    rotate(g) {
      this._context.rotate(g);
    }
    save() {
      this._context.save();
    }
    scale(g, c) {
      this._context.scale(g, c);
    }
    setLineDash(g) {
      this._context.setLineDash ? this._context.setLineDash(g) : "mozDash" in this._context ? this._context.mozDash = g : "webkitLineDash" in this._context && (this._context.webkitLineDash = g);
    }
    getLineDash() {
      return this._context.getLineDash();
    }
    setTransform(g, c, d, v, x, E) {
      this._context.setTransform(g, c, d, v, x, E);
    }
    stroke(g) {
      g ? this._context.stroke(g) : this._context.stroke();
    }
    strokeText(g, c, d, v) {
      this._context.strokeText(g, c, d, v);
    }
    transform(g, c, d, v, x, E) {
      this._context.transform(g, c, d, v, x, E);
    }
    translate(g, c) {
      this._context.translate(g, c);
    }
    _enableTrace() {
      let g = this, c = _.length, d = this.setAttr, v, x;
      const E = function(C) {
        let w = g[C], T;
        g[C] = function() {
          return x = i(Array.prototype.slice.call(arguments, 0)), T = w.apply(g, arguments), g._trace({
            method: C,
            args: x
          }), T;
        };
      };
      for (v = 0; v < c; v++)
        E(_[v]);
      g.setAttr = function() {
        d.apply(g, arguments);
        const C = arguments[0];
        let w = arguments[1];
        (C === "shadowOffsetX" || C === "shadowOffsetY" || C === "shadowBlur") && (w = w / this.canvas.getPixelRatio()), g._trace({
          property: C,
          val: w
        });
      };
    }
    _applyGlobalCompositeOperation(g) {
      const c = g.attrs.globalCompositeOperation;
      !c || c === "source-over" || this.setAttr("globalCompositeOperation", c);
    }
  };
  me.Context = p, m.forEach(function(P) {
    Object.defineProperty(p.prototype, P, {
      get() {
        return this._context[P];
      },
      set(g) {
        this._context[P] = g;
      }
    });
  });
  class y extends p {
    constructor(g, { willReadFrequently: c = !1 } = {}) {
      super(g), this._context = g._canvas.getContext("2d", {
        willReadFrequently: c
      });
    }
    _fillColor(g) {
      const c = g.fill();
      this.setAttr("fillStyle", c), g._fillFunc(this);
    }
    _fillPattern(g) {
      this.setAttr("fillStyle", g._getFillPattern()), g._fillFunc(this);
    }
    _fillLinearGradient(g) {
      const c = g._getLinearGradient();
      c && (this.setAttr("fillStyle", c), g._fillFunc(this));
    }
    _fillRadialGradient(g) {
      const c = g._getRadialGradient();
      c && (this.setAttr("fillStyle", c), g._fillFunc(this));
    }
    _fill(g) {
      const c = g.fill(), d = g.getFillPriority();
      if (c && d === "color") {
        this._fillColor(g);
        return;
      }
      const v = g.getFillPatternImage();
      if (v && d === "pattern") {
        this._fillPattern(g);
        return;
      }
      const x = g.getFillLinearGradientColorStops();
      if (x && d === "linear-gradient") {
        this._fillLinearGradient(g);
        return;
      }
      const E = g.getFillRadialGradientColorStops();
      if (E && d === "radial-gradient") {
        this._fillRadialGradient(g);
        return;
      }
      c ? this._fillColor(g) : v ? this._fillPattern(g) : x ? this._fillLinearGradient(g) : E && this._fillRadialGradient(g);
    }
    _strokeLinearGradient(g) {
      const c = g.getStrokeLinearGradientStartPoint(), d = g.getStrokeLinearGradientEndPoint(), v = g.getStrokeLinearGradientColorStops(), x = this.createLinearGradient(c.x, c.y, d.x, d.y);
      if (v) {
        for (let E = 0; E < v.length; E += 2)
          x.addColorStop(v[E], v[E + 1]);
        this.setAttr("strokeStyle", x);
      }
    }
    _stroke(g) {
      const c = g.dash(), d = g.getStrokeScaleEnabled();
      if (g.hasStroke()) {
        if (!d) {
          this.save();
          const x = this.getCanvas().getPixelRatio();
          this.setTransform(x, 0, 0, x, 0, 0);
        }
        this._applyLineCap(g), c && g.dashEnabled() && (this.setLineDash(c), this.setAttr("lineDashOffset", g.dashOffset())), this.setAttr("lineWidth", g.strokeWidth()), g.getShadowForStrokeEnabled() || this.setAttr("shadowColor", "rgba(0,0,0,0)"), g.getStrokeLinearGradientColorStops() ? this._strokeLinearGradient(g) : this.setAttr("strokeStyle", g.stroke()), g._strokeFunc(this), d || this.restore();
      }
    }
    _applyShadow(g) {
      var c, d, v;
      const x = (c = g.getShadowRGBA()) !== null && c !== void 0 ? c : "black", E = (d = g.getShadowBlur()) !== null && d !== void 0 ? d : 5, C = (v = g.getShadowOffset()) !== null && v !== void 0 ? v : {
        x: 0,
        y: 0
      }, w = g.getAbsoluteScale(), T = this.canvas.getPixelRatio(), M = w.x * T, D = w.y * T;
      this.setAttr("shadowColor", x), this.setAttr("shadowBlur", E * Math.min(Math.abs(M), Math.abs(D))), this.setAttr("shadowOffsetX", C.x * M), this.setAttr("shadowOffsetY", C.y * D);
    }
  }
  me.SceneContext = y;
  class S extends p {
    constructor(g) {
      super(g), this._context = g._canvas.getContext("2d", {
        willReadFrequently: !0
      });
    }
    _fill(g) {
      this.save(), this.setAttr("fillStyle", g.colorKey), g._fillFuncHit(this), this.restore();
    }
    strokeShape(g) {
      g.hasHitStroke() && this._stroke(g);
    }
    _stroke(g) {
      if (g.hasHitStroke()) {
        const c = g.getStrokeScaleEnabled();
        if (!c) {
          this.save();
          const x = this.getCanvas().getPixelRatio();
          this.setTransform(x, 0, 0, x, 0, 0);
        }
        this._applyLineCap(g);
        const d = g.hitStrokeWidth(), v = d === "auto" ? g.strokeWidth() : d;
        this.setAttr("lineWidth", v), this.setAttr("strokeStyle", g.colorKey), g._strokeFuncHit(this), c || this.restore();
      }
    }
  }
  return me.HitContext = S, me;
}
var so;
function cr() {
  if (so) return pe;
  so = 1, Object.defineProperty(pe, "__esModule", { value: !0 }), pe.HitCanvas = pe.SceneCanvas = pe.Canvas = void 0;
  const t = Ot(), e = Cl(), i = pt();
  let r;
  function n() {
    if (r)
      return r;
    const l = t.Util.createCanvasElement(), u = l.getContext("2d");
    return r = (function() {
      const h = i.Konva._global.devicePixelRatio || 1, _ = u.webkitBackingStorePixelRatio || u.mozBackingStorePixelRatio || u.msBackingStorePixelRatio || u.oBackingStorePixelRatio || u.backingStorePixelRatio || 1;
      return h / _;
    })(), t.Util.releaseCanvas(l), r;
  }
  let s = class {
    constructor(u) {
      this.pixelRatio = 1, this.width = 0, this.height = 0, this.isCache = !1;
      const _ = (u || {}).pixelRatio || i.Konva.pixelRatio || n();
      this.pixelRatio = _, this._canvas = t.Util.createCanvasElement(), this._canvas.style.padding = "0", this._canvas.style.margin = "0", this._canvas.style.border = "0", this._canvas.style.background = "transparent", this._canvas.style.position = "absolute", this._canvas.style.top = "0", this._canvas.style.left = "0";
    }
    getContext() {
      return this.context;
    }
    getPixelRatio() {
      return this.pixelRatio;
    }
    setPixelRatio(u) {
      const h = this.pixelRatio;
      this.pixelRatio = u, this.setSize(this.getWidth() / h, this.getHeight() / h);
    }
    setWidth(u) {
      this.width = this._canvas.width = u * this.pixelRatio, this._canvas.style.width = u + "px";
      const h = this.pixelRatio;
      this.getContext()._context.scale(h, h);
    }
    setHeight(u) {
      this.height = this._canvas.height = u * this.pixelRatio, this._canvas.style.height = u + "px";
      const h = this.pixelRatio;
      this.getContext()._context.scale(h, h);
    }
    getWidth() {
      return this.width;
    }
    getHeight() {
      return this.height;
    }
    setSize(u, h) {
      this.setWidth(u || 0), this.setHeight(h || 0);
    }
    toDataURL(u, h) {
      try {
        return this._canvas.toDataURL(u, h);
      } catch {
        try {
          return this._canvas.toDataURL();
        } catch (m) {
          return t.Util.error("Unable to get data URL. " + m.message + " For more info read https://konvajs.org/docs/posts/Tainted_Canvas.html."), "";
        }
      }
    }
  };
  pe.Canvas = s;
  class a extends s {
    constructor(u = { width: 0, height: 0, willReadFrequently: !1 }) {
      super(u), this.context = new e.SceneContext(this, {
        willReadFrequently: u.willReadFrequently
      }), this.setSize(u.width, u.height);
    }
  }
  pe.SceneCanvas = a;
  class o extends s {
    constructor(u = { width: 0, height: 0 }) {
      super(u), this.hitCanvas = !0, this.context = new e.HitContext(this), this.setSize(u.width, u.height);
    }
  }
  return pe.HitCanvas = o, pe;
}
var Tr = {}, oo;
function ps() {
  return oo || (oo = 1, (function(t) {
    Object.defineProperty(t, "__esModule", { value: !0 }), t.DD = void 0;
    const e = pt(), i = Ot();
    t.DD = {
      get isDragging() {
        let r = !1;
        return t.DD._dragElements.forEach((n) => {
          n.dragStatus === "dragging" && (r = !0);
        }), r;
      },
      justDragged: !1,
      get node() {
        let r;
        return t.DD._dragElements.forEach((n) => {
          r = n.node;
        }), r;
      },
      _dragElements: /* @__PURE__ */ new Map(),
      _drag(r) {
        const n = [];
        t.DD._dragElements.forEach((s, a) => {
          const { node: o } = s, l = o.getStage();
          l.setPointersPositions(r), s.pointerId === void 0 && (s.pointerId = i.Util._getFirstPointerId(r));
          const u = l._changedPointerPositions.find((h) => h.id === s.pointerId);
          if (u) {
            if (s.dragStatus !== "dragging") {
              const h = o.dragDistance();
              if (Math.max(Math.abs(u.x - s.startPointerPos.x), Math.abs(u.y - s.startPointerPos.y)) < h || (o.startDrag({ evt: r }), !o.isDragging()))
                return;
            }
            o._setDragPosition(r, s), n.push(o);
          }
        }), n.forEach((s) => {
          s.fire("dragmove", {
            type: "dragmove",
            target: s,
            evt: r
          }, !0);
        });
      },
      _endDragBefore(r) {
        const n = [];
        t.DD._dragElements.forEach((s) => {
          const { node: a } = s, o = a.getStage();
          if (r && o.setPointersPositions(r), !o._changedPointerPositions.find((h) => h.id === s.pointerId))
            return;
          (s.dragStatus === "dragging" || s.dragStatus === "stopped") && (t.DD.justDragged = !0, e.Konva._mouseListenClick = !1, e.Konva._touchListenClick = !1, e.Konva._pointerListenClick = !1, s.dragStatus = "stopped");
          const u = s.node.getLayer() || s.node instanceof e.Konva.Stage && s.node;
          u && n.indexOf(u) === -1 && n.push(u);
        }), n.forEach((s) => {
          s.draw();
        });
      },
      _endDragAfter(r) {
        t.DD._dragElements.forEach((n, s) => {
          n.dragStatus === "stopped" && n.node.fire("dragend", {
            type: "dragend",
            target: n.node,
            evt: r
          }, !0), n.dragStatus !== "dragging" && t.DD._dragElements.delete(s);
        });
      }
    }, e.Konva.isBrowser && (window.addEventListener("mouseup", t.DD._endDragBefore, !0), window.addEventListener("touchend", t.DD._endDragBefore, !0), window.addEventListener("touchcancel", t.DD._endDragBefore, !0), window.addEventListener("mousemove", t.DD._drag), window.addEventListener("touchmove", t.DD._drag), window.addEventListener("mouseup", t.DD._endDragAfter, !1), window.addEventListener("touchend", t.DD._endDragAfter, !1), window.addEventListener("touchcancel", t.DD._endDragAfter, !1));
  })(Tr)), Tr;
}
var Ar = {}, Yt = {}, ao;
function yt() {
  if (ao) return Yt;
  ao = 1, Object.defineProperty(Yt, "__esModule", { value: !0 }), Yt.RGBComponent = r, Yt.alphaComponent = n, Yt.getNumberValidator = s, Yt.getNumberOrArrayOfNumbersValidator = a, Yt.getNumberOrAutoValidator = o, Yt.getStringValidator = l, Yt.getStringOrGradientValidator = u, Yt.getFunctionValidator = h, Yt.getNumberArrayValidator = _, Yt.getBooleanValidator = m, Yt.getComponentValidator = f;
  const t = pt(), e = Ot();
  function i(p) {
    return e.Util._isString(p) ? '"' + p + '"' : Object.prototype.toString.call(p) === "[object Number]" || e.Util._isBoolean(p) ? p : Object.prototype.toString.call(p);
  }
  function r(p) {
    return p > 255 ? 255 : p < 0 ? 0 : Math.round(p);
  }
  function n(p) {
    return p > 1 ? 1 : p < 1e-4 ? 1e-4 : p;
  }
  function s() {
    if (t.Konva.isUnminified)
      return function(p, y) {
        return e.Util._isNumber(p) || e.Util.warn(i(p) + ' is a not valid value for "' + y + '" attribute. The value should be a number.'), p;
      };
  }
  function a(p) {
    if (t.Konva.isUnminified)
      return function(y, S) {
        let P = e.Util._isNumber(y), g = e.Util._isArray(y) && y.length == p;
        return !P && !g && e.Util.warn(i(y) + ' is a not valid value for "' + S + '" attribute. The value should be a number or Array<number>(' + p + ")"), y;
      };
  }
  function o() {
    if (t.Konva.isUnminified)
      return function(p, y) {
        return e.Util._isNumber(p) || p === "auto" || e.Util.warn(i(p) + ' is a not valid value for "' + y + '" attribute. The value should be a number or "auto".'), p;
      };
  }
  function l() {
    if (t.Konva.isUnminified)
      return function(p, y) {
        return e.Util._isString(p) || e.Util.warn(i(p) + ' is a not valid value for "' + y + '" attribute. The value should be a string.'), p;
      };
  }
  function u() {
    if (t.Konva.isUnminified)
      return function(p, y) {
        const S = e.Util._isString(p), P = Object.prototype.toString.call(p) === "[object CanvasGradient]" || p && p.addColorStop;
        return S || P || e.Util.warn(i(p) + ' is a not valid value for "' + y + '" attribute. The value should be a string or a native gradient.'), p;
      };
  }
  function h() {
    if (t.Konva.isUnminified)
      return function(p, y) {
        return e.Util._isFunction(p) || e.Util.warn(i(p) + ' is a not valid value for "' + y + '" attribute. The value should be a function.'), p;
      };
  }
  function _() {
    if (t.Konva.isUnminified)
      return function(p, y) {
        const S = Int8Array ? Object.getPrototypeOf(Int8Array) : null;
        return S && p instanceof S || (e.Util._isArray(p) ? p.forEach(function(P) {
          e.Util._isNumber(P) || e.Util.warn('"' + y + '" attribute has non numeric element ' + P + ". Make sure that all elements are numbers.");
        }) : e.Util.warn(i(p) + ' is a not valid value for "' + y + '" attribute. The value should be a array of numbers.')), p;
      };
  }
  function m() {
    if (t.Konva.isUnminified)
      return function(p, y) {
        return p === !0 || p === !1 || e.Util.warn(i(p) + ' is a not valid value for "' + y + '" attribute. The value should be a boolean.'), p;
      };
  }
  function f(p) {
    if (t.Konva.isUnminified)
      return function(y, S) {
        return y == null || e.Util.isObject(y) || e.Util.warn(i(y) + ' is a not valid value for "' + S + '" attribute. The value should be an object with properties ' + p), y;
      };
  }
  return Yt;
}
var lo;
function mt() {
  return lo || (lo = 1, (function(t) {
    Object.defineProperty(t, "__esModule", { value: !0 }), t.Factory = void 0;
    const e = Ot(), i = yt(), r = "get", n = "set";
    t.Factory = {
      addGetterSetter(s, a, o, l, u) {
        t.Factory.addGetter(s, a, o), t.Factory.addSetter(s, a, l, u), t.Factory.addOverloadedGetterSetter(s, a);
      },
      addGetter(s, a, o) {
        const l = r + e.Util._capitalize(a);
        s.prototype[l] = s.prototype[l] || function() {
          const u = this.attrs[a];
          return u === void 0 ? o : u;
        };
      },
      addSetter(s, a, o, l) {
        const u = n + e.Util._capitalize(a);
        s.prototype[u] || t.Factory.overWriteSetter(s, a, o, l);
      },
      overWriteSetter(s, a, o, l) {
        const u = n + e.Util._capitalize(a);
        s.prototype[u] = function(h) {
          return o && h !== void 0 && h !== null && (h = o.call(this, h, a)), this._setAttr(a, h), l && l.call(this), this;
        };
      },
      addComponentsGetterSetter(s, a, o, l, u) {
        const h = o.length, _ = e.Util._capitalize, m = r + _(a), f = n + _(a);
        s.prototype[m] = function() {
          const y = {};
          for (let S = 0; S < h; S++) {
            const P = o[S];
            y[P] = this.getAttr(a + _(P));
          }
          return y;
        };
        const p = (0, i.getComponentValidator)(o);
        s.prototype[f] = function(y) {
          const S = this.attrs[a];
          l && (y = l.call(this, y, a)), p && p.call(this, y, a);
          for (const P in y)
            y.hasOwnProperty(P) && this._setAttr(a + _(P), y[P]);
          return y || o.forEach((P) => {
            this._setAttr(a + _(P), void 0);
          }), this._fireChangeEvent(a, S, y), u && u.call(this), this;
        }, t.Factory.addOverloadedGetterSetter(s, a);
      },
      addOverloadedGetterSetter(s, a) {
        const o = e.Util._capitalize(a), l = n + o, u = r + o;
        s.prototype[a] = function() {
          return arguments.length ? (this[l](arguments[0]), this) : this[u]();
        };
      },
      addDeprecatedGetterSetter(s, a, o, l) {
        e.Util.error("Adding deprecated " + a);
        const u = r + e.Util._capitalize(a), h = a + " property is deprecated and will be removed soon. Look at Konva change log for more information.";
        s.prototype[u] = function() {
          e.Util.error(h);
          const _ = this.attrs[a];
          return _ === void 0 ? o : _;
        }, t.Factory.addSetter(s, a, l, function() {
          e.Util.error(h);
        }), t.Factory.addOverloadedGetterSetter(s, a);
      },
      backCompat(s, a) {
        e.Util.each(a, function(o, l) {
          const u = s.prototype[l], h = r + e.Util._capitalize(o), _ = n + e.Util._capitalize(o);
          function m() {
            u.apply(this, arguments), e.Util.error('"' + o + '" method is deprecated and will be removed soon. Use ""' + l + '" instead.');
          }
          s.prototype[o] = m, s.prototype[h] = m, s.prototype[_] = m;
        });
      },
      afterSetFilter() {
        this._filterUpToDate = !1;
      }
    };
  })(Ar)), Ar;
}
var ho;
function Lt() {
  if (ho) return ci;
  ho = 1, Object.defineProperty(ci, "__esModule", { value: !0 }), ci.Node = void 0;
  const t = cr(), e = ps(), i = mt(), r = pt(), n = Ot(), s = yt(), a = "absoluteOpacity", o = "allEventListeners", l = "absoluteTransform", u = "absoluteScale", h = "canvas", _ = "Change", m = "children", f = "konva", p = "listening", y = "mouseenter", S = "mouseleave", P = "pointerenter", g = "pointerleave", c = "touchenter", d = "touchleave", v = "set", x = "Shape", E = " ", C = "stage", w = "transform", T = "Stage", M = "visible", D = [
    "xChange.konva",
    "yChange.konva",
    "scaleXChange.konva",
    "scaleYChange.konva",
    "skewXChange.konva",
    "skewYChange.konva",
    "rotationChange.konva",
    "offsetXChange.konva",
    "offsetYChange.konva",
    "transformsEnabledChange.konva"
  ].join(E);
  let I = 1, B = class $r {
    constructor(b) {
      this._id = I++, this.eventListeners = {}, this.attrs = {}, this.index = 0, this._allEventListeners = null, this.parent = null, this._cache = /* @__PURE__ */ new Map(), this._attachedDepsListeners = /* @__PURE__ */ new Map(), this._lastPos = null, this._batchingTransformChange = !1, this._needClearTransformCache = !1, this._filterUpToDate = !1, this._isUnderCache = !1, this._dragEventId = null, this._shouldFireChangeEvents = !1, this.setAttrs(b), this._shouldFireChangeEvents = !0;
    }
    hasChildren() {
      return !1;
    }
    _clearCache(b) {
      (b === w || b === l) && this._cache.get(b) ? this._cache.get(b).dirty = !0 : b ? this._cache.delete(b) : this._cache.clear();
    }
    _getCache(b, A) {
      let k = this._cache.get(b);
      return (k === void 0 || (b === w || b === l) && k.dirty === !0) && (k = A.call(this), this._cache.set(b, k)), k;
    }
    _calculate(b, A, k) {
      if (!this._attachedDepsListeners.get(b)) {
        const F = A.map((L) => L + "Change.konva").join(E);
        this.on(F, () => {
          this._clearCache(b);
        }), this._attachedDepsListeners.set(b, !0);
      }
      return this._getCache(b, k);
    }
    _getCanvasCache() {
      return this._cache.get(h);
    }
    _clearSelfAndDescendantCache(b) {
      this._clearCache(b), b === l && this.fire("absoluteTransformChange");
    }
    clearCache() {
      if (this._cache.has(h)) {
        const { scene: b, filter: A, hit: k, buffer: F } = this._cache.get(h);
        n.Util.releaseCanvas(b, A, k, F), this._cache.delete(h);
      }
      return this._clearSelfAndDescendantCache(), this._requestDraw(), this;
    }
    cache(b) {
      const A = b || {};
      let k = {};
      (A.x === void 0 || A.y === void 0 || A.width === void 0 || A.height === void 0) && (k = this.getClientRect({
        skipTransform: !0,
        relativeTo: this.getParent() || void 0
      }));
      let F = Math.ceil(A.width || k.width), L = Math.ceil(A.height || k.height), W = A.pixelRatio, U = A.x === void 0 ? Math.floor(k.x) : A.x, Q = A.y === void 0 ? Math.floor(k.y) : A.y, rt = A.offset || 0, K = A.drawBorder || !1, O = A.hitCanvasPixelRatio || 1;
      if (!F || !L) {
        n.Util.error("Can not cache the node. Width or height of the node equals 0. Caching is skipped.");
        return;
      }
      const j = Math.abs(Math.round(k.x) - U) > 0.5 ? 1 : 0, Z = Math.abs(Math.round(k.y) - Q) > 0.5 ? 1 : 0;
      F += rt * 2 + j, L += rt * 2 + Z, U -= rt, Q -= rt;
      const V = new t.SceneCanvas({
        pixelRatio: W,
        width: F,
        height: L
      }), lt = new t.SceneCanvas({
        pixelRatio: W,
        width: 0,
        height: 0,
        willReadFrequently: !0
      }), R = new t.HitCanvas({
        pixelRatio: O,
        width: F,
        height: L
      }), N = V.getContext(), H = R.getContext(), z = new t.SceneCanvas({
        width: V.width / V.pixelRatio + Math.abs(U),
        height: V.height / V.pixelRatio + Math.abs(Q),
        pixelRatio: V.pixelRatio
      }), $ = z.getContext();
      return R.isCache = !0, V.isCache = !0, this._cache.delete(h), this._filterUpToDate = !1, A.imageSmoothingEnabled === !1 && (V.getContext()._context.imageSmoothingEnabled = !1, lt.getContext()._context.imageSmoothingEnabled = !1), N.save(), H.save(), $.save(), N.translate(-U, -Q), H.translate(-U, -Q), $.translate(-U, -Q), z.x = U, z.y = Q, this._isUnderCache = !0, this._clearSelfAndDescendantCache(a), this._clearSelfAndDescendantCache(u), this.drawScene(V, this, z), this.drawHit(R, this), this._isUnderCache = !1, N.restore(), H.restore(), K && (N.save(), N.beginPath(), N.rect(0, 0, F, L), N.closePath(), N.setAttr("strokeStyle", "red"), N.setAttr("lineWidth", 5), N.stroke(), N.restore()), this._cache.set(h, {
        scene: V,
        filter: lt,
        hit: R,
        buffer: z,
        x: U,
        y: Q
      }), this._requestDraw(), this;
    }
    isCached() {
      return this._cache.has(h);
    }
    getClientRect(b) {
      throw new Error('abstract "getClientRect" method call');
    }
    _transformedRect(b, A) {
      const k = [
        { x: b.x, y: b.y },
        { x: b.x + b.width, y: b.y },
        { x: b.x + b.width, y: b.y + b.height },
        { x: b.x, y: b.y + b.height }
      ];
      let F = 1 / 0, L = 1 / 0, W = -1 / 0, U = -1 / 0;
      const Q = this.getAbsoluteTransform(A);
      return k.forEach(function(rt) {
        const K = Q.point(rt);
        F === void 0 && (F = W = K.x, L = U = K.y), F = Math.min(F, K.x), L = Math.min(L, K.y), W = Math.max(W, K.x), U = Math.max(U, K.y);
      }), {
        x: F,
        y: L,
        width: W - F,
        height: U - L
      };
    }
    _drawCachedSceneCanvas(b) {
      b.save(), b._applyOpacity(this), b._applyGlobalCompositeOperation(this);
      const A = this._getCanvasCache();
      b.translate(A.x, A.y);
      const k = this._getCachedSceneCanvas(), F = k.pixelRatio;
      b.drawImage(k._canvas, 0, 0, k.width / F, k.height / F), b.restore();
    }
    _drawCachedHitCanvas(b) {
      const A = this._getCanvasCache(), k = A.hit;
      b.save(), b.translate(A.x, A.y), b.drawImage(k._canvas, 0, 0, k.width / k.pixelRatio, k.height / k.pixelRatio), b.restore();
    }
    _getCachedSceneCanvas() {
      let b = this.filters(), A = this._getCanvasCache(), k = A.scene, F = A.filter, L = F.getContext(), W, U, Q, rt;
      if (b) {
        if (!this._filterUpToDate) {
          const K = k.pixelRatio;
          F.setSize(k.width / k.pixelRatio, k.height / k.pixelRatio);
          try {
            for (W = b.length, L.clear(), L.drawImage(k._canvas, 0, 0, k.getWidth() / K, k.getHeight() / K), U = L.getImageData(0, 0, F.getWidth(), F.getHeight()), Q = 0; Q < W; Q++) {
              if (rt = b[Q], typeof rt != "function") {
                n.Util.error("Filter should be type of function, but got " + typeof rt + " instead. Please check correct filters");
                continue;
              }
              rt.call(this, U), L.putImageData(U, 0, 0);
            }
          } catch (O) {
            n.Util.error("Unable to apply filter. " + O.message + " This post my help you https://konvajs.org/docs/posts/Tainted_Canvas.html.");
          }
          this._filterUpToDate = !0;
        }
        return F;
      }
      return k;
    }
    on(b, A) {
      if (this._cache && this._cache.delete(o), arguments.length === 3)
        return this._delegate.apply(this, arguments);
      const k = b.split(E);
      for (let F = 0; F < k.length; F++) {
        const W = k[F].split("."), U = W[0], Q = W[1] || "";
        this.eventListeners[U] || (this.eventListeners[U] = []), this.eventListeners[U].push({ name: Q, handler: A });
      }
      return this;
    }
    off(b, A) {
      let k = (b || "").split(E), F = k.length, L, W, U, Q, rt, K;
      if (this._cache && this._cache.delete(o), !b)
        for (W in this.eventListeners)
          this._off(W);
      for (L = 0; L < F; L++)
        if (U = k[L], Q = U.split("."), rt = Q[0], K = Q[1], rt)
          this.eventListeners[rt] && this._off(rt, K, A);
        else
          for (W in this.eventListeners)
            this._off(W, K, A);
      return this;
    }
    dispatchEvent(b) {
      const A = {
        target: this,
        type: b.type,
        evt: b
      };
      return this.fire(b.type, A), this;
    }
    addEventListener(b, A) {
      return this.on(b, function(k) {
        A.call(this, k.evt);
      }), this;
    }
    removeEventListener(b) {
      return this.off(b), this;
    }
    _delegate(b, A, k) {
      const F = this;
      this.on(b, function(L) {
        const W = L.target.findAncestors(A, !0, F);
        for (let U = 0; U < W.length; U++)
          L = n.Util.cloneObject(L), L.currentTarget = W[U], k.call(W[U], L);
      });
    }
    remove() {
      return this.isDragging() && this.stopDrag(), e.DD._dragElements.delete(this._id), this._remove(), this;
    }
    _clearCaches() {
      this._clearSelfAndDescendantCache(l), this._clearSelfAndDescendantCache(a), this._clearSelfAndDescendantCache(u), this._clearSelfAndDescendantCache(C), this._clearSelfAndDescendantCache(M), this._clearSelfAndDescendantCache(p);
    }
    _remove() {
      this._clearCaches();
      const b = this.getParent();
      b && b.children && (b.children.splice(this.index, 1), b._setChildrenIndices(), this.parent = null);
    }
    destroy() {
      return this.remove(), this.clearCache(), this;
    }
    getAttr(b) {
      const A = "get" + n.Util._capitalize(b);
      return n.Util._isFunction(this[A]) ? this[A]() : this.attrs[b];
    }
    getAncestors() {
      let b = this.getParent(), A = [];
      for (; b; )
        A.push(b), b = b.getParent();
      return A;
    }
    getAttrs() {
      return this.attrs || {};
    }
    setAttrs(b) {
      return this._batchTransformChanges(() => {
        let A, k;
        if (!b)
          return this;
        for (A in b)
          A !== m && (k = v + n.Util._capitalize(A), n.Util._isFunction(this[k]) ? this[k](b[A]) : this._setAttr(A, b[A]));
      }), this;
    }
    isListening() {
      return this._getCache(p, this._isListening);
    }
    _isListening(b) {
      if (!this.listening())
        return !1;
      const k = this.getParent();
      return k && k !== b && this !== b ? k._isListening(b) : !0;
    }
    isVisible() {
      return this._getCache(M, this._isVisible);
    }
    _isVisible(b) {
      if (!this.visible())
        return !1;
      const k = this.getParent();
      return k && k !== b && this !== b ? k._isVisible(b) : !0;
    }
    shouldDrawHit(b, A = !1) {
      if (b)
        return this._isVisible(b) && this._isListening(b);
      const k = this.getLayer();
      let F = !1;
      e.DD._dragElements.forEach((W) => {
        W.dragStatus === "dragging" && (W.node.nodeType === "Stage" || W.node.getLayer() === k) && (F = !0);
      });
      const L = !A && !r.Konva.hitOnDragEnabled && (F || r.Konva.isTransforming());
      return this.isListening() && this.isVisible() && !L;
    }
    show() {
      return this.visible(!0), this;
    }
    hide() {
      return this.visible(!1), this;
    }
    getZIndex() {
      return this.index || 0;
    }
    getAbsoluteZIndex() {
      let b = this.getDepth(), A = this, k = 0, F, L, W, U;
      function Q(K) {
        for (F = [], L = K.length, W = 0; W < L; W++)
          U = K[W], k++, U.nodeType !== x && (F = F.concat(U.getChildren().slice())), U._id === A._id && (W = L);
        F.length > 0 && F[0].getDepth() <= b && Q(F);
      }
      const rt = this.getStage();
      return A.nodeType !== T && rt && Q(rt.getChildren()), k;
    }
    getDepth() {
      let b = 0, A = this.parent;
      for (; A; )
        b++, A = A.parent;
      return b;
    }
    _batchTransformChanges(b) {
      this._batchingTransformChange = !0, b(), this._batchingTransformChange = !1, this._needClearTransformCache && (this._clearCache(w), this._clearSelfAndDescendantCache(l)), this._needClearTransformCache = !1;
    }
    setPosition(b) {
      return this._batchTransformChanges(() => {
        this.x(b.x), this.y(b.y);
      }), this;
    }
    getPosition() {
      return {
        x: this.x(),
        y: this.y()
      };
    }
    getRelativePointerPosition() {
      const b = this.getStage();
      if (!b)
        return null;
      const A = b.getPointerPosition();
      if (!A)
        return null;
      const k = this.getAbsoluteTransform().copy();
      return k.invert(), k.point(A);
    }
    getAbsolutePosition(b) {
      let A = !1, k = this.parent;
      for (; k; ) {
        if (k.isCached()) {
          A = !0;
          break;
        }
        k = k.parent;
      }
      A && !b && (b = !0);
      const F = this.getAbsoluteTransform(b).getMatrix(), L = new n.Transform(), W = this.offset();
      return L.m = F.slice(), L.translate(W.x, W.y), L.getTranslation();
    }
    setAbsolutePosition(b) {
      const { x: A, y: k, ...F } = this._clearTransform();
      this.attrs.x = A, this.attrs.y = k, this._clearCache(w);
      const L = this._getAbsoluteTransform().copy();
      return L.invert(), L.translate(b.x, b.y), b = {
        x: this.attrs.x + L.getTranslation().x,
        y: this.attrs.y + L.getTranslation().y
      }, this._setTransform(F), this.setPosition({ x: b.x, y: b.y }), this._clearCache(w), this._clearSelfAndDescendantCache(l), this;
    }
    _setTransform(b) {
      let A;
      for (A in b)
        this.attrs[A] = b[A];
    }
    _clearTransform() {
      const b = {
        x: this.x(),
        y: this.y(),
        rotation: this.rotation(),
        scaleX: this.scaleX(),
        scaleY: this.scaleY(),
        offsetX: this.offsetX(),
        offsetY: this.offsetY(),
        skewX: this.skewX(),
        skewY: this.skewY()
      };
      return this.attrs.x = 0, this.attrs.y = 0, this.attrs.rotation = 0, this.attrs.scaleX = 1, this.attrs.scaleY = 1, this.attrs.offsetX = 0, this.attrs.offsetY = 0, this.attrs.skewX = 0, this.attrs.skewY = 0, b;
    }
    move(b) {
      let A = b.x, k = b.y, F = this.x(), L = this.y();
      return A !== void 0 && (F += A), k !== void 0 && (L += k), this.setPosition({ x: F, y: L }), this;
    }
    _eachAncestorReverse(b, A) {
      let k = [], F = this.getParent(), L, W;
      if (!(A && A._id === this._id)) {
        for (k.unshift(this); F && (!A || F._id !== A._id); )
          k.unshift(F), F = F.parent;
        for (L = k.length, W = 0; W < L; W++)
          b(k[W]);
      }
    }
    rotate(b) {
      return this.rotation(this.rotation() + b), this;
    }
    moveToTop() {
      if (!this.parent)
        return n.Util.warn("Node has no parent. moveToTop function is ignored."), !1;
      const b = this.index, A = this.parent.getChildren().length;
      return b < A - 1 ? (this.parent.children.splice(b, 1), this.parent.children.push(this), this.parent._setChildrenIndices(), !0) : !1;
    }
    moveUp() {
      if (!this.parent)
        return n.Util.warn("Node has no parent. moveUp function is ignored."), !1;
      const b = this.index, A = this.parent.getChildren().length;
      return b < A - 1 ? (this.parent.children.splice(b, 1), this.parent.children.splice(b + 1, 0, this), this.parent._setChildrenIndices(), !0) : !1;
    }
    moveDown() {
      if (!this.parent)
        return n.Util.warn("Node has no parent. moveDown function is ignored."), !1;
      const b = this.index;
      return b > 0 ? (this.parent.children.splice(b, 1), this.parent.children.splice(b - 1, 0, this), this.parent._setChildrenIndices(), !0) : !1;
    }
    moveToBottom() {
      if (!this.parent)
        return n.Util.warn("Node has no parent. moveToBottom function is ignored."), !1;
      const b = this.index;
      return b > 0 ? (this.parent.children.splice(b, 1), this.parent.children.unshift(this), this.parent._setChildrenIndices(), !0) : !1;
    }
    setZIndex(b) {
      if (!this.parent)
        return n.Util.warn("Node has no parent. zIndex parameter is ignored."), this;
      (b < 0 || b >= this.parent.children.length) && n.Util.warn("Unexpected value " + b + " for zIndex property. zIndex is just index of a node in children of its parent. Expected value is from 0 to " + (this.parent.children.length - 1) + ".");
      const A = this.index;
      return this.parent.children.splice(A, 1), this.parent.children.splice(b, 0, this), this.parent._setChildrenIndices(), this;
    }
    getAbsoluteOpacity() {
      return this._getCache(a, this._getAbsoluteOpacity);
    }
    _getAbsoluteOpacity() {
      let b = this.opacity();
      const A = this.getParent();
      return A && !A._isUnderCache && (b *= A.getAbsoluteOpacity()), b;
    }
    moveTo(b) {
      return this.getParent() !== b && (this._remove(), b.add(this)), this;
    }
    toObject() {
      let b = this.getAttrs(), A, k, F, L, W;
      const U = {
        attrs: {},
        className: this.getClassName()
      };
      for (A in b)
        k = b[A], W = n.Util.isObject(k) && !n.Util._isPlainObject(k) && !n.Util._isArray(k), !W && (F = typeof this[A] == "function" && this[A], delete b[A], L = F ? F.call(this) : null, b[A] = k, L !== k && (U.attrs[A] = k));
      return n.Util._prepareToStringify(U);
    }
    toJSON() {
      return JSON.stringify(this.toObject());
    }
    getParent() {
      return this.parent;
    }
    findAncestors(b, A, k) {
      const F = [];
      A && this._isMatch(b) && F.push(this);
      let L = this.parent;
      for (; L; ) {
        if (L === k)
          return F;
        L._isMatch(b) && F.push(L), L = L.parent;
      }
      return F;
    }
    isAncestorOf(b) {
      return !1;
    }
    findAncestor(b, A, k) {
      return this.findAncestors(b, A, k)[0];
    }
    _isMatch(b) {
      if (!b)
        return !1;
      if (typeof b == "function")
        return b(this);
      let A = b.replace(/ /g, "").split(","), k = A.length, F, L;
      for (F = 0; F < k; F++)
        if (L = A[F], n.Util.isValidSelector(L) || (n.Util.warn('Selector "' + L + '" is invalid. Allowed selectors examples are "#foo", ".bar" or "Group".'), n.Util.warn('If you have a custom shape with such className, please change it to start with upper letter like "Triangle".'), n.Util.warn("Konva is awesome, right?")), L.charAt(0) === "#") {
          if (this.id() === L.slice(1))
            return !0;
        } else if (L.charAt(0) === ".") {
          if (this.hasName(L.slice(1)))
            return !0;
        } else if (this.className === L || this.nodeType === L)
          return !0;
      return !1;
    }
    getLayer() {
      const b = this.getParent();
      return b ? b.getLayer() : null;
    }
    getStage() {
      return this._getCache(C, this._getStage);
    }
    _getStage() {
      const b = this.getParent();
      return b ? b.getStage() : null;
    }
    fire(b, A = {}, k) {
      return A.target = A.target || this, k ? this._fireAndBubble(b, A) : this._fire(b, A), this;
    }
    getAbsoluteTransform(b) {
      return b ? this._getAbsoluteTransform(b) : this._getCache(l, this._getAbsoluteTransform);
    }
    _getAbsoluteTransform(b) {
      let A;
      if (b)
        return A = new n.Transform(), this._eachAncestorReverse(function(k) {
          const F = k.transformsEnabled();
          F === "all" ? A.multiply(k.getTransform()) : F === "position" && A.translate(k.x() - k.offsetX(), k.y() - k.offsetY());
        }, b), A;
      {
        A = this._cache.get(l) || new n.Transform(), this.parent ? this.parent.getAbsoluteTransform().copyInto(A) : A.reset();
        const k = this.transformsEnabled();
        if (k === "all")
          A.multiply(this.getTransform());
        else if (k === "position") {
          const F = this.attrs.x || 0, L = this.attrs.y || 0, W = this.attrs.offsetX || 0, U = this.attrs.offsetY || 0;
          A.translate(F - W, L - U);
        }
        return A.dirty = !1, A;
      }
    }
    getAbsoluteScale(b) {
      let A = this;
      for (; A; )
        A._isUnderCache && (b = A), A = A.getParent();
      const F = this.getAbsoluteTransform(b).decompose();
      return {
        x: F.scaleX,
        y: F.scaleY
      };
    }
    getAbsoluteRotation() {
      return this.getAbsoluteTransform().decompose().rotation;
    }
    getTransform() {
      return this._getCache(w, this._getTransform);
    }
    _getTransform() {
      var b, A;
      const k = this._cache.get(w) || new n.Transform();
      k.reset();
      const F = this.x(), L = this.y(), W = r.Konva.getAngle(this.rotation()), U = (b = this.attrs.scaleX) !== null && b !== void 0 ? b : 1, Q = (A = this.attrs.scaleY) !== null && A !== void 0 ? A : 1, rt = this.attrs.skewX || 0, K = this.attrs.skewY || 0, O = this.attrs.offsetX || 0, j = this.attrs.offsetY || 0;
      return (F !== 0 || L !== 0) && k.translate(F, L), W !== 0 && k.rotate(W), (rt !== 0 || K !== 0) && k.skew(rt, K), (U !== 1 || Q !== 1) && k.scale(U, Q), (O !== 0 || j !== 0) && k.translate(-1 * O, -1 * j), k.dirty = !1, k;
    }
    clone(b) {
      let A = n.Util.cloneObject(this.attrs), k, F, L, W, U;
      for (k in b)
        A[k] = b[k];
      const Q = new this.constructor(A);
      for (k in this.eventListeners)
        for (F = this.eventListeners[k], L = F.length, W = 0; W < L; W++)
          U = F[W], U.name.indexOf(f) < 0 && (Q.eventListeners[k] || (Q.eventListeners[k] = []), Q.eventListeners[k].push(U));
      return Q;
    }
    _toKonvaCanvas(b) {
      b = b || {};
      const A = this.getClientRect(), k = this.getStage(), F = b.x !== void 0 ? b.x : Math.floor(A.x), L = b.y !== void 0 ? b.y : Math.floor(A.y), W = b.pixelRatio || 1, U = new t.SceneCanvas({
        width: b.width || Math.ceil(A.width) || (k ? k.width() : 0),
        height: b.height || Math.ceil(A.height) || (k ? k.height() : 0),
        pixelRatio: W
      }), Q = U.getContext(), rt = new t.SceneCanvas({
        width: U.width / U.pixelRatio + Math.abs(F),
        height: U.height / U.pixelRatio + Math.abs(L),
        pixelRatio: U.pixelRatio
      });
      return b.imageSmoothingEnabled === !1 && (Q._context.imageSmoothingEnabled = !1), Q.save(), (F || L) && Q.translate(-1 * F, -1 * L), this.drawScene(U, void 0, rt), Q.restore(), U;
    }
    toCanvas(b) {
      return this._toKonvaCanvas(b)._canvas;
    }
    toDataURL(b) {
      b = b || {};
      const A = b.mimeType || null, k = b.quality || null, F = this._toKonvaCanvas(b).toDataURL(A, k);
      return b.callback && b.callback(F), F;
    }
    toImage(b) {
      return new Promise((A, k) => {
        try {
          const F = b == null ? void 0 : b.callback;
          F && delete b.callback, n.Util._urlToImage(this.toDataURL(b), function(L) {
            A(L), F == null || F(L);
          });
        } catch (F) {
          k(F);
        }
      });
    }
    toBlob(b) {
      return new Promise((A, k) => {
        try {
          const F = b == null ? void 0 : b.callback;
          F && delete b.callback, this.toCanvas(b).toBlob((L) => {
            A(L), F == null || F(L);
          }, b == null ? void 0 : b.mimeType, b == null ? void 0 : b.quality);
        } catch (F) {
          k(F);
        }
      });
    }
    setSize(b) {
      return this.width(b.width), this.height(b.height), this;
    }
    getSize() {
      return {
        width: this.width(),
        height: this.height()
      };
    }
    getClassName() {
      return this.className || this.nodeType;
    }
    getType() {
      return this.nodeType;
    }
    getDragDistance() {
      return this.attrs.dragDistance !== void 0 ? this.attrs.dragDistance : this.parent ? this.parent.getDragDistance() : r.Konva.dragDistance;
    }
    _off(b, A, k) {
      let F = this.eventListeners[b], L, W, U;
      for (L = 0; L < F.length; L++)
        if (W = F[L].name, U = F[L].handler, (W !== "konva" || A === "konva") && (!A || W === A) && (!k || k === U)) {
          if (F.splice(L, 1), F.length === 0) {
            delete this.eventListeners[b];
            break;
          }
          L--;
        }
    }
    _fireChangeEvent(b, A, k) {
      this._fire(b + _, {
        oldVal: A,
        newVal: k
      });
    }
    addName(b) {
      if (!this.hasName(b)) {
        const A = this.name(), k = A ? A + " " + b : b;
        this.name(k);
      }
      return this;
    }
    hasName(b) {
      if (!b)
        return !1;
      const A = this.name();
      return A ? (A || "").split(/\s/g).indexOf(b) !== -1 : !1;
    }
    removeName(b) {
      const A = (this.name() || "").split(/\s/g), k = A.indexOf(b);
      return k !== -1 && (A.splice(k, 1), this.name(A.join(" "))), this;
    }
    setAttr(b, A) {
      const k = this[v + n.Util._capitalize(b)];
      return n.Util._isFunction(k) ? k.call(this, A) : this._setAttr(b, A), this;
    }
    _requestDraw() {
      if (r.Konva.autoDrawEnabled) {
        const b = this.getLayer() || this.getStage();
        b == null || b.batchDraw();
      }
    }
    _setAttr(b, A) {
      const k = this.attrs[b];
      k === A && !n.Util.isObject(A) || (A == null ? delete this.attrs[b] : this.attrs[b] = A, this._shouldFireChangeEvents && this._fireChangeEvent(b, k, A), this._requestDraw());
    }
    _setComponentAttr(b, A, k) {
      let F;
      k !== void 0 && (F = this.attrs[b], F || (this.attrs[b] = this.getAttr(b)), this.attrs[b][A] = k, this._fireChangeEvent(b, F, k));
    }
    _fireAndBubble(b, A, k) {
      A && this.nodeType === x && (A.target = this);
      const F = [
        y,
        S,
        P,
        g,
        c,
        d
      ];
      if (!(F.indexOf(b) !== -1 && (k && (this === k || this.isAncestorOf && this.isAncestorOf(k)) || this.nodeType === "Stage" && !k))) {
        this._fire(b, A);
        const W = F.indexOf(b) !== -1 && k && k.isAncestorOf && k.isAncestorOf(this) && !k.isAncestorOf(this.parent);
        (A && !A.cancelBubble || !A) && this.parent && this.parent.isListening() && !W && (k && k.parent ? this._fireAndBubble.call(this.parent, b, A, k) : this._fireAndBubble.call(this.parent, b, A));
      }
    }
    _getProtoListeners(b) {
      var A, k, F;
      const L = (A = this._cache.get(o)) !== null && A !== void 0 ? A : {};
      let W = L == null ? void 0 : L[b];
      if (W === void 0) {
        W = [];
        let U = Object.getPrototypeOf(this);
        for (; U; ) {
          const Q = (F = (k = U.eventListeners) === null || k === void 0 ? void 0 : k[b]) !== null && F !== void 0 ? F : [];
          W.push(...Q), U = Object.getPrototypeOf(U);
        }
        L[b] = W, this._cache.set(o, L);
      }
      return W;
    }
    _fire(b, A) {
      A = A || {}, A.currentTarget = this, A.type = b;
      const k = this._getProtoListeners(b);
      if (k)
        for (let L = 0; L < k.length; L++)
          k[L].handler.call(this, A);
      const F = this.eventListeners[b];
      if (F)
        for (let L = 0; L < F.length; L++)
          F[L].handler.call(this, A);
    }
    draw() {
      return this.drawScene(), this.drawHit(), this;
    }
    _createDragElement(b) {
      const A = b ? b.pointerId : void 0, k = this.getStage(), F = this.getAbsolutePosition();
      if (!k)
        return;
      const L = k._getPointerById(A) || k._changedPointerPositions[0] || F;
      e.DD._dragElements.set(this._id, {
        node: this,
        startPointerPos: L,
        offset: {
          x: L.x - F.x,
          y: L.y - F.y
        },
        dragStatus: "ready",
        pointerId: A
      });
    }
    startDrag(b, A = !0) {
      e.DD._dragElements.has(this._id) || this._createDragElement(b);
      const k = e.DD._dragElements.get(this._id);
      k.dragStatus = "dragging", this.fire("dragstart", {
        type: "dragstart",
        target: this,
        evt: b && b.evt
      }, A);
    }
    _setDragPosition(b, A) {
      const k = this.getStage()._getPointerById(A.pointerId);
      if (!k)
        return;
      let F = {
        x: k.x - A.offset.x,
        y: k.y - A.offset.y
      };
      const L = this.dragBoundFunc();
      if (L !== void 0) {
        const W = L.call(this, F, b);
        W ? F = W : n.Util.warn("dragBoundFunc did not return any value. That is unexpected behavior. You must return new absolute position from dragBoundFunc.");
      }
      (!this._lastPos || this._lastPos.x !== F.x || this._lastPos.y !== F.y) && (this.setAbsolutePosition(F), this._requestDraw()), this._lastPos = F;
    }
    stopDrag(b) {
      const A = e.DD._dragElements.get(this._id);
      A && (A.dragStatus = "stopped"), e.DD._endDragBefore(b), e.DD._endDragAfter(b);
    }
    setDraggable(b) {
      this._setAttr("draggable", b), this._dragChange();
    }
    isDragging() {
      const b = e.DD._dragElements.get(this._id);
      return b ? b.dragStatus === "dragging" : !1;
    }
    _listenDrag() {
      this._dragCleanup(), this.on("mousedown.konva touchstart.konva", function(b) {
        if (!(!(b.evt.button !== void 0) || r.Konva.dragButtons.indexOf(b.evt.button) >= 0) || this.isDragging())
          return;
        let F = !1;
        e.DD._dragElements.forEach((L) => {
          this.isAncestorOf(L.node) && (F = !0);
        }), F || this._createDragElement(b);
      });
    }
    _dragChange() {
      if (this.attrs.draggable)
        this._listenDrag();
      else {
        if (this._dragCleanup(), !this.getStage())
          return;
        const A = e.DD._dragElements.get(this._id), k = A && A.dragStatus === "dragging", F = A && A.dragStatus === "ready";
        k ? this.stopDrag() : F && e.DD._dragElements.delete(this._id);
      }
    }
    _dragCleanup() {
      this.off("mousedown.konva"), this.off("touchstart.konva");
    }
    isClientRectOnScreen(b = { x: 0, y: 0 }) {
      const A = this.getStage();
      if (!A)
        return !1;
      const k = {
        x: -b.x,
        y: -b.y,
        width: A.width() + 2 * b.x,
        height: A.height() + 2 * b.y
      };
      return n.Util.haveIntersection(k, this.getClientRect());
    }
    static create(b, A) {
      return n.Util._isString(b) && (b = JSON.parse(b)), this._createNode(b, A);
    }
    static _createNode(b, A) {
      let k = $r.prototype.getClassName.call(b), F = b.children, L, W, U;
      A && (b.attrs.container = A), r.Konva[k] || (n.Util.warn('Can not find a node with class name "' + k + '". Fallback to "Shape".'), k = "Shape");
      const Q = r.Konva[k];
      if (L = new Q(b.attrs), F)
        for (W = F.length, U = 0; U < W; U++)
          L.add($r._createNode(F[U]));
      return L;
    }
  };
  ci.Node = B, B.prototype.nodeType = "Node", B.prototype._attrsAffectingSize = [], B.prototype.eventListeners = {}, B.prototype.on.call(B.prototype, D, function() {
    if (this._batchingTransformChange) {
      this._needClearTransformCache = !0;
      return;
    }
    this._clearCache(w), this._clearSelfAndDescendantCache(l);
  }), B.prototype.on.call(B.prototype, "visibleChange.konva", function() {
    this._clearSelfAndDescendantCache(M);
  }), B.prototype.on.call(B.prototype, "listeningChange.konva", function() {
    this._clearSelfAndDescendantCache(p);
  }), B.prototype.on.call(B.prototype, "opacityChange.konva", function() {
    this._clearSelfAndDescendantCache(a);
  });
  const G = i.Factory.addGetterSetter;
  return G(B, "zIndex"), G(B, "absolutePosition"), G(B, "position"), G(B, "x", 0, (0, s.getNumberValidator)()), G(B, "y", 0, (0, s.getNumberValidator)()), G(B, "globalCompositeOperation", "source-over", (0, s.getStringValidator)()), G(B, "opacity", 1, (0, s.getNumberValidator)()), G(B, "name", "", (0, s.getStringValidator)()), G(B, "id", "", (0, s.getStringValidator)()), G(B, "rotation", 0, (0, s.getNumberValidator)()), i.Factory.addComponentsGetterSetter(B, "scale", ["x", "y"]), G(B, "scaleX", 1, (0, s.getNumberValidator)()), G(B, "scaleY", 1, (0, s.getNumberValidator)()), i.Factory.addComponentsGetterSetter(B, "skew", ["x", "y"]), G(B, "skewX", 0, (0, s.getNumberValidator)()), G(B, "skewY", 0, (0, s.getNumberValidator)()), i.Factory.addComponentsGetterSetter(B, "offset", ["x", "y"]), G(B, "offsetX", 0, (0, s.getNumberValidator)()), G(B, "offsetY", 0, (0, s.getNumberValidator)()), G(B, "dragDistance", void 0, (0, s.getNumberValidator)()), G(B, "width", 0, (0, s.getNumberValidator)()), G(B, "height", 0, (0, s.getNumberValidator)()), G(B, "listening", !0, (0, s.getBooleanValidator)()), G(B, "preventDefault", !0, (0, s.getBooleanValidator)()), G(B, "filters", void 0, function(X) {
    return this._filterUpToDate = !1, X;
  }), G(B, "visible", !0, (0, s.getBooleanValidator)()), G(B, "transformsEnabled", "all", (0, s.getStringValidator)()), G(B, "size"), G(B, "dragBoundFunc"), G(B, "draggable", !1, (0, s.getBooleanValidator)()), i.Factory.backCompat(B, {
    rotateDeg: "rotate",
    setRotationDeg: "setRotation",
    getRotationDeg: "getRotation"
  }), ci;
}
var ui = {}, co;
function ur() {
  if (co) return ui;
  co = 1, Object.defineProperty(ui, "__esModule", { value: !0 }), ui.Container = void 0;
  const t = mt(), e = Lt(), i = yt();
  let r = class extends e.Node {
    constructor() {
      super(...arguments), this.children = [];
    }
    getChildren(s) {
      const a = this.children || [];
      return s ? a.filter(s) : a;
    }
    hasChildren() {
      return this.getChildren().length > 0;
    }
    removeChildren() {
      return this.getChildren().forEach((s) => {
        s.parent = null, s.index = 0, s.remove();
      }), this.children = [], this._requestDraw(), this;
    }
    destroyChildren() {
      return this.getChildren().forEach((s) => {
        s.parent = null, s.index = 0, s.destroy();
      }), this.children = [], this._requestDraw(), this;
    }
    add(...s) {
      if (s.length === 0)
        return this;
      if (s.length > 1) {
        for (let o = 0; o < s.length; o++)
          this.add(s[o]);
        return this;
      }
      const a = s[0];
      return a.getParent() ? (a.moveTo(this), this) : (this._validateAdd(a), a.index = this.getChildren().length, a.parent = this, a._clearCaches(), this.getChildren().push(a), this._fire("add", {
        child: a
      }), this._requestDraw(), this);
    }
    destroy() {
      return this.hasChildren() && this.destroyChildren(), super.destroy(), this;
    }
    find(s) {
      return this._generalFind(s, !1);
    }
    findOne(s) {
      const a = this._generalFind(s, !0);
      return a.length > 0 ? a[0] : void 0;
    }
    _generalFind(s, a) {
      const o = [];
      return this._descendants((l) => {
        const u = l._isMatch(s);
        return u && o.push(l), !!(u && a);
      }), o;
    }
    _descendants(s) {
      let a = !1;
      const o = this.getChildren();
      for (const l of o) {
        if (a = s(l), a)
          return !0;
        if (l.hasChildren() && (a = l._descendants(s), a))
          return !0;
      }
      return !1;
    }
    toObject() {
      const s = e.Node.prototype.toObject.call(this);
      return s.children = [], this.getChildren().forEach((a) => {
        s.children.push(a.toObject());
      }), s;
    }
    isAncestorOf(s) {
      let a = s.getParent();
      for (; a; ) {
        if (a._id === this._id)
          return !0;
        a = a.getParent();
      }
      return !1;
    }
    clone(s) {
      const a = e.Node.prototype.clone.call(this, s);
      return this.getChildren().forEach(function(o) {
        a.add(o.clone());
      }), a;
    }
    getAllIntersections(s) {
      const a = [];
      return this.find("Shape").forEach((o) => {
        o.isVisible() && o.intersects(s) && a.push(o);
      }), a;
    }
    _clearSelfAndDescendantCache(s) {
      var a;
      super._clearSelfAndDescendantCache(s), !this.isCached() && ((a = this.children) === null || a === void 0 || a.forEach(function(o) {
        o._clearSelfAndDescendantCache(s);
      }));
    }
    _setChildrenIndices() {
      var s;
      (s = this.children) === null || s === void 0 || s.forEach(function(a, o) {
        a.index = o;
      }), this._requestDraw();
    }
    drawScene(s, a, o) {
      const l = this.getLayer(), u = s || l && l.getCanvas(), h = u && u.getContext(), _ = this._getCanvasCache(), m = _ && _.scene, f = u && u.isCache;
      if (!this.isVisible() && !f)
        return this;
      if (m) {
        h.save();
        const p = this.getAbsoluteTransform(a).getMatrix();
        h.transform(p[0], p[1], p[2], p[3], p[4], p[5]), this._drawCachedSceneCanvas(h), h.restore();
      } else
        this._drawChildren("drawScene", u, a, o);
      return this;
    }
    drawHit(s, a) {
      if (!this.shouldDrawHit(a))
        return this;
      const o = this.getLayer(), l = s || o && o.hitCanvas, u = l && l.getContext(), h = this._getCanvasCache();
      if (h && h.hit) {
        u.save();
        const m = this.getAbsoluteTransform(a).getMatrix();
        u.transform(m[0], m[1], m[2], m[3], m[4], m[5]), this._drawCachedHitCanvas(u), u.restore();
      } else
        this._drawChildren("drawHit", l, a);
      return this;
    }
    _drawChildren(s, a, o, l) {
      var u;
      const h = a && a.getContext(), _ = this.clipWidth(), m = this.clipHeight(), f = this.clipFunc(), p = typeof _ == "number" && typeof m == "number" || f, y = o === this;
      if (p) {
        h.save();
        const P = this.getAbsoluteTransform(o);
        let g = P.getMatrix();
        h.transform(g[0], g[1], g[2], g[3], g[4], g[5]), h.beginPath();
        let c;
        if (f)
          c = f.call(this, h, this);
        else {
          const d = this.clipX(), v = this.clipY();
          h.rect(d || 0, v || 0, _, m);
        }
        h.clip.apply(h, c), g = P.copy().invert().getMatrix(), h.transform(g[0], g[1], g[2], g[3], g[4], g[5]);
      }
      const S = !y && this.globalCompositeOperation() !== "source-over" && s === "drawScene";
      S && (h.save(), h._applyGlobalCompositeOperation(this)), (u = this.children) === null || u === void 0 || u.forEach(function(P) {
        P[s](a, o, l);
      }), S && h.restore(), p && h.restore();
    }
    getClientRect(s = {}) {
      var a;
      const o = s.skipTransform, l = s.relativeTo;
      let u, h, _, m, f = {
        x: 1 / 0,
        y: 1 / 0,
        width: 0,
        height: 0
      };
      const p = this;
      (a = this.children) === null || a === void 0 || a.forEach(function(P) {
        if (!P.visible())
          return;
        const g = P.getClientRect({
          relativeTo: p,
          skipShadow: s.skipShadow,
          skipStroke: s.skipStroke
        });
        g.width === 0 && g.height === 0 || (u === void 0 ? (u = g.x, h = g.y, _ = g.x + g.width, m = g.y + g.height) : (u = Math.min(u, g.x), h = Math.min(h, g.y), _ = Math.max(_, g.x + g.width), m = Math.max(m, g.y + g.height)));
      });
      const y = this.find("Shape");
      let S = !1;
      for (let P = 0; P < y.length; P++)
        if (y[P]._isVisible(this)) {
          S = !0;
          break;
        }
      return S && u !== void 0 ? f = {
        x: u,
        y: h,
        width: _ - u,
        height: m - h
      } : f = {
        x: 0,
        y: 0,
        width: 0,
        height: 0
      }, o ? f : this._transformedRect(f, l);
    }
  };
  return ui.Container = r, t.Factory.addComponentsGetterSetter(r, "clip", [
    "x",
    "y",
    "width",
    "height"
  ]), t.Factory.addGetterSetter(r, "clipX", void 0, (0, i.getNumberValidator)()), t.Factory.addGetterSetter(r, "clipY", void 0, (0, i.getNumberValidator)()), t.Factory.addGetterSetter(r, "clipWidth", void 0, (0, i.getNumberValidator)()), t.Factory.addGetterSetter(r, "clipHeight", void 0, (0, i.getNumberValidator)()), t.Factory.addGetterSetter(r, "clipFunc"), ui;
}
var Rr = {}, Te = {}, uo;
function wl() {
  if (uo) return Te;
  uo = 1, Object.defineProperty(Te, "__esModule", { value: !0 }), Te.getCapturedShape = r, Te.createEvent = n, Te.hasPointerCapture = s, Te.setPointerCapture = a, Te.releaseCapture = o;
  const t = pt(), e = /* @__PURE__ */ new Map(), i = t.Konva._global.PointerEvent !== void 0;
  function r(l) {
    return e.get(l);
  }
  function n(l) {
    return {
      evt: l,
      pointerId: l.pointerId
    };
  }
  function s(l, u) {
    return e.get(l) === u;
  }
  function a(l, u) {
    o(l), u.getStage() && (e.set(l, u), i && u._fire("gotpointercapture", n(new PointerEvent("gotpointercapture"))));
  }
  function o(l, u) {
    const h = e.get(l);
    if (!h)
      return;
    const _ = h.getStage();
    _ && _.content, e.delete(l), i && h._fire("lostpointercapture", n(new PointerEvent("lostpointercapture")));
  }
  return Te;
}
var fo;
function au() {
  return fo || (fo = 1, (function(t) {
    Object.defineProperty(t, "__esModule", { value: !0 }), t.Stage = t.stages = void 0;
    const e = Ot(), i = mt(), r = ur(), n = pt(), s = cr(), a = ps(), o = pt(), l = wl(), u = "Stage", h = "string", _ = "px", m = "mouseout", f = "mouseleave", p = "mouseover", y = "mouseenter", S = "mousemove", P = "mousedown", g = "mouseup", c = "pointermove", d = "pointerdown", v = "pointerup", x = "pointercancel", E = "lostpointercapture", C = "pointerout", w = "pointerleave", T = "pointerover", M = "pointerenter", D = "contextmenu", I = "touchstart", B = "touchend", G = "touchmove", X = "touchcancel", b = "wheel", A = 5, k = [
      [y, "_pointerenter"],
      [P, "_pointerdown"],
      [S, "_pointermove"],
      [g, "_pointerup"],
      [f, "_pointerleave"],
      [I, "_pointerdown"],
      [G, "_pointermove"],
      [B, "_pointerup"],
      [X, "_pointercancel"],
      [p, "_pointerover"],
      [b, "_wheel"],
      [D, "_contextmenu"],
      [d, "_pointerdown"],
      [c, "_pointermove"],
      [v, "_pointerup"],
      [x, "_pointercancel"],
      [w, "_pointerleave"],
      [E, "_lostpointercapture"]
    ], F = {
      mouse: {
        [C]: m,
        [w]: f,
        [T]: p,
        [M]: y,
        [c]: S,
        [d]: P,
        [v]: g,
        [x]: "mousecancel",
        pointerclick: "click",
        pointerdblclick: "dblclick"
      },
      touch: {
        [C]: "touchout",
        [w]: "touchleave",
        [T]: "touchover",
        [M]: "touchenter",
        [c]: G,
        [d]: I,
        [v]: B,
        [x]: X,
        pointerclick: "tap",
        pointerdblclick: "dbltap"
      },
      pointer: {
        [C]: C,
        [w]: w,
        [T]: T,
        [M]: M,
        [c]: c,
        [d]: d,
        [v]: v,
        [x]: x,
        pointerclick: "pointerclick",
        pointerdblclick: "pointerdblclick"
      }
    }, L = (K) => K.indexOf("pointer") >= 0 ? "pointer" : K.indexOf("touch") >= 0 ? "touch" : "mouse", W = (K) => {
      const O = L(K);
      if (O === "pointer")
        return n.Konva.pointerEventsEnabled && F.pointer;
      if (O === "touch")
        return F.touch;
      if (O === "mouse")
        return F.mouse;
    };
    function U(K = {}) {
      return (K.clipFunc || K.clipWidth || K.clipHeight) && e.Util.warn("Stage does not support clipping. Please use clip for Layers or Groups."), K;
    }
    const Q = "Pointer position is missing and not registered by the stage. Looks like it is outside of the stage container. You can set it manually from event: stage.setPointersPositions(event);";
    t.stages = [];
    class rt extends r.Container {
      constructor(O) {
        super(U(O)), this._pointerPositions = [], this._changedPointerPositions = [], this._buildDOM(), this._bindContentEvents(), t.stages.push(this), this.on("widthChange.konva heightChange.konva", this._resizeDOM), this.on("visibleChange.konva", this._checkVisibility), this.on("clipWidthChange.konva clipHeightChange.konva clipFuncChange.konva", () => {
          U(this.attrs);
        }), this._checkVisibility();
      }
      _validateAdd(O) {
        const j = O.getType() === "Layer", Z = O.getType() === "FastLayer";
        j || Z || e.Util.throw("You may only add layers to the stage.");
      }
      _checkVisibility() {
        if (!this.content)
          return;
        const O = this.visible() ? "" : "none";
        this.content.style.display = O;
      }
      setContainer(O) {
        if (typeof O === h) {
          let j;
          if (O.charAt(0) === ".") {
            const Z = O.slice(1);
            O = document.getElementsByClassName(Z)[0];
          } else
            O.charAt(0) !== "#" ? j = O : j = O.slice(1), O = document.getElementById(j);
          if (!O)
            throw "Can not find container in document with id " + j;
        }
        return this._setAttr("container", O), this.content && (this.content.parentElement && this.content.parentElement.removeChild(this.content), O.appendChild(this.content)), this;
      }
      shouldDrawHit() {
        return !0;
      }
      clear() {
        const O = this.children, j = O.length;
        for (let Z = 0; Z < j; Z++)
          O[Z].clear();
        return this;
      }
      clone(O) {
        return O || (O = {}), O.container = typeof document < "u" && document.createElement("div"), r.Container.prototype.clone.call(this, O);
      }
      destroy() {
        super.destroy();
        const O = this.content;
        O && e.Util._isInDocument(O) && this.container().removeChild(O);
        const j = t.stages.indexOf(this);
        return j > -1 && t.stages.splice(j, 1), e.Util.releaseCanvas(this.bufferCanvas._canvas, this.bufferHitCanvas._canvas), this;
      }
      getPointerPosition() {
        const O = this._pointerPositions[0] || this._changedPointerPositions[0];
        return O ? {
          x: O.x,
          y: O.y
        } : (e.Util.warn(Q), null);
      }
      _getPointerById(O) {
        return this._pointerPositions.find((j) => j.id === O);
      }
      getPointersPositions() {
        return this._pointerPositions;
      }
      getStage() {
        return this;
      }
      getContent() {
        return this.content;
      }
      _toKonvaCanvas(O) {
        O = O || {}, O.x = O.x || 0, O.y = O.y || 0, O.width = O.width || this.width(), O.height = O.height || this.height();
        const j = new s.SceneCanvas({
          width: O.width,
          height: O.height,
          pixelRatio: O.pixelRatio || 1
        }), Z = j.getContext()._context, V = this.children;
        return (O.x || O.y) && Z.translate(-1 * O.x, -1 * O.y), V.forEach(function(lt) {
          if (!lt.isVisible())
            return;
          const R = lt._toKonvaCanvas(O);
          Z.drawImage(R._canvas, O.x, O.y, R.getWidth() / R.getPixelRatio(), R.getHeight() / R.getPixelRatio());
        }), j;
      }
      getIntersection(O) {
        if (!O)
          return null;
        const j = this.children, Z = j.length, V = Z - 1;
        for (let lt = V; lt >= 0; lt--) {
          const R = j[lt].getIntersection(O);
          if (R)
            return R;
        }
        return null;
      }
      _resizeDOM() {
        const O = this.width(), j = this.height();
        this.content && (this.content.style.width = O + _, this.content.style.height = j + _), this.bufferCanvas.setSize(O, j), this.bufferHitCanvas.setSize(O, j), this.children.forEach((Z) => {
          Z.setSize({ width: O, height: j }), Z.draw();
        });
      }
      add(O, ...j) {
        if (arguments.length > 1) {
          for (let V = 0; V < arguments.length; V++)
            this.add(arguments[V]);
          return this;
        }
        super.add(O);
        const Z = this.children.length;
        return Z > A && e.Util.warn("The stage has " + Z + " layers. Recommended maximum number of layers is 3-5. Adding more layers into the stage may drop the performance. Rethink your tree structure, you can use Konva.Group."), O.setSize({ width: this.width(), height: this.height() }), O.draw(), n.Konva.isBrowser && this.content.appendChild(O.canvas._canvas), this;
      }
      getParent() {
        return null;
      }
      getLayer() {
        return null;
      }
      hasPointerCapture(O) {
        return l.hasPointerCapture(O, this);
      }
      setPointerCapture(O) {
        l.setPointerCapture(O, this);
      }
      releaseCapture(O) {
        l.releaseCapture(O, this);
      }
      getLayers() {
        return this.children;
      }
      _bindContentEvents() {
        n.Konva.isBrowser && k.forEach(([O, j]) => {
          this.content.addEventListener(O, (Z) => {
            this[j](Z);
          }, { passive: !1 });
        });
      }
      _pointerenter(O) {
        this.setPointersPositions(O);
        const j = W(O.type);
        j && this._fire(j.pointerenter, {
          evt: O,
          target: this,
          currentTarget: this
        });
      }
      _pointerover(O) {
        this.setPointersPositions(O);
        const j = W(O.type);
        j && this._fire(j.pointerover, {
          evt: O,
          target: this,
          currentTarget: this
        });
      }
      _getTargetShape(O) {
        let j = this[O + "targetShape"];
        return j && !j.getStage() && (j = null), j;
      }
      _pointerleave(O) {
        const j = W(O.type), Z = L(O.type);
        if (!j)
          return;
        this.setPointersPositions(O);
        const V = this._getTargetShape(Z), lt = !(n.Konva.isDragging() || n.Konva.isTransforming()) || n.Konva.hitOnDragEnabled;
        V && lt ? (V._fireAndBubble(j.pointerout, { evt: O }), V._fireAndBubble(j.pointerleave, { evt: O }), this._fire(j.pointerleave, {
          evt: O,
          target: this,
          currentTarget: this
        }), this[Z + "targetShape"] = null) : lt && (this._fire(j.pointerleave, {
          evt: O,
          target: this,
          currentTarget: this
        }), this._fire(j.pointerout, {
          evt: O,
          target: this,
          currentTarget: this
        })), this.pointerPos = null, this._pointerPositions = [];
      }
      _pointerdown(O) {
        const j = W(O.type), Z = L(O.type);
        if (!j)
          return;
        this.setPointersPositions(O);
        let V = !1;
        this._changedPointerPositions.forEach((lt) => {
          const R = this.getIntersection(lt);
          if (a.DD.justDragged = !1, n.Konva["_" + Z + "ListenClick"] = !0, !R || !R.isListening()) {
            this[Z + "ClickStartShape"] = void 0;
            return;
          }
          n.Konva.capturePointerEventsEnabled && R.setPointerCapture(lt.id), this[Z + "ClickStartShape"] = R, R._fireAndBubble(j.pointerdown, {
            evt: O,
            pointerId: lt.id
          }), V = !0;
          const N = O.type.indexOf("touch") >= 0;
          R.preventDefault() && O.cancelable && N && O.preventDefault();
        }), V || this._fire(j.pointerdown, {
          evt: O,
          target: this,
          currentTarget: this,
          pointerId: this._pointerPositions[0].id
        });
      }
      _pointermove(O) {
        const j = W(O.type), Z = L(O.type);
        if (!j || (n.Konva.isDragging() && a.DD.node.preventDefault() && O.cancelable && O.preventDefault(), this.setPointersPositions(O), !(!(n.Konva.isDragging() || n.Konva.isTransforming()) || n.Konva.hitOnDragEnabled)))
          return;
        const lt = {};
        let R = !1;
        const N = this._getTargetShape(Z);
        this._changedPointerPositions.forEach((H) => {
          const z = l.getCapturedShape(H.id) || this.getIntersection(H), $ = H.id, Y = { evt: O, pointerId: $ }, q = N !== z;
          if (q && N && (N._fireAndBubble(j.pointerout, { ...Y }, z), N._fireAndBubble(j.pointerleave, { ...Y }, z)), z) {
            if (lt[z._id])
              return;
            lt[z._id] = !0;
          }
          z && z.isListening() ? (R = !0, q && (z._fireAndBubble(j.pointerover, { ...Y }, N), z._fireAndBubble(j.pointerenter, { ...Y }, N), this[Z + "targetShape"] = z), z._fireAndBubble(j.pointermove, { ...Y })) : N && (this._fire(j.pointerover, {
            evt: O,
            target: this,
            currentTarget: this,
            pointerId: $
          }), this[Z + "targetShape"] = null);
        }), R || this._fire(j.pointermove, {
          evt: O,
          target: this,
          currentTarget: this,
          pointerId: this._changedPointerPositions[0].id
        });
      }
      _pointerup(O) {
        const j = W(O.type), Z = L(O.type);
        if (!j)
          return;
        this.setPointersPositions(O);
        const V = this[Z + "ClickStartShape"], lt = this[Z + "ClickEndShape"], R = {};
        let N = !1;
        this._changedPointerPositions.forEach((H) => {
          const z = l.getCapturedShape(H.id) || this.getIntersection(H);
          if (z) {
            if (z.releaseCapture(H.id), R[z._id])
              return;
            R[z._id] = !0;
          }
          const $ = H.id, Y = { evt: O, pointerId: $ };
          let q = !1;
          n.Konva["_" + Z + "InDblClickWindow"] ? (q = !0, clearTimeout(this[Z + "DblTimeout"])) : a.DD.justDragged || (n.Konva["_" + Z + "InDblClickWindow"] = !0, clearTimeout(this[Z + "DblTimeout"])), this[Z + "DblTimeout"] = setTimeout(function() {
            n.Konva["_" + Z + "InDblClickWindow"] = !1;
          }, n.Konva.dblClickWindow), z && z.isListening() ? (N = !0, this[Z + "ClickEndShape"] = z, z._fireAndBubble(j.pointerup, { ...Y }), n.Konva["_" + Z + "ListenClick"] && V && V === z && (z._fireAndBubble(j.pointerclick, { ...Y }), q && lt && lt === z && z._fireAndBubble(j.pointerdblclick, { ...Y }))) : (this[Z + "ClickEndShape"] = null, n.Konva["_" + Z + "ListenClick"] && this._fire(j.pointerclick, {
            evt: O,
            target: this,
            currentTarget: this,
            pointerId: $
          }), q && this._fire(j.pointerdblclick, {
            evt: O,
            target: this,
            currentTarget: this,
            pointerId: $
          }));
        }), N || this._fire(j.pointerup, {
          evt: O,
          target: this,
          currentTarget: this,
          pointerId: this._changedPointerPositions[0].id
        }), n.Konva["_" + Z + "ListenClick"] = !1, O.cancelable && Z !== "touch" && Z !== "pointer" && O.preventDefault();
      }
      _contextmenu(O) {
        this.setPointersPositions(O);
        const j = this.getIntersection(this.getPointerPosition());
        j && j.isListening() ? j._fireAndBubble(D, { evt: O }) : this._fire(D, {
          evt: O,
          target: this,
          currentTarget: this
        });
      }
      _wheel(O) {
        this.setPointersPositions(O);
        const j = this.getIntersection(this.getPointerPosition());
        j && j.isListening() ? j._fireAndBubble(b, { evt: O }) : this._fire(b, {
          evt: O,
          target: this,
          currentTarget: this
        });
      }
      _pointercancel(O) {
        this.setPointersPositions(O);
        const j = l.getCapturedShape(O.pointerId) || this.getIntersection(this.getPointerPosition());
        j && j._fireAndBubble(v, l.createEvent(O)), l.releaseCapture(O.pointerId);
      }
      _lostpointercapture(O) {
        l.releaseCapture(O.pointerId);
      }
      setPointersPositions(O) {
        const j = this._getContentPosition();
        let Z = null, V = null;
        O = O || window.event, O.touches !== void 0 ? (this._pointerPositions = [], this._changedPointerPositions = [], Array.prototype.forEach.call(O.touches, (lt) => {
          this._pointerPositions.push({
            id: lt.identifier,
            x: (lt.clientX - j.left) / j.scaleX,
            y: (lt.clientY - j.top) / j.scaleY
          });
        }), Array.prototype.forEach.call(O.changedTouches || O.touches, (lt) => {
          this._changedPointerPositions.push({
            id: lt.identifier,
            x: (lt.clientX - j.left) / j.scaleX,
            y: (lt.clientY - j.top) / j.scaleY
          });
        })) : (Z = (O.clientX - j.left) / j.scaleX, V = (O.clientY - j.top) / j.scaleY, this.pointerPos = {
          x: Z,
          y: V
        }, this._pointerPositions = [{ x: Z, y: V, id: e.Util._getFirstPointerId(O) }], this._changedPointerPositions = [
          { x: Z, y: V, id: e.Util._getFirstPointerId(O) }
        ]);
      }
      _setPointerPosition(O) {
        e.Util.warn('Method _setPointerPosition is deprecated. Use "stage.setPointersPositions(event)" instead.'), this.setPointersPositions(O);
      }
      _getContentPosition() {
        if (!this.content || !this.content.getBoundingClientRect)
          return {
            top: 0,
            left: 0,
            scaleX: 1,
            scaleY: 1
          };
        const O = this.content.getBoundingClientRect();
        return {
          top: O.top,
          left: O.left,
          scaleX: O.width / this.content.clientWidth || 1,
          scaleY: O.height / this.content.clientHeight || 1
        };
      }
      _buildDOM() {
        if (this.bufferCanvas = new s.SceneCanvas({
          width: this.width(),
          height: this.height()
        }), this.bufferHitCanvas = new s.HitCanvas({
          pixelRatio: 1,
          width: this.width(),
          height: this.height()
        }), !n.Konva.isBrowser)
          return;
        const O = this.container();
        if (!O)
          throw "Stage has no container. A container is required.";
        O.innerHTML = "", this.content = document.createElement("div"), this.content.style.position = "relative", this.content.style.userSelect = "none", this.content.className = "konvajs-content", this.content.setAttribute("role", "presentation"), O.appendChild(this.content), this._resizeDOM();
      }
      cache() {
        return e.Util.warn("Cache function is not allowed for stage. You may use cache only for layers, groups and shapes."), this;
      }
      clearCache() {
        return this;
      }
      batchDraw() {
        return this.getChildren().forEach(function(O) {
          O.batchDraw();
        }), this;
      }
    }
    t.Stage = rt, rt.prototype.nodeType = u, (0, o._registerNode)(rt), i.Factory.addGetterSetter(rt, "container"), n.Konva.isBrowser && document.addEventListener("visibilitychange", () => {
      t.stages.forEach((K) => {
        K.batchDraw();
      });
    });
  })(Rr)), Rr;
}
var di = {}, Er = {}, go;
function Gt() {
  return go || (go = 1, (function(t) {
    Object.defineProperty(t, "__esModule", { value: !0 }), t.Shape = t.shapes = void 0;
    const e = pt(), i = Ot(), r = mt(), n = Lt(), s = yt(), a = pt(), o = wl(), l = "hasShadow", u = "shadowRGBA", h = "patternImage", _ = "linearGradient", m = "radialGradient";
    let f;
    function p() {
      return f || (f = i.Util.createCanvasElement().getContext("2d"), f);
    }
    t.shapes = {};
    function y(w) {
      const T = this.attrs.fillRule;
      T ? w.fill(T) : w.fill();
    }
    function S(w) {
      w.stroke();
    }
    function P(w) {
      const T = this.attrs.fillRule;
      T ? w.fill(T) : w.fill();
    }
    function g(w) {
      w.stroke();
    }
    function c() {
      this._clearCache(l);
    }
    function d() {
      this._clearCache(u);
    }
    function v() {
      this._clearCache(h);
    }
    function x() {
      this._clearCache(_);
    }
    function E() {
      this._clearCache(m);
    }
    class C extends n.Node {
      constructor(T) {
        super(T);
        let M;
        for (; M = i.Util.getRandomColor(), !(M && !(M in t.shapes)); )
          ;
        this.colorKey = M, t.shapes[M] = this;
      }
      getContext() {
        return i.Util.warn("shape.getContext() method is deprecated. Please do not use it."), this.getLayer().getContext();
      }
      getCanvas() {
        return i.Util.warn("shape.getCanvas() method is deprecated. Please do not use it."), this.getLayer().getCanvas();
      }
      getSceneFunc() {
        return this.attrs.sceneFunc || this._sceneFunc;
      }
      getHitFunc() {
        return this.attrs.hitFunc || this._hitFunc;
      }
      hasShadow() {
        return this._getCache(l, this._hasShadow);
      }
      _hasShadow() {
        return this.shadowEnabled() && this.shadowOpacity() !== 0 && !!(this.shadowColor() || this.shadowBlur() || this.shadowOffsetX() || this.shadowOffsetY());
      }
      _getFillPattern() {
        return this._getCache(h, this.__getFillPattern);
      }
      __getFillPattern() {
        if (this.fillPatternImage()) {
          const M = p().createPattern(this.fillPatternImage(), this.fillPatternRepeat() || "repeat");
          if (M && M.setTransform) {
            const D = new i.Transform();
            D.translate(this.fillPatternX(), this.fillPatternY()), D.rotate(e.Konva.getAngle(this.fillPatternRotation())), D.scale(this.fillPatternScaleX(), this.fillPatternScaleY()), D.translate(-1 * this.fillPatternOffsetX(), -1 * this.fillPatternOffsetY());
            const I = D.getMatrix(), B = typeof DOMMatrix > "u" ? {
              a: I[0],
              b: I[1],
              c: I[2],
              d: I[3],
              e: I[4],
              f: I[5]
            } : new DOMMatrix(I);
            M.setTransform(B);
          }
          return M;
        }
      }
      _getLinearGradient() {
        return this._getCache(_, this.__getLinearGradient);
      }
      __getLinearGradient() {
        const T = this.fillLinearGradientColorStops();
        if (T) {
          const M = p(), D = this.fillLinearGradientStartPoint(), I = this.fillLinearGradientEndPoint(), B = M.createLinearGradient(D.x, D.y, I.x, I.y);
          for (let G = 0; G < T.length; G += 2)
            B.addColorStop(T[G], T[G + 1]);
          return B;
        }
      }
      _getRadialGradient() {
        return this._getCache(m, this.__getRadialGradient);
      }
      __getRadialGradient() {
        const T = this.fillRadialGradientColorStops();
        if (T) {
          const M = p(), D = this.fillRadialGradientStartPoint(), I = this.fillRadialGradientEndPoint(), B = M.createRadialGradient(D.x, D.y, this.fillRadialGradientStartRadius(), I.x, I.y, this.fillRadialGradientEndRadius());
          for (let G = 0; G < T.length; G += 2)
            B.addColorStop(T[G], T[G + 1]);
          return B;
        }
      }
      getShadowRGBA() {
        return this._getCache(u, this._getShadowRGBA);
      }
      _getShadowRGBA() {
        if (!this.hasShadow())
          return;
        const T = i.Util.colorToRGBA(this.shadowColor());
        if (T)
          return "rgba(" + T.r + "," + T.g + "," + T.b + "," + T.a * (this.shadowOpacity() || 1) + ")";
      }
      hasFill() {
        return this._calculate("hasFill", [
          "fillEnabled",
          "fill",
          "fillPatternImage",
          "fillLinearGradientColorStops",
          "fillRadialGradientColorStops"
        ], () => this.fillEnabled() && !!(this.fill() || this.fillPatternImage() || this.fillLinearGradientColorStops() || this.fillRadialGradientColorStops()));
      }
      hasStroke() {
        return this._calculate("hasStroke", [
          "strokeEnabled",
          "strokeWidth",
          "stroke",
          "strokeLinearGradientColorStops"
        ], () => this.strokeEnabled() && this.strokeWidth() && !!(this.stroke() || this.strokeLinearGradientColorStops()));
      }
      hasHitStroke() {
        const T = this.hitStrokeWidth();
        return T === "auto" ? this.hasStroke() : this.strokeEnabled() && !!T;
      }
      intersects(T) {
        const M = this.getStage();
        if (!M)
          return !1;
        const D = M.bufferHitCanvas;
        return D.getContext().clear(), this.drawHit(D, void 0, !0), D.context.getImageData(Math.round(T.x), Math.round(T.y), 1, 1).data[3] > 0;
      }
      destroy() {
        return n.Node.prototype.destroy.call(this), delete t.shapes[this.colorKey], delete this.colorKey, this;
      }
      _useBufferCanvas(T) {
        var M;
        if (!((M = this.attrs.perfectDrawEnabled) !== null && M !== void 0 ? M : !0))
          return !1;
        const I = T || this.hasFill(), B = this.hasStroke(), G = this.getAbsoluteOpacity() !== 1;
        if (I && B && G)
          return !0;
        const X = this.hasShadow(), b = this.shadowForStrokeEnabled();
        return !!(I && B && X && b);
      }
      setStrokeHitEnabled(T) {
        i.Util.warn("strokeHitEnabled property is deprecated. Please use hitStrokeWidth instead."), T ? this.hitStrokeWidth("auto") : this.hitStrokeWidth(0);
      }
      getStrokeHitEnabled() {
        return this.hitStrokeWidth() !== 0;
      }
      getSelfRect() {
        const T = this.size();
        return {
          x: this._centroid ? -T.width / 2 : 0,
          y: this._centroid ? -T.height / 2 : 0,
          width: T.width,
          height: T.height
        };
      }
      getClientRect(T = {}) {
        let M = !1, D = this.getParent();
        for (; D; ) {
          if (D.isCached()) {
            M = !0;
            break;
          }
          D = D.getParent();
        }
        const I = T.skipTransform, B = T.relativeTo || M && this.getStage() || void 0, G = this.getSelfRect(), b = !T.skipStroke && this.hasStroke() && this.strokeWidth() || 0, A = G.width + b, k = G.height + b, F = !T.skipShadow && this.hasShadow(), L = F ? this.shadowOffsetX() : 0, W = F ? this.shadowOffsetY() : 0, U = A + Math.abs(L), Q = k + Math.abs(W), rt = F && this.shadowBlur() || 0, K = U + rt * 2, O = Q + rt * 2, j = {
          width: K,
          height: O,
          x: -(b / 2 + rt) + Math.min(L, 0) + G.x,
          y: -(b / 2 + rt) + Math.min(W, 0) + G.y
        };
        return I ? j : this._transformedRect(j, B);
      }
      drawScene(T, M, D) {
        const I = this.getLayer(), B = T || I.getCanvas(), G = B.getContext(), X = this._getCanvasCache(), b = this.getSceneFunc(), A = this.hasShadow();
        let k;
        const F = M === this;
        if (!this.isVisible() && !F)
          return this;
        if (X) {
          G.save();
          const L = this.getAbsoluteTransform(M).getMatrix();
          return G.transform(L[0], L[1], L[2], L[3], L[4], L[5]), this._drawCachedSceneCanvas(G), G.restore(), this;
        }
        if (!b)
          return this;
        if (G.save(), this._useBufferCanvas()) {
          k = this.getStage();
          const L = D || k.bufferCanvas, W = L.getContext();
          W.clear(), W.save(), W._applyLineJoin(this);
          const U = this.getAbsoluteTransform(M).getMatrix();
          W.transform(U[0], U[1], U[2], U[3], U[4], U[5]), b.call(this, W, this), W.restore();
          const Q = L.pixelRatio;
          A && G._applyShadow(this), G._applyOpacity(this), G._applyGlobalCompositeOperation(this), G.drawImage(L._canvas, L.x || 0, L.y || 0, L.width / Q, L.height / Q);
        } else {
          if (G._applyLineJoin(this), !F) {
            const L = this.getAbsoluteTransform(M).getMatrix();
            G.transform(L[0], L[1], L[2], L[3], L[4], L[5]), G._applyOpacity(this), G._applyGlobalCompositeOperation(this);
          }
          A && G._applyShadow(this), b.call(this, G, this);
        }
        return G.restore(), this;
      }
      drawHit(T, M, D = !1) {
        if (!this.shouldDrawHit(M, D))
          return this;
        const I = this.getLayer(), B = T || I.hitCanvas, G = B && B.getContext(), X = this.hitFunc() || this.sceneFunc(), b = this._getCanvasCache(), A = b && b.hit;
        if (this.colorKey || i.Util.warn("Looks like your canvas has a destroyed shape in it. Do not reuse shape after you destroyed it. If you want to reuse shape you should call remove() instead of destroy()"), A) {
          G.save();
          const F = this.getAbsoluteTransform(M).getMatrix();
          return G.transform(F[0], F[1], F[2], F[3], F[4], F[5]), this._drawCachedHitCanvas(G), G.restore(), this;
        }
        if (!X)
          return this;
        if (G.save(), G._applyLineJoin(this), !(this === M)) {
          const F = this.getAbsoluteTransform(M).getMatrix();
          G.transform(F[0], F[1], F[2], F[3], F[4], F[5]);
        }
        return X.call(this, G, this), G.restore(), this;
      }
      drawHitFromCache(T = 0) {
        const M = this._getCanvasCache(), D = this._getCachedSceneCanvas(), I = M.hit, B = I.getContext(), G = I.getWidth(), X = I.getHeight();
        B.clear(), B.drawImage(D._canvas, 0, 0, G, X);
        try {
          const b = B.getImageData(0, 0, G, X), A = b.data, k = A.length, F = i.Util._hexToRgb(this.colorKey);
          for (let L = 0; L < k; L += 4)
            A[L + 3] > T ? (A[L] = F.r, A[L + 1] = F.g, A[L + 2] = F.b, A[L + 3] = 255) : A[L + 3] = 0;
          B.putImageData(b, 0, 0);
        } catch (b) {
          i.Util.error("Unable to draw hit graph from cached scene canvas. " + b.message);
        }
        return this;
      }
      hasPointerCapture(T) {
        return o.hasPointerCapture(T, this);
      }
      setPointerCapture(T) {
        o.setPointerCapture(T, this);
      }
      releaseCapture(T) {
        o.releaseCapture(T, this);
      }
    }
    t.Shape = C, C.prototype._fillFunc = y, C.prototype._strokeFunc = S, C.prototype._fillFuncHit = P, C.prototype._strokeFuncHit = g, C.prototype._centroid = !1, C.prototype.nodeType = "Shape", (0, a._registerNode)(C), C.prototype.eventListeners = {}, C.prototype.on.call(C.prototype, "shadowColorChange.konva shadowBlurChange.konva shadowOffsetChange.konva shadowOpacityChange.konva shadowEnabledChange.konva", c), C.prototype.on.call(C.prototype, "shadowColorChange.konva shadowOpacityChange.konva shadowEnabledChange.konva", d), C.prototype.on.call(C.prototype, "fillPriorityChange.konva fillPatternImageChange.konva fillPatternRepeatChange.konva fillPatternScaleXChange.konva fillPatternScaleYChange.konva fillPatternOffsetXChange.konva fillPatternOffsetYChange.konva fillPatternXChange.konva fillPatternYChange.konva fillPatternRotationChange.konva", v), C.prototype.on.call(C.prototype, "fillPriorityChange.konva fillLinearGradientColorStopsChange.konva fillLinearGradientStartPointXChange.konva fillLinearGradientStartPointYChange.konva fillLinearGradientEndPointXChange.konva fillLinearGradientEndPointYChange.konva", x), C.prototype.on.call(C.prototype, "fillPriorityChange.konva fillRadialGradientColorStopsChange.konva fillRadialGradientStartPointXChange.konva fillRadialGradientStartPointYChange.konva fillRadialGradientEndPointXChange.konva fillRadialGradientEndPointYChange.konva fillRadialGradientStartRadiusChange.konva fillRadialGradientEndRadiusChange.konva", E), r.Factory.addGetterSetter(C, "stroke", void 0, (0, s.getStringOrGradientValidator)()), r.Factory.addGetterSetter(C, "strokeWidth", 2, (0, s.getNumberValidator)()), r.Factory.addGetterSetter(C, "fillAfterStrokeEnabled", !1), r.Factory.addGetterSetter(C, "hitStrokeWidth", "auto", (0, s.getNumberOrAutoValidator)()), r.Factory.addGetterSetter(C, "strokeHitEnabled", !0, (0, s.getBooleanValidator)()), r.Factory.addGetterSetter(C, "perfectDrawEnabled", !0, (0, s.getBooleanValidator)()), r.Factory.addGetterSetter(C, "shadowForStrokeEnabled", !0, (0, s.getBooleanValidator)()), r.Factory.addGetterSetter(C, "lineJoin"), r.Factory.addGetterSetter(C, "lineCap"), r.Factory.addGetterSetter(C, "sceneFunc"), r.Factory.addGetterSetter(C, "hitFunc"), r.Factory.addGetterSetter(C, "dash"), r.Factory.addGetterSetter(C, "dashOffset", 0, (0, s.getNumberValidator)()), r.Factory.addGetterSetter(C, "shadowColor", void 0, (0, s.getStringValidator)()), r.Factory.addGetterSetter(C, "shadowBlur", 0, (0, s.getNumberValidator)()), r.Factory.addGetterSetter(C, "shadowOpacity", 1, (0, s.getNumberValidator)()), r.Factory.addComponentsGetterSetter(C, "shadowOffset", ["x", "y"]), r.Factory.addGetterSetter(C, "shadowOffsetX", 0, (0, s.getNumberValidator)()), r.Factory.addGetterSetter(C, "shadowOffsetY", 0, (0, s.getNumberValidator)()), r.Factory.addGetterSetter(C, "fillPatternImage"), r.Factory.addGetterSetter(C, "fill", void 0, (0, s.getStringOrGradientValidator)()), r.Factory.addGetterSetter(C, "fillPatternX", 0, (0, s.getNumberValidator)()), r.Factory.addGetterSetter(C, "fillPatternY", 0, (0, s.getNumberValidator)()), r.Factory.addGetterSetter(C, "fillLinearGradientColorStops"), r.Factory.addGetterSetter(C, "strokeLinearGradientColorStops"), r.Factory.addGetterSetter(C, "fillRadialGradientStartRadius", 0), r.Factory.addGetterSetter(C, "fillRadialGradientEndRadius", 0), r.Factory.addGetterSetter(C, "fillRadialGradientColorStops"), r.Factory.addGetterSetter(C, "fillPatternRepeat", "repeat"), r.Factory.addGetterSetter(C, "fillEnabled", !0), r.Factory.addGetterSetter(C, "strokeEnabled", !0), r.Factory.addGetterSetter(C, "shadowEnabled", !0), r.Factory.addGetterSetter(C, "dashEnabled", !0), r.Factory.addGetterSetter(C, "strokeScaleEnabled", !0), r.Factory.addGetterSetter(C, "fillPriority", "color"), r.Factory.addComponentsGetterSetter(C, "fillPatternOffset", ["x", "y"]), r.Factory.addGetterSetter(C, "fillPatternOffsetX", 0, (0, s.getNumberValidator)()), r.Factory.addGetterSetter(C, "fillPatternOffsetY", 0, (0, s.getNumberValidator)()), r.Factory.addComponentsGetterSetter(C, "fillPatternScale", ["x", "y"]), r.Factory.addGetterSetter(C, "fillPatternScaleX", 1, (0, s.getNumberValidator)()), r.Factory.addGetterSetter(C, "fillPatternScaleY", 1, (0, s.getNumberValidator)()), r.Factory.addComponentsGetterSetter(C, "fillLinearGradientStartPoint", [
      "x",
      "y"
    ]), r.Factory.addComponentsGetterSetter(C, "strokeLinearGradientStartPoint", [
      "x",
      "y"
    ]), r.Factory.addGetterSetter(C, "fillLinearGradientStartPointX", 0), r.Factory.addGetterSetter(C, "strokeLinearGradientStartPointX", 0), r.Factory.addGetterSetter(C, "fillLinearGradientStartPointY", 0), r.Factory.addGetterSetter(C, "strokeLinearGradientStartPointY", 0), r.Factory.addComponentsGetterSetter(C, "fillLinearGradientEndPoint", [
      "x",
      "y"
    ]), r.Factory.addComponentsGetterSetter(C, "strokeLinearGradientEndPoint", [
      "x",
      "y"
    ]), r.Factory.addGetterSetter(C, "fillLinearGradientEndPointX", 0), r.Factory.addGetterSetter(C, "strokeLinearGradientEndPointX", 0), r.Factory.addGetterSetter(C, "fillLinearGradientEndPointY", 0), r.Factory.addGetterSetter(C, "strokeLinearGradientEndPointY", 0), r.Factory.addComponentsGetterSetter(C, "fillRadialGradientStartPoint", [
      "x",
      "y"
    ]), r.Factory.addGetterSetter(C, "fillRadialGradientStartPointX", 0), r.Factory.addGetterSetter(C, "fillRadialGradientStartPointY", 0), r.Factory.addComponentsGetterSetter(C, "fillRadialGradientEndPoint", [
      "x",
      "y"
    ]), r.Factory.addGetterSetter(C, "fillRadialGradientEndPointX", 0), r.Factory.addGetterSetter(C, "fillRadialGradientEndPointY", 0), r.Factory.addGetterSetter(C, "fillPatternRotation", 0), r.Factory.addGetterSetter(C, "fillRule", void 0, (0, s.getStringValidator)()), r.Factory.backCompat(C, {
      dashArray: "dash",
      getDashArray: "getDash",
      setDashArray: "getDash",
      drawFunc: "sceneFunc",
      getDrawFunc: "getSceneFunc",
      setDrawFunc: "setSceneFunc",
      drawHitFunc: "hitFunc",
      getDrawHitFunc: "getHitFunc",
      setDrawHitFunc: "setHitFunc"
    });
  })(Er)), Er;
}
var po;
function xl() {
  if (po) return di;
  po = 1, Object.defineProperty(di, "__esModule", { value: !0 }), di.Layer = void 0;
  const t = Ot(), e = ur(), i = Lt(), r = mt(), n = cr(), s = yt(), a = Gt(), o = pt(), l = "#", u = "beforeDraw", h = "draw", _ = [
    { x: 0, y: 0 },
    { x: -1, y: -1 },
    { x: 1, y: -1 },
    { x: 1, y: 1 },
    { x: -1, y: 1 }
  ], m = _.length;
  let f = class extends e.Container {
    constructor(y) {
      super(y), this.canvas = new n.SceneCanvas(), this.hitCanvas = new n.HitCanvas({
        pixelRatio: 1
      }), this._waitingForDraw = !1, this.on("visibleChange.konva", this._checkVisibility), this._checkVisibility(), this.on("imageSmoothingEnabledChange.konva", this._setSmoothEnabled), this._setSmoothEnabled();
    }
    createPNGStream() {
      return this.canvas._canvas.createPNGStream();
    }
    getCanvas() {
      return this.canvas;
    }
    getNativeCanvasElement() {
      return this.canvas._canvas;
    }
    getHitCanvas() {
      return this.hitCanvas;
    }
    getContext() {
      return this.getCanvas().getContext();
    }
    clear(y) {
      return this.getContext().clear(y), this.getHitCanvas().getContext().clear(y), this;
    }
    setZIndex(y) {
      super.setZIndex(y);
      const S = this.getStage();
      return S && S.content && (S.content.removeChild(this.getNativeCanvasElement()), y < S.children.length - 1 ? S.content.insertBefore(this.getNativeCanvasElement(), S.children[y + 1].getCanvas()._canvas) : S.content.appendChild(this.getNativeCanvasElement())), this;
    }
    moveToTop() {
      i.Node.prototype.moveToTop.call(this);
      const y = this.getStage();
      return y && y.content && (y.content.removeChild(this.getNativeCanvasElement()), y.content.appendChild(this.getNativeCanvasElement())), !0;
    }
    moveUp() {
      if (!i.Node.prototype.moveUp.call(this))
        return !1;
      const S = this.getStage();
      return !S || !S.content ? !1 : (S.content.removeChild(this.getNativeCanvasElement()), this.index < S.children.length - 1 ? S.content.insertBefore(this.getNativeCanvasElement(), S.children[this.index + 1].getCanvas()._canvas) : S.content.appendChild(this.getNativeCanvasElement()), !0);
    }
    moveDown() {
      if (i.Node.prototype.moveDown.call(this)) {
        const y = this.getStage();
        if (y) {
          const S = y.children;
          y.content && (y.content.removeChild(this.getNativeCanvasElement()), y.content.insertBefore(this.getNativeCanvasElement(), S[this.index + 1].getCanvas()._canvas));
        }
        return !0;
      }
      return !1;
    }
    moveToBottom() {
      if (i.Node.prototype.moveToBottom.call(this)) {
        const y = this.getStage();
        if (y) {
          const S = y.children;
          y.content && (y.content.removeChild(this.getNativeCanvasElement()), y.content.insertBefore(this.getNativeCanvasElement(), S[1].getCanvas()._canvas));
        }
        return !0;
      }
      return !1;
    }
    getLayer() {
      return this;
    }
    remove() {
      const y = this.getNativeCanvasElement();
      return i.Node.prototype.remove.call(this), y && y.parentNode && t.Util._isInDocument(y) && y.parentNode.removeChild(y), this;
    }
    getStage() {
      return this.parent;
    }
    setSize({ width: y, height: S }) {
      return this.canvas.setSize(y, S), this.hitCanvas.setSize(y, S), this._setSmoothEnabled(), this;
    }
    _validateAdd(y) {
      const S = y.getType();
      S !== "Group" && S !== "Shape" && t.Util.throw("You may only add groups and shapes to a layer.");
    }
    _toKonvaCanvas(y) {
      return y = y || {}, y.width = y.width || this.getWidth(), y.height = y.height || this.getHeight(), y.x = y.x !== void 0 ? y.x : this.x(), y.y = y.y !== void 0 ? y.y : this.y(), i.Node.prototype._toKonvaCanvas.call(this, y);
    }
    _checkVisibility() {
      this.visible() ? this.canvas._canvas.style.display = "block" : this.canvas._canvas.style.display = "none";
    }
    _setSmoothEnabled() {
      this.getContext()._context.imageSmoothingEnabled = this.imageSmoothingEnabled();
    }
    getWidth() {
      if (this.parent)
        return this.parent.width();
    }
    setWidth() {
      t.Util.warn('Can not change width of layer. Use "stage.width(value)" function instead.');
    }
    getHeight() {
      if (this.parent)
        return this.parent.height();
    }
    setHeight() {
      t.Util.warn('Can not change height of layer. Use "stage.height(value)" function instead.');
    }
    batchDraw() {
      return this._waitingForDraw || (this._waitingForDraw = !0, t.Util.requestAnimFrame(() => {
        this.draw(), this._waitingForDraw = !1;
      })), this;
    }
    getIntersection(y) {
      if (!this.isListening() || !this.isVisible())
        return null;
      let S = 1, P = !1;
      for (; ; ) {
        for (let g = 0; g < m; g++) {
          const c = _[g], d = this._getIntersection({
            x: y.x + c.x * S,
            y: y.y + c.y * S
          }), v = d.shape;
          if (v)
            return v;
          if (P = !!d.antialiased, !d.antialiased)
            break;
        }
        if (P)
          S += 1;
        else
          return null;
      }
    }
    _getIntersection(y) {
      const S = this.hitCanvas.pixelRatio, P = this.hitCanvas.context.getImageData(Math.round(y.x * S), Math.round(y.y * S), 1, 1).data, g = P[3];
      if (g === 255) {
        const c = t.Util._rgbToHex(P[0], P[1], P[2]), d = a.shapes[l + c];
        return d ? {
          shape: d
        } : {
          antialiased: !0
        };
      } else if (g > 0)
        return {
          antialiased: !0
        };
      return {};
    }
    drawScene(y, S, P) {
      const g = this.getLayer(), c = y || g && g.getCanvas();
      return this._fire(u, {
        node: this
      }), this.clearBeforeDraw() && c.getContext().clear(), e.Container.prototype.drawScene.call(this, c, S, P), this._fire(h, {
        node: this
      }), this;
    }
    drawHit(y, S) {
      const P = this.getLayer(), g = y || P && P.hitCanvas;
      return P && P.clearBeforeDraw() && P.getHitCanvas().getContext().clear(), e.Container.prototype.drawHit.call(this, g, S), this;
    }
    enableHitGraph() {
      return this.hitGraphEnabled(!0), this;
    }
    disableHitGraph() {
      return this.hitGraphEnabled(!1), this;
    }
    setHitGraphEnabled(y) {
      t.Util.warn("hitGraphEnabled method is deprecated. Please use layer.listening() instead."), this.listening(y);
    }
    getHitGraphEnabled(y) {
      return t.Util.warn("hitGraphEnabled method is deprecated. Please use layer.listening() instead."), this.listening();
    }
    toggleHitCanvas() {
      if (!this.parent || !this.parent.content)
        return;
      const y = this.parent;
      !!this.hitCanvas._canvas.parentNode ? y.content.removeChild(this.hitCanvas._canvas) : y.content.appendChild(this.hitCanvas._canvas);
    }
    destroy() {
      return t.Util.releaseCanvas(this.getNativeCanvasElement(), this.getHitCanvas()._canvas), super.destroy();
    }
  };
  return di.Layer = f, f.prototype.nodeType = "Layer", (0, o._registerNode)(f), r.Factory.addGetterSetter(f, "imageSmoothingEnabled", !0), r.Factory.addGetterSetter(f, "clearBeforeDraw", !0), r.Factory.addGetterSetter(f, "hitGraphEnabled", !0, (0, s.getBooleanValidator)()), di;
}
var fi = {}, mo;
function lu() {
  if (mo) return fi;
  mo = 1, Object.defineProperty(fi, "__esModule", { value: !0 }), fi.FastLayer = void 0;
  const t = Ot(), e = xl(), i = pt();
  let r = class extends e.Layer {
    constructor(s) {
      super(s), this.listening(!1), t.Util.warn('Konva.Fast layer is deprecated. Please use "new Konva.Layer({ listening: false })" instead.');
    }
  };
  return fi.FastLayer = r, r.prototype.nodeType = "FastLayer", (0, i._registerNode)(r), fi;
}
var gi = {}, _o;
function ms() {
  if (_o) return gi;
  _o = 1, Object.defineProperty(gi, "__esModule", { value: !0 }), gi.Group = void 0;
  const t = Ot(), e = ur(), i = pt();
  let r = class extends e.Container {
    _validateAdd(s) {
      const a = s.getType();
      a !== "Group" && a !== "Shape" && t.Util.throw("You may only add groups and shapes to groups.");
    }
  };
  return gi.Group = r, r.prototype.nodeType = "Group", (0, i._registerNode)(r), gi;
}
var pi = {}, yo;
function _s() {
  if (yo) return pi;
  yo = 1, Object.defineProperty(pi, "__esModule", { value: !0 }), pi.Animation = void 0;
  const t = pt(), e = Ot(), i = (function() {
    return t.glob.performance && t.glob.performance.now ? function() {
      return t.glob.performance.now();
    } : function() {
      return (/* @__PURE__ */ new Date()).getTime();
    };
  })();
  let r = class Ze {
    constructor(s, a) {
      this.id = Ze.animIdCounter++, this.frame = {
        time: 0,
        timeDiff: 0,
        lastTime: i(),
        frameRate: 0
      }, this.func = s, this.setLayers(a);
    }
    setLayers(s) {
      let a = [];
      return s && (a = Array.isArray(s) ? s : [s]), this.layers = a, this;
    }
    getLayers() {
      return this.layers;
    }
    addLayer(s) {
      const a = this.layers, o = a.length;
      for (let l = 0; l < o; l++)
        if (a[l]._id === s._id)
          return !1;
      return this.layers.push(s), !0;
    }
    isRunning() {
      const a = Ze.animations, o = a.length;
      for (let l = 0; l < o; l++)
        if (a[l].id === this.id)
          return !0;
      return !1;
    }
    start() {
      return this.stop(), this.frame.timeDiff = 0, this.frame.lastTime = i(), Ze._addAnimation(this), this;
    }
    stop() {
      return Ze._removeAnimation(this), this;
    }
    _updateFrameObject(s) {
      this.frame.timeDiff = s - this.frame.lastTime, this.frame.lastTime = s, this.frame.time += this.frame.timeDiff, this.frame.frameRate = 1e3 / this.frame.timeDiff;
    }
    static _addAnimation(s) {
      this.animations.push(s), this._handleAnimation();
    }
    static _removeAnimation(s) {
      const a = s.id, o = this.animations, l = o.length;
      for (let u = 0; u < l; u++)
        if (o[u].id === a) {
          this.animations.splice(u, 1);
          break;
        }
    }
    static _runFrames() {
      const s = {}, a = this.animations;
      for (let o = 0; o < a.length; o++) {
        const l = a[o], u = l.layers, h = l.func;
        l._updateFrameObject(i());
        const _ = u.length;
        let m;
        if (h ? m = h.call(l, l.frame) !== !1 : m = !0, !!m)
          for (let f = 0; f < _; f++) {
            const p = u[f];
            p._id !== void 0 && (s[p._id] = p);
          }
      }
      for (const o in s)
        s.hasOwnProperty(o) && s[o].batchDraw();
    }
    static _animationLoop() {
      const s = Ze;
      s.animations.length ? (s._runFrames(), e.Util.requestAnimFrame(s._animationLoop)) : s.animRunning = !1;
    }
    static _handleAnimation() {
      this.animRunning || (this.animRunning = !0, e.Util.requestAnimFrame(this._animationLoop));
    }
  };
  return pi.Animation = r, r.animations = [], r.animIdCounter = 0, r.animRunning = !1, pi;
}
var Mr = {}, vo;
function hu() {
  return vo || (vo = 1, (function(t) {
    Object.defineProperty(t, "__esModule", { value: !0 }), t.Easings = t.Tween = void 0;
    const e = Ot(), i = _s(), r = Lt(), n = pt(), s = {
      node: 1,
      duration: 1,
      easing: 1,
      onFinish: 1,
      yoyo: 1
    }, a = 1, o = 2, l = 3, u = ["fill", "stroke", "shadowColor"];
    let h = 0;
    class _ {
      constructor(p, y, S, P, g, c, d) {
        this.prop = p, this.propFunc = y, this.begin = P, this._pos = P, this.duration = c, this._change = 0, this.prevPos = 0, this.yoyo = d, this._time = 0, this._position = 0, this._startTime = 0, this._finish = 0, this.func = S, this._change = g - this.begin, this.pause();
      }
      fire(p) {
        const y = this[p];
        y && y();
      }
      setTime(p) {
        p > this.duration ? this.yoyo ? (this._time = this.duration, this.reverse()) : this.finish() : p < 0 ? this.yoyo ? (this._time = 0, this.play()) : this.reset() : (this._time = p, this.update());
      }
      getTime() {
        return this._time;
      }
      setPosition(p) {
        this.prevPos = this._pos, this.propFunc(p), this._pos = p;
      }
      getPosition(p) {
        return p === void 0 && (p = this._time), this.func(p, this.begin, this._change, this.duration);
      }
      play() {
        this.state = o, this._startTime = this.getTimer() - this._time, this.onEnterFrame(), this.fire("onPlay");
      }
      reverse() {
        this.state = l, this._time = this.duration - this._time, this._startTime = this.getTimer() - this._time, this.onEnterFrame(), this.fire("onReverse");
      }
      seek(p) {
        this.pause(), this._time = p, this.update(), this.fire("onSeek");
      }
      reset() {
        this.pause(), this._time = 0, this.update(), this.fire("onReset");
      }
      finish() {
        this.pause(), this._time = this.duration, this.update(), this.fire("onFinish");
      }
      update() {
        this.setPosition(this.getPosition(this._time)), this.fire("onUpdate");
      }
      onEnterFrame() {
        const p = this.getTimer() - this._startTime;
        this.state === o ? this.setTime(p) : this.state === l && this.setTime(this.duration - p);
      }
      pause() {
        this.state = a, this.fire("onPause");
      }
      getTimer() {
        return (/* @__PURE__ */ new Date()).getTime();
      }
    }
    class m {
      constructor(p) {
        const y = this, S = p.node, P = S._id, g = p.easing || t.Easings.Linear, c = !!p.yoyo;
        let d, v;
        typeof p.duration > "u" ? d = 0.3 : p.duration === 0 ? d = 1e-3 : d = p.duration, this.node = S, this._id = h++;
        const x = S.getLayer() || (S instanceof n.Konva.Stage ? S.getLayers() : null);
        x || e.Util.error("Tween constructor have `node` that is not in a layer. Please add node into layer first."), this.anim = new i.Animation(function() {
          y.tween.onEnterFrame();
        }, x), this.tween = new _(v, function(E) {
          y._tweenFunc(E);
        }, g, 0, 1, d * 1e3, c), this._addListeners(), m.attrs[P] || (m.attrs[P] = {}), m.attrs[P][this._id] || (m.attrs[P][this._id] = {}), m.tweens[P] || (m.tweens[P] = {});
        for (v in p)
          s[v] === void 0 && this._addAttr(v, p[v]);
        this.reset(), this.onFinish = p.onFinish, this.onReset = p.onReset, this.onUpdate = p.onUpdate;
      }
      _addAttr(p, y) {
        const S = this.node, P = S._id;
        let g, c, d, v, x;
        const E = m.tweens[P][p];
        E && delete m.attrs[P][E][p];
        let C = S.getAttr(p);
        if (e.Util._isArray(y))
          if (g = [], c = Math.max(y.length, C.length), p === "points" && y.length !== C.length && (y.length > C.length ? (v = C, C = e.Util._prepareArrayForTween(C, y, S.closed())) : (d = y, y = e.Util._prepareArrayForTween(y, C, S.closed()))), p.indexOf("fill") === 0)
            for (let w = 0; w < c; w++)
              if (w % 2 === 0)
                g.push(y[w] - C[w]);
              else {
                const T = e.Util.colorToRGBA(C[w]);
                x = e.Util.colorToRGBA(y[w]), C[w] = T, g.push({
                  r: x.r - T.r,
                  g: x.g - T.g,
                  b: x.b - T.b,
                  a: x.a - T.a
                });
              }
          else
            for (let w = 0; w < c; w++)
              g.push(y[w] - C[w]);
        else u.indexOf(p) !== -1 ? (C = e.Util.colorToRGBA(C), x = e.Util.colorToRGBA(y), g = {
          r: x.r - C.r,
          g: x.g - C.g,
          b: x.b - C.b,
          a: x.a - C.a
        }) : g = y - C;
        m.attrs[P][this._id][p] = {
          start: C,
          diff: g,
          end: y,
          trueEnd: d,
          trueStart: v
        }, m.tweens[P][p] = this._id;
      }
      _tweenFunc(p) {
        const y = this.node, S = m.attrs[y._id][this._id];
        let P, g, c, d, v, x, E, C;
        for (P in S) {
          if (g = S[P], c = g.start, d = g.diff, C = g.end, e.Util._isArray(c))
            if (v = [], E = Math.max(c.length, C.length), P.indexOf("fill") === 0)
              for (x = 0; x < E; x++)
                x % 2 === 0 ? v.push((c[x] || 0) + d[x] * p) : v.push("rgba(" + Math.round(c[x].r + d[x].r * p) + "," + Math.round(c[x].g + d[x].g * p) + "," + Math.round(c[x].b + d[x].b * p) + "," + (c[x].a + d[x].a * p) + ")");
            else
              for (x = 0; x < E; x++)
                v.push((c[x] || 0) + d[x] * p);
          else u.indexOf(P) !== -1 ? v = "rgba(" + Math.round(c.r + d.r * p) + "," + Math.round(c.g + d.g * p) + "," + Math.round(c.b + d.b * p) + "," + (c.a + d.a * p) + ")" : v = c + d * p;
          y.setAttr(P, v);
        }
      }
      _addListeners() {
        this.tween.onPlay = () => {
          this.anim.start();
        }, this.tween.onReverse = () => {
          this.anim.start();
        }, this.tween.onPause = () => {
          this.anim.stop();
        }, this.tween.onFinish = () => {
          const p = this.node, y = m.attrs[p._id][this._id];
          y.points && y.points.trueEnd && p.setAttr("points", y.points.trueEnd), this.onFinish && this.onFinish.call(this);
        }, this.tween.onReset = () => {
          const p = this.node, y = m.attrs[p._id][this._id];
          y.points && y.points.trueStart && p.points(y.points.trueStart), this.onReset && this.onReset();
        }, this.tween.onUpdate = () => {
          this.onUpdate && this.onUpdate.call(this);
        };
      }
      play() {
        return this.tween.play(), this;
      }
      reverse() {
        return this.tween.reverse(), this;
      }
      reset() {
        return this.tween.reset(), this;
      }
      seek(p) {
        return this.tween.seek(p * 1e3), this;
      }
      pause() {
        return this.tween.pause(), this;
      }
      finish() {
        return this.tween.finish(), this;
      }
      destroy() {
        const p = this.node._id, y = this._id, S = m.tweens[p];
        this.pause(), this.anim && this.anim.stop();
        for (const P in S)
          delete m.tweens[p][P];
        delete m.attrs[p][y], m.tweens[p] && (Object.keys(m.tweens[p]).length === 0 && delete m.tweens[p], Object.keys(m.attrs[p]).length === 0 && delete m.attrs[p]);
      }
    }
    t.Tween = m, m.attrs = {}, m.tweens = {}, r.Node.prototype.to = function(f) {
      const p = f.onFinish;
      f.node = this, f.onFinish = function() {
        this.destroy(), p && p();
      }, new m(f).play();
    }, t.Easings = {
      BackEaseIn(f, p, y, S) {
        return y * (f /= S) * f * ((1.70158 + 1) * f - 1.70158) + p;
      },
      BackEaseOut(f, p, y, S) {
        return y * ((f = f / S - 1) * f * ((1.70158 + 1) * f + 1.70158) + 1) + p;
      },
      BackEaseInOut(f, p, y, S) {
        let P = 1.70158;
        return (f /= S / 2) < 1 ? y / 2 * (f * f * (((P *= 1.525) + 1) * f - P)) + p : y / 2 * ((f -= 2) * f * (((P *= 1.525) + 1) * f + P) + 2) + p;
      },
      ElasticEaseIn(f, p, y, S, P, g) {
        let c = 0;
        return f === 0 ? p : (f /= S) === 1 ? p + y : (g || (g = S * 0.3), !P || P < Math.abs(y) ? (P = y, c = g / 4) : c = g / (2 * Math.PI) * Math.asin(y / P), -(P * Math.pow(2, 10 * (f -= 1)) * Math.sin((f * S - c) * (2 * Math.PI) / g)) + p);
      },
      ElasticEaseOut(f, p, y, S, P, g) {
        let c = 0;
        return f === 0 ? p : (f /= S) === 1 ? p + y : (g || (g = S * 0.3), !P || P < Math.abs(y) ? (P = y, c = g / 4) : c = g / (2 * Math.PI) * Math.asin(y / P), P * Math.pow(2, -10 * f) * Math.sin((f * S - c) * (2 * Math.PI) / g) + y + p);
      },
      ElasticEaseInOut(f, p, y, S, P, g) {
        let c = 0;
        return f === 0 ? p : (f /= S / 2) === 2 ? p + y : (g || (g = S * (0.3 * 1.5)), !P || P < Math.abs(y) ? (P = y, c = g / 4) : c = g / (2 * Math.PI) * Math.asin(y / P), f < 1 ? -0.5 * (P * Math.pow(2, 10 * (f -= 1)) * Math.sin((f * S - c) * (2 * Math.PI) / g)) + p : P * Math.pow(2, -10 * (f -= 1)) * Math.sin((f * S - c) * (2 * Math.PI) / g) * 0.5 + y + p);
      },
      BounceEaseOut(f, p, y, S) {
        return (f /= S) < 1 / 2.75 ? y * (7.5625 * f * f) + p : f < 2 / 2.75 ? y * (7.5625 * (f -= 1.5 / 2.75) * f + 0.75) + p : f < 2.5 / 2.75 ? y * (7.5625 * (f -= 2.25 / 2.75) * f + 0.9375) + p : y * (7.5625 * (f -= 2.625 / 2.75) * f + 0.984375) + p;
      },
      BounceEaseIn(f, p, y, S) {
        return y - t.Easings.BounceEaseOut(S - f, 0, y, S) + p;
      },
      BounceEaseInOut(f, p, y, S) {
        return f < S / 2 ? t.Easings.BounceEaseIn(f * 2, 0, y, S) * 0.5 + p : t.Easings.BounceEaseOut(f * 2 - S, 0, y, S) * 0.5 + y * 0.5 + p;
      },
      EaseIn(f, p, y, S) {
        return y * (f /= S) * f + p;
      },
      EaseOut(f, p, y, S) {
        return -y * (f /= S) * (f - 2) + p;
      },
      EaseInOut(f, p, y, S) {
        return (f /= S / 2) < 1 ? y / 2 * f * f + p : -y / 2 * (--f * (f - 2) - 1) + p;
      },
      StrongEaseIn(f, p, y, S) {
        return y * (f /= S) * f * f * f * f + p;
      },
      StrongEaseOut(f, p, y, S) {
        return y * ((f = f / S - 1) * f * f * f * f + 1) + p;
      },
      StrongEaseInOut(f, p, y, S) {
        return (f /= S / 2) < 1 ? y / 2 * f * f * f * f * f + p : y / 2 * ((f -= 2) * f * f * f * f + 2) + p;
      },
      Linear(f, p, y, S) {
        return y * f / S + p;
      }
    };
  })(Mr)), Mr;
}
var bo;
function cu() {
  return bo || (bo = 1, (function(t) {
    Object.defineProperty(t, "__esModule", { value: !0 }), t.Konva = void 0;
    const e = pt(), i = Ot(), r = Lt(), n = ur(), s = au(), a = xl(), o = lu(), l = ms(), u = ps(), h = Gt(), _ = _s(), m = hu(), f = Cl(), p = cr();
    t.Konva = i.Util._assign(e.Konva, {
      Util: i.Util,
      Transform: i.Transform,
      Node: r.Node,
      Container: n.Container,
      Stage: s.Stage,
      stages: s.stages,
      Layer: a.Layer,
      FastLayer: o.FastLayer,
      Group: l.Group,
      DD: u.DD,
      Shape: h.Shape,
      shapes: h.shapes,
      Animation: _.Animation,
      Tween: m.Tween,
      Easings: m.Easings,
      Context: f.Context,
      Canvas: p.Canvas
    }), t.default = t.Konva;
  })(wr)), wr;
}
var mi = {}, So;
function uu() {
  if (So) return mi;
  So = 1, Object.defineProperty(mi, "__esModule", { value: !0 }), mi.Arc = void 0;
  const t = mt(), e = Gt(), i = pt(), r = yt(), n = pt();
  let s = class extends e.Shape {
    _sceneFunc(o) {
      const l = i.Konva.getAngle(this.angle()), u = this.clockwise();
      o.beginPath(), o.arc(0, 0, this.outerRadius(), 0, l, u), o.arc(0, 0, this.innerRadius(), l, 0, !u), o.closePath(), o.fillStrokeShape(this);
    }
    getWidth() {
      return this.outerRadius() * 2;
    }
    getHeight() {
      return this.outerRadius() * 2;
    }
    setWidth(o) {
      this.outerRadius(o / 2);
    }
    setHeight(o) {
      this.outerRadius(o / 2);
    }
    getSelfRect() {
      const o = this.innerRadius(), l = this.outerRadius(), u = this.clockwise(), h = i.Konva.getAngle(u ? 360 - this.angle() : this.angle()), _ = Math.cos(Math.min(h, Math.PI)), m = 1, f = Math.sin(Math.min(Math.max(Math.PI, h), 3 * Math.PI / 2)), p = Math.sin(Math.min(h, Math.PI / 2)), y = _ * (_ > 0 ? o : l), S = m * l, P = f * (f > 0 ? o : l), g = p * (p > 0 ? l : o);
      return {
        x: y,
        y: u ? -1 * g : P,
        width: S - y,
        height: g - P
      };
    }
  };
  return mi.Arc = s, s.prototype._centroid = !0, s.prototype.className = "Arc", s.prototype._attrsAffectingSize = [
    "innerRadius",
    "outerRadius",
    "angle",
    "clockwise"
  ], (0, n._registerNode)(s), t.Factory.addGetterSetter(s, "innerRadius", 0, (0, r.getNumberValidator)()), t.Factory.addGetterSetter(s, "outerRadius", 0, (0, r.getNumberValidator)()), t.Factory.addGetterSetter(s, "angle", 0, (0, r.getNumberValidator)()), t.Factory.addGetterSetter(s, "clockwise", !1, (0, r.getBooleanValidator)()), mi;
}
var _i = {}, yi = {}, Co;
function Pl() {
  if (Co) return yi;
  Co = 1, Object.defineProperty(yi, "__esModule", { value: !0 }), yi.Line = void 0;
  const t = mt(), e = pt(), i = Gt(), r = yt();
  function n(o, l, u, h, _, m, f) {
    const p = Math.sqrt(Math.pow(u - o, 2) + Math.pow(h - l, 2)), y = Math.sqrt(Math.pow(_ - u, 2) + Math.pow(m - h, 2)), S = f * p / (p + y), P = f * y / (p + y), g = u - S * (_ - o), c = h - S * (m - l), d = u + P * (_ - o), v = h + P * (m - l);
    return [g, c, d, v];
  }
  function s(o, l) {
    const u = o.length, h = [];
    for (let _ = 2; _ < u - 2; _ += 2) {
      const m = n(o[_ - 2], o[_ - 1], o[_], o[_ + 1], o[_ + 2], o[_ + 3], l);
      isNaN(m[0]) || (h.push(m[0]), h.push(m[1]), h.push(o[_]), h.push(o[_ + 1]), h.push(m[2]), h.push(m[3]));
    }
    return h;
  }
  let a = class extends i.Shape {
    constructor(l) {
      super(l), this.on("pointsChange.konva tensionChange.konva closedChange.konva bezierChange.konva", function() {
        this._clearCache("tensionPoints");
      });
    }
    _sceneFunc(l) {
      const u = this.points(), h = u.length, _ = this.tension(), m = this.closed(), f = this.bezier();
      if (!h)
        return;
      let p = 0;
      if (l.beginPath(), l.moveTo(u[0], u[1]), _ !== 0 && h > 4) {
        const y = this.getTensionPoints(), S = y.length;
        for (p = m ? 0 : 4, m || l.quadraticCurveTo(y[0], y[1], y[2], y[3]); p < S - 2; )
          l.bezierCurveTo(y[p++], y[p++], y[p++], y[p++], y[p++], y[p++]);
        m || l.quadraticCurveTo(y[S - 2], y[S - 1], u[h - 2], u[h - 1]);
      } else if (f)
        for (p = 2; p < h; )
          l.bezierCurveTo(u[p++], u[p++], u[p++], u[p++], u[p++], u[p++]);
      else
        for (p = 2; p < h; p += 2)
          l.lineTo(u[p], u[p + 1]);
      m ? (l.closePath(), l.fillStrokeShape(this)) : l.strokeShape(this);
    }
    getTensionPoints() {
      return this._getCache("tensionPoints", this._getTensionPoints);
    }
    _getTensionPoints() {
      return this.closed() ? this._getTensionPointsClosed() : s(this.points(), this.tension());
    }
    _getTensionPointsClosed() {
      const l = this.points(), u = l.length, h = this.tension(), _ = n(l[u - 2], l[u - 1], l[0], l[1], l[2], l[3], h), m = n(l[u - 4], l[u - 3], l[u - 2], l[u - 1], l[0], l[1], h), f = s(l, h);
      return [_[2], _[3]].concat(f).concat([
        m[0],
        m[1],
        l[u - 2],
        l[u - 1],
        m[2],
        m[3],
        _[0],
        _[1],
        l[0],
        l[1]
      ]);
    }
    getWidth() {
      return this.getSelfRect().width;
    }
    getHeight() {
      return this.getSelfRect().height;
    }
    getSelfRect() {
      let l = this.points();
      if (l.length < 4)
        return {
          x: l[0] || 0,
          y: l[1] || 0,
          width: 0,
          height: 0
        };
      this.tension() !== 0 ? l = [
        l[0],
        l[1],
        ...this._getTensionPoints(),
        l[l.length - 2],
        l[l.length - 1]
      ] : l = this.points();
      let u = l[0], h = l[0], _ = l[1], m = l[1], f, p;
      for (let y = 0; y < l.length / 2; y++)
        f = l[y * 2], p = l[y * 2 + 1], u = Math.min(u, f), h = Math.max(h, f), _ = Math.min(_, p), m = Math.max(m, p);
      return {
        x: u,
        y: _,
        width: h - u,
        height: m - _
      };
    }
  };
  return yi.Line = a, a.prototype.className = "Line", a.prototype._attrsAffectingSize = ["points", "bezier", "tension"], (0, e._registerNode)(a), t.Factory.addGetterSetter(a, "closed", !1), t.Factory.addGetterSetter(a, "bezier", !1), t.Factory.addGetterSetter(a, "tension", 0, (0, r.getNumberValidator)()), t.Factory.addGetterSetter(a, "points", [], (0, r.getNumberArrayValidator)()), yi;
}
var vi = {}, Fr = {}, wo;
function du() {
  return wo || (wo = 1, (function(t) {
    Object.defineProperty(t, "__esModule", { value: !0 }), t.t2length = t.getQuadraticArcLength = t.getCubicArcLength = t.binomialCoefficients = t.cValues = t.tValues = void 0, t.tValues = [
      [],
      [],
      [
        -0.5773502691896257,
        0.5773502691896257
      ],
      [
        0,
        -0.7745966692414834,
        0.7745966692414834
      ],
      [
        -0.33998104358485626,
        0.33998104358485626,
        -0.8611363115940526,
        0.8611363115940526
      ],
      [
        0,
        -0.5384693101056831,
        0.5384693101056831,
        -0.906179845938664,
        0.906179845938664
      ],
      [
        0.6612093864662645,
        -0.6612093864662645,
        -0.2386191860831969,
        0.2386191860831969,
        -0.932469514203152,
        0.932469514203152
      ],
      [
        0,
        0.4058451513773972,
        -0.4058451513773972,
        -0.7415311855993945,
        0.7415311855993945,
        -0.9491079123427585,
        0.9491079123427585
      ],
      [
        -0.1834346424956498,
        0.1834346424956498,
        -0.525532409916329,
        0.525532409916329,
        -0.7966664774136267,
        0.7966664774136267,
        -0.9602898564975363,
        0.9602898564975363
      ],
      [
        0,
        -0.8360311073266358,
        0.8360311073266358,
        -0.9681602395076261,
        0.9681602395076261,
        -0.3242534234038089,
        0.3242534234038089,
        -0.6133714327005904,
        0.6133714327005904
      ],
      [
        -0.14887433898163122,
        0.14887433898163122,
        -0.4333953941292472,
        0.4333953941292472,
        -0.6794095682990244,
        0.6794095682990244,
        -0.8650633666889845,
        0.8650633666889845,
        -0.9739065285171717,
        0.9739065285171717
      ],
      [
        0,
        -0.26954315595234496,
        0.26954315595234496,
        -0.5190961292068118,
        0.5190961292068118,
        -0.7301520055740494,
        0.7301520055740494,
        -0.8870625997680953,
        0.8870625997680953,
        -0.978228658146057,
        0.978228658146057
      ],
      [
        -0.1252334085114689,
        0.1252334085114689,
        -0.3678314989981802,
        0.3678314989981802,
        -0.5873179542866175,
        0.5873179542866175,
        -0.7699026741943047,
        0.7699026741943047,
        -0.9041172563704749,
        0.9041172563704749,
        -0.9815606342467192,
        0.9815606342467192
      ],
      [
        0,
        -0.2304583159551348,
        0.2304583159551348,
        -0.44849275103644687,
        0.44849275103644687,
        -0.6423493394403402,
        0.6423493394403402,
        -0.8015780907333099,
        0.8015780907333099,
        -0.9175983992229779,
        0.9175983992229779,
        -0.9841830547185881,
        0.9841830547185881
      ],
      [
        -0.10805494870734367,
        0.10805494870734367,
        -0.31911236892788974,
        0.31911236892788974,
        -0.5152486363581541,
        0.5152486363581541,
        -0.6872929048116855,
        0.6872929048116855,
        -0.827201315069765,
        0.827201315069765,
        -0.9284348836635735,
        0.9284348836635735,
        -0.9862838086968123,
        0.9862838086968123
      ],
      [
        0,
        -0.20119409399743451,
        0.20119409399743451,
        -0.3941513470775634,
        0.3941513470775634,
        -0.5709721726085388,
        0.5709721726085388,
        -0.7244177313601701,
        0.7244177313601701,
        -0.8482065834104272,
        0.8482065834104272,
        -0.937273392400706,
        0.937273392400706,
        -0.9879925180204854,
        0.9879925180204854
      ],
      [
        -0.09501250983763744,
        0.09501250983763744,
        -0.2816035507792589,
        0.2816035507792589,
        -0.45801677765722737,
        0.45801677765722737,
        -0.6178762444026438,
        0.6178762444026438,
        -0.755404408355003,
        0.755404408355003,
        -0.8656312023878318,
        0.8656312023878318,
        -0.9445750230732326,
        0.9445750230732326,
        -0.9894009349916499,
        0.9894009349916499
      ],
      [
        0,
        -0.17848418149584785,
        0.17848418149584785,
        -0.3512317634538763,
        0.3512317634538763,
        -0.5126905370864769,
        0.5126905370864769,
        -0.6576711592166907,
        0.6576711592166907,
        -0.7815140038968014,
        0.7815140038968014,
        -0.8802391537269859,
        0.8802391537269859,
        -0.9506755217687678,
        0.9506755217687678,
        -0.9905754753144174,
        0.9905754753144174
      ],
      [
        -0.0847750130417353,
        0.0847750130417353,
        -0.2518862256915055,
        0.2518862256915055,
        -0.41175116146284263,
        0.41175116146284263,
        -0.5597708310739475,
        0.5597708310739475,
        -0.6916870430603532,
        0.6916870430603532,
        -0.8037049589725231,
        0.8037049589725231,
        -0.8926024664975557,
        0.8926024664975557,
        -0.9558239495713977,
        0.9558239495713977,
        -0.9915651684209309,
        0.9915651684209309
      ],
      [
        0,
        -0.16035864564022537,
        0.16035864564022537,
        -0.31656409996362983,
        0.31656409996362983,
        -0.46457074137596094,
        0.46457074137596094,
        -0.600545304661681,
        0.600545304661681,
        -0.7209661773352294,
        0.7209661773352294,
        -0.8227146565371428,
        0.8227146565371428,
        -0.9031559036148179,
        0.9031559036148179,
        -0.96020815213483,
        0.96020815213483,
        -0.9924068438435844,
        0.9924068438435844
      ],
      [
        -0.07652652113349734,
        0.07652652113349734,
        -0.22778585114164507,
        0.22778585114164507,
        -0.37370608871541955,
        0.37370608871541955,
        -0.5108670019508271,
        0.5108670019508271,
        -0.636053680726515,
        0.636053680726515,
        -0.7463319064601508,
        0.7463319064601508,
        -0.8391169718222188,
        0.8391169718222188,
        -0.912234428251326,
        0.912234428251326,
        -0.9639719272779138,
        0.9639719272779138,
        -0.9931285991850949,
        0.9931285991850949
      ],
      [
        0,
        -0.1455618541608951,
        0.1455618541608951,
        -0.2880213168024011,
        0.2880213168024011,
        -0.4243421202074388,
        0.4243421202074388,
        -0.5516188358872198,
        0.5516188358872198,
        -0.6671388041974123,
        0.6671388041974123,
        -0.7684399634756779,
        0.7684399634756779,
        -0.8533633645833173,
        0.8533633645833173,
        -0.9200993341504008,
        0.9200993341504008,
        -0.9672268385663063,
        0.9672268385663063,
        -0.9937521706203895,
        0.9937521706203895
      ],
      [
        -0.06973927331972223,
        0.06973927331972223,
        -0.20786042668822127,
        0.20786042668822127,
        -0.34193582089208424,
        0.34193582089208424,
        -0.469355837986757,
        0.469355837986757,
        -0.5876404035069116,
        0.5876404035069116,
        -0.6944872631866827,
        0.6944872631866827,
        -0.7878168059792081,
        0.7878168059792081,
        -0.8658125777203002,
        0.8658125777203002,
        -0.926956772187174,
        0.926956772187174,
        -0.9700604978354287,
        0.9700604978354287,
        -0.9942945854823992,
        0.9942945854823992
      ],
      [
        0,
        -0.1332568242984661,
        0.1332568242984661,
        -0.26413568097034495,
        0.26413568097034495,
        -0.3903010380302908,
        0.3903010380302908,
        -0.5095014778460075,
        0.5095014778460075,
        -0.6196098757636461,
        0.6196098757636461,
        -0.7186613631319502,
        0.7186613631319502,
        -0.8048884016188399,
        0.8048884016188399,
        -0.8767523582704416,
        0.8767523582704416,
        -0.9329710868260161,
        0.9329710868260161,
        -0.9725424712181152,
        0.9725424712181152,
        -0.9947693349975522,
        0.9947693349975522
      ],
      [
        -0.06405689286260563,
        0.06405689286260563,
        -0.1911188674736163,
        0.1911188674736163,
        -0.3150426796961634,
        0.3150426796961634,
        -0.4337935076260451,
        0.4337935076260451,
        -0.5454214713888396,
        0.5454214713888396,
        -0.6480936519369755,
        0.6480936519369755,
        -0.7401241915785544,
        0.7401241915785544,
        -0.820001985973903,
        0.820001985973903,
        -0.8864155270044011,
        0.8864155270044011,
        -0.9382745520027328,
        0.9382745520027328,
        -0.9747285559713095,
        0.9747285559713095,
        -0.9951872199970213,
        0.9951872199970213
      ]
    ], t.cValues = [
      [],
      [],
      [1, 1],
      [
        0.8888888888888888,
        0.5555555555555556,
        0.5555555555555556
      ],
      [
        0.6521451548625461,
        0.6521451548625461,
        0.34785484513745385,
        0.34785484513745385
      ],
      [
        0.5688888888888889,
        0.47862867049936647,
        0.47862867049936647,
        0.23692688505618908,
        0.23692688505618908
      ],
      [
        0.3607615730481386,
        0.3607615730481386,
        0.46791393457269104,
        0.46791393457269104,
        0.17132449237917036,
        0.17132449237917036
      ],
      [
        0.4179591836734694,
        0.3818300505051189,
        0.3818300505051189,
        0.27970539148927664,
        0.27970539148927664,
        0.1294849661688697,
        0.1294849661688697
      ],
      [
        0.362683783378362,
        0.362683783378362,
        0.31370664587788727,
        0.31370664587788727,
        0.22238103445337448,
        0.22238103445337448,
        0.10122853629037626,
        0.10122853629037626
      ],
      [
        0.3302393550012598,
        0.1806481606948574,
        0.1806481606948574,
        0.08127438836157441,
        0.08127438836157441,
        0.31234707704000286,
        0.31234707704000286,
        0.26061069640293544,
        0.26061069640293544
      ],
      [
        0.29552422471475287,
        0.29552422471475287,
        0.26926671930999635,
        0.26926671930999635,
        0.21908636251598204,
        0.21908636251598204,
        0.1494513491505806,
        0.1494513491505806,
        0.06667134430868814,
        0.06667134430868814
      ],
      [
        0.2729250867779006,
        0.26280454451024665,
        0.26280454451024665,
        0.23319376459199048,
        0.23319376459199048,
        0.18629021092773426,
        0.18629021092773426,
        0.1255803694649046,
        0.1255803694649046,
        0.05566856711617366,
        0.05566856711617366
      ],
      [
        0.24914704581340277,
        0.24914704581340277,
        0.2334925365383548,
        0.2334925365383548,
        0.20316742672306592,
        0.20316742672306592,
        0.16007832854334622,
        0.16007832854334622,
        0.10693932599531843,
        0.10693932599531843,
        0.04717533638651183,
        0.04717533638651183
      ],
      [
        0.2325515532308739,
        0.22628318026289723,
        0.22628318026289723,
        0.2078160475368885,
        0.2078160475368885,
        0.17814598076194574,
        0.17814598076194574,
        0.13887351021978725,
        0.13887351021978725,
        0.09212149983772845,
        0.09212149983772845,
        0.04048400476531588,
        0.04048400476531588
      ],
      [
        0.2152638534631578,
        0.2152638534631578,
        0.2051984637212956,
        0.2051984637212956,
        0.18553839747793782,
        0.18553839747793782,
        0.15720316715819355,
        0.15720316715819355,
        0.12151857068790319,
        0.12151857068790319,
        0.08015808715976021,
        0.08015808715976021,
        0.03511946033175186,
        0.03511946033175186
      ],
      [
        0.2025782419255613,
        0.19843148532711158,
        0.19843148532711158,
        0.1861610000155622,
        0.1861610000155622,
        0.16626920581699392,
        0.16626920581699392,
        0.13957067792615432,
        0.13957067792615432,
        0.10715922046717194,
        0.10715922046717194,
        0.07036604748810812,
        0.07036604748810812,
        0.03075324199611727,
        0.03075324199611727
      ],
      [
        0.1894506104550685,
        0.1894506104550685,
        0.18260341504492358,
        0.18260341504492358,
        0.16915651939500254,
        0.16915651939500254,
        0.14959598881657674,
        0.14959598881657674,
        0.12462897125553388,
        0.12462897125553388,
        0.09515851168249279,
        0.09515851168249279,
        0.062253523938647894,
        0.062253523938647894,
        0.027152459411754096,
        0.027152459411754096
      ],
      [
        0.17944647035620653,
        0.17656270536699264,
        0.17656270536699264,
        0.16800410215645004,
        0.16800410215645004,
        0.15404576107681028,
        0.15404576107681028,
        0.13513636846852548,
        0.13513636846852548,
        0.11188384719340397,
        0.11188384719340397,
        0.08503614831717918,
        0.08503614831717918,
        0.0554595293739872,
        0.0554595293739872,
        0.02414830286854793,
        0.02414830286854793
      ],
      [
        0.1691423829631436,
        0.1691423829631436,
        0.16427648374583273,
        0.16427648374583273,
        0.15468467512626524,
        0.15468467512626524,
        0.14064291467065065,
        0.14064291467065065,
        0.12255520671147846,
        0.12255520671147846,
        0.10094204410628717,
        0.10094204410628717,
        0.07642573025488905,
        0.07642573025488905,
        0.0497145488949698,
        0.0497145488949698,
        0.02161601352648331,
        0.02161601352648331
      ],
      [
        0.1610544498487837,
        0.15896884339395434,
        0.15896884339395434,
        0.15276604206585967,
        0.15276604206585967,
        0.1426067021736066,
        0.1426067021736066,
        0.12875396253933621,
        0.12875396253933621,
        0.11156664554733399,
        0.11156664554733399,
        0.09149002162245,
        0.09149002162245,
        0.06904454273764123,
        0.06904454273764123,
        0.0448142267656996,
        0.0448142267656996,
        0.019461788229726478,
        0.019461788229726478
      ],
      [
        0.15275338713072584,
        0.15275338713072584,
        0.14917298647260374,
        0.14917298647260374,
        0.14209610931838204,
        0.14209610931838204,
        0.13168863844917664,
        0.13168863844917664,
        0.11819453196151841,
        0.11819453196151841,
        0.10193011981724044,
        0.10193011981724044,
        0.08327674157670475,
        0.08327674157670475,
        0.06267204833410907,
        0.06267204833410907,
        0.04060142980038694,
        0.04060142980038694,
        0.017614007139152118,
        0.017614007139152118
      ],
      [
        0.14608113364969041,
        0.14452440398997005,
        0.14452440398997005,
        0.13988739479107315,
        0.13988739479107315,
        0.13226893863333747,
        0.13226893863333747,
        0.12183141605372853,
        0.12183141605372853,
        0.10879729916714838,
        0.10879729916714838,
        0.09344442345603386,
        0.09344442345603386,
        0.0761001136283793,
        0.0761001136283793,
        0.057134425426857205,
        0.057134425426857205,
        0.036953789770852494,
        0.036953789770852494,
        0.016017228257774335,
        0.016017228257774335
      ],
      [
        0.13925187285563198,
        0.13925187285563198,
        0.13654149834601517,
        0.13654149834601517,
        0.13117350478706238,
        0.13117350478706238,
        0.12325237681051242,
        0.12325237681051242,
        0.11293229608053922,
        0.11293229608053922,
        0.10041414444288096,
        0.10041414444288096,
        0.08594160621706773,
        0.08594160621706773,
        0.06979646842452049,
        0.06979646842452049,
        0.052293335152683286,
        0.052293335152683286,
        0.03377490158481415,
        0.03377490158481415,
        0.0146279952982722,
        0.0146279952982722
      ],
      [
        0.13365457218610619,
        0.1324620394046966,
        0.1324620394046966,
        0.12890572218808216,
        0.12890572218808216,
        0.12304908430672953,
        0.12304908430672953,
        0.11499664022241136,
        0.11499664022241136,
        0.10489209146454141,
        0.10489209146454141,
        0.09291576606003515,
        0.09291576606003515,
        0.07928141177671895,
        0.07928141177671895,
        0.06423242140852585,
        0.06423242140852585,
        0.04803767173108467,
        0.04803767173108467,
        0.030988005856979445,
        0.030988005856979445,
        0.013411859487141771,
        0.013411859487141771
      ],
      [
        0.12793819534675216,
        0.12793819534675216,
        0.1258374563468283,
        0.1258374563468283,
        0.12167047292780339,
        0.12167047292780339,
        0.1155056680537256,
        0.1155056680537256,
        0.10744427011596563,
        0.10744427011596563,
        0.09761865210411388,
        0.09761865210411388,
        0.08619016153195327,
        0.08619016153195327,
        0.0733464814110803,
        0.0733464814110803,
        0.05929858491543678,
        0.05929858491543678,
        0.04427743881741981,
        0.04427743881741981,
        0.028531388628933663,
        0.028531388628933663,
        0.0123412297999872,
        0.0123412297999872
      ]
    ], t.binomialCoefficients = [[1], [1, 1], [1, 2, 1], [1, 3, 3, 1]];
    const e = (a, o, l) => {
      let u, h;
      const m = l / 2;
      u = 0;
      for (let f = 0; f < 20; f++)
        h = m * t.tValues[20][f] + m, u += t.cValues[20][f] * r(a, o, h);
      return m * u;
    };
    t.getCubicArcLength = e;
    const i = (a, o, l) => {
      l === void 0 && (l = 1);
      const u = a[0] - 2 * a[1] + a[2], h = o[0] - 2 * o[1] + o[2], _ = 2 * a[1] - 2 * a[0], m = 2 * o[1] - 2 * o[0], f = 4 * (u * u + h * h), p = 4 * (u * _ + h * m), y = _ * _ + m * m;
      if (f === 0)
        return l * Math.sqrt(Math.pow(a[2] - a[0], 2) + Math.pow(o[2] - o[0], 2));
      const S = p / (2 * f), P = y / f, g = l + S, c = P - S * S, d = g * g + c > 0 ? Math.sqrt(g * g + c) : 0, v = S * S + c > 0 ? Math.sqrt(S * S + c) : 0, x = S + Math.sqrt(S * S + c) !== 0 ? c * Math.log(Math.abs((g + d) / (S + v))) : 0;
      return Math.sqrt(f) / 2 * (g * d - S * v + x);
    };
    t.getQuadraticArcLength = i;
    function r(a, o, l) {
      const u = n(1, l, a), h = n(1, l, o), _ = u * u + h * h;
      return Math.sqrt(_);
    }
    const n = (a, o, l) => {
      const u = l.length - 1;
      let h, _;
      if (u === 0)
        return 0;
      if (a === 0) {
        _ = 0;
        for (let m = 0; m <= u; m++)
          _ += t.binomialCoefficients[u][m] * Math.pow(1 - o, u - m) * Math.pow(o, m) * l[m];
        return _;
      } else {
        h = new Array(u);
        for (let m = 0; m < u; m++)
          h[m] = u * (l[m + 1] - l[m]);
        return n(a - 1, o, h);
      }
    }, s = (a, o, l) => {
      let u = 1, h = a / o, _ = (a - l(h)) / o, m = 0;
      for (; u > 1e-3; ) {
        const f = l(h + _), p = Math.abs(a - f) / o;
        if (p < u)
          u = p, h += _;
        else {
          const y = l(h - _), S = Math.abs(a - y) / o;
          S < u ? (u = S, h -= _) : _ /= 2;
        }
        if (m++, m > 500)
          break;
      }
      return h;
    };
    t.t2length = s;
  })(Fr)), Fr;
}
var xo;
function ys() {
  if (xo) return vi;
  xo = 1, Object.defineProperty(vi, "__esModule", { value: !0 }), vi.Path = void 0;
  const t = mt(), e = pt(), i = Gt(), r = du();
  let n = class $t extends i.Shape {
    constructor(a) {
      super(a), this.dataArray = [], this.pathLength = 0, this._readDataAttribute(), this.on("dataChange.konva", function() {
        this._readDataAttribute();
      });
    }
    _readDataAttribute() {
      this.dataArray = $t.parsePathData(this.data()), this.pathLength = $t.getPathLength(this.dataArray);
    }
    _sceneFunc(a) {
      const o = this.dataArray;
      a.beginPath();
      let l = !1;
      for (let u = 0; u < o.length; u++) {
        const h = o[u].command, _ = o[u].points;
        switch (h) {
          case "L":
            a.lineTo(_[0], _[1]);
            break;
          case "M":
            a.moveTo(_[0], _[1]);
            break;
          case "C":
            a.bezierCurveTo(_[0], _[1], _[2], _[3], _[4], _[5]);
            break;
          case "Q":
            a.quadraticCurveTo(_[0], _[1], _[2], _[3]);
            break;
          case "A":
            const m = _[0], f = _[1], p = _[2], y = _[3], S = _[4], P = _[5], g = _[6], c = _[7], d = p > y ? p : y, v = p > y ? 1 : p / y, x = p > y ? y / p : 1;
            a.translate(m, f), a.rotate(g), a.scale(v, x), a.arc(0, 0, d, S, S + P, 1 - c), a.scale(1 / v, 1 / x), a.rotate(-g), a.translate(-m, -f);
            break;
          case "z":
            l = !0, a.closePath();
            break;
        }
      }
      !l && !this.hasFill() ? a.strokeShape(this) : a.fillStrokeShape(this);
    }
    getSelfRect() {
      let a = [];
      this.dataArray.forEach(function(f) {
        if (f.command === "A") {
          const p = f.points[4], y = f.points[5], S = f.points[4] + y;
          let P = Math.PI / 180;
          if (Math.abs(p - S) < P && (P = Math.abs(p - S)), y < 0)
            for (let g = p - P; g > S; g -= P) {
              const c = $t.getPointOnEllipticalArc(f.points[0], f.points[1], f.points[2], f.points[3], g, 0);
              a.push(c.x, c.y);
            }
          else
            for (let g = p + P; g < S; g += P) {
              const c = $t.getPointOnEllipticalArc(f.points[0], f.points[1], f.points[2], f.points[3], g, 0);
              a.push(c.x, c.y);
            }
        } else if (f.command === "C")
          for (let p = 0; p <= 1; p += 0.01) {
            const y = $t.getPointOnCubicBezier(p, f.start.x, f.start.y, f.points[0], f.points[1], f.points[2], f.points[3], f.points[4], f.points[5]);
            a.push(y.x, y.y);
          }
        else
          a = a.concat(f.points);
      });
      let o = a[0], l = a[0], u = a[1], h = a[1], _, m;
      for (let f = 0; f < a.length / 2; f++)
        _ = a[f * 2], m = a[f * 2 + 1], isNaN(_) || (o = Math.min(o, _), l = Math.max(l, _)), isNaN(m) || (u = Math.min(u, m), h = Math.max(h, m));
      return {
        x: o,
        y: u,
        width: l - o,
        height: h - u
      };
    }
    getLength() {
      return this.pathLength;
    }
    getPointAtLength(a) {
      return $t.getPointAtLengthOfDataArray(a, this.dataArray);
    }
    static getLineLength(a, o, l, u) {
      return Math.sqrt((l - a) * (l - a) + (u - o) * (u - o));
    }
    static getPathLength(a) {
      let o = 0;
      for (let l = 0; l < a.length; ++l)
        o += a[l].pathLength;
      return o;
    }
    static getPointAtLengthOfDataArray(a, o) {
      let l, u = 0, h = o.length;
      if (!h)
        return null;
      for (; u < h && a > o[u].pathLength; )
        a -= o[u].pathLength, ++u;
      if (u === h)
        return l = o[u - 1].points.slice(-2), {
          x: l[0],
          y: l[1]
        };
      if (a < 0.01)
        return o[u].command === "M" ? (l = o[u].points.slice(0, 2), {
          x: l[0],
          y: l[1]
        }) : {
          x: o[u].start.x,
          y: o[u].start.y
        };
      const _ = o[u], m = _.points;
      switch (_.command) {
        case "L":
          return $t.getPointOnLine(a, _.start.x, _.start.y, m[0], m[1]);
        case "C":
          return $t.getPointOnCubicBezier((0, r.t2length)(a, $t.getPathLength(o), (d) => (0, r.getCubicArcLength)([_.start.x, m[0], m[2], m[4]], [_.start.y, m[1], m[3], m[5]], d)), _.start.x, _.start.y, m[0], m[1], m[2], m[3], m[4], m[5]);
        case "Q":
          return $t.getPointOnQuadraticBezier((0, r.t2length)(a, $t.getPathLength(o), (d) => (0, r.getQuadraticArcLength)([_.start.x, m[0], m[2]], [_.start.y, m[1], m[3]], d)), _.start.x, _.start.y, m[0], m[1], m[2], m[3]);
        case "A":
          const f = m[0], p = m[1], y = m[2], S = m[3], P = m[5], g = m[6];
          let c = m[4];
          return c += P * a / _.pathLength, $t.getPointOnEllipticalArc(f, p, y, S, c, g);
      }
      return null;
    }
    static getPointOnLine(a, o, l, u, h, _, m) {
      _ = _ ?? o, m = m ?? l;
      const f = this.getLineLength(o, l, u, h);
      if (f < 1e-10)
        return { x: o, y: l };
      if (u === o)
        return { x: _, y: m + (h > l ? a : -a) };
      const p = (h - l) / (u - o), y = Math.sqrt(a * a / (1 + p * p)) * (u < o ? -1 : 1), S = p * y;
      if (Math.abs(m - l - p * (_ - o)) < 1e-10)
        return { x: _ + y, y: m + S };
      const P = ((_ - o) * (u - o) + (m - l) * (h - l)) / (f * f), g = o + P * (u - o), c = l + P * (h - l), d = this.getLineLength(_, m, g, c), v = Math.sqrt(a * a - d * d), x = Math.sqrt(v * v / (1 + p * p)) * (u < o ? -1 : 1), E = p * x;
      return { x: g + x, y: c + E };
    }
    static getPointOnCubicBezier(a, o, l, u, h, _, m, f, p) {
      function y(v) {
        return v * v * v;
      }
      function S(v) {
        return 3 * v * v * (1 - v);
      }
      function P(v) {
        return 3 * v * (1 - v) * (1 - v);
      }
      function g(v) {
        return (1 - v) * (1 - v) * (1 - v);
      }
      const c = f * y(a) + _ * S(a) + u * P(a) + o * g(a), d = p * y(a) + m * S(a) + h * P(a) + l * g(a);
      return { x: c, y: d };
    }
    static getPointOnQuadraticBezier(a, o, l, u, h, _, m) {
      function f(g) {
        return g * g;
      }
      function p(g) {
        return 2 * g * (1 - g);
      }
      function y(g) {
        return (1 - g) * (1 - g);
      }
      const S = _ * f(a) + u * p(a) + o * y(a), P = m * f(a) + h * p(a) + l * y(a);
      return { x: S, y: P };
    }
    static getPointOnEllipticalArc(a, o, l, u, h, _) {
      const m = Math.cos(_), f = Math.sin(_), p = {
        x: l * Math.cos(h),
        y: u * Math.sin(h)
      };
      return {
        x: a + (p.x * m - p.y * f),
        y: o + (p.x * f + p.y * m)
      };
    }
    static parsePathData(a) {
      if (!a)
        return [];
      let o = a;
      const l = [
        "m",
        "M",
        "l",
        "L",
        "v",
        "V",
        "h",
        "H",
        "z",
        "Z",
        "c",
        "C",
        "q",
        "Q",
        "t",
        "T",
        "s",
        "S",
        "a",
        "A"
      ];
      o = o.replace(new RegExp(" ", "g"), ",");
      for (let S = 0; S < l.length; S++)
        o = o.replace(new RegExp(l[S], "g"), "|" + l[S]);
      const u = o.split("|"), h = [], _ = [];
      let m = 0, f = 0;
      const p = /([-+]?((\d+\.\d+)|((\d+)|(\.\d+)))(?:e[-+]?\d+)?)/gi;
      let y;
      for (let S = 1; S < u.length; S++) {
        let P = u[S], g = P.charAt(0);
        for (P = P.slice(1), _.length = 0; y = p.exec(P); )
          _.push(y[0]);
        const c = [];
        for (let d = 0, v = _.length; d < v; d++) {
          if (_[d] === "00") {
            c.push(0, 0);
            continue;
          }
          const x = parseFloat(_[d]);
          isNaN(x) ? c.push(0) : c.push(x);
        }
        for (; c.length > 0 && !isNaN(c[0]); ) {
          let d = "", v = [];
          const x = m, E = f;
          let C, w, T, M, D, I, B, G, X, b;
          switch (g) {
            case "l":
              m += c.shift(), f += c.shift(), d = "L", v.push(m, f);
              break;
            case "L":
              m = c.shift(), f = c.shift(), v.push(m, f);
              break;
            case "m":
              const A = c.shift(), k = c.shift();
              if (m += A, f += k, d = "M", h.length > 2 && h[h.length - 1].command === "z") {
                for (let F = h.length - 2; F >= 0; F--)
                  if (h[F].command === "M") {
                    m = h[F].points[0] + A, f = h[F].points[1] + k;
                    break;
                  }
              }
              v.push(m, f), g = "l";
              break;
            case "M":
              m = c.shift(), f = c.shift(), d = "M", v.push(m, f), g = "L";
              break;
            case "h":
              m += c.shift(), d = "L", v.push(m, f);
              break;
            case "H":
              m = c.shift(), d = "L", v.push(m, f);
              break;
            case "v":
              f += c.shift(), d = "L", v.push(m, f);
              break;
            case "V":
              f = c.shift(), d = "L", v.push(m, f);
              break;
            case "C":
              v.push(c.shift(), c.shift(), c.shift(), c.shift()), m = c.shift(), f = c.shift(), v.push(m, f);
              break;
            case "c":
              v.push(m + c.shift(), f + c.shift(), m + c.shift(), f + c.shift()), m += c.shift(), f += c.shift(), d = "C", v.push(m, f);
              break;
            case "S":
              w = m, T = f, C = h[h.length - 1], C.command === "C" && (w = m + (m - C.points[2]), T = f + (f - C.points[3])), v.push(w, T, c.shift(), c.shift()), m = c.shift(), f = c.shift(), d = "C", v.push(m, f);
              break;
            case "s":
              w = m, T = f, C = h[h.length - 1], C.command === "C" && (w = m + (m - C.points[2]), T = f + (f - C.points[3])), v.push(w, T, m + c.shift(), f + c.shift()), m += c.shift(), f += c.shift(), d = "C", v.push(m, f);
              break;
            case "Q":
              v.push(c.shift(), c.shift()), m = c.shift(), f = c.shift(), v.push(m, f);
              break;
            case "q":
              v.push(m + c.shift(), f + c.shift()), m += c.shift(), f += c.shift(), d = "Q", v.push(m, f);
              break;
            case "T":
              w = m, T = f, C = h[h.length - 1], C.command === "Q" && (w = m + (m - C.points[0]), T = f + (f - C.points[1])), m = c.shift(), f = c.shift(), d = "Q", v.push(w, T, m, f);
              break;
            case "t":
              w = m, T = f, C = h[h.length - 1], C.command === "Q" && (w = m + (m - C.points[0]), T = f + (f - C.points[1])), m += c.shift(), f += c.shift(), d = "Q", v.push(w, T, m, f);
              break;
            case "A":
              M = c.shift(), D = c.shift(), I = c.shift(), B = c.shift(), G = c.shift(), X = m, b = f, m = c.shift(), f = c.shift(), d = "A", v = this.convertEndpointToCenterParameterization(X, b, m, f, B, G, M, D, I);
              break;
            case "a":
              M = c.shift(), D = c.shift(), I = c.shift(), B = c.shift(), G = c.shift(), X = m, b = f, m += c.shift(), f += c.shift(), d = "A", v = this.convertEndpointToCenterParameterization(X, b, m, f, B, G, M, D, I);
              break;
          }
          h.push({
            command: d || g,
            points: v,
            start: {
              x,
              y: E
            },
            pathLength: this.calcLength(x, E, d || g, v)
          });
        }
        (g === "z" || g === "Z") && h.push({
          command: "z",
          points: [],
          start: void 0,
          pathLength: 0
        });
      }
      return h;
    }
    static calcLength(a, o, l, u) {
      let h, _, m, f;
      const p = $t;
      switch (l) {
        case "L":
          return p.getLineLength(a, o, u[0], u[1]);
        case "C":
          return (0, r.getCubicArcLength)([a, u[0], u[2], u[4]], [o, u[1], u[3], u[5]], 1);
        case "Q":
          return (0, r.getQuadraticArcLength)([a, u[0], u[2]], [o, u[1], u[3]], 1);
        case "A":
          h = 0;
          const y = u[4], S = u[5], P = u[4] + S;
          let g = Math.PI / 180;
          if (Math.abs(y - P) < g && (g = Math.abs(y - P)), _ = p.getPointOnEllipticalArc(u[0], u[1], u[2], u[3], y, 0), S < 0)
            for (f = y - g; f > P; f -= g)
              m = p.getPointOnEllipticalArc(u[0], u[1], u[2], u[3], f, 0), h += p.getLineLength(_.x, _.y, m.x, m.y), _ = m;
          else
            for (f = y + g; f < P; f += g)
              m = p.getPointOnEllipticalArc(u[0], u[1], u[2], u[3], f, 0), h += p.getLineLength(_.x, _.y, m.x, m.y), _ = m;
          return m = p.getPointOnEllipticalArc(u[0], u[1], u[2], u[3], P, 0), h += p.getLineLength(_.x, _.y, m.x, m.y), h;
      }
      return 0;
    }
    static convertEndpointToCenterParameterization(a, o, l, u, h, _, m, f, p) {
      const y = p * (Math.PI / 180), S = Math.cos(y) * (a - l) / 2 + Math.sin(y) * (o - u) / 2, P = -1 * Math.sin(y) * (a - l) / 2 + Math.cos(y) * (o - u) / 2, g = S * S / (m * m) + P * P / (f * f);
      g > 1 && (m *= Math.sqrt(g), f *= Math.sqrt(g));
      let c = Math.sqrt((m * m * (f * f) - m * m * (P * P) - f * f * (S * S)) / (m * m * (P * P) + f * f * (S * S)));
      h === _ && (c *= -1), isNaN(c) && (c = 0);
      const d = c * m * P / f, v = c * -f * S / m, x = (a + l) / 2 + Math.cos(y) * d - Math.sin(y) * v, E = (o + u) / 2 + Math.sin(y) * d + Math.cos(y) * v, C = function(G) {
        return Math.sqrt(G[0] * G[0] + G[1] * G[1]);
      }, w = function(G, X) {
        return (G[0] * X[0] + G[1] * X[1]) / (C(G) * C(X));
      }, T = function(G, X) {
        return (G[0] * X[1] < G[1] * X[0] ? -1 : 1) * Math.acos(w(G, X));
      }, M = T([1, 0], [(S - d) / m, (P - v) / f]), D = [(S - d) / m, (P - v) / f], I = [(-1 * S - d) / m, (-1 * P - v) / f];
      let B = T(D, I);
      return w(D, I) <= -1 && (B = Math.PI), w(D, I) >= 1 && (B = 0), _ === 0 && B > 0 && (B = B - 2 * Math.PI), _ === 1 && B < 0 && (B = B + 2 * Math.PI), [x, E, m, f, M, B, y, _];
    }
  };
  return vi.Path = n, n.prototype.className = "Path", n.prototype._attrsAffectingSize = ["data"], (0, e._registerNode)(n), t.Factory.addGetterSetter(n, "data"), vi;
}
var Po;
function fu() {
  if (Po) return _i;
  Po = 1, Object.defineProperty(_i, "__esModule", { value: !0 }), _i.Arrow = void 0;
  const t = mt(), e = Pl(), i = yt(), r = pt(), n = ys();
  let s = class extends e.Line {
    _sceneFunc(o) {
      super._sceneFunc(o);
      const l = Math.PI * 2, u = this.points();
      let h = u;
      const _ = this.tension() !== 0 && u.length > 4;
      _ && (h = this.getTensionPoints());
      const m = this.pointerLength(), f = u.length;
      let p, y;
      if (_) {
        const g = [
          h[h.length - 4],
          h[h.length - 3],
          h[h.length - 2],
          h[h.length - 1],
          u[f - 2],
          u[f - 1]
        ], c = n.Path.calcLength(h[h.length - 4], h[h.length - 3], "C", g), d = n.Path.getPointOnQuadraticBezier(Math.min(1, 1 - m / c), g[0], g[1], g[2], g[3], g[4], g[5]);
        p = u[f - 2] - d.x, y = u[f - 1] - d.y;
      } else
        p = u[f - 2] - u[f - 4], y = u[f - 1] - u[f - 3];
      const S = (Math.atan2(y, p) + l) % l, P = this.pointerWidth();
      this.pointerAtEnding() && (o.save(), o.beginPath(), o.translate(u[f - 2], u[f - 1]), o.rotate(S), o.moveTo(0, 0), o.lineTo(-m, P / 2), o.lineTo(-m, -P / 2), o.closePath(), o.restore(), this.__fillStroke(o)), this.pointerAtBeginning() && (o.save(), o.beginPath(), o.translate(u[0], u[1]), _ ? (p = (h[0] + h[2]) / 2 - u[0], y = (h[1] + h[3]) / 2 - u[1]) : (p = u[2] - u[0], y = u[3] - u[1]), o.rotate((Math.atan2(-y, -p) + l) % l), o.moveTo(0, 0), o.lineTo(-m, P / 2), o.lineTo(-m, -P / 2), o.closePath(), o.restore(), this.__fillStroke(o));
    }
    __fillStroke(o) {
      const l = this.dashEnabled();
      l && (this.attrs.dashEnabled = !1, o.setLineDash([])), o.fillStrokeShape(this), l && (this.attrs.dashEnabled = !0);
    }
    getSelfRect() {
      const o = super.getSelfRect(), l = this.pointerWidth() / 2;
      return {
        x: o.x,
        y: o.y - l,
        width: o.width,
        height: o.height + l * 2
      };
    }
  };
  return _i.Arrow = s, s.prototype.className = "Arrow", (0, r._registerNode)(s), t.Factory.addGetterSetter(s, "pointerLength", 10, (0, i.getNumberValidator)()), t.Factory.addGetterSetter(s, "pointerWidth", 10, (0, i.getNumberValidator)()), t.Factory.addGetterSetter(s, "pointerAtBeginning", !1), t.Factory.addGetterSetter(s, "pointerAtEnding", !0), _i;
}
var bi = {}, To;
function gu() {
  if (To) return bi;
  To = 1, Object.defineProperty(bi, "__esModule", { value: !0 }), bi.Circle = void 0;
  const t = mt(), e = Gt(), i = yt(), r = pt();
  let n = class extends e.Shape {
    _sceneFunc(a) {
      a.beginPath(), a.arc(0, 0, this.attrs.radius || 0, 0, Math.PI * 2, !1), a.closePath(), a.fillStrokeShape(this);
    }
    getWidth() {
      return this.radius() * 2;
    }
    getHeight() {
      return this.radius() * 2;
    }
    setWidth(a) {
      this.radius() !== a / 2 && this.radius(a / 2);
    }
    setHeight(a) {
      this.radius() !== a / 2 && this.radius(a / 2);
    }
  };
  return bi.Circle = n, n.prototype._centroid = !0, n.prototype.className = "Circle", n.prototype._attrsAffectingSize = ["radius"], (0, r._registerNode)(n), t.Factory.addGetterSetter(n, "radius", 0, (0, i.getNumberValidator)()), bi;
}
var Si = {}, Ao;
function pu() {
  if (Ao) return Si;
  Ao = 1, Object.defineProperty(Si, "__esModule", { value: !0 }), Si.Ellipse = void 0;
  const t = mt(), e = Gt(), i = yt(), r = pt();
  let n = class extends e.Shape {
    _sceneFunc(a) {
      const o = this.radiusX(), l = this.radiusY();
      a.beginPath(), a.save(), o !== l && a.scale(1, l / o), a.arc(0, 0, o, 0, Math.PI * 2, !1), a.restore(), a.closePath(), a.fillStrokeShape(this);
    }
    getWidth() {
      return this.radiusX() * 2;
    }
    getHeight() {
      return this.radiusY() * 2;
    }
    setWidth(a) {
      this.radiusX(a / 2);
    }
    setHeight(a) {
      this.radiusY(a / 2);
    }
  };
  return Si.Ellipse = n, n.prototype.className = "Ellipse", n.prototype._centroid = !0, n.prototype._attrsAffectingSize = ["radiusX", "radiusY"], (0, r._registerNode)(n), t.Factory.addComponentsGetterSetter(n, "radius", ["x", "y"]), t.Factory.addGetterSetter(n, "radiusX", 0, (0, i.getNumberValidator)()), t.Factory.addGetterSetter(n, "radiusY", 0, (0, i.getNumberValidator)()), Si;
}
var Ci = {}, Ro;
function mu() {
  if (Ro) return Ci;
  Ro = 1, Object.defineProperty(Ci, "__esModule", { value: !0 }), Ci.Image = void 0;
  const t = Ot(), e = mt(), i = Gt(), r = pt(), n = yt();
  class s extends i.Shape {
    constructor(o) {
      super(o), this._loadListener = () => {
        this._requestDraw();
      }, this.on("imageChange.konva", (l) => {
        this._removeImageLoad(l.oldVal), this._setImageLoad();
      }), this._setImageLoad();
    }
    _setImageLoad() {
      const o = this.image();
      o && o.complete || o && o.readyState === 4 || o && o.addEventListener && o.addEventListener("load", this._loadListener);
    }
    _removeImageLoad(o) {
      o && o.removeEventListener && o.removeEventListener("load", this._loadListener);
    }
    destroy() {
      return this._removeImageLoad(this.image()), super.destroy(), this;
    }
    _useBufferCanvas() {
      const o = !!this.cornerRadius(), l = this.hasShadow();
      return o && l ? !0 : super._useBufferCanvas(!0);
    }
    _sceneFunc(o) {
      const l = this.getWidth(), u = this.getHeight(), h = this.cornerRadius(), _ = this.attrs.image;
      let m;
      if (_) {
        const f = this.attrs.cropWidth, p = this.attrs.cropHeight;
        f && p ? m = [
          _,
          this.cropX(),
          this.cropY(),
          f,
          p,
          0,
          0,
          l,
          u
        ] : m = [_, 0, 0, l, u];
      }
      (this.hasFill() || this.hasStroke() || h) && (o.beginPath(), h ? t.Util.drawRoundedRectPath(o, l, u, h) : o.rect(0, 0, l, u), o.closePath(), o.fillStrokeShape(this)), _ && (h && o.clip(), o.drawImage.apply(o, m));
    }
    _hitFunc(o) {
      const l = this.width(), u = this.height(), h = this.cornerRadius();
      o.beginPath(), h ? t.Util.drawRoundedRectPath(o, l, u, h) : o.rect(0, 0, l, u), o.closePath(), o.fillStrokeShape(this);
    }
    getWidth() {
      var o, l;
      return (o = this.attrs.width) !== null && o !== void 0 ? o : (l = this.image()) === null || l === void 0 ? void 0 : l.width;
    }
    getHeight() {
      var o, l;
      return (o = this.attrs.height) !== null && o !== void 0 ? o : (l = this.image()) === null || l === void 0 ? void 0 : l.height;
    }
    static fromURL(o, l, u = null) {
      const h = t.Util.createImageElement();
      h.onload = function() {
        const _ = new s({
          image: h
        });
        l(_);
      }, h.onerror = u, h.crossOrigin = "Anonymous", h.src = o;
    }
  }
  return Ci.Image = s, s.prototype.className = "Image", (0, r._registerNode)(s), e.Factory.addGetterSetter(s, "cornerRadius", 0, (0, n.getNumberOrArrayOfNumbersValidator)(4)), e.Factory.addGetterSetter(s, "image"), e.Factory.addComponentsGetterSetter(s, "crop", ["x", "y", "width", "height"]), e.Factory.addGetterSetter(s, "cropX", 0, (0, n.getNumberValidator)()), e.Factory.addGetterSetter(s, "cropY", 0, (0, n.getNumberValidator)()), e.Factory.addGetterSetter(s, "cropWidth", 0, (0, n.getNumberValidator)()), e.Factory.addGetterSetter(s, "cropHeight", 0, (0, n.getNumberValidator)()), Ci;
}
var Ie = {}, Eo;
function _u() {
  if (Eo) return Ie;
  Eo = 1, Object.defineProperty(Ie, "__esModule", { value: !0 }), Ie.Tag = Ie.Label = void 0;
  const t = mt(), e = Gt(), i = ms(), r = yt(), n = pt(), s = [
    "fontFamily",
    "fontSize",
    "fontStyle",
    "padding",
    "lineHeight",
    "text",
    "width",
    "height",
    "pointerDirection",
    "pointerWidth",
    "pointerHeight"
  ], a = "Change.konva", o = "none", l = "up", u = "right", h = "down", _ = "left", m = s.length;
  let f = class extends i.Group {
    constructor(S) {
      super(S), this.on("add.konva", function(P) {
        this._addListeners(P.child), this._sync();
      });
    }
    getText() {
      return this.find("Text")[0];
    }
    getTag() {
      return this.find("Tag")[0];
    }
    _addListeners(S) {
      let P = this, g;
      const c = function() {
        P._sync();
      };
      for (g = 0; g < m; g++)
        S.on(s[g] + a, c);
    }
    getWidth() {
      return this.getText().width();
    }
    getHeight() {
      return this.getText().height();
    }
    _sync() {
      let S = this.getText(), P = this.getTag(), g, c, d, v, x, E, C;
      if (S && P) {
        switch (g = S.width(), c = S.height(), d = P.pointerDirection(), v = P.pointerWidth(), C = P.pointerHeight(), x = 0, E = 0, d) {
          case l:
            x = g / 2, E = -1 * C;
            break;
          case u:
            x = g + v, E = c / 2;
            break;
          case h:
            x = g / 2, E = c + C;
            break;
          case _:
            x = -1 * v, E = c / 2;
            break;
        }
        P.setAttrs({
          x: -1 * x,
          y: -1 * E,
          width: g,
          height: c
        }), S.setAttrs({
          x: -1 * x,
          y: -1 * E
        });
      }
    }
  };
  Ie.Label = f, f.prototype.className = "Label", (0, n._registerNode)(f);
  class p extends e.Shape {
    _sceneFunc(S) {
      const P = this.width(), g = this.height(), c = this.pointerDirection(), d = this.pointerWidth(), v = this.pointerHeight(), x = this.cornerRadius();
      let E = 0, C = 0, w = 0, T = 0;
      typeof x == "number" ? E = C = w = T = Math.min(x, P / 2, g / 2) : (E = Math.min(x[0] || 0, P / 2, g / 2), C = Math.min(x[1] || 0, P / 2, g / 2), T = Math.min(x[2] || 0, P / 2, g / 2), w = Math.min(x[3] || 0, P / 2, g / 2)), S.beginPath(), S.moveTo(E, 0), c === l && (S.lineTo((P - d) / 2, 0), S.lineTo(P / 2, -1 * v), S.lineTo((P + d) / 2, 0)), S.lineTo(P - C, 0), S.arc(P - C, C, C, Math.PI * 3 / 2, 0, !1), c === u && (S.lineTo(P, (g - v) / 2), S.lineTo(P + d, g / 2), S.lineTo(P, (g + v) / 2)), S.lineTo(P, g - T), S.arc(P - T, g - T, T, 0, Math.PI / 2, !1), c === h && (S.lineTo((P + d) / 2, g), S.lineTo(P / 2, g + v), S.lineTo((P - d) / 2, g)), S.lineTo(w, g), S.arc(w, g - w, w, Math.PI / 2, Math.PI, !1), c === _ && (S.lineTo(0, (g + v) / 2), S.lineTo(-1 * d, g / 2), S.lineTo(0, (g - v) / 2)), S.lineTo(0, E), S.arc(E, E, E, Math.PI, Math.PI * 3 / 2, !1), S.closePath(), S.fillStrokeShape(this);
    }
    getSelfRect() {
      let S = 0, P = 0, g = this.pointerWidth(), c = this.pointerHeight(), d = this.pointerDirection(), v = this.width(), x = this.height();
      return d === l ? (P -= c, x += c) : d === h ? x += c : d === _ ? (S -= g * 1.5, v += g) : d === u && (v += g * 1.5), {
        x: S,
        y: P,
        width: v,
        height: x
      };
    }
  }
  return Ie.Tag = p, p.prototype.className = "Tag", (0, n._registerNode)(p), t.Factory.addGetterSetter(p, "pointerDirection", o), t.Factory.addGetterSetter(p, "pointerWidth", 0, (0, r.getNumberValidator)()), t.Factory.addGetterSetter(p, "pointerHeight", 0, (0, r.getNumberValidator)()), t.Factory.addGetterSetter(p, "cornerRadius", 0, (0, r.getNumberOrArrayOfNumbersValidator)(4)), Ie;
}
var wi = {}, Mo;
function Tl() {
  if (Mo) return wi;
  Mo = 1, Object.defineProperty(wi, "__esModule", { value: !0 }), wi.Rect = void 0;
  const t = mt(), e = Gt(), i = pt(), r = Ot(), n = yt();
  let s = class extends e.Shape {
    _sceneFunc(o) {
      const l = this.cornerRadius(), u = this.width(), h = this.height();
      o.beginPath(), l ? r.Util.drawRoundedRectPath(o, u, h, l) : o.rect(0, 0, u, h), o.closePath(), o.fillStrokeShape(this);
    }
  };
  return wi.Rect = s, s.prototype.className = "Rect", (0, i._registerNode)(s), t.Factory.addGetterSetter(s, "cornerRadius", 0, (0, n.getNumberOrArrayOfNumbersValidator)(4)), wi;
}
var xi = {}, Fo;
function yu() {
  if (Fo) return xi;
  Fo = 1, Object.defineProperty(xi, "__esModule", { value: !0 }), xi.RegularPolygon = void 0;
  const t = mt(), e = Gt(), i = yt(), r = pt();
  let n = class extends e.Shape {
    _sceneFunc(a) {
      const o = this._getPoints();
      a.beginPath(), a.moveTo(o[0].x, o[0].y);
      for (let l = 1; l < o.length; l++)
        a.lineTo(o[l].x, o[l].y);
      a.closePath(), a.fillStrokeShape(this);
    }
    _getPoints() {
      const a = this.attrs.sides, o = this.attrs.radius || 0, l = [];
      for (let u = 0; u < a; u++)
        l.push({
          x: o * Math.sin(u * 2 * Math.PI / a),
          y: -1 * o * Math.cos(u * 2 * Math.PI / a)
        });
      return l;
    }
    getSelfRect() {
      const a = this._getPoints();
      let o = a[0].x, l = a[0].y, u = a[0].x, h = a[0].y;
      return a.forEach((_) => {
        o = Math.min(o, _.x), l = Math.max(l, _.x), u = Math.min(u, _.y), h = Math.max(h, _.y);
      }), {
        x: o,
        y: u,
        width: l - o,
        height: h - u
      };
    }
    getWidth() {
      return this.radius() * 2;
    }
    getHeight() {
      return this.radius() * 2;
    }
    setWidth(a) {
      this.radius(a / 2);
    }
    setHeight(a) {
      this.radius(a / 2);
    }
  };
  return xi.RegularPolygon = n, n.prototype.className = "RegularPolygon", n.prototype._centroid = !0, n.prototype._attrsAffectingSize = ["radius"], (0, r._registerNode)(n), t.Factory.addGetterSetter(n, "radius", 0, (0, i.getNumberValidator)()), t.Factory.addGetterSetter(n, "sides", 0, (0, i.getNumberValidator)()), xi;
}
var Pi = {}, ko;
function vu() {
  if (ko) return Pi;
  ko = 1, Object.defineProperty(Pi, "__esModule", { value: !0 }), Pi.Ring = void 0;
  const t = mt(), e = Gt(), i = yt(), r = pt(), n = Math.PI * 2;
  let s = class extends e.Shape {
    _sceneFunc(o) {
      o.beginPath(), o.arc(0, 0, this.innerRadius(), 0, n, !1), o.moveTo(this.outerRadius(), 0), o.arc(0, 0, this.outerRadius(), n, 0, !0), o.closePath(), o.fillStrokeShape(this);
    }
    getWidth() {
      return this.outerRadius() * 2;
    }
    getHeight() {
      return this.outerRadius() * 2;
    }
    setWidth(o) {
      this.outerRadius(o / 2);
    }
    setHeight(o) {
      this.outerRadius(o / 2);
    }
  };
  return Pi.Ring = s, s.prototype.className = "Ring", s.prototype._centroid = !0, s.prototype._attrsAffectingSize = ["innerRadius", "outerRadius"], (0, r._registerNode)(s), t.Factory.addGetterSetter(s, "innerRadius", 0, (0, i.getNumberValidator)()), t.Factory.addGetterSetter(s, "outerRadius", 0, (0, i.getNumberValidator)()), Pi;
}
var Ti = {}, Oo;
function bu() {
  if (Oo) return Ti;
  Oo = 1, Object.defineProperty(Ti, "__esModule", { value: !0 }), Ti.Sprite = void 0;
  const t = mt(), e = Gt(), i = _s(), r = yt(), n = pt();
  let s = class extends e.Shape {
    constructor(o) {
      super(o), this._updated = !0, this.anim = new i.Animation(() => {
        const l = this._updated;
        return this._updated = !1, l;
      }), this.on("animationChange.konva", function() {
        this.frameIndex(0);
      }), this.on("frameIndexChange.konva", function() {
        this._updated = !0;
      }), this.on("frameRateChange.konva", function() {
        this.anim.isRunning() && (clearInterval(this.interval), this._setInterval());
      });
    }
    _sceneFunc(o) {
      const l = this.animation(), u = this.frameIndex(), h = u * 4, _ = this.animations()[l], m = this.frameOffsets(), f = _[h + 0], p = _[h + 1], y = _[h + 2], S = _[h + 3], P = this.image();
      if ((this.hasFill() || this.hasStroke()) && (o.beginPath(), o.rect(0, 0, y, S), o.closePath(), o.fillStrokeShape(this)), P)
        if (m) {
          const g = m[l], c = u * 2;
          o.drawImage(P, f, p, y, S, g[c + 0], g[c + 1], y, S);
        } else
          o.drawImage(P, f, p, y, S, 0, 0, y, S);
    }
    _hitFunc(o) {
      const l = this.animation(), u = this.frameIndex(), h = u * 4, _ = this.animations()[l], m = this.frameOffsets(), f = _[h + 2], p = _[h + 3];
      if (o.beginPath(), m) {
        const y = m[l], S = u * 2;
        o.rect(y[S + 0], y[S + 1], f, p);
      } else
        o.rect(0, 0, f, p);
      o.closePath(), o.fillShape(this);
    }
    _useBufferCanvas() {
      return super._useBufferCanvas(!0);
    }
    _setInterval() {
      const o = this;
      this.interval = setInterval(function() {
        o._updateIndex();
      }, 1e3 / this.frameRate());
    }
    start() {
      if (this.isRunning())
        return;
      const o = this.getLayer();
      this.anim.setLayers(o), this._setInterval(), this.anim.start();
    }
    stop() {
      this.anim.stop(), clearInterval(this.interval);
    }
    isRunning() {
      return this.anim.isRunning();
    }
    _updateIndex() {
      const o = this.frameIndex(), l = this.animation(), u = this.animations(), h = u[l], _ = h.length / 4;
      o < _ - 1 ? this.frameIndex(o + 1) : this.frameIndex(0);
    }
  };
  return Ti.Sprite = s, s.prototype.className = "Sprite", (0, n._registerNode)(s), t.Factory.addGetterSetter(s, "animation"), t.Factory.addGetterSetter(s, "animations"), t.Factory.addGetterSetter(s, "frameOffsets"), t.Factory.addGetterSetter(s, "image"), t.Factory.addGetterSetter(s, "frameIndex", 0, (0, r.getNumberValidator)()), t.Factory.addGetterSetter(s, "frameRate", 17, (0, r.getNumberValidator)()), t.Factory.backCompat(s, {
    index: "frameIndex",
    getIndex: "getFrameIndex",
    setIndex: "setFrameIndex"
  }), Ti;
}
var Ai = {}, No;
function Su() {
  if (No) return Ai;
  No = 1, Object.defineProperty(Ai, "__esModule", { value: !0 }), Ai.Star = void 0;
  const t = mt(), e = Gt(), i = yt(), r = pt();
  let n = class extends e.Shape {
    _sceneFunc(a) {
      const o = this.innerRadius(), l = this.outerRadius(), u = this.numPoints();
      a.beginPath(), a.moveTo(0, 0 - l);
      for (let h = 1; h < u * 2; h++) {
        const _ = h % 2 === 0 ? l : o, m = _ * Math.sin(h * Math.PI / u), f = -1 * _ * Math.cos(h * Math.PI / u);
        a.lineTo(m, f);
      }
      a.closePath(), a.fillStrokeShape(this);
    }
    getWidth() {
      return this.outerRadius() * 2;
    }
    getHeight() {
      return this.outerRadius() * 2;
    }
    setWidth(a) {
      this.outerRadius(a / 2);
    }
    setHeight(a) {
      this.outerRadius(a / 2);
    }
  };
  return Ai.Star = n, n.prototype.className = "Star", n.prototype._centroid = !0, n.prototype._attrsAffectingSize = ["innerRadius", "outerRadius"], (0, r._registerNode)(n), t.Factory.addGetterSetter(n, "numPoints", 5, (0, i.getNumberValidator)()), t.Factory.addGetterSetter(n, "innerRadius", 0, (0, i.getNumberValidator)()), t.Factory.addGetterSetter(n, "outerRadius", 0, (0, i.getNumberValidator)()), Ai;
}
var Je = {}, Lo;
function Al() {
  if (Lo) return Je;
  Lo = 1, Object.defineProperty(Je, "__esModule", { value: !0 }), Je.Text = void 0, Je.stringToArray = a;
  const t = Ot(), e = mt(), i = Gt(), r = pt(), n = yt(), s = pt();
  function a(W) {
    return [...W].reduce((U, Q, rt, K) => {
      if (new RegExp("\\p{Emoji}", "u").test(Q)) {
        const O = K[rt + 1];
        O && new RegExp("\\p{Emoji_Modifier}|\\u200D", "u").test(O) ? (U.push(Q + O), K[rt + 1] = "") : U.push(Q);
      } else new RegExp("\\p{Regional_Indicator}{2}", "u").test(Q + (K[rt + 1] || "")) ? U.push(Q + K[rt + 1]) : rt > 0 && new RegExp("\\p{Mn}|\\p{Me}|\\p{Mc}", "u").test(Q) ? U[U.length - 1] += Q : Q && U.push(Q);
      return U;
    }, []);
  }
  const o = "auto", l = "center", u = "inherit", h = "justify", _ = "Change.konva", m = "2d", f = "-", p = "left", y = "text", S = "Text", P = "top", g = "bottom", c = "middle", d = "normal", v = "px ", x = " ", E = "right", C = "rtl", w = "word", T = "char", M = "none", D = "…", I = [
    "direction",
    "fontFamily",
    "fontSize",
    "fontStyle",
    "fontVariant",
    "padding",
    "align",
    "verticalAlign",
    "lineHeight",
    "text",
    "width",
    "height",
    "wrap",
    "ellipsis",
    "letterSpacing"
  ], B = I.length;
  function G(W) {
    return W.split(",").map((U) => {
      U = U.trim();
      const Q = U.indexOf(" ") >= 0, rt = U.indexOf('"') >= 0 || U.indexOf("'") >= 0;
      return Q && !rt && (U = `"${U}"`), U;
    }).join(", ");
  }
  let X;
  function b() {
    return X || (X = t.Util.createCanvasElement().getContext(m), X);
  }
  function A(W) {
    W.fillText(this._partialText, this._partialTextX, this._partialTextY);
  }
  function k(W) {
    W.setAttr("miterLimit", 2), W.strokeText(this._partialText, this._partialTextX, this._partialTextY);
  }
  function F(W) {
    return W = W || {}, !W.fillLinearGradientColorStops && !W.fillRadialGradientColorStops && !W.fillPatternImage && (W.fill = W.fill || "black"), W;
  }
  let L = class extends i.Shape {
    constructor(U) {
      super(F(U)), this._partialTextX = 0, this._partialTextY = 0;
      for (let Q = 0; Q < B; Q++)
        this.on(I[Q] + _, this._setTextData);
      this._setTextData();
    }
    _sceneFunc(U) {
      const Q = this.textArr, rt = Q.length;
      if (!this.text())
        return;
      let K = this.padding(), O = this.fontSize(), j = this.lineHeight() * O, Z = this.verticalAlign(), V = this.direction(), lt = 0, R = this.align(), N = this.getWidth(), H = this.letterSpacing(), z = this.fill(), $ = this.textDecoration(), Y = $.indexOf("underline") !== -1, q = $.indexOf("line-through") !== -1, it;
      V = V === u ? U.direction : V;
      let tt = j / 2, J = c;
      if (r.Konva._fixTextRendering) {
        const ot = this.measureSize("M");
        J = "alphabetic", tt = (ot.fontBoundingBoxAscent - ot.fontBoundingBoxDescent) / 2 + j / 2;
      }
      for (V === C && U.setAttr("direction", V), U.setAttr("font", this._getContextFont()), U.setAttr("textBaseline", J), U.setAttr("textAlign", p), Z === c ? lt = (this.getHeight() - rt * j - K * 2) / 2 : Z === g && (lt = this.getHeight() - rt * j - K * 2), U.translate(K, lt + K), it = 0; it < rt; it++) {
        let ot = 0, st = 0;
        const at = Q[it], ht = at.text, ct = at.width, _t = at.lastInParagraph;
        if (U.save(), R === E ? ot += N - ct - K * 2 : R === l && (ot += (N - ct - K * 2) / 2), Y) {
          U.save(), U.beginPath();
          const gt = r.Konva._fixTextRendering ? Math.round(O / 4) : Math.round(O / 2), St = ot, vt = tt + st + gt;
          U.moveTo(St, vt);
          const Mt = R === h && !_t ? N - K * 2 : ct;
          U.lineTo(St + Math.round(Mt), vt), U.lineWidth = O / 15;
          const Bt = this._getLinearGradient();
          U.strokeStyle = Bt || z, U.stroke(), U.restore();
        }
        if (q) {
          U.save(), U.beginPath();
          const gt = r.Konva._fixTextRendering ? -Math.round(O / 4) : 0;
          U.moveTo(ot, tt + st + gt);
          const St = R === h && !_t ? N - K * 2 : ct;
          U.lineTo(ot + Math.round(St), tt + st + gt), U.lineWidth = O / 15;
          const vt = this._getLinearGradient();
          U.strokeStyle = vt || z, U.stroke(), U.restore();
        }
        if (V !== C && (H !== 0 || R === h)) {
          const gt = ht.split(" ").length - 1, St = a(ht);
          for (let vt = 0; vt < St.length; vt++) {
            const Mt = St[vt];
            Mt === " " && !_t && R === h && (ot += (N - K * 2 - ct) / gt), this._partialTextX = ot, this._partialTextY = tt + st, this._partialText = Mt, U.fillStrokeShape(this), ot += this.measureSize(Mt).width + H;
          }
        } else
          H !== 0 && U.setAttr("letterSpacing", `${H}px`), this._partialTextX = ot, this._partialTextY = tt + st, this._partialText = ht, U.fillStrokeShape(this);
        U.restore(), rt > 1 && (tt += j);
      }
    }
    _hitFunc(U) {
      const Q = this.getWidth(), rt = this.getHeight();
      U.beginPath(), U.rect(0, 0, Q, rt), U.closePath(), U.fillStrokeShape(this);
    }
    setText(U) {
      const Q = t.Util._isString(U) ? U : U == null ? "" : U + "";
      return this._setAttr(y, Q), this;
    }
    getWidth() {
      return this.attrs.width === o || this.attrs.width === void 0 ? this.getTextWidth() + this.padding() * 2 : this.attrs.width;
    }
    getHeight() {
      return this.attrs.height === o || this.attrs.height === void 0 ? this.fontSize() * this.textArr.length * this.lineHeight() + this.padding() * 2 : this.attrs.height;
    }
    getTextWidth() {
      return this.textWidth;
    }
    getTextHeight() {
      return t.Util.warn("text.getTextHeight() method is deprecated. Use text.height() - for full height and text.fontSize() - for one line height."), this.textHeight;
    }
    measureSize(U) {
      var Q, rt, K, O, j, Z, V, lt, R, N, H;
      let z = b(), $ = this.fontSize(), Y;
      z.save(), z.font = this._getContextFont(), Y = z.measureText(U), z.restore();
      const q = $ / 100;
      return {
        actualBoundingBoxAscent: (Q = Y.actualBoundingBoxAscent) !== null && Q !== void 0 ? Q : 71.58203125 * q,
        actualBoundingBoxDescent: (rt = Y.actualBoundingBoxDescent) !== null && rt !== void 0 ? rt : 0,
        actualBoundingBoxLeft: (K = Y.actualBoundingBoxLeft) !== null && K !== void 0 ? K : -7.421875 * q,
        actualBoundingBoxRight: (O = Y.actualBoundingBoxRight) !== null && O !== void 0 ? O : 75.732421875 * q,
        alphabeticBaseline: (j = Y.alphabeticBaseline) !== null && j !== void 0 ? j : 0,
        emHeightAscent: (Z = Y.emHeightAscent) !== null && Z !== void 0 ? Z : 100 * q,
        emHeightDescent: (V = Y.emHeightDescent) !== null && V !== void 0 ? V : -20 * q,
        fontBoundingBoxAscent: (lt = Y.fontBoundingBoxAscent) !== null && lt !== void 0 ? lt : 91 * q,
        fontBoundingBoxDescent: (R = Y.fontBoundingBoxDescent) !== null && R !== void 0 ? R : 21 * q,
        hangingBaseline: (N = Y.hangingBaseline) !== null && N !== void 0 ? N : 72.80000305175781 * q,
        ideographicBaseline: (H = Y.ideographicBaseline) !== null && H !== void 0 ? H : -21 * q,
        width: Y.width,
        height: $
      };
    }
    _getContextFont() {
      return this.fontStyle() + x + this.fontVariant() + x + (this.fontSize() + v) + G(this.fontFamily());
    }
    _addTextLine(U) {
      this.align() === h && (U = U.trim());
      const rt = this._getTextWidth(U);
      return this.textArr.push({
        text: U,
        width: rt,
        lastInParagraph: !1
      });
    }
    _getTextWidth(U) {
      const Q = this.letterSpacing(), rt = U.length;
      return b().measureText(U).width + Q * rt;
    }
    _setTextData() {
      let U = this.text().split(`
`), Q = +this.fontSize(), rt = 0, K = this.lineHeight() * Q, O = this.attrs.width, j = this.attrs.height, Z = O !== o && O !== void 0, V = j !== o && j !== void 0, lt = this.padding(), R = O - lt * 2, N = j - lt * 2, H = 0, z = this.wrap(), $ = z !== M, Y = z !== T && $, q = this.ellipsis();
      this.textArr = [], b().font = this._getContextFont();
      const it = q ? this._getTextWidth(D) : 0;
      for (let tt = 0, J = U.length; tt < J; ++tt) {
        let ot = U[tt], st = this._getTextWidth(ot);
        if (Z && st > R)
          for (; ot.length > 0; ) {
            let at = 0, ht = a(ot).length, ct = "", _t = 0;
            for (; at < ht; ) {
              const gt = at + ht >>> 1, St = a(ot), vt = St.slice(0, gt + 1).join(""), Mt = this._getTextWidth(vt);
              (q && V && H + K > N ? Mt + it : Mt) <= R ? (at = gt + 1, ct = vt, _t = Mt) : ht = gt;
            }
            if (ct) {
              if (Y) {
                const vt = a(ot), Mt = a(ct), Bt = vt[Mt.length], Pe = Bt === x || Bt === f;
                let Le;
                if (Pe && _t <= R)
                  Le = Mt.length;
                else {
                  const Wt = Mt.lastIndexOf(x), Zt = Mt.lastIndexOf(f);
                  Le = Math.max(Wt, Zt) + 1;
                }
                Le > 0 && (at = Le, ct = vt.slice(0, at).join(""), _t = this._getTextWidth(ct));
              }
              if (ct = ct.trimRight(), this._addTextLine(ct), rt = Math.max(rt, _t), H += K, this._shouldHandleEllipsis(H)) {
                this._tryToAddEllipsisToLastLine();
                break;
              }
              if (ot = a(ot).slice(at).join("").trimLeft(), ot.length > 0 && (st = this._getTextWidth(ot), st <= R)) {
                this._addTextLine(ot), H += K, rt = Math.max(rt, st);
                break;
              }
            } else
              break;
          }
        else
          this._addTextLine(ot), H += K, rt = Math.max(rt, st), this._shouldHandleEllipsis(H) && tt < J - 1 && this._tryToAddEllipsisToLastLine();
        if (this.textArr[this.textArr.length - 1] && (this.textArr[this.textArr.length - 1].lastInParagraph = !0), V && H + K > N)
          break;
      }
      this.textHeight = Q, this.textWidth = rt;
    }
    _shouldHandleEllipsis(U) {
      const Q = +this.fontSize(), rt = this.lineHeight() * Q, K = this.attrs.height, O = K !== o && K !== void 0, j = this.padding(), Z = K - j * 2;
      return !(this.wrap() !== M) || O && U + rt > Z;
    }
    _tryToAddEllipsisToLastLine() {
      const U = this.attrs.width, Q = U !== o && U !== void 0, rt = this.padding(), K = U - rt * 2, O = this.ellipsis(), j = this.textArr[this.textArr.length - 1];
      !j || !O || (Q && (this._getTextWidth(j.text + D) < K || (j.text = j.text.slice(0, j.text.length - 3))), this.textArr.splice(this.textArr.length - 1, 1), this._addTextLine(j.text + D));
    }
    getStrokeScaleEnabled() {
      return !0;
    }
    _useBufferCanvas() {
      const U = this.textDecoration().indexOf("underline") !== -1 || this.textDecoration().indexOf("line-through") !== -1, Q = this.hasShadow();
      return U && Q ? !0 : super._useBufferCanvas();
    }
  };
  return Je.Text = L, L.prototype._fillFunc = A, L.prototype._strokeFunc = k, L.prototype.className = S, L.prototype._attrsAffectingSize = [
    "text",
    "fontSize",
    "padding",
    "wrap",
    "lineHeight",
    "letterSpacing"
  ], (0, s._registerNode)(L), e.Factory.overWriteSetter(L, "width", (0, n.getNumberOrAutoValidator)()), e.Factory.overWriteSetter(L, "height", (0, n.getNumberOrAutoValidator)()), e.Factory.addGetterSetter(L, "direction", u), e.Factory.addGetterSetter(L, "fontFamily", "Arial"), e.Factory.addGetterSetter(L, "fontSize", 12, (0, n.getNumberValidator)()), e.Factory.addGetterSetter(L, "fontStyle", d), e.Factory.addGetterSetter(L, "fontVariant", d), e.Factory.addGetterSetter(L, "padding", 0, (0, n.getNumberValidator)()), e.Factory.addGetterSetter(L, "align", p), e.Factory.addGetterSetter(L, "verticalAlign", P), e.Factory.addGetterSetter(L, "lineHeight", 1, (0, n.getNumberValidator)()), e.Factory.addGetterSetter(L, "wrap", w), e.Factory.addGetterSetter(L, "ellipsis", !1, (0, n.getBooleanValidator)()), e.Factory.addGetterSetter(L, "letterSpacing", 0, (0, n.getNumberValidator)()), e.Factory.addGetterSetter(L, "text", "", (0, n.getStringValidator)()), e.Factory.addGetterSetter(L, "textDecoration", ""), Je;
}
var Ri = {}, Do;
function Cu() {
  if (Do) return Ri;
  Do = 1, Object.defineProperty(Ri, "__esModule", { value: !0 }), Ri.TextPath = void 0;
  const t = Ot(), e = mt(), i = Gt(), r = ys(), n = Al(), s = yt(), a = pt(), o = "", l = "normal";
  function u(m) {
    m.fillText(this.partialText, 0, 0);
  }
  function h(m) {
    m.strokeText(this.partialText, 0, 0);
  }
  let _ = class extends i.Shape {
    constructor(f) {
      super(f), this.dummyCanvas = t.Util.createCanvasElement(), this.dataArray = [], this._readDataAttribute(), this.on("dataChange.konva", function() {
        this._readDataAttribute(), this._setTextData();
      }), this.on("textChange.konva alignChange.konva letterSpacingChange.konva kerningFuncChange.konva fontSizeChange.konva fontFamilyChange.konva", this._setTextData), this._setTextData();
    }
    _getTextPathLength() {
      return r.Path.getPathLength(this.dataArray);
    }
    _getPointAtLength(f) {
      if (!this.attrs.data)
        return null;
      const p = this.pathLength;
      return f - 1 > p ? null : r.Path.getPointAtLengthOfDataArray(f, this.dataArray);
    }
    _readDataAttribute() {
      this.dataArray = r.Path.parsePathData(this.attrs.data), this.pathLength = this._getTextPathLength();
    }
    _sceneFunc(f) {
      f.setAttr("font", this._getContextFont()), f.setAttr("textBaseline", this.textBaseline()), f.setAttr("textAlign", "left"), f.save();
      const p = this.textDecoration(), y = this.fill(), S = this.fontSize(), P = this.glyphInfo;
      p === "underline" && f.beginPath();
      for (let g = 0; g < P.length; g++) {
        f.save();
        const c = P[g].p0;
        f.translate(c.x, c.y), f.rotate(P[g].rotation), this.partialText = P[g].text, f.fillStrokeShape(this), p === "underline" && (g === 0 && f.moveTo(0, S / 2 + 1), f.lineTo(S, S / 2 + 1)), f.restore();
      }
      p === "underline" && (f.strokeStyle = y, f.lineWidth = S / 20, f.stroke()), f.restore();
    }
    _hitFunc(f) {
      f.beginPath();
      const p = this.glyphInfo;
      if (p.length >= 1) {
        const y = p[0].p0;
        f.moveTo(y.x, y.y);
      }
      for (let y = 0; y < p.length; y++) {
        const S = p[y].p1;
        f.lineTo(S.x, S.y);
      }
      f.setAttr("lineWidth", this.fontSize()), f.setAttr("strokeStyle", this.colorKey), f.stroke();
    }
    getTextWidth() {
      return this.textWidth;
    }
    getTextHeight() {
      return t.Util.warn("text.getTextHeight() method is deprecated. Use text.height() - for full height and text.fontSize() - for one line height."), this.textHeight;
    }
    setText(f) {
      return n.Text.prototype.setText.call(this, f);
    }
    _getContextFont() {
      return n.Text.prototype._getContextFont.call(this);
    }
    _getTextSize(f) {
      const y = this.dummyCanvas.getContext("2d");
      y.save(), y.font = this._getContextFont();
      const S = y.measureText(f);
      return y.restore(), {
        width: S.width,
        height: parseInt(`${this.fontSize()}`, 10)
      };
    }
    _setTextData() {
      const { width: f, height: p } = this._getTextSize(this.attrs.text);
      if (this.textWidth = f, this.textHeight = p, this.glyphInfo = [], !this.attrs.data)
        return null;
      const y = this.letterSpacing(), S = this.align(), P = this.kerningFunc(), g = Math.max(this.textWidth + ((this.attrs.text || "").length - 1) * y, 0);
      let c = 0;
      S === "center" && (c = Math.max(0, this.pathLength / 2 - g / 2)), S === "right" && (c = Math.max(0, this.pathLength - g));
      const d = (0, n.stringToArray)(this.text());
      let v = c;
      for (let x = 0; x < d.length; x++) {
        const E = this._getPointAtLength(v);
        if (!E)
          return;
        let C = this._getTextSize(d[x]).width + y;
        if (d[x] === " " && S === "justify") {
          const B = this.text().split(" ").length - 1;
          C += (this.pathLength - g) / B;
        }
        const w = this._getPointAtLength(v + C);
        if (!w)
          return;
        const T = r.Path.getLineLength(E.x, E.y, w.x, w.y);
        let M = 0;
        if (P)
          try {
            M = P(d[x - 1], d[x]) * this.fontSize();
          } catch {
            M = 0;
          }
        E.x += M, w.x += M, this.textWidth += M;
        const D = r.Path.getPointOnLine(M + T / 2, E.x, E.y, w.x, w.y), I = Math.atan2(w.y - E.y, w.x - E.x);
        this.glyphInfo.push({
          transposeX: D.x,
          transposeY: D.y,
          text: d[x],
          rotation: I,
          p0: E,
          p1: w
        }), v += C;
      }
    }
    getSelfRect() {
      if (!this.glyphInfo.length)
        return {
          x: 0,
          y: 0,
          width: 0,
          height: 0
        };
      const f = [];
      this.glyphInfo.forEach(function(v) {
        f.push(v.p0.x), f.push(v.p0.y), f.push(v.p1.x), f.push(v.p1.y);
      });
      let p = f[0] || 0, y = f[0] || 0, S = f[1] || 0, P = f[1] || 0, g, c;
      for (let v = 0; v < f.length / 2; v++)
        g = f[v * 2], c = f[v * 2 + 1], p = Math.min(p, g), y = Math.max(y, g), S = Math.min(S, c), P = Math.max(P, c);
      const d = this.fontSize();
      return {
        x: p - d / 2,
        y: S - d / 2,
        width: y - p + d,
        height: P - S + d
      };
    }
    destroy() {
      return t.Util.releaseCanvas(this.dummyCanvas), super.destroy();
    }
  };
  return Ri.TextPath = _, _.prototype._fillFunc = u, _.prototype._strokeFunc = h, _.prototype._fillFuncHit = u, _.prototype._strokeFuncHit = h, _.prototype.className = "TextPath", _.prototype._attrsAffectingSize = ["text", "fontSize", "data"], (0, a._registerNode)(_), e.Factory.addGetterSetter(_, "data"), e.Factory.addGetterSetter(_, "fontFamily", "Arial"), e.Factory.addGetterSetter(_, "fontSize", 12, (0, s.getNumberValidator)()), e.Factory.addGetterSetter(_, "fontStyle", l), e.Factory.addGetterSetter(_, "align", "left"), e.Factory.addGetterSetter(_, "letterSpacing", 0, (0, s.getNumberValidator)()), e.Factory.addGetterSetter(_, "textBaseline", "middle"), e.Factory.addGetterSetter(_, "fontVariant", l), e.Factory.addGetterSetter(_, "text", o), e.Factory.addGetterSetter(_, "textDecoration", ""), e.Factory.addGetterSetter(_, "kerningFunc", void 0), Ri;
}
var Ei = {}, Go;
function wu() {
  if (Go) return Ei;
  Go = 1, Object.defineProperty(Ei, "__esModule", { value: !0 }), Ei.Transformer = void 0;
  const t = Ot(), e = mt(), i = Lt(), r = Gt(), n = Tl(), s = ms(), a = pt(), o = yt(), l = pt(), u = "tr-konva", h = [
    "resizeEnabledChange",
    "rotateAnchorOffsetChange",
    "rotateEnabledChange",
    "enabledAnchorsChange",
    "anchorSizeChange",
    "borderEnabledChange",
    "borderStrokeChange",
    "borderStrokeWidthChange",
    "borderDashChange",
    "anchorStrokeChange",
    "anchorStrokeWidthChange",
    "anchorFillChange",
    "anchorCornerRadiusChange",
    "ignoreStrokeChange",
    "anchorStyleFuncChange"
  ].map((C) => C + `.${u}`).join(" "), _ = "nodesRect", m = [
    "widthChange",
    "heightChange",
    "scaleXChange",
    "scaleYChange",
    "skewXChange",
    "skewYChange",
    "rotationChange",
    "offsetXChange",
    "offsetYChange",
    "transformsEnabledChange",
    "strokeWidthChange"
  ], f = {
    "top-left": -45,
    "top-center": 0,
    "top-right": 45,
    "middle-right": -90,
    "middle-left": 90,
    "bottom-left": -135,
    "bottom-center": 180,
    "bottom-right": 135
  }, p = "ontouchstart" in a.Konva._global;
  function y(C, w, T) {
    if (C === "rotater")
      return T;
    w += t.Util.degToRad(f[C] || 0);
    const M = (t.Util.radToDeg(w) % 360 + 360) % 360;
    return t.Util._inRange(M, 315 + 22.5, 360) || t.Util._inRange(M, 0, 22.5) ? "ns-resize" : t.Util._inRange(M, 45 - 22.5, 45 + 22.5) ? "nesw-resize" : t.Util._inRange(M, 90 - 22.5, 90 + 22.5) ? "ew-resize" : t.Util._inRange(M, 135 - 22.5, 135 + 22.5) ? "nwse-resize" : t.Util._inRange(M, 180 - 22.5, 180 + 22.5) ? "ns-resize" : t.Util._inRange(M, 225 - 22.5, 225 + 22.5) ? "nesw-resize" : t.Util._inRange(M, 270 - 22.5, 270 + 22.5) ? "ew-resize" : t.Util._inRange(M, 315 - 22.5, 315 + 22.5) ? "nwse-resize" : (t.Util.error("Transformer has unknown angle for cursor detection: " + M), "pointer");
  }
  const S = [
    "top-left",
    "top-center",
    "top-right",
    "middle-right",
    "middle-left",
    "bottom-left",
    "bottom-center",
    "bottom-right"
  ];
  function P(C) {
    return {
      x: C.x + C.width / 2 * Math.cos(C.rotation) + C.height / 2 * Math.sin(-C.rotation),
      y: C.y + C.height / 2 * Math.cos(C.rotation) + C.width / 2 * Math.sin(C.rotation)
    };
  }
  function g(C, w, T) {
    const M = T.x + (C.x - T.x) * Math.cos(w) - (C.y - T.y) * Math.sin(w), D = T.y + (C.x - T.x) * Math.sin(w) + (C.y - T.y) * Math.cos(w);
    return {
      ...C,
      rotation: C.rotation + w,
      x: M,
      y: D
    };
  }
  function c(C, w) {
    const T = P(C);
    return g(C, w, T);
  }
  function d(C, w, T) {
    let M = w;
    for (let D = 0; D < C.length; D++) {
      const I = a.Konva.getAngle(C[D]), B = Math.abs(I - w) % (Math.PI * 2);
      Math.min(B, Math.PI * 2 - B) < T && (M = I);
    }
    return M;
  }
  let v = 0, x = class extends s.Group {
    constructor(w) {
      super(w), this._movingAnchorName = null, this._transforming = !1, this._createElements(), this._handleMouseMove = this._handleMouseMove.bind(this), this._handleMouseUp = this._handleMouseUp.bind(this), this.update = this.update.bind(this), this.on(h, this.update), this.getNode() && this.update();
    }
    attachTo(w) {
      return this.setNode(w), this;
    }
    setNode(w) {
      return t.Util.warn("tr.setNode(shape), tr.node(shape) and tr.attachTo(shape) methods are deprecated. Please use tr.nodes(nodesArray) instead."), this.setNodes([w]);
    }
    getNode() {
      return this._nodes && this._nodes[0];
    }
    _getEventNamespace() {
      return u + this._id;
    }
    setNodes(w = []) {
      this._nodes && this._nodes.length && this.detach();
      const T = w.filter((D) => D.isAncestorOf(this) ? (t.Util.error("Konva.Transformer cannot be an a child of the node you are trying to attach"), !1) : !0);
      return this._nodes = w = T, w.length === 1 && this.useSingleNodeRotation() ? this.rotation(w[0].getAbsoluteRotation()) : this.rotation(0), this._nodes.forEach((D) => {
        const I = () => {
          this.nodes().length === 1 && this.useSingleNodeRotation() && this.rotation(this.nodes()[0].getAbsoluteRotation()), this._resetTransformCache(), !this._transforming && !this.isDragging() && this.update();
        };
        if (D._attrsAffectingSize.length) {
          const B = D._attrsAffectingSize.map((G) => G + "Change." + this._getEventNamespace()).join(" ");
          D.on(B, I);
        }
        D.on(m.map((B) => B + `.${this._getEventNamespace()}`).join(" "), I), D.on(`absoluteTransformChange.${this._getEventNamespace()}`, I), this._proxyDrag(D);
      }), this._resetTransformCache(), !!this.findOne(".top-left") && this.update(), this;
    }
    _proxyDrag(w) {
      let T;
      w.on(`dragstart.${this._getEventNamespace()}`, (M) => {
        T = w.getAbsolutePosition(), !this.isDragging() && w !== this.findOne(".back") && this.startDrag(M, !1);
      }), w.on(`dragmove.${this._getEventNamespace()}`, (M) => {
        if (!T)
          return;
        const D = w.getAbsolutePosition(), I = D.x - T.x, B = D.y - T.y;
        this.nodes().forEach((G) => {
          if (G === w || G.isDragging())
            return;
          const X = G.getAbsolutePosition();
          G.setAbsolutePosition({
            x: X.x + I,
            y: X.y + B
          }), G.startDrag(M);
        }), T = null;
      });
    }
    getNodes() {
      return this._nodes || [];
    }
    getActiveAnchor() {
      return this._movingAnchorName;
    }
    detach() {
      this._nodes && this._nodes.forEach((w) => {
        w.off("." + this._getEventNamespace());
      }), this._nodes = [], this._resetTransformCache();
    }
    _resetTransformCache() {
      this._clearCache(_), this._clearCache("transform"), this._clearSelfAndDescendantCache("absoluteTransform");
    }
    _getNodeRect() {
      return this._getCache(_, this.__getNodeRect);
    }
    __getNodeShape(w, T = this.rotation(), M) {
      const D = w.getClientRect({
        skipTransform: !0,
        skipShadow: !0,
        skipStroke: this.ignoreStroke()
      }), I = w.getAbsoluteScale(M), B = w.getAbsolutePosition(M), G = D.x * I.x - w.offsetX() * I.x, X = D.y * I.y - w.offsetY() * I.y, b = (a.Konva.getAngle(w.getAbsoluteRotation()) + Math.PI * 2) % (Math.PI * 2), A = {
        x: B.x + G * Math.cos(b) + X * Math.sin(-b),
        y: B.y + X * Math.cos(b) + G * Math.sin(b),
        width: D.width * I.x,
        height: D.height * I.y,
        rotation: b
      };
      return g(A, -a.Konva.getAngle(T), {
        x: 0,
        y: 0
      });
    }
    __getNodeRect() {
      if (!this.getNode())
        return {
          x: -1e8,
          y: -1e8,
          width: 0,
          height: 0,
          rotation: 0
        };
      const T = [];
      this.nodes().map((b) => {
        const A = b.getClientRect({
          skipTransform: !0,
          skipShadow: !0,
          skipStroke: this.ignoreStroke()
        }), k = [
          { x: A.x, y: A.y },
          { x: A.x + A.width, y: A.y },
          { x: A.x + A.width, y: A.y + A.height },
          { x: A.x, y: A.y + A.height }
        ], F = b.getAbsoluteTransform();
        k.forEach(function(L) {
          const W = F.point(L);
          T.push(W);
        });
      });
      const M = new t.Transform();
      M.rotate(-a.Konva.getAngle(this.rotation()));
      let D = 1 / 0, I = 1 / 0, B = -1 / 0, G = -1 / 0;
      T.forEach(function(b) {
        const A = M.point(b);
        D === void 0 && (D = B = A.x, I = G = A.y), D = Math.min(D, A.x), I = Math.min(I, A.y), B = Math.max(B, A.x), G = Math.max(G, A.y);
      }), M.invert();
      const X = M.point({ x: D, y: I });
      return {
        x: X.x,
        y: X.y,
        width: B - D,
        height: G - I,
        rotation: a.Konva.getAngle(this.rotation())
      };
    }
    getX() {
      return this._getNodeRect().x;
    }
    getY() {
      return this._getNodeRect().y;
    }
    getWidth() {
      return this._getNodeRect().width;
    }
    getHeight() {
      return this._getNodeRect().height;
    }
    _createElements() {
      this._createBack(), S.forEach((w) => {
        this._createAnchor(w);
      }), this._createAnchor("rotater");
    }
    _createAnchor(w) {
      const T = new n.Rect({
        stroke: "rgb(0, 161, 255)",
        fill: "white",
        strokeWidth: 1,
        name: w + " _anchor",
        dragDistance: 0,
        draggable: !0,
        hitStrokeWidth: p ? 10 : "auto"
      }), M = this;
      T.on("mousedown touchstart", function(D) {
        M._handleMouseDown(D);
      }), T.on("dragstart", (D) => {
        T.stopDrag(), D.cancelBubble = !0;
      }), T.on("dragend", (D) => {
        D.cancelBubble = !0;
      }), T.on("mouseenter", () => {
        const D = a.Konva.getAngle(this.rotation()), I = this.rotateAnchorCursor(), B = y(w, D, I);
        T.getStage().content && (T.getStage().content.style.cursor = B), this._cursorChange = !0;
      }), T.on("mouseout", () => {
        T.getStage().content && (T.getStage().content.style.cursor = ""), this._cursorChange = !1;
      }), this.add(T);
    }
    _createBack() {
      const w = new r.Shape({
        name: "back",
        width: 0,
        height: 0,
        draggable: !0,
        sceneFunc(T, M) {
          const D = M.getParent(), I = D.padding();
          T.beginPath(), T.rect(-I, -I, M.width() + I * 2, M.height() + I * 2), T.moveTo(M.width() / 2, -I), D.rotateEnabled() && D.rotateLineVisible() && T.lineTo(M.width() / 2, -D.rotateAnchorOffset() * t.Util._sign(M.height()) - I), T.fillStrokeShape(M);
        },
        hitFunc: (T, M) => {
          if (!this.shouldOverdrawWholeArea())
            return;
          const D = this.padding();
          T.beginPath(), T.rect(-D, -D, M.width() + D * 2, M.height() + D * 2), T.fillStrokeShape(M);
        }
      });
      this.add(w), this._proxyDrag(w), w.on("dragstart", (T) => {
        T.cancelBubble = !0;
      }), w.on("dragmove", (T) => {
        T.cancelBubble = !0;
      }), w.on("dragend", (T) => {
        T.cancelBubble = !0;
      }), this.on("dragmove", (T) => {
        this.update();
      });
    }
    _handleMouseDown(w) {
      if (this._transforming)
        return;
      this._movingAnchorName = w.target.name().split(" ")[0];
      const T = this._getNodeRect(), M = T.width, D = T.height, I = Math.sqrt(Math.pow(M, 2) + Math.pow(D, 2));
      this.sin = Math.abs(D / I), this.cos = Math.abs(M / I), typeof window < "u" && (window.addEventListener("mousemove", this._handleMouseMove), window.addEventListener("touchmove", this._handleMouseMove), window.addEventListener("mouseup", this._handleMouseUp, !0), window.addEventListener("touchend", this._handleMouseUp, !0)), this._transforming = !0;
      const B = w.target.getAbsolutePosition(), G = w.target.getStage().getPointerPosition();
      this._anchorDragOffset = {
        x: G.x - B.x,
        y: G.y - B.y
      }, v++, this._fire("transformstart", { evt: w.evt, target: this.getNode() }), this._nodes.forEach((X) => {
        X._fire("transformstart", { evt: w.evt, target: X });
      });
    }
    _handleMouseMove(w) {
      let T, M, D;
      const I = this.findOne("." + this._movingAnchorName), B = I.getStage();
      B.setPointersPositions(w);
      const G = B.getPointerPosition();
      let X = {
        x: G.x - this._anchorDragOffset.x,
        y: G.y - this._anchorDragOffset.y
      };
      const b = I.getAbsolutePosition();
      this.anchorDragBoundFunc() && (X = this.anchorDragBoundFunc()(b, X, w)), I.setAbsolutePosition(X);
      const A = I.getAbsolutePosition();
      if (b.x === A.x && b.y === A.y)
        return;
      if (this._movingAnchorName === "rotater") {
        const K = this._getNodeRect();
        T = I.x() - K.width / 2, M = -I.y() + K.height / 2;
        let O = Math.atan2(-M, T) + Math.PI / 2;
        K.height < 0 && (O -= Math.PI);
        const Z = a.Konva.getAngle(this.rotation()) + O, V = a.Konva.getAngle(this.rotationSnapTolerance()), R = d(this.rotationSnaps(), Z, V) - K.rotation, N = c(K, R);
        this._fitNodesInto(N, w);
        return;
      }
      const k = this.shiftBehavior();
      let F;
      k === "inverted" ? F = this.keepRatio() && !w.shiftKey : k === "none" ? F = this.keepRatio() : F = this.keepRatio() || w.shiftKey;
      let L = this.centeredScaling() || w.altKey;
      if (this._movingAnchorName === "top-left") {
        if (F) {
          const K = L ? {
            x: this.width() / 2,
            y: this.height() / 2
          } : {
            x: this.findOne(".bottom-right").x(),
            y: this.findOne(".bottom-right").y()
          };
          D = Math.sqrt(Math.pow(K.x - I.x(), 2) + Math.pow(K.y - I.y(), 2));
          const O = this.findOne(".top-left").x() > K.x ? -1 : 1, j = this.findOne(".top-left").y() > K.y ? -1 : 1;
          T = D * this.cos * O, M = D * this.sin * j, this.findOne(".top-left").x(K.x - T), this.findOne(".top-left").y(K.y - M);
        }
      } else if (this._movingAnchorName === "top-center")
        this.findOne(".top-left").y(I.y());
      else if (this._movingAnchorName === "top-right") {
        if (F) {
          const K = L ? {
            x: this.width() / 2,
            y: this.height() / 2
          } : {
            x: this.findOne(".bottom-left").x(),
            y: this.findOne(".bottom-left").y()
          };
          D = Math.sqrt(Math.pow(I.x() - K.x, 2) + Math.pow(K.y - I.y(), 2));
          const O = this.findOne(".top-right").x() < K.x ? -1 : 1, j = this.findOne(".top-right").y() > K.y ? -1 : 1;
          T = D * this.cos * O, M = D * this.sin * j, this.findOne(".top-right").x(K.x + T), this.findOne(".top-right").y(K.y - M);
        }
        var W = I.position();
        this.findOne(".top-left").y(W.y), this.findOne(".bottom-right").x(W.x);
      } else if (this._movingAnchorName === "middle-left")
        this.findOne(".top-left").x(I.x());
      else if (this._movingAnchorName === "middle-right")
        this.findOne(".bottom-right").x(I.x());
      else if (this._movingAnchorName === "bottom-left") {
        if (F) {
          const K = L ? {
            x: this.width() / 2,
            y: this.height() / 2
          } : {
            x: this.findOne(".top-right").x(),
            y: this.findOne(".top-right").y()
          };
          D = Math.sqrt(Math.pow(K.x - I.x(), 2) + Math.pow(I.y() - K.y, 2));
          const O = K.x < I.x() ? -1 : 1, j = I.y() < K.y ? -1 : 1;
          T = D * this.cos * O, M = D * this.sin * j, I.x(K.x - T), I.y(K.y + M);
        }
        W = I.position(), this.findOne(".top-left").x(W.x), this.findOne(".bottom-right").y(W.y);
      } else if (this._movingAnchorName === "bottom-center")
        this.findOne(".bottom-right").y(I.y());
      else if (this._movingAnchorName === "bottom-right") {
        if (F) {
          const K = L ? {
            x: this.width() / 2,
            y: this.height() / 2
          } : {
            x: this.findOne(".top-left").x(),
            y: this.findOne(".top-left").y()
          };
          D = Math.sqrt(Math.pow(I.x() - K.x, 2) + Math.pow(I.y() - K.y, 2));
          const O = this.findOne(".bottom-right").x() < K.x ? -1 : 1, j = this.findOne(".bottom-right").y() < K.y ? -1 : 1;
          T = D * this.cos * O, M = D * this.sin * j, this.findOne(".bottom-right").x(K.x + T), this.findOne(".bottom-right").y(K.y + M);
        }
      } else
        console.error(new Error("Wrong position argument of selection resizer: " + this._movingAnchorName));
      if (L = this.centeredScaling() || w.altKey, L) {
        const K = this.findOne(".top-left"), O = this.findOne(".bottom-right"), j = K.x(), Z = K.y(), V = this.getWidth() - O.x(), lt = this.getHeight() - O.y();
        O.move({
          x: -j,
          y: -Z
        }), K.move({
          x: V,
          y: lt
        });
      }
      const U = this.findOne(".top-left").getAbsolutePosition();
      T = U.x, M = U.y;
      const Q = this.findOne(".bottom-right").x() - this.findOne(".top-left").x(), rt = this.findOne(".bottom-right").y() - this.findOne(".top-left").y();
      this._fitNodesInto({
        x: T,
        y: M,
        width: Q,
        height: rt,
        rotation: a.Konva.getAngle(this.rotation())
      }, w);
    }
    _handleMouseUp(w) {
      this._removeEvents(w);
    }
    getAbsoluteTransform() {
      return this.getTransform();
    }
    _removeEvents(w) {
      var T;
      if (this._transforming) {
        this._transforming = !1, typeof window < "u" && (window.removeEventListener("mousemove", this._handleMouseMove), window.removeEventListener("touchmove", this._handleMouseMove), window.removeEventListener("mouseup", this._handleMouseUp, !0), window.removeEventListener("touchend", this._handleMouseUp, !0));
        const M = this.getNode();
        v--, this._fire("transformend", { evt: w, target: M }), (T = this.getLayer()) === null || T === void 0 || T.batchDraw(), M && this._nodes.forEach((D) => {
          var I;
          D._fire("transformend", { evt: w, target: D }), (I = D.getLayer()) === null || I === void 0 || I.batchDraw();
        }), this._movingAnchorName = null;
      }
    }
    _fitNodesInto(w, T) {
      const M = this._getNodeRect(), D = 1;
      if (t.Util._inRange(w.width, -this.padding() * 2 - D, D)) {
        this.update();
        return;
      }
      if (t.Util._inRange(w.height, -this.padding() * 2 - D, D)) {
        this.update();
        return;
      }
      const I = new t.Transform();
      if (I.rotate(a.Konva.getAngle(this.rotation())), this._movingAnchorName && w.width < 0 && this._movingAnchorName.indexOf("left") >= 0) {
        const F = I.point({
          x: -this.padding() * 2,
          y: 0
        });
        w.x += F.x, w.y += F.y, w.width += this.padding() * 2, this._movingAnchorName = this._movingAnchorName.replace("left", "right"), this._anchorDragOffset.x -= F.x, this._anchorDragOffset.y -= F.y;
      } else if (this._movingAnchorName && w.width < 0 && this._movingAnchorName.indexOf("right") >= 0) {
        const F = I.point({
          x: this.padding() * 2,
          y: 0
        });
        this._movingAnchorName = this._movingAnchorName.replace("right", "left"), this._anchorDragOffset.x -= F.x, this._anchorDragOffset.y -= F.y, w.width += this.padding() * 2;
      }
      if (this._movingAnchorName && w.height < 0 && this._movingAnchorName.indexOf("top") >= 0) {
        const F = I.point({
          x: 0,
          y: -this.padding() * 2
        });
        w.x += F.x, w.y += F.y, this._movingAnchorName = this._movingAnchorName.replace("top", "bottom"), this._anchorDragOffset.x -= F.x, this._anchorDragOffset.y -= F.y, w.height += this.padding() * 2;
      } else if (this._movingAnchorName && w.height < 0 && this._movingAnchorName.indexOf("bottom") >= 0) {
        const F = I.point({
          x: 0,
          y: this.padding() * 2
        });
        this._movingAnchorName = this._movingAnchorName.replace("bottom", "top"), this._anchorDragOffset.x -= F.x, this._anchorDragOffset.y -= F.y, w.height += this.padding() * 2;
      }
      if (this.boundBoxFunc()) {
        const F = this.boundBoxFunc()(M, w);
        F ? w = F : t.Util.warn("boundBoxFunc returned falsy. You should return new bound rect from it!");
      }
      const B = 1e7, G = new t.Transform();
      G.translate(M.x, M.y), G.rotate(M.rotation), G.scale(M.width / B, M.height / B);
      const X = new t.Transform(), b = w.width / B, A = w.height / B;
      this.flipEnabled() === !1 ? (X.translate(w.x, w.y), X.rotate(w.rotation), X.translate(w.width < 0 ? w.width : 0, w.height < 0 ? w.height : 0), X.scale(Math.abs(b), Math.abs(A))) : (X.translate(w.x, w.y), X.rotate(w.rotation), X.scale(b, A));
      const k = X.multiply(G.invert());
      this._nodes.forEach((F) => {
        var L;
        const W = F.getParent().getAbsoluteTransform(), U = F.getTransform().copy();
        U.translate(F.offsetX(), F.offsetY());
        const Q = new t.Transform();
        Q.multiply(W.copy().invert()).multiply(k).multiply(W).multiply(U);
        const rt = Q.decompose();
        F.setAttrs(rt), (L = F.getLayer()) === null || L === void 0 || L.batchDraw();
      }), this.rotation(t.Util._getRotation(w.rotation)), this._nodes.forEach((F) => {
        this._fire("transform", { evt: T, target: F }), F._fire("transform", { evt: T, target: F });
      }), this._resetTransformCache(), this.update(), this.getLayer().batchDraw();
    }
    forceUpdate() {
      this._resetTransformCache(), this.update();
    }
    _batchChangeChild(w, T) {
      this.findOne(w).setAttrs(T);
    }
    update() {
      var w;
      const T = this._getNodeRect();
      this.rotation(t.Util._getRotation(T.rotation));
      const M = T.width, D = T.height, I = this.enabledAnchors(), B = this.resizeEnabled(), G = this.padding(), X = this.anchorSize(), b = this.find("._anchor");
      b.forEach((k) => {
        k.setAttrs({
          width: X,
          height: X,
          offsetX: X / 2,
          offsetY: X / 2,
          stroke: this.anchorStroke(),
          strokeWidth: this.anchorStrokeWidth(),
          fill: this.anchorFill(),
          cornerRadius: this.anchorCornerRadius()
        });
      }), this._batchChangeChild(".top-left", {
        x: 0,
        y: 0,
        offsetX: X / 2 + G,
        offsetY: X / 2 + G,
        visible: B && I.indexOf("top-left") >= 0
      }), this._batchChangeChild(".top-center", {
        x: M / 2,
        y: 0,
        offsetY: X / 2 + G,
        visible: B && I.indexOf("top-center") >= 0
      }), this._batchChangeChild(".top-right", {
        x: M,
        y: 0,
        offsetX: X / 2 - G,
        offsetY: X / 2 + G,
        visible: B && I.indexOf("top-right") >= 0
      }), this._batchChangeChild(".middle-left", {
        x: 0,
        y: D / 2,
        offsetX: X / 2 + G,
        visible: B && I.indexOf("middle-left") >= 0
      }), this._batchChangeChild(".middle-right", {
        x: M,
        y: D / 2,
        offsetX: X / 2 - G,
        visible: B && I.indexOf("middle-right") >= 0
      }), this._batchChangeChild(".bottom-left", {
        x: 0,
        y: D,
        offsetX: X / 2 + G,
        offsetY: X / 2 - G,
        visible: B && I.indexOf("bottom-left") >= 0
      }), this._batchChangeChild(".bottom-center", {
        x: M / 2,
        y: D,
        offsetY: X / 2 - G,
        visible: B && I.indexOf("bottom-center") >= 0
      }), this._batchChangeChild(".bottom-right", {
        x: M,
        y: D,
        offsetX: X / 2 - G,
        offsetY: X / 2 - G,
        visible: B && I.indexOf("bottom-right") >= 0
      }), this._batchChangeChild(".rotater", {
        x: M / 2,
        y: -this.rotateAnchorOffset() * t.Util._sign(D) - G,
        visible: this.rotateEnabled()
      }), this._batchChangeChild(".back", {
        width: M,
        height: D,
        visible: this.borderEnabled(),
        stroke: this.borderStroke(),
        strokeWidth: this.borderStrokeWidth(),
        dash: this.borderDash(),
        x: 0,
        y: 0
      });
      const A = this.anchorStyleFunc();
      A && b.forEach((k) => {
        A(k);
      }), (w = this.getLayer()) === null || w === void 0 || w.batchDraw();
    }
    isTransforming() {
      return this._transforming;
    }
    stopTransform() {
      if (this._transforming) {
        this._removeEvents();
        const w = this.findOne("." + this._movingAnchorName);
        w && w.stopDrag();
      }
    }
    destroy() {
      return this.getStage() && this._cursorChange && this.getStage().content && (this.getStage().content.style.cursor = ""), s.Group.prototype.destroy.call(this), this.detach(), this._removeEvents(), this;
    }
    toObject() {
      return i.Node.prototype.toObject.call(this);
    }
    clone(w) {
      return i.Node.prototype.clone.call(this, w);
    }
    getClientRect() {
      return this.nodes().length > 0 ? super.getClientRect() : { x: 0, y: 0, width: 0, height: 0 };
    }
  };
  Ei.Transformer = x, x.isTransforming = () => v > 0;
  function E(C) {
    return C instanceof Array || t.Util.warn("enabledAnchors value should be an array"), C instanceof Array && C.forEach(function(w) {
      S.indexOf(w) === -1 && t.Util.warn("Unknown anchor name: " + w + ". Available names are: " + S.join(", "));
    }), C || [];
  }
  return x.prototype.className = "Transformer", (0, l._registerNode)(x), e.Factory.addGetterSetter(x, "enabledAnchors", S, E), e.Factory.addGetterSetter(x, "flipEnabled", !0, (0, o.getBooleanValidator)()), e.Factory.addGetterSetter(x, "resizeEnabled", !0), e.Factory.addGetterSetter(x, "anchorSize", 10, (0, o.getNumberValidator)()), e.Factory.addGetterSetter(x, "rotateEnabled", !0), e.Factory.addGetterSetter(x, "rotateLineVisible", !0), e.Factory.addGetterSetter(x, "rotationSnaps", []), e.Factory.addGetterSetter(x, "rotateAnchorOffset", 50, (0, o.getNumberValidator)()), e.Factory.addGetterSetter(x, "rotateAnchorCursor", "crosshair"), e.Factory.addGetterSetter(x, "rotationSnapTolerance", 5, (0, o.getNumberValidator)()), e.Factory.addGetterSetter(x, "borderEnabled", !0), e.Factory.addGetterSetter(x, "anchorStroke", "rgb(0, 161, 255)"), e.Factory.addGetterSetter(x, "anchorStrokeWidth", 1, (0, o.getNumberValidator)()), e.Factory.addGetterSetter(x, "anchorFill", "white"), e.Factory.addGetterSetter(x, "anchorCornerRadius", 0, (0, o.getNumberValidator)()), e.Factory.addGetterSetter(x, "borderStroke", "rgb(0, 161, 255)"), e.Factory.addGetterSetter(x, "borderStrokeWidth", 1, (0, o.getNumberValidator)()), e.Factory.addGetterSetter(x, "borderDash"), e.Factory.addGetterSetter(x, "keepRatio", !0), e.Factory.addGetterSetter(x, "shiftBehavior", "default"), e.Factory.addGetterSetter(x, "centeredScaling", !1), e.Factory.addGetterSetter(x, "ignoreStroke", !1), e.Factory.addGetterSetter(x, "padding", 0, (0, o.getNumberValidator)()), e.Factory.addGetterSetter(x, "nodes"), e.Factory.addGetterSetter(x, "node"), e.Factory.addGetterSetter(x, "boundBoxFunc"), e.Factory.addGetterSetter(x, "anchorDragBoundFunc"), e.Factory.addGetterSetter(x, "anchorStyleFunc"), e.Factory.addGetterSetter(x, "shouldOverdrawWholeArea", !1), e.Factory.addGetterSetter(x, "useSingleNodeRotation", !0), e.Factory.backCompat(x, {
    lineEnabled: "borderEnabled",
    rotateHandlerOffset: "rotateAnchorOffset",
    enabledHandlers: "enabledAnchors"
  }), Ei;
}
var Mi = {}, Io;
function xu() {
  if (Io) return Mi;
  Io = 1, Object.defineProperty(Mi, "__esModule", { value: !0 }), Mi.Wedge = void 0;
  const t = mt(), e = Gt(), i = pt(), r = yt(), n = pt();
  let s = class extends e.Shape {
    _sceneFunc(o) {
      o.beginPath(), o.arc(0, 0, this.radius(), 0, i.Konva.getAngle(this.angle()), this.clockwise()), o.lineTo(0, 0), o.closePath(), o.fillStrokeShape(this);
    }
    getWidth() {
      return this.radius() * 2;
    }
    getHeight() {
      return this.radius() * 2;
    }
    setWidth(o) {
      this.radius(o / 2);
    }
    setHeight(o) {
      this.radius(o / 2);
    }
  };
  return Mi.Wedge = s, s.prototype.className = "Wedge", s.prototype._centroid = !0, s.prototype._attrsAffectingSize = ["radius"], (0, n._registerNode)(s), t.Factory.addGetterSetter(s, "radius", 0, (0, r.getNumberValidator)()), t.Factory.addGetterSetter(s, "angle", 0, (0, r.getNumberValidator)()), t.Factory.addGetterSetter(s, "clockwise", !1), t.Factory.backCompat(s, {
    angleDeg: "angle",
    getAngleDeg: "getAngle",
    setAngleDeg: "setAngle"
  }), Mi;
}
var Fi = {}, Uo;
function Pu() {
  if (Uo) return Fi;
  Uo = 1, Object.defineProperty(Fi, "__esModule", { value: !0 }), Fi.Blur = void 0;
  const t = mt(), e = Lt(), i = yt();
  function r() {
    this.r = 0, this.g = 0, this.b = 0, this.a = 0, this.next = null;
  }
  const n = [
    512,
    512,
    456,
    512,
    328,
    456,
    335,
    512,
    405,
    328,
    271,
    456,
    388,
    335,
    292,
    512,
    454,
    405,
    364,
    328,
    298,
    271,
    496,
    456,
    420,
    388,
    360,
    335,
    312,
    292,
    273,
    512,
    482,
    454,
    428,
    405,
    383,
    364,
    345,
    328,
    312,
    298,
    284,
    271,
    259,
    496,
    475,
    456,
    437,
    420,
    404,
    388,
    374,
    360,
    347,
    335,
    323,
    312,
    302,
    292,
    282,
    273,
    265,
    512,
    497,
    482,
    468,
    454,
    441,
    428,
    417,
    405,
    394,
    383,
    373,
    364,
    354,
    345,
    337,
    328,
    320,
    312,
    305,
    298,
    291,
    284,
    278,
    271,
    265,
    259,
    507,
    496,
    485,
    475,
    465,
    456,
    446,
    437,
    428,
    420,
    412,
    404,
    396,
    388,
    381,
    374,
    367,
    360,
    354,
    347,
    341,
    335,
    329,
    323,
    318,
    312,
    307,
    302,
    297,
    292,
    287,
    282,
    278,
    273,
    269,
    265,
    261,
    512,
    505,
    497,
    489,
    482,
    475,
    468,
    461,
    454,
    447,
    441,
    435,
    428,
    422,
    417,
    411,
    405,
    399,
    394,
    389,
    383,
    378,
    373,
    368,
    364,
    359,
    354,
    350,
    345,
    341,
    337,
    332,
    328,
    324,
    320,
    316,
    312,
    309,
    305,
    301,
    298,
    294,
    291,
    287,
    284,
    281,
    278,
    274,
    271,
    268,
    265,
    262,
    259,
    257,
    507,
    501,
    496,
    491,
    485,
    480,
    475,
    470,
    465,
    460,
    456,
    451,
    446,
    442,
    437,
    433,
    428,
    424,
    420,
    416,
    412,
    408,
    404,
    400,
    396,
    392,
    388,
    385,
    381,
    377,
    374,
    370,
    367,
    363,
    360,
    357,
    354,
    350,
    347,
    344,
    341,
    338,
    335,
    332,
    329,
    326,
    323,
    320,
    318,
    315,
    312,
    310,
    307,
    304,
    302,
    299,
    297,
    294,
    292,
    289,
    287,
    285,
    282,
    280,
    278,
    275,
    273,
    271,
    269,
    267,
    265,
    263,
    261,
    259
  ], s = [
    9,
    11,
    12,
    13,
    13,
    14,
    14,
    15,
    15,
    15,
    15,
    16,
    16,
    16,
    16,
    17,
    17,
    17,
    17,
    17,
    17,
    17,
    18,
    18,
    18,
    18,
    18,
    18,
    18,
    18,
    18,
    19,
    19,
    19,
    19,
    19,
    19,
    19,
    19,
    19,
    19,
    19,
    19,
    19,
    19,
    20,
    20,
    20,
    20,
    20,
    20,
    20,
    20,
    20,
    20,
    20,
    20,
    20,
    20,
    20,
    20,
    20,
    20,
    21,
    21,
    21,
    21,
    21,
    21,
    21,
    21,
    21,
    21,
    21,
    21,
    21,
    21,
    21,
    21,
    21,
    21,
    21,
    21,
    21,
    21,
    21,
    21,
    21,
    21,
    21,
    22,
    22,
    22,
    22,
    22,
    22,
    22,
    22,
    22,
    22,
    22,
    22,
    22,
    22,
    22,
    22,
    22,
    22,
    22,
    22,
    22,
    22,
    22,
    22,
    22,
    22,
    22,
    22,
    22,
    22,
    22,
    22,
    22,
    22,
    22,
    22,
    22,
    23,
    23,
    23,
    23,
    23,
    23,
    23,
    23,
    23,
    23,
    23,
    23,
    23,
    23,
    23,
    23,
    23,
    23,
    23,
    23,
    23,
    23,
    23,
    23,
    23,
    23,
    23,
    23,
    23,
    23,
    23,
    23,
    23,
    23,
    23,
    23,
    23,
    23,
    23,
    23,
    23,
    23,
    23,
    23,
    23,
    23,
    23,
    23,
    23,
    23,
    23,
    23,
    23,
    23,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24
  ];
  function a(l, u) {
    const h = l.data, _ = l.width, m = l.height;
    let f, p, y, S, P, g, c, d, v, x, E, C, w, T, M, D, I, B, G, X;
    const b = u + u + 1, A = _ - 1, k = m - 1, F = u + 1, L = F * (F + 1) / 2, W = new r(), U = n[u], Q = s[u];
    let rt = null, K = W, O = null, j = null;
    for (let Z = 1; Z < b; Z++)
      K = K.next = new r(), Z === F && (rt = K);
    K.next = W, y = p = 0;
    for (let Z = 0; Z < m; Z++) {
      C = w = T = M = S = P = g = c = 0, d = F * (D = h[p]), v = F * (I = h[p + 1]), x = F * (B = h[p + 2]), E = F * (G = h[p + 3]), S += L * D, P += L * I, g += L * B, c += L * G, K = W;
      for (let V = 0; V < F; V++)
        K.r = D, K.g = I, K.b = B, K.a = G, K = K.next;
      for (let V = 1; V < F; V++)
        f = p + ((A < V ? A : V) << 2), S += (K.r = D = h[f]) * (X = F - V), P += (K.g = I = h[f + 1]) * X, g += (K.b = B = h[f + 2]) * X, c += (K.a = G = h[f + 3]) * X, C += D, w += I, T += B, M += G, K = K.next;
      O = W, j = rt;
      for (let V = 0; V < _; V++)
        h[p + 3] = G = c * U >> Q, G !== 0 ? (G = 255 / G, h[p] = (S * U >> Q) * G, h[p + 1] = (P * U >> Q) * G, h[p + 2] = (g * U >> Q) * G) : h[p] = h[p + 1] = h[p + 2] = 0, S -= d, P -= v, g -= x, c -= E, d -= O.r, v -= O.g, x -= O.b, E -= O.a, f = y + ((f = V + u + 1) < A ? f : A) << 2, C += O.r = h[f], w += O.g = h[f + 1], T += O.b = h[f + 2], M += O.a = h[f + 3], S += C, P += w, g += T, c += M, O = O.next, d += D = j.r, v += I = j.g, x += B = j.b, E += G = j.a, C -= D, w -= I, T -= B, M -= G, j = j.next, p += 4;
      y += _;
    }
    for (let Z = 0; Z < _; Z++) {
      w = T = M = C = P = g = c = S = 0, p = Z << 2, d = F * (D = h[p]), v = F * (I = h[p + 1]), x = F * (B = h[p + 2]), E = F * (G = h[p + 3]), S += L * D, P += L * I, g += L * B, c += L * G, K = W;
      for (let lt = 0; lt < F; lt++)
        K.r = D, K.g = I, K.b = B, K.a = G, K = K.next;
      let V = _;
      for (let lt = 1; lt <= u; lt++)
        p = V + Z << 2, S += (K.r = D = h[p]) * (X = F - lt), P += (K.g = I = h[p + 1]) * X, g += (K.b = B = h[p + 2]) * X, c += (K.a = G = h[p + 3]) * X, C += D, w += I, T += B, M += G, K = K.next, lt < k && (V += _);
      p = Z, O = W, j = rt;
      for (let lt = 0; lt < m; lt++)
        f = p << 2, h[f + 3] = G = c * U >> Q, G > 0 ? (G = 255 / G, h[f] = (S * U >> Q) * G, h[f + 1] = (P * U >> Q) * G, h[f + 2] = (g * U >> Q) * G) : h[f] = h[f + 1] = h[f + 2] = 0, S -= d, P -= v, g -= x, c -= E, d -= O.r, v -= O.g, x -= O.b, E -= O.a, f = Z + ((f = lt + F) < k ? f : k) * _ << 2, S += C += O.r = h[f], P += w += O.g = h[f + 1], g += T += O.b = h[f + 2], c += M += O.a = h[f + 3], O = O.next, d += D = j.r, v += I = j.g, x += B = j.b, E += G = j.a, C -= D, w -= I, T -= B, M -= G, j = j.next, p += _;
    }
  }
  const o = function(u) {
    const h = Math.round(this.blurRadius());
    h > 0 && a(u, h);
  };
  return Fi.Blur = o, t.Factory.addGetterSetter(e.Node, "blurRadius", 0, (0, i.getNumberValidator)(), t.Factory.afterSetFilter), Fi;
}
var ki = {}, Bo;
function Tu() {
  if (Bo) return ki;
  Bo = 1, Object.defineProperty(ki, "__esModule", { value: !0 }), ki.Brighten = void 0;
  const t = mt(), e = Lt(), i = yt(), r = function(n) {
    const s = this.brightness() * 255, a = n.data, o = a.length;
    for (let l = 0; l < o; l += 4)
      a[l] += s, a[l + 1] += s, a[l + 2] += s;
  };
  return ki.Brighten = r, t.Factory.addGetterSetter(e.Node, "brightness", 0, (0, i.getNumberValidator)(), t.Factory.afterSetFilter), ki;
}
var Oi = {}, Vo;
function Au() {
  if (Vo) return Oi;
  Vo = 1, Object.defineProperty(Oi, "__esModule", { value: !0 }), Oi.Contrast = void 0;
  const t = mt(), e = Lt(), i = yt(), r = function(n) {
    const s = Math.pow((this.contrast() + 100) / 100, 2), a = n.data, o = a.length;
    let l = 150, u = 150, h = 150;
    for (let _ = 0; _ < o; _ += 4)
      l = a[_], u = a[_ + 1], h = a[_ + 2], l /= 255, l -= 0.5, l *= s, l += 0.5, l *= 255, u /= 255, u -= 0.5, u *= s, u += 0.5, u *= 255, h /= 255, h -= 0.5, h *= s, h += 0.5, h *= 255, l = l < 0 ? 0 : l > 255 ? 255 : l, u = u < 0 ? 0 : u > 255 ? 255 : u, h = h < 0 ? 0 : h > 255 ? 255 : h, a[_] = l, a[_ + 1] = u, a[_ + 2] = h;
  };
  return Oi.Contrast = r, t.Factory.addGetterSetter(e.Node, "contrast", 0, (0, i.getNumberValidator)(), t.Factory.afterSetFilter), Oi;
}
var Ni = {}, Ho;
function Ru() {
  if (Ho) return Ni;
  Ho = 1, Object.defineProperty(Ni, "__esModule", { value: !0 }), Ni.Emboss = void 0;
  const t = mt(), e = Lt(), i = Ot(), r = yt(), n = function(s) {
    const a = this.embossStrength() * 10, o = this.embossWhiteLevel() * 255, l = this.embossDirection(), u = this.embossBlend(), h = s.data, _ = s.width, m = s.height, f = _ * 4;
    let p = 0, y = 0, S = m;
    switch (l) {
      case "top-left":
        p = -1, y = -1;
        break;
      case "top":
        p = -1, y = 0;
        break;
      case "top-right":
        p = -1, y = 1;
        break;
      case "right":
        p = 0, y = 1;
        break;
      case "bottom-right":
        p = 1, y = 1;
        break;
      case "bottom":
        p = 1, y = 0;
        break;
      case "bottom-left":
        p = 1, y = -1;
        break;
      case "left":
        p = 0, y = -1;
        break;
      default:
        i.Util.error("Unknown emboss direction: " + l);
    }
    do {
      const P = (S - 1) * f;
      let g = p;
      S + g < 1 && (g = 0), S + g > m && (g = 0);
      const c = (S - 1 + g) * _ * 4;
      let d = _;
      do {
        const v = P + (d - 1) * 4;
        let x = y;
        d + x < 1 && (x = 0), d + x > _ && (x = 0);
        const E = c + (d - 1 + x) * 4, C = h[v] - h[E], w = h[v + 1] - h[E + 1], T = h[v + 2] - h[E + 2];
        let M = C;
        const D = M > 0 ? M : -M, I = w > 0 ? w : -w, B = T > 0 ? T : -T;
        if (I > D && (M = w), B > D && (M = T), M *= a, u) {
          const G = h[v] + M, X = h[v + 1] + M, b = h[v + 2] + M;
          h[v] = G > 255 ? 255 : G < 0 ? 0 : G, h[v + 1] = X > 255 ? 255 : X < 0 ? 0 : X, h[v + 2] = b > 255 ? 255 : b < 0 ? 0 : b;
        } else {
          let G = o - M;
          G < 0 ? G = 0 : G > 255 && (G = 255), h[v] = h[v + 1] = h[v + 2] = G;
        }
      } while (--d);
    } while (--S);
  };
  return Ni.Emboss = n, t.Factory.addGetterSetter(e.Node, "embossStrength", 0.5, (0, r.getNumberValidator)(), t.Factory.afterSetFilter), t.Factory.addGetterSetter(e.Node, "embossWhiteLevel", 0.5, (0, r.getNumberValidator)(), t.Factory.afterSetFilter), t.Factory.addGetterSetter(e.Node, "embossDirection", "top-left", void 0, t.Factory.afterSetFilter), t.Factory.addGetterSetter(e.Node, "embossBlend", !1, void 0, t.Factory.afterSetFilter), Ni;
}
var Li = {}, Wo;
function Eu() {
  if (Wo) return Li;
  Wo = 1, Object.defineProperty(Li, "__esModule", { value: !0 }), Li.Enhance = void 0;
  const t = mt(), e = Lt(), i = yt();
  function r(s, a, o, l, u) {
    const h = o - a, _ = u - l;
    if (h === 0)
      return l + _ / 2;
    if (_ === 0)
      return l;
    let m = (s - a) / h;
    return m = _ * m + l, m;
  }
  const n = function(s) {
    const a = s.data, o = a.length;
    let l = a[0], u = l, h, _ = a[1], m = _, f, p = a[2], y = p, S;
    const P = this.enhance();
    if (P === 0)
      return;
    for (let C = 0; C < o; C += 4)
      h = a[C + 0], h < l ? l = h : h > u && (u = h), f = a[C + 1], f < _ ? _ = f : f > m && (m = f), S = a[C + 2], S < p ? p = S : S > y && (y = S);
    u === l && (u = 255, l = 0), m === _ && (m = 255, _ = 0), y === p && (y = 255, p = 0);
    let g, c, d, v, x, E;
    if (P > 0)
      g = u + P * (255 - u), c = l - P * (l - 0), d = m + P * (255 - m), v = _ - P * (_ - 0), x = y + P * (255 - y), E = p - P * (p - 0);
    else {
      const C = (u + l) * 0.5;
      g = u + P * (u - C), c = l + P * (l - C);
      const w = (m + _) * 0.5;
      d = m + P * (m - w), v = _ + P * (_ - w);
      const T = (y + p) * 0.5;
      x = y + P * (y - T), E = p + P * (p - T);
    }
    for (let C = 0; C < o; C += 4)
      a[C + 0] = r(a[C + 0], l, u, c, g), a[C + 1] = r(a[C + 1], _, m, v, d), a[C + 2] = r(a[C + 2], p, y, E, x);
  };
  return Li.Enhance = n, t.Factory.addGetterSetter(e.Node, "enhance", 0, (0, i.getNumberValidator)(), t.Factory.afterSetFilter), Li;
}
var Di = {}, jo;
function Mu() {
  if (jo) return Di;
  jo = 1, Object.defineProperty(Di, "__esModule", { value: !0 }), Di.Grayscale = void 0;
  const t = function(e) {
    const i = e.data, r = i.length;
    for (let n = 0; n < r; n += 4) {
      const s = 0.34 * i[n] + 0.5 * i[n + 1] + 0.16 * i[n + 2];
      i[n] = s, i[n + 1] = s, i[n + 2] = s;
    }
  };
  return Di.Grayscale = t, Di;
}
var Gi = {}, qo;
function Fu() {
  if (qo) return Gi;
  qo = 1, Object.defineProperty(Gi, "__esModule", { value: !0 }), Gi.HSL = void 0;
  const t = mt(), e = Lt(), i = yt();
  t.Factory.addGetterSetter(e.Node, "hue", 0, (0, i.getNumberValidator)(), t.Factory.afterSetFilter), t.Factory.addGetterSetter(e.Node, "saturation", 0, (0, i.getNumberValidator)(), t.Factory.afterSetFilter), t.Factory.addGetterSetter(e.Node, "luminance", 0, (0, i.getNumberValidator)(), t.Factory.afterSetFilter);
  const r = function(n) {
    const s = n.data, a = s.length, o = 1, l = Math.pow(2, this.saturation()), u = Math.abs(this.hue() + 360) % 360, h = this.luminance() * 127, _ = o * l * Math.cos(u * Math.PI / 180), m = o * l * Math.sin(u * Math.PI / 180), f = 0.299 * o + 0.701 * _ + 0.167 * m, p = 0.587 * o - 0.587 * _ + 0.33 * m, y = 0.114 * o - 0.114 * _ - 0.497 * m, S = 0.299 * o - 0.299 * _ - 0.328 * m, P = 0.587 * o + 0.413 * _ + 0.035 * m, g = 0.114 * o - 0.114 * _ + 0.293 * m, c = 0.299 * o - 0.3 * _ + 1.25 * m, d = 0.587 * o - 0.586 * _ - 1.05 * m, v = 0.114 * o + 0.886 * _ - 0.2 * m;
    let x, E, C, w;
    for (let T = 0; T < a; T += 4)
      x = s[T + 0], E = s[T + 1], C = s[T + 2], w = s[T + 3], s[T + 0] = f * x + p * E + y * C + h, s[T + 1] = S * x + P * E + g * C + h, s[T + 2] = c * x + d * E + v * C + h, s[T + 3] = w;
  };
  return Gi.HSL = r, Gi;
}
var Ii = {}, Ko;
function ku() {
  if (Ko) return Ii;
  Ko = 1, Object.defineProperty(Ii, "__esModule", { value: !0 }), Ii.HSV = void 0;
  const t = mt(), e = Lt(), i = yt(), r = function(n) {
    const s = n.data, a = s.length, o = Math.pow(2, this.value()), l = Math.pow(2, this.saturation()), u = Math.abs(this.hue() + 360) % 360, h = o * l * Math.cos(u * Math.PI / 180), _ = o * l * Math.sin(u * Math.PI / 180), m = 0.299 * o + 0.701 * h + 0.167 * _, f = 0.587 * o - 0.587 * h + 0.33 * _, p = 0.114 * o - 0.114 * h - 0.497 * _, y = 0.299 * o - 0.299 * h - 0.328 * _, S = 0.587 * o + 0.413 * h + 0.035 * _, P = 0.114 * o - 0.114 * h + 0.293 * _, g = 0.299 * o - 0.3 * h + 1.25 * _, c = 0.587 * o - 0.586 * h - 1.05 * _, d = 0.114 * o + 0.886 * h - 0.2 * _;
    for (let v = 0; v < a; v += 4) {
      const x = s[v + 0], E = s[v + 1], C = s[v + 2], w = s[v + 3];
      s[v + 0] = m * x + f * E + p * C, s[v + 1] = y * x + S * E + P * C, s[v + 2] = g * x + c * E + d * C, s[v + 3] = w;
    }
  };
  return Ii.HSV = r, t.Factory.addGetterSetter(e.Node, "hue", 0, (0, i.getNumberValidator)(), t.Factory.afterSetFilter), t.Factory.addGetterSetter(e.Node, "saturation", 0, (0, i.getNumberValidator)(), t.Factory.afterSetFilter), t.Factory.addGetterSetter(e.Node, "value", 0, (0, i.getNumberValidator)(), t.Factory.afterSetFilter), Ii;
}
var Ui = {}, zo;
function Ou() {
  if (zo) return Ui;
  zo = 1, Object.defineProperty(Ui, "__esModule", { value: !0 }), Ui.Invert = void 0;
  const t = function(e) {
    const i = e.data, r = i.length;
    for (let n = 0; n < r; n += 4)
      i[n] = 255 - i[n], i[n + 1] = 255 - i[n + 1], i[n + 2] = 255 - i[n + 2];
  };
  return Ui.Invert = t, Ui;
}
var Bi = {}, Yo;
function Nu() {
  if (Yo) return Bi;
  Yo = 1, Object.defineProperty(Bi, "__esModule", { value: !0 }), Bi.Kaleidoscope = void 0;
  const t = mt(), e = Lt(), i = Ot(), r = yt(), n = function(o, l, u) {
    const h = o.data, _ = l.data, m = o.width, f = o.height, p = u.polarCenterX || m / 2, y = u.polarCenterY || f / 2;
    let S = Math.sqrt(p * p + y * y), P = m - p, g = f - y;
    const c = Math.sqrt(P * P + g * g);
    S = c > S ? c : S;
    const d = f, v = m, x = 360 / v * Math.PI / 180;
    for (let E = 0; E < v; E += 1) {
      const C = Math.sin(E * x), w = Math.cos(E * x);
      for (let T = 0; T < d; T += 1) {
        P = Math.floor(p + S * T / d * w), g = Math.floor(y + S * T / d * C);
        let M = (g * m + P) * 4;
        const D = h[M + 0], I = h[M + 1], B = h[M + 2], G = h[M + 3];
        M = (E + T * m) * 4, _[M + 0] = D, _[M + 1] = I, _[M + 2] = B, _[M + 3] = G;
      }
    }
  }, s = function(o, l, u) {
    const h = o.data, _ = l.data, m = o.width, f = o.height, p = u.polarCenterX || m / 2, y = u.polarCenterY || f / 2;
    let S = Math.sqrt(p * p + y * y), P = m - p, g = f - y;
    const c = Math.sqrt(P * P + g * g);
    S = c > S ? c : S;
    const d = f, v = m, x = 0;
    let E, C;
    for (P = 0; P < m; P += 1)
      for (g = 0; g < f; g += 1) {
        const w = P - p, T = g - y, M = Math.sqrt(w * w + T * T) * d / S;
        let D = (Math.atan2(T, w) * 180 / Math.PI + 360 + x) % 360;
        D = D * v / 360, E = Math.floor(D), C = Math.floor(M);
        let I = (C * m + E) * 4;
        const B = h[I + 0], G = h[I + 1], X = h[I + 2], b = h[I + 3];
        I = (g * m + P) * 4, _[I + 0] = B, _[I + 1] = G, _[I + 2] = X, _[I + 3] = b;
      }
  }, a = function(o) {
    const l = o.width, u = o.height;
    let h, _, m, f, p, y, S, P, g, c, d = Math.round(this.kaleidoscopePower());
    const v = Math.round(this.kaleidoscopeAngle()), x = Math.floor(l * (v % 360) / 360);
    if (d < 1)
      return;
    const E = i.Util.createCanvasElement();
    E.width = l, E.height = u;
    const C = E.getContext("2d").getImageData(0, 0, l, u);
    i.Util.releaseCanvas(E), n(o, C, {
      polarCenterX: l / 2,
      polarCenterY: u / 2
    });
    let w = l / Math.pow(2, d);
    for (; w <= 8; )
      w = w * 2, d -= 1;
    w = Math.ceil(w);
    let T = w, M = 0, D = T, I = 1;
    for (x + w > l && (M = T, D = 0, I = -1), _ = 0; _ < u; _ += 1)
      for (h = M; h !== D; h += I)
        m = Math.round(h + x) % l, g = (l * _ + m) * 4, p = C.data[g + 0], y = C.data[g + 1], S = C.data[g + 2], P = C.data[g + 3], c = (l * _ + h) * 4, C.data[c + 0] = p, C.data[c + 1] = y, C.data[c + 2] = S, C.data[c + 3] = P;
    for (_ = 0; _ < u; _ += 1)
      for (T = Math.floor(w), f = 0; f < d; f += 1) {
        for (h = 0; h < T + 1; h += 1)
          g = (l * _ + h) * 4, p = C.data[g + 0], y = C.data[g + 1], S = C.data[g + 2], P = C.data[g + 3], c = (l * _ + T * 2 - h - 1) * 4, C.data[c + 0] = p, C.data[c + 1] = y, C.data[c + 2] = S, C.data[c + 3] = P;
        T *= 2;
      }
    s(C, o, {});
  };
  return Bi.Kaleidoscope = a, t.Factory.addGetterSetter(e.Node, "kaleidoscopePower", 2, (0, r.getNumberValidator)(), t.Factory.afterSetFilter), t.Factory.addGetterSetter(e.Node, "kaleidoscopeAngle", 0, (0, r.getNumberValidator)(), t.Factory.afterSetFilter), Bi;
}
var Vi = {}, $o;
function Lu() {
  if ($o) return Vi;
  $o = 1, Object.defineProperty(Vi, "__esModule", { value: !0 }), Vi.Mask = void 0;
  const t = mt(), e = Lt(), i = yt();
  function r(m, f, p) {
    let y = (p * m.width + f) * 4;
    const S = [];
    return S.push(m.data[y++], m.data[y++], m.data[y++], m.data[y++]), S;
  }
  function n(m, f) {
    return Math.sqrt(Math.pow(m[0] - f[0], 2) + Math.pow(m[1] - f[1], 2) + Math.pow(m[2] - f[2], 2));
  }
  function s(m) {
    const f = [0, 0, 0];
    for (let p = 0; p < m.length; p++)
      f[0] += m[p][0], f[1] += m[p][1], f[2] += m[p][2];
    return f[0] /= m.length, f[1] /= m.length, f[2] /= m.length, f;
  }
  function a(m, f) {
    const p = r(m, 0, 0), y = r(m, m.width - 1, 0), S = r(m, 0, m.height - 1), P = r(m, m.width - 1, m.height - 1), g = f || 10;
    if (n(p, y) < g && n(y, P) < g && n(P, S) < g && n(S, p) < g) {
      const c = s([y, p, P, S]), d = [];
      for (let v = 0; v < m.width * m.height; v++) {
        const x = n(c, [
          m.data[v * 4],
          m.data[v * 4 + 1],
          m.data[v * 4 + 2]
        ]);
        d[v] = x < g ? 0 : 255;
      }
      return d;
    }
  }
  function o(m, f) {
    for (let p = 0; p < m.width * m.height; p++)
      m.data[4 * p + 3] = f[p];
  }
  function l(m, f, p) {
    const y = [1, 1, 1, 1, 0, 1, 1, 1, 1], S = Math.round(Math.sqrt(y.length)), P = Math.floor(S / 2), g = [];
    for (let c = 0; c < p; c++)
      for (let d = 0; d < f; d++) {
        const v = c * f + d;
        let x = 0;
        for (let E = 0; E < S; E++)
          for (let C = 0; C < S; C++) {
            const w = c + E - P, T = d + C - P;
            if (w >= 0 && w < p && T >= 0 && T < f) {
              const M = w * f + T, D = y[E * S + C];
              x += m[M] * D;
            }
          }
        g[v] = x === 2040 ? 255 : 0;
      }
    return g;
  }
  function u(m, f, p) {
    const y = [1, 1, 1, 1, 1, 1, 1, 1, 1], S = Math.round(Math.sqrt(y.length)), P = Math.floor(S / 2), g = [];
    for (let c = 0; c < p; c++)
      for (let d = 0; d < f; d++) {
        const v = c * f + d;
        let x = 0;
        for (let E = 0; E < S; E++)
          for (let C = 0; C < S; C++) {
            const w = c + E - P, T = d + C - P;
            if (w >= 0 && w < p && T >= 0 && T < f) {
              const M = w * f + T, D = y[E * S + C];
              x += m[M] * D;
            }
          }
        g[v] = x >= 1020 ? 255 : 0;
      }
    return g;
  }
  function h(m, f, p) {
    const y = [0.1111111111111111, 0.1111111111111111, 0.1111111111111111, 0.1111111111111111, 0.1111111111111111, 0.1111111111111111, 0.1111111111111111, 0.1111111111111111, 0.1111111111111111], S = Math.round(Math.sqrt(y.length)), P = Math.floor(S / 2), g = [];
    for (let c = 0; c < p; c++)
      for (let d = 0; d < f; d++) {
        const v = c * f + d;
        let x = 0;
        for (let E = 0; E < S; E++)
          for (let C = 0; C < S; C++) {
            const w = c + E - P, T = d + C - P;
            if (w >= 0 && w < p && T >= 0 && T < f) {
              const M = w * f + T, D = y[E * S + C];
              x += m[M] * D;
            }
          }
        g[v] = x;
      }
    return g;
  }
  const _ = function(m) {
    const f = this.threshold();
    let p = a(m, f);
    return p && (p = l(p, m.width, m.height), p = u(p, m.width, m.height), p = h(p, m.width, m.height), o(m, p)), m;
  };
  return Vi.Mask = _, t.Factory.addGetterSetter(e.Node, "threshold", 0, (0, i.getNumberValidator)(), t.Factory.afterSetFilter), Vi;
}
var Hi = {}, Xo;
function Du() {
  if (Xo) return Hi;
  Xo = 1, Object.defineProperty(Hi, "__esModule", { value: !0 }), Hi.Noise = void 0;
  const t = mt(), e = Lt(), i = yt(), r = function(n) {
    const s = this.noise() * 255, a = n.data, o = a.length, l = s / 2;
    for (let u = 0; u < o; u += 4)
      a[u + 0] += l - 2 * l * Math.random(), a[u + 1] += l - 2 * l * Math.random(), a[u + 2] += l - 2 * l * Math.random();
  };
  return Hi.Noise = r, t.Factory.addGetterSetter(e.Node, "noise", 0.2, (0, i.getNumberValidator)(), t.Factory.afterSetFilter), Hi;
}
var Wi = {}, Jo;
function Gu() {
  if (Jo) return Wi;
  Jo = 1, Object.defineProperty(Wi, "__esModule", { value: !0 }), Wi.Pixelate = void 0;
  const t = mt(), e = Ot(), i = Lt(), r = yt(), n = function(s) {
    let a = Math.ceil(this.pixelSize()), o = s.width, l = s.height, u = Math.ceil(o / a), h = Math.ceil(l / a), _ = s.data;
    if (a <= 0) {
      e.Util.error("pixelSize value can not be <= 0");
      return;
    }
    for (let m = 0; m < u; m += 1)
      for (let f = 0; f < h; f += 1) {
        let p = 0, y = 0, S = 0, P = 0;
        const g = m * a, c = g + a, d = f * a, v = d + a;
        let x = 0;
        for (let E = g; E < c; E += 1)
          if (!(E >= o))
            for (let C = d; C < v; C += 1) {
              if (C >= l)
                continue;
              const w = (o * C + E) * 4;
              p += _[w + 0], y += _[w + 1], S += _[w + 2], P += _[w + 3], x += 1;
            }
        p = p / x, y = y / x, S = S / x, P = P / x;
        for (let E = g; E < c; E += 1)
          if (!(E >= o))
            for (let C = d; C < v; C += 1) {
              if (C >= l)
                continue;
              const w = (o * C + E) * 4;
              _[w + 0] = p, _[w + 1] = y, _[w + 2] = S, _[w + 3] = P;
            }
      }
  };
  return Wi.Pixelate = n, t.Factory.addGetterSetter(i.Node, "pixelSize", 8, (0, r.getNumberValidator)(), t.Factory.afterSetFilter), Wi;
}
var ji = {}, Qo;
function Iu() {
  if (Qo) return ji;
  Qo = 1, Object.defineProperty(ji, "__esModule", { value: !0 }), ji.Posterize = void 0;
  const t = mt(), e = Lt(), i = yt(), r = function(n) {
    const s = Math.round(this.levels() * 254) + 1, a = n.data, o = a.length, l = 255 / s;
    for (let u = 0; u < o; u += 1)
      a[u] = Math.floor(a[u] / l) * l;
  };
  return ji.Posterize = r, t.Factory.addGetterSetter(e.Node, "levels", 0.5, (0, i.getNumberValidator)(), t.Factory.afterSetFilter), ji;
}
var qi = {}, Zo;
function Uu() {
  if (Zo) return qi;
  Zo = 1, Object.defineProperty(qi, "__esModule", { value: !0 }), qi.RGB = void 0;
  const t = mt(), e = Lt(), i = yt(), r = function(n) {
    const s = n.data, a = s.length, o = this.red(), l = this.green(), u = this.blue();
    for (let h = 0; h < a; h += 4) {
      const _ = (0.34 * s[h] + 0.5 * s[h + 1] + 0.16 * s[h + 2]) / 255;
      s[h] = _ * o, s[h + 1] = _ * l, s[h + 2] = _ * u, s[h + 3] = s[h + 3];
    }
  };
  return qi.RGB = r, t.Factory.addGetterSetter(e.Node, "red", 0, function(n) {
    return this._filterUpToDate = !1, n > 255 ? 255 : n < 0 ? 0 : Math.round(n);
  }), t.Factory.addGetterSetter(e.Node, "green", 0, function(n) {
    return this._filterUpToDate = !1, n > 255 ? 255 : n < 0 ? 0 : Math.round(n);
  }), t.Factory.addGetterSetter(e.Node, "blue", 0, i.RGBComponent, t.Factory.afterSetFilter), qi;
}
var Ki = {}, ta;
function Bu() {
  if (ta) return Ki;
  ta = 1, Object.defineProperty(Ki, "__esModule", { value: !0 }), Ki.RGBA = void 0;
  const t = mt(), e = Lt(), i = yt(), r = function(n) {
    const s = n.data, a = s.length, o = this.red(), l = this.green(), u = this.blue(), h = this.alpha();
    for (let _ = 0; _ < a; _ += 4) {
      const m = 1 - h;
      s[_] = o * h + s[_] * m, s[_ + 1] = l * h + s[_ + 1] * m, s[_ + 2] = u * h + s[_ + 2] * m;
    }
  };
  return Ki.RGBA = r, t.Factory.addGetterSetter(e.Node, "red", 0, function(n) {
    return this._filterUpToDate = !1, n > 255 ? 255 : n < 0 ? 0 : Math.round(n);
  }), t.Factory.addGetterSetter(e.Node, "green", 0, function(n) {
    return this._filterUpToDate = !1, n > 255 ? 255 : n < 0 ? 0 : Math.round(n);
  }), t.Factory.addGetterSetter(e.Node, "blue", 0, i.RGBComponent, t.Factory.afterSetFilter), t.Factory.addGetterSetter(e.Node, "alpha", 1, function(n) {
    return this._filterUpToDate = !1, n > 1 ? 1 : n < 0 ? 0 : n;
  }), Ki;
}
var zi = {}, ea;
function Vu() {
  if (ea) return zi;
  ea = 1, Object.defineProperty(zi, "__esModule", { value: !0 }), zi.Sepia = void 0;
  const t = function(e) {
    const i = e.data, r = i.length;
    for (let n = 0; n < r; n += 4) {
      const s = i[n + 0], a = i[n + 1], o = i[n + 2];
      i[n + 0] = Math.min(255, s * 0.393 + a * 0.769 + o * 0.189), i[n + 1] = Math.min(255, s * 0.349 + a * 0.686 + o * 0.168), i[n + 2] = Math.min(255, s * 0.272 + a * 0.534 + o * 0.131);
    }
  };
  return zi.Sepia = t, zi;
}
var Yi = {}, ia;
function Hu() {
  if (ia) return Yi;
  ia = 1, Object.defineProperty(Yi, "__esModule", { value: !0 }), Yi.Solarize = void 0;
  const t = function(e) {
    const i = e.data, r = e.width, n = e.height, s = r * 4;
    let a = n;
    do {
      const o = (a - 1) * s;
      let l = r;
      do {
        const u = o + (l - 1) * 4;
        let h = i[u], _ = i[u + 1], m = i[u + 2];
        h > 127 && (h = 255 - h), _ > 127 && (_ = 255 - _), m > 127 && (m = 255 - m), i[u] = h, i[u + 1] = _, i[u + 2] = m;
      } while (--l);
    } while (--a);
  };
  return Yi.Solarize = t, Yi;
}
var $i = {}, na;
function Wu() {
  if (na) return $i;
  na = 1, Object.defineProperty($i, "__esModule", { value: !0 }), $i.Threshold = void 0;
  const t = mt(), e = Lt(), i = yt(), r = function(n) {
    const s = this.threshold() * 255, a = n.data, o = a.length;
    for (let l = 0; l < o; l += 1)
      a[l] = a[l] < s ? 0 : 255;
  };
  return $i.Threshold = r, t.Factory.addGetterSetter(e.Node, "threshold", 0.5, (0, i.getNumberValidator)(), t.Factory.afterSetFilter), $i;
}
var ra;
function ju() {
  if (ra) return hi;
  ra = 1, Object.defineProperty(hi, "__esModule", { value: !0 }), hi.Konva = void 0;
  const t = cu(), e = uu(), i = fu(), r = gu(), n = pu(), s = mu(), a = _u(), o = Pl(), l = ys(), u = Tl(), h = yu(), _ = vu(), m = bu(), f = Su(), p = Al(), y = Cu(), S = wu(), P = xu(), g = Pu(), c = Tu(), d = Au(), v = Ru(), x = Eu(), E = Mu(), C = Fu(), w = ku(), T = Ou(), M = Nu(), D = Lu(), I = Du(), B = Gu(), G = Iu(), X = Uu(), b = Bu(), A = Vu(), k = Hu(), F = Wu();
  return hi.Konva = t.Konva.Util._assign(t.Konva, {
    Arc: e.Arc,
    Arrow: i.Arrow,
    Circle: r.Circle,
    Ellipse: n.Ellipse,
    Image: s.Image,
    Label: a.Label,
    Tag: a.Tag,
    Line: o.Line,
    Path: l.Path,
    Rect: u.Rect,
    RegularPolygon: h.RegularPolygon,
    Ring: _.Ring,
    Sprite: m.Sprite,
    Star: f.Star,
    Text: p.Text,
    TextPath: y.TextPath,
    Transformer: S.Transformer,
    Wedge: P.Wedge,
    Filters: {
      Blur: g.Blur,
      Brighten: c.Brighten,
      Contrast: d.Contrast,
      Emboss: v.Emboss,
      Enhance: x.Enhance,
      Grayscale: E.Grayscale,
      HSL: C.HSL,
      HSV: w.HSV,
      Invert: T.Invert,
      Kaleidoscope: M.Kaleidoscope,
      Mask: D.Mask,
      Noise: I.Noise,
      Pixelate: B.Pixelate,
      Posterize: G.Posterize,
      RGB: X.RGB,
      RGBA: b.RGBA,
      Sepia: A.Sepia,
      Solarize: k.Solarize,
      Threshold: F.Threshold
    }
  }), hi;
}
var qu = En.exports, sa;
function Ku() {
  if (sa) return En.exports;
  sa = 1, Object.defineProperty(qu, "__esModule", { value: !0 });
  const t = ju();
  return En.exports = t.Konva, En.exports;
}
var zu = Ku();
const pn = /* @__PURE__ */ ou(zu);
function qn(t) {
  if (!pn.autoDrawEnabled) {
    const e = t.getLayer() || t.getStage();
    e && e.batchDraw();
  }
}
const oa = { key: !0, style: !0, elm: !0, isRootInsert: !0 }, kr = ".vue-konva-event";
function Rl(t, e, i, r) {
  const n = t.__konvaNode, s = {};
  let a = !1;
  for (let o in i) {
    if (oa.hasOwnProperty(o))
      continue;
    const l = o.slice(0, 2) === "on", u = i[o] !== e[o];
    if (l && u) {
      let h = o.slice(2).toLowerCase();
      h.slice(0, 7) === "content" && (h = "content" + h.slice(7, 1).toUpperCase() + h.slice(8)), n == null || n.off(h + kr, i[o]);
    }
    !e.hasOwnProperty(o) && (n == null || n.setAttr(o, void 0));
  }
  for (let o in e) {
    if (oa.hasOwnProperty(o))
      continue;
    let l = o.slice(0, 2) === "on";
    const u = i[o] !== e[o];
    if (l && u) {
      let h = o.slice(2).toLowerCase();
      h.slice(0, 7) === "content" && (h = "content" + h.slice(7, 1).toUpperCase() + h.slice(8)), e[o] && (n == null || n.off(h + kr), n == null || n.on(h + kr, e[o]));
    }
    !l && (e[o] !== i[o] || r && e[o] !== (n == null ? void 0 : n.getAttr(o))) && (a = !0, s[o] = e[o]);
  }
  a && n && (n.setAttrs(s), qn(n));
}
const Xr = ".vue-konva-vmodel", aa = "onUpdate:";
function Kn(t, e) {
  t.off(Xr);
  const i = e.vnode.props || {};
  for (const r in i)
    if (r.startsWith(aa)) {
      const n = r.slice(aa.length), s = i[r];
      t.on(`${n}Change${Xr}`, () => {
        s(t.getAttr(n));
      });
    }
}
const Yu = "V";
function $u(t) {
  function e(i) {
    return i != null && i.__konvaNode ? i : i != null && i.parent ? e(i.parent) : (console.error("vue-konva error: Can not find parent node"), null);
  }
  return e(t.parent);
}
function El(t) {
  return t.component ? t.component.__konvaNode || El(t.component.subTree) : null;
}
function Xu(t) {
  const { el: e, component: i } = t, r = El(t);
  if (e != null && e.tagName && i && !r) {
    const n = e.tagName.toLowerCase();
    return console.error(
      `vue-konva error: You are trying to render "${n}" inside your component tree. Looks like it is not a Konva node. You can render only Konva components inside the Stage.`
    ), null;
  }
  return r;
}
function Ju(t) {
  const e = (n) => !!n && typeof n == "object" && "component" in n, i = (n) => Array.isArray(n), r = (n) => e(n) ? [n, ...r(n.children)] : i(n) ? n.flatMap(r) : [];
  return r(t.children);
}
function Ml(t, e) {
  const i = Ju(t), r = [];
  i.forEach((s) => {
    const a = Xu(s);
    a && r.push(a);
  });
  let n = !1;
  r.forEach((s, a) => {
    s.getZIndex() !== a && (s.setZIndex(a), n = !0);
  }), n && qn(e);
}
var fa;
const Qu = ((fa = pn.default) == null ? void 0 : fa.Stage) || pn.Stage, Zu = /* @__PURE__ */ Ye({
  name: "Stage",
  props: {
    config: {
      type: Object,
      default: function() {
        return {};
      }
    },
    __useStrictMode: {
      type: Boolean
    }
  },
  inheritAttrs: !1,
  setup(t, { attrs: e, slots: i, expose: r }) {
    const n = lr();
    if (!n) return;
    const s = /* @__PURE__ */ si({}), a = /* @__PURE__ */ Ct(null), o = new Qu({
      width: t.config.width,
      height: t.config.height,
      container: document.createElement("div")
      // Fake container. Will be replaced
    });
    n.__konvaNode = o, h();
    function l() {
      return n == null ? void 0 : n.__konvaNode;
    }
    function u() {
      return n == null ? void 0 : n.__konvaNode;
    }
    function h() {
      if (!n) return;
      const _ = s || {}, m = {
        ...e,
        ...t.config
      };
      Rl(n, m, _, t.__useStrictMode), Object.assign(s, m);
    }
    return Ke(() => {
      a.value && o.container(a.value), h(), Kn(o, n);
    }), us(() => {
      h(), Ml(n.subTree, o), Kn(o, n);
    }), vn(() => {
      o.destroy();
    }), ee(() => t.config, h, { deep: !0 }), r({
      getStage: u,
      getNode: l
    }), () => {
      var _;
      return Rc(
        "div",
        {
          ref: a,
          id: e == null ? void 0 : e.id,
          accesskey: e == null ? void 0 : e.accesskey,
          class: e == null ? void 0 : e.class,
          role: e == null ? void 0 : e.role,
          style: e == null ? void 0 : e.style,
          tabindex: e == null ? void 0 : e.tabindex,
          title: e == null ? void 0 : e.title
        },
        (_ = i.default) == null ? void 0 : _.call(i)
      );
    };
  }
}), td = ".vue-konva-event", ed = {
  Group: !0,
  Layer: !0,
  FastLayer: !0,
  Label: !0
};
function kt(t, e) {
  return /* @__PURE__ */ Ye({
    name: t,
    props: {
      config: {
        type: Object,
        default: function() {
          return {};
        }
      },
      __useStrictMode: {
        type: Boolean
      }
    },
    setup(i, { attrs: r, slots: n, expose: s }) {
      const a = lr();
      if (!a) return;
      const o = /* @__PURE__ */ si({}), l = new e();
      a.__konvaNode = l, a.vnode.__konvaNode = l, _();
      function u() {
        return a == null ? void 0 : a.__konvaNode;
      }
      function h() {
        return a == null ? void 0 : a.__konvaNode;
      }
      function _() {
        if (!a) return;
        const f = {};
        for (const S in a == null ? void 0 : a.vnode.props)
          S.slice(0, 2) === "on" && (f[S] = a.vnode.props[S]);
        const p = o || {}, y = {
          ...r,
          ...i.config,
          ...f
        };
        Rl(a, y, p, i.__useStrictMode), Object.assign(o, y);
      }
      Ke(() => {
        var p;
        const f = (p = $u(a)) == null ? void 0 : p.__konvaNode;
        f && "add" in f && f.add(l), qn(l), Kn(l, a);
      }), sr(() => {
        qn(l), l.destroy(), l.off(td), l.off(Xr);
      }), us(() => {
        _(), Ml(a.subTree, l), Kn(l, a);
      }), ee(() => i.config, _, { deep: !0 }), s({
        getStage: h,
        getNode: u
      });
      const m = ed.hasOwnProperty(t);
      return () => {
        var f;
        return m ? (f = n.default) == null ? void 0 : f.call(n) : null;
      };
    }
  });
}
const Nt = pn.default || pn, id = kt("Arc", Nt.Arc), nd = kt("Arrow", Nt.Arrow), rd = kt("Circle", Nt.Circle), sd = kt("Ellipse", Nt.Ellipse), od = kt("FastLayer", Nt.FastLayer), ad = kt("Group", Nt.Group), ld = kt("Image", Nt.Image), hd = kt("Label", Nt.Label), cd = kt("Layer", Nt.Layer), ud = kt("Line", Nt.Line), dd = kt("Path", Nt.Path), fd = kt("Rect", Nt.Rect), gd = kt("RegularPolygon", Nt.RegularPolygon), pd = kt("Ring", Nt.Ring), md = kt("Shape", Nt.Shape), _d = kt("Sprite", Nt.Sprite), yd = kt("Star", Nt.Star), vd = kt("Tag", Nt.Tag), bd = kt("Text", Nt.Text), Sd = kt("TextPath", Nt.TextPath), Cd = kt("Transformer", Nt.Transformer), wd = kt("Wedge", Nt.Wedge), xd = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Arc: id,
  Arrow: nd,
  Circle: rd,
  Ellipse: sd,
  FastLayer: od,
  Group: ad,
  Image: ld,
  Label: hd,
  Layer: cd,
  Line: ud,
  Path: dd,
  Rect: fd,
  RegularPolygon: gd,
  Ring: pd,
  Shape: md,
  Sprite: _d,
  Star: yd,
  Tag: vd,
  Text: bd,
  TextPath: Sd,
  Transformer: Cd,
  Wedge: wd
}, Symbol.toStringTag, { value: "Module" })), Pd = {
  install: (t, e) => {
    const i = (e == null ? void 0 : e.prefix) || Yu, r = e != null && e.customNodes ? Object.entries(e.customNodes).map(
      ([n, s]) => kt(n, s)
    ) : [];
    [
      Zu,
      ...Object.values(xd),
      ...r
    ].forEach((n) => {
      t.component(`${i}${n.name}`, n);
    });
  }
}, Td = {
  key: 0,
  d: "M18 6 6 18M6 6l12 12"
}, Ad = {
  key: 3,
  d: "M20 6 9 17l-5-5"
}, Rd = /* @__PURE__ */ Ye({
  __name: "Icon",
  props: {
    name: {},
    color: {}
  },
  setup(t) {
    return (e, i) => (bt(), Rt("svg", ml({
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 24 24",
      width: "20",
      height: "20",
      fill: "none",
      stroke: "currentColor",
      "stroke-width": "2",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "aria-hidden": "true",
      style: { color: t.color || "currentColor" },
      class: "pe-icon"
    }, e.$attrs), [
      t.name === "close" ? (bt(), Rt("path", Td)) : t.name === "reload" ? (bt(), Rt(Et, { key: 1 }, [
        i[0] || (i[0] = et("path", { d: "M3 12a9 9 0 0 1 15-6.7L21 8" }, null, -1)),
        i[1] || (i[1] = et("path", { d: "M21 3v5h-5" }, null, -1)),
        i[2] || (i[2] = et("path", { d: "M21 12a9 9 0 0 1-15 6.7L3 16" }, null, -1)),
        i[3] || (i[3] = et("path", { d: "M3 21v-5h5" }, null, -1))
      ], 64)) : t.name === "minimize" ? (bt(), Rt(Et, { key: 2 }, [
        i[4] || (i[4] = et("path", { d: "M4 14h6v6" }, null, -1)),
        i[5] || (i[5] = et("path", { d: "M20 10h-6V4" }, null, -1)),
        i[6] || (i[6] = et("path", { d: "M14 10l7-7" }, null, -1)),
        i[7] || (i[7] = et("path", { d: "M3 21l7-7" }, null, -1))
      ], 64)) : t.name === "success" ? (bt(), Rt("path", Ad)) : t.name === "flip" ? (bt(), Rt(Et, { key: 4 }, [
        i[8] || (i[8] = Ws('<path d="M8 3H5a2 2 0 0 0-2 2v3" data-v-c548d7a0></path><path d="M16 3h3a2 2 0 0 1 2 2v3" data-v-c548d7a0></path><path d="M8 21H5a2 2 0 0 1-2-2v-3" data-v-c548d7a0></path><path d="M16 21h3a2 2 0 0 0 2-2v-3" data-v-c548d7a0></path><path d="M12 3v18" data-v-c548d7a0></path>', 5))
      ], 64)) : t.name === "clock" ? (bt(), Rt(Et, { key: 5 }, [
        i[9] || (i[9] = et("circle", {
          cx: "12",
          cy: "12",
          r: "10"
        }, null, -1)),
        i[10] || (i[10] = et("path", { d: "M12 6v6l4 2" }, null, -1))
      ], 64)) : t.name === "sliders" ? (bt(), Rt(Et, { key: 6 }, [
        i[11] || (i[11] = Ws('<path d="M4 21v-7" data-v-c548d7a0></path><path d="M4 10V3" data-v-c548d7a0></path><path d="M12 21v-9" data-v-c548d7a0></path><path d="M12 8V3" data-v-c548d7a0></path><path d="M20 21v-5" data-v-c548d7a0></path><path d="M20 12V3" data-v-c548d7a0></path><path d="M1 14h6" data-v-c548d7a0></path><path d="M9 8h6" data-v-c548d7a0></path><path d="M17 16h6" data-v-c548d7a0></path>', 9))
      ], 64)) : t.name === "undo" ? (bt(), Rt(Et, { key: 7 }, [
        i[12] || (i[12] = et("path", { d: "M3 7v6h6" }, null, -1)),
        i[13] || (i[13] = et("path", { d: "M21 17a9 9 0 0 0-9-9 9 9 0 0 0-6.7 2.9L3 13" }, null, -1))
      ], 64)) : t.name === "redo" ? (bt(), Rt(Et, { key: 8 }, [
        i[14] || (i[14] = et("path", { d: "M21 7v6h-6" }, null, -1)),
        i[15] || (i[15] = et("path", { d: "M3 17a9 9 0 0 1 9-9 9 9 0 0 1 6.7 2.9L21 13" }, null, -1))
      ], 64)) : t.name === "image" ? (bt(), Rt(Et, { key: 9 }, [
        i[16] || (i[16] = et("rect", {
          x: "3",
          y: "3",
          width: "18",
          height: "18",
          rx: "2"
        }, null, -1)),
        i[17] || (i[17] = et("circle", {
          cx: "9",
          cy: "9",
          r: "2"
        }, null, -1)),
        i[18] || (i[18] = et("path", { d: "m21 15-3.1-3.1a2 2 0 0 0-2.8 0L6 21" }, null, -1))
      ], 64)) : t.name === "expand" ? (bt(), Rt(Et, { key: 10 }, [
        i[19] || (i[19] = et("path", { d: "M15 3h6v6" }, null, -1)),
        i[20] || (i[20] = et("path", { d: "M9 21H3v-6" }, null, -1)),
        i[21] || (i[21] = et("path", { d: "M21 3l-7 7" }, null, -1)),
        i[22] || (i[22] = et("path", { d: "M3 21l7-7" }, null, -1))
      ], 64)) : t.name === "compress" ? (bt(), Rt(Et, { key: 11 }, [
        i[23] || (i[23] = et("path", { d: "M4 14h6v6" }, null, -1)),
        i[24] || (i[24] = et("path", { d: "M20 10h-6V4" }, null, -1)),
        i[25] || (i[25] = et("path", { d: "M14 10l7-7" }, null, -1)),
        i[26] || (i[26] = et("path", { d: "M3 21l7-7" }, null, -1))
      ], 64)) : Ve("", !0)
    ], 16));
  }
}), vs = (t, e) => {
  const i = t.__vccOpts || t;
  for (const [r, n] of e)
    i[r] = n;
  return i;
}, Xt = /* @__PURE__ */ vs(Rd, [["__scopeId", "data-v-c548d7a0"]]), Ed = { class: "lds-ring" }, Md = /* @__PURE__ */ Ye({
  __name: "Loader",
  props: {
    widthProp: { default: "24px" },
    heightProp: { default: "24px" },
    borderProp: { default: "2px" }
  },
  setup(t) {
    Dc((s) => ({
      v609d0418: i.value,
      v0caf46b9: r.value,
      v030329be: n.value
    }));
    const e = t, i = /* @__PURE__ */ Ct(e.widthProp), r = /* @__PURE__ */ Ct(e.heightProp), n = /* @__PURE__ */ Ct(e.borderProp);
    return (s, a) => (bt(), Rt("div", Ed, [...a[0] || (a[0] = [
      et("div", null, null, -1),
      et("div", null, null, -1),
      et("div", null, null, -1),
      et("div", null, null, -1)
    ])]));
  }
}), Fd = /* @__PURE__ */ vs(Md, [["__scopeId", "data-v-db5bcf8f"]]), kd = { class: "pe-slider" }, Od = { class: "pe-slider__meta" }, Nd = { class: "pe-slider__label" }, Ld = { class: "pe-slider__value" }, Dd = { class: "pe-slider__row" }, Gd = {
  class: "pe-slider__rail",
  "aria-hidden": "true"
}, Id = ["min", "max", "step", "value", "aria-label"], Ud = /* @__PURE__ */ Ye({
  __name: "Slider",
  props: {
    modelValue: {},
    label: {},
    min: { default: -100 },
    max: { default: 100 },
    step: { default: 1 },
    unit: { default: "signed" }
  },
  emits: ["update:modelValue"],
  setup(t, { emit: e }) {
    const i = t, r = e, n = Hn(() => {
      const o = i.modelValue;
      return i.unit === "raw" ? String(o) : o > 0 ? `+${o}` : String(o);
    }), s = Hn(() => {
      const o = i.max - i.min || 1, l = (0 - i.min) / o * 100, u = (i.modelValue - i.min) / o * 100;
      return i.modelValue >= 0 ? {
        left: `${l}%`,
        width: `${Math.max(0, u - l)}%`
      } : {
        left: `${u}%`,
        width: `${Math.max(0, l - u)}%`
      };
    });
    function a(o) {
      r("update:modelValue", Number(o.target.value));
    }
    return (o, l) => (bt(), Rt("div", kd, [
      et("div", Od, [
        et("span", Nd, Fe(t.label), 1),
        et("span", Ld, Fe(n.value), 1)
      ]),
      et("div", Dd, [
        et("div", Gd, [
          l[0] || (l[0] = et("i", { class: "pe-slider__zero" }, null, -1)),
          et("i", {
            class: "pe-slider__fill",
            style: _n(s.value)
          }, null, 4)
        ]),
        et("input", {
          class: "pe-slider__input",
          type: "range",
          min: t.min,
          max: t.max,
          step: t.step,
          value: t.modelValue,
          "aria-label": t.label,
          onInput: a
        }, null, 40, Id)
      ])
    ]));
  }
}), ae = /* @__PURE__ */ vs(Ud, [["__scopeId", "data-v-35621ead"]]), Bd = [
  { id: 0, label: "Цвет", icon: "sliders" },
  { id: 1, label: "Поворот", icon: "reload" },
  { id: 2, label: "Кадр", icon: "minimize" },
  { id: 3, label: "Отражение", icon: "flip" }
], Xi = {
  COLOR: 0,
  ROTATE: 1,
  CROP: 2,
  FLIP: 3,
  HISTORY: 4
};
function Vd(t) {
  const e = new Date(t), i = e.getHours(), r = String(e.getMinutes()).padStart(2, "0");
  return `${i}:${r}`;
}
function Fl(t) {
  return new Promise((e, i) => {
    const r = new Image();
    r.onload = () => e(r), r.onerror = () => i(new Error(`Failed to load image: ${t}`)), r.src = t;
  });
}
const la = 28;
function Hd() {
  const t = /* @__PURE__ */ Ct(!0), e = /* @__PURE__ */ Ct(null), i = /* @__PURE__ */ Ct(), r = /* @__PURE__ */ Ct(), n = /* @__PURE__ */ Ct(), s = /* @__PURE__ */ Ct(), a = /* @__PURE__ */ Ct(), o = /* @__PURE__ */ Ct(), l = /* @__PURE__ */ Ct(), u = /* @__PURE__ */ Ct({ width: 400, height: 400 }), h = /* @__PURE__ */ Ct({
    x: 0,
    y: 0,
    image: new Image(),
    width: 0,
    height: 0,
    rotation: 0,
    offsetX: 0,
    offsetY: 0,
    scaleX: 1,
    scaleY: 1
  });
  function _(g, c, d = 0) {
    if (!l.value) return 1;
    const v = Math.max(1, l.value.clientWidth - la * 2), x = Math.max(1, l.value.clientHeight - la * 2), E = (d % 360 + 360) % 360, C = E === 90 || E === 270, w = C ? c : g, T = C ? g : c;
    return w > v || T > x ? Math.min(v / w, x / T) : 1;
  }
  function m(g = {}) {
    if (!e.value || !l.value) return;
    const c = e.value, d = c.naturalWidth || c.width, v = c.naturalHeight || c.height;
    u.value.width = Math.max(1, l.value.clientWidth), u.value.height = Math.max(1, l.value.clientHeight), h.value.width = d, h.value.height = v, h.value.offsetX = d / 2, h.value.offsetY = v / 2, h.value.x = u.value.width / 2, h.value.y = u.value.height / 2, g.resetRotation && (h.value.rotation = 0);
    const x = _(d, v, h.value.rotation);
    if (g.resetRotation)
      h.value.scaleX = x, h.value.scaleY = x;
    else {
      const E = Math.sign(h.value.scaleX || 1) || 1, C = Math.sign(h.value.scaleY || 1) || 1;
      h.value.scaleX = x * E, h.value.scaleY = x * C;
    }
  }
  function f() {
    var c, d;
    m(), p();
    const g = (c = s.value) == null ? void 0 : c.getNode();
    (d = g == null ? void 0 : g.getLayer()) == null || d.batchDraw();
  }
  function p() {
    if (!e.value || !l.value || !s.value) return;
    const g = e.value, c = s.value.getNode(), d = g.naturalWidth || g.width, v = g.naturalHeight || g.height;
    c.width(d), c.height(v), c.offsetX(d / 2), c.offsetY(v / 2), c.x(u.value.width / 2), c.y(u.value.height / 2);
    const x = Math.sign(h.value.scaleX || c.scaleX() || 1) || 1, E = Math.sign(h.value.scaleY || c.scaleY() || 1) || 1, C = _(d, v, Number(h.value.rotation) || 0), w = C * x, T = C * E;
    h.value.scaleX = w, h.value.scaleY = T, c.scaleX(w), c.scaleY(T), c.clearCache();
  }
  function y() {
    var d;
    const g = (d = s.value) == null ? void 0 : d.getNode();
    if (!g) return null;
    const c = g.getClientRect({ skipShadow: !0, skipStroke: !0 });
    return {
      x: c.x,
      y: c.y,
      width: c.width,
      height: c.height
    };
  }
  async function S(g) {
    t.value = !0;
    try {
      const c = await Fl(g);
      e.value = c, h.value.image = c, m({ resetRotation: !0 }), await Nn(), p();
    } finally {
      t.value = !1, await Nn(), requestAnimationFrame(() => f());
    }
  }
  function P() {
    var g;
    return ((g = s.value) == null ? void 0 : g.getNode()) ?? null;
  }
  return {
    isLoading: t,
    imageObj: e,
    stageRef: i,
    layerRef: r,
    dimLayer: n,
    imageNode: s,
    tranRef: a,
    rectRef: o,
    stageWrapper: l,
    configStage: u,
    imageConfig: h,
    setParams: m,
    scale: p,
    layout: f,
    loadImage: S,
    getKonvaImage: P,
    getImageBounds: y
  };
}
function Wd(t) {
  return Ca() ? ($l(t), !0) : !1;
}
function zn(t) {
  return typeof t == "function" ? t() : nt(t);
}
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
const Yn = () => {
};
function kl(t, e) {
  function i(...r) {
    return new Promise((n, s) => {
      Promise.resolve(t(() => e.apply(this, r), { fn: e, thisArg: this, args: r })).then(n).catch(s);
    });
  }
  return i;
}
function jd(t, e = {}) {
  let i, r, n = Yn;
  const s = (o) => {
    clearTimeout(o), n(), n = Yn;
  };
  return (o) => {
    const l = zn(t), u = zn(e.maxWait);
    return i && s(i), l <= 0 || u !== void 0 && u <= 0 ? (r && (s(r), r = null), Promise.resolve(o())) : new Promise((h, _) => {
      n = e.rejectOnCancel ? _ : h, u && !r && (r = setTimeout(() => {
        i && s(i), r = null, h(o());
      }, u)), i = setTimeout(() => {
        r && s(r), r = null, h(o());
      }, l);
    });
  };
}
function qd(...t) {
  let e = 0, i, r = !0, n = Yn, s, a, o, l, u;
  !/* @__PURE__ */ It(t[0]) && typeof t[0] == "object" ? { delay: a, trailing: o = !0, leading: l = !0, rejectOnCancel: u = !1 } = t[0] : [a, o = !0, l = !0, u = !1] = t;
  const h = () => {
    i && (clearTimeout(i), i = void 0, n(), n = Yn);
  };
  return (m) => {
    const f = zn(a), p = Date.now() - e, y = () => s = m();
    return h(), f <= 0 ? (e = Date.now(), y()) : (p > f && (l || !r) ? (e = Date.now(), y()) : o && (s = new Promise((S, P) => {
      n = u ? P : S, i = setTimeout(() => {
        e = Date.now(), r = !0, S(y()), h();
      }, Math.max(0, f - p));
    })), !l && !i && (i = setTimeout(() => r = !0, f)), r = !1, s);
  };
}
function Kd(t, e = 200, i = {}) {
  return kl(
    jd(e, i),
    t
  );
}
function zd(t, e = 200, i = !1, r = !0, n = !1) {
  return kl(
    qd(e, i, r, n),
    t
  );
}
function Yd(t) {
  const e = /* @__PURE__ */ Ct(), i = () => {
    e.value && URL.revokeObjectURL(e.value), e.value = void 0;
  };
  return ee(
    () => zn(t),
    (r) => {
      i(), r && (e.value = URL.createObjectURL(r));
    },
    { immediate: !0 }
  ), Wd(i), /* @__PURE__ */ Fn(e);
}
const Jr = {
  temperature: 0,
  tint: 0,
  exposure: 0,
  contrast: 0,
  highlights: 0,
  shadows: 0,
  whites: 0,
  blacks: 0,
  vibrance: 0,
  saturation: 0
};
function Ol(t) {
  return Object.keys(Jr).every(
    (e) => t[e] === 0
  );
}
function He(t) {
  return t < 0 ? 0 : t > 1 ? 1 : t;
}
function Or(t) {
  const e = t / 255;
  return e <= 0.04045 ? e / 12.92 : ((e + 0.055) / 1.055) ** 2.4;
}
function Nr(t) {
  const e = He(t);
  return (e <= 31308e-7 ? e * 12.92 : 1.055 * e ** (1 / 2.4) - 0.055) * 255;
}
function $d(t, e, i) {
  t /= 255, e /= 255, i /= 255;
  const r = Math.max(t, e, i), n = Math.min(t, e, i), s = (r + n) / 2;
  if (r === n) return { h: 0, s: 0, l: s };
  const a = r - n, o = s > 0.5 ? a / (2 - r - n) : a / (r + n);
  let l = 0;
  switch (r) {
    case t:
      l = ((e - i) / a + (e < i ? 6 : 0)) / 6;
      break;
    case e:
      l = ((i - t) / a + 2) / 6;
      break;
    default:
      l = ((t - e) / a + 4) / 6;
  }
  return { h: l, s: o, l: s };
}
function Lr(t, e, i) {
  let r = i;
  return r < 0 && (r += 1), r > 1 && (r -= 1), r < 1 / 6 ? t + (e - t) * 6 * r : r < 1 / 2 ? e : r < 2 / 3 ? t + (e - t) * (2 / 3 - r) * 6 : t;
}
function Xd(t, e, i) {
  if (e === 0) {
    const s = Math.round(i * 255);
    return [s, s, s];
  }
  const r = i < 0.5 ? i * (1 + e) : i + e - i * e, n = 2 * i - r;
  return [
    Math.round(Lr(n, r, t + 1 / 3) * 255),
    Math.round(Lr(n, r, t) * 255),
    Math.round(Lr(n, r, t - 1 / 3) * 255)
  ];
}
function Tn(t, e, i) {
  const r = He((i - t) / (e - t));
  return r * r * (3 - 2 * r);
}
function Jd(t, e, i, r) {
  let n = Or(t), s = Or(e), a = Or(i);
  const o = r.temperature / 100, l = r.tint / 100;
  n *= 1 + o * 0.18 - l * 0.06, s *= 1 + l * 0.12, a *= 1 - o * 0.22 - l * 0.04;
  const h = 2 ** (r.exposure / 100 * 2);
  n *= h, s *= h, a *= h;
  const _ = r.contrast / 100, m = 0.18, f = 1 + _ * 0.85;
  n = (n - m) * f + m, s = (s - m) * f + m, a = (a - m) * f + m;
  let p = 0.2126 * n + 0.7152 * s + 0.0722 * a;
  const y = r.highlights / 100, S = r.shadows / 100, P = Tn(0.35, 0.95, p), g = 1 - Tn(0.05, 0.55, p), c = 1 - P * y * 0.65, d = 1 + g * S * 0.75;
  n *= c * d, s *= c * d, a *= c * d, p = 0.2126 * n + 0.7152 * s + 0.0722 * a;
  const v = r.whites / 100, x = r.blacks / 100, E = Tn(0.55, 1, p), C = 1 - Tn(0, 0.45, p), w = 1 + E * v * 0.45, T = C * x * 0.12;
  n = n * w + T, s = s * w + T, a = a * w + T;
  let M = Nr(n), D = Nr(s), I = Nr(a);
  const B = r.vibrance / 100, G = r.saturation / 100;
  if (B !== 0 || G !== 0) {
    const X = $d(M, D, I);
    let b = X.s;
    if (B !== 0) {
      const A = X.h > 0.02 && X.h < 0.12 ? 0.45 : 1, k = B * (1 - b) * A;
      b = He(b + k);
    }
    G !== 0 && (b = He(b * (1 + G))), [M, D, I] = Xd(X.h, b, X.l);
  }
  return [
    Math.round(He(M / 255) * 255),
    Math.round(He(D / 255) * 255),
    Math.round(He(I / 255) * 255)
  ];
}
function ha(t, e) {
  const i = t.naturalWidth || t.width, r = t.naturalHeight || t.height;
  let n = i, s = r;
  if (e && Number.isFinite(e) && Math.max(i, r) > e) {
    const l = e / Math.max(i, r);
    n = Math.max(1, Math.round(i * l)), s = Math.max(1, Math.round(r * l));
  }
  const a = document.createElement("canvas");
  a.width = n, a.height = s;
  const o = a.getContext("2d", { willReadFrequently: !0 });
  if (!o) throw new Error("2D context unavailable");
  return o.drawImage(t, 0, 0, n, s), { canvas: a, ctx: o, w: n, h: s };
}
function ca(t, e, i = {}) {
  if (Ol(e)) {
    const { canvas: u } = ha(t, i.maxEdge);
    return u.toDataURL(i.mimeType ?? "image/jpeg", i.quality ?? 0.92);
  }
  const { canvas: r, ctx: n, w: s, h: a } = ha(t, i.maxEdge), o = n.getImageData(0, 0, s, a), l = o.data;
  for (let u = 0; u < l.length; u += 4) {
    const [h, _, m] = Jd(l[u], l[u + 1], l[u + 2], e);
    l[u] = h, l[u + 1] = _, l[u + 2] = m;
  }
  return n.putImageData(o, 0, 0), r.toDataURL(i.mimeType ?? "image/jpeg", i.quality ?? 0.92);
}
const Qd = 1400;
function Zd(t) {
  const { imageObj: e, imageConfig: i, layout: r, dirty: n } = t, s = /* @__PURE__ */ si({ ...Jr }), a = /* @__PURE__ */ Ct(!1), o = /* @__PURE__ */ Ct(!1);
  let l = 0;
  const u = Hn(() => !Ol(s));
  function h() {
    e.value && (i.value.image = e.value, r());
  }
  async function _() {
    const S = e.value;
    if (!S) return;
    const P = ++l;
    if (a.value || !u.value) {
      h();
      return;
    }
    o.value = !0;
    try {
      const g = ca(S, { ...s }, { maxEdge: Qd });
      if (P !== l) return;
      const c = await Fl(g);
      if (P !== l) return;
      i.value.image = c, r();
    } finally {
      P === l && (o.value = !1);
    }
  }
  const m = Kd(() => {
    _();
  }, 50);
  ee(
    s,
    () => {
      n.value = u.value, m();
    },
    { deep: !0 }
  ), ee(a, () => {
    _();
  });
  function f() {
    a.value = !1, Object.assign(s, Jr), n.value = !1, h();
  }
  function p(S) {
    a.value = S;
  }
  async function y() {
    const S = e.value;
    return !S || !u.value ? null : (a.value = !1, ca(S, { ...s }, { maxEdge: 1 / 0, quality: 0.95 }));
  }
  return {
    params: s,
    comparing: a,
    rendering: o,
    hasAdjustments: u,
    reset: f,
    setComparing: p,
    bakeToDataURL: y,
    showBase: h,
    schedulePreview: m
  };
}
function tf() {
  const t = /* @__PURE__ */ Ct([]), e = /* @__PURE__ */ Ct(0), i = /* @__PURE__ */ Ct("Настройки цвета");
  function r(a, o) {
    t.value.push({
      title: a,
      src: o,
      date: Date.now()
    }), e.value = t.value.length - 1;
  }
  function n() {
    t.value.length > 1 && e.value != null && t.value.splice(e.value + 1);
  }
  function s(a) {
    return e.value == null || t.value.length <= 1 ? !1 : a < 0 ? e.value > 0 : e.value < t.value.length - 1;
  }
  return {
    historyImage: t,
    historyIndex: e,
    title: i,
    addHistory: r,
    truncateAfterCurrent: n,
    canNavigate: s
  };
}
const ei = 24, ua = 16, ef = 22;
function da(t, e) {
  let { x: i, y: r, width: n, height: s, rotation: a } = t;
  n < 0 && (i += n, n = Math.abs(n)), s < 0 && (r += s, s = Math.abs(s));
  const o = e.x + e.width, l = e.y + e.height;
  return n = Math.min(Math.max(n, ei), e.width), s = Math.min(Math.max(s, ei), e.height), i = Math.max(e.x, Math.min(i, o - n)), r = Math.max(e.y, Math.min(r, l - s)), Math.abs(i - e.x) < 1 && (i = e.x), Math.abs(r - e.y) < 1 && (r = e.y), Math.abs(i + n - o) < 1 && (n = o - i), Math.abs(r + s - l) < 1 && (s = l - r), n < ei || s < ei ? null : { x: i, y: r, width: n, height: s, rotation: a };
}
function nf(t, e, i, r, n) {
  const s = Math.max(ei, Math.abs(i)), a = Math.max(ei, Math.abs(r)), o = n.x + n.width - s, l = n.y + n.height - a;
  return {
    x: Math.max(n.x, Math.min(t, Math.max(n.x, o))),
    y: Math.max(n.y, Math.min(e, Math.max(n.y, l)))
  };
}
function rf(t) {
  const {
    imageNode: e,
    imageConfig: i,
    stageRef: r,
    dimLayer: n,
    rectRef: s,
    tranRef: a,
    scale: o,
    getImageBounds: l
  } = t, u = /* @__PURE__ */ Ct(!1);
  let h = !1;
  const _ = /* @__PURE__ */ Ct({
    x: 0,
    y: 0,
    width: 0,
    height: 0,
    offsetX: 0,
    offsetY: 0,
    fill: "rgba(0,0,0,0.01)",
    stroke: "#3B82F6",
    strokeWidth: 1,
    strokeScaleEnabled: !1,
    draggable: !0,
    hitStrokeWidth: 0
  }), m = /* @__PURE__ */ Ct({
    listening: !1,
    perfectDrawEnabled: !1,
    sceneFunc: (d) => {
      var w, T;
      const v = (w = r.value) == null ? void 0 : w.getNode(), x = (T = s.value) == null ? void 0 : T.getNode();
      if (!v || !x) return;
      const E = Math.max(1, x.width() * x.scaleX()), C = Math.max(1, x.height() * x.scaleY());
      d.save(), d.beginPath(), d.rect(0, 0, v.width(), v.height()), d.rect(x.x(), x.y(), E, C), d.closePath(), d.fillStyle = "rgba(0, 0, 0, 0.45)", d.fill("evenodd"), d.restore();
    }
  }), f = /* @__PURE__ */ Ct({
    nodes: [],
    centeredScaling: !1,
    rotateEnabled: !1,
    keepRatio: !1,
    ignoreStroke: !0,
    borderStroke: "#3B82F6",
    anchorSize: ua,
    anchorCornerRadius: ua / 2,
    anchorStroke: "#fff",
    anchorStrokeWidth: 1,
    anchorFill: "#3B82F6",
    enabledAnchors: [
      "top-left",
      "top-center",
      "top-right",
      "middle-right",
      "bottom-right",
      "bottom-center",
      "bottom-left",
      "middle-left"
    ],
    anchorStyleFunc: (d) => {
      d.hitFunc((v) => {
        const x = ef / 2;
        v.beginPath(), v.arc(0, 0, x, 0, Math.PI * 2), v.closePath(), v.fillStrokeShape(d);
      });
    },
    boundBoxFunc: (d, v) => {
      const x = l();
      return x ? da(v, x) ?? d : d;
    }
  });
  function p() {
    const d = l();
    d && (_.value.x = d.x, _.value.y = d.y, _.value.width = d.width, _.value.height = d.height, u.value = !0);
  }
  function y() {
    var C, w, T, M, D;
    const d = (C = s.value) == null ? void 0 : C.getNode(), v = (w = a.value) == null ? void 0 : w.getNode(), x = l();
    if (!d || !x) return;
    const E = da(
      {
        x: d.x(),
        y: d.y(),
        width: d.width() * d.scaleX(),
        height: d.height() * d.scaleY(),
        rotation: d.rotation()
      },
      x
    );
    E && (d.setAttrs({
      x: E.x,
      y: E.y,
      width: E.width,
      height: E.height,
      scaleX: 1,
      scaleY: 1
    }), v == null || v.forceUpdate(), (M = (T = n.value) == null ? void 0 : T.getNode()) == null || M.batchDraw(), (D = v == null ? void 0 : v.getLayer()) == null || D.batchDraw());
  }
  async function S() {
    var E, C, w, T;
    await Nn(), await new Promise((M) => requestAnimationFrame(() => M()));
    const d = (E = s.value) == null ? void 0 : E.getNode(), v = (C = a.value) == null ? void 0 : C.getNode(), x = (w = n.value) == null ? void 0 : w.getNode();
    !d || !v || (x == null || x.clipFunc(void 0), d.setAttrs({
      x: _.value.x,
      y: _.value.y,
      width: _.value.width,
      height: _.value.height,
      scaleX: 1,
      scaleY: 1
    }), v.nodes([d]), v.forceUpdate(), (T = v.getLayer()) == null || T.batchDraw(), x == null || x.batchDraw(), h || (d.on("transform", y), d.on("transformend", y), d.on("dragmove", () => {
      var G;
      const M = l();
      if (!M) return;
      const D = d.width() * d.scaleX(), I = d.height() * d.scaleY(), B = nf(d.x(), d.y(), D, I, M);
      d.position({ x: B.x, y: B.y }), v.forceUpdate(), (G = v.getLayer()) == null || G.batchDraw(), x == null || x.batchDraw();
    }), h = !0));
  }
  function P() {
    var x, E;
    const d = (x = s.value) == null ? void 0 : x.getNode();
    d && h && (d.off("transform"), d.off("transformend"), d.off("dragmove")), h = !1;
    const v = (E = a.value) == null ? void 0 : E.getNode();
    v == null || v.nodes([]);
  }
  ee(u, (d) => {
    if (!d) {
      P();
      return;
    }
    S();
  }), ee([s, a, n], () => {
    u.value && S();
  }), vn(() => {
    P();
  });
  const g = zd((d) => {
    var x;
    const v = (x = e.value) == null ? void 0 : x.getNode();
    v && (d === "x" ? v.to({ scaleX: -v.scaleX() }) : v.to({ scaleY: -v.scaleY() }));
  }, 1e3);
  function c(d) {
    var E, C;
    const v = ((i.value.rotation + d) % 360 + 360) % 360;
    i.value.rotation = v;
    const x = (E = e.value) == null ? void 0 : E.getNode();
    x && x.rotation(v), o(), (C = x == null ? void 0 : x.getLayer()) == null || C.batchDraw();
  }
  return {
    selected: u,
    rectCrop: _,
    tranConfig: f,
    dimShapeConfig: m,
    selectImage: p,
    flip: g,
    rotate: c
  };
}
function sf(t, e) {
  const i = /* @__PURE__ */ Ct(!1), r = /* @__PURE__ */ Ct(Xi.COLOR), n = Hd(), s = tf(), a = Zd({
    imageObj: n.imageObj,
    imageConfig: n.imageConfig,
    layout: n.layout,
    dirty: i
  }), o = rf({
    imageNode: n.imageNode,
    imageConfig: n.imageConfig,
    stageRef: n.stageRef,
    dimLayer: n.dimLayer,
    rectRef: n.rectRef,
    tranRef: n.tranRef,
    scale: n.scale,
    getImageBounds: n.getImageBounds
  });
  async function l(d) {
    const v = s.historyImage.value[d];
    v && (a.reset(), await n.loadImage(v.src), n.layout());
  }
  async function u(d) {
    s.historyIndex.value != null && (d > 0 && s.historyIndex.value >= s.historyImage.value.length - 1 || d < 0 && s.historyIndex.value <= 0 || (s.historyIndex.value += d, await l(s.historyIndex.value)));
  }
  async function h(d) {
    s.historyIndex.value = d, await l(d);
  }
  async function _(d = s.title.value) {
    var w;
    const v = n.getKonvaImage();
    if (!v) return;
    const x = v.attrs.scaleX, E = v.attrs.scaleY;
    v.attrs.scaleX = v.attrs.scaleX < 0 ? -1 : 1, v.attrs.scaleY = v.attrs.scaleY < 0 ? -1 : 1;
    let C;
    if (n.tranRef.value && o.selected.value) {
      v.clearCache();
      const T = n.tranRef.value.getNode();
      C = v.toDataURL({
        x: (T.x() - (n.configStage.value.width - o.rectCrop.value.width) / 2) / x + v.x() - n.imageConfig.value.offsetX,
        y: (T.y() - (n.configStage.value.height - o.rectCrop.value.height) / 2) / E + v.y() - n.imageConfig.value.offsetY,
        width: T.width() / x,
        height: T.height() / E,
        mimeType: "image/jpeg"
      });
    } else
      v.clearCache(), C = v.toDataURL({ mimeType: "image/jpeg" });
    o.selected.value = !1, s.addHistory(d, C), await n.loadImage(C), a.reset(), (w = v.getLayer()) == null || w.batchDraw(), n.layout();
  }
  async function m() {
    if (!a.hasAdjustments.value) return;
    const d = await a.bakeToDataURL();
    d && (s.addHistory("Коррекция", d), await n.loadImage(d), a.reset(), i.value = !1, n.layout());
  }
  async function f() {
    if (i.value) {
      if (r.value === Xi.COLOR && a.hasAdjustments.value) {
        await m();
        return;
      }
      await _(s.title.value), i.value = !1;
    }
  }
  async function p(d, v) {
    (r.value === Xi.HISTORY || i.value) && s.historyImage.value.length > 1 && s.historyIndex.value != null && s.truncateAfterCurrent(), await f(), r.value = d, s.title.value = v, i.value = !1;
  }
  function y(d) {
    i.value = !0, o.rotate(d);
  }
  function S(d) {
    o.flip(d), i.value = !0;
  }
  function P() {
    o.selectImage(), i.value = !0;
  }
  async function g() {
    await p(Xi.CROP, "Обрезка");
  }
  async function c() {
    await f();
    const d = n.getKonvaImage();
    d && (a.showBase(), e("saveImage", {
      src: d.toDataURL({ mimeType: "image/jpeg" })
    }));
  }
  return Ke(async () => {
    var d;
    await n.loadImage(t.defImg), s.addHistory("Оригинал", (d = n.imageObj.value) == null ? void 0 : d.src), s.title.value = "Цвет";
  }), Ke(() => {
    const d = new ResizeObserver(() => {
      n.isLoading.value || n.layout();
    });
    requestAnimationFrame(() => {
      n.stageWrapper.value && d.observe(n.stageWrapper.value);
    }), window.addEventListener("resize", n.layout), vn(() => {
      d.disconnect(), window.removeEventListener("resize", n.layout);
    });
  }), {
    EDITOR_TABS: Bd,
    TAB: Xi,
    dirty: i,
    activeTab: r,
    formatHistoryTime: Vd,
    ...n,
    historyImage: s.historyImage,
    historyIndex: s.historyIndex,
    title: s.title,
    colorParams: a.params,
    hasAdjustments: a.hasAdjustments,
    comparing: a.comparing,
    colorRendering: a.rendering,
    resetColor: a.reset,
    setComparing: a.setComparing,
    applyColorAdjustments: m,
    selected: o.selected,
    rectCrop: o.rectCrop,
    tranConfig: o.tranConfig,
    dimShapeConfig: o.dimShapeConfig,
    navigateHistory: u,
    restoreHistory: h,
    changeTab: p,
    markDirtyAndRotate: y,
    markDirtyAndFlip: S,
    markDirtyAndCrop: P,
    applyCrop: g,
    onSaveExport: c
  };
}
const of = { class: "pe-menubar" }, af = { class: "pe-menubar__left" }, lf = { class: "pe-doc-badge" }, hf = ["disabled"], cf = ["disabled"], uf = { class: "pe-menubar__center" }, df = { class: "pe-menubar__title" }, ff = { class: "pe-menubar__right" }, gf = ["title", "aria-pressed"], pf = { class: "pe-body" }, mf = {
  class: "pe-toolbox",
  "aria-label": "Инструменты"
}, _f = ["aria-label", "onClick"], yf = {
  class: "pe-tooltip",
  role: "tooltip"
}, vf = { class: "pe-workspace" }, bf = { class: "pe-panels" }, Sf = { class: "pe-panel-block" }, Cf = { class: "pe-panel-body" }, wf = { class: "pe-section" }, xf = { class: "pe-section" }, Pf = { class: "pe-section" }, Tf = { class: "pe-color-actions" }, Af = ["disabled"], Rf = ["disabled"], Ef = ["disabled"], Mf = { class: "pe-panel-block pe-panel-block--grow" }, Ff = { class: "pe-panel-body pe-history" }, kf = ["onClick"], Of = { class: "pe-history-row__text" }, Nf = { class: "pe-statusbar" }, Lf = { key: 0 }, Df = /* @__PURE__ */ Ye({
  __name: "PhotoEditor",
  props: {
    defImg: {},
    root: {},
    innerWidth: {}
  },
  emits: ["saveImage", "close"],
  setup(t, { emit: e }) {
    const i = t, r = e, {
      EDITOR_TABS: n,
      TAB: s,
      activeTab: a,
      historyImage: o,
      historyIndex: l,
      isLoading: u,
      stageWrapper: h,
      stageRef: _,
      layerRef: m,
      dimLayer: f,
      imageNode: p,
      rectRef: y,
      tranRef: S,
      configStage: P,
      imageConfig: g,
      rectCrop: c,
      tranConfig: d,
      dimShapeConfig: v,
      selected: x,
      colorParams: E,
      hasAdjustments: C,
      comparing: w,
      resetColor: T,
      setComparing: M,
      applyColorAdjustments: D,
      formatHistoryTime: I,
      navigateHistory: B,
      restoreHistory: G,
      changeTab: X,
      markDirtyAndRotate: b,
      markDirtyAndFlip: A,
      markDirtyAndCrop: k,
      applyCrop: F,
      onSaveExport: L
    } = sf(i, r), W = /* @__PURE__ */ Ct(!1);
    let U = "", Q = "";
    function rt(Z) {
      W.value = Z;
    }
    function K() {
      rt(!W.value);
    }
    function O(Z) {
      Z.key === "Escape" && W.value && (Z.preventDefault(), rt(!1));
    }
    ee(W, (Z) => {
      typeof document > "u" || (Z ? (U = document.body.style.overflow, Q = document.documentElement.style.overflow, document.body.style.overflow = "hidden", document.documentElement.style.overflow = "hidden") : (document.body.style.overflow = U, document.documentElement.style.overflow = Q));
    }), Ke(() => {
      window.addEventListener("keydown", O);
    }), vn(() => {
      window.removeEventListener("keydown", O), W.value && (document.body.style.overflow = U, document.documentElement.style.overflow = Q);
    });
    const j = () => n.find((Z) => Z.id === a.value);
    return (Z, V) => {
      var Y;
      const lt = Xe("v-image"), R = Xe("v-layer"), N = Xe("v-shape"), H = Xe("v-rect"), z = Xe("v-transformer"), $ = Xe("v-stage");
      return bt(), ti(kh, {
        to: "body",
        disabled: !W.value
      }, [
        et("div", {
          class: Me(["photo-editor-shell", { "is-fullscreen": W.value }]),
          style: _n(W.value ? void 0 : { display: "contents" })
        }, [
          et("div", {
            class: Me(["pe-app", { "is-fullscreen": W.value }])
          }, [
            et("header", of, [
              et("div", af, [
                et("span", lf, [
                  dt(Xt, { name: "image" }),
                  V[27] || (V[27] = et("span", null, "photo", -1))
                ]),
                V[28] || (V[28] = et("div", { class: "pe-menubar__sep" }, null, -1)),
                et("button", {
                  type: "button",
                  class: "pe-icon-btn",
                  title: "Отменить",
                  disabled: nt(o).length <= 1 || nt(l) === 0,
                  onClick: V[0] || (V[0] = (q) => nt(B)(-1))
                }, [
                  dt(Xt, { name: "undo" })
                ], 8, hf),
                et("button", {
                  type: "button",
                  class: "pe-icon-btn",
                  title: "Повторить",
                  disabled: nt(o).length <= 1 || nt(l) === nt(o).length - 1,
                  onClick: V[1] || (V[1] = (q) => nt(B)(1))
                }, [
                  dt(Xt, { name: "redo" })
                ], 8, cf)
              ]),
              et("div", uf, [
                et("span", df, Fe(((Y = j()) == null ? void 0 : Y.label) ?? "Редактор"), 1)
              ]),
              et("div", ff, [
                et("button", {
                  type: "button",
                  class: "pe-icon-btn",
                  title: W.value ? "Свернуть" : "На весь экран",
                  "aria-pressed": W.value,
                  onClick: K
                }, [
                  dt(Xt, {
                    name: W.value ? "compress" : "expand"
                  }, null, 8, ["name"])
                ], 8, gf),
                et("button", {
                  type: "button",
                  class: "pe-btn pe-btn--ghost",
                  onClick: V[2] || (V[2] = (q) => r("close"))
                }, "Закрыть"),
                et("button", {
                  type: "button",
                  class: "pe-btn pe-btn--primary",
                  onClick: V[3] || (V[3] = //@ts-ignore
                  (...q) => nt(L) && nt(L)(...q))
                }, "Сохранить")
              ])
            ]),
            et("div", pf, [
              et("aside", mf, [
                (bt(!0), Rt(Et, null, Ns(nt(n), (q) => (bt(), Rt("button", {
                  key: q.id,
                  type: "button",
                  class: Me(["pe-tool", { "is-active": nt(a) === q.id }]),
                  "aria-label": q.label,
                  onClick: (it) => nt(X)(q.id, q.label)
                }, [
                  dt(Xt, {
                    name: q.icon
                  }, null, 8, ["name"]),
                  et("span", yf, Fe(q.label), 1)
                ], 10, _f))), 128))
              ]),
              et("main", vf, [
                et("div", {
                  ref_key: "stageWrapper",
                  ref: h,
                  class: Me(["pe-stage", { "is-comparing": nt(w) }])
                }, [
                  nt(u) ? (bt(), ti(Fd, { key: 0 })) : Ve("", !0),
                  xh(dt($, {
                    ref_key: "stageRef",
                    ref: _,
                    config: nt(P)
                  }, {
                    default: Ji(() => [
                      dt(R, {
                        ref_key: "layerRef",
                        ref: m
                      }, {
                        default: Ji(() => [
                          dt(lt, {
                            ref_key: "imageNode",
                            ref: p,
                            config: nt(g)
                          }, null, 8, ["config"])
                        ]),
                        _: 1
                      }, 512),
                      nt(x) ? (bt(), ti(R, {
                        key: 0,
                        ref_key: "dimLayer",
                        ref: f
                      }, {
                        default: Ji(() => [
                          dt(N, { config: nt(v) }, null, 8, ["config"]),
                          dt(H, {
                            ref_key: "rectRef",
                            ref: y,
                            config: nt(c)
                          }, null, 8, ["config"])
                        ]),
                        _: 1
                      }, 512)) : Ve("", !0),
                      nt(x) ? (bt(), ti(R, { key: 1 }, {
                        default: Ji(() => [
                          dt(z, {
                            ref_key: "tranRef",
                            ref: S,
                            config: nt(d)
                          }, null, 8, ["config"])
                        ]),
                        _: 1
                      })) : Ve("", !0)
                    ]),
                    _: 1
                  }, 8, ["config"]), [
                    [Lc, !nt(u)]
                  ])
                ], 2)
              ]),
              et("aside", bf, [
                et("section", Sf, [
                  V[40] || (V[40] = et("header", { class: "pe-panel-head" }, "Свойства", -1)),
                  et("div", Cf, [
                    nt(a) === nt(s).COLOR ? (bt(), Rt(Et, { key: 0 }, [
                      et("div", wf, [
                        V[29] || (V[29] = et("div", { class: "pe-section__title" }, "Баланс белого", -1)),
                        dt(ae, {
                          modelValue: nt(E).temperature,
                          "onUpdate:modelValue": V[4] || (V[4] = (q) => nt(E).temperature = q),
                          label: "Температура"
                        }, null, 8, ["modelValue"]),
                        dt(ae, {
                          modelValue: nt(E).tint,
                          "onUpdate:modelValue": V[5] || (V[5] = (q) => nt(E).tint = q),
                          label: "Оттенок"
                        }, null, 8, ["modelValue"])
                      ]),
                      et("div", xf, [
                        V[30] || (V[30] = et("div", { class: "pe-section__title" }, "Тон", -1)),
                        dt(ae, {
                          modelValue: nt(E).exposure,
                          "onUpdate:modelValue": V[6] || (V[6] = (q) => nt(E).exposure = q),
                          label: "Экспозиция"
                        }, null, 8, ["modelValue"]),
                        dt(ae, {
                          modelValue: nt(E).contrast,
                          "onUpdate:modelValue": V[7] || (V[7] = (q) => nt(E).contrast = q),
                          label: "Контраст"
                        }, null, 8, ["modelValue"]),
                        dt(ae, {
                          modelValue: nt(E).highlights,
                          "onUpdate:modelValue": V[8] || (V[8] = (q) => nt(E).highlights = q),
                          label: "Света"
                        }, null, 8, ["modelValue"]),
                        dt(ae, {
                          modelValue: nt(E).shadows,
                          "onUpdate:modelValue": V[9] || (V[9] = (q) => nt(E).shadows = q),
                          label: "Тени"
                        }, null, 8, ["modelValue"]),
                        dt(ae, {
                          modelValue: nt(E).whites,
                          "onUpdate:modelValue": V[10] || (V[10] = (q) => nt(E).whites = q),
                          label: "Белые"
                        }, null, 8, ["modelValue"]),
                        dt(ae, {
                          modelValue: nt(E).blacks,
                          "onUpdate:modelValue": V[11] || (V[11] = (q) => nt(E).blacks = q),
                          label: "Чёрные"
                        }, null, 8, ["modelValue"])
                      ]),
                      et("div", Pf, [
                        V[31] || (V[31] = et("div", { class: "pe-section__title" }, "Присутствие", -1)),
                        dt(ae, {
                          modelValue: nt(E).vibrance,
                          "onUpdate:modelValue": V[12] || (V[12] = (q) => nt(E).vibrance = q),
                          label: "Красочность"
                        }, null, 8, ["modelValue"]),
                        dt(ae, {
                          modelValue: nt(E).saturation,
                          "onUpdate:modelValue": V[13] || (V[13] = (q) => nt(E).saturation = q),
                          label: "Насыщенность"
                        }, null, 8, ["modelValue"])
                      ]),
                      et("div", Tf, [
                        et("button", {
                          type: "button",
                          class: "pe-action",
                          disabled: !nt(C),
                          onMousedown: V[14] || (V[14] = (q) => nt(M)(!0)),
                          onMouseup: V[15] || (V[15] = (q) => nt(M)(!1)),
                          onMouseleave: V[16] || (V[16] = (q) => nt(M)(!1)),
                          onTouchstart: V[17] || (V[17] = Yr((q) => nt(M)(!0), ["prevent"])),
                          onTouchend: V[18] || (V[18] = Yr((q) => nt(M)(!1), ["prevent"]))
                        }, " До / После ", 40, Af),
                        et("button", {
                          type: "button",
                          class: "pe-action",
                          disabled: !nt(C),
                          onClick: V[19] || (V[19] = //@ts-ignore
                          (...q) => nt(T) && nt(T)(...q))
                        }, " Сбросить ", 8, Rf),
                        et("button", {
                          type: "button",
                          class: "pe-action pe-action--accent",
                          disabled: !nt(C) || nt(w),
                          onClick: V[20] || (V[20] = //@ts-ignore
                          (...q) => nt(D) && nt(D)(...q))
                        }, [
                          dt(Xt, { name: "success" }),
                          V[32] || (V[32] = Re(" Применить ", -1))
                        ], 8, Ef)
                      ])
                    ], 64)) : nt(a) === nt(s).ROTATE ? (bt(), Rt(Et, { key: 1 }, [
                      et("button", {
                        type: "button",
                        class: "pe-action",
                        onClick: V[21] || (V[21] = (q) => nt(b)(90))
                      }, [
                        dt(Xt, { name: "reload" }),
                        V[33] || (V[33] = Re(" Вправо 90° ", -1))
                      ]),
                      et("button", {
                        type: "button",
                        class: "pe-action",
                        onClick: V[22] || (V[22] = (q) => nt(b)(-90))
                      }, [
                        dt(Xt, {
                          name: "reload",
                          style: { transform: "scale(-1, 1)" }
                        }),
                        V[34] || (V[34] = Re(" Влево 90° ", -1))
                      ])
                    ], 64)) : nt(a) === nt(s).CROP ? (bt(), Rt(Et, { key: 2 }, [
                      et("button", {
                        type: "button",
                        class: "pe-action",
                        onClick: V[23] || (V[23] = //@ts-ignore
                        (...q) => nt(k) && nt(k)(...q))
                      }, [
                        dt(Xt, { name: "minimize" }),
                        V[35] || (V[35] = Re(" Выделить кадр ", -1))
                      ]),
                      et("button", {
                        type: "button",
                        class: "pe-action pe-action--accent",
                        onClick: V[24] || (V[24] = //@ts-ignore
                        (...q) => nt(F) && nt(F)(...q))
                      }, [
                        dt(Xt, { name: "success" }),
                        V[36] || (V[36] = Re(" Применить ", -1))
                      ]),
                      V[37] || (V[37] = et("p", { class: "pe-hint" }, "Потяните углы и стороны рамки, затем нажмите «Применить».", -1))
                    ], 64)) : nt(a) === nt(s).FLIP ? (bt(), Rt(Et, { key: 3 }, [
                      et("button", {
                        type: "button",
                        class: "pe-action",
                        onClick: V[25] || (V[25] = (q) => nt(A)("x"))
                      }, [
                        dt(Xt, {
                          name: "flip",
                          class: "rotate-90"
                        }),
                        V[38] || (V[38] = Re(" По горизонтали ", -1))
                      ]),
                      et("button", {
                        type: "button",
                        class: "pe-action",
                        onClick: V[26] || (V[26] = (q) => nt(A)("y"))
                      }, [
                        dt(Xt, { name: "flip" }),
                        V[39] || (V[39] = Re(" По вертикали ", -1))
                      ])
                    ], 64)) : Ve("", !0)
                  ])
                ]),
                et("section", Mf, [
                  V[41] || (V[41] = et("header", { class: "pe-panel-head" }, "История", -1)),
                  et("div", Ff, [
                    (bt(!0), Rt(Et, null, Ns(nt(o), (q, it) => (bt(), Rt("button", {
                      key: q.date,
                      type: "button",
                      class: Me(["pe-history-row", { "is-current": it === nt(l) }]),
                      onClick: (tt) => nt(G)(it)
                    }, [
                      dt(Xt, { name: "clock" }),
                      et("span", Of, [
                        et("strong", null, Fe(q.title), 1),
                        et("small", null, Fe(nt(I)(q.date)), 1)
                      ])
                    ], 10, kf))), 128))
                  ])
                ])
              ])
            ]),
            et("footer", Nf, [
              et("span", null, Fe(nt(o).length) + " шаг(ов)", 1),
              nt(x) ? (bt(), Rt("span", Lf, "режим кадрирования")) : Ve("", !0)
            ])
          ], 2)
        ], 6)
      ], 8, ["disabled"]);
    };
  }
});
function Gf(t, e) {
  const i = document.createElement("a");
  i.setAttribute("href", e), i.setAttribute("download", t), i.setAttribute("target", "_blank"), i.style.display = "none", document.body.appendChild(i), i.click(), document.body.removeChild(i);
}
function If() {
  const t = /* @__PURE__ */ Ct(null), e = /* @__PURE__ */ Ct(!1), i = /* @__PURE__ */ Ct();
  function r() {
    var o;
    (o = i.value) == null || o.click();
  }
  function n(o) {
    var h;
    const l = o.target, u = (h = l.files) == null ? void 0 : h[0];
    u && (e.value = !1, t.value = Yd(u).value ?? null, l.value = "", e.value = !0);
  }
  function s() {
    t.value = null, e.value = !1;
  }
  function a(o) {
    Gf("photo-editor.jpg", o.src);
  }
  return {
    file: t,
    isLoad: e,
    filesRef: i,
    submitFile: r,
    handleFileUpload: n,
    onClose: s,
    saveImage: a
  };
}
const Uf = { class: "photo-editor-shell" }, Bf = { class: "pe-empty__card" }, Vf = /* @__PURE__ */ Ye({
  __name: "PhotoEditorShell",
  setup(t) {
    const { file: e, isLoad: i, filesRef: r, submitFile: n, handleFileUpload: s, onClose: a, saveImage: o } = If();
    return (l, u) => (bt(), Rt("div", Uf, [
      nt(i) ? nt(e) ? (bt(), ti(Df, {
        key: 1,
        "def-img": nt(e),
        onSaveImage: nt(o),
        onClose: nt(a)
      }, null, 8, ["def-img", "onSaveImage", "onClose"])) : Ve("", !0) : (bt(), Rt("div", {
        key: 0,
        class: "pe-empty",
        onClick: u[2] || (u[2] = //@ts-ignore
        (...h) => nt(n) && nt(n)(...h))
      }, [
        et("div", Bf, [
          dt(Xt, {
            name: "image",
            class: "pe-empty__icon"
          }),
          u[3] || (u[3] = et("h3", null, "Открыть изображение", -1)),
          u[4] || (u[4] = et("p", null, "Нажмите, чтобы выбрать файл — JPEG, PNG, WebP", -1)),
          et("button", {
            type: "button",
            class: "pe-btn pe-btn--primary",
            onClick: u[0] || (u[0] = Yr(
              //@ts-ignore
              (...h) => nt(n) && nt(n)(...h),
              ["stop"]
            ))
          }, " Выбрать файл ")
        ]),
        et("input", {
          type: "file",
          ref_key: "filesRef",
          ref: r,
          accept: "image/*",
          style: { display: "none" },
          onChange: u[1] || (u[1] = //@ts-ignore
          (...h) => nt(s) && nt(s)(...h))
        }, null, 544)
      ]))
    ]));
  }
});
function h0(t) {
  const e = nu(Vf);
  return e.use(Pd), e.mount(t), {
    app: e,
    unmount: () => e.unmount()
  };
}
export {
  h0 as mountPhotoEditor
};
