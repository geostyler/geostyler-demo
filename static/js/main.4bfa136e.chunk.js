(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{1037:function(e,t,a){"use strict";a.r(t);var n=a(1),l=a.n(n),r=a(12),c=a.n(r),s=(a(523),a(485)),o=a(486),m=a(514),u=a(487),i=a(515),d=(a(525),a(92)),p=a(383),E=a(483),g=a(385),h=a(31),S=(a(569),a(570),a(488)),y=a.n(S),v=a(489),f=a.n(v),C=a(197),b=a.n(C),w=a(490),N=a.n(w),R=(a(628),a(117)),L=d.a.Button,k=d.a.Group,D=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(m.a)(this,Object(u.a)(t).call(this,e))).onLangChange=function(e){switch(e.target.value){case"en":h.locale("en"),a.setState({locale:R.locale.en_US});break;case"de":h.locale("de"),a.setState({locale:R.locale.de_DE});break;case"es":h.locale("es"),a.setState({locale:R.locale.es_ES});break;default:h.locale("en"),a.setState({locale:R.locale.en_US})}},a.onRuleRendererChange=function(e){var t=e.target.value;a.setState({ruleRendererType:t})},a.onCompactSwitchChange=function(e){a.setState({compact:e})},a.state={locale:R.locale.en_US,compact:!0,ruleRendererType:"SLD",style:{name:"Demo Style",rules:[{name:"Rule 1",symbolizers:[{kind:"Mark",wellKnownName:"Circle"}]}]}},a}return Object(i.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this,t=this.state,a=t.locale,l=t.style,r=t.data,c=t.compact,s=t.ruleRendererType;return n.createElement(p.a,{locale:a},n.createElement("div",{className:"app"},n.createElement("header",{className:"gs-header"},n.createElement("span",{className:"logo-title"},n.createElement("img",{className:"logo",src:y.a,alt:"logo"}),n.createElement("span",{className:"app-title"},"GeoStyler"))),n.createElement(E.a,{layout:"inline",className:"gs-settings"},n.createElement(E.a.Item,{label:"Language"},n.createElement(k,{className:"language-select",onChange:this.onLangChange,defaultValue:"en"},n.createElement(L,{value:"en"},"EN"),n.createElement(L,{value:"de"},"DE"),n.createElement(L,{value:"es"},"ES"))),n.createElement(E.a.Item,{label:"Compact"},n.createElement(g.a,{checked:c,onChange:this.onCompactSwitchChange})),n.createElement(E.a.Item,{label:"Symbolizer Renderer"},n.createElement(k,{className:"language-select",onChange:this.onRuleRendererChange,value:s},n.createElement(L,{value:"OpenLayers"},"OpenLayers"),n.createElement(L,{value:"SLD"},"SLD"))),n.createElement(E.a.Item,null,n.createElement(R.StyleLoader,{parsers:[b.a],onStyleRead:function(t){e.setState({style:t})}})),n.createElement(E.a.Item,null,n.createElement(R.DataLoader,{parsers:[f.a,N.a],onDataRead:function(t){e.setState({data:t})}}))),n.createElement("div",{className:"main-content"},n.createElement("div",{className:"gui-wrapper"},n.createElement("h2",null,"Graphical Editor"),n.createElement(R.Style,{style:l,data:r,onStyleChange:function(t){e.setState({style:t})},compact:c,ruleRendererType:s,sldRendererProps:{wmsBaseUrl:"https://ows.terrestris.de/geoserver/wms",layer:"terrestris:bundeslaender"}})),n.createElement("div",{className:"editor-wrapper"},n.createElement("h2",null,"Code Editor"),n.createElement(R.CodeEditor,{style:l,parsers:[b.a],defaultParser:b.a,onStyleChange:function(t){e.setState({style:t})},showSaveButton:!0,showCopyButton:!0})))))}}]),t}(n.Component);D.componentName="App";var O=D;c.a.render(l.a.createElement(O,null),document.getElementById("root"))},488:function(e,t,a){e.exports=a.p+"static/media/logo.b2b95d68.svg"},518:function(e,t,a){e.exports=a(1037)},523:function(e,t,a){},581:function(e,t){},583:function(e,t){},628:function(e,t,a){}},[[518,2,1]]]);
//# sourceMappingURL=main.4bfa136e.chunk.js.map