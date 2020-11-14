(this["webpackJsonpsystems-modelling"]=this["webpackJsonpsystems-modelling"]||[]).push([[0],{10:function(e,t,a){e.exports=a(26)},15:function(e,t,a){},24:function(e,t,a){},26:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(7),l=a.n(c),o=a(1),i=(a(15),a(3)),u=a(8),m=a.n(u),s=function(e){var t=e.id,a=e.value,c=e.saveAction,l=e.placeholder,i=Object(n.useState)(!1),u=Object(o.a)(i,2),m=u[0],s=u[1];return r.a.createElement("div",{className:"field",onClick:function(){return s(!0)},onBlur:function(e){return""===e.target.value?s(!1):null}},r.a.createElement("input",{id:t,type:"text",value:a,onChange:function(e){e.stopPropagation();var t=e.target.value;c(t)}}),r.a.createElement("label",{className:m?"active-label":"",htmlFor:t},l))},d=function(e){var t=e.setCharts,a=Object(n.useState)(""),c=Object(o.a)(a,2),l=c[0],u=c[1],d=Object(n.useState)(""),h=Object(o.a)(d,2),f=h[0],p=h[1],v=Object(n.useState)(""),b=Object(o.a)(v,2),E=b[0],g=b[1],O=Object(n.useState)(""),j=Object(o.a)(O,2),y=j[0],A=j[1];return r.a.createElement("form",{autoComplete:"off",className:"add-chart-wrapper",onSubmit:function(e){e.preventDefault();var a={id:m.a.generate(),a:+l,b:+f,length:+E,variation:+y};t((function(e){return[].concat(Object(i.a)(e),[a])}))}},r.a.createElement("h4",null,"Type parameters of ideal function"),r.a.createElement("div",{className:"parameters-wrapper"},r.a.createElement(s,{id:"a_param",value:l,saveAction:u,placeholder:"Parameter a"}),r.a.createElement(s,{id:"b_param",value:f,saveAction:p,placeholder:"Parameter b"})),r.a.createElement("h4",null,"Parameters of generated input and output arrays"),r.a.createElement("div",{className:"parameters-wrapper"},r.a.createElement(s,{id:"n_param",value:E,saveAction:g,placeholder:"Array length"}),r.a.createElement(s,{id:"variation",value:y,saveAction:A,placeholder:"Variation"})),r.a.createElement("button",{className:"button"},"Add chart"))},h=(a(24),a(9)),f=a.n(h);function p(e){return e.reduce((function(e,t){return e+t}),0)}function v(e,t){return e.map((function(e){return a=e-t,n=e+t,Math.floor(Math.random()*(n-a))+a;var a,n}))}function b(e,t){return(e.length*p(function(e,t){for(var a=[],n=0;n<e.length;n++)a.push(e[n]*t[n]);return a}(e,t))-p(e)*p(t))/(e.length*p(function(e){for(var t=[],a=0;a<e.length;a++)t.push(Math.pow(e[a],2));return t}(e))-Math.pow(p(e),2))}function E(e,t){var a=b(e,t),n=function(e,t,a){return(p(t)-a*p(e))/e.length}(e,t,a);return{modelAParam:Number(a.toFixed(3)),modelBParam:Number(n.toFixed(3))}}function g(e,t,a,n){var r=function(e){for(var t=[],a=0;a<e;a++)t.push(a+1);return t}(a),c=function(e,t,a){for(var n,r=[],c=0;c<e.length;c++)r.push((n=e[c],t*n+a));return r}(r,e,t),l=v(c,n),o=function(e,t){for(var a=[],n=0;n<e.length;n++)a.push(Math.pow(e[n]-t[n],2));return Number((p(a)/e.length).toFixed(3))}(c,l),i=E(r,l);return{UArray:r,modelYArray:l,modelAParam:i.modelAParam,modelBParam:i.modelBParam,identificationQuality:o}}var O=function(e){var t=e.id,a=e.a,c=e.b,l=e.length,u=e.variation,m=e.setCharts,s=t&&"chart".concat(t),d=Object(n.useState)([]),h=Object(o.a)(d,2),p=h[0],v=h[1],b=Object(n.useState)([]),E=Object(o.a)(b,2),O=E[0],j=E[1],y=Object(n.useState)({}),A=Object(o.a)(y,2),P=A[0],N=A[1];Object(n.useEffect)((function(){var e=g(a,c,l,u),t=e.UArray,n=e.modelYArray,r=e.modelAParam,o=e.modelBParam,i=e.identificationQuality;v(t),j(n),N({modelAParam:r,modelBParam:o,identificationQuality:i})}),[a,c,l,u]),Object(n.useEffect)((function(){if(p.length&&O.length&&Object.keys(P).length){var e=P.modelAParam+P.modelBParam,t=P.modelAParam*l+P.modelBParam;f.a.generate({bindto:"#".concat(s),size:{width:400},data:{xs:{output:"input",lineOutput:"lineInput"},columns:[["input"].concat(Object(i.a)(p)),["output"].concat(Object(i.a)(O)),["lineInput",p[0],p[p.length-1]],["lineOutput",e,t]],type:"scatter",types:{lineOutput:"line"}},legend:{show:!1}})}}),[s,p,O,l,P]);return r.a.createElement("div",null,r.a.createElement("div",{id:s,style:{width:"100%",height:"90%"}}),r.a.createElement("h3",{className:"chart-legend"},Object.keys(P).length?"Len: ".concat(l,", Var: ").concat(u,",  A: ").concat(P.modelAParam,",  B: ").concat(P.modelBParam,",  Q: ").concat(P.identificationQuality," "):null,r.a.createElement("span",{className:"remove-chart",onClick:function(){return m((function(e){return e.filter((function(e){return e.id!==t}))}))}},"Remove chart")))},j=function(e){var t=e.charts,a=e.setCharts;return r.a.createElement("div",{className:"charts-grid"},t.map((function(e){return r.a.createElement(O,Object.assign({key:e.id},e,{setCharts:a}))})))};var y=function(){var e=Object(n.useState)([]),t=Object(o.a)(e,2),a=t[0],c=t[1];return r.a.createElement("main",{className:"App"},r.a.createElement("header",{className:"header"},r.a.createElement("h1",null,"Easy tool to analyse process of calculating parameters for linear function")),r.a.createElement("section",{className:"tool-section"},r.a.createElement("div",{className:"add-chart-section"},r.a.createElement(d,{setCharts:c})),r.a.createElement("div",{className:"chart-section"},r.a.createElement(j,{charts:a,setCharts:c}))))};l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(y,null)),document.getElementById("root"))}},[[10,1,2]]]);
//# sourceMappingURL=main.dc174783.chunk.js.map