import{m as l,d}from"./chunks/style.2bc94258.js";import{h as F,o as g,c as u,z as s,G as p,B as a,b as n,a as r,O as o}from"./chunks/framework.8bc654d7.js";const h=s("h1",{id:"dynamic-examples",tabindex:"-1"},[r("Dynamic Examples "),s("a",{class:"header-anchor",href:"#dynamic-examples","aria-label":'Permalink to "Dynamic Examples"'},"​")],-1),_=s("h2",{id:"dragging",tabindex:"-1"},[r("Dragging "),s("a",{class:"header-anchor",href:"#dragging","aria-label":'Permalink to "Dragging"'},"​")],-1),m=s("p",null,[r("Allowing the user to drag the effect by mouse or touch. This can be done by setting the "),s("code",null,"drag"),r(" prop.")],-1),E={class:"peelWrapper"},v=s("div",{class:"layer"},"Top",-1),f=s("div",{class:"layer"},"Back",-1),q=s("div",{class:"layer"},"Bottom",-1),b=o("",3),T={class:"peelWrapper"},P=s("div",{class:"layer"},"Top",-1),k=s("div",{class:"layer"},"Back",-1),B=s("div",{class:"layer"},"Bottom",-1),x=o("",3),S={class:"peelWrapper"},w=s("div",{class:"layer"},"Top",-1),V=s("div",{class:"layer"},"Back",-1),I=s("div",{class:"layer"},"Bottom",-1),N=o("",3),z={class:"peelWrapper"},R=s("div",{class:"layer"},"Top",-1),W=s("div",{class:"layer"},"Back",-1),O=s("div",{class:"layer"},"Bottom",-1),M=o("",3),H={class:"peelWrapper"},L=s("div",{class:"layer"},"Top",-1),U=s("div",{class:"layer"},"Back",-1),Z=s("div",{class:"layer"},"Bottom",-1),j=o("",3),G={class:"peelWrapper"},J=s("div",{class:"layer"},"Top",-1),K=s("div",{class:"layer"},"Back",-1),Q=s("div",{class:"layer"},"Bottom",-1),X=o("",3),Y={class:"peelWrapper"},$=s("div",{class:"layer"},"Top",-1),ss=s("div",{class:"layer"},"Back",-1),as=s("div",{class:"layer"},"Bottom",-1),ns=o("",3),ls={class:"peelWrapper"},ps=s("div",{class:"layer"},"Top",-1),os=s("div",{class:"layer"},"Back",-1),ts=s("div",{class:"layer"},"Bottom",-1),es=o("",1),ys=JSON.parse('{"title":"Dynamic Examples","description":"","frontmatter":{},"headers":[],"relativePath":"examples/dynamic.md","filePath":"examples/dynamic.md","lastUpdated":1683821505000}'),cs={name:"examples/dynamic.md"},Cs=Object.assign(cs,{setup(Ds){const y=F(),e=F(),c=F();function C({amountClipped:t}){t===1&&y.value.peel.removeEvents()}function A({x:t}){const D=(t-e.value.peel.width)/-e.value.peel.width;e.value.peel.setTimeAlongPath(D)}function i({x:t}){const D=(t-c.value.peel.width)/(-c.value.peel.width*2);c.value.peel.setTimeAlongPath(D)}return(t,D)=>(g(),u("div",null,[h,_,m,s("div",E,[p(n(l),{class:"peelContainer",drag:""},{top:a(()=>[v]),back:a(()=>[f]),bottom:a(()=>[q]),_:1})]),b,s("div",T,[p(n(l),{class:"peelContainer heart",drag:"",options:{path:{d:"M101.260605,31.4241113 C122.403839,-11.2687842 173.108983,1.11145064 183.007355,11.8447551 C237.311569,70.7295532 142.521446,119.347653 101.260608,174.571349 C51.8099036,119.347653 -39.0680406,68.307428 18.4502396,11.8447553 C33.183089,-2.61770866 77.7850024,-11.2687842 101.260605,31.4241113 Z"}},corner:{x:101,y:175}},{top:a(()=>[P]),back:a(()=>[k]),bottom:a(()=>[B]),_:1},8,["options"])]),x,s("div",S,[p(n(l),{class:"peelContainer yellow",drag:"",constraints:[n(d).BOTTOM_LEFT]},{top:a(()=>[w]),back:a(()=>[V]),bottom:a(()=>[I]),_:1},8,["constraints"])]),N,s("div",z,[p(n(l),{class:"peelContainer book",drag:"",mode:"book"},{top:a(()=>[R]),back:a(()=>[W]),bottom:a(()=>[O]),_:1})]),M,s("div",H,[p(n(l),{class:"peelContainer plum",drag:"","fade-threshold":.9},{top:a(()=>[L]),back:a(()=>[U]),bottom:a(()=>[Z]),_:1},8,["fade-threshold"])]),j,s("div",G,[p(n(l),{class:"peelContainer plum",drag:"","fade-threshold":.9,onDrag:C,ref_key:"peel",ref:y},{top:a(()=>[J]),back:a(()=>[K]),bottom:a(()=>[Q]),_:1},8,["fade-threshold"])]),X,s("div",Y,[p(n(l),{class:"peelContainer aqua",onDrag:A,ref_key:"peelPath",ref:e,"peel-path":[200,200,-200,-200]},{top:a(()=>[$]),back:a(()=>[ss]),bottom:a(()=>[as]),_:1},512)]),ns,s("div",ls,[p(n(l),{class:"peelContainer book",onDrag:i,ref_key:"peelPathBez",ref:c,"peel-path":[150,200,50,60,-70,210,-150,200]},{top:a(()=>[ps]),back:a(()=>[os]),bottom:a(()=>[ts]),_:1},512)]),es]))}});export{ys as __pageData,Cs as default};