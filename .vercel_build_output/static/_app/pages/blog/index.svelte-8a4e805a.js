import{S as q,i as A,s as C,e as g,t as j,k as y,c as b,a as $,g as k,d,n as N,b as _,f as I,F as f,h as S,j as F,m as H,o as L,x as G,u as J,v as K,N as M}from"../../chunks/vendor-1736f1fe.js";import{N as O}from"../../chunks/NinjaTitle-2bfb9d86.js";import"../../chunks/BrandLogo-6d3c7af0.js";function T(r,e,n){const a=r.slice();return a[1]=e[n],a}function V(r){let e,n,a=r[1].title.substring(0,20)+"",c,h,l,t,o=r[1].body.substring(0,100)+"",s,m,w,v,p,x,E,z;return{c(){e=g("div"),n=g("h3"),c=j(a),h=j("..."),l=y(),t=g("p"),s=j(o),m=j("..."),w=y(),v=g("p"),p=g("a"),x=j("Read more..."),z=y(),this.h()},l(u){e=b(u,"DIV",{class:!0});var i=$(e);n=b(i,"H3",{});var B=$(n);c=k(B,a),h=k(B,"..."),B.forEach(d),l=N(i),t=b(i,"P",{});var D=$(t);s=k(D,o),m=k(D,"..."),D.forEach(d),w=N(i),v=b(i,"P",{class:!0});var P=$(v);p=b(P,"A",{class:!0,"sveltekit:prefetch":!0,href:!0});var R=$(p);x=k(R,"Read more..."),R.forEach(d),P.forEach(d),z=N(i),i.forEach(d),this.h()},h(){_(p,"class","readmore"),_(p,"sveltekit:prefetch",""),_(p,"href",E=`/blog/${r[1].id}`),_(v,"class","readlink mt-4"),_(e,"class","post")},m(u,i){I(u,e,i),f(e,n),f(n,c),f(n,h),f(e,l),f(e,t),f(t,s),f(t,m),f(e,w),f(e,v),f(v,p),f(p,x),f(e,z)},p(u,i){i&1&&a!==(a=u[1].title.substring(0,20)+"")&&S(c,a),i&1&&o!==(o=u[1].body.substring(0,100)+"")&&S(s,o),i&1&&E!==(E=`/blog/${u[1].id}`)&&_(p,"href",E)},d(u){u&&d(e)}}}function Q(r){let e,n,a,c;e=new O({props:{brand:"Blog",sveltesize:"16",logosize:"24",textsize:"4"}});let h=r[0],l=[];for(let t=0;t<h.length;t+=1)l[t]=V(T(r,h,t));return{c(){F(e.$$.fragment),n=y(),a=g("div");for(let t=0;t<l.length;t+=1)l[t].c();this.h()},l(t){H(e.$$.fragment,t),n=N(t),a=b(t,"DIV",{class:!0});var o=$(a);for(let s=0;s<l.length;s+=1)l[s].l(o);o.forEach(d),this.h()},h(){_(a,"class","posts")},m(t,o){L(e,t,o),I(t,n,o),I(t,a,o);for(let s=0;s<l.length;s+=1)l[s].m(a,null);c=!0},p(t,[o]){if(o&1){h=t[0];let s;for(s=0;s<h.length;s+=1){const m=T(t,h,s);l[s]?l[s].p(m,o):(l[s]=V(m),l[s].c(),l[s].m(a,null))}for(;s<l.length;s+=1)l[s].d(1);l.length=h.length}},i(t){c||(G(e.$$.fragment,t),c=!0)},o(t){J(e.$$.fragment,t),c=!1},d(t){K(e,t),t&&d(n),t&&d(a),M(l,t)}}}const Z=async({fetch:r})=>({props:{posts:await(await r("https://jsonplaceholder.typicode.com/posts")).json()}});function U(r,e,n){let{posts:a}=e;return r.$$set=c=>{"posts"in c&&n(0,a=c.posts)},[a]}class tt extends q{constructor(e){super();A(this,e,U,Q,C,{posts:0})}}export{tt as default,Z as load};