import{_ as i,o as s,c as n,d as t,t as g,F as l,e as p,r as f,f as h}from"./index-CsHHhLFA.js";const k={props:{image_url:String,title:String,url:String}},x=["href"],v={class:"Card"},C={class:"CardImage"},$=["src"],W={class:"Title_text"};function B(c,r,e,_,a,d){return s(),n("a",{href:e.url,style:{"text-decoration":"none"}},[t("div",v,[t("div",C,[t("img",{src:e.image_url,alt:""},null,8,$)]),t("div",W,g(e.title),1)])],8,x)}const S=i(k,[["render",B]]),j={components:{WorksCard:S},data(){return{items:[{image_url:"Oxojo_dev_thumbnail.png",title:"Oxojo.dev",url:"/works/oxojo_dev"}]}}},y={class:"Cards"};function F(c,r,e,_,a,d){const u=f("WorksCard");return s(),n(l,null,[r[0]||(r[0]=t("h1",{class:"title"},"Works",-1)),t("div",y,[(s(!0),n(l,null,p(a.items,(o,m)=>(s(),h(u,{key:m,image_url:o.image_url,title:o.title,url:o.url},null,8,["image_url","title","url"]))),128))])],64)}const b=i(j,[["render",F]]);export{b as default};
