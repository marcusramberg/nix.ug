import{s as r}from"./service.541fc1e6.js";import{_ as c,G as p,r as l,o as d,c as m,w as _,a as o,n as f}from"./index.87401552.js";const u={name:"CopyToClipboard",mixins:[r],props:{item:Object},components:{Generic:p},data:()=>({animate:!1}),methods:{copy(){navigator.clipboard.writeText(this.item.clipboard),this.animate=!0}}},C={class:"status"};function v(a,e,t,b,y,s){const n=l("Generic");return d(),m(n,{item:t.item},{indicator:_(()=>[o("div",C,[o("i",{class:f(["fa-regular fa-copy fa-xl",{scale:a.animate}]),onClick:e[0]||(e[0]=i=>s.copy()),onAnimationend:e[1]||(e[1]=i=>a.animate=!1)},null,34)])]),_:1},8,["item"])}const T=c(u,[["render",v],["__scopeId","data-v-48b1d4c0"]]);export{T as default};
