function h(){}function I(t,n){for(const e in n)t[e]=n[e];return t}function v(t){return t()}function z(){return Object.create(null)}function m(t){t.forEach(v)}function L(t){return typeof t=="function"}function G(t,n){return t!=t?n==n:t!==n||t&&typeof t=="object"||typeof t=="function"}let g;function ut(t,n){return g||(g=document.createElement("a")),g.href=n,t===g.href}function J(t){return Object.keys(t).length===0}function ft(t,n,e,r){if(t){const c=B(t,n,e,r);return t[0](c)}}function B(t,n,e,r){return t[1]&&r?I(e.ctx.slice(),t[1](r(n))):e.ctx}function st(t,n,e,r){if(t[2]&&r){const c=t[2](r(e));if(n.dirty===void 0)return c;if(typeof c=="object"){const f=[],l=Math.max(n.dirty.length,c.length);for(let o=0;o<l;o+=1)f[o]=n.dirty[o]|c[o];return f}return n.dirty|c}return n.dirty}function at(t,n,e,r,c,f){if(c){const l=B(n,e,r,f);t.p(l,c)}}function dt(t){if(t.ctx.length>32){const n=[],e=t.ctx.length/32;for(let r=0;r<e;r++)n[r]=-1;return n}return-1}let b=!1;function K(){b=!0}function P(){b=!1}function W(t,n,e,r){for(;t<n;){const c=t+(n-t>>1);e(c)<=r?t=c+1:n=c}return t}function Q(t){if(t.hydrate_init)return;t.hydrate_init=!0;let n=t.childNodes;if(t.nodeName==="HEAD"){const i=[];for(let u=0;u<n.length;u++){const a=n[u];a.claim_order!==void 0&&i.push(a)}n=i}const e=new Int32Array(n.length+1),r=new Int32Array(n.length);e[0]=-1;let c=0;for(let i=0;i<n.length;i++){const u=n[i].claim_order,a=(c>0&&n[e[c]].claim_order<=u?c+1:W(1,c,y=>n[e[y]].claim_order,u))-1;r[i]=e[a]+1;const s=a+1;e[s]=i,c=Math.max(s,c)}const f=[],l=[];let o=n.length-1;for(let i=e[c]+1;i!=0;i=r[i-1]){for(f.push(n[i-1]);o>=i;o--)l.push(n[o]);o--}for(;o>=0;o--)l.push(n[o]);f.reverse(),l.sort((i,u)=>i.claim_order-u.claim_order);for(let i=0,u=0;i<l.length;i++){for(;u<f.length&&l[i].claim_order>=f[u].claim_order;)u++;const a=u<f.length?f[u]:null;t.insertBefore(l[i],a)}}function R(t,n){if(b){for(Q(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentElement!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;n!==t.actual_end_child?(n.claim_order!==void 0||n.parentNode!==t)&&t.insertBefore(n,t.actual_end_child):t.actual_end_child=n.nextSibling}else(n.parentNode!==t||n.nextSibling!==null)&&t.appendChild(n)}function _t(t,n,e){b&&!e?R(t,n):(n.parentNode!==t||n.nextSibling!=e)&&t.insertBefore(n,e||null)}function U(t){t.parentNode.removeChild(t)}function ht(t,n){for(let e=0;e<t.length;e+=1)t[e]&&t[e].d(n)}function V(t){return document.createElement(t)}function X(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function S(t){return document.createTextNode(t)}function mt(){return S(" ")}function pt(){return S("")}function yt(t,n,e){e==null?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}function Y(t){return Array.from(t.childNodes)}function Z(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function T(t,n,e,r,c=!1){Z(t);const f=(()=>{for(let l=t.claim_info.last_index;l<t.length;l++){const o=t[l];if(n(o)){const i=e(o);return i===void 0?t.splice(l,1):t[l]=i,c||(t.claim_info.last_index=l),o}}for(let l=t.claim_info.last_index-1;l>=0;l--){const o=t[l];if(n(o)){const i=e(o);return i===void 0?t.splice(l,1):t[l]=i,c?i===void 0&&t.claim_info.last_index--:t.claim_info.last_index=l,o}}return r()})();return f.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,f}function O(t,n,e,r){return T(t,c=>c.nodeName===n,c=>{const f=[];for(let l=0;l<c.attributes.length;l++){const o=c.attributes[l];e[o.name]||f.push(o.name)}f.forEach(l=>c.removeAttribute(l))},()=>r(n))}function gt(t,n,e){return O(t,n,e,V)}function bt(t,n,e){return O(t,n,e,X)}function tt(t,n){return T(t,e=>e.nodeType===3,e=>{const r=""+n;if(e.data.startsWith(r)){if(e.data.length!==r.length)return e.splitText(r.length)}else e.data=r},()=>S(n),!0)}function xt(t){return tt(t," ")}function $t(t,n){n=""+n,t.wholeText!==n&&(t.data=n)}function wt(t,n=document.body){return Array.from(n.querySelectorAll(t))}let x;function $(t){x=t}function k(){if(!x)throw new Error("Function called outside component initialization");return x}function Et(t){k().$$.on_mount.push(t)}function St(t){k().$$.after_update.push(t)}function kt(t,n){k().$$.context.set(t,n)}const p=[],D=[],w=[],F=[],nt=Promise.resolve();let A=!1;function et(){A||(A=!0,nt.then(H))}function N(t){w.push(t)}let j=!1;const q=new Set;function H(){if(!j){j=!0;do{for(let t=0;t<p.length;t+=1){const n=p[t];$(n),it(n.$$)}for($(null),p.length=0;D.length;)D.pop()();for(let t=0;t<w.length;t+=1){const n=w[t];q.has(n)||(q.add(n),n())}w.length=0}while(p.length);for(;F.length;)F.pop()();A=!1,j=!1,q.clear()}}function it(t){if(t.fragment!==null){t.update(),m(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(N)}}const E=new Set;let d;function At(){d={r:0,c:[],p:d}}function Nt(){d.r||m(d.c),d=d.p}function rt(t,n){t&&t.i&&(E.delete(t),t.i(n))}function jt(t,n,e,r){if(t&&t.o){if(E.has(t))return;E.add(t),d.c.push(()=>{E.delete(t),r&&(e&&t.d(1),r())}),t.o(n)}}function qt(t,n){const e={},r={},c={$$scope:1};let f=t.length;for(;f--;){const l=t[f],o=n[f];if(o){for(const i in l)i in o||(r[i]=1);for(const i in o)c[i]||(e[i]=o[i],c[i]=1);t[f]=o}else for(const i in l)c[i]=1}for(const l in r)l in e||(e[l]=void 0);return e}function Ct(t){return typeof t=="object"&&t!==null?t:{}}function Mt(t){t&&t.c()}function vt(t,n){t&&t.l(n)}function ct(t,n,e,r){const{fragment:c,on_mount:f,on_destroy:l,after_update:o}=t.$$;c&&c.m(n,e),r||N(()=>{const i=f.map(v).filter(L);l?l.push(...i):m(i),t.$$.on_mount=[]}),o.forEach(N)}function lt(t,n){const e=t.$$;e.fragment!==null&&(m(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}function ot(t,n){t.$$.dirty[0]===-1&&(p.push(t),et(),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}function zt(t,n,e,r,c,f,l,o=[-1]){const i=x;$(t);const u=t.$$={fragment:null,ctx:null,props:f,update:h,not_equal:c,bound:z(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(n.context||(i?i.$$.context:[])),callbacks:z(),dirty:o,skip_bound:!1,root:n.target||i.$$.root};l&&l(u.root);let a=!1;if(u.ctx=e?e(t,n.props||{},(s,y,...C)=>{const M=C.length?C[0]:y;return u.ctx&&c(u.ctx[s],u.ctx[s]=M)&&(!u.skip_bound&&u.bound[s]&&u.bound[s](M),a&&ot(t,s)),y}):[],u.update(),a=!0,m(u.before_update),u.fragment=r?r(u.ctx):!1,n.target){if(n.hydrate){K();const s=Y(n.target);u.fragment&&u.fragment.l(s),s.forEach(U)}else u.fragment&&u.fragment.c();n.intro&&rt(t.$$.fragment),ct(t,n.target,n.anchor,n.customElement),P(),H()}$(i)}class Bt{$destroy(){lt(this,1),this.$destroy=h}$on(n,e){const r=this.$$.callbacks[n]||(this.$$.callbacks[n]=[]);return r.push(e),()=>{const c=r.indexOf(e);c!==-1&&r.splice(c,1)}}$set(n){this.$$set&&!J(n)&&(this.$$.skip_bound=!0,this.$$set(n),this.$$.skip_bound=!1)}}const _=[];function Tt(t,n=h){let e;const r=new Set;function c(o){if(G(t,o)&&(t=o,e)){const i=!_.length;for(const u of r)u[1](),_.push(u,t);if(i){for(let u=0;u<_.length;u+=2)_[u][0](_[u+1]);_.length=0}}}function f(o){c(o(t))}function l(o,i=h){const u=[o,i];return r.add(u),r.size===1&&(e=n(c)||h),o(t),()=>{r.delete(u),r.size===0&&(e(),e=null)}}return{set:c,update:f,subscribe:l}}export{Et as A,I as B,Tt as C,X as D,bt as E,R as F,h as G,ft as H,wt as I,at as J,dt as K,st as L,ut as M,ht as N,Bt as S,Y as a,yt as b,gt as c,U as d,V as e,_t as f,tt as g,$t as h,zt as i,Mt as j,mt as k,pt as l,vt as m,xt as n,ct as o,qt as p,Ct as q,At as r,G as s,S as t,jt as u,lt as v,Nt as w,rt as x,kt as y,St as z};
