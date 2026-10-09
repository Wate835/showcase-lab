/**
* @vue/shared v3.5.43
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
// @__NO_SIDE_EFFECTS__
function is(t) {
  const e = /* @__PURE__ */ Object.create(null);
  for (const i of t.split(",")) e[i] = 1;
  return (i) => i in e;
}
const At = {}, We = [], re = () => {
}, Sa = () => !1, Qn = (t) => t.charCodeAt(0) === 111 && t.charCodeAt(1) === 110 && // uppercase letter
(t.charCodeAt(2) > 122 || t.charCodeAt(2) < 97), Zn = (t) => t.startsWith("onUpdate:"), Bt = Object.assign, ns = (t, e) => {
  const i = t.indexOf(e);
  i > -1 && t.splice(i, 1);
}, Wl = Object.prototype.hasOwnProperty, xt = (t, e) => Wl.call(t, e), ut = Array.isArray, ke = (t) => yn(t) === "[object Map]", kn = (t) => yn(t) === "[object Set]", Ts = (t) => yn(t) === "[object Date]", ft = (t) => typeof t == "function", kt = (t) => typeof t == "string", fe = (t) => typeof t == "symbol", Tt = (t) => t !== null && typeof t == "object", Ca = (t) => (Tt(t) || ft(t)) && ft(t.then) && ft(t.catch), wa = Object.prototype.toString, yn = (t) => wa.call(t), jl = (t) => yn(t).slice(8, -1), xa = (t) => yn(t) === "[object Object]", rs = (t) => kt(t) && t !== "NaN" && t[0] !== "-" && "" + parseInt(t, 10) === t, nn = /* @__PURE__ */ is(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), tr = (t) => {
  const e = /* @__PURE__ */ Object.create(null);
  return ((i) => e[i] || (e[i] = t(i)));
}, ql = /-\w/g, Yt = tr(
  (t) => t.replace(ql, (e) => e.slice(1).toUpperCase())
), Kl = /\B([A-Z])/g, ze = tr(
  (t) => t.replace(Kl, "-$1").toLowerCase()
), er = tr((t) => t.charAt(0).toUpperCase() + t.slice(1)), gr = tr(
  (t) => t ? `on${er(t)}` : ""
), de = (t, e) => !Object.is(t, e), pr = (t, ...e) => {
  for (let i = 0; i < t.length; i++)
    t[i](...e);
}, Pa = (t, e, i, r = !1) => {
  Object.defineProperty(t, e, {
    configurable: !0,
    enumerable: !1,
    writable: r,
    value: i
  });
}, zl = (t) => {
  const e = parseFloat(t);
  return isNaN(e) ? t : e;
};
let As;
const ir = () => As || (As = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function vn(t) {
  if (ut(t)) {
    const e = {};
    for (let i = 0; i < t.length; i++) {
      const r = t[i], n = kt(r) ? Jl(r) : vn(r);
      if (n)
        for (const s in n)
          e[s] = n[s];
    }
    return e;
  } else if (kt(t) || Tt(t))
    return t;
}
const Yl = /;(?![^(]*\))/g, $l = /:([^]+)/, Xl = /"(?:[^"\\]|\\[^])*"|'(?:[^'\\]|\\[^])*'|\\[^]|\/\*[^]*?\*\//g;
function Jl(t) {
  const e = {};
  return t.replace(Xl, (i) => i.startsWith("/*") ? "" : i).split(Yl).forEach((i) => {
    if (i) {
      const r = i.split($l);
      r.length > 1 && (e[r[0].trim()] = r[1].trim());
    }
  }), e;
}
function Fe(t) {
  let e = "";
  if (kt(t))
    e = t;
  else if (ut(t))
    for (let i = 0; i < t.length; i++) {
      const r = Fe(t[i]);
      r && (e += r + " ");
    }
  else if (Tt(t))
    for (const i in t)
      t[i] && (e += i + " ");
  return e.trim();
}
const Ql = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", Zl = /* @__PURE__ */ is(Ql);
function Ta(t) {
  return !!t || t === "";
}
function tc(t, e, i) {
  if (t.length !== e.length) return !1;
  let r = !0;
  for (let n = 0; r && n < t.length; n++)
    r = nr(t[n], e[n], i);
  return r;
}
function Rs(t, e, i) {
  if (t.size !== e.size) return !1;
  const r = Array.from(e), n = new Uint8Array(r.length);
  for (const s of t) {
    let a = -1;
    for (let o = 0; o < r.length; o++)
      if (!n[o] && nr(s, r[o], i)) {
        a = o;
        break;
      }
    if (a < 0) return !1;
    n[a] = 1;
  }
  return !0;
}
function ec(t, e, i) {
  let r = ke(t), n = ke(e);
  if (r || n || (r = kn(t), n = kn(e), r || n))
    return r && n ? Rs(t, e, i) : !1;
  const s = Object.keys(t).length, a = Object.keys(e).length;
  if (s !== a)
    return !1;
  for (const o in t) {
    const l = t.hasOwnProperty(o), u = e.hasOwnProperty(o);
    if (l && !u || !l && u || !nr(t[o], e[o], i))
      return !1;
  }
  return String(t) === String(e);
}
function Es(t, e, i, r) {
  i || (i = [/* @__PURE__ */ new Map(), /* @__PURE__ */ new Map()]);
  const [n, s] = i;
  if (n.has(t) || s.has(e))
    return n.get(t) === e && s.get(e) === t;
  n.set(t, e), s.set(e, t);
  const a = r(t, e, i);
  return n.delete(t), s.delete(e), a;
}
function nr(t, e, i) {
  if (t === e) return !0;
  let r = Ts(t), n = Ts(e);
  return r || n ? r && n ? t.getTime() === e.getTime() : !1 : (r = fe(t), n = fe(e), r || n ? t === e : (r = ut(t), n = ut(e), r || n ? r && n ? Es(t, e, i, tc) : !1 : (r = Tt(t), n = Tt(e), r || n ? !r || !n ? !1 : Es(t, e, i, ec) : String(t) === String(e))));
}
const Aa = (t) => !!(t && t.__v_isRef === !0), Pt = (t) => kt(t) ? t : t == null ? "" : ut(t) || Tt(t) && (t.toString === wa || !ft(t.toString)) ? Aa(t) ? Pt(t.value) : JSON.stringify(t, Ra, 2) : String(t), Ra = (t, e) => Aa(e) ? Ra(t, e.value) : ke(e) ? {
  [`Map(${e.size})`]: [...e.entries()].reduce(
    (i, [r, n], s) => (i[mr(r, s) + " =>"] = n, i),
    {}
  )
} : kn(e) ? {
  [`Set(${e.size})`]: [...e.values()].map((i) => mr(i))
} : fe(e) ? mr(e) : Tt(e) && !ut(e) && !xa(e) ? String(e) : e, mr = (t, e = "") => {
  var i;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    fe(t) ? `Symbol(${(i = t.description) != null ? i : e})` : t
  );
};
function ic(t) {
  return t == null ? "initial" : typeof t == "string" ? t === "" ? " " : t : String(t);
}
/**
* @vue/reactivity v3.5.43
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let Gt;
class nc {
  // TODO isolatedDeclarations "__v_skip"
  constructor(e = !1) {
    this.detached = e, this._active = !0, this._on = 0, this.effects = [], this.cleanups = [], this._isPaused = !1, this._warnOnRun = !0, this.__v_skip = !0, !e && Gt && (Gt.active ? (this.parent = Gt, this.index = (Gt.scopes || (Gt.scopes = [])).push(
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
      const i = Gt;
      try {
        return Gt = this, e();
      } finally {
        Gt = i;
      }
    }
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    ++this._on === 1 && (this.prevScope = Gt, Gt = this);
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    if (this._on > 0 && --this._on === 0) {
      if (Gt === this)
        Gt = this.prevScope;
      else {
        let e = Gt;
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
function Ea() {
  return Gt;
}
function rc(t, e = !1) {
  Gt && Gt.cleanups.push(t);
}
let Rt;
const _r = /* @__PURE__ */ new WeakSet();
class Ma {
  constructor(e) {
    this.fn = e, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, Gt && (Gt.active ? Gt.effects.push(this) : this.flags &= -2);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, _r.has(this) && (_r.delete(this), this.trigger()));
  }
  /**
   * @internal
   */
  notify() {
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || ka(this);
  }
  run() {
    if (!(this.flags & 1))
      return this.fn();
    this.flags |= 2, Ms(this), Oa(this);
    const e = Rt, i = se;
    Rt = this, se = !0;
    try {
      return this.fn();
    } finally {
      Na(this), Rt = e, se = i, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let e = this.deps; e; e = e.nextDep)
        as(e);
      this.deps = this.depsTail = void 0, Ms(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    this.flags & 64 ? _r.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  /**
   * @internal
   */
  runIfDirty() {
    Ur(this) && this.run();
  }
  get dirty() {
    return Ur(this);
  }
}
let Fa = 0, rn, sn;
function ka(t, e = !1) {
  if (t.flags |= 8, e) {
    t.next = sn, sn = t;
    return;
  }
  t.next = rn, rn = t;
}
function ss() {
  Fa++;
}
function os() {
  if (--Fa > 0)
    return;
  if (sn) {
    let e = sn;
    for (sn = void 0; e; ) {
      const i = e.next;
      e.next = void 0, e.flags &= -9, e = i;
    }
  }
  let t;
  for (; rn; ) {
    let e = rn;
    for (rn = void 0; e; ) {
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
function Oa(t) {
  for (let e = t.deps; e; e = e.nextDep)
    e.version = -1, e.prevActiveLink = e.dep.activeLink, e.dep.activeLink = e;
}
function Na(t) {
  let e, i = t.depsTail, r = i;
  for (; r; ) {
    const n = r.prevDep;
    r.version === -1 ? (r === i && (i = n), as(r), sc(r)) : e = r, r.dep.activeLink = r.prevActiveLink, r.prevActiveLink = void 0, r = n;
  }
  t.deps = e, t.depsTail = i;
}
function Ur(t) {
  for (let e = t.deps; e; e = e.nextDep)
    if (e.dep.version !== e.version || e.dep.computed && (La(e.dep.computed) || e.dep.version !== e.version))
      return !0;
  return !!t._dirty;
}
function La(t) {
  if (t.flags & 4 && !(t.flags & 16) || (t.flags &= -17, t.globalVersion === hn) || (t.globalVersion = hn, !t.isSSR && t.flags & 128 && (!t.deps && !t._dirty || !Ur(t))))
    return;
  t.flags |= 2;
  const e = t.dep, i = Rt, r = se;
  Rt = t, se = !0;
  try {
    Oa(t);
    const n = t.fn(t._value);
    (e.version === 0 || de(n, t._value)) && (t.flags |= 128, t._value = n, e.version++);
  } catch (n) {
    throw e.version++, n;
  } finally {
    Rt = i, se = r, Na(t), t.flags &= -3;
  }
}
function as(t, e = !1) {
  const { dep: i, prevSub: r, nextSub: n } = t;
  if (r && (r.nextSub = n, t.prevSub = void 0), n && (n.prevSub = r, t.nextSub = void 0), i.subs === t && (i.subs = r, !r && i.computed)) {
    i.computed.flags &= -5;
    for (let s = i.computed.deps; s; s = s.nextDep)
      as(s, !0);
  }
  !e && !--i.sc && i.map && i.map.delete(i.key);
}
function sc(t) {
  const { prevDep: e, nextDep: i } = t;
  e && (e.nextDep = i, t.prevDep = void 0), i && (i.prevDep = e, t.nextDep = void 0);
}
let se = !0;
const Da = [];
function Ce() {
  Da.push(se), se = !1;
}
function we() {
  const t = Da.pop();
  se = t === void 0 ? !0 : t;
}
function Ms(t) {
  const { cleanup: e } = t;
  if (t.cleanup = void 0, e) {
    const i = Rt;
    Rt = void 0;
    try {
      e();
    } finally {
      Rt = i;
    }
  }
}
let hn = 0;
class oc {
  constructor(e, i) {
    this.sub = e, this.dep = i, this.version = i.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class ls {
  // TODO isolatedDeclarations "__v_skip"
  constructor(e) {
    this.computed = e, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0;
  }
  track(e) {
    if (!Rt || !se || Rt === this.computed)
      return;
    let i = this.activeLink;
    if (i === void 0 || i.sub !== Rt)
      i = this.activeLink = new oc(Rt, this), Rt.deps ? (i.prevDep = Rt.depsTail, Rt.depsTail.nextDep = i, Rt.depsTail = i) : Rt.deps = Rt.depsTail = i, Ga(i);
    else if (i.version === -1 && (i.version = this.version, i.nextDep)) {
      const r = i.nextDep;
      r.prevDep = i.prevDep, i.prevDep && (i.prevDep.nextDep = r), i.prevDep = Rt.depsTail, i.nextDep = void 0, Rt.depsTail.nextDep = i, Rt.depsTail = i, Rt.deps === i && (Rt.deps = r);
    }
    return i;
  }
  trigger(e) {
    this.version++, hn++, this.notify(e);
  }
  notify(e) {
    ss();
    try {
      for (let i = this.subs; i; i = i.prevSub)
        i.sub.notify() && i.sub.dep.notify();
    } finally {
      os();
    }
  }
}
function Ga(t) {
  if (t.dep.sc++, t.sub.flags & 4) {
    const e = t.dep.computed;
    if (e && !t.dep.subs) {
      e.flags |= 20;
      for (let r = e.deps; r; r = r.nextDep)
        Ga(r);
    }
    const i = t.dep.subs;
    i !== t && (t.prevSub = i, i && (i.nextSub = t)), t.dep.subs = t;
  }
}
const Br = /* @__PURE__ */ new WeakMap(), je = /* @__PURE__ */ Symbol(
  ""
), Vr = /* @__PURE__ */ Symbol(
  ""
), un = /* @__PURE__ */ Symbol(
  ""
);
function Ht(t, e, i) {
  if (se && Rt) {
    let r = Br.get(t);
    r || Br.set(t, r = /* @__PURE__ */ new Map());
    let n = r.get(i);
    n || (r.set(i, n = new ls()), n.map = r, n.key = i), n.track();
  }
}
function be(t, e, i, r, n, s) {
  const a = Br.get(t);
  if (!a) {
    hn++;
    return;
  }
  const o = (l) => {
    l && l.trigger();
  };
  if (ss(), e === "clear")
    a.forEach(o);
  else {
    const l = ut(t), u = l && rs(i);
    if (l && i === "length") {
      const h = Number(r);
      a.forEach((_, m) => {
        (m === "length" || m === un || !fe(m) && m >= h) && o(_);
      });
    } else
      switch ((i !== void 0 || a.has(void 0)) && o(a.get(i)), u && o(a.get(un)), e) {
        case "add":
          l ? u && o(a.get("length")) : (o(a.get(je)), ke(t) && o(a.get(Vr)));
          break;
        case "delete":
          l || (o(a.get(je)), ke(t) && o(a.get(Vr)));
          break;
        case "set":
          ke(t) && o(a.get(je));
          break;
      }
  }
  os();
}
function $e(t) {
  const e = /* @__PURE__ */ wt(t);
  return e === t || (Ht(e, "iterate", un), /* @__PURE__ */ ie(t)) ? e : /* @__PURE__ */ ge(t) ? /* @__PURE__ */ Oe(t) ? e.map((i) => Ne(ne(i))) : e.map(Ne) : e.map(ne);
}
function rr(t) {
  return Ht(t = /* @__PURE__ */ wt(t), "iterate", un), t;
}
function he(t, e) {
  return /* @__PURE__ */ ge(t) ? Ne(/* @__PURE__ */ Oe(t) ? ne(e) : e) : ne(e);
}
const ac = {
  __proto__: null,
  [Symbol.iterator]() {
    return yr(this, Symbol.iterator, (t) => he(this, t));
  },
  concat(...t) {
    return $e(this).concat(
      ...t.map((e) => ut(e) ? $e(e) : e)
    );
  },
  entries() {
    return yr(this, "entries", (t) => (t[1] = he(this, t[1]), t));
  },
  every(t, e) {
    return pe(this, "every", t, e, void 0, arguments);
  },
  filter(t, e) {
    return pe(
      this,
      "filter",
      t,
      e,
      (i) => i.map((r) => he(this, r)),
      arguments
    );
  },
  find(t, e) {
    return pe(
      this,
      "find",
      t,
      e,
      (i) => he(this, i),
      arguments
    );
  },
  findIndex(t, e) {
    return pe(this, "findIndex", t, e, void 0, arguments);
  },
  findLast(t, e) {
    return pe(
      this,
      "findLast",
      t,
      e,
      (i) => he(this, i),
      arguments
    );
  },
  findLastIndex(t, e) {
    return pe(this, "findLastIndex", t, e, void 0, arguments);
  },
  // flat, flatMap could benefit from ARRAY_ITERATE but are not straight-forward to implement
  forEach(t, e) {
    return pe(this, "forEach", t, e, void 0, arguments);
  },
  includes(...t) {
    return vr(this, "includes", t);
  },
  indexOf(...t) {
    return vr(this, "indexOf", t);
  },
  join(t) {
    return $e(this).join(t);
  },
  // keys() iterator only reads `length`, no optimization required
  lastIndexOf(...t) {
    return vr(this, "lastIndexOf", t);
  },
  map(t, e) {
    return pe(this, "map", t, e, void 0, arguments);
  },
  pop() {
    return ai(this, "pop");
  },
  push(...t) {
    return ai(this, "push", t);
  },
  reduce(t, ...e) {
    return Fs(this, "reduce", t, e);
  },
  reduceRight(t, ...e) {
    return Fs(this, "reduceRight", t, e);
  },
  shift() {
    return ai(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(t, e) {
    return pe(this, "some", t, e, void 0, arguments);
  },
  splice(...t) {
    return ai(this, "splice", t);
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
    return ai(this, "unshift", t);
  },
  values() {
    return yr(this, "values", (t) => he(this, t));
  }
};
function yr(t, e, i) {
  const r = rr(t), n = r[e]();
  return r !== t && !/* @__PURE__ */ ie(t) && (n._next = n.next, n.next = () => {
    const s = n._next();
    return s.done || (s.value = i(s.value)), s;
  }), n;
}
const lc = Array.prototype;
function pe(t, e, i, r, n, s) {
  const a = rr(t), o = a !== t && !/* @__PURE__ */ ie(t), l = a[e];
  if (l !== lc[e]) {
    const _ = l.apply(t, s);
    return o ? ne(_) : _;
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
function Fs(t, e, i, r) {
  const n = rr(t), s = n !== t && !/* @__PURE__ */ ie(t);
  let a = i, o = !1;
  n !== t && (s ? (o = r.length === 0, a = function(u, h, _) {
    return o && (o = !1, u = he(t, u)), i.call(this, u, he(t, h), _, t);
  }) : i.length > 3 && (a = function(u, h, _) {
    return i.call(this, u, h, _, t);
  }));
  const l = n[e](a, ...r);
  return o ? he(t, l) : l;
}
function vr(t, e, i) {
  const r = /* @__PURE__ */ wt(t);
  Ht(r, "iterate", un);
  const n = r[e](...i);
  return (n === -1 || n === !1) && /* @__PURE__ */ us(i[0]) ? (i[0] = /* @__PURE__ */ wt(i[0]), r[e](...i)) : n;
}
function ai(t, e, i = []) {
  Ce(), ss();
  const r = (/* @__PURE__ */ wt(t))[e].apply(t, i);
  return os(), we(), r;
}
const cc = /* @__PURE__ */ is("__proto__,__v_isRef,__isVue"), Ia = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((t) => t !== "arguments" && t !== "caller").map((t) => Symbol[t]).filter(fe)
);
function hc(t) {
  fe(t) || (t = String(t));
  const e = /* @__PURE__ */ wt(this);
  return Ht(e, "has", t), e.hasOwnProperty(t);
}
class Ua {
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
      return r === (n ? s ? bc : Wa : s ? Ha : Va).get(e) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(e) === Object.getPrototypeOf(r) ? e : void 0;
    const a = ut(e);
    if (!n) {
      let l;
      if (a && (l = ac[i]))
        return l;
      if (i === "hasOwnProperty")
        return hc;
    }
    const o = Reflect.get(
      e,
      i,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      /* @__PURE__ */ Ut(e) ? e : r
    );
    if ((fe(i) ? Ia.has(i) : cc(i)) || (n || Ht(e, "get", i), s))
      return o;
    if (/* @__PURE__ */ Ut(o)) {
      const l = a && rs(i) ? o : o.value;
      return n && Tt(l) ? /* @__PURE__ */ On(l) : l;
    }
    return Tt(o) ? n ? /* @__PURE__ */ On(o) : /* @__PURE__ */ oi(o) : o;
  }
}
class Ba extends Ua {
  constructor(e = !1) {
    super(!1, e);
  }
  set(e, i, r, n) {
    let s = e[i];
    const a = ut(e) && rs(i);
    if (!this._isShallow) {
      const u = /* @__PURE__ */ ge(s);
      if (!/* @__PURE__ */ ie(r) && !/* @__PURE__ */ ge(r) && (s = /* @__PURE__ */ wt(s), r = /* @__PURE__ */ wt(r)), !a && /* @__PURE__ */ Ut(s) && !/* @__PURE__ */ Ut(r))
        return u || (s.value = r), !0;
    }
    const o = a ? Number(i) < e.length : xt(e, i), l = Reflect.set(
      e,
      i,
      r,
      /* @__PURE__ */ Ut(e) ? e : n
    );
    return e === /* @__PURE__ */ wt(n) && l && (o ? de(r, s) && be(e, "set", i, r) : be(e, "add", i, r)), l;
  }
  deleteProperty(e, i) {
    const r = xt(e, i);
    e[i];
    const n = Reflect.deleteProperty(e, i);
    return n && r && be(e, "delete", i, void 0), n;
  }
  has(e, i) {
    const r = Reflect.has(e, i);
    return (!fe(i) || !Ia.has(i)) && Ht(e, "has", i), r;
  }
  ownKeys(e) {
    return Ht(
      e,
      "iterate",
      ut(e) ? "length" : je
    ), Reflect.ownKeys(e);
  }
}
class uc extends Ua {
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
const dc = /* @__PURE__ */ new Ba(), fc = /* @__PURE__ */ new uc(), gc = /* @__PURE__ */ new Ba(!0);
const Hr = (t) => t, xn = (t) => Reflect.getPrototypeOf(t);
function pc(t, e, i) {
  return function(...r) {
    const n = this.__v_raw, s = /* @__PURE__ */ wt(n), a = ke(s), o = t === "entries" || t === Symbol.iterator && a, l = t === "keys" && a, u = n[t](...r), h = i ? Hr : e ? Ne : ne;
    return !e && Ht(
      s,
      "iterate",
      l ? Vr : je
    ), Bt(
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
function Pn(t) {
  return function(...e) {
    return t === "delete" ? !1 : t === "clear" ? void 0 : this;
  };
}
function mc(t, e) {
  const i = {
    get(n) {
      const s = this.__v_raw, a = /* @__PURE__ */ wt(s), o = /* @__PURE__ */ wt(n);
      t || (de(n, o) && Ht(a, "get", n), Ht(a, "get", o));
      const { has: l } = xn(a), u = e ? Hr : t ? Ne : ne;
      if (l.call(a, n))
        return u(s.get(n));
      if (l.call(a, o))
        return u(s.get(o));
      s !== a && s.get(n);
    },
    get size() {
      const n = this.__v_raw;
      return !t && Ht(/* @__PURE__ */ wt(n), "iterate", je), n.size;
    },
    has(n) {
      const s = this.__v_raw, a = /* @__PURE__ */ wt(s), o = /* @__PURE__ */ wt(n);
      return t || (de(n, o) && Ht(a, "has", n), Ht(a, "has", o)), n === o ? s.has(n) : s.has(n) || s.has(o);
    },
    forEach(n, s) {
      const a = this, o = a.__v_raw, l = /* @__PURE__ */ wt(o), u = e ? Hr : t ? Ne : ne;
      return !t && Ht(l, "iterate", je), o.forEach((h, _) => n.call(s, u(h), u(_), a));
    }
  };
  return Bt(
    i,
    t ? {
      add: Pn("add"),
      set: Pn("set"),
      delete: Pn("delete"),
      clear: Pn("clear")
    } : {
      add(n) {
        const s = /* @__PURE__ */ wt(this), a = xn(s), o = /* @__PURE__ */ wt(n), l = !e && !/* @__PURE__ */ ie(n) && !/* @__PURE__ */ ge(n) ? o : n;
        return a.has.call(s, l) || de(n, l) && a.has.call(s, n) || de(o, l) && a.has.call(s, o) || (s.add(l), be(s, "add", l, l)), this;
      },
      set(n, s) {
        !e && !/* @__PURE__ */ ie(s) && !/* @__PURE__ */ ge(s) && (s = /* @__PURE__ */ wt(s));
        const a = /* @__PURE__ */ wt(this), { has: o, get: l } = xn(a);
        let u = o.call(a, n);
        u || (n = /* @__PURE__ */ wt(n), u = o.call(a, n));
        const h = l.call(a, n);
        return a.set(n, s), u ? de(s, h) && be(a, "set", n, s) : be(a, "add", n, s), this;
      },
      delete(n) {
        const s = /* @__PURE__ */ wt(this), { has: a, get: o } = xn(s);
        let l = a.call(s, n);
        l || (n = /* @__PURE__ */ wt(n), l = a.call(s, n)), o && o.call(s, n);
        const u = s.delete(n);
        return l && be(s, "delete", n, void 0), u;
      },
      clear() {
        const n = /* @__PURE__ */ wt(this), s = n.size !== 0, a = n.clear();
        return s && be(
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
    i[n] = pc(n, t, e);
  }), i;
}
function cs(t, e) {
  const i = mc(t, e);
  return (r, n, s) => n === "__v_isReactive" ? !t : n === "__v_isReadonly" ? t : n === "__v_raw" ? r : Reflect.get(
    xt(i, n) && n in r ? i : r,
    n,
    s
  );
}
const _c = {
  get: /* @__PURE__ */ cs(!1, !1)
}, yc = {
  get: /* @__PURE__ */ cs(!1, !0)
}, vc = {
  get: /* @__PURE__ */ cs(!0, !1)
};
const Va = /* @__PURE__ */ new WeakMap(), Ha = /* @__PURE__ */ new WeakMap(), Wa = /* @__PURE__ */ new WeakMap(), bc = /* @__PURE__ */ new WeakMap();
function Sc(t) {
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
function oi(t) {
  return /* @__PURE__ */ ge(t) ? t : hs(
    t,
    !1,
    dc,
    _c,
    Va
  );
}
// @__NO_SIDE_EFFECTS__
function Cc(t) {
  return hs(
    t,
    !1,
    gc,
    yc,
    Ha
  );
}
// @__NO_SIDE_EFFECTS__
function On(t) {
  return hs(
    t,
    !0,
    fc,
    vc,
    Wa
  );
}
function hs(t, e, i, r, n) {
  if (!Tt(t) || t.__v_raw && !(e && t.__v_isReactive) || t.__v_skip || !Object.isExtensible(t))
    return t;
  const s = n.get(t);
  if (s)
    return s;
  const a = Sc(jl(t));
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
  return /* @__PURE__ */ ge(t) ? /* @__PURE__ */ Oe(t.__v_raw) : !!(t && t.__v_isReactive);
}
// @__NO_SIDE_EFFECTS__
function ge(t) {
  return !!(t && t.__v_isReadonly);
}
// @__NO_SIDE_EFFECTS__
function ie(t) {
  return !!(t && t.__v_isShallow);
}
// @__NO_SIDE_EFFECTS__
function us(t) {
  return t ? !!t.__v_raw : !1;
}
// @__NO_SIDE_EFFECTS__
function wt(t) {
  const e = t && t.__v_raw;
  return e ? /* @__PURE__ */ wt(e) : t;
}
function wc(t) {
  return !xt(t, "__v_skip") && Object.isExtensible(t) && Pa(t, "__v_skip", !0), t;
}
const ne = (t) => Tt(t) ? /* @__PURE__ */ oi(t) : t, Ne = (t) => Tt(t) ? /* @__PURE__ */ On(t) : t;
// @__NO_SIDE_EFFECTS__
function Ut(t) {
  return t ? t.__v_isRef === !0 : !1;
}
// @__NO_SIDE_EFFECTS__
function vt(t) {
  return xc(t, !1);
}
function xc(t, e) {
  return /* @__PURE__ */ Ut(t) ? t : new Pc(t, e);
}
class Pc {
  constructor(e, i) {
    this.dep = new ls(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = i ? e : /* @__PURE__ */ wt(e), this._value = i ? e : ne(e), this.__v_isShallow = i;
  }
  get value() {
    return this.dep.track(), this._value;
  }
  set value(e) {
    const i = this._rawValue, r = this.__v_isShallow || /* @__PURE__ */ ie(e) || /* @__PURE__ */ ge(e);
    e = r ? e : /* @__PURE__ */ wt(e), de(e, i) && (this._rawValue = e, this._value = r ? e : ne(e), this.dep.trigger());
  }
}
function Y(t) {
  return /* @__PURE__ */ Ut(t) ? t.value : t;
}
const Tc = {
  get: (t, e, i) => e === "__v_raw" ? t : Y(Reflect.get(t, e, i)),
  set: (t, e, i, r) => {
    const n = t[e];
    return /* @__PURE__ */ Ut(n) && !/* @__PURE__ */ Ut(i) ? (n.value = i, !0) : Reflect.set(t, e, i, r);
  }
};
function ja(t) {
  return /* @__PURE__ */ Oe(t) ? t : new Proxy(t, Tc);
}
class Ac {
  constructor(e, i, r) {
    this.fn = e, this.setter = i, this._value = void 0, this.dep = new ls(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = hn - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !i, this.isSSR = r;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    Rt !== this)
      return ka(this, !0), !0;
  }
  get value() {
    const e = this.dep.track();
    return La(this), e && (e.version = this.dep.version), this._value;
  }
  set value(e) {
    this.setter && this.setter(e);
  }
}
// @__NO_SIDE_EFFECTS__
function Rc(t, e, i = !1) {
  let r, n;
  return ft(t) ? r = t : (r = t.get, n = t.set), new Ac(r, n, i);
}
const Tn = {}, Nn = /* @__PURE__ */ new WeakMap();
let Ue;
function Ec(t, e = !1, i = Ue) {
  if (i) {
    let r = Nn.get(i);
    r || Nn.set(i, r = []), r.push(t);
  }
}
function Mc(t, e, i = At) {
  const { immediate: r, deep: n, once: s, scheduler: a, augmentJob: o, call: l } = i, u = (d) => n ? d : /* @__PURE__ */ ie(d) || n === !1 || n === 0 ? Se(d, 1) : Se(d);
  let h, _, m, f, p = !1, y = !1;
  if (/* @__PURE__ */ Ut(t) ? (_ = () => t.value, p = /* @__PURE__ */ ie(t)) : /* @__PURE__ */ Oe(t) ? (_ = () => u(t), p = !0) : ut(t) ? (y = !0, p = t.some((d) => /* @__PURE__ */ Oe(d) || /* @__PURE__ */ ie(d)), _ = () => t.map((d) => {
    if (/* @__PURE__ */ Ut(d))
      return d.value;
    if (/* @__PURE__ */ Oe(d))
      return u(d);
    if (ft(d))
      return l ? l(d, 2) : d();
  })) : ft(t) ? e ? _ = l ? () => l(t, 2) : t : _ = () => {
    if (m) {
      Ce();
      try {
        m();
      } finally {
        we();
      }
    }
    const d = Ue;
    Ue = h;
    try {
      return l ? l(t, 3, [f]) : t(f);
    } finally {
      Ue = d;
    }
  } : _ = re, e && n) {
    const d = _, v = n === !0 ? 1 / 0 : n;
    _ = () => Se(d(), v);
  }
  const S = Ea(), P = () => {
    h.stop(), S && S.active && ns(S.effects, h);
  };
  if (s && e) {
    const d = e;
    e = (...v) => {
      const x = d(...v);
      return P(), x;
    };
  }
  let g = y ? new Array(t.length).fill(Tn) : Tn;
  const c = (d) => {
    if (!(!(h.flags & 1) || !h.dirty && !d))
      if (e) {
        const v = h.run();
        if (d || n || p || (y ? v.some((x, E) => de(x, g[E])) : de(v, g))) {
          m && m();
          const x = Ue;
          Ue = h;
          try {
            const E = [
              v,
              // pass undefined as the old value when it's changed for the first time
              g === Tn ? void 0 : y && g[0] === Tn ? [] : g,
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
  return o && o(c), h = new Ma(_), h.scheduler = a ? () => a(c, !1) : c, f = (d) => Ec(d, !1, h), m = h.onStop = () => {
    const d = Nn.get(h);
    if (d) {
      if (l)
        l(d, 4);
      else
        for (const v of d) v();
      Nn.delete(h);
    }
  }, e ? r ? c(!0) : g = h.run() : a ? a(c.bind(null, !0), !0) : h.run(), P.pause = h.pause.bind(h), P.resume = h.resume.bind(h), P.stop = P, P;
}
function Se(t, e = 1 / 0, i) {
  if (e <= 0 || !Tt(t) || t.__v_skip || (i = i || /* @__PURE__ */ new Map(), (i.get(t) || 0) >= e))
    return t;
  if (i.set(t, e), e--, /* @__PURE__ */ Ut(t))
    Se(t.value, e, i);
  else if (ut(t))
    for (let r = 0; r < t.length; r++)
      Se(t[r], e, i);
  else if (kn(t) || ke(t))
    t.forEach((r) => {
      Se(r, e, i);
    });
  else if (xa(t)) {
    for (const r in t)
      Se(t[r], e, i);
    for (const r of Object.getOwnPropertySymbols(t))
      Object.prototype.propertyIsEnumerable.call(t, r) && Se(t[r], e, i);
  }
  return t;
}
/**
* @vue/runtime-core v3.5.43
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function bn(t, e, i, r) {
  try {
    return r ? t(...r) : t();
  } catch (n) {
    sr(n, e, i);
  }
}
function oe(t, e, i, r) {
  if (ft(t)) {
    const n = bn(t, e, i, r);
    return n && Ca(n) && n.catch((s) => {
      sr(s, e, i);
    }), n;
  }
  if (ut(t)) {
    const n = [];
    for (let s = 0; s < t.length; s++)
      n.push(oe(t[s], e, i, r));
    return n;
  }
}
function sr(t, e, i, r = !0) {
  const n = e ? e.vnode : null, { errorHandler: s, throwUnhandledErrorInProduction: a } = e && e.appContext.config || At;
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
      Ce(), bn(s, null, 10, [
        t,
        l,
        u
      ]), we();
      return;
    }
  }
  Fc(t, i, n, r, a);
}
function Fc(t, e, i, r = !0, n = !1) {
  if (n)
    throw t;
  console.error(t);
}
const zt = [];
let ce = -1;
const ii = [];
let Me = null, Qe = 0;
const qa = /* @__PURE__ */ Promise.resolve();
let Ln = null;
function Dn(t) {
  const e = Ln || qa;
  return t ? e.then(this ? t.bind(this) : t) : e;
}
function kc(t) {
  let e = ce + 1, i = zt.length;
  for (; e < i; ) {
    const r = e + i >>> 1, n = zt[r], s = dn(n);
    s < t || s === t && n.flags & 2 ? e = r + 1 : i = r;
  }
  return e;
}
function ds(t) {
  if (!(t.flags & 1)) {
    const e = dn(t), i = zt[zt.length - 1];
    !i || // fast path when the job id is larger than the tail
    !(t.flags & 2) && e >= dn(i) ? zt.push(t) : zt.splice(kc(e), 0, t), t.flags |= 1, Ka();
  }
}
function Ka() {
  Ln || (Ln = qa.then($a));
}
function za(t) {
  if (!ut(t))
    Me && t.id === -1 ? Me.splice(Qe + 1, 0, t) : t.flags & 1 || (ii.push(t), t.flags |= 1);
  else
    for (let e = 0; e < t.length; e++)
      ii.push(t[e]);
  Ka();
}
function ks(t, e, i = ce + 1) {
  for (; i < zt.length; i++) {
    const r = zt[i];
    if (r && r.flags & 2) {
      if (t && r.id !== t.uid)
        continue;
      zt.splice(i, 1), i--, r.flags & 4 && (r.flags &= -2), r(), r.flags & 4 || (r.flags &= -2);
    }
  }
}
function Ya(t) {
  if (ii.length) {
    const e = [...new Set(ii)].sort(
      (i, r) => dn(i) - dn(r)
    );
    if (ii.length = 0, Me) {
      for (let i = 0; i < e.length; i++)
        Me.push(e[i]);
      return;
    }
    for (Me = e, Qe = 0; Qe < Me.length; Qe++) {
      const i = Me[Qe];
      i.flags & 4 && (i.flags &= -2), i.flags & 8 || i(), i.flags &= -2;
    }
    Me = null, Qe = 0;
  }
}
const dn = (t) => t.id == null ? t.flags & 2 ? -1 : 1 / 0 : t.id;
function $a(t) {
  try {
    for (ce = 0; ce < zt.length; ce++) {
      const e = zt[ce];
      e && !(e.flags & 8) && (e.flags & 4 && (e.flags &= -2), bn(
        e,
        e.i,
        e.i ? 15 : 14
      ), e.flags & 4 || (e.flags &= -2));
    }
  } finally {
    for (; ce < zt.length; ce++) {
      const e = zt[ce];
      e && (e.flags &= -2);
    }
    ce = -1, zt.length = 0, Ya(), Ln = null, (zt.length || ii.length) && $a();
  }
}
let Qt = null, Xa = null;
function Gn(t) {
  const e = Qt;
  return Qt = t, Xa = t && t.type.__scopeId || null, e;
}
function Qi(t, e = Qt, i) {
  if (!e || t._n)
    return t;
  const r = (...n) => {
    r._d && Bn(-1);
    const s = Gn(e), a = qe.length;
    let o;
    try {
      o = t(...n);
    } finally {
      for (let l = qe.length; l > a; l--) Sl();
      Gn(s), r._d && Bn(1);
    }
    return o;
  };
  return r._n = !0, r._c = !0, r._d = !0, r;
}
function Oc(t, e) {
  if (Qt === null)
    return t;
  const i = ur(Qt), r = t.dirs || (t.dirs = []);
  for (let n = 0; n < e.length; n++) {
    let [s, a, o, l = At] = e[n];
    s && (ft(s) && (s = {
      mounted: s,
      updated: s
    }), s.deep && Se(a), r.push({
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
    l && (Ce(), oe(l, i, 8, [
      t.el,
      o,
      t,
      e
    ]), we());
  }
}
function Ja(t, e) {
  if (Wt) {
    let i = Wt.provides;
    const r = Wt.parent && Wt.parent.provides;
    r === i && (i = Wt.provides = Object.create(r)), i[t] = e;
  }
}
function ni(t, e, i = !1) {
  const r = hr();
  if (r || ri) {
    let n = ri ? ri._context.provides : r ? r.parent == null || r.ce ? r.vnode.appContext && r.vnode.appContext.provides : r.parent.provides : void 0;
    if (n && t in n)
      return n[t];
    if (arguments.length > 1)
      return i && ft(e) ? e.call(r && r.proxy) : e;
  }
}
const Nc = /* @__PURE__ */ Symbol.for("v-scx"), Lc = () => ni(Nc);
function te(t, e, i) {
  return Qa(t, e, i);
}
function Qa(t, e, i = At) {
  const { immediate: r, deep: n, flush: s, once: a } = i, o = Bt({}, i), l = e && r || !e && s !== "post";
  let u;
  if (pn) {
    if (s === "sync") {
      const f = Lc();
      u = f.__watcherHandles || (f.__watcherHandles = []);
    } else if (!l) {
      const f = () => {
      };
      return f.stop = re, f.resume = re, f.pause = re, f;
    }
  }
  const h = Wt;
  o.call = (f, p, y) => oe(f, h, p, y);
  let _ = !1;
  s === "post" ? o.scheduler = (f) => {
    Kt(f, h && h.suspense);
  } : s !== "sync" && (_ = !0, o.scheduler = (f, p) => {
    p ? f() : ds(f);
  }), o.augmentJob = (f) => {
    e && (f.flags |= 4), _ && (f.flags |= 2, h && (f.id = h.uid, f.i = h));
  };
  const m = Mc(t, e, o);
  return pn && (u ? u.push(m) : l && m()), m;
}
function Dc(t, e, i) {
  const r = this.proxy, n = kt(t) ? t.includes(".") ? Za(r, t) : () => r[t] : t.bind(r, r);
  let s;
  ft(e) ? s = e : (s = e.handler, i = e);
  const a = wn(this), o = Qa(n, s.bind(r), i);
  return a(), o;
}
function Za(t, e) {
  const i = e.split(".");
  return () => {
    let r = t;
    for (let n = 0; n < i.length && r; n++)
      r = r[i[n]];
    return r;
  };
}
const Re = /* @__PURE__ */ new WeakMap(), tl = /* @__PURE__ */ Symbol("_vte"), or = (t) => t.__isTeleport, Be = (t) => t && (t.disabled || t.disabled === ""), Gc = (t) => t && (t.defer || t.defer === ""), Os = (t) => typeof SVGElement < "u" && t instanceof SVGElement, Ns = (t) => typeof MathMLElement == "function" && t instanceof MathMLElement, Wr = (t, e) => {
  const i = t && t.to;
  return kt(i) ? e ? e(i) : null : i;
}, Ic = {
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
      const C = Be(E.props), w = E.target = Wr(E.props, p), T = jr(w, E, y, f);
      w && (a !== "svg" && Os(w) ? a = "svg" : a !== "mathml" && Ns(w) && (a = "mathml"), n && n.isCE && (n.ce._teleportTargets || (n.ce._teleportTargets = /* @__PURE__ */ new Set())).add(w), C || (d(E, w, T), Zi(E, !1)));
    }, x = (E) => {
      const C = () => {
        if (Re.get(E) === C) {
          if (Re.delete(E), Be(E.props)) {
            const w = P(E.el) || i;
            d(E, w, E.anchor), Zi(E, !0);
          }
          v(E);
        }
      };
      Re.set(E, C), Kt(C, s);
    };
    if (t == null) {
      const E = e.el = y(""), C = e.anchor = y("");
      if (f(E, i, r), f(C, i, r), Gc(e.props) || s && s.pendingBranch) {
        x(e);
        return;
      }
      g && (d(e, i, C), Zi(e, !0)), v();
    } else {
      e.el = t.el;
      const E = e.anchor = t.anchor, C = Re.get(t);
      if (C) {
        C.flags |= 8, Re.delete(t), x(e);
        return;
      }
      e.targetStart = t.targetStart;
      const w = e.target = t.target, T = e.targetAnchor = t.targetAnchor, M = Be(t.props), D = M ? i : w, U = M ? E : T;
      if (a === "svg" || Os(w) ? a = "svg" : (a === "mathml" || Ns(w)) && (a = "mathml"), c ? (m(
        t.dynamicChildren,
        c,
        D,
        n,
        s,
        a,
        o
      ), ys(t, e, !0)) : l || _(
        t,
        e,
        D,
        U,
        n,
        s,
        a,
        o,
        !1
      ), g)
        M ? e.props && t.props && e.props.to !== t.props.to && (e.props.to = t.props.to) : An(
          e,
          i,
          E,
          u,
          1
        );
      else if ((e.props && e.props.to) !== (t.props && t.props.to)) {
        const V = Wr(e.props, p);
        V && (e.target = V, An(
          e,
          V,
          null,
          u,
          0
        ));
      } else M && An(
        e,
        w,
        T,
        u,
        1
      );
      Zi(e, g);
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
    } = t, f = Be(m), p = s || !f, y = Re.get(t);
    if (y && (y.flags |= 8, Re.delete(t)), _ && (n(u), n(h)), s && n(l), !y && (f || _) && a & 16)
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
  move: An,
  hydrate: Uc
};
function An(t, e, i, { o: { insert: r }, m: n }, s = 2) {
  s === 0 && r(t.targetAnchor, e, i);
  const { el: a, anchor: o, shapeFlag: l, children: u, props: h } = t, _ = s === 2;
  if (_ && r(a, e, i), !Re.has(t) && (!_ || Be(h)) && l & 16)
    for (let m = 0; m < u.length; m++)
      n(
        u[m],
        e,
        i,
        2
      );
  _ && r(o, e, i);
}
function Uc(t, e, i, r, n, s, {
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
  const p = e.target = Wr(
    e.props,
    l
  ), y = Be(e.props);
  if (p) {
    const S = p._lpa || p.firstChild;
    e.shapeFlag & 16 && (y ? (f(t, e), m(p, S), e.targetAnchor || jr(
      p,
      e,
      h,
      u,
      // if target is the same as the main view, insert anchors before current node
      // to avoid hydrating mismatch
      o(t) === p ? t : null
    )) : (e.anchor = a(t), m(p, S), e.targetAnchor || jr(p, e, h, u), _(
      S && a(S),
      e,
      p,
      i,
      r,
      n,
      s
    ))), Zi(e, y);
  } else y && e.shapeFlag & 16 && (f(t, e), e.targetStart = t, e.targetAnchor = a(t));
  return e.anchor && a(e.anchor);
}
const Bc = Ic;
function Zi(t, e) {
  const i = t.ctx;
  if (i && i.ut) {
    let r, n;
    for (e ? (r = t.el, n = t.anchor) : (r = t.targetStart, n = t.targetAnchor); r && r !== n; )
      r.nodeType === 1 && r.setAttribute("data-v-owner", i.uid), r = r.nextSibling;
    i.ut();
  }
}
function jr(t, e, i, r, n = null) {
  const s = e.targetStart = i(""), a = e.targetAnchor = i("");
  return s[tl] = a, t && (r(s, t, n), r(a, t, n)), a;
}
const br = /* @__PURE__ */ Symbol("_leaveCb");
function Vc(t) {
  let e = t[0];
  if (t.length > 1) {
    for (const i of t)
      if (i.type !== xe) {
        e = i;
        break;
      }
  }
  return e;
}
function el(t) {
  if (!gs(t))
    return or(t.type) && t.children ? Vc(t.children) : t;
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
function fs(t, e) {
  if (t.shapeFlag & 6 && t.component) {
    t.transition = e;
    const i = t.component.subTree;
    fs(
      or(i.type) && el(i) || i,
      e
    );
  } else t.shapeFlag & 128 ? (t.ssContent.transition = e.clone(t.ssContent), t.ssFallback.transition = e.clone(t.ssFallback)) : t.transition = e;
}
// @__NO_SIDE_EFFECTS__
function Ye(t, e) {
  return ft(t) ? (
    // #8236: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    Bt({ name: t.name }, e, { setup: t })
  ) : t;
}
function il(t) {
  t.ids = [t.ids[0] + t.ids[2]++ + "-", 0, 0];
}
function Ls(t, e) {
  let i;
  return !!((i = Object.getOwnPropertyDescriptor(t, e)) && !i.configurable);
}
const In = /* @__PURE__ */ new WeakMap();
function on(t, e, i, r, n = !1) {
  if (ut(t)) {
    t.forEach(
      (y, S) => on(
        y,
        e && (ut(e) ? e[S] : e),
        i,
        r,
        n
      )
    );
    return;
  }
  if (an(r) && !n) {
    r.shapeFlag & 512 && r.type.__asyncResolved && r.component.subTree.component && on(t, e, i, r.component.subTree);
    return;
  }
  const s = r.shapeFlag & 4 ? ur(r.component) : r.el, a = n ? null : s, { i: o, r: l } = t, u = e && e.r, h = o.refs === At ? o.refs = {} : o.refs, _ = o.setupState, m = /* @__PURE__ */ wt(_), f = _ === At ? Sa : (y) => Ls(h, y) ? !1 : xt(m, y), p = (y, S) => !(S && Ls(h, S));
  if (u != null && u !== l) {
    if (Ds(e), kt(u))
      h[u] = null, f(u) && (_[u] = null);
    else if (/* @__PURE__ */ Ut(u)) {
      const y = e;
      p(u, y.k) && (u.value = null), y.k && (h[y.k] = null);
    }
  }
  if (ft(l))
    bn(l, o, 12, [a, h]);
  else {
    const y = kt(l), S = /* @__PURE__ */ Ut(l);
    if (y || S) {
      const P = () => {
        if (t.f) {
          const g = y ? f(l) ? _[l] : h[l] : p() || !t.k ? l.value : h[t.k];
          if (n)
            ut(g) && ns(g, s);
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
          P(), In.delete(t);
        };
        g.id = -1, In.set(t, g), Kt(g, i);
      } else
        Ds(t), P();
    }
  }
}
function Ds(t) {
  const e = In.get(t);
  e && (e.flags |= 8, In.delete(t));
}
ir().requestIdleCallback;
ir().cancelIdleCallback;
const an = (t) => !!t.type.__asyncLoader, gs = (t) => t.type.__isKeepAlive;
function Hc(t, e) {
  nl(t, "a", e);
}
function Wc(t, e) {
  nl(t, "da", e);
}
function nl(t, e, i = Wt) {
  const r = t.__wdc || (t.__wdc = () => {
    let n = i;
    for (; n; ) {
      if (n.isDeactivated)
        return;
      n = n.parent;
    }
    return t();
  });
  if (ar(e, r, i), i) {
    let n = i.parent;
    for (; n && n.parent; )
      gs(n.parent.vnode) && jc(r, e, i, n), n = n.parent;
  }
}
function jc(t, e, i, r) {
  const n = ar(
    e,
    t,
    r,
    !0
    /* prepend */
  );
  Cn(() => {
    ns(r[e], n);
  }, i);
}
function ar(t, e, i = Wt, r = !1) {
  if (i) {
    const n = i[t] || (i[t] = []), s = e.__weh || (e.__weh = (...a) => {
      Ce();
      const o = wn(i), l = oe(e, i, t, a);
      return o(), we(), l;
    });
    return r ? n.unshift(s) : n.push(s), s;
  }
}
const Pe = (t) => (e, i = Wt) => {
  (!pn || t === "sp") && ar(t, (...r) => e(...r), i);
}, qc = Pe("bm"), Ke = Pe("m"), rl = Pe(
  "bu"
), ps = Pe("u"), Sn = Pe(
  "bum"
), Cn = Pe("um"), Kc = Pe(
  "sp"
), zc = Pe("rtg"), Yc = Pe("rtc");
function $c(t, e = Wt) {
  ar("ec", t, e);
}
const Xc = "components";
function Xe(t, e) {
  return Qc(Xc, t, !0, e) || t;
}
const Jc = /* @__PURE__ */ Symbol.for("v-ndc");
function Qc(t, e, i = !0, r = !1) {
  const n = Qt || Wt;
  if (n) {
    const s = n.type;
    {
      const o = Nh(
        s,
        !1
      );
      if (o && (o === e || o === Yt(e) || o === er(Yt(e))))
        return s;
    }
    const a = (
      // local registration
      // check instance[type] first which is resolved for options API
      Gs(n[t] || s[t], e) || // global registration
      Gs(n.appContext[t], e)
    );
    return !a && r ? s : a;
  }
}
function Gs(t, e) {
  return t && (t[e] || t[Yt(e)] || t[er(Yt(e))]);
}
function Is(t, e, i, r) {
  let n;
  const s = i, a = ut(t);
  if (a || kt(t)) {
    const o = a && /* @__PURE__ */ Oe(t);
    let l = !1, u = !1;
    o && (l = !/* @__PURE__ */ ie(t), u = /* @__PURE__ */ ge(t), t = rr(t)), n = new Array(t.length);
    for (let h = 0, _ = t.length; h < _; h++)
      n[h] = e(
        l ? u ? Ne(ne(t[h])) : ne(t[h]) : t[h],
        h,
        void 0,
        s
      );
  } else if (typeof t == "number") {
    n = new Array(t);
    for (let o = 0; o < t; o++)
      n[o] = e(o + 1, o, void 0, s);
  } else if (Tt(t))
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
const qr = (t) => t ? Pl(t) ? ur(t) : qr(t.parent) : null, ln = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ Bt(/* @__PURE__ */ Object.create(null), {
    $: (t) => t,
    $el: (t) => t.vnode.el,
    $data: (t) => t.data,
    $props: (t) => t.props,
    $attrs: (t) => t.attrs,
    $slots: (t) => t.slots,
    $refs: (t) => t.refs,
    $parent: (t) => qr(t.parent),
    $root: (t) => qr(t.root),
    $host: (t) => t.ce,
    $emit: (t) => t.emit,
    $options: (t) => ol(t),
    $forceUpdate: (t) => t.f || (t.f = () => {
      ds(t.update);
    }),
    $nextTick: (t) => t.n || (t.n = Dn.bind(t.proxy)),
    $watch: (t) => Dc.bind(t)
  })
), Sr = (t, e) => t !== At && !t.__isScriptSetup && xt(t, e), Zc = {
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
        if (Sr(r, e))
          return a[e] = 1, r[e];
        if (n !== At && xt(n, e))
          return a[e] = 2, n[e];
        if (xt(s, e))
          return a[e] = 3, s[e];
        if (i !== At && xt(i, e))
          return a[e] = 4, i[e];
        Kr && (a[e] = 0);
      }
    }
    const u = ln[e];
    let h, _;
    if (u)
      return e === "$attrs" && Ht(t.attrs, "get", ""), u(t);
    if (
      // css module (injected by vue-loader)
      (h = o.__cssModules) && (h = h[e])
    )
      return h;
    if (i !== At && xt(i, e))
      return a[e] = 4, i[e];
    if (
      // global properties
      _ = l.config.globalProperties, xt(_, e)
    )
      return _[e];
  },
  set({ _: t }, e, i) {
    const { data: r, setupState: n, ctx: s } = t;
    return Sr(n, e) ? (n[e] = i, !0) : r !== At && xt(r, e) ? (r[e] = i, !0) : xt(t.props, e) || e[0] === "$" && e.slice(1) in t ? !1 : (s[e] = i, !0);
  },
  has({
    _: { data: t, setupState: e, accessCache: i, ctx: r, appContext: n, props: s, type: a }
  }, o) {
    let l;
    return !!(i[o] || t !== At && o[0] !== "$" && xt(t, o) || Sr(e, o) || xt(s, o) || xt(r, o) || xt(ln, o) || xt(n.config.globalProperties, o) || (l = a.__cssModules) && l[o]);
  },
  defineProperty(t, e, i) {
    return i.get != null ? t._.accessCache[e] = 0 : xt(i, "value") && this.set(t, e, i.value, null), Reflect.defineProperty(t, e, i);
  }
};
function Us(t) {
  return ut(t) ? t.reduce(
    (e, i) => (e[i] = null, e),
    {}
  ) : t;
}
let Kr = !0;
function th(t) {
  const e = ol(t), i = t.proxy, r = t.ctx;
  Kr = !1, e.beforeCreate && Bs(e.beforeCreate, t, "bc");
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
    directives: U,
    filters: V
  } = e;
  if (u && eh(u, r, null), a)
    for (const b in a) {
      const A = a[b];
      ft(A) && (r[b] = A.bind(i));
    }
  if (n) {
    const b = n.call(i, i);
    Tt(b) && (t.data = /* @__PURE__ */ oi(b));
  }
  if (Kr = !0, s)
    for (const b in s) {
      const A = s[b], k = ft(A) ? A.bind(i, i) : ft(A.get) ? A.get.bind(i, i) : re, F = !ft(A) && ft(A.set) ? A.set.bind(i) : re, L = jn({
        get: k,
        set: F
      });
      Object.defineProperty(r, b, {
        enumerable: !0,
        configurable: !0,
        get: () => L.value,
        set: (B) => L.value = B
      });
    }
  if (o)
    for (const b in o)
      sl(o[b], r, i, b);
  if (l) {
    const b = ft(l) ? l.call(i) : l;
    Reflect.ownKeys(b).forEach((A) => {
      Ja(A, b[A]);
    });
  }
  h && Bs(h, t, "c");
  function J(b, A) {
    ut(A) ? A.forEach((k) => b(k.bind(i))) : A && b(A.bind(i));
  }
  if (J(qc, _), J(Ke, m), J(rl, f), J(ps, p), J(Hc, y), J(Wc, S), J($c, C), J(Yc, x), J(zc, E), J(Sn, g), J(Cn, d), J(Kc, w), ut(T))
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
  v && t.render === re && (t.render = v), M != null && (t.inheritAttrs = M), D && (t.components = D), U && (t.directives = U), w && il(t);
}
function eh(t, e, i = re) {
  ut(t) && (t = zr(t));
  for (const r in t) {
    const n = t[r];
    let s;
    Tt(n) ? "default" in n ? s = ni(
      n.from || r,
      n.default,
      !0
    ) : s = ni(n.from || r) : s = ni(n), /* @__PURE__ */ Ut(s) ? Object.defineProperty(e, r, {
      enumerable: !0,
      configurable: !0,
      get: () => s.value,
      set: (a) => s.value = a
    }) : e[r] = s;
  }
}
function Bs(t, e, i) {
  oe(
    ut(t) ? t.map((r) => r.bind(e.proxy)) : t.bind(e.proxy),
    e,
    i
  );
}
function sl(t, e, i, r) {
  let n = r.includes(".") ? Za(i, r) : () => i[r];
  if (kt(t)) {
    const s = e[t];
    ft(s) && te(n, s);
  } else if (ft(t))
    te(n, t.bind(i));
  else if (Tt(t))
    if (ut(t))
      t.forEach((s) => sl(s, e, i, r));
    else {
      const s = ft(t.handler) ? t.handler.bind(i) : e[t.handler];
      ft(s) && te(n, s, t);
    }
}
function ol(t) {
  const e = t.type, { mixins: i, extends: r } = e, {
    mixins: n,
    optionsCache: s,
    config: { optionMergeStrategies: a }
  } = t.appContext, o = s.get(e);
  let l;
  return o ? l = o : !n.length && !i && !r ? l = e : (l = {}, n.length && n.forEach(
    (u) => Un(l, u, a, !0)
  ), Un(l, e, a)), Tt(e) && s.set(e, l), l;
}
function Un(t, e, i, r = !1) {
  const { mixins: n, extends: s } = e;
  s && Un(t, s, i, !0), n && n.forEach(
    (a) => Un(t, a, i, !0)
  );
  for (const a in e)
    if (!(r && a === "expose")) {
      const o = ih[a] || i && i[a];
      t[a] = o ? o(t[a], e[a]) : e[a];
    }
  return t;
}
const ih = {
  data: Vs,
  props: Hs,
  emits: Hs,
  // objects
  methods: tn,
  computed: tn,
  // lifecycle
  beforeCreate: qt,
  created: qt,
  beforeMount: qt,
  mounted: qt,
  beforeUpdate: qt,
  updated: qt,
  beforeDestroy: qt,
  beforeUnmount: qt,
  destroyed: qt,
  unmounted: qt,
  activated: qt,
  deactivated: qt,
  errorCaptured: qt,
  serverPrefetch: qt,
  // assets
  components: tn,
  directives: tn,
  // watch
  watch: rh,
  // provide / inject
  provide: Vs,
  inject: nh
};
function Vs(t, e) {
  return e ? t ? function() {
    return Bt(
      ft(t) ? t.call(this, this) : t,
      ft(e) ? e.call(this, this) : e
    );
  } : e : t;
}
function nh(t, e) {
  return tn(zr(t), zr(e));
}
function zr(t) {
  if (ut(t)) {
    const e = {};
    for (let i = 0; i < t.length; i++)
      e[t[i]] = t[i];
    return e;
  }
  return t;
}
function qt(t, e) {
  return t ? [...new Set([].concat(t, e))] : e;
}
function tn(t, e) {
  return t ? Bt(/* @__PURE__ */ Object.create(null), t, e) : e;
}
function Hs(t, e) {
  return t ? ut(t) && ut(e) ? [.../* @__PURE__ */ new Set([...t, ...e])] : Bt(
    /* @__PURE__ */ Object.create(null),
    Us(t),
    Us(e ?? {})
  ) : e;
}
function rh(t, e) {
  if (!t) return e;
  if (!e) return t;
  const i = Bt(/* @__PURE__ */ Object.create(null), t);
  for (const r in e)
    i[r] = qt(t[r], e[r]);
  return i;
}
function al() {
  return {
    app: null,
    config: {
      isNativeTag: Sa,
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
let sh = 0;
function oh(t, e) {
  return function(r, n = null) {
    ft(r) || (r = Bt({}, r)), n != null && !Tt(n) && (n = null);
    const s = al(), a = /* @__PURE__ */ new WeakSet(), o = [];
    let l = !1;
    const u = s.app = {
      _uid: sh++,
      _component: r,
      _props: n,
      _container: null,
      _context: s,
      _instance: null,
      version: Gh,
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
          return f.appContext = s, m === !0 ? m = "svg" : m === !1 && (m = void 0), t(f, h, m), l = !0, u._container = h, h.__vue_app__ = u, ur(f.component);
        }
      },
      onUnmount(h) {
        o.push(h);
      },
      unmount() {
        l && (oe(
          o,
          u._instance,
          16
        ), t(null, u._container), delete u._container.__vue_app__);
      },
      provide(h, _) {
        return s.provides[h] = _, u;
      },
      runWithContext(h) {
        const _ = ri;
        ri = u;
        try {
          return h();
        } finally {
          ri = _;
        }
      }
    };
    return u;
  };
}
let ri = null;
const ah = (t, e) => e === "modelValue" || e === "model-value" ? t.modelModifiers : t[`${e}Modifiers`] || t[`${Yt(e)}Modifiers`] || t[`${ze(e)}Modifiers`];
function lh(t, e, ...i) {
  if (t.isUnmounted) return;
  const r = t.vnode.props || At;
  let n = i;
  const s = e.startsWith("update:"), a = s && ah(r, e.slice(7));
  a && (a.trim && (n = i.map((h) => kt(h) ? h.trim() : h)), a.number && (n = n.map(zl)));
  let o, l = r[o = gr(e)] || // also try camelCase event handler (#2249)
  r[o = gr(Yt(e))];
  !l && s && (l = r[o = gr(ze(e))]), l && oe(
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
    t.emitted[o] = !0, oe(
      u,
      t,
      6,
      n
    );
  }
}
const ch = /* @__PURE__ */ new WeakMap();
function ll(t, e, i = !1) {
  const r = i ? ch : e.emitsCache, n = r.get(t);
  if (n !== void 0)
    return n;
  const s = t.emits;
  let a = {}, o = !1;
  if (!ft(t)) {
    const l = (u) => {
      const h = ll(u, e, !0);
      h && (o = !0, Bt(a, h));
    };
    !i && e.mixins.length && e.mixins.forEach(l), t.extends && l(t.extends), t.mixins && t.mixins.forEach(l);
  }
  return !s && !o ? (Tt(t) && r.set(t, null), null) : (ut(s) ? s.forEach((l) => a[l] = null) : Bt(a, s), Tt(t) && r.set(t, a), a);
}
function lr(t, e) {
  return !t || !Qn(e) ? !1 : (e = e.slice(2), e = e === "Once" ? e : e.replace(/Once$/, ""), xt(t, e[0].toLowerCase() + e.slice(1)) || xt(t, ze(e)) || xt(t, e));
}
function Ws(t) {
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
  } = t, S = Gn(t);
  let P, g;
  try {
    if (i.shapeFlag & 4) {
      const d = n || r, v = d;
      P = ue(
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
      P = ue(
        d.length > 1 ? d(
          _,
          { attrs: o, slots: a, emit: l }
        ) : d(
          _,
          null
        )
      ), g = e.props ? o : hh(o);
    }
  } catch (d) {
    qe.length = 0, sr(d, t, 1), P = dt(xe);
  }
  let c = P;
  if (g && y !== !1) {
    const d = Object.keys(g), { shapeFlag: v } = c;
    d.length && v & 7 && (s && d.some(Zn) && (g = uh(
      g,
      s
    )), c = si(c, g, !1, !0));
  }
  if (i.dirs && (c = si(c, null, !1, !0), c.dirs = c.dirs ? c.dirs.concat(i.dirs) : i.dirs), i.transition) {
    const d = or(c.type) && el(c) || c;
    fs(d, i.transition);
  }
  return P = c, Gn(S), P;
}
const hh = (t) => {
  let e;
  for (const i in t)
    (i === "class" || i === "style" || Qn(i)) && ((e || (e = {}))[i] = t[i]);
  return e;
}, uh = (t, e) => {
  const i = {};
  for (const r in t)
    (!Zn(r) || !(r.slice(9) in e)) && (i[r] = t[r]);
  return i;
};
function dh(t, e, i) {
  const { props: r, children: n, component: s } = t, { props: a, children: o, patchFlag: l } = e, u = s.emitsOptions;
  if (e.dirs || e.transition)
    return !0;
  if (i && l >= 0) {
    if (l & 1024)
      return !0;
    if (l & 16)
      return r ? js(r, a, u) : !!a;
    if (l & 8) {
      const h = e.dynamicProps;
      for (let _ = 0; _ < h.length; _++) {
        const m = h[_];
        if (cl(a, r, m) && !lr(u, m))
          return !0;
      }
    }
  } else
    return (n || o) && (!o || !o.$stable) ? !0 : r === a ? !1 : r ? a ? js(r, a, u) : !0 : !!a;
  return !1;
}
function js(t, e, i) {
  const r = Object.keys(e);
  if (r.length !== Object.keys(t).length)
    return !0;
  for (let n = 0; n < r.length; n++) {
    const s = r[n];
    if (cl(e, t, s) && !lr(i, s))
      return !0;
  }
  return !1;
}
function cl(t, e, i) {
  const r = t[i], n = e[i];
  return i === "style" && Tt(r) && Tt(n) ? !nr(r, n) : r !== n;
}
function fh({ vnode: t, parent: e, suspense: i }, r) {
  for (; e; ) {
    const n = e.subTree;
    if (n.suspense && n.suspense.activeBranch === t && (n.suspense.vnode.el = n.el = r, t = n), n === t)
      (t = e.vnode).el = r, e = e.parent;
    else
      break;
  }
  i && i.activeBranch === t && (i.vnode.el = r);
}
const hl = {}, ul = () => Object.create(hl), dl = (t) => Object.getPrototypeOf(t) === hl;
function gh(t, e, i, r = !1) {
  const n = {}, s = ul();
  t.propsDefaults = /* @__PURE__ */ Object.create(null), fl(t, e, n, s);
  for (const a in t.propsOptions[0])
    a in n || (n[a] = void 0);
  i ? t.props = r ? n : /* @__PURE__ */ Cc(n) : t.type.props ? t.props = n : t.props = s, t.attrs = s;
}
function ph(t, e, i, r) {
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
        if (lr(t.emitsOptions, m))
          continue;
        const f = e[m];
        if (l)
          if (xt(s, m))
            f !== s[m] && (s[m] = f, u = !0);
          else {
            const p = Yt(m);
            n[p] = Yr(
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
    fl(t, e, n, s) && (u = !0);
    let h;
    for (const _ in o)
      (!e || // for camelCase
      !xt(e, _) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((h = ze(_)) === _ || !xt(e, h))) && (l ? i && // for camelCase
      (i[_] !== void 0 || // for kebab-case
      i[h] !== void 0) && (n[_] = Yr(
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
  u && be(t.attrs, "set", "");
}
function fl(t, e, i, r) {
  const [n, s] = t.propsOptions;
  let a = !1, o;
  if (e)
    for (let l in e) {
      if (nn(l))
        continue;
      const u = e[l];
      let h;
      n && xt(n, h = Yt(l)) ? !s || !s.includes(h) ? i[h] = u : (o || (o = {}))[h] = u : lr(t.emitsOptions, l) || (!(l in r) || u !== r[l]) && (r[l] = u, a = !0);
    }
  if (s) {
    const l = /* @__PURE__ */ wt(i), u = o || At;
    for (let h = 0; h < s.length; h++) {
      const _ = s[h];
      i[_] = Yr(
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
function Yr(t, e, i, r, n, s) {
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
          const h = wn(n);
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
const mh = /* @__PURE__ */ new WeakMap();
function gl(t, e, i = !1) {
  const r = i ? mh : e.propsCache, n = r.get(t);
  if (n)
    return n;
  const s = t.props, a = {}, o = [];
  let l = !1;
  if (!ft(t)) {
    const h = (_) => {
      l = !0;
      const [m, f] = gl(_, e, !0);
      Bt(a, m), f && o.push(...f);
    };
    !i && e.mixins.length && e.mixins.forEach(h), t.extends && h(t.extends), t.mixins && t.mixins.forEach(h);
  }
  if (!s && !l)
    return Tt(t) && r.set(t, We), We;
  if (ut(s))
    for (let h = 0; h < s.length; h++) {
      const _ = Yt(s[h]);
      qs(_) && (a[_] = At);
    }
  else if (s)
    for (const h in s) {
      const _ = Yt(h);
      if (qs(_)) {
        const m = s[h], f = a[_] = ut(m) || ft(m) ? { type: m } : Bt({}, m), p = f.type;
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
  return Tt(t) && r.set(t, u), u;
}
function qs(t) {
  return t[0] !== "$" && !nn(t);
}
const ms = (t) => t === "_" || t === "_ctx" || t === "$stable", _s = (t) => ut(t) ? t.map(ue) : [ue(t)], _h = (t, e, i) => {
  if (e._n)
    return e;
  const r = Qi((...n) => _s(e(...n)), i);
  return r._c = !1, r;
}, pl = (t, e, i) => {
  const r = t._ctx;
  for (const n in t) {
    if (ms(n)) continue;
    const s = t[n];
    if (ft(s))
      e[n] = _h(n, s, r);
    else if (s != null) {
      const a = _s(s);
      e[n] = () => a;
    }
  }
}, ml = (t, e) => {
  const i = _s(e);
  t.slots.default = () => i;
}, _l = (t, e, i) => {
  for (const r in e)
    (i || !ms(r)) && (t[r] = e[r]);
}, yh = (t, e, i) => {
  const r = t.slots = ul();
  if (t.vnode.shapeFlag & 32) {
    const n = e._;
    n ? (_l(r, e, i), i && Pa(r, "_", n, !0)) : pl(e, r);
  } else e && ml(t, e);
}, vh = (t, e, i) => {
  const { vnode: r, slots: n } = t;
  let s = !0, a = At;
  if (r.shapeFlag & 32) {
    const o = e._;
    o ? i && o === 1 ? s = !1 : _l(n, e, i) : (s = !e.$stable, pl(e, n)), a = e;
  } else e && (ml(t, e), a = { default: 1 });
  if (s)
    for (const o in n)
      !ms(o) && a[o] == null && delete n[o];
}, Kt = xh;
function bh(t) {
  return Sh(t);
}
function Sh(t, e) {
  const i = ir();
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
    setScopeId: f = re,
    insertStaticContent: p
  } = t, y = (R, N, H, q = null, $ = null, z = null, tt = void 0, K = null, et = !!N.dynamicChildren) => {
    if (R === N)
      return;
    R && !li(R, N) && (q = O(R), B(R, $, z, !0), R = null), N.patchFlag === -2 && (et = !1, N.dynamicChildren = null), N.dynamicChildren && R && R.dynamicChildren && R.dynamicChildren.hasOnce && (N.dynamicChildren === We && (N.dynamicChildren = []), N.dynamicChildren.hasOnce = !0);
    const { type: Q, ref: at, shapeFlag: ot } = N;
    switch (Q) {
      case cr:
        S(R, N, H, q);
        break;
      case xe:
        P(R, N, H, q);
        break;
      case cn:
        R == null && g(N, H, q, tt);
        break;
      case Mt:
        D(
          R,
          N,
          H,
          q,
          $,
          z,
          tt,
          K,
          et
        );
        break;
      default:
        ot & 1 ? v(
          R,
          N,
          H,
          q,
          $,
          z,
          tt,
          K,
          et
        ) : ot & 6 ? U(
          R,
          N,
          H,
          q,
          $,
          z,
          tt,
          K,
          et
        ) : (ot & 64 || ot & 128) && Q.process(
          R,
          N,
          H,
          q,
          $,
          z,
          tt,
          K,
          et,
          rt
        );
    }
    at != null && $ ? on(at, R && R.ref, z, N || R, !N) : at == null && R && R.ref != null && on(R.ref, null, z, R, !0);
  }, S = (R, N, H, q) => {
    if (R == null)
      r(
        N.el = o(N.children),
        H,
        q
      );
    else {
      const $ = N.el = R.el;
      N.children !== R.children && u($, N.children);
    }
  }, P = (R, N, H, q) => {
    R == null ? r(
      N.el = l(N.children || ""),
      H,
      q
    ) : N.el = R.el;
  }, g = (R, N, H, q) => {
    [R.el, R.anchor] = p(
      R.children,
      N,
      H,
      q,
      R.el,
      R.anchor
    );
  }, c = ({ el: R, anchor: N }, H, q) => {
    let $;
    for (; R && R !== N; )
      $ = m(R), r(R, H, q), R = $;
    r(N, H, q);
  }, d = ({ el: R, anchor: N }) => {
    let H;
    for (; R && R !== N; )
      H = m(R), n(R), R = H;
    n(N);
  }, v = (R, N, H, q, $, z, tt, K, et) => {
    if (N.type === "svg" ? tt = "svg" : N.type === "math" && (tt = "mathml"), R == null)
      x(
        N,
        H,
        q,
        $,
        z,
        tt,
        K,
        et
      );
    else {
      const Q = R.el && R.el._isVueCE ? R.el : null;
      try {
        Q && Q._beginPatch(), w(
          R,
          N,
          $,
          z,
          tt,
          K,
          et
        );
      } finally {
        Q && Q._endPatch();
      }
    }
  }, x = (R, N, H, q, $, z, tt, K) => {
    let et, Q;
    const { props: at, shapeFlag: ot, transition: lt, dirs: ct } = R;
    if (et = R.el = a(
      R.type,
      z,
      at && at.is,
      at
    ), ot & 8 ? h(et, R.children) : ot & 16 && C(
      R.children,
      et,
      null,
      q,
      $,
      Cr(R, z),
      tt,
      K
    ), ct && De(R, null, q, "created"), E(et, R, R.scopeId, tt, q), at) {
      for (const _t in at)
        _t !== "value" && !nn(_t) && s(et, _t, null, at[_t], z, q);
      "value" in at && s(et, "value", null, at.value, z), (Q = at.onVnodeBeforeMount) && ae(Q, q, R);
    }
    ct && De(R, null, q, "beforeMount");
    const ht = Ch($, lt);
    ht && lt.beforeEnter(et), r(et, N, H), ((Q = at && at.onVnodeMounted) || ht || ct) && Kt(() => {
      try {
        Q && ae(Q, q, R), ht && lt.enter(et), ct && De(R, null, q, "mounted");
      } finally {
      }
    }, $);
  }, E = (R, N, H, q, $) => {
    if (H && f(R, H), q)
      for (let z = 0; z < q.length; z++)
        f(R, q[z]);
    if ($) {
      let z = $.subTree;
      if (N === z || bl(z.type) && (z.ssContent === N || z.ssFallback === N)) {
        const tt = $.vnode;
        E(
          R,
          tt,
          tt.scopeId,
          tt.slotScopeIds,
          $.parent
        );
      }
    }
  }, C = (R, N, H, q, $, z, tt, K, et = 0) => {
    for (let Q = et; Q < R.length; Q++) {
      const at = R[Q] = K ? ve(R[Q]) : ue(R[Q]);
      y(
        null,
        at,
        N,
        H,
        q,
        $,
        z,
        tt,
        K
      );
    }
  }, w = (R, N, H, q, $, z, tt) => {
    const K = N.el = R.el;
    let { patchFlag: et, dynamicChildren: Q, dirs: at } = N;
    et |= R.patchFlag & 16;
    const ot = R.props || At, lt = N.props || At;
    let ct;
    if (H && Ge(H, !1), (ct = lt.onVnodeBeforeUpdate) && ae(ct, H, N, R), at && De(N, R, H, "beforeUpdate"), H && Ge(H, !0), // #6385 the old vnode may be a user-wrapped non-isomorphic block
    // Force full diff when block metadata is unstable.
    Q && (!R.dynamicChildren || R.dynamicChildren.length !== Q.length) && (et = 0, tt = !1, Q = null), (ot.innerHTML && lt.innerHTML == null || ot.textContent && lt.textContent == null) && h(K, ""), Q ? T(
      R.dynamicChildren,
      Q,
      K,
      H,
      q,
      Cr(N, $),
      z
    ) : tt || A(
      R,
      N,
      K,
      null,
      H,
      q,
      Cr(N, $),
      z,
      !1
    ), et > 0) {
      if (et & 16)
        M(K, ot, lt, H, $);
      else if (et & 2 && ot.class !== lt.class && s(K, "class", null, lt.class, $), et & 4 && s(K, "style", ot.style, lt.style, $), et & 8) {
        const ht = N.dynamicProps;
        for (let _t = 0; _t < ht.length; _t++) {
          const gt = ht[_t], Ct = ot[gt], bt = lt[gt];
          (bt !== Ct || gt === "value") && s(K, gt, Ct, bt, $, H);
        }
      }
      et & 1 && R.children !== N.children && h(K, N.children);
    } else !tt && Q == null && M(K, ot, lt, H, $);
    ((ct = lt.onVnodeUpdated) || at) && Kt(() => {
      ct && ae(ct, H, N, R), at && De(N, R, H, "updated");
    }, q);
  }, T = (R, N, H, q, $, z, tt) => {
    for (let K = 0; K < N.length; K++) {
      const et = R[K], Q = N[K], at = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        et.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (et.type === Mt || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !li(et, Q) || // - In the case of a component, it could contain anything.
        et.shapeFlag & 198) ? _(et.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          H
        )
      );
      y(
        et,
        Q,
        at,
        null,
        q,
        $,
        z,
        tt,
        !0
      );
    }
  }, M = (R, N, H, q, $) => {
    if (N !== H) {
      if (N !== At)
        for (const z in N)
          !nn(z) && !(z in H) && s(
            R,
            z,
            N[z],
            null,
            $,
            q
          );
      for (const z in H) {
        if (nn(z)) continue;
        const tt = H[z], K = N[z];
        tt !== K && z !== "value" && s(R, z, K, tt, $, q);
      }
      "value" in H && s(R, "value", N.value, H.value, $);
    }
  }, D = (R, N, H, q, $, z, tt, K, et) => {
    const Q = N.el = R ? R.el : o(""), at = N.anchor = R ? R.anchor : o("");
    let { patchFlag: ot, dynamicChildren: lt, slotScopeIds: ct } = N;
    ct && (K = K ? K.concat(ct) : ct), R == null ? (r(Q, H, q), r(at, H, q), C(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      N.children || [],
      H,
      at,
      $,
      z,
      tt,
      K,
      et
    )) : ot > 0 && ot & 64 && lt && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    R.dynamicChildren && R.dynamicChildren.length === lt.length ? (T(
      R.dynamicChildren,
      lt,
      H,
      $,
      z,
      tt,
      K
    ), // #2080 if the stable fragment has a key, it's a <template v-for> that may
    //  get moved around. Make sure all root level vnodes inherit el.
    // #2134 or if it's a component root, it may also get moved around
    // as the component is being moved.
    (N.key != null || $ && N === $.subTree) && ys(
      R,
      N,
      !0
      /* shallow */
    )) : A(
      R,
      N,
      H,
      at,
      $,
      z,
      tt,
      K,
      et
    );
  }, U = (R, N, H, q, $, z, tt, K, et) => {
    N.slotScopeIds = K, R == null ? N.shapeFlag & 512 ? $.ctx.activate(
      N,
      H,
      q,
      tt,
      et
    ) : V(
      N,
      H,
      q,
      $,
      z,
      tt,
      et
    ) : G(R, N, et);
  }, V = (R, N, H, q, $, z, tt) => {
    const K = R.component = Eh(
      R,
      q,
      $
    );
    if (gs(R) && (K.ctx.renderer = rt), Mh(K, !1, tt), K.asyncDep) {
      if ($ && $.registerDep(K, J, tt), !R.el) {
        const et = K.subTree = dt(xe);
        P(null, et, N, H), R.placeholder = et.el;
      }
    } else
      J(
        K,
        R,
        N,
        H,
        $,
        z,
        tt
      );
  }, G = (R, N, H) => {
    const q = N.component = R.component;
    if (dh(R, N, H))
      if (q.asyncDep && !q.asyncResolved) {
        N.el = R.el, b(q, N, H);
        return;
      } else
        q.next = N, q.update();
    else
      N.el = R.el, q.vnode = N;
  }, J = (R, N, H, q, $, z, tt) => {
    const K = () => {
      if (R.isMounted) {
        let { next: ot, bu: lt, u: ct, parent: ht, vnode: _t } = R;
        {
          const Vt = yl(R);
          if (Vt) {
            ot && (ot.el = _t.el, b(R, ot, tt)), Vt.asyncDep.then(() => {
              Kt(() => {
                R.isUnmounted || Q();
              }, $);
            });
            return;
          }
        }
        let gt = ot, Ct;
        Ge(R, !1), ot ? (ot.el = _t.el, b(R, ot, tt)) : ot = _t, lt && pr(lt), (Ct = ot.props && ot.props.onVnodeBeforeUpdate) && ae(Ct, ht, ot, _t), Ge(R, !0);
        const bt = Ws(R), Ft = R.subTree;
        R.subTree = bt, y(
          Ft,
          bt,
          // parent may have changed if it's in a teleport
          _(Ft.el),
          // anchor may have changed if it's in a fragment
          O(Ft),
          R,
          $,
          z
        ), ot.el = bt.el, gt === null && fh(R, bt.el), ct && Kt(ct, $), (Ct = ot.props && ot.props.onVnodeUpdated) && Kt(
          () => ae(Ct, ht, ot, _t),
          $
        );
      } else {
        let ot;
        const { el: lt, props: ct } = N, { bm: ht, m: _t, parent: gt, root: Ct, type: bt } = R, Ft = an(N);
        Ge(R, !1), ht && pr(ht), !Ft && (ot = ct && ct.onVnodeBeforeMount) && ae(ot, gt, N), Ge(R, !0);
        {
          Ct.ce && Ct.ce._hasShadowRoot() && Ct.ce._injectChildStyle(
            bt,
            R.parent ? R.parent.type : void 0
          );
          const Vt = R.subTree = Ws(R);
          y(
            null,
            Vt,
            H,
            q,
            R,
            $,
            z
          ), N.el = Vt.el;
        }
        if (_t && Kt(_t, $), !Ft && (ot = ct && ct.onVnodeMounted)) {
          const Vt = N;
          Kt(
            () => ae(ot, gt, Vt),
            $
          );
        }
        (N.shapeFlag & 256 || gt && an(gt.vnode) && gt.vnode.shapeFlag & 256) && R.a && Kt(R.a, $), R.isMounted = !0, N = H = q = null;
      }
    };
    R.scope.on();
    const et = R.effect = new Ma(K);
    R.scope.off();
    const Q = R.update = et.run.bind(et), at = R.job = et.runIfDirty.bind(et);
    at.i = R, at.id = R.uid, et.scheduler = () => ds(at), Ge(R, !0), Q();
  }, b = (R, N, H) => {
    N.component = R;
    const q = R.vnode.props;
    R.vnode = N, R.next = null, ph(R, N.props, q, H), vh(R, N.children, H), Ce(), ks(R), we();
  }, A = (R, N, H, q, $, z, tt, K, et = !1) => {
    const Q = R && R.children, at = R ? R.shapeFlag : 0, ot = N.children, { patchFlag: lt, shapeFlag: ct } = N;
    if (lt > 0) {
      if (lt & 128) {
        F(
          Q,
          ot,
          H,
          q,
          $,
          z,
          tt,
          K,
          et
        );
        return;
      } else if (lt & 256) {
        k(
          Q,
          ot,
          H,
          q,
          $,
          z,
          tt,
          K,
          et
        );
        return;
      }
    }
    ct & 8 ? (at & 16 && j(Q, $, z), ot !== Q && h(H, ot)) : at & 16 ? ct & 16 ? F(
      Q,
      ot,
      H,
      q,
      $,
      z,
      tt,
      K,
      et
    ) : j(Q, $, z, !0) : (at & 8 && h(H, ""), ct & 16 && C(
      ot,
      H,
      q,
      $,
      z,
      tt,
      K,
      et
    ));
  }, k = (R, N, H, q, $, z, tt, K, et) => {
    R = R || We, N = N || We;
    const Q = R.length, at = N.length, ot = Math.min(Q, at);
    let lt;
    for (lt = 0; lt < ot; lt++) {
      const ct = N[lt] = et ? ve(N[lt]) : ue(N[lt]);
      y(
        R[lt],
        ct,
        H,
        null,
        $,
        z,
        tt,
        K,
        et
      );
    }
    Q > at ? j(
      R,
      $,
      z,
      !0,
      !1,
      ot
    ) : C(
      N,
      H,
      q,
      $,
      z,
      tt,
      K,
      et,
      ot
    );
  }, F = (R, N, H, q, $, z, tt, K, et) => {
    let Q = 0;
    const at = N.length;
    let ot = R.length - 1, lt = at - 1;
    for (; Q <= ot && Q <= lt; ) {
      const ct = R[Q], ht = N[Q] = et ? ve(N[Q]) : ue(N[Q]);
      if (li(ct, ht))
        y(
          ct,
          ht,
          H,
          null,
          $,
          z,
          tt,
          K,
          et
        );
      else
        break;
      Q++;
    }
    for (; Q <= ot && Q <= lt; ) {
      const ct = R[ot], ht = N[lt] = et ? ve(N[lt]) : ue(N[lt]);
      if (li(ct, ht))
        y(
          ct,
          ht,
          H,
          null,
          $,
          z,
          tt,
          K,
          et
        );
      else
        break;
      ot--, lt--;
    }
    if (Q > ot) {
      if (Q <= lt) {
        const ct = lt + 1, ht = ct < at ? N[ct].el : q;
        for (; Q <= lt; )
          y(
            null,
            N[Q] = et ? ve(N[Q]) : ue(N[Q]),
            H,
            ht,
            $,
            z,
            tt,
            K,
            et
          ), Q++;
      }
    } else if (Q > lt)
      for (; Q <= ot; )
        B(R[Q], $, z, !0), Q++;
    else {
      const ct = Q, ht = Q, _t = /* @__PURE__ */ new Map();
      for (Q = ht; Q <= lt; Q++) {
        const jt = N[Q] = et ? ve(N[Q]) : ue(N[Q]);
        jt.key != null && _t.set(jt.key, Q);
      }
      let gt, Ct = 0;
      const bt = lt - ht + 1;
      let Ft = !1, Vt = 0;
      const Te = new Array(bt);
      for (Q = 0; Q < bt; Q++) Te[Q] = 0;
      for (Q = ct; Q <= ot; Q++) {
        const jt = R[Q];
        if (Ct >= bt) {
          B(jt, $, z, !0);
          continue;
        }
        let ee;
        if (jt.key != null)
          ee = _t.get(jt.key);
        else
          for (gt = ht; gt <= lt; gt++)
            if (Te[gt - ht] === 0 && li(jt, N[gt])) {
              ee = gt;
              break;
            }
        ee === void 0 ? B(jt, $, z, !0) : (Te[ee - ht] = Q + 1, ee >= Vt ? Vt = ee : Ft = !0, y(
          jt,
          N[ee],
          H,
          null,
          $,
          z,
          tt,
          K,
          et
        ), Ct++);
      }
      const Le = Ft ? wh(Te) : We;
      for (gt = Le.length - 1, Q = bt - 1; Q >= 0; Q--) {
        const jt = ht + Q, ee = N[jt], xs = N[jt + 1], Ps = jt + 1 < at ? (
          // #13559, #14173 fallback to el placeholder for unresolved async component
          xs.el || vl(xs)
        ) : q;
        Te[Q] === 0 ? y(
          null,
          ee,
          H,
          Ps,
          $,
          z,
          tt,
          K,
          et
        ) : Ft && (gt < 0 || Q !== Le[gt] ? L(ee, H, Ps, 2) : gt--);
      }
    }
  }, L = (R, N, H, q, $ = null) => {
    const { el: z, type: tt, transition: K, children: et, shapeFlag: Q } = R;
    if (Q & 6) {
      L(R.component.subTree, N, H, q);
      return;
    }
    if (Q & 128) {
      R.suspense.move(N, H, q);
      return;
    }
    if (Q & 64) {
      tt.move(R, N, H, rt);
      return;
    }
    if (tt === Mt) {
      r(z, N, H);
      for (let ot = 0; ot < et.length; ot++)
        L(et[ot], N, H, q);
      r(R.anchor, N, H);
      return;
    }
    if (tt === cn) {
      c(R, N, H);
      return;
    }
    if (q !== 2 && Q & 1 && K)
      if (q === 0)
        K.persisted && !z[br] ? r(z, N, H) : (K.beforeEnter(z), r(z, N, H), Kt(() => K.enter(z), $));
      else {
        const { leave: ot, delayLeave: lt, afterLeave: ct } = K, ht = () => {
          R.ctx.isUnmounted ? n(z) : r(z, N, H);
        }, _t = () => {
          const gt = z._isLeaving || !!z[br];
          z._isLeaving && z[br](
            !0
            /* cancelled */
          ), K.persisted && !gt ? ht() : ot(z, () => {
            ht(), ct && ct();
          });
        };
        lt ? lt(z, ht, _t) : _t();
      }
    else
      r(z, N, H);
  }, B = (R, N, H, q = !1, $ = !1) => {
    const {
      type: z,
      props: tt,
      ref: K,
      children: et,
      dynamicChildren: Q,
      shapeFlag: at,
      patchFlag: ot,
      dirs: lt,
      cacheIndex: ct,
      memo: ht
    } = R;
    if ((ot === -2 || Q && Q.hasOnce) && ($ = !1), K != null && (Ce(), on(K, null, H, R, !0), we()), ct != null && (!R.ctx || R.ctx === N) && (N.renderCache[ct] = void 0), at & 256) {
      N.ctx.deactivate(R);
      return;
    }
    const _t = at & 1 && lt, gt = !an(R);
    let Ct;
    if (gt && (Ct = tt && tt.onVnodeBeforeUnmount) && ae(Ct, N, R), at & 6)
      st(R.component, H, q);
    else {
      if (at & 128) {
        R.suspense.unmount(H, q);
        return;
      }
      _t && De(R, null, N, "beforeUnmount"), at & 64 ? R.type.remove(
        R,
        N,
        H,
        rt,
        q
      ) : Q && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !Q.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (z !== Mt || ot > 0 && ot & 64) ? j(
        Q,
        N,
        H,
        !1,
        !0
      ) : (z === Mt && ot & 384 || !$ && at & 16) && j(et, N, H), q && I(R);
    }
    const bt = ht != null && ct == null;
    (gt && (Ct = tt && tt.onVnodeUnmounted) || _t || bt) && Kt(() => {
      Ct && ae(Ct, N, R), _t && De(R, null, N, "unmounted"), bt && (R.el = null);
    }, H);
  }, I = (R) => {
    const { type: N, el: H, anchor: q, transition: $ } = R;
    if (N === Mt) {
      Z(H, q);
      return;
    }
    if (N === cn) {
      d(R), $ && !$.persisted && $.afterLeave && $.afterLeave();
      return;
    }
    const z = () => {
      n(H), $ && !$.persisted && $.afterLeave && $.afterLeave();
    };
    if (R.shapeFlag & 1 && $ && !$.persisted) {
      const { leave: tt, delayLeave: K } = $, et = () => tt(H, z);
      K ? K(R.el, z, et) : et();
    } else
      z();
  }, Z = (R, N) => {
    let H;
    for (; R !== N; )
      H = m(R), n(R), R = H;
    n(N);
  }, st = (R, N, H) => {
    const { bum: q, scope: $, job: z, subTree: tt, um: K, m: et, a: Q } = R;
    Ks(et), Ks(Q), q && pr(q), $.stop(), z ? (z.flags |= 8, B(tt, R, N, H)) : R.vnode.el && tt && (tt.transition = R.vnode.transition, B(tt, R, N, H)), K && Kt(K, N), Kt(() => {
      R.isUnmounted = !0;
    }, N);
  }, j = (R, N, H, q = !1, $ = !1, z = 0) => {
    for (let tt = z; tt < R.length; tt++)
      B(R[tt], N, H, q, $);
  }, O = (R) => {
    if (R.shapeFlag & 6)
      return O(R.component.subTree);
    if (R.shapeFlag & 128)
      return R.suspense.next();
    const N = m(R.anchor || R.el), H = N && N[tl];
    return H ? m(H) : N;
  };
  let W = !1;
  const nt = (R, N, H) => {
    let q;
    R == null ? N._vnode && (B(N._vnode, null, null, !0), q = N._vnode.component) : y(
      N._vnode || null,
      R,
      N,
      null,
      null,
      null,
      H
    ), N._vnode = R, W || (W = !0, ks(q), Ya(), W = !1);
  }, rt = {
    p: y,
    um: B,
    m: L,
    r: I,
    mt: V,
    mc: C,
    pc: A,
    pbc: T,
    n: O,
    o: t
  };
  return {
    render: nt,
    hydrate: void 0,
    createApp: oh(nt)
  };
}
function Cr({ type: t, props: e }, i) {
  return i === "svg" && t === "foreignObject" || i === "mathml" && t === "annotation-xml" && e && e.encoding && e.encoding.includes("html") ? void 0 : i;
}
function Ge({ effect: t, job: e }, i) {
  i ? (t.flags |= 32, e.flags |= 4) : (t.flags &= -33, e.flags &= -5);
}
function Ch(t, e) {
  return (!t || t && !t.pendingBranch) && e && !e.persisted;
}
function ys(t, e, i = !1) {
  const r = t.children, n = e.children;
  if (ut(r) && ut(n))
    for (let s = 0; s < r.length; s++) {
      const a = r[s];
      let o = n[s];
      o.shapeFlag & 1 && !o.dynamicChildren && ((o.patchFlag <= 0 || o.patchFlag === 32) && (o = n[s] = ve(n[s]), o.el = a.el), !i && o.patchFlag !== -2 && ys(a, o)), o.type === cr && (o.patchFlag === -1 && (o = n[s] = ve(o)), o.el = a.el), o.type === xe && !o.el && (o.el = a.el);
    }
}
function wh(t) {
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
function yl(t) {
  const e = t.subTree.component;
  if (e)
    return e.asyncDep && !e.asyncResolved ? e : yl(e);
}
function Ks(t) {
  if (t)
    for (let e = 0; e < t.length; e++)
      t[e].flags |= 8;
}
function vl(t) {
  if (t.placeholder)
    return t.placeholder;
  const e = t.component;
  return e ? vl(e.subTree) : null;
}
const bl = (t) => t.__isSuspense;
function xh(t, e) {
  e && e.pendingBranch ? ut(t) ? e.effects.push(...t) : e.effects.push(t) : za(t);
}
const Mt = /* @__PURE__ */ Symbol.for("v-fgt"), cr = /* @__PURE__ */ Symbol.for("v-txt"), xe = /* @__PURE__ */ Symbol.for("v-cmt"), cn = /* @__PURE__ */ Symbol.for("v-stc"), qe = [];
let Zt = null;
function St(t = !1) {
  qe.push(Zt = t ? null : []);
}
function Sl() {
  qe.pop(), Zt = qe[qe.length - 1] || null;
}
let fn = 1;
function Bn(t, e = !1) {
  fn += t, t < 0 && Zt && e && (Zt.hasOnce = !0);
}
function Cl(t) {
  return t.dynamicChildren = fn > 0 ? Zt || We : null, Sl(), fn > 0 && Zt && Zt.push(t), t;
}
function Et(t, e, i, r, n, s) {
  return Cl(
    it(
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
  return Cl(
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
function Vn(t) {
  return t ? t.__v_isVNode === !0 : !1;
}
function li(t, e) {
  return t.type === e.type && t.key === e.key;
}
const wl = ({ key: t }) => t ?? null, Mn = ({
  ref: t,
  ref_key: e,
  ref_for: i
}) => (typeof t == "number" && (t = "" + t), t != null ? kt(t) || /* @__PURE__ */ Ut(t) || ft(t) ? { i: Qt, r: t, k: e, f: !!i } : t : null);
function it(t, e = null, i = null, r = 0, n = null, s = t === Mt ? 0 : 1, a = !1, o = !1) {
  const l = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: t,
    props: e,
    key: e && wl(e),
    ref: e && Mn(e),
    scopeId: Xa,
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
    ctx: Qt
  };
  return o ? (Hn(l, i), s & 128 && t.normalize(l)) : i && (l.shapeFlag |= kt(i) ? 8 : 16), fn > 0 && // avoid a block node from tracking itself
  !a && // has current parent block
  Zt && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (l.patchFlag > 0 || s & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  l.patchFlag !== 32 && Zt.push(l), l;
}
const dt = Ph;
function Ph(t, e = null, i = null, r = 0, n = null, s = !1) {
  if ((!t || t === Jc) && (t = xe), Vn(t)) {
    const o = si(
      t,
      e,
      !0
      /* mergeRef: true */
    );
    return i && Hn(o, i), fn > 0 && !s && Zt && (o.shapeFlag & 6 ? Zt[Zt.indexOf(t)] = o : Zt.push(o)), o.patchFlag = -2, o;
  }
  if (Lh(t) && (t = t.__vccOpts), e) {
    e = Th(e);
    let { class: o, style: l } = e;
    o && !kt(o) && (e.class = Fe(o)), Tt(l) && (/* @__PURE__ */ us(l) && !ut(l) && (l = Bt({}, l)), e.style = vn(l));
  }
  const a = kt(t) ? 1 : bl(t) ? 128 : or(t) ? 64 : Tt(t) ? 4 : ft(t) ? 2 : 0;
  return it(
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
function Th(t) {
  return t ? /* @__PURE__ */ us(t) || dl(t) ? Bt({}, t) : t : null;
}
function si(t, e, i = !1, r = !1) {
  const { props: n, ref: s, patchFlag: a, children: o, transition: l } = t, u = e ? xl(n || {}, e) : n, h = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: t.type,
    props: u,
    key: u && wl(u),
    ref: e && e.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      i && s ? ut(s) ? s.concat(Mn(e)) : [s, Mn(e)] : Mn(e)
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
    patchFlag: e && t.type !== Mt ? a === -1 ? 16 : a | 16 : a,
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
    ssContent: t.ssContent && si(t.ssContent),
    ssFallback: t.ssFallback && si(t.ssFallback),
    placeholder: t.placeholder,
    el: t.el,
    anchor: t.anchor,
    ctx: t.ctx,
    ce: t.ce,
    cacheIndex: t.cacheIndex
  };
  return l && r && fs(
    h,
    l.clone(h)
  ), h;
}
function Ee(t = " ", e = 0) {
  return dt(cr, null, t, e);
}
function zs(t, e) {
  const i = dt(cn, null, t);
  return i.staticCount = e, i;
}
function Ve(t = "", e = !1) {
  return e ? (St(), ti(xe, null, t)) : dt(xe, null, t);
}
function ue(t) {
  return t == null || typeof t == "boolean" ? dt(xe) : ut(t) ? dt(
    Mt,
    null,
    // #3666, avoid reference pollution when reusing vnode
    t.slice()
  ) : Vn(t) ? ve(t) : dt(cr, null, String(t));
}
function ve(t) {
  return t.el === null && t.patchFlag !== -1 || t.memo ? t : si(t);
}
function Hn(t, e) {
  let i = 0;
  const { shapeFlag: r } = t;
  if (e == null)
    e = null;
  else if (ut(e))
    i = 16;
  else if (typeof e == "object")
    if (r & 65) {
      const n = e.default;
      n && (n._c && (n._d = !1), Hn(t, n()), n._c && (n._d = !0));
      return;
    } else {
      i = 32;
      const n = e._;
      !n && !dl(e) ? e._ctx = Qt : n === 3 && Qt && (Qt.slots._ === 1 ? e._ = 1 : (e._ = 2, t.patchFlag |= 1024));
    }
  else if (ft(e)) {
    if (r & 65) {
      Hn(t, { default: e });
      return;
    }
    e = { default: e, _ctx: Qt }, i = 32;
  } else
    e = String(e), r & 64 ? (i = 16, e = [Ee(e)]) : i = 8;
  t.children = e, t.shapeFlag |= i;
}
function xl(...t) {
  const e = {};
  for (let i = 0; i < t.length; i++) {
    const r = t[i];
    for (const n in r)
      if (n === "class")
        e.class !== r.class && (e.class = Fe([e.class, r.class]));
      else if (n === "style")
        e.style = vn([e.style, r.style]);
      else if (Qn(n)) {
        const s = e[n], a = r[n];
        a && s !== a && !(ut(s) && s.includes(a)) ? e[n] = s ? [].concat(s, a) : a : a == null && s == null && // mergeProps({ 'onUpdate:modelValue': undefined }) should not retain
        // the model listener.
        !Zn(n) && (e[n] = a);
      } else n !== "" && (e[n] = r[n]);
  }
  return e;
}
function ae(t, e, i, r = null) {
  oe(t, e, 7, [
    i,
    r
  ]);
}
const Ah = al();
let Rh = 0;
function Eh(t, e, i) {
  const r = t.type, n = (e ? e.appContext : t.appContext) || Ah, s = {
    uid: Rh++,
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
    scope: new nc(
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
    propsOptions: gl(r, n),
    emitsOptions: ll(r, n),
    // emit
    emit: null,
    // to be set immediately
    emitted: null,
    // props default value
    propsDefaults: At,
    // inheritAttrs
    inheritAttrs: r.inheritAttrs,
    // state
    ctx: At,
    data: At,
    props: At,
    attrs: At,
    slots: At,
    refs: At,
    setupState: At,
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
  return s.ctx = { _: s }, s.root = e ? e.root : s, s.emit = lh.bind(null, s), t.ce && t.ce(s), s;
}
let Wt = null;
const hr = () => Wt || Qt;
let Wn, gn;
{
  const t = ir(), e = (i, r) => {
    let n;
    return (n = t[i]) || (n = t[i] = []), n.push(r), (s) => {
      n.length > 1 ? n.forEach((a) => a(s)) : n[0](s);
    };
  };
  Wn = e(
    "__VUE_INSTANCE_SETTERS__",
    (i) => Wt = i
  ), gn = e(
    "__VUE_SSR_SETTERS__",
    (i) => pn = i
  );
}
const wn = (t) => {
  const e = Wt;
  return Wn(t), t.scope.on(), () => {
    t.scope.off(), Wn(e);
  };
}, Ys = () => {
  Wt && Wt.scope.off(), Wn(null);
};
function Pl(t) {
  return t.vnode.shapeFlag & 4;
}
let pn = !1;
function Mh(t, e = !1, i = !1) {
  e && gn(e);
  const { props: r, children: n } = t.vnode, s = Pl(t);
  gh(t, r, s, e), yh(t, n, i || e);
  const a = s ? Fh(t, e) : void 0;
  return e && gn(!1), a;
}
function Fh(t, e) {
  const i = t.type;
  t.accessCache = /* @__PURE__ */ Object.create(null), t.proxy = new Proxy(t.ctx, Zc);
  const { setup: r } = i;
  if (r) {
    Ce();
    const n = t.setupContext = r.length > 1 ? Oh(t) : null, s = wn(t), a = bn(
      r,
      t,
      0,
      [
        t.props,
        n
      ]
    ), o = Ca(a);
    if (we(), s(), (o || t.sp) && !an(t) && il(t), o) {
      if (a.then(Ys, Ys), e)
        return a.then((l) => {
          gn(!0);
          try {
            $s(t, l, e);
          } finally {
            gn(!1);
          }
        }).catch((l) => {
          sr(l, t, 0);
        });
      t.asyncDep = a;
    } else
      $s(t, a);
  } else
    Tl(t);
}
function $s(t, e, i) {
  ft(e) ? t.type.__ssrInlineRender ? t.ssrRender = e : t.render = e : Tt(e) && (t.setupState = ja(e)), Tl(t);
}
function Tl(t, e, i) {
  const r = t.type;
  t.render || (t.render = r.render || re);
  {
    const n = wn(t);
    Ce();
    try {
      th(t);
    } finally {
      we(), n();
    }
  }
}
const kh = {
  get(t, e) {
    return Ht(t, "get", ""), t[e];
  }
};
function Oh(t) {
  const e = (i) => {
    t.exposed = i || {};
  };
  return {
    attrs: new Proxy(t.attrs, kh),
    slots: t.slots,
    emit: t.emit,
    expose: e
  };
}
function ur(t) {
  return t.exposed ? t.exposeProxy || (t.exposeProxy = new Proxy(ja(wc(t.exposed)), {
    get(e, i) {
      if (i in e)
        return e[i];
      if (i in ln)
        return ln[i](t);
    },
    has(e, i) {
      return i in e || i in ln;
    }
  })) : t.proxy;
}
function Nh(t, e = !0) {
  return ft(t) ? t.displayName || t.name : t.name || e && t.__name;
}
function Lh(t) {
  return ft(t) && "__vccOpts" in t;
}
const jn = (t, e) => /* @__PURE__ */ Rc(t, e, pn);
function Dh(t, e, i) {
  try {
    Bn(-1);
    const r = arguments.length;
    return r === 2 ? Tt(e) && !ut(e) ? Vn(e) ? dt(t, null, [e]) : dt(t, e) : dt(t, null, e) : (r > 3 ? i = Array.prototype.slice.call(arguments, 2) : r === 3 && Vn(i) && (i = [i]), dt(t, e, i));
  } finally {
    Bn(1);
  }
}
const Gh = "3.5.43";
/**
* @vue/runtime-dom v3.5.43
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let $r;
const Xs = typeof window < "u" && window.trustedTypes;
if (Xs)
  try {
    $r = /* @__PURE__ */ Xs.createPolicy("vue", {
      createHTML: (t) => t
    });
  } catch {
  }
const Al = $r ? (t) => $r.createHTML(t) : (t) => t, Ih = "http://www.w3.org/2000/svg", Uh = "http://www.w3.org/1998/Math/MathML", ye = typeof document < "u" ? document : null, Js = ye && /* @__PURE__ */ ye.createElement("template"), Bh = {
  insert: (t, e, i) => {
    e.insertBefore(t, i || null);
  },
  remove: (t) => {
    const e = t.parentNode;
    e && e.removeChild(t);
  },
  createElement: (t, e, i, r) => {
    const n = e === "svg" ? ye.createElementNS(Ih, t) : e === "mathml" ? ye.createElementNS(Uh, t) : i ? ye.createElement(t, { is: i }) : ye.createElement(t);
    return t === "select" && r && r.multiple != null && n.setAttribute("multiple", r.multiple), n;
  },
  createText: (t) => ye.createTextNode(t),
  createComment: (t) => ye.createComment(t),
  setText: (t, e) => {
    t.nodeValue = e;
  },
  setElementText: (t, e) => {
    t.textContent = e;
  },
  parentNode: (t) => t.parentNode,
  nextSibling: (t) => t.nextSibling,
  querySelector: (t) => ye.querySelector(t),
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
      Js.innerHTML = Al(
        r === "svg" ? `<svg>${t}</svg>` : r === "mathml" ? `<math>${t}</math>` : t
      );
      const o = Js.content;
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
}, Vh = /* @__PURE__ */ Symbol("_vtc");
function Hh(t, e, i) {
  const r = t[Vh];
  r && (e = (e ? [e, ...r] : [...r]).join(" ")), e == null ? t.removeAttribute("class") : i ? t.setAttribute("class", e) : t.className = e;
}
const qn = /* @__PURE__ */ Symbol("_vod"), Rl = /* @__PURE__ */ Symbol("_vsh"), Wh = {
  // used for prop mismatch check during hydration
  name: "show",
  beforeMount(t, { value: e }, { transition: i }) {
    t[qn] = t.style.display === "none" ? "" : t.style.display, i && e ? i.beforeEnter(t) : ci(t, e);
  },
  mounted(t, { value: e }, { transition: i }) {
    i && e && i.enter(t);
  },
  updated(t, { value: e, oldValue: i }, { transition: r }) {
    !e != !i && (r ? e ? (r.beforeEnter(t), ci(t, !0), r.enter(t)) : r.leave(t, () => {
      ci(t, !1);
    }) : ci(t, e));
  },
  beforeUnmount(t, { value: e }) {
    ci(t, e);
  }
};
function ci(t, e) {
  t.style.display = e ? t[qn] : "none", t[Rl] = !e;
}
const El = /* @__PURE__ */ Symbol("");
function jh(t) {
  const e = hr();
  if (!e)
    return;
  const i = e.ut = (n = t(e.proxy)) => {
    Array.from(
      document.querySelectorAll(`[data-v-owner="${e.uid}"]`)
    ).forEach((s) => Kn(s, n));
  }, r = () => {
    const n = t(e.proxy);
    e.ce ? Kn(e.ce, n) : Xr(e.subTree, n), i(n);
  };
  rl(() => {
    za(r);
  }), Ke(() => {
    te(r, re, { flush: "post" });
    const n = new MutationObserver(r);
    n.observe(e.subTree.el.parentNode, { childList: !0 }), Cn(() => n.disconnect());
  });
}
function Xr(t, e) {
  if (t.shapeFlag & 128) {
    const i = t.suspense;
    t = i.activeBranch, i.pendingBranch && !i.isHydrating && i.effects.push(() => {
      Xr(i.activeBranch, e);
    });
  }
  for (; t.component; )
    t = t.component.subTree;
  if (t.shapeFlag & 1 && t.el)
    Kn(t.el, e);
  else if (t.type === Mt)
    t.children.forEach((i) => Xr(i, e));
  else if (t.type === cn) {
    let { el: i, anchor: r } = t;
    for (; i && (Kn(i, e), i !== r); )
      i = i.nextSibling;
  }
}
function Kn(t, e) {
  if (t.nodeType === 1) {
    const i = t.style;
    let r = "";
    for (const n in e) {
      const s = ic(e[n]);
      i.setProperty(`--${n}`, s), r += `--${n}: ${s};`;
    }
    i[El] = r;
  }
}
const qh = /(?:^|;)\s*display\s*:/;
function Kh(t, e, i) {
  const r = t.style, n = kt(i);
  let s = !1;
  if (i && !n) {
    if (e)
      if (kt(e))
        for (const a of e.split(";")) {
          const o = a.slice(0, a.indexOf(":")).trim();
          i[o] == null && en(r, o, "");
        }
      else
        for (const a in e)
          i[a] == null && en(r, a, "");
    for (const a in i) {
      a === "display" && (s = !0);
      const o = i[a];
      o != null ? Yh(
        t,
        a,
        !kt(e) && e ? e[a] : void 0,
        o
      ) || en(r, a, o) : en(r, a, "");
    }
  } else if (n) {
    if (e !== i) {
      const a = r[El];
      a && (i += ";" + a), r.cssText = i, s = qh.test(i);
    }
  } else e && t.removeAttribute("style");
  qn in t && (t[qn] = s ? r.display : "", t[Rl] && (r.display = "none"));
}
const Rn = /\s*!important$/;
function en(t, e, i) {
  if (ut(i))
    i.forEach((r) => en(t, e, r));
  else if (i == null && (i = ""), e.startsWith("--"))
    Rn.test(i) ? t.setProperty(e, i.replace(Rn, ""), "important") : t.setProperty(e, i);
  else {
    const r = zh(t, e);
    Rn.test(i) ? t.setProperty(
      ze(r),
      i.replace(Rn, ""),
      "important"
    ) : t[r] = i;
  }
}
const Qs = ["Webkit", "Moz", "ms"], wr = {};
function zh(t, e) {
  const i = wr[e];
  if (i)
    return i;
  let r = Yt(e);
  if (r !== "filter" && r in t)
    return wr[e] = r;
  r = er(r);
  for (let n = 0; n < Qs.length; n++) {
    const s = Qs[n] + r;
    if (s in t)
      return wr[e] = s;
  }
  return e;
}
function Yh(t, e, i, r) {
  return t.tagName === "TEXTAREA" && (e === "width" || e === "height") && kt(r) && i === r;
}
const Zs = "http://www.w3.org/1999/xlink";
function to(t, e, i, r, n, s = Zl(e)) {
  r && e.startsWith("xlink:") ? i == null ? t.removeAttributeNS(Zs, e.slice(6, e.length)) : t.setAttributeNS(Zs, e, i) : i == null || s && !Ta(i) ? t.removeAttribute(e) : t.setAttribute(
    e,
    s ? "" : fe(i) ? String(i) : i
  );
}
function eo(t, e, i, r, n) {
  if (e === "innerHTML" || e === "textContent") {
    i != null && (t[e] = e === "innerHTML" ? Al(i) : i);
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
    o === "boolean" ? i = Ta(i) : i == null && o === "string" ? (i = "", a = !0) : o === "number" && (i = 0, a = !0);
  }
  try {
    t[e] = i;
  } catch {
  }
  a && t.removeAttribute(n || e);
}
function $h(t, e, i, r) {
  t.addEventListener(e, i, r);
}
function Xh(t, e, i, r) {
  t.removeEventListener(e, i, r);
}
const io = /* @__PURE__ */ Symbol("_vei");
function Jh(t, e, i, r, n = null) {
  const s = t[io] || (t[io] = {}), a = s[e];
  if (r && a)
    a.value = r;
  else {
    const [o, l] = tu(e);
    if (r) {
      const u = s[e] = nu(
        r,
        n
      );
      $h(t, o, u, l);
    } else a && (Xh(t, o, a, l), s[e] = void 0);
  }
}
const Qh = /(Once|Passive|Capture)$/, Zh = /^on:?(?:Once|Passive|Capture)$/;
function tu(t) {
  let e, i;
  for (; (i = t.match(Qh)) && !Zh.test(t); )
    e || (e = {}), t = t.slice(0, t.length - i[1].length), e[i[1].toLowerCase()] = !0;
  return [t[2] === ":" ? t.slice(3) : ze(t.slice(2)), e];
}
let xr = 0;
const eu = /* @__PURE__ */ Promise.resolve(), iu = () => xr || (eu.then(() => xr = 0), xr = Date.now());
function nu(t, e) {
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
        u && oe(
          u,
          e,
          5,
          o
        );
      }
    } else
      oe(
        n,
        e,
        5,
        [r]
      );
  };
  return i.value = t, i.attached = iu(), i;
}
const no = (t) => t.charCodeAt(0) === 111 && t.charCodeAt(1) === 110 && // lowercase letter
t.charCodeAt(2) > 96 && t.charCodeAt(2) < 123, ru = (t, e, i, r, n, s) => {
  const a = n === "svg";
  e === "class" ? Hh(t, r, a) : e === "style" ? Kh(t, i, r) : Qn(e) ? Zn(e) || Jh(t, e, i, r, s) : (e[0] === "." ? (e = e.slice(1), !0) : e[0] === "^" ? (e = e.slice(1), !1) : su(t, e, r, a)) ? (eo(t, e, r), !t.tagName.includes("-") && (e === "value" || e === "checked" || e === "selected") && to(t, e, r, a, s, e !== "value")) : /* #11081 force set props for possible async custom element */ t._isVueCE && // #12408 check if it's declared prop or it's async custom element
  (ou(t, e) || // @ts-expect-error _def is private
  t._def.__asyncLoader && (/[A-Z]/.test(e) || !kt(r))) ? eo(t, Yt(e), r, s, e) : (e === "true-value" ? t._trueValue = r : e === "false-value" && (t._falseValue = r), to(t, e, r, a));
};
function su(t, e, i, r) {
  if (r)
    return !!(e === "innerHTML" || e === "textContent" || e in t && no(e) && ft(i));
  if (e === "spellcheck" || e === "draggable" || e === "translate" || e === "autocorrect" || e === "sandbox" && t.tagName === "IFRAME" || e === "form" || e === "list" && t.tagName === "INPUT" || e === "type" && t.tagName === "TEXTAREA")
    return !1;
  if (e === "width" || e === "height") {
    const n = t.tagName;
    if (n === "IMG" || n === "VIDEO" || n === "CANVAS" || n === "SOURCE")
      return !1;
  }
  return no(e) && kt(i) ? !1 : e in t;
}
function ou(t, e) {
  const i = (
    // @ts-expect-error _def is private
    t._def.props
  );
  if (!i)
    return !1;
  const r = Yt(e);
  return Array.isArray(i) ? i.some((n) => Yt(n) === r) : Object.keys(i).some((n) => Yt(n) === r);
}
const au = ["ctrl", "shift", "alt", "meta"], lu = {
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
  exact: (t, e) => au.some((i) => t[`${i}Key`] && !e.includes(i))
}, Jr = (t, e) => {
  if (!t) return t;
  const i = t._withMods || (t._withMods = {}), r = e.join(".");
  return i[r] || (i[r] = ((n, ...s) => {
    for (let a = 0; a < e.length; a++) {
      const o = lu[e[a]];
      if (o && o(n, e)) return;
    }
    return t(n, ...s);
  }));
}, cu = /* @__PURE__ */ Bt({ patchProp: ru }, Bh);
let ro;
function hu() {
  return ro || (ro = bh(cu));
}
const uu = ((...t) => {
  const e = hu().createApp(...t), { mount: i } = e;
  return e.mount = (r) => {
    const n = fu(r);
    if (!n) return;
    const s = e._component;
    !ft(s) && !s.render && !s.template && (s.template = n.innerHTML), n.nodeType === 1 && (n.textContent = "");
    const a = i(n, !1, du(n));
    return n instanceof Element && (n.removeAttribute("v-cloak"), n.setAttribute("data-v-app", "")), a;
  }, e;
});
function du(t) {
  if (t instanceof SVGElement)
    return "svg";
  if (typeof MathMLElement == "function" && t instanceof MathMLElement)
    return "mathml";
}
function fu(t) {
  return kt(t) ? document.querySelector(t) : t;
}
var so = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function gu(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
}
var Fn = { exports: {} }, hi = {}, Pr = {}, Tr = {}, oo;
function pt() {
  return oo || (oo = 1, (function(t) {
    Object.defineProperty(t, "__esModule", { value: !0 }), t._registerNode = t.Konva = t.glob = void 0;
    const e = Math.PI / 180;
    function i() {
      return typeof window < "u" && ({}.toString.call(window) === "[object Window]" || {}.toString.call(window) === "[object global]");
    }
    t.glob = typeof so < "u" ? so : typeof window < "u" ? window : typeof WorkerGlobalScope < "u" ? self : {}, t.Konva = {
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
  })(Tr)), Tr;
}
var Ar = {}, ao;
function Nt() {
  return ao || (ao = 1, (function(t) {
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
          const D = 2 * C - w, U = [0, 0, 0];
          for (let V = 0; V < 3; V++)
            T = x + 1 / 3 * -(V - 1), T < 0 && T++, T > 1 && T--, 6 * T < 1 ? M = D + (w - D) * 6 * T : 2 * T < 1 ? M = w : 3 * T < 2 ? M = D + (w - D) * (2 / 3 - T) * 6 : M = D, U[V] = M * 255;
          return {
            r: Math.round(U[0]),
            g: Math.round(U[1]),
            b: Math.round(U[2]),
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
          const U = ((E - c) * (v - c) + (C - d) * (x - d)) / D;
          U < 0 ? (w = c, T = d, M = (c - E) * (c - E) + (d - C) * (d - C)) : U > 1 ? (w = v, T = x, M = (v - E) * (v - E) + (x - C) * (x - C)) : (w = c + U * (v - c), T = d + U * (x - d), M = (w - E) * (w - E) + (T - C) * (T - C));
        }
        return [w, T, M];
      },
      _getProjectionToLine(c, d, v) {
        const x = t.Util.cloneObject(c);
        let E = Number.MAX_VALUE;
        return d.forEach(function(C, w) {
          if (!v && w === d.length - 1)
            return;
          const T = d[(w + 1) % d.length], M = t.Util._getProjectionToSegment(C.x, C.y, T.x, T.y, c.x, c.y), D = M[0], U = M[1], V = M[2];
          V < E && (x.x = D, x.y = U, E = V);
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
  })(Ar)), Ar;
}
var ui = {}, me = {}, _e = {}, lo;
function Ml() {
  if (lo) return _e;
  lo = 1, Object.defineProperty(_e, "__esModule", { value: !0 }), _e.HitContext = _e.SceneContext = _e.Context = void 0;
  const t = Nt(), e = pt();
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
  _e.Context = p, m.forEach(function(P) {
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
  _e.SceneContext = y;
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
  return _e.HitContext = S, _e;
}
var co;
function dr() {
  if (co) return me;
  co = 1, Object.defineProperty(me, "__esModule", { value: !0 }), me.HitCanvas = me.SceneCanvas = me.Canvas = void 0;
  const t = Nt(), e = Ml(), i = pt();
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
  me.Canvas = s;
  class a extends s {
    constructor(u = { width: 0, height: 0, willReadFrequently: !1 }) {
      super(u), this.context = new e.SceneContext(this, {
        willReadFrequently: u.willReadFrequently
      }), this.setSize(u.width, u.height);
    }
  }
  me.SceneCanvas = a;
  class o extends s {
    constructor(u = { width: 0, height: 0 }) {
      super(u), this.hitCanvas = !0, this.context = new e.HitContext(this), this.setSize(u.width, u.height);
    }
  }
  return me.HitCanvas = o, me;
}
var Rr = {}, ho;
function vs() {
  return ho || (ho = 1, (function(t) {
    Object.defineProperty(t, "__esModule", { value: !0 }), t.DD = void 0;
    const e = pt(), i = Nt();
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
  })(Rr)), Rr;
}
var Er = {}, $t = {}, uo;
function yt() {
  if (uo) return $t;
  uo = 1, Object.defineProperty($t, "__esModule", { value: !0 }), $t.RGBComponent = r, $t.alphaComponent = n, $t.getNumberValidator = s, $t.getNumberOrArrayOfNumbersValidator = a, $t.getNumberOrAutoValidator = o, $t.getStringValidator = l, $t.getStringOrGradientValidator = u, $t.getFunctionValidator = h, $t.getNumberArrayValidator = _, $t.getBooleanValidator = m, $t.getComponentValidator = f;
  const t = pt(), e = Nt();
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
  return $t;
}
var fo;
function mt() {
  return fo || (fo = 1, (function(t) {
    Object.defineProperty(t, "__esModule", { value: !0 }), t.Factory = void 0;
    const e = Nt(), i = yt(), r = "get", n = "set";
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
  })(Er)), Er;
}
var go;
function Dt() {
  if (go) return ui;
  go = 1, Object.defineProperty(ui, "__esModule", { value: !0 }), ui.Node = void 0;
  const t = dr(), e = vs(), i = mt(), r = pt(), n = Nt(), s = yt(), a = "absoluteOpacity", o = "allEventListeners", l = "absoluteTransform", u = "absoluteScale", h = "canvas", _ = "Change", m = "children", f = "konva", p = "listening", y = "mouseenter", S = "mouseleave", P = "pointerenter", g = "pointerleave", c = "touchenter", d = "touchleave", v = "set", x = "Shape", E = " ", C = "stage", w = "transform", T = "Stage", M = "visible", D = [
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
  let U = 1, V = class Qr {
    constructor(b) {
      this._id = U++, this.eventListeners = {}, this.attrs = {}, this.index = 0, this._allEventListeners = null, this.parent = null, this._cache = /* @__PURE__ */ new Map(), this._attachedDepsListeners = /* @__PURE__ */ new Map(), this._lastPos = null, this._batchingTransformChange = !1, this._needClearTransformCache = !1, this._filterUpToDate = !1, this._isUnderCache = !1, this._dragEventId = null, this._shouldFireChangeEvents = !1, this.setAttrs(b), this._shouldFireChangeEvents = !0;
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
      let F = Math.ceil(A.width || k.width), L = Math.ceil(A.height || k.height), B = A.pixelRatio, I = A.x === void 0 ? Math.floor(k.x) : A.x, Z = A.y === void 0 ? Math.floor(k.y) : A.y, st = A.offset || 0, j = A.drawBorder || !1, O = A.hitCanvasPixelRatio || 1;
      if (!F || !L) {
        n.Util.error("Can not cache the node. Width or height of the node equals 0. Caching is skipped.");
        return;
      }
      const W = Math.abs(Math.round(k.x) - I) > 0.5 ? 1 : 0, nt = Math.abs(Math.round(k.y) - Z) > 0.5 ? 1 : 0;
      F += st * 2 + W, L += st * 2 + nt, I -= st, Z -= st;
      const rt = new t.SceneCanvas({
        pixelRatio: B,
        width: F,
        height: L
      }), X = new t.SceneCanvas({
        pixelRatio: B,
        width: 0,
        height: 0,
        willReadFrequently: !0
      }), R = new t.HitCanvas({
        pixelRatio: O,
        width: F,
        height: L
      }), N = rt.getContext(), H = R.getContext(), q = new t.SceneCanvas({
        width: rt.width / rt.pixelRatio + Math.abs(I),
        height: rt.height / rt.pixelRatio + Math.abs(Z),
        pixelRatio: rt.pixelRatio
      }), $ = q.getContext();
      return R.isCache = !0, rt.isCache = !0, this._cache.delete(h), this._filterUpToDate = !1, A.imageSmoothingEnabled === !1 && (rt.getContext()._context.imageSmoothingEnabled = !1, X.getContext()._context.imageSmoothingEnabled = !1), N.save(), H.save(), $.save(), N.translate(-I, -Z), H.translate(-I, -Z), $.translate(-I, -Z), q.x = I, q.y = Z, this._isUnderCache = !0, this._clearSelfAndDescendantCache(a), this._clearSelfAndDescendantCache(u), this.drawScene(rt, this, q), this.drawHit(R, this), this._isUnderCache = !1, N.restore(), H.restore(), j && (N.save(), N.beginPath(), N.rect(0, 0, F, L), N.closePath(), N.setAttr("strokeStyle", "red"), N.setAttr("lineWidth", 5), N.stroke(), N.restore()), this._cache.set(h, {
        scene: rt,
        filter: X,
        hit: R,
        buffer: q,
        x: I,
        y: Z
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
      let F = 1 / 0, L = 1 / 0, B = -1 / 0, I = -1 / 0;
      const Z = this.getAbsoluteTransform(A);
      return k.forEach(function(st) {
        const j = Z.point(st);
        F === void 0 && (F = B = j.x, L = I = j.y), F = Math.min(F, j.x), L = Math.min(L, j.y), B = Math.max(B, j.x), I = Math.max(I, j.y);
      }), {
        x: F,
        y: L,
        width: B - F,
        height: I - L
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
      let b = this.filters(), A = this._getCanvasCache(), k = A.scene, F = A.filter, L = F.getContext(), B, I, Z, st;
      if (b) {
        if (!this._filterUpToDate) {
          const j = k.pixelRatio;
          F.setSize(k.width / k.pixelRatio, k.height / k.pixelRatio);
          try {
            for (B = b.length, L.clear(), L.drawImage(k._canvas, 0, 0, k.getWidth() / j, k.getHeight() / j), I = L.getImageData(0, 0, F.getWidth(), F.getHeight()), Z = 0; Z < B; Z++) {
              if (st = b[Z], typeof st != "function") {
                n.Util.error("Filter should be type of function, but got " + typeof st + " instead. Please check correct filters");
                continue;
              }
              st.call(this, I), L.putImageData(I, 0, 0);
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
        const B = k[F].split("."), I = B[0], Z = B[1] || "";
        this.eventListeners[I] || (this.eventListeners[I] = []), this.eventListeners[I].push({ name: Z, handler: A });
      }
      return this;
    }
    off(b, A) {
      let k = (b || "").split(E), F = k.length, L, B, I, Z, st, j;
      if (this._cache && this._cache.delete(o), !b)
        for (B in this.eventListeners)
          this._off(B);
      for (L = 0; L < F; L++)
        if (I = k[L], Z = I.split("."), st = Z[0], j = Z[1], st)
          this.eventListeners[st] && this._off(st, j, A);
        else
          for (B in this.eventListeners)
            this._off(B, j, A);
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
        const B = L.target.findAncestors(A, !0, F);
        for (let I = 0; I < B.length; I++)
          L = n.Util.cloneObject(L), L.currentTarget = B[I], k.call(B[I], L);
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
      e.DD._dragElements.forEach((B) => {
        B.dragStatus === "dragging" && (B.node.nodeType === "Stage" || B.node.getLayer() === k) && (F = !0);
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
      let b = this.getDepth(), A = this, k = 0, F, L, B, I;
      function Z(j) {
        for (F = [], L = j.length, B = 0; B < L; B++)
          I = j[B], k++, I.nodeType !== x && (F = F.concat(I.getChildren().slice())), I._id === A._id && (B = L);
        F.length > 0 && F[0].getDepth() <= b && Z(F);
      }
      const st = this.getStage();
      return A.nodeType !== T && st && Z(st.getChildren()), k;
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
      const F = this.getAbsoluteTransform(b).getMatrix(), L = new n.Transform(), B = this.offset();
      return L.m = F.slice(), L.translate(B.x, B.y), L.getTranslation();
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
      let k = [], F = this.getParent(), L, B;
      if (!(A && A._id === this._id)) {
        for (k.unshift(this); F && (!A || F._id !== A._id); )
          k.unshift(F), F = F.parent;
        for (L = k.length, B = 0; B < L; B++)
          b(k[B]);
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
      let b = this.getAttrs(), A, k, F, L, B;
      const I = {
        attrs: {},
        className: this.getClassName()
      };
      for (A in b)
        k = b[A], B = n.Util.isObject(k) && !n.Util._isPlainObject(k) && !n.Util._isArray(k), !B && (F = typeof this[A] == "function" && this[A], delete b[A], L = F ? F.call(this) : null, b[A] = k, L !== k && (I.attrs[A] = k));
      return n.Util._prepareToStringify(I);
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
          const F = this.attrs.x || 0, L = this.attrs.y || 0, B = this.attrs.offsetX || 0, I = this.attrs.offsetY || 0;
          A.translate(F - B, L - I);
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
      const F = this.x(), L = this.y(), B = r.Konva.getAngle(this.rotation()), I = (b = this.attrs.scaleX) !== null && b !== void 0 ? b : 1, Z = (A = this.attrs.scaleY) !== null && A !== void 0 ? A : 1, st = this.attrs.skewX || 0, j = this.attrs.skewY || 0, O = this.attrs.offsetX || 0, W = this.attrs.offsetY || 0;
      return (F !== 0 || L !== 0) && k.translate(F, L), B !== 0 && k.rotate(B), (st !== 0 || j !== 0) && k.skew(st, j), (I !== 1 || Z !== 1) && k.scale(I, Z), (O !== 0 || W !== 0) && k.translate(-1 * O, -1 * W), k.dirty = !1, k;
    }
    clone(b) {
      let A = n.Util.cloneObject(this.attrs), k, F, L, B, I;
      for (k in b)
        A[k] = b[k];
      const Z = new this.constructor(A);
      for (k in this.eventListeners)
        for (F = this.eventListeners[k], L = F.length, B = 0; B < L; B++)
          I = F[B], I.name.indexOf(f) < 0 && (Z.eventListeners[k] || (Z.eventListeners[k] = []), Z.eventListeners[k].push(I));
      return Z;
    }
    _toKonvaCanvas(b) {
      b = b || {};
      const A = this.getClientRect(), k = this.getStage(), F = b.x !== void 0 ? b.x : Math.floor(A.x), L = b.y !== void 0 ? b.y : Math.floor(A.y), B = b.pixelRatio || 1, I = new t.SceneCanvas({
        width: b.width || Math.ceil(A.width) || (k ? k.width() : 0),
        height: b.height || Math.ceil(A.height) || (k ? k.height() : 0),
        pixelRatio: B
      }), Z = I.getContext(), st = new t.SceneCanvas({
        width: I.width / I.pixelRatio + Math.abs(F),
        height: I.height / I.pixelRatio + Math.abs(L),
        pixelRatio: I.pixelRatio
      });
      return b.imageSmoothingEnabled === !1 && (Z._context.imageSmoothingEnabled = !1), Z.save(), (F || L) && Z.translate(-1 * F, -1 * L), this.drawScene(I, void 0, st), Z.restore(), I;
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
      let F = this.eventListeners[b], L, B, I;
      for (L = 0; L < F.length; L++)
        if (B = F[L].name, I = F[L].handler, (B !== "konva" || A === "konva") && (!A || B === A) && (!k || k === I)) {
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
        const B = F.indexOf(b) !== -1 && k && k.isAncestorOf && k.isAncestorOf(this) && !k.isAncestorOf(this.parent);
        (A && !A.cancelBubble || !A) && this.parent && this.parent.isListening() && !B && (k && k.parent ? this._fireAndBubble.call(this.parent, b, A, k) : this._fireAndBubble.call(this.parent, b, A));
      }
    }
    _getProtoListeners(b) {
      var A, k, F;
      const L = (A = this._cache.get(o)) !== null && A !== void 0 ? A : {};
      let B = L == null ? void 0 : L[b];
      if (B === void 0) {
        B = [];
        let I = Object.getPrototypeOf(this);
        for (; I; ) {
          const Z = (F = (k = I.eventListeners) === null || k === void 0 ? void 0 : k[b]) !== null && F !== void 0 ? F : [];
          B.push(...Z), I = Object.getPrototypeOf(I);
        }
        L[b] = B, this._cache.set(o, L);
      }
      return B;
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
        const B = L.call(this, F, b);
        B ? F = B : n.Util.warn("dragBoundFunc did not return any value. That is unexpected behavior. You must return new absolute position from dragBoundFunc.");
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
      let k = Qr.prototype.getClassName.call(b), F = b.children, L, B, I;
      A && (b.attrs.container = A), r.Konva[k] || (n.Util.warn('Can not find a node with class name "' + k + '". Fallback to "Shape".'), k = "Shape");
      const Z = r.Konva[k];
      if (L = new Z(b.attrs), F)
        for (B = F.length, I = 0; I < B; I++)
          L.add(Qr._createNode(F[I]));
      return L;
    }
  };
  ui.Node = V, V.prototype.nodeType = "Node", V.prototype._attrsAffectingSize = [], V.prototype.eventListeners = {}, V.prototype.on.call(V.prototype, D, function() {
    if (this._batchingTransformChange) {
      this._needClearTransformCache = !0;
      return;
    }
    this._clearCache(w), this._clearSelfAndDescendantCache(l);
  }), V.prototype.on.call(V.prototype, "visibleChange.konva", function() {
    this._clearSelfAndDescendantCache(M);
  }), V.prototype.on.call(V.prototype, "listeningChange.konva", function() {
    this._clearSelfAndDescendantCache(p);
  }), V.prototype.on.call(V.prototype, "opacityChange.konva", function() {
    this._clearSelfAndDescendantCache(a);
  });
  const G = i.Factory.addGetterSetter;
  return G(V, "zIndex"), G(V, "absolutePosition"), G(V, "position"), G(V, "x", 0, (0, s.getNumberValidator)()), G(V, "y", 0, (0, s.getNumberValidator)()), G(V, "globalCompositeOperation", "source-over", (0, s.getStringValidator)()), G(V, "opacity", 1, (0, s.getNumberValidator)()), G(V, "name", "", (0, s.getStringValidator)()), G(V, "id", "", (0, s.getStringValidator)()), G(V, "rotation", 0, (0, s.getNumberValidator)()), i.Factory.addComponentsGetterSetter(V, "scale", ["x", "y"]), G(V, "scaleX", 1, (0, s.getNumberValidator)()), G(V, "scaleY", 1, (0, s.getNumberValidator)()), i.Factory.addComponentsGetterSetter(V, "skew", ["x", "y"]), G(V, "skewX", 0, (0, s.getNumberValidator)()), G(V, "skewY", 0, (0, s.getNumberValidator)()), i.Factory.addComponentsGetterSetter(V, "offset", ["x", "y"]), G(V, "offsetX", 0, (0, s.getNumberValidator)()), G(V, "offsetY", 0, (0, s.getNumberValidator)()), G(V, "dragDistance", void 0, (0, s.getNumberValidator)()), G(V, "width", 0, (0, s.getNumberValidator)()), G(V, "height", 0, (0, s.getNumberValidator)()), G(V, "listening", !0, (0, s.getBooleanValidator)()), G(V, "preventDefault", !0, (0, s.getBooleanValidator)()), G(V, "filters", void 0, function(J) {
    return this._filterUpToDate = !1, J;
  }), G(V, "visible", !0, (0, s.getBooleanValidator)()), G(V, "transformsEnabled", "all", (0, s.getStringValidator)()), G(V, "size"), G(V, "dragBoundFunc"), G(V, "draggable", !1, (0, s.getBooleanValidator)()), i.Factory.backCompat(V, {
    rotateDeg: "rotate",
    setRotationDeg: "setRotation",
    getRotationDeg: "getRotation"
  }), ui;
}
var di = {}, po;
function fr() {
  if (po) return di;
  po = 1, Object.defineProperty(di, "__esModule", { value: !0 }), di.Container = void 0;
  const t = mt(), e = Dt(), i = yt();
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
  return di.Container = r, t.Factory.addComponentsGetterSetter(r, "clip", [
    "x",
    "y",
    "width",
    "height"
  ]), t.Factory.addGetterSetter(r, "clipX", void 0, (0, i.getNumberValidator)()), t.Factory.addGetterSetter(r, "clipY", void 0, (0, i.getNumberValidator)()), t.Factory.addGetterSetter(r, "clipWidth", void 0, (0, i.getNumberValidator)()), t.Factory.addGetterSetter(r, "clipHeight", void 0, (0, i.getNumberValidator)()), t.Factory.addGetterSetter(r, "clipFunc"), di;
}
var Mr = {}, Ae = {}, mo;
function Fl() {
  if (mo) return Ae;
  mo = 1, Object.defineProperty(Ae, "__esModule", { value: !0 }), Ae.getCapturedShape = r, Ae.createEvent = n, Ae.hasPointerCapture = s, Ae.setPointerCapture = a, Ae.releaseCapture = o;
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
  return Ae;
}
var _o;
function pu() {
  return _o || (_o = 1, (function(t) {
    Object.defineProperty(t, "__esModule", { value: !0 }), t.Stage = t.stages = void 0;
    const e = Nt(), i = mt(), r = fr(), n = pt(), s = dr(), a = vs(), o = pt(), l = Fl(), u = "Stage", h = "string", _ = "px", m = "mouseout", f = "mouseleave", p = "mouseover", y = "mouseenter", S = "mousemove", P = "mousedown", g = "mouseup", c = "pointermove", d = "pointerdown", v = "pointerup", x = "pointercancel", E = "lostpointercapture", C = "pointerout", w = "pointerleave", T = "pointerover", M = "pointerenter", D = "contextmenu", U = "touchstart", V = "touchend", G = "touchmove", J = "touchcancel", b = "wheel", A = 5, k = [
      [y, "_pointerenter"],
      [P, "_pointerdown"],
      [S, "_pointermove"],
      [g, "_pointerup"],
      [f, "_pointerleave"],
      [U, "_pointerdown"],
      [G, "_pointermove"],
      [V, "_pointerup"],
      [J, "_pointercancel"],
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
        [d]: U,
        [v]: V,
        [x]: J,
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
    }, L = (j) => j.indexOf("pointer") >= 0 ? "pointer" : j.indexOf("touch") >= 0 ? "touch" : "mouse", B = (j) => {
      const O = L(j);
      if (O === "pointer")
        return n.Konva.pointerEventsEnabled && F.pointer;
      if (O === "touch")
        return F.touch;
      if (O === "mouse")
        return F.mouse;
    };
    function I(j = {}) {
      return (j.clipFunc || j.clipWidth || j.clipHeight) && e.Util.warn("Stage does not support clipping. Please use clip for Layers or Groups."), j;
    }
    const Z = "Pointer position is missing and not registered by the stage. Looks like it is outside of the stage container. You can set it manually from event: stage.setPointersPositions(event);";
    t.stages = [];
    class st extends r.Container {
      constructor(O) {
        super(I(O)), this._pointerPositions = [], this._changedPointerPositions = [], this._buildDOM(), this._bindContentEvents(), t.stages.push(this), this.on("widthChange.konva heightChange.konva", this._resizeDOM), this.on("visibleChange.konva", this._checkVisibility), this.on("clipWidthChange.konva clipHeightChange.konva clipFuncChange.konva", () => {
          I(this.attrs);
        }), this._checkVisibility();
      }
      _validateAdd(O) {
        const W = O.getType() === "Layer", nt = O.getType() === "FastLayer";
        W || nt || e.Util.throw("You may only add layers to the stage.");
      }
      _checkVisibility() {
        if (!this.content)
          return;
        const O = this.visible() ? "" : "none";
        this.content.style.display = O;
      }
      setContainer(O) {
        if (typeof O === h) {
          let W;
          if (O.charAt(0) === ".") {
            const nt = O.slice(1);
            O = document.getElementsByClassName(nt)[0];
          } else
            O.charAt(0) !== "#" ? W = O : W = O.slice(1), O = document.getElementById(W);
          if (!O)
            throw "Can not find container in document with id " + W;
        }
        return this._setAttr("container", O), this.content && (this.content.parentElement && this.content.parentElement.removeChild(this.content), O.appendChild(this.content)), this;
      }
      shouldDrawHit() {
        return !0;
      }
      clear() {
        const O = this.children, W = O.length;
        for (let nt = 0; nt < W; nt++)
          O[nt].clear();
        return this;
      }
      clone(O) {
        return O || (O = {}), O.container = typeof document < "u" && document.createElement("div"), r.Container.prototype.clone.call(this, O);
      }
      destroy() {
        super.destroy();
        const O = this.content;
        O && e.Util._isInDocument(O) && this.container().removeChild(O);
        const W = t.stages.indexOf(this);
        return W > -1 && t.stages.splice(W, 1), e.Util.releaseCanvas(this.bufferCanvas._canvas, this.bufferHitCanvas._canvas), this;
      }
      getPointerPosition() {
        const O = this._pointerPositions[0] || this._changedPointerPositions[0];
        return O ? {
          x: O.x,
          y: O.y
        } : (e.Util.warn(Z), null);
      }
      _getPointerById(O) {
        return this._pointerPositions.find((W) => W.id === O);
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
        const W = new s.SceneCanvas({
          width: O.width,
          height: O.height,
          pixelRatio: O.pixelRatio || 1
        }), nt = W.getContext()._context, rt = this.children;
        return (O.x || O.y) && nt.translate(-1 * O.x, -1 * O.y), rt.forEach(function(X) {
          if (!X.isVisible())
            return;
          const R = X._toKonvaCanvas(O);
          nt.drawImage(R._canvas, O.x, O.y, R.getWidth() / R.getPixelRatio(), R.getHeight() / R.getPixelRatio());
        }), W;
      }
      getIntersection(O) {
        if (!O)
          return null;
        const W = this.children, nt = W.length, rt = nt - 1;
        for (let X = rt; X >= 0; X--) {
          const R = W[X].getIntersection(O);
          if (R)
            return R;
        }
        return null;
      }
      _resizeDOM() {
        const O = this.width(), W = this.height();
        this.content && (this.content.style.width = O + _, this.content.style.height = W + _), this.bufferCanvas.setSize(O, W), this.bufferHitCanvas.setSize(O, W), this.children.forEach((nt) => {
          nt.setSize({ width: O, height: W }), nt.draw();
        });
      }
      add(O, ...W) {
        if (arguments.length > 1) {
          for (let rt = 0; rt < arguments.length; rt++)
            this.add(arguments[rt]);
          return this;
        }
        super.add(O);
        const nt = this.children.length;
        return nt > A && e.Util.warn("The stage has " + nt + " layers. Recommended maximum number of layers is 3-5. Adding more layers into the stage may drop the performance. Rethink your tree structure, you can use Konva.Group."), O.setSize({ width: this.width(), height: this.height() }), O.draw(), n.Konva.isBrowser && this.content.appendChild(O.canvas._canvas), this;
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
        n.Konva.isBrowser && k.forEach(([O, W]) => {
          this.content.addEventListener(O, (nt) => {
            this[W](nt);
          }, { passive: !1 });
        });
      }
      _pointerenter(O) {
        this.setPointersPositions(O);
        const W = B(O.type);
        W && this._fire(W.pointerenter, {
          evt: O,
          target: this,
          currentTarget: this
        });
      }
      _pointerover(O) {
        this.setPointersPositions(O);
        const W = B(O.type);
        W && this._fire(W.pointerover, {
          evt: O,
          target: this,
          currentTarget: this
        });
      }
      _getTargetShape(O) {
        let W = this[O + "targetShape"];
        return W && !W.getStage() && (W = null), W;
      }
      _pointerleave(O) {
        const W = B(O.type), nt = L(O.type);
        if (!W)
          return;
        this.setPointersPositions(O);
        const rt = this._getTargetShape(nt), X = !(n.Konva.isDragging() || n.Konva.isTransforming()) || n.Konva.hitOnDragEnabled;
        rt && X ? (rt._fireAndBubble(W.pointerout, { evt: O }), rt._fireAndBubble(W.pointerleave, { evt: O }), this._fire(W.pointerleave, {
          evt: O,
          target: this,
          currentTarget: this
        }), this[nt + "targetShape"] = null) : X && (this._fire(W.pointerleave, {
          evt: O,
          target: this,
          currentTarget: this
        }), this._fire(W.pointerout, {
          evt: O,
          target: this,
          currentTarget: this
        })), this.pointerPos = null, this._pointerPositions = [];
      }
      _pointerdown(O) {
        const W = B(O.type), nt = L(O.type);
        if (!W)
          return;
        this.setPointersPositions(O);
        let rt = !1;
        this._changedPointerPositions.forEach((X) => {
          const R = this.getIntersection(X);
          if (a.DD.justDragged = !1, n.Konva["_" + nt + "ListenClick"] = !0, !R || !R.isListening()) {
            this[nt + "ClickStartShape"] = void 0;
            return;
          }
          n.Konva.capturePointerEventsEnabled && R.setPointerCapture(X.id), this[nt + "ClickStartShape"] = R, R._fireAndBubble(W.pointerdown, {
            evt: O,
            pointerId: X.id
          }), rt = !0;
          const N = O.type.indexOf("touch") >= 0;
          R.preventDefault() && O.cancelable && N && O.preventDefault();
        }), rt || this._fire(W.pointerdown, {
          evt: O,
          target: this,
          currentTarget: this,
          pointerId: this._pointerPositions[0].id
        });
      }
      _pointermove(O) {
        const W = B(O.type), nt = L(O.type);
        if (!W || (n.Konva.isDragging() && a.DD.node.preventDefault() && O.cancelable && O.preventDefault(), this.setPointersPositions(O), !(!(n.Konva.isDragging() || n.Konva.isTransforming()) || n.Konva.hitOnDragEnabled)))
          return;
        const X = {};
        let R = !1;
        const N = this._getTargetShape(nt);
        this._changedPointerPositions.forEach((H) => {
          const q = l.getCapturedShape(H.id) || this.getIntersection(H), $ = H.id, z = { evt: O, pointerId: $ }, tt = N !== q;
          if (tt && N && (N._fireAndBubble(W.pointerout, { ...z }, q), N._fireAndBubble(W.pointerleave, { ...z }, q)), q) {
            if (X[q._id])
              return;
            X[q._id] = !0;
          }
          q && q.isListening() ? (R = !0, tt && (q._fireAndBubble(W.pointerover, { ...z }, N), q._fireAndBubble(W.pointerenter, { ...z }, N), this[nt + "targetShape"] = q), q._fireAndBubble(W.pointermove, { ...z })) : N && (this._fire(W.pointerover, {
            evt: O,
            target: this,
            currentTarget: this,
            pointerId: $
          }), this[nt + "targetShape"] = null);
        }), R || this._fire(W.pointermove, {
          evt: O,
          target: this,
          currentTarget: this,
          pointerId: this._changedPointerPositions[0].id
        });
      }
      _pointerup(O) {
        const W = B(O.type), nt = L(O.type);
        if (!W)
          return;
        this.setPointersPositions(O);
        const rt = this[nt + "ClickStartShape"], X = this[nt + "ClickEndShape"], R = {};
        let N = !1;
        this._changedPointerPositions.forEach((H) => {
          const q = l.getCapturedShape(H.id) || this.getIntersection(H);
          if (q) {
            if (q.releaseCapture(H.id), R[q._id])
              return;
            R[q._id] = !0;
          }
          const $ = H.id, z = { evt: O, pointerId: $ };
          let tt = !1;
          n.Konva["_" + nt + "InDblClickWindow"] ? (tt = !0, clearTimeout(this[nt + "DblTimeout"])) : a.DD.justDragged || (n.Konva["_" + nt + "InDblClickWindow"] = !0, clearTimeout(this[nt + "DblTimeout"])), this[nt + "DblTimeout"] = setTimeout(function() {
            n.Konva["_" + nt + "InDblClickWindow"] = !1;
          }, n.Konva.dblClickWindow), q && q.isListening() ? (N = !0, this[nt + "ClickEndShape"] = q, q._fireAndBubble(W.pointerup, { ...z }), n.Konva["_" + nt + "ListenClick"] && rt && rt === q && (q._fireAndBubble(W.pointerclick, { ...z }), tt && X && X === q && q._fireAndBubble(W.pointerdblclick, { ...z }))) : (this[nt + "ClickEndShape"] = null, n.Konva["_" + nt + "ListenClick"] && this._fire(W.pointerclick, {
            evt: O,
            target: this,
            currentTarget: this,
            pointerId: $
          }), tt && this._fire(W.pointerdblclick, {
            evt: O,
            target: this,
            currentTarget: this,
            pointerId: $
          }));
        }), N || this._fire(W.pointerup, {
          evt: O,
          target: this,
          currentTarget: this,
          pointerId: this._changedPointerPositions[0].id
        }), n.Konva["_" + nt + "ListenClick"] = !1, O.cancelable && nt !== "touch" && nt !== "pointer" && O.preventDefault();
      }
      _contextmenu(O) {
        this.setPointersPositions(O);
        const W = this.getIntersection(this.getPointerPosition());
        W && W.isListening() ? W._fireAndBubble(D, { evt: O }) : this._fire(D, {
          evt: O,
          target: this,
          currentTarget: this
        });
      }
      _wheel(O) {
        this.setPointersPositions(O);
        const W = this.getIntersection(this.getPointerPosition());
        W && W.isListening() ? W._fireAndBubble(b, { evt: O }) : this._fire(b, {
          evt: O,
          target: this,
          currentTarget: this
        });
      }
      _pointercancel(O) {
        this.setPointersPositions(O);
        const W = l.getCapturedShape(O.pointerId) || this.getIntersection(this.getPointerPosition());
        W && W._fireAndBubble(v, l.createEvent(O)), l.releaseCapture(O.pointerId);
      }
      _lostpointercapture(O) {
        l.releaseCapture(O.pointerId);
      }
      setPointersPositions(O) {
        const W = this._getContentPosition();
        let nt = null, rt = null;
        O = O || window.event, O.touches !== void 0 ? (this._pointerPositions = [], this._changedPointerPositions = [], Array.prototype.forEach.call(O.touches, (X) => {
          this._pointerPositions.push({
            id: X.identifier,
            x: (X.clientX - W.left) / W.scaleX,
            y: (X.clientY - W.top) / W.scaleY
          });
        }), Array.prototype.forEach.call(O.changedTouches || O.touches, (X) => {
          this._changedPointerPositions.push({
            id: X.identifier,
            x: (X.clientX - W.left) / W.scaleX,
            y: (X.clientY - W.top) / W.scaleY
          });
        })) : (nt = (O.clientX - W.left) / W.scaleX, rt = (O.clientY - W.top) / W.scaleY, this.pointerPos = {
          x: nt,
          y: rt
        }, this._pointerPositions = [{ x: nt, y: rt, id: e.Util._getFirstPointerId(O) }], this._changedPointerPositions = [
          { x: nt, y: rt, id: e.Util._getFirstPointerId(O) }
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
    t.Stage = st, st.prototype.nodeType = u, (0, o._registerNode)(st), i.Factory.addGetterSetter(st, "container"), n.Konva.isBrowser && document.addEventListener("visibilitychange", () => {
      t.stages.forEach((j) => {
        j.batchDraw();
      });
    });
  })(Mr)), Mr;
}
var fi = {}, Fr = {}, yo;
function It() {
  return yo || (yo = 1, (function(t) {
    Object.defineProperty(t, "__esModule", { value: !0 }), t.Shape = t.shapes = void 0;
    const e = pt(), i = Nt(), r = mt(), n = Dt(), s = yt(), a = pt(), o = Fl(), l = "hasShadow", u = "shadowRGBA", h = "patternImage", _ = "linearGradient", m = "radialGradient";
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
            const U = D.getMatrix(), V = typeof DOMMatrix > "u" ? {
              a: U[0],
              b: U[1],
              c: U[2],
              d: U[3],
              e: U[4],
              f: U[5]
            } : new DOMMatrix(U);
            M.setTransform(V);
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
          const M = p(), D = this.fillLinearGradientStartPoint(), U = this.fillLinearGradientEndPoint(), V = M.createLinearGradient(D.x, D.y, U.x, U.y);
          for (let G = 0; G < T.length; G += 2)
            V.addColorStop(T[G], T[G + 1]);
          return V;
        }
      }
      _getRadialGradient() {
        return this._getCache(m, this.__getRadialGradient);
      }
      __getRadialGradient() {
        const T = this.fillRadialGradientColorStops();
        if (T) {
          const M = p(), D = this.fillRadialGradientStartPoint(), U = this.fillRadialGradientEndPoint(), V = M.createRadialGradient(D.x, D.y, this.fillRadialGradientStartRadius(), U.x, U.y, this.fillRadialGradientEndRadius());
          for (let G = 0; G < T.length; G += 2)
            V.addColorStop(T[G], T[G + 1]);
          return V;
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
        const U = T || this.hasFill(), V = this.hasStroke(), G = this.getAbsoluteOpacity() !== 1;
        if (U && V && G)
          return !0;
        const J = this.hasShadow(), b = this.shadowForStrokeEnabled();
        return !!(U && V && J && b);
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
        const U = T.skipTransform, V = T.relativeTo || M && this.getStage() || void 0, G = this.getSelfRect(), b = !T.skipStroke && this.hasStroke() && this.strokeWidth() || 0, A = G.width + b, k = G.height + b, F = !T.skipShadow && this.hasShadow(), L = F ? this.shadowOffsetX() : 0, B = F ? this.shadowOffsetY() : 0, I = A + Math.abs(L), Z = k + Math.abs(B), st = F && this.shadowBlur() || 0, j = I + st * 2, O = Z + st * 2, W = {
          width: j,
          height: O,
          x: -(b / 2 + st) + Math.min(L, 0) + G.x,
          y: -(b / 2 + st) + Math.min(B, 0) + G.y
        };
        return U ? W : this._transformedRect(W, V);
      }
      drawScene(T, M, D) {
        const U = this.getLayer(), V = T || U.getCanvas(), G = V.getContext(), J = this._getCanvasCache(), b = this.getSceneFunc(), A = this.hasShadow();
        let k;
        const F = M === this;
        if (!this.isVisible() && !F)
          return this;
        if (J) {
          G.save();
          const L = this.getAbsoluteTransform(M).getMatrix();
          return G.transform(L[0], L[1], L[2], L[3], L[4], L[5]), this._drawCachedSceneCanvas(G), G.restore(), this;
        }
        if (!b)
          return this;
        if (G.save(), this._useBufferCanvas()) {
          k = this.getStage();
          const L = D || k.bufferCanvas, B = L.getContext();
          B.clear(), B.save(), B._applyLineJoin(this);
          const I = this.getAbsoluteTransform(M).getMatrix();
          B.transform(I[0], I[1], I[2], I[3], I[4], I[5]), b.call(this, B, this), B.restore();
          const Z = L.pixelRatio;
          A && G._applyShadow(this), G._applyOpacity(this), G._applyGlobalCompositeOperation(this), G.drawImage(L._canvas, L.x || 0, L.y || 0, L.width / Z, L.height / Z);
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
        const U = this.getLayer(), V = T || U.hitCanvas, G = V && V.getContext(), J = this.hitFunc() || this.sceneFunc(), b = this._getCanvasCache(), A = b && b.hit;
        if (this.colorKey || i.Util.warn("Looks like your canvas has a destroyed shape in it. Do not reuse shape after you destroyed it. If you want to reuse shape you should call remove() instead of destroy()"), A) {
          G.save();
          const F = this.getAbsoluteTransform(M).getMatrix();
          return G.transform(F[0], F[1], F[2], F[3], F[4], F[5]), this._drawCachedHitCanvas(G), G.restore(), this;
        }
        if (!J)
          return this;
        if (G.save(), G._applyLineJoin(this), !(this === M)) {
          const F = this.getAbsoluteTransform(M).getMatrix();
          G.transform(F[0], F[1], F[2], F[3], F[4], F[5]);
        }
        return J.call(this, G, this), G.restore(), this;
      }
      drawHitFromCache(T = 0) {
        const M = this._getCanvasCache(), D = this._getCachedSceneCanvas(), U = M.hit, V = U.getContext(), G = U.getWidth(), J = U.getHeight();
        V.clear(), V.drawImage(D._canvas, 0, 0, G, J);
        try {
          const b = V.getImageData(0, 0, G, J), A = b.data, k = A.length, F = i.Util._hexToRgb(this.colorKey);
          for (let L = 0; L < k; L += 4)
            A[L + 3] > T ? (A[L] = F.r, A[L + 1] = F.g, A[L + 2] = F.b, A[L + 3] = 255) : A[L + 3] = 0;
          V.putImageData(b, 0, 0);
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
  })(Fr)), Fr;
}
var vo;
function kl() {
  if (vo) return fi;
  vo = 1, Object.defineProperty(fi, "__esModule", { value: !0 }), fi.Layer = void 0;
  const t = Nt(), e = fr(), i = Dt(), r = mt(), n = dr(), s = yt(), a = It(), o = pt(), l = "#", u = "beforeDraw", h = "draw", _ = [
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
  return fi.Layer = f, f.prototype.nodeType = "Layer", (0, o._registerNode)(f), r.Factory.addGetterSetter(f, "imageSmoothingEnabled", !0), r.Factory.addGetterSetter(f, "clearBeforeDraw", !0), r.Factory.addGetterSetter(f, "hitGraphEnabled", !0, (0, s.getBooleanValidator)()), fi;
}
var gi = {}, bo;
function mu() {
  if (bo) return gi;
  bo = 1, Object.defineProperty(gi, "__esModule", { value: !0 }), gi.FastLayer = void 0;
  const t = Nt(), e = kl(), i = pt();
  let r = class extends e.Layer {
    constructor(s) {
      super(s), this.listening(!1), t.Util.warn('Konva.Fast layer is deprecated. Please use "new Konva.Layer({ listening: false })" instead.');
    }
  };
  return gi.FastLayer = r, r.prototype.nodeType = "FastLayer", (0, i._registerNode)(r), gi;
}
var pi = {}, So;
function bs() {
  if (So) return pi;
  So = 1, Object.defineProperty(pi, "__esModule", { value: !0 }), pi.Group = void 0;
  const t = Nt(), e = fr(), i = pt();
  let r = class extends e.Container {
    _validateAdd(s) {
      const a = s.getType();
      a !== "Group" && a !== "Shape" && t.Util.throw("You may only add groups and shapes to groups.");
    }
  };
  return pi.Group = r, r.prototype.nodeType = "Group", (0, i._registerNode)(r), pi;
}
var mi = {}, Co;
function Ss() {
  if (Co) return mi;
  Co = 1, Object.defineProperty(mi, "__esModule", { value: !0 }), mi.Animation = void 0;
  const t = pt(), e = Nt(), i = (function() {
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
  return mi.Animation = r, r.animations = [], r.animIdCounter = 0, r.animRunning = !1, mi;
}
var kr = {}, wo;
function _u() {
  return wo || (wo = 1, (function(t) {
    Object.defineProperty(t, "__esModule", { value: !0 }), t.Easings = t.Tween = void 0;
    const e = Nt(), i = Ss(), r = Dt(), n = pt(), s = {
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
  })(kr)), kr;
}
var xo;
function yu() {
  return xo || (xo = 1, (function(t) {
    Object.defineProperty(t, "__esModule", { value: !0 }), t.Konva = void 0;
    const e = pt(), i = Nt(), r = Dt(), n = fr(), s = pu(), a = kl(), o = mu(), l = bs(), u = vs(), h = It(), _ = Ss(), m = _u(), f = Ml(), p = dr();
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
  })(Pr)), Pr;
}
var _i = {}, Po;
function vu() {
  if (Po) return _i;
  Po = 1, Object.defineProperty(_i, "__esModule", { value: !0 }), _i.Arc = void 0;
  const t = mt(), e = It(), i = pt(), r = yt(), n = pt();
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
  return _i.Arc = s, s.prototype._centroid = !0, s.prototype.className = "Arc", s.prototype._attrsAffectingSize = [
    "innerRadius",
    "outerRadius",
    "angle",
    "clockwise"
  ], (0, n._registerNode)(s), t.Factory.addGetterSetter(s, "innerRadius", 0, (0, r.getNumberValidator)()), t.Factory.addGetterSetter(s, "outerRadius", 0, (0, r.getNumberValidator)()), t.Factory.addGetterSetter(s, "angle", 0, (0, r.getNumberValidator)()), t.Factory.addGetterSetter(s, "clockwise", !1, (0, r.getBooleanValidator)()), _i;
}
var yi = {}, vi = {}, To;
function Ol() {
  if (To) return vi;
  To = 1, Object.defineProperty(vi, "__esModule", { value: !0 }), vi.Line = void 0;
  const t = mt(), e = pt(), i = It(), r = yt();
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
  return vi.Line = a, a.prototype.className = "Line", a.prototype._attrsAffectingSize = ["points", "bezier", "tension"], (0, e._registerNode)(a), t.Factory.addGetterSetter(a, "closed", !1), t.Factory.addGetterSetter(a, "bezier", !1), t.Factory.addGetterSetter(a, "tension", 0, (0, r.getNumberValidator)()), t.Factory.addGetterSetter(a, "points", [], (0, r.getNumberArrayValidator)()), vi;
}
var bi = {}, Or = {}, Ao;
function bu() {
  return Ao || (Ao = 1, (function(t) {
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
  })(Or)), Or;
}
var Ro;
function Cs() {
  if (Ro) return bi;
  Ro = 1, Object.defineProperty(bi, "__esModule", { value: !0 }), bi.Path = void 0;
  const t = mt(), e = pt(), i = It(), r = bu();
  let n = class Xt extends i.Shape {
    constructor(a) {
      super(a), this.dataArray = [], this.pathLength = 0, this._readDataAttribute(), this.on("dataChange.konva", function() {
        this._readDataAttribute();
      });
    }
    _readDataAttribute() {
      this.dataArray = Xt.parsePathData(this.data()), this.pathLength = Xt.getPathLength(this.dataArray);
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
              const c = Xt.getPointOnEllipticalArc(f.points[0], f.points[1], f.points[2], f.points[3], g, 0);
              a.push(c.x, c.y);
            }
          else
            for (let g = p + P; g < S; g += P) {
              const c = Xt.getPointOnEllipticalArc(f.points[0], f.points[1], f.points[2], f.points[3], g, 0);
              a.push(c.x, c.y);
            }
        } else if (f.command === "C")
          for (let p = 0; p <= 1; p += 0.01) {
            const y = Xt.getPointOnCubicBezier(p, f.start.x, f.start.y, f.points[0], f.points[1], f.points[2], f.points[3], f.points[4], f.points[5]);
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
      return Xt.getPointAtLengthOfDataArray(a, this.dataArray);
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
          return Xt.getPointOnLine(a, _.start.x, _.start.y, m[0], m[1]);
        case "C":
          return Xt.getPointOnCubicBezier((0, r.t2length)(a, Xt.getPathLength(o), (d) => (0, r.getCubicArcLength)([_.start.x, m[0], m[2], m[4]], [_.start.y, m[1], m[3], m[5]], d)), _.start.x, _.start.y, m[0], m[1], m[2], m[3], m[4], m[5]);
        case "Q":
          return Xt.getPointOnQuadraticBezier((0, r.t2length)(a, Xt.getPathLength(o), (d) => (0, r.getQuadraticArcLength)([_.start.x, m[0], m[2]], [_.start.y, m[1], m[3]], d)), _.start.x, _.start.y, m[0], m[1], m[2], m[3]);
        case "A":
          const f = m[0], p = m[1], y = m[2], S = m[3], P = m[5], g = m[6];
          let c = m[4];
          return c += P * a / _.pathLength, Xt.getPointOnEllipticalArc(f, p, y, S, c, g);
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
          let C, w, T, M, D, U, V, G, J, b;
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
              M = c.shift(), D = c.shift(), U = c.shift(), V = c.shift(), G = c.shift(), J = m, b = f, m = c.shift(), f = c.shift(), d = "A", v = this.convertEndpointToCenterParameterization(J, b, m, f, V, G, M, D, U);
              break;
            case "a":
              M = c.shift(), D = c.shift(), U = c.shift(), V = c.shift(), G = c.shift(), J = m, b = f, m += c.shift(), f += c.shift(), d = "A", v = this.convertEndpointToCenterParameterization(J, b, m, f, V, G, M, D, U);
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
      const p = Xt;
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
      }, w = function(G, J) {
        return (G[0] * J[0] + G[1] * J[1]) / (C(G) * C(J));
      }, T = function(G, J) {
        return (G[0] * J[1] < G[1] * J[0] ? -1 : 1) * Math.acos(w(G, J));
      }, M = T([1, 0], [(S - d) / m, (P - v) / f]), D = [(S - d) / m, (P - v) / f], U = [(-1 * S - d) / m, (-1 * P - v) / f];
      let V = T(D, U);
      return w(D, U) <= -1 && (V = Math.PI), w(D, U) >= 1 && (V = 0), _ === 0 && V > 0 && (V = V - 2 * Math.PI), _ === 1 && V < 0 && (V = V + 2 * Math.PI), [x, E, m, f, M, V, y, _];
    }
  };
  return bi.Path = n, n.prototype.className = "Path", n.prototype._attrsAffectingSize = ["data"], (0, e._registerNode)(n), t.Factory.addGetterSetter(n, "data"), bi;
}
var Eo;
function Su() {
  if (Eo) return yi;
  Eo = 1, Object.defineProperty(yi, "__esModule", { value: !0 }), yi.Arrow = void 0;
  const t = mt(), e = Ol(), i = yt(), r = pt(), n = Cs();
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
  return yi.Arrow = s, s.prototype.className = "Arrow", (0, r._registerNode)(s), t.Factory.addGetterSetter(s, "pointerLength", 10, (0, i.getNumberValidator)()), t.Factory.addGetterSetter(s, "pointerWidth", 10, (0, i.getNumberValidator)()), t.Factory.addGetterSetter(s, "pointerAtBeginning", !1), t.Factory.addGetterSetter(s, "pointerAtEnding", !0), yi;
}
var Si = {}, Mo;
function Cu() {
  if (Mo) return Si;
  Mo = 1, Object.defineProperty(Si, "__esModule", { value: !0 }), Si.Circle = void 0;
  const t = mt(), e = It(), i = yt(), r = pt();
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
  return Si.Circle = n, n.prototype._centroid = !0, n.prototype.className = "Circle", n.prototype._attrsAffectingSize = ["radius"], (0, r._registerNode)(n), t.Factory.addGetterSetter(n, "radius", 0, (0, i.getNumberValidator)()), Si;
}
var Ci = {}, Fo;
function wu() {
  if (Fo) return Ci;
  Fo = 1, Object.defineProperty(Ci, "__esModule", { value: !0 }), Ci.Ellipse = void 0;
  const t = mt(), e = It(), i = yt(), r = pt();
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
  return Ci.Ellipse = n, n.prototype.className = "Ellipse", n.prototype._centroid = !0, n.prototype._attrsAffectingSize = ["radiusX", "radiusY"], (0, r._registerNode)(n), t.Factory.addComponentsGetterSetter(n, "radius", ["x", "y"]), t.Factory.addGetterSetter(n, "radiusX", 0, (0, i.getNumberValidator)()), t.Factory.addGetterSetter(n, "radiusY", 0, (0, i.getNumberValidator)()), Ci;
}
var wi = {}, ko;
function xu() {
  if (ko) return wi;
  ko = 1, Object.defineProperty(wi, "__esModule", { value: !0 }), wi.Image = void 0;
  const t = Nt(), e = mt(), i = It(), r = pt(), n = yt();
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
  return wi.Image = s, s.prototype.className = "Image", (0, r._registerNode)(s), e.Factory.addGetterSetter(s, "cornerRadius", 0, (0, n.getNumberOrArrayOfNumbersValidator)(4)), e.Factory.addGetterSetter(s, "image"), e.Factory.addComponentsGetterSetter(s, "crop", ["x", "y", "width", "height"]), e.Factory.addGetterSetter(s, "cropX", 0, (0, n.getNumberValidator)()), e.Factory.addGetterSetter(s, "cropY", 0, (0, n.getNumberValidator)()), e.Factory.addGetterSetter(s, "cropWidth", 0, (0, n.getNumberValidator)()), e.Factory.addGetterSetter(s, "cropHeight", 0, (0, n.getNumberValidator)()), wi;
}
var Ie = {}, Oo;
function Pu() {
  if (Oo) return Ie;
  Oo = 1, Object.defineProperty(Ie, "__esModule", { value: !0 }), Ie.Tag = Ie.Label = void 0;
  const t = mt(), e = It(), i = bs(), r = yt(), n = pt(), s = [
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
var xi = {}, No;
function Nl() {
  if (No) return xi;
  No = 1, Object.defineProperty(xi, "__esModule", { value: !0 }), xi.Rect = void 0;
  const t = mt(), e = It(), i = pt(), r = Nt(), n = yt();
  let s = class extends e.Shape {
    _sceneFunc(o) {
      const l = this.cornerRadius(), u = this.width(), h = this.height();
      o.beginPath(), l ? r.Util.drawRoundedRectPath(o, u, h, l) : o.rect(0, 0, u, h), o.closePath(), o.fillStrokeShape(this);
    }
  };
  return xi.Rect = s, s.prototype.className = "Rect", (0, i._registerNode)(s), t.Factory.addGetterSetter(s, "cornerRadius", 0, (0, n.getNumberOrArrayOfNumbersValidator)(4)), xi;
}
var Pi = {}, Lo;
function Tu() {
  if (Lo) return Pi;
  Lo = 1, Object.defineProperty(Pi, "__esModule", { value: !0 }), Pi.RegularPolygon = void 0;
  const t = mt(), e = It(), i = yt(), r = pt();
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
  return Pi.RegularPolygon = n, n.prototype.className = "RegularPolygon", n.prototype._centroid = !0, n.prototype._attrsAffectingSize = ["radius"], (0, r._registerNode)(n), t.Factory.addGetterSetter(n, "radius", 0, (0, i.getNumberValidator)()), t.Factory.addGetterSetter(n, "sides", 0, (0, i.getNumberValidator)()), Pi;
}
var Ti = {}, Do;
function Au() {
  if (Do) return Ti;
  Do = 1, Object.defineProperty(Ti, "__esModule", { value: !0 }), Ti.Ring = void 0;
  const t = mt(), e = It(), i = yt(), r = pt(), n = Math.PI * 2;
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
  return Ti.Ring = s, s.prototype.className = "Ring", s.prototype._centroid = !0, s.prototype._attrsAffectingSize = ["innerRadius", "outerRadius"], (0, r._registerNode)(s), t.Factory.addGetterSetter(s, "innerRadius", 0, (0, i.getNumberValidator)()), t.Factory.addGetterSetter(s, "outerRadius", 0, (0, i.getNumberValidator)()), Ti;
}
var Ai = {}, Go;
function Ru() {
  if (Go) return Ai;
  Go = 1, Object.defineProperty(Ai, "__esModule", { value: !0 }), Ai.Sprite = void 0;
  const t = mt(), e = It(), i = Ss(), r = yt(), n = pt();
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
  return Ai.Sprite = s, s.prototype.className = "Sprite", (0, n._registerNode)(s), t.Factory.addGetterSetter(s, "animation"), t.Factory.addGetterSetter(s, "animations"), t.Factory.addGetterSetter(s, "frameOffsets"), t.Factory.addGetterSetter(s, "image"), t.Factory.addGetterSetter(s, "frameIndex", 0, (0, r.getNumberValidator)()), t.Factory.addGetterSetter(s, "frameRate", 17, (0, r.getNumberValidator)()), t.Factory.backCompat(s, {
    index: "frameIndex",
    getIndex: "getFrameIndex",
    setIndex: "setFrameIndex"
  }), Ai;
}
var Ri = {}, Io;
function Eu() {
  if (Io) return Ri;
  Io = 1, Object.defineProperty(Ri, "__esModule", { value: !0 }), Ri.Star = void 0;
  const t = mt(), e = It(), i = yt(), r = pt();
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
  return Ri.Star = n, n.prototype.className = "Star", n.prototype._centroid = !0, n.prototype._attrsAffectingSize = ["innerRadius", "outerRadius"], (0, r._registerNode)(n), t.Factory.addGetterSetter(n, "numPoints", 5, (0, i.getNumberValidator)()), t.Factory.addGetterSetter(n, "innerRadius", 0, (0, i.getNumberValidator)()), t.Factory.addGetterSetter(n, "outerRadius", 0, (0, i.getNumberValidator)()), Ri;
}
var Je = {}, Uo;
function Ll() {
  if (Uo) return Je;
  Uo = 1, Object.defineProperty(Je, "__esModule", { value: !0 }), Je.Text = void 0, Je.stringToArray = a;
  const t = Nt(), e = mt(), i = It(), r = pt(), n = yt(), s = pt();
  function a(B) {
    return [...B].reduce((I, Z, st, j) => {
      if (new RegExp("\\p{Emoji}", "u").test(Z)) {
        const O = j[st + 1];
        O && new RegExp("\\p{Emoji_Modifier}|\\u200D", "u").test(O) ? (I.push(Z + O), j[st + 1] = "") : I.push(Z);
      } else new RegExp("\\p{Regional_Indicator}{2}", "u").test(Z + (j[st + 1] || "")) ? I.push(Z + j[st + 1]) : st > 0 && new RegExp("\\p{Mn}|\\p{Me}|\\p{Mc}", "u").test(Z) ? I[I.length - 1] += Z : Z && I.push(Z);
      return I;
    }, []);
  }
  const o = "auto", l = "center", u = "inherit", h = "justify", _ = "Change.konva", m = "2d", f = "-", p = "left", y = "text", S = "Text", P = "top", g = "bottom", c = "middle", d = "normal", v = "px ", x = " ", E = "right", C = "rtl", w = "word", T = "char", M = "none", D = "…", U = [
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
  ], V = U.length;
  function G(B) {
    return B.split(",").map((I) => {
      I = I.trim();
      const Z = I.indexOf(" ") >= 0, st = I.indexOf('"') >= 0 || I.indexOf("'") >= 0;
      return Z && !st && (I = `"${I}"`), I;
    }).join(", ");
  }
  let J;
  function b() {
    return J || (J = t.Util.createCanvasElement().getContext(m), J);
  }
  function A(B) {
    B.fillText(this._partialText, this._partialTextX, this._partialTextY);
  }
  function k(B) {
    B.setAttr("miterLimit", 2), B.strokeText(this._partialText, this._partialTextX, this._partialTextY);
  }
  function F(B) {
    return B = B || {}, !B.fillLinearGradientColorStops && !B.fillRadialGradientColorStops && !B.fillPatternImage && (B.fill = B.fill || "black"), B;
  }
  let L = class extends i.Shape {
    constructor(I) {
      super(F(I)), this._partialTextX = 0, this._partialTextY = 0;
      for (let Z = 0; Z < V; Z++)
        this.on(U[Z] + _, this._setTextData);
      this._setTextData();
    }
    _sceneFunc(I) {
      const Z = this.textArr, st = Z.length;
      if (!this.text())
        return;
      let j = this.padding(), O = this.fontSize(), W = this.lineHeight() * O, nt = this.verticalAlign(), rt = this.direction(), X = 0, R = this.align(), N = this.getWidth(), H = this.letterSpacing(), q = this.fill(), $ = this.textDecoration(), z = $.indexOf("underline") !== -1, tt = $.indexOf("line-through") !== -1, K;
      rt = rt === u ? I.direction : rt;
      let et = W / 2, Q = c;
      if (r.Konva._fixTextRendering) {
        const at = this.measureSize("M");
        Q = "alphabetic", et = (at.fontBoundingBoxAscent - at.fontBoundingBoxDescent) / 2 + W / 2;
      }
      for (rt === C && I.setAttr("direction", rt), I.setAttr("font", this._getContextFont()), I.setAttr("textBaseline", Q), I.setAttr("textAlign", p), nt === c ? X = (this.getHeight() - st * W - j * 2) / 2 : nt === g && (X = this.getHeight() - st * W - j * 2), I.translate(j, X + j), K = 0; K < st; K++) {
        let at = 0, ot = 0;
        const lt = Z[K], ct = lt.text, ht = lt.width, _t = lt.lastInParagraph;
        if (I.save(), R === E ? at += N - ht - j * 2 : R === l && (at += (N - ht - j * 2) / 2), z) {
          I.save(), I.beginPath();
          const gt = r.Konva._fixTextRendering ? Math.round(O / 4) : Math.round(O / 2), Ct = at, bt = et + ot + gt;
          I.moveTo(Ct, bt);
          const Ft = R === h && !_t ? N - j * 2 : ht;
          I.lineTo(Ct + Math.round(Ft), bt), I.lineWidth = O / 15;
          const Vt = this._getLinearGradient();
          I.strokeStyle = Vt || q, I.stroke(), I.restore();
        }
        if (tt) {
          I.save(), I.beginPath();
          const gt = r.Konva._fixTextRendering ? -Math.round(O / 4) : 0;
          I.moveTo(at, et + ot + gt);
          const Ct = R === h && !_t ? N - j * 2 : ht;
          I.lineTo(at + Math.round(Ct), et + ot + gt), I.lineWidth = O / 15;
          const bt = this._getLinearGradient();
          I.strokeStyle = bt || q, I.stroke(), I.restore();
        }
        if (rt !== C && (H !== 0 || R === h)) {
          const gt = ct.split(" ").length - 1, Ct = a(ct);
          for (let bt = 0; bt < Ct.length; bt++) {
            const Ft = Ct[bt];
            Ft === " " && !_t && R === h && (at += (N - j * 2 - ht) / gt), this._partialTextX = at, this._partialTextY = et + ot, this._partialText = Ft, I.fillStrokeShape(this), at += this.measureSize(Ft).width + H;
          }
        } else
          H !== 0 && I.setAttr("letterSpacing", `${H}px`), this._partialTextX = at, this._partialTextY = et + ot, this._partialText = ct, I.fillStrokeShape(this);
        I.restore(), st > 1 && (et += W);
      }
    }
    _hitFunc(I) {
      const Z = this.getWidth(), st = this.getHeight();
      I.beginPath(), I.rect(0, 0, Z, st), I.closePath(), I.fillStrokeShape(this);
    }
    setText(I) {
      const Z = t.Util._isString(I) ? I : I == null ? "" : I + "";
      return this._setAttr(y, Z), this;
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
    measureSize(I) {
      var Z, st, j, O, W, nt, rt, X, R, N, H;
      let q = b(), $ = this.fontSize(), z;
      q.save(), q.font = this._getContextFont(), z = q.measureText(I), q.restore();
      const tt = $ / 100;
      return {
        actualBoundingBoxAscent: (Z = z.actualBoundingBoxAscent) !== null && Z !== void 0 ? Z : 71.58203125 * tt,
        actualBoundingBoxDescent: (st = z.actualBoundingBoxDescent) !== null && st !== void 0 ? st : 0,
        actualBoundingBoxLeft: (j = z.actualBoundingBoxLeft) !== null && j !== void 0 ? j : -7.421875 * tt,
        actualBoundingBoxRight: (O = z.actualBoundingBoxRight) !== null && O !== void 0 ? O : 75.732421875 * tt,
        alphabeticBaseline: (W = z.alphabeticBaseline) !== null && W !== void 0 ? W : 0,
        emHeightAscent: (nt = z.emHeightAscent) !== null && nt !== void 0 ? nt : 100 * tt,
        emHeightDescent: (rt = z.emHeightDescent) !== null && rt !== void 0 ? rt : -20 * tt,
        fontBoundingBoxAscent: (X = z.fontBoundingBoxAscent) !== null && X !== void 0 ? X : 91 * tt,
        fontBoundingBoxDescent: (R = z.fontBoundingBoxDescent) !== null && R !== void 0 ? R : 21 * tt,
        hangingBaseline: (N = z.hangingBaseline) !== null && N !== void 0 ? N : 72.80000305175781 * tt,
        ideographicBaseline: (H = z.ideographicBaseline) !== null && H !== void 0 ? H : -21 * tt,
        width: z.width,
        height: $
      };
    }
    _getContextFont() {
      return this.fontStyle() + x + this.fontVariant() + x + (this.fontSize() + v) + G(this.fontFamily());
    }
    _addTextLine(I) {
      this.align() === h && (I = I.trim());
      const st = this._getTextWidth(I);
      return this.textArr.push({
        text: I,
        width: st,
        lastInParagraph: !1
      });
    }
    _getTextWidth(I) {
      const Z = this.letterSpacing(), st = I.length;
      return b().measureText(I).width + Z * st;
    }
    _setTextData() {
      let I = this.text().split(`
`), Z = +this.fontSize(), st = 0, j = this.lineHeight() * Z, O = this.attrs.width, W = this.attrs.height, nt = O !== o && O !== void 0, rt = W !== o && W !== void 0, X = this.padding(), R = O - X * 2, N = W - X * 2, H = 0, q = this.wrap(), $ = q !== M, z = q !== T && $, tt = this.ellipsis();
      this.textArr = [], b().font = this._getContextFont();
      const K = tt ? this._getTextWidth(D) : 0;
      for (let et = 0, Q = I.length; et < Q; ++et) {
        let at = I[et], ot = this._getTextWidth(at);
        if (nt && ot > R)
          for (; at.length > 0; ) {
            let lt = 0, ct = a(at).length, ht = "", _t = 0;
            for (; lt < ct; ) {
              const gt = lt + ct >>> 1, Ct = a(at), bt = Ct.slice(0, gt + 1).join(""), Ft = this._getTextWidth(bt);
              (tt && rt && H + j > N ? Ft + K : Ft) <= R ? (lt = gt + 1, ht = bt, _t = Ft) : ct = gt;
            }
            if (ht) {
              if (z) {
                const bt = a(at), Ft = a(ht), Vt = bt[Ft.length], Te = Vt === x || Vt === f;
                let Le;
                if (Te && _t <= R)
                  Le = Ft.length;
                else {
                  const jt = Ft.lastIndexOf(x), ee = Ft.lastIndexOf(f);
                  Le = Math.max(jt, ee) + 1;
                }
                Le > 0 && (lt = Le, ht = bt.slice(0, lt).join(""), _t = this._getTextWidth(ht));
              }
              if (ht = ht.trimRight(), this._addTextLine(ht), st = Math.max(st, _t), H += j, this._shouldHandleEllipsis(H)) {
                this._tryToAddEllipsisToLastLine();
                break;
              }
              if (at = a(at).slice(lt).join("").trimLeft(), at.length > 0 && (ot = this._getTextWidth(at), ot <= R)) {
                this._addTextLine(at), H += j, st = Math.max(st, ot);
                break;
              }
            } else
              break;
          }
        else
          this._addTextLine(at), H += j, st = Math.max(st, ot), this._shouldHandleEllipsis(H) && et < Q - 1 && this._tryToAddEllipsisToLastLine();
        if (this.textArr[this.textArr.length - 1] && (this.textArr[this.textArr.length - 1].lastInParagraph = !0), rt && H + j > N)
          break;
      }
      this.textHeight = Z, this.textWidth = st;
    }
    _shouldHandleEllipsis(I) {
      const Z = +this.fontSize(), st = this.lineHeight() * Z, j = this.attrs.height, O = j !== o && j !== void 0, W = this.padding(), nt = j - W * 2;
      return !(this.wrap() !== M) || O && I + st > nt;
    }
    _tryToAddEllipsisToLastLine() {
      const I = this.attrs.width, Z = I !== o && I !== void 0, st = this.padding(), j = I - st * 2, O = this.ellipsis(), W = this.textArr[this.textArr.length - 1];
      !W || !O || (Z && (this._getTextWidth(W.text + D) < j || (W.text = W.text.slice(0, W.text.length - 3))), this.textArr.splice(this.textArr.length - 1, 1), this._addTextLine(W.text + D));
    }
    getStrokeScaleEnabled() {
      return !0;
    }
    _useBufferCanvas() {
      const I = this.textDecoration().indexOf("underline") !== -1 || this.textDecoration().indexOf("line-through") !== -1, Z = this.hasShadow();
      return I && Z ? !0 : super._useBufferCanvas();
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
var Ei = {}, Bo;
function Mu() {
  if (Bo) return Ei;
  Bo = 1, Object.defineProperty(Ei, "__esModule", { value: !0 }), Ei.TextPath = void 0;
  const t = Nt(), e = mt(), i = It(), r = Cs(), n = Ll(), s = yt(), a = pt(), o = "", l = "normal";
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
          const V = this.text().split(" ").length - 1;
          C += (this.pathLength - g) / V;
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
        const D = r.Path.getPointOnLine(M + T / 2, E.x, E.y, w.x, w.y), U = Math.atan2(w.y - E.y, w.x - E.x);
        this.glyphInfo.push({
          transposeX: D.x,
          transposeY: D.y,
          text: d[x],
          rotation: U,
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
  return Ei.TextPath = _, _.prototype._fillFunc = u, _.prototype._strokeFunc = h, _.prototype._fillFuncHit = u, _.prototype._strokeFuncHit = h, _.prototype.className = "TextPath", _.prototype._attrsAffectingSize = ["text", "fontSize", "data"], (0, a._registerNode)(_), e.Factory.addGetterSetter(_, "data"), e.Factory.addGetterSetter(_, "fontFamily", "Arial"), e.Factory.addGetterSetter(_, "fontSize", 12, (0, s.getNumberValidator)()), e.Factory.addGetterSetter(_, "fontStyle", l), e.Factory.addGetterSetter(_, "align", "left"), e.Factory.addGetterSetter(_, "letterSpacing", 0, (0, s.getNumberValidator)()), e.Factory.addGetterSetter(_, "textBaseline", "middle"), e.Factory.addGetterSetter(_, "fontVariant", l), e.Factory.addGetterSetter(_, "text", o), e.Factory.addGetterSetter(_, "textDecoration", ""), e.Factory.addGetterSetter(_, "kerningFunc", void 0), Ei;
}
var Mi = {}, Vo;
function Fu() {
  if (Vo) return Mi;
  Vo = 1, Object.defineProperty(Mi, "__esModule", { value: !0 }), Mi.Transformer = void 0;
  const t = Nt(), e = mt(), i = Dt(), r = It(), n = Nl(), s = bs(), a = pt(), o = yt(), l = pt(), u = "tr-konva", h = [
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
      const U = a.Konva.getAngle(C[D]), V = Math.abs(U - w) % (Math.PI * 2);
      Math.min(V, Math.PI * 2 - V) < T && (M = U);
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
        const U = () => {
          this.nodes().length === 1 && this.useSingleNodeRotation() && this.rotation(this.nodes()[0].getAbsoluteRotation()), this._resetTransformCache(), !this._transforming && !this.isDragging() && this.update();
        };
        if (D._attrsAffectingSize.length) {
          const V = D._attrsAffectingSize.map((G) => G + "Change." + this._getEventNamespace()).join(" ");
          D.on(V, U);
        }
        D.on(m.map((V) => V + `.${this._getEventNamespace()}`).join(" "), U), D.on(`absoluteTransformChange.${this._getEventNamespace()}`, U), this._proxyDrag(D);
      }), this._resetTransformCache(), !!this.findOne(".top-left") && this.update(), this;
    }
    _proxyDrag(w) {
      let T;
      w.on(`dragstart.${this._getEventNamespace()}`, (M) => {
        T = w.getAbsolutePosition(), !this.isDragging() && w !== this.findOne(".back") && this.startDrag(M, !1);
      }), w.on(`dragmove.${this._getEventNamespace()}`, (M) => {
        if (!T)
          return;
        const D = w.getAbsolutePosition(), U = D.x - T.x, V = D.y - T.y;
        this.nodes().forEach((G) => {
          if (G === w || G.isDragging())
            return;
          const J = G.getAbsolutePosition();
          G.setAbsolutePosition({
            x: J.x + U,
            y: J.y + V
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
      }), U = w.getAbsoluteScale(M), V = w.getAbsolutePosition(M), G = D.x * U.x - w.offsetX() * U.x, J = D.y * U.y - w.offsetY() * U.y, b = (a.Konva.getAngle(w.getAbsoluteRotation()) + Math.PI * 2) % (Math.PI * 2), A = {
        x: V.x + G * Math.cos(b) + J * Math.sin(-b),
        y: V.y + J * Math.cos(b) + G * Math.sin(b),
        width: D.width * U.x,
        height: D.height * U.y,
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
          const B = F.point(L);
          T.push(B);
        });
      });
      const M = new t.Transform();
      M.rotate(-a.Konva.getAngle(this.rotation()));
      let D = 1 / 0, U = 1 / 0, V = -1 / 0, G = -1 / 0;
      T.forEach(function(b) {
        const A = M.point(b);
        D === void 0 && (D = V = A.x, U = G = A.y), D = Math.min(D, A.x), U = Math.min(U, A.y), V = Math.max(V, A.x), G = Math.max(G, A.y);
      }), M.invert();
      const J = M.point({ x: D, y: U });
      return {
        x: J.x,
        y: J.y,
        width: V - D,
        height: G - U,
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
        const D = a.Konva.getAngle(this.rotation()), U = this.rotateAnchorCursor(), V = y(w, D, U);
        T.getStage().content && (T.getStage().content.style.cursor = V), this._cursorChange = !0;
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
          const D = M.getParent(), U = D.padding();
          T.beginPath(), T.rect(-U, -U, M.width() + U * 2, M.height() + U * 2), T.moveTo(M.width() / 2, -U), D.rotateEnabled() && D.rotateLineVisible() && T.lineTo(M.width() / 2, -D.rotateAnchorOffset() * t.Util._sign(M.height()) - U), T.fillStrokeShape(M);
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
      const T = this._getNodeRect(), M = T.width, D = T.height, U = Math.sqrt(Math.pow(M, 2) + Math.pow(D, 2));
      this.sin = Math.abs(D / U), this.cos = Math.abs(M / U), typeof window < "u" && (window.addEventListener("mousemove", this._handleMouseMove), window.addEventListener("touchmove", this._handleMouseMove), window.addEventListener("mouseup", this._handleMouseUp, !0), window.addEventListener("touchend", this._handleMouseUp, !0)), this._transforming = !0;
      const V = w.target.getAbsolutePosition(), G = w.target.getStage().getPointerPosition();
      this._anchorDragOffset = {
        x: G.x - V.x,
        y: G.y - V.y
      }, v++, this._fire("transformstart", { evt: w.evt, target: this.getNode() }), this._nodes.forEach((J) => {
        J._fire("transformstart", { evt: w.evt, target: J });
      });
    }
    _handleMouseMove(w) {
      let T, M, D;
      const U = this.findOne("." + this._movingAnchorName), V = U.getStage();
      V.setPointersPositions(w);
      const G = V.getPointerPosition();
      let J = {
        x: G.x - this._anchorDragOffset.x,
        y: G.y - this._anchorDragOffset.y
      };
      const b = U.getAbsolutePosition();
      this.anchorDragBoundFunc() && (J = this.anchorDragBoundFunc()(b, J, w)), U.setAbsolutePosition(J);
      const A = U.getAbsolutePosition();
      if (b.x === A.x && b.y === A.y)
        return;
      if (this._movingAnchorName === "rotater") {
        const j = this._getNodeRect();
        T = U.x() - j.width / 2, M = -U.y() + j.height / 2;
        let O = Math.atan2(-M, T) + Math.PI / 2;
        j.height < 0 && (O -= Math.PI);
        const nt = a.Konva.getAngle(this.rotation()) + O, rt = a.Konva.getAngle(this.rotationSnapTolerance()), R = d(this.rotationSnaps(), nt, rt) - j.rotation, N = c(j, R);
        this._fitNodesInto(N, w);
        return;
      }
      const k = this.shiftBehavior();
      let F;
      k === "inverted" ? F = this.keepRatio() && !w.shiftKey : k === "none" ? F = this.keepRatio() : F = this.keepRatio() || w.shiftKey;
      let L = this.centeredScaling() || w.altKey;
      if (this._movingAnchorName === "top-left") {
        if (F) {
          const j = L ? {
            x: this.width() / 2,
            y: this.height() / 2
          } : {
            x: this.findOne(".bottom-right").x(),
            y: this.findOne(".bottom-right").y()
          };
          D = Math.sqrt(Math.pow(j.x - U.x(), 2) + Math.pow(j.y - U.y(), 2));
          const O = this.findOne(".top-left").x() > j.x ? -1 : 1, W = this.findOne(".top-left").y() > j.y ? -1 : 1;
          T = D * this.cos * O, M = D * this.sin * W, this.findOne(".top-left").x(j.x - T), this.findOne(".top-left").y(j.y - M);
        }
      } else if (this._movingAnchorName === "top-center")
        this.findOne(".top-left").y(U.y());
      else if (this._movingAnchorName === "top-right") {
        if (F) {
          const j = L ? {
            x: this.width() / 2,
            y: this.height() / 2
          } : {
            x: this.findOne(".bottom-left").x(),
            y: this.findOne(".bottom-left").y()
          };
          D = Math.sqrt(Math.pow(U.x() - j.x, 2) + Math.pow(j.y - U.y(), 2));
          const O = this.findOne(".top-right").x() < j.x ? -1 : 1, W = this.findOne(".top-right").y() > j.y ? -1 : 1;
          T = D * this.cos * O, M = D * this.sin * W, this.findOne(".top-right").x(j.x + T), this.findOne(".top-right").y(j.y - M);
        }
        var B = U.position();
        this.findOne(".top-left").y(B.y), this.findOne(".bottom-right").x(B.x);
      } else if (this._movingAnchorName === "middle-left")
        this.findOne(".top-left").x(U.x());
      else if (this._movingAnchorName === "middle-right")
        this.findOne(".bottom-right").x(U.x());
      else if (this._movingAnchorName === "bottom-left") {
        if (F) {
          const j = L ? {
            x: this.width() / 2,
            y: this.height() / 2
          } : {
            x: this.findOne(".top-right").x(),
            y: this.findOne(".top-right").y()
          };
          D = Math.sqrt(Math.pow(j.x - U.x(), 2) + Math.pow(U.y() - j.y, 2));
          const O = j.x < U.x() ? -1 : 1, W = U.y() < j.y ? -1 : 1;
          T = D * this.cos * O, M = D * this.sin * W, U.x(j.x - T), U.y(j.y + M);
        }
        B = U.position(), this.findOne(".top-left").x(B.x), this.findOne(".bottom-right").y(B.y);
      } else if (this._movingAnchorName === "bottom-center")
        this.findOne(".bottom-right").y(U.y());
      else if (this._movingAnchorName === "bottom-right") {
        if (F) {
          const j = L ? {
            x: this.width() / 2,
            y: this.height() / 2
          } : {
            x: this.findOne(".top-left").x(),
            y: this.findOne(".top-left").y()
          };
          D = Math.sqrt(Math.pow(U.x() - j.x, 2) + Math.pow(U.y() - j.y, 2));
          const O = this.findOne(".bottom-right").x() < j.x ? -1 : 1, W = this.findOne(".bottom-right").y() < j.y ? -1 : 1;
          T = D * this.cos * O, M = D * this.sin * W, this.findOne(".bottom-right").x(j.x + T), this.findOne(".bottom-right").y(j.y + M);
        }
      } else
        console.error(new Error("Wrong position argument of selection resizer: " + this._movingAnchorName));
      if (L = this.centeredScaling() || w.altKey, L) {
        const j = this.findOne(".top-left"), O = this.findOne(".bottom-right"), W = j.x(), nt = j.y(), rt = this.getWidth() - O.x(), X = this.getHeight() - O.y();
        O.move({
          x: -W,
          y: -nt
        }), j.move({
          x: rt,
          y: X
        });
      }
      const I = this.findOne(".top-left").getAbsolutePosition();
      T = I.x, M = I.y;
      const Z = this.findOne(".bottom-right").x() - this.findOne(".top-left").x(), st = this.findOne(".bottom-right").y() - this.findOne(".top-left").y();
      this._fitNodesInto({
        x: T,
        y: M,
        width: Z,
        height: st,
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
          var U;
          D._fire("transformend", { evt: w, target: D }), (U = D.getLayer()) === null || U === void 0 || U.batchDraw();
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
      const U = new t.Transform();
      if (U.rotate(a.Konva.getAngle(this.rotation())), this._movingAnchorName && w.width < 0 && this._movingAnchorName.indexOf("left") >= 0) {
        const F = U.point({
          x: -this.padding() * 2,
          y: 0
        });
        w.x += F.x, w.y += F.y, w.width += this.padding() * 2, this._movingAnchorName = this._movingAnchorName.replace("left", "right"), this._anchorDragOffset.x -= F.x, this._anchorDragOffset.y -= F.y;
      } else if (this._movingAnchorName && w.width < 0 && this._movingAnchorName.indexOf("right") >= 0) {
        const F = U.point({
          x: this.padding() * 2,
          y: 0
        });
        this._movingAnchorName = this._movingAnchorName.replace("right", "left"), this._anchorDragOffset.x -= F.x, this._anchorDragOffset.y -= F.y, w.width += this.padding() * 2;
      }
      if (this._movingAnchorName && w.height < 0 && this._movingAnchorName.indexOf("top") >= 0) {
        const F = U.point({
          x: 0,
          y: -this.padding() * 2
        });
        w.x += F.x, w.y += F.y, this._movingAnchorName = this._movingAnchorName.replace("top", "bottom"), this._anchorDragOffset.x -= F.x, this._anchorDragOffset.y -= F.y, w.height += this.padding() * 2;
      } else if (this._movingAnchorName && w.height < 0 && this._movingAnchorName.indexOf("bottom") >= 0) {
        const F = U.point({
          x: 0,
          y: this.padding() * 2
        });
        this._movingAnchorName = this._movingAnchorName.replace("bottom", "top"), this._anchorDragOffset.x -= F.x, this._anchorDragOffset.y -= F.y, w.height += this.padding() * 2;
      }
      if (this.boundBoxFunc()) {
        const F = this.boundBoxFunc()(M, w);
        F ? w = F : t.Util.warn("boundBoxFunc returned falsy. You should return new bound rect from it!");
      }
      const V = 1e7, G = new t.Transform();
      G.translate(M.x, M.y), G.rotate(M.rotation), G.scale(M.width / V, M.height / V);
      const J = new t.Transform(), b = w.width / V, A = w.height / V;
      this.flipEnabled() === !1 ? (J.translate(w.x, w.y), J.rotate(w.rotation), J.translate(w.width < 0 ? w.width : 0, w.height < 0 ? w.height : 0), J.scale(Math.abs(b), Math.abs(A))) : (J.translate(w.x, w.y), J.rotate(w.rotation), J.scale(b, A));
      const k = J.multiply(G.invert());
      this._nodes.forEach((F) => {
        var L;
        const B = F.getParent().getAbsoluteTransform(), I = F.getTransform().copy();
        I.translate(F.offsetX(), F.offsetY());
        const Z = new t.Transform();
        Z.multiply(B.copy().invert()).multiply(k).multiply(B).multiply(I);
        const st = Z.decompose();
        F.setAttrs(st), (L = F.getLayer()) === null || L === void 0 || L.batchDraw();
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
      const M = T.width, D = T.height, U = this.enabledAnchors(), V = this.resizeEnabled(), G = this.padding(), J = this.anchorSize(), b = this.find("._anchor");
      b.forEach((k) => {
        k.setAttrs({
          width: J,
          height: J,
          offsetX: J / 2,
          offsetY: J / 2,
          stroke: this.anchorStroke(),
          strokeWidth: this.anchorStrokeWidth(),
          fill: this.anchorFill(),
          cornerRadius: this.anchorCornerRadius()
        });
      }), this._batchChangeChild(".top-left", {
        x: 0,
        y: 0,
        offsetX: J / 2 + G,
        offsetY: J / 2 + G,
        visible: V && U.indexOf("top-left") >= 0
      }), this._batchChangeChild(".top-center", {
        x: M / 2,
        y: 0,
        offsetY: J / 2 + G,
        visible: V && U.indexOf("top-center") >= 0
      }), this._batchChangeChild(".top-right", {
        x: M,
        y: 0,
        offsetX: J / 2 - G,
        offsetY: J / 2 + G,
        visible: V && U.indexOf("top-right") >= 0
      }), this._batchChangeChild(".middle-left", {
        x: 0,
        y: D / 2,
        offsetX: J / 2 + G,
        visible: V && U.indexOf("middle-left") >= 0
      }), this._batchChangeChild(".middle-right", {
        x: M,
        y: D / 2,
        offsetX: J / 2 - G,
        visible: V && U.indexOf("middle-right") >= 0
      }), this._batchChangeChild(".bottom-left", {
        x: 0,
        y: D,
        offsetX: J / 2 + G,
        offsetY: J / 2 - G,
        visible: V && U.indexOf("bottom-left") >= 0
      }), this._batchChangeChild(".bottom-center", {
        x: M / 2,
        y: D,
        offsetY: J / 2 - G,
        visible: V && U.indexOf("bottom-center") >= 0
      }), this._batchChangeChild(".bottom-right", {
        x: M,
        y: D,
        offsetX: J / 2 - G,
        offsetY: J / 2 - G,
        visible: V && U.indexOf("bottom-right") >= 0
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
  Mi.Transformer = x, x.isTransforming = () => v > 0;
  function E(C) {
    return C instanceof Array || t.Util.warn("enabledAnchors value should be an array"), C instanceof Array && C.forEach(function(w) {
      S.indexOf(w) === -1 && t.Util.warn("Unknown anchor name: " + w + ". Available names are: " + S.join(", "));
    }), C || [];
  }
  return x.prototype.className = "Transformer", (0, l._registerNode)(x), e.Factory.addGetterSetter(x, "enabledAnchors", S, E), e.Factory.addGetterSetter(x, "flipEnabled", !0, (0, o.getBooleanValidator)()), e.Factory.addGetterSetter(x, "resizeEnabled", !0), e.Factory.addGetterSetter(x, "anchorSize", 10, (0, o.getNumberValidator)()), e.Factory.addGetterSetter(x, "rotateEnabled", !0), e.Factory.addGetterSetter(x, "rotateLineVisible", !0), e.Factory.addGetterSetter(x, "rotationSnaps", []), e.Factory.addGetterSetter(x, "rotateAnchorOffset", 50, (0, o.getNumberValidator)()), e.Factory.addGetterSetter(x, "rotateAnchorCursor", "crosshair"), e.Factory.addGetterSetter(x, "rotationSnapTolerance", 5, (0, o.getNumberValidator)()), e.Factory.addGetterSetter(x, "borderEnabled", !0), e.Factory.addGetterSetter(x, "anchorStroke", "rgb(0, 161, 255)"), e.Factory.addGetterSetter(x, "anchorStrokeWidth", 1, (0, o.getNumberValidator)()), e.Factory.addGetterSetter(x, "anchorFill", "white"), e.Factory.addGetterSetter(x, "anchorCornerRadius", 0, (0, o.getNumberValidator)()), e.Factory.addGetterSetter(x, "borderStroke", "rgb(0, 161, 255)"), e.Factory.addGetterSetter(x, "borderStrokeWidth", 1, (0, o.getNumberValidator)()), e.Factory.addGetterSetter(x, "borderDash"), e.Factory.addGetterSetter(x, "keepRatio", !0), e.Factory.addGetterSetter(x, "shiftBehavior", "default"), e.Factory.addGetterSetter(x, "centeredScaling", !1), e.Factory.addGetterSetter(x, "ignoreStroke", !1), e.Factory.addGetterSetter(x, "padding", 0, (0, o.getNumberValidator)()), e.Factory.addGetterSetter(x, "nodes"), e.Factory.addGetterSetter(x, "node"), e.Factory.addGetterSetter(x, "boundBoxFunc"), e.Factory.addGetterSetter(x, "anchorDragBoundFunc"), e.Factory.addGetterSetter(x, "anchorStyleFunc"), e.Factory.addGetterSetter(x, "shouldOverdrawWholeArea", !1), e.Factory.addGetterSetter(x, "useSingleNodeRotation", !0), e.Factory.backCompat(x, {
    lineEnabled: "borderEnabled",
    rotateHandlerOffset: "rotateAnchorOffset",
    enabledHandlers: "enabledAnchors"
  }), Mi;
}
var Fi = {}, Ho;
function ku() {
  if (Ho) return Fi;
  Ho = 1, Object.defineProperty(Fi, "__esModule", { value: !0 }), Fi.Wedge = void 0;
  const t = mt(), e = It(), i = pt(), r = yt(), n = pt();
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
  return Fi.Wedge = s, s.prototype.className = "Wedge", s.prototype._centroid = !0, s.prototype._attrsAffectingSize = ["radius"], (0, n._registerNode)(s), t.Factory.addGetterSetter(s, "radius", 0, (0, r.getNumberValidator)()), t.Factory.addGetterSetter(s, "angle", 0, (0, r.getNumberValidator)()), t.Factory.addGetterSetter(s, "clockwise", !1), t.Factory.backCompat(s, {
    angleDeg: "angle",
    getAngleDeg: "getAngle",
    setAngleDeg: "setAngle"
  }), Fi;
}
var ki = {}, Wo;
function Ou() {
  if (Wo) return ki;
  Wo = 1, Object.defineProperty(ki, "__esModule", { value: !0 }), ki.Blur = void 0;
  const t = mt(), e = Dt(), i = yt();
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
    let f, p, y, S, P, g, c, d, v, x, E, C, w, T, M, D, U, V, G, J;
    const b = u + u + 1, A = _ - 1, k = m - 1, F = u + 1, L = F * (F + 1) / 2, B = new r(), I = n[u], Z = s[u];
    let st = null, j = B, O = null, W = null;
    for (let nt = 1; nt < b; nt++)
      j = j.next = new r(), nt === F && (st = j);
    j.next = B, y = p = 0;
    for (let nt = 0; nt < m; nt++) {
      C = w = T = M = S = P = g = c = 0, d = F * (D = h[p]), v = F * (U = h[p + 1]), x = F * (V = h[p + 2]), E = F * (G = h[p + 3]), S += L * D, P += L * U, g += L * V, c += L * G, j = B;
      for (let rt = 0; rt < F; rt++)
        j.r = D, j.g = U, j.b = V, j.a = G, j = j.next;
      for (let rt = 1; rt < F; rt++)
        f = p + ((A < rt ? A : rt) << 2), S += (j.r = D = h[f]) * (J = F - rt), P += (j.g = U = h[f + 1]) * J, g += (j.b = V = h[f + 2]) * J, c += (j.a = G = h[f + 3]) * J, C += D, w += U, T += V, M += G, j = j.next;
      O = B, W = st;
      for (let rt = 0; rt < _; rt++)
        h[p + 3] = G = c * I >> Z, G !== 0 ? (G = 255 / G, h[p] = (S * I >> Z) * G, h[p + 1] = (P * I >> Z) * G, h[p + 2] = (g * I >> Z) * G) : h[p] = h[p + 1] = h[p + 2] = 0, S -= d, P -= v, g -= x, c -= E, d -= O.r, v -= O.g, x -= O.b, E -= O.a, f = y + ((f = rt + u + 1) < A ? f : A) << 2, C += O.r = h[f], w += O.g = h[f + 1], T += O.b = h[f + 2], M += O.a = h[f + 3], S += C, P += w, g += T, c += M, O = O.next, d += D = W.r, v += U = W.g, x += V = W.b, E += G = W.a, C -= D, w -= U, T -= V, M -= G, W = W.next, p += 4;
      y += _;
    }
    for (let nt = 0; nt < _; nt++) {
      w = T = M = C = P = g = c = S = 0, p = nt << 2, d = F * (D = h[p]), v = F * (U = h[p + 1]), x = F * (V = h[p + 2]), E = F * (G = h[p + 3]), S += L * D, P += L * U, g += L * V, c += L * G, j = B;
      for (let X = 0; X < F; X++)
        j.r = D, j.g = U, j.b = V, j.a = G, j = j.next;
      let rt = _;
      for (let X = 1; X <= u; X++)
        p = rt + nt << 2, S += (j.r = D = h[p]) * (J = F - X), P += (j.g = U = h[p + 1]) * J, g += (j.b = V = h[p + 2]) * J, c += (j.a = G = h[p + 3]) * J, C += D, w += U, T += V, M += G, j = j.next, X < k && (rt += _);
      p = nt, O = B, W = st;
      for (let X = 0; X < m; X++)
        f = p << 2, h[f + 3] = G = c * I >> Z, G > 0 ? (G = 255 / G, h[f] = (S * I >> Z) * G, h[f + 1] = (P * I >> Z) * G, h[f + 2] = (g * I >> Z) * G) : h[f] = h[f + 1] = h[f + 2] = 0, S -= d, P -= v, g -= x, c -= E, d -= O.r, v -= O.g, x -= O.b, E -= O.a, f = nt + ((f = X + F) < k ? f : k) * _ << 2, S += C += O.r = h[f], P += w += O.g = h[f + 1], g += T += O.b = h[f + 2], c += M += O.a = h[f + 3], O = O.next, d += D = W.r, v += U = W.g, x += V = W.b, E += G = W.a, C -= D, w -= U, T -= V, M -= G, W = W.next, p += _;
    }
  }
  const o = function(u) {
    const h = Math.round(this.blurRadius());
    h > 0 && a(u, h);
  };
  return ki.Blur = o, t.Factory.addGetterSetter(e.Node, "blurRadius", 0, (0, i.getNumberValidator)(), t.Factory.afterSetFilter), ki;
}
var Oi = {}, jo;
function Nu() {
  if (jo) return Oi;
  jo = 1, Object.defineProperty(Oi, "__esModule", { value: !0 }), Oi.Brighten = void 0;
  const t = mt(), e = Dt(), i = yt(), r = function(n) {
    const s = this.brightness() * 255, a = n.data, o = a.length;
    for (let l = 0; l < o; l += 4)
      a[l] += s, a[l + 1] += s, a[l + 2] += s;
  };
  return Oi.Brighten = r, t.Factory.addGetterSetter(e.Node, "brightness", 0, (0, i.getNumberValidator)(), t.Factory.afterSetFilter), Oi;
}
var Ni = {}, qo;
function Lu() {
  if (qo) return Ni;
  qo = 1, Object.defineProperty(Ni, "__esModule", { value: !0 }), Ni.Contrast = void 0;
  const t = mt(), e = Dt(), i = yt(), r = function(n) {
    const s = Math.pow((this.contrast() + 100) / 100, 2), a = n.data, o = a.length;
    let l = 150, u = 150, h = 150;
    for (let _ = 0; _ < o; _ += 4)
      l = a[_], u = a[_ + 1], h = a[_ + 2], l /= 255, l -= 0.5, l *= s, l += 0.5, l *= 255, u /= 255, u -= 0.5, u *= s, u += 0.5, u *= 255, h /= 255, h -= 0.5, h *= s, h += 0.5, h *= 255, l = l < 0 ? 0 : l > 255 ? 255 : l, u = u < 0 ? 0 : u > 255 ? 255 : u, h = h < 0 ? 0 : h > 255 ? 255 : h, a[_] = l, a[_ + 1] = u, a[_ + 2] = h;
  };
  return Ni.Contrast = r, t.Factory.addGetterSetter(e.Node, "contrast", 0, (0, i.getNumberValidator)(), t.Factory.afterSetFilter), Ni;
}
var Li = {}, Ko;
function Du() {
  if (Ko) return Li;
  Ko = 1, Object.defineProperty(Li, "__esModule", { value: !0 }), Li.Emboss = void 0;
  const t = mt(), e = Dt(), i = Nt(), r = yt(), n = function(s) {
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
        const D = M > 0 ? M : -M, U = w > 0 ? w : -w, V = T > 0 ? T : -T;
        if (U > D && (M = w), V > D && (M = T), M *= a, u) {
          const G = h[v] + M, J = h[v + 1] + M, b = h[v + 2] + M;
          h[v] = G > 255 ? 255 : G < 0 ? 0 : G, h[v + 1] = J > 255 ? 255 : J < 0 ? 0 : J, h[v + 2] = b > 255 ? 255 : b < 0 ? 0 : b;
        } else {
          let G = o - M;
          G < 0 ? G = 0 : G > 255 && (G = 255), h[v] = h[v + 1] = h[v + 2] = G;
        }
      } while (--d);
    } while (--S);
  };
  return Li.Emboss = n, t.Factory.addGetterSetter(e.Node, "embossStrength", 0.5, (0, r.getNumberValidator)(), t.Factory.afterSetFilter), t.Factory.addGetterSetter(e.Node, "embossWhiteLevel", 0.5, (0, r.getNumberValidator)(), t.Factory.afterSetFilter), t.Factory.addGetterSetter(e.Node, "embossDirection", "top-left", void 0, t.Factory.afterSetFilter), t.Factory.addGetterSetter(e.Node, "embossBlend", !1, void 0, t.Factory.afterSetFilter), Li;
}
var Di = {}, zo;
function Gu() {
  if (zo) return Di;
  zo = 1, Object.defineProperty(Di, "__esModule", { value: !0 }), Di.Enhance = void 0;
  const t = mt(), e = Dt(), i = yt();
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
  return Di.Enhance = n, t.Factory.addGetterSetter(e.Node, "enhance", 0, (0, i.getNumberValidator)(), t.Factory.afterSetFilter), Di;
}
var Gi = {}, Yo;
function Iu() {
  if (Yo) return Gi;
  Yo = 1, Object.defineProperty(Gi, "__esModule", { value: !0 }), Gi.Grayscale = void 0;
  const t = function(e) {
    const i = e.data, r = i.length;
    for (let n = 0; n < r; n += 4) {
      const s = 0.34 * i[n] + 0.5 * i[n + 1] + 0.16 * i[n + 2];
      i[n] = s, i[n + 1] = s, i[n + 2] = s;
    }
  };
  return Gi.Grayscale = t, Gi;
}
var Ii = {}, $o;
function Uu() {
  if ($o) return Ii;
  $o = 1, Object.defineProperty(Ii, "__esModule", { value: !0 }), Ii.HSL = void 0;
  const t = mt(), e = Dt(), i = yt();
  t.Factory.addGetterSetter(e.Node, "hue", 0, (0, i.getNumberValidator)(), t.Factory.afterSetFilter), t.Factory.addGetterSetter(e.Node, "saturation", 0, (0, i.getNumberValidator)(), t.Factory.afterSetFilter), t.Factory.addGetterSetter(e.Node, "luminance", 0, (0, i.getNumberValidator)(), t.Factory.afterSetFilter);
  const r = function(n) {
    const s = n.data, a = s.length, o = 1, l = Math.pow(2, this.saturation()), u = Math.abs(this.hue() + 360) % 360, h = this.luminance() * 127, _ = o * l * Math.cos(u * Math.PI / 180), m = o * l * Math.sin(u * Math.PI / 180), f = 0.299 * o + 0.701 * _ + 0.167 * m, p = 0.587 * o - 0.587 * _ + 0.33 * m, y = 0.114 * o - 0.114 * _ - 0.497 * m, S = 0.299 * o - 0.299 * _ - 0.328 * m, P = 0.587 * o + 0.413 * _ + 0.035 * m, g = 0.114 * o - 0.114 * _ + 0.293 * m, c = 0.299 * o - 0.3 * _ + 1.25 * m, d = 0.587 * o - 0.586 * _ - 1.05 * m, v = 0.114 * o + 0.886 * _ - 0.2 * m;
    let x, E, C, w;
    for (let T = 0; T < a; T += 4)
      x = s[T + 0], E = s[T + 1], C = s[T + 2], w = s[T + 3], s[T + 0] = f * x + p * E + y * C + h, s[T + 1] = S * x + P * E + g * C + h, s[T + 2] = c * x + d * E + v * C + h, s[T + 3] = w;
  };
  return Ii.HSL = r, Ii;
}
var Ui = {}, Xo;
function Bu() {
  if (Xo) return Ui;
  Xo = 1, Object.defineProperty(Ui, "__esModule", { value: !0 }), Ui.HSV = void 0;
  const t = mt(), e = Dt(), i = yt(), r = function(n) {
    const s = n.data, a = s.length, o = Math.pow(2, this.value()), l = Math.pow(2, this.saturation()), u = Math.abs(this.hue() + 360) % 360, h = o * l * Math.cos(u * Math.PI / 180), _ = o * l * Math.sin(u * Math.PI / 180), m = 0.299 * o + 0.701 * h + 0.167 * _, f = 0.587 * o - 0.587 * h + 0.33 * _, p = 0.114 * o - 0.114 * h - 0.497 * _, y = 0.299 * o - 0.299 * h - 0.328 * _, S = 0.587 * o + 0.413 * h + 0.035 * _, P = 0.114 * o - 0.114 * h + 0.293 * _, g = 0.299 * o - 0.3 * h + 1.25 * _, c = 0.587 * o - 0.586 * h - 1.05 * _, d = 0.114 * o + 0.886 * h - 0.2 * _;
    for (let v = 0; v < a; v += 4) {
      const x = s[v + 0], E = s[v + 1], C = s[v + 2], w = s[v + 3];
      s[v + 0] = m * x + f * E + p * C, s[v + 1] = y * x + S * E + P * C, s[v + 2] = g * x + c * E + d * C, s[v + 3] = w;
    }
  };
  return Ui.HSV = r, t.Factory.addGetterSetter(e.Node, "hue", 0, (0, i.getNumberValidator)(), t.Factory.afterSetFilter), t.Factory.addGetterSetter(e.Node, "saturation", 0, (0, i.getNumberValidator)(), t.Factory.afterSetFilter), t.Factory.addGetterSetter(e.Node, "value", 0, (0, i.getNumberValidator)(), t.Factory.afterSetFilter), Ui;
}
var Bi = {}, Jo;
function Vu() {
  if (Jo) return Bi;
  Jo = 1, Object.defineProperty(Bi, "__esModule", { value: !0 }), Bi.Invert = void 0;
  const t = function(e) {
    const i = e.data, r = i.length;
    for (let n = 0; n < r; n += 4)
      i[n] = 255 - i[n], i[n + 1] = 255 - i[n + 1], i[n + 2] = 255 - i[n + 2];
  };
  return Bi.Invert = t, Bi;
}
var Vi = {}, Qo;
function Hu() {
  if (Qo) return Vi;
  Qo = 1, Object.defineProperty(Vi, "__esModule", { value: !0 }), Vi.Kaleidoscope = void 0;
  const t = mt(), e = Dt(), i = Nt(), r = yt(), n = function(o, l, u) {
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
        const D = h[M + 0], U = h[M + 1], V = h[M + 2], G = h[M + 3];
        M = (E + T * m) * 4, _[M + 0] = D, _[M + 1] = U, _[M + 2] = V, _[M + 3] = G;
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
        let U = (C * m + E) * 4;
        const V = h[U + 0], G = h[U + 1], J = h[U + 2], b = h[U + 3];
        U = (g * m + P) * 4, _[U + 0] = V, _[U + 1] = G, _[U + 2] = J, _[U + 3] = b;
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
    let T = w, M = 0, D = T, U = 1;
    for (x + w > l && (M = T, D = 0, U = -1), _ = 0; _ < u; _ += 1)
      for (h = M; h !== D; h += U)
        m = Math.round(h + x) % l, g = (l * _ + m) * 4, p = C.data[g + 0], y = C.data[g + 1], S = C.data[g + 2], P = C.data[g + 3], c = (l * _ + h) * 4, C.data[c + 0] = p, C.data[c + 1] = y, C.data[c + 2] = S, C.data[c + 3] = P;
    for (_ = 0; _ < u; _ += 1)
      for (T = Math.floor(w), f = 0; f < d; f += 1) {
        for (h = 0; h < T + 1; h += 1)
          g = (l * _ + h) * 4, p = C.data[g + 0], y = C.data[g + 1], S = C.data[g + 2], P = C.data[g + 3], c = (l * _ + T * 2 - h - 1) * 4, C.data[c + 0] = p, C.data[c + 1] = y, C.data[c + 2] = S, C.data[c + 3] = P;
        T *= 2;
      }
    s(C, o, {});
  };
  return Vi.Kaleidoscope = a, t.Factory.addGetterSetter(e.Node, "kaleidoscopePower", 2, (0, r.getNumberValidator)(), t.Factory.afterSetFilter), t.Factory.addGetterSetter(e.Node, "kaleidoscopeAngle", 0, (0, r.getNumberValidator)(), t.Factory.afterSetFilter), Vi;
}
var Hi = {}, Zo;
function Wu() {
  if (Zo) return Hi;
  Zo = 1, Object.defineProperty(Hi, "__esModule", { value: !0 }), Hi.Mask = void 0;
  const t = mt(), e = Dt(), i = yt();
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
  return Hi.Mask = _, t.Factory.addGetterSetter(e.Node, "threshold", 0, (0, i.getNumberValidator)(), t.Factory.afterSetFilter), Hi;
}
var Wi = {}, ta;
function ju() {
  if (ta) return Wi;
  ta = 1, Object.defineProperty(Wi, "__esModule", { value: !0 }), Wi.Noise = void 0;
  const t = mt(), e = Dt(), i = yt(), r = function(n) {
    const s = this.noise() * 255, a = n.data, o = a.length, l = s / 2;
    for (let u = 0; u < o; u += 4)
      a[u + 0] += l - 2 * l * Math.random(), a[u + 1] += l - 2 * l * Math.random(), a[u + 2] += l - 2 * l * Math.random();
  };
  return Wi.Noise = r, t.Factory.addGetterSetter(e.Node, "noise", 0.2, (0, i.getNumberValidator)(), t.Factory.afterSetFilter), Wi;
}
var ji = {}, ea;
function qu() {
  if (ea) return ji;
  ea = 1, Object.defineProperty(ji, "__esModule", { value: !0 }), ji.Pixelate = void 0;
  const t = mt(), e = Nt(), i = Dt(), r = yt(), n = function(s) {
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
  return ji.Pixelate = n, t.Factory.addGetterSetter(i.Node, "pixelSize", 8, (0, r.getNumberValidator)(), t.Factory.afterSetFilter), ji;
}
var qi = {}, ia;
function Ku() {
  if (ia) return qi;
  ia = 1, Object.defineProperty(qi, "__esModule", { value: !0 }), qi.Posterize = void 0;
  const t = mt(), e = Dt(), i = yt(), r = function(n) {
    const s = Math.round(this.levels() * 254) + 1, a = n.data, o = a.length, l = 255 / s;
    for (let u = 0; u < o; u += 1)
      a[u] = Math.floor(a[u] / l) * l;
  };
  return qi.Posterize = r, t.Factory.addGetterSetter(e.Node, "levels", 0.5, (0, i.getNumberValidator)(), t.Factory.afterSetFilter), qi;
}
var Ki = {}, na;
function zu() {
  if (na) return Ki;
  na = 1, Object.defineProperty(Ki, "__esModule", { value: !0 }), Ki.RGB = void 0;
  const t = mt(), e = Dt(), i = yt(), r = function(n) {
    const s = n.data, a = s.length, o = this.red(), l = this.green(), u = this.blue();
    for (let h = 0; h < a; h += 4) {
      const _ = (0.34 * s[h] + 0.5 * s[h + 1] + 0.16 * s[h + 2]) / 255;
      s[h] = _ * o, s[h + 1] = _ * l, s[h + 2] = _ * u, s[h + 3] = s[h + 3];
    }
  };
  return Ki.RGB = r, t.Factory.addGetterSetter(e.Node, "red", 0, function(n) {
    return this._filterUpToDate = !1, n > 255 ? 255 : n < 0 ? 0 : Math.round(n);
  }), t.Factory.addGetterSetter(e.Node, "green", 0, function(n) {
    return this._filterUpToDate = !1, n > 255 ? 255 : n < 0 ? 0 : Math.round(n);
  }), t.Factory.addGetterSetter(e.Node, "blue", 0, i.RGBComponent, t.Factory.afterSetFilter), Ki;
}
var zi = {}, ra;
function Yu() {
  if (ra) return zi;
  ra = 1, Object.defineProperty(zi, "__esModule", { value: !0 }), zi.RGBA = void 0;
  const t = mt(), e = Dt(), i = yt(), r = function(n) {
    const s = n.data, a = s.length, o = this.red(), l = this.green(), u = this.blue(), h = this.alpha();
    for (let _ = 0; _ < a; _ += 4) {
      const m = 1 - h;
      s[_] = o * h + s[_] * m, s[_ + 1] = l * h + s[_ + 1] * m, s[_ + 2] = u * h + s[_ + 2] * m;
    }
  };
  return zi.RGBA = r, t.Factory.addGetterSetter(e.Node, "red", 0, function(n) {
    return this._filterUpToDate = !1, n > 255 ? 255 : n < 0 ? 0 : Math.round(n);
  }), t.Factory.addGetterSetter(e.Node, "green", 0, function(n) {
    return this._filterUpToDate = !1, n > 255 ? 255 : n < 0 ? 0 : Math.round(n);
  }), t.Factory.addGetterSetter(e.Node, "blue", 0, i.RGBComponent, t.Factory.afterSetFilter), t.Factory.addGetterSetter(e.Node, "alpha", 1, function(n) {
    return this._filterUpToDate = !1, n > 1 ? 1 : n < 0 ? 0 : n;
  }), zi;
}
var Yi = {}, sa;
function $u() {
  if (sa) return Yi;
  sa = 1, Object.defineProperty(Yi, "__esModule", { value: !0 }), Yi.Sepia = void 0;
  const t = function(e) {
    const i = e.data, r = i.length;
    for (let n = 0; n < r; n += 4) {
      const s = i[n + 0], a = i[n + 1], o = i[n + 2];
      i[n + 0] = Math.min(255, s * 0.393 + a * 0.769 + o * 0.189), i[n + 1] = Math.min(255, s * 0.349 + a * 0.686 + o * 0.168), i[n + 2] = Math.min(255, s * 0.272 + a * 0.534 + o * 0.131);
    }
  };
  return Yi.Sepia = t, Yi;
}
var $i = {}, oa;
function Xu() {
  if (oa) return $i;
  oa = 1, Object.defineProperty($i, "__esModule", { value: !0 }), $i.Solarize = void 0;
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
  return $i.Solarize = t, $i;
}
var Xi = {}, aa;
function Ju() {
  if (aa) return Xi;
  aa = 1, Object.defineProperty(Xi, "__esModule", { value: !0 }), Xi.Threshold = void 0;
  const t = mt(), e = Dt(), i = yt(), r = function(n) {
    const s = this.threshold() * 255, a = n.data, o = a.length;
    for (let l = 0; l < o; l += 1)
      a[l] = a[l] < s ? 0 : 255;
  };
  return Xi.Threshold = r, t.Factory.addGetterSetter(e.Node, "threshold", 0.5, (0, i.getNumberValidator)(), t.Factory.afterSetFilter), Xi;
}
var la;
function Qu() {
  if (la) return hi;
  la = 1, Object.defineProperty(hi, "__esModule", { value: !0 }), hi.Konva = void 0;
  const t = yu(), e = vu(), i = Su(), r = Cu(), n = wu(), s = xu(), a = Pu(), o = Ol(), l = Cs(), u = Nl(), h = Tu(), _ = Au(), m = Ru(), f = Eu(), p = Ll(), y = Mu(), S = Fu(), P = ku(), g = Ou(), c = Nu(), d = Lu(), v = Du(), x = Gu(), E = Iu(), C = Uu(), w = Bu(), T = Vu(), M = Hu(), D = Wu(), U = ju(), V = qu(), G = Ku(), J = zu(), b = Yu(), A = $u(), k = Xu(), F = Ju();
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
      Noise: U.Noise,
      Pixelate: V.Pixelate,
      Posterize: G.Posterize,
      RGB: J.RGB,
      RGBA: b.RGBA,
      Sepia: A.Sepia,
      Solarize: k.Solarize,
      Threshold: F.Threshold
    }
  }), hi;
}
var Zu = Fn.exports, ca;
function td() {
  if (ca) return Fn.exports;
  ca = 1, Object.defineProperty(Zu, "__esModule", { value: !0 });
  const t = Qu();
  return Fn.exports = t.Konva, Fn.exports;
}
var ed = td();
const mn = /* @__PURE__ */ gu(ed);
function zn(t) {
  if (!mn.autoDrawEnabled) {
    const e = t.getLayer() || t.getStage();
    e && e.batchDraw();
  }
}
const ha = { key: !0, style: !0, elm: !0, isRootInsert: !0 }, Nr = ".vue-konva-event";
function Dl(t, e, i, r) {
  const n = t.__konvaNode, s = {};
  let a = !1;
  for (let o in i) {
    if (ha.hasOwnProperty(o))
      continue;
    const l = o.slice(0, 2) === "on", u = i[o] !== e[o];
    if (l && u) {
      let h = o.slice(2).toLowerCase();
      h.slice(0, 7) === "content" && (h = "content" + h.slice(7, 1).toUpperCase() + h.slice(8)), n == null || n.off(h + Nr, i[o]);
    }
    !e.hasOwnProperty(o) && (n == null || n.setAttr(o, void 0));
  }
  for (let o in e) {
    if (ha.hasOwnProperty(o))
      continue;
    let l = o.slice(0, 2) === "on";
    const u = i[o] !== e[o];
    if (l && u) {
      let h = o.slice(2).toLowerCase();
      h.slice(0, 7) === "content" && (h = "content" + h.slice(7, 1).toUpperCase() + h.slice(8)), e[o] && (n == null || n.off(h + Nr), n == null || n.on(h + Nr, e[o]));
    }
    !l && (e[o] !== i[o] || r && e[o] !== (n == null ? void 0 : n.getAttr(o))) && (a = !0, s[o] = e[o]);
  }
  a && n && (n.setAttrs(s), zn(n));
}
const Zr = ".vue-konva-vmodel", ua = "onUpdate:";
function Yn(t, e) {
  t.off(Zr);
  const i = e.vnode.props || {};
  for (const r in i)
    if (r.startsWith(ua)) {
      const n = r.slice(ua.length), s = i[r];
      t.on(`${n}Change${Zr}`, () => {
        s(t.getAttr(n));
      });
    }
}
const id = "V";
function nd(t) {
  function e(i) {
    return i != null && i.__konvaNode ? i : i != null && i.parent ? e(i.parent) : (console.error("vue-konva error: Can not find parent node"), null);
  }
  return e(t.parent);
}
function Gl(t) {
  return t.component ? t.component.__konvaNode || Gl(t.component.subTree) : null;
}
function rd(t) {
  const { el: e, component: i } = t, r = Gl(t);
  if (e != null && e.tagName && i && !r) {
    const n = e.tagName.toLowerCase();
    return console.error(
      `vue-konva error: You are trying to render "${n}" inside your component tree. Looks like it is not a Konva node. You can render only Konva components inside the Stage.`
    ), null;
  }
  return r;
}
function sd(t) {
  const e = (n) => !!n && typeof n == "object" && "component" in n, i = (n) => Array.isArray(n), r = (n) => e(n) ? [n, ...r(n.children)] : i(n) ? n.flatMap(r) : [];
  return r(t.children);
}
function Il(t, e) {
  const i = sd(t), r = [];
  i.forEach((s) => {
    const a = rd(s);
    a && r.push(a);
  });
  let n = !1;
  r.forEach((s, a) => {
    s.getZIndex() !== a && (s.setZIndex(a), n = !0);
  }), n && zn(e);
}
var ba;
const od = ((ba = mn.default) == null ? void 0 : ba.Stage) || mn.Stage, ad = /* @__PURE__ */ Ye({
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
    const n = hr();
    if (!n) return;
    const s = /* @__PURE__ */ oi({}), a = /* @__PURE__ */ vt(null), o = new od({
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
      Dl(n, m, _, t.__useStrictMode), Object.assign(s, m);
    }
    return Ke(() => {
      a.value && o.container(a.value), h(), Yn(o, n);
    }), ps(() => {
      h(), Il(n.subTree, o), Yn(o, n);
    }), Sn(() => {
      o.destroy();
    }), te(() => t.config, h, { deep: !0 }), r({
      getStage: u,
      getNode: l
    }), () => {
      var _;
      return Dh(
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
}), ld = ".vue-konva-event", cd = {
  Group: !0,
  Layer: !0,
  FastLayer: !0,
  Label: !0
};
function Ot(t, e) {
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
      const a = hr();
      if (!a) return;
      const o = /* @__PURE__ */ oi({}), l = new e();
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
        Dl(a, y, p, i.__useStrictMode), Object.assign(o, y);
      }
      Ke(() => {
        var p;
        const f = (p = nd(a)) == null ? void 0 : p.__konvaNode;
        f && "add" in f && f.add(l), zn(l), Yn(l, a);
      }), Cn(() => {
        zn(l), l.destroy(), l.off(ld), l.off(Zr);
      }), ps(() => {
        _(), Il(a.subTree, l), Yn(l, a);
      }), te(() => i.config, _, { deep: !0 }), s({
        getStage: h,
        getNode: u
      });
      const m = cd.hasOwnProperty(t);
      return () => {
        var f;
        return m ? (f = n.default) == null ? void 0 : f.call(n) : null;
      };
    }
  });
}
const Lt = mn.default || mn, hd = Ot("Arc", Lt.Arc), ud = Ot("Arrow", Lt.Arrow), dd = Ot("Circle", Lt.Circle), fd = Ot("Ellipse", Lt.Ellipse), gd = Ot("FastLayer", Lt.FastLayer), pd = Ot("Group", Lt.Group), md = Ot("Image", Lt.Image), _d = Ot("Label", Lt.Label), yd = Ot("Layer", Lt.Layer), vd = Ot("Line", Lt.Line), bd = Ot("Path", Lt.Path), Sd = Ot("Rect", Lt.Rect), Cd = Ot("RegularPolygon", Lt.RegularPolygon), wd = Ot("Ring", Lt.Ring), xd = Ot("Shape", Lt.Shape), Pd = Ot("Sprite", Lt.Sprite), Td = Ot("Star", Lt.Star), Ad = Ot("Tag", Lt.Tag), Rd = Ot("Text", Lt.Text), Ed = Ot("TextPath", Lt.TextPath), Md = Ot("Transformer", Lt.Transformer), Fd = Ot("Wedge", Lt.Wedge), kd = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Arc: hd,
  Arrow: ud,
  Circle: dd,
  Ellipse: fd,
  FastLayer: gd,
  Group: pd,
  Image: md,
  Label: _d,
  Layer: yd,
  Line: vd,
  Path: bd,
  Rect: Sd,
  RegularPolygon: Cd,
  Ring: wd,
  Shape: xd,
  Sprite: Pd,
  Star: Td,
  Tag: Ad,
  Text: Rd,
  TextPath: Ed,
  Transformer: Md,
  Wedge: Fd
}, Symbol.toStringTag, { value: "Module" })), Od = {
  install: (t, e) => {
    const i = (e == null ? void 0 : e.prefix) || id, r = e != null && e.customNodes ? Object.entries(e.customNodes).map(
      ([n, s]) => Ot(n, s)
    ) : [];
    [
      ad,
      ...Object.values(kd),
      ...r
    ].forEach((n) => {
      t.component(`${i}${n.name}`, n);
    });
  }
}, Nd = "showcase-locale", ts = /* @__PURE__ */ new Set();
let da = !1;
function Ld() {
  const t = document.documentElement.getAttribute("lang");
  return t === "en" || t === "ru" ? t : null;
}
function Dd() {
  try {
    const t = localStorage.getItem(Nd);
    if (t === "en" || t === "ru") return t;
  } catch {
  }
  return null;
}
function Gd() {
  return Dd() || Ld() || "ru";
}
function fa() {
  ts.forEach((t) => t());
}
function Id() {
  if (da || typeof MutationObserver > "u") return;
  da = !0, new MutationObserver(() => fa()).observe(document.documentElement, { attributes: !0, attributeFilter: ["lang"] }), window.addEventListener("showcase-locale", () => fa());
}
function _n() {
  return Gd();
}
function Ud(t) {
  return Id(), ts.add(t), () => ts.delete(t);
}
const $n = Symbol("pe-locale"), Lr = {
  ru: {
    "pe.undo": "Отменить",
    "pe.redo": "Повторить",
    "pe.editor": "Редактор",
    "pe.expand": "На весь экран",
    "pe.collapse": "Свернуть",
    "pe.close": "Закрыть",
    "pe.save": "Сохранить",
    "pe.tools": "Инструменты",
    "pe.properties": "Свойства",
    "pe.history": "История",
    "pe.tab.color": "Цвет",
    "pe.tab.rotate": "Поворот",
    "pe.tab.crop": "Кадр",
    "pe.tab.flip": "Отражение",
    "pe.wb": "Баланс белого",
    "pe.temperature": "Температура",
    "pe.tint": "Оттенок",
    "pe.tone": "Тон",
    "pe.exposure": "Экспозиция",
    "pe.contrast": "Контраст",
    "pe.highlights": "Света",
    "pe.shadows": "Тени",
    "pe.whites": "Белые",
    "pe.blacks": "Чёрные",
    "pe.presence": "Присутствие",
    "pe.vibrance": "Красочность",
    "pe.saturation": "Насыщенность",
    "pe.beforeAfter": "До / После",
    "pe.reset": "Сбросить",
    "pe.apply": "Применить",
    "pe.rotateRight": "Вправо 90°",
    "pe.rotateLeft": "Влево 90°",
    "pe.selectCrop": "Выделить кадр",
    "pe.cropHint": "Потяните углы и стороны рамки, затем нажмите «Применить».",
    "pe.flipH": "По горизонтали",
    "pe.flipV": "По вертикали",
    "pe.steps": "{n} шаг(ов)",
    "pe.cropMode": "режим кадрирования",
    "pe.history.original": "Оригинал",
    "pe.history.correction": "Коррекция",
    "pe.history.crop": "Обрезка",
    "pe.openTitle": "Открыть изображение",
    "pe.openHint": "Нажмите, чтобы выбрать файл — JPEG, PNG, WebP",
    "pe.chooseFile": "Выбрать файл"
  },
  en: {
    "pe.undo": "Undo",
    "pe.redo": "Redo",
    "pe.editor": "Editor",
    "pe.expand": "Full screen",
    "pe.collapse": "Exit full screen",
    "pe.close": "Close",
    "pe.save": "Save",
    "pe.tools": "Tools",
    "pe.properties": "Properties",
    "pe.history": "History",
    "pe.tab.color": "Color",
    "pe.tab.rotate": "Rotate",
    "pe.tab.crop": "Crop",
    "pe.tab.flip": "Flip",
    "pe.wb": "White balance",
    "pe.temperature": "Temperature",
    "pe.tint": "Tint",
    "pe.tone": "Tone",
    "pe.exposure": "Exposure",
    "pe.contrast": "Contrast",
    "pe.highlights": "Highlights",
    "pe.shadows": "Shadows",
    "pe.whites": "Whites",
    "pe.blacks": "Blacks",
    "pe.presence": "Presence",
    "pe.vibrance": "Vibrance",
    "pe.saturation": "Saturation",
    "pe.beforeAfter": "Before / After",
    "pe.reset": "Reset",
    "pe.apply": "Apply",
    "pe.rotateRight": "Right 90°",
    "pe.rotateLeft": "Left 90°",
    "pe.selectCrop": "Select crop",
    "pe.cropHint": "Drag the corners and edges, then press Apply.",
    "pe.flipH": "Horizontal",
    "pe.flipV": "Vertical",
    "pe.steps": "{n} step(s)",
    "pe.cropMode": "crop mode",
    "pe.history.original": "Original",
    "pe.history.correction": "Adjust",
    "pe.history.crop": "Crop",
    "pe.openTitle": "Open image",
    "pe.openHint": "Click to choose a file — JPEG, PNG, WebP",
    "pe.chooseFile": "Choose file"
  }
};
function Bd(t, e = {}, i = _n()) {
  return ((Lr[i] || Lr.ru)[t] ?? Lr.ru[t] ?? t).replace(
    /\{(\w+)\}/g,
    (s, a) => e[a] !== void 0 && e[a] !== null ? String(e[a]) : `{${a}}`
  );
}
function Ul(t) {
  const e = ni($n, null), i = t ?? e ?? /* @__PURE__ */ vt(_n());
  function r(n, s) {
    return Bd(n, s, i.value);
  }
  if (!t && !e) {
    const n = Ud(() => {
      i.value = _n();
    });
    Cn(n);
  }
  return { locale: i, t: r };
}
const Vd = {
  key: 0,
  d: "M18 6 6 18M6 6l12 12"
}, Hd = {
  key: 3,
  d: "M20 6 9 17l-5-5"
}, Wd = /* @__PURE__ */ Ye({
  __name: "Icon",
  props: {
    name: {},
    color: {}
  },
  setup(t) {
    return (e, i) => (St(), Et("svg", xl({
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
      t.name === "close" ? (St(), Et("path", Vd)) : t.name === "reload" ? (St(), Et(Mt, { key: 1 }, [
        i[0] || (i[0] = it("path", { d: "M3 12a9 9 0 0 1 15-6.7L21 8" }, null, -1)),
        i[1] || (i[1] = it("path", { d: "M21 3v5h-5" }, null, -1)),
        i[2] || (i[2] = it("path", { d: "M21 12a9 9 0 0 1-15 6.7L3 16" }, null, -1)),
        i[3] || (i[3] = it("path", { d: "M3 21v-5h5" }, null, -1))
      ], 64)) : t.name === "minimize" ? (St(), Et(Mt, { key: 2 }, [
        i[4] || (i[4] = it("path", { d: "M4 14h6v6" }, null, -1)),
        i[5] || (i[5] = it("path", { d: "M20 10h-6V4" }, null, -1)),
        i[6] || (i[6] = it("path", { d: "M14 10l7-7" }, null, -1)),
        i[7] || (i[7] = it("path", { d: "M3 21l7-7" }, null, -1))
      ], 64)) : t.name === "success" ? (St(), Et("path", Hd)) : t.name === "flip" ? (St(), Et(Mt, { key: 4 }, [
        i[8] || (i[8] = zs('<path d="M8 3H5a2 2 0 0 0-2 2v3" data-v-c548d7a0></path><path d="M16 3h3a2 2 0 0 1 2 2v3" data-v-c548d7a0></path><path d="M8 21H5a2 2 0 0 1-2-2v-3" data-v-c548d7a0></path><path d="M16 21h3a2 2 0 0 0 2-2v-3" data-v-c548d7a0></path><path d="M12 3v18" data-v-c548d7a0></path>', 5))
      ], 64)) : t.name === "clock" ? (St(), Et(Mt, { key: 5 }, [
        i[9] || (i[9] = it("circle", {
          cx: "12",
          cy: "12",
          r: "10"
        }, null, -1)),
        i[10] || (i[10] = it("path", { d: "M12 6v6l4 2" }, null, -1))
      ], 64)) : t.name === "sliders" ? (St(), Et(Mt, { key: 6 }, [
        i[11] || (i[11] = zs('<path d="M4 21v-7" data-v-c548d7a0></path><path d="M4 10V3" data-v-c548d7a0></path><path d="M12 21v-9" data-v-c548d7a0></path><path d="M12 8V3" data-v-c548d7a0></path><path d="M20 21v-5" data-v-c548d7a0></path><path d="M20 12V3" data-v-c548d7a0></path><path d="M1 14h6" data-v-c548d7a0></path><path d="M9 8h6" data-v-c548d7a0></path><path d="M17 16h6" data-v-c548d7a0></path>', 9))
      ], 64)) : t.name === "undo" ? (St(), Et(Mt, { key: 7 }, [
        i[12] || (i[12] = it("path", { d: "M3 7v6h6" }, null, -1)),
        i[13] || (i[13] = it("path", { d: "M21 17a9 9 0 0 0-9-9 9 9 0 0 0-6.7 2.9L3 13" }, null, -1))
      ], 64)) : t.name === "redo" ? (St(), Et(Mt, { key: 8 }, [
        i[14] || (i[14] = it("path", { d: "M21 7v6h-6" }, null, -1)),
        i[15] || (i[15] = it("path", { d: "M3 17a9 9 0 0 1 9-9 9 9 0 0 1 6.7 2.9L21 13" }, null, -1))
      ], 64)) : t.name === "image" ? (St(), Et(Mt, { key: 9 }, [
        i[16] || (i[16] = it("rect", {
          x: "3",
          y: "3",
          width: "18",
          height: "18",
          rx: "2"
        }, null, -1)),
        i[17] || (i[17] = it("circle", {
          cx: "9",
          cy: "9",
          r: "2"
        }, null, -1)),
        i[18] || (i[18] = it("path", { d: "m21 15-3.1-3.1a2 2 0 0 0-2.8 0L6 21" }, null, -1))
      ], 64)) : t.name === "expand" ? (St(), Et(Mt, { key: 10 }, [
        i[19] || (i[19] = it("path", { d: "M15 3h6v6" }, null, -1)),
        i[20] || (i[20] = it("path", { d: "M9 21H3v-6" }, null, -1)),
        i[21] || (i[21] = it("path", { d: "M21 3l-7 7" }, null, -1)),
        i[22] || (i[22] = it("path", { d: "M3 21l7-7" }, null, -1))
      ], 64)) : t.name === "compress" ? (St(), Et(Mt, { key: 11 }, [
        i[23] || (i[23] = it("path", { d: "M4 14h6v6" }, null, -1)),
        i[24] || (i[24] = it("path", { d: "M20 10h-6V4" }, null, -1)),
        i[25] || (i[25] = it("path", { d: "M14 10l7-7" }, null, -1)),
        i[26] || (i[26] = it("path", { d: "M3 21l7-7" }, null, -1))
      ], 64)) : Ve("", !0)
    ], 16));
  }
}), ws = (t, e) => {
  const i = t.__vccOpts || t;
  for (const [r, n] of e)
    i[r] = n;
  return i;
}, Jt = /* @__PURE__ */ ws(Wd, [["__scopeId", "data-v-c548d7a0"]]), jd = { class: "lds-ring" }, qd = /* @__PURE__ */ Ye({
  __name: "Loader",
  props: {
    widthProp: { default: "24px" },
    heightProp: { default: "24px" },
    borderProp: { default: "2px" }
  },
  setup(t) {
    jh((s) => ({
      v609d0418: i.value,
      v0caf46b9: r.value,
      v030329be: n.value
    }));
    const e = t, i = /* @__PURE__ */ vt(e.widthProp), r = /* @__PURE__ */ vt(e.heightProp), n = /* @__PURE__ */ vt(e.borderProp);
    return (s, a) => (St(), Et("div", jd, [...a[0] || (a[0] = [
      it("div", null, null, -1),
      it("div", null, null, -1),
      it("div", null, null, -1),
      it("div", null, null, -1)
    ])]));
  }
}), Kd = /* @__PURE__ */ ws(qd, [["__scopeId", "data-v-db5bcf8f"]]), zd = { class: "pe-slider" }, Yd = { class: "pe-slider__meta" }, $d = { class: "pe-slider__label" }, Xd = { class: "pe-slider__value" }, Jd = { class: "pe-slider__row" }, Qd = {
  class: "pe-slider__rail",
  "aria-hidden": "true"
}, Zd = ["min", "max", "step", "value", "aria-label"], tf = /* @__PURE__ */ Ye({
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
    const i = t, r = e, n = jn(() => {
      const o = i.modelValue;
      return i.unit === "raw" ? String(o) : o > 0 ? `+${o}` : String(o);
    }), s = jn(() => {
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
    return (o, l) => (St(), Et("div", zd, [
      it("div", Yd, [
        it("span", $d, Pt(t.label), 1),
        it("span", Xd, Pt(n.value), 1)
      ]),
      it("div", Jd, [
        it("div", Qd, [
          l[0] || (l[0] = it("i", { class: "pe-slider__zero" }, null, -1)),
          it("i", {
            class: "pe-slider__fill",
            style: vn(s.value)
          }, null, 4)
        ]),
        it("input", {
          class: "pe-slider__input",
          type: "range",
          min: t.min,
          max: t.max,
          step: t.step,
          value: t.modelValue,
          "aria-label": t.label,
          onInput: a
        }, null, 40, Zd)
      ])
    ]));
  }
}), le = /* @__PURE__ */ ws(tf, [["__scopeId", "data-v-35621ead"]]), ef = [
  { id: 0, label: "pe.tab.color", icon: "sliders" },
  { id: 1, label: "pe.tab.rotate", icon: "reload" },
  { id: 2, label: "pe.tab.crop", icon: "minimize" },
  { id: 3, label: "pe.tab.flip", icon: "flip" }
], Ji = {
  COLOR: 0,
  ROTATE: 1,
  CROP: 2,
  FLIP: 3,
  HISTORY: 4
};
function nf(t) {
  const e = new Date(t), i = e.getHours(), r = String(e.getMinutes()).padStart(2, "0");
  return `${i}:${r}`;
}
function Bl(t) {
  return new Promise((e, i) => {
    const r = new Image();
    r.onload = () => e(r), r.onerror = () => i(new Error(`Failed to load image: ${t}`)), r.src = t;
  });
}
const ga = 28;
function rf() {
  const t = /* @__PURE__ */ vt(!0), e = /* @__PURE__ */ vt(null), i = /* @__PURE__ */ vt(null), r = /* @__PURE__ */ vt(null), n = /* @__PURE__ */ vt(null), s = /* @__PURE__ */ vt(null), a = /* @__PURE__ */ vt(null), o = /* @__PURE__ */ vt(null), l = /* @__PURE__ */ vt(), u = /* @__PURE__ */ vt({ width: 400, height: 400 }), h = /* @__PURE__ */ vt({
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
    const v = Math.max(1, l.value.clientWidth - ga * 2), x = Math.max(1, l.value.clientHeight - ga * 2), E = (d % 360 + 360) % 360, C = E === 90 || E === 270, w = C ? c : g, T = C ? g : c;
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
      const c = await Bl(g);
      e.value = c, h.value.image = c, m({ resetRotation: !0 }), await Dn(), p();
    } finally {
      t.value = !1, await Dn(), requestAnimationFrame(() => f());
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
function sf(t) {
  return Ea() ? (rc(t), !0) : !1;
}
function Xn(t) {
  return typeof t == "function" ? t() : Y(t);
}
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
const Jn = () => {
};
function Vl(t, e) {
  function i(...r) {
    return new Promise((n, s) => {
      Promise.resolve(t(() => e.apply(this, r), { fn: e, thisArg: this, args: r })).then(n).catch(s);
    });
  }
  return i;
}
function of(t, e = {}) {
  let i, r, n = Jn;
  const s = (o) => {
    clearTimeout(o), n(), n = Jn;
  };
  return (o) => {
    const l = Xn(t), u = Xn(e.maxWait);
    return i && s(i), l <= 0 || u !== void 0 && u <= 0 ? (r && (s(r), r = null), Promise.resolve(o())) : new Promise((h, _) => {
      n = e.rejectOnCancel ? _ : h, u && !r && (r = setTimeout(() => {
        i && s(i), r = null, h(o());
      }, u)), i = setTimeout(() => {
        r && s(r), r = null, h(o());
      }, l);
    });
  };
}
function af(...t) {
  let e = 0, i, r = !0, n = Jn, s, a, o, l, u;
  !/* @__PURE__ */ Ut(t[0]) && typeof t[0] == "object" ? { delay: a, trailing: o = !0, leading: l = !0, rejectOnCancel: u = !1 } = t[0] : [a, o = !0, l = !0, u = !1] = t;
  const h = () => {
    i && (clearTimeout(i), i = void 0, n(), n = Jn);
  };
  return (m) => {
    const f = Xn(a), p = Date.now() - e, y = () => s = m();
    return h(), f <= 0 ? (e = Date.now(), y()) : (p > f && (l || !r) ? (e = Date.now(), y()) : o && (s = new Promise((S, P) => {
      n = u ? P : S, i = setTimeout(() => {
        e = Date.now(), r = !0, S(y()), h();
      }, Math.max(0, f - p));
    })), !l && !i && (i = setTimeout(() => r = !0, f)), r = !1, s);
  };
}
function lf(t, e = 200, i = {}) {
  return Vl(
    of(e, i),
    t
  );
}
function cf(t, e = 200, i = !1, r = !0, n = !1) {
  return Vl(
    af(e, i, r, n),
    t
  );
}
function hf(t) {
  const e = /* @__PURE__ */ vt(), i = () => {
    e.value && URL.revokeObjectURL(e.value), e.value = void 0;
  };
  return te(
    () => Xn(t),
    (r) => {
      i(), r && (e.value = URL.createObjectURL(r));
    },
    { immediate: !0 }
  ), sf(i), /* @__PURE__ */ On(e);
}
const es = {
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
function Hl(t) {
  return Object.keys(es).every(
    (e) => t[e] === 0
  );
}
function He(t) {
  return t < 0 ? 0 : t > 1 ? 1 : t;
}
function Dr(t) {
  const e = t / 255;
  return e <= 0.04045 ? e / 12.92 : ((e + 0.055) / 1.055) ** 2.4;
}
function Gr(t) {
  const e = He(t);
  return (e <= 31308e-7 ? e * 12.92 : 1.055 * e ** (1 / 2.4) - 0.055) * 255;
}
function uf(t, e, i) {
  t /= 255, e /= 255, i /= 255;
  const r = Math.max(t, e, i), n = Math.min(t, e, i), s = (r + n) / 2;
  if (r === n) return { h: 0, s: 0, l: s };
  const a = r - n, o = s > 0.5 ? a / (2 - r - n) : a / (r + n);
  let l;
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
function Ir(t, e, i) {
  let r = i;
  return r < 0 && (r += 1), r > 1 && (r -= 1), r < 1 / 6 ? t + (e - t) * 6 * r : r < 1 / 2 ? e : r < 2 / 3 ? t + (e - t) * (2 / 3 - r) * 6 : t;
}
function df(t, e, i) {
  if (e === 0) {
    const s = Math.round(i * 255);
    return [s, s, s];
  }
  const r = i < 0.5 ? i * (1 + e) : i + e - i * e, n = 2 * i - r;
  return [
    Math.round(Ir(n, r, t + 1 / 3) * 255),
    Math.round(Ir(n, r, t) * 255),
    Math.round(Ir(n, r, t - 1 / 3) * 255)
  ];
}
function En(t, e, i) {
  const r = He((i - t) / (e - t));
  return r * r * (3 - 2 * r);
}
function ff(t, e, i, r) {
  let n = Dr(t), s = Dr(e), a = Dr(i);
  const o = r.temperature / 100, l = r.tint / 100;
  n *= 1 + o * 0.18 - l * 0.06, s *= 1 + l * 0.12, a *= 1 - o * 0.22 - l * 0.04;
  const h = 2 ** (r.exposure / 100 * 2);
  n *= h, s *= h, a *= h;
  const _ = r.contrast / 100, m = 0.18, f = 1 + _ * 0.85;
  n = (n - m) * f + m, s = (s - m) * f + m, a = (a - m) * f + m;
  let p = 0.2126 * n + 0.7152 * s + 0.0722 * a;
  const y = r.highlights / 100, S = r.shadows / 100, P = En(0.35, 0.95, p), g = 1 - En(0.05, 0.55, p), c = 1 - P * y * 0.65, d = 1 + g * S * 0.75;
  n *= c * d, s *= c * d, a *= c * d, p = 0.2126 * n + 0.7152 * s + 0.0722 * a;
  const v = r.whites / 100, x = r.blacks / 100, E = En(0.55, 1, p), C = 1 - En(0, 0.45, p), w = 1 + E * v * 0.45, T = C * x * 0.12;
  n = n * w + T, s = s * w + T, a = a * w + T;
  let M = Gr(n), D = Gr(s), U = Gr(a);
  const V = r.vibrance / 100, G = r.saturation / 100;
  if (V !== 0 || G !== 0) {
    const J = uf(M, D, U);
    let b = J.s;
    if (V !== 0) {
      const A = J.h > 0.02 && J.h < 0.12 ? 0.45 : 1, k = V * (1 - b) * A;
      b = He(b + k);
    }
    G !== 0 && (b = He(b * (1 + G))), [M, D, U] = df(J.h, b, J.l);
  }
  return [
    Math.round(He(M / 255) * 255),
    Math.round(He(D / 255) * 255),
    Math.round(He(U / 255) * 255)
  ];
}
function pa(t, e) {
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
function ma(t, e, i = {}) {
  if (Hl(e)) {
    const { canvas: u } = pa(t, i.maxEdge);
    return u.toDataURL(i.mimeType ?? "image/jpeg", i.quality ?? 0.92);
  }
  const { canvas: r, ctx: n, w: s, h: a } = pa(t, i.maxEdge), o = n.getImageData(0, 0, s, a), l = o.data;
  for (let u = 0; u < l.length; u += 4) {
    const [h, _, m] = ff(l[u], l[u + 1], l[u + 2], e);
    l[u] = h, l[u + 1] = _, l[u + 2] = m;
  }
  return n.putImageData(o, 0, 0), r.toDataURL(i.mimeType ?? "image/jpeg", i.quality ?? 0.92);
}
const gf = 1400;
function pf(t) {
  const { imageObj: e, imageConfig: i, layout: r, dirty: n } = t, s = /* @__PURE__ */ oi({ ...es }), a = /* @__PURE__ */ vt(!1), o = /* @__PURE__ */ vt(!1);
  let l = 0;
  const u = jn(() => !Hl(s));
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
      const g = ma(S, { ...s }, { maxEdge: gf });
      if (P !== l) return;
      const c = await Bl(g);
      if (P !== l) return;
      i.value.image = c, r();
    } finally {
      P === l && (o.value = !1);
    }
  }
  const m = lf(() => {
    _();
  }, 50);
  te(
    s,
    () => {
      n.value = u.value, m();
    },
    { deep: !0 }
  ), te(a, () => {
    _();
  });
  function f() {
    a.value = !1, Object.assign(s, es), n.value = !1, h();
  }
  function p(S) {
    a.value = S;
  }
  async function y() {
    const S = e.value;
    return !S || !u.value ? null : (a.value = !1, ma(S, { ...s }, { maxEdge: 1 / 0, quality: 0.95 }));
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
function mf() {
  const t = /* @__PURE__ */ vt([]), e = /* @__PURE__ */ vt(0), i = /* @__PURE__ */ vt("pe.tab.color");
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
const ei = 24, _a = 16, _f = 22;
function ya(t, e) {
  let { x: i, y: r, width: n, height: s } = t;
  const { rotation: a } = t;
  n < 0 && (i += n, n = Math.abs(n)), s < 0 && (r += s, s = Math.abs(s));
  const o = e.x + e.width, l = e.y + e.height;
  return n = Math.min(Math.max(n, ei), e.width), s = Math.min(Math.max(s, ei), e.height), i = Math.max(e.x, Math.min(i, o - n)), r = Math.max(e.y, Math.min(r, l - s)), Math.abs(i - e.x) < 1 && (i = e.x), Math.abs(r - e.y) < 1 && (r = e.y), Math.abs(i + n - o) < 1 && (n = o - i), Math.abs(r + s - l) < 1 && (s = l - r), n < ei || s < ei ? null : { x: i, y: r, width: n, height: s, rotation: a };
}
function yf(t, e, i, r, n) {
  const s = Math.max(ei, Math.abs(i)), a = Math.max(ei, Math.abs(r)), o = n.x + n.width - s, l = n.y + n.height - a;
  return {
    x: Math.max(n.x, Math.min(t, Math.max(n.x, o))),
    y: Math.max(n.y, Math.min(e, Math.max(n.y, l)))
  };
}
function vf(t) {
  const {
    imageNode: e,
    imageConfig: i,
    stageRef: r,
    dimLayer: n,
    rectRef: s,
    tranRef: a,
    scale: o,
    getImageBounds: l
  } = t, u = /* @__PURE__ */ vt(!1);
  let h = !1;
  const _ = /* @__PURE__ */ vt({
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
  }), m = /* @__PURE__ */ vt({
    listening: !1,
    perfectDrawEnabled: !1,
    sceneFunc: (d) => {
      var w, T;
      const v = (w = r.value) == null ? void 0 : w.getNode(), x = (T = s.value) == null ? void 0 : T.getNode();
      if (!v || !x) return;
      const E = Math.max(1, x.width() * x.scaleX()), C = Math.max(1, x.height() * x.scaleY());
      d.save(), d.beginPath(), d.rect(0, 0, v.width(), v.height()), d.rect(x.x(), x.y(), E, C), d.closePath(), d.fillStyle = "rgba(0, 0, 0, 0.45)", d.fill("evenodd"), d.restore();
    }
  }), f = /* @__PURE__ */ vt({
    nodes: [],
    centeredScaling: !1,
    rotateEnabled: !1,
    keepRatio: !1,
    ignoreStroke: !0,
    borderStroke: "#3B82F6",
    anchorSize: _a,
    anchorCornerRadius: _a / 2,
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
        const x = _f / 2;
        v.beginPath(), v.arc(0, 0, x, 0, Math.PI * 2), v.closePath(), v.fillStrokeShape(d);
      });
    },
    boundBoxFunc: (d, v) => {
      const x = l();
      return x ? ya(v, x) ?? d : d;
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
    const E = ya(
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
    await Dn(), await new Promise((M) => requestAnimationFrame(() => M()));
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
      const D = d.width() * d.scaleX(), U = d.height() * d.scaleY(), V = yf(d.x(), d.y(), D, U, M);
      d.position({ x: V.x, y: V.y }), v.forceUpdate(), (G = v.getLayer()) == null || G.batchDraw(), x == null || x.batchDraw();
    }), h = !0));
  }
  function P() {
    var x, E;
    const d = (x = s.value) == null ? void 0 : x.getNode();
    d && h && (d.off("transform"), d.off("transformend"), d.off("dragmove")), h = !1;
    const v = (E = a.value) == null ? void 0 : E.getNode();
    v == null || v.nodes([]);
  }
  te(u, (d) => {
    if (!d) {
      P();
      return;
    }
    S();
  }), te([s, a, n], () => {
    u.value && S();
  }), Sn(() => {
    P();
  });
  const g = cf((d) => {
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
function bf(t, e) {
  const i = /* @__PURE__ */ vt(!1), r = /* @__PURE__ */ vt(Ji.COLOR), n = rf(), s = mf(), a = pf({
    imageObj: n.imageObj,
    imageConfig: n.imageConfig,
    layout: n.layout,
    dirty: i
  }), o = vf({
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
    d && (s.addHistory("pe.history.correction", d), await n.loadImage(d), a.reset(), i.value = !1, n.layout());
  }
  async function f() {
    if (i.value) {
      if (r.value === Ji.COLOR && a.hasAdjustments.value) {
        await m();
        return;
      }
      await _(s.title.value), i.value = !1;
    }
  }
  async function p(d, v) {
    (r.value === Ji.HISTORY || i.value) && s.historyImage.value.length > 1 && s.historyIndex.value != null && s.truncateAfterCurrent(), await f(), r.value = d, s.title.value = v, i.value = !1;
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
    await p(Ji.CROP, "pe.history.crop");
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
    await n.loadImage(t.defImg), s.addHistory("pe.history.original", (d = n.imageObj.value) == null ? void 0 : d.src), s.title.value = "pe.tab.color";
  }), Ke(() => {
    const d = new ResizeObserver(() => {
      n.isLoading.value || n.layout();
    });
    requestAnimationFrame(() => {
      n.stageWrapper.value && d.observe(n.stageWrapper.value);
    }), window.addEventListener("resize", n.layout), Sn(() => {
      d.disconnect(), window.removeEventListener("resize", n.layout);
    });
  }), {
    EDITOR_TABS: ef,
    TAB: Ji,
    dirty: i,
    activeTab: r,
    formatHistoryTime: nf,
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
const Sf = { class: "pe-menubar" }, Cf = { class: "pe-menubar__left" }, wf = { class: "pe-doc-badge" }, xf = ["title", "disabled"], Pf = ["title", "disabled"], Tf = { class: "pe-menubar__center" }, Af = { class: "pe-menubar__title" }, Rf = { class: "pe-menubar__right" }, Ef = ["title", "aria-pressed"], Mf = { class: "pe-body" }, Ff = {
  class: "pe-toolbox",
  "aria-label": "tools"
}, kf = ["aria-label", "onClick"], Of = {
  class: "pe-tooltip",
  role: "tooltip"
}, Nf = { class: "pe-workspace" }, Lf = { class: "pe-panels" }, Df = { class: "pe-panel-block" }, Gf = { class: "pe-panel-head" }, If = { class: "pe-panel-body" }, Uf = { class: "pe-section" }, Bf = { class: "pe-section__title" }, Vf = { class: "pe-section" }, Hf = { class: "pe-section__title" }, Wf = { class: "pe-section" }, jf = { class: "pe-section__title" }, qf = { class: "pe-color-actions" }, Kf = ["disabled"], zf = ["disabled"], Yf = ["disabled"], $f = { class: "pe-hint" }, Xf = { class: "pe-panel-block pe-panel-block--grow" }, Jf = { class: "pe-panel-head" }, Qf = { class: "pe-panel-body pe-history" }, Zf = ["onClick"], t0 = { class: "pe-history-row__text" }, e0 = { class: "pe-statusbar" }, i0 = { key: 0 }, n0 = /* @__PURE__ */ Ye({
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
      formatHistoryTime: U,
      navigateHistory: V,
      restoreHistory: G,
      changeTab: J,
      markDirtyAndRotate: b,
      markDirtyAndFlip: A,
      markDirtyAndCrop: k,
      applyCrop: F,
      onSaveExport: L
    } = bf(i, r), { t: B } = Ul(), I = /* @__PURE__ */ vt(!1);
    let Z = "", st = "";
    function j(rt) {
      I.value = rt;
    }
    function O() {
      j(!I.value);
    }
    function W(rt) {
      rt.key === "Escape" && I.value && (rt.preventDefault(), j(!1));
    }
    te(I, (rt) => {
      typeof document > "u" || (rt ? (Z = document.body.style.overflow, st = document.documentElement.style.overflow, document.body.style.overflow = "hidden", document.documentElement.style.overflow = "hidden") : (document.body.style.overflow = Z, document.documentElement.style.overflow = st));
    }), Ke(() => {
      window.addEventListener("keydown", W);
    }), Sn(() => {
      window.removeEventListener("keydown", W), I.value && (document.body.style.overflow = Z, document.documentElement.style.overflow = st);
    });
    const nt = () => n.find((rt) => rt.id === a.value);
    return (rt, X) => {
      var tt;
      const R = Xe("v-image"), N = Xe("v-layer"), H = Xe("v-shape"), q = Xe("v-rect"), $ = Xe("v-transformer"), z = Xe("v-stage");
      return St(), ti(Bc, {
        to: "body",
        disabled: !I.value
      }, [
        it("div", {
          class: Fe(["photo-editor-shell", { "is-fullscreen": I.value }]),
          style: vn(I.value ? void 0 : { display: "contents" })
        }, [
          it("div", {
            class: Fe(["pe-app", { "is-fullscreen": I.value }])
          }, [
            it("header", Sf, [
              it("div", Cf, [
                it("span", wf, [
                  dt(Jt, { name: "image" }),
                  X[27] || (X[27] = it("span", null, "photo", -1))
                ]),
                X[28] || (X[28] = it("div", { class: "pe-menubar__sep" }, null, -1)),
                it("button", {
                  type: "button",
                  class: "pe-icon-btn",
                  title: Y(B)("pe.undo"),
                  disabled: Y(o).length <= 1 || Y(l) === 0,
                  onClick: X[0] || (X[0] = (K) => Y(V)(-1))
                }, [
                  dt(Jt, { name: "undo" })
                ], 8, xf),
                it("button", {
                  type: "button",
                  class: "pe-icon-btn",
                  title: Y(B)("pe.redo"),
                  disabled: Y(o).length <= 1 || Y(l) === Y(o).length - 1,
                  onClick: X[1] || (X[1] = (K) => Y(V)(1))
                }, [
                  dt(Jt, { name: "redo" })
                ], 8, Pf)
              ]),
              it("div", Tf, [
                it("span", Af, Pt(Y(B)(((tt = nt()) == null ? void 0 : tt.label) ?? "pe.editor")), 1)
              ]),
              it("div", Rf, [
                it("button", {
                  type: "button",
                  class: "pe-icon-btn",
                  title: I.value ? Y(B)("pe.collapse") : Y(B)("pe.expand"),
                  "aria-pressed": I.value,
                  onClick: O
                }, [
                  dt(Jt, {
                    name: I.value ? "compress" : "expand"
                  }, null, 8, ["name"])
                ], 8, Ef),
                it("button", {
                  type: "button",
                  class: "pe-btn pe-btn--ghost",
                  onClick: X[2] || (X[2] = (K) => r("close"))
                }, Pt(Y(B)("pe.close")), 1),
                it("button", {
                  type: "button",
                  class: "pe-btn pe-btn--primary",
                  onClick: X[3] || (X[3] = //@ts-ignore
                  (...K) => Y(L) && Y(L)(...K))
                }, Pt(Y(B)("pe.save")), 1)
              ])
            ]),
            it("div", Mf, [
              it("aside", Ff, [
                (St(!0), Et(Mt, null, Is(Y(n), (K) => (St(), Et("button", {
                  key: K.id,
                  type: "button",
                  class: Fe(["pe-tool", { "is-active": Y(a) === K.id }]),
                  "aria-label": Y(B)(K.label),
                  onClick: (et) => Y(J)(K.id, K.label)
                }, [
                  dt(Jt, {
                    name: K.icon
                  }, null, 8, ["name"]),
                  it("span", Of, Pt(Y(B)(K.label)), 1)
                ], 10, kf))), 128))
              ]),
              it("main", Nf, [
                it("div", {
                  ref_key: "stageWrapper",
                  ref: h,
                  class: Fe(["pe-stage", { "is-comparing": Y(w) }])
                }, [
                  Y(u) ? (St(), ti(Kd, { key: 0 })) : Ve("", !0),
                  Oc(dt(z, {
                    ref_key: "stageRef",
                    ref: _,
                    config: Y(P)
                  }, {
                    default: Qi(() => [
                      dt(N, {
                        ref_key: "layerRef",
                        ref: m
                      }, {
                        default: Qi(() => [
                          dt(R, {
                            ref_key: "imageNode",
                            ref: p,
                            config: Y(g)
                          }, null, 8, ["config"])
                        ]),
                        _: 1
                      }, 512),
                      Y(x) ? (St(), ti(N, {
                        key: 0,
                        ref_key: "dimLayer",
                        ref: f
                      }, {
                        default: Qi(() => [
                          dt(H, { config: Y(v) }, null, 8, ["config"]),
                          dt(q, {
                            ref_key: "rectRef",
                            ref: y,
                            config: Y(c)
                          }, null, 8, ["config"])
                        ]),
                        _: 1
                      }, 512)) : Ve("", !0),
                      Y(x) ? (St(), ti(N, { key: 1 }, {
                        default: Qi(() => [
                          dt($, {
                            ref_key: "tranRef",
                            ref: S,
                            config: Y(d)
                          }, null, 8, ["config"])
                        ]),
                        _: 1
                      })) : Ve("", !0)
                    ]),
                    _: 1
                  }, 8, ["config"]), [
                    [Wh, !Y(u)]
                  ])
                ], 2)
              ]),
              it("aside", Lf, [
                it("section", Df, [
                  it("header", Gf, Pt(Y(B)("pe.properties")), 1),
                  it("div", If, [
                    Y(a) === Y(s).COLOR ? (St(), Et(Mt, { key: 0 }, [
                      it("div", Uf, [
                        it("div", Bf, Pt(Y(B)("pe.wb")), 1),
                        dt(le, {
                          modelValue: Y(E).temperature,
                          "onUpdate:modelValue": X[4] || (X[4] = (K) => Y(E).temperature = K),
                          label: Y(B)("pe.temperature")
                        }, null, 8, ["modelValue", "label"]),
                        dt(le, {
                          modelValue: Y(E).tint,
                          "onUpdate:modelValue": X[5] || (X[5] = (K) => Y(E).tint = K),
                          label: Y(B)("pe.tint")
                        }, null, 8, ["modelValue", "label"])
                      ]),
                      it("div", Vf, [
                        it("div", Hf, Pt(Y(B)("pe.tone")), 1),
                        dt(le, {
                          modelValue: Y(E).exposure,
                          "onUpdate:modelValue": X[6] || (X[6] = (K) => Y(E).exposure = K),
                          label: Y(B)("pe.exposure")
                        }, null, 8, ["modelValue", "label"]),
                        dt(le, {
                          modelValue: Y(E).contrast,
                          "onUpdate:modelValue": X[7] || (X[7] = (K) => Y(E).contrast = K),
                          label: Y(B)("pe.contrast")
                        }, null, 8, ["modelValue", "label"]),
                        dt(le, {
                          modelValue: Y(E).highlights,
                          "onUpdate:modelValue": X[8] || (X[8] = (K) => Y(E).highlights = K),
                          label: Y(B)("pe.highlights")
                        }, null, 8, ["modelValue", "label"]),
                        dt(le, {
                          modelValue: Y(E).shadows,
                          "onUpdate:modelValue": X[9] || (X[9] = (K) => Y(E).shadows = K),
                          label: Y(B)("pe.shadows")
                        }, null, 8, ["modelValue", "label"]),
                        dt(le, {
                          modelValue: Y(E).whites,
                          "onUpdate:modelValue": X[10] || (X[10] = (K) => Y(E).whites = K),
                          label: Y(B)("pe.whites")
                        }, null, 8, ["modelValue", "label"]),
                        dt(le, {
                          modelValue: Y(E).blacks,
                          "onUpdate:modelValue": X[11] || (X[11] = (K) => Y(E).blacks = K),
                          label: Y(B)("pe.blacks")
                        }, null, 8, ["modelValue", "label"])
                      ]),
                      it("div", Wf, [
                        it("div", jf, Pt(Y(B)("pe.presence")), 1),
                        dt(le, {
                          modelValue: Y(E).vibrance,
                          "onUpdate:modelValue": X[12] || (X[12] = (K) => Y(E).vibrance = K),
                          label: Y(B)("pe.vibrance")
                        }, null, 8, ["modelValue", "label"]),
                        dt(le, {
                          modelValue: Y(E).saturation,
                          "onUpdate:modelValue": X[13] || (X[13] = (K) => Y(E).saturation = K),
                          label: Y(B)("pe.saturation")
                        }, null, 8, ["modelValue", "label"])
                      ]),
                      it("div", qf, [
                        it("button", {
                          type: "button",
                          class: "pe-action",
                          disabled: !Y(C),
                          onMousedown: X[14] || (X[14] = (K) => Y(M)(!0)),
                          onMouseup: X[15] || (X[15] = (K) => Y(M)(!1)),
                          onMouseleave: X[16] || (X[16] = (K) => Y(M)(!1)),
                          onTouchstart: X[17] || (X[17] = Jr((K) => Y(M)(!0), ["prevent"])),
                          onTouchend: X[18] || (X[18] = Jr((K) => Y(M)(!1), ["prevent"]))
                        }, Pt(Y(B)("pe.beforeAfter")), 41, Kf),
                        it("button", {
                          type: "button",
                          class: "pe-action",
                          disabled: !Y(C),
                          onClick: X[19] || (X[19] = //@ts-ignore
                          (...K) => Y(T) && Y(T)(...K))
                        }, Pt(Y(B)("pe.reset")), 9, zf),
                        it("button", {
                          type: "button",
                          class: "pe-action pe-action--accent",
                          disabled: !Y(C) || Y(w),
                          onClick: X[20] || (X[20] = //@ts-ignore
                          (...K) => Y(D) && Y(D)(...K))
                        }, [
                          dt(Jt, { name: "success" }),
                          Ee(" " + Pt(Y(B)("pe.apply")), 1)
                        ], 8, Yf)
                      ])
                    ], 64)) : Y(a) === Y(s).ROTATE ? (St(), Et(Mt, { key: 1 }, [
                      it("button", {
                        type: "button",
                        class: "pe-action",
                        onClick: X[21] || (X[21] = (K) => Y(b)(90))
                      }, [
                        dt(Jt, { name: "reload" }),
                        Ee(" " + Pt(Y(B)("pe.rotateRight")), 1)
                      ]),
                      it("button", {
                        type: "button",
                        class: "pe-action",
                        onClick: X[22] || (X[22] = (K) => Y(b)(-90))
                      }, [
                        dt(Jt, {
                          name: "reload",
                          style: { transform: "scale(-1, 1)" }
                        }),
                        Ee(" " + Pt(Y(B)("pe.rotateLeft")), 1)
                      ])
                    ], 64)) : Y(a) === Y(s).CROP ? (St(), Et(Mt, { key: 2 }, [
                      it("button", {
                        type: "button",
                        class: "pe-action",
                        onClick: X[23] || (X[23] = //@ts-ignore
                        (...K) => Y(k) && Y(k)(...K))
                      }, [
                        dt(Jt, { name: "minimize" }),
                        Ee(" " + Pt(Y(B)("pe.selectCrop")), 1)
                      ]),
                      it("button", {
                        type: "button",
                        class: "pe-action pe-action--accent",
                        onClick: X[24] || (X[24] = //@ts-ignore
                        (...K) => Y(F) && Y(F)(...K))
                      }, [
                        dt(Jt, { name: "success" }),
                        Ee(" " + Pt(Y(B)("pe.apply")), 1)
                      ]),
                      it("p", $f, Pt(Y(B)("pe.cropHint")), 1)
                    ], 64)) : Y(a) === Y(s).FLIP ? (St(), Et(Mt, { key: 3 }, [
                      it("button", {
                        type: "button",
                        class: "pe-action",
                        onClick: X[25] || (X[25] = (K) => Y(A)("x"))
                      }, [
                        dt(Jt, {
                          name: "flip",
                          class: "rotate-90"
                        }),
                        Ee(" " + Pt(Y(B)("pe.flipH")), 1)
                      ]),
                      it("button", {
                        type: "button",
                        class: "pe-action",
                        onClick: X[26] || (X[26] = (K) => Y(A)("y"))
                      }, [
                        dt(Jt, { name: "flip" }),
                        Ee(" " + Pt(Y(B)("pe.flipV")), 1)
                      ])
                    ], 64)) : Ve("", !0)
                  ])
                ]),
                it("section", Xf, [
                  it("header", Jf, Pt(Y(B)("pe.history")), 1),
                  it("div", Qf, [
                    (St(!0), Et(Mt, null, Is(Y(o), (K, et) => (St(), Et("button", {
                      key: K.date,
                      type: "button",
                      class: Fe(["pe-history-row", { "is-current": et === Y(l) }]),
                      onClick: (Q) => Y(G)(et)
                    }, [
                      dt(Jt, { name: "clock" }),
                      it("span", t0, [
                        it("strong", null, Pt(Y(B)(K.title)), 1),
                        it("small", null, Pt(Y(U)(K.date)), 1)
                      ])
                    ], 10, Zf))), 128))
                  ])
                ])
              ])
            ]),
            it("footer", e0, [
              it("span", null, Pt(Y(B)("pe.steps", { n: Y(o).length })), 1),
              Y(x) ? (St(), Et("span", i0, Pt(Y(B)("pe.cropMode")), 1)) : Ve("", !0)
            ])
          ], 2)
        ], 6)
      ], 8, ["disabled"]);
    };
  }
});
function r0(t, e) {
  const i = document.createElement("a");
  i.setAttribute("href", e), i.setAttribute("download", t), i.setAttribute("target", "_blank"), i.style.display = "none", document.body.appendChild(i), i.click(), document.body.removeChild(i);
}
function s0() {
  const t = /* @__PURE__ */ vt(null), e = /* @__PURE__ */ vt(!1), i = /* @__PURE__ */ vt();
  function r() {
    var o;
    (o = i.value) == null || o.click();
  }
  function n(o) {
    var h;
    const l = o.target, u = (h = l.files) == null ? void 0 : h[0];
    u && (e.value = !1, t.value = hf(u).value ?? null, l.value = "", e.value = !0);
  }
  function s() {
    t.value = null, e.value = !1;
  }
  function a(o) {
    r0("photo-editor.jpg", o.src);
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
const o0 = { class: "photo-editor-shell" }, a0 = { class: "pe-empty__card" }, l0 = /* @__PURE__ */ Ye({
  __name: "PhotoEditorShell",
  props: {
    locale: {}
  },
  setup(t) {
    const e = t, i = ni($n, null), r = i ?? /* @__PURE__ */ vt(e.locale === "en" || e.locale === "ru" ? e.locale : _n());
    i || Ja($n, r), te(
      () => e.locale,
      (m) => {
        (m === "en" || m === "ru") && (r.value = m);
      }
    );
    const { file: n, isLoad: s, filesRef: a, submitFile: o, handleFileUpload: l, onClose: u, saveImage: h } = s0(), { t: _ } = Ul(r);
    return (m, f) => (St(), Et("div", o0, [
      Y(s) ? Y(n) ? (St(), ti(n0, {
        key: 1,
        "def-img": Y(n),
        onSaveImage: Y(h),
        onClose: Y(u)
      }, null, 8, ["def-img", "onSaveImage", "onClose"])) : Ve("", !0) : (St(), Et("div", {
        key: 0,
        class: "pe-empty",
        onClick: f[2] || (f[2] = //@ts-ignore
        (...p) => Y(o) && Y(o)(...p))
      }, [
        it("div", a0, [
          dt(Jt, {
            name: "image",
            class: "pe-empty__icon"
          }),
          it("h3", null, Pt(Y(_)("pe.openTitle")), 1),
          it("p", null, Pt(Y(_)("pe.openHint")), 1),
          it("button", {
            type: "button",
            class: "pe-btn pe-btn--primary",
            onClick: f[0] || (f[0] = Jr(
              //@ts-ignore
              (...p) => Y(o) && Y(o)(...p),
              ["stop"]
            ))
          }, Pt(Y(_)("pe.chooseFile")), 1)
        ]),
        it("input", {
          type: "file",
          ref_key: "filesRef",
          ref: a,
          accept: "image/*",
          style: { display: "none" },
          onChange: f[1] || (f[1] = //@ts-ignore
          (...p) => Y(l) && Y(l)(...p))
        }, null, 544)
      ]))
    ]));
  }
});
function va(t) {
  return t === "en" || t === "ru" ? t : _n();
}
function M0(t, e = {}) {
  const i = /* @__PURE__ */ vt(va(e.locale)), r = uu(l0);
  return r.provide($n, i), r.use(Od), r.mount(t), {
    app: r,
    setLocale(n) {
      i.value = va(n);
    },
    unmount: () => r.unmount()
  };
}
export {
  M0 as mountPhotoEditor
};
