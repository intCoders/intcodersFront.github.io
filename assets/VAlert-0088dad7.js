import{ak as p,o as m,c as b,F,a as R,n as t,w as j,z as f,p as E,R as g,au as N,X as O,a8 as Z,a9 as G,av as H,b9 as M,aT as X,aa as Y,ba as q,ab as J,ac as K,ad as Q,aN as U,Z as W,G as c,aw as ee,aY as ae,ax as te,bb as le,aZ as ne,al as oe,bc as se,ah as re,aj as ie,ag as ce,ai as ue,b2 as de,b4 as y,H as ve}from"./index-0ff0e839.js";const me={class:"d-flex justify-center flex-wrap gap-3"},ge={__name:"AuthProvider",setup(e){const{global:o}=p(),s=[{icon:"fa-facebook",color:"#4267b2"},{icon:"fa-google",color:"#dd4b39"},{icon:"fa-twitter",color:"#1da1f2"}];return(a,r)=>(m(),b("div",me,[(m(),b(F,null,R(s,l=>t(g,{key:l.icon,icon:"",variant:"tonal",size:"38",color:E(o).name.value==="dark"?l.colorInDark:l.color,class:"rounded"},{default:j(()=>[t(f,{size:"18",icon:l.icon},null,8,["icon"])]),_:2},1032,["color"])),64))]))}},ke="/assets/auth-v2-login-illustration-bordered-dark-a595a9b7.png",he="/assets/auth-v2-login-illustration-bordered-light-47ee3625.png",_e="/assets/auth-v2-login-illustration-dark-0878e8b9.png",Ve="/assets/auth-v2-login-illustration-light-d1fd488d.png";const be=N("v-alert-title"),ye=["success","info","warning","error"],xe=O()({name:"VAlert",props:{border:{type:[Boolean,String],validator:e=>typeof e=="boolean"||["top","end","bottom","start"].includes(e)},borderColor:String,closable:Boolean,closeIcon:{type:Z,default:"$close"},closeLabel:{type:String,default:"$vuetify.close"},icon:{type:[Boolean,String,Function,Object],default:null},modelValue:{type:Boolean,default:!0},prominent:Boolean,title:String,text:String,type:{type:String,validator:e=>ye.includes(e)},...G(),...H(),...M(),...X(),...Y(),...q(),...J(),...K(),...Q(),...U({variant:"flat"})},emits:{"click:close":e=>!0,"update:modelValue":e=>!0},setup(e,o){let{emit:s,slots:a}=o;const r=W(e,"modelValue"),l=c(()=>{if(e.icon!==!1)return e.type?e.icon??`$${e.type}`:e.icon}),k=c(()=>({color:e.color??e.type,variant:e.variant})),{themeClasses:h}=ee(e),{colorClasses:_,colorStyles:V,variantClasses:x}=ae(k),{densityClasses:P}=te(e),{dimensionStyles:C}=le(e),{elevationClasses:L}=ne(e),{locationStyles:S}=oe(e),{positionClasses:B}=se(e),{roundedClasses:I}=re(e),{textColorClasses:T,textColorStyles:D}=ie(ce(e,"borderColor")),{t:w}=ue(),u=c(()=>({"aria-label":w(e.closeLabel),onClick(i){r.value=!1,s("click:close",i)}}));return()=>{const i=!!(a.prepend||l.value),z=!!(a.title||e.title),A=!!(e.text||a.text),$=!!(a.close||e.closable);return r.value&&t(e.tag,{class:["v-alert",e.border&&{"v-alert--border":!!e.border,[`v-alert--border-${e.border===!0?"start":e.border}`]:!0},{"v-alert--prominent":e.prominent},h.value,_.value,P.value,L.value,B.value,I.value,x.value,e.class],style:[V.value,C.value,S.value,e.style],role:"alert"},{default:()=>{var d,v;return[de(!1,"v-alert"),e.border&&t("div",{key:"border",class:["v-alert__border",T.value],style:D.value},null),i&&t("div",{key:"prepend",class:"v-alert__prepend"},[a.prepend?t(y,{key:"prepend-defaults",disabled:!l.value,defaults:{VIcon:{density:e.density,icon:l.value,size:e.prominent?44:28}}},a.prepend):t(f,{key:"prepend-icon",density:e.density,icon:l.value,size:e.prominent?44:28},null)]),t("div",{class:"v-alert__content"},[z&&t(be,{key:"title"},{default:()=>{var n;return[((n=a.title)==null?void 0:n.call(a))??e.title]}}),A&&(((d=a.text)==null?void 0:d.call(a))??e.text),(v=a.default)==null?void 0:v.call(a)]),a.append&&t("div",{key:"append",class:"v-alert__append"},[a.append()]),$&&t("div",{key:"close",class:"v-alert__close"},[a.close?t(y,{key:"close-defaults",defaults:{VBtn:{icon:e.closeIcon,size:"x-small",variant:"text"}}},{default:()=>{var n;return[(n=a.close)==null?void 0:n.call(a,{props:u.value})]}}):t(g,ve({key:"close-btn",icon:e.closeIcon,size:"x-small",variant:"text"},u.value),null)])]}})}}});export{xe as V,ge as _,ke as a,he as b,_e as c,Ve as d};
