import{X as P,Z as h,j as y,bh as D,D as f,bi as S,G as x,H as v,a0 as w,n as m,b4 as B,a1 as I,bj as R}from"./index-0ff0e839.js";import{m as T,u as F,V as g}from"./VOverlay-2cd37316.js";import{V as O}from"./dialog-transition-6eb1d82e.js";const L=P()({name:"VDialog",props:{fullscreen:Boolean,retainFocus:{type:Boolean,default:!0},scrollable:Boolean,...T({origin:"center center",scrollStrategy:"block",transition:{component:O},zIndex:2400})},emits:{"update:modelValue":a=>!0},setup(a,p){let{slots:c}=p;const n=h(a,"modelValue"),{scopeId:V}=F(),t=y();function i(l){var r,s;const e=l.relatedTarget,o=l.target;if(e!==o&&((r=t.value)!=null&&r.contentEl)&&((s=t.value)!=null&&s.globalTop)&&![document,t.value.contentEl].includes(o)&&!t.value.contentEl.contains(o)){const u=R(t.value.contentEl);if(!u.length)return;const d=u[0],E=u[u.length-1];e===d?E.focus():d.focus()}}D&&f(()=>n.value&&a.retainFocus,l=>{l?document.addEventListener("focusin",i):document.removeEventListener("focusin",i)},{immediate:!0}),f(n,async l=>{var e,o;await S(),l?(e=t.value.contentEl)==null||e.focus({preventScroll:!0}):(o=t.value.activatorEl)==null||o.focus({preventScroll:!0})});const b=x(()=>v({"aria-haspopup":"dialog","aria-expanded":String(n.value)},a.activatorProps));return w(()=>{const[l]=g.filterProps(a);return m(g,v({ref:t,class:["v-dialog",{"v-dialog--fullscreen":a.fullscreen,"v-dialog--scrollable":a.scrollable},a.class],style:a.style},l,{modelValue:n.value,"onUpdate:modelValue":e=>n.value=e,"aria-modal":"true",activatorProps:b.value,role:"dialog"},V),{activator:c.activator,default:function(){for(var e=arguments.length,o=new Array(e),r=0;r<e;r++)o[r]=arguments[r];return m(B,{root:!0},{default:()=>{var s;return[(s=c.default)==null?void 0:s.call(c,...o)]}})}})}),I({},t)}});export{L as V};
