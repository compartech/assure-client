(this["webpackJsonpassure-client"]=this["webpackJsonpassure-client"]||[]).push([[0],{67:function(e,a,t){e.exports=t.p+"static/media/logo-coccinelle.01067895.png"},75:function(e,a,t){e.exports=t(89)},80:function(e,a,t){},88:function(e,a,t){},89:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(8),o=t.n(c),l=(t(80),t(51)),i=t(11),s=t(131),u=t(140),m=t(3),p=t(146),d=t(136),h=t(138),g=t(135),E=t(65),b=t.n(E),f=t(148),v=t(139),y=t(137),w=t(134),k=t(4),x=Object(s.a)((function(e){return{root:{width:"100%"},heading:{fontSize:e.typography.pxToRem(15)},secondaryHeading:{fontSize:e.typography.pxToRem(15),color:e.palette.text.secondary},icon:{verticalAlign:"bottom",height:20,width:20},details:{alignItems:"center"},column:{flexBasis:"33.33%"},helper:{borderLeft:"2px solid ".concat(e.palette.divider),padding:e.spacing(1,2)},link:{color:e.palette.primary.main,textDecoration:"none","&:hover":{textDecoration:"underline"}}}})),O=Object(k.a)({root:{backgroundColor:"rgba(0, 0, 0, .03)",borderBottom:"1px solid rgba(0, 0, 0, .125)",marginBottom:-1,minHeight:60,"&$expanded":{minHeight:60}},content:{"&$expanded":{margin:"12px 0"}},expanded:{}})(w.a);function j(e){var a=x();return r.a.createElement("div",{className:a.root},r.a.createElement(p.a,null,r.a.createElement(O,{expandIcon:r.a.createElement(b.a,null),"aria-controls":"panel1c-content",id:"panel1c-header",className:a.expansionPanelSummary},r.a.createElement("div",{className:a.column},r.a.createElement(g.a,{className:a.heading},e.result.company)),r.a.createElement("div",{className:a.column},r.a.createElement(g.a,{className:a.secondaryHeading},e.result.price))),r.a.createElement(d.a,{className:a.details},r.a.createElement("div",{className:a.column}),r.a.createElement("div",{className:a.column},e.result.insuranceType.map((function(a){return r.a.createElement(f.a,{key:e.result.company+a,label:a,onDelete:function(){}})}))),r.a.createElement("div",{className:Object(m.a)(a.column,a.helper)},r.a.createElement(g.a,{variant:"caption"},e.result.price,r.a.createElement("br",null),r.a.createElement("a",{href:"#secondary-heading-and-columns",className:a.link},"Learn more")))),r.a.createElement(y.a,null),r.a.createElement(h.a,null,r.a.createElement(v.a,{size:"small",color:"primary"},"Select insurance"))))}var N=r.a.createContext({results:[],setResults:function(){},addSearchResult:function(){}}),C=Object(s.a)((function(e){return{root:{flexGrow:1,padding:10}}}));function R(e){var a=C(),t=Object(n.useContext)(N);return r.a.createElement("div",{className:a.root},r.a.createElement(u.a,{container:!0,spacing:1},t.results.map((function(e){return r.a.createElement(u.a,{item:!0,xs:12,key:e.price},r.a.createElement(j,{result:e}))}))))}var A=function(){return r.a.createElement("div",null,r.a.createElement(i.a,{exact:!0,path:"/",component:R}),r.a.createElement(i.a,{exact:!0,path:"/:resultID",component:R}))},I=t(54),S=t.n(I),B=t(71),H=t(66),L=t(25),M=[{company:"SAA",insuranceType:["Automobile","Housing","Person"],price:"20.000"},{company:"AXA",insuranceType:["Automobile","Housing"],price:"50.000"}],T=function(e){var a=Object(n.useState)(M),t=Object(L.a)(a,2),c=t[0],o=t[1];Object(n.useEffect)((function(){}),[]);var l=function(){var e=Object(H.a)(S.a.mark((function e(a){var t;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t={company:a,insuranceType:["Automobile","Housing"],price:"50.000"},o((function(e){return[].concat(Object(B.a)(e),[t])}));case 2:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}();return r.a.createElement(N.Provider,{value:{results:c,setResults:o,addSearchResult:l}},e.children)},z=t(91),P=t(67),D=t.n(P),G=(t(88),t(20)),W=t(7),$=t(142),J=t(143),_=t(90),K=t(141),X=t(147),q=t(144),F=t(69),Q=t.n(F),U=t(58),V=t.n(U),Y=t(55),Z=t.n(Y),ee=t(56),ae=t.n(ee),te=t(57),ne=t.n(te),re=t(70),ce=t.n(re),oe=t(145),le=t(68),ie=t.n(le),se=Object(s.a)((function(e){return{grow:{flexGrow:1},search:Object(G.a)({position:"relative",borderRadius:e.shape.borderRadius,backgroundColor:Object(W.c)(e.palette.common.white,.15),"&:hover":{backgroundColor:Object(W.c)(e.palette.common.white,.25)},marginRight:e.spacing(2),marginLeft:0,width:"100%"},e.breakpoints.up("sm"),{marginLeft:e.spacing(3),width:"auto"}),searchIcon:{padding:e.spacing(0,0),height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"},inputRoot:{color:"inherit"},inputInput:Object(G.a)({padding:e.spacing(1,1,1,0),paddingLeft:"calc(1em + ".concat(e.spacing(4),"px)"),transition:e.transitions.create("width"),width:"100%"},e.breakpoints.up("md"),{width:"20ch"})}}));function ue(){var e=se(),a=Object(n.useState)(""),t=Object(L.a)(a,2),c=t[0],o=t[1],l=Object(n.useContext)(N),i=function(){l.addSearchResult(c)};return r.a.createElement("div",{className:e.search},r.a.createElement("div",{className:e.searchIcon},r.a.createElement(_.a,{onClick:i},r.a.createElement(ie.a,null))),r.a.createElement(oe.a,{placeholder:"My insurance type ?",classes:{root:e.inputRoot,input:e.inputInput},inputProps:{"aria-label":"search"},onKeyPress:function(e){return"Enter"===e.key&&i()},onChange:function(e){return o(e.target.value)}}))}var me=Object(s.a)((function(e){return{grow:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},title:Object(G.a)({display:"none"},e.breakpoints.up("sm"),{display:"block"}),search:Object(G.a)({position:"relative",borderRadius:e.shape.borderRadius,backgroundColor:Object(W.c)(e.palette.common.white,.15),"&:hover":{backgroundColor:Object(W.c)(e.palette.common.white,.25)},marginRight:e.spacing(2),marginLeft:0,width:"100%"},e.breakpoints.up("sm"),{marginLeft:e.spacing(3),width:"auto"}),searchIcon:{padding:e.spacing(0,2),height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"},inputRoot:{color:"inherit"},inputInput:Object(G.a)({padding:e.spacing(1,1,1,0),paddingLeft:"calc(1em + ".concat(e.spacing(4),"px)"),transition:e.transitions.create("width"),width:"100%"},e.breakpoints.up("md"),{width:"20ch"}),sectionDesktop:Object(G.a)({display:"none"},e.breakpoints.up("md"),{display:"flex"}),sectionMobile:Object(G.a)({display:"flex"},e.breakpoints.up("md"),{display:"none"})}}));function pe(){var e=me(),a=r.a.useState(null),t=Object(L.a)(a,2),n=t[0],c=t[1],o=r.a.useState(null),l=Object(L.a)(o,2),i=l[0],s=l[1],u=Boolean(n),m=Boolean(i),p=function(e){c(e.currentTarget)},d=function(){s(null)},h=function(){c(null),d()},E="primary-search-account-menu",b=r.a.createElement(q.a,{anchorEl:n,anchorOrigin:{vertical:"top",horizontal:"right"},id:E,keepMounted:!0,transformOrigin:{vertical:"top",horizontal:"right"},open:u,onClose:h},r.a.createElement(X.a,{onClick:h},"Profile"),r.a.createElement(X.a,{onClick:h},"My account")),f=r.a.createElement(q.a,{anchorEl:i,anchorOrigin:{vertical:"top",horizontal:"right"},id:"primary-search-account-menu-mobile",keepMounted:!0,transformOrigin:{vertical:"top",horizontal:"right"},open:m,onClose:d},r.a.createElement(X.a,null,r.a.createElement(_.a,{"aria-label":"show 4 new mails",color:"inherit"},r.a.createElement(K.a,{badgeContent:0,color:"secondary"},r.a.createElement(Z.a,null))),r.a.createElement("p",null,"Messages")),r.a.createElement(X.a,null,r.a.createElement(_.a,{"aria-label":"show 11 new notifications",color:"inherit"},r.a.createElement(K.a,{badgeContent:0,color:"secondary"},r.a.createElement(ae.a,null))),r.a.createElement("p",null,"Notifications")),r.a.createElement(X.a,null,r.a.createElement(_.a,{"aria-label":"link to github organisation",color:"inherit"},r.a.createElement("a",{className:"App-link",href:"https://github.com/compartech",target:"_blank",rel:"noopener noreferrer"},r.a.createElement(ne.a,null))),r.a.createElement("p",null,"Github")),r.a.createElement(X.a,{onClick:p},r.a.createElement(_.a,{"aria-label":"account of current user","aria-controls":"primary-search-account-menu","aria-haspopup":"true",color:"inherit"},r.a.createElement(V.a,null)),r.a.createElement("p",null,"Profile")));return r.a.createElement("div",{className:e.grow},r.a.createElement($.a,{position:"static"},r.a.createElement(J.a,null,r.a.createElement(_.a,{edge:"start",className:e.menuButton,color:"inherit","aria-label":"open drawer"},r.a.createElement(Q.a,null)),r.a.createElement(g.a,{className:e.title,variant:"h6",noWrap:!0},"Assure"),r.a.createElement(ue,null),r.a.createElement("div",{className:e.grow}),r.a.createElement("div",{className:e.sectionDesktop},r.a.createElement(_.a,{"aria-label":"show 4 new mails",color:"inherit"},r.a.createElement(K.a,{badgeContent:0,color:"secondary"},r.a.createElement(Z.a,null))),r.a.createElement(_.a,{"aria-label":"show 17 new notifications",color:"inherit"},r.a.createElement(K.a,{badgeContent:0,color:"secondary"},r.a.createElement(ae.a,null))),r.a.createElement(_.a,{"aria-label":"link to github organisation",color:"inherit"},r.a.createElement("a",{className:"App-link",href:"https://github.com/compartech",target:"_blank",rel:"noopener noreferrer"},r.a.createElement(ne.a,null))),r.a.createElement(_.a,{edge:"end","aria-label":"account of current user","aria-controls":E,"aria-haspopup":"true",onClick:p,color:"inherit"},r.a.createElement(V.a,null))),r.a.createElement("div",{className:e.sectionMobile},r.a.createElement(_.a,{"aria-label":"show more","aria-controls":"primary-search-account-menu-mobile","aria-haspopup":"true",onClick:function(e){s(e.currentTarget)},color:"inherit"},r.a.createElement(ce.a,null))))),f,b)}var de=Object(s.a)((function(e){return{paper:{padding:e.spacing(1),textAlign:"center",color:e.palette.text.secondary}}}));var he=function(){var e=de();return r.a.createElement("div",{className:"App"},r.a.createElement(T,null,r.a.createElement(pe,null),r.a.createElement("header",{className:"App-header"},r.a.createElement("img",{src:D.a,className:"App-logo",alt:"logo"}),r.a.createElement("p",null,"Insurance comparison for : ",r.a.createElement("code",null," Automobile / Housing / .... ")),r.a.createElement(z.a,{className:e.paper,elevation:3},r.a.createElement(ue,null))),r.a.createElement(l.a,null,r.a.createElement(A,null))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(he,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[75,1,2]]]);
//# sourceMappingURL=main.b53f6fbc.chunk.js.map